import { Component, OnInit } from "@angular/core";
import { roadmapMock, userMock } from "src/app/app.component";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public user = userMock;
  public roadmapList: any = roadmapMock;
  public selectedRoadmap: any;
  public selectedRoadmapIndex: number = 0;

  constructor() {}

  ngOnInit() {
    this.selectedRoadmap = this.roadmapList[this.selectedRoadmapIndex];
  }

  changeRoadmap(action) {
    if (action === "prev") {
      this.selectedRoadmapIndex =
        this.selectedRoadmapIndex - 1 < 0
          ? this.roadmapList.length - 1
          : this.selectedRoadmapIndex - 1;

      this.selectedRoadmap = this.roadmapList[this.selectedRoadmapIndex];
    } else {
      this.selectedRoadmapIndex =
        this.selectedRoadmapIndex + 1 >= this.roadmapList.length
          ? 0
          : this.selectedRoadmapIndex + 1;

      this.selectedRoadmap = this.roadmapList[this.selectedRoadmapIndex];
    }

    console.log(this.roadmapList.length);
  }
}
