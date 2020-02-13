import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "../components/footer"

import Social from "../components/social"
import Main from "../styles/Main"
import GlobalStyle from "../styles/GlobalStyle"
import { FormattedIcon } from "../components/icons"
import styled, { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../styles/theme"

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
  const toggleTheme = () => {
    // theme === "light" ? setTheme("dark") : setTheme("light")
    if (theme === "light") {
      setTheme("dark")
      // otherwise, it should be light
    } else {
      setTheme("light")
    }
  }

  const [theme, setTheme] = useState("light")

  return (
    <div>
      {/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}> */}
        <GlobalStyle />
        {/* <Button onClick={toggleTheme}>
          {theme === "light" ? (
            <FormattedIcon name="Moon" />
          ) : (
            <FormattedIcon name="Sun" />
          )}
        </Button> */}
        <Header siteTitle={data.site.siteMetadata.title} />
        <Social />
        <Main>{children}</Main>
        <Footer />
      {/* </ThemeProvider> */}
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
