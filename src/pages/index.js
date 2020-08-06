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
    <SEO
      title="Home"
      image={Screenshot}
      description="Mahmoud Abdelwahab is a Front-end software engineer based in Cairo, Egypt. Building at the intersection of Design and Development. who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications."
    />
    <Hero />
    <About />
    <FeaturedProjects />
    <Experience />
    <Discover />
  </Layout>
)

export default IndexPage
