import React from "react";
import Nav from "./Nav"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

describe(`Nav component`, () => {
    it(`renders the Nav component`, () => {
        const wrapper = shallow(<Nav />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});