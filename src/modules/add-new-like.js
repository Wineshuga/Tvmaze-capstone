import postLike from './postLike.js';

const updateLike = async (item1) => {
  const likeIcon = document.querySelectorAll('.fa-heart');
  let likes = 0;

  function iconClicked(event) {
    const icon = event.target;
    icon.classList.toggle('active');
    const pElement = icon.parentNode;
    const likeCountElement = pElement.querySelector('.like-count');
    if (icon.className === 'fas fa-heart active') {
      likes += 1;
      likeCountElement.textContent = likes;
    } else if (icon.className === 'fas fa-heart') {
      likes -= 1;
      likeCountElement.textContent = likes;
    }
  }

  postLike(item1, likes);

  likeIcon.forEach((individualIcon) => {
    individualIcon.addEventListener('click', iconClicked);
  });
};

export default updateLike;