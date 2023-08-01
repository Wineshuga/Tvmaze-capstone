import postLike from './postLike.js';

const updateLike = async (likes, item1) => {
  const likeIcon = document.querySelectorAll('.fa-heart');

  function iconClicked(event) {
    const icon = event.target;
    icon.style.color = 'red';
  }

  likeIcon.forEach((individualIcon) => {
    individualIcon.addEventListener('click', iconClicked);
  });
};
