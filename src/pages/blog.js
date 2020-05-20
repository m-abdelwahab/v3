// @jsx jsx
import { jsx } from "theme-ui"
import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import { SEO, Layout } from "../components"
import { theme, Section, media } from "../styles"
import Fade from "react-reveal/Fade"
const { fontSizes, colors } = theme
const array = require("lodash/array")

const Blog = ({ data }) => {
  const allPosts = data.allMdx.edges
  const allCategories = data.allMdx.edges.map(category =>
    category.node.frontmatter.categories.map(item => item)
  )
  const categories = [...new Set(array.flattenDeep(allCategories))]

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    const query = event.target.value
    // this is how we get all of our posts
    const posts = data.allMdx.edges || []
    // return all filtered posts
    const filteredData = posts.filter(post => {
      // destructure data from post frontmatter
      const { description, title, categories } = post.node.frontmatter
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or categories
        // contains the query string
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (categories &&
          categories
            .join("") // convert categories from an array to string
            .toLowerCase()
            .includes(query.toLowerCase()))
      )
    })
    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <div>
      <Layout>
        <SEO title="Blog" />
        <Container>
          <Heading>
            <Link to="/">
              <span>Home</span>
            </Link>
            /Blog
          </Heading>
          <p>
            Welcome to my blog! In here you'll find useful articles about
            various topics. I'm most active on twitter and you can always reach
            me at my email
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
            }}
          >
            <SearchBar
              type="text"
              aria-label="Search"
              placeholder="Type to filter posts..."
              onChange={handleInputChange}
            />
            <PostsCount>{posts.length}</PostsCount>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {categories.map((category, i) => (
              <Link
                key={i}
                sx={{
                  backgroundColor: "highlight",
                  padding: "0.5rem 1rem",
                  borderRadius: "10px",
                  margin: "1rem",
                }}
                to={`/category/${category}`}
              >
                {category}
              </Link>
            ))}
          </div>
          <Grid>
            {posts.map(({ node }, i) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <Fade key={i} delay={i * 200}>
                  <Card
                    key={node.fields.slug}
                    sx={{
                      boxShadow: "0 1px 3px 0 highlight, 0 1px 2px 0 highlight",
                      backgroundColor: "card",
                    }}
                  >
                    <Category>
                      {node.frontmatter.categories.map((category, i) => {
                        return (
                          <span key={i}>
                            <Link to={`/category/${category}`}>{category}</Link>
                          </span>
                        )
                      })}
                    </Category>
                    <Link to={node.fields.slug}>
                      <Title>{title}</Title>
                    </Link>
                    <Description
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                    <Info>
                      <p>
                        <span role="img" aria-label="clock">
                          🕑
                        </span>
                        {node.timeToRead} min read{" "}
                      </p>
                    </Info>
                  </Card>
                </Fade>
              )
            })}
          </Grid>
        </Container>
      </Layout>
    </div>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      edges {
        node {
          timeToRead
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            categories
          }
        }
      }
    }
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 3fr));
  grid-template-rows: repeat(2, fr);
  grid-gap: 2em;
  margin: 1em auto;
`
const Container = styled(Section)``
const Card = styled.div`
  padding: 1.5em;
  border-radius: 10px;
  margin: 1em auto;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  transition: all 150ms ease-in-out;
  &:hover {
    transition: all 150ms ease-in-out;
  }
`
const Category = styled.h4`
  font-weight: 600;
  /* color: ${colors.grey}; */
  margin:1rem 0;
  span{
    margin-right:0.5rem;
  }
`
const Title = styled.h3`
  margin: 0;
  font-size: 1.5em;
`
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  p {
  }
  span {
    margin: 0;
  }
`
const Description = styled.p`
  margin: 2em 0;

  p:last-of-type {
    margin: 0;
  }
`

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  span {
    font-size: ${fontSizes.h3};
    ${media.tablet`font-size: 24px;`};
  }
`
const SearchBar = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid black;
  margin: 1rem;
  border-radius: 5px;
  max-width: 400px;
  width: 100%;
  height: 3rem;
  font-size: 1.2rem;
`
const PostsCount = styled.div`
  border-radius: 100%;
  min-width: 36px;
  height: 36px;
  padding: 8px;
  text-align: center;
  line-height: 1rem;
  font-weight: 700;
  font-size: 1.5rem;
  background: #fff;
  border: 2px solid #666;
  color: #666;
`
