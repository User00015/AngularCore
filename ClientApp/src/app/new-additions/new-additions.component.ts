import { Component, OnInit } from '@angular/core';
import { ImagesService } from "../services/images.service";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";


@Component({
  selector: 'app-new-additions',
  templateUrl: './new-additions.component.html',
  styleUrls: ['./new-additions.component.scss']
})
export class NewAdditionsComponent implements OnInit {
  images$: Observable<{img: string, thumb: string, description: string}[]>;
  images: any;

  constructor(private imageService: ImagesService) { }

  ngOnInit() {
    this.images$ = this.imageService.getNewAdditions(0);

  }

}
