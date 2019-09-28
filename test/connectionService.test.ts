import ConnectionService from "../src/services/connectionService";
import Services from "../src/constants/services";
import Realm from "../src/constants/realm";
import Connection from "../src/services/connectionService/connection";

const testConnectionOptions = { applicationID: "123", service: Services.wows, realm: Realm.EU };

beforeAll(() => {
    ConnectionService.removeAllConnections();
});

test("Add a connection", () => {
    const newConnction = ConnectionService.getConnection(testConnectionOptions);
    expect(newConnction).toBeDefined();
    expect(ConnectionService.getAllConnections().length).toBe(1);
});

test("Retreive existing connection", () => {
    const existingConnection = ConnectionService.getConnection(testConnectionOptions);
    expect(existingConnection).toBeDefined();
    expect(ConnectionService.getAllConnections().length).toBe(1);
});

test("Remove existing connection", () => {
    ConnectionService.removeConnection(Connection.generateId(
        testConnectionOptions.applicationID, 
        testConnectionOptions.service.name, 
        testConnectionOptions.realm
    ));
    expect(ConnectionService.getAllConnections().length).toBe(0);
});



