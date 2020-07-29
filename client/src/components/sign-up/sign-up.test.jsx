import React from "react";
import { shallow } from "enzyme";
import "./sign-up.jsx"

it("Expect to render Collection Item component", () => {
    expect(shallow(<SignUp />)).toMatchSnapshot()
})