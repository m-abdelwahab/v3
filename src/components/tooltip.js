import React from "react"
import ReactTooltip from "react-tooltip"

export const Tooltip = ({ content, ...props }) => {
  return (
    <div>
      <ReactTooltip
        data-tip={`${content}`}
        {...props}
        style={{ display: "inline-block", width: "400px", height: "100px" }}
      >
        *
      </ReactTooltip>
    </div>
  )
}
