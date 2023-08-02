import uniqueId from "..";

const postLike = async (likes, event) => {
    const newAppId = await uniqueId();
  const item1Url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${newAppId}/likes`;  
  const item1 = event.target.parentElement.className;
  const requestData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: item1,
      likes: likes,
    }),
  };

    const response = await fetch(item1Url, requestData);
    console.log (response);

};

export default postLike;
