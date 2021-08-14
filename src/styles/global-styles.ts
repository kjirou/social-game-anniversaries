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
  body {
    background-color: #ccc;
  }
`
