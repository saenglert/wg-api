import { Actions as AccountActions, ActionType as AccountActionType} from "./account";
import { Actions as EncyclopediaActions, ActionType as EncyclopediaActionType } from "./encyclopedia";
import { Actions as WarshipsActions, ActionType as WarshipsActionType } from "./warships";
import { Actions as SeasonsActions, ActionType as SeasonsActionType } from "./seasons";
import { Actions as ClansActions, ActionType as ClansActionType } from "./clans";

type ActionType = AccountActionType | EncyclopediaActionType | WarshipsActionType | SeasonsActionType | ClansActionType;

enum EndpointNames {
    ACCOUNT = "account",
    ENCYCLOPEDIA = "encyclopedia",
    WARSHIPS = "warships",
    SEASONS = "seasons",
    CLANS = "clans"
}

type EndpointsType = {
    [Endpoint in EndpointNames]: ActionType;
};

const Endpoints: EndpointsType = {
    [EndpointNames.ACCOUNT]: AccountActions,
    [EndpointNames.ENCYCLOPEDIA]: EncyclopediaActions,
    [EndpointNames.WARSHIPS]: WarshipsActions,
    [EndpointNames.SEASONS]: SeasonsActions,
    [EndpointNames.CLANS]: ClansActions
};

export default Endpoints