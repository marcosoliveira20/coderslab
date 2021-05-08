import { Component } from '@angular/core';
import { Router } from '@angular/router';

const userList = [
  {username: "Luiz Carlos", discord_id: "luiz #4526"},
  {username: "Maria Clara", discord_id: "marica #3860"},
  {username: "João Carvalho", discord_id: "jcarvalho #3056"},
  {username: "Larissa Soares", discord_id: "lari #0356"},
]

/**
 * Mock object for tests before integration
 */
export const userMock = {
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
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-05-30"),
          link: "https://matias.ma/nsfw/",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-06-11"),
          link: "https://matias.ma/nsfw/",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000
        },
      ],
      category: [{label: "back end"}, {label: "dev web"}],
      isDefault: false
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
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-05-30"),
          link: "https://matias.ma/nsfw/",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-06-11"),
          link: "https://matias.ma/nsfw/",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000
        },
      ],
      category: [{label: "back end"}, {label: "dev web"}, {label: "dba"}],
      isDefault: false
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
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-05-30"),
          link: "https://matias.ma/nsfw/",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-06-11"),
          link: "https://matias.ma/nsfw/",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000
        },
      ],
      category: [{label: "back end"}, {label: "dev web"}],
      isDefault: true
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
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-05-30"),
          link: "https://matias.ma/nsfw/",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-06-11"),
          link: "https://matias.ma/nsfw/",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000
        },
      ],
      category: [{label: "back end"}, {label: "dev web"}],
      isDefault: false
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
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-05-30"),
          link: "https://matias.ma/nsfw/",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-06-11"),
          link: "https://matias.ma/nsfw/",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000
        },
      ],
      category: [{label: "back end"}, {label: "dev web"}, {label: "dba"}],
      isDefault: false
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
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-05-30"),
          link: "https://matias.ma/nsfw/",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000
        },
        {
          id: Math.random() * 1000,
          datetime: new Date("2021-06-11"),
          link: "https://matias.ma/nsfw/",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.random() * 1000
        },
      ],
      category: [{label: "back end"}, {label: "dev web"}],
      isDefault: true
    }
  ],
  interest_list: [
    {subject_label: "Lógica de programação", level: "", isDefault: true },
    {subject_label: "Node", level: "", isDefault: false },
  ]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}
}
