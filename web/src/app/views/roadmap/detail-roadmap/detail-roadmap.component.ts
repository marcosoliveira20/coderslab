import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-detail-roadmap",
  templateUrl: "./detail-roadmap.component.html",
  styleUrls: ["./detail-roadmap.component.scss"],
})
export class DetailRoadmapComponent implements OnInit {
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
}
