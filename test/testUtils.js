"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseRequest = exports.createRequestPayload = void 0;
const dotenv = require("dotenv");
const _ = require("lodash");
dotenv.config();
/** Create Test Request Payload
 * @param  {any} baseRequest    Base Request
 * @param  {any} request        API Parameter Request
 */
exports.createRequestPayload = (baseRequest, request) => {
    return _.extend({}, baseRequest, request);
};
/**
 *
 */
exports.baseRequest = {
    ProjectID: process.env.ProjectID ? process.env.ProjectID : "",
    ApiKey: process.env.ApiKey ? process.env.ApiKey : ""
};
//# sourceMappingURL=testUtils.js.map