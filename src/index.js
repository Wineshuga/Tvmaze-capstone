import './style.css';
import fetchEpisodes from './modules/api.js';
import { displayEpisodesData } from './modules/displaying-data.js';
import { seeMoreBtn } from './modules/eventListeners.js';

(async () => {
    const displayData = await fetchEpisodes();
    displayEpisodesData(displayData);
    seeMoreBtn();
})();

