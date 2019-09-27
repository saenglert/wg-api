import axios from "axios";
import Service from "../../constants/services";
import Realm from "../../constants/realm";
import ApiResponse from "../../constants/apiResponse";
import CrewSkill from "../../constants/crewSkill";
import { getUrl, authParameter } from "../../constants";

/**
 * Basic options for an api connection
 * 
 * @constant applicationID Applcation ID assigned by Wargaming (keep secret)
 * @constant service Game specific api service to be used
 * @constant realm Service region to be used for requests
 */
export interface Options {
    applicationID: string;
    service: Service
    realm: Realm;
}

export default class Connection {

    applicationID: string;
    service: Service;
    realm: Realm

    constructor(options: Options) {

    }
    
    /**
     * GET based request
     * 
     * @param resource The api endpoint to be called
     * @param parameters GET parameters to be included in the request
     */
    get = async (resource: string, parameters: {[key: string] : string}  = {}) => {
        const params = [...Object.keys(parameters).map(key => `${key}=${parameters[key]}`), `${authParameter}=${parameters.applicationID}`]
        const response = await axios.get<ApiResponse<CrewSkill[]>>(`${getUrl(this.service, this.realm)}${resource}/?${params.join("&")}`)
        return response.data;
    }
}