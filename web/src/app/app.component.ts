import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hideNavbar:boolean;
  title:string = 'web';

  constructor(private router: Router) {
    this.hideNavbar = router.url === '/login' || router.url === '/groups/explore'
  }
}
