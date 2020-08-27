import * as soap from "soap";
import { IOptions } from "soap";
import { Credential } from "../common/Credentials"
import IHeaderCredentials from "../common/IHeaderCredentials";
class SOAPClient {
    private wsdl: string;
    private options: IOptions;
    private soapClint: any;

    constructor(options: IOptions = {}) {
        this.options = options;
    }

    public setWsdl(wsdl: string): void {
        this.wsdl = wsdl;
    }
    async getSoapClient(): Promise<soap.Client> {

        if (this.soapClint) {
            return this.soapClint;
        }

        let client = await soap.createClientAsync(this.wsdl, this.options);
        let soapHeader: IHeaderCredentials = {
            authentication:
                { "username": Credential.platformUsername, "password": Credential.platformPassword }
        };
        client.addSoapHeader(soapHeader);
        this.soapClint = client;
        return this.soapClint;
    }

    public async execAndCatch<T>(method: string, payload: any): Promise<T> {
        let client = await this.getSoapClient();
        return await client[method + "Async"](payload, {
            postProcess: function (_xml: any) {
                let t = _xml.replace('<soap:Body><tns:authentication>', '<soap:Body>');
                return t.replace('</tns:authentication></soap:Body>', '</soap:Body>');
            }
        }).then((response: T[]) => {
            return response[0]
        })
            .catch((err: Error) => console.log(method + " : " + err.message));
    }
}

export { SOAPClient };