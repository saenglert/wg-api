import { Action } from "../..";
import * as CommanderSkills from "./commanderskills";

export enum ActionNames {
    INFO = "info",
    WARSHIPS = "ships",
    ACHIEVEMENTS = "achievements",
    COMMANDER_SKILLS = "crewskills",
}

export interface Actions {
    [ActionNames.COMMANDER_SKILLS]: Action<ActionNames, CommanderSkills.Parameters, CommanderSkills.ConfigType>;
}

export const Actions: Actions = {
    [ActionNames.COMMANDER_SKILLS]: CommanderSkills.Action,
};
