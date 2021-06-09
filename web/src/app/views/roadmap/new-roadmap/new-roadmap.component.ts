import { SubjectService } from "src/app/services/subject.service";

import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { RoadmapService } from "../../../services/roadmapCustom.service";
import { fadeIn } from "src/app/animation/fade.animation";

@Component({
  selector: "app-new-roadmap",
  templateUrl: "./new-roadmap.component.html",
  styleUrls: ["./new-roadmap.component.scss"],
  animations: [fadeIn]
})
export class NewRoadmapComponent implements OnInit {
  public isNewCustomRoadmap: boolean = false;
  public type: string = "roadmap";
  private user_id: string = localStorage.getItem('id');
  public interestList: any = [];
  public taskList: any = [];

  private taskModel = {
    title: "",
    end_date: "",
    link: "",
    description: "",
  };

  public roadmapForm = this.fb.group({
    name: ["", Validators.required],
    level: ["-1", Validators.required],
    objective: ["", Validators.required],
    content_list: ["", Validators.required],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private roadmapService: RoadmapService,
    private subjectService: SubjectService
  ) {}

  ngOnInit() {
    this.verifyUrlParam();

    this.subjectService.getAllSubjects().then((data) => {
      data.map((subject) => {
        this.interestList.push({ token: subject._id, name: subject.label });
      });
    });

    this.taskList = [[{ ...this.taskModel }]];
  }


  filter(typeFilter: string) {
    this.type = typeFilter;
  }

  // TODO validações
  onSubmit() {
    const content_list = [];

    this.taskList.splice(0, 1);

    this.taskList.map((task) => {
      content_list.push({
        title: task.title,
        deadline: task.end_date,
        reference: task.link,
        description: task.description,
      });
    });

    this.roadmapForm.patchValue({
      content_list,
    });

    this.roadmapService
      .createCustomRoadmap(this.roadmapForm.value, this.user_id)
      .then((data) => console.log(`Registro:${data}`));

    this.ngOnInit();

    this.roadmapForm.controls["roadmapForm"].setValue("");
  }

  verifyUrlParam() {
    if (this.activatedRoute.snapshot.url[2])
      this.isNewCustomRoadmap =
        this.activatedRoute.snapshot.url[2].path === "custom";
  }

  addNewTaskObject() {
    this.taskList.unshift({ ...this.taskModel });
  }

  removeTask(index) {
    this.taskList.splice(index, 1);
  }

  handleTaskChange(event, index) {
    this.taskList[index][event.target.name] = event.target.value;
    console.log(this.taskList);
  }
}
