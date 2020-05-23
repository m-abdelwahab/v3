// @jsx jsx
import { jsx } from "theme-ui"
import React from "react"
import { FormattedIcon } from "../components/icons"
import Fade from "react-reveal/Fade"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql, useStaticQuery } from "gatsby"
import { theme, Section, media } from "../styles"
const { fontSizes } = theme

const TalksPage = () => {
  const data = useStaticQuery(graphql`
    query {
      talksJson {
        talks {
          title
          description
          topic
          event
          link
        }
      }
    }
  `)
  const { talks } = data.talksJson
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
            const { topic, title, description, event, link } = talk
            return (
              <Fade key={i} delay={200 * i}>
                <a rel="noopener noreferrer" target="_blank" href={link}>
                  <Card sx={{ backgroundColor: "card" }}>
                    <Tag>{topic}</Tag>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <Event>{event}</Event>
                  </Card>
                </a>
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
  margin-bottom: 1em;
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
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  span {
    font-size: ${fontSizes.h3};
    ${media.tablet`font-size: 24px;`};
  }
`
const Event = styled.p`
  font-weight: 700;
`
