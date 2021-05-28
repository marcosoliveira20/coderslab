import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { roadmapMock } from "src/app/app.component";
import { graphDataMock } from "src/mock";

@Component({
  selector: "app-detail-roadmap",
  templateUrl: "./detail-roadmap.component.html",
  styleUrls: ["./detail-roadmap.component.scss"],
})
export class DetailRoadmapComponent implements OnInit {
  public graphData = graphDataMock

  public contentIndexList: string[] = [];
  public filteredContentList: any;
  public roadmap: any;
  public typeFilter: string = "all";

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const token = this.activatedRoute.snapshot.paramMap.get("token");
    this.roadmap = roadmapMock.find((roadmap) => String(roadmap.id) === token); // TODO integration query here

    this.roadmap.content_list.map((content) =>
      this.contentIndexList.push(content.id)
    );

    this.filter("all");
  }

  /**
   * filter content list
   * @param type
   */
  filter(type: string) {
    this.typeFilter = type;

    switch (type) {
      case "done":
        this.filteredContentList = this.roadmap.content_list.filter(
          (content) => content.is_done
        );
        break;
      case "inProgress":
        this.filteredContentList = this.roadmap.content_list.filter(
          (content) => !content.is_done
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
    return this.contentIndexList.findIndex((c) => c === content.id) + 1;
  }
}
