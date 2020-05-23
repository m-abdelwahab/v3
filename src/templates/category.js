// @jsx jsx
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql } from "gatsby"
import { SEO, Layout } from "../components"
import styled from "@emotion/styled"
import { Section } from "../styles"
import Fade from "react-reveal/Fade"

const Category = ({ data, pageContext }) => {
  const posts = data.allMdx.nodes
  const category = pageContext.category
  return (
    <Layout>
      <SEO title={category} />
      <Container>
        <h1>
          <Link to="/">
            <span>Home</span>
          </Link>
          /
          <Link to="/blog">
            <span>Blog</span>
          </Link>
          /{category}
        </h1>
        <Grid>
          {posts.map((post, i) => (
            <Fade key={i} delay={i * 200}>
              <Card
                sx={{
                  boxShadow: "0 1px 3px 0 highlight, 0 1px 2px 0 highlight",
                }}
              >
                <Link to={post.fields.slug}>
                  <Title key={i}>{post.frontmatter.title}</Title>
                </Link>
                <Description>{post.frontmatter.description}</Description>
                <Info>
                  <p>
                    <span role="img" aria-label="clock">
                      🕑
                    </span>
                    {post.timeToRead} min read{" "}
                  </p>
                </Info>
              </Card>
            </Fade>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export default Category

export const query = graphql`
  query CategoryPage($category: String!) {
    allMdx(filter: { frontmatter: { categories: { eq: $category } } }) {
      nodes {
        timeToRead
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
`
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
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 3fr));
  grid-template-rows: repeat(2, fr);
  grid-gap: 2em;
  margin: 1em auto;
`
const Description = styled.p`
  margin: 2em 0;

  p:last-of-type {
    margin: 0;
  }
`
const Container = styled(Section)``
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  p {
  }
  span {
    margin: 0;
  }
`
const Title = styled.h3`
  margin: 0;
  font-size: 1.5em;
`
