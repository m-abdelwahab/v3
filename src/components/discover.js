import React from "react"
import styled from "styled-components"

const Discover = () => {
  return (
    <Grid>
      <Talks>Talks</Talks>
      <Blog>Blog</Blog>
      <About>About</About>
    </Grid>
  )
}

export default Discover

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 3fr));
  grid-template-rows: repeat(2, fr);
  grid-template-areas:
    ". . blog"
    ". about blog"
    "talks about blog";
`

const Talks = styled.div`
  grid-area: "talks";
  background-color: blue;
`

const Blog = styled.div`
  grid-area: "blog";
  background-color: yellow;
`

const About = styled.div`
  grid-area: "about";
  background-color: red;
`
