import React from "react"
import talks from "../data/talks"
import { FormattedIcon } from "../components/icons"
import Fade from "react-reveal/Fade"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { theme, Section, media } from "../styles"
const { fontSizes, colors } = theme

const TalksPage = () => {
  return (
    <Layout>
      <SEO title="Talks" />
      <Container>
        <Heading>
          <Link to="/">
            <span>Home</span>
          </Link>
          /Talks
        </Heading>
        <Grid>
          {talks.map((talk, i) => {
            return (
              <Fade delay={200 * i}>
                <Card>
                  <Tag>{talk.topic}</Tag>
                  <Title>{talk.title}</Title>
                  <Description>{talk.description}</Description>
                  <Link to={talk.slides}>
                    <FormattedIcon name="Link" />
                    Slides
                  </Link>
                </Card>
              </Fade>
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export default TalksPage

const Container = styled(Section)``

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 3fr));
  grid-template-rows: repeat(2, fr);
  grid-gap: 2em;
  margin: 1em auto;
`

const Card = styled.div`
  padding: 1.5em;
  border-radius: 10px;
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  transition: all 150ms ease-in-out;
  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transition: all 150ms ease-in-out;
    cursor: pointer;
  }
  svg {
    width: 24px;
    padding: 0.2em;
    margin-bottom: 5px;
    fill: none;
  }
  .react-reveal {
    display: inline;
  }
  width: 100%;
  max-width: 500px;
`
const Tag = styled.span`
  margin-bottom: 1em;
`

const Title = styled.h2`
  font-size: 1.5em;
`
const Description = styled.p`
  font-size: 1em;
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
  span {
    font-size: ${fontSizes.h3};
  }
`
