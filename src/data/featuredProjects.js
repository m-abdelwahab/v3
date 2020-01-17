import ideapad from "../images/ideapad.png"
import hn360 from "../images/hn360.png"
import portfolio from "../images/portfolio.png"

export default [
  {
    id: "1",
    title: "IdeaPad",
    description:
      "Full Stack note-taking Web App where users can use voice typing ",
    link: "https://ideapad-app.herokuapp.com",
    github: "https://github.com/m-abdelwahab/ideapad",
    tech: ["Node", "Express", "MongoDB", "Heroku", "JavaScript", "Handlebars"],
    cover: `${ideapad}`,
  },
  {
    id: "2",
    title: "HN360",
    description: "A news app powered by the Hackernews API",
    link: "https://hn360.netlify.com",
    github: "https://github.com/m-abdelwahab/hn360",
    tech: ["React", "styled-components", "react-testing-library"],
    cover: `${hn360}`,
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "Personal website where I showcase my work and people can learn about me.",
    link: "https://mahmoudabdelwahab.tech",
    github: "https://github.com/m-abdelwahab/portfolio",
    tech: ["Gatsby", "styled-components"],
    cover: `${portfolio}`,
  },
]
