/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle, Main } from "../styles"
import { Footer, Social, Header, ThemeColorToggle } from "../components"

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
    <div sx={{ backgroundColor: "background" }}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Social />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
