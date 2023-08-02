import addComments from './commentApi.js';

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
        <h2>Comments (<span>0</span>)</h2>
        <ul>
          <li>03/04/2023 Agneta: This is my favorite episode</li>
          <li>06/04/2023 Winnie: Fantastic!</li>
        </ul>

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

  const form = document.querySelectorAll('.comment-form');
  form.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formIndex = e.target.getAttribute('data-index');
      const userName = document.querySelector('input[type=text]');
      const userMsg = document.querySelector('textarea');
      const newComment = {
        item_id: formIndex,
        username: userName.value,
        comment: userMsg.value,
      };
      addComments(newComment);
      userName.value = '';
      userMsg.value = '';
      console.log(newComment);
    });
  });
};

export default popup;