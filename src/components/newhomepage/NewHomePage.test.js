import React from "react";
import NewHomePage from "./NewHomePage"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

describe(`NewHomePage component`, () => {
    it(`renders the NewHomePage component`, () => {
        const wrapper = shallow(<NewHomePage />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});