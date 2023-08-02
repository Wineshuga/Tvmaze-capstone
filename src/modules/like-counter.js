import uniqueId from './uniqueid.js';

const getLikes = async (likes, event) => {
    const newAppId = await uniqueId();
    const item1Url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${newAppId}/likes`;
    const response = await fetch(item1Url);
    const data = await response.json();
    debugger
    console.log(data.result);
};

export default getLikes;
