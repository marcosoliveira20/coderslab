import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userMock } from 'src/app/app.component';

@Component({
  selector: 'app-detail-group',
  templateUrl: './detail-group.component.html',
  styleUrls: ['./detail-group.component.scss']
})
export class DetailGroupComponent implements OnInit {
  public group;
  public modalShowController:boolean = false;
  public modalData;
  public user = userMock;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const urlToken = this.activatedRoute.snapshot.paramMap.get("token");
    this.group = this.user.group_list.find(g => String(g.token) === urlToken)
    console.log(this.group)
  }

  openScheduleLink = () => window.open(this.modalData.link, "_blank")
}
