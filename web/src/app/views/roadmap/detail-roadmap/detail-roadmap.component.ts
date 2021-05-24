import { Component, OnInit } from "@angular/core";
import { roadmapMock } from "src/app/app.component";

@Component({
  selector: "app-detail-roadmap",
  templateUrl: "./detail-roadmap.component.html",
  styleUrls: ["./detail-roadmap.component.scss"],
})
export class DetailRoadmapComponent implements OnInit {
  public roadmap_list = roadmapMock;
  public typeFilter:string = "all";

  graphList = [
    {
      date: "20/04",
      quantity: 4,
      completedQuantity: 4,
    },
    {
      date: "20/05",
      quantity: 3,
      completedQuantity: 3,
    },
    {
      date: "20/06",
      quantity: 2,
      completedQuantity: 1,
    },
    {
      date: "20/06",
      quantity: 1,
      completedQuantity: 2,
    },
    {
      date: "20/07",
      quantity: 0,
      completedQuantity: 0,
    },
  ];

  constructor() {}

  ngOnInit() {}

  filter(type: string) {

    this.typeFilter = type;

    switch (type) {
      case "concluded":
        this.roadmap_list = roadmapMock.filter(roadmap => roadmap.is_done)
        break;
      case "inProgress":
        this.roadmap_list = roadmapMock.filter(roadmap => !roadmap.is_done)
        break;
      default:
        this.roadmap_list = roadmapMock;
    }
  }
}
