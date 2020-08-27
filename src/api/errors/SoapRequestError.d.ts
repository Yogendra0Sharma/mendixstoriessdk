import AbstractError from './AbstractError';
/**
 *
 *
 * @export
 * @class SoapRequestError
 * @extends {AbstractError}
 */
export default class SoapRequestError extends AbstractError {
    /**
     *Creates an instance of SoapRequestError.
     * @param {string} [message='Soap Request Error']
     * @param {...any[]} args
     * @memberof SoapRequestError
     */
    constructor(message?: string, ...args: any[]);
}
