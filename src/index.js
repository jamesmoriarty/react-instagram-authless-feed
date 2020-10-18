import React from "react";
import ReactDOM from "react-dom";
import Feed from "./components/Feed";

ReactDOM.render(
  <Feed
    userName="jamespaulmoriarty"
    className="Feed"
    classNameLoading="Loading"
    limit="8"
  />,
  document.getElementById("root")
);
