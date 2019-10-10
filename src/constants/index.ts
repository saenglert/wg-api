import { Service, ServiceNames } from "./services"
import Realm from "./realm";

export const authParameter = "application_id";

export const getUrl = (service: Service, realm: Realm): string | undefined => {
    if (service.name === ServiceNames.WOTC) {
        return `${realm}.${service.url}.${Realm.NA}/${service.path}`;
    };

    return `${service.url}.${realm}/${service.path}`;
}

export enum HTTPMethods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

export enum APILanguageNames {
    CS = "cs",
    DE = "de",
    EN = "en",
    FR = "fr",
    JA = "ja",
    PL = "pl",
    RU = "ru",
    TH = "th",
    ZH_TW = "zh-tw",
    TR = "tr",
    ZH_CN = "zh-cn",
    PT_BR = "pt-br",
    ES_MEX = "es-mex"
}

export type Field<FieldNames> = {
    name: FieldNames, 
    exlude?: boolean
};