import crypto from "crypto"
import { API_SECRET } from "../../../configs"

export function calculateHMAC(payload: string) {
    const apiSecret = API_SECRET

    // const api_secret_buffer = Buffer.from(apiSecret, 'hex')
    const hmac = crypto.createHmac('sha256', apiSecret)
    hmac.update(payload);
    return hmac.digest('hex');
}

