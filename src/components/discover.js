import React from "react"
import styled from "styled-components"
import { theme, mixins, media, Section } from "../styles"
import { Link } from "gatsby"
import contact from "../images/contact.jpeg"
import mic from "../images/mic.jpeg"
import me from "../images/me.jpeg"
import blog from "../images/blogging.jpeg"
import Fade from "react-reveal/Fade"
const { fontSizes, colors } = theme

const Discover = () => {
  return (
    <Container>
      <DiscoverContainer>
        <Fade>
          <Heading>Discover</Heading>
        </Fade>
        <Fade delay="200">
          <Paragraph>
            Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed to using 'Content here, content here', making it look
            like readable English. Many desktop publishing packages and web page
            editors
          </Paragraph>
        </Fade>
      </DiscoverContainer>
      <Grid>
        <Talks>
          <Link to="">
            <img src={mic} />
          </Link>
        </Talks>
          <Blog>
            <Link to="/blog">
              <img src={blog} />
            </Link>
          </Blog>
        <About>
          <Link to="/about">
            <img src={me} />
          </Link>
        </About>
        <Contact>
          <Link>
            <img src={contact} />
          </Link>
        </Contact>
      </Grid>
    </Container>
  )
}

export default Discover

const Container = styled(Section)`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const DiscoverContainer = styled.div`
  margin: 0 auto;
`
const Grid = styled.div`
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-template-areas:
    "about about   .     ."
    "about about contact contact"
    "talks blog   blog   blog"
    ".     blog   blog   blog";

  height: 95vh;
  width: 100%;

  @media (max-width: 768px) {
    grid-gap: 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "about"
      "blog"
      "talks"
      "contact";

    height: 100vh;
    width: 100%;
  }
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
const Paragraph = styled.div`
  margin: 1em 1em 1em 0;
  max-width: 500px;
`

const Talks = styled.div`
  grid-area: talks;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Blog = styled.div`
  grid-area: blog;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
`

const About = styled.div`
  grid-area: about;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Contact = styled.div`
  grid-area: contact;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`
