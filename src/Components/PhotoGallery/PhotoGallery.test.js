import React from "react";
import { shallow } from "enzyme";
import PhotoGallery from "./PhotoGallery";

describe("PhotoGallery", () => {
  let wrapper = shallow(<PhotoGallery />);
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
