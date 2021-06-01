import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { interestListMock, userMock } from "../../../app.component";
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
  public user = userMock;
  public isEditMode: boolean;
  public interestList = [];
  public subjectList = [];
  private categories; // TODO finish

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
    this.getGroupData();
    this.subjectService.getAllSubjects().then(data => {
      this.subjectList = data
    });
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

  getSubject(event) {
    //TODO - limpar input depois de selecionar uma opção
    this.interestList = []
    
    this.subjectList.map(x => {
      if(x.label == event.target.value) {

        x.categories.map( c => {
          this.interestList.push(c);
        })
      }
    })
  }

  handleCategories = (event) => (this.categories = event);

  /**
   * Mock of select query
   */
  getGroupData() {
    const urlToken = this.activatedRoute.snapshot.paramMap.get("token");
    const group_list = this.user.group_list;
    const isOwner = group_list.find(
      (group) =>
        String(group.token) === urlToken && group.owner === this.user.id
    );

    if (urlToken && isOwner) {
      this.group = group_list.find((group) => String(group.token) === urlToken);
      this.categories = this.group.categories;

      this.formGroup.patchValue({
        name: this.group.name,
        level: this.group.level,
        assunto_list: this.group.subject,
        objective: this.group.subject_label
      });
    }

    console.log(this.group);
  }
}
