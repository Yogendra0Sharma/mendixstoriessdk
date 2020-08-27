"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSprint = exports.getSprintByID = exports.getSprints = void 0;
const constant_1 = require("../common/constant");
exports.getSprints = async (client, request) => {
    let requestArgs = {
        "tns:GetSprints": request
    };
    return await client.execAndCatch(constant_1.Actions.GetSprints, requestArgs);
};
exports.getSprintByID = async (client, request) => {
    let requestArgs = {
        "tns:GetSprintByID": request
    };
    return await client.execAndCatch(constant_1.Actions.GetSprintByID, requestArgs);
};
exports.createSprint = async (client, request) => {
    let requestArgs = {
        "tns:CreateSprint": request
    };
    return await client.execAndCatch(constant_1.Actions.CreateSprint, requestArgs);
};
//# sourceMappingURL=sprint-service.js.map