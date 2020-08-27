"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 *
 * @export
 * @class AbstractError
 * @extends {Error}
 */
class AbstractError extends Error {
    /**
     * Creates an instance of AbstractError.
     * @param {...any[]} args
     * @memberof AbstractError
     */
    constructor(...args) {
        super(...args);
        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = (new Error(this.message)).stack;
        }
    }
}
exports.default = AbstractError;
//# sourceMappingURL=AbstractError.js.map