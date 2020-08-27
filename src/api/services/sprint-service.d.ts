import { GetSprintsRequest, GetSprintByIDRequest, CreateSprintRequest, GetSprintsResponse, GetSprintByIDResponse, CreateSprintResponse } from "../models";
export declare const getSprints: (client: any, request: GetSprintsRequest) => Promise<GetSprintsResponse>;
export declare const getSprintByID: (client: any, request: GetSprintByIDRequest) => Promise<GetSprintByIDResponse>;
export declare const createSprint: (client: any, request: CreateSprintRequest) => Promise<CreateSprintResponse>;
