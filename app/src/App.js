import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Page from "./pages/Page";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Page />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;

export default App;
