import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "../components/footer"

import Social from "../components/social"
import Main from "../styles/Main"
import GlobalStyle from "../styles/GlobalStyle"
import styled from "styled-components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Social />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout

const Button = styled.button`
  position: fixed;
  right: 50px;
  top: 5%;
  z-index: 1000;
  margin-right: 1em;
  background-color: transparent;
`
