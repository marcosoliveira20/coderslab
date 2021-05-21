import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SpinnerService } from 'src/app/services/spinner.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public isEditMode:boolean = true;
  public showLoading = false;

  public name: string;

  profileForm = this.fb.group({
    name: [{value: "", disabled: !this.isEditMode}, Validators.required],
    last_name: [{value: "", disabled: !this.isEditMode}, Validators.required],
    username: [{value: ""}, Validators.required],
    email: [{value: "", disabled: !this.isEditMode}, Validators.required],
    discord_id: [{value: "", disabled: !this.isEditMode}],
    github_id: [{value: "", disabled: !this.isEditMode}]
  });

  constructor(private fb: FormBuilder, private userService: UserService, private spinnerService: SpinnerService, public cRef: ChangeDetectorRef) { }

  handleEditMode = () => {
    this.isEditMode = !this.isEditMode
  }

  ngOnInit() {
    this.init();
    this.spinnerService.requestStarted();
    this.userService.getUserById().then(data => {
      console.log(data);
      this.profileForm.patchValue({
        name: data.name,
        last_name: data.last_name,
        username: data.username,
        email: data.email,
        discord_id: data.discord_id,
        github_id: data.github_id
      });

      this.spinnerService.resetSpinner();
    })
  }

  init() {
    this.spinnerService.getSpinnerObservable().subscribe(status => {
      this.showLoading = status == 'start';
      this.cRef.detectChanges();
    })
  }

  onSubmit() {
    this.userService.updateUser(this.profileForm.value).then(data => console.log(data));
    console.log(this.profileForm, this.isEditMode)
  }

  deleteUser() {
    this.userService.deleteUser().then(data => console.log(data)).catch(err => console.log(err))
  }
}
