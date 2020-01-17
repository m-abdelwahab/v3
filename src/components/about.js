import React from "react"
import styled from "styled-components"
import { FormattedIcon } from "../components/icons"
import "react-tippy/dist/tippy.css"
import CountUp from "react-countup"
import { Section } from "../styles"
import { Tooltip } from "react-tippy"
import Me from "../images/me.jpg"
import { statsList, skillsList } from "../data/aboutData"
import Fade from "react-reveal/Fade"

const About = () => {
  return (
    <Container>
      <AboutImg src={Me} alt="me" />
      <AboutStats>
        {statsList.map((stat, i) => {
          return (
            <Fade delay={i * 200}>
              <CounterContainer>
                <Counter>
                  <CountUp
                    key={stat.id}
                    start={stat.start || 0}
                    end={stat.end || 100}
                    duration={3}
                  />
                </Counter>
                <StatTitle>{stat.name}</StatTitle>
              </CounterContainer>
            </Fade>
          )
        })}
      </AboutStats>

      <AboutSkills>
        <h1>Tools I use</h1> <br />
        {skillsList.map((skill, i) => {
          return (
            <Fade right delay={100 * i}>
              <Tooltip
                title={skill.name}
                position="bottom"
                trigger="mouseenter"
              >
                <FormattedIcon name={skill.name} />
              </Tooltip>
            </Fade>
          )
        })}
      </AboutSkills>

        <AboutIntro>
          <h1>
            I'm an Egyptian based Front-end-engineer and UX designer, I am
            passionate about building exciting software projects. I'm a 3rd year
            undergraduate, currently majoring in Computer Science at the German
            University in Cairo.
          </h1>
          <h1>
            Here's some fun facts about me: I speak five languages: Arabic
            (Native), English (fluent) , French (fluent), Spanish (intermediate)
            and German (beginner).
          </h1>
          <h1>
            During the past few years, Fitness and working out became a huge
            part of my life and daily routine, that's why if you can't find me
            at my workspace , you'll probably find me at the gym 💪. One of my
            passions is Filmmaking 🎥 , I love to write, shoot and edit videos.
            The process of building a story using visuals has always fascinated
            me; this is probably why I fell in love with Frontend Engineering.
          </h1>
        </AboutIntro>
    </Container>
  )
}

export default About

const Container = styled(Section)`
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "pic stats"
    "pic skills"
    "intro intro";
  grid-column-gap: 5vw;

  @media (max-width: 1024px) {
    grid-template-columns: 50% 35%;
    grid-template-rows: auto;
    grid-column-gap: 15%;
    grid-template-areas:
      "pic stats"
      "skills stats"
      "intro intro";
  }
  @media (max-width: 420px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas:
      "pic"
      "stats"
      "skills"
      "intro";
  }
`

const AboutImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  grid-area: pic;
  border-radius: 100%;
  @media (max-width: 420px) {
    width: 70%;
    margin: 0 auto;
  }
`
const AboutStats = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  grid-column-gap: 2em;
  align-items: start;

  @media (max-width: 1024px) {
    align-items: end;
    text-align: left;
    grid-column-gap: 10em;
    & > * {
      margin-right: 0;
    }
  }

  @media (max-width: 420px) {
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    align-items: start;
    justify-items: center;
    text-align: center;
    grid-column-gap: 2em;
  }
`

const AboutSkills = styled.div`
  grid-area: skills;
  font-size: 1.5vw;
  position: relative;
  align-self: end;
  svg {
    width: 48px;
    margin: 0.5em;
  }
  .react-reveal {
    display: inline;
  }
  & > span {
    margin-right: 1em;
  }

  & > h1 {
    font-size: 1.5em;
    margin-bottom: 5px;
    margin-top: 10px;
    position: relative;
    display: inline-block;
    color: black;

    &:before {
      /* background of title on hover */
      background-color: rgba(155, 219, 125, 0.6);
      opacity: 0.5;
      content: "";
      position: absolute;
      top: 0.45em;
      left: 0.25em;
      right: -5px;
      height: 0.8em;
      z-index: -1;

      width: 95%;
      @media (max-width: 420px) {
        top: 0.4em;
        float: none;
        height: 0.9em;
        left: -3px;
        opacity: 0.75;
      }
    }
  }

  @media (max-width: 1024px) {
    font-size: 2em;
    margin-top: 1em;

    & > div {
      font-size: 1.25em;
      margin-top: 0em;
    }
  }

  @media (max-width: 420px) {
    font-size: 1.5em;
    & > div {
      font-size: 1.25em;
      margin-bottom: 0.3em;
    }

    & > span {
      display: block;
    }
  }
`
const AboutIntro = styled.div`
  grid-area: intro;
  line-height: 1.7;
  font-size: 2em;
  margin: 2em 0 ;
  width:100%;
  & a {
    color: black;
    text-decoration: overline;

    &:hover {
      text-decoration: none;
    }
  }

  @media (max-width: 1024px) {
    font-size: 1.5em;
  }
  @media (max-width: 420px) {
    font-size: 1em;
  }
`
const CounterContainer = styled.span`
  display: inline-grid;
  grid-template-rows: auto auto;
  grid-template-areas:
    "counter"
    "desc";
  align-items: center;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
  @media (max-width: 425px) {
    padding: 5%;
    justify-items: center;
    text-align: center;
  }
`

const Counter = styled.span`
  grid-area: counter;
  font-size: 2em;
  span {
    font-size: 1em;
    font-weight: 900;
  }
  @media (max-width: 1024px) {
    font-size: 2em;
  }
  &:after {
    content: "+";
  }
`

const StatTitle = styled.span`
  grid-area: desc;
  font-size: 1.3em;
  @media (max-width: 1024px) {
    font-size: 1.5em;
  }
  @media (max-width: 425px) {
    font-size: 1em;
  }
`
