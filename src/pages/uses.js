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
          /Uses 👨‍💻
        </Heading>
        <Title>Hardware:</Title>
        <List>
          <ListItem>MacBook Pro 13-inch 2017 16gb 1TB</ListItem>
        </List>
        <Title>Software:</Title>
        <Category>Editor & Extensions</Category>
        <List>
          <ListItem>VS Code</ListItem>
          <ListItem>Theme: Night Owl</ListItem>
          <ListItem>Font: JetBrains Mono</ListItem>
          <ListItem>ESLint</ListItem>
          <ListItem>Prettier</ListItem>
          <ListItem>Live Server</ListItem>
          <ListItem>Markdown All in One</ListItem>
          <ListItem>Peacock</ListItem>
          <ListItem>WakaTime</ListItem>
          <ListItem>vscode-styled-components</ListItem>
          <ListItem>Material Icon Theme</ListItem>
          <ListItem>Auto Rename Tag</ListItem>
          <ListItem>Bracket Pair Colorizer</ListItem>
          <ListItem>Code Spell Checker</ListItem>
        </List>
        <Category>Browser Extensions</Category>
        <List>
          <ListItem>Tab Suspender</ListItem>
          <ListItem>JSON Formatter</ListItem>
          <ListItem>What Font?</ListItem>
          <ListItem>React DevTools</ListItem>
          <ListItem>Full Page Screenshot Capture</ListItem>
          <ListItem>Momentum</ListItem>
        </List>
        <Title>Productivity</Title>
        <List>
          <ListItem>Notion</ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Uses

const Container = styled(Section)``


const List = styled.ul`
  margin: 1em;
`
const ListItem = styled.li`
  margin: 1em;
  list-style: square;
`

const Title = styled.h2`
  font-size: 1.3em;
`

const Category = styled.h3`
  font-size: 1em;
`
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
