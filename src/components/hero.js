import React, { useState, useEffect } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { email } from "../config"
import styled from "styled-components"
import { theme, mixins, media, Section } from "../styles"
import TextLoop from "react-text-loop"
import Me from "../images/me.jpeg"

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
      Front-end Engineer/ UX Designer obsessed with designing and building
      exceptional, high-quality, performant websites and applications .
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
            <StyledPic>
              <StyledAvatarLink href="">
                <StyledAvatar src={Me} alt="Avatar" />
              </StyledAvatarLink>
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
    width: 100%;
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
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
  ${media.tablet` padding: 20px 0 80px  0;`};

  a {
    &:focus {
      outline: 0;
    }
  }
`
const StyledAvatar = styled.img`
  border-radius: 10px;
  width: 450px;
`
const StyledAvatarLink = styled.a`
  ${mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.green};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
  }
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${colors.green};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`
