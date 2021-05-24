import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { BasicAutoCompleterComponent } from "src/app/component/form/input/input.component";
// import { interestListMock } from "../../../app/app.component";
import { interestListMock, subjectMock } from "../../../mock";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  private mode: string = "login";
  private interestList: any[] = [];
  private subjectList: any[] = subjectMock;
  private selectedSubjectList: any[] = [];
  private selectedCustomSubjectList: any[] = [];

  private interestModel = { _id_subject: "", _id_user: "", level: 0 };

  loginForm = this.fb.group({
    username: [""],
    password: [""],
  });

  registerForm = this.fb.group({
    name: ["", Validators.required],
    lastname: ["", Validators.required],
    username: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
    confirm_password: ["", Validators.required],
    discord_id: [""],
    github_id: [""],
    objective: [[], Validators.required],
    level: ["-1"],
    subjectForm: [""],
  });

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {}

  handleLoginMode = (mode) => (this.mode = mode);

  onSubmitLogin() {
    console.log("loginForm", this.loginForm.value);
  }

  onSubmitRegister() {
    this.registerForm.patchValue({
      objective: this.interestList[0],
    });
    console.log("registerForm", this.registerForm.value);
  }

  listenInput(interestListEvent) {
    this.interestList = interestListEvent;
  }

  addInterest() {
    let subjectLabel = this.registerForm.value.subjectForm;

    const subjectIndex = this.subjectList.findIndex(
      (i) => i.label == subjectLabel
    );

    let subjectId = this.subjectList[subjectIndex].id;

    this.selectedSubjectList.push(this.subjectList[subjectIndex]);

    this.subjectList.splice(subjectIndex, 1);


    this.interestList.push({
      _id_subject: subjectId,
      _id_user: "",
      level: Number(this.registerForm.value.level),
    });

    this.selectedCustomSubjectList.push({
      _id_subject: subjectId,
      label: subjectLabel,
      _id_user: "",
      level: Number(this.registerForm.value.level),
      levelName: this.levelNameStr(Number(this.registerForm.value.level)),
    });

    this.registerForm.controls['level'].setValue("-1");
    this.registerForm.controls['subjectForm'].setValue("");

  }

  updateInterest(subject, value, change) {
    if (change === "label") {

    } else {

    }
  }

  levelNameStr(level: number) {
    switch (level) {
      case 0:
        return "Iniciante";
      case 1:
        return "Intermediário";
      case 2:
        return "Avançado";
      default:
        return "Nivel";
    }
  }
}
