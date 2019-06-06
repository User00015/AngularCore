import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'router-links',
  templateUrl: './router-links.component.html',
  styleUrls: ['./router-links.component.scss']
})
export class RouterLinksComponent implements OnInit {

  constructor() { }
  private loggedIn = false;

  ngOnInit() {

  }
  public links = ["Home", "Users", "Test"];

  private login() {
    this.loggedIn = !this.loggedIn;

  }

  private logout() {
    this.loggedIn = !this.loggedIn;
  }
}
