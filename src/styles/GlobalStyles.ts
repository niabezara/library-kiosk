import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    
  }
  html{
    font-size: 62.5%;
  }
 
  body {
   font-weight: 400;
    font-family: 'Montserrat', sans-serif;
  
    overflow-x: hidden;


/* &::-webkit-scrollbar {
    width: 1em;
}
&::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #11112B;
}
 
&::-webkit-scrollbar-thumb {
  background-color: rgb(52, 52, 79);
  outline: 1px solid #11112B;
  border-radius: 50%;
} */
  }

  `;
