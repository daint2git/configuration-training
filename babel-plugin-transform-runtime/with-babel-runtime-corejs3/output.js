"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.handleGenerator = handleGenerator;
exports.handleAsyncAwaitGenerator = handleAsyncAwaitGenerator;
exports["default"] = exports.isExistedInString = exports.isExistedInArray = exports.cloneObject = exports.myObject = exports.cloneArray = exports.myArray = exports.mySymbol = exports.myWeakSet = exports.mySet = exports.myWeakMap = exports.myMap = exports.handleAsyncAwait = exports.handlePromise = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _bind = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/bind"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _from = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/from"));

var _symbol = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/symbol"));

var _weakSet = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/weak-set"));

var _set = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/set"));

var _weakMap = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/weak-map"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/map"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _awaitAsyncGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/awaitAsyncGenerator"));

var _wrapAsyncGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/wrapAsyncGenerator"));

var _react = _interopRequireDefault(require("react"));

var _input = _interopRequireDefault(require("./input2"));

var _context4, _context5;

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context7; (0, _forEach["default"])(_context7 = ownKeys(source, true)).call(_context7, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context8; (0, _forEach["default"])(_context8 = ownKeys(source)).call(_context8, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var _marked =
/*#__PURE__*/
_regenerator["default"].mark(handleGenerator);

var handlePromise = function handlePromise() {
  return new _promise["default"](function (resolve) {
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
  _handleAsyncAwaitGenerator = (0, _wrapAsyncGenerator2["default"])(
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

var cloneObject = _objectSpread({}, myObject);

exports.cloneObject = cloneObject;
var isExistedInArray = (0, _includes["default"])(_context4 = ['a', 'b']).call(_context4, 'a');
exports.isExistedInArray = isExistedInArray;
var isExistedInString = (0, _includes["default"])(_context5 = 'ab').call(_context5, 'a');
exports.isExistedInString = isExistedInString;

var Counter =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Counter, _React$Component);

  function Counter(props) {
    var _context6;

    var _this;

    (0, _classCallCheck2["default"])(this, Counter);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Counter).call(this, props));
    (0, _defineProperty3["default"])((0, _assertThisInitialized2["default"])(_this), "handleDecrement", function () {
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
    _this.handleIncrement = (0, _bind["default"])(_context6 = _this.handleIncrement).call(_context6, (0, _assertThisInitialized2["default"])(_this));
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
      return _react["default"].createElement("div", null, _react["default"].createElement(_input["default"], {
        onClick: this.handleIncrement
      }, "+"), _react["default"].createElement(_input["default"], {
        onClick: this.handleDecrement
      }, "-"), _react["default"].createElement(_input["default"], null, this.state.count));
    }
  }]);
  return Counter;
}(_react["default"].Component);

var _default = Counter;
exports["default"] = _default;
