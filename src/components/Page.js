import styled, { createGlobalStyle } from "styled-components";
createGlobalStyle`

  ::selection {
    background-color: #00f;
    color: #fff;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  body {
    font-family: 'Graphik Web', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  a {
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }

  p {
    margin: 0;
    padding: 0;
  }

  .content {
    a {
      border-bottom: 1px solid ${props => props.theme.colors.primary};

      &:visited {
        color: inherit;
      }

      &:active {
        background-color: ${props => props.theme.colors.primary};
        color: #fff;
      }
    }
  }
`;
export const Page = styled.div`
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
`;
