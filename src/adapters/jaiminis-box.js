// @flow

import cheerio from 'cheerio';
import moment from 'moment-timezone';
import errors from '../errors';
import utils, { invariant } from '../utils';

import type { ChapterMetadata, Page, SiteAdapter } from '../types';

const TZ = 'America/Los_Angeles';

const getTimestamp = rawText => {
  const text = rawText.toLowerCase();

  if (text === 'today') {
    return moment
      .tz(TZ)
      .endOf('day')
      .unix();
  } else if (text === 'yesterday') {
    return moment
      .tz(TZ)
      .subtract(1, 'day')
      .endOf('day')
      .unix();
  }

  return moment.tz(text, 'YYYY.MM.DD', TZ).unix();
};

// NOTE: Jaimini's Box uses FoolSlide (same as Helvetica Scans), so there's
// likely a bunch of code-sharing opportunities here.

// Series URLs
// https://jaiminisbox.com/reader/series/my-hero-academia
// https://jaiminisbox.com/reader/series/itoshi-no-muco/
// Reader URLs
// https://jaiminisbox.com/reader/read/my-hero-academia/en/0/177/page/1
// https://jaiminisbox.com/reader/read/itoshi-no-muco/en/0/4/

const JaiminisBoxAdapter: SiteAdapter = {
  id: 'jaiminis-box',
  name: 'Jaimini’s Box',

  supportsUrl(url) {
    return utils.compareDomain(url, 'https://jaiminisbox.com/');
  },

  supportsReading() {
    return true;
  },

  parseUrl(url) {
    const matches = utils.pathMatch(
      url,
      '/reader/:type(read|series)/:seriesSlug/:chapterSlug([a-z]{2}/.+)?',
    );

    invariant(matches, new errors.InvalidUrlError(url));
    invariant(matches.seriesSlug, new errors.InvalidUrlError(url));

    const seriesSlug = matches.seriesSlug;
    const chapterSlug =
      matches.type === 'read'
        ? matches.chapterSlug.split('/page/').shift()
        : null;

    return { seriesSlug, chapterSlug };
  },

  constructUrl(seriesSlug, chapterSlug) {
    const isChapter = chapterSlug !== null && chapterSlug !== undefined;

    const parts = [
      'https://jaiminisbox.com/reader',
      isChapter ? 'read' : 'series',
      seriesSlug,
    ];

    if (isChapter) {
      parts.push(chapterSlug);
      parts.push('page/1');
    }

    return utils.normalizeUrl(parts.join('/'));
  },

  async getSeries(seriesSlug) {
    const url = this.constructUrl(seriesSlug);

    // NOTE: Jaimini's Box disabled FoolSlide's API so we have to scrape the
    // old-fashioned way.
    const html = await utils.getPage(url);
    const dom = cheerio.load(html);

    const title = dom('h1.title', '#content .comic.info')
      .text()
      .trim();
    const chapterNodes = dom('.element', '#content .list .group');
    const chapters: ChapterMetadata[] = chapterNodes.get().map(el => {
      const node = dom(el);

      const url = node.find('.title a').attr('href');
      const slug = this.parseUrl(url).chapterSlug.replace(/\/$/, '');
      const number = slug.split('/')[2];
      const createdAtRawText = node
        .find('.meta_r')
        .text()
        .trim();
      const createdAtParsedText = utils.extractText(
        /, ([\d\.]+|\w+)/,
        createdAtRawText,
      );
      const createdAt = getTimestamp(createdAtParsedText);

      return { url, slug, number, createdAt };
    });
    const updatedAt = 0;

    return { slug: seriesSlug, url, title, chapters };
  },

  async getChapter(seriesSlug, chapterSlug) {
    const url = this.constructUrl(seriesSlug, chapterSlug);
    const html = await utils.getPage(url);

    const encodedBlob = utils.extractText(
      /var\s+pages\s+=\s+JSON\.parse\(atob\((.+)\)\);/,
      html,
    );
    const decodedBlob = new Buffer(encodedBlob, 'base64');
    const json = JSON.parse(decodedBlob.toString());

    const pages: Page[] = json.map(image => ({
      id: image.id,
      width: Number(image.width),
      height: Number(image.height),
      url: image.url,
    }));

    return { slug: chapterSlug, url, pages };
  },
};

export default JaiminisBoxAdapter;
