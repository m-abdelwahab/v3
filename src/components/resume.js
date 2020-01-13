import React from "react"
import styled from "styled-components"
import Resume from "../data/resume"

const MyResume = () => {
  return (
    <>
      <Intro>
        <Name>Mahmoud Abdelwahab</Name>
        <Contact>
          <ul>
            <li>mahmoud3799@gmail.com</li>
            <li>mahmoudabdelwahab.tech</li>
            <li>(+20)1008287538</li>
            <li>m-abdelwahab</li>
          </ul>
        </Contact>
      </Intro>
      <Container>
        <Skills>
          <Title>Skills</Title>
          <h1>Programming Languages</h1>
          <p>JavaScript, GraphQL, HTML, CSS, Java, Python</p>

          <h1>Libraries & Frameworks</h1>
          <p>
            React, Gatsby, Express, Node.js, react-testing-library, Bootstrap,
            jQuery
          </p>

          <h1>Tools & Platforms</h1>
          <p>
            Git, VS Code, Webpack, rollup Netlify, Heroku, Markdown, Firebase,
            Storybook
          </p>
          <h1>Design</h1>
          <p>Adobe XD, Figma</p>
        </Skills>
        <Contact></Contact>
        <Education>
          <Title>Education</Title>
          <h1>German University in Cairo</h1>
          <h2>Sep 2017 - Jun 2022</h2>
          <p>
            B.S. in Media Engineering and Technology | Majoring in Computer
            Science 3rd-year Undergraduate
          </p>

          <h1>German University in Cairo</h1>
          <h2>Sep 2017 - Jun 2022</h2>
          <p>
            B.S. in Media Engineering and Technology | Majoring in Computer
            Science 3rd-year Undergraduate
          </p>
        </Education>
        <Experience>
          <Title>Experience</Title>
          <h1>German University in Cairo</h1>
          <h2>Sep 2017 - Jun 2022</h2>
          <p>
            B.S. in Media Engineering and Technology | Majoring in Computer
            Science 3rd-year Undergraduate
          </p>
          <h1>German University in Cairo</h1>
          <h2>Sep 2017 - Jun 2022</h2>
          <p>
            B.S. in Media Engineering and Technology | Majoring in Computer
            Science 3rd-year Undergraduate
          </p>
        </Experience>
        <Projects>
          <Title>Projects</Title>
          <h1>German University in Cairo</h1>
          <h2>Sep 2017 - Jun 2022</h2>
          <p>
            B.S. in Media Engineering and Technology | Majoring in Computer
            Science 3rd-year Undergraduate
          </p>
          <h1>German University in Cairo</h1>
          <h2>Sep 2017 - Jun 2022</h2>
          <p>
            B.S. in Media Engineering and Technology | Majoring in Computer
            Science 3rd-year Undergraduate
          </p>
          <h1>German University in Cairo</h1>
          <h2>Sep 2017 - Jun 2022</h2>
          <p>
            B.S. in Media Engineering and Technology | Majoring in Computer
            Science 3rd-year Undergraduate
          </p>
          <h1>German University in Cairo</h1>
          <h2>Sep 2017 - Jun 2022</h2>
          <p>
            B.S. in Media Engineering and Technology | Majoring in Computer
            Science 3rd-year Undergraduate
          </p>
        </Projects>
        <Extracurricular>
          <Title>Extracurricular</Title>
          <h1>German University in Cairo</h1>
          <h2>Sep 2017 - Jun 2022</h2>
          <p>
            B.S. in Media Engineering and Technology | Majoring in Computer
            Science 3rd-year Undergraduate
          </p>
        </Extracurricular>
        <Languages>
          <Title>Languages</Title>
          <ul>
            <li>➞ Arabic (Native)</li>
            <li>➞ English (Fluent)</li>
            <li>➞ French (Fluent)</li>
            <li>➞ Spanish (Proficient)</li>
            <li>➞ German (Beginner)</li>
          </ul>
        </Languages>
        <Writing>
          <Title>Writing</Title>
          <h2>Sep 2017 - Jun 2022</h2>
          <p>
            B.S. in Media Engineering and Technology | Majoring in Computer
            Science 3rd-year Undergraduate
          </p>
        </Writing>
      </Container>
    </>
  )
}

export default MyResume

const Intro = styled.div`
  align-items:center;
  display: flex;
  flex-direction: column;
`
const Name = styled.h1`
`
const Title = styled.h1`
  font-size: 1.5em;
`
const Container = styled.div`
  margin: 0 auto;
  padding:0 1em;
  width: 210mm;
  height: 297mm;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "education skills"
    "experience skills"
    "projects extracurricular"
    "projects languages"
    "projects writing";
`
const Skills = styled.div`
  grid-area: skills;
`

const Contact = styled.div`
  grid-area: contact;
  display: flex;
  li {
    display: inline;
    margin: 1em;
  }
`
const Languages = styled.div`
  grid-area: languages;
`

const Writing = styled.div`
  grid-area: writing;
`
const Education = styled.div`
  grid-area: education;
`

const Extracurricular = styled.div`
  grid-area: extracurricular;
`

const Experience = styled.div`
  grid-area: experience;
`

const Projects = styled.div`
  grid-area: projects;
`
