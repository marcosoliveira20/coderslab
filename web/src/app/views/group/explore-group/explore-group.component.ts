import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-explore-group",
  templateUrl: "./explore-group.component.html",
  styleUrls: ["./explore-group.component.scss"],
})
export class ExploreGroupComponent implements OnInit {
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
        user_list: [{
          name: "Luiz Carlos",
          discord_id: "luiz #4526"
        },
        {
          name: "Maria Clara",
          discord_id: "marica #3950"
        },
        {
          name: "João Carvalho",
          discord_id: "jCarvalho #3056"
        },
        {
          name: "Larissa Soares",
          discord_id: "lari #0356"
        },
      ],
        level: "iniciante",
        schedule_list: [
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

  public objective_list = [
    { id: 1, name: "Java" },
    { id: 2, name: "CSS" },
    { id: 3, name: "HTML" },
  ];

  public category_list = [
    { id: 1, name: "Backend" },
    { id: 2, name: "Frontend" },
    { id: 3, name: "Desing" },
  ];

  constructor() {}

  ngOnInit() {}
}
