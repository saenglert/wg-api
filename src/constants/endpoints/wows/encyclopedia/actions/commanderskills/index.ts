import { AxiosRequestConfig } from "axios";
import { ActionNames } from "..";
import { Action as ActionType } from "../../..";
import { APILanguageNames, Field, getUrl } from "../../../../..";
import Realm from "../../../../../realm";
import Services from "../../../../../services";

export enum FieldNames {
    ICON = "icon",
    NAME = "name",
    TIER = "tier",
    TYPE_ID = "type_id",
    PERKS = "perks",
    PERKS_DESCRIPTION = "perks.description",
    PERKS_PERK_ID = "perks.perk_id",
}

export enum ParameterNames {
    FIELDS = "fields",
    LANGUAGE = "language",
    SKILL_ID = "skill_id",
}

export interface Parameters {
    [ParameterNames.FIELDS]: typeof FieldNames;
    [ParameterNames.LANGUAGE]: typeof APILanguageNames;
    [ParameterNames.SKILL_ID]: ParameterNames.SKILL_ID;
}

export const Parameters: Parameters = {
    [ParameterNames.FIELDS]: FieldNames,
    [ParameterNames.LANGUAGE]: APILanguageNames,
    [ParameterNames.SKILL_ID]: ParameterNames.SKILL_ID,
};

export type ConfigType = (realm: Realm, fields?: Array<Field<FieldNames>>, language?: APILanguageNames, skillID?: number[]) => AxiosRequestConfig;

export const Action: ActionType<ActionNames, Parameters, ConfigType> = {
    parameters: Parameters,
    path: ActionNames.COMMANDER_SKILLS,

    config: (realm: Realm, fields?: Array<Field<FieldNames>>, language?: APILanguageNames, skillID?: number[]): AxiosRequestConfig => {
        let fieldsList;
        if (fields) {
            fieldsList = fields.map((field) => field.exlude ? `-${field.name}` : field.name).join(",");
        }

        let skillIDList;
        if (skillID) {
            skillIDList = skillID.join(",");
        }

        return {
            params: {
                [ParameterNames.FIELDS]: fieldsList,
                [ParameterNames.LANGUAGE]: language,
                [ParameterNames.SKILL_ID]: skillIDList,
            },
            url: getUrl(Services.wows, realm),
        };
    },
};
