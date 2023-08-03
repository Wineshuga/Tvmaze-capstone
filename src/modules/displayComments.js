import { getComments } from './commentApi.js';

const displayComments = (formIndex) => {
  getComments(formIndex).then((data) => {
    if (data.length > 0) {
      const commentData = data;
      console.log(commentData);
      const ul = document.createElement('ul');
      ul.className = '.comment-list';
      commentData.forEach((data) => {
        console.log(data);
        ul.innerHTML += `
          <li>${data.creation_date} ${data.username}: ${data.comment}</li>
        `;
      });
      const commentSec = document.querySelector('.comment-section');
      commentSec.innerHTML = '';
      commentSec.appendChild(ul);
    } else {
      const ul = document.createElement('ul');
      ul.innerHTML += `
        <li>No Comments</li>
      `;
      const commentSec = document.querySelector('.comment-section');
      commentSec.appendChild(ul);
    }
  });
};

export default displayComments;