import React from "react"
import MyResume from "../components/resume"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Resume = () => {
  return (
    <Layout>
      <SEO title="resume" />
      <MyResume />
    </Layout>
  )
}

export default Resume
