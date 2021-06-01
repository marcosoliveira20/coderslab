import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { userMock } from "../../../app.component";
import { GroupService } from "src/app/services/group.service";
@Component({
  selector: "app-explore-group",
  templateUrl: "./explore-group.component.html",
  styleUrls: ["./explore-group.component.scss"],
})
export class ExploreGroupComponent implements OnInit {
  public showJoinPrivateGroupModal: boolean;
  public showConfirmJoinGroupModal: boolean;
  public showInput: boolean;
  public selectedToken: string;
  public user = userMock;
  public group: any;
  public objective_list = [];
  public userId = "60b58deb9a9359ade65bd782";

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private groupService: GroupService
  ) { }

  onSubmit() {
    this.exploreForm.controls["level"].setValue(Number(this.exploreForm.value.level));

    this.groupService.getAllGroupsBySearch(this.exploreForm.value)
      .then(data => {
        this.user.group_list = this.groupService.listGroup(data);
      })
      .catch(err => {
        this.user.group_list = [];
        // console.log("Erro: ", err);
      });
  }

  changeAlphabetical() {
    this.exploreForm.controls["is_alphabetical"].setValue(!this.exploreForm.value.is_alphabetical);
  }

  setShowInput() {
    this.showInput = !this.showInput;
  }

  ngOnInit() {
    this.groupService.getAllGroups()
      .then(data => {
        this.user.group_list = this.groupService.listGroup(data);
      })
      .catch(err => {
        this.user.group_list = [];
        // console.log("Erro: ", err);
      });
  }

  joinPublicGroup(token: any) {
    this.group = this.user.group_list.find((group) => String(group.token) === token);

    this.isInGroup().then(res => {
      if (res) {
        this.router.navigate([`/groups`, this.group.token]);
      } else {
        this.showConfirmJoinGroupModal = true;
      }
    });
  }

  joinPrivateGroup(token: any) {
    this.group = this.user.group_list.find((group) => String(group.token) === token.value);

    if (this.group) {
      this.isInGroup().then(res => {
        if (res) {
          this.router.navigate([`/groups`, this.group.token]);
        } else {
          this.joinInGroup();
        }
      });
    }
  }

  joinInGroup() {
    this.groupService.insertUserInGroup({ _id_group: this.group.id, _id_user: this.userId })
    .then(data => {
      // console.log(data);
      this.router.navigate([`/groups`, this.group.token]);
    })
    .catch(err => {
      // console.log("Erro: ", err);
    });
  }

  isInGroup() {
    return this.groupService.getAllUserByGroup(this.group.id)
      .then(data => {
        return data.find(user => user._id === this.userId);
      })
      .catch(err => {
        // console.log("Erro: ", err);
      });
  }
}
