// @jsx jsx
import { jsx } from "theme-ui"
import React from "react"

const Tooltip = ({ content }) => {
  return (
    <span>
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
    </span>
  )
}
export default Tooltip
