// @jsx jsx
import { jsx } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"
import { FormattedIcon } from "../components/icons"
import { media, Section } from "../styles"
import Fade from "react-reveal/Fade"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import ReactTooltip from "react-tooltip"

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
          github
          cover {
            alt
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
    <Container id="featured-projects">
      <ReactTooltip />
      <Heading sx={{ fontSize: 5 }}>Coding Projects</Heading>
      <Grid>
        {projects.map((project, i) => {
          return (
            <Fade key={project.id} delay={300 * i}>
              <Project sx={{ backgroundColor: "card" }}>
                <Img
                  loading="lazy"
                  fluid={project.cover.src.childImageSharp.fluid}
                  alt={project.cover.alt}
                />
                <ProjectTitle>{project.title}</ProjectTitle>
                <Description>{project.description}</Description>
                <Stack>
                  {project.tech.map((tech, i) => {
                    return (
                      <span key={i} data-tip={`${tech}`}>
                        <FormattedIcon name={tech} aria-label={tech} />
                      </span>
                    )
                  })}
                </Stack>
                <Links>
                  <a
                    aria-label="github link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedIcon name="GitHub" alt="github icon" />
                  </a>
                  <a
                    aria-label="live preview"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedIcon name="Preview" alt="preview icon" />
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
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 3fr));
  grid-template-rows: repeat(2, fr);
  ${media.phone`align-items:center;`};
  margin: 0 auto;
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

// const Cover = styled.img``

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
