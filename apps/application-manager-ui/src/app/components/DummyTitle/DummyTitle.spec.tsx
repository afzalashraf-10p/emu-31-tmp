import { mount } from "enzyme";

import DummyTitle from ".";

const props = {
  title: "DummyTitle",
};

describe("Dummy Title Component", () => {
  it("should render title correctly", () => {
    const wrapper = mount(DummyTitle(props));
    expect(wrapper.find("h2")).toHaveLength(1);
  });
});
