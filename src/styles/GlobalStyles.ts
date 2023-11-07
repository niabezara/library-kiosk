import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
 
 :root {
    --color-header: ${(props) => props.theme.headerColor};
    --color-text: ${(props) => props.theme.textColor};
    --color-main: ${(props) => props.theme.mainColor};
    --color-bg: ${(props) => props.theme.backgroundColor};
    --color-nav: ${(props) => props.theme.navBackground};
    --color-shadow: ${(props) => props.theme.boxShadow};
    --color-bg-2: ${(props) => props.theme.secondBackground};
    --color-border: ${(props) => props.theme.borderColor};
    --color-second: ${(props) => props.theme.secondColor};
    --color-gradient: ${(props) => props.theme.gradientColor};
    --font-mono: "Roboto Mono", sans-serif;
    --font-sans: 'Inter', sans-serif;
  }

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    
  }
  html{
    font-size: 62.5%;
    scroll-behavior: smooth;  
    overflow-x:hidden;
  }

  body {
   font-weight: 400;
   font-family: var(--font-sans);
    background-color: var(--color-bg);
    color: var(--color-header);
  


 &::-webkit-scrollbar {
    width: 1em;
}
&::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #11112B;
}
 
&::-webkit-scrollbar-thumb {
  background-color: #610C9F;
  outline: 1px solid #11112B;
  border-radius: 50%;
}
  }
  `;
