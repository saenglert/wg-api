/**
 * Seasons
 */

export enum ActionNames {
    INFO = "info",
    SHIPSTATS = "shipstats",
    ACCOUNTINFO = "accountinfo",
}

export type Actions = {
    [ActionName in ActionNames]: () => void;
}

export const Actions: Actions = {
    [ActionNames.INFO]: () => { },
    [ActionNames.SHIPSTATS]: () => { },
    [ActionNames.ACCOUNTINFO]: () => { },
}