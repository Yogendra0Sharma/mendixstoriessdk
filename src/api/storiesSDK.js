"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoriesSDKClient = void 0;
const SOAPClient_1 = require("../api/clients/SOAPClient");
const service = require("./services");
/**
 *
 *
 * @class StoriesSDKClient
 */
class StoriesSDKClient {
    /**
     * Creates an instance of StoriesSDKClient.
     * @memberof StoriesSDKClient
     */
    constructor() {
        /**
         * @param  {model.GetSprintsRequest} request
         * @returns Promise
         */
        this.getSprints = async (request) => {
            return service.getSprints(this.client, request);
        };
        /**
         * @param  {model.GetSprintByIDRequest} request
         * @returns Promise
         */
        this.getSprintByID = async (request) => {
            return service.getSprintByID(this.client, request);
        };
        /**
         * @param  {model.CreateSprintRequest} request
         * @returns Promise
         */
        this.createSprint = async (request) => {
            return service.createSprint(this.client, request);
        };
        /**
         * @param  {model.GetStoriesRequest} request
         * @returns Promise
         */
        this.getStories = async (request) => {
            return service.getStories(this.client, request);
        };
        /**
         * @param  {model.GetStoryByIDRequest} request
         * @returns Promise
         */
        this.getStoryByID = async (request) => {
            return service.getStoryByID(this.client, request);
        };
        /**
         * @param  {model.CreateStoryRequest} request
         * @returns Promise
         */
        this.createStory = async (request) => {
            return service.createStory(this.client, request);
        };
        /**
         * @param  {model.UpdateStoryRequest} request
         * @returns Promise
         */
        this.updateStory = async (request) => {
            return service.updateStory(this.client, request);
        };
        /**
         * @param  {model.GetTasksRequest} request
         * @returns Promise
         */
        this.getTasks = async (request) => {
            return service.getTasks(this.client, request);
        };
        /**
         * @param  {model.GetTaskByIDRequest} request
         * @returns Promise
         */
        this.getTaskByID = async (request) => {
            return service.getTaskByID(this.client, request);
        };
        /**
         * @param  {model.CreateTaskRequest} request
         * @returns Promise
         */
        this.createTask = async (request) => {
            return service.createTask(this.client, request);
        };
        /**
         * @param  {model.UpdateTaskRequest} request
         * @returns Promise
         */
        this.updateTask = async (request) => {
            return service.updateTask(this.client, request);
        };
        this.client = new SOAPClient_1.SOAPClient();
        this.client.setWsdl("https://docs.mendix.com/apidocs-mxsdk/apidocs/attachments/9535497/19398865.wsdl");
    }
}
exports.StoriesSDKClient = StoriesSDKClient;
//# sourceMappingURL=storiesSDK.js.map