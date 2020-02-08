import React from "react";
import Footer from "./Footer"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

describe(`Footer component`, () => {
    it(`renders the Footer component`, () => {
        const wrapper = shallow(<Footer />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});