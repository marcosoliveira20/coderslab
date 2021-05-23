import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { userMock } from 'src/app/app.component';

@Component({
  selector: 'app-detail-group',
  templateUrl: './detail-group.component.html',
  styleUrls: ['./detail-group.component.scss']
})
export class DetailGroupComponent implements OnInit {
  public group;
  public showScheduleModal:boolean = false;
  public showAddScheduleModal:boolean = false;
  public modalData;
  public user = userMock;
  public isGroupOwner:boolean;
  public scheduleForm = this.fb.group({
    date: ["", Validators.required],
    time: ["", Validators.required],
    link: ["", Validators.required],
    description: [""]
  });

  constructor(private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {}

  ngOnInit() {
    const urlToken = this.activatedRoute.snapshot.paramMap.get("token");
    this.group = this.user.group_list.find(g => String(g.token) === urlToken)
    this.isGroupOwner = this.group.owner === this.user.id;
  }

  openScheduleLink = () => window.open(this.modalData.link, "_blank")

  handleRedirectToEdit = () => this.router.navigate([`/groups/edit`, this.group.token])

  onSubmitNewSchedule() {
    console.log(this.scheduleForm.value);
  }

}
