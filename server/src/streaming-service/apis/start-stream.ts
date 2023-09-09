const axios = require('axios');
const generateAuthorizationHeader = require("../headers.ts")
const makeGetRequest = require('./get-streams');
const AssignStreamMachineApiBody = require('../myTypes');
async function startStreams() {

    const params = await makeGetRequest();
    if (!params) {
        return { 'msg': 'error' }
    }
    const reqBody = {
        region: params?.region,
    }

    const url = `https://api.vagon.io/app-stream-management/v2/streams/${params?.streamId}/start-machine`;
    const headers = {
        "Content-Type": "application/json",
        Authorization: generateAuthorizationHeader('POST', `/app-stream-management/v2/streams/${params?.streamId}/start-machine`, JSON.stringify(reqBody)),
    };

    try {
        const response = await axios.post(url, reqBody, { headers });
        if (response) {
            const respData = response?.data;
            return respData;
            console.log('Response:', response.data);

        }
    } catch (error) {
        console.error('Error:', error);
    }
}

