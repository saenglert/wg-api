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
    [ActionName in ActionNames]: () => void;
}

export const Actions: ActionType = {
    [ActionNames.LIST]: () => { },
    [ActionNames.INFO]: () => { },
    [ActionNames.ACCOUNTINFO]: () => { },
    [ActionNames.GLOSSARY]: () => { },
    [ActionNames.SEASON]: () => {}
}