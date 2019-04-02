import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  private images$ = new Subject<{img: string, thumb: string, description: string}[]>();

  private images = [
    {
      img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg", thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg", description: "Image 1"
    },
    {
      img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg", thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg", description: "Image 2"
    },
    {
      img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg", thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg", description: "Image 3"
    },
    {
      img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg", thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg", description: "Image 4"
    },
    {
      img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg", thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg", description: "Image 5"
    },
    {
      img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg", thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg", description: "Image 6"
    },
    {
      img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg", thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg", description: "Image 7"
    },
    {
      img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg", thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg", description: "Image 8"
    },
    {
      img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg", thumb:
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg", description: "Image 9"
    }
  ];

  getNewAdditions(page: number): Observable<{img: string, thumb: string, description: string}[]> {
    this.images$.next(this.images);
    return this.images$.asObservable();
    //return this.images$.asObservable();
  }
}
