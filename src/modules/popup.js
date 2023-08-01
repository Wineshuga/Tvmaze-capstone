const popup = (indx, episodeData) => {
  const popupContainer = document.querySelector('.popup--hide');
  episodeData.forEach((episode, index) => {
    if (index === indx) {
      popupContainer.innerHTML = `
      <i class="fa-solid fa-xmark close-icon"></i>
      <img src=${episode.image.original} alt=${episode.name}>
      <h3>${episode.name}</h3>
      <p>${episode.summary}</p>
      <p>No. of Seasons: ${episode.season}</p>
      <p>Rating: ${episode.rating.average}</p>
    `;
    }
  });
  popupContainer.className = 'popup';
  const mainContainer = document.querySelector('#main-container');
  mainContainer.appendChild(popupContainer);

  const closeIcon = document.querySelector('.close-icon');
  closeIcon.addEventListener('click', () => {
    popupContainer.innerHTML = '';
    popupContainer.className = 'popup--hide';
  });
};

export default popup;