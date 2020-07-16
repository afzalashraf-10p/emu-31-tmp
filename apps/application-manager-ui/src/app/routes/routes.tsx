/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";

import DummyPage1 from "../containers/dummy-page-1/dummy-page-1";
import DummyPage2 from "../containers/dummy-page-2/dummy-page-2";

import { APPLICATION_MANAGER_ROUTES } from "../utils/constants";

const StyledRoutes = styled.div``;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Routes = () => {
  const { dummy1, dummy2 } = APPLICATION_MANAGER_ROUTES;
  return (
    <StyledRoutes>
      <Switch>
        <Route exact path={dummy1} component={DummyPage1} />
        <Route exact path={dummy2} component={DummyPage2} />
        <Route exact path="/" render={() => <Redirect to={dummy1} />} />
      </Switch>
    </StyledRoutes>
  );
};

export default Routes;
