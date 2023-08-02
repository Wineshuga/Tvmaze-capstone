import './style.css';
// import Logo from './color-no-bg.png';
import fetchEpisodes from './modules/api.js';
import displayEpisodesData from './modules/displaying-data.js';
import seeMoreBtn from './modules/eventListeners.js';
import updateLike from './modules/add-new-like.js';
import getLikes from './modules/likes-fetch.js';
import displayHearts from './modules/likes-counter.js';

const main = async () => {
  const displayData = await fetchEpisodes();
  displayEpisodesData(displayData);
  seeMoreBtn();
  updateLike();
  getLikes();
  displayHearts();
};

main();

// const headerLogo = document.querySelector('#logo');
// headerLogo.className = 'logo-img';
// headerLogo.src = Logo;
