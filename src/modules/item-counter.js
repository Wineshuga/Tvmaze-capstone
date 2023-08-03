import fetchEpisodes from './api.js';

const itemCounter = async () => {
  const episodeArray = await fetchEpisodes();
  console.log(episodeArray.length);

  const headerCount = document.getElementById('top-series-counter');
  headerCount.innerHTML = episodeArray.length;
};

export default itemCounter;