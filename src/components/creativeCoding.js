import React, { useRef, useEffect } from "react"
import { TweenMax, power3 } from "gsap"
import styled from "styled-components"
import { theme, mixins, media, Section } from "../styles"
const { fontSizes, colors } = theme

const CreativeCoding = () => {
  return (
    <Container>
      <CircleContainer>
        <Circle />
        <Circle className="red" />
        <Circle className="yellow"/>
      </CircleContainer>
    </Container>
  )
}

export default CreativeCoding

const Container = styled(Section)``
const CircleContainer = styled.div``

const Circle = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 100%;
  background-color:blue;
  margin:15px;

  .red{
    background-color:red;
  }
  .yellow{
    background-color:yellow;
  }
`
