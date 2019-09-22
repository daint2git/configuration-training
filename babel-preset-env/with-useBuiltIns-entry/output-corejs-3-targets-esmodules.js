import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.async-iterator";
import "core-js/modules/es.symbol.match";
import "core-js/modules/es.symbol.replace";
import "core-js/modules/es.symbol.search";
import "core-js/modules/es.symbol.split";
import "core-js/modules/es.array.flat";
import "core-js/modules/es.array.flat-map";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.reverse";
import "core-js/modules/es.array.sort";
import "core-js/modules/es.array.unscopables.flat";
import "core-js/modules/es.array.unscopables.flat-map";
import "core-js/modules/es.array-buffer.constructor";
import "core-js/modules/es.array-buffer.slice";
import "core-js/modules/es.number.parse-float";
import "core-js/modules/es.number.to-fixed";
import "core-js/modules/es.object.define-getter";
import "core-js/modules/es.object.define-setter";
import "core-js/modules/es.object.from-entries";
import "core-js/modules/es.object.lookup-getter";
import "core-js/modules/es.object.lookup-setter";
import "core-js/modules/es.promise";
import "core-js/modules/es.promise.finally";
import "core-js/modules/es.regexp.constructor";
import "core-js/modules/es.regexp.flags";
import "core-js/modules/es.regexp.to-string";
import "core-js/modules/es.string.ends-with";
import "core-js/modules/es.string.includes";
import "core-js/modules/es.string.match";
import "core-js/modules/es.string.pad-end";
import "core-js/modules/es.string.pad-start";
import "core-js/modules/es.string.replace";
import "core-js/modules/es.string.search";
import "core-js/modules/es.string.split";
import "core-js/modules/es.string.starts-with";
import "core-js/modules/es.string.trim";
import "core-js/modules/es.string.trim-end";
import "core-js/modules/es.string.trim-start";
import "core-js/modules/es.typed-array.float32-array";
import "core-js/modules/es.typed-array.float64-array";
import "core-js/modules/es.typed-array.int8-array";
import "core-js/modules/es.typed-array.int16-array";
import "core-js/modules/es.typed-array.int32-array";
import "core-js/modules/es.typed-array.uint8-array";
import "core-js/modules/es.typed-array.uint8-clamped-array";
import "core-js/modules/es.typed-array.uint16-array";
import "core-js/modules/es.typed-array.uint32-array";
import "core-js/modules/es.typed-array.from";
import "core-js/modules/es.typed-array.of";
import "core-js/modules/es.typed-array.to-locale-string";
import "core-js/modules/web.dom-collections.iterator";
import "core-js/modules/web.immediate";
import "core-js/modules/web.queue-microtask";
import "core-js/modules/web.url";
import "core-js/modules/web.url.to-json";
import "core-js/modules/web.url-search-params";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

export var handlePromise = () => new Promise(resolve => {
  resolve('hi');
});
export var handleAsyncAwait =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* () {
    var greeting = yield Promise.resolve('hi');
    return greeting;
  });

  return function handleAsyncAwait() {
    return _ref.apply(this, arguments);
  };
}();
export function* handleGenerator() {
  yield 1;
  yield 2;
}
export function handleAsyncAwaitGenerator() {
  return _handleAsyncAwaitGenerator.apply(this, arguments);
}

function _handleAsyncAwaitGenerator() {
  _handleAsyncAwaitGenerator = _wrapAsyncGenerator(function* () {
    yield _awaitAsyncGenerator(1);
    yield 2;
  });
  return _handleAsyncAwaitGenerator.apply(this, arguments);
}

export var myMap = new Map();
export var myWeekMap = new WeakMap();
export var myArray = Array.from([1, 2, 3], x => x + x);
export var cloneArray = [...myArray];
var [first, second, ...restArray] = cloneArray;
export { first, second, restArray };
export var myObject = {
  name: 'Dai',
  age: 26,
  skill: 'js'
};
export var cloneObject = _objectSpread({}, myObject);

var {
  name,
  age
} = cloneObject,
    restObject = _objectWithoutProperties(cloneObject, ["name", "age"]);

export { name, age, restObject };
export var newObject = _objectSpread({}, rest);
export var isExistedInArray = ['a', 'b'].includes('a');
export var isExistedInString = 'ab'.includes('a');
export var isValidNum = myArray.every(val => val < 3);
