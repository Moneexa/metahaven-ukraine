import axios from 'axios';
import { generateAuthorizationHeader } from "./headers"
import { makeGetRequest } from './get-streams';
import { AssignStreamMachineApiBody } from './myTypes';
export async function startStreams() {

    const params = await makeGetRequest();
    if (!params) {
        return { 'msg': 'error' }
    }
    const reqBody: AssignStreamMachineApiBody = {
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

