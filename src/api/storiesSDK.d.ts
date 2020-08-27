import * as model from "./models";
/**
 *
 *
 * @class StoriesSDKClient
 */
declare class StoriesSDKClient {
    private client;
    /**
     * Creates an instance of StoriesSDKClient.
     * @memberof StoriesSDKClient
     */
    constructor();
    /**
     * @param  {model.GetSprintsRequest} request
     * @returns Promise
     */
    getSprints: (request: model.GetSprintsRequest) => Promise<model.GetSprintsResponse>;
    /**
     * @param  {model.GetSprintByIDRequest} request
     * @returns Promise
     */
    getSprintByID: (request: model.GetSprintByIDRequest) => Promise<model.GetSprintByIDResponse>;
    /**
     * @param  {model.CreateSprintRequest} request
     * @returns Promise
     */
    createSprint: (request: model.CreateSprintRequest) => Promise<model.CreateSprintResponse>;
    /**
     * @param  {model.GetStoriesRequest} request
     * @returns Promise
     */
    getStories: (request: model.GetStoriesRequest) => Promise<model.GetStoriesResponse>;
    /**
     * @param  {model.GetStoryByIDRequest} request
     * @returns Promise
     */
    getStoryByID: (request: model.GetStoryByIDRequest) => Promise<model.GetStoryByIDResponse>;
    /**
     * @param  {model.CreateStoryRequest} request
     * @returns Promise
     */
    createStory: (request: model.CreateStoryRequest) => Promise<model.CreateStoryResponse>;
    /**
     * @param  {model.UpdateStoryRequest} request
     * @returns Promise
     */
    updateStory: (request: model.UpdateStoryRequest) => Promise<model.UpdateStoryResponse>;
    /**
     * @param  {model.GetTasksRequest} request
     * @returns Promise
     */
    getTasks: (request: model.GetTasksRequest) => Promise<model.GetTasksResponse>;
    /**
     * @param  {model.GetTaskByIDRequest} request
     * @returns Promise
     */
    getTaskByID: (request: model.GetTaskByIDRequest) => Promise<model.GetTaskByIDResponse>;
    /**
     * @param  {model.CreateTaskRequest} request
     * @returns Promise
     */
    createTask: (request: model.CreateTaskRequest) => Promise<model.CreateTaskResponse>;
    /**
     * @param  {model.UpdateTaskRequest} request
     * @returns Promise
     */
    updateTask: (request: model.UpdateTaskRequest) => Promise<model.UpdateTaskResponse>;
}
export { StoriesSDKClient };
