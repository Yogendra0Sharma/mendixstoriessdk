import {
    GetStoriesRequest, GetStoryByIDRequest, CreateStoryRequest, UpdateStoryRequest,
    GetStoriesResponse, GetStoryByIDResponse, CreateStoryResponse, UpdateStoryResponse
} from "../models"
import { Actions } from "../common/constant";
export const getStories = async (client: any, request: GetStoriesRequest): Promise<GetStoriesResponse> => {
    let requestArgs = {
        "tns:GetStories": request
    };
    return await client.execAndCatch(Actions.GetStories, requestArgs);
}

export const getStoryByID = async (client: any, request: GetStoryByIDRequest): Promise<GetStoryByIDResponse> => {
    let requestArgs = {
        "tns:GetStoryByID": request
    }
    return await client.execAndCatch(Actions.GetStoryByID, requestArgs);
}

export const createStory = async (client: any, request: CreateStoryRequest): Promise<CreateStoryResponse> => {
    let requestArgs = {
        "tns:CreateStory": request
    }
    return await client.execAndCatch(Actions.CreateStory, requestArgs);
}

export const updateStory = async (client: any, request: UpdateStoryRequest): Promise<UpdateStoryResponse> => {
    let requestArgs = {
        "tns:UpdateStory": request
    }
    return await client.execAndCatch(Actions.UpdateStory, requestArgs);
}