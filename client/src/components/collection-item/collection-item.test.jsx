import React from "react";
import { shallow } from "enzyme";
import "./collection-item.jsx"

it("Expect to render Collection Item component", () => {
    expect(shallow(<CollectionItem />)).toMatchSnapshot()
})