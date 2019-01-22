import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.scss']
})
export class ArtCardComponent implements OnInit {
  @Input() artUri: string;

  constructor() { }

  ngOnInit() {
  }

}
