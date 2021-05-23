import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { subjectMock } from "../../../mock";
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
    });

    this.registerForm.controls["level"].setValue("-1");
    this.registerForm.controls["subjectForm"].setValue("");
  }

  updateInterest(subject, event, change, index) {
    if (change === "label") {
      this.interestList.splice(
        this.interestList.findIndex(
          (i) => i._id_subject == subject._id_subject
        ),
        1
      );

      this.selectedCustomSubjectList.splice(
        this.selectedCustomSubjectList.findIndex(
          (i) => i._id_subject == subject._id_subject
        ),
        1
      );

      const subjectIndex = this.subjectList.findIndex((i) => i.label == event.target.value);
      const selectedSubjectIndex = this.selectedSubjectList.findIndex(
        (i) => i.label == subject.label
      );

      let subjectAdd = this.subjectList[subjectIndex];

      this.selectedSubjectList.push(this.subjectList[subjectIndex]);
      this.subjectList.splice(subjectIndex, 1);

      this.subjectList.push(this.selectedSubjectList[selectedSubjectIndex]);
      this.selectedSubjectList.splice(selectedSubjectIndex, 1);

      this.interestList.push({
        _id_subject: subjectAdd.id,
        _id_user: "",
        level: subject.level,
      });

      this.selectedCustomSubjectList.push({
        _id_subject: subjectAdd.id,
        label: event.target.value,
        _id_user: "",
        level: subject.level
      });

      this.selectedCustomSubjectList.sort(function (a, b) {
        if (a.label < b.label) {
          return -1;
        }
        if (a.label > b.label) {
          return 1;
        }
        return 0;
      });
    } else {
      this.selectedCustomSubjectList[index][event.target.name] = event.target.value;
      this.interestList[index][event.target.name] = event.target.value;

    }
  }

  deleteInterest(subject) {}

}
