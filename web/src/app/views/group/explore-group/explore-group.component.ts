import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-explore-group",
  templateUrl: "./explore-group.component.html",
  styleUrls: ["./explore-group.component.scss"],
})
export class ExploreGroupComponent implements OnInit {

  showInput:boolean;

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
        level: "iniciante",
        schedule_list: [
          { datetime: new Date("2021-04-20") },
          { datetime: new Date("2021-04-28") },
        ],
        category: [{ label: "back end" }, { label: "dev web" }],
        isDefault: false,
      },
      {
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

  public objective_list = [
    { token: 1, name: "Java" },
    { token: 2, name: "CSS" },
    { token: 3, name: "HTML" },
  ];

  public category_list = [
    { token: 1, name: "Backend" },
    { token: 2, name: "Frontend" },
    { token: 3, name: "Desing" },
  ];

  setShowInput(){
    this.showInput = !this.showInput;
  }

  constructor() {}

  ngOnInit() {}
}
