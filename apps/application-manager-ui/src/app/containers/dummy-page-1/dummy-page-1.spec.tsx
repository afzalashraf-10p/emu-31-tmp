import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import DummyPage1 from "./dummy-page-1";

describe(" DummyPage1", () => {
  it("should render successfully", () => {
    const mockStore = configureStore([thunk]);
    const store = mockStore({
      dummy: {
        fetching: false,
        dummyValue1: false,
        dummyValue2: [],
        error: null,
      },
    });

    const { baseElement } = render(
      <Provider store={store}>
        <MemoryRouter>
          <DummyPage1 />
        </MemoryRouter>
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
