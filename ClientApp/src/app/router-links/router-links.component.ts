import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'router-links',
  templateUrl: './router-links.component.html',
  styleUrls: ['./router-links.component.scss']
})
export class RouterLinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public links = ["Home", "Users", "Test"];


}
