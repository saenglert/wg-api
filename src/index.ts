import ConnectionService from "./services/connectionService";
import { Options } from "./services/connectionService/connection";


const api = (options: Options) => ConnectionService.getConnection(options);

export default api;