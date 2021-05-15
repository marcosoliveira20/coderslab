import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public isEditMode:boolean = false;

  profileForm = this.fb.group({
    name: [{value: "", disabled: !this.isEditMode}, Validators.required],
    lastname: [{value: "", disabled: !this.isEditMode}, Validators.required],
    username: [{value: "", disabled: !this.isEditMode}, Validators.required],
    email: [{value: "", disabled: !this.isEditMode}, Validators.required],
    discord_id: [{value: "", disabled: !this.isEditMode}],
    github_id: [{value: "", disabled: !this.isEditMode}]
  });

  constructor(private fb: FormBuilder) { }

  handleEditMode = () => this.isEditMode = !this.isEditMode

  ngOnInit() {}

  onSubmit() {
    console.log(this.profileForm, this.isEditMode)
  }
}
