import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import FeaturedProjects from "../components/FeaturedProjects"
import DesignProjects from "../components/designProjects"
import Experience from "../components/experience"
import Discover from "../components/discover"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <FeaturedProjects />
    <DesignProjects />
    <Experience />
    <Discover />
  </Layout>
)

export default IndexPage
