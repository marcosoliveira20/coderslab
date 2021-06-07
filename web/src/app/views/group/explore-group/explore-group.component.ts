import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

// import { userMock } from "../../../app.component";
import { GroupService } from "src/app/services/group.service";
import { SubjectService } from "src/app/services/subject.service";
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
  public group: any;
  public groupList = [];
  public subjectList = [];
  public categoryList = [];
  public userId = localStorage.getItem('id');

  exploreForm = this.fb.group({
    name: [""],
    subject_label: [""],
    category: [{value: '', disabled: true}],
    level: [-1],
    is_alphabetical: [true]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private groupService: GroupService,
    private subjectService: SubjectService
  ) { }

  onSubmit() {
    this.exploreForm.controls["level"].setValue(Number(this.exploreForm.value.level));
    this.exploreForm.controls['category'].enable();

    this.groupService.getAllGroupsBySearch(this.exploreForm.value)
      .then(data => {
        this.groupList = this.groupService.listGroup(data);
        this.exploreForm.controls['category'].disable();
      })
      .catch(err => {
        this.groupList = [];
        console.log("Erro: ", err);
      });
  }

  changeAlphabetical() {
    this.exploreForm.controls["is_alphabetical"].setValue(!this.exploreForm.value.is_alphabetical);
  }

  setShowInput() {
    this.showInput = !this.showInput;
  }

  handleSelectObjective(event: any) {
    this.exploreForm.patchValue({ category: '' });
    
    let subject = this.subjectList.find(subject => subject.label === event.target.value);
    this.categoryList = subject.categories;
    this.exploreForm.controls['category'].enable();
  }

  ngOnInit() {
    this.groupService.getAllGroups()
      .then(data => {
        this.groupList = this.groupService.listGroup(data);
      })
      .catch(err => {
        this.groupList = [];
        // console.log("Erro: ", err);
      });

    this.subjectService.getAllSubjects().then(data => {
      this.subjectList = data;
    });
  }

  joinPublicGroup(token: any) {
    this.groupService.getGroupByToken(token)
      .then(data => {
        this.group = data;
        this.group.id = this.group._id;
        this.group.owner = this.group._owner;

        delete this.group._id;
        delete this.group._owner;

        this.isInGroup().then(res => {
          if (res) {
            this.router.navigate([`/groups`, this.group.token]);
          } else {
            this.showConfirmJoinGroupModal = true;
          }
        });
      })
      .catch(err => {
        // console.log(err);
      });
  }

  joinPrivateGroup(token: any) {
    this.groupService.getGroupByToken(token.value)
      .then(data => {
        this.group = data;
        this.group.id = this.group._id;
        this.group.owner = this.group._owner;

        delete this.group._id;
        delete this.group._owner;

        if (this.group) {
          this.isInGroup().then(res => {
            if (res) {
              this.router.navigate([`/groups`, this.group.token]);
            } else {
              this.joinInGroup();
            }
          });
        }
      })
      .catch(err => {

      });
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
