import React from "react";
import MainPage from "./MainPage"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"

describe(`MainPage component`, () => {
    it(`renders the MainPage component`, () => {
        const wrapper = shallow(<MainPage />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});