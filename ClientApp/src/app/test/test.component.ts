import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  foo:any;

  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.foo = this.http.get("https://localhost:5001/api/SampleData/WeatherForecasts").toPromise();
  }

}
