import ConnectionService from "../src/services/connectionService";

const testConfig = {url: "https://example.org"};

beforeAll(() => {
    ConnectionService.removeAllConnections();
});

test("Add a connection", () => {
    const newConnction = ConnectionService.getConnection(testConfig);
    expect(newConnction).toBeDefined();
    expect(ConnectionService.getAllConnections().length).toBe(1);
});

test("Retreive existing connection", () => {
    const existingConnection = ConnectionService.getConnection(testConfig);
    expect(existingConnection).toBeDefined();
    expect(ConnectionService.getAllConnections().length).toBe(1);
});

test("Remove existing connection", () => {
    const existingConnection = ConnectionService.getConnection(testConfig);
    ConnectionService.removeConnection(existingConnection);
    expect(ConnectionService.getAllConnections().length).toBe(0);
});



