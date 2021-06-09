const userList = [
  { username: "Luiz Carlos", discord_id: "luiz #4526" },
  { username: "Maria Clara", discord_id: "marica #3860" },
  { username: "João Carvalho", discord_id: "jcarvalho #3056" },
  { username: "Larissa Soares", discord_id: "lari #0356" },
];

const content = {
  id: Math.ceil(Math.random() * 1000),
  title: "titulo conteudo",
  description: "descricao conteudo",
  deadline: new Date("2021-06-20"),
  reference: "https://matias.ma/nsfw/",
  is_done: false,
  challenge: {
    id: Math.ceil(Math.random() * 1000),
    title: "titulo challenge",
    description: "descricao challenge",
    is_done: true,
  },
};

const contentLate = {
  id: Math.ceil(Math.random() * 1000),
  title: "titulo conteudo atrasado",
  description: "descricao conteudo atrasado",
  deadline: new Date("2021-04-20"),
  reference: "https://matias.ma/nsfw/",
  is_done: false,
  challenge: {
    id: Math.ceil(Math.random() * 1000),
    title: "titulo challenge",
    description: "descricao challenge",
    is_done: false,
  },
};

const contentComplete = {
  id: Math.ceil(Math.random() * 1000),
  title: "titulo conteudo finalizado",
  description: "descricao conteudo finalizado",
  deadline: new Date("2021-04-20"),
  reference: "https://matias.ma/nsfw/",
  is_done: true,
  challenge: {
    id: Math.ceil(Math.random() * 1000),
    title: "titulo challenge",
    description: "descricao challenge",
    is_done: true,
  },
};

export const roadmapMock = [
  {
    id: 1,
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
      { ...contentLate },
      { ...contentComplete }
    ],
  },
  {
    id: 2,
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
      { ...contentLate },
      { ...contentComplete }
    ],
  },
  {
    id: 3,
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
      { ...contentLate },
      { ...contentComplete }
    ],
  },
  {
    id: 4,
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
      { ...contentLate },
      { ...contentComplete }
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
  discord_id: "batata#4566",
  github_id: "socorrokkkk",
  group_list: [
    {
      token: 1,
      name: "Node para iniciantes",
      user_list: userList,
      subject_label: "Lógica de programação",
      level: 0,
      next_schedule: "2021-05-28T19:04:49.500Z",
      number_members: 1,
      schedule_list: [
        {
          id: Math.ceil(Math.random() * 1000),
          datetime: new Date("2021-04-20"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.ceil(Math.random() * 1000),
        },
        {
          id: Math.ceil(Math.random() * 1000),
          datetime: new Date("2021-05-30"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.ceil(Math.random() * 1000),
        },
        {
          id: Math.ceil(Math.random() * 1000),
          datetime: new Date("2021-06-11"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.ceil(Math.random() * 1000),
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
          id: Math.ceil(Math.random() * 1000),
          datetime: new Date("2021-04-20"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.ceil(Math.random() * 1000),
        },
        {
          id: Math.ceil(Math.random() * 1000),
          datetime: new Date("2021-05-30"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.ceil(Math.random() * 1000),
        },
        {
          id: Math.ceil(Math.random() * 1000),
          datetime: new Date("2021-06-11"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.ceil(Math.random() * 1000),
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
          id: Math.ceil(Math.random() * 1000),
          datetime: new Date("2021-04-20"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.ceil(Math.random() * 1000),
        },
        {
          id: Math.ceil(Math.random() * 1000),
          datetime: new Date("2021-05-30"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.ceil(Math.random() * 1000),
        },
        {
          id: Math.ceil(Math.random() * 1000),
          datetime: new Date("2021-06-11"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.ceil(Math.random() * 1000),
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
          id: Math.ceil(Math.random() * 1000),
          datetime: new Date("2021-04-20"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.ceil(Math.random() * 1000),
        },
        {
          id: Math.ceil(Math.random() * 1000),
          datetime: new Date("2021-05-30"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.ceil(Math.random() * 1000),
        },
        {
          id: Math.ceil(Math.random() * 1000),
          datetime: new Date("2021-06-11"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.ceil(Math.random() * 1000),
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
          id: Math.ceil(Math.random() * 1000),
          datetime: new Date("2021-04-20"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.ceil(Math.random() * 1000),
        },
        {
          id: Math.ceil(Math.random() * 1000),
          datetime: new Date("2021-05-30"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.ceil(Math.random() * 1000),
        },
        {
          id: Math.ceil(Math.random() * 1000),
          datetime: new Date("2021-06-11"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.ceil(Math.random() * 1000),
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
          id: Math.ceil(Math.random() * 1000),
          datetime: new Date("2021-04-20"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.ceil(Math.random() * 1000),
        },
        {
          id: Math.ceil(Math.random() * 1000),
          datetime: new Date("2021-05-30"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.ceil(Math.random() * 1000),
        },
        {
          id: Math.ceil(Math.random() * 1000),
          datetime: new Date("2021-06-11"),
          link: "https://matias.ma/nsfw/",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan congue aliquet. Nam accumsan vestibulum condimentum. Vivamus vulputate placerat tortor accumsan luctus. Maecenas quis iaculis ipsum. Cras semper consectetur diam, sed hendrerit nunc tincidunt ac. Ut pharetra diam arcu.",
          owner: Math.ceil(Math.random() * 1000),
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
    _id: "1",
    _id_subject: "1",
    _id_user: "",
    level: 0,
  },
  {
    _id: "2",
    _id_subject: "2",
    _id_user: "",
    level: 1,
  },
  {
    _id: "3",
    _id_subject: "3",
    _id_user: "",
    level: 2,
  },
  {
    _id: "4",
    _id_subject: "4",
    _id_user: "",
    level: 1,
  },
  {
    _id: "5",
    _id_subject: "5",
    _id_user: "",
    level: 0,
  }
];
export const subjectMock = [
  {
    id: "1",
    label: "Java",
    categories: ["", ""],
  },
  {
    id: "2",
    label: "C#",
    categories: ["", ""],
  },
  {
    id: "3",
    label: "CSS",
    categories: ["", ""],
  },
  {
    id: "4",
    label: "HTML",
    categories: ["", ""],
  },
  {
    id: "5",
    label: "JS",
    categories: ["", ""],
  },
  {
    id: "6",
    label: "Python",
    categories: ["", ""],
  },
];

export const graphDataMock = [
  {
    date: "20/04",
    quantity: 4,
    completedQuantity: 4,
  },
  {
    date: "20/05",
    quantity: 3,
    completedQuantity: 3,
  },
  {
    date: "20/06",
    quantity: 2,
    completedQuantity: 1,
  },
  {
    date: "20/06",
    quantity: 1,
    completedQuantity: 2,
  },
  {
    date: "20/07",
    quantity: 0,
    completedQuantity: 0,
  },
];
