import { ActionNames as AccountActionNames, Actions as AccountActions} from "./account";
import { ActionNames as ClansActionNames, Actions as ClansActions } from "./clans";
import { ActionNames as EncyclopediaActionNames, Actions as EncyclopediaActions } from "./encyclopedia/actions";
import { ActionNames as SeasonsActionNames, Actions as SeasonsActions } from "./seasons";
import { ActionNames as WarshipsActionNames, Actions as WarshipsActions} from "./warships";

export interface Action<ActionNames, ParameterNames, ConfigType> {
    path: ActionNames;
    parameters: ParameterNames;
    config: ConfigType;
}

export type Actions<ActionList> = ActionList;

export const Actions = {
    ...AccountActionNames,
    ...EncyclopediaActionNames,
    ...WarshipsActionNames,
    ...SeasonsActionNames,
    ...ClansActionNames,
};

export enum EndpointNames {
    ACCOUNT = "account",
    ENCYCLOPEDIA = "encyclopedia",
    WARSHIPS = "warships",
    SEASONS = "seasons",
    CLANS = "clans",
}

export interface Endpoints {
    [EndpointNames.ACCOUNT]: AccountActions;
    [EndpointNames.ENCYCLOPEDIA]: EncyclopediaActions;
    [EndpointNames.WARSHIPS]: WarshipsActions;
    [EndpointNames.SEASONS]: SeasonsActions;
    [EndpointNames.CLANS]: ClansActions;
}

export const Endpoints: Endpoints = {
    [EndpointNames.ACCOUNT]: AccountActions,
    [EndpointNames.ENCYCLOPEDIA]: EncyclopediaActions,
    [EndpointNames.WARSHIPS]: WarshipsActions,
    [EndpointNames.SEASONS]: SeasonsActions,
    [EndpointNames.CLANS]: ClansActions,
};
