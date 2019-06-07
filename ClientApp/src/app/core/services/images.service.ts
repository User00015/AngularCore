import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { map } from "rxjs/operators";
import {ImageStore} from "../store/images.store"

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private imageStore: ImageStore) { }

  getImages(): Observable<any> {
    return this.imageStore.state$;
  }

  addImage(src: any): void {
    this.imageStore.addImage(src);
  }
}
