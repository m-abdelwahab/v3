const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const array = require("lodash/array")
// create blog pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const categoryTemplate = path.resolve(`./src/templates/category.js`)

  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                categories
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // const allCategories = result.data.allMdx.edges.map(category =>{
  //   return category.node.frontmatter.categories.map(item=>item)
  // }
  const allCategories = result.data.allMdx.edges.map(category =>
    category.node.frontmatter.categories.map(item => item)
  )
  const categories = [...new Set(array.flattenDeep(allCategories))]

  // create categories pages

  categories.forEach(category => {
    createPage({
      path: `category/${category}`,
      component: categoryTemplate,
      context: {
        category: category,
      },
    })
  })

  // Create blog posts pages.
  const posts = result.data.allMdx.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
