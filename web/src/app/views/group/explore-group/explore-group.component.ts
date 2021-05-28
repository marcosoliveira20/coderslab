import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { userMock } from "../../../app.component";
import { GroupService } from "src/app/services/group.service";
@Component({
  selector: "app-explore-group",
  templateUrl: "./explore-group.component.html",
  styleUrls: ["./explore-group.component.scss"],
})
export class ExploreGroupComponent implements OnInit {
  showInput: boolean;

  public user = userMock;

  public objective_list = [
    { id: 1, name: "Java" },
    { id: 2, name: "CSS" },
    { id: 3, name: "HTML" },
  ];

  public category_listMok = [
    { id: 1, name: "Backend" },
    { id: 2, name: "Frontend" },
    { id: 3, name: "Design" },
  ];

  exploreForm = this.fb.group({
    name: [""],
    subject_label: [""],
    category: [""],
    level: [-1],
    is_alphabetical: [true]
  });

  onSubmit() {
    this.exploreForm.controls["level"].setValue(Number(this.exploreForm.value.level));

    this.groupService.getAllGroupsBySearch(this.exploreForm.value).then(data => {
      this.user.group_list = this.groupService.listGroup(data);
    });
  }

  changeAlphabetical() {
    this.exploreForm.controls["is_alphabetical"].setValue(!this.exploreForm.value.is_alphabetical);
  }

  setShowInput() {
    this.showInput = !this.showInput;
  }

  constructor(private fb: FormBuilder, private groupService: GroupService) {}

  ngOnInit() {
    this.groupService.getAllGroups().then(data => {
      this.user.group_list = this.groupService.listGroup(data);
    });
  }
}
