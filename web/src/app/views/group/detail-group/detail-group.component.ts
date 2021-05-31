import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { userMock } from "src/app/app.component";

import { ScheduleService } from "src/app/services/schedule.service";
import { GroupService } from "src/app/services/group.service";
import { UserService } from "src/app/services/user.service";

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
    private groupService: GroupService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    const urlToken = this.activatedRoute.snapshot.paramMap.get("token");
    this.group = this.user.group_list.find((group) => String(group.token) === urlToken)
    // this.isGroupOwner = this.group.owner === this.user.id;
    this.isGroupOwner = this.group.owner === "60ac594c68ec2ca3d561db6f";

    // buscando reuniões do grupo
    this.scheduleService.getAllSchedulesByGroup(this.group.id)
    .then(data => {
      this.group.schedule_list = this.scheduleService.listSchedule(data);
    })
    .catch(err => {
      this.group.schedule_list = [];
      console.log("Erro: ", err);
    });

    // buscando integrantes do grupo
    this.groupService.getAllUserByGroup(this.group.id)
    .then(data => {
      this.group.user_list = this.userService.listUsers(data);
    })
    .catch(err => {
      this.group.user_list = [];
      console.log("Erro: ", err);
    })
  }


  openScheduleLink = () => window.open(this.modalData.link, "_blank");

  handleRedirectToEdit = () =>
    this.router.navigate([`/groups/edit`, this.group.token]);

  onSubmitNewSchedule() {
    console.log(this.scheduleForm.value);
  }
}
