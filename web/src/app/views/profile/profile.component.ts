import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { userMock } from "src/app/app.component";
import { subjectMock } from "src/mock";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  public user = userMock;
  public isEditMode: boolean = false;
  public activeTab: string = "user";
  public selectedInterestList: any[] = [];
  public interestList: any;

  public showResetPasswordModal: boolean = false;
  public showConfirmDeleteAccountModal: boolean = false;

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

  constructor(private fb: FormBuilder) {}

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
  }

  /**
   * Get interest list from database
   * @todo integration
   */
  getAllInterests() {
    this.interestList = subjectMock;
  }

  /**
   * Method triggered by onSubmit event for send user info
   * @todo integration
   */
  onSubmitUserInfo() {
    console.log(
      "profileForm: ",
      this.profileForm,
      "isEditMode:",
      this.isEditMode
    );
  }

  /**
   *  Add a new interest to selected interest list
   */
  addNewInterest(subjectSelect: { value: any }, levelSelect: { value: any }) {
    let label = subjectSelect.value;
    let level = levelSelect.value;
    let id = subjectMock.find((subject) => subject.label === label).id;

    this.selectedInterestList.push({ id, label, level });
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
