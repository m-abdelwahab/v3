import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Experience from "../components/experience"
// import Coding from "../components/coding"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Coding /> */}
    <Experience />
  </Layout>
)

export default IndexPage
