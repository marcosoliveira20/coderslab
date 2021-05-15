import { Component, OnInit } from '@angular/core';
import { userMock } from 'src/app/app.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user = userMock
  constructor() { }

  ngOnInit() {
  }

}
