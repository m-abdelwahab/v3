// @jsx jsx
import { jsx, useThemeUI } from "theme-ui"
import React from "react"
import { Global, css } from "@emotion/core"

export const GlobalStyle = () => {
  const { theme } = useThemeUI()
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        @media screen and (prefers-reduced-motion: no-preference) {
          html,
          body {
            scroll-behavior: smooth;
          }
        }

        body {
          margin: 0;
          width: 100%;
          min-height: 100%;
          overflow-x: hidden;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;

          line-height: 1.3;
          font-family: "Open Sans", sans-serif;
          /* change to theme.fontSizes */
          font-size: 18px;
          &.hidden {
            overflow: hidden;
          }
          &.blur {
            overflow: hidden;
          }
        }

        img {
          width: 100%;
          max-width: 100%;
          vertical-align: middle;
        }

        svg {
          width: 100%;
          height: 100%;
          vertical-align: middle;
          &:hover,
          &:focus {
            outline: 0;
          }
        }

        a {
          display: inline-block;
          text-decoration: none;
          text-decoration-skip-ink: auto;
          color: inherit;
          position: relative;
          cursor: pointer;

          &:hover,
          &:focus {
            color: ${theme.colors.secondary};
            opacity: 0.8;
            outline: 1;
          }
        }

        button {
          cursor: pointer;
          border: 0;
          border-radius: 0;

          &:focus,
          &:active {
          }
        }

        p {
          margin: 0 0 15px 0;
        }

        ul,
        ol {
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .gatsby-image-outer-wrapper {
          height: 100%;
        }

        .fadeup-enter {
          opacity: 0.01;
          transform: translateY(20px);
          transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
            transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .fadeup-enter-active {
          opacity: 1;
          transform: translateY(0px);
          transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
            transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .fadedown-enter {
          opacity: 0.01;
          transform: translateY(-20px);
          transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
            transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .fadedown-enter-active {
          opacity: 1;
          transform: translateY(0px);
          transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
            transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .fade-enter {
          opacity: 0.01;
          transition: opacity 1000ms cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .fade-enter-active {
          opacity: 1;
          transition: opacity 1000ms cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        .prism-code {
          font-size: 1rem;
          padding-top: 1rem;
          padding-bottom: 1rem;
          padding-right: 1rem;
          -webkit-overflow-scrolling: touch;
          background-color: transparent;
          overflow-x: auto;
        }

        .token {
          display: inline-block;
        }

        p > code,
        li > code {
          background: ${theme.colors.code};
          color: ${theme.colors.background};
          padding: 3px 6px;
          font-size: 0.9em;
          letter-spacing: -0.5px;
          border-radius: 3px;
        }

        .gatsby-highlight {
          position: relative;
          -webkit-overflow-scrolling: touch;
        }
        .gatsby-highlight pre[class*="language-"] {
          -webkit-overflow-scrolling: touch;
        }
        .gatsby-highlight pre[class*="language-"]::before {
          background: black;
          border-radius: 0 0 0.25rem 0.25rem;
          color: white;
          font-size: 12px;
          letter-spacing: 0.025rem;
          padding: 0.1rem 0.5rem;
          position: absolute;
          right: 1rem;
          text-align: right;
          text-transform: uppercase;
          top: 0;
        }

        .gatsby-highlight pre[class~="language-javascript"]::before {
          content: "JS";
          background: #f7df1e;
          color: black;
        }
        .gatsby-highlight pre[class~="language-ts"]::before {
          content: "TS";
          background: #007acc;
          color: #ffffff;
        }

        .gatsby-highlight pre[class~="language-js"]::before {
          content: "JS";
          background: #f7df1e;
          color: black;
        }

        .gatsby-highlight pre[class~="language-html"]::before {
          content: "HTML";
          background: #e44d26;
          color: white;
        }

        .gatsby-highlight pre[class~="language-JSX"]::before {
          content: "CSS";
          background: #696969;
          color: white;
        }
        .gatsby-highlight pre[class~="language-css"]::before {
          content: "css";
          background: #264de4;
          color: white;
        }

        .highlight-line {
          background-color: rgb(2, 55, 81);
          border-left: 4px solid rgb(2, 155, 206);
          width: 100%;
        }

        .highlight-line .line-number-style {
          opacity: 0.5;
          left: -2px;
        }

        .line-number-style {
          width: calc(1.2em - 4px);
          display: inline-block;
          padding-left: 1em;
          padding-right: 1em;
          margin-right: 10px;
          width: 1.2em;
          user-select: none;
          opacity: 0.3;
          text-align: center;
          position: relative;
        }

        :root {
          --ff-serif: "DomaineDisplayNarrow", "Georgia", "Times",
            "Times New Roman";
          --ff-sanserif: "NBInternational", "Helvetica Neue", Helvetica, Arial,
            sans-serif;
          --fontbold: 800;
          --fontregular: 400;

          --fontxs: 0.75rem;
          --fontsm: 0.85rem;
          --fontmd: 1rem;
          --fontidk: 1.25rem;
          --fontlg: 3rem;
          --fontxl: 4.5rem;
          --baselineheight: 1.5rem;

          --baseborderpadding: 25px;
          --baseborderradius: 2px;

          --baseboxshadow: 0 1px 3px rgba(188, 193, 217, 0.12),
            0 5px 12px rgba(188, 193, 217, 0.25);
          --boxshadow2: 0 13px 27px -5px rgba(50, 50, 93, 0.22),
            0 8px 16px -8px rgba(0, 0, 0, 0.2);

          --cubic: cubic-bezier(0.42, 0, 0.59, 1.1);
          --cubic2: cubic-bezier(0.65, -0.22, 0.43, 0.72);
        }
        .hidden {
          opacity: 0;
          display: none;
        }
      `}
    />
  )
}

export default GlobalStyle
