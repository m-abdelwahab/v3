import React from "react"
import styled from "styled-components"
import { theme, media } from "../styles"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
const { fontSizes, colors } = theme

const DesignProjects = () => {
  const data = useStaticQuery(graphql`
  query {
    designProjectsJson {
      projects {
        id
        title
        description
        link
        cover {
          src {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`)
const { projects } = data.designProjectsJson
  return (
    <Container>
      <Heading>Design Projects</Heading>
      <Grid>
        {projects.map((project, i) => {
          return (
            <Fade key={project.id} delay={300 * i}>
              <Project >
                <Img loading="lazy" fluid={project.cover.src.childImageSharp.fluid} />
                <ProjectTitle>{project.title}</ProjectTitle>
                <Description>{project.description}</Description>
              </Project>
            </Fade>
          )
        })}
      </Grid>
    </Container>
  )
}

export default DesignProjects

const Container = styled.div`
  margin: 0 auto;
  padding: 150px 0;
  max-width: 1000px;

  ${media.tablet`padding: 100px 0;`};
  ${media.phone`margin:0 auto;`};
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
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 2fr));
  grid-template-rows: auto auto;
  align-items: center;
`

const Project = styled.div`
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.1s;
  &:hover {
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.12);
  }
  /* transform: perspective(980px) rotateY(-31deg) rotateX(3deg); */
  margin: 1em;
  padding: 1em;
`

const Description = styled.p`
  height: 1.5em;
`

const ProjectTitle = styled.h1`
  font-size: 1.5em;
  margin-top: 1em;
`

const Cover = styled.img``
