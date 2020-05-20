// @jsx jsx
import { jsx, useThemeUI } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"
import { FormattedIcon } from "../components/icons"

const Share = ({ slug, title }) => {
  const generateText = title => encodeURIComponent(`Check out "${title}"`)
  const generateUrl = slug =>
    encodeURIComponent(`https://mahmoudabdelwahab.tech/${slug}`)

  const handleClick = () => {
    popupWindow(
      `https://twitter.com/intent/tweet?text=${generateText(
        title
      )}&url=${generateUrl(slug)}&via=thisismahmoud_`,
      "Share this post",
      window,
      600,
      400
    )
  }

  return (
    <ShareContainer sx={{ backgroundColor: "highlight" }}>
      Found this article useful? Make sure you share it with other people on
      Twitter
      <button
        sx={{
          color: "text",
          backgroundColor: "background",
        }}
        onClick={handleClick}
      >
        Share now! <FormattedIcon name="Twitter" aria-label="twitter" />
      </button>
    </ShareContainer>
  )
}

export default Share

// https://stackoverflow.com/a/32261263/2347675
function popupWindow(url, title, win, w, h) {
  const y = win.top.outerHeight / 2 + win.top.screenY - h / 2
  const x = win.top.outerWidth / 2 + win.top.screenX - w / 2

  return win.open(
    url,
    title,
    `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`
  )
}

const ShareContainer = styled.div`
  max-width: 500px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1.5rem auto;
  padding: 1rem;
  border-radius: 10px;

  button {
    border-radius: 10px;
    padding: 1.25rem 1.75rem;
    font-size: 1rem;
    line-height: 1;
    text-decoration: none;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:after {
      display: none !important;
    }
    margin-top: 1rem;

    svg {
      width: 24px;
      height: 24px;
      margin-left: 0.1rem;
    }
  }
`
