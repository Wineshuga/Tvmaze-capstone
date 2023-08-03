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
  return response;
};

const getComments = async (itemId) => {
  const appId = await uniqueId();
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${itemId}`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof TypeError && error.message === "'item_id' not found.") {
      return [];
    }
    throw error;
  }
};

export { addComments, getComments };