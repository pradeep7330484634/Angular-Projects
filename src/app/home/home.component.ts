import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  backendData = [
    {
      "$class": "ms.education.login#Pradeep",
      "emial": "pradee"
    },
    {
      "$class": "ms.education.login#suma",
      "emial": "pradee"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
