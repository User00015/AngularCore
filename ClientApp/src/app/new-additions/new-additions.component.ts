import { Component, OnInit } from '@angular/core';
import { ImagesService } from "../services/images.service";
import { BehaviorSubject, Observable } from "rxjs";
import { tap, map } from "rxjs/operators";


@Component({
  selector: 'app-new-additions',
  templateUrl: './new-additions.component.html',
  styleUrls: ['./new-additions.component.scss']
})
export class NewAdditionsComponent implements OnInit {
  images$: Observable<string>;

  constructor(private imageService: ImagesService) { }

  addImage() {
    var randomInt = this.getRandomInt(0, 9);
    this.imageService.addImage(this.images[randomInt].img);
  }

  ngOnInit() {
    this.images$ = this.imageService.getImages();
    this.images.forEach(i => this.imageService.addImage(i.img));
  }


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


  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
}
