import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { interestListMock, userMock } from "../../../app.component";

@Component({
  selector: "app-new-group",
  templateUrl: "./new-group.component.html",
  styleUrls: ["./new-group.component.scss"],
})
export class NewGroupComponent implements OnInit {
  public group;
  public user = userMock;
  public isEditMode: boolean;
  public interestList: any[] = interestListMock;
  private categories; // TODO finish

  public formGroup = this.fb.group({
    name: ["", Validators.required],
    level: ["", Validators.required],
    objective: ["", Validators.required],
    categories: ["", Validators.required],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isEditMode = this.activatedRoute.snapshot.url[1].path === "edit";
    this.getGroupData();
  }

  onSubmit() {
    this.formGroup.patchValue({
      categories: this.categories
    });
    console.log("registerForm", this.formGroup.value);
  }

  handleCategories = (event) => (this.categories = event);

  /**
   * Mock of select query
   */
  getGroupData() {
    const urlToken = this.activatedRoute.snapshot.paramMap.get("token");
    const group_list = this.user.group_list;
    const isOwner = group_list.find(
      (group) =>
        String(group.token) === urlToken && group.owner === this.user.id
    );

    if (urlToken && isOwner) {
      this.group = group_list.find((group) => String(group.token) === urlToken);
      this.categories = this.group.categories;

      this.formGroup.patchValue({
        name: this.group.name,
        level: this.group.level,
        assunto_list: this.group.subject,
        objective: this.group.subject_label
      });
    }

    console.log(this.group);
  }
}
