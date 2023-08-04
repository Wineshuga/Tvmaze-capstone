import createNewApp from './involvementAPI.js';

const uniqueId = async () => {
  if (localStorage.getItem('uniqueId')) {
    return localStorage.getItem('uniqueId');
  }
  const newAppId = await createNewApp();
  return newAppId;
};

export default uniqueId;
