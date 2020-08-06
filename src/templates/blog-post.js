/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import ReactTooltip from "react-tooltip"
import { useActiveHash } from "../hooks/useActiveHash"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "@emotion/styled"
import { SEO, Layout, Bio, Code, Share, Callout } from "../components"
import Fade from "react-reveal/Fade"
import { theme, media, ProgressBar } from "../styles"
import getShareImage from "@jlengstorf/get-share-image"

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
  @media (min-width: 1200px) {
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
        /* color: red; */
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
  const { title, description, published } = frontmatter

  const getHashUrl = (tableOfContents, url) => {
    var UrlList = []
    const recursivelyGetHashUrl = (object, keyToBeFound) => {
      Object.keys(object).forEach(function(key) {
        if (typeof object[key] === "object") {
          recursivelyGetHashUrl(object[key], keyToBeFound)
        } else {
          if (key === keyToBeFound) UrlList.push(object[key])
        }
      })
    }
    recursivelyGetHashUrl(tableOfContents, url)
    return UrlList
  }
  const activeHeadingHash = useActiveHash(getHashUrl(tableOfContents, "url"))

  const socialImage = getShareImage({
    title: title,
    cloudName: "thisismahmoud",
    imagePublicID: "blog-card",
    textLeftOffset: "100",
    textAreaWidth: "700",
    titleFont: "futura",
    textColor: "F0F5FA",
  })
  return (
    <>
      <ProgressBar />
      <Layout>
        <SEO
          title={title}
          description={description || excerpt}
          image={socialImage}
        />
        <Fade>
          <Container>
            <ReactTooltip />
            {typeof tableOfContents.items === "undefined" ? null : (
              <Toc>
                <InnerScroll>
                  <H2>Table of contents</H2>
                  {tableOfContents.items.map((heading, i) => {
                    const isHeadingActive =
                      heading.url === `#${activeHeadingHash}`
                    return (
                      <div key={i}>
                        <li
                          key={heading.url}
                          sx={{
                            scrollMarginTop: "128px",
                            color: theme =>
                              isHeadingActive
                                ? `${theme.colors.secondary}`
                                : `inherit`,
                            fontWeight: () =>
                              isHeadingActive ? `700` : `inherit`,
                          }}
                        >
                          <a href={heading.url} key={heading.url}>
                            {heading.title}
                          </a>
                        </li>
                        {heading.items?.map(subheading => {
                          const isSubHeadingActive =
                            subheading.url === `#${activeHeadingHash}`
                          return (
                            <li
                              key={subheading.url}
                              sx={{
                                px: 3,
                                color: theme =>
                                  isSubHeadingActive
                                    ? `${theme.colors.secondary}`
                                    : `inherit`,
                                fontWeight: () =>
                                  isSubHeadingActive ? `700` : `inherit`,
                              }}
                            >
                              <a href={subheading.url} key={subheading.url}>
                                {subheading.title}
                              </a>
                            </li>
                          )
                        })}
                      </div>
                    )
                  })}
                </InnerScroll>
              </Toc>
            )}

            <Article>
              <Link to="/blog">
                <Heading>Blog</Heading>
              </Link>
              {!published ? (
                <Callout variant="warning">
                  This article is still a work in progress
                </Callout>
              ) : null}
              <header>
                <Title>{title}</Title>
              </header>
              <MDXRenderer
                components={{
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
        published
      }
    }
  }
`
