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