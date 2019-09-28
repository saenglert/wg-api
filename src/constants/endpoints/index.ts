import *  as WOWS from "./wows";
import { ServiceNames } from "../services";
import { AxiosRequestConfig } from "axios";
import Realm from "../realm";

export type ActionConfigType = (application_id: string, realm: Realm, ...args: any[]) => AxiosRequestConfig;

export type EndpointNames = WOWS.EndpointNames

export const ActionNames = WOWS.ActionNames;

export type Endpoint = {
    name: EndpointNames,
}

export const Endpoints = {
    [ServiceNames.WOWS]: WOWS.Endpoints
}

export default Endpoints;