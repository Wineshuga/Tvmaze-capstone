import createNewApp from './involvementAPI.js';

const uniqueId = async () => {
  if (localStorage.getItem('uniqueId')) {
    return localStorage.getItem('uniqueId');
  } else {
  const newAppId = await createNewApp();
  return newAppId;
  }
};

export default uniqueId;
