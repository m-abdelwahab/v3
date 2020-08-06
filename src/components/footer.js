import React from "react"
import {
  IconGithub,
  IconLinkedin,
  IconTwitter,
  IconMail,
  IconMedium,
  IconCodepen,
} from "../components/icons"
import { socialMedia } from "../config"
import styled from "@emotion/styled"
import { theme, media } from "../styles"
const { colors, fontSizes } = theme

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  text-align: center;
  height: auto;
  min-height: 70px;
`
const SocialContainer = styled.div`
  /* color: ${colors.white}; */
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`
const SocialItemList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SocialLink = styled.a`
  padding: 10px;
  svg {
    fill: none;
    width: 20px;
    height: 20px;
  }
`
const Copy = styled.div`
  margin: 10px 0;
  font-size: ${fontSizes.medium};
  line-height: 1;
`
const GithubLink = styled.a``

const Footer = () => (
  <FooterContainer>
    <SocialContainer>
      <SocialItemList>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <SocialLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}
              >
                {name === "Github" ? (
                  <IconGithub />
                ) : name === "Linkedin" ? (
                  <IconLinkedin />
                ) : name === "Twitter" ? (
                  <IconTwitter />
                ) : name === "Mail" ? (
                  <IconMail />
                ) : name === "Codepen" ? (
                  <IconCodepen />
                ) : name === "Medium" ? (
                  <IconMedium />
                ) : (
                  <IconGithub />
                )}
              </SocialLink>
            </li>
          ))}
      </SocialItemList>
    </SocialContainer>
    <Copy>
      <GithubLink
        href="https://github.com/m-abdelwahab"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <div>
          Designed &amp; Built by Mahmoud Abdelwahab
          {` `}
        </div>
      </GithubLink>
    </Copy>
  </FooterContainer>
)

export default Footer
