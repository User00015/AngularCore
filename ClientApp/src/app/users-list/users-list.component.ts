import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public users = [
    {
      name: "User 1",
      images: [
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg",
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg",
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg"
      ]
    },
    {
      name: "User 56",
      images: [
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg",
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg"
      ]
    },
    {
      name: "User 1820",
      images: [
        "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg",
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
