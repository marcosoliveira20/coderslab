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
  public group_list = [];

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
    this.group_list = [];
    this.exploreForm.controls["level"].setValue(Number(this.exploreForm.value.level));

    this.groupService.getAllGroupsBySearch(this.exploreForm.value).then(data => {
      data.map(x => {
        let obj = {
          token: x.token,
          name: x.name,
          subject_label: x.subject_label,
          level: x.level,
          next_schedule: x.next_schedule,
          number_members: x.number_members,
        }
        this.group_list.push(obj);
      });
      this.user.group_list = this.group_list;
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
      data.map(x => {
        let obj = {
          token: x.token,
          name: x.name,
          subject_label: x.subject_label,
          level: x.level,
          next_schedule: x.next_schedule,
          number_members: x.number_members,
        }
        this.group_list.push(obj);
      });
    });
    this.user.group_list = this.group_list;
  }
}
