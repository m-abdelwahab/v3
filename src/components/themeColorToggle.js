/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"
import theme from "../gatsby-plugin-theme-ui"

const ThemeColorToggle = ({ isDark, toggle }) => {
  return (
    <button
      onClick={toggle}
      type="button"
      aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
      title={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
      sx={{
        opacity: 0.65,
        position: "fixed",
        right: "5rem",
        top: "2.5rem",
        borderRadius: `5px`,
        width: `40px`,
        height: `25px`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        transition: `opacity 0.3s ease`,
        border: `none`,
        outline: `none`,
        background: `none`,
        cursor: `pointer`,
        padding: 0,
        appearance: `none`,
        "&:hover, &:focus": { opacity: 1 },
      }}
    >
      <div
        sx={{
          transform: isDark ? `scale(0.5)` : `scale(1)`,
          position: "fixed",
          right: "5rem",
          top: "2.5rem",
          width: `24px`,
          height: `24px`,
          borderRadius: `50%`,
          border: () =>
            isDark ? `4px solid ${theme.colors.background}` : `none`,
          backgroundColor: isDark
            ? `${theme.colors.background}`
            : `transparent`,
          transition: `all 0.45s ease`,
          overflow: isDark ? `visible` : `hidden`,
          // moon color
          boxShadow: () =>
            isDark ? `none` : `inset 8px -8px 0px 0px ${theme.colors.toggle}`,
          "&:before": {
            content: `""`,
            position: `absolute`,
            right: `-9px`,
            top: `-9px`,
            height: `24px`,
            width: `24px`,
            border: () => (isDark ? `2px solid ${theme.colors.text}` : `none`),
            borderRadius: `50%`,
            transform: isDark ? `translate(14px, -14px)` : `translate(0, 0)`,
            opacity: isDark ? 0 : 1,
            transition: `transform 0.45s ease`,
          },
          "&:after": {
            content: `""`,
            width: `8px`,
            height: `8px`,
            borderRadius: `50%`,
            margin: `-4px 0 0 -4px`,
            position: `absolute`,
            top: `50%`,
            left: `50%`,
            // sun balls
            boxShadow: () =>
              `0 -23px 0 ${theme.colors.background}, 0 23px 0 ${theme.colors.background}, 23px 0 0 ${theme.colors.background}, -23px 0 0 ${theme.colors.background}, 15px 15px 0 ${theme.colors.background}, -15px 15px 0 ${theme.colors.background}, 15px -15px 0 ${theme.colors.background}, -15px -15px 0 ${theme.colors.background}`,
            transform: isDark ? `scale(1)` : `scale(0)`,
            transition: `all 0.35s ease`,
          },
        }}
      />
    </button>
  )
}

export default ThemeColorToggle

const Toggle = styled.button`
  position: fixed;
  z-index: 1000;
  right: 5rem;
  top: 2.5rem;
  background-color: () ransparent;

  svg {
    fill: none;
    stroke: ${() => theme.colors.text};
  }
`
