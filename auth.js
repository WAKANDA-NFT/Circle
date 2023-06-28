"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * See installation instructions at
 * https://developers.circle.com/developer/docs/circle-sdk
 */
const circle_sdk_1 = require("@circle-fin/circle-sdk");
const circle = new circle_sdk_1.Circle('process.env.SAND_API_KEY', circle_sdk_1.CircleEnvironments.sandbox);
function getAccountConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const configResp = yield circle.management.getAccountConfig();
        console.log(configResp.data);
    });
}
getAccountConfig();
