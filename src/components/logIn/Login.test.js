import React from "react";
import Login from "./Login"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

describe(`Login component`, () => {
    it(`renders the Login component`, () => {
        const wrapper = shallow(<Login />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});