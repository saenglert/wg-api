/**
 * Clans
 */

export enum ActionNames {
    LIST = "list",
    INFO = "info",
    ACCOUNTINFO = "accountinfo",
    GLOSSARY = "glossary",
    SEASON = "seasons",
}

export type Actions = {
    [ActionName in ActionNames]: () => void;
};

export const Actions: Actions = {
    [ActionNames.LIST]: () => {/** @todo */},
    [ActionNames.INFO]: () => {/** @todo */},
    [ActionNames.ACCOUNTINFO]: () => {/** @todo */},
    [ActionNames.GLOSSARY]: () => {/** @todo */},
    [ActionNames.SEASON]: () => {/** @todo */},
};
