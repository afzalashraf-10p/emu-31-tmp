import React from "react";

import "./app.scss";

import styled from "@emotion/styled";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";

const StyledApp = styled.div``;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.@emotion/styled file.
   */
  return (
    <StyledApp>
      <Router>
        <Routes />
      </Router>
    </StyledApp>
  );
};

export default App;
