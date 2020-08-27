"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOAPClient = void 0;
const soap = require("soap");
const Credentials_1 = require("../common/Credentials");
class SOAPClient {
    constructor(options = {}) {
        this.options = options;
    }
    setWsdl(wsdl) {
        this.wsdl = wsdl;
    }
    async getSoapClient() {
        if (this.soapClint) {
            return this.soapClint;
        }
        let client = await soap.createClientAsync(this.wsdl, this.options);
        let soapHeader = {
            authentication: { "username": Credentials_1.Credential.platformUsername, "password": Credentials_1.Credential.platformPassword }
        };
        client.addSoapHeader(soapHeader);
        this.soapClint = client;
        return this.soapClint;
    }
    async execAndCatch(method, payload) {
        let client = await this.getSoapClient();
        return await client[method + "Async"](payload, {
            postProcess: function (_xml) {
                let t = _xml.replace('<soap:Body><tns:authentication>', '<soap:Body>');
                return t.replace('</tns:authentication></soap:Body>', '</soap:Body>');
            }
        }).then((response) => {
            return response[0];
        })
            .catch((err) => console.log(method + " : " + err.message));
    }
}
exports.SOAPClient = SOAPClient;
//# sourceMappingURL=SOAPClient.js.map