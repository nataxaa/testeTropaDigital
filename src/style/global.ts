import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

:root{
  --orange-color: #FF6C22;
  --white-color: #FFFFFF;
  --black-color: #000000;
  --button-color:#2EAFB2;
  --red-color: #DE1B17;
  --background-second-page: #E5E5E5;
}

*{
  margin: 0;
  padding: 0 ;
}


html, body{
  font-family: 'Advent Pro', sans-serif;
  min-height:100% ;
}

`
