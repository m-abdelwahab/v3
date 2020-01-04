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
} from "./index"

const FormattedIcon = ({ name }) => {
  switch (name) {
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
    default:
      return <IconGithub />
  }
}

export default FormattedIcon
