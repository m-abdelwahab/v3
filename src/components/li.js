import React from "react"
import styled from "@emotion/styled"
import { FormattedIcon } from "../components/icons"

const Li = ({ children, ...props }) => {
  return (
    <StyledLi {...props}>
      <span>
        <FormattedIcon name="Arrow" />
      </span>
      <span>{children}</span>
    </StyledLi>
  )
}

export default Li

const StyledLi = styled.li`
  display: flex;
  align-items: baseline;
  span {
    a {
      display: inline;
    }
    svg {
      margin-right: 10px;
      width: 16px;
      height: 16px;
    }
  }
`
