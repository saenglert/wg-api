import { ActionConfigType } from "../..";
import Services from "../../../services";
import Realm from "../../../realm";
import { AxiosRequestConfig } from "axios";
import { getUrl } from "../../..";

/**
 * Encyclopedia
 */

export enum ActionNames {
    INFO = "info",
    WARSHIPS = "ships",
    ACHIEVEMENTS = "achievements"
}

export type ActionType = {
    [ActionName in ActionNames]: ActionConfigType;
}

type Field = {
    name: string, 
    exlude?: boolean
};

const InfoAction: ActionConfigType = (application_id: string, realm: Realm, fields: Field[], language: string): AxiosRequestConfig => {
    return {
        url: getUrl(Services.wows, realm),
        params: {
            application_id,
            fields: fields.map(field => field.exlude ? `-${field.name}` : field.name).join(","),
            language,
        }
    }
} 

export const Actions: ActionType = {
    [ActionNames.INFO]: InfoAction,
    [ActionNames.WARSHIPS]: () => ({}),
    [ActionNames.ACHIEVEMENTS]: () => ({}),
}

InfoAction("stuff", Realm.NA)