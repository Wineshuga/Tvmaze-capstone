import './style.css';
// import Logo from './color-no-bg.png';
import fetchEpisodes from './modules/api.js';
import displayEpisodesData from './modules/displaying-data.js';
import seeMoreBtn from './modules/eventListeners.js';

(async () => {
  const displayData = await fetchEpisodes();
  displayEpisodesData(displayData);
  seeMoreBtn();
})();

// const headerLogo = document.querySelector('#logo');
// headerLogo.className = 'logo-img';
// headerLogo.src = Logo;