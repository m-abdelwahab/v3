import React from "react"
import styled from "styled-components"
import { theme, mixins, media, Section } from "../styles"
import { steps } from "../data/aboutData"

const { fontSizes, colors } = theme

const Process = () => {
  return (
    <Container>
      <Heading>My Process</Heading>
      {steps.map(step => {
        return (
            <Box key={step.id}>
              <Title>{step.title}</Title>
              <Description>{step.description}</Description>
            </Box>
        )
      })}
    </Container>
  )
}

export default Process

const Container = styled(Section)`
  flex-direction: column;
  display: flex;
  counter-reset: item 0;
`
const Box = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  &:nth-of-type(odd) {
    align-self: flex-end;
  }
  margin: 30px 0 10px 10px;
  padding: 40px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.1s;
  &:hover {
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.12);
  }
  @media (max-width: 600px) {
    margin-bottom: 52px;
    margin-left: 5px;
  }
`

const Title = styled.h2`
  color: black;
  counter-increment: item 1;
  &:before {
    content: "0" counter(item) ".";
    text-align: right;
    color: blue;
  }
`

const Description = styled.p``

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
const Icon = styled.img`
  position: absolute;
  right: -28px;
  padding: 15px;
  height: 56px;
  width: 56px;
  border-radius: 50%;
  color: black;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.2s;
  background-color: white;
  @media (max-width: 600px) {
    left: 50%;
    transform: translateX(-50%);
    bottom: -28px;
  }
`
