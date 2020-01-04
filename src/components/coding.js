import React from "react"
import styled from "styled-components"
import projects from "../data/coding"

const Coding = () => {
  return (
    <Grid>
      <Card></Card>
    </Grid>
  )
}

export default Coding

const ProjectGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-gap: 3vmin;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`

const Card = styled.div`
  position: relative;
  height: auto;
  padding: 10% 8%;
  display: grid;
  grid-template-columns: 250px;
  grid-template-rows: 10em auto 5em 4em 1.5em;
  grid-template-areas: "pic" "title" "desc" "stack" "links";
  margin-bottom: 2em;
  box-shadow: 0px 7px 40px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
`

const Pic = styled.img`
  grid-area: pic;
  justify-self: center;
  align-self: center;
  max-width: 95%;
  max-height: 95%;
`

const Title = styled.h1`
  grid-area: title;
  justify-self: start;
  align-self: center;
  padding-top: 0.5em;

  font-size: 2em;
`

const Description = styled.p`
  grid-area: desc;
  justify-self: start;
  align-self: center;
`

const StackList = styled.div`
  grid-area: stack;
  justify-self: start;
  align-self: center;
`

const StackItem = styled.div`
  text-decoration: none;
  position: relative;
  z-index: 10;
  cursor: pointer;
  display: inline;
`

const LinkList = styled.div`
  grid-area: links;
  justify-self: center;
  align-self: end;
  width: 100%;
  position: relative;
  top: 1em;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
  grid-gap: 5px;
  justify-items: center;
  align-items: center;
`

const LinkItem = styled.div`
  display: inline;
`
