import React from "react"
import { Link, graphql } from "gatsby"
import { SEO, Layout } from "../components"

const Category = ({ data, pageContext }) => {
  const posts = data.allMdx.nodes
  const category = pageContext.category
  return (
    <Layout>
      <SEO title={category} />
      <h1>{category}</h1>
      {posts.map((post, i) => (
        <h3 key={i}>{post.frontmatter.title}</h3>
      ))}
    </Layout>
  )
}

export default Category

export const query = graphql`
  query CategoryPage($category: String!) {
    allMdx(filter: { frontmatter: { categories: { eq: $category } } }) {
      nodes {
        frontmatter {
          title
          categories
        }
      }
    }
  }
`
