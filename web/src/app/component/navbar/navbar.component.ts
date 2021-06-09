import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/animation/fade.animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [fadeIn]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
