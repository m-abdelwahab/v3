/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "@emotion/styled"
import { SEO, Layout, Bio, Code, Share, Tooltip } from "../components"
import Fade from "react-reveal/Fade"
import { theme, media, ProgressBar } from "../styles"
const { fontSizes } = theme

const StyledH2 = styled.h2`
  a {
    color: inherit;
    display: block;
    position: absolute;
    left: 0px;
    transform: translateX(-125%) translateY(-2px);
    opacity: 0;
    scroll-margin-top: 128px;
    transition: opacity 250ms ease 0s;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 768px) {
    display: block;
  }
`
const Toc = styled.ul`
  width: 350px;
  padding-left: 2rem;
  display: none;
  top: 100px;
  position: sticky;
  max-height: calc(100vh - 148px);
  padding-bottom: 16px;
  overflow: auto;
  @media (min-width: 1025px) {
    display: block;
  }
  li {
    max-width: 250px;
    line-height: 1.6;
    margin-top: 10px;
    a {
      font-size: 15px;
      color: ${props => theme.text};
      opacity: 0.7;
      text-decoration: none;
      &:hover,
      &:focus {
        opacity: 1;
        transition: opacity 0ms ease 0s;
      }
      &:active {
        /* color: blue; */
      }
    }
  }
`
const H2 = styled.h2`
  color: ${props => theme.text};
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1em;
`

const InnerScroll = styled.div`
  overflow: hidden;
  overflow-y: scroll;
`
const Article = styled.article`
  margin: 5em auto;
  max-width: 600px;
`
const Title = styled.h1`
  font-size: 2em;
  font-weight: 900;
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
`

const BlogPost = ({ data, pageContext, excerpt }) => {
  const { previous, next } = pageContext
  const { body, frontmatter, tableOfContents, fields } = data.mdx
  const { title, description } = frontmatter

  return (
    <>
      <ProgressBar />
      <Layout>
        <SEO title={title} description={description || excerpt} />
        <Fade>
          <Container>
            {typeof tableOfContents.items === "undefined" ? null : (
              <Toc>
                <InnerScroll>
                  <H2>Table of contents</H2>
                  {tableOfContents.items.map((heading, i) => (
                    <div key={i}>
                      <li key={heading.url} sx={{ scrollMarginTop: "128px" }}>
                        <a href={heading.url} key={heading.url}>
                          {heading.title}
                        </a>
                      </li>
                      {heading.items?.map(subheading => (
                        <li key={subheading.url} sx={{ px: 3 }}>
                          <a href={subheading.url} key={subheading.url}>
                            {subheading.title}
                          </a>
                        </li>
                      ))}
                    </div>
                  ))}
                </InnerScroll>
              </Toc>
            )}

            <Article>
              <Link to="/blog">
                <Heading>Blog</Heading>
              </Link>
              <header>
                <Title>{title}</Title>
              </header>
              <MDXRenderer
                components={{
                  Tooltip,
                  pre: Code,
                  h2: StyledH2,
                }}
              >
                {body}
              </MDXRenderer>
              <Share slug={fields.slug} title={title} />
              <Bio />
              <nav>
                <ul
                  style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                  }}
                >
                  {previous && (
                    <li>
                      <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </Article>
          </Container>
        </Fade>
      </Layout>
    </>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      tableOfContents
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
