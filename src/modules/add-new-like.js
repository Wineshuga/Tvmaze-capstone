import postLike from './postLike.js';

const updateLike = async ( item1) => {
  const likeIcon = document.querySelectorAll('.fa-heart');
  let likes = 0;


  function iconClicked(event) {
    const icon = event.target;
    icon.classList.toggle('active');
    let pElement = icon.parentNode;
    const likeCountElement = pElement.querySelector('.like-count');
    if (icon.className === 'fas fa-heart active'){
    likes++;
    likeCountElement.textContent = likes;
    } else if (icon.className === 'fas fa-heart'){
        likes--;
        likeCountElement.textContent = likes;

    }
  }

  likeIcon.forEach((individualIcon) => {
    individualIcon.addEventListener('click', iconClicked);
  });
};

export default updateLike;