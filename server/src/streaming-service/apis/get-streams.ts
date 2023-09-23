import { generateNonce } from './header/generate-nonce'
import { calculateHMAC } from './header/hmac-calculate'
import { API_KEY, APP_ID } from "../../configs"
import axios from 'axios'

function generateAuthorizationHeader(requestType: string, payloadString: string, requestBody?: string) {
    const apiKey = API_KEY

    const nonce = generateNonce();
    const timestamp = Date.now().toString();
    const payload = `${apiKey}${requestType}${payloadString}${timestamp}${nonce}${requestBody || ""}`;
    const signature = calculateHMAC(payload);
    return `HMAC ${apiKey}:${signature}:${nonce}:${timestamp}`;
}



export async function makeGetRequest() {
    const application_id = APP_ID
    const url = `https://api.vagon.io/app-stream-management/v2/streams?application_id=${application_id}`;
    const headers = {
        Authorization: generateAuthorizationHeader('GET', '/app-stream-management/v2/streams'),
    };
    try {
        const response = await axios.get(url, { headers });
        if (response) {
            const respData = { streamId: response.data.streams[0]?.id, region: response.data.streams[0]?.attributes.capacities[0]?.attributes.region }
            return respData

            console.log('Response:', response.data);

        }
    } catch (error) {
        console.error('Error:', error);
    }
}
