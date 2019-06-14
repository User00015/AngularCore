import { Store } from "./store";
import { Injectable } from '@angular/core';

@Injectable()
export class UserStore extends Store<UserState> {

  constructor() {
    super(new UserState());
  }

  setUser(src: any): void {
    this.setState({ ...this.state, user: src });
  }
}

export class UserState {
  user:any = null;
}
