import { ServiceNames } from "../services";
import * as WOWS from "./wows";

export type EndpointNames = WOWS.EndpointNames;

export const EndpointNames = {
    ...WOWS.EndpointNames,
};

export interface Endpoints {
    [ServiceNames.WOWS]: WOWS.Endpoints;
}

export const Endpoints: Endpoints = {
    [ServiceNames.WOWS]: WOWS.Endpoints,
};
