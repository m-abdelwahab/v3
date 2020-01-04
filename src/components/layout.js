import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "../components/footer"

import Social from "../components/social"
import Main from "../styles/Main"
import GlobalStyle from '../styles/GlobalStyle'

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
