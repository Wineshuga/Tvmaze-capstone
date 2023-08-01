import './style.css';
import fetchEpisodes from './modules/api.js';
import displayEpisodesData from './modules/displaying-data.js';
import seeMoreBtn from './modules/eventListeners.js';
import createNewApp from './modules/involvementAPI.js';
import postLike from './modules/postLike.js';

const likes = 5;

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

  postLike(newAppId, item1, likes);
};

main();

export default uniqueId;
