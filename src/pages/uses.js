import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styled from "styled-components"
import { Link } from "gatsby"
import { theme, Section, media } from "../styles"
const { fontSizes, colors } = theme

const Uses = () => {
  return (
    <Layout>
      <SEO title="uses" />
      <Container>
        <Heading>
          <Link to="/">
            <span>Home</span>
          </Link>
          / Uses
        </Heading>
        <Title>Hardware:</Title>
        <List>
          <ListItem>MacBook Pro 13-inch 2017 16gb 1TB</ListItem>
        </List>
        <Title>Software:</Title>
        <Category>Coding</Category>
        <List>
          <ListItem>Text Editor: VS Code</ListItem>
          <ListItem>Theme: Night Owl</ListItem>
          <ListItem>font: JetBrains Mono</ListItem>
          <List>
            <ListItem>ESLint</ListItem>
            <ListItem>Prettier</ListItem>
            <ListItem>Live Server</ListItem>
            <ListItem>Markdown All in One</ListItem>
            <ListItem>Peacock</ListItem>
            <ListItem>WakaTime</ListItem>
            <ListItem>vscode-styled-components</ListItem>
            <ListItem>MATERIAL ICON theme</ListItem>
            <ListItem>Auto Rename Tag</ListItem>
            <ListItem>Bracket Pair colorizer</ListItem>
            <ListItem>code spell checker</ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
          </List>
        </List>
        Chrome Extensions: - Tab Suspender - What font? -
        react DevTools - Momentum - Full Page Screenshot Capture - Grammarly -
        Color Productivity: - Notion
      </Container>
    </Layout>
  )
}

export default Uses

const Container = styled(Section)``

const List = styled.ul``
const ListItem = styled.li`
margin:1em;
`

const Title = styled.h2``

const Category = styled.h3``
const Heading = styled.h1`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  color: ${colors.dark};
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  span {
    font-size: ${fontSizes.h3};
  }
`
