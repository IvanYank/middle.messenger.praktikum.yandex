import set from "../utils/set";
import EventBus from "./event-bus";
import { Indexed } from "./types";

export enum StoreEvents {
  UpdatedProfile = 'updatedProfile',
  UpdatedChats = 'updatedChats',
}

class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown, event: string) {
    set(this.state, path, value);
    this.emit(event);
  }
}

export default new Store()
