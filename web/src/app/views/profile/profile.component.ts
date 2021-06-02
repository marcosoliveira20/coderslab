import { userMock } from "src/app/app.component";
import { subjectMock } from "src/mock";

import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from 'src/app/services/user.service';
import { SubjectService } from "src/app/services/subject.service";
import { InterstService } from "src/app/services/interest.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  public user = userMock;
  public isEditMode = false;
  public activeTab = "user";
  public selectedInterestList: any[] = [];
  public interestList: any;

  public showResetPasswordModal = false;
  public showConfirmDeleteAccountModal = false;

  public handleEditMode = () => (this.isEditMode = !this.isEditMode);
  public changeTab = (tab: string) => (this.activeTab = tab);

  public profileForm = this.fb.group({
    name: [{ value: "", disabled: !this.isEditMode }, Validators.required],
    lastname: [{ value: "", disabled: !this.isEditMode }, Validators.required],
    username: [{ value: "", disabled: !this.isEditMode }, Validators.required],
    email: [{ value: "", disabled: !this.isEditMode }, Validators.required],
    discord_id: [{ value: "", disabled: !this.isEditMode }],
    github_id: [{ value: "", disabled: !this.isEditMode }],
  });

  constructor(private fb: FormBuilder, private userService: UserService, private subjectService: SubjectService, private interestService: InterstService) {}

  /**
   * @todo integration
   */
  ngOnInit() {
    this.profileForm.patchValue({
      name: this.user.name,
      lastname: this.user.lastname,
      username: this.user.username,
      email: this.user.email,
      discord_id: this.user.discord_id,
      github_id: this.user.github_id,
    });
    this.getAllInterests();

    this.userService.getUserById().then(data => {
      this.profileForm.patchValue({
        name: data.name,
        last_name: data.last_name,
        username: data.username,
        email: data.email,
        discord_id: data.discord_id,
        github_id: data.github_id
      });
    })
  }

  
  getAllInterests() {
    this.subjectService.getAllSubjects().then(data => {
      console.log(data)
      this.interestList = data
    });
  }

  onSubmitUserInfo() {
    console.log(
      "profileForm: ",
      this.profileForm,
      "isEditMode:",
      this.isEditMode
    );

    this.userService.updateUser(this.profileForm.value).then(data => console.log(data));
  }

  /**
   *  Add a new interest to selected interest list
   */
  addNewInterest(subjectSelect: { value: any }, levelSelect: { value: any }) {
    const label = subjectSelect.value;
    const level = levelSelect.value;
    const { _id } = this.interestList.find((subject) => subject.label === label);

    this.selectedInterestList.push({ _id, label, level });
    this.interestService.createInterest({ _id, label, level });
  }

  /**
   * @todo implement delete code
   * @param interest
   */
  deleteInterest(interest: any) {
    console.log("interest: ", interest);
  }

  /**
   * @todo implement delete code
   */
  deleteAccount() {
    this.userService.deleteUser().then(data => console.log(data)).catch(err => console.log(err))
    console.log("deleteAccount: ", this.user.id);
  }

  /**
   *
   * @param oldPasswordEvent
   * @param newPasswordEvent
   */
  resetPassword(oldPasswordEvent, newPasswordEvent) {
    console.log(
      `old password: ${oldPasswordEvent.value}\n`,
      `new password: ${newPasswordEvent.value}`
    );
  }
}
