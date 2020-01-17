import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Experience from "../components/experience"
import About from "../components/about"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <About />
      <Experience />
    </Layout>
  )
}

export default AboutPage
