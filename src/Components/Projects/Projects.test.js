import React from "react";
import { shallow } from "enzyme";
import Projects from "./Projects";

describe("Projects", () => {
  let wrapper = shallow(<Projects />);
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
