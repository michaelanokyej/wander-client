import React from "react";
import About from "./About"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

describe(`About component`, () => {
    it(`renders the About component`, () => {
        const wrapper = shallow(<About />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});