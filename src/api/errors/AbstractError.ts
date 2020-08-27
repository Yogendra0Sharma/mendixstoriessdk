/**
 *
 *
 * @export
 * @class AbstractError
 * @extends {Error}
 */
export default class AbstractError extends Error {
    /**
     * Creates an instance of AbstractError.
     * @param {...any[]} args
     * @memberof AbstractError
     */
    constructor(...args: any[]) {
        super(...args)
        this.name = this.constructor.name

        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor)
        } else {
            this.stack = (new Error(this.message)).stack
        }
    }
}