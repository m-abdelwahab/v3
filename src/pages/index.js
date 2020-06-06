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
import Screenshot from "../images/featuredProjects/portfolio.png"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" image={Screenshot} />
    <Hero />
    <About />
    <FeaturedProjects />
    <Experience />
    <Discover />
  </Layout>
)

export default IndexPage
