const theme = {
  colors: {
    dark: "#000007",
    darkestNavy: "#01050b",
    darkNavy: "#020c1b",
    navy: "#0a192f",
    lightNavy: "#172a45",
    darkGrey: "#333f58",
    mediumGrey: "#2d3952",
    grey: "#4c5772",
    lightGrey: "#606a86",
    slate: "#8892b0",
    lightSlate: "#a8b2d1",
    lightestSlate: "#ccd6f6",
    offWhite: "#dce7ff",
    white: "#FFFFFF",
    pink: "#e75480",
    yellow: "#B8860B",
    brown: "#D47500",
    orange: "#ff4c00",
    darkRed: "#be0000",
    purple: "#6a0dad",
    green: "#008000 ",
    blue: "#00A8E8",
    darkBlue: "#1D7FFC",
    highlight: "#00A8E8",
    transGreen: "rgba(100, 255, 218, 0.07)",
    transNavy: "rgba(10, 25, 47, 0.7)",
    shadowNavy: "rgba(2, 12, 27, 0.7)",
  },
  fontSizes: {
    xsmall: "12px",
    smallish: "13px",
    small: "14px",
    medium: "16px",
    large: "18px",
    xlarge: "20px",
    xxlarge: "22px",
    h3: "32px",
  },
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",

  borderRadius: "10px",
  margin: "20px",

  radius: 3,
  loaderDelay: `6`,
}
export default theme

export const lightTheme = {
  body: "#FFFFFF",
  text: "#000007",
  toggleBorder: "transparent",
  gradient: "linear-gradient(#39598A, #79D7ED)",
}

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "transparent",
  gradient: "linear-gradient(#091236, #1E215D)",
}
