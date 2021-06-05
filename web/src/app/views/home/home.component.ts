import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { roadmapMock, userMock } from "src/app/app.component";
import { GroupService } from "src/app/services/group.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public weekDaysInitials = ["D", "S", "T", "Q", "Q", "S", "S"];
  public currentDay: Date = new Date();
  public weekDayList: any = [];

  public contentIndexList: string[] = [];
  public user = userMock;
  public roadmapList: any = roadmapMock;
  public selectedRoadmap: any;
  public selectedRoadmapIndex: number = 0;
  public groupList = [];

  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.selectedRoadmap = this.roadmapList[this.selectedRoadmapIndex];
    console.log(this.selectedRoadmap);

    this.selectedRoadmap.content_list.map((content) =>
      this.contentIndexList.push(content.id)
    );

    this.getWeekDayList();

    this.groupService.getAllGroupsByUser().then(data => {
      this.groupList = data
      console.log("grupo: ", data.length)
    })
  }

  changeRoadmap(action) {
    if (action === "prev") {
      this.selectedRoadmapIndex =
        this.selectedRoadmapIndex - 1 < 0
          ? this.roadmapList.length - 1
          : this.selectedRoadmapIndex - 1;
    } else {
      this.selectedRoadmapIndex =
        this.selectedRoadmapIndex + 1 >= this.roadmapList.length
          ? 0
          : this.selectedRoadmapIndex + 1;
    }

    this.selectedRoadmap = this.roadmapList[this.selectedRoadmapIndex];
    console.log(this.roadmapList.length);
  }

  getWeekDayList() {
    const weekStartDay = moment().startOf("week");

    for (let i = 0; i < 7; i++)
      this.weekDayList.push(weekStartDay.add(1, "d").toDate());
  }

  verifyActiveDate(day) {
    return (
      Number(day.toString()[8] + day.toString()[9]) ===
      this.currentDay.getDate()
    );
  }

  getContentNumber(content): number {
    return this.contentIndexList.findIndex((c) => c === content.id) + 1;
  }
}
