import { userMock } from "src/app/app.component";
import { subjectMock } from "src/mock";

import { Compiler, Component, OnInit } from "@angular/core";
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
  public user: {
    id,
    name,
    last_name,
    username,
    email,
    discord_id,
    github_id
  };

  public isEditMode = false;
  public activeTab = "user";
  public selectedInterestList: any[] = [];
  public interestList: any;
  public userId = localStorage.getItem('id');

  public showResetPasswordModal = false;
  public showConfirmDeleteAccountModal = false;

  public changeTab = (tab: string) => (this.activeTab = tab);

  public profileForm = this.fb.group({
    name: [{ value: "", disabled: true }, Validators.required],
    last_name: [{ value: "", disabled: true }, Validators.required],
    username: [{ value: "", disabled: true }, Validators.required],
    email: [{ value: "", disabled: true }, Validators.required],
    discord_id: [{ value: "", disabled: true }],
    github_id: [{ value: "", disabled: true }],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private subjectService: SubjectService,
    private interestService: InterstService,
    private _compiler: Compiler
  ) { }

  /**
   * @todo integration
   */
  ngOnInit() {
    this._compiler.clearCache();
    this.getAllInterests();

    this.userService.getUserById().then(data => {
      this.profileForm.patchValue({
        name: data.name,
        last_name: data.last_name,
        username: data.username,
        email: data.email,
        discord_id: data.discord_id,
        github_id: data.github_id
      })

      this.user = {
        id: this.userId,
        name: data.name,
        last_name: data.last_name,
        username: data.username,
        email: data.email,
        discord_id: data.discord_id,
        github_id: data.github_id,
      }
    })
    this.getUserInterests();
  }

  public handleEditMode() {
    this.isEditMode = !this.isEditMode;
    if(this.isEditMode)
   {
      this.profileForm.controls['name'].enable();
      this.profileForm.controls['last_name'].enable();
      this.profileForm.controls['username'].enable();
      this.profileForm.controls['email'].enable();
      this.profileForm.controls['discord_id'].enable();
      this.profileForm.controls['github_id'].enable();
    } else {
      this.profileForm.controls['name'].disable();
      this.profileForm.controls['last_name'].disable();
      this.profileForm.controls['username'].disable();
      this.profileForm.controls['email'].disable();
      this.profileForm.controls['discord_id'].disable();
      this.profileForm.controls['github_id'].disable();
    }
  }

  getAllInterests() {
    this.subjectService.getAllSubjects().then(data => {
      this.interestList = data
    });
  }

  getUserInterests() {
    this.interestService.getInterestListByUser().then(data => {
      data.map(x => {
        this.selectedInterestList.push({
          _id: x._id,
          label: x.subject.label,
          level: x.level
        });
      })
    })
  }

  onSubmitUserInfo() {
    this.userService.updateUser(this.profileForm.value).then(data => console.log(data));
  }

  /**
   *  Add a new interest to selected interest list
   */
  addNewInterest(subjectSelect: { value: any }, levelSelect: { value: any }) {
    const label = subjectSelect.value;
    const level = levelSelect.value;
    const { _id } = this.interestList.find((subject) => subject.label === label);

    this.interestService.createInterest({ _id, label, level }).then(() => {
      this.selectedInterestList.push({ _id, label, level });
    });
  }

  /**
   * @todo implement delete code
   * @param interest
   */
  deleteInterest(interest: any, index) {
    //TODO - deletar interesse que acabou de ser criado
    this.interestService.deleteInterest(interest._id).then(() => {
      this.selectedInterestList.splice(index, 1)
    })
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
