import React from "react"
import { experiences } from "../data/aboutData"
import styled from "styled-components"
import { theme, mixins, media, Section } from "../styles"
import Fade from "react-reveal/Fade"
const { fontSizes, colors } = theme

const Experience = () => {
  return (
    <Container>
      <Heading>Experience</Heading>
      {experiences.map((experience, i) => (
        <Fade key={experience.id} delay={i * 200}>
          <Card >
            <ul>
              <li>
                <Icon src={experience.icon} />
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={experience.url}
                >
                  <h4>{experience.company}</h4>
                </a>
                <h5>{experience.title}</h5>
                <h6>{experience.years}</h6>
                <p>{experience.description}</p>
              </li>
            </ul>
          </Card>
        </Fade>
      ))}
    </Container>
  )
}

export default Experience

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  color: ${colors.dark};
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
`
const Icon = styled.img`
  position: absolute;
  right: -28px;
  padding: 15px;
  height: 56px;
  width: 56px;
  border-radius: 50%;
  color: black;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.2s;
  background-color: white;
  @media (max-width: 600px) {
    left: 50%;
    transform: translateX(-50%);
    bottom: -28px;
  }
`

const Container = styled(Section)`
  position: relative;
  margin-top: 0;
  @media (min-width: 1200px) {
    width: 750px;
    margin: 0 auto;
  }
`
const Card = styled.div`
  margin: 30px 0 10px 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 40px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.1s;
  &:hover {
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.12);
  }
  @media (max-width: 600px) {
    margin-bottom: 52px;
    margin-left: 5px;
  }
  h6 {
    margin: 6px 0;
    color: black;
  }
  h4 {
    margin-bottom: 8px;
    color: black;
    font-size: ${fontSizes.xxlarge};
  }
  h5 {
    margin-bottom: 6px;
    color: black;
    font-size: ${fontSizes.medium};
  }

  @media (min-width: 1200px) {
    h6 {
      display: inline-block;
      font-size: ${fontSizes.small};
      margin-top: -55px;
      position: absolute;
      left: -24px;
      bottom: 25px;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
    }
  }
`
