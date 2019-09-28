declare module "constants/services/index" {
    export enum ServiceNames {
        WOT = "wot",
        WOTB = "wotb",
        WOTC = "wotc",
        WOWS = "wows",
        WOWP = "wows",
        WARGAMING = "wargaming"
    }
    export enum ServicePath {
        WOT = "wot",
        WOTB = "wotb",
        WOTC = "wotx",
        WOWS = "wows",
        WOWP = "wowp",
        WARGAMING = "wgn"
    }
    export enum ServiceUrl {
        WOT = "api.worldoftanks",
        WOTB = "api.wotblitz",
        WOTC = "worldoftanks",
        WOWS = "api.worldofwarships",
        WOWP = "api.worldofwarplanes",
        WARGAMING = "api.worldoftanks"
    }
    export interface Service {
        readonly name: ServiceNames;
        readonly path: string;
        readonly url: string;
        readonly endpoints: string[];
    }
    export type Services = {
        [key in ServiceNames]: Service;
    };
    const Services: Services;
    export default Services;
}
declare module "constants/realm" {
    export enum Realm {
        RU = "ru",
        EU = "eu",
        NA = "com",
        ASIA = "asia",
        PS4 = "api-ps4-console",
        XBOX = "api-xbox-console"
    }
    export default Realm;
}
declare module "constants/error" {
    export type Code = 402 | 404 | 405 | 407 | 504;
    interface Error {
        code: Code;
        message: string;
        field: string;
        value: string;
    }
    export default Error;
}
declare module "constants/apiResponse" {
    import Error from "constants/error";
    interface ApiResponse<T> {
        status: "ok" | "error";
        error?: Error;
        meta: {
            count: number;
        };
        data: T;
    }
    export default ApiResponse;
}
declare module "constants/crewSkill" {
    export interface Perk {
        description: string;
        perk_id: number;
    }
    interface CrewSkill {
        icon: string;
        name: string;
        tier: number;
        type_id: number;
        type_name: string;
        perks: Perk[];
    }
    export default CrewSkill;
}
declare module "constants/index" {
    import { Service } from "constants/services/index";
    import Realm from "constants/realm";
    export const authParameter = "application_id";
    export const getUrl: (service: Service, realm: Realm) => string | undefined;
    export enum HTTPMethods {
        GET = "GET",
        POST = "POST",
        PUT = "PUT",
        DELETE = "DELETE"
    }
}
declare module "constants/endpoints/wows/account/index" {
    import { ActionConfigType } from "constants/endpoints/index";
    /**
     * Account
     */
    export enum ActionNames {
        LIST = "list",
        INFO = "info",
        ACHIEVEMENTS = "achievements",
        STATSBYDATE = "statsbydate"
    }
    export type ActionType = {
        [ActionName in ActionNames]: ActionConfigType;
    };
    export const Actions: ActionType;
}
declare module "constants/endpoints/wows/encyclopedia/index" {
    import { ActionConfigType } from "constants/endpoints/index";
    /**
     * Encyclopedia
     */
    export enum ActionNames {
        INFO = "info",
        WARSHIPS = "ships",
        ACHIEVEMENTS = "achievements"
    }
    export type ActionType = {
        [ActionName in ActionNames]: ActionConfigType;
    };
    export const Actions: ActionType;
}
declare module "constants/endpoints/wows/warships/index" {
    /**
     * Warships
     */
    export enum ActionNames {
        STATS = "stats"
    }
    export type ActionType = {
        [ActionName in ActionNames]: () => void;
    };
    export const Actions: {
        [ActionNames.STATS]: () => void;
    };
}
declare module "constants/endpoints/wows/seasons/index" {
    /**
     * Seasons
     */
    export enum ActionNames {
        INFO = "info",
        SHIPSTATS = "shipstats",
        ACCOUNTINFO = "accountinfo"
    }
    export type ActionType = {
        [ActionName in ActionNames]: () => void;
    };
    export const Actions: ActionType;
}
declare module "constants/endpoints/wows/clans/index" {
    import { ActionConfigType } from "constants/endpoints/index";
    /**
     * Clans
     */
    export enum ActionNames {
        LIST = "list",
        INFO = "info",
        ACCOUNTINFO = "accountinfo",
        GLOSSARY = "glossary",
        SEASON = "seasons"
    }
    export type ActionType = {
        [ActionName in ActionNames]: ActionConfigType;
    };
    export const Actions: ActionType;
}
declare module "constants/endpoints/wows/index" {
    import { ActionType as AccountActionType, ActionNames as AccountActionNames } from "constants/endpoints/wows/account/index";
    import { ActionType as EncyclopediaActionType, ActionNames as EncyclopediaActionNames } from "constants/endpoints/wows/encyclopedia/index";
    import { ActionType as WarshipsActionType, ActionNames as WarshipsActionNames } from "constants/endpoints/wows/warships/index";
    import { ActionType as SeasonsActionType, ActionNames as SeasonsActionNames } from "constants/endpoints/wows/seasons/index";
    import { ActionType as ClansActionType, ActionNames as ClansActionNames } from "constants/endpoints/wows/clans/index";
    export type ActionType = AccountActionType | EncyclopediaActionType | WarshipsActionType | SeasonsActionType | ClansActionType;
    export const ActionNames: {
        LIST: ClansActionNames.LIST;
        INFO: ClansActionNames.INFO;
        ACCOUNTINFO: ClansActionNames.ACCOUNTINFO;
        GLOSSARY: ClansActionNames.GLOSSARY;
        SEASON: ClansActionNames.SEASON;
        SHIPSTATS: SeasonsActionNames.SHIPSTATS;
        STATS: WarshipsActionNames.STATS;
        WARSHIPS: EncyclopediaActionNames.WARSHIPS;
        ACHIEVEMENTS: EncyclopediaActionNames.ACHIEVEMENTS;
        STATSBYDATE: AccountActionNames.STATSBYDATE;
    };
    export enum EndpointNames {
        ACCOUNT = "account",
        ENCYCLOPEDIA = "encyclopedia",
        WARSHIPS = "warships",
        SEASONS = "seasons",
        CLANS = "clans"
    }
    export type EndpointsType = {
        [Endpoint in EndpointNames]: ActionType;
    };
    export const Endpoints: EndpointsType;
    export default Endpoints;
}
declare module "constants/endpoints/index" {
    import * as WOWS from "constants/endpoints/wows/index";
    import { ServiceNames } from "constants/services/index";
    import { AxiosRequestConfig } from "axios";
    import Realm from "constants/realm";
    export type ActionConfigType = (application_id: string, realm: Realm, ...args: any[]) => AxiosRequestConfig;
    export type EndpointNames = WOWS.EndpointNames;
    export const ActionNames: {
        LIST: import("constants/endpoints/wows/clans").ActionNames.LIST;
        INFO: import("constants/endpoints/wows/clans").ActionNames.INFO;
        ACCOUNTINFO: import("constants/endpoints/wows/clans").ActionNames.ACCOUNTINFO;
        GLOSSARY: import("constants/endpoints/wows/clans").ActionNames.GLOSSARY;
        SEASON: import("constants/endpoints/wows/clans").ActionNames.SEASON;
        SHIPSTATS: import("constants/endpoints/wows/seasons").ActionNames.SHIPSTATS;
        STATS: import("constants/endpoints/wows/warships").ActionNames.STATS;
        WARSHIPS: import("constants/endpoints/wows/encyclopedia").ActionNames.WARSHIPS;
        ACHIEVEMENTS: import("constants/endpoints/wows/encyclopedia").ActionNames.ACHIEVEMENTS;
        STATSBYDATE: import("constants/endpoints/wows/account").ActionNames.STATSBYDATE;
    };
    export type Endpoint = {
        name: EndpointNames;
    };
    export const Endpoints: {
        [ServiceNames.WOWS]: WOWS.EndpointsType;
    };
    export default Endpoints;
}
declare module "services/connectionService/connection" {
    import { Service } from "constants/services/index";
    import Realm from "constants/realm";
    import ApiResponse from "constants/apiResponse";
    import CrewSkill from "constants/crewSkill";
    /**
     * Basic options for an api connection
     *
     * @constant applicationID Applcation ID assigned by Wargaming (keep secret)
     * @constant service Game specific api service to be used
     * @constant realm Service region to be used for requests
     */
    export interface Options {
        applicationID: string;
        service: Service;
        realm: Realm;
    }
    export default class Connection {
        applicationID: string;
        service: Service;
        realm: Realm;
        constructor(options: Options);
        /**
         * GET based request
         *
         * @param resource The api endpoint to be called
         * @param parameters GET parameters to be included in the request
         */
        get: (endpoint: import("constants/endpoints/wows").EndpointNames, action: string, parameters: {
            [name: string]: string | number | boolean;
        }) => Promise<ApiResponse<CrewSkill[]>>;
    }
}
declare module "services/connectionService/index" {
    import Connection, { Options } from "services/connectionService/connection";
    abstract class ConnectionService {
        static existingConnections: Connection[];
        static getConnection: (options: Options) => Connection;
        static removeConnection: (connection: Connection) => boolean;
    }
    export default ConnectionService;
}
declare module "index" {
    import { Options } from "services/connectionService/connection";
    const api: (options: Options) => import("services/connectionService/connection").default;
    export default api;
}
