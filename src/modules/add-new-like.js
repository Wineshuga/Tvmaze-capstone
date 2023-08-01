const postLike = async () => {
    const likeIcon = document.querySelectorAll('.fa-heart');

    function iconClicked(event) {
        let icon = event.target;
        icon.style.color = 'red';
    }

    likeIcon.forEach(individualIcon => {
        individualIcon.addEventListener('click', iconClicked);
    });
};
