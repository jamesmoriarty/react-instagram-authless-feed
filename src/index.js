import React from "react";
import ReactDOM from "react-dom";
import Feed from "./components/Feed";

ReactDOM.render(
  <Feed
    username="jamespaulmoriarty"
    className="Feed"
    loadingClassName="Loading"
  />,
  document.getElementById("root")
);
