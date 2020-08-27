"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStory = exports.createStory = exports.getStoryByID = exports.getStories = void 0;
const constant_1 = require("../common/constant");
exports.getStories = async (client, request) => {
    let requestArgs = {
        "tns:GetStories": request
    };
    return await client.execAndCatch(constant_1.Actions.GetStories, requestArgs);
};
exports.getStoryByID = async (client, request) => {
    let requestArgs = {
        "tns:GetStoryByID": request
    };
    return await client.execAndCatch(constant_1.Actions.GetStoryByID, requestArgs);
};
exports.createStory = async (client, request) => {
    let requestArgs = {
        "tns:CreateStory": request
    };
    return await client.execAndCatch(constant_1.Actions.CreateStory, requestArgs);
};
exports.updateStory = async (client, request) => {
    let requestArgs = {
        "tns:UpdateStory": request
    };
    return await client.execAndCatch(constant_1.Actions.UpdateStory, requestArgs);
};
//# sourceMappingURL=story-service.js.map