import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from "../core/services/login.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'router-links',
  templateUrl: './router-links.component.html',
  styleUrls: ['./router-links.component.scss']
})
export class RouterLinksComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  private loggedIn:Observable<any>; 

  ngOnInit() {
    this.loggedIn = this.loginService.currentUser;
  }

  logout() {
    this.loginService.logout();
  }

  public links = ["Home", "Users", "Test"];

}
