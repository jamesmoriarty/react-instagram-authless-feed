import React from "react";
import { create, act } from "react-test-renderer";
import Feed from "./Feed";

it("#render", async () => {
  const fetchFn = (username) =>
    Promise.resolve([
      {
        url: "https://placeholder.com/640",
        src: "https://via.placeholder.com/640",
        alt: "640x640px image from placeholder.com",
      },
    ]);

  let component;

  await act(async () => {
    component = create(
      <Feed className="Feed" username="jamespaulmoriarty" fetchFn={fetchFn} />
    );
  });

  expect(component.toJSON()).toMatchSnapshot();
});
