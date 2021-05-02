import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data;
  @Input() isMinimal:boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  handleRedirect(token) {
    this.router.navigate([`/groups`, token])
  }
}
