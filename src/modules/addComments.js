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

export default addComments;