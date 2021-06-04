import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { GroupService } from "src/app/services/group.service";
import { SubjectService } from "src/app/services/subject.service";
import { InterstService } from "src/app/services/interest.service";

@Component({
  selector: "app-new-group",
  templateUrl: "./new-group.component.html",
  styleUrls: ["./new-group.component.scss"],
})
export class NewGroupComponent implements OnInit {
  public group;
  public isEditMode: boolean;
  public interestList = [];
  public interestListEdit = [];
  public subjectList = [];
  public categories = []; // TODO finish
  public isGroupOwner: boolean;
  public user: { id: string } = { id: "60ac594c68ec2ca3d561db6f" };

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
    private groupService: GroupService,
    private subjectService: SubjectService,
    private interestService: InterstService
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
    const body = {
      "name": this.formGroup.value.name,
      "subject_label": "string",
      "category": this.formGroup.value.categories[0],
      "level": this.formGroup.value.level,
      "is_public": this.formGroup.value.is_public,
      "is_default": false,
      "_owner": this.groupService.user_id
    }

    this.groupService.createGroup(body).then(data => console.log(data));
    //TODO - redirecionar para dentro da tela de detalhe do grupo
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

    if(this.isEditMode) {
      this.group.category.map(categoryGroup => {
        let index = this.interestList.findIndex(category => category === categoryGroup);
        index > -1 && this.interestList.splice(index, 1);
      });
      
      this.interestListEdit = this.group.category;
    }
  }

  handleCategories = (event) => (this.categories = event);

  /**
   * Mock of select query
   */
  getGroupData() {
    const urlToken = this.activatedRoute.snapshot.paramMap.get("token");
    this.groupService.getGroupByToken(urlToken)
    .then(data => {
      this.group = data;
      this.group.id = this.group._id;
      this.group.owner = this.group._owner;
      
      delete this.group._id;
      delete this.group._owner;

      this.isGroupOwner = this.group.owner === this.user.id;
      
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
}
