import popup from './popup.js';

export default function displayEpisodesData(displayData) {
  const episodesSection = document.getElementById('main-container');

  displayData.forEach((individualEpisode, index) => {
    const div = document.createElement('div');
    div.className = 'episodes-div';

    if (index >= 6) {
      div.classList.add('hidden');
    }

    const imageElement = document.createElement('img');
    imageElement.src = individualEpisode.image.medium;
    imageElement.alt = individualEpisode.name;

    const pElement = document.createElement('p');
    pElement.innerHTML = `${individualEpisode.name} <i class="fas fa-heart" data-likes="0"><span id = '${individualEpisode.id}'class="like-count">0</span></i>`;
    const commentsBtn = document.createElement('button');
    commentsBtn.className = 'comments';
    commentsBtn.innerHTML = 'Comments';

    div.appendChild(imageElement);
    div.appendChild(pElement);
    div.appendChild(commentsBtn);

    episodesSection.appendChild(div);
  });

  const seeMore = document.createElement('button');
  seeMore.id = 'see-more';
  seeMore.innerHTML = 'SEE MORE';
  episodesSection.appendChild(seeMore);

  const commentsBtn = document.querySelectorAll('.comments');
  const popupContainer = document.createElement('section');
  popupContainer.className = 'popup--hide';
  episodesSection.appendChild(popupContainer);

  commentsBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
      popup(index, displayData);
    });
  });
}
