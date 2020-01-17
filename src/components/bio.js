import React from "react"
import styled from "styled-components"
import Me from "../images/me.jpg"

const Card = styled.div`
  display: flex;
  max-width: 650px;
  align-items: center;
  padding: 40px;
  border-radius: 8px;
  background: #fff;
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
  color: black;
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
        Hi! Welcome to my Blog👋. This is where I write about Design, Front-end
        Development and share my thoughts. I'm A Front-end Software Engineer in
        my 3rd year studying Computer Science.
      </Paragraph>
    </Card>
  )
}

export default Bio
