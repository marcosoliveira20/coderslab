import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { fadeIn } from "src/app/animation/fade.animation";
import { RoadmapGeneralService } from "src/app/services/roadmapGeneral.service";

@Component({
  selector: "app-list-roadmap",
  templateUrl: "./list-roadmap.component.html",
  styleUrls: ["./list-roadmap.component.scss"],
  animations: [fadeIn]
})
export class ListRoadmapComponent implements OnInit {
  public roadmap_list;
  showInput: boolean;

  searchForm = this.fb.group({
    objective: [""],
    subjectSearch: [""],
    level: [""],
  });

  constructor(private fb: FormBuilder, private roadmapGeneralService: RoadmapGeneralService) {}

  onSubmit() {
    console.log(this.searchForm.value);
  }
  ngOnInit() {
    this.roadmapGeneralService.getAllRoadmapDefault().then(data => {
      this.roadmap_list = data;
    })
  }

  setShowInput() {
    this.showInput = !this.showInput;
  }
}
