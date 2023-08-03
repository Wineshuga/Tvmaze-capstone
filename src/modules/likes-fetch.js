import uniqueId from './uniqueid.js';

const getLikes = async () => {
  const newAppId = await uniqueId();
  const item1Url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${newAppId}/likes`;
  const response = await fetch(item1Url);
try{
  const data = await response.json();
  const likesAndIdsArray = data.map((element) => ({
    id: element.item_id,
    likes: element.likes,
  }));

  return likesAndIdsArray;
}
catch(error) {
console.log(error)
}
}


export default getLikes;
