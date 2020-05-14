import styled from "@emotion/styled"
import {  media } from "./media"

const Main = styled.main`
  padding: 0 150px;
  ${media.desktop`padding: 0 100px;`};
  ${media.tablet`padding: 0 50px;`};
  ${media.phablet`padding: 0 25px;`};
  margin: 0 auto;
  width: 100%;
`

export default Main
