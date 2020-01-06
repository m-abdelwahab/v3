import ideapad from "../images/ideapad.png"
import hn360 from "../images/hn360.png"
import portfolio from "../images/portfolio.png"

export default [
  {
    id: "1",
    title: "IdeaPad",
    description:
      "A Full Stack Web Application where users can create an account, add, edit and delete notes. Users can also use voice typing for easier note-taking.",
    link: "https://ideapad-app.herokuapp.com",
    github: "https://github.com/m-abdelwahab/ideapad",
    tech: ["Node.js", "Express", "MongoDB", "Heroku", "HTML/CSS/JS"],
    cover: `${ideapad}`,
  },
  {
    id: "2",
    title: "HN360",
    description: "A news app powered by the Hackernews API",
    link: "https://hn360.netlify.com",
    github: "https://github.com/m-abdelwahab/hn360",
    tech: ["React", "Styled-Components", "Axios", "React-Testing-Library"],
    cover: `${hn360}`,
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "My Personal website where I showcase my work and people can learn about me.",
    link: "https://mahmoudabdelwahab.tech",
    github: "https://github.com/m-abdelwahab/portfolio",
    tech: ["Gatsby.js", "Styled-components"],
    cover: `${portfolio}`,
  },
]
