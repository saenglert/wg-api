import { Endpoints } from "../src/constants/endpoints";
import { EndpointNames as WOWSEndpointNames } from "../src/constants/endpoints/wows";
import { ActionNames as WOWSEncyclopediaActionNames } from "../src/constants/endpoints/wows/encyclopedia/actions";
import Realm from "../src/constants/realm";
import { ServiceNames } from "../src/constants/services";
import API from "../src/index";



it("Should create an api object", () => {
    const api = new API("15ee057b8183ca1acc8f93423674b27e");
    expect(api).toBeDefined();
});

it("Should be able to request commander skills", async () => {
    const api = new API("15ee057b8183ca1acc8f93423674b27e");
    const commanderSkills = JSON.parse(await api.request(Endpoints[ServiceNames.WOWS][WOWSEndpointNames.ENCYCLOPEDIA][WOWSEncyclopediaActionNames.COMMANDER_SKILLS].config(Realm.EU)));
    expect(commanderSkills).toBeDefined();
});
