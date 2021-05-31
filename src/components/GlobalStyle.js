import { createGlobalStyle } from "styled-components";
import {
  primaryColor,
  center,
  defaultColor,
  fontsize,
  textColor,
  textColorLighter,
} from "./../constants/variables";

const GlobalStyle = createGlobalStyle`
 *{
     margin:0;
     padding:0;
     box-sizing: border-box;
 }

 html{
     font-size: ${fontsize};
 }

 body{
    font-family: 'Roboto', sans-serif;
 }


 button{
    font-family: 'Roboto', sans-serif;
 }
 .center{
     max-width:${center};
     margin:auto;
 }

 li{
     list-style: none;
 }

 h1{
     font-size: 3.6rem;
     color:${defaultColor};
 }

 h2{
     font-size: 2.4rem;
     color:${textColor};
 }

 p{
     font-size: 1.6rem;
     color:${textColorLighter};
    line-height: 2.4rem;

 }

 button{
     background:${primaryColor};
     color:${defaultColor};
     font-size: 1.6rem;
     cursor: pointer;
     height:4rem;
     display:flex;
     justify-content: center;
     border:none;
     align-items: center;
     width:100%;
 }

 .notification {
     font-size: 1.6rem;
 }


`;

export default GlobalStyle;
