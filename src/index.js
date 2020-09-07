import React from "react";
import ReactDOM from "react-dom";
import Feed from "./components/Feed";

ReactDOM.render(
  <Feed
    userName="jamespaulmoriarty"
    className="Feed"
    classNameLoading="Loading"
  />,
  document.getElementById("root")
);
