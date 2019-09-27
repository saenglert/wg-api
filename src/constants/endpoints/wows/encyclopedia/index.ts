/**
 * Encyclopedia
 */

export enum ActionNames {
    INFO = "info",
    WARSHIPS = "ships",
    ACHIEVEMENTS = "achievements"
}

export type ActionType = {
    [ActionName in ActionNames]: () => void;
}

export const Actions = {
    [ActionNames.INFO]: () => {},
    [ActionNames.WARSHIPS]: () => {},
    [ActionNames.ACHIEVEMENTS]: () => {},
}