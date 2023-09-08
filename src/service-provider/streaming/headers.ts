import * as CryptoJS from 'crypto-js';
const apiKey = '1851c0be-3e9f-4962-8f0c-5fe764c358fb';
const apiSecret = 'bd0e9e3e8c644d3cb631f77982b3e7c5';


export function generateAuthorizationHeader(requestType: string, payloadString: string, requestBody?: string) {
    const nonce = generateNonce();
    const timestamp = Date.now().toString();
    const payload = `${apiKey}${requestType}${payloadString}${timestamp}${nonce}${requestBody || ""}`;
    const signature = calculateHMAC(payload);
    return `HMAC ${apiKey}:${signature}:${nonce}:${timestamp}`;
}

function generateNonce() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
function calculateHMAC(payload: string) {
    const hmac = CryptoJS.HmacSHA256(payload, apiSecret);
    return hmac.toString(CryptoJS.enc.Hex);
}
