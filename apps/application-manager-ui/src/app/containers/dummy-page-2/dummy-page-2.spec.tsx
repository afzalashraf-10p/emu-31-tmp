import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import DummyPage2 from "./dummy-page-2";

describe(" DummyPage2", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <MemoryRouter>
        <DummyPage2 />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
