import { Component, OnInit } from '@angular/core';
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  password: string;
  username: string;

  ngOnInit() {
  }

  private signIn() {
    this.loginService.login({ name: this.username, password: this.password });
  }

}
