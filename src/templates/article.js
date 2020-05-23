/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "@emotion/styled"
import { SEO, Layout, Bio, Code, Share } from "../components"
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
// const InnerScroll = styled.div`
//   overflow: hidden;
//   overflow-y: scroll;
// `
const StyledArticle = styled.article`
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

const Article = ({ data, pageContext, excerpt }) => {
  const { previous, next } = pageContext
  const { body, frontmatter, fields } = data.mdx
  const { title, description } = frontmatter

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
            <StyledArticle>
              <Link to="/blog">
                <Heading>Blog</Heading>
              </Link>
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
            </StyledArticle>
          </Container>
        </Fade>
      </Layout>
    </>
  )
}

export default Article

export const pageQuery = graphql`
  query TutorialBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
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
