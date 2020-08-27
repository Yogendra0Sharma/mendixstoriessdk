import { SOAPClient } from "../api/clients/SOAPClient";
import * as service from "./services";
import * as model from "./models";
/**
 *
 *
 * @class StoriesSDKClient
 */
class StoriesSDKClient {
    private client: any;

    /**
     * Creates an instance of StoriesSDKClient.
     * @memberof StoriesSDKClient
     */
    constructor() {
        this.client = new SOAPClient();
        this.client.setWsdl("https://docs.mendix.com/apidocs-mxsdk/apidocs/attachments/9535497/19398865.wsdl");
    }


    /**
     * @param  {model.GetSprintsRequest} request
     * @returns Promise
     */
    public getSprints = async (request: model.GetSprintsRequest): Promise<model.GetSprintsResponse> => {
        return service.getSprints(this.client, request);
    }
    /**
     * @param  {model.GetSprintByIDRequest} request
     * @returns Promise
     */
    public getSprintByID = async (request: model.GetSprintByIDRequest): Promise<model.GetSprintByIDResponse> => {
        return service.getSprintByID(this.client, request);
    }
    /**
     * @param  {model.CreateSprintRequest} request
     * @returns Promise
     */
    public createSprint = async (request: model.CreateSprintRequest): Promise<model.CreateSprintResponse> => {
        return service.createSprint(this.client, request);
    }
    /**
     * @param  {model.GetStoriesRequest} request
     * @returns Promise
     */
    public getStories = async (request: model.GetStoriesRequest): Promise<model.GetStoriesResponse> => {
        return service.getStories(this.client, request);
    }
    /**
     * @param  {model.GetStoryByIDRequest} request
     * @returns Promise
     */
    public getStoryByID = async (request: model.GetStoryByIDRequest): Promise<model.GetStoryByIDResponse> => {
        return service.getStoryByID(this.client, request);
    }
    /**
     * @param  {model.CreateStoryRequest} request
     * @returns Promise
     */
    public createStory = async (request: model.CreateStoryRequest): Promise<model.CreateStoryResponse> => {
        return service.createStory(this.client, request);
    }
    /**
     * @param  {model.UpdateStoryRequest} request
     * @returns Promise
     */
    public updateStory = async (request: model.UpdateStoryRequest): Promise<model.UpdateStoryResponse> => {
        return service.updateStory(this.client, request);
    }
    /**
     * @param  {model.GetTasksRequest} request
     * @returns Promise
     */
    public getTasks = async (request: model.GetTasksRequest): Promise<model.GetTasksResponse> => {
        return service.getTasks(this.client, request);
    }
    /**
     * @param  {model.GetTaskByIDRequest} request
     * @returns Promise
     */
    public getTaskByID = async (request: model.GetTaskByIDRequest): Promise<model.GetTaskByIDResponse> => {
        return service.getTaskByID(this.client, request);
    }
    /**
     * @param  {model.CreateTaskRequest} request
     * @returns Promise
     */
    public createTask = async (request: model.CreateTaskRequest): Promise<model.CreateTaskResponse> => {
        return service.createTask(this.client, request);
    }
    /**
     * @param  {model.UpdateTaskRequest} request
     * @returns Promise
     */
    public updateTask = async (request: model.UpdateTaskRequest): Promise<model.UpdateTaskResponse> => {
        return service.updateTask(this.client, request);
    }
}

export { StoriesSDKClient };