import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { BasicAutoCompleterComponent } from "src/app/component/form/input/input.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  private mode: string = "login";

  @ViewChild(BasicAutoCompleterComponent, { static: false })
  autoCompleteComponent: BasicAutoCompleterComponent;

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
  });

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {}

  handleLoginMode = (mode) => (this.mode = mode);

  onSubmitLogin() {
    console.log("loginForm", this.loginForm.value);
  }

  onSubmitRegister() {
    this.registerForm.patchValue({
      objective: this.autoCompleteComponent.getInterestList(),
    });
    console.log("registerForm", this.registerForm.value);
  }

  listenInput(event) {
    console.log(event);
  }
}
