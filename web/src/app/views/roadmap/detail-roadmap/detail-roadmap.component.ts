import { RoadmapService } from 'src/app/services/roadmapCustom.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeIn } from 'src/app/animation/fade.animation';

@Component({
  selector: 'app-detail-roadmap',
  templateUrl: './detail-roadmap.component.html',
  styleUrls: ['./detail-roadmap.component.scss'],
  animations: [fadeIn]
})
export class DetailRoadmapComponent implements OnInit {

  public contentIndexList: string[] = [];
  public filteredContentList: any = [];
  public roadmap: any;
  public typeFilter = 'all';

  constructor(
    private activatedRoute: ActivatedRoute,
    private roadmapService: RoadmapService,
  ) {}

  ngOnInit() {
    const token = this.activatedRoute.snapshot.paramMap.get('token');
    this.roadmapService.getRoadmapById(token).then((data) => {
      this.roadmap = data;
      data.content_list.map((content) => {
        this.contentIndexList.push(content._id);
      });
      this.filter('all');
    });
  }

  /**
   * filter content list
   * @param type
   */
  filter(type: string) {
    this.typeFilter = type;

    switch (type) {
      case 'done':
        this.filteredContentList = this.roadmap.content_list.filter(
          (content) => content.is_done,
        );
        break;
      case 'inProgress':
        this.filteredContentList = this.roadmap.content_list.filter(
          (content) => !content.is_done,
        );
        break;
      default:
        this.filteredContentList = this.roadmap.content_list;
    }
  }

  /**
   * get content number based on index at content list
   * @param content;
   * @returns content number
   */
  getContentNumber(content): number {
    return this.contentIndexList.findIndex((c) => c === content._id) + 1;
  }
}
