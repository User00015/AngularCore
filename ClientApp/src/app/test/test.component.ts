import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LoginService } from "../core/services/login.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  bar;
  foo:any;

  constructor(public http:HttpClient, private loginService: LoginService) { }

  ngOnInit() {
    this.foo = this.http.get("https://localhost:5001/api/SampleData/WeatherForecasts").toPromise();
    this.loginService.getUser().subscribe(t => this.bar = t);
  }

  test() {
    console.log(this.bar);
  }

}
