import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { fadeIn } from "src/app/animation/fade.animation";
import { RoadmapDefaultService } from "src/app/services/roadmapDefault.service";
import { RoadmapGeneralService } from "src/app/services/roadmapGeneral.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-list-roadmap",
  templateUrl: "./list-roadmap.component.html",
  styleUrls: ["./list-roadmap.component.scss"],
  animations: [fadeIn]
})
export class ListRoadmapComponent implements OnInit {
  public roadmap_list: any;
  private user_id: string = localStorage.getItem("id");
  public showInput: boolean = false;

  public searchForm = this.fb.group({
    objective: [""],
    subjectSearch: [""],
    level: [""],
  });

  constructor(
    private fb: FormBuilder,
    private roadmapGeneralService: RoadmapGeneralService,
    private roadmapDefaultService: RoadmapDefaultService,
    private userService: UserService,
    private router: Router
  ) {}

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

  handleSelectedRoadmap(selectedRoadmap) {
    this.roadmapDefaultService
      .getRoadmapListByUser(this.user_id)
      .then(userRoadmapList => {

        userRoadmapList.find(roadmap => roadmap._id === selectedRoadmap._id)
          ? this.router.navigate(["/roadmap/", selectedRoadmap._id])

          : this.roadmapGeneralService
            .createRoadmapDefault(selectedRoadmap, this.user_id)
            .then(() => this.router.navigate(["/roadmap/", selectedRoadmap._id]))
            .catch(err => console.error(err))
      })
  }
}
