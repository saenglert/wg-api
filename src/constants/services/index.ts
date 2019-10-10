export enum ServiceNames {
    WOT = "wot",
    WOTB = "wotb",
    WOTC = "wotc",
    WOWS = "wows",
    WOWP = "wows",
    WARGAMING = "wargaming",
}

export enum ServicePath {
    WOT = "wot",
    WOTB = "wotb",
    WOTC = "wotx",
    WOWS = "wows",
    WOWP = "wowp",
    WARGAMING = "wgn",
}

export enum ServiceUrl {
    WOT = "api.worldoftanks",
    WOTB = "api.wotblitz",
    WOTC = "worldoftanks",
    WOWS = "api.worldofwarships",
    WOWP = "api.worldofwarplanes",
    WARGAMING = "api.worldoftanks",
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

const Services: Services = {
    [ServiceNames.WOT]: {
        endpoints: [],
        name: ServiceNames.WOT,
        path: ServicePath.WOT,
        url: ServiceUrl.WOT,
    },
    [ServiceNames.WOTB]: {
        endpoints: [],
        name: ServiceNames.WOTB,
        path: ServicePath.WOTB,
        url: ServiceUrl.WOTB,
    },
    [ServiceNames.WOTC]: {
        endpoints: [],
        name: ServiceNames.WOTC,
        path: ServicePath.WOTC,
        url: ServiceUrl.WOTC,
    },
    [ServiceNames.WOWS]: {
        endpoints: [],
        name: ServiceNames.WOWS,
        path: ServicePath.WOWS,
        url: ServiceUrl.WOWS,
    },
    [ServiceNames.WOWP]:  {
        endpoints: [],
        name: ServiceNames.WOWP,
        path: ServicePath.WOWP,
        url: ServiceUrl.WOWP,
    },
    [ServiceNames.WARGAMING]: {
        endpoints: [],
        name: ServiceNames.WARGAMING,
        path: ServicePath.WARGAMING,
        url: ServiceUrl.WARGAMING,
    },
};

export default Services;
