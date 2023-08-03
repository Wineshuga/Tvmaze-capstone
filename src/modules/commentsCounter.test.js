import commentsCounter from './commentsCounter.js';
import { getComments } from './commentApi.js';

const { JSDOM } = require('jsdom');

jest.mock('./commentApi.js', () => ({
  getComments: jest.fn(),
}));

beforeEach(() => {
  const dom = new JSDOM();
  global.document = dom.window.document;
});

test('Update comment count in the DOM', async () => {
  getComments.mockResolvedValue([{}, {}, {}]);

  document.body.innerHTML = '<h2>Comments (<span class="comment-counter">0</span>)</h2>';

  await commentsCounter();

  const commentCountElement = document.querySelector('.comment-counter');
  expect(commentCountElement.innerHTML).toBe('3');
});

test('Handle empty comment array', async () => {
  getComments.mockResolvedValue([]);

  document.body.innerHTML = '<h2>Comments (<span class="comment-counter">0</span>)</h2>';

  await commentsCounter();

  const commentCountElement = document.querySelector('.comment-counter');
  expect(commentCountElement.innerHTML).toBe('0');
});