import Realm from "../../constants/realm";
import { Service, ServiceNames } from "../../constants/services"; import { AxiosRequestConfig } from "axios";
import { URL } from "url";
import Connection from "./connection";

abstract class ConnectionService {
    public static existingConnections: Connection[] = [];

    /**
     * Receive a connection object for this config.
     *
     * If a connection for the host in this config was already created it will return the existing connection.
     *
     * @param config Axios Request Configuration
     */
    public static getConnection = (config: AxiosRequestConfig): Connection => {
        const hostname = ConnectionService.getHostnameFromConfig(config);
        const existingConnection = ConnectionService.existingConnections.find((connection) => connection.getId() === hostname);

        if (existingConnection) {
            return existingConnection;
        }

        const newConnection = new Connection(hostname);
        ConnectionService.existingConnections.push(newConnection);
        return newConnection;
    }

    public static removeConnection = (connection: Connection): boolean => {
        const index = ConnectionService.existingConnections.indexOf(connection);
        if (index >= 0) {
            ConnectionService.existingConnections.splice(index, 1);
            return true;
        }
        return false;
    }

    public static removeAllConnections = () => ConnectionService.existingConnections = [];

    public static getAllConnections = () => ConnectionService.existingConnections;

    public static getHostnameFromConfig = (config: AxiosRequestConfig) => {
        const url = config.url;

        if (url) {
            return new URL(url).hostname;
        }

        throw new Error("URL in AxiosRequestConfig is undefined");
    }
}

export default ConnectionService;
