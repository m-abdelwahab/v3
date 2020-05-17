import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { preToCodeBlock } from "mdx-utils"
import { Code } from "./src/components/code"
import { Tooltip } from "./src/components/tooltip"

// components is its own object outside of render so that the references to
// components are stable
const components = {
  // Tooltip,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />
  },
}
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
