import * as soap from "soap";
import { IOptions } from "soap";
declare class SOAPClient {
    private wsdl;
    private options;
    private soapClint;
    constructor(options?: IOptions);
    setWsdl(wsdl: string): void;
    getSoapClient(): Promise<soap.Client>;
    execAndCatch<T>(method: string, payload: any): Promise<T>;
}
export { SOAPClient };
