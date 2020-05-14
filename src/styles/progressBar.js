/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"

const StyledProgressBar = styled.p`
  position: fixed;
  top: 0;
  width: 100%;
  height: 5px;
  z-index: 3;
`

const ProgressBar = props => {
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
    const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100)
    setProgress(scrollPosition)
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
  return (
    <StyledProgressBar
      sx={{
        background: `linear-gradient(to right, highlight ${progress}%,transparent 0)`,
      }}
    />
  )
}

export default ProgressBar
