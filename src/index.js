import './style.css';
import image from './color-no-bg.png';
import fetchEpisodes from './modules/api.js';
import displayEpisodesData from './modules/displaying-data.js';
import seeMoreBtn from './modules/eventListeners.js';
import updateLike from './modules/add-new-like.js';
import getLikes from './modules/likes-fetch.js';
import displayHearts from './modules/likes-counter.js';
import itemCounter from './modules/item-counter';

const main = async () => {
  const displayData = await fetchEpisodes();
  displayEpisodesData(displayData);
  seeMoreBtn();
  updateLike();
  getLikes();
  displayHearts();
  itemCounter();
};

main();

const headerLogo = document.querySelector('#logo');
headerLogo.src = image;
