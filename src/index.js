import './style.css';
// import Logo from './color-no-bg.png';
import fetchEpisodes from './modules/api.js';
import displayEpisodesData from './modules/displaying-data.js';
import seeMoreBtn from './modules/eventListeners.js';
import createNewApp from './modules/involvementAPI.js';
import postLike from './modules/postLike.js';
import updateLike from './modules/add-new-like';

const uniqueId = async () => {
  if (localStorage.getItem('uniqueId')) {
    return localStorage.getItem('uniqueId');
  }
  const newAppId = await createNewApp();
  return newAppId;
};

const main = async () => {
  const newAppId = await uniqueId();

  const displayData = await fetchEpisodes();
  displayEpisodesData(displayData);
  seeMoreBtn();

  const item1 = localStorage.getItem('uniqueId');
  updateLike();
};

main();

export default uniqueId;

// const headerLogo = document.querySelector('#logo');
// headerLogo.className = 'logo-img';
// headerLogo.src = Logo;