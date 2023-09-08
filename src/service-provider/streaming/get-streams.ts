import axios from 'axios';
import { generateAuthorizationHeader } from "./headers"
import { StreamResponse } from "./myTypes"

export async function makeGetRequest() {
    const url = 'https://api.vagon.io/app-stream-management/v2/streams?application_id=2382';
    const headers = {
        Authorization: generateAuthorizationHeader('GET', '/app-stream-management/v2/streams'),
    };
    try {
        const response = await axios.get<StreamResponse>(url, { headers });
        if (response) {
            const respData = { streamId: response.data.streams[0]?.id, region: response.data.streams[0]?.attributes.capacities[0]?.attributes.region }
            return respData

            console.log('Response:', response.data);

        }
    } catch (error) {
        console.error('Error:', error);
    }
}
