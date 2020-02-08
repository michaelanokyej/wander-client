import React from "react";
import TourSearch from "./TourSearch";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe(`TourSearch component`, () => {
  it(`renders the TourSearch component`, () => {
    const wrapper = shallow(<TourSearch />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
