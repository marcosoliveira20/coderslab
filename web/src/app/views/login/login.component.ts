import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  private mode: string = "login";

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
    objective: [""],
  });

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {}

  handleLoginMode = (mode) => (this.mode = mode);

  onSubmitLogin() {
    console.log("loginForm", this.loginForm.value);
  }

  onSubmitRegister() {
    console.log("registerForm", this.registerForm.value);
  }
}
