import postLike from './postLike.js';

const updateLike = async (event) => {

  
    const icon = event.target;
    const pElement = icon.parentNode;
    const likeCountElement = pElement.querySelector('.like-count');
    let likes = parseInt(icon.children[0].innerHTML, 10);

    postLike(likes, event);

    icon.classList.toggle('active');

    if (icon.classList.contains('active')) {
      likes += 1;
    } else {
      likes -= 1;
    }

    icon.dataset.likes = likes;
    likeCountElement.textContent = likes;
  

};

export default updateLike;