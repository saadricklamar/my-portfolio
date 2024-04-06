import React from "react";
import { shallow } from "enzyme";
import Content from "./Content";

describe("Content", () => {
  let wrapper = shallow(<Content/>);
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});