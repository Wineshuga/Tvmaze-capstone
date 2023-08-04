import { addComments } from './commentApi.js';
import displayComments from './displayComments.js';
import commentsCounter from './commentsCounter.js';

const postComments = async (e) => {
  const formIndex = e.target.getAttribute('data-index');
  const userName = document.querySelector('input[type=text]');
  const userMsg = document.querySelector('textarea');
  const newComment = {
    item_id: formIndex,
    username: userName.value,
    comment: userMsg.value,
  };

  await addComments(newComment);
  userName.value = '';
  userMsg.value = '';
  displayComments(formIndex);
  e.target.parentNode.children[0].children.innerHTML = commentsCounter(formIndex) + 1;
};

export default postComments;