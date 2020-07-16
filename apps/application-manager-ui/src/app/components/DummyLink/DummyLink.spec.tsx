import React from "react";
import { mount } from "enzyme";
import { Link } from "react-router-dom";
import { MemoryRouter } from "react-router";

import DummyLink from ".";

const props = {
  title: "DummyLink",
  linkTo: "dummy1",
};

describe("Dummy Link Component", () => {
  it("should render link correctly", () => {
    const wrapper = mount(
      <MemoryRouter>
        <DummyLink {...props} />
      </MemoryRouter>
    );

    expect(wrapper.find(Link)).toHaveLength(1);
  });
});
