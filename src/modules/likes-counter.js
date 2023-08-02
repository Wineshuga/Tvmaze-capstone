import getLikes from './likes-fetch.js';

const displayHearts = async () => {
  const likesArray = await getLikes();
  likesArray.forEach((element) => {
    const span = document.getElementById(element.id);
    if (span) {
      span.innerHTML = element.likes;
    }
  });
};

export default displayHearts;