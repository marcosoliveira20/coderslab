import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { BasicAutoCompleterComponent } from "src/app/component/form/input/input.component";
// import { interestListMock } from "../../../app/app.component";
import { interestListMock, subjectMock } from "../../../mock";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public mode: string = "register";

  public interest_list: any[] = [];
  public subjectList: any[] = subjectMock;

  public selectedSubjectList: any[] = [];
  public customInterestList: any[] = [];

  loginForm = this.fb.group({
    username: [""],
    password: [""],
  });

  registerForm = this.fb.group({
    name: ["", Validators.required],
    last_name: ["", Validators.required],
    username: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
    confirm_password: ["", Validators.required],
    discord_id: [""],
    github_id: [""],
    interest_list: [[], Validators.required],
    level: ["-1"],
    subjectForm: [""],
  });

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {}

  handleLoginMode = (mode) => (this.mode = mode);

  onSubmitLogin() {
    console.log("loginForm", this.loginForm.value);
  }

  onSubmitRegister() {
    this.registerForm.patchValue({
      interest_list: this.interest_list,
    });
    
    if ( this.registerForm.value.password == this.registerForm.value.confirm_password ) {
      this.userService.createUser(this.registerForm.value).then(data => console.log(data))
    } else {
      //TODO - por boas práticas para mostrar pro usuário que as senhas estão divergentes
      console.log("senha divergente")
    }
    this.registerForm.removeControl("level");
    this.registerForm.removeControl("subjectForm");
    console.log("onSubmit: ", this.registerForm.value);
  }

  handleChangeSelect(event, type, index) {
    this.interest_list[index][type] = event.target.value;
  }

  validateFirstSelect(): boolean {
    return (
      this.registerForm.value.subjectForm !== "" &&
      this.registerForm.value.level !== "-1"
    );
  }

  addInterest() {
    if (this.validateFirstSelect()) {
      let subjectId = this.registerForm.value.subjectForm;
      let levelName = this.registerForm.value.level.split(" ")[1];
      let level = this.registerForm.value.level.split(" ")[0];

      const subjectIndex = this.subjectList.findIndex((i) => i.id == subjectId);

      this.interest_list.push({
        _id_subject: Number(subjectId),
        level: Number(level),
      });

      this.customInterestList.push({
        _id_subject: subjectId,
        label: this.subjectList[subjectIndex].label,
        level: levelName,
      });

      this.selectedSubjectList.push(this.subjectList[subjectIndex]);
      this.subjectList.splice(subjectIndex, 1);
      this.registerForm.controls["level"].setValue("-1");
      this.registerForm.controls["subjectForm"].setValue("");
    }
  }

  deleteInterest(index) {
    const subjectIndex = this.selectedSubjectList.findIndex(
      (item) => item.id == this.interest_list[index]._id_subject
    );

    this.subjectList.push(this.selectedSubjectList[subjectIndex]);
    this.selectedSubjectList.splice(subjectIndex, 1);

    this.interest_list.splice(index, 1);
    this.customInterestList.splice(index, 1);
  }
}
