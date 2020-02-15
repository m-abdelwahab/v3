import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import FormattedIcon from "./icons/formattedIcon"

const MobileNav = () => {
  const links = [
    { id: "1", url: "/#featured-projects", name: "Projects", icon: "Sun" },
    { id: "2", url: "/about", name: "About", icon: "Moon" },
    { id: "3", url: "/blog", name: "Blog", icon: "Sun" },
    { id: "4", url: "/talks", name: "Talks", icon: "Moon" },
  ]
  return (
    <Container>
      <Nav>
        {links.map(link => {
          return (
            <NavItem>
              <Link key={link.id} to={link.url}>
                <FormattedIcon name={link.icon} />
                <p>{link.name}</p>
              </Link>
            </NavItem>
          )
        })}
      </Nav>
    </Container>
  )
}

export default MobileNav

const Container = styled.div``
const Nav = styled.ul`
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 1em 1em 0 1em;
  border-top: 1px solid transparent;
  background-color: white;
  justify-content: space-around;
  z-index: 999;
  @media (min-width: 480px) {
    display: none;
  }
  align-items: center;
  
`
const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items:center;
  text-align:center;
  svg {
    width: 24px;
    fill: none;
    margin:0.5em;
  }
  
`
