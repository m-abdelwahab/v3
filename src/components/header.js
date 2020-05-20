/** @jsx jsx */
import { jsx } from "theme-ui"
import { useColorMode } from "theme-ui"
import { ThemeColorToggle } from "../components"
import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import usePopup from "../hooks/usePopup"
import IconLogo from "./icons/logo"

const links = [
  { url: "/blog", name: "Blog" },
  { url: "/talks", name: "Talks" },
  { url: "/#about", name: "About" },
  { url: "/#featured-projects", name: "Projects" },
]

export default React.memo(() => {
  const {
    isOpen,
    setOpen,
    getContainerProps,
    getTogglerProps,
    getMenuProps,
    getItemProps,
  } = usePopup()

  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = e => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Header>
      <Logo>
        <LogoLink to="/" aria-label="home">
          <IconLogo />
        </LogoLink>
      </Logo>
      <ThemeColorToggle isDark={isDark} toggle={toggleColorMode} />
      <nav>
        <ul>
          <li className="menu" {...getContainerProps()}>
            <MenuButton isMenuOpen={isOpen} {...getTogglerProps()}>
              <h1
                className="hamburger"
                sx={{
                  "&:before": {
                    backgroundColor: "text",
                  },
                  "&:after": { backgroundColor: "text" },
                }}
              >
                <span sx={{ backgroundColor: "text" }}>Menu</span>
              </h1>
            </MenuButton>
            <MenuBody
              {...getMenuProps()}
              sx={{
                backgroundColor: "card",
              }}
            >
              <ul>
                {links
                  ? links.map(link => (
                      <li key={link.url}>
                        <MenuLink
                          to={link.url}
                          {...getItemProps({
                            onClick: e => setOpen(prevOpen => !prevOpen),
                          })}
                          sx={{
                            "&::after": { backgroundColor: "card" },
                            "&::before": { backgroundColor: "highlight" },
                          }}
                        >
                          {link.name}
                        </MenuLink>
                      </li>
                    ))
                  : null}
              </ul>
            </MenuBody>
          </li>
        </ul>
      </nav>
    </Header>
  )
})
const Header = styled.header`
  position: fixed;
  z-index: 999;
  top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  nav {
  }
  .menu {
    position: relative;
    right: 3%;
    top: 10%;
  }
`
const Logo = styled.div`
  padding: 0 2%;
`
const LogoLink = styled(Link)`
  display: block;
  width: 42px;
  height: 42px;
  margin: 10px;
  &:hover,
  &:focus {
    svg {
    }
  }
  svg {
    fill: none;
    user-select: none;
  }
`

const MenuButton = styled.button`
  border: none;
  background: none;
  padding: 1.875rem 2.1875rem;
  outline: none;
  cursor: pointer;
  transition: opacity 0.25s cubic-bezier(0.42, 0, 0.59, 1.1);
  z-index: 999;

  .hamburger {
    font-size: 0;
    position: absolute;
    right: var(--baseborderpadding);
    top: 1.75rem;
    width: 1.4375rem;

    span {
      position: absolute;
      right: 0;
      height: 3px;
      width: 100%;
      font-size: 0;
      opacity: ${props => (props.isMenuOpen ? 0 : 1)};
      transform: scaleX(1);
      transform-origin: 100%;
      transition-property: transform, opacity;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      height: 3px;
      width: 100%;
      transition-property: transform, opacity;
      transition: transform 0.25s ease;
      transform-origin: ${props => (props.isMenuOpen ? "50%" : "100%")};
    }

    &::before {
      transform: ${props =>
        props.isMenuOpen
          ? "scaleX(1) translateY(0) rotate(45deg)"
          : "scaleX(0.6) translateY(-7px)"};
    }

    &::after {
      transform: ${props =>
        props.isMenuOpen
          ? "scaleX(1) translateY(0) rotate(-45deg)"
          : "scaleX(0.5) translateY(7px)"};
    }
  }
  ${props =>
    !props.isMenuOpen &&
    `
      &:hover,
      &:focus {
        .hamburger {
          > .text {
            transform: scaleX(0.6);
          }
          &::before {
            transform: scaleX(1) translateY(-7px);
          }
          &::after {
            transform: scaleX(1) translateY(7px);
          }
        }
      }
      &:focus {
        opacity: 0.5;
      }
    `};
`

const MenuBody = styled.ul`
  border: 1px solid #f6fafd;
  position: absolute;
  right: 30px;
  width: 300px;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
  border-radius: var(--baseborderradius);
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transform: ${props => (props.isOpen ? "scale(1)" : "scale(.5)")};
  transition: transform 0.25s cubic-bezier(0.42, 0, 0.59, 1.1);
  transition-property: transform, opacity;
  transform-origin: 100% 0;
  pointer-events: ${props => (props.isOpen ? "initial" : "none")};

  li:first-of-type a {
    border-top: none;
  }
`

const MenuLink = styled(Link)`
  position: relative;
  display: block;
  padding: var(--baseborderpadding);
  border-top: 2px solid #f6fafd;
  /* color: #000; */
  outline: none;
  font-weight: var(--fontbold);

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  &::before {
    background: #f6fafd;
  }

  &::after {
    background: #fff;
    transform: scaleX(1);
    transform-origin: 100%;
    transition: transform 0.22s cubic-bezier(0.42, 0, 0.59, 1.1);
  }

  &:hover,
  &:focus {
    &::after {
      transform: scaleX(0);
    }
  }
`
