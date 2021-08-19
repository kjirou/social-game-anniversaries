import {
  CSSObject,
  DefaultTheme,
  GlobalStyleComponent,
  createGlobalStyle,
} from 'styled-components'

export const GlobalStyles: GlobalStyleComponent<
  CSSObject,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: 1em;
    font-weight: normal;
  }
  ul {
    list-style: none;
  }
`
