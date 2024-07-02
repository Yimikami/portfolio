import { Icons } from "@/components/icons";

export const DATA = {
  name: "Yusuf Kahya",
  initials: "Yimikami",
  url: "https://yimikami.me",
  location: "Alanya, TR",
  locationLink: "https://www.google.com/maps/place/alanya",
  description: "Web Developer | Student",
  summary:
    "I am a student who is passionate about exploring new horizons by combining my technology and language skills in the ever-changing flow of the digital world.",
  avatarUrl: "/me.png",
  skills: [
    "CSS",
    "HTML",
    "Javascript",
    "React",
    "Next.js",
    "TailwindCSS",
    "PostgreSQL",
    "Express.js",
    "Typescript",
    "Node.js",
    "Python",
    "Social Media Management",
    "Photoshop",
    "Illustrator",
  ],
  contact: {
    email: "mailto:hi@yimikami.me",
    social: {
      X: {
        url: "https://twitter.com/yusufkaahya",
        icon: Icons.x,
      },
      GitHub: {
        url: "https://github.com/Yimikami",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/yusufkaahya/",
        icon: Icons.linkedin,
      },
    },
  },

  work: [
    {
      company: "Artboard Media",
      href: "https://artboard.media",
      badges: [],
      location: "Remote",
      title: "Web Developer | Social Media Manager",
      logoUrl: "/artboard-logo.png",
      start: "April 2023",
      end: "Present",
      description:
        "I am responsible for the management of the clients' social media accounts and developing websites for the clients.",
    },
  ],
  education: [
    {
      school: "Anadolu University",
      href: "https://www.anadolu.edu.tr/",
      degree: "Associate degree in Computer Programming",
      logoUrl: "/aof.jpeg",
      start: "2023",
      end: "Present",
    },
    {
      school: "Kırıkkale University",
      href: "https://kku.edu.tr/Anasayfa",
      degree: "Bachelor's degree in English Translation and Interpreting",
      logoUrl: "/kku.jpeg",
      start: "2019",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Koochi",
      href: "https://koochi-production.up.railway.app/",
      active: true,
      description:
        "Discord Clone project featuring real-time chat, video and audio communication, file uploading, and authentication.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Livekit",
        "Socket.io",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://koochi-production.up.railway.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Yimikami/Koochi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/koochi.png",
      video: "",
    },
    {
      title: "PureHour",
      href: "https://github.com/ValeChill/Hour-Clock",
      active: true,
      description:
        "I contributed to this project. PureHour, a sleek and customizable productivity tool designed to enhance your workflow and keep you on track throughout the day.",
      technologies: ["HTML", "CSS", "Javascript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ValeChill/Hour-Clock",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/purehour.png",
      video: "",
    },
    {
      title: "9ix Music",
      href: "https://9ixmusic.com",
      active: true,
      description:
        "Website for 9ix Music. 9ix Music is a distributor of music and music videos. ",
      technologies: ["HTML", "CSS", "Javascript"],
      links: [
        {
          type: "Website",
          href: "https://artboard.media",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/9ixmusic.png",
      video: "",
    },
    {
      title: "Artboard Media",
      href: "https://artboard.media",
      active: true,
      description:
        "Website for Artboard Media. Artboard Media is a digital marketing agency.",
      technologies: ["Next.js", "React"],
      links: [
        {
          type: "Website",
          href: "https://artboard.media",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/artboard.png",
      video: "",
    },
    {
      title: "Janna - Discord Bot",
      href: "https://github.com/Yimikami/Janna",
      active: true,
      description:
        "Janna is a Discord bot designed to fetch League of Legends information using Riot Games API.",
      technologies: ["Python"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Yimikami/Janna",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/janna.gif",
      video: "",
    },
    {
      title: "URL Shortener",
      href: "https://url-shortener-o5as.onrender.com/",
      active: true,
      description:
        "Web application that allows users to shorten URLs and manage them efficiently. It provides features such as generating QR codes for shortened URLs, updating existing URLs, and deleting URLs.",
      technologies: ["Node.js", "Express.js", "MongoDB", "TailwindCSS"],
      links: [
        {
          type: "Live Demo",
          href: "https://url-shortener-o5as.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Yimikami/url-shortener",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/url-shortener.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Codédex Summer Hackathon",
      dates: "July 11 - 12th, 2024",
      location: "Remote",
      description:
        "This hackathon is summer-related and have three tracks – two (2) on Web Dev focused and one (1) on data science. ",
      image: "https://www.codedex.io/images/codedex-bot-logo-compressed.gif",
      mlh: "",
      links: [],
    },
  ],
} as const;
