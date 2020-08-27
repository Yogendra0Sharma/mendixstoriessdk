import { GetTasksRequest, GetTaskByIDRequest, CreateTaskRequest, UpdateTaskRequest, GetTasksResponse, GetTaskByIDResponse, CreateTaskResponse, UpdateTaskResponse } from "../models";
export declare const getTasks: (client: any, request: GetTasksRequest) => Promise<GetTasksResponse>;
export declare const getTaskByID: (client: any, request: GetTaskByIDRequest) => Promise<GetTaskByIDResponse>;
export declare const createTask: (client: any, request: CreateTaskRequest) => Promise<CreateTaskResponse>;
export declare const updateTask: (client: any, request: UpdateTaskRequest) => Promise<UpdateTaskResponse>;
