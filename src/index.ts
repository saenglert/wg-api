import { AxiosRequestConfig } from "axios";
import { authParameter } from "./constants";
import ConnectionService from "./services/connectionService";

class API {
    private readonly applicationID: string;

    constructor(applicationID: string) {
        this.applicationID = applicationID;
    }

    public request = (config: AxiosRequestConfig) =>
        ConnectionService.getConnection(config).request(this.mergeConfig(config))

    private mergeConfig = (config: AxiosRequestConfig): AxiosRequestConfig =>
        Object.assign({}, config, {params: {[authParameter]: this.applicationID}})

}

export default API;
