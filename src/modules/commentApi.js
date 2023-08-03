import uniqueId from './uniqueid.js';

const addComments = async (newComment) => {
  const appId = await uniqueId();
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newComment),
  });
  console.log(response);
};

const getComments = async (itemId) => {
  const appId = await uniqueId();
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${itemId}`;

  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  return result;
};

export { addComments, getComments };