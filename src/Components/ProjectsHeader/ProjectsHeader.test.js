import React from "react";
import { shallow } from "enzyme";
import ProjectsHeader from "./ProjectsHeader";

describe("ProjectsHeader", () => {
  let wrapper = shallow(<ProjectsHeader />);
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
