// @jsx jsx
import { jsx } from "theme-ui"
import React from "react"
import ReactTooltip from "react-tooltip"

const Tooltip = ({ content }) => {
  return (
    <>
      <ReactTooltip />
      <span
        sx={{
          color: "primary",
          fontSize: "30px",
          "&:hover": { cursor: "pointer" },
        }}
        data-tip={`${content}`}
      >
        *
      </span>
    </>
  )
}
export default Tooltip
