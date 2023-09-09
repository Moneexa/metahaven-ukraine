import crypto from "crypto"


export function calculateHMAC(payload: string) {
    const apiSecret = process.env.API_SECRET || ""

    // const api_secret_buffer = Buffer.from(apiSecret, 'hex')
    const hmac = crypto.createHmac('sha256', apiSecret)
    hmac.update(payload);
    return hmac.digest('hex');
}

