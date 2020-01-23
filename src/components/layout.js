import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "../components/footer"

import Social from "../components/social"
import Main from "../styles/Main"
import GlobalStyle from "../styles/GlobalStyle"
import { ThemeProvider } from "styled-components"
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
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
    // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }

  return (
    <div>
      {/* <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> */}
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        {/* <button onClick={toggleTheme}>Toggle theme</button> */}
        <Social />
        <Main>{children}</Main>
        <Footer />
      {/* </ThemeProvider> */}
    </div>
  )
}

export default Layout
