import { createGlobalStyle } from "styled-components";

import noir from '../../fonts/Noir-pro/NoirPro-Webfont/NoirPro-Regular.woff'

const Typography = createGlobalStyle`
  // @font-face {
  //   font-family: Noir Pro;
  //   src: url(${noir});
  // }

  html {
  font-size: 62.5%;
  line-height: 1.25;
  body {
    font-family: "Noir Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    p, span {
    font-size: 1.4rem;
    }
    a {
    font-weight: 600;
    }
  }
}

`

export default Typography;
