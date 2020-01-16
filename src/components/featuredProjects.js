import React from "react"
import styled from "styled-components"
import Projects from "../data/featuredProjects"
import { FormattedIcon } from "../components/icons"
import "react-tippy/dist/tippy.css"
import { theme, mixins, media, Section } from "../styles"
import { Tooltip } from "react-tippy"
const { fontSizes, colors } = theme

const FeaturedProjects = () => {
  return (
    <Container>
      <Heading> Coding Projects</Heading>
      <Grid>
        {Projects.map(project => {
          return (
            <Project key={project.id}>
              <ProjectCover src={project.cover} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDesc>{project.description}</ProjectDesc>
              <ProjectStack>
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
              </ProjectStack>
              <ProjectLinks>
                <a href={project.github} target="_blank">
                  <FormattedIcon name="GitHub" />
                </a>
                <a href={project.link} target="_blank">
                  <FormattedIcon name="Link" />
                </a>
              </ProjectLinks>
            </Project>
          )
        })}
      </Grid>
    </Container>
  )
}

export default FeaturedProjects

const Container = styled.div`
  margin: 0 auto;
  padding: 150px 0;

  ${media.tablet`padding: 100px 0;`};
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
  grid-template-columns: repeat(auto-fit, minmax(450px, 2fr));
  grid-template-rows: repeat(2, fr);
`

const Project = styled.div`
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.1s;
  &:hover {
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.12);
  }
  margin: 1em;
  padding: 1em;
`

const ProjectDesc = styled.p``

const ProjectTitle = styled.h1`
  font-size: 1.5em;
  margin-top: 1em;
`

const ProjectCover = styled.img``

const ProjectStack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
  svg {
    width: 30px;
    margin: 1em;
  }
`
const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    fill: none;
    width: 24px;
  }
`
