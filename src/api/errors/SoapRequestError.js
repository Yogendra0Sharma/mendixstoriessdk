"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractError_1 = require("./AbstractError");
/**
 *
 *
 * @export
 * @class SoapRequestError
 * @extends {AbstractError}
 */
class SoapRequestError extends AbstractError_1.default {
    /**
     *Creates an instance of SoapRequestError.
     * @param {string} [message='Soap Request Error']
     * @param {...any[]} args
     * @memberof SoapRequestError
     */
    constructor(message = 'Soap Request Error', ...args) {
        super(...[message, ...args]);
    }
}
exports.default = SoapRequestError;
//# sourceMappingURL=SoapRequestError.js.map