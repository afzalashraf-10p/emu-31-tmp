import React from "react";
import { mount } from "enzyme";

import DummyButton from ".";

describe("EditButton render testing", () => {
  it("Should render fine", () => {
    const title = "Test Button Title";
    const onClick = jest.fn();
    const wrapper = mount(<DummyButton title={title} onClick={onClick} />);
    expect(wrapper.contains(title));
  });
});
