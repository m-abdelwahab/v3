const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    blogContainer: "675px",
    container: "1100px",
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Poppins, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  lineHeights: {
    body: 1.6,
    heading: 1.25,
  },
  useColorSchemeMediaQuery: true,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#609",
    secondary: "#306",
    muted: "#f6f6f6",
    italic: "#5A6072",
    toggle: "hsl(230, 25%, 18%)",
    modes: {
      dark: {
        text: "hsl(210, 50%, 96%)",
        background: "hsl(230, 25%, 18%)",
        primary: "hsl(260, 100%, 80%)",
        secondary: "hsl(290, 100%, 80%)",
        highlight: "hsl(260, 20%, 40%)",
        accent: "hsl(290, 100%, 80%)",
        muted: "hsla(230, 20%, 0%, 20%)",
        gray: "hsl(210, 50%, 60%)",
        toggle: "#000",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
      my: 4,
      scrollMarginTop: "128px",
      a: {
        float: "left",
        marginLeft: "-24px",
      },
      svg: {
        visibility: "hidden",
      },
      "&:hover": {
        svg: {
          visibility: "visible",
          height: "25px",
          width: "20px",
          fill: "highlight",
        },
      },
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
      my: 3,
      scrollMarginTop: "1em",
      a: {
        float: "left",
        marginLeft: "-24px",
      },
      svg: {
        visibility: "hidden",
      },
      "&:hover": {
        svg: {
          visibility: "visible",
          height: "25px",
          width: "20px",
          fill: "highlight",
        },
      },
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
      my: 2,
      scrollMarginTop: "128px",
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontSize: 3,
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      margin: "20px 0",
    },
    a: {
      color: "text",
      "&::hover": {
        color: "highlight",
      },
      "&::focus": {
        color: "highlight",
      },
    },
    blockquote: {
      fontSize: "19px",
      fontStyle: "italic",
      borderLeft: "5px solid text",
      backgroundColor: "highlight",
      padding: "0.3em",
      borderRadius: "4px",
      marginTop: 3,
    },
    hr: {
      my: 2,
    },
    ul: {
      listStyle: "",
    },
    li: {
      display: "block",
      marginTop: "1em",
    },
    svg: {
      stroke: "text",
    },
  },
}

export default theme
