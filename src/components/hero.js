import React, { useState, useEffect } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { theme, mixins, media, Section } from "../styles"
import TextLoop from "react-text-loop"
import Coding from "../images/coding.svg"

const { colors } = theme

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000)
    return () => clearTimeout(timeout)
  }, [])

  const one = () => (
    <Hi style={{ transitionDelay: "100ms" }}>
      <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
        <span>Hi! I'm</span>
        <span>Salut! Je suis </span>
        <span> مرحباَ أنا</span>
        <span>¡Hola! Soy</span>
        <span>Hallo! Ich bin</span>
      </TextLoop>
    </Hi>
  )

  const two = () => (
    <Name style={{ transitionDelay: "300ms" }}>
      Mahmoud <br /> Abdelwahab.
    </Name>
  )
  const three = () => <Subtitle style={{ transitionDelay: "400ms" }}></Subtitle>
  const four = () => (
    <Blurb style={{ transitionDelay: "500ms" }}>
      Creative Front-end Engineer obsessed with designing and building
      exceptional, high-quality, performant websites and applications .
    </Blurb>
  )
  const five = () => (
    <div style={{ transitionDelay: "600ms" }}>
      <EmailLink href={`/resume.pdf`}>Resume</EmailLink>
    </div>
  )

  const items = [one, two, three, four, five]

  return (
    <Container>
      <HeroContainer>
        <TransitionGroup>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={3000}>
                {item}
              </CSSTransition>
            ))}
        </TransitionGroup>
      </HeroContainer>
      <TransitionGroup>
        {isMounted && (
          <CSSTransition
            key={1}
            classNames="fadeup"
            timeout={3000}
            style={{ transitionDelay: "700ms" }}
          >
            <StyledPic>
              <StyledAvatar alt="hero image" src={Coding} />
            </StyledPic>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Container>
  )
}

export default Hero

const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  min-height: 100vh;
  ${media.desktop`padding-top: 150px;`};

  div {
    width: 90%;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  ${media.desktop`flex-direction:column;`};
`

const Hi = styled.h1`
  color: ${colors.dark};
  margin: 0 0 20px 3px;
  font-weight: normal;
  span {
    font-size: 1.4em;
  }
`
const Name = styled.h2`
  color: ${colors.dark};
  font-size: 70px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`
const Subtitle = styled.h3`
  font-size: 150px;
  line-height: 1.1;
  color: ${colors.dark};
  ${media.desktop`font-size: 100px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`
const Blurb = styled.div`
  margin-top: 25px;
  width: 80%;
  max-width: 500px;
  font-size: 1.2em;
`
const EmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`

const StyledPic = styled.div`
  svg {
    height: 80%;
  }

  ${media.tablet` 
  svg{

     width: 100%;
    margin:0 auto;

  }
  `};
`
const StyledAvatar = styled.img`
  border-radius: 10px;
  width: 550px;
`