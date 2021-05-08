import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data;
  @Input() type:string;
  @Input() buttonLabel:string = "ver mais";
  @Input() enableButton:boolean;

  constructor(private router: Router) {
    this.type = this.type !== 'minimal' && this.type !== 'member' && 'default';
  }

  ngOnInit() {
  }

  handleRedirect(token) {
    this.router.navigate([`/groups`, token])
  }
}
