import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // TODO integration
  public user = {
    name: "José",
    lastname: "Bezerra",
    username: "Flynn Rider",
    email: "jose@email.com.br",
    level: "Iniciante",
    group_list: [
      {
        name: "Node para iniciantes",
        user_list: 15,
        schedule_list: [{datetime: new Date("2021-04-20")}, {datetime: new Date("2021-04-28")}],
        category: [{label: "back end"}, {label: "dev web"}]
      },
      {
        name: "MySQL básico",
        user_list: 10,
        schedule_list: [{datetime: new Date("2021-04-20")}, {datetime: new Date("2021-04-28")}],
        category: [{label: "back end"}, {label: "dev web"}, {label: "dba"}]
      },
      {
        name: "Lógica de programação",
        user_list: 35,
        schedule_list: [{datetime: new Date("2021-04-20")}, {datetime: new Date("2021-04-28")}]
      }
    ],
    interest_list: [
      {subject_label: "Lógica de programação", level: "", isDefault: true },
      {subject_label: "Node", level: "", isDefault: false },
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
