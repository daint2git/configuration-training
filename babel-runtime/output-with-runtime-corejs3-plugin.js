"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.handleAsyncAwait2 = handleAsyncAwait2;
exports.handleGenerator = handleGenerator;
exports.handleGeneratorAsyncAwait = handleGeneratorAsyncAwait;
exports.parseJSON = parseJSON;
exports["default"] = exports.isExistedInString = exports.isExistedInArray = exports.myArray = exports.mySet = exports.myWeekMap = exports.handleAsyncAwait = exports.handlePromise = void 0;

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _from = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/from"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set"));

var _weakMap = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/weak-map"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _awaitAsyncGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/awaitAsyncGenerator"));

var _wrapAsyncGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/wrapAsyncGenerator"));

var _react = _interopRequireDefault(require("react"));

var _input = _interopRequireDefault(require("./input2"));

var _input2 = _interopRequireDefault(require("./input3"));

var _context4, _context5;

var _marked =
/*#__PURE__*/
_regenerator["default"].mark(handleGenerator);

var handlePromise = function handlePromise() {
  return new _promise["default"](function (resolve, reject) {
    resolve('hi');
  });
};

exports.handlePromise = handlePromise;

var handleAsyncAwait =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var greeting;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _promise["default"].resolve('hi');

          case 2:
            greeting = _context.sent;
            return _context.abrupt("return", greeting);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleAsyncAwait() {
    return _ref.apply(this, arguments);
  };
}();

exports.handleAsyncAwait = handleAsyncAwait;

function handleAsyncAwait2() {
  return _handleAsyncAwait.apply(this, arguments);
}

function _handleAsyncAwait() {
  _handleAsyncAwait = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3() {
    var greeting;
    return _regenerator["default"].wrap(function _callee3$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _promise["default"].resolve('hi');

          case 2:
            greeting = _context7.sent;
            return _context7.abrupt("return", greeting);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee3);
  }));
  return _handleAsyncAwait.apply(this, arguments);
}

function handleGenerator() {
  return _regenerator["default"].wrap(function handleGenerator$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return 1;

        case 2:
          _context2.next = 4;
          return 2;

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked);
}

function handleGeneratorAsyncAwait() {
  return _handleGeneratorAsyncAwait.apply(this, arguments);
}

function _handleGeneratorAsyncAwait() {
  _handleGeneratorAsyncAwait = (0, _wrapAsyncGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _awaitAsyncGenerator2["default"])(1);

          case 2:
            _context3.next = 4;
            return 2;

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2);
  }));
  return _handleGeneratorAsyncAwait.apply(this, arguments);
}

function parseJSON(value) {
  try {
    var obj = JSON.parse(value);
    return obj;
  } catch (_unused) {
    throw new Error('Can not parse json !');
  }
}

var myWeekMap = new _weakMap["default"]();
exports.myWeekMap = myWeekMap;
var mySet = new _set["default"]();
exports.mySet = mySet;
var myArray = (0, _from["default"])([1, 2, 3], function (x) {
  return x + x;
});
exports.myArray = myArray;
var isExistedInArray = (0, _includes["default"])(_context4 = ['a', 'b']).call(_context4, 'a');
exports.isExistedInArray = isExistedInArray;
var isExistedInString = (0, _includes["default"])(_context5 = 'ab').call(_context5, 'a');
exports.isExistedInString = isExistedInString;

var Counter =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Counter, _React$Component);

  function Counter() {
    var _getPrototypeOf2, _context6;

    var _this;

    (0, _classCallCheck2["default"])(this, Counter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Counter)).call.apply(_getPrototypeOf2, (0, _concat["default"])(_context6 = [this]).call(_context6, args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      count: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleIncrement", function () {
      _this.setState(function (_ref2) {
        var count = _ref2.count;
        return {
          count: count + 1
        };
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDecrement", function () {
      _this.setState(function (_ref3) {
        var count = _ref3.count;
        return {
          count: count - 1
        };
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Counter, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement(_input["default"], {
        onClick: this.handleIncrement
      }, "+"), _react["default"].createElement(_input["default"], {
        onClick: this.handleDecrement
      }, "-"), _react["default"].createElement(_input2["default"], null, this.state.count));
    }
  }]);
  return Counter;
}(_react["default"].Component);

var _default = Counter;
exports["default"] = _default;
