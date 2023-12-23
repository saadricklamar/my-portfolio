import React from "react";
import { shallow } from "enzyme";
import Solutions from "./Solutions";

describe("Solutions", () => {
  let wrapper = shallow(<Solutions />);
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
