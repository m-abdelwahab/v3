/** @jsx jsx */
import { jsx } from "theme-ui"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import styled from "@emotion/styled"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = meta => {
  if (!RE.test(meta)) {
    return () => false
  }
  const lineNumbers = RE.exec(meta)[1]
    .split(`,`)
    .map(v => v.split(`-`).map(x => parseInt(x, 10)))
  return index => {
    const lineNumber = index + 1
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    )
    return inRange
  }
}

const LiveProviderContainer = styled.div`
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`
const Code = ({ codeString, language, metastring, ...props }) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  if (props["react-live"]) {
    return (
      <LiveProviderContainer>
        <LiveProvider code={codeString}>
          <LiveEditor
            theme={theme}
            sx={{ maxWidth: "750px", minWidth: "50%" }}
          />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </LiveProviderContainer>
    )
  }
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
      {...props}
      sx={{ marginBottom: 3 }}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i })

              if (shouldHighlightLine(i)) {
                lineProps.className = `${lineProps.className} highlight-line`
              }

              return (
                <div {...lineProps}>
                  <span className="line-number-style">{i + 1}</span>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
            })}
          </pre>
        </div>
      )}
    </Highlight>
  )
}

export default Code
