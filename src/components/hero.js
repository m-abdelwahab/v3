import React, { useState, useEffect } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { email } from "../config"
import styled from "styled-components"
import { theme, mixins, media, Section } from "../styles"
import TextLoop from "react-text-loop"
import Coding from "../images/coding.png"

const { colors } = theme

const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`

const HeroImg = styled.img`
  width: 80%;
  max-width: 800px;
  background-size: cover;
  ${media.bigDesktop`display:none;`};
`
const Container = styled.div`
  display: flex;
  align-items: center;
`

const Hi = styled.h1`
  color: ${colors.dark};
  margin: 0 0 20px 3px;
  font-weight: normal;
  ${media.desktop`font-size: 60px;`};
  ${media.tablet`font-size: 40px;`};
  ${media.phablet`font-size: 30px;`};
  ${media.phone`font-size: 20px;`};
`
const Name = styled.h2`
  color: ${colors.dark};
  font-size: 80px;
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
  width: 50%;
  max-width: 500px;

  span {
    text-decoration: none;
    transition: all 100ms ease-in-out;

    &:nth-of-type(1) {
      color: ${colors.darkBlue};
    }
    &:nth-of-type(2) {
      color: ${colors.pink};
    }
    &:nth-of-type(3) {
      color: ${colors.darkRed};
    }
    &:nth-of-type(4) {
      color: ${colors.green};
    }
    &:nth-of-type(5) {
      color: ${colors.purple};
    }
    &:nth-of-type(6) {
      color: ${colors.orange};
    }
  }
`
const EmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`

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
      Mahmoud <br /> Abdelwahab
    </Name>
  )
  const three = () => <Subtitle style={{ transitionDelay: "400ms" }}></Subtitle>
  const four = () => (
    <Blurb style={{ transitionDelay: "500ms" }}>
      {" "}
      <span>Front-end Engineer</span>/<span>UX Designer</span> obsessed with{" "}
      <span>designing</span> and <span>building</span> exceptional,
      high-quality, performant <span>websites</span> and{" "}
      <span>applications</span>.
    </Blurb>
  )
  const five = () => (
    <div style={{ transitionDelay: "600ms" }}>
      <EmailLink href={`mailto:${email}`}>Get In Touch</EmailLink>
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
            <HeroImg src={Coding} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </Container>
  )
}

export default Hero
