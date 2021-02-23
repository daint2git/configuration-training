"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

var _regeneratorRuntime2 = require("@babel/runtime-corejs2/regenerator");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault")["default"];

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.handleGenerator = handleGenerator;
exports.handleAsyncAwaitGenerator = handleAsyncAwaitGenerator;
exports["default"] = exports.isExistedInString = exports.isExistedInArray = exports.cloneObject = exports.myObject = exports.cloneArray = exports.myArray = exports.mySymbol = exports.myWeakSet = exports.mySet = exports.myWeakMap = exports.myMap = exports.handleAsyncAwait = exports.handlePromise = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/map"));

var _weakMap = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/weak-map"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/set"));

var _weakSet = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/weak-set"));

var _symbol = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/symbol"));

var _from = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/from"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createSuper"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectSpread2"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _awaitAsyncGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/awaitAsyncGenerator"));

var _wrapAsyncGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/wrapAsyncGenerator"));

var _react = _interopRequireDefault(require("react"));

var _input = _interopRequireDefault(require("./input2"));

var _input2 = _interopRequireDefault(require("./input3"));

var _async = require("./async");

var _marked = /*#__PURE__*/_regeneratorRuntime2.mark(handleGenerator);

(0, _async.handleAsyncAwait2)();
(0, _async.handleGenerator2)();
(0, _async.handleAsyncAwaitGenerator2)();

var handlePromise = function handlePromise() {
  return new _promise["default"](function (resolve) {
    resolve('hi');
  });
};

exports.handlePromise = handlePromise;

var handleAsyncAwait = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _promise["default"].resolve('hi');

          case 2:
            data = _context.sent;
            return _context.abrupt("return", data);

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

function handleAsyncAwaitGenerator() {
  return _handleAsyncAwaitGenerator.apply(this, arguments);
}

function _handleAsyncAwaitGenerator() {
  _handleAsyncAwaitGenerator = (0, _wrapAsyncGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
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
  return _handleAsyncAwaitGenerator.apply(this, arguments);
}

var myMap = new _map["default"]();
exports.myMap = myMap;
var myWeakMap = new _weakMap["default"]();
exports.myWeakMap = myWeakMap;
var mySet = new _set["default"]();
exports.mySet = mySet;
var myWeakSet = new _weakSet["default"]();
exports.myWeakSet = myWeakSet;
var mySymbol = new _symbol["default"]();
exports.mySymbol = mySymbol;
var myArray = (0, _from["default"])([1, 2, 3], function (x) {
  return x + x;
});
exports.myArray = myArray;
var cloneArray = (0, _toConsumableArray2["default"])(myArray);
exports.cloneArray = cloneArray;
var myObject = {
  name: 'Dai',
  age: 26
};
exports.myObject = myObject;
var cloneObject = (0, _objectSpread2["default"])({}, myObject);
exports.cloneObject = cloneObject;
var isExistedInArray = ['a', 'b'].includes('a');
exports.isExistedInArray = isExistedInArray;
var isExistedInString = 'ab'.includes('a');
exports.isExistedInString = isExistedInString;

var Counter = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Counter, _React$Component);

  var _super = (0, _createSuper2["default"])(Counter);

  function Counter(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Counter);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDecrement", function () {
      _this.setState(function (_ref2) {
        var count = _ref2.count;
        return {
          count: count - 1
        };
      });
    });
    _this.state = {
      count: 0
    };
    _this.handleIncrement = _this.handleIncrement.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Counter, [{
    key: "handleIncrement",
    value: function handleIncrement() {
      this.setState(function (_ref3) {
        var count = _ref3.count;
        return {
          count: count + 1
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_input["default"], {
        onClick: this.handleIncrement
      }, "+"), /*#__PURE__*/_react["default"].createElement(_input["default"], {
        onClick: this.handleDecrement
      }, "-"), /*#__PURE__*/_react["default"].createElement(_input2["default"], null, this.state.count));
    }
  }]);
  return Counter;
}(_react["default"].Component);

var _default = Counter;
exports["default"] = _default;
