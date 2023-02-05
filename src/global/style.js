import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section {
  margin-top: 10px;
}

body {
  transition: all 0.5s;
}
`;
