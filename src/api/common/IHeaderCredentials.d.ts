/**
 *
 *
 * @export
 * @interface IHeaderCredentials
 */
export default interface IHeaderCredentials {
    authentication: Credentials;
}
/**
 *
 *
 * @export
 * @interface Credentials
 */
export interface Credentials {
    username: string;
    password: string;
}
