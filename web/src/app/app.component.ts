import { Component } from "@angular/core";
import { Router } from "@angular/router";

const userList = [
  { username: "Luiz Carlos", discord_id: "luiz #4526" },
  { username: "Maria Clara", discord_id: "marica #3860" },
  { username: "João Carvalho", discord_id: "jcarvalho #3056" },
  { username: "Larissa Soares", discord_id: "lari #0356" },
];

const content = {
  title: "titulo conteudo",
  description: "descricao conteudo",
  deadline: new Date("2021-06-20"),
  reference: "https://matias.ma/nsfw/",
  is_done: false,
  challenge: {
    id: Math.random() * 1000,
    title: "titulo challenge",
    description: "descricao challenge",
    is_done: false,
  },
};

export const roadmapMock = [
  {
    id: Math.random()*1000,
    name: "Lógica de Programação",
    is_default: true,
    is_done: true,
    level: 0,
    progress: "10%",
    content_status: {
      total: 40,
      complete: 20,
      late: 3
    },
    content_list: [
      { ...content },
      { ...content },
      { ...content },
      { ...content },
    ],
  },
  {
    id: Math.random()*1000,
    name: "Java",
    is_default: true,
    is_done: true,
    level: 0,
    progress: "40%",
    content_status: {
      total: 60,
      complete: 22,
      late: 2
    },
    content_list: [
      { ...content },
      { ...content },
      { ...content },
      { ...content },
    ],
  },
  {
    id: Math.random()*1000,
    name: "Node",
    is_default: false,
    is_done: false,
    level: 0,
    progress: "60%",
    content_status: {
      total: 100,
      complete: 60,
      late: 1
    },
    content_list: [
      { ...content },
      { ...content },
      { ...content },
      { ...content },
    ],
  },
  {
    id: Math.random()*1000,
    name: "SQL",
    is_default: false,
    is_done: false,
    level: 0,
    progress: "10%",
    content_status: {
      total: 10,
      complete: 1,
      late: 1
    },
    content_list: [
      { ...content },
      { ...content },
      { ...content },
      { ...content },
    ],
  },
];

/**
 * Mock object for tests before integration
 */
export const userMock = {
  id: 1,
  name: "José",
  lastname: "Bezerra",
  username: "Flynn Rider",
  email: "jose@email.com.br",
  level: "Iniciante",
  group_list: [
    {
      token: 1,
      name: "Node para iniciantes",
      user_list: userList,
      subject_label: "Lógica de programação",
      level: 0,
      schedule_list: [
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-04-20"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000,
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-05-30"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000,
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-06-11"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000,
        },
      ],
      owner: 1,
      category: [{ label: "back end" }, { label: "dev web" }],
      is_default: false,
    },
    {
      token: 2,
      name: "MySQL básico",
      user_list: userList,
      subject_label: "Lógica de programação",
      level: 1,
      schedule_list: [
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-04-20"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000,
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-05-30"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000,
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-06-11"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000,
        },
      ],
      owner: 2,
      category: [{ label: "back end" }, { label: "dev web" }, { label: "dba" }],
      is_default: false,
    },
    {
      token: 3,
      name: "Lógica de programação",
      user_list: userList,
      subject_label: "Lógica de programação",
      level: 3,
      schedule_list: [
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-04-20"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000,
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-05-30"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000,
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-06-11"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000,
        },
      ],
      owner: 3,
      category: [{ label: "back end" }, { label: "dev web" }],
      is_default: true,
    },
    {
      token: 4,
      name: "Node para iniciantes",
      user_list: userList,
      subject_label: "Lógica de programação",
      level: 0,
      schedule_list: [
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-04-20"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000,
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-05-30"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000,
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-06-11"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000,
        },
      ],
      owner: 1,
      category: [{ label: "back end" }, { label: "dev web" }],
      is_default: false,
    },
    {
      token: 5,
      name: "MySQL básico",
      user_list: userList,
      subject_label: "Lógica de programação",
      level: 1,
      schedule_list: [
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-04-20"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000,
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-05-30"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000,
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-06-11"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000,
        },
      ],
      owner: 2,
      category: [{ label: "back end" }, { label: "dev web" }, { label: "dba" }],
      is_default: false,
    },
    {
      token: 6,
      name: "Lógica de programação",
      user_list: userList,
      subject_label: "Lógica de programação",
      level: 3,
      schedule_list: [
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-04-20"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000,
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-05-30"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000,
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-06-11"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000,
        },
      ],
      owner: 3,
      category: [{ label: "back end" }, { label: "dev web" }],
      is_default: true,
    },
  ],
  interest_list: [
    { subject_label: "Lógica de programação", level: "", is_default: true },
    { subject_label: "Node", level: "", is_default: false },
  ],
};

export const interestListMock = [
  {
    token: 1,
    name: "Java",
  },
  {
    token: 2,
    name: "Angular",
  },
  {
    token: 3,
    name: "Python",
  },
  {
    token: 4,
    name: "CSS",
  },
  {
    token: 5,
    name: "HTML",
  },
  {
    token: 6,
    name: "JS",
  },
  {
    token: 7,
    name: "C#",
  },
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private router: Router) {}
}
