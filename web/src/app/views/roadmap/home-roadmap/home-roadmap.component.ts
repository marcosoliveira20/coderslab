import { Component, OnInit } from '@angular/core';
import { roadmapMock } from 'src/app/app.component';

@Component({
  selector: 'app-home-roadmap',
  templateUrl: './home-roadmap.component.html',
  styleUrls: ['./home-roadmap.component.scss']
})
export class HomeRoadmapComponent implements OnInit {
  public roadmap_list = roadmapMock;



  constructor() { }

  ngOnInit() {
  }

}
