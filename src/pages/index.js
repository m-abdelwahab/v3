import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import FeaturedProjects from "../components/FeaturedProjects"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <FeaturedProjects />
  </Layout>
)

export default IndexPage
