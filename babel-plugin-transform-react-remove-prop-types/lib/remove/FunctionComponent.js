"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FunctionComponent = function FunctionComponent(_ref) {
  var foo = _ref.foo,
      bar = _ref.bar,
      baz = _ref.baz;
  return _react["default"].createElement("div", null, foo, bar, baz);
};

var _default = FunctionComponent;
exports["default"] = _default;