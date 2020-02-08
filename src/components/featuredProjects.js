import React from "react"
import styled from "styled-components"
// import projects from "../data/featuredProjects"
import { FormattedIcon } from "../components/icons"
import "react-tippy/dist/tippy.css"
import { theme, mixins, media, Section } from "../styles"
import { Tooltip } from "react-tippy"
import Fade from "react-reveal/Fade"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const { fontSizes, colors } = theme

const FeaturedProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      featuredProjectsJson {
        projects {
          id
          title
          description
          link
          tech
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
  const { projects } = data.featuredProjectsJson
  return (
    <Container>
      <Heading>Coding Projects</Heading>
      <Grid>
        {projects.map((project, i) => {
          return (
            <Fade delay={300 * i}>
              <Project key={project.id}>
                <Img fluid={project.cover.src.childImageSharp.fluid} />
                <ProjectTitle>{project.title}</ProjectTitle>
                <Description>{project.description}</Description>
                <Stack>
                  {project.tech.map(tech => {
                    return (
                      <Tooltip
                        title={tech}
                        position="bottom"
                        trigger="mouseenter"
                      >
                        <FormattedIcon name={tech} />
                      </Tooltip>
                    )
                  })}
                </Stack>
                <Links>
                  <a href={project.github} target="_blank">
                    <FormattedIcon name="GitHub" />
                  </a>
                  <a href={project.link} target="_blank">
                    <FormattedIcon name="Preview" />
                  </a>
                </Links>
              </Project>
            </Fade>
          )
        })}
      </Grid>
    </Container>
  )
}

export default FeaturedProjects

const Container = styled(Section)`
  margin: 0 auto;
  padding: 150px 0;

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
  grid-template-columns: repeat(auto-fill, minmax(300px, 3fr));
  grid-template-rows: repeat(2, fr);
  ${media.phone`align-items:center;`};
`

const Project = styled.div`
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.1s;
  &:hover {
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.12);
  }
  margin: 1em auto;
  text-align: center;
  padding: 1em;
  max-width: 300px;
  width: 100%;
  height: auto;
`

const Description = styled.p`
  margin: 0.5em 0;
  height: 2em;
`

const ProjectTitle = styled.h1`
  font-size: 1.5em;
  margin-top: 1em;
`

const Cover = styled.img``

const Stack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
  svg {
    width: 30px;
    margin: 0.5em;
  }
`
const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    fill: none;
    width: 24px;
  }
`
