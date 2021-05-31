import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { roadmapMock, userMock } from "src/app/app.component";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  // Calendar
  public weekDaysInitials = ["D", "S", "T", "Q", "Q", "S", "S"];
  public currentDay: Date = new Date; // get current date
  public weekDayList:any = [];

  // public firstDayOfWeek = currentDay. - curr.getDay(); // First day is the day of the month - the day of the week
  // var last = first + 6; // last day is the first day + 6

  // var firstday = new Date(curr.setDate(first)).toUTCString();
  // var lastday = new Date(curr.setDate(last)).toUTCString();


  public user = userMock;
  public roadmapList: any = roadmapMock;
  public selectedRoadmap: any;
  public selectedRoadmapIndex: number = 0;
  public data = {
    progress: "100%",
  };

  constructor() {}

  ngOnInit() {
    this.selectedRoadmap = this.roadmapList[this.selectedRoadmapIndex];
    this.getWeekDayList()
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

  getWeekDayList() {
    const weekStartDay = moment().startOf('week')

    for (let i = 0; i<7; i++)
      this.weekDayList.push(
        weekStartDay.add(1, 'd').toDate()
      )
  }

  verifyActiveDate(day) {
    return Number(day.toString()[8]+day.toString()[9]) === this.currentDay.getDate()
  }
}
