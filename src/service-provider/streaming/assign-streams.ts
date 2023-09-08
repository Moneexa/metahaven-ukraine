import axios from 'axios';
import { generateAuthorizationHeader } from "./headers"
import { makeGetRequest } from './get-streams';
import { AssignStreamMachineApiBody } from './myTypes';
import { startStreams } from './start-stream';
export async function assignStreams() {

    const params = await makeGetRequest();
    if (!params) {
        return { 'msg': 'error' }
    }
    const resp = await startStreams();
    console.log(resp)
    const reqBody: AssignStreamMachineApiBody = {
        region: params?.region,
        user_id: ""
    }

    const url = `https://api.vagon.io/app-stream-management/v2/streams/${params?.streamId}/assign-machine`;
    const headers = {
        "Content-Type": "application/json",
        Authorization: generateAuthorizationHeader('POST', `/app-stream-management/v2/streams/${params?.streamId}/assign-machine`, JSON.stringify(reqBody)),
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

