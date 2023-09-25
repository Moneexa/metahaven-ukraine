export interface StripeResponse {
    customer_details: { name: string },
    amount_total: string,
    custom_fields: { text?: { value: string } }[],
}