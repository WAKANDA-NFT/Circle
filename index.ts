/** 
 * See installation instructions at 
 * https://developers.circle.com/developer/docs/circle-sdk
 */
import { Circle, CircleEnvironments, PaymentIntentCreationRequest } from "@circle-fin/circle-sdk";
import crypto from 'crypto';

const circle = new Circle(
    'c8aa49c46f1ead2d4025f7cd8baf6dcf:b8ffa167ac06fb800e5a0200cc8d00ba',
    CircleEnvironments.sandbox      // API base url
);

async function createCryptoPayment() {
    const reqBody: PaymentIntentCreationRequest = {
        amount: {
            amount: "1.00",
            currency: "USD"
        },
        settlementCurrency: "USD",
        paymentMethods: [
            {
                type: "blockchain",
                chain: "ETH"
            }
        ],
        idempotencyKey: crypto.randomUUID()
    };
    const resp = await circle.cryptoPaymentIntents.createPaymentIntent(reqBody);
    console.log(resp.data);
}
createCryptoPayment();