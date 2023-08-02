import postLike from './postLike.js';

const updateLike = async () => {
    const likeIcons = document.querySelectorAll('.fa-heart');

    function iconClicked(event) {
        const icon = event.target;
        const pElement = icon.parentNode;
        const likeCountElement = pElement.querySelector('.like-count');

        let likes = parseInt(icon.dataset.likes);

        postLike(likes, event);

        icon.classList.toggle('active');

        if (icon.classList.contains('active')) {
            likes += 1;
        } else {
            likes -= 1;
        }

        icon.dataset.likes = likes;
        likeCountElement.textContent = likes;
    }

    likeIcons.forEach((individualIcon) => {
        individualIcon.addEventListener('click', (event) => {
            iconClicked(event);
        });
    });
};

export default updateLike;