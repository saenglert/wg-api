import { Actions as AccountActions, ActionNames as AccountActionNames} from "./account";
import { Actions as EncyclopediaActions, ActionNames as EncyclopediaActionNames } from "./encyclopedia";
import { Actions as WarshipsActions, ActionNames as WarshipsActionNames} from "./warships";
import { Actions as SeasonsActions, ActionNames as SeasonsActionNames } from "./seasons";
import { Actions as ClansActions, ActionNames as ClansActionNames } from "./clans";

export type Actions<Endpoint> = AccountActions | EncyclopediaActions | WarshipsActions | SeasonsActions | ClansActions;

export const Actions = {
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

export type Endpoints = {
    [Endpoint in EndpointNames]: Actions<Endpoint>;
};

export const Endpoints: Endpoints = {
    [EndpointNames.ACCOUNT]: AccountActions,
    [EndpointNames.ENCYCLOPEDIA]: EncyclopediaActions,
    [EndpointNames.WARSHIPS]: WarshipsActions,
    [EndpointNames.SEASONS]: SeasonsActions,
    [EndpointNames.CLANS]: ClansActions
};

export default Endpoints;