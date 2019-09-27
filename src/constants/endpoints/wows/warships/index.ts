/**
 * Warships
 */

export enum ActionNames {
    STATS = "stats"
}

export type ActionType = {
    [ActionName in ActionNames]: () => void;
}

export const Actions = {
    [ActionNames.STATS]: () => {},
}