import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  private mode:string = 'login';

  login = {
    username: new FormControl(''),
    password: new FormControl('')
  }

  register = {
    name: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl(''),
    discord_id: new FormControl(''),
    github_id: new FormControl(''),
    objective: new FormControl('')
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  handleLoginMode(mode:string) {
    this.mode = mode
  }
}
