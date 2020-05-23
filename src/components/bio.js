import React from "react"
import styled from "@emotion/styled"
import Me from "../images/me.jpg"

const Card = styled.div`
  display: flex;
  max-width: 750px;
  align-items: center;
  padding: 1.5rem;
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
  line-height: 1.6;
  @media (max-width: 475px) {
    margin: 1em 0;
  }
  span {
    margin-bottom: 1rem;
  }
`

const Bio = () => {
  return (
    <Card>
      <Avatar src={Me} />
      <Paragraph>
        <p>
          Hi! Welcome to my Blog{" "}
          <span role="img" aria-label="waving-hand">
            👋
          </span>
        </p>
        This is where I write about the things I learn, Front-end Development
        and share my thoughts. I'm a Learner Advocate at Egghead.io and a
        Front-end Software Engineer in my 3rd year, studying Computer Science.
      </Paragraph>
    </Card>
  )
}

export default Bio
