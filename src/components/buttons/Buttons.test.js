import React from "react";
import NotSignedInButton from "./NotSignedInButton";
import BookTourButton from "./BookTourButton";
import RemoveButton from "./RemoveButton";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe(`buttons components`, () => {
  it(`renders the NotSignedInButton button`, () => {
    const wrapper = shallow(<NotSignedInButton />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it(`renders the BookTourButton button`, () => {
    const tour = {
      id: "1",
      name: "Capitol Tour",
      img: "https://source.unsplash.com/TRkDaJGK2yE",
      description: "lorem ipsumhkjgsfdbkjh vdbhudi",
      city: "Washington",
      state: "DC",
      max_tourists: "2",
      policies: "Check-in 30 minutes before tour start",
      guide_username: "michaelanokyej@yahoo.com",
      guide_id: 1
    };
    const wrapper = shallow(<BookTourButton tour={tour} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it(`renders the RemoveButton button`, () => {
    const tour = {
      id: "1",
      name: "Capitol Tour",
      img: "https://source.unsplash.com/TRkDaJGK2yE",
      description: "lorem ipsumhkjgsfdbkjh vdbhudi",
      city: "Washington",
      state: "DC",
      max_tourists: "2",
      policies: "Check-in 30 minutes before tour start",
      guide_username: "michaelanokyej@yahoo.com",
      guide_id: 1
    };
    const wrapper = shallow(<RemoveButton id={tour.id} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
