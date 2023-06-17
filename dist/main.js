"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BakalariClient = void 0;
class BakalariClient {
    constructor() {
        this.endpoint = null;
        this.username = null;
        this.password = null;
    }
    login(authInfo) {
        this.username = authInfo.username;
        this.password = authInfo.password;
        console.log('Logged in!');
    }
}
exports.BakalariClient = BakalariClient;
