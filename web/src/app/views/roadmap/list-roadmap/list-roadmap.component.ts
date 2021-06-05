import { roadmapMock } from "src/app/app.component";

import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-list-roadmap",
  templateUrl: "./list-roadmap.component.html",
  styleUrls: ["./list-roadmap.component.scss"],
})
export class ListRoadmapComponent implements OnInit {
  public roadmap_list = roadmapMock;
  showInput: boolean;

  searchForm = this.fb.group({
    objective: [""],
    subjectSearch: [""],
    level: [""],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.searchForm.value);
  }
  ngOnInit() {}

  setShowInput() {
    this.showInput = !this.showInput;
  }
}
