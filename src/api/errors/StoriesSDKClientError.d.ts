import AbstractError from './AbstractError';
/**
 *
 *
 * @export
 * @class StoriesSDKClientError
 * @extends {AbstractError}
 */
export default class StoriesSDKClientError extends AbstractError {
    /**
     * Creates an instance of StoriesSDKClientError.
     * @param {string} [message='StoriesSDKClient Error']
     * @param {...any[]} args
     * @memberof StoriesSDKClientError
     */
    constructor(message?: string, ...args: any[]);
}
