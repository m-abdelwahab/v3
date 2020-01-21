import React from "react"
import styled from "styled-components"
import {
  IconGithub,
  IconMail,
  IconGlobe,
  IconLinkedin,
} from "../components/icons"

const MyResume = () => {
  return (
    <>
      <Container>
        <Grid>
          <Intro>
            <Name>Mahmoud Abdelwahab</Name>
            <Title>Front-end Software Engineer</Title>
          </Intro>
          <Contact>
            <ul>
              <li>
                <IconMail />
                mahmoud3799@gmail.com
              </li>
              <li>
                <IconGlobe />
                mahmoudabdelwahab.tech
              </li>
              <li>
                <IconGlobe />
                (+20)1008287538
              </li>
              <li>
                <IconGithub />
                m-abdelwahab
              </li>
              <li>
                <IconLinkedin />
                m-abdelwahab-dev
              </li>
            </ul>
          </Contact>
          <Skills>
            <SectionTitle>Skills</SectionTitle>
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
            <Extracurricular>
              <SectionTitle>Extracurricular</SectionTitle>
              <h1>German University in Cairo</h1>
              <h2>Sep 2017 - Jun 2022</h2>
              <p>
                B.S. in Media Engineering and Technology | Majoring in Computer
                Science 3rd-year Undergraduate
              </p>
            </Extracurricular>
          </Skills>
          <Education>
            <SectionTitle>Education</SectionTitle>
            <Block>
              <BlockTitle>
                <h1>German University in Cairo</h1>
                <h2>Sep 2017 - Jun 2022</h2>
              </BlockTitle>

              <p>
                B.S. in Media Engineering and Technology | Majoring in Computer
                Science 3rd-year Undergraduate
              </p>
            </Block>
            <Block>
              <BlockTitle>
                <h1>Collège De La Salle</h1>
                <h2>Sep 2005 - Jun 2017</h2>
              </BlockTitle>

              <p>
                French Baccalaureate from l’académie de Grenoble | Scientific
                major Graduated with Honors (mention Bien 14/20).
              </p>
            </Block>
          </Education>

          <Experience>
            <SectionTitle>Experience</SectionTitle>
            <Block>
              <BlockTitle>
                <h1>Front-end Developer Intern@Robusta Studio</h1>
                <h2>Dec 2019 - Present</h2>
              </BlockTitle>
              <p>
                Worked with the Front-end team on layouts and UI components for
                multiple websites, using various front-end technologies.
              </p>
            </Block>
            <Block>
              <BlockTitle>
                <h1>German University in Cairo</h1>
                <h2>Sep 2017 - Jun 2022</h2>
              </BlockTitle>

              <p>
                B.S. in Media Engineering and Technology | Majoring in Computer
                Science 3rd-year Undergraduate
              </p>
            </Block>
          </Experience>
          <Projects>
            <SectionTitle>Projects</SectionTitle>
            <Block>
              <BlockTitle>
                <h1>
                  German University in Cairo<span>Sep 2017 - Jun 2022</span>
                </h1>
              </BlockTitle>

              <p>
                B.S. in Media Engineering and Technology | Majoring in Computer
                Science 3rd-year Undergraduate
              </p>
            </Block>
            <Block>
              <BlockTitle>
                <h1>
                  German University in Cairo<span>Sep 2017 - Jun 2022</span>
                </h1>
              </BlockTitle>

              <p>
                B.S. in Media Engineering and Technology | Majoring in Computer
                Science 3rd-year Undergraduate
              </p>
            </Block>
            <Block>
              <BlockTitle>
                <h1>
                  German University in Cairo<span>Sep 2017 - Jun 2022</span>
                </h1>
              </BlockTitle>

              <p>
                B.S. in Media Engineering and Technology | Majoring in Computer
                Science 3rd-year Undergraduate
              </p>
            </Block>
          </Projects>

          <Languages>
            <SectionTitle>Languages</SectionTitle>
            <ul>
              <li>➞ Arabic (Native)</li>
              <li>➞ English (Fluent)</li>
              <li>➞ French (Fluent)</li>
              <li>➞ Spanish (Proficient)</li>
              <li>➞ German (Beginner)</li>
            </ul>
            <Writing>
              <SectionTitle>Writing</SectionTitle>
              <h2>Sep 2017 - Jun 2022</h2>
              <p>
                B.S. in Media Engineering and Technology | Majoring in Computer
                Science 3rd-year Undergraduate
              </p>
            </Writing>
          </Languages>
        </Grid>
      </Container>
    </>
  )
}

export default MyResume

const Container = styled.div`
  margin: 5em auto 5em auto;

  padding: 2em 2em;

  width: 210mm;
  height: 297mm;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.1s;
  &:hover {
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.12);
  }
  @media print {
    width: 210mm;
    height: 297mm;
  }

  @media(max-width:768px){
    height:100%;
    box-shadow:none;

  }
`
const Grid = styled.div`
  display: grid;
  column-gap: 40px;
  padding: 1em;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 0.25fr 1fr 1fr;
  grid-template-areas:
    "intro contact"
    "education skills"
    "experience skills"
    "experience extracurricular"
    "projects languages"
    "projects writing";
    @media(max-width:768px){
      display:flex;
      flex-direction:column;
    }
`
const Name = styled.h1`
  font-size: 28px;
  color: black;
  margin: 0;
`

const Title = styled.h2`
  font-size: 22px;
  color: blue;
  font-weight: 350;
  margin: 0;
`

const Contact = styled.div`
  grid-area: contact;
  display: flex;
  flex-direction: column;
  li {
    stroke-color: black;
    font-size: 14px;
  }
  svg {
    fill: none;
    width: 18px;
    padding: 1.5px;
    margin: 0 2px 0 2px;
  }
  margin-bottom:10px;
  @media(max-width:768px){
    display: flex;
    flex-wrap: wrap;
    li {
      stroke-color: black;
      font-size: 14px;
      margin-right:1em;
      display:inline;
    }
  }
`
const BlockTitle = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  h1 {
  }
  h2 {
    color: #696969;
    font-weight: 400;
  }
`
const Intro = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: intro;
`
const SectionTitle = styled.h1`
  font-size: 1.5em;
  color: blue;
`

const Block = styled.div`
  h1 {
    font-weight: 900;
  }

  p {
  }
`
const Heading = styled.h1``

const Skills = styled.div`
  grid-area: skills;
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
