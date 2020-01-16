import React from "react";
import { shallow } from "enzyme";
import MobileHeader from "./MobileHeader";

describe("MobileHeader", () => {
  let wrapper = shallow(<MobileHeader />);
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
