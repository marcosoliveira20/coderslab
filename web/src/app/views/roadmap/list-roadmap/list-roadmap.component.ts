import { Component, OnInit } from '@angular/core';
import { roadmapMock } from 'src/app/app.component';

@Component({
  selector: 'app-list-roadmap',
  templateUrl: './list-roadmap.component.html',
  styleUrls: ['./list-roadmap.component.scss']
})
export class ListRoadmapComponent implements OnInit {

  public roadmap_list = roadmapMock;

  constructor() { }

  ngOnInit() {
  }

}
