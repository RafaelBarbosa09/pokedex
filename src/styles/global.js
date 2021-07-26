const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
  :root {
    --card-body: #ffffff;
    --background: #F4F3EF;
    --header-bg: #212120;
    --gray: #6e6d7a;
    --text: #252422;
    --red: #dc3545;
    --green: #6bd098;
    --purple: #6f42c1;
    --orange: #fd7e14;
    --cyan: #17a2b8;
    --blue: #007bff;
    --yellow: #ffc107;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
        font-size: 93.75%;
    }
    @media(max-width: 720px) {
        font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textArea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
  
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: var(--text);
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;