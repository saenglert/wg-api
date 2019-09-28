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

export type ActionType = {
    [ActionName in ActionNames]: ActionConfigType;
}

export const Actions: ActionType = {
    [ActionNames.LIST]: () => ({}),
    [ActionNames.INFO]: () => ({}),
    [ActionNames.ACHIEVEMENTS]: () => ({}),
    [ActionNames.STATSBYDATE]: () => ({}),
}