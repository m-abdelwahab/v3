import styled from "styled-components"

const ProgressBar = styled.div`
  position:  fixed;
  top:0;
  background:  linear-gradient(
    to right,
    rgba(0, 0, 0, 1) ${props => props.scroll},
    transparent  0);
  width:  100%;
  height:  5px;
  z-index:  3;
`
export default ProgressBar
