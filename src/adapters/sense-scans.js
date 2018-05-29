// @flow

import makeFoolSlideAdapter from './shared/fool-slide';

const SenseScansAdapter = makeFoolSlideAdapter({
  id: 'sense-scans',
  name: 'Sense Scans',
  domain: 'https://sensescans.com/',
  foolSlidePath: '/reader/',
});

export default SenseScansAdapter;
