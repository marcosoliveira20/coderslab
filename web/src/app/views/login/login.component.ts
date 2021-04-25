import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { BasicAutoCompleterComponent } from "src/app/component/form/input/input.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  encapsulation: ViewEncapsulation.None,
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
    name: [""],
    lastname: [""],
    username: [""],
    email: [""],
    password: [""],
    confirm_password: [""],
    discord_id: [""],
    github_id: [""],
    objective: [],
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
