/**
 * Seasons
 */

export enum ActionNames {
    INFO = "info",
    SHIPSTATS = "shipstats",
    ACCOUNTINFO = "accountinfo",
}

export type ActionType = {
    [ActionName in ActionNames]: () => void;
}

export const Actions: ActionType = {
    [ActionNames.INFO]: () => { },
    [ActionNames.SHIPSTATS]: () => { },
    [ActionNames.ACCOUNTINFO]: () => { },
}