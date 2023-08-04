import commentsCounter from './commentsCounter.js';
import displayComments from './displayComments.js';
import postComments from './postComments.js';

const popup = (indx, episodeData) => {
  const popupContainer = document.querySelector('.popup--hide');
  episodeData.forEach((episode, index) => {
    if (index === indx) {
      popupContainer.innerHTML = `
      <i class="fa-solid fa-xmark close-icon"></i>
      <div>
        <img src=${episode.image.original} alt=${episode.name}>
        <h2>${episode.name}</h2>
        <p><strong>Summary</strong>: ${episode.summary}</p>
        <ul>
          <li><strong>No. of Seasons</strong>: ${episode.season}</li>
          <li><strong>Rating</strong>: ${episode.rating.average}</li>
        </ul>
        <section class='comment-box'>
        <h2>Comments (<span class='comment-counter'>0</span>)</h2>
        <section class='comment-section'>
        </section>

        <h2>Add a Comment</h2>
        <form data-index=${index} class='comment-form'>
          <input type='text' name='name' id='name' placeholder='Your name' required>
          <textarea col=30 rows='10' name='insights' placeholder='Your insights' required></textarea>
          <input type='submit' value='Comment'>
        </form>
      </section>
      </div>
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

  displayComments(indx);
  commentsCounter(indx);

  const form = document.querySelectorAll('.comment-form');
  form.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      postComments(e);
    });
  });
};

export default popup;