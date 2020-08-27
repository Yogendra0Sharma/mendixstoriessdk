"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractError_1 = require("./AbstractError");
/**
 *
 *
 * @export
 * @class StoriesSDKClientError
 * @extends {AbstractError}
 */
class StoriesSDKClientError extends AbstractError_1.default {
    /**
     * Creates an instance of StoriesSDKClientError.
     * @param {string} [message='StoriesSDKClient Error']
     * @param {...any[]} args
     * @memberof StoriesSDKClientError
     */
    constructor(message = 'StoriesSDKClient Error', ...args) {
        super(...[message, ...args]);
    }
}
exports.default = StoriesSDKClientError;
//# sourceMappingURL=StoriesSDKClientError.js.map