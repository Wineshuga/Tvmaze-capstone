const createNewApp = async (item1) => {
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    const endpoint = `${url}apps/`;

    const requestData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            item_id: item1, 
        }),
    };

        const response = await fetch(endpoint, requestData);
        const uniqueId = await response.text(); 
        console.log(uniqueId);
        localStorage.setItem('uniqueId', uniqueId);
}

export default createNewApp;
