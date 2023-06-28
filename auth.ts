/** 
 * See installation instructions at 
 * https://developers.circle.com/developer/docs/circle-sdk
 */
import { Circle, CircleEnvironments } from "@circle-fin/circle-sdk";

const circle = new Circle(
'process.env.SAND_API_KEY',
    CircleEnvironments.sandbox
);

async function getAccountConfig() {
    const configResp = await circle.management.getAccountConfig();
    console.log(configResp.data);
}
getAccountConfig();