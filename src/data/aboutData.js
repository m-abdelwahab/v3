import RobustaLogo from "../images/robusta-logo.svg"
import GUCLogo from "../images/guc-logo.svg"
import VGS from "../images/vgs.png"
import Egghead from "../images/egghead.png"
import StudentPartner from "../images/microsoftStudentPartner.png"
import Auth0 from "../images/auth0.svg"
export const experiences = [
  {
    id: "6",
    company: `Auth0`,
    title: "Ambassador",
    years: "Jun 2020 - present",
    url: "https://auth0.com/ambassador",
    description: `Working with Auth0's DevRel team to write content about security, authentication and Auth0`,
    icon: `${Auth0}`,
    alt: "Auth0 Logo",
  },
  {
    id: "4",
    company: `Egghead.io`,
    title: "Learner Advocate",
    years: "May 2020 - present",
    url: "https://egghead.io",
    description: `Responsible for taking notes for courses, reviewing them and attending workshops on Egghead`,
    icon: `${Egghead}`,
    alt: "Egghead Logo",
  },
  {
    id: "5",
    company: `Microsoft`,
    title: "Microsoft Student Partner",
    years: "April 2020 - Dec 2021",
    url:
      "https://studentpartners.microsoft.com/en-us/Account/DisplayMSPCertificate?url=57f024aeea09451e8dfedba45230601f",
    description: `Help fellow students, create robust tech communities, and develop technical and career skills.`,
    icon: `${StudentPartner}`,
    alt: "Microsoft Student Partners Logo",
  },
  {
    id: "1",
    company: `Robusta Studio`,
    title: "Front-end Developer Intern",
    years: "Dec 2019 - Jan 2020",
    url: "https://robustastudio.com",
    description: `Worked within an agile sprint team on multiple projects`,
    icon: `${RobustaLogo}`,
    alt: "Robusta Logo",
  },
  {
    id: "2",
    company: `German University in Cairo`,
    title: "Junior Teaching Assistant",
    years: "Sep 2019 - Dec 2019",
    url: null,
    description: `Volunteered to teach CSEN301 (Data Structures & Algorithms) at the German University in Cairo.`,
    icon: `${GUCLogo}`,
    alt: "GUC Logo",
  },
  {
    id: "3",
    company: `Vector Game Studio`,
    title: "Game Art Design Mentor",
    years: "Sep 2019 - present",
    url: "https://www.facebook.com/vgsguc/",
    description: `Responsible for teaching Game Art Design for VGS club members.`,
    icon: `${VGS}`,
    alt: "VGS Logo",
  },
]

export const statsList = [
  {
    id: "1",
    name: "Trips Around The Sun",
    start: 0,
    end: 20,
  },
  {
    id: "2",
    name: "Hours Spent Coding",
    start: 0,
    end: 1000,
  },
  {
    id: "3",
    name: "Hours Spent Designing",
    start: 0,
    end: 1000,
  },
  {
    id: "4",
    name: "Years Of Experience",
    start: 0,
    end: 2,
  },
]

export const skillsList = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Java" },
  { name: "Gatsby" },
  { name: "React" },
  { name: "GraphQL" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "Git" },
  { name: "Netlify" },
  { name: "Heroku" },
  { name: "MongoDB" },
  { name: "Handlebars" },
  { name: "Xd" },
  { name: "Illustrator" },
  // { name: "Apollo" },
  // add storybook and testing libs
]
