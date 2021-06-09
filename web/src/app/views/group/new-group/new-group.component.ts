import { Component, OnInit, EventEmitter, Output, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { GroupService } from "src/app/services/group.service";
import { SubjectService } from "src/app/services/subject.service";
import { BasicAutoCompleterComponent } from "src/app/component/form/input/input.component";

@Component({
  selector: "app-new-group",
  templateUrl: "./new-group.component.html",
  styleUrls: ["./new-group.component.scss"],
})
export class NewGroupComponent implements OnInit {
  @Output() cleanListSelected = new EventEmitter<boolean>();
  @ViewChild (BasicAutoCompleterComponent, { static: false })
  autoComplete: BasicAutoCompleterComponent;

  public group;
  public interestList = [];
  public subjectList = [];
  public categories = []; // TODO finish

  public isEditMode: boolean;
  public isGroupOwner: boolean;
  public showConfirmDeleteGroupModal: boolean;
  private isFirstTime: boolean = true;

  public userId = localStorage.getItem('id');

  public formGroup = this.fb.group({
    name: ["", Validators.required],
    level: ["", Validators.required],
    objective: ["", Validators.required],
    categories: ["", Validators.required],
    is_public: [false, Validators.required],
  });


  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private groupService: GroupService,
    private subjectService: SubjectService
  ) {}

  ngOnInit() {
    this.isEditMode = this.activatedRoute.snapshot.url[1].path === "edit";
    this.subjectService.getAllSubjects().then(data => {
      this.subjectList = data
    });
    this.isEditMode && this.getGroupData();
  }

  onSubmit() {
    this.formGroup.patchValue({
      categories: this.categories
    });

    // TODO - is_default tem q ser tratado pelo backend
    let body: {
      id?,
      name,
      subject_label,
      category,
      level,
      is_public,
      is_default,
      _owner
    } = {
      "name": this.formGroup.value.name,
      "subject_label": this.formGroup.value.objective,
      "category": this.formGroup.value.categories,
      "level": this.formGroup.value.level,
      "is_public": this.formGroup.value.is_public,
      "is_default": false,
      "_owner": this.groupService.user_id
    }

    if(this.isEditMode) {
      body.id = this.group.id;

      this.groupService.editGroup(body)
      .then(data => this.router.navigate([`/groups`, data.token]))
      .catch(error => console.log(error));
    } else {
      this.groupService.createGroup(body)
      .then(data => this.router.navigate([`/groups`, data.token]))
      .catch(error => console.log(error));
    }
  }

  getSubject(event?) {
    let label = this.isEditMode ? this.formGroup.value.objective : event.target.value;
    //TODO - limpar input depois de selecionar uma opção
    this.interestList = []

    this.subjectList.map(subject => {
      if(subject.label == label) {
        subject.categories.map(category => {
          this.interestList.push(category);
        })
      }
    })

    if(this.isEditMode && this.isFirstTime) {
      this.group.category.map(categoryGroup => {
        let index = this.interestList.findIndex(category => category === categoryGroup);
        index > -1 && this.interestList.splice(index, 1);
      });

      this.isFirstTime = false;
      this.autoComplete.setCategoryListSelected(this.group.category);
    } else {
      this.autoComplete.setCategoryListSelected([]);
    }
  }

  handleCategories = (event) => (this.categories = event);

  getGroupData() {
    const urlToken = this.activatedRoute.snapshot.paramMap.get("token");
    this.groupService.getGroupByToken(urlToken)
    .then(data => {
      this.group = data;
      this.group.id = this.group._id;
      this.group.owner = this.group._owner;

      delete this.group._id;
      delete this.group._owner;

      this.isGroupOwner = this.group.owner === this.userId;

      if (urlToken && this.isGroupOwner) {
        this.formGroup.patchValue({
          name: this.group.name,
          level: this.group.level,
          objective: this.group.subject_label,
          is_public: this.group.is_public
        });

        this.getSubject(this.formGroup);

        let index = this.subjectList.findIndex(subject => subject.label == this.group.subject_label);
        index > -1 && this.subjectList.splice(index, 1);
      }
    })
    .catch(error => {

    });
  }

  deleteGroup() {
    this.groupService.deleteteGroup(this.group)
    .then(data => {
      this.showConfirmDeleteGroupModal = false;
      this.router.navigate([`/groups`])
    })
    .catch(error => console.log(error));
  }
}
