"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.createTask = exports.getTaskByID = exports.getTasks = void 0;
const constant_1 = require("../common/constant");
exports.getTasks = async (client, request) => {
    let requestArgs = {
        "tns:GetTasks": request
    };
    return await client.execAndCatch(constant_1.Actions.GetTasks, requestArgs);
};
exports.getTaskByID = async (client, request) => {
    let requestArgs = {
        "tns:GetTaskByID": request
    };
    return await client.execAndCatch(constant_1.Actions.GetTaskByID, requestArgs);
};
exports.createTask = async (client, request) => {
    let requestArgs = {
        "tns:CreateTask": request
    };
    return await client.execAndCatch(constant_1.Actions.CreateTask, requestArgs);
};
exports.updateTask = async (client, request) => {
    let requestArgs = {
        "tns:UpdateTask": request
    };
    return await client.execAndCatch(constant_1.Actions.UpdateTask, requestArgs);
};
//# sourceMappingURL=task-service.js.map