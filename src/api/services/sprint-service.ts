import {
    GetSprintsRequest, GetSprintByIDRequest, CreateSprintRequest,
    GetSprintsResponse, GetSprintByIDResponse, CreateSprintResponse
} from "../models"
import { Actions } from "../common/constant";


export const getSprints = async (client: any, request: GetSprintsRequest): Promise<GetSprintsResponse> => {
    let requestArgs = {
        "tns:GetSprints": request
    };
    return await client.execAndCatch(Actions.GetSprints, requestArgs);
}

export const getSprintByID = async (client: any, request: GetSprintByIDRequest): Promise<GetSprintByIDResponse> => {
    let requestArgs = {
        "tns:GetSprintByID": request
    }
    return await client.execAndCatch(Actions.GetSprintByID, requestArgs);
}

export const createSprint = async (client: any, request: CreateSprintRequest): Promise<CreateSprintResponse> => {
    let requestArgs = {
        "tns:CreateSprint": request
    }
    return await client.execAndCatch(Actions.CreateSprint, requestArgs);
}
