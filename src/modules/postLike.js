import uniqueId from "..";

const postLike = async (likes, event) => {
    const newAppId = await uniqueId();
  const item1Url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${newAppId}/likes`;
  const item1Class = document.querySelectorAll('.episodes-div > p');

  
  const item1 = event.target.parentElement.clasName;
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
  console.log(response);
  const responseData = await response.json();
  console.log('Response:', responseData);
};

export default postLike;
