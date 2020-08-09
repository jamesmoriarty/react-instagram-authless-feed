import React from "react";
import Media from "./Media";
import { create } from "react-test-renderer";

describe("#render", () => {
  it("returns html", () => {
    const component = create(
      <Media
        url="https://placeholder.com/640"
        src="https://via.placeholder.com/640"
        alt="640x640px image from placeholder.com"
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
