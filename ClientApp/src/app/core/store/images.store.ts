import { Store } from "./store";
import { Injectable } from '@angular/core';

@Injectable()
export class ImageStore extends Store<ImageState> {

  constructor() {
    super(new ImageState());
  }

  addImage(url: string): void {
    this.setState({ ...this.state, source: [...this.state.source, {url: url}]});
  }

}

export class ImageState {
  source: {url: string}[] = [];
}
