"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.async-iterator");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.map");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.set");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/es.weak-set");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGenerator = handleGenerator;
exports.handleAsyncAwaitGenerator = handleAsyncAwaitGenerator;
exports.default = exports.rest = exports.name = exports.cloneObject = exports.myObject = exports.isExistedInString = exports.isExistedInArray = exports.myArray = exports.myWeakSet = exports.mySet = exports.myWeekMap = exports.myMap = exports.handleAsyncAwait = exports.handlePromise = void 0;

require("regenerator-runtime/runtime");

var _react = _interopRequireDefault(require("react"));

var _input = _interopRequireDefault(require("./input2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(handleGenerator);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

var handlePromise = function handlePromise() {
  return new Promise(function (resolve, reject) {
    resolve('hi');
  });
};

exports.handlePromise = handlePromise;

var handleAsyncAwait =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var greeting;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.resolve('hi');

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

function handleGenerator() {
  return regeneratorRuntime.wrap(function handleGenerator$(_context2) {
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
  _handleAsyncAwaitGenerator = _wrapAsyncGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _awaitAsyncGenerator(1);

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

var myMap = new Map();
exports.myMap = myMap;
var myWeekMap = new WeakMap();
exports.myWeekMap = myWeekMap;
var mySet = new Set();
exports.mySet = mySet;
var myWeakSet = new WeakSet();
exports.myWeakSet = myWeakSet;
var myArray = Array.from([1, 2, 3], function (x) {
  return x + x;
});
exports.myArray = myArray;
var isExistedInArray = ['a', 'b'].includes('a');
exports.isExistedInArray = isExistedInArray;
var isExistedInString = 'ab'.includes('a');
exports.isExistedInString = isExistedInString;
var myObject = {
  name: 'Dai',
  age: 26
};
exports.myObject = myObject;

var cloneObject = _objectSpread({}, myObject);

exports.cloneObject = cloneObject;

var name = myObject.name,
    rest = _objectWithoutProperties(myObject, ["name"]);

exports.rest = rest;
exports.name = name;

var Counter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Counter)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      count: 0,
      Text: null
    });

    _defineProperty(_assertThisInitialized(_this), "handleIncrement", function () {
      _this.setState(function (_ref2) {
        var count = _ref2.count;
        return {
          count: count + 1
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDecrement", function () {
      _this.setState(function (_ref3) {
        var count = _ref3.count;
        return {
          count: count - 1
        };
      });
    });

    return _this;
  }

  _createClass(Counter, [{
    key: "loadComponent",
    value: function loadComponent() {
      var _this2 = this;

      Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./input3'));
      }).then(function (Text) {
        _this2.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            Text: Text.default
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_input.default, {
        onClick: this.handleIncrement
      }, "+"), _react.default.createElement(_input.default, {
        onClick: this.handleDecrement
      }, "-"), this.state.Text && _react.default.createElement(Text, null, this.state.count));
    }
  }]);

  return Counter;
}(_react.default.Component);

var _default = Counter;
exports.default = _default;
