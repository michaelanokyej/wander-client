import React from "react";
import PostTour from "./PostTour"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

describe(`PostTour component`, () => {
    it(`renders the PostTour component`, () => {
        const wrapper = shallow(<PostTour />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});