import axios from 'axios';
import { generateNonce } from './header/generate-nonce'
import { calculateHMAC } from './header/hmac-calculate'
import { makeGetRequest } from './get-streams';
import { AssignStreamMachineApiBody } from '../myTypes';


function generateAuthorizationHeader(requestType: string, payloadString: string, requestBody?: string) {
    const apiKey = process.env.API_KEY
    const nonce = generateNonce();
    const timestamp = Date.now().toString();
    const payload = `${apiKey}${requestType}${payloadString}${timestamp}${nonce}${requestBody || ""}`;
    const signature = calculateHMAC(payload);
    return `HMAC ${apiKey}:${signature}:${nonce}:${timestamp}`;
}



export async function assignStreams() {

    const params = await makeGetRequest();
    if (!params) {
        return { 'msg': 'error' }
    }
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
        //@ts-ignore
        console.error('Error:', error?.message);
    }
}

