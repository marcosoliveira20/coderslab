import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { BasicAutoCompleterComponent } from "src/app/component/form/input/input.component";
import {interestListMock} from "../../../app/app.component";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  private mode: string = "login";
  private interestList:any[] =  interestListMock;

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

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {}

  handleLoginMode = (mode) => (this.mode = mode);

  onSubmitLogin() {
    console.log("loginForm", this.loginForm.value);
  }
  
  onSubmitRegister( ) {
    this.registerForm.patchValue({
      objective: this.interestList[0],
    });
    
    if ( this.registerForm.value.password == this.registerForm.value.confirm_password ) {
      this.userService.createUser(this.registerForm.value).then(data => console.log(data))
    } else {
      console.log("senha errada")
    }
  }

  listenInput(interestListEvent) {
    this.interestList = interestListEvent;
  }
}
