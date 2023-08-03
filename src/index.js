import './style.css';
import image from './color-no-bg.png';
import fetchEpisodes from './modules/api.js';
import displayEpisodesData from './modules/displaying-data.js';
import seeMoreBtn from './modules/eventListeners.js';
import updateLike from './modules/add-new-like.js';
import displayHearts from './modules/likes-counter.js';
import itemCounter from './modules/item-counter.js';

const main = async () => {
  const displayData = await fetchEpisodes();
  displayEpisodesData(displayData);
  seeMoreBtn();
  displayHearts();
  itemCounter();

  const likeIcons = document.querySelectorAll('.fa-heart');
  likeIcons.forEach((individualIcon) => {
    individualIcon.addEventListener('click', (event) => {
      updateLike(event);
    });
  });
};

main();

const headerLogo = document.querySelector('#logo');
headerLogo.src = image;
