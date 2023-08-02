import postLike from './postLike.js';

const updateLike = async () => {
    const likeIcon = document.querySelectorAll('.fa-heart');
    let likes = 0;

    function iconClicked(event) {
        const icon = event.target;
        postLike(likes, event);
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


    likeIcon.forEach((individualIcon) => {
        individualIcon.addEventListener('click', (event) => {
            iconClicked(event);
        });
    });
};

export default updateLike;