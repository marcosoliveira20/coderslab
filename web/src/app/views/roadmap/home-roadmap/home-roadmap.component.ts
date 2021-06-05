import { ContentService } from 'src/app/services/content.service';

import { Component, OnInit } from '@angular/core';

import { RoadmapService } from '../../../services/roadmapCustom.service';

@Component({
  selector: 'app-home-roadmap',
  templateUrl: './home-roadmap.component.html',
  styleUrls: ['./home-roadmap.component.scss'],
})
export class HomeRoadmapComponent implements OnInit {
  public roadmap_list = [];
  public roadmapList = [];
  public typeFilter = 'all';

  filter(type: string) {
    this.typeFilter = type;

    switch (type) {
      case 'concluded':
        this.roadmapList = this.roadmap_list.filter((r) => r.is_done);
        break;
      case 'inProgress':
        this.roadmapList = this.roadmap_list.filter((r) => !r.is_done);
        break;

      case 'default':
        this.roadmapList = this.roadmap_list.filter((r) => r.is_default);
        break;
      case 'custom':
        this.roadmapList = this.roadmap_list.filter((r) => !r.is_default);
        break;
      default:
        this.roadmapList = this.roadmap_list;
    }
  }

  constructor(
    private roadmapService: RoadmapService,
    private contentService: ContentService,
  ) {}

  ngOnInit() {
    this.roadmapService
      .getRoadmapListByUser('60b5689c1a0293229c6002ae')
      .then((data) => {
        data.map((roadmap) => {
          this.contentService.getDashboard(roadmap._id).then((dashboard) => {
            this.roadmap_list.push({
              id: roadmap._id,
              name: roadmap.name,
              is_default: roadmap.is_default,
              is_done: roadmap.is_done,
              level: roadmap.level,
              progress: `${dashboard.percentInProgress}%`,
              content_status: {
                total: roadmap.quantity_contents,
                complete: dashboard.done,
                late: dashboard.late,
              },
              content_list: [],
            });
          });
        });
        this.filter('');
      });
  }
}
