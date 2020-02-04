import React from "react";
import SignUp from "./SignUp"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import renderer from 'react-test-renderer'

describe(`SignUp component`, () => {
    it(`renders the two forms; A SIGNUP and SIGNIN form`, () => {
        const wrapper = shallow(<SignUp />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});