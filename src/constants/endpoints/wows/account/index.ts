/**
 * Account
 */

export enum ActionNames {
    LIST = "list",
    INFO = "info",
    ACHIEVEMENTS = "achievements",
    STATSBYDATE = "statsbydate",
}

export type Actions = {
    [ActionName in ActionNames]: () => void;
};

export const Actions: Actions = {
    [ActionNames.LIST]: () => {/** @todo */},
    [ActionNames.INFO]: () => {/** @todo */},
    [ActionNames.ACHIEVEMENTS]: () => {/** @todo */},
    [ActionNames.STATSBYDATE]: () => {/** @todo */},
};
