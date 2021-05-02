import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data:object;
  @Input() mode:string;
  public color:string = "red";
  public theme:object;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  handleRedirect(token) {
    this.router.navigate([`/groups`, token])
  }

}
