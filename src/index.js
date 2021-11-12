import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle`

//   html, body {
//     margin: 0;
//   }

//   body {
//     /* font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif; */
//   }
//   a {
//     color:black;
//     text-decoration: none;

//     }

//   select{
//     border: none;
//     margin-left: 5px;
//     appearance: none;
//     outline: none;
//   }
// `;

ReactDOM.render(
  <React.StrictMode>
    {/* <GlobalStyle> */}
    <App />
    {/* </GlobalStyle> */}
  </React.StrictMode>,
  document.getElementById("root")
);
