import * as moment from 'moment';
import { GroupService } from 'src/app/services/group.service';
import { RoadmapService } from 'src/app/services/roadmapCustom.service';
import { UserService } from 'src/app/services/user.service';

import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/animation/fade.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ fadeIn ]
})
export class HomeComponent implements OnInit {
  public weekDaysInitials = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  public currentDay: Date = new Date();
  public weekDayList: any = [];

  public contentIndexList: string[] = [];
  public user: any;
  public selectedRoadmap: any;
  public selectedRoadmapIndex = 0;
  public groupList: any;
  public roadmap = [];
  public totalTask = 0;
  public user_id: string = localStorage.getItem('id');

  constructor(
    private groupService: GroupService,
    private roadmapService: RoadmapService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.getWeekDayList();

    this.userService.getUserById(this.user_id).then((data) => {
      this.user = data;
    });

    this.groupService.getAllGroupsByUser(this.user_id).then((data) => {
      this.groupList = data;
    });

    this.roadmapService.getRoadmapListByUser(this.user_id).then((data) => {
      this.roadmap = data;

      for (const item of data) {
        this.totalTask += item.content_list.length;
      }

      this.selectedRoadmap = this.roadmap[this.selectedRoadmapIndex] ? this.roadmap[this.selectedRoadmapIndex] : [];

      this.selectedRoadmap.content_list.map((content) =>
        this.contentIndexList.push(content.id),
      );
    });
  }

  changeRoadmap(action) {
    if (action === 'prev') {
      this.selectedRoadmapIndex =
        this.selectedRoadmapIndex - 1 < 0
          ? this.roadmap.length - 1
          : this.selectedRoadmapIndex - 1;

    } else if (action === 'next') {
      this.selectedRoadmapIndex =
        this.selectedRoadmapIndex + 1 >= this.roadmap.length
          ? 0
          : this.selectedRoadmapIndex + 1;
    }

    this.selectedRoadmap = this.roadmap[this.selectedRoadmapIndex];
  }

  getWeekDayList() {
    const weekStartDay = moment().startOf('week');

    for (let i = 0; i < 7; i++)
      this.weekDayList.push(weekStartDay.add(1, 'd').toDate());
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
