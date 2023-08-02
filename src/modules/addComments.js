import uniqueId from './uniqueid.js';

const addComments = async () => {
  const appId = await uniqueId();
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

  const sendComment = {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: 1,
      username: 'winnie',
      comment: 'hi',
    }),
  };

  const response = await fetch(url, sendComment);
  const commentData = await response.json();
  return commentData;
};

export default addComments;