import React from "react"
import styled from "styled-components"
import { theme, mixins, media, Section } from "../styles"
import { Link } from "gatsby"
import data from "../data/discover"
import Fade from "react-reveal/Fade"
const { fontSizes, colors } = theme

const Discover = () => {
  return (
    <Container>
      <Fade>
        <Heading>Discover</Heading>
      </Fade>
      <Grid>
        {data.map((section, id) => {
          return (
            <Link to={section.link}>
              <Fade key={id} delay={id * 200}>
                <Card>
                  <Cover src={section.cover} />
                </Card>
              </Fade>
            </Link>
          )
        })}
      </Grid>
    </Container>
  )
}

export default Discover

const Container = styled(Section)``

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  .react-reveal {
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
const Card = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  /* box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.1s;
  &:hover {
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.12);
  } */
  @media (max-width: 768px) {
    margin: 1em;
  }
`
const Cover = styled.img`
  width: 100%;
  max-width: 500px;
`
const Description = styled.div`
  margin: 1em 1em 1em 0;
  font-size: 1.3em;
`
