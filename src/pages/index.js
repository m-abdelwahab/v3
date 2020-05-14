import React from "react"
import {
  Layout,
  SEO,
  Hero,
  FeaturedProjects,
  Experience,
  Discover,
  About,
} from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <FeaturedProjects />
    <Experience />
    <Discover />
  </Layout>
)

export default IndexPage
