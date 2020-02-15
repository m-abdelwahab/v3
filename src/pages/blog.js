import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { theme, Section, media } from "../styles"
import Fade from "react-reveal/Fade"
const { fontSizes, colors } = theme

const Blog = ({ data }) => {
  const posts = data.allMdx.edges
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
          <Grid>
            {posts.map(({ node }, i) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <Fade delay={i * 200}>
                  <Link to={node.fields.slug}>
                    <Card key={node.fields.slug}>
                      <Category>{node.frontmatter.tag}</Category>
                      <Title>{title}</Title>
                      <Description>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              node.frontmatter.description || node.excerpt,
                          }}
                        />
                      </Description>
                      <Info>
                        <p>
                          {" "}
                          <span role="img" aria-label="clock">
                            🕑
                          </span>
                          {node.timeToRead} min read{" "}
                        </p>
                        <span role="img" aria-label="date">
                          🗓{node.frontmatter.date}
                        </span>
                      </Info>
                    </Card>
                  </Link>
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          timeToRead
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tag
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
  border: 0.5px dashed black;
  margin: 1em auto;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  transition: all 150ms ease-in-out;
  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transition: all 150ms ease-in-out;
    cursor: pointer;
  }
`
const Category = styled.h6`
  font-weight: 600;
  color: ${colors.grey};
  margin-bottom: 0.5em;
`
const Title = styled.h3`
  margin: 0;
  color: black;
  font-size: 1.5em;
`
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  p {
  }
  span {
    margin: 0;
    color: black;
  }
`
const Description = styled.p`
  margin: 2em 0;

  p:last-of-type {
    margin: 0;
  }
  color: black;
`

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  color: ${colors.dark};
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  span {
    font-size: ${fontSizes.h3};
    ${media.tablet`font-size: 24px;`};

  }
  
`
