import { addComments } from './commentApi.js';
import displayComments from './displayComments.js';

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
  console.log(newComment);
  userName.value = '';
  userMsg.value = '';
  displayComments(formIndex);
};

export default postComments;