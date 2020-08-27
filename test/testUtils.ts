import { StoriesModel as model } from "../src/index";
import * as dotenv from 'dotenv';
import * as _ from "lodash";
dotenv.config();

/** Create Test Request Payload
 * @param  {any} baseRequest    Base Request 
 * @param  {any} request        API Parameter Request
 */
export const createRequestPayload = (baseRequest: any, request: any) => {
    return _.extend({}, baseRequest, request);
}

/**
 * 
 */
export const baseRequest: model.StoriesBaseRequest = {
    ProjectID: process.env.ProjectID ? process.env.ProjectID : "",
    ApiKey: process.env.ApiKey ? process.env.ApiKey : ""
}

