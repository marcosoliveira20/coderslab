import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { RoadmapService } from "../../../services/roadmapCustom.service";

@Component({
  selector: "app-new-roadmap",
  templateUrl: "./new-roadmap.component.html",
  styleUrls: ["./new-roadmap.component.scss"],
})
export class NewRoadmapComponent implements OnInit {
  public isNewCustomRoadmap: boolean;

  private taskModel = {
    title: "",
    end_date: "",
    link: "",
    description: "",
  };
  public taskList = [{ ...this.taskModel }];

  public roadmapForm = this.fb.group({
    name: ["", Validators.required],
    level: ["", Validators.required],
    objective: ["", Validators.required],
    content_list: ["", Validators.required],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private roadmapService: RoadmapService
  ) {}

  ngOnInit() {
    this.verifyUrlParam();
  }

  verifyUrlParam() {
    if (this.activatedRoute.snapshot.url[2])
      this.isNewCustomRoadmap =
        this.activatedRoute.snapshot.url[2].path === "custom";
  }

  addNewTaskObject() {
    this.taskList.push({ ...this.taskModel });
  }

  handleTaskChange(event, index) {
    console.log(this.taskList);
    console.log(index);

    this.taskList[index][event.target.name] = event.target.value;
    console.log(this.taskList);
  }

  onSubmitRegister() {
    // TODO validações
    this.roadmapService
      .createCustomRoadmap(this.roadmapForm.value)
      .then((data) => console.log(data));
  }
}
