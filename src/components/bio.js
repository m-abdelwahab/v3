import React from "react"
import styled from "@emotion/styled"
import Me from "../images/me.jpg"

const Card = styled.div`
  display: flex;
  max-width: 650px;
  align-items: center;
  padding: 40px;
  border-radius: 8px;
  @media (max-width: 475px) {
    flex-direction: column;
  }
`

const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  float: left;
  shape-outside: ellipse();
`

const Paragraph = styled.p`
  font-size: 1em;
  margin: 1em;
  font-weight: 500;
  @media (max-width: 475px) {
    margin: 1em 0;
  }
`

const Bio = () => {
  return (
    <Card>
      <Avatar src={Me} />
      <Paragraph>
        Hi! Welcome to my Blog
        <span role="img" aria-label="waving-hand">
          👋
        </span>
        <br />
        This is where I write about Design, Front-end Development and share my
        thoughts. I'm a Front-end Software Engineer in my 3rd year, studying
        Computer Science.
      </Paragraph>
    </Card>
  )
}

export default Bio
