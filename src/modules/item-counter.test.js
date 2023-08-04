import itemCounter from './item-counter.js';
import fetchEpisodes from './api.js';

const { JSDOM } = require('jsdom');

jest.mock('./api.js', () => ({
  __esModule: true,
  default: jest.fn(),
}));

beforeEach(() => {
  const dom = new JSDOM();
  global.document = dom.window.document;
});

test('Update item count in the DOM', async () => {
  fetchEpisodes.mockResolvedValue([{}, {}, {}]);

  document.body.innerHTML = '<div id="top-series-counter"></div>';

  await itemCounter();

  const headerCountElement = document.getElementById('top-series-counter');
  expect(headerCountElement.innerHTML).toBe('3');
});

test('Handle empty episode array', async () => {
  fetchEpisodes.mockResolvedValue([]);

  document.body.innerHTML = '<div id="top-series-counter"></div>';

  await itemCounter();

  const headerCountElement = document.getElementById('top-series-counter');
  expect(headerCountElement.innerHTML).toBe('0');
});
