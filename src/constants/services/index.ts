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
}

const Services: Services = {
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
    [ServiceNames.WOWP]:  {
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
}

export default Services;