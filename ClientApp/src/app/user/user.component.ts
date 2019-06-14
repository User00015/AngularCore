import { Component, OnInit, Input } from '@angular/core';
import { User } from "../core/models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  onClick(user: User) {
    console.log(user);
  }

  @Input() user: User;

}
