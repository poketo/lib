import poketo from '../index';
import adapter from './mangadex';

describe('MangadexAdapter', () => {
  describe('supportsUrl', () => {
    it('returns true for urls like mangadex.org', () => {
      expect(adapter.supportsUrl('http://mangadex.org')).toBe(true);
      expect(adapter.supportsUrl('https://www.mangadex.org')).toBe(true);
    });

    it('returns false for urls that are not mangadex.org', () => {
      expect(adapter.supportsUrl('http://maanna.com')).toBe(false);
      expect(adapter.supportsUrl('http://mangadexx.org')).toBe(false);
    });
  });

  describe('parseUrl', () => {
    it('returns the components of a url', () => {
      expect(adapter.parseUrl('https://mangadex.org/manga/13127')).toEqual({
        seriesSlug: '13127',
        chapterSlug: null,
      });

      expect(adapter.parseUrl('https://mangadex.org/chapter/47721')).toEqual({
        seriesSlug: null,
        chapterSlug: '47721',
      });
    });

    it('throws on unparseable urls', () => {
      expect(() => {
        adapter.parseUrl('https://mangadex.org/about');
      }).toThrow(poketo.InvalidUrlError);
    });
  });
});

describe('MangaDex', () => {
  const server = new AdapterVcrServer(adapter);

  beforeAll(async () => {
    await server.listenAndMock();
  });

  afterAll(() => {
    server.close();
  });

  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await poketo.getSeries(
        'mangadex:13127',
      );

      expect(metadata).toMatchSnapshot();

      const chapterNumbersToTest = ['2', '8'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest).toMatchSnapshot();
    });

    it('works for series with multiple pages', async () => {
      const longSeries = await poketo.getSeries('mangadex:5411');

      expect(longSeries.chapters.length).toBeGreaterThan(100);
    });

    it('only returns the most popular instance of each chapter', async () => {
      const seriesWithMultipleGroups = await poketo.getSeries('mangadex:19729');
      const seriesWithMultipleVolumes = await poketo.getSeries(
        'mangadex:13025',
      );

      const getChapterNumbers = series =>
        series.chapters.map(c => c.chapterNumber);
      const uniq = arr => Array.from(new Set(arr));

      const a = getChapterNumbers(seriesWithMultipleGroups);
      const b = getChapterNumbers(seriesWithMultipleVolumes);

      expect(a).toEqual(uniq(a));
      expect(b).not.toEqual(uniq(b));
    });

    it('does not error for series with no readable chapters', async () => {
      const series = await poketo.getSeries('mangadex:12545');

      expect(series).toMatchObject({
        chapters: [],
      });
    });
  });

  describe('getChapter', () => {
    it('returns a chapter', async () => {
      const chapter = await poketo.getChapter('mangadex:19915:385894');

      expect(chapter.url).toEqual(`${adapter._getHost()}/chapter/385894`);
      expect(chapter.pages).toHaveLength(1);
      expect(chapter.pages[0]).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          url: expect.stringContaining('http'),
        }),
      );
    });
  });
});
