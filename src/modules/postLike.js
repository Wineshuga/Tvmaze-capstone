import uniqueId from './uniqueid.js';

const postLike = async (likes, event) => {
  const newAppId = await uniqueId();
  const item1Url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${newAppId}/likes`;
  const item1 = event.target.children[0].id;
  const requestData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: item1,
      likes,
    }),
  };

  const response = await fetch(item1Url, requestData);
  return response;
};

export default postLike;
