import { Store } from "./store";
import { Injectable } from '@angular/core';

@Injectable()
export class ImageStore extends Store<ImageState> {

  constructor() {
    super(new ImageState());
  }

  addImage(src: string): void {
    this.setState({ ...this.state, images: [...this.state.images, {src: src}]});
  }

}

export class ImageState {
  images: {src: string}[] = [];
}
