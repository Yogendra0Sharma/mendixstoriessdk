import {
    GetTasksRequest, GetTaskByIDRequest, CreateTaskRequest, UpdateTaskRequest,
    GetTasksResponse, GetTaskByIDResponse, CreateTaskResponse, UpdateTaskResponse
} from "../models"
import { Actions } from "../common/constant";

export const getTasks = async (client: any, request: GetTasksRequest): Promise<GetTasksResponse> => {
    let requestArgs = {
        "tns:GetTasks": request
    };
    return await client.execAndCatch(Actions.GetTasks, requestArgs);
}

export const getTaskByID = async (client: any, request: GetTaskByIDRequest): Promise<GetTaskByIDResponse> => {
    let requestArgs = {
        "tns:GetTaskByID": request
    }
    return await client.execAndCatch(Actions.GetTaskByID, requestArgs);
}

export const createTask = async (client: any, request: CreateTaskRequest): Promise<CreateTaskResponse> => {
    let requestArgs = {
        "tns:CreateTask": request
    }
    return await client.execAndCatch(Actions.CreateTask, requestArgs);
}

export const updateTask = async (client: any, request: UpdateTaskRequest): Promise<UpdateTaskResponse> => {
    let requestArgs = {
        "tns:UpdateTask": request
    }
    return await client.execAndCatch(Actions.UpdateTask, requestArgs);
}
