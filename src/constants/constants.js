const idGenerator = () => {
  return Math.ceil(Math.random()*10000000)
}
export const navbarData = [
  {
    title: 'Home',
    path: '#',
    id: idGenerator()
  },
  {
    title: 'About',
    path: '#about',
    id: idGenerator()
  },
  {
    title: 'Skills',
    path: '#skills',
    id: idGenerator()
  },
  {
    title: 'Projects',
    path: '#projects',
    id: idGenerator()
  },
  {
    title: 'Contact',
    path: '#contact',
    id: idGenerator()
  }
]
export const data = {
  about: {
    aboutMain: [
      {
        id: "10298787",
        title: "Education",
        descr: "PDP Academy Frontend (2022-2023) - Strong foundation in modern web development technologies and best practices."
      },
      {
        id: "10298978787",
        title: "Experience",
        descr: "I did an internship at OWA for 2 months. I have been developing real projects as a freelancer for over 1 year. I have also developed my own startup projects."
      },
      {
        id: "102981667787",
        title: "Why Choose Me",
        descr: "Responsible approach to work, striving for perfection in code quality, and focus on user experience with interactive and convenient interfaces."
      }
    ],
    aboutAdv: [
      { id: 12984799, title: "Experience", duration: "1.5+" },
      { id: 1124799, title: "Projects", duration: "9+" },
      { id: 14804799, title: "Languages", duration: "2" },
      { id: 88761920, title: "Always Learning", duration: "24/7" }
    ]
  },

  skills: [
    { id: 1, name: "HTML", icon: "fa-brands fa-html5", style: "orange" },
    { id: 2, name: "CSS", icon: "fa-brands fa-css3", style: "blue" },
    { id: 3, name: "JavaScript", icon: "fa-brands fa-js", style: "yellow" },
    { id: 4, name: "SCSS/Sass", icon: "fa-brands fa-sass", style: "purple" },
    { id: 5, name: "ReactJS", icon: "fa-brands fa-react", style: "aqua" },
    { id: 6, name: "NodeJS", icon: "fa-brands fa-node-js", style: "green" },
    { id: 7, name: "NextJS", icon: "fa-brands fa-react", style: "grey" },
    { id: 8, name: "Problem Solving", icon: "fa-solid fa-code", style: "blue" }
  ],

  projectDatas: [
    {
      id: 1837917,
      title: "Edu-Control.uz",
      descr: "",
      pathname: "",
      type: "startup",
      technologies: ["NestJS", "TypeScript", "NextJS", "Tailwind CSS", "GraphQL"]
    },
    {
      id: 1836417,
      title: "MLbb.uz",
      descr: "",
      pathname: "",
      type: "startup",
      technologies: ["ExpressJS", "TypeScript", "ReactJS", "Tailwind CSS", "MongoDB"]
    },
    {
      id: 1832417,
      title: "Web-supporter.uz",
      descr: "",
      pathname: "",
      type: "startup",
      technologies: ["ExpressJS", "TypeScript", "ReactJS", "Tailwind CSS", "MongoDB"]
    },
    {
      id: 1837817,
      title: "Zelo-Edu.uz",
      descr: "",
      pathname: "",
      type: "startup",
      technologies: ["ExpressJS", "TypeScript", "ReactJS", "Tailwind CSS", "MongoDB"]
    },
    {
      id: 9836417,
      title: "PearlHouse.uz",
      descr: "",
      pathname: "",
      type: "freelancing",
      technologies: ["ExpressJS", "TypeScript", "ReactJS", "Tailwind CSS", "MongoDB"]
    },
    {
      id: 18366997,
      title: "Ami-assemblers-group.uz",
      descr: "",
      pathname: "",
      image: "/aag.jpg",
      type: "freelancing",
      technologies: ["ExpressJS", "TypeScript", "ReactJS", "Tailwind CSS", "MongoDB"]
    }
  ],

  contactData: [
    { name: "Phone", content: "+998 (90) 891 01 80", link: "tel:+998908910180", icon: "fa-solid fa-phone" },
    { name: "Telegram", content: "@zelo_seven", link: "https://t.me/zelo_seven", icon: "fa-solid fa-paper-plane" },
    { name: "Instagram", content: "Alisher Oromov", link: "https://instagram.com/oromov180503", icon: "fa-brands fa-instagram" },
    { name: "Gmail", content: "alisheroromov473@gmail.com", link: "mailto:alisheroromov473@gmail.com", icon: "fa-regular fa-envelope" },
    { name: "Location", content: "Uzbekistan, Tashkent", link: "", icon: "fa-solid fa-location-dot" },
    { name: "Linkedin", content: "Alisher Oromov", link: "https://www.linkedin.com/in/alisher-oromov-a5ab632a3/", icon: "fa-brands fa-square-linkedin" }
  ]
};
