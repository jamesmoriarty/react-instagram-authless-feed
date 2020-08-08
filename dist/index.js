"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Feed = _interopRequireDefault(require("./components/Feed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_Feed["default"], {
  username: "jamespaulmoriarty",
  className: "Feed",
  loadingClassName: "Loading"
}), document.getElementById("root"));