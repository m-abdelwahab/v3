import React from "react"
import {
  IconGithub,
  IconLinkedin,
  IconCodepen,
  IconInstagram,
  IconTwitter,
  IconMail,
  IconMedium,
  IconLink,
  IconGit,
  IconCSS,
  IconApollo,
  IconExpress,
  IconFigma,
  IconGatsby,
  IconGraphql,
  IconHandlebars,
  IconHeroku,
  IconHTML,
  IconIllustrator,
  IconJava,
  IconMongodb,
  IconNetlify,
  IconNode,
  IconReact,
  IconTypescript,
  IconXd,
  IconJavaScript,
  IconGlobe,
  IconStyledComponents,
  IconReactTestingLib,
  IconPreview,
  IconMoon,
  IconSun,
} from "./index"

const FormattedIcon = ({ name }) => {
  switch (name) {
    case "Moon":
      return <IconMoon />
    case "Sun":
      return <IconSun />
    case "Preview":
      return <IconPreview />
    case "react-testing-library":
      return <IconReactTestingLib />
    case "styled-components":
      return <IconStyledComponents />
    case "Globe":
      return <IconGlobe />
    case "Github":
      return <IconGithub />
    case "Linkedin":
      return <IconLinkedin />
    case "Codepen":
      return <IconCodepen />
    case "Instagram":
      return <IconInstagram />
    case "Twitter":
      return <IconTwitter />
    case "Mail":
      return <IconMail />
    case "Medium":
      return <IconMedium />
    case "Link":
      return <IconLink />
    case "Git":
      return <IconGit />
    case "CSS":
      return <IconCSS />
    case "Apollo":
      return <IconApollo />
    case "Express":
      return <IconExpress />
    case "Figma":
      return <IconFigma />
    case "Gatsby":
      return <IconGatsby />
    case "GraphQL":
      return <IconGraphql />
    case "Handlebars":
      return <IconHandlebars />
    case "Heroku":
      return <IconHeroku />
    case "HTML":
      return <IconHTML />
    case "Illustrator":
      return <IconIllustrator />
    case "Node":
      return <IconNode />
    case "Xd":
      return <IconXd />
    case "TypeScript":
      return <IconTypescript />
    case "React":
      return <IconReact />
    case "Netlify":
      return <IconNetlify />
    case "MongoDB":
      return <IconMongodb />
    case "Java":
      return <IconJava />
    case "JavaScript":
      return <IconJavaScript />
    default:
      return <IconGithub />
  }
}

export default FormattedIcon
