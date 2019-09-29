/**
 * Warships
 */

export enum ActionNames {
    STATS = "stats"
}

export type Actions = {
    [ActionName in ActionNames]: () => void;
}

export const Actions: Actions = {
    [ActionNames.STATS]: () => {},
}