import { Component, OnInit } from '@angular/core';
import { roadmapMock } from 'src/app/app.component';

@Component({
  selector: 'app-home-roadmap',
  templateUrl: './home-roadmap.component.html',
  styleUrls: ['./home-roadmap.component.scss']
})
export class HomeRoadmapComponent implements OnInit {
  public roadmap_list = roadmapMock;
  public roadmapList = roadmapMock;

  typeFilter: string="all";


  filter(type: string) {

    this.typeFilter = type;

    switch (type) {
      case "concluded":
        this.roadmapList = this.roadmap_list.filter(r => r.is_done)
        break;
      case "inProgress":
        this.roadmapList = this.roadmap_list.filter(r => !r.is_done)
        break;

      case "default":
        this.roadmapList = this.roadmap_list.filter(r => r.is_default)
        break;
      case "custom":
        this.roadmapList = this.roadmap_list.filter(r => !r.is_default)
        break;
      default:
        this.roadmapList = this.roadmap_list;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
