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
  @Input() disableButton:boolean;

  constructor(private router: Router) {
    this.type = this.type !== 'minimal'
      && this.type !== 'member'
      && this.type !== 'roadmap'
      && 'default';
  }

  ngOnInit() {
  }

  handleRedirectToGroup = (groupToken) => this.router.navigate([`/groups`, groupToken])
  handleRedirectToRoadmap = (roadmapId) => this.router.navigate([`/roadmap`, roadmapId])
}
