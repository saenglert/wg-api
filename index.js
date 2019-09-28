var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define("constants/services/index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ServiceNames;
    (function (ServiceNames) {
        ServiceNames["WOT"] = "wot";
        ServiceNames["WOTB"] = "wotb";
        ServiceNames["WOTC"] = "wotc";
        ServiceNames["WOWS"] = "wows";
        ServiceNames["WOWP"] = "wows";
        ServiceNames["WARGAMING"] = "wargaming";
    })(ServiceNames = exports.ServiceNames || (exports.ServiceNames = {}));
    var ServicePath;
    (function (ServicePath) {
        ServicePath["WOT"] = "wot";
        ServicePath["WOTB"] = "wotb";
        ServicePath["WOTC"] = "wotx";
        ServicePath["WOWS"] = "wows";
        ServicePath["WOWP"] = "wowp";
        ServicePath["WARGAMING"] = "wgn";
    })(ServicePath = exports.ServicePath || (exports.ServicePath = {}));
    var ServiceUrl;
    (function (ServiceUrl) {
        ServiceUrl["WOT"] = "api.worldoftanks";
        ServiceUrl["WOTB"] = "api.wotblitz";
        ServiceUrl["WOTC"] = "worldoftanks";
        ServiceUrl["WOWS"] = "api.worldofwarships";
        ServiceUrl["WOWP"] = "api.worldofwarplanes";
        ServiceUrl["WARGAMING"] = "api.worldoftanks";
    })(ServiceUrl = exports.ServiceUrl || (exports.ServiceUrl = {}));
    const Services = {
        [ServiceNames.WOT]: {
            name: ServiceNames.WOT,
            path: ServicePath.WOT,
            url: ServiceUrl.WOT,
            endpoints: []
        },
        [ServiceNames.WOTB]: {
            name: ServiceNames.WOTB,
            path: ServicePath.WOTB,
            url: ServiceUrl.WOTB,
            endpoints: []
        },
        [ServiceNames.WOTC]: {
            name: ServiceNames.WOTC,
            path: ServicePath.WOTC,
            url: ServiceUrl.WOTC,
            endpoints: []
        },
        [ServiceNames.WOWS]: {
            name: ServiceNames.WOWS,
            path: ServicePath.WOWS,
            url: ServiceUrl.WOWS,
            endpoints: []
        },
        [ServiceNames.WOWP]: {
            name: ServiceNames.WOWP,
            path: ServicePath.WOWP,
            url: ServiceUrl.WOWP,
            endpoints: []
        },
        [ServiceNames.WARGAMING]: {
            name: ServiceNames.WARGAMING,
            path: ServicePath.WARGAMING,
            url: ServiceUrl.WARGAMING,
            endpoints: []
        },
    };
    exports.default = Services;
});
define("constants/realm", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Realm;
    (function (Realm) {
        Realm["RU"] = "ru";
        Realm["EU"] = "eu";
        Realm["NA"] = "com";
        Realm["ASIA"] = "asia";
        Realm["PS4"] = "api-ps4-console";
        Realm["XBOX"] = "api-xbox-console";
    })(Realm = exports.Realm || (exports.Realm = {}));
    exports.default = Realm;
});
define("constants/error", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("constants/apiResponse", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("constants/crewSkill", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("constants/index", ["require", "exports", "constants/services/index", "constants/realm"], function (require, exports, services_1, realm_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    realm_1 = __importDefault(realm_1);
    exports.authParameter = "application_id";
    exports.getUrl = (service, realm) => {
        if (service.name === services_1.ServiceNames.WOTC) {
            return `${realm}.${service.url}.${realm_1.default.NA}/${service.path}`;
        }
        ;
        return `${service.url}.${realm}/${service.path}`;
    };
    var HTTPMethods;
    (function (HTTPMethods) {
        HTTPMethods["GET"] = "GET";
        HTTPMethods["POST"] = "POST";
        HTTPMethods["PUT"] = "PUT";
        HTTPMethods["DELETE"] = "DELETE";
    })(HTTPMethods = exports.HTTPMethods || (exports.HTTPMethods = {}));
});
define("constants/endpoints/wows/account/index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Account
     */
    var ActionNames;
    (function (ActionNames) {
        ActionNames["LIST"] = "list";
        ActionNames["INFO"] = "info";
        ActionNames["ACHIEVEMENTS"] = "achievements";
        ActionNames["STATSBYDATE"] = "statsbydate";
    })(ActionNames = exports.ActionNames || (exports.ActionNames = {}));
    exports.Actions = {
        [ActionNames.LIST]: () => ({}),
        [ActionNames.INFO]: () => ({}),
        [ActionNames.ACHIEVEMENTS]: () => ({}),
        [ActionNames.STATSBYDATE]: () => ({}),
    };
});
define("constants/endpoints/wows/encyclopedia/index", ["require", "exports", "constants/services/index", "constants/realm", "constants/index"], function (require, exports, services_2, realm_2, __1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    services_2 = __importDefault(services_2);
    realm_2 = __importDefault(realm_2);
    /**
     * Encyclopedia
     */
    var ActionNames;
    (function (ActionNames) {
        ActionNames["INFO"] = "info";
        ActionNames["WARSHIPS"] = "ships";
        ActionNames["ACHIEVEMENTS"] = "achievements";
    })(ActionNames = exports.ActionNames || (exports.ActionNames = {}));
    const InfoAction = (application_id, realm, fields, language) => {
        return {
            url: __1.getUrl(services_2.default.wows, realm),
            params: {
                application_id,
                fields: fields.map(field => field.exlude ? `-${field.name}` : field.name).join(","),
                language,
            }
        };
    };
    exports.Actions = {
        [ActionNames.INFO]: InfoAction,
        [ActionNames.WARSHIPS]: () => ({}),
        [ActionNames.ACHIEVEMENTS]: () => ({}),
    };
    InfoAction("stuff", realm_2.default.NA);
});
/**
 * Warships
 */
define("constants/endpoints/wows/warships/index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ActionNames;
    (function (ActionNames) {
        ActionNames["STATS"] = "stats";
    })(ActionNames = exports.ActionNames || (exports.ActionNames = {}));
    exports.Actions = {
        [ActionNames.STATS]: () => { },
    };
});
/**
 * Seasons
 */
define("constants/endpoints/wows/seasons/index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ActionNames;
    (function (ActionNames) {
        ActionNames["INFO"] = "info";
        ActionNames["SHIPSTATS"] = "shipstats";
        ActionNames["ACCOUNTINFO"] = "accountinfo";
    })(ActionNames = exports.ActionNames || (exports.ActionNames = {}));
    exports.Actions = {
        [ActionNames.INFO]: () => { },
        [ActionNames.SHIPSTATS]: () => { },
        [ActionNames.ACCOUNTINFO]: () => { },
    };
});
define("constants/endpoints/wows/clans/index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Clans
     */
    var ActionNames;
    (function (ActionNames) {
        ActionNames["LIST"] = "list";
        ActionNames["INFO"] = "info";
        ActionNames["ACCOUNTINFO"] = "accountinfo";
        ActionNames["GLOSSARY"] = "glossary";
        ActionNames["SEASON"] = "seasons";
    })(ActionNames = exports.ActionNames || (exports.ActionNames = {}));
    exports.Actions = {
        [ActionNames.LIST]: () => ({}),
        [ActionNames.INFO]: () => ({}),
        [ActionNames.ACCOUNTINFO]: () => ({}),
        [ActionNames.GLOSSARY]: () => ({}),
        [ActionNames.SEASON]: () => ({})
    };
});
define("constants/endpoints/wows/index", ["require", "exports", "constants/endpoints/wows/account/index", "constants/endpoints/wows/encyclopedia/index", "constants/endpoints/wows/warships/index", "constants/endpoints/wows/seasons/index", "constants/endpoints/wows/clans/index"], function (require, exports, account_1, encyclopedia_1, warships_1, seasons_1, clans_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ActionNames = {
        ...account_1.ActionNames,
        ...encyclopedia_1.ActionNames,
        ...warships_1.ActionNames,
        ...seasons_1.ActionNames,
        ...clans_1.ActionNames
    };
    var EndpointNames;
    (function (EndpointNames) {
        EndpointNames["ACCOUNT"] = "account";
        EndpointNames["ENCYCLOPEDIA"] = "encyclopedia";
        EndpointNames["WARSHIPS"] = "warships";
        EndpointNames["SEASONS"] = "seasons";
        EndpointNames["CLANS"] = "clans";
    })(EndpointNames = exports.EndpointNames || (exports.EndpointNames = {}));
    exports.Endpoints = {
        [EndpointNames.ACCOUNT]: account_1.Actions,
        [EndpointNames.ENCYCLOPEDIA]: encyclopedia_1.Actions,
        [EndpointNames.WARSHIPS]: warships_1.Actions,
        [EndpointNames.SEASONS]: seasons_1.Actions,
        [EndpointNames.CLANS]: clans_1.Actions
    };
    exports.default = exports.Endpoints;
});
define("constants/endpoints/index", ["require", "exports", "constants/endpoints/wows/index", "constants/services/index"], function (require, exports, WOWS, services_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    WOWS = __importStar(WOWS);
    exports.ActionNames = WOWS.ActionNames;
    exports.Endpoints = {
        [services_3.ServiceNames.WOWS]: WOWS.Endpoints
    };
    exports.default = exports.Endpoints;
});
define("services/connectionService/connection", ["require", "exports", "axios", "constants/index"], function (require, exports, axios_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    axios_1 = __importDefault(axios_1);
    class Connection {
        constructor(options) {
            /**
             * GET based request
             *
             * @param resource The api endpoint to be called
             * @param parameters GET parameters to be included in the request
             */
            this.get = async (endpoint, action, parameters) => {
                const params = [...Object.keys(parameters).map(key => `${key}=${parameters[key]}`), `${constants_1.authParameter}=${parameters.applicationID}`];
                const response = await axios_1.default.get(`${constants_1.getUrl(this.service, this.realm)}${action}/?${params.join("&")}`);
                return response.data;
            };
            this.applicationID = options.applicationID;
            this.service = options.service;
            this.realm = options.realm;
        }
    }
    exports.default = Connection;
});
define("services/connectionService/index", ["require", "exports", "services/connectionService/connection"], function (require, exports, connection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    connection_1 = __importDefault(connection_1);
    class ConnectionService {
    }
    ConnectionService.existingConnections = [];
    ConnectionService.getConnection = (options) => {
        const existingConnection = ConnectionService.existingConnections.find(connection => connection.service === options.service && connection.realm === options.realm);
        if (existingConnection) {
            return existingConnection;
        }
        const newConnection = new connection_1.default(options);
        ConnectionService.existingConnections.push(newConnection);
        return newConnection;
    };
    ConnectionService.removeConnection = (connection) => {
        const index = ConnectionService.existingConnections.indexOf(connection);
        if (index >= 0) {
            ConnectionService.existingConnections.splice(index, 1);
            return true;
        }
        return false;
    };
    exports.default = ConnectionService;
});
define("index", ["require", "exports", "services/connectionService/index"], function (require, exports, connectionService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    connectionService_1 = __importDefault(connectionService_1);
    const api = (options) => connectionService_1.default.getConnection(options);
    exports.default = api;
});
//# sourceMappingURL=index.js.map