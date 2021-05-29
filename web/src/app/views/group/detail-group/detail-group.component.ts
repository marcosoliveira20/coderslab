import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { userMock } from "src/app/app.component";

import { ScheduleService } from "src/app/services/schedule.service";

@Component({
  selector: "app-detail-group",
  templateUrl: "./detail-group.component.html",
  styleUrls: ["./detail-group.component.scss"],
})
export class DetailGroupComponent implements OnInit {
  public user = userMock;
  public group: any;
  public modalData: any;

  public showScheduleModal: boolean;
  public showAddScheduleModal: boolean;
  public isGroupOwner: boolean;

  public scheduleForm = this.fb.group({
    date: ["", Validators.required],
    time: ["", Validators.required],
    link: ["", Validators.required],
    description: [""],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private scheduleService: ScheduleService,
  ) {}

  ngOnInit() {
    // this.group.id = "60a709af962a5edf506298eb";

    const urlToken = this.activatedRoute.snapshot.paramMap.get("token");

    // this.scheduleService.getAllSchedulesByGroup(this.group.id).then(data => {
    //   // this.user.group_list = this.scheduleService.listGroup(data);
    //   console.log(data);
    // });

    this.group = this.user.group_list.find((group) => String(group.token) === urlToken)
    this.isGroupOwner = this.group.owner === this.user.id;
  }

  openScheduleLink = () => window.open(this.modalData.link, "_blank");

  handleRedirectToEdit = () =>
    this.router.navigate([`/groups/edit`, this.group.token]);

  onSubmitNewSchedule() {
    console.log(this.scheduleForm.value);
  }
}
