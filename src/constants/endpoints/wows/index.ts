import { Actions as AccountActions, ActionType as AccountActionType, ActionNames as AccountActionNames} from "./account";
import { Actions as EncyclopediaActions, ActionType as EncyclopediaActionType, ActionNames as EncyclopediaActionNames } from "./encyclopedia";
import { Actions as WarshipsActions, ActionType as WarshipsActionType, ActionNames as WarshipsActionNames} from "./warships";
import { Actions as SeasonsActions, ActionType as SeasonsActionType, ActionNames as SeasonsActionNames } from "./seasons";
import { Actions as ClansActions, ActionType as ClansActionType, ActionNames as ClansActionNames } from "./clans";

export type ActionType = AccountActionType | EncyclopediaActionType | WarshipsActionType | SeasonsActionType | ClansActionType;
export const ActionNames = {
    ...AccountActionNames,
    ...EncyclopediaActionNames,
    ...WarshipsActionNames,
    ...SeasonsActionNames,
    ...ClansActionNames
};

export enum EndpointNames {
    ACCOUNT = "account",
    ENCYCLOPEDIA = "encyclopedia",
    WARSHIPS = "warships",
    SEASONS = "seasons",
    CLANS = "clans"
}

export type EndpointsType = {
    [Endpoint in EndpointNames]: ActionType;
};

export const Endpoints: EndpointsType = {
    [EndpointNames.ACCOUNT]: AccountActions,
    [EndpointNames.ENCYCLOPEDIA]: EncyclopediaActions,
    [EndpointNames.WARSHIPS]: WarshipsActions,
    [EndpointNames.SEASONS]: SeasonsActions,
    [EndpointNames.CLANS]: ClansActions
};

export default Endpoints;