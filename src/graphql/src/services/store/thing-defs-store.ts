import { RESTDataSource } from "apollo-datasource-rest";
import { PropDef, ThingDef } from "models";

import StoreOptions from "./store-options";

class ThingDefsStore extends RESTDataSource {
  constructor(storeOptions: StoreOptions) {
    super();
    this.baseURL = storeOptions.url;
  }

  public async create(propDefs: PropDef[]): Promise<ThingDef> {
    return this.post("api/thingDefs", { propDefs });
  }
}

export default ThingDefsStore;
