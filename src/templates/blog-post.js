import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Fade from "react-reveal/Fade"
import Bio from "../components/bio"
import { theme, mixins, media, Section } from "../styles"
import ProgressBar from "../styles/progressBar"
const { fontSizes, colors } = theme

const CallToAction = styled.div`
  margin: 1em 0;
  background-color: grey;
  color: white;
  padding: 1em;
  a {
    padding: 0.25em;
    text-decoration: underline;
  }
`
const Article = styled.article`
  margin: 5em auto;
  max-width: 600px;
`
const Title = styled.h1`
  font-size: 2em;
  font-weight: 900;
`

const Date = styled.h2`
  font-weight: 350;
`
const TimeToRead = styled.p`
  font-size: 1em;
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
`

const BlogPost = props => {
  const post = props.data.markdownRemark
  const { previous, next } = props.pageContext
  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        // Calculates the scroll distance
        calculateScrollDistance()
      })
    })
  }
  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset
    const windowHeight = window.innerHeight
    const docHeight = getDocHeight()
    const totalDocScrollLength = docHeight - windowHeight
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100)
    setProgress(scrollPostion)
  }

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    )
  }
  const [progress, setProgress] = useState(0)

  useEffect(() => listenToScrollEvent(), [])

  const share = () => {
    const url = window.location.href
    console.log(url)
    if (navigator.share) {
      navigator.share({
        title: 'Share this article',
        url: url
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    } else {
      // TODO: add fallback
      console.log("not supported")
    }
  }
  return (
    <>
      <ProgressBar scroll={progress + "%"} />
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Fade>
          <Article>
            <Link to="/blog">
              <Heading>Blog</Heading>
            </Link>
            <CallToAction>
              More blog posts can be found on{" "}
              <a href="" target="_blank">
                Medium.com{" "}
              </a>{" "}
              and{" "}
              <a href="" target="_blank">
                Dev.to
              </a>
            </CallToAction>
            <header>
              <Title>{post.frontmatter.title}</Title>
              <Date>🗓{post.frontmatter.date}</Date>
              <TimeToRead>🕑 {post.timeToRead} min read</TimeToRead>
            </header>
            <p dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr />
            <button onClick={()=>share()}>Share this article</button>
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
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </Article>
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
