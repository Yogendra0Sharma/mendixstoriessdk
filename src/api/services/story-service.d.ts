import { GetStoriesRequest, GetStoryByIDRequest, CreateStoryRequest, UpdateStoryRequest, GetStoriesResponse, GetStoryByIDResponse, CreateStoryResponse, UpdateStoryResponse } from "../models";
export declare const getStories: (client: any, request: GetStoriesRequest) => Promise<GetStoriesResponse>;
export declare const getStoryByID: (client: any, request: GetStoryByIDRequest) => Promise<GetStoryByIDResponse>;
export declare const createStory: (client: any, request: CreateStoryRequest) => Promise<CreateStoryResponse>;
export declare const updateStory: (client: any, request: UpdateStoryRequest) => Promise<UpdateStoryResponse>;
