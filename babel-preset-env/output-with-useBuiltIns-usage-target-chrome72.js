"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGenerator = handleGenerator;
exports.handleAsyncAwaitGenerator = handleAsyncAwaitGenerator;
exports.default = exports.rest = exports.name = exports.cloneObject = exports.myObject = exports.isExistedInString = exports.isExistedInArray = exports.myArray = exports.myWeakSet = exports.mySet = exports.myWeekMap = exports.myMap = exports.handleAsyncAwait = exports.handlePromise = void 0;

var _react = _interopRequireDefault(require("react"));

var _input = _interopRequireDefault(require("./input2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const handlePromise = () => {
  return new Promise((resolve, reject) => {
    resolve('hi');
  });
};

exports.handlePromise = handlePromise;

const handleAsyncAwait = async () => {
  const greeting = await Promise.resolve('hi');
  return greeting;
};

exports.handleAsyncAwait = handleAsyncAwait;

function* handleGenerator() {
  yield 1;
  yield 2;
}

async function* handleAsyncAwaitGenerator() {
  await 1;
  yield 2;
}

const myMap = new Map();
exports.myMap = myMap;
const myWeekMap = new WeakMap();
exports.myWeekMap = myWeekMap;
const mySet = new Set();
exports.mySet = mySet;
const myWeakSet = new WeakSet();
exports.myWeakSet = myWeakSet;
const myArray = Array.from([1, 2, 3], x => x + x);
exports.myArray = myArray;
const isExistedInArray = ['a', 'b'].includes('a');
exports.isExistedInArray = isExistedInArray;
const isExistedInString = 'ab'.includes('a');
exports.isExistedInString = isExistedInString;
const myObject = {
  name: 'Dai',
  age: 26
};
exports.myObject = myObject;
const cloneObject = { ...myObject
};
exports.cloneObject = cloneObject;
const {
  name,
  ...rest
} = myObject;
exports.rest = rest;
exports.name = name;

class Counter extends _react.default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      count: 0,
      Text: null
    });

    _defineProperty(this, "handleIncrement", () => {
      this.setState(({
        count
      }) => ({
        count: count + 1
      }));
    });

    _defineProperty(this, "handleDecrement", () => {
      this.setState(({
        count
      }) => ({
        count: count - 1
      }));
    });
  }

  loadComponent() {
    Promise.resolve().then(() => _interopRequireWildcard(require('./input3'))).then(Text => {
      this.setState(prevState => ({ ...prevState,
        Text: Text.default
      }));
    });
  }

  render() {
    return _react.default.createElement("div", null, _react.default.createElement(_input.default, {
      onClick: this.handleIncrement
    }, "+"), _react.default.createElement(_input.default, {
      onClick: this.handleDecrement
    }, "-"), this.state.Text && _react.default.createElement(Text, null, this.state.count));
  }

}

var _default = Counter;
exports.default = _default;
