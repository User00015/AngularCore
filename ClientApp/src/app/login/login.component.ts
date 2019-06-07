import { Component, OnInit } from '@angular/core';
import { LoginService } from "../core/services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  password: string;
  username: string;

  ngOnInit() {
  }

  private signIn() {
    this.loginService.login({ username: this.username, password: this.password }).subscribe(t => {
      this.router.navigate(['/home']);
    });
  }

}
