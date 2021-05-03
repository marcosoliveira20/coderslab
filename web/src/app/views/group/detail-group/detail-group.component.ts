import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-group',
  templateUrl: './detail-group.component.html',
  styleUrls: ['./detail-group.component.scss']
})
export class DetailGroupComponent implements OnInit {
  public group;

  public user = {
    name: "José",
    lastname: "Bezerra",
    username: "Flynn Rider",
    email: "jose@email.com.br",
    level: "Iniciante",
    group_list: [
      {
        token: 1,
        name: "Node para iniciantes",
        user_list: 15,
        level: "iniciante",
        schedule_list: [
          { datetime: new Date("2021-04-20") },
          { datetime: new Date("2021-04-28") },
          { datetime: new Date("2021-04-20") },
          { datetime: new Date("2021-04-28") },
          { datetime: new Date("2021-04-20") },
          { datetime: new Date("2021-04-28") },
        ],
        category: [{ label: "back end" }, { label: "dev web" }],
        isDefault: false,
      },
      {
        token: 2,
        name: "MySQL básico",
        user_list: 10,
        level: "iniciante",
        schedule_list: [
          { datetime: new Date("2021-04-20") },
          { datetime: new Date("2021-04-28") },
        ],
        category: [
          { label: "back end" },
          { label: "dev web" },
          { label: "dba" },
        ],
        isDefault: false,
      },
      {
        token: 3,
        name: "Lógica de programação",
        user_list: 35,
        level: "iniciante",
        schedule_list: [
          { datetime: new Date("2021-04-20") },
          { datetime: new Date("2021-04-28") },
        ],
        category: [{ label: "back end" }, { label: "dev web" }],
        isDefault: true,
      },
      {
        token: 4,
        name: "Node para iniciantes",
        user_list: 15,
        level: "iniciante",
        schedule_list: [
          { datetime: new Date("2021-04-20") },
          { datetime: new Date("2021-04-28") },
        ],
        category: [{ label: "back end" }, { label: "dev web" }],
        isDefault: false,
      },
      {
        token: 5,
        name: "MySQL básico",
        user_list: 10,
        level: "iniciante",
        schedule_list: [
          { datetime: new Date("2021-04-20") },
          { datetime: new Date("2021-04-28") },
        ],
        category: [
          { label: "back end" },
          { label: "dev web" },
          { label: "dba" },
        ],
        isDefault: false,
      },
      {
        token: 6,
        name: "Lógica de programação",
        user_list: 35,
        level: "iniciante",
        schedule_list: [
          { datetime: new Date("2021-04-20") },
          { datetime: new Date("2021-04-28") },
        ],
        category: [{ label: "back end" }, { label: "dev web" }],
        isDefault: true,
      },
      {
        token: 7,
        name: "Node para iniciantes",
        user_list: 15,
        level: "iniciante",
        schedule_list: [
          { datetime: new Date("2021-04-20") },
          { datetime: new Date("2021-04-28") },
        ],
        category: [{ label: "back end" }, { label: "dev web" }],
        isDefault: false,
      },
      {
        token: 8,
        name: "MySQL básico",
        user_list: 10,
        level: "iniciante",
        schedule_list: [
          { datetime: new Date("2021-04-20") },
          { datetime: new Date("2021-04-28") },
        ],
        category: [
          { label: "back end" },
          { label: "dev web" },
          { label: "dba" },
        ],
        isDefault: false,
      },
      {
        token: 9,
        name: "Lógica de programação",
        user_list: 35,
        level: "iniciante",
        schedule_list: [
          { datetime: new Date("2021-04-20") },
          { datetime: new Date("2021-04-28") },
        ],
        category: [{ label: "back end" }, { label: "dev web" }],
        isDefault: true,
      },
    ],
    interest_list: [
      { subject_label: "Lógica de programação", level: "", isDefault: true },
      { subject_label: "Node", level: "", isDefault: false },
    ],
  };

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const urlToken = this.activatedRoute.snapshot.paramMap.get("token");
    this.group = this.user.group_list.find(g => String(g.token) === urlToken)
    console.log(this.group)
  }

}
