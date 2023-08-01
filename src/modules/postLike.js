const postLike = async (newAppId, item1) => {
  const likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${newAppId}/likes`;
  const likesClass = document.querySelectorAll('.episodes-div > p');
  const likes = likesClass[0].textContent;
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

  const response = await fetch(likesUrl, requestData);
  console.log(response);
  const responseData = await response.json();
  console.log('Response:', responseData);
};

export default postLike;
