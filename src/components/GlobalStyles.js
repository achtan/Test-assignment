import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  html, body {
    color: #555;
    font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
    font-size: 1rem;
    background-color: rgb(230, 233, 245);
  }
  
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
`
