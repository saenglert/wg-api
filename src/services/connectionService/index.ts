import Connection, { Options } from "./connection";

abstract class ConnectionService {
    static existingConnections: Connection[] = [];

    static getConnection = (options: Options): Connection => {
        const existingConnection = ConnectionService.existingConnections.find(connection => connection.service === options.service && connection.realm === options.realm);

        if (existingConnection) {
            return existingConnection;
        }
        
        const newConnection = new Connection(options);
        ConnectionService.existingConnections.push(newConnection);
        return newConnection;
    }

    static removeConnection = (connection: Connection): boolean => {
        const index = ConnectionService.existingConnections.indexOf(connection);
        if (index >= 0) {
            ConnectionService.existingConnections.splice(index, 1);
            return true;
        }
        return false;
    }
}

export default ConnectionService;