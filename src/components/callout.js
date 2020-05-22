/* @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"
import { FormattedIcon } from "../components/icons"

const Callout = ({ variant = "info", children }) => {
  const { theme } = useThemeUI()

  const variantStyles = {
    info: {
      borderLeft: `5px solid ${theme.colors.info}`,
      backgroundColor: `${theme.colors.infoBg}`,
    },
    check: {
      borderLeft: `5px solid ${theme.colors.check}`,
      backgroundColor: `${theme.colors.checkBg}`,
    },
    warning: {
      borderLeft: `5px solid ${theme.colors.warning}`,
      backgroundColor: `${theme.colors.warningBg}`,
    },
  }

  return (
    <>
      <Aside
        css={{
          padding: "0.5rem 2rem",
          margin: "1.5rem auto",
          ...variantStyles[variant],
        }}
      >
        <div
          sx={{
            backgroundColor: "background",
            width: "40px",
            height: "40px",
            position: "absolute",
            top: "0",
            left: "0",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            padding: "8px",
            stroke: variant,
          }}
        >
          <FormattedIcon name={variant} alt={`${variant} icon`} />
        </div>
        {children}
      </Aside>
    </>
  )
}

const Aside = styled.aside`
  position: relative;
  padding-top: 24px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  font-size: 17px;
  margin-top: 48px;
  margin-bottom: 64px;
  border-left: 3px solid;
  border-radius: 6px 6px 6px 3px;
  line-height: 1.6;
`

export default Callout
