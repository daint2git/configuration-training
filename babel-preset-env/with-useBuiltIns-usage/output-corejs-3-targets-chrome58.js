import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.async-iterator";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.promise";
import "core-js/modules/web.dom-collections.iterator";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

export const handlePromise = () => new Promise(resolve => {
  resolve('hi');
});
export const handleAsyncAwait = async () => {
  const greeting = await Promise.resolve('hi');
  return greeting;
};
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

export const myMap = new Map();
export const myWeekMap = new WeakMap();
export const myArray = Array.from([1, 2, 3], x => x + x);
export const cloneArray = [...myArray];
const [first, second, ...restArray] = cloneArray;
export { first, second, restArray };
export const myObject = {
  name: 'Dai',
  age: 26,
  skill: 'js'
};
export const cloneObject = _objectSpread({}, myObject);

const {
  name,
  age
} = cloneObject,
      restObject = _objectWithoutProperties(cloneObject, ["name", "age"]);

export { name, age, restObject };
export const newObject = _objectSpread({}, rest);
export const isExistedInArray = ['a', 'b'].includes('a');
export const isExistedInString = 'ab'.includes('a');
export const isValidNum = myArray.every(val => val < 3);
