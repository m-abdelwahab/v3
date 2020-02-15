import React from "react"
import styled from "styled-components"
import { theme, media, Section } from "../styles"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
const { fontSizes, colors } = theme

const Discover = () => {
  return (
    <Container>
      <Fade>
        <Heading>What's Next?</Heading>
      </Fade>
      <Fade>
        <Paragraph>
          If you're interested in learning about what theme or apps or I use,
          check out my <Link to="/uses">uses </Link> page. I also{" "}
          <Link to="/blog">write</Link> and give{" "}
          <Link to="/talks">talks. </Link> You can find more details in the{" "}
          <Link to="/about"> about</Link> page.
          <br />
          If you want to chat about anything, feel free to email me or to send
          me a message on Twitter, since that's where I'm most active.
        </Paragraph>
      </Fade>
    </Container>
  )
}

export default Discover

const Container = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
`

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
  .react-reveal {
    display: inline;
  }
`
const Paragraph = styled.h3`
  font-size: ${fontSizes.xlarge};
  max-width: 500px;
  text-align: center;
  a {
    font-size: ${fontSizes.xlarge};
    border-bottom: 5px solid #0099ff;
  }
`
