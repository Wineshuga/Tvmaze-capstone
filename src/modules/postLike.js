const postLike = async (newAppId, item1) => {
  const likesUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${newAppId}/likes`;
  let likesClass = document.querySelectorAll('.episodes-div > p');
  let likes = likesClass[0].textContent;
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

  const response = await fetch(likesUrl, requestData);
  console.log(response);
  const responseData = await response.json();
  console.log('Response:', responseData);
};

export default postLike;
