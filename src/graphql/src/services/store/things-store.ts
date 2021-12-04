import { RESTDataSource } from "apollo-datasource-rest";
import { Thing } from "models";

import StoreOptions from "./store-options";

class ThingsStore extends RESTDataSource {
  constructor(storeOptions: StoreOptions) {
    super();
    this.baseURL = storeOptions.url;
  }

  public async getById(id: string): Promise<Thing> {
    return this.get(`api/things/${id}`);
  }
}

export default ThingsStore;
