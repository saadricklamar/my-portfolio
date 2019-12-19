import React from "react";
import { shallow } from "enzyme";
import Skills from "./Skills";

describe("Skills", () => {
  let wrapper = shallow(<Skills/>);
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});