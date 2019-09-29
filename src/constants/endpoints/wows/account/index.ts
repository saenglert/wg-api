import { ActionConfigType } from "../..";

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
    [ActionName in ActionNames]: ActionConfigType;
}

export const Actions: Actions = {
    [ActionNames.LIST]: () => ({}),
    [ActionNames.INFO]: () => ({}),
    [ActionNames.ACHIEVEMENTS]: () => ({}),
    [ActionNames.STATSBYDATE]: () => ({}),
}