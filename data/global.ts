type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
  support: {
    buymeacoffee: string
    paypal: string
    message: string
  }
};

export const routes: Route[] = [
  {
    title: "Services",
    path: "/",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Nicolas",
    path: "/nicolas",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];


export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Services",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Portfolio",
          link: "/portfolio",
          leavesWebsite: false,
        },
        {
          name: "Nicolas",
          link: "/nicolas",
          leavesWebsite: false,
        },
        {
          name: "Contact",
          link: "/contact",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/braydentw",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/braydentw/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Dribbble",
          link: "https://dribbble.com/braydentw",
          icon: "/static/icons/dribbble-f.svg",
          leavesWebsite: true,
        },
        {
          name: "IndieHackers",
          link: "https://indiehackers.com/braydentw",
          icon: "/static/icons/indiehackers-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:contact@braydentw.io",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "braydenw",
    paypal: "braydentw",
    message: "I appreciate your support very much! 💙",
  },
};
