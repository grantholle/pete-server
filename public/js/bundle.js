/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@adonisjs/websocket-client/dist/Ws.browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/@adonisjs/websocket-client/dist/Ws.browser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var anyMap = new WeakMap();
var eventsMap = new WeakMap();
var resolvedPromise = Promise.resolve();

function assertEventName(eventName) {
	if (typeof eventName !== 'string') {
		throw new TypeError('eventName must be a string');
	}
}

function assertListener(listener) {
	if (typeof listener !== 'function') {
		throw new TypeError('listener must be a function');
	}
}

function getListeners(instance, eventName) {
	var events = eventsMap.get(instance);
	if (!events.has(eventName)) {
		events.set(eventName, new Set());
	}

	return events.get(eventName);
}

var Emittery = function () {
	function Emittery() {
		classCallCheck(this, Emittery);

		anyMap.set(this, new Set());
		eventsMap.set(this, new Map());
	}

	createClass(Emittery, [{
		key: 'on',
		value: function on(eventName, listener) {
			assertEventName(eventName);
			assertListener(listener);
			getListeners(this, eventName).add(listener);
			return this.off.bind(this, eventName, listener);
		}
	}, {
		key: 'off',
		value: function off(eventName, listener) {
			assertEventName(eventName);
			assertListener(listener);
			getListeners(this, eventName).delete(listener);
		}
	}, {
		key: 'once',
		value: function once(eventName) {
			var _this = this;

			return new Promise(function (resolve) {
				assertEventName(eventName);
				var off = _this.on(eventName, function (data) {
					off();
					resolve(data);
				});
			});
		}
	}, {
		key: 'emit',
		value: function () {
			var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(eventName, eventData) {
				var _this2 = this;

				var listeners, anyListeners, staticListeners, staticAnyListeners;
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								assertEventName(eventName);

								listeners = getListeners(this, eventName);
								anyListeners = anyMap.get(this);
								staticListeners = [].concat(toConsumableArray(listeners));
								staticAnyListeners = [].concat(toConsumableArray(anyListeners));
								_context3.next = 7;
								return resolvedPromise;

							case 7:
								return _context3.abrupt('return', Promise.all([].concat(toConsumableArray(staticListeners.map(function () {
									var _ref2 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(listener) {
										return regeneratorRuntime.wrap(function _callee$(_context) {
											while (1) {
												switch (_context.prev = _context.next) {
													case 0:
														if (!listeners.has(listener)) {
															_context.next = 2;
															break;
														}

														return _context.abrupt('return', listener(eventData));

													case 2:
													case 'end':
														return _context.stop();
												}
											}
										}, _callee, _this2);
									}));

									return function (_x3) {
										return _ref2.apply(this, arguments);
									};
								}())), toConsumableArray(staticAnyListeners.map(function () {
									var _ref3 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(listener) {
										return regeneratorRuntime.wrap(function _callee2$(_context2) {
											while (1) {
												switch (_context2.prev = _context2.next) {
													case 0:
														if (!anyListeners.has(listener)) {
															_context2.next = 2;
															break;
														}

														return _context2.abrupt('return', listener(eventName, eventData));

													case 2:
													case 'end':
														return _context2.stop();
												}
											}
										}, _callee2, _this2);
									}));

									return function (_x4) {
										return _ref3.apply(this, arguments);
									};
								}())))));

							case 8:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function emit(_x, _x2) {
				return _ref.apply(this, arguments);
			}

			return emit;
		}()
	}, {
		key: 'emitSerial',
		value: function () {
			var _ref4 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(eventName, eventData) {
				var listeners, anyListeners, staticListeners, staticAnyListeners, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, listener, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _listener;

				return regeneratorRuntime.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								assertEventName(eventName);

								listeners = getListeners(this, eventName);
								anyListeners = anyMap.get(this);
								staticListeners = [].concat(toConsumableArray(listeners));
								staticAnyListeners = [].concat(toConsumableArray(anyListeners));
								_context4.next = 7;
								return resolvedPromise;

							case 7:
								/* eslint-disable no-await-in-loop */
								_iteratorNormalCompletion = true;
								_didIteratorError = false;
								_iteratorError = undefined;
								_context4.prev = 10;
								_iterator = staticListeners[Symbol.iterator]();

							case 12:
								if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
									_context4.next = 20;
									break;
								}

								listener = _step.value;

								if (!listeners.has(listener)) {
									_context4.next = 17;
									break;
								}

								_context4.next = 17;
								return listener(eventData);

							case 17:
								_iteratorNormalCompletion = true;
								_context4.next = 12;
								break;

							case 20:
								_context4.next = 26;
								break;

							case 22:
								_context4.prev = 22;
								_context4.t0 = _context4['catch'](10);
								_didIteratorError = true;
								_iteratorError = _context4.t0;

							case 26:
								_context4.prev = 26;
								_context4.prev = 27;

								if (!_iteratorNormalCompletion && _iterator.return) {
									_iterator.return();
								}

							case 29:
								_context4.prev = 29;

								if (!_didIteratorError) {
									_context4.next = 32;
									break;
								}

								throw _iteratorError;

							case 32:
								return _context4.finish(29);

							case 33:
								return _context4.finish(26);

							case 34:
								_iteratorNormalCompletion2 = true;
								_didIteratorError2 = false;
								_iteratorError2 = undefined;
								_context4.prev = 37;
								_iterator2 = staticAnyListeners[Symbol.iterator]();

							case 39:
								if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
									_context4.next = 47;
									break;
								}

								_listener = _step2.value;

								if (!anyListeners.has(_listener)) {
									_context4.next = 44;
									break;
								}

								_context4.next = 44;
								return _listener(eventName, eventData);

							case 44:
								_iteratorNormalCompletion2 = true;
								_context4.next = 39;
								break;

							case 47:
								_context4.next = 53;
								break;

							case 49:
								_context4.prev = 49;
								_context4.t1 = _context4['catch'](37);
								_didIteratorError2 = true;
								_iteratorError2 = _context4.t1;

							case 53:
								_context4.prev = 53;
								_context4.prev = 54;

								if (!_iteratorNormalCompletion2 && _iterator2.return) {
									_iterator2.return();
								}

							case 56:
								_context4.prev = 56;

								if (!_didIteratorError2) {
									_context4.next = 59;
									break;
								}

								throw _iteratorError2;

							case 59:
								return _context4.finish(56);

							case 60:
								return _context4.finish(53);

							case 61:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this, [[10, 22, 26, 34], [27,, 29, 33], [37, 49, 53, 61], [54,, 56, 60]]);
			}));

			function emitSerial(_x5, _x6) {
				return _ref4.apply(this, arguments);
			}

			return emitSerial;
		}()
	}, {
		key: 'onAny',
		value: function onAny(listener) {
			assertListener(listener);
			anyMap.get(this).add(listener);
			return this.offAny.bind(this, listener);
		}
	}, {
		key: 'offAny',
		value: function offAny(listener) {
			assertListener(listener);
			anyMap.get(this).delete(listener);
		}
	}, {
		key: 'clearListeners',
		value: function clearListeners(eventName) {
			if (typeof eventName === 'string') {
				getListeners(this, eventName).clear();
			} else {
				anyMap.get(this).clear();
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = eventsMap.get(this).values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var listeners = _step3.value;

						listeners.clear();
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
			}
		}
	}, {
		key: 'listenerCount',
		value: function listenerCount(eventName) {
			if (typeof eventName === 'string') {
				return anyMap.get(this).size + getListeners(this, eventName).size;
			}

			if (typeof eventName !== 'undefined') {
				assertEventName(eventName);
			}

			var count = anyMap.get(this).size;

			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = eventsMap.get(this).values()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var value = _step4.value;

					count += value.size;
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}

			return count;
		}
	}]);
	return Emittery;
}();

// Subclass used to encourage TS users to type their events.


Emittery.Typed = function (_Emittery) {
	inherits(_class, _Emittery);

	function _class() {
		classCallCheck(this, _class);
		return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	return _class;
}(Emittery);
Object.defineProperty(Emittery.Typed, 'Typed', {
	enumerable: false,
	value: undefined
});

var emittery = Emittery;

var strictUriEncode = function strictUriEncode(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (x) {
    return '%' + x.charCodeAt(0).toString(16).toUpperCase();
  });
};

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [encode(key, options), '[', index, ']'].join('') : [encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('');
			};
		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, options) : [encode(key, options), '[]=', encode(value, options)].join('');
			};
		default:
			return function (key, value) {
				return value === null ? encode(key, options) : [encode(key, options), '=', encode(value, options)].join('');
			};
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

var stringify = function stringify(obj, options) {
	var defaults$$1 = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	options = _extends(defaults$$1, options);

	if (options.sort === false) {
		options.sort = function () {};
	}

	var formatter = encoderForArrayFormat(options);

	return obj ? Object.keys(obj).sort(options.sort).map(function (key) {
		var value = obj[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			var result = [];

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = value.slice()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var value2 = _step2.value;

					if (value2 === undefined) {
						continue;
					}

					result.push(formatter(key, value2, result.length));
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			return result.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var wsp_browser = createCommonjsModule(function (module, exports) {
  !function (t, e) {
    module.exports = e();
  }(commonjsGlobal, function () {
    var t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === 'undefined' ? 'undefined' : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === 'undefined' ? 'undefined' : _typeof(t);
    },
        e = { OPEN: 0, JOIN: 1, LEAVE: 2, JOIN_ACK: 3, JOIN_ERROR: 4, LEAVE_ACK: 5, LEAVE_ERROR: 6, EVENT: 7, PING: 8, PONG: 9 };function o(t, e, o) {
      return o.forEach(function (t) {
        !function (t, e) {
          if (!t || "string" != typeof t) throw new Error(e);
        }(e[t], "expected " + t + " to be a valid string");
      }), { t: t, d: e };
    }var n = {};return Object.keys(e).forEach(function (o) {
      var i = o.toLowerCase().replace(/^\w|_(\w)/g, function (t, e) {
        return e ? e.toUpperCase() : t.toUpperCase();
      });n["is" + i + "Packet"] = function (n) {
        return !(!n || "object" !== (void 0 === n ? "undefined" : t(n)) || n.t !== e[o]);
      };
    }), n.hasTopic = function (t) {
      return !!(t && t.d && t.d.topic);
    }, n.isValidJoinPacket = n.hasTopic, n.isValidLeavePacket = n.hasTopic, n.isValidEventPacket = n.hasTopic, n.joinPacket = function (t) {
      return o(e.JOIN, { topic: t }, ["topic"]);
    }, n.leavePacket = function (t) {
      return o(e.LEAVE, { topic: t }, ["topic"]);
    }, n.joinAckPacket = function (t) {
      return o(e.JOIN_ACK, { topic: t }, ["topic"]);
    }, n.joinErrorPacket = function (t, n) {
      return o(e.JOIN_ERROR, { topic: t, message: n }, ["topic", "message"]);
    }, n.leaveAckPacket = function (t) {
      return o(e.LEAVE_ACK, { topic: t }, ["topic"]);
    }, n.leaveErrorPacket = function (t, n) {
      return o(e.LEAVE_ERROR, { topic: t, message: n }, ["topic", "message"]);
    }, n.eventPacket = function (t, n, i) {
      return o(e.EVENT, { topic: t, event: n, data: i = i || "" }, ["topic", "event"]);
    }, n.pingPacket = function () {
      return { t: e.PING };
    }, n.pongPacket = function () {
      return { t: e.PONG };
    }, _extends({ codes: e }, n);
  });
});

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function ms(val, options) {
  options = options || {};
  var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
  if (type === 'string' && val.length > 0) {
    return parse$1(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse$1(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

var debug = createCommonjsModule(function (module, exports) {
  /**
   * This is the common logic for both the Node.js and web browser
   * implementations of `debug()`.
   *
   * Expose `debug()` as the module.
   */

  exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = ms;

  /**
   * The currently active debug mode names, and names to skip.
   */

  exports.names = [];
  exports.skips = [];

  /**
   * Map of special "%n" handling functions, for the debug "format" argument.
   *
   * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
   */

  exports.formatters = {};

  /**
   * Previous log timestamp.
   */

  var prevTime;

  /**
   * Select a color.
   * @param {String} namespace
   * @return {Number}
   * @api private
   */

  function selectColor(namespace) {
    var hash = 0,
        i;

    for (i in namespace) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return exports.colors[Math.abs(hash) % exports.colors.length];
  }

  /**
   * Create a debugger with the given `namespace`.
   *
   * @param {String} namespace
   * @return {Function}
   * @api public
   */

  function createDebug(namespace) {

    function debug() {
      // disabled?
      if (!debug.enabled) return;

      var self = debug;

      // set `diff` timestamp
      var curr = +new Date();
      var ms$$1 = curr - (prevTime || curr);
      self.diff = ms$$1;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;

      // turn the `arguments` into a proper Array
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }

      args[0] = exports.coerce(args[0]);

      if ('string' !== typeof args[0]) {
        // anything else let's inspect with %O
        args.unshift('%O');
      }

      // apply any `formatters` transformations
      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // if we encounter an escaped % then don't increase the array index
        if (match === '%%') return match;
        index++;
        var formatter = exports.formatters[format];
        if ('function' === typeof formatter) {
          var val = args[index];
          match = formatter.call(self, val);

          // now we need to remove `args[index]` since it's inlined in the `format`
          args.splice(index, 1);
          index--;
        }
        return match;
      });

      // apply env-specific formatting (colors, etc.)
      exports.formatArgs.call(self, args);

      var logFn = debug.log || exports.log || console.log.bind(console);
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = exports.enabled(namespace);
    debug.useColors = exports.useColors();
    debug.color = selectColor(namespace);

    // env-specific initialization logic for debug instances
    if ('function' === typeof exports.init) {
      exports.init(debug);
    }

    return debug;
  }

  /**
   * Enables a debug mode by namespaces. This can include modes
   * separated by a colon and wildcards.
   *
   * @param {String} namespaces
   * @api public
   */

  function enable(namespaces) {
    exports.save(namespaces);

    exports.names = [];
    exports.skips = [];

    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (var i = 0; i < len; i++) {
      if (!split[i]) continue; // ignore empty strings
      namespaces = split[i].replace(/\*/g, '.*?');
      if (namespaces[0] === '-') {
        exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        exports.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }

  /**
   * Disable debug output.
   *
   * @api public
   */

  function disable() {
    exports.enable('');
  }

  /**
   * Returns true if the given mode name is enabled, false otherwise.
   *
   * @param {String} name
   * @return {Boolean}
   * @api public
   */

  function enabled(name) {
    var i, len;
    for (i = 0, len = exports.skips.length; i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = exports.names.length; i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Coerce `val`.
   *
   * @param {Mixed} val
   * @return {Mixed}
   * @api private
   */

  function coerce(val) {
    if (val instanceof Error) return val.stack || val.message;
    return val;
  }
});
var debug_1 = debug.coerce;
var debug_2 = debug.disable;
var debug_3 = debug.enable;
var debug_4 = debug.enabled;
var debug_5 = debug.humanize;
var debug_6 = debug.names;
var debug_7 = debug.skips;
var debug_8 = debug.formatters;

var browser = createCommonjsModule(function (module, exports) {
  /**
   * This is the web browser implementation of `debug()`.
   *
   * Expose `debug()` as the module.
   */

  exports = module.exports = debug;
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

  /**
   * Colors.
   */

  exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

  /**
   * Currently only WebKit-based Web Inspectors, Firefox >= v31,
   * and the Firebug extension (any Firefox version) are known
   * to support "%c" CSS customizations.
   *
   * TODO: add a `localStorage` variable to explicitly enable/disable colors
   */

  function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
      return true;
    }

    // is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
    // double check webkit in userAgent just in case we are in a worker
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }

  /**
   * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
   */

  exports.formatters.j = function (v) {
    try {
      return JSON.stringify(v);
    } catch (err) {
      return '[UnexpectedJSONParseError]: ' + err.message;
    }
  };

  /**
   * Colorize log arguments if enabled.
   *
   * @api public
   */

  function formatArgs(args) {
    var useColors = this.useColors;

    args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

    if (!useColors) return;

    var c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');

    // the final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function (match) {
      if ('%%' === match) return;
      index++;
      if ('%c' === match) {
        // we only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
      }
    });

    args.splice(lastC, 0, c);
  }

  /**
   * Invokes `console.log()` when available.
   * No-op when `console.log` is not a "function".
   *
   * @api public
   */

  function log() {
    // this hackery is required for IE8/9, where
    // the `console.log` function doesn't have 'apply'
    return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }

  /**
   * Save `namespaces`.
   *
   * @param {String} namespaces
   * @api private
   */

  function save(namespaces) {
    try {
      if (null == namespaces) {
        exports.storage.removeItem('debug');
      } else {
        exports.storage.debug = namespaces;
      }
    } catch (e) {}
  }

  /**
   * Load `namespaces`.
   *
   * @return {String} returns the previously persisted debug modes
   * @api private
   */

  function load() {
    var r;
    try {
      r = exports.storage.debug;
    } catch (e) {}

    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
      r = process.env.DEBUG;
    }

    return r;
  }

  /**
   * Enable namespaces listed in `localStorage.debug` initially.
   */

  exports.enable(load());

  /**
   * Localstorage attempts to return the localstorage.
   *
   * This is necessary because safari throws
   * when a user disables cookies/localstorage
   * and you attempt to access it.
   *
   * @return {LocalStorage}
   * @api private
   */

  function localstorage() {
    try {
      return window.localStorage;
    } catch (e) {}
  }
});
var browser_1 = browser.log;
var browser_2 = browser.formatArgs;
var browser_3 = browser.save;
var browser_4 = browser.load;
var browser_5 = browser.useColors;
var browser_6 = browser.storage;
var browser_7 = browser.colors;

var Debug = createCommonjsModule(function (module) {

  /*
   * adonis-websocket-client
   *
   * (c) Harminder Virk <virk@adonisjs.com>
   *
   * For the full copyright and license information, please view the LICENSE
   * file that was distributed with this source code.
  */

  {
    var _Debug = browser;
    _Debug.enable('adonis:*');
    module.exports = _Debug('adonis:websocket');
  }
});

/**
 * Socket class holds details for a single subscription. The instance
 * of this class can be used to exchange messages with the server
 * on a given topic.
 *
 * @class Socket
 */

var Socket = function () {
  function Socket(topic, connection) {
    classCallCheck(this, Socket);

    this.topic = topic;
    this.connection = connection;
    this.emitter = new emittery();
    this._state = 'pending';
    this._emitBuffer = [];
  }

  /**
   * Socket state
   *
   * @attribute state
   *
   * @return {String}
   */


  createClass(Socket, [{
    key: 'joinAck',


    /**
     * Called when subscription is confirmed by the
     * server
     *
     * @method joinAck
     *
     * @return {void}
     */
    value: function joinAck() {
      var _this = this;

      this.state = 'open';
      this.emitter.emit('ready', this);

      {
        Debug('clearing emit buffer for %s topic after subscription ack', this.topic);
      }

      /**
       * Process queued events
       */
      this._emitBuffer.forEach(function (buf) {
        return _this.emit(buf.event, buf.data);
      });
      this._emitBuffer = [];
    }

    /**
     * Called when subscription is rejected by the server
     *
     * @method joinError
     *
     * @param  {Object}  packet
     *
     * @return {void}
     */

  }, {
    key: 'joinError',
    value: function joinError(packet) {
      this.state = 'error';
      this.emitter.emit('error', packet);
      this.serverClose();
    }

    /**
     * Called when subscription close is acknowledged
     * by the server
     *
     * @method leaveAck
     *
     * @return {void}
     */

  }, {
    key: 'leaveAck',
    value: function leaveAck() {
      this.state = 'closed';
      this.serverClose();
    }

    /**
     * This method is invoked, when server rejects to close
     * the subscription. The state of the socket should not
     * change here
     *
     * @method leaveError
     *
     * @param  {Object}   packet
     *
     * @return {void}
     */

  }, {
    key: 'leaveError',
    value: function leaveError(packet) {
      this.emitter.emit('leaveError', packet);
    }

    /* istanbul-ignore */
    /**
     * Add an event listener
     *
     * @method on
     */

  }, {
    key: 'on',
    value: function on() {
      var _emitter;

      (_emitter = this.emitter).on.apply(_emitter, arguments);
    }

    /* istanbul-ignore */
    /**
     * Add an event listener for once only
     *
     * @method once
     */

  }, {
    key: 'once',
    value: function once() {
      var _emitter2;

      (_emitter2 = this.emitter).once.apply(_emitter2, arguments);
    }

    /* istanbul-ignore */
    /**
     * Remove event listener(s)
     *
     * @method off
     */

  }, {
    key: 'off',
    value: function off() {
      var _emitter3;

      (_emitter3 = this.emitter).off.apply(_emitter3, arguments);
    }

    /**
     * Emit message on the subscription
     *
     * @method emit
     *
     * @param  {String} event
     * @param  {Mixed} data
     *
     * @return {void}
     */

  }, {
    key: 'emit',
    value: function emit(event, data) {
      if (this.state === 'pending') {
        this._emitBuffer.push({ event: event, data: data });
        return;
      }

      this.connection.sendEvent(this.topic, event, data);
    }

    /**
     * Closes the connection and removes all existing
     * listeners
     *
     * @method serverClose
     *
     * @return {Promise}
     */

  }, {
    key: 'serverClose',
    value: function serverClose() {
      var _this2 = this;

      return this.emitter.emit('close', this).then(function () {
        _this2._emitBuffer = [];
        _this2.emitter.clearListeners();
      }).catch(function () {
        _this2._emitBuffer = [];
        _this2.emitter.clearListeners();
      });
    }

    /**
     * Invoked when a new event is received from the server
     *
     * @method serverEvent
     *
     * @param  {String}    options.event
     * @param  {Mixed}    options.data
     *
     * @return {void}
     */

  }, {
    key: 'serverEvent',
    value: function serverEvent(_ref) {
      var event = _ref.event,
          data = _ref.data;

      this.emitter.emit(event, data);
    }

    /**
     * Received error on connection
     *
     * @method serverError
     *
     * @return {void}
     */

  }, {
    key: 'serverError',
    value: function serverError() {
      this.state = 'error';
    }

    /**
     * Sends the request on server to close the subscription, we
     * have to wait for acknowledgment too
     *
     * @method close
     *
     * @return {void}
     */

  }, {
    key: 'close',
    value: function close() {
      this.state = 'closing';
      {
        Debug('closing subscription for %s topic with server', this.topic);
      }
      this.connection.sendPacket(wsp_browser.leavePacket(this.topic));
    }

    /**
     * Forcefully terminating the subscription
     *
     * @method terminate
     *
     * @return {void}
     */

  }, {
    key: 'terminate',
    value: function terminate() {
      this.leaveAck();
    }
  }, {
    key: 'state',
    get: function get$$1() {
      return this._state;
    }

    /**
     * Update socket state
     */
    ,
    set: function set$$1(state) {
      if (!this.constructor.states.indexOf(state) === -1) {
        throw new Error(state + ' is not a valid socket state');
      }
      this._state = state;
    }

    /**
     * A static array of internal states
     *
     * @method states
     *
     * @return {Array}
     */

  }], [{
    key: 'states',
    get: function get$$1() {
      return ['pending', 'open', 'closed', 'closing', 'error'];
    }
  }]);
  return Socket;
}();

/**
 * adonis-websocket-client
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

/**
 * The default encoder to encode packets.
 */

var JsonEncoder = {
  name: 'json',
  /**
   * Encode a value by stringifying it
   *
   * @method encode
   *
   * @param  {Object}   payload
   * @param  {Function} callback
   *
   * @return {void}
   */
  encode: function encode(payload, callback) {
    var encoded = null;

    try {
      encoded = JSON.stringify(payload);
    } catch (error) {
      return callback(error);
    }
    callback(null, encoded);
  },


  /**
   * Decode value by parsing it
   *
   * @method decode
   *
   * @param  {String}   payload
   * @param  {Function} callback
   *
   * @return {void}
   */
  decode: function decode(payload, callback) {
    var decoded = null;

    try {
      decoded = JSON.parse(payload);
    } catch (error) {
      return callback(error);
    }
    callback(null, decoded);
  }
};

/**
 * Returns the ws protocol based upon HTTP or HTTPS
 *
 * @returns {String}
 *
 */
var wsProtocol = window.location.protocol === 'https:' ? 'wss' : 'ws';

/**
 * Connection class is used to make a TCP/Socket connection
 * with the server. It relies on Native Websocket browser
 * support.
 *
 * @class Connection
 *
 * @param {String} url
 * @param {Object} options
 */

var Connection = function (_Emitter) {
  inherits(Connection, _Emitter);

  function Connection(url, options) {
    classCallCheck(this, Connection);

    var _this = possibleConstructorReturn(this, (Connection.__proto__ || Object.getPrototypeOf(Connection)).call(this));

    url = url || wsProtocol + '://' + window.location.host;

    /**
     * Connection options
     *
     * @type {Object}
     */
    _this.options = _extends({
      path: 'adonis-ws',
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
      query: null,
      encoder: JsonEncoder
    }, options);

    {
      Debug('connection options %o', _this.options);
    }

    /**
     * The state connection is in
     *
     * @type {String}
     */
    _this._connectionState = 'idle';

    /**
     * Number of reconnection attempts being made
     *
     * @type {Number}
     */
    _this._reconnectionAttempts = 0;

    /**
     * All packets are sent in sequence to the server. So we need to
     * maintain a queue and process one at a time
     *
     * @type {Array}
     */
    _this._packetsQueue = [];

    /**
     * Whether or not the queue is in process
     *
     * @type {Boolean}
     */
    _this._processingQueue = false;

    /**
     * As per Adonis protocol, the client must ping
     * the server after x interval
     *
     * @type {Timer}
     */
    _this._pingTimer = null;

    /**
     * Extended query is merged with the query params
     * user pass
     *
     * @type {Object}
     */
    _this._extendedQuery = {};

    /**
     * Base URL for the websocket connection
     *
     * @type {String}
     */
    _this._url = url.replace(/\/$/, '') + '/' + _this.options.path;

    /**
     * Subscriptions for a single connection
     *
     * @type {Object}
     */
    _this.subscriptions = {};

    /**
     * Handler called when `close` is emitted from the
     * subscription
     */
    _this.removeSubscription = function (_ref) {
      var topic = _ref.topic;

      delete _this.subscriptions[topic];
    };
    return _this;
  }

  /**
   * Computed value to decide, whether or not to reconnect
   *
   * @method shouldReconnect
   *
   * @return {Boolean}
   */


  createClass(Connection, [{
    key: '_cleanup',


    /**
     * Clean references
     *
     * @method _cleanup
     *
     * @return {void}
     *
     * @private
     */
    value: function _cleanup() {
      clearInterval(this._pingTimer);
      this.ws = null;
      this._pingTimer = null;
    }

    /**
     * Calls a callback passing subscription to it
     *
     * @method _subscriptionsIterator
     *
     * @param  {Function}             callback
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_subscriptionsIterator',
    value: function _subscriptionsIterator(callback) {
      var _this2 = this;

      Object.keys(this.subscriptions).forEach(function (sub) {
        return callback(_this2.subscriptions[sub], sub);
      });
    }

    /**
     * Calls the callback when there is a subscription for
     * the topic mentioned in the packet
     *
     * @method _ensureSubscription
     *
     * @param  {Object}            packet
     * @param  {Function}          cb
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_ensureSubscription',
    value: function _ensureSubscription(packet, cb) {
      var socket = this.getSubscription(packet.d.topic);

      if (!socket) {
        {
          Debug('cannot consume packet since %s topic has no active subscription %j', packet.d.topic, packet);
        }
        return;
      }

      cb(socket, packet);
    }

    /**
     * Process the packets queue by sending one packet at a time
     *
     * @method _processQueue
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_processQueue',
    value: function _processQueue() {
      var _this3 = this;

      if (this._processingQueue || !this._packetsQueue.length) {
        return;
      }

      /**
       * Turn on the processing flag
       *
       * @type {Boolean}
       */
      this._processingQueue = true;

      this.options.encoder.encode(this._packetsQueue.shift(), function (error, payload) {
        if (error) {
          {
            Debug('encode error %j', error);
          }
          return;
        }
        _this3.write(payload);

        /**
         * Turn off the processing flag and re call the processQueue to send
         * the next message
         *
         * @type {Boolean}
         */
        _this3._processingQueue = false;
        _this3._processQueue();
      });
    }

    /**
     * As soon as connection is ready, we start listening
     * for new message
     *
     * @method _onOpen
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_onOpen',
    value: function _onOpen() {
      {
        Debug('opened');
      }
    }

    /**
     * When received connection error
     *
     * @method _onError
     *
     * @param  {Event} event
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_onError',
    value: function _onError(event) {
      {
        Debug('error %O', event);
      }

      this._subscriptionsIterator(function (subscription) {
        return subscription.serverError();
      });
      this.emit('error', event);
    }

    /**
     * Initiates reconnect with the server by moving
     * all subscriptions to pending state
     *
     * @method _reconnect
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_reconnect',
    value: function _reconnect() {
      var _this4 = this;

      this._reconnectionAttempts++;

      this.emit('reconnect', this._reconnectionAttempts);

      setTimeout(function () {
        _this4._connectionState = 'reconnect';
        _this4.connect();
      }, this.options.reconnectionDelay * this._reconnectionAttempts);
    }

    /**
     * When connection closes
     *
     * @method _onClose
     *
     * @param  {Event} event
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_onClose',
    value: function _onClose(event) {
      var _this5 = this;

      {
        Debug('closing from %s state', this._connectionState);
      }

      this._cleanup();

      /**
       * Force subscriptions to terminate
       */
      this._subscriptionsIterator(function (subscription) {
        return subscription.terminate();
      });

      this.emit('close', this).then(function () {
        _this5.shouldReconnect ? _this5._reconnect() : _this5.clearListeners();
      }).catch(function () {
        _this5.shouldReconnect ? _this5._reconnect() : _this5.clearListeners();
      });
    }

    /**
     * When a new message was received
     *
     * @method _onMessage
     *
     * @param  {Event}   event
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_onMessage',
    value: function _onMessage(event) {
      var _this6 = this;

      this.options.encoder.decode(event.data, function (decodeError, packet) {
        if (decodeError) {
          {
            Debug('packet dropped, decode error %o', decodeError);
          }
          return;
        }
        _this6._handleMessage(packet);
      });
    }

    /**
     * Handles the message packet based upon it's type
     *
     * @method _handleMessage
     *
     * @param  {Object}       packet
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_handleMessage',
    value: function _handleMessage(packet) {
      if (wsp_browser.isOpenPacket(packet)) {
        {
          Debug('open packet');
        }
        this._handleOpen(packet);
        return;
      }

      if (wsp_browser.isJoinAckPacket(packet)) {
        {
          Debug('join ack packet');
        }
        this._handleJoinAck(packet);
        return;
      }

      if (wsp_browser.isJoinErrorPacket(packet)) {
        {
          Debug('join error packet');
        }
        this._handleJoinError(packet);
        return;
      }

      if (wsp_browser.isLeaveAckPacket(packet)) {
        {
          Debug('leave ack packet');
        }
        this._handleLeaveAck(packet);
        return;
      }

      if (wsp_browser.isLeaveErrorPacket(packet)) {
        {
          Debug('leave error packet');
        }
        this._handleLeaveError(packet);
        return;
      }

      if (wsp_browser.isLeavePacket(packet)) {
        {
          Debug('leave packet');
        }
        this._handleServerLeave(packet);
        return;
      }

      if (wsp_browser.isEventPacket(packet)) {
        {
          Debug('event packet');
        }
        this._handleEvent(packet);
        return;
      }

      if (wsp_browser.isPongPacket(packet)) {
        {
          Debug('pong packet');
        }
        return;
      }

      {
        Debug('invalid packet type %d', packet.t);
      }
    }

    /**
     * Emits the open emit and send subscription packets
     * for pre-existing subscriptions
     *
     * @method _handleOpen
     *
     * @param  {Object}    packet
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_handleOpen',
    value: function _handleOpen(packet) {
      var _this7 = this;

      this._connectionState = 'open';
      this.emit('open', packet.d);

      /**
       * Setup a timer to ping the server, telling
       * client is awake
       */
      this._pingTimer = setInterval(function () {
        _this7.sendPacket(wsp_browser.pingPacket());
      }, packet.d.clientInterval);

      /**
       * Sending packets to make pending subscriptions
       */
      {
        Debug('processing pre connection subscriptions %o', Object.keys(this.subscriptions));
      }

      this._subscriptionsIterator(function (subscription) {
        _this7._sendSubscriptionPacket(subscription.topic);
      });
    }

    /**
     * Handles the join acknowledgement for a subscription
     *
     * @method _handleJoinAck
     *
     * @param  {Object}       packet
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_handleJoinAck',
    value: function _handleJoinAck(packet) {
      this._ensureSubscription(packet, function (socket) {
        return socket.joinAck();
      });
    }

    /**
     * Handles the join error for a subscription
     *
     * @method _handleJoinError
     *
     * @param  {Object}         packet
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_handleJoinError',
    value: function _handleJoinError(packet) {
      this._ensureSubscription(packet, function (socket, packet) {
        return socket.joinError(packet.d);
      });
    }

    /**
     * Acknowledges the subscription leave
     *
     * @method _handleLeaveAck
     *
     * @param  {Object}        packet
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_handleLeaveAck',
    value: function _handleLeaveAck(packet) {
      this._ensureSubscription(packet, function (socket) {
        return socket.leaveAck();
      });
    }

    /**
     * Handles leave error for a subscription
     *
     * @method _handleLeaveError
     *
     * @param  {Object}          packet
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_handleLeaveError',
    value: function _handleLeaveError(packet) {
      this._ensureSubscription(packet, function (socket, packet) {
        return socket.leaveError(packet.d);
      });
    }

    /**
     * Handles when server initiates the subscription leave
     *
     * @method _handleServerLeave
     *
     * @param  {Object}           packet
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_handleServerLeave',
    value: function _handleServerLeave(packet) {
      this._ensureSubscription(packet, function (socket, packet) {
        return socket.leaveAck();
      });
    }

    /**
     * Handles the event packet for a subscription
     *
     * @method _handleEvent
     *
     * @param  {Object}     packet
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_handleEvent',
    value: function _handleEvent(packet) {
      this._ensureSubscription(packet, function (socket, packet) {
        return socket.serverEvent(packet.d);
      });
    }

    /**
     * Sends the subscription packet for a given topic
     *
     * @method sendSubscriptionPacket
     *
     * @param  {String}               topic
     *
     * @return {void}
     *
     * @private
     */

  }, {
    key: '_sendSubscriptionPacket',
    value: function _sendSubscriptionPacket(topic) {
      {
        Debug('initiating subscription for %s topic with server', topic);
      }
      this.sendPacket(wsp_browser.joinPacket(topic));
    }

    /**
     * Instantiate the websocket connection
     *
     * @method connect
     *
     * @return {void}
     */

  }, {
    key: 'connect',
    value: function connect() {
      var _this8 = this;

      var query = stringify(_extends({}, this.options.query, this._extendedQuery));
      var url = query ? this._url + '?' + query : this._url;

      {
        Debug('creating socket connection on %s url', url);
      }

      this.ws = new window.WebSocket(url);
      this.ws.onclose = function (event) {
        return _this8._onClose(event);
      };
      this.ws.onerror = function (event) {
        return _this8._onError(event);
      };
      this.ws.onopen = function (event) {
        return _this8._onOpen(event);
      };
      this.ws.onmessage = function (event) {
        return _this8._onMessage(event);
      };

      return this;
    }

    /**
     * Writes the payload on the open connection
     *
     * @method write
     *
     * @param  {String} payload
     *
     * @return {void}
     */

  }, {
    key: 'write',
    value: function write(payload) {
      if (this.ws.readyState !== window.WebSocket.OPEN) {
        {
          Debug('connection is not in open state, current state %s', this.ws.readyState);
        }
        return;
      }

      this.ws.send(payload);
    }

    /**
     * Sends a packet by encoding it first
     *
     * @method _sendPacket
     *
     * @param  {Object}    packet
     *
     * @return {void}
     */

  }, {
    key: 'sendPacket',
    value: function sendPacket(packet) {
      this._packetsQueue.push(packet);
      this._processQueue();
    }

    /**
     * Returns the subscription instance for a given topic
     *
     * @method getSubscription
     *
     * @param  {String}        topic
     *
     * @return {Socket}
     */

  }, {
    key: 'getSubscription',
    value: function getSubscription(topic) {
      return this.subscriptions[topic];
    }

    /**
     * Returns a boolean telling, whether connection has
     * a subscription for a given topic or not
     *
     * @method hasSubcription
     *
     * @param  {String}       topic
     *
     * @return {Boolean}
     */

  }, {
    key: 'hasSubcription',
    value: function hasSubcription(topic) {
      return !!this.getSubscription(topic);
    }

    /**
     * Create a new subscription with the server
     *
     * @method subscribe
     *
     * @param  {String}  topic
     *
     * @return {Socket}
     */

  }, {
    key: 'subscribe',
    value: function subscribe(topic) {
      if (!topic || typeof topic !== 'string') {
        throw new Error('subscribe method expects topic to be a valid string');
      }

      if (this.subscriptions[topic]) {
        throw new Error('Cannot subscribe to same topic twice. Instead use getSubscription');
      }

      var socket = new Socket(topic, this);
      socket.on('close', this.removeSubscription);

      /**
       * Storing reference to the socket
       */
      this.subscriptions[topic] = socket;

      /**
       * Sending join request to the server, the subscription will
       * be considered ready, once server acknowledges it
       */
      if (this._connectionState === 'open') {
        this._sendSubscriptionPacket(topic);
      }

      return socket;
    }

    /**
     * Sends event for a given topic
     *
     * @method sendEvent
     *
     * @param  {String}  topic
     * @param  {String}  event
     * @param  {Mixed}  data
     *
     * @return {void}
     *
     * @throws {Error} If topic or event are not passed
     * @throws {Error} If there is no active subscription for the given topic
     */

  }, {
    key: 'sendEvent',
    value: function sendEvent(topic, event, data) {
      if (!topic || !event) {
        throw new Error('topic and event name is required to call sendEvent method');
      }

      /**
       * Make sure there is an active subscription for the topic. Though server will
       * bounce the message, there is no point in hammering it
       */
      var subscription = this.getSubscription(topic);
      if (!subscription) {
        throw new Error('There is no active subscription for ' + topic + ' topic');
      }

      /**
       * If subscription state is not open, then we should not publish
       * messages.
       *
       * The reason we have this check on connection and not socket,
       * is coz we don't want anyone to use the connection object
       * and send packets, even when subscription is closed.
       */
      if (subscription.state !== 'open') {
        throw new Error('Cannot emit since subscription socket is in ' + this.state + ' state');
      }

      {
        Debug('sending event on %s topic', topic);
      }

      this.sendPacket(wsp_browser.eventPacket(topic, event, data));
    }

    /**
     * Use JWT token to authenticate the user
     *
     * @method withJwtToken
     *
     * @param {String} token
     *
     * @chainable
     */

  }, {
    key: 'withJwtToken',
    value: function withJwtToken(token) {
      this._extendedQuery.token = token;
      return this;
    }

    /**
     * Use basic auth credentials to login the user
     *
     * @method withBasicAuth
     *
     * @param  {String}  username
     * @param  {String}  password
     *
     * @chainable
     */

  }, {
    key: 'withBasicAuth',
    value: function withBasicAuth(username, password) {
      this._extendedQuery.basic = window.btoa(username + ':' + password);
      return this;
    }

    /**
     * Use personal API token to authenticate the user
     *
     * @method withApiToken
     *
     * @param {String} token
     *
     * @return {String}
     */

  }, {
    key: 'withApiToken',
    value: function withApiToken(token) {
      this._extendedQuery.token = token;
      return this;
    }

    /**
     * Forcefully close the connection
     *
     * @method close
     *
     * @return {void}
     */

  }, {
    key: 'close',
    value: function close() {
      this._connectionState = 'terminated';
      this.ws.close();
    }
  }, {
    key: 'shouldReconnect',
    get: function get$$1() {
      return this._connectionState !== 'terminated' && this.options.reconnection && this.options.reconnectionAttempts > this._reconnectionAttempts;
    }
  }]);
  return Connection;
}(emittery);

function index (url, options) {
  return new Connection(url, options);
}

return index;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/axios/node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./resources/css/app.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./resources/css/app.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap);", ""]);
// Module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * 1. Prevent padding and border from affecting element width\n * https://goo.gl/pYtbK7\n * 2. Change the default font family in all browsers (opinionated)\n */\n\nhtml {\n  box-sizing: border-box; /* 1 */\n  font-family: sans-serif; /* 2 */\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background: transparent;\n  padding: 0;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the system font stack as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n * to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Allow adding a border to an element by just adding a border-width.\n *\n * By default, the way the browser specifies that an element should have no\n * border is by setting it's border-style to `none` in the user-agent\n * stylesheet.\n *\n * In order to easily add borders to elements by just setting the `border-width`\n * property, we change the default border-style for all elements to `solid`, and\n * use border-width to hide them instead. This way our `border` utilities only\n * need to set the `border-width` property instead of the entire `border`\n * shorthand, making our border utilities much more straightforward to compose.\n *\n * https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n*::before,\n*::after {\n  border-width: 0;\n  border-style: solid;\n  border-color: hsl(210, 16%, 82%);\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-webkit-input-placeholder,\ntextarea::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.5;\n}\n\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  color: inherit;\n  opacity: 0.5;\n}\n\ninput:-ms-input-placeholder,\ntextarea:-ms-input-placeholder {\n  color: inherit;\n  opacity: 0.5;\n}\n\ninput::-ms-input-placeholder,\ntextarea::-ms-input-placeholder {\n  color: inherit;\n  opacity: 0.5;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  color: inherit;\n  opacity: 0.5;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their instrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n.container{\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 1.5rem;\n  padding-left: 1.5rem;\n}\n\n@media (min-width: 640px){\n  .container{\n    max-width: 640px;\n  }\n}\n\n@media (min-width: 768px){\n  .container{\n    max-width: 768px;\n  }\n}\n\n@media (min-width: 1024px){\n  .container{\n    max-width: 1024px;\n  }\n}\n\n@media (min-width: 1280px){\n  .container{\n    max-width: 1280px;\n  }\n}\n\n.form-input{\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  border-color: #e2e8f0;\n  border-width: 1px;\n  border-radius: 0.25rem;\n  padding-top: 0.5rem;\n  padding-right: 0.75rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n}\n\n.form-input::-webkit-input-placeholder{\n  color: #a0aec0;\n  opacity: 1;\n}\n\n.form-input::-moz-placeholder{\n  color: #a0aec0;\n  opacity: 1;\n}\n\n.form-input:-ms-input-placeholder{\n  color: #a0aec0;\n  opacity: 1;\n}\n\n.form-input::-ms-input-placeholder{\n  color: #a0aec0;\n  opacity: 1;\n}\n\n.form-input::placeholder{\n  color: #a0aec0;\n  opacity: 1;\n}\n\n.form-input:focus{\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  border-color: #63b3ed;\n}\n\n.form-textarea{\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  border-color: #e2e8f0;\n  border-width: 1px;\n  border-radius: 0.25rem;\n  padding-top: 0.5rem;\n  padding-right: 0.75rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n}\n\n.form-textarea::-webkit-input-placeholder{\n  color: #a0aec0;\n  opacity: 1;\n}\n\n.form-textarea::-moz-placeholder{\n  color: #a0aec0;\n  opacity: 1;\n}\n\n.form-textarea:-ms-input-placeholder{\n  color: #a0aec0;\n  opacity: 1;\n}\n\n.form-textarea::-ms-input-placeholder{\n  color: #a0aec0;\n  opacity: 1;\n}\n\n.form-textarea::placeholder{\n  color: #a0aec0;\n  opacity: 1;\n}\n\n.form-textarea:focus{\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  border-color: #63b3ed;\n}\n\n.form-multiselect{\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  border-color: #e2e8f0;\n  border-width: 1px;\n  border-radius: 0.25rem;\n  padding-top: 0.5rem;\n  padding-right: 0.75rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n}\n\n.form-multiselect:focus{\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  border-color: #63b3ed;\n}\n\n.form-select{\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e\");\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  -webkit-print-color-adjust: exact;\n          color-adjust: exact;\n  background-repeat: no-repeat;\n  background-color: #fff;\n  border-color: #e2e8f0;\n  border-width: 1px;\n  border-radius: 0.25rem;\n  padding-top: 0.5rem;\n  padding-right: 2.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  background-position: right 0.5rem center;\n  background-size: 1.5em 1.5em;\n}\n\n.form-select::-ms-expand{\n  color: #a0aec0;\n  border: none;\n}\n\n@media not print{\n  .form-select::-ms-expand{\n    display: none;\n  }\n}\n\n@media print and (-ms-high-contrast: active), print and (-ms-high-contrast: none){\n  .form-select{\n    padding-right: 0.75rem;\n  }\n}\n\n.form-select:focus{\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  border-color: #63b3ed;\n}\n\n.form-checkbox{\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  -webkit-print-color-adjust: exact;\n          color-adjust: exact;\n  display: inline-block;\n  vertical-align: middle;\n  background-origin: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  flex-shrink: 0;\n  height: 1em;\n  width: 1em;\n  color: #4299e1;\n  background-color: #fff;\n  border-color: #e2e8f0;\n  border-width: 1px;\n  border-radius: 0.25rem;\n}\n\n.form-checkbox:checked{\n  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e\");\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n@media not print{\n  .form-checkbox::-ms-check{\n    border-width: 1px;\n    color: transparent;\n    background: inherit;\n    border-color: inherit;\n    border-radius: inherit;\n  }\n}\n\n.form-checkbox:focus{\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  border-color: #63b3ed;\n}\n\n.form-radio{\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  -webkit-print-color-adjust: exact;\n          color-adjust: exact;\n  display: inline-block;\n  vertical-align: middle;\n  background-origin: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  flex-shrink: 0;\n  border-radius: 100%;\n  height: 1em;\n  width: 1em;\n  color: #4299e1;\n  background-color: #fff;\n  border-color: #e2e8f0;\n  border-width: 1px;\n}\n\n.form-radio:checked{\n  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\");\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n@media not print{\n  .form-radio::-ms-check{\n    border-width: 1px;\n    color: transparent;\n    background: inherit;\n    border-color: inherit;\n    border-radius: inherit;\n  }\n}\n\n.form-radio:focus{\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  border-color: #63b3ed;\n}\n\nhtml, body {\n  font-family: Source Sans Pro, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  background-color: hsl(210, 24%, 16%);\n}\n\nbody {\n  color: #fff;\n}\n\nh2, h3, h4, h5, h6 {\n  color: hsl(221, 68%, 93%);\n  margin-bottom: 1.25rem;\n  line-height: 1;\n}\n\nh1 {\n  font-size: 2.25rem;\n}\n\nh2 {\n  font-size: 1.875rem;\n  padding-bottom: 1rem;\n  border-bottom-width: 1px;\n  border-color: hsl(221, 68%, 93%);\n}\n\nh3 {\n  font-size: 1.5rem;\n  color: hsl(210, 24%, 16%);\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.btn {\n  display: inline-block;\n  background-color: #fff;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  border-color: hsl(210, 16%, 82%);\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: hsl(209, 20%, 25%);\n  transition: background-color 250ms ease,\n    color 250ms ease,\n    box-shadow 250ms ease,\n    border-color 250ms ease;\n}\n\n.btn:hover {\n  background-color: hsl(214, 15%, 91%);\n}\n\n.btn-primary {\n  border-color: hsl(232, 51%, 36%);\n  background-color: hsl(227, 50%, 59%);\n  color: #fff;\n}\n\n.btn-primary:hover {\n  background-color: hsl(230, 49%, 41%);\n}\n\n.notification {\n  width: 100%;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  background-color: #fff;\n  border-left-width: 4px;\n  border-color: #fff;\n  border-radius: 0.25rem;\n  padding: 0.5rem;\n  color: hsl(210, 24%, 16%);\n}\n\n.notification.info {\n  background-color: hsl(195, 100%, 95%);\n  color: hsl(203, 87%, 34%);\n  border-color: hsl(203, 87%, 34%);\n}\n\n.notification.error {\n  background-color: hsl(360, 100%, 95%);\n  color: hsl(350, 94%, 28%);\n  border-color: hsl(350, 94%, 28%);\n}\n\n.appearance-none{\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.bg-fixed{\n  background-attachment: fixed;\n}\n\n.bg-local{\n  background-attachment: local;\n}\n\n.bg-scroll{\n  background-attachment: scroll;\n}\n\n.bg-transparent{\n  background-color: transparent;\n}\n\n.bg-black{\n  background-color: #000;\n}\n\n.bg-white{\n  background-color: #fff;\n}\n\n.bg-gray-100{\n  background-color: hsl(216, 33%, 97%);\n}\n\n.bg-gray-200{\n  background-color: hsl(214, 15%, 91%);\n}\n\n.bg-gray-300{\n  background-color: hsl(210, 16%, 82%);\n}\n\n.bg-gray-400{\n  background-color: hsl(211, 13%, 65%);\n}\n\n.bg-gray-500{\n  background-color: hsl(211, 10%, 53%);\n}\n\n.bg-gray-600{\n  background-color: hsl(211, 12%, 43%);\n}\n\n.bg-gray-700{\n  background-color: hsl(209, 14%, 37%);\n}\n\n.bg-gray-800{\n  background-color: hsl(209, 18%, 30%);\n}\n\n.bg-gray-900{\n  background-color: hsl(209, 20%, 25%);\n}\n\n.bg-gray-1000{\n  background-color: hsl(210, 24%, 16%);\n}\n\n.bg-red-100{\n  background-color: hsl(360, 100%, 95%);\n}\n\n.bg-red-200{\n  background-color: hsl(360, 100%, 87%);\n}\n\n.bg-red-300{\n  background-color: hsl(360, 100%, 80%);\n}\n\n.bg-red-400{\n  background-color: hsl(360, 91%, 69%);\n}\n\n.bg-red-500{\n  background-color: hsl(360, 83%, 62%);\n}\n\n.bg-red-600{\n  background-color: hsl(356, 75%, 53%);\n}\n\n.bg-red-700{\n  background-color: hsl(354, 85%, 44%);\n}\n\n.bg-red-800{\n  background-color: hsl(352, 90%, 35%);\n}\n\n.bg-red-900{\n  background-color: hsl(350, 94%, 28%);\n}\n\n.bg-red-1000{\n  background-color: hsl(348, 94%, 20%);\n}\n\n.bg-orange-100{\n  background-color: #fffaf0;\n}\n\n.bg-orange-200{\n  background-color: #feebc8;\n}\n\n.bg-orange-300{\n  background-color: #fbd38d;\n}\n\n.bg-orange-400{\n  background-color: #f6ad55;\n}\n\n.bg-orange-500{\n  background-color: #ed8936;\n}\n\n.bg-orange-600{\n  background-color: #dd6b20;\n}\n\n.bg-orange-700{\n  background-color: #c05621;\n}\n\n.bg-orange-800{\n  background-color: #9c4221;\n}\n\n.bg-orange-900{\n  background-color: #7b341e;\n}\n\n.bg-yellow-100{\n  background-color: hsl(15, 86%, 30%);\n}\n\n.bg-yellow-200{\n  background-color: hsl(22, 82%, 39%);\n}\n\n.bg-yellow-300{\n  background-color: hsl(29, 80%, 44%);\n}\n\n.bg-yellow-400{\n  background-color: hsl(36, 77%, 49%);\n}\n\n.bg-yellow-500{\n  background-color: hsl(42, 87%, 55%);\n}\n\n.bg-yellow-600{\n  background-color: hsl(44, 92%, 63%);\n}\n\n.bg-yellow-700{\n  background-color: hsl(48, 94%, 68%);\n}\n\n.bg-yellow-800{\n  background-color: hsl(48, 95%, 76%);\n}\n\n.bg-yellow-900{\n  background-color: hsl(48, 100%, 88%);\n}\n\n.bg-yellow-1000{\n  background-color: hsl(49, 100%, 96%);\n}\n\n.bg-green-100{\n  background-color: #f0fff4;\n}\n\n.bg-green-200{\n  background-color: #c6f6d5;\n}\n\n.bg-green-300{\n  background-color: #9ae6b4;\n}\n\n.bg-green-400{\n  background-color: #68d391;\n}\n\n.bg-green-500{\n  background-color: #48bb78;\n}\n\n.bg-green-600{\n  background-color: #38a169;\n}\n\n.bg-green-700{\n  background-color: #2f855a;\n}\n\n.bg-green-800{\n  background-color: #276749;\n}\n\n.bg-green-900{\n  background-color: #22543d;\n}\n\n.bg-teal-100{\n  background-color: hsl(170, 97%, 15%);\n}\n\n.bg-teal-200{\n  background-color: hsl(168, 80%, 23%);\n}\n\n.bg-teal-300{\n  background-color: hsl(166, 72%, 28%);\n}\n\n.bg-teal-400{\n  background-color: hsl(164, 71%, 34%);\n}\n\n.bg-teal-500{\n  background-color: hsl(162, 63%, 41%);\n}\n\n.bg-teal-600{\n  background-color: hsl(160, 51%, 49%);\n}\n\n.bg-teal-700{\n  background-color: hsl(158, 58%, 62%);\n}\n\n.bg-teal-800{\n  background-color: hsl(156, 73%, 74%);\n}\n\n.bg-teal-900{\n  background-color: hsl(154, 75%, 87%);\n}\n\n.bg-teal-1000{\n  background-color: hsl(152, 68%, 96%);\n}\n\n.bg-blue-100{\n  background-color: hsl(195, 100%, 95%);\n}\n\n.bg-blue-200{\n  background-color: hsl(195, 100%, 85%);\n}\n\n.bg-blue-300{\n  background-color: hsl(195, 97%, 75%);\n}\n\n.bg-blue-400{\n  background-color: hsl(196, 94%, 67%);\n}\n\n.bg-blue-500{\n  background-color: hsl(197, 92%, 61%);\n}\n\n.bg-blue-600{\n  background-color: hsl(199, 84%, 55%);\n}\n\n.bg-blue-700{\n  background-color: hsl(201, 79%, 46%);\n}\n\n.bg-blue-800{\n  background-color: hsl(202, 83%, 41%);\n}\n\n.bg-blue-900{\n  background-color: hsl(203, 87%, 34%);\n}\n\n.bg-blue-1000{\n  background-color: hsl(204, 96%, 27%);\n}\n\n.bg-indigo-100{\n  background-color: hsl(221, 68%, 93%);\n}\n\n.bg-indigo-200{\n  background-color: hsl(221, 78%, 86%);\n}\n\n.bg-indigo-300{\n  background-color: hsl(224, 67%, 76%);\n}\n\n.bg-indigo-400{\n  background-color: hsl(225, 57%, 67%);\n}\n\n.bg-indigo-500{\n  background-color: hsl(227, 50%, 59%);\n}\n\n.bg-indigo-600{\n  background-color: hsl(227, 42%, 51%);\n}\n\n.bg-indigo-700{\n  background-color: hsl(228, 45%, 45%);\n}\n\n.bg-indigo-800{\n  background-color: hsl(230, 49%, 41%);\n}\n\n.bg-indigo-900{\n  background-color: hsl(232, 51%, 36%);\n}\n\n.bg-indigo-1000{\n  background-color: hsl(234, 62%, 26%);\n}\n\n.bg-purple-100{\n  background-color: #faf5ff;\n}\n\n.bg-purple-200{\n  background-color: #e9d8fd;\n}\n\n.bg-purple-300{\n  background-color: #d6bcfa;\n}\n\n.bg-purple-400{\n  background-color: #b794f4;\n}\n\n.bg-purple-500{\n  background-color: #9f7aea;\n}\n\n.bg-purple-600{\n  background-color: #805ad5;\n}\n\n.bg-purple-700{\n  background-color: #6b46c1;\n}\n\n.bg-purple-800{\n  background-color: #553c9a;\n}\n\n.bg-purple-900{\n  background-color: #44337a;\n}\n\n.bg-pink-100{\n  background-color: #fff5f7;\n}\n\n.bg-pink-200{\n  background-color: #fed7e2;\n}\n\n.bg-pink-300{\n  background-color: #fbb6ce;\n}\n\n.bg-pink-400{\n  background-color: #f687b3;\n}\n\n.bg-pink-500{\n  background-color: #ed64a6;\n}\n\n.bg-pink-600{\n  background-color: #d53f8c;\n}\n\n.bg-pink-700{\n  background-color: #b83280;\n}\n\n.bg-pink-800{\n  background-color: #97266d;\n}\n\n.bg-pink-900{\n  background-color: #702459;\n}\n\n.hover\\:bg-transparent:hover{\n  background-color: transparent;\n}\n\n.hover\\:bg-black:hover{\n  background-color: #000;\n}\n\n.hover\\:bg-white:hover{\n  background-color: #fff;\n}\n\n.hover\\:bg-gray-100:hover{\n  background-color: hsl(216, 33%, 97%);\n}\n\n.hover\\:bg-gray-200:hover{\n  background-color: hsl(214, 15%, 91%);\n}\n\n.hover\\:bg-gray-300:hover{\n  background-color: hsl(210, 16%, 82%);\n}\n\n.hover\\:bg-gray-400:hover{\n  background-color: hsl(211, 13%, 65%);\n}\n\n.hover\\:bg-gray-500:hover{\n  background-color: hsl(211, 10%, 53%);\n}\n\n.hover\\:bg-gray-600:hover{\n  background-color: hsl(211, 12%, 43%);\n}\n\n.hover\\:bg-gray-700:hover{\n  background-color: hsl(209, 14%, 37%);\n}\n\n.hover\\:bg-gray-800:hover{\n  background-color: hsl(209, 18%, 30%);\n}\n\n.hover\\:bg-gray-900:hover{\n  background-color: hsl(209, 20%, 25%);\n}\n\n.hover\\:bg-gray-1000:hover{\n  background-color: hsl(210, 24%, 16%);\n}\n\n.hover\\:bg-red-100:hover{\n  background-color: hsl(360, 100%, 95%);\n}\n\n.hover\\:bg-red-200:hover{\n  background-color: hsl(360, 100%, 87%);\n}\n\n.hover\\:bg-red-300:hover{\n  background-color: hsl(360, 100%, 80%);\n}\n\n.hover\\:bg-red-400:hover{\n  background-color: hsl(360, 91%, 69%);\n}\n\n.hover\\:bg-red-500:hover{\n  background-color: hsl(360, 83%, 62%);\n}\n\n.hover\\:bg-red-600:hover{\n  background-color: hsl(356, 75%, 53%);\n}\n\n.hover\\:bg-red-700:hover{\n  background-color: hsl(354, 85%, 44%);\n}\n\n.hover\\:bg-red-800:hover{\n  background-color: hsl(352, 90%, 35%);\n}\n\n.hover\\:bg-red-900:hover{\n  background-color: hsl(350, 94%, 28%);\n}\n\n.hover\\:bg-red-1000:hover{\n  background-color: hsl(348, 94%, 20%);\n}\n\n.hover\\:bg-orange-100:hover{\n  background-color: #fffaf0;\n}\n\n.hover\\:bg-orange-200:hover{\n  background-color: #feebc8;\n}\n\n.hover\\:bg-orange-300:hover{\n  background-color: #fbd38d;\n}\n\n.hover\\:bg-orange-400:hover{\n  background-color: #f6ad55;\n}\n\n.hover\\:bg-orange-500:hover{\n  background-color: #ed8936;\n}\n\n.hover\\:bg-orange-600:hover{\n  background-color: #dd6b20;\n}\n\n.hover\\:bg-orange-700:hover{\n  background-color: #c05621;\n}\n\n.hover\\:bg-orange-800:hover{\n  background-color: #9c4221;\n}\n\n.hover\\:bg-orange-900:hover{\n  background-color: #7b341e;\n}\n\n.hover\\:bg-yellow-100:hover{\n  background-color: hsl(15, 86%, 30%);\n}\n\n.hover\\:bg-yellow-200:hover{\n  background-color: hsl(22, 82%, 39%);\n}\n\n.hover\\:bg-yellow-300:hover{\n  background-color: hsl(29, 80%, 44%);\n}\n\n.hover\\:bg-yellow-400:hover{\n  background-color: hsl(36, 77%, 49%);\n}\n\n.hover\\:bg-yellow-500:hover{\n  background-color: hsl(42, 87%, 55%);\n}\n\n.hover\\:bg-yellow-600:hover{\n  background-color: hsl(44, 92%, 63%);\n}\n\n.hover\\:bg-yellow-700:hover{\n  background-color: hsl(48, 94%, 68%);\n}\n\n.hover\\:bg-yellow-800:hover{\n  background-color: hsl(48, 95%, 76%);\n}\n\n.hover\\:bg-yellow-900:hover{\n  background-color: hsl(48, 100%, 88%);\n}\n\n.hover\\:bg-yellow-1000:hover{\n  background-color: hsl(49, 100%, 96%);\n}\n\n.hover\\:bg-green-100:hover{\n  background-color: #f0fff4;\n}\n\n.hover\\:bg-green-200:hover{\n  background-color: #c6f6d5;\n}\n\n.hover\\:bg-green-300:hover{\n  background-color: #9ae6b4;\n}\n\n.hover\\:bg-green-400:hover{\n  background-color: #68d391;\n}\n\n.hover\\:bg-green-500:hover{\n  background-color: #48bb78;\n}\n\n.hover\\:bg-green-600:hover{\n  background-color: #38a169;\n}\n\n.hover\\:bg-green-700:hover{\n  background-color: #2f855a;\n}\n\n.hover\\:bg-green-800:hover{\n  background-color: #276749;\n}\n\n.hover\\:bg-green-900:hover{\n  background-color: #22543d;\n}\n\n.hover\\:bg-teal-100:hover{\n  background-color: hsl(170, 97%, 15%);\n}\n\n.hover\\:bg-teal-200:hover{\n  background-color: hsl(168, 80%, 23%);\n}\n\n.hover\\:bg-teal-300:hover{\n  background-color: hsl(166, 72%, 28%);\n}\n\n.hover\\:bg-teal-400:hover{\n  background-color: hsl(164, 71%, 34%);\n}\n\n.hover\\:bg-teal-500:hover{\n  background-color: hsl(162, 63%, 41%);\n}\n\n.hover\\:bg-teal-600:hover{\n  background-color: hsl(160, 51%, 49%);\n}\n\n.hover\\:bg-teal-700:hover{\n  background-color: hsl(158, 58%, 62%);\n}\n\n.hover\\:bg-teal-800:hover{\n  background-color: hsl(156, 73%, 74%);\n}\n\n.hover\\:bg-teal-900:hover{\n  background-color: hsl(154, 75%, 87%);\n}\n\n.hover\\:bg-teal-1000:hover{\n  background-color: hsl(152, 68%, 96%);\n}\n\n.hover\\:bg-blue-100:hover{\n  background-color: hsl(195, 100%, 95%);\n}\n\n.hover\\:bg-blue-200:hover{\n  background-color: hsl(195, 100%, 85%);\n}\n\n.hover\\:bg-blue-300:hover{\n  background-color: hsl(195, 97%, 75%);\n}\n\n.hover\\:bg-blue-400:hover{\n  background-color: hsl(196, 94%, 67%);\n}\n\n.hover\\:bg-blue-500:hover{\n  background-color: hsl(197, 92%, 61%);\n}\n\n.hover\\:bg-blue-600:hover{\n  background-color: hsl(199, 84%, 55%);\n}\n\n.hover\\:bg-blue-700:hover{\n  background-color: hsl(201, 79%, 46%);\n}\n\n.hover\\:bg-blue-800:hover{\n  background-color: hsl(202, 83%, 41%);\n}\n\n.hover\\:bg-blue-900:hover{\n  background-color: hsl(203, 87%, 34%);\n}\n\n.hover\\:bg-blue-1000:hover{\n  background-color: hsl(204, 96%, 27%);\n}\n\n.hover\\:bg-indigo-100:hover{\n  background-color: hsl(221, 68%, 93%);\n}\n\n.hover\\:bg-indigo-200:hover{\n  background-color: hsl(221, 78%, 86%);\n}\n\n.hover\\:bg-indigo-300:hover{\n  background-color: hsl(224, 67%, 76%);\n}\n\n.hover\\:bg-indigo-400:hover{\n  background-color: hsl(225, 57%, 67%);\n}\n\n.hover\\:bg-indigo-500:hover{\n  background-color: hsl(227, 50%, 59%);\n}\n\n.hover\\:bg-indigo-600:hover{\n  background-color: hsl(227, 42%, 51%);\n}\n\n.hover\\:bg-indigo-700:hover{\n  background-color: hsl(228, 45%, 45%);\n}\n\n.hover\\:bg-indigo-800:hover{\n  background-color: hsl(230, 49%, 41%);\n}\n\n.hover\\:bg-indigo-900:hover{\n  background-color: hsl(232, 51%, 36%);\n}\n\n.hover\\:bg-indigo-1000:hover{\n  background-color: hsl(234, 62%, 26%);\n}\n\n.hover\\:bg-purple-100:hover{\n  background-color: #faf5ff;\n}\n\n.hover\\:bg-purple-200:hover{\n  background-color: #e9d8fd;\n}\n\n.hover\\:bg-purple-300:hover{\n  background-color: #d6bcfa;\n}\n\n.hover\\:bg-purple-400:hover{\n  background-color: #b794f4;\n}\n\n.hover\\:bg-purple-500:hover{\n  background-color: #9f7aea;\n}\n\n.hover\\:bg-purple-600:hover{\n  background-color: #805ad5;\n}\n\n.hover\\:bg-purple-700:hover{\n  background-color: #6b46c1;\n}\n\n.hover\\:bg-purple-800:hover{\n  background-color: #553c9a;\n}\n\n.hover\\:bg-purple-900:hover{\n  background-color: #44337a;\n}\n\n.hover\\:bg-pink-100:hover{\n  background-color: #fff5f7;\n}\n\n.hover\\:bg-pink-200:hover{\n  background-color: #fed7e2;\n}\n\n.hover\\:bg-pink-300:hover{\n  background-color: #fbb6ce;\n}\n\n.hover\\:bg-pink-400:hover{\n  background-color: #f687b3;\n}\n\n.hover\\:bg-pink-500:hover{\n  background-color: #ed64a6;\n}\n\n.hover\\:bg-pink-600:hover{\n  background-color: #d53f8c;\n}\n\n.hover\\:bg-pink-700:hover{\n  background-color: #b83280;\n}\n\n.hover\\:bg-pink-800:hover{\n  background-color: #97266d;\n}\n\n.hover\\:bg-pink-900:hover{\n  background-color: #702459;\n}\n\n.focus\\:bg-transparent:focus{\n  background-color: transparent;\n}\n\n.focus\\:bg-black:focus{\n  background-color: #000;\n}\n\n.focus\\:bg-white:focus{\n  background-color: #fff;\n}\n\n.focus\\:bg-gray-100:focus{\n  background-color: hsl(216, 33%, 97%);\n}\n\n.focus\\:bg-gray-200:focus{\n  background-color: hsl(214, 15%, 91%);\n}\n\n.focus\\:bg-gray-300:focus{\n  background-color: hsl(210, 16%, 82%);\n}\n\n.focus\\:bg-gray-400:focus{\n  background-color: hsl(211, 13%, 65%);\n}\n\n.focus\\:bg-gray-500:focus{\n  background-color: hsl(211, 10%, 53%);\n}\n\n.focus\\:bg-gray-600:focus{\n  background-color: hsl(211, 12%, 43%);\n}\n\n.focus\\:bg-gray-700:focus{\n  background-color: hsl(209, 14%, 37%);\n}\n\n.focus\\:bg-gray-800:focus{\n  background-color: hsl(209, 18%, 30%);\n}\n\n.focus\\:bg-gray-900:focus{\n  background-color: hsl(209, 20%, 25%);\n}\n\n.focus\\:bg-gray-1000:focus{\n  background-color: hsl(210, 24%, 16%);\n}\n\n.focus\\:bg-red-100:focus{\n  background-color: hsl(360, 100%, 95%);\n}\n\n.focus\\:bg-red-200:focus{\n  background-color: hsl(360, 100%, 87%);\n}\n\n.focus\\:bg-red-300:focus{\n  background-color: hsl(360, 100%, 80%);\n}\n\n.focus\\:bg-red-400:focus{\n  background-color: hsl(360, 91%, 69%);\n}\n\n.focus\\:bg-red-500:focus{\n  background-color: hsl(360, 83%, 62%);\n}\n\n.focus\\:bg-red-600:focus{\n  background-color: hsl(356, 75%, 53%);\n}\n\n.focus\\:bg-red-700:focus{\n  background-color: hsl(354, 85%, 44%);\n}\n\n.focus\\:bg-red-800:focus{\n  background-color: hsl(352, 90%, 35%);\n}\n\n.focus\\:bg-red-900:focus{\n  background-color: hsl(350, 94%, 28%);\n}\n\n.focus\\:bg-red-1000:focus{\n  background-color: hsl(348, 94%, 20%);\n}\n\n.focus\\:bg-orange-100:focus{\n  background-color: #fffaf0;\n}\n\n.focus\\:bg-orange-200:focus{\n  background-color: #feebc8;\n}\n\n.focus\\:bg-orange-300:focus{\n  background-color: #fbd38d;\n}\n\n.focus\\:bg-orange-400:focus{\n  background-color: #f6ad55;\n}\n\n.focus\\:bg-orange-500:focus{\n  background-color: #ed8936;\n}\n\n.focus\\:bg-orange-600:focus{\n  background-color: #dd6b20;\n}\n\n.focus\\:bg-orange-700:focus{\n  background-color: #c05621;\n}\n\n.focus\\:bg-orange-800:focus{\n  background-color: #9c4221;\n}\n\n.focus\\:bg-orange-900:focus{\n  background-color: #7b341e;\n}\n\n.focus\\:bg-yellow-100:focus{\n  background-color: hsl(15, 86%, 30%);\n}\n\n.focus\\:bg-yellow-200:focus{\n  background-color: hsl(22, 82%, 39%);\n}\n\n.focus\\:bg-yellow-300:focus{\n  background-color: hsl(29, 80%, 44%);\n}\n\n.focus\\:bg-yellow-400:focus{\n  background-color: hsl(36, 77%, 49%);\n}\n\n.focus\\:bg-yellow-500:focus{\n  background-color: hsl(42, 87%, 55%);\n}\n\n.focus\\:bg-yellow-600:focus{\n  background-color: hsl(44, 92%, 63%);\n}\n\n.focus\\:bg-yellow-700:focus{\n  background-color: hsl(48, 94%, 68%);\n}\n\n.focus\\:bg-yellow-800:focus{\n  background-color: hsl(48, 95%, 76%);\n}\n\n.focus\\:bg-yellow-900:focus{\n  background-color: hsl(48, 100%, 88%);\n}\n\n.focus\\:bg-yellow-1000:focus{\n  background-color: hsl(49, 100%, 96%);\n}\n\n.focus\\:bg-green-100:focus{\n  background-color: #f0fff4;\n}\n\n.focus\\:bg-green-200:focus{\n  background-color: #c6f6d5;\n}\n\n.focus\\:bg-green-300:focus{\n  background-color: #9ae6b4;\n}\n\n.focus\\:bg-green-400:focus{\n  background-color: #68d391;\n}\n\n.focus\\:bg-green-500:focus{\n  background-color: #48bb78;\n}\n\n.focus\\:bg-green-600:focus{\n  background-color: #38a169;\n}\n\n.focus\\:bg-green-700:focus{\n  background-color: #2f855a;\n}\n\n.focus\\:bg-green-800:focus{\n  background-color: #276749;\n}\n\n.focus\\:bg-green-900:focus{\n  background-color: #22543d;\n}\n\n.focus\\:bg-teal-100:focus{\n  background-color: hsl(170, 97%, 15%);\n}\n\n.focus\\:bg-teal-200:focus{\n  background-color: hsl(168, 80%, 23%);\n}\n\n.focus\\:bg-teal-300:focus{\n  background-color: hsl(166, 72%, 28%);\n}\n\n.focus\\:bg-teal-400:focus{\n  background-color: hsl(164, 71%, 34%);\n}\n\n.focus\\:bg-teal-500:focus{\n  background-color: hsl(162, 63%, 41%);\n}\n\n.focus\\:bg-teal-600:focus{\n  background-color: hsl(160, 51%, 49%);\n}\n\n.focus\\:bg-teal-700:focus{\n  background-color: hsl(158, 58%, 62%);\n}\n\n.focus\\:bg-teal-800:focus{\n  background-color: hsl(156, 73%, 74%);\n}\n\n.focus\\:bg-teal-900:focus{\n  background-color: hsl(154, 75%, 87%);\n}\n\n.focus\\:bg-teal-1000:focus{\n  background-color: hsl(152, 68%, 96%);\n}\n\n.focus\\:bg-blue-100:focus{\n  background-color: hsl(195, 100%, 95%);\n}\n\n.focus\\:bg-blue-200:focus{\n  background-color: hsl(195, 100%, 85%);\n}\n\n.focus\\:bg-blue-300:focus{\n  background-color: hsl(195, 97%, 75%);\n}\n\n.focus\\:bg-blue-400:focus{\n  background-color: hsl(196, 94%, 67%);\n}\n\n.focus\\:bg-blue-500:focus{\n  background-color: hsl(197, 92%, 61%);\n}\n\n.focus\\:bg-blue-600:focus{\n  background-color: hsl(199, 84%, 55%);\n}\n\n.focus\\:bg-blue-700:focus{\n  background-color: hsl(201, 79%, 46%);\n}\n\n.focus\\:bg-blue-800:focus{\n  background-color: hsl(202, 83%, 41%);\n}\n\n.focus\\:bg-blue-900:focus{\n  background-color: hsl(203, 87%, 34%);\n}\n\n.focus\\:bg-blue-1000:focus{\n  background-color: hsl(204, 96%, 27%);\n}\n\n.focus\\:bg-indigo-100:focus{\n  background-color: hsl(221, 68%, 93%);\n}\n\n.focus\\:bg-indigo-200:focus{\n  background-color: hsl(221, 78%, 86%);\n}\n\n.focus\\:bg-indigo-300:focus{\n  background-color: hsl(224, 67%, 76%);\n}\n\n.focus\\:bg-indigo-400:focus{\n  background-color: hsl(225, 57%, 67%);\n}\n\n.focus\\:bg-indigo-500:focus{\n  background-color: hsl(227, 50%, 59%);\n}\n\n.focus\\:bg-indigo-600:focus{\n  background-color: hsl(227, 42%, 51%);\n}\n\n.focus\\:bg-indigo-700:focus{\n  background-color: hsl(228, 45%, 45%);\n}\n\n.focus\\:bg-indigo-800:focus{\n  background-color: hsl(230, 49%, 41%);\n}\n\n.focus\\:bg-indigo-900:focus{\n  background-color: hsl(232, 51%, 36%);\n}\n\n.focus\\:bg-indigo-1000:focus{\n  background-color: hsl(234, 62%, 26%);\n}\n\n.focus\\:bg-purple-100:focus{\n  background-color: #faf5ff;\n}\n\n.focus\\:bg-purple-200:focus{\n  background-color: #e9d8fd;\n}\n\n.focus\\:bg-purple-300:focus{\n  background-color: #d6bcfa;\n}\n\n.focus\\:bg-purple-400:focus{\n  background-color: #b794f4;\n}\n\n.focus\\:bg-purple-500:focus{\n  background-color: #9f7aea;\n}\n\n.focus\\:bg-purple-600:focus{\n  background-color: #805ad5;\n}\n\n.focus\\:bg-purple-700:focus{\n  background-color: #6b46c1;\n}\n\n.focus\\:bg-purple-800:focus{\n  background-color: #553c9a;\n}\n\n.focus\\:bg-purple-900:focus{\n  background-color: #44337a;\n}\n\n.focus\\:bg-pink-100:focus{\n  background-color: #fff5f7;\n}\n\n.focus\\:bg-pink-200:focus{\n  background-color: #fed7e2;\n}\n\n.focus\\:bg-pink-300:focus{\n  background-color: #fbb6ce;\n}\n\n.focus\\:bg-pink-400:focus{\n  background-color: #f687b3;\n}\n\n.focus\\:bg-pink-500:focus{\n  background-color: #ed64a6;\n}\n\n.focus\\:bg-pink-600:focus{\n  background-color: #d53f8c;\n}\n\n.focus\\:bg-pink-700:focus{\n  background-color: #b83280;\n}\n\n.focus\\:bg-pink-800:focus{\n  background-color: #97266d;\n}\n\n.focus\\:bg-pink-900:focus{\n  background-color: #702459;\n}\n\n.bg-bottom{\n  background-position: bottom;\n}\n\n.bg-center{\n  background-position: center;\n}\n\n.bg-left{\n  background-position: left;\n}\n\n.bg-left-bottom{\n  background-position: left bottom;\n}\n\n.bg-left-top{\n  background-position: left top;\n}\n\n.bg-right{\n  background-position: right;\n}\n\n.bg-right-bottom{\n  background-position: right bottom;\n}\n\n.bg-right-top{\n  background-position: right top;\n}\n\n.bg-top{\n  background-position: top;\n}\n\n.bg-repeat{\n  background-repeat: repeat;\n}\n\n.bg-no-repeat{\n  background-repeat: no-repeat;\n}\n\n.bg-repeat-x{\n  background-repeat: repeat-x;\n}\n\n.bg-repeat-y{\n  background-repeat: repeat-y;\n}\n\n.bg-repeat-round{\n  background-repeat: round;\n}\n\n.bg-repeat-space{\n  background-repeat: space;\n}\n\n.bg-auto{\n  background-size: auto;\n}\n\n.bg-cover{\n  background-size: cover;\n}\n\n.bg-contain{\n  background-size: contain;\n}\n\n.border-collapse{\n  border-collapse: collapse;\n}\n\n.border-separate{\n  border-collapse: separate;\n}\n\n.border-transparent{\n  border-color: transparent;\n}\n\n.border-black{\n  border-color: #000;\n}\n\n.border-white{\n  border-color: #fff;\n}\n\n.border-gray-100{\n  border-color: hsl(216, 33%, 97%);\n}\n\n.border-gray-200{\n  border-color: hsl(214, 15%, 91%);\n}\n\n.border-gray-300{\n  border-color: hsl(210, 16%, 82%);\n}\n\n.border-gray-400{\n  border-color: hsl(211, 13%, 65%);\n}\n\n.border-gray-500{\n  border-color: hsl(211, 10%, 53%);\n}\n\n.border-gray-600{\n  border-color: hsl(211, 12%, 43%);\n}\n\n.border-gray-700{\n  border-color: hsl(209, 14%, 37%);\n}\n\n.border-gray-800{\n  border-color: hsl(209, 18%, 30%);\n}\n\n.border-gray-900{\n  border-color: hsl(209, 20%, 25%);\n}\n\n.border-gray-1000{\n  border-color: hsl(210, 24%, 16%);\n}\n\n.border-red-100{\n  border-color: hsl(360, 100%, 95%);\n}\n\n.border-red-200{\n  border-color: hsl(360, 100%, 87%);\n}\n\n.border-red-300{\n  border-color: hsl(360, 100%, 80%);\n}\n\n.border-red-400{\n  border-color: hsl(360, 91%, 69%);\n}\n\n.border-red-500{\n  border-color: hsl(360, 83%, 62%);\n}\n\n.border-red-600{\n  border-color: hsl(356, 75%, 53%);\n}\n\n.border-red-700{\n  border-color: hsl(354, 85%, 44%);\n}\n\n.border-red-800{\n  border-color: hsl(352, 90%, 35%);\n}\n\n.border-red-900{\n  border-color: hsl(350, 94%, 28%);\n}\n\n.border-red-1000{\n  border-color: hsl(348, 94%, 20%);\n}\n\n.border-orange-100{\n  border-color: #fffaf0;\n}\n\n.border-orange-200{\n  border-color: #feebc8;\n}\n\n.border-orange-300{\n  border-color: #fbd38d;\n}\n\n.border-orange-400{\n  border-color: #f6ad55;\n}\n\n.border-orange-500{\n  border-color: #ed8936;\n}\n\n.border-orange-600{\n  border-color: #dd6b20;\n}\n\n.border-orange-700{\n  border-color: #c05621;\n}\n\n.border-orange-800{\n  border-color: #9c4221;\n}\n\n.border-orange-900{\n  border-color: #7b341e;\n}\n\n.border-yellow-100{\n  border-color: hsl(15, 86%, 30%);\n}\n\n.border-yellow-200{\n  border-color: hsl(22, 82%, 39%);\n}\n\n.border-yellow-300{\n  border-color: hsl(29, 80%, 44%);\n}\n\n.border-yellow-400{\n  border-color: hsl(36, 77%, 49%);\n}\n\n.border-yellow-500{\n  border-color: hsl(42, 87%, 55%);\n}\n\n.border-yellow-600{\n  border-color: hsl(44, 92%, 63%);\n}\n\n.border-yellow-700{\n  border-color: hsl(48, 94%, 68%);\n}\n\n.border-yellow-800{\n  border-color: hsl(48, 95%, 76%);\n}\n\n.border-yellow-900{\n  border-color: hsl(48, 100%, 88%);\n}\n\n.border-yellow-1000{\n  border-color: hsl(49, 100%, 96%);\n}\n\n.border-green-100{\n  border-color: #f0fff4;\n}\n\n.border-green-200{\n  border-color: #c6f6d5;\n}\n\n.border-green-300{\n  border-color: #9ae6b4;\n}\n\n.border-green-400{\n  border-color: #68d391;\n}\n\n.border-green-500{\n  border-color: #48bb78;\n}\n\n.border-green-600{\n  border-color: #38a169;\n}\n\n.border-green-700{\n  border-color: #2f855a;\n}\n\n.border-green-800{\n  border-color: #276749;\n}\n\n.border-green-900{\n  border-color: #22543d;\n}\n\n.border-teal-100{\n  border-color: hsl(170, 97%, 15%);\n}\n\n.border-teal-200{\n  border-color: hsl(168, 80%, 23%);\n}\n\n.border-teal-300{\n  border-color: hsl(166, 72%, 28%);\n}\n\n.border-teal-400{\n  border-color: hsl(164, 71%, 34%);\n}\n\n.border-teal-500{\n  border-color: hsl(162, 63%, 41%);\n}\n\n.border-teal-600{\n  border-color: hsl(160, 51%, 49%);\n}\n\n.border-teal-700{\n  border-color: hsl(158, 58%, 62%);\n}\n\n.border-teal-800{\n  border-color: hsl(156, 73%, 74%);\n}\n\n.border-teal-900{\n  border-color: hsl(154, 75%, 87%);\n}\n\n.border-teal-1000{\n  border-color: hsl(152, 68%, 96%);\n}\n\n.border-blue-100{\n  border-color: hsl(195, 100%, 95%);\n}\n\n.border-blue-200{\n  border-color: hsl(195, 100%, 85%);\n}\n\n.border-blue-300{\n  border-color: hsl(195, 97%, 75%);\n}\n\n.border-blue-400{\n  border-color: hsl(196, 94%, 67%);\n}\n\n.border-blue-500{\n  border-color: hsl(197, 92%, 61%);\n}\n\n.border-blue-600{\n  border-color: hsl(199, 84%, 55%);\n}\n\n.border-blue-700{\n  border-color: hsl(201, 79%, 46%);\n}\n\n.border-blue-800{\n  border-color: hsl(202, 83%, 41%);\n}\n\n.border-blue-900{\n  border-color: hsl(203, 87%, 34%);\n}\n\n.border-blue-1000{\n  border-color: hsl(204, 96%, 27%);\n}\n\n.border-indigo-100{\n  border-color: hsl(221, 68%, 93%);\n}\n\n.border-indigo-200{\n  border-color: hsl(221, 78%, 86%);\n}\n\n.border-indigo-300{\n  border-color: hsl(224, 67%, 76%);\n}\n\n.border-indigo-400{\n  border-color: hsl(225, 57%, 67%);\n}\n\n.border-indigo-500{\n  border-color: hsl(227, 50%, 59%);\n}\n\n.border-indigo-600{\n  border-color: hsl(227, 42%, 51%);\n}\n\n.border-indigo-700{\n  border-color: hsl(228, 45%, 45%);\n}\n\n.border-indigo-800{\n  border-color: hsl(230, 49%, 41%);\n}\n\n.border-indigo-900{\n  border-color: hsl(232, 51%, 36%);\n}\n\n.border-indigo-1000{\n  border-color: hsl(234, 62%, 26%);\n}\n\n.border-purple-100{\n  border-color: #faf5ff;\n}\n\n.border-purple-200{\n  border-color: #e9d8fd;\n}\n\n.border-purple-300{\n  border-color: #d6bcfa;\n}\n\n.border-purple-400{\n  border-color: #b794f4;\n}\n\n.border-purple-500{\n  border-color: #9f7aea;\n}\n\n.border-purple-600{\n  border-color: #805ad5;\n}\n\n.border-purple-700{\n  border-color: #6b46c1;\n}\n\n.border-purple-800{\n  border-color: #553c9a;\n}\n\n.border-purple-900{\n  border-color: #44337a;\n}\n\n.border-pink-100{\n  border-color: #fff5f7;\n}\n\n.border-pink-200{\n  border-color: #fed7e2;\n}\n\n.border-pink-300{\n  border-color: #fbb6ce;\n}\n\n.border-pink-400{\n  border-color: #f687b3;\n}\n\n.border-pink-500{\n  border-color: #ed64a6;\n}\n\n.border-pink-600{\n  border-color: #d53f8c;\n}\n\n.border-pink-700{\n  border-color: #b83280;\n}\n\n.border-pink-800{\n  border-color: #97266d;\n}\n\n.border-pink-900{\n  border-color: #702459;\n}\n\n.hover\\:border-transparent:hover{\n  border-color: transparent;\n}\n\n.hover\\:border-black:hover{\n  border-color: #000;\n}\n\n.hover\\:border-white:hover{\n  border-color: #fff;\n}\n\n.hover\\:border-gray-100:hover{\n  border-color: hsl(216, 33%, 97%);\n}\n\n.hover\\:border-gray-200:hover{\n  border-color: hsl(214, 15%, 91%);\n}\n\n.hover\\:border-gray-300:hover{\n  border-color: hsl(210, 16%, 82%);\n}\n\n.hover\\:border-gray-400:hover{\n  border-color: hsl(211, 13%, 65%);\n}\n\n.hover\\:border-gray-500:hover{\n  border-color: hsl(211, 10%, 53%);\n}\n\n.hover\\:border-gray-600:hover{\n  border-color: hsl(211, 12%, 43%);\n}\n\n.hover\\:border-gray-700:hover{\n  border-color: hsl(209, 14%, 37%);\n}\n\n.hover\\:border-gray-800:hover{\n  border-color: hsl(209, 18%, 30%);\n}\n\n.hover\\:border-gray-900:hover{\n  border-color: hsl(209, 20%, 25%);\n}\n\n.hover\\:border-gray-1000:hover{\n  border-color: hsl(210, 24%, 16%);\n}\n\n.hover\\:border-red-100:hover{\n  border-color: hsl(360, 100%, 95%);\n}\n\n.hover\\:border-red-200:hover{\n  border-color: hsl(360, 100%, 87%);\n}\n\n.hover\\:border-red-300:hover{\n  border-color: hsl(360, 100%, 80%);\n}\n\n.hover\\:border-red-400:hover{\n  border-color: hsl(360, 91%, 69%);\n}\n\n.hover\\:border-red-500:hover{\n  border-color: hsl(360, 83%, 62%);\n}\n\n.hover\\:border-red-600:hover{\n  border-color: hsl(356, 75%, 53%);\n}\n\n.hover\\:border-red-700:hover{\n  border-color: hsl(354, 85%, 44%);\n}\n\n.hover\\:border-red-800:hover{\n  border-color: hsl(352, 90%, 35%);\n}\n\n.hover\\:border-red-900:hover{\n  border-color: hsl(350, 94%, 28%);\n}\n\n.hover\\:border-red-1000:hover{\n  border-color: hsl(348, 94%, 20%);\n}\n\n.hover\\:border-orange-100:hover{\n  border-color: #fffaf0;\n}\n\n.hover\\:border-orange-200:hover{\n  border-color: #feebc8;\n}\n\n.hover\\:border-orange-300:hover{\n  border-color: #fbd38d;\n}\n\n.hover\\:border-orange-400:hover{\n  border-color: #f6ad55;\n}\n\n.hover\\:border-orange-500:hover{\n  border-color: #ed8936;\n}\n\n.hover\\:border-orange-600:hover{\n  border-color: #dd6b20;\n}\n\n.hover\\:border-orange-700:hover{\n  border-color: #c05621;\n}\n\n.hover\\:border-orange-800:hover{\n  border-color: #9c4221;\n}\n\n.hover\\:border-orange-900:hover{\n  border-color: #7b341e;\n}\n\n.hover\\:border-yellow-100:hover{\n  border-color: hsl(15, 86%, 30%);\n}\n\n.hover\\:border-yellow-200:hover{\n  border-color: hsl(22, 82%, 39%);\n}\n\n.hover\\:border-yellow-300:hover{\n  border-color: hsl(29, 80%, 44%);\n}\n\n.hover\\:border-yellow-400:hover{\n  border-color: hsl(36, 77%, 49%);\n}\n\n.hover\\:border-yellow-500:hover{\n  border-color: hsl(42, 87%, 55%);\n}\n\n.hover\\:border-yellow-600:hover{\n  border-color: hsl(44, 92%, 63%);\n}\n\n.hover\\:border-yellow-700:hover{\n  border-color: hsl(48, 94%, 68%);\n}\n\n.hover\\:border-yellow-800:hover{\n  border-color: hsl(48, 95%, 76%);\n}\n\n.hover\\:border-yellow-900:hover{\n  border-color: hsl(48, 100%, 88%);\n}\n\n.hover\\:border-yellow-1000:hover{\n  border-color: hsl(49, 100%, 96%);\n}\n\n.hover\\:border-green-100:hover{\n  border-color: #f0fff4;\n}\n\n.hover\\:border-green-200:hover{\n  border-color: #c6f6d5;\n}\n\n.hover\\:border-green-300:hover{\n  border-color: #9ae6b4;\n}\n\n.hover\\:border-green-400:hover{\n  border-color: #68d391;\n}\n\n.hover\\:border-green-500:hover{\n  border-color: #48bb78;\n}\n\n.hover\\:border-green-600:hover{\n  border-color: #38a169;\n}\n\n.hover\\:border-green-700:hover{\n  border-color: #2f855a;\n}\n\n.hover\\:border-green-800:hover{\n  border-color: #276749;\n}\n\n.hover\\:border-green-900:hover{\n  border-color: #22543d;\n}\n\n.hover\\:border-teal-100:hover{\n  border-color: hsl(170, 97%, 15%);\n}\n\n.hover\\:border-teal-200:hover{\n  border-color: hsl(168, 80%, 23%);\n}\n\n.hover\\:border-teal-300:hover{\n  border-color: hsl(166, 72%, 28%);\n}\n\n.hover\\:border-teal-400:hover{\n  border-color: hsl(164, 71%, 34%);\n}\n\n.hover\\:border-teal-500:hover{\n  border-color: hsl(162, 63%, 41%);\n}\n\n.hover\\:border-teal-600:hover{\n  border-color: hsl(160, 51%, 49%);\n}\n\n.hover\\:border-teal-700:hover{\n  border-color: hsl(158, 58%, 62%);\n}\n\n.hover\\:border-teal-800:hover{\n  border-color: hsl(156, 73%, 74%);\n}\n\n.hover\\:border-teal-900:hover{\n  border-color: hsl(154, 75%, 87%);\n}\n\n.hover\\:border-teal-1000:hover{\n  border-color: hsl(152, 68%, 96%);\n}\n\n.hover\\:border-blue-100:hover{\n  border-color: hsl(195, 100%, 95%);\n}\n\n.hover\\:border-blue-200:hover{\n  border-color: hsl(195, 100%, 85%);\n}\n\n.hover\\:border-blue-300:hover{\n  border-color: hsl(195, 97%, 75%);\n}\n\n.hover\\:border-blue-400:hover{\n  border-color: hsl(196, 94%, 67%);\n}\n\n.hover\\:border-blue-500:hover{\n  border-color: hsl(197, 92%, 61%);\n}\n\n.hover\\:border-blue-600:hover{\n  border-color: hsl(199, 84%, 55%);\n}\n\n.hover\\:border-blue-700:hover{\n  border-color: hsl(201, 79%, 46%);\n}\n\n.hover\\:border-blue-800:hover{\n  border-color: hsl(202, 83%, 41%);\n}\n\n.hover\\:border-blue-900:hover{\n  border-color: hsl(203, 87%, 34%);\n}\n\n.hover\\:border-blue-1000:hover{\n  border-color: hsl(204, 96%, 27%);\n}\n\n.hover\\:border-indigo-100:hover{\n  border-color: hsl(221, 68%, 93%);\n}\n\n.hover\\:border-indigo-200:hover{\n  border-color: hsl(221, 78%, 86%);\n}\n\n.hover\\:border-indigo-300:hover{\n  border-color: hsl(224, 67%, 76%);\n}\n\n.hover\\:border-indigo-400:hover{\n  border-color: hsl(225, 57%, 67%);\n}\n\n.hover\\:border-indigo-500:hover{\n  border-color: hsl(227, 50%, 59%);\n}\n\n.hover\\:border-indigo-600:hover{\n  border-color: hsl(227, 42%, 51%);\n}\n\n.hover\\:border-indigo-700:hover{\n  border-color: hsl(228, 45%, 45%);\n}\n\n.hover\\:border-indigo-800:hover{\n  border-color: hsl(230, 49%, 41%);\n}\n\n.hover\\:border-indigo-900:hover{\n  border-color: hsl(232, 51%, 36%);\n}\n\n.hover\\:border-indigo-1000:hover{\n  border-color: hsl(234, 62%, 26%);\n}\n\n.hover\\:border-purple-100:hover{\n  border-color: #faf5ff;\n}\n\n.hover\\:border-purple-200:hover{\n  border-color: #e9d8fd;\n}\n\n.hover\\:border-purple-300:hover{\n  border-color: #d6bcfa;\n}\n\n.hover\\:border-purple-400:hover{\n  border-color: #b794f4;\n}\n\n.hover\\:border-purple-500:hover{\n  border-color: #9f7aea;\n}\n\n.hover\\:border-purple-600:hover{\n  border-color: #805ad5;\n}\n\n.hover\\:border-purple-700:hover{\n  border-color: #6b46c1;\n}\n\n.hover\\:border-purple-800:hover{\n  border-color: #553c9a;\n}\n\n.hover\\:border-purple-900:hover{\n  border-color: #44337a;\n}\n\n.hover\\:border-pink-100:hover{\n  border-color: #fff5f7;\n}\n\n.hover\\:border-pink-200:hover{\n  border-color: #fed7e2;\n}\n\n.hover\\:border-pink-300:hover{\n  border-color: #fbb6ce;\n}\n\n.hover\\:border-pink-400:hover{\n  border-color: #f687b3;\n}\n\n.hover\\:border-pink-500:hover{\n  border-color: #ed64a6;\n}\n\n.hover\\:border-pink-600:hover{\n  border-color: #d53f8c;\n}\n\n.hover\\:border-pink-700:hover{\n  border-color: #b83280;\n}\n\n.hover\\:border-pink-800:hover{\n  border-color: #97266d;\n}\n\n.hover\\:border-pink-900:hover{\n  border-color: #702459;\n}\n\n.focus\\:border-transparent:focus{\n  border-color: transparent;\n}\n\n.focus\\:border-black:focus{\n  border-color: #000;\n}\n\n.focus\\:border-white:focus{\n  border-color: #fff;\n}\n\n.focus\\:border-gray-100:focus{\n  border-color: hsl(216, 33%, 97%);\n}\n\n.focus\\:border-gray-200:focus{\n  border-color: hsl(214, 15%, 91%);\n}\n\n.focus\\:border-gray-300:focus{\n  border-color: hsl(210, 16%, 82%);\n}\n\n.focus\\:border-gray-400:focus{\n  border-color: hsl(211, 13%, 65%);\n}\n\n.focus\\:border-gray-500:focus{\n  border-color: hsl(211, 10%, 53%);\n}\n\n.focus\\:border-gray-600:focus{\n  border-color: hsl(211, 12%, 43%);\n}\n\n.focus\\:border-gray-700:focus{\n  border-color: hsl(209, 14%, 37%);\n}\n\n.focus\\:border-gray-800:focus{\n  border-color: hsl(209, 18%, 30%);\n}\n\n.focus\\:border-gray-900:focus{\n  border-color: hsl(209, 20%, 25%);\n}\n\n.focus\\:border-gray-1000:focus{\n  border-color: hsl(210, 24%, 16%);\n}\n\n.focus\\:border-red-100:focus{\n  border-color: hsl(360, 100%, 95%);\n}\n\n.focus\\:border-red-200:focus{\n  border-color: hsl(360, 100%, 87%);\n}\n\n.focus\\:border-red-300:focus{\n  border-color: hsl(360, 100%, 80%);\n}\n\n.focus\\:border-red-400:focus{\n  border-color: hsl(360, 91%, 69%);\n}\n\n.focus\\:border-red-500:focus{\n  border-color: hsl(360, 83%, 62%);\n}\n\n.focus\\:border-red-600:focus{\n  border-color: hsl(356, 75%, 53%);\n}\n\n.focus\\:border-red-700:focus{\n  border-color: hsl(354, 85%, 44%);\n}\n\n.focus\\:border-red-800:focus{\n  border-color: hsl(352, 90%, 35%);\n}\n\n.focus\\:border-red-900:focus{\n  border-color: hsl(350, 94%, 28%);\n}\n\n.focus\\:border-red-1000:focus{\n  border-color: hsl(348, 94%, 20%);\n}\n\n.focus\\:border-orange-100:focus{\n  border-color: #fffaf0;\n}\n\n.focus\\:border-orange-200:focus{\n  border-color: #feebc8;\n}\n\n.focus\\:border-orange-300:focus{\n  border-color: #fbd38d;\n}\n\n.focus\\:border-orange-400:focus{\n  border-color: #f6ad55;\n}\n\n.focus\\:border-orange-500:focus{\n  border-color: #ed8936;\n}\n\n.focus\\:border-orange-600:focus{\n  border-color: #dd6b20;\n}\n\n.focus\\:border-orange-700:focus{\n  border-color: #c05621;\n}\n\n.focus\\:border-orange-800:focus{\n  border-color: #9c4221;\n}\n\n.focus\\:border-orange-900:focus{\n  border-color: #7b341e;\n}\n\n.focus\\:border-yellow-100:focus{\n  border-color: hsl(15, 86%, 30%);\n}\n\n.focus\\:border-yellow-200:focus{\n  border-color: hsl(22, 82%, 39%);\n}\n\n.focus\\:border-yellow-300:focus{\n  border-color: hsl(29, 80%, 44%);\n}\n\n.focus\\:border-yellow-400:focus{\n  border-color: hsl(36, 77%, 49%);\n}\n\n.focus\\:border-yellow-500:focus{\n  border-color: hsl(42, 87%, 55%);\n}\n\n.focus\\:border-yellow-600:focus{\n  border-color: hsl(44, 92%, 63%);\n}\n\n.focus\\:border-yellow-700:focus{\n  border-color: hsl(48, 94%, 68%);\n}\n\n.focus\\:border-yellow-800:focus{\n  border-color: hsl(48, 95%, 76%);\n}\n\n.focus\\:border-yellow-900:focus{\n  border-color: hsl(48, 100%, 88%);\n}\n\n.focus\\:border-yellow-1000:focus{\n  border-color: hsl(49, 100%, 96%);\n}\n\n.focus\\:border-green-100:focus{\n  border-color: #f0fff4;\n}\n\n.focus\\:border-green-200:focus{\n  border-color: #c6f6d5;\n}\n\n.focus\\:border-green-300:focus{\n  border-color: #9ae6b4;\n}\n\n.focus\\:border-green-400:focus{\n  border-color: #68d391;\n}\n\n.focus\\:border-green-500:focus{\n  border-color: #48bb78;\n}\n\n.focus\\:border-green-600:focus{\n  border-color: #38a169;\n}\n\n.focus\\:border-green-700:focus{\n  border-color: #2f855a;\n}\n\n.focus\\:border-green-800:focus{\n  border-color: #276749;\n}\n\n.focus\\:border-green-900:focus{\n  border-color: #22543d;\n}\n\n.focus\\:border-teal-100:focus{\n  border-color: hsl(170, 97%, 15%);\n}\n\n.focus\\:border-teal-200:focus{\n  border-color: hsl(168, 80%, 23%);\n}\n\n.focus\\:border-teal-300:focus{\n  border-color: hsl(166, 72%, 28%);\n}\n\n.focus\\:border-teal-400:focus{\n  border-color: hsl(164, 71%, 34%);\n}\n\n.focus\\:border-teal-500:focus{\n  border-color: hsl(162, 63%, 41%);\n}\n\n.focus\\:border-teal-600:focus{\n  border-color: hsl(160, 51%, 49%);\n}\n\n.focus\\:border-teal-700:focus{\n  border-color: hsl(158, 58%, 62%);\n}\n\n.focus\\:border-teal-800:focus{\n  border-color: hsl(156, 73%, 74%);\n}\n\n.focus\\:border-teal-900:focus{\n  border-color: hsl(154, 75%, 87%);\n}\n\n.focus\\:border-teal-1000:focus{\n  border-color: hsl(152, 68%, 96%);\n}\n\n.focus\\:border-blue-100:focus{\n  border-color: hsl(195, 100%, 95%);\n}\n\n.focus\\:border-blue-200:focus{\n  border-color: hsl(195, 100%, 85%);\n}\n\n.focus\\:border-blue-300:focus{\n  border-color: hsl(195, 97%, 75%);\n}\n\n.focus\\:border-blue-400:focus{\n  border-color: hsl(196, 94%, 67%);\n}\n\n.focus\\:border-blue-500:focus{\n  border-color: hsl(197, 92%, 61%);\n}\n\n.focus\\:border-blue-600:focus{\n  border-color: hsl(199, 84%, 55%);\n}\n\n.focus\\:border-blue-700:focus{\n  border-color: hsl(201, 79%, 46%);\n}\n\n.focus\\:border-blue-800:focus{\n  border-color: hsl(202, 83%, 41%);\n}\n\n.focus\\:border-blue-900:focus{\n  border-color: hsl(203, 87%, 34%);\n}\n\n.focus\\:border-blue-1000:focus{\n  border-color: hsl(204, 96%, 27%);\n}\n\n.focus\\:border-indigo-100:focus{\n  border-color: hsl(221, 68%, 93%);\n}\n\n.focus\\:border-indigo-200:focus{\n  border-color: hsl(221, 78%, 86%);\n}\n\n.focus\\:border-indigo-300:focus{\n  border-color: hsl(224, 67%, 76%);\n}\n\n.focus\\:border-indigo-400:focus{\n  border-color: hsl(225, 57%, 67%);\n}\n\n.focus\\:border-indigo-500:focus{\n  border-color: hsl(227, 50%, 59%);\n}\n\n.focus\\:border-indigo-600:focus{\n  border-color: hsl(227, 42%, 51%);\n}\n\n.focus\\:border-indigo-700:focus{\n  border-color: hsl(228, 45%, 45%);\n}\n\n.focus\\:border-indigo-800:focus{\n  border-color: hsl(230, 49%, 41%);\n}\n\n.focus\\:border-indigo-900:focus{\n  border-color: hsl(232, 51%, 36%);\n}\n\n.focus\\:border-indigo-1000:focus{\n  border-color: hsl(234, 62%, 26%);\n}\n\n.focus\\:border-purple-100:focus{\n  border-color: #faf5ff;\n}\n\n.focus\\:border-purple-200:focus{\n  border-color: #e9d8fd;\n}\n\n.focus\\:border-purple-300:focus{\n  border-color: #d6bcfa;\n}\n\n.focus\\:border-purple-400:focus{\n  border-color: #b794f4;\n}\n\n.focus\\:border-purple-500:focus{\n  border-color: #9f7aea;\n}\n\n.focus\\:border-purple-600:focus{\n  border-color: #805ad5;\n}\n\n.focus\\:border-purple-700:focus{\n  border-color: #6b46c1;\n}\n\n.focus\\:border-purple-800:focus{\n  border-color: #553c9a;\n}\n\n.focus\\:border-purple-900:focus{\n  border-color: #44337a;\n}\n\n.focus\\:border-pink-100:focus{\n  border-color: #fff5f7;\n}\n\n.focus\\:border-pink-200:focus{\n  border-color: #fed7e2;\n}\n\n.focus\\:border-pink-300:focus{\n  border-color: #fbb6ce;\n}\n\n.focus\\:border-pink-400:focus{\n  border-color: #f687b3;\n}\n\n.focus\\:border-pink-500:focus{\n  border-color: #ed64a6;\n}\n\n.focus\\:border-pink-600:focus{\n  border-color: #d53f8c;\n}\n\n.focus\\:border-pink-700:focus{\n  border-color: #b83280;\n}\n\n.focus\\:border-pink-800:focus{\n  border-color: #97266d;\n}\n\n.focus\\:border-pink-900:focus{\n  border-color: #702459;\n}\n\n.rounded-none{\n  border-radius: 0;\n}\n\n.rounded-sm{\n  border-radius: 0.125rem;\n}\n\n.rounded{\n  border-radius: 0.25rem;\n}\n\n.rounded-lg{\n  border-radius: 0.5rem;\n}\n\n.rounded-full{\n  border-radius: 9999px;\n}\n\n.rounded-t-none{\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.rounded-r-none{\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.rounded-b-none{\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.rounded-l-none{\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.rounded-t-sm{\n  border-top-left-radius: 0.125rem;\n  border-top-right-radius: 0.125rem;\n}\n\n.rounded-r-sm{\n  border-top-right-radius: 0.125rem;\n  border-bottom-right-radius: 0.125rem;\n}\n\n.rounded-b-sm{\n  border-bottom-right-radius: 0.125rem;\n  border-bottom-left-radius: 0.125rem;\n}\n\n.rounded-l-sm{\n  border-top-left-radius: 0.125rem;\n  border-bottom-left-radius: 0.125rem;\n}\n\n.rounded-t{\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.rounded-r{\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.rounded-b{\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.rounded-l{\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.rounded-t-lg{\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n\n.rounded-r-lg{\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n\n.rounded-b-lg{\n  border-bottom-right-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n\n.rounded-l-lg{\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n\n.rounded-t-full{\n  border-top-left-radius: 9999px;\n  border-top-right-radius: 9999px;\n}\n\n.rounded-r-full{\n  border-top-right-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n\n.rounded-b-full{\n  border-bottom-right-radius: 9999px;\n  border-bottom-left-radius: 9999px;\n}\n\n.rounded-l-full{\n  border-top-left-radius: 9999px;\n  border-bottom-left-radius: 9999px;\n}\n\n.rounded-tl-none{\n  border-top-left-radius: 0;\n}\n\n.rounded-tr-none{\n  border-top-right-radius: 0;\n}\n\n.rounded-br-none{\n  border-bottom-right-radius: 0;\n}\n\n.rounded-bl-none{\n  border-bottom-left-radius: 0;\n}\n\n.rounded-tl-sm{\n  border-top-left-radius: 0.125rem;\n}\n\n.rounded-tr-sm{\n  border-top-right-radius: 0.125rem;\n}\n\n.rounded-br-sm{\n  border-bottom-right-radius: 0.125rem;\n}\n\n.rounded-bl-sm{\n  border-bottom-left-radius: 0.125rem;\n}\n\n.rounded-tl{\n  border-top-left-radius: 0.25rem;\n}\n\n.rounded-tr{\n  border-top-right-radius: 0.25rem;\n}\n\n.rounded-br{\n  border-bottom-right-radius: 0.25rem;\n}\n\n.rounded-bl{\n  border-bottom-left-radius: 0.25rem;\n}\n\n.rounded-tl-lg{\n  border-top-left-radius: 0.5rem;\n}\n\n.rounded-tr-lg{\n  border-top-right-radius: 0.5rem;\n}\n\n.rounded-br-lg{\n  border-bottom-right-radius: 0.5rem;\n}\n\n.rounded-bl-lg{\n  border-bottom-left-radius: 0.5rem;\n}\n\n.rounded-tl-full{\n  border-top-left-radius: 9999px;\n}\n\n.rounded-tr-full{\n  border-top-right-radius: 9999px;\n}\n\n.rounded-br-full{\n  border-bottom-right-radius: 9999px;\n}\n\n.rounded-bl-full{\n  border-bottom-left-radius: 9999px;\n}\n\n.border-solid{\n  border-style: solid;\n}\n\n.border-dashed{\n  border-style: dashed;\n}\n\n.border-dotted{\n  border-style: dotted;\n}\n\n.border-none{\n  border-style: none;\n}\n\n.border-0{\n  border-width: 0;\n}\n\n.border-2{\n  border-width: 2px;\n}\n\n.border-4{\n  border-width: 4px;\n}\n\n.border-8{\n  border-width: 8px;\n}\n\n.border{\n  border-width: 1px;\n}\n\n.border-t-0{\n  border-top-width: 0;\n}\n\n.border-r-0{\n  border-right-width: 0;\n}\n\n.border-b-0{\n  border-bottom-width: 0;\n}\n\n.border-l-0{\n  border-left-width: 0;\n}\n\n.border-t-2{\n  border-top-width: 2px;\n}\n\n.border-r-2{\n  border-right-width: 2px;\n}\n\n.border-b-2{\n  border-bottom-width: 2px;\n}\n\n.border-l-2{\n  border-left-width: 2px;\n}\n\n.border-t-4{\n  border-top-width: 4px;\n}\n\n.border-r-4{\n  border-right-width: 4px;\n}\n\n.border-b-4{\n  border-bottom-width: 4px;\n}\n\n.border-l-4{\n  border-left-width: 4px;\n}\n\n.border-t-8{\n  border-top-width: 8px;\n}\n\n.border-r-8{\n  border-right-width: 8px;\n}\n\n.border-b-8{\n  border-bottom-width: 8px;\n}\n\n.border-l-8{\n  border-left-width: 8px;\n}\n\n.border-t{\n  border-top-width: 1px;\n}\n\n.border-r{\n  border-right-width: 1px;\n}\n\n.border-b{\n  border-bottom-width: 1px;\n}\n\n.border-l{\n  border-left-width: 1px;\n}\n\n.cursor-auto{\n  cursor: auto;\n}\n\n.cursor-default{\n  cursor: default;\n}\n\n.cursor-pointer{\n  cursor: pointer;\n}\n\n.cursor-wait{\n  cursor: wait;\n}\n\n.cursor-text{\n  cursor: text;\n}\n\n.cursor-move{\n  cursor: move;\n}\n\n.cursor-not-allowed{\n  cursor: not-allowed;\n}\n\n.block{\n  display: block;\n}\n\n.inline-block{\n  display: inline-block;\n}\n\n.inline{\n  display: inline;\n}\n\n.flex{\n  display: flex;\n}\n\n.inline-flex{\n  display: inline-flex;\n}\n\n.table{\n  display: table;\n}\n\n.table-row{\n  display: table-row;\n}\n\n.table-cell{\n  display: table-cell;\n}\n\n.hidden{\n  display: none;\n}\n\n.flex-row{\n  flex-direction: row;\n}\n\n.flex-row-reverse{\n  flex-direction: row-reverse;\n}\n\n.flex-col{\n  flex-direction: column;\n}\n\n.flex-col-reverse{\n  flex-direction: column-reverse;\n}\n\n.flex-wrap{\n  flex-wrap: wrap;\n}\n\n.flex-wrap-reverse{\n  flex-wrap: wrap-reverse;\n}\n\n.flex-no-wrap{\n  flex-wrap: nowrap;\n}\n\n.items-start{\n  align-items: flex-start;\n}\n\n.items-end{\n  align-items: flex-end;\n}\n\n.items-center{\n  align-items: center;\n}\n\n.items-baseline{\n  align-items: baseline;\n}\n\n.items-stretch{\n  align-items: stretch;\n}\n\n.self-auto{\n  align-self: auto;\n}\n\n.self-start{\n  align-self: flex-start;\n}\n\n.self-end{\n  align-self: flex-end;\n}\n\n.self-center{\n  align-self: center;\n}\n\n.self-stretch{\n  align-self: stretch;\n}\n\n.justify-start{\n  justify-content: flex-start;\n}\n\n.justify-end{\n  justify-content: flex-end;\n}\n\n.justify-center{\n  justify-content: center;\n}\n\n.justify-between{\n  justify-content: space-between;\n}\n\n.justify-around{\n  justify-content: space-around;\n}\n\n.content-center{\n  align-content: center;\n}\n\n.content-start{\n  align-content: flex-start;\n}\n\n.content-end{\n  align-content: flex-end;\n}\n\n.content-between{\n  align-content: space-between;\n}\n\n.content-around{\n  align-content: space-around;\n}\n\n.flex-1{\n  flex: 1 1 0%;\n}\n\n.flex-auto{\n  flex: 1 1 auto;\n}\n\n.flex-initial{\n  flex: 0 1 auto;\n}\n\n.flex-none{\n  flex: none;\n}\n\n.flex-grow-0{\n  flex-grow: 0;\n}\n\n.flex-grow{\n  flex-grow: 1;\n}\n\n.flex-shrink-0{\n  flex-shrink: 0;\n}\n\n.flex-shrink{\n  flex-shrink: 1;\n}\n\n.order-1{\n  order: 1;\n}\n\n.order-2{\n  order: 2;\n}\n\n.order-3{\n  order: 3;\n}\n\n.order-4{\n  order: 4;\n}\n\n.order-5{\n  order: 5;\n}\n\n.order-6{\n  order: 6;\n}\n\n.order-7{\n  order: 7;\n}\n\n.order-8{\n  order: 8;\n}\n\n.order-9{\n  order: 9;\n}\n\n.order-10{\n  order: 10;\n}\n\n.order-11{\n  order: 11;\n}\n\n.order-12{\n  order: 12;\n}\n\n.order-first{\n  order: -9999;\n}\n\n.order-last{\n  order: 9999;\n}\n\n.order-none{\n  order: 0;\n}\n\n.float-right{\n  float: right;\n}\n\n.float-left{\n  float: left;\n}\n\n.float-none{\n  float: none;\n}\n\n.clearfix:after{\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.font-sans{\n  font-family: Source Sans Pro, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n\n.font-serif{\n  font-family: Georgia, Cambria, \"Times New Roman\", Times, serif;\n}\n\n.font-mono{\n  font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n.font-hairline{\n  font-weight: 100;\n}\n\n.font-thin{\n  font-weight: 200;\n}\n\n.font-light{\n  font-weight: 300;\n}\n\n.font-normal{\n  font-weight: 400;\n}\n\n.font-medium{\n  font-weight: 500;\n}\n\n.font-semibold{\n  font-weight: 600;\n}\n\n.font-bold{\n  font-weight: 700;\n}\n\n.font-extrabold{\n  font-weight: 800;\n}\n\n.font-black{\n  font-weight: 900;\n}\n\n.hover\\:font-hairline:hover{\n  font-weight: 100;\n}\n\n.hover\\:font-thin:hover{\n  font-weight: 200;\n}\n\n.hover\\:font-light:hover{\n  font-weight: 300;\n}\n\n.hover\\:font-normal:hover{\n  font-weight: 400;\n}\n\n.hover\\:font-medium:hover{\n  font-weight: 500;\n}\n\n.hover\\:font-semibold:hover{\n  font-weight: 600;\n}\n\n.hover\\:font-bold:hover{\n  font-weight: 700;\n}\n\n.hover\\:font-extrabold:hover{\n  font-weight: 800;\n}\n\n.hover\\:font-black:hover{\n  font-weight: 900;\n}\n\n.focus\\:font-hairline:focus{\n  font-weight: 100;\n}\n\n.focus\\:font-thin:focus{\n  font-weight: 200;\n}\n\n.focus\\:font-light:focus{\n  font-weight: 300;\n}\n\n.focus\\:font-normal:focus{\n  font-weight: 400;\n}\n\n.focus\\:font-medium:focus{\n  font-weight: 500;\n}\n\n.focus\\:font-semibold:focus{\n  font-weight: 600;\n}\n\n.focus\\:font-bold:focus{\n  font-weight: 700;\n}\n\n.focus\\:font-extrabold:focus{\n  font-weight: 800;\n}\n\n.focus\\:font-black:focus{\n  font-weight: 900;\n}\n\n.h-0{\n  height: 0;\n}\n\n.h-1{\n  height: 0.25rem;\n}\n\n.h-2{\n  height: 0.5rem;\n}\n\n.h-3{\n  height: 0.75rem;\n}\n\n.h-4{\n  height: 1rem;\n}\n\n.h-5{\n  height: 1.25rem;\n}\n\n.h-6{\n  height: 1.5rem;\n}\n\n.h-8{\n  height: 2rem;\n}\n\n.h-10{\n  height: 2.5rem;\n}\n\n.h-12{\n  height: 3rem;\n}\n\n.h-16{\n  height: 4rem;\n}\n\n.h-20{\n  height: 5rem;\n}\n\n.h-24{\n  height: 6rem;\n}\n\n.h-32{\n  height: 8rem;\n}\n\n.h-40{\n  height: 10rem;\n}\n\n.h-48{\n  height: 12rem;\n}\n\n.h-56{\n  height: 14rem;\n}\n\n.h-64{\n  height: 16rem;\n}\n\n.h-auto{\n  height: auto;\n}\n\n.h-px{\n  height: 1px;\n}\n\n.h-full{\n  height: 100%;\n}\n\n.h-screen{\n  height: 100vh;\n}\n\n.leading-none{\n  line-height: 1;\n}\n\n.leading-tight{\n  line-height: 1.25;\n}\n\n.leading-snug{\n  line-height: 1.375;\n}\n\n.leading-normal{\n  line-height: 1.5;\n}\n\n.leading-relaxed{\n  line-height: 1.625;\n}\n\n.leading-loose{\n  line-height: 2;\n}\n\n.list-inside{\n  list-style-position: inside;\n}\n\n.list-outside{\n  list-style-position: outside;\n}\n\n.list-none{\n  list-style-type: none;\n}\n\n.list-disc{\n  list-style-type: disc;\n}\n\n.list-decimal{\n  list-style-type: decimal;\n}\n\n.m-0{\n  margin: 0;\n}\n\n.m-1{\n  margin: 0.25rem;\n}\n\n.m-2{\n  margin: 0.5rem;\n}\n\n.m-3{\n  margin: 0.75rem;\n}\n\n.m-4{\n  margin: 1rem;\n}\n\n.m-5{\n  margin: 1.25rem;\n}\n\n.m-6{\n  margin: 1.5rem;\n}\n\n.m-8{\n  margin: 2rem;\n}\n\n.m-10{\n  margin: 2.5rem;\n}\n\n.m-12{\n  margin: 3rem;\n}\n\n.m-16{\n  margin: 4rem;\n}\n\n.m-20{\n  margin: 5rem;\n}\n\n.m-24{\n  margin: 6rem;\n}\n\n.m-32{\n  margin: 8rem;\n}\n\n.m-40{\n  margin: 10rem;\n}\n\n.m-48{\n  margin: 12rem;\n}\n\n.m-56{\n  margin: 14rem;\n}\n\n.m-64{\n  margin: 16rem;\n}\n\n.m-auto{\n  margin: auto;\n}\n\n.m-px{\n  margin: 1px;\n}\n\n.-m-1{\n  margin: -0.25rem;\n}\n\n.-m-2{\n  margin: -0.5rem;\n}\n\n.-m-3{\n  margin: -0.75rem;\n}\n\n.-m-4{\n  margin: -1rem;\n}\n\n.-m-5{\n  margin: -1.25rem;\n}\n\n.-m-6{\n  margin: -1.5rem;\n}\n\n.-m-8{\n  margin: -2rem;\n}\n\n.-m-10{\n  margin: -2.5rem;\n}\n\n.-m-12{\n  margin: -3rem;\n}\n\n.-m-16{\n  margin: -4rem;\n}\n\n.-m-20{\n  margin: -5rem;\n}\n\n.-m-24{\n  margin: -6rem;\n}\n\n.-m-32{\n  margin: -8rem;\n}\n\n.-m-40{\n  margin: -10rem;\n}\n\n.-m-48{\n  margin: -12rem;\n}\n\n.-m-56{\n  margin: -14rem;\n}\n\n.-m-64{\n  margin: -16rem;\n}\n\n.-m-px{\n  margin: -1px;\n}\n\n.my-0{\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.mx-0{\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.my-1{\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n\n.mx-1{\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n.my-2{\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.mx-2{\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\n.my-3{\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n\n.mx-3{\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\n\n.my-4{\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.mx-4{\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.my-5{\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n\n.mx-5{\n  margin-left: 1.25rem;\n  margin-right: 1.25rem;\n}\n\n.my-6{\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.mx-6{\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n\n.my-8{\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n\n.mx-8{\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n\n.my-10{\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n}\n\n.mx-10{\n  margin-left: 2.5rem;\n  margin-right: 2.5rem;\n}\n\n.my-12{\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n\n.mx-12{\n  margin-left: 3rem;\n  margin-right: 3rem;\n}\n\n.my-16{\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n}\n\n.mx-16{\n  margin-left: 4rem;\n  margin-right: 4rem;\n}\n\n.my-20{\n  margin-top: 5rem;\n  margin-bottom: 5rem;\n}\n\n.mx-20{\n  margin-left: 5rem;\n  margin-right: 5rem;\n}\n\n.my-24{\n  margin-top: 6rem;\n  margin-bottom: 6rem;\n}\n\n.mx-24{\n  margin-left: 6rem;\n  margin-right: 6rem;\n}\n\n.my-32{\n  margin-top: 8rem;\n  margin-bottom: 8rem;\n}\n\n.mx-32{\n  margin-left: 8rem;\n  margin-right: 8rem;\n}\n\n.my-40{\n  margin-top: 10rem;\n  margin-bottom: 10rem;\n}\n\n.mx-40{\n  margin-left: 10rem;\n  margin-right: 10rem;\n}\n\n.my-48{\n  margin-top: 12rem;\n  margin-bottom: 12rem;\n}\n\n.mx-48{\n  margin-left: 12rem;\n  margin-right: 12rem;\n}\n\n.my-56{\n  margin-top: 14rem;\n  margin-bottom: 14rem;\n}\n\n.mx-56{\n  margin-left: 14rem;\n  margin-right: 14rem;\n}\n\n.my-64{\n  margin-top: 16rem;\n  margin-bottom: 16rem;\n}\n\n.mx-64{\n  margin-left: 16rem;\n  margin-right: 16rem;\n}\n\n.my-auto{\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.mx-auto{\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.my-px{\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\n.mx-px{\n  margin-left: 1px;\n  margin-right: 1px;\n}\n\n.-my-1{\n  margin-top: -0.25rem;\n  margin-bottom: -0.25rem;\n}\n\n.-mx-1{\n  margin-left: -0.25rem;\n  margin-right: -0.25rem;\n}\n\n.-my-2{\n  margin-top: -0.5rem;\n  margin-bottom: -0.5rem;\n}\n\n.-mx-2{\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n\n.-my-3{\n  margin-top: -0.75rem;\n  margin-bottom: -0.75rem;\n}\n\n.-mx-3{\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n}\n\n.-my-4{\n  margin-top: -1rem;\n  margin-bottom: -1rem;\n}\n\n.-mx-4{\n  margin-left: -1rem;\n  margin-right: -1rem;\n}\n\n.-my-5{\n  margin-top: -1.25rem;\n  margin-bottom: -1.25rem;\n}\n\n.-mx-5{\n  margin-left: -1.25rem;\n  margin-right: -1.25rem;\n}\n\n.-my-6{\n  margin-top: -1.5rem;\n  margin-bottom: -1.5rem;\n}\n\n.-mx-6{\n  margin-left: -1.5rem;\n  margin-right: -1.5rem;\n}\n\n.-my-8{\n  margin-top: -2rem;\n  margin-bottom: -2rem;\n}\n\n.-mx-8{\n  margin-left: -2rem;\n  margin-right: -2rem;\n}\n\n.-my-10{\n  margin-top: -2.5rem;\n  margin-bottom: -2.5rem;\n}\n\n.-mx-10{\n  margin-left: -2.5rem;\n  margin-right: -2.5rem;\n}\n\n.-my-12{\n  margin-top: -3rem;\n  margin-bottom: -3rem;\n}\n\n.-mx-12{\n  margin-left: -3rem;\n  margin-right: -3rem;\n}\n\n.-my-16{\n  margin-top: -4rem;\n  margin-bottom: -4rem;\n}\n\n.-mx-16{\n  margin-left: -4rem;\n  margin-right: -4rem;\n}\n\n.-my-20{\n  margin-top: -5rem;\n  margin-bottom: -5rem;\n}\n\n.-mx-20{\n  margin-left: -5rem;\n  margin-right: -5rem;\n}\n\n.-my-24{\n  margin-top: -6rem;\n  margin-bottom: -6rem;\n}\n\n.-mx-24{\n  margin-left: -6rem;\n  margin-right: -6rem;\n}\n\n.-my-32{\n  margin-top: -8rem;\n  margin-bottom: -8rem;\n}\n\n.-mx-32{\n  margin-left: -8rem;\n  margin-right: -8rem;\n}\n\n.-my-40{\n  margin-top: -10rem;\n  margin-bottom: -10rem;\n}\n\n.-mx-40{\n  margin-left: -10rem;\n  margin-right: -10rem;\n}\n\n.-my-48{\n  margin-top: -12rem;\n  margin-bottom: -12rem;\n}\n\n.-mx-48{\n  margin-left: -12rem;\n  margin-right: -12rem;\n}\n\n.-my-56{\n  margin-top: -14rem;\n  margin-bottom: -14rem;\n}\n\n.-mx-56{\n  margin-left: -14rem;\n  margin-right: -14rem;\n}\n\n.-my-64{\n  margin-top: -16rem;\n  margin-bottom: -16rem;\n}\n\n.-mx-64{\n  margin-left: -16rem;\n  margin-right: -16rem;\n}\n\n.-my-px{\n  margin-top: -1px;\n  margin-bottom: -1px;\n}\n\n.-mx-px{\n  margin-left: -1px;\n  margin-right: -1px;\n}\n\n.mt-0{\n  margin-top: 0;\n}\n\n.mr-0{\n  margin-right: 0;\n}\n\n.mb-0{\n  margin-bottom: 0;\n}\n\n.ml-0{\n  margin-left: 0;\n}\n\n.mt-1{\n  margin-top: 0.25rem;\n}\n\n.mr-1{\n  margin-right: 0.25rem;\n}\n\n.mb-1{\n  margin-bottom: 0.25rem;\n}\n\n.ml-1{\n  margin-left: 0.25rem;\n}\n\n.mt-2{\n  margin-top: 0.5rem;\n}\n\n.mr-2{\n  margin-right: 0.5rem;\n}\n\n.mb-2{\n  margin-bottom: 0.5rem;\n}\n\n.ml-2{\n  margin-left: 0.5rem;\n}\n\n.mt-3{\n  margin-top: 0.75rem;\n}\n\n.mr-3{\n  margin-right: 0.75rem;\n}\n\n.mb-3{\n  margin-bottom: 0.75rem;\n}\n\n.ml-3{\n  margin-left: 0.75rem;\n}\n\n.mt-4{\n  margin-top: 1rem;\n}\n\n.mr-4{\n  margin-right: 1rem;\n}\n\n.mb-4{\n  margin-bottom: 1rem;\n}\n\n.ml-4{\n  margin-left: 1rem;\n}\n\n.mt-5{\n  margin-top: 1.25rem;\n}\n\n.mr-5{\n  margin-right: 1.25rem;\n}\n\n.mb-5{\n  margin-bottom: 1.25rem;\n}\n\n.ml-5{\n  margin-left: 1.25rem;\n}\n\n.mt-6{\n  margin-top: 1.5rem;\n}\n\n.mr-6{\n  margin-right: 1.5rem;\n}\n\n.mb-6{\n  margin-bottom: 1.5rem;\n}\n\n.ml-6{\n  margin-left: 1.5rem;\n}\n\n.mt-8{\n  margin-top: 2rem;\n}\n\n.mr-8{\n  margin-right: 2rem;\n}\n\n.mb-8{\n  margin-bottom: 2rem;\n}\n\n.ml-8{\n  margin-left: 2rem;\n}\n\n.mt-10{\n  margin-top: 2.5rem;\n}\n\n.mr-10{\n  margin-right: 2.5rem;\n}\n\n.mb-10{\n  margin-bottom: 2.5rem;\n}\n\n.ml-10{\n  margin-left: 2.5rem;\n}\n\n.mt-12{\n  margin-top: 3rem;\n}\n\n.mr-12{\n  margin-right: 3rem;\n}\n\n.mb-12{\n  margin-bottom: 3rem;\n}\n\n.ml-12{\n  margin-left: 3rem;\n}\n\n.mt-16{\n  margin-top: 4rem;\n}\n\n.mr-16{\n  margin-right: 4rem;\n}\n\n.mb-16{\n  margin-bottom: 4rem;\n}\n\n.ml-16{\n  margin-left: 4rem;\n}\n\n.mt-20{\n  margin-top: 5rem;\n}\n\n.mr-20{\n  margin-right: 5rem;\n}\n\n.mb-20{\n  margin-bottom: 5rem;\n}\n\n.ml-20{\n  margin-left: 5rem;\n}\n\n.mt-24{\n  margin-top: 6rem;\n}\n\n.mr-24{\n  margin-right: 6rem;\n}\n\n.mb-24{\n  margin-bottom: 6rem;\n}\n\n.ml-24{\n  margin-left: 6rem;\n}\n\n.mt-32{\n  margin-top: 8rem;\n}\n\n.mr-32{\n  margin-right: 8rem;\n}\n\n.mb-32{\n  margin-bottom: 8rem;\n}\n\n.ml-32{\n  margin-left: 8rem;\n}\n\n.mt-40{\n  margin-top: 10rem;\n}\n\n.mr-40{\n  margin-right: 10rem;\n}\n\n.mb-40{\n  margin-bottom: 10rem;\n}\n\n.ml-40{\n  margin-left: 10rem;\n}\n\n.mt-48{\n  margin-top: 12rem;\n}\n\n.mr-48{\n  margin-right: 12rem;\n}\n\n.mb-48{\n  margin-bottom: 12rem;\n}\n\n.ml-48{\n  margin-left: 12rem;\n}\n\n.mt-56{\n  margin-top: 14rem;\n}\n\n.mr-56{\n  margin-right: 14rem;\n}\n\n.mb-56{\n  margin-bottom: 14rem;\n}\n\n.ml-56{\n  margin-left: 14rem;\n}\n\n.mt-64{\n  margin-top: 16rem;\n}\n\n.mr-64{\n  margin-right: 16rem;\n}\n\n.mb-64{\n  margin-bottom: 16rem;\n}\n\n.ml-64{\n  margin-left: 16rem;\n}\n\n.mt-auto{\n  margin-top: auto;\n}\n\n.mr-auto{\n  margin-right: auto;\n}\n\n.mb-auto{\n  margin-bottom: auto;\n}\n\n.ml-auto{\n  margin-left: auto;\n}\n\n.mt-px{\n  margin-top: 1px;\n}\n\n.mr-px{\n  margin-right: 1px;\n}\n\n.mb-px{\n  margin-bottom: 1px;\n}\n\n.ml-px{\n  margin-left: 1px;\n}\n\n.-mt-1{\n  margin-top: -0.25rem;\n}\n\n.-mr-1{\n  margin-right: -0.25rem;\n}\n\n.-mb-1{\n  margin-bottom: -0.25rem;\n}\n\n.-ml-1{\n  margin-left: -0.25rem;\n}\n\n.-mt-2{\n  margin-top: -0.5rem;\n}\n\n.-mr-2{\n  margin-right: -0.5rem;\n}\n\n.-mb-2{\n  margin-bottom: -0.5rem;\n}\n\n.-ml-2{\n  margin-left: -0.5rem;\n}\n\n.-mt-3{\n  margin-top: -0.75rem;\n}\n\n.-mr-3{\n  margin-right: -0.75rem;\n}\n\n.-mb-3{\n  margin-bottom: -0.75rem;\n}\n\n.-ml-3{\n  margin-left: -0.75rem;\n}\n\n.-mt-4{\n  margin-top: -1rem;\n}\n\n.-mr-4{\n  margin-right: -1rem;\n}\n\n.-mb-4{\n  margin-bottom: -1rem;\n}\n\n.-ml-4{\n  margin-left: -1rem;\n}\n\n.-mt-5{\n  margin-top: -1.25rem;\n}\n\n.-mr-5{\n  margin-right: -1.25rem;\n}\n\n.-mb-5{\n  margin-bottom: -1.25rem;\n}\n\n.-ml-5{\n  margin-left: -1.25rem;\n}\n\n.-mt-6{\n  margin-top: -1.5rem;\n}\n\n.-mr-6{\n  margin-right: -1.5rem;\n}\n\n.-mb-6{\n  margin-bottom: -1.5rem;\n}\n\n.-ml-6{\n  margin-left: -1.5rem;\n}\n\n.-mt-8{\n  margin-top: -2rem;\n}\n\n.-mr-8{\n  margin-right: -2rem;\n}\n\n.-mb-8{\n  margin-bottom: -2rem;\n}\n\n.-ml-8{\n  margin-left: -2rem;\n}\n\n.-mt-10{\n  margin-top: -2.5rem;\n}\n\n.-mr-10{\n  margin-right: -2.5rem;\n}\n\n.-mb-10{\n  margin-bottom: -2.5rem;\n}\n\n.-ml-10{\n  margin-left: -2.5rem;\n}\n\n.-mt-12{\n  margin-top: -3rem;\n}\n\n.-mr-12{\n  margin-right: -3rem;\n}\n\n.-mb-12{\n  margin-bottom: -3rem;\n}\n\n.-ml-12{\n  margin-left: -3rem;\n}\n\n.-mt-16{\n  margin-top: -4rem;\n}\n\n.-mr-16{\n  margin-right: -4rem;\n}\n\n.-mb-16{\n  margin-bottom: -4rem;\n}\n\n.-ml-16{\n  margin-left: -4rem;\n}\n\n.-mt-20{\n  margin-top: -5rem;\n}\n\n.-mr-20{\n  margin-right: -5rem;\n}\n\n.-mb-20{\n  margin-bottom: -5rem;\n}\n\n.-ml-20{\n  margin-left: -5rem;\n}\n\n.-mt-24{\n  margin-top: -6rem;\n}\n\n.-mr-24{\n  margin-right: -6rem;\n}\n\n.-mb-24{\n  margin-bottom: -6rem;\n}\n\n.-ml-24{\n  margin-left: -6rem;\n}\n\n.-mt-32{\n  margin-top: -8rem;\n}\n\n.-mr-32{\n  margin-right: -8rem;\n}\n\n.-mb-32{\n  margin-bottom: -8rem;\n}\n\n.-ml-32{\n  margin-left: -8rem;\n}\n\n.-mt-40{\n  margin-top: -10rem;\n}\n\n.-mr-40{\n  margin-right: -10rem;\n}\n\n.-mb-40{\n  margin-bottom: -10rem;\n}\n\n.-ml-40{\n  margin-left: -10rem;\n}\n\n.-mt-48{\n  margin-top: -12rem;\n}\n\n.-mr-48{\n  margin-right: -12rem;\n}\n\n.-mb-48{\n  margin-bottom: -12rem;\n}\n\n.-ml-48{\n  margin-left: -12rem;\n}\n\n.-mt-56{\n  margin-top: -14rem;\n}\n\n.-mr-56{\n  margin-right: -14rem;\n}\n\n.-mb-56{\n  margin-bottom: -14rem;\n}\n\n.-ml-56{\n  margin-left: -14rem;\n}\n\n.-mt-64{\n  margin-top: -16rem;\n}\n\n.-mr-64{\n  margin-right: -16rem;\n}\n\n.-mb-64{\n  margin-bottom: -16rem;\n}\n\n.-ml-64{\n  margin-left: -16rem;\n}\n\n.-mt-px{\n  margin-top: -1px;\n}\n\n.-mr-px{\n  margin-right: -1px;\n}\n\n.-mb-px{\n  margin-bottom: -1px;\n}\n\n.-ml-px{\n  margin-left: -1px;\n}\n\n.max-h-full{\n  max-height: 100%;\n}\n\n.max-h-screen{\n  max-height: 100vh;\n}\n\n.max-w-xs{\n  max-width: 20rem;\n}\n\n.max-w-sm{\n  max-width: 24rem;\n}\n\n.max-w-md{\n  max-width: 28rem;\n}\n\n.max-w-lg{\n  max-width: 32rem;\n}\n\n.max-w-xl{\n  max-width: 36rem;\n}\n\n.max-w-2xl{\n  max-width: 42rem;\n}\n\n.max-w-3xl{\n  max-width: 48rem;\n}\n\n.max-w-4xl{\n  max-width: 56rem;\n}\n\n.max-w-5xl{\n  max-width: 64rem;\n}\n\n.max-w-6xl{\n  max-width: 72rem;\n}\n\n.max-w-full{\n  max-width: 100%;\n}\n\n.min-h-0{\n  min-height: 0;\n}\n\n.min-h-full{\n  min-height: 100%;\n}\n\n.min-h-screen{\n  min-height: 100vh;\n}\n\n.min-w-0{\n  min-width: 0;\n}\n\n.min-w-full{\n  min-width: 100%;\n}\n\n.object-contain{\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.object-cover{\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.object-fill{\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n\n.object-none{\n  -o-object-fit: none;\n     object-fit: none;\n}\n\n.object-scale-down{\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n\n.object-bottom{\n  -o-object-position: bottom;\n     object-position: bottom;\n}\n\n.object-center{\n  -o-object-position: center;\n     object-position: center;\n}\n\n.object-left{\n  -o-object-position: left;\n     object-position: left;\n}\n\n.object-left-bottom{\n  -o-object-position: left bottom;\n     object-position: left bottom;\n}\n\n.object-left-top{\n  -o-object-position: left top;\n     object-position: left top;\n}\n\n.object-right{\n  -o-object-position: right;\n     object-position: right;\n}\n\n.object-right-bottom{\n  -o-object-position: right bottom;\n     object-position: right bottom;\n}\n\n.object-right-top{\n  -o-object-position: right top;\n     object-position: right top;\n}\n\n.object-top{\n  -o-object-position: top;\n     object-position: top;\n}\n\n.opacity-0{\n  opacity: 0;\n}\n\n.opacity-25{\n  opacity: 0.25;\n}\n\n.opacity-50{\n  opacity: 0.5;\n}\n\n.opacity-75{\n  opacity: 0.75;\n}\n\n.opacity-100{\n  opacity: 1;\n}\n\n.outline-none{\n  outline: 0;\n}\n\n.focus\\:outline-none:focus{\n  outline: 0;\n}\n\n.overflow-auto{\n  overflow: auto;\n}\n\n.overflow-hidden{\n  overflow: hidden;\n}\n\n.overflow-visible{\n  overflow: visible;\n}\n\n.overflow-scroll{\n  overflow: scroll;\n}\n\n.overflow-x-auto{\n  overflow-x: auto;\n}\n\n.overflow-y-auto{\n  overflow-y: auto;\n}\n\n.overflow-x-hidden{\n  overflow-x: hidden;\n}\n\n.overflow-y-hidden{\n  overflow-y: hidden;\n}\n\n.overflow-x-visible{\n  overflow-x: visible;\n}\n\n.overflow-y-visible{\n  overflow-y: visible;\n}\n\n.overflow-x-scroll{\n  overflow-x: scroll;\n}\n\n.overflow-y-scroll{\n  overflow-y: scroll;\n}\n\n.scrolling-touch{\n  -webkit-overflow-scrolling: touch;\n}\n\n.scrolling-auto{\n  -webkit-overflow-scrolling: auto;\n}\n\n.p-0{\n  padding: 0;\n}\n\n.p-1{\n  padding: 0.25rem;\n}\n\n.p-2{\n  padding: 0.5rem;\n}\n\n.p-3{\n  padding: 0.75rem;\n}\n\n.p-4{\n  padding: 1rem;\n}\n\n.p-5{\n  padding: 1.25rem;\n}\n\n.p-6{\n  padding: 1.5rem;\n}\n\n.p-8{\n  padding: 2rem;\n}\n\n.p-10{\n  padding: 2.5rem;\n}\n\n.p-12{\n  padding: 3rem;\n}\n\n.p-16{\n  padding: 4rem;\n}\n\n.p-20{\n  padding: 5rem;\n}\n\n.p-24{\n  padding: 6rem;\n}\n\n.p-32{\n  padding: 8rem;\n}\n\n.p-40{\n  padding: 10rem;\n}\n\n.p-48{\n  padding: 12rem;\n}\n\n.p-56{\n  padding: 14rem;\n}\n\n.p-64{\n  padding: 16rem;\n}\n\n.p-px{\n  padding: 1px;\n}\n\n.py-0{\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.px-0{\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.py-1{\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.px-1{\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n\n.py-2{\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.px-2{\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.py-3{\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.px-3{\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n\n.py-4{\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.px-4{\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.py-5{\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\n\n.px-5{\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n\n.py-6{\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n\n.px-6{\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.py-8{\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n\n.px-8{\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n\n.py-10{\n  padding-top: 2.5rem;\n  padding-bottom: 2.5rem;\n}\n\n.px-10{\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n}\n\n.py-12{\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n\n.px-12{\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n\n.py-16{\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n\n.px-16{\n  padding-left: 4rem;\n  padding-right: 4rem;\n}\n\n.py-20{\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n}\n\n.px-20{\n  padding-left: 5rem;\n  padding-right: 5rem;\n}\n\n.py-24{\n  padding-top: 6rem;\n  padding-bottom: 6rem;\n}\n\n.px-24{\n  padding-left: 6rem;\n  padding-right: 6rem;\n}\n\n.py-32{\n  padding-top: 8rem;\n  padding-bottom: 8rem;\n}\n\n.px-32{\n  padding-left: 8rem;\n  padding-right: 8rem;\n}\n\n.py-40{\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n}\n\n.px-40{\n  padding-left: 10rem;\n  padding-right: 10rem;\n}\n\n.py-48{\n  padding-top: 12rem;\n  padding-bottom: 12rem;\n}\n\n.px-48{\n  padding-left: 12rem;\n  padding-right: 12rem;\n}\n\n.py-56{\n  padding-top: 14rem;\n  padding-bottom: 14rem;\n}\n\n.px-56{\n  padding-left: 14rem;\n  padding-right: 14rem;\n}\n\n.py-64{\n  padding-top: 16rem;\n  padding-bottom: 16rem;\n}\n\n.px-64{\n  padding-left: 16rem;\n  padding-right: 16rem;\n}\n\n.py-px{\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n\n.px-px{\n  padding-left: 1px;\n  padding-right: 1px;\n}\n\n.pt-0{\n  padding-top: 0;\n}\n\n.pr-0{\n  padding-right: 0;\n}\n\n.pb-0{\n  padding-bottom: 0;\n}\n\n.pl-0{\n  padding-left: 0;\n}\n\n.pt-1{\n  padding-top: 0.25rem;\n}\n\n.pr-1{\n  padding-right: 0.25rem;\n}\n\n.pb-1{\n  padding-bottom: 0.25rem;\n}\n\n.pl-1{\n  padding-left: 0.25rem;\n}\n\n.pt-2{\n  padding-top: 0.5rem;\n}\n\n.pr-2{\n  padding-right: 0.5rem;\n}\n\n.pb-2{\n  padding-bottom: 0.5rem;\n}\n\n.pl-2{\n  padding-left: 0.5rem;\n}\n\n.pt-3{\n  padding-top: 0.75rem;\n}\n\n.pr-3{\n  padding-right: 0.75rem;\n}\n\n.pb-3{\n  padding-bottom: 0.75rem;\n}\n\n.pl-3{\n  padding-left: 0.75rem;\n}\n\n.pt-4{\n  padding-top: 1rem;\n}\n\n.pr-4{\n  padding-right: 1rem;\n}\n\n.pb-4{\n  padding-bottom: 1rem;\n}\n\n.pl-4{\n  padding-left: 1rem;\n}\n\n.pt-5{\n  padding-top: 1.25rem;\n}\n\n.pr-5{\n  padding-right: 1.25rem;\n}\n\n.pb-5{\n  padding-bottom: 1.25rem;\n}\n\n.pl-5{\n  padding-left: 1.25rem;\n}\n\n.pt-6{\n  padding-top: 1.5rem;\n}\n\n.pr-6{\n  padding-right: 1.5rem;\n}\n\n.pb-6{\n  padding-bottom: 1.5rem;\n}\n\n.pl-6{\n  padding-left: 1.5rem;\n}\n\n.pt-8{\n  padding-top: 2rem;\n}\n\n.pr-8{\n  padding-right: 2rem;\n}\n\n.pb-8{\n  padding-bottom: 2rem;\n}\n\n.pl-8{\n  padding-left: 2rem;\n}\n\n.pt-10{\n  padding-top: 2.5rem;\n}\n\n.pr-10{\n  padding-right: 2.5rem;\n}\n\n.pb-10{\n  padding-bottom: 2.5rem;\n}\n\n.pl-10{\n  padding-left: 2.5rem;\n}\n\n.pt-12{\n  padding-top: 3rem;\n}\n\n.pr-12{\n  padding-right: 3rem;\n}\n\n.pb-12{\n  padding-bottom: 3rem;\n}\n\n.pl-12{\n  padding-left: 3rem;\n}\n\n.pt-16{\n  padding-top: 4rem;\n}\n\n.pr-16{\n  padding-right: 4rem;\n}\n\n.pb-16{\n  padding-bottom: 4rem;\n}\n\n.pl-16{\n  padding-left: 4rem;\n}\n\n.pt-20{\n  padding-top: 5rem;\n}\n\n.pr-20{\n  padding-right: 5rem;\n}\n\n.pb-20{\n  padding-bottom: 5rem;\n}\n\n.pl-20{\n  padding-left: 5rem;\n}\n\n.pt-24{\n  padding-top: 6rem;\n}\n\n.pr-24{\n  padding-right: 6rem;\n}\n\n.pb-24{\n  padding-bottom: 6rem;\n}\n\n.pl-24{\n  padding-left: 6rem;\n}\n\n.pt-32{\n  padding-top: 8rem;\n}\n\n.pr-32{\n  padding-right: 8rem;\n}\n\n.pb-32{\n  padding-bottom: 8rem;\n}\n\n.pl-32{\n  padding-left: 8rem;\n}\n\n.pt-40{\n  padding-top: 10rem;\n}\n\n.pr-40{\n  padding-right: 10rem;\n}\n\n.pb-40{\n  padding-bottom: 10rem;\n}\n\n.pl-40{\n  padding-left: 10rem;\n}\n\n.pt-48{\n  padding-top: 12rem;\n}\n\n.pr-48{\n  padding-right: 12rem;\n}\n\n.pb-48{\n  padding-bottom: 12rem;\n}\n\n.pl-48{\n  padding-left: 12rem;\n}\n\n.pt-56{\n  padding-top: 14rem;\n}\n\n.pr-56{\n  padding-right: 14rem;\n}\n\n.pb-56{\n  padding-bottom: 14rem;\n}\n\n.pl-56{\n  padding-left: 14rem;\n}\n\n.pt-64{\n  padding-top: 16rem;\n}\n\n.pr-64{\n  padding-right: 16rem;\n}\n\n.pb-64{\n  padding-bottom: 16rem;\n}\n\n.pl-64{\n  padding-left: 16rem;\n}\n\n.pt-px{\n  padding-top: 1px;\n}\n\n.pr-px{\n  padding-right: 1px;\n}\n\n.pb-px{\n  padding-bottom: 1px;\n}\n\n.pl-px{\n  padding-left: 1px;\n}\n\n.pointer-events-none{\n  pointer-events: none;\n}\n\n.pointer-events-auto{\n  pointer-events: auto;\n}\n\n.static{\n  position: static;\n}\n\n.fixed{\n  position: fixed;\n}\n\n.absolute{\n  position: absolute;\n}\n\n.relative{\n  position: relative;\n}\n\n.sticky{\n  position: -webkit-sticky;\n  position: sticky;\n}\n\n.inset-0{\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.inset-auto{\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n}\n\n.inset-y-0{\n  top: 0;\n  bottom: 0;\n}\n\n.inset-x-0{\n  right: 0;\n  left: 0;\n}\n\n.inset-y-auto{\n  top: auto;\n  bottom: auto;\n}\n\n.inset-x-auto{\n  right: auto;\n  left: auto;\n}\n\n.top-0{\n  top: 0;\n}\n\n.right-0{\n  right: 0;\n}\n\n.bottom-0{\n  bottom: 0;\n}\n\n.left-0{\n  left: 0;\n}\n\n.top-auto{\n  top: auto;\n}\n\n.right-auto{\n  right: auto;\n}\n\n.bottom-auto{\n  bottom: auto;\n}\n\n.left-auto{\n  left: auto;\n}\n\n.resize-none{\n  resize: none;\n}\n\n.resize-y{\n  resize: vertical;\n}\n\n.resize-x{\n  resize: horizontal;\n}\n\n.resize{\n  resize: both;\n}\n\n.shadow{\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n\n.shadow-md{\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\n.shadow-lg{\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n\n.shadow-xl{\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n\n.shadow-2xl{\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n}\n\n.shadow-inner{\n  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n}\n\n.shadow-outline{\n  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n}\n\n.shadow-none{\n  box-shadow: none;\n}\n\n.hover\\:shadow:hover{\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n\n.hover\\:shadow-md:hover{\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\n.hover\\:shadow-lg:hover{\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n\n.hover\\:shadow-xl:hover{\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n\n.hover\\:shadow-2xl:hover{\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n}\n\n.hover\\:shadow-inner:hover{\n  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n}\n\n.hover\\:shadow-outline:hover{\n  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n}\n\n.hover\\:shadow-none:hover{\n  box-shadow: none;\n}\n\n.focus\\:shadow:focus{\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n\n.focus\\:shadow-md:focus{\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\n.focus\\:shadow-lg:focus{\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n\n.focus\\:shadow-xl:focus{\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n\n.focus\\:shadow-2xl:focus{\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n}\n\n.focus\\:shadow-inner:focus{\n  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n}\n\n.focus\\:shadow-outline:focus{\n  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n}\n\n.focus\\:shadow-none:focus{\n  box-shadow: none;\n}\n\n.fill-current{\n  fill: currentColor;\n}\n\n.stroke-current{\n  stroke: currentColor;\n}\n\n.table-auto{\n  table-layout: auto;\n}\n\n.table-fixed{\n  table-layout: fixed;\n}\n\n.text-left{\n  text-align: left;\n}\n\n.text-center{\n  text-align: center;\n}\n\n.text-right{\n  text-align: right;\n}\n\n.text-justify{\n  text-align: justify;\n}\n\n.text-transparent{\n  color: transparent;\n}\n\n.text-black{\n  color: #000;\n}\n\n.text-white{\n  color: #fff;\n}\n\n.text-gray-100{\n  color: hsl(216, 33%, 97%);\n}\n\n.text-gray-200{\n  color: hsl(214, 15%, 91%);\n}\n\n.text-gray-300{\n  color: hsl(210, 16%, 82%);\n}\n\n.text-gray-400{\n  color: hsl(211, 13%, 65%);\n}\n\n.text-gray-500{\n  color: hsl(211, 10%, 53%);\n}\n\n.text-gray-600{\n  color: hsl(211, 12%, 43%);\n}\n\n.text-gray-700{\n  color: hsl(209, 14%, 37%);\n}\n\n.text-gray-800{\n  color: hsl(209, 18%, 30%);\n}\n\n.text-gray-900{\n  color: hsl(209, 20%, 25%);\n}\n\n.text-gray-1000{\n  color: hsl(210, 24%, 16%);\n}\n\n.text-red-100{\n  color: hsl(360, 100%, 95%);\n}\n\n.text-red-200{\n  color: hsl(360, 100%, 87%);\n}\n\n.text-red-300{\n  color: hsl(360, 100%, 80%);\n}\n\n.text-red-400{\n  color: hsl(360, 91%, 69%);\n}\n\n.text-red-500{\n  color: hsl(360, 83%, 62%);\n}\n\n.text-red-600{\n  color: hsl(356, 75%, 53%);\n}\n\n.text-red-700{\n  color: hsl(354, 85%, 44%);\n}\n\n.text-red-800{\n  color: hsl(352, 90%, 35%);\n}\n\n.text-red-900{\n  color: hsl(350, 94%, 28%);\n}\n\n.text-red-1000{\n  color: hsl(348, 94%, 20%);\n}\n\n.text-orange-100{\n  color: #fffaf0;\n}\n\n.text-orange-200{\n  color: #feebc8;\n}\n\n.text-orange-300{\n  color: #fbd38d;\n}\n\n.text-orange-400{\n  color: #f6ad55;\n}\n\n.text-orange-500{\n  color: #ed8936;\n}\n\n.text-orange-600{\n  color: #dd6b20;\n}\n\n.text-orange-700{\n  color: #c05621;\n}\n\n.text-orange-800{\n  color: #9c4221;\n}\n\n.text-orange-900{\n  color: #7b341e;\n}\n\n.text-yellow-100{\n  color: hsl(15, 86%, 30%);\n}\n\n.text-yellow-200{\n  color: hsl(22, 82%, 39%);\n}\n\n.text-yellow-300{\n  color: hsl(29, 80%, 44%);\n}\n\n.text-yellow-400{\n  color: hsl(36, 77%, 49%);\n}\n\n.text-yellow-500{\n  color: hsl(42, 87%, 55%);\n}\n\n.text-yellow-600{\n  color: hsl(44, 92%, 63%);\n}\n\n.text-yellow-700{\n  color: hsl(48, 94%, 68%);\n}\n\n.text-yellow-800{\n  color: hsl(48, 95%, 76%);\n}\n\n.text-yellow-900{\n  color: hsl(48, 100%, 88%);\n}\n\n.text-yellow-1000{\n  color: hsl(49, 100%, 96%);\n}\n\n.text-green-100{\n  color: #f0fff4;\n}\n\n.text-green-200{\n  color: #c6f6d5;\n}\n\n.text-green-300{\n  color: #9ae6b4;\n}\n\n.text-green-400{\n  color: #68d391;\n}\n\n.text-green-500{\n  color: #48bb78;\n}\n\n.text-green-600{\n  color: #38a169;\n}\n\n.text-green-700{\n  color: #2f855a;\n}\n\n.text-green-800{\n  color: #276749;\n}\n\n.text-green-900{\n  color: #22543d;\n}\n\n.text-teal-100{\n  color: hsl(170, 97%, 15%);\n}\n\n.text-teal-200{\n  color: hsl(168, 80%, 23%);\n}\n\n.text-teal-300{\n  color: hsl(166, 72%, 28%);\n}\n\n.text-teal-400{\n  color: hsl(164, 71%, 34%);\n}\n\n.text-teal-500{\n  color: hsl(162, 63%, 41%);\n}\n\n.text-teal-600{\n  color: hsl(160, 51%, 49%);\n}\n\n.text-teal-700{\n  color: hsl(158, 58%, 62%);\n}\n\n.text-teal-800{\n  color: hsl(156, 73%, 74%);\n}\n\n.text-teal-900{\n  color: hsl(154, 75%, 87%);\n}\n\n.text-teal-1000{\n  color: hsl(152, 68%, 96%);\n}\n\n.text-blue-100{\n  color: hsl(195, 100%, 95%);\n}\n\n.text-blue-200{\n  color: hsl(195, 100%, 85%);\n}\n\n.text-blue-300{\n  color: hsl(195, 97%, 75%);\n}\n\n.text-blue-400{\n  color: hsl(196, 94%, 67%);\n}\n\n.text-blue-500{\n  color: hsl(197, 92%, 61%);\n}\n\n.text-blue-600{\n  color: hsl(199, 84%, 55%);\n}\n\n.text-blue-700{\n  color: hsl(201, 79%, 46%);\n}\n\n.text-blue-800{\n  color: hsl(202, 83%, 41%);\n}\n\n.text-blue-900{\n  color: hsl(203, 87%, 34%);\n}\n\n.text-blue-1000{\n  color: hsl(204, 96%, 27%);\n}\n\n.text-indigo-100{\n  color: hsl(221, 68%, 93%);\n}\n\n.text-indigo-200{\n  color: hsl(221, 78%, 86%);\n}\n\n.text-indigo-300{\n  color: hsl(224, 67%, 76%);\n}\n\n.text-indigo-400{\n  color: hsl(225, 57%, 67%);\n}\n\n.text-indigo-500{\n  color: hsl(227, 50%, 59%);\n}\n\n.text-indigo-600{\n  color: hsl(227, 42%, 51%);\n}\n\n.text-indigo-700{\n  color: hsl(228, 45%, 45%);\n}\n\n.text-indigo-800{\n  color: hsl(230, 49%, 41%);\n}\n\n.text-indigo-900{\n  color: hsl(232, 51%, 36%);\n}\n\n.text-indigo-1000{\n  color: hsl(234, 62%, 26%);\n}\n\n.text-purple-100{\n  color: #faf5ff;\n}\n\n.text-purple-200{\n  color: #e9d8fd;\n}\n\n.text-purple-300{\n  color: #d6bcfa;\n}\n\n.text-purple-400{\n  color: #b794f4;\n}\n\n.text-purple-500{\n  color: #9f7aea;\n}\n\n.text-purple-600{\n  color: #805ad5;\n}\n\n.text-purple-700{\n  color: #6b46c1;\n}\n\n.text-purple-800{\n  color: #553c9a;\n}\n\n.text-purple-900{\n  color: #44337a;\n}\n\n.text-pink-100{\n  color: #fff5f7;\n}\n\n.text-pink-200{\n  color: #fed7e2;\n}\n\n.text-pink-300{\n  color: #fbb6ce;\n}\n\n.text-pink-400{\n  color: #f687b3;\n}\n\n.text-pink-500{\n  color: #ed64a6;\n}\n\n.text-pink-600{\n  color: #d53f8c;\n}\n\n.text-pink-700{\n  color: #b83280;\n}\n\n.text-pink-800{\n  color: #97266d;\n}\n\n.text-pink-900{\n  color: #702459;\n}\n\n.hover\\:text-transparent:hover{\n  color: transparent;\n}\n\n.hover\\:text-black:hover{\n  color: #000;\n}\n\n.hover\\:text-white:hover{\n  color: #fff;\n}\n\n.hover\\:text-gray-100:hover{\n  color: hsl(216, 33%, 97%);\n}\n\n.hover\\:text-gray-200:hover{\n  color: hsl(214, 15%, 91%);\n}\n\n.hover\\:text-gray-300:hover{\n  color: hsl(210, 16%, 82%);\n}\n\n.hover\\:text-gray-400:hover{\n  color: hsl(211, 13%, 65%);\n}\n\n.hover\\:text-gray-500:hover{\n  color: hsl(211, 10%, 53%);\n}\n\n.hover\\:text-gray-600:hover{\n  color: hsl(211, 12%, 43%);\n}\n\n.hover\\:text-gray-700:hover{\n  color: hsl(209, 14%, 37%);\n}\n\n.hover\\:text-gray-800:hover{\n  color: hsl(209, 18%, 30%);\n}\n\n.hover\\:text-gray-900:hover{\n  color: hsl(209, 20%, 25%);\n}\n\n.hover\\:text-gray-1000:hover{\n  color: hsl(210, 24%, 16%);\n}\n\n.hover\\:text-red-100:hover{\n  color: hsl(360, 100%, 95%);\n}\n\n.hover\\:text-red-200:hover{\n  color: hsl(360, 100%, 87%);\n}\n\n.hover\\:text-red-300:hover{\n  color: hsl(360, 100%, 80%);\n}\n\n.hover\\:text-red-400:hover{\n  color: hsl(360, 91%, 69%);\n}\n\n.hover\\:text-red-500:hover{\n  color: hsl(360, 83%, 62%);\n}\n\n.hover\\:text-red-600:hover{\n  color: hsl(356, 75%, 53%);\n}\n\n.hover\\:text-red-700:hover{\n  color: hsl(354, 85%, 44%);\n}\n\n.hover\\:text-red-800:hover{\n  color: hsl(352, 90%, 35%);\n}\n\n.hover\\:text-red-900:hover{\n  color: hsl(350, 94%, 28%);\n}\n\n.hover\\:text-red-1000:hover{\n  color: hsl(348, 94%, 20%);\n}\n\n.hover\\:text-orange-100:hover{\n  color: #fffaf0;\n}\n\n.hover\\:text-orange-200:hover{\n  color: #feebc8;\n}\n\n.hover\\:text-orange-300:hover{\n  color: #fbd38d;\n}\n\n.hover\\:text-orange-400:hover{\n  color: #f6ad55;\n}\n\n.hover\\:text-orange-500:hover{\n  color: #ed8936;\n}\n\n.hover\\:text-orange-600:hover{\n  color: #dd6b20;\n}\n\n.hover\\:text-orange-700:hover{\n  color: #c05621;\n}\n\n.hover\\:text-orange-800:hover{\n  color: #9c4221;\n}\n\n.hover\\:text-orange-900:hover{\n  color: #7b341e;\n}\n\n.hover\\:text-yellow-100:hover{\n  color: hsl(15, 86%, 30%);\n}\n\n.hover\\:text-yellow-200:hover{\n  color: hsl(22, 82%, 39%);\n}\n\n.hover\\:text-yellow-300:hover{\n  color: hsl(29, 80%, 44%);\n}\n\n.hover\\:text-yellow-400:hover{\n  color: hsl(36, 77%, 49%);\n}\n\n.hover\\:text-yellow-500:hover{\n  color: hsl(42, 87%, 55%);\n}\n\n.hover\\:text-yellow-600:hover{\n  color: hsl(44, 92%, 63%);\n}\n\n.hover\\:text-yellow-700:hover{\n  color: hsl(48, 94%, 68%);\n}\n\n.hover\\:text-yellow-800:hover{\n  color: hsl(48, 95%, 76%);\n}\n\n.hover\\:text-yellow-900:hover{\n  color: hsl(48, 100%, 88%);\n}\n\n.hover\\:text-yellow-1000:hover{\n  color: hsl(49, 100%, 96%);\n}\n\n.hover\\:text-green-100:hover{\n  color: #f0fff4;\n}\n\n.hover\\:text-green-200:hover{\n  color: #c6f6d5;\n}\n\n.hover\\:text-green-300:hover{\n  color: #9ae6b4;\n}\n\n.hover\\:text-green-400:hover{\n  color: #68d391;\n}\n\n.hover\\:text-green-500:hover{\n  color: #48bb78;\n}\n\n.hover\\:text-green-600:hover{\n  color: #38a169;\n}\n\n.hover\\:text-green-700:hover{\n  color: #2f855a;\n}\n\n.hover\\:text-green-800:hover{\n  color: #276749;\n}\n\n.hover\\:text-green-900:hover{\n  color: #22543d;\n}\n\n.hover\\:text-teal-100:hover{\n  color: hsl(170, 97%, 15%);\n}\n\n.hover\\:text-teal-200:hover{\n  color: hsl(168, 80%, 23%);\n}\n\n.hover\\:text-teal-300:hover{\n  color: hsl(166, 72%, 28%);\n}\n\n.hover\\:text-teal-400:hover{\n  color: hsl(164, 71%, 34%);\n}\n\n.hover\\:text-teal-500:hover{\n  color: hsl(162, 63%, 41%);\n}\n\n.hover\\:text-teal-600:hover{\n  color: hsl(160, 51%, 49%);\n}\n\n.hover\\:text-teal-700:hover{\n  color: hsl(158, 58%, 62%);\n}\n\n.hover\\:text-teal-800:hover{\n  color: hsl(156, 73%, 74%);\n}\n\n.hover\\:text-teal-900:hover{\n  color: hsl(154, 75%, 87%);\n}\n\n.hover\\:text-teal-1000:hover{\n  color: hsl(152, 68%, 96%);\n}\n\n.hover\\:text-blue-100:hover{\n  color: hsl(195, 100%, 95%);\n}\n\n.hover\\:text-blue-200:hover{\n  color: hsl(195, 100%, 85%);\n}\n\n.hover\\:text-blue-300:hover{\n  color: hsl(195, 97%, 75%);\n}\n\n.hover\\:text-blue-400:hover{\n  color: hsl(196, 94%, 67%);\n}\n\n.hover\\:text-blue-500:hover{\n  color: hsl(197, 92%, 61%);\n}\n\n.hover\\:text-blue-600:hover{\n  color: hsl(199, 84%, 55%);\n}\n\n.hover\\:text-blue-700:hover{\n  color: hsl(201, 79%, 46%);\n}\n\n.hover\\:text-blue-800:hover{\n  color: hsl(202, 83%, 41%);\n}\n\n.hover\\:text-blue-900:hover{\n  color: hsl(203, 87%, 34%);\n}\n\n.hover\\:text-blue-1000:hover{\n  color: hsl(204, 96%, 27%);\n}\n\n.hover\\:text-indigo-100:hover{\n  color: hsl(221, 68%, 93%);\n}\n\n.hover\\:text-indigo-200:hover{\n  color: hsl(221, 78%, 86%);\n}\n\n.hover\\:text-indigo-300:hover{\n  color: hsl(224, 67%, 76%);\n}\n\n.hover\\:text-indigo-400:hover{\n  color: hsl(225, 57%, 67%);\n}\n\n.hover\\:text-indigo-500:hover{\n  color: hsl(227, 50%, 59%);\n}\n\n.hover\\:text-indigo-600:hover{\n  color: hsl(227, 42%, 51%);\n}\n\n.hover\\:text-indigo-700:hover{\n  color: hsl(228, 45%, 45%);\n}\n\n.hover\\:text-indigo-800:hover{\n  color: hsl(230, 49%, 41%);\n}\n\n.hover\\:text-indigo-900:hover{\n  color: hsl(232, 51%, 36%);\n}\n\n.hover\\:text-indigo-1000:hover{\n  color: hsl(234, 62%, 26%);\n}\n\n.hover\\:text-purple-100:hover{\n  color: #faf5ff;\n}\n\n.hover\\:text-purple-200:hover{\n  color: #e9d8fd;\n}\n\n.hover\\:text-purple-300:hover{\n  color: #d6bcfa;\n}\n\n.hover\\:text-purple-400:hover{\n  color: #b794f4;\n}\n\n.hover\\:text-purple-500:hover{\n  color: #9f7aea;\n}\n\n.hover\\:text-purple-600:hover{\n  color: #805ad5;\n}\n\n.hover\\:text-purple-700:hover{\n  color: #6b46c1;\n}\n\n.hover\\:text-purple-800:hover{\n  color: #553c9a;\n}\n\n.hover\\:text-purple-900:hover{\n  color: #44337a;\n}\n\n.hover\\:text-pink-100:hover{\n  color: #fff5f7;\n}\n\n.hover\\:text-pink-200:hover{\n  color: #fed7e2;\n}\n\n.hover\\:text-pink-300:hover{\n  color: #fbb6ce;\n}\n\n.hover\\:text-pink-400:hover{\n  color: #f687b3;\n}\n\n.hover\\:text-pink-500:hover{\n  color: #ed64a6;\n}\n\n.hover\\:text-pink-600:hover{\n  color: #d53f8c;\n}\n\n.hover\\:text-pink-700:hover{\n  color: #b83280;\n}\n\n.hover\\:text-pink-800:hover{\n  color: #97266d;\n}\n\n.hover\\:text-pink-900:hover{\n  color: #702459;\n}\n\n.focus\\:text-transparent:focus{\n  color: transparent;\n}\n\n.focus\\:text-black:focus{\n  color: #000;\n}\n\n.focus\\:text-white:focus{\n  color: #fff;\n}\n\n.focus\\:text-gray-100:focus{\n  color: hsl(216, 33%, 97%);\n}\n\n.focus\\:text-gray-200:focus{\n  color: hsl(214, 15%, 91%);\n}\n\n.focus\\:text-gray-300:focus{\n  color: hsl(210, 16%, 82%);\n}\n\n.focus\\:text-gray-400:focus{\n  color: hsl(211, 13%, 65%);\n}\n\n.focus\\:text-gray-500:focus{\n  color: hsl(211, 10%, 53%);\n}\n\n.focus\\:text-gray-600:focus{\n  color: hsl(211, 12%, 43%);\n}\n\n.focus\\:text-gray-700:focus{\n  color: hsl(209, 14%, 37%);\n}\n\n.focus\\:text-gray-800:focus{\n  color: hsl(209, 18%, 30%);\n}\n\n.focus\\:text-gray-900:focus{\n  color: hsl(209, 20%, 25%);\n}\n\n.focus\\:text-gray-1000:focus{\n  color: hsl(210, 24%, 16%);\n}\n\n.focus\\:text-red-100:focus{\n  color: hsl(360, 100%, 95%);\n}\n\n.focus\\:text-red-200:focus{\n  color: hsl(360, 100%, 87%);\n}\n\n.focus\\:text-red-300:focus{\n  color: hsl(360, 100%, 80%);\n}\n\n.focus\\:text-red-400:focus{\n  color: hsl(360, 91%, 69%);\n}\n\n.focus\\:text-red-500:focus{\n  color: hsl(360, 83%, 62%);\n}\n\n.focus\\:text-red-600:focus{\n  color: hsl(356, 75%, 53%);\n}\n\n.focus\\:text-red-700:focus{\n  color: hsl(354, 85%, 44%);\n}\n\n.focus\\:text-red-800:focus{\n  color: hsl(352, 90%, 35%);\n}\n\n.focus\\:text-red-900:focus{\n  color: hsl(350, 94%, 28%);\n}\n\n.focus\\:text-red-1000:focus{\n  color: hsl(348, 94%, 20%);\n}\n\n.focus\\:text-orange-100:focus{\n  color: #fffaf0;\n}\n\n.focus\\:text-orange-200:focus{\n  color: #feebc8;\n}\n\n.focus\\:text-orange-300:focus{\n  color: #fbd38d;\n}\n\n.focus\\:text-orange-400:focus{\n  color: #f6ad55;\n}\n\n.focus\\:text-orange-500:focus{\n  color: #ed8936;\n}\n\n.focus\\:text-orange-600:focus{\n  color: #dd6b20;\n}\n\n.focus\\:text-orange-700:focus{\n  color: #c05621;\n}\n\n.focus\\:text-orange-800:focus{\n  color: #9c4221;\n}\n\n.focus\\:text-orange-900:focus{\n  color: #7b341e;\n}\n\n.focus\\:text-yellow-100:focus{\n  color: hsl(15, 86%, 30%);\n}\n\n.focus\\:text-yellow-200:focus{\n  color: hsl(22, 82%, 39%);\n}\n\n.focus\\:text-yellow-300:focus{\n  color: hsl(29, 80%, 44%);\n}\n\n.focus\\:text-yellow-400:focus{\n  color: hsl(36, 77%, 49%);\n}\n\n.focus\\:text-yellow-500:focus{\n  color: hsl(42, 87%, 55%);\n}\n\n.focus\\:text-yellow-600:focus{\n  color: hsl(44, 92%, 63%);\n}\n\n.focus\\:text-yellow-700:focus{\n  color: hsl(48, 94%, 68%);\n}\n\n.focus\\:text-yellow-800:focus{\n  color: hsl(48, 95%, 76%);\n}\n\n.focus\\:text-yellow-900:focus{\n  color: hsl(48, 100%, 88%);\n}\n\n.focus\\:text-yellow-1000:focus{\n  color: hsl(49, 100%, 96%);\n}\n\n.focus\\:text-green-100:focus{\n  color: #f0fff4;\n}\n\n.focus\\:text-green-200:focus{\n  color: #c6f6d5;\n}\n\n.focus\\:text-green-300:focus{\n  color: #9ae6b4;\n}\n\n.focus\\:text-green-400:focus{\n  color: #68d391;\n}\n\n.focus\\:text-green-500:focus{\n  color: #48bb78;\n}\n\n.focus\\:text-green-600:focus{\n  color: #38a169;\n}\n\n.focus\\:text-green-700:focus{\n  color: #2f855a;\n}\n\n.focus\\:text-green-800:focus{\n  color: #276749;\n}\n\n.focus\\:text-green-900:focus{\n  color: #22543d;\n}\n\n.focus\\:text-teal-100:focus{\n  color: hsl(170, 97%, 15%);\n}\n\n.focus\\:text-teal-200:focus{\n  color: hsl(168, 80%, 23%);\n}\n\n.focus\\:text-teal-300:focus{\n  color: hsl(166, 72%, 28%);\n}\n\n.focus\\:text-teal-400:focus{\n  color: hsl(164, 71%, 34%);\n}\n\n.focus\\:text-teal-500:focus{\n  color: hsl(162, 63%, 41%);\n}\n\n.focus\\:text-teal-600:focus{\n  color: hsl(160, 51%, 49%);\n}\n\n.focus\\:text-teal-700:focus{\n  color: hsl(158, 58%, 62%);\n}\n\n.focus\\:text-teal-800:focus{\n  color: hsl(156, 73%, 74%);\n}\n\n.focus\\:text-teal-900:focus{\n  color: hsl(154, 75%, 87%);\n}\n\n.focus\\:text-teal-1000:focus{\n  color: hsl(152, 68%, 96%);\n}\n\n.focus\\:text-blue-100:focus{\n  color: hsl(195, 100%, 95%);\n}\n\n.focus\\:text-blue-200:focus{\n  color: hsl(195, 100%, 85%);\n}\n\n.focus\\:text-blue-300:focus{\n  color: hsl(195, 97%, 75%);\n}\n\n.focus\\:text-blue-400:focus{\n  color: hsl(196, 94%, 67%);\n}\n\n.focus\\:text-blue-500:focus{\n  color: hsl(197, 92%, 61%);\n}\n\n.focus\\:text-blue-600:focus{\n  color: hsl(199, 84%, 55%);\n}\n\n.focus\\:text-blue-700:focus{\n  color: hsl(201, 79%, 46%);\n}\n\n.focus\\:text-blue-800:focus{\n  color: hsl(202, 83%, 41%);\n}\n\n.focus\\:text-blue-900:focus{\n  color: hsl(203, 87%, 34%);\n}\n\n.focus\\:text-blue-1000:focus{\n  color: hsl(204, 96%, 27%);\n}\n\n.focus\\:text-indigo-100:focus{\n  color: hsl(221, 68%, 93%);\n}\n\n.focus\\:text-indigo-200:focus{\n  color: hsl(221, 78%, 86%);\n}\n\n.focus\\:text-indigo-300:focus{\n  color: hsl(224, 67%, 76%);\n}\n\n.focus\\:text-indigo-400:focus{\n  color: hsl(225, 57%, 67%);\n}\n\n.focus\\:text-indigo-500:focus{\n  color: hsl(227, 50%, 59%);\n}\n\n.focus\\:text-indigo-600:focus{\n  color: hsl(227, 42%, 51%);\n}\n\n.focus\\:text-indigo-700:focus{\n  color: hsl(228, 45%, 45%);\n}\n\n.focus\\:text-indigo-800:focus{\n  color: hsl(230, 49%, 41%);\n}\n\n.focus\\:text-indigo-900:focus{\n  color: hsl(232, 51%, 36%);\n}\n\n.focus\\:text-indigo-1000:focus{\n  color: hsl(234, 62%, 26%);\n}\n\n.focus\\:text-purple-100:focus{\n  color: #faf5ff;\n}\n\n.focus\\:text-purple-200:focus{\n  color: #e9d8fd;\n}\n\n.focus\\:text-purple-300:focus{\n  color: #d6bcfa;\n}\n\n.focus\\:text-purple-400:focus{\n  color: #b794f4;\n}\n\n.focus\\:text-purple-500:focus{\n  color: #9f7aea;\n}\n\n.focus\\:text-purple-600:focus{\n  color: #805ad5;\n}\n\n.focus\\:text-purple-700:focus{\n  color: #6b46c1;\n}\n\n.focus\\:text-purple-800:focus{\n  color: #553c9a;\n}\n\n.focus\\:text-purple-900:focus{\n  color: #44337a;\n}\n\n.focus\\:text-pink-100:focus{\n  color: #fff5f7;\n}\n\n.focus\\:text-pink-200:focus{\n  color: #fed7e2;\n}\n\n.focus\\:text-pink-300:focus{\n  color: #fbb6ce;\n}\n\n.focus\\:text-pink-400:focus{\n  color: #f687b3;\n}\n\n.focus\\:text-pink-500:focus{\n  color: #ed64a6;\n}\n\n.focus\\:text-pink-600:focus{\n  color: #d53f8c;\n}\n\n.focus\\:text-pink-700:focus{\n  color: #b83280;\n}\n\n.focus\\:text-pink-800:focus{\n  color: #97266d;\n}\n\n.focus\\:text-pink-900:focus{\n  color: #702459;\n}\n\n.text-xs{\n  font-size: 0.75rem;\n}\n\n.text-sm{\n  font-size: 0.875rem;\n}\n\n.text-base{\n  font-size: 1rem;\n}\n\n.text-lg{\n  font-size: 1.125rem;\n}\n\n.text-xl{\n  font-size: 1.25rem;\n}\n\n.text-2xl{\n  font-size: 1.5rem;\n}\n\n.text-3xl{\n  font-size: 1.875rem;\n}\n\n.text-4xl{\n  font-size: 2.25rem;\n}\n\n.text-5xl{\n  font-size: 3rem;\n}\n\n.text-6xl{\n  font-size: 4rem;\n}\n\n.italic{\n  font-style: italic;\n}\n\n.not-italic{\n  font-style: normal;\n}\n\n.uppercase{\n  text-transform: uppercase;\n}\n\n.lowercase{\n  text-transform: lowercase;\n}\n\n.capitalize{\n  text-transform: capitalize;\n}\n\n.normal-case{\n  text-transform: none;\n}\n\n.underline{\n  text-decoration: underline;\n}\n\n.line-through{\n  text-decoration: line-through;\n}\n\n.no-underline{\n  text-decoration: none;\n}\n\n.hover\\:underline:hover{\n  text-decoration: underline;\n}\n\n.hover\\:line-through:hover{\n  text-decoration: line-through;\n}\n\n.hover\\:no-underline:hover{\n  text-decoration: none;\n}\n\n.focus\\:underline:focus{\n  text-decoration: underline;\n}\n\n.focus\\:line-through:focus{\n  text-decoration: line-through;\n}\n\n.focus\\:no-underline:focus{\n  text-decoration: none;\n}\n\n.antialiased{\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.subpixel-antialiased{\n  -webkit-font-smoothing: auto;\n  -moz-osx-font-smoothing: auto;\n}\n\n.tracking-tighter{\n  letter-spacing: -0.05em;\n}\n\n.tracking-tight{\n  letter-spacing: -0.025em;\n}\n\n.tracking-normal{\n  letter-spacing: 0;\n}\n\n.tracking-wide{\n  letter-spacing: 0.025em;\n}\n\n.tracking-wider{\n  letter-spacing: 0.05em;\n}\n\n.tracking-widest{\n  letter-spacing: 0.1em;\n}\n\n.select-none{\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.select-text{\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n}\n\n.select-all{\n  -webkit-user-select: all;\n     -moz-user-select: all;\n      -ms-user-select: all;\n          user-select: all;\n}\n\n.select-auto{\n  -webkit-user-select: auto;\n     -moz-user-select: auto;\n      -ms-user-select: auto;\n          user-select: auto;\n}\n\n.align-baseline{\n  vertical-align: baseline;\n}\n\n.align-top{\n  vertical-align: top;\n}\n\n.align-middle{\n  vertical-align: middle;\n}\n\n.align-bottom{\n  vertical-align: bottom;\n}\n\n.align-text-top{\n  vertical-align: text-top;\n}\n\n.align-text-bottom{\n  vertical-align: text-bottom;\n}\n\n.visible{\n  visibility: visible;\n}\n\n.invisible{\n  visibility: hidden;\n}\n\n.whitespace-normal{\n  white-space: normal;\n}\n\n.whitespace-no-wrap{\n  white-space: nowrap;\n}\n\n.whitespace-pre{\n  white-space: pre;\n}\n\n.whitespace-pre-line{\n  white-space: pre-line;\n}\n\n.whitespace-pre-wrap{\n  white-space: pre-wrap;\n}\n\n.break-normal{\n  overflow-wrap: normal;\n  word-break: normal;\n}\n\n.break-words{\n  overflow-wrap: break-word;\n}\n\n.break-all{\n  word-break: break-all;\n}\n\n.truncate{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.w-0{\n  width: 0;\n}\n\n.w-1{\n  width: 0.25rem;\n}\n\n.w-2{\n  width: 0.5rem;\n}\n\n.w-3{\n  width: 0.75rem;\n}\n\n.w-4{\n  width: 1rem;\n}\n\n.w-5{\n  width: 1.25rem;\n}\n\n.w-6{\n  width: 1.5rem;\n}\n\n.w-8{\n  width: 2rem;\n}\n\n.w-10{\n  width: 2.5rem;\n}\n\n.w-12{\n  width: 3rem;\n}\n\n.w-16{\n  width: 4rem;\n}\n\n.w-20{\n  width: 5rem;\n}\n\n.w-24{\n  width: 6rem;\n}\n\n.w-32{\n  width: 8rem;\n}\n\n.w-40{\n  width: 10rem;\n}\n\n.w-48{\n  width: 12rem;\n}\n\n.w-56{\n  width: 14rem;\n}\n\n.w-64{\n  width: 16rem;\n}\n\n.w-auto{\n  width: auto;\n}\n\n.w-px{\n  width: 1px;\n}\n\n.w-1\\/2{\n  width: 50%;\n}\n\n.w-1\\/3{\n  width: 33.333333%;\n}\n\n.w-2\\/3{\n  width: 66.666667%;\n}\n\n.w-1\\/4{\n  width: 25%;\n}\n\n.w-2\\/4{\n  width: 50%;\n}\n\n.w-3\\/4{\n  width: 75%;\n}\n\n.w-1\\/5{\n  width: 20%;\n}\n\n.w-2\\/5{\n  width: 40%;\n}\n\n.w-3\\/5{\n  width: 60%;\n}\n\n.w-4\\/5{\n  width: 80%;\n}\n\n.w-1\\/6{\n  width: 16.666667%;\n}\n\n.w-2\\/6{\n  width: 33.333333%;\n}\n\n.w-3\\/6{\n  width: 50%;\n}\n\n.w-4\\/6{\n  width: 66.666667%;\n}\n\n.w-5\\/6{\n  width: 83.333333%;\n}\n\n.w-1\\/12{\n  width: 8.333333%;\n}\n\n.w-2\\/12{\n  width: 16.666667%;\n}\n\n.w-3\\/12{\n  width: 25%;\n}\n\n.w-4\\/12{\n  width: 33.333333%;\n}\n\n.w-5\\/12{\n  width: 41.666667%;\n}\n\n.w-6\\/12{\n  width: 50%;\n}\n\n.w-7\\/12{\n  width: 58.333333%;\n}\n\n.w-8\\/12{\n  width: 66.666667%;\n}\n\n.w-9\\/12{\n  width: 75%;\n}\n\n.w-10\\/12{\n  width: 83.333333%;\n}\n\n.w-11\\/12{\n  width: 91.666667%;\n}\n\n.w-full{\n  width: 100%;\n}\n\n.w-screen{\n  width: 100vw;\n}\n\n.z-0{\n  z-index: 0;\n}\n\n.z-10{\n  z-index: 10;\n}\n\n.z-20{\n  z-index: 20;\n}\n\n.z-30{\n  z-index: 30;\n}\n\n.z-40{\n  z-index: 40;\n}\n\n.z-50{\n  z-index: 50;\n}\n\n.z-auto{\n  z-index: auto;\n}\n\n@media (min-width: 640px){\n  .sm\\:appearance-none{\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n  }\n\n  .sm\\:bg-fixed{\n    background-attachment: fixed;\n  }\n\n  .sm\\:bg-local{\n    background-attachment: local;\n  }\n\n  .sm\\:bg-scroll{\n    background-attachment: scroll;\n  }\n\n  .sm\\:bg-transparent{\n    background-color: transparent;\n  }\n\n  .sm\\:bg-black{\n    background-color: #000;\n  }\n\n  .sm\\:bg-white{\n    background-color: #fff;\n  }\n\n  .sm\\:bg-gray-100{\n    background-color: hsl(216, 33%, 97%);\n  }\n\n  .sm\\:bg-gray-200{\n    background-color: hsl(214, 15%, 91%);\n  }\n\n  .sm\\:bg-gray-300{\n    background-color: hsl(210, 16%, 82%);\n  }\n\n  .sm\\:bg-gray-400{\n    background-color: hsl(211, 13%, 65%);\n  }\n\n  .sm\\:bg-gray-500{\n    background-color: hsl(211, 10%, 53%);\n  }\n\n  .sm\\:bg-gray-600{\n    background-color: hsl(211, 12%, 43%);\n  }\n\n  .sm\\:bg-gray-700{\n    background-color: hsl(209, 14%, 37%);\n  }\n\n  .sm\\:bg-gray-800{\n    background-color: hsl(209, 18%, 30%);\n  }\n\n  .sm\\:bg-gray-900{\n    background-color: hsl(209, 20%, 25%);\n  }\n\n  .sm\\:bg-gray-1000{\n    background-color: hsl(210, 24%, 16%);\n  }\n\n  .sm\\:bg-red-100{\n    background-color: hsl(360, 100%, 95%);\n  }\n\n  .sm\\:bg-red-200{\n    background-color: hsl(360, 100%, 87%);\n  }\n\n  .sm\\:bg-red-300{\n    background-color: hsl(360, 100%, 80%);\n  }\n\n  .sm\\:bg-red-400{\n    background-color: hsl(360, 91%, 69%);\n  }\n\n  .sm\\:bg-red-500{\n    background-color: hsl(360, 83%, 62%);\n  }\n\n  .sm\\:bg-red-600{\n    background-color: hsl(356, 75%, 53%);\n  }\n\n  .sm\\:bg-red-700{\n    background-color: hsl(354, 85%, 44%);\n  }\n\n  .sm\\:bg-red-800{\n    background-color: hsl(352, 90%, 35%);\n  }\n\n  .sm\\:bg-red-900{\n    background-color: hsl(350, 94%, 28%);\n  }\n\n  .sm\\:bg-red-1000{\n    background-color: hsl(348, 94%, 20%);\n  }\n\n  .sm\\:bg-orange-100{\n    background-color: #fffaf0;\n  }\n\n  .sm\\:bg-orange-200{\n    background-color: #feebc8;\n  }\n\n  .sm\\:bg-orange-300{\n    background-color: #fbd38d;\n  }\n\n  .sm\\:bg-orange-400{\n    background-color: #f6ad55;\n  }\n\n  .sm\\:bg-orange-500{\n    background-color: #ed8936;\n  }\n\n  .sm\\:bg-orange-600{\n    background-color: #dd6b20;\n  }\n\n  .sm\\:bg-orange-700{\n    background-color: #c05621;\n  }\n\n  .sm\\:bg-orange-800{\n    background-color: #9c4221;\n  }\n\n  .sm\\:bg-orange-900{\n    background-color: #7b341e;\n  }\n\n  .sm\\:bg-yellow-100{\n    background-color: hsl(15, 86%, 30%);\n  }\n\n  .sm\\:bg-yellow-200{\n    background-color: hsl(22, 82%, 39%);\n  }\n\n  .sm\\:bg-yellow-300{\n    background-color: hsl(29, 80%, 44%);\n  }\n\n  .sm\\:bg-yellow-400{\n    background-color: hsl(36, 77%, 49%);\n  }\n\n  .sm\\:bg-yellow-500{\n    background-color: hsl(42, 87%, 55%);\n  }\n\n  .sm\\:bg-yellow-600{\n    background-color: hsl(44, 92%, 63%);\n  }\n\n  .sm\\:bg-yellow-700{\n    background-color: hsl(48, 94%, 68%);\n  }\n\n  .sm\\:bg-yellow-800{\n    background-color: hsl(48, 95%, 76%);\n  }\n\n  .sm\\:bg-yellow-900{\n    background-color: hsl(48, 100%, 88%);\n  }\n\n  .sm\\:bg-yellow-1000{\n    background-color: hsl(49, 100%, 96%);\n  }\n\n  .sm\\:bg-green-100{\n    background-color: #f0fff4;\n  }\n\n  .sm\\:bg-green-200{\n    background-color: #c6f6d5;\n  }\n\n  .sm\\:bg-green-300{\n    background-color: #9ae6b4;\n  }\n\n  .sm\\:bg-green-400{\n    background-color: #68d391;\n  }\n\n  .sm\\:bg-green-500{\n    background-color: #48bb78;\n  }\n\n  .sm\\:bg-green-600{\n    background-color: #38a169;\n  }\n\n  .sm\\:bg-green-700{\n    background-color: #2f855a;\n  }\n\n  .sm\\:bg-green-800{\n    background-color: #276749;\n  }\n\n  .sm\\:bg-green-900{\n    background-color: #22543d;\n  }\n\n  .sm\\:bg-teal-100{\n    background-color: hsl(170, 97%, 15%);\n  }\n\n  .sm\\:bg-teal-200{\n    background-color: hsl(168, 80%, 23%);\n  }\n\n  .sm\\:bg-teal-300{\n    background-color: hsl(166, 72%, 28%);\n  }\n\n  .sm\\:bg-teal-400{\n    background-color: hsl(164, 71%, 34%);\n  }\n\n  .sm\\:bg-teal-500{\n    background-color: hsl(162, 63%, 41%);\n  }\n\n  .sm\\:bg-teal-600{\n    background-color: hsl(160, 51%, 49%);\n  }\n\n  .sm\\:bg-teal-700{\n    background-color: hsl(158, 58%, 62%);\n  }\n\n  .sm\\:bg-teal-800{\n    background-color: hsl(156, 73%, 74%);\n  }\n\n  .sm\\:bg-teal-900{\n    background-color: hsl(154, 75%, 87%);\n  }\n\n  .sm\\:bg-teal-1000{\n    background-color: hsl(152, 68%, 96%);\n  }\n\n  .sm\\:bg-blue-100{\n    background-color: hsl(195, 100%, 95%);\n  }\n\n  .sm\\:bg-blue-200{\n    background-color: hsl(195, 100%, 85%);\n  }\n\n  .sm\\:bg-blue-300{\n    background-color: hsl(195, 97%, 75%);\n  }\n\n  .sm\\:bg-blue-400{\n    background-color: hsl(196, 94%, 67%);\n  }\n\n  .sm\\:bg-blue-500{\n    background-color: hsl(197, 92%, 61%);\n  }\n\n  .sm\\:bg-blue-600{\n    background-color: hsl(199, 84%, 55%);\n  }\n\n  .sm\\:bg-blue-700{\n    background-color: hsl(201, 79%, 46%);\n  }\n\n  .sm\\:bg-blue-800{\n    background-color: hsl(202, 83%, 41%);\n  }\n\n  .sm\\:bg-blue-900{\n    background-color: hsl(203, 87%, 34%);\n  }\n\n  .sm\\:bg-blue-1000{\n    background-color: hsl(204, 96%, 27%);\n  }\n\n  .sm\\:bg-indigo-100{\n    background-color: hsl(221, 68%, 93%);\n  }\n\n  .sm\\:bg-indigo-200{\n    background-color: hsl(221, 78%, 86%);\n  }\n\n  .sm\\:bg-indigo-300{\n    background-color: hsl(224, 67%, 76%);\n  }\n\n  .sm\\:bg-indigo-400{\n    background-color: hsl(225, 57%, 67%);\n  }\n\n  .sm\\:bg-indigo-500{\n    background-color: hsl(227, 50%, 59%);\n  }\n\n  .sm\\:bg-indigo-600{\n    background-color: hsl(227, 42%, 51%);\n  }\n\n  .sm\\:bg-indigo-700{\n    background-color: hsl(228, 45%, 45%);\n  }\n\n  .sm\\:bg-indigo-800{\n    background-color: hsl(230, 49%, 41%);\n  }\n\n  .sm\\:bg-indigo-900{\n    background-color: hsl(232, 51%, 36%);\n  }\n\n  .sm\\:bg-indigo-1000{\n    background-color: hsl(234, 62%, 26%);\n  }\n\n  .sm\\:bg-purple-100{\n    background-color: #faf5ff;\n  }\n\n  .sm\\:bg-purple-200{\n    background-color: #e9d8fd;\n  }\n\n  .sm\\:bg-purple-300{\n    background-color: #d6bcfa;\n  }\n\n  .sm\\:bg-purple-400{\n    background-color: #b794f4;\n  }\n\n  .sm\\:bg-purple-500{\n    background-color: #9f7aea;\n  }\n\n  .sm\\:bg-purple-600{\n    background-color: #805ad5;\n  }\n\n  .sm\\:bg-purple-700{\n    background-color: #6b46c1;\n  }\n\n  .sm\\:bg-purple-800{\n    background-color: #553c9a;\n  }\n\n  .sm\\:bg-purple-900{\n    background-color: #44337a;\n  }\n\n  .sm\\:bg-pink-100{\n    background-color: #fff5f7;\n  }\n\n  .sm\\:bg-pink-200{\n    background-color: #fed7e2;\n  }\n\n  .sm\\:bg-pink-300{\n    background-color: #fbb6ce;\n  }\n\n  .sm\\:bg-pink-400{\n    background-color: #f687b3;\n  }\n\n  .sm\\:bg-pink-500{\n    background-color: #ed64a6;\n  }\n\n  .sm\\:bg-pink-600{\n    background-color: #d53f8c;\n  }\n\n  .sm\\:bg-pink-700{\n    background-color: #b83280;\n  }\n\n  .sm\\:bg-pink-800{\n    background-color: #97266d;\n  }\n\n  .sm\\:bg-pink-900{\n    background-color: #702459;\n  }\n\n  .sm\\:hover\\:bg-transparent:hover{\n    background-color: transparent;\n  }\n\n  .sm\\:hover\\:bg-black:hover{\n    background-color: #000;\n  }\n\n  .sm\\:hover\\:bg-white:hover{\n    background-color: #fff;\n  }\n\n  .sm\\:hover\\:bg-gray-100:hover{\n    background-color: hsl(216, 33%, 97%);\n  }\n\n  .sm\\:hover\\:bg-gray-200:hover{\n    background-color: hsl(214, 15%, 91%);\n  }\n\n  .sm\\:hover\\:bg-gray-300:hover{\n    background-color: hsl(210, 16%, 82%);\n  }\n\n  .sm\\:hover\\:bg-gray-400:hover{\n    background-color: hsl(211, 13%, 65%);\n  }\n\n  .sm\\:hover\\:bg-gray-500:hover{\n    background-color: hsl(211, 10%, 53%);\n  }\n\n  .sm\\:hover\\:bg-gray-600:hover{\n    background-color: hsl(211, 12%, 43%);\n  }\n\n  .sm\\:hover\\:bg-gray-700:hover{\n    background-color: hsl(209, 14%, 37%);\n  }\n\n  .sm\\:hover\\:bg-gray-800:hover{\n    background-color: hsl(209, 18%, 30%);\n  }\n\n  .sm\\:hover\\:bg-gray-900:hover{\n    background-color: hsl(209, 20%, 25%);\n  }\n\n  .sm\\:hover\\:bg-gray-1000:hover{\n    background-color: hsl(210, 24%, 16%);\n  }\n\n  .sm\\:hover\\:bg-red-100:hover{\n    background-color: hsl(360, 100%, 95%);\n  }\n\n  .sm\\:hover\\:bg-red-200:hover{\n    background-color: hsl(360, 100%, 87%);\n  }\n\n  .sm\\:hover\\:bg-red-300:hover{\n    background-color: hsl(360, 100%, 80%);\n  }\n\n  .sm\\:hover\\:bg-red-400:hover{\n    background-color: hsl(360, 91%, 69%);\n  }\n\n  .sm\\:hover\\:bg-red-500:hover{\n    background-color: hsl(360, 83%, 62%);\n  }\n\n  .sm\\:hover\\:bg-red-600:hover{\n    background-color: hsl(356, 75%, 53%);\n  }\n\n  .sm\\:hover\\:bg-red-700:hover{\n    background-color: hsl(354, 85%, 44%);\n  }\n\n  .sm\\:hover\\:bg-red-800:hover{\n    background-color: hsl(352, 90%, 35%);\n  }\n\n  .sm\\:hover\\:bg-red-900:hover{\n    background-color: hsl(350, 94%, 28%);\n  }\n\n  .sm\\:hover\\:bg-red-1000:hover{\n    background-color: hsl(348, 94%, 20%);\n  }\n\n  .sm\\:hover\\:bg-orange-100:hover{\n    background-color: #fffaf0;\n  }\n\n  .sm\\:hover\\:bg-orange-200:hover{\n    background-color: #feebc8;\n  }\n\n  .sm\\:hover\\:bg-orange-300:hover{\n    background-color: #fbd38d;\n  }\n\n  .sm\\:hover\\:bg-orange-400:hover{\n    background-color: #f6ad55;\n  }\n\n  .sm\\:hover\\:bg-orange-500:hover{\n    background-color: #ed8936;\n  }\n\n  .sm\\:hover\\:bg-orange-600:hover{\n    background-color: #dd6b20;\n  }\n\n  .sm\\:hover\\:bg-orange-700:hover{\n    background-color: #c05621;\n  }\n\n  .sm\\:hover\\:bg-orange-800:hover{\n    background-color: #9c4221;\n  }\n\n  .sm\\:hover\\:bg-orange-900:hover{\n    background-color: #7b341e;\n  }\n\n  .sm\\:hover\\:bg-yellow-100:hover{\n    background-color: hsl(15, 86%, 30%);\n  }\n\n  .sm\\:hover\\:bg-yellow-200:hover{\n    background-color: hsl(22, 82%, 39%);\n  }\n\n  .sm\\:hover\\:bg-yellow-300:hover{\n    background-color: hsl(29, 80%, 44%);\n  }\n\n  .sm\\:hover\\:bg-yellow-400:hover{\n    background-color: hsl(36, 77%, 49%);\n  }\n\n  .sm\\:hover\\:bg-yellow-500:hover{\n    background-color: hsl(42, 87%, 55%);\n  }\n\n  .sm\\:hover\\:bg-yellow-600:hover{\n    background-color: hsl(44, 92%, 63%);\n  }\n\n  .sm\\:hover\\:bg-yellow-700:hover{\n    background-color: hsl(48, 94%, 68%);\n  }\n\n  .sm\\:hover\\:bg-yellow-800:hover{\n    background-color: hsl(48, 95%, 76%);\n  }\n\n  .sm\\:hover\\:bg-yellow-900:hover{\n    background-color: hsl(48, 100%, 88%);\n  }\n\n  .sm\\:hover\\:bg-yellow-1000:hover{\n    background-color: hsl(49, 100%, 96%);\n  }\n\n  .sm\\:hover\\:bg-green-100:hover{\n    background-color: #f0fff4;\n  }\n\n  .sm\\:hover\\:bg-green-200:hover{\n    background-color: #c6f6d5;\n  }\n\n  .sm\\:hover\\:bg-green-300:hover{\n    background-color: #9ae6b4;\n  }\n\n  .sm\\:hover\\:bg-green-400:hover{\n    background-color: #68d391;\n  }\n\n  .sm\\:hover\\:bg-green-500:hover{\n    background-color: #48bb78;\n  }\n\n  .sm\\:hover\\:bg-green-600:hover{\n    background-color: #38a169;\n  }\n\n  .sm\\:hover\\:bg-green-700:hover{\n    background-color: #2f855a;\n  }\n\n  .sm\\:hover\\:bg-green-800:hover{\n    background-color: #276749;\n  }\n\n  .sm\\:hover\\:bg-green-900:hover{\n    background-color: #22543d;\n  }\n\n  .sm\\:hover\\:bg-teal-100:hover{\n    background-color: hsl(170, 97%, 15%);\n  }\n\n  .sm\\:hover\\:bg-teal-200:hover{\n    background-color: hsl(168, 80%, 23%);\n  }\n\n  .sm\\:hover\\:bg-teal-300:hover{\n    background-color: hsl(166, 72%, 28%);\n  }\n\n  .sm\\:hover\\:bg-teal-400:hover{\n    background-color: hsl(164, 71%, 34%);\n  }\n\n  .sm\\:hover\\:bg-teal-500:hover{\n    background-color: hsl(162, 63%, 41%);\n  }\n\n  .sm\\:hover\\:bg-teal-600:hover{\n    background-color: hsl(160, 51%, 49%);\n  }\n\n  .sm\\:hover\\:bg-teal-700:hover{\n    background-color: hsl(158, 58%, 62%);\n  }\n\n  .sm\\:hover\\:bg-teal-800:hover{\n    background-color: hsl(156, 73%, 74%);\n  }\n\n  .sm\\:hover\\:bg-teal-900:hover{\n    background-color: hsl(154, 75%, 87%);\n  }\n\n  .sm\\:hover\\:bg-teal-1000:hover{\n    background-color: hsl(152, 68%, 96%);\n  }\n\n  .sm\\:hover\\:bg-blue-100:hover{\n    background-color: hsl(195, 100%, 95%);\n  }\n\n  .sm\\:hover\\:bg-blue-200:hover{\n    background-color: hsl(195, 100%, 85%);\n  }\n\n  .sm\\:hover\\:bg-blue-300:hover{\n    background-color: hsl(195, 97%, 75%);\n  }\n\n  .sm\\:hover\\:bg-blue-400:hover{\n    background-color: hsl(196, 94%, 67%);\n  }\n\n  .sm\\:hover\\:bg-blue-500:hover{\n    background-color: hsl(197, 92%, 61%);\n  }\n\n  .sm\\:hover\\:bg-blue-600:hover{\n    background-color: hsl(199, 84%, 55%);\n  }\n\n  .sm\\:hover\\:bg-blue-700:hover{\n    background-color: hsl(201, 79%, 46%);\n  }\n\n  .sm\\:hover\\:bg-blue-800:hover{\n    background-color: hsl(202, 83%, 41%);\n  }\n\n  .sm\\:hover\\:bg-blue-900:hover{\n    background-color: hsl(203, 87%, 34%);\n  }\n\n  .sm\\:hover\\:bg-blue-1000:hover{\n    background-color: hsl(204, 96%, 27%);\n  }\n\n  .sm\\:hover\\:bg-indigo-100:hover{\n    background-color: hsl(221, 68%, 93%);\n  }\n\n  .sm\\:hover\\:bg-indigo-200:hover{\n    background-color: hsl(221, 78%, 86%);\n  }\n\n  .sm\\:hover\\:bg-indigo-300:hover{\n    background-color: hsl(224, 67%, 76%);\n  }\n\n  .sm\\:hover\\:bg-indigo-400:hover{\n    background-color: hsl(225, 57%, 67%);\n  }\n\n  .sm\\:hover\\:bg-indigo-500:hover{\n    background-color: hsl(227, 50%, 59%);\n  }\n\n  .sm\\:hover\\:bg-indigo-600:hover{\n    background-color: hsl(227, 42%, 51%);\n  }\n\n  .sm\\:hover\\:bg-indigo-700:hover{\n    background-color: hsl(228, 45%, 45%);\n  }\n\n  .sm\\:hover\\:bg-indigo-800:hover{\n    background-color: hsl(230, 49%, 41%);\n  }\n\n  .sm\\:hover\\:bg-indigo-900:hover{\n    background-color: hsl(232, 51%, 36%);\n  }\n\n  .sm\\:hover\\:bg-indigo-1000:hover{\n    background-color: hsl(234, 62%, 26%);\n  }\n\n  .sm\\:hover\\:bg-purple-100:hover{\n    background-color: #faf5ff;\n  }\n\n  .sm\\:hover\\:bg-purple-200:hover{\n    background-color: #e9d8fd;\n  }\n\n  .sm\\:hover\\:bg-purple-300:hover{\n    background-color: #d6bcfa;\n  }\n\n  .sm\\:hover\\:bg-purple-400:hover{\n    background-color: #b794f4;\n  }\n\n  .sm\\:hover\\:bg-purple-500:hover{\n    background-color: #9f7aea;\n  }\n\n  .sm\\:hover\\:bg-purple-600:hover{\n    background-color: #805ad5;\n  }\n\n  .sm\\:hover\\:bg-purple-700:hover{\n    background-color: #6b46c1;\n  }\n\n  .sm\\:hover\\:bg-purple-800:hover{\n    background-color: #553c9a;\n  }\n\n  .sm\\:hover\\:bg-purple-900:hover{\n    background-color: #44337a;\n  }\n\n  .sm\\:hover\\:bg-pink-100:hover{\n    background-color: #fff5f7;\n  }\n\n  .sm\\:hover\\:bg-pink-200:hover{\n    background-color: #fed7e2;\n  }\n\n  .sm\\:hover\\:bg-pink-300:hover{\n    background-color: #fbb6ce;\n  }\n\n  .sm\\:hover\\:bg-pink-400:hover{\n    background-color: #f687b3;\n  }\n\n  .sm\\:hover\\:bg-pink-500:hover{\n    background-color: #ed64a6;\n  }\n\n  .sm\\:hover\\:bg-pink-600:hover{\n    background-color: #d53f8c;\n  }\n\n  .sm\\:hover\\:bg-pink-700:hover{\n    background-color: #b83280;\n  }\n\n  .sm\\:hover\\:bg-pink-800:hover{\n    background-color: #97266d;\n  }\n\n  .sm\\:hover\\:bg-pink-900:hover{\n    background-color: #702459;\n  }\n\n  .sm\\:focus\\:bg-transparent:focus{\n    background-color: transparent;\n  }\n\n  .sm\\:focus\\:bg-black:focus{\n    background-color: #000;\n  }\n\n  .sm\\:focus\\:bg-white:focus{\n    background-color: #fff;\n  }\n\n  .sm\\:focus\\:bg-gray-100:focus{\n    background-color: hsl(216, 33%, 97%);\n  }\n\n  .sm\\:focus\\:bg-gray-200:focus{\n    background-color: hsl(214, 15%, 91%);\n  }\n\n  .sm\\:focus\\:bg-gray-300:focus{\n    background-color: hsl(210, 16%, 82%);\n  }\n\n  .sm\\:focus\\:bg-gray-400:focus{\n    background-color: hsl(211, 13%, 65%);\n  }\n\n  .sm\\:focus\\:bg-gray-500:focus{\n    background-color: hsl(211, 10%, 53%);\n  }\n\n  .sm\\:focus\\:bg-gray-600:focus{\n    background-color: hsl(211, 12%, 43%);\n  }\n\n  .sm\\:focus\\:bg-gray-700:focus{\n    background-color: hsl(209, 14%, 37%);\n  }\n\n  .sm\\:focus\\:bg-gray-800:focus{\n    background-color: hsl(209, 18%, 30%);\n  }\n\n  .sm\\:focus\\:bg-gray-900:focus{\n    background-color: hsl(209, 20%, 25%);\n  }\n\n  .sm\\:focus\\:bg-gray-1000:focus{\n    background-color: hsl(210, 24%, 16%);\n  }\n\n  .sm\\:focus\\:bg-red-100:focus{\n    background-color: hsl(360, 100%, 95%);\n  }\n\n  .sm\\:focus\\:bg-red-200:focus{\n    background-color: hsl(360, 100%, 87%);\n  }\n\n  .sm\\:focus\\:bg-red-300:focus{\n    background-color: hsl(360, 100%, 80%);\n  }\n\n  .sm\\:focus\\:bg-red-400:focus{\n    background-color: hsl(360, 91%, 69%);\n  }\n\n  .sm\\:focus\\:bg-red-500:focus{\n    background-color: hsl(360, 83%, 62%);\n  }\n\n  .sm\\:focus\\:bg-red-600:focus{\n    background-color: hsl(356, 75%, 53%);\n  }\n\n  .sm\\:focus\\:bg-red-700:focus{\n    background-color: hsl(354, 85%, 44%);\n  }\n\n  .sm\\:focus\\:bg-red-800:focus{\n    background-color: hsl(352, 90%, 35%);\n  }\n\n  .sm\\:focus\\:bg-red-900:focus{\n    background-color: hsl(350, 94%, 28%);\n  }\n\n  .sm\\:focus\\:bg-red-1000:focus{\n    background-color: hsl(348, 94%, 20%);\n  }\n\n  .sm\\:focus\\:bg-orange-100:focus{\n    background-color: #fffaf0;\n  }\n\n  .sm\\:focus\\:bg-orange-200:focus{\n    background-color: #feebc8;\n  }\n\n  .sm\\:focus\\:bg-orange-300:focus{\n    background-color: #fbd38d;\n  }\n\n  .sm\\:focus\\:bg-orange-400:focus{\n    background-color: #f6ad55;\n  }\n\n  .sm\\:focus\\:bg-orange-500:focus{\n    background-color: #ed8936;\n  }\n\n  .sm\\:focus\\:bg-orange-600:focus{\n    background-color: #dd6b20;\n  }\n\n  .sm\\:focus\\:bg-orange-700:focus{\n    background-color: #c05621;\n  }\n\n  .sm\\:focus\\:bg-orange-800:focus{\n    background-color: #9c4221;\n  }\n\n  .sm\\:focus\\:bg-orange-900:focus{\n    background-color: #7b341e;\n  }\n\n  .sm\\:focus\\:bg-yellow-100:focus{\n    background-color: hsl(15, 86%, 30%);\n  }\n\n  .sm\\:focus\\:bg-yellow-200:focus{\n    background-color: hsl(22, 82%, 39%);\n  }\n\n  .sm\\:focus\\:bg-yellow-300:focus{\n    background-color: hsl(29, 80%, 44%);\n  }\n\n  .sm\\:focus\\:bg-yellow-400:focus{\n    background-color: hsl(36, 77%, 49%);\n  }\n\n  .sm\\:focus\\:bg-yellow-500:focus{\n    background-color: hsl(42, 87%, 55%);\n  }\n\n  .sm\\:focus\\:bg-yellow-600:focus{\n    background-color: hsl(44, 92%, 63%);\n  }\n\n  .sm\\:focus\\:bg-yellow-700:focus{\n    background-color: hsl(48, 94%, 68%);\n  }\n\n  .sm\\:focus\\:bg-yellow-800:focus{\n    background-color: hsl(48, 95%, 76%);\n  }\n\n  .sm\\:focus\\:bg-yellow-900:focus{\n    background-color: hsl(48, 100%, 88%);\n  }\n\n  .sm\\:focus\\:bg-yellow-1000:focus{\n    background-color: hsl(49, 100%, 96%);\n  }\n\n  .sm\\:focus\\:bg-green-100:focus{\n    background-color: #f0fff4;\n  }\n\n  .sm\\:focus\\:bg-green-200:focus{\n    background-color: #c6f6d5;\n  }\n\n  .sm\\:focus\\:bg-green-300:focus{\n    background-color: #9ae6b4;\n  }\n\n  .sm\\:focus\\:bg-green-400:focus{\n    background-color: #68d391;\n  }\n\n  .sm\\:focus\\:bg-green-500:focus{\n    background-color: #48bb78;\n  }\n\n  .sm\\:focus\\:bg-green-600:focus{\n    background-color: #38a169;\n  }\n\n  .sm\\:focus\\:bg-green-700:focus{\n    background-color: #2f855a;\n  }\n\n  .sm\\:focus\\:bg-green-800:focus{\n    background-color: #276749;\n  }\n\n  .sm\\:focus\\:bg-green-900:focus{\n    background-color: #22543d;\n  }\n\n  .sm\\:focus\\:bg-teal-100:focus{\n    background-color: hsl(170, 97%, 15%);\n  }\n\n  .sm\\:focus\\:bg-teal-200:focus{\n    background-color: hsl(168, 80%, 23%);\n  }\n\n  .sm\\:focus\\:bg-teal-300:focus{\n    background-color: hsl(166, 72%, 28%);\n  }\n\n  .sm\\:focus\\:bg-teal-400:focus{\n    background-color: hsl(164, 71%, 34%);\n  }\n\n  .sm\\:focus\\:bg-teal-500:focus{\n    background-color: hsl(162, 63%, 41%);\n  }\n\n  .sm\\:focus\\:bg-teal-600:focus{\n    background-color: hsl(160, 51%, 49%);\n  }\n\n  .sm\\:focus\\:bg-teal-700:focus{\n    background-color: hsl(158, 58%, 62%);\n  }\n\n  .sm\\:focus\\:bg-teal-800:focus{\n    background-color: hsl(156, 73%, 74%);\n  }\n\n  .sm\\:focus\\:bg-teal-900:focus{\n    background-color: hsl(154, 75%, 87%);\n  }\n\n  .sm\\:focus\\:bg-teal-1000:focus{\n    background-color: hsl(152, 68%, 96%);\n  }\n\n  .sm\\:focus\\:bg-blue-100:focus{\n    background-color: hsl(195, 100%, 95%);\n  }\n\n  .sm\\:focus\\:bg-blue-200:focus{\n    background-color: hsl(195, 100%, 85%);\n  }\n\n  .sm\\:focus\\:bg-blue-300:focus{\n    background-color: hsl(195, 97%, 75%);\n  }\n\n  .sm\\:focus\\:bg-blue-400:focus{\n    background-color: hsl(196, 94%, 67%);\n  }\n\n  .sm\\:focus\\:bg-blue-500:focus{\n    background-color: hsl(197, 92%, 61%);\n  }\n\n  .sm\\:focus\\:bg-blue-600:focus{\n    background-color: hsl(199, 84%, 55%);\n  }\n\n  .sm\\:focus\\:bg-blue-700:focus{\n    background-color: hsl(201, 79%, 46%);\n  }\n\n  .sm\\:focus\\:bg-blue-800:focus{\n    background-color: hsl(202, 83%, 41%);\n  }\n\n  .sm\\:focus\\:bg-blue-900:focus{\n    background-color: hsl(203, 87%, 34%);\n  }\n\n  .sm\\:focus\\:bg-blue-1000:focus{\n    background-color: hsl(204, 96%, 27%);\n  }\n\n  .sm\\:focus\\:bg-indigo-100:focus{\n    background-color: hsl(221, 68%, 93%);\n  }\n\n  .sm\\:focus\\:bg-indigo-200:focus{\n    background-color: hsl(221, 78%, 86%);\n  }\n\n  .sm\\:focus\\:bg-indigo-300:focus{\n    background-color: hsl(224, 67%, 76%);\n  }\n\n  .sm\\:focus\\:bg-indigo-400:focus{\n    background-color: hsl(225, 57%, 67%);\n  }\n\n  .sm\\:focus\\:bg-indigo-500:focus{\n    background-color: hsl(227, 50%, 59%);\n  }\n\n  .sm\\:focus\\:bg-indigo-600:focus{\n    background-color: hsl(227, 42%, 51%);\n  }\n\n  .sm\\:focus\\:bg-indigo-700:focus{\n    background-color: hsl(228, 45%, 45%);\n  }\n\n  .sm\\:focus\\:bg-indigo-800:focus{\n    background-color: hsl(230, 49%, 41%);\n  }\n\n  .sm\\:focus\\:bg-indigo-900:focus{\n    background-color: hsl(232, 51%, 36%);\n  }\n\n  .sm\\:focus\\:bg-indigo-1000:focus{\n    background-color: hsl(234, 62%, 26%);\n  }\n\n  .sm\\:focus\\:bg-purple-100:focus{\n    background-color: #faf5ff;\n  }\n\n  .sm\\:focus\\:bg-purple-200:focus{\n    background-color: #e9d8fd;\n  }\n\n  .sm\\:focus\\:bg-purple-300:focus{\n    background-color: #d6bcfa;\n  }\n\n  .sm\\:focus\\:bg-purple-400:focus{\n    background-color: #b794f4;\n  }\n\n  .sm\\:focus\\:bg-purple-500:focus{\n    background-color: #9f7aea;\n  }\n\n  .sm\\:focus\\:bg-purple-600:focus{\n    background-color: #805ad5;\n  }\n\n  .sm\\:focus\\:bg-purple-700:focus{\n    background-color: #6b46c1;\n  }\n\n  .sm\\:focus\\:bg-purple-800:focus{\n    background-color: #553c9a;\n  }\n\n  .sm\\:focus\\:bg-purple-900:focus{\n    background-color: #44337a;\n  }\n\n  .sm\\:focus\\:bg-pink-100:focus{\n    background-color: #fff5f7;\n  }\n\n  .sm\\:focus\\:bg-pink-200:focus{\n    background-color: #fed7e2;\n  }\n\n  .sm\\:focus\\:bg-pink-300:focus{\n    background-color: #fbb6ce;\n  }\n\n  .sm\\:focus\\:bg-pink-400:focus{\n    background-color: #f687b3;\n  }\n\n  .sm\\:focus\\:bg-pink-500:focus{\n    background-color: #ed64a6;\n  }\n\n  .sm\\:focus\\:bg-pink-600:focus{\n    background-color: #d53f8c;\n  }\n\n  .sm\\:focus\\:bg-pink-700:focus{\n    background-color: #b83280;\n  }\n\n  .sm\\:focus\\:bg-pink-800:focus{\n    background-color: #97266d;\n  }\n\n  .sm\\:focus\\:bg-pink-900:focus{\n    background-color: #702459;\n  }\n\n  .sm\\:bg-bottom{\n    background-position: bottom;\n  }\n\n  .sm\\:bg-center{\n    background-position: center;\n  }\n\n  .sm\\:bg-left{\n    background-position: left;\n  }\n\n  .sm\\:bg-left-bottom{\n    background-position: left bottom;\n  }\n\n  .sm\\:bg-left-top{\n    background-position: left top;\n  }\n\n  .sm\\:bg-right{\n    background-position: right;\n  }\n\n  .sm\\:bg-right-bottom{\n    background-position: right bottom;\n  }\n\n  .sm\\:bg-right-top{\n    background-position: right top;\n  }\n\n  .sm\\:bg-top{\n    background-position: top;\n  }\n\n  .sm\\:bg-repeat{\n    background-repeat: repeat;\n  }\n\n  .sm\\:bg-no-repeat{\n    background-repeat: no-repeat;\n  }\n\n  .sm\\:bg-repeat-x{\n    background-repeat: repeat-x;\n  }\n\n  .sm\\:bg-repeat-y{\n    background-repeat: repeat-y;\n  }\n\n  .sm\\:bg-repeat-round{\n    background-repeat: round;\n  }\n\n  .sm\\:bg-repeat-space{\n    background-repeat: space;\n  }\n\n  .sm\\:bg-auto{\n    background-size: auto;\n  }\n\n  .sm\\:bg-cover{\n    background-size: cover;\n  }\n\n  .sm\\:bg-contain{\n    background-size: contain;\n  }\n\n  .sm\\:border-collapse{\n    border-collapse: collapse;\n  }\n\n  .sm\\:border-separate{\n    border-collapse: separate;\n  }\n\n  .sm\\:border-transparent{\n    border-color: transparent;\n  }\n\n  .sm\\:border-black{\n    border-color: #000;\n  }\n\n  .sm\\:border-white{\n    border-color: #fff;\n  }\n\n  .sm\\:border-gray-100{\n    border-color: hsl(216, 33%, 97%);\n  }\n\n  .sm\\:border-gray-200{\n    border-color: hsl(214, 15%, 91%);\n  }\n\n  .sm\\:border-gray-300{\n    border-color: hsl(210, 16%, 82%);\n  }\n\n  .sm\\:border-gray-400{\n    border-color: hsl(211, 13%, 65%);\n  }\n\n  .sm\\:border-gray-500{\n    border-color: hsl(211, 10%, 53%);\n  }\n\n  .sm\\:border-gray-600{\n    border-color: hsl(211, 12%, 43%);\n  }\n\n  .sm\\:border-gray-700{\n    border-color: hsl(209, 14%, 37%);\n  }\n\n  .sm\\:border-gray-800{\n    border-color: hsl(209, 18%, 30%);\n  }\n\n  .sm\\:border-gray-900{\n    border-color: hsl(209, 20%, 25%);\n  }\n\n  .sm\\:border-gray-1000{\n    border-color: hsl(210, 24%, 16%);\n  }\n\n  .sm\\:border-red-100{\n    border-color: hsl(360, 100%, 95%);\n  }\n\n  .sm\\:border-red-200{\n    border-color: hsl(360, 100%, 87%);\n  }\n\n  .sm\\:border-red-300{\n    border-color: hsl(360, 100%, 80%);\n  }\n\n  .sm\\:border-red-400{\n    border-color: hsl(360, 91%, 69%);\n  }\n\n  .sm\\:border-red-500{\n    border-color: hsl(360, 83%, 62%);\n  }\n\n  .sm\\:border-red-600{\n    border-color: hsl(356, 75%, 53%);\n  }\n\n  .sm\\:border-red-700{\n    border-color: hsl(354, 85%, 44%);\n  }\n\n  .sm\\:border-red-800{\n    border-color: hsl(352, 90%, 35%);\n  }\n\n  .sm\\:border-red-900{\n    border-color: hsl(350, 94%, 28%);\n  }\n\n  .sm\\:border-red-1000{\n    border-color: hsl(348, 94%, 20%);\n  }\n\n  .sm\\:border-orange-100{\n    border-color: #fffaf0;\n  }\n\n  .sm\\:border-orange-200{\n    border-color: #feebc8;\n  }\n\n  .sm\\:border-orange-300{\n    border-color: #fbd38d;\n  }\n\n  .sm\\:border-orange-400{\n    border-color: #f6ad55;\n  }\n\n  .sm\\:border-orange-500{\n    border-color: #ed8936;\n  }\n\n  .sm\\:border-orange-600{\n    border-color: #dd6b20;\n  }\n\n  .sm\\:border-orange-700{\n    border-color: #c05621;\n  }\n\n  .sm\\:border-orange-800{\n    border-color: #9c4221;\n  }\n\n  .sm\\:border-orange-900{\n    border-color: #7b341e;\n  }\n\n  .sm\\:border-yellow-100{\n    border-color: hsl(15, 86%, 30%);\n  }\n\n  .sm\\:border-yellow-200{\n    border-color: hsl(22, 82%, 39%);\n  }\n\n  .sm\\:border-yellow-300{\n    border-color: hsl(29, 80%, 44%);\n  }\n\n  .sm\\:border-yellow-400{\n    border-color: hsl(36, 77%, 49%);\n  }\n\n  .sm\\:border-yellow-500{\n    border-color: hsl(42, 87%, 55%);\n  }\n\n  .sm\\:border-yellow-600{\n    border-color: hsl(44, 92%, 63%);\n  }\n\n  .sm\\:border-yellow-700{\n    border-color: hsl(48, 94%, 68%);\n  }\n\n  .sm\\:border-yellow-800{\n    border-color: hsl(48, 95%, 76%);\n  }\n\n  .sm\\:border-yellow-900{\n    border-color: hsl(48, 100%, 88%);\n  }\n\n  .sm\\:border-yellow-1000{\n    border-color: hsl(49, 100%, 96%);\n  }\n\n  .sm\\:border-green-100{\n    border-color: #f0fff4;\n  }\n\n  .sm\\:border-green-200{\n    border-color: #c6f6d5;\n  }\n\n  .sm\\:border-green-300{\n    border-color: #9ae6b4;\n  }\n\n  .sm\\:border-green-400{\n    border-color: #68d391;\n  }\n\n  .sm\\:border-green-500{\n    border-color: #48bb78;\n  }\n\n  .sm\\:border-green-600{\n    border-color: #38a169;\n  }\n\n  .sm\\:border-green-700{\n    border-color: #2f855a;\n  }\n\n  .sm\\:border-green-800{\n    border-color: #276749;\n  }\n\n  .sm\\:border-green-900{\n    border-color: #22543d;\n  }\n\n  .sm\\:border-teal-100{\n    border-color: hsl(170, 97%, 15%);\n  }\n\n  .sm\\:border-teal-200{\n    border-color: hsl(168, 80%, 23%);\n  }\n\n  .sm\\:border-teal-300{\n    border-color: hsl(166, 72%, 28%);\n  }\n\n  .sm\\:border-teal-400{\n    border-color: hsl(164, 71%, 34%);\n  }\n\n  .sm\\:border-teal-500{\n    border-color: hsl(162, 63%, 41%);\n  }\n\n  .sm\\:border-teal-600{\n    border-color: hsl(160, 51%, 49%);\n  }\n\n  .sm\\:border-teal-700{\n    border-color: hsl(158, 58%, 62%);\n  }\n\n  .sm\\:border-teal-800{\n    border-color: hsl(156, 73%, 74%);\n  }\n\n  .sm\\:border-teal-900{\n    border-color: hsl(154, 75%, 87%);\n  }\n\n  .sm\\:border-teal-1000{\n    border-color: hsl(152, 68%, 96%);\n  }\n\n  .sm\\:border-blue-100{\n    border-color: hsl(195, 100%, 95%);\n  }\n\n  .sm\\:border-blue-200{\n    border-color: hsl(195, 100%, 85%);\n  }\n\n  .sm\\:border-blue-300{\n    border-color: hsl(195, 97%, 75%);\n  }\n\n  .sm\\:border-blue-400{\n    border-color: hsl(196, 94%, 67%);\n  }\n\n  .sm\\:border-blue-500{\n    border-color: hsl(197, 92%, 61%);\n  }\n\n  .sm\\:border-blue-600{\n    border-color: hsl(199, 84%, 55%);\n  }\n\n  .sm\\:border-blue-700{\n    border-color: hsl(201, 79%, 46%);\n  }\n\n  .sm\\:border-blue-800{\n    border-color: hsl(202, 83%, 41%);\n  }\n\n  .sm\\:border-blue-900{\n    border-color: hsl(203, 87%, 34%);\n  }\n\n  .sm\\:border-blue-1000{\n    border-color: hsl(204, 96%, 27%);\n  }\n\n  .sm\\:border-indigo-100{\n    border-color: hsl(221, 68%, 93%);\n  }\n\n  .sm\\:border-indigo-200{\n    border-color: hsl(221, 78%, 86%);\n  }\n\n  .sm\\:border-indigo-300{\n    border-color: hsl(224, 67%, 76%);\n  }\n\n  .sm\\:border-indigo-400{\n    border-color: hsl(225, 57%, 67%);\n  }\n\n  .sm\\:border-indigo-500{\n    border-color: hsl(227, 50%, 59%);\n  }\n\n  .sm\\:border-indigo-600{\n    border-color: hsl(227, 42%, 51%);\n  }\n\n  .sm\\:border-indigo-700{\n    border-color: hsl(228, 45%, 45%);\n  }\n\n  .sm\\:border-indigo-800{\n    border-color: hsl(230, 49%, 41%);\n  }\n\n  .sm\\:border-indigo-900{\n    border-color: hsl(232, 51%, 36%);\n  }\n\n  .sm\\:border-indigo-1000{\n    border-color: hsl(234, 62%, 26%);\n  }\n\n  .sm\\:border-purple-100{\n    border-color: #faf5ff;\n  }\n\n  .sm\\:border-purple-200{\n    border-color: #e9d8fd;\n  }\n\n  .sm\\:border-purple-300{\n    border-color: #d6bcfa;\n  }\n\n  .sm\\:border-purple-400{\n    border-color: #b794f4;\n  }\n\n  .sm\\:border-purple-500{\n    border-color: #9f7aea;\n  }\n\n  .sm\\:border-purple-600{\n    border-color: #805ad5;\n  }\n\n  .sm\\:border-purple-700{\n    border-color: #6b46c1;\n  }\n\n  .sm\\:border-purple-800{\n    border-color: #553c9a;\n  }\n\n  .sm\\:border-purple-900{\n    border-color: #44337a;\n  }\n\n  .sm\\:border-pink-100{\n    border-color: #fff5f7;\n  }\n\n  .sm\\:border-pink-200{\n    border-color: #fed7e2;\n  }\n\n  .sm\\:border-pink-300{\n    border-color: #fbb6ce;\n  }\n\n  .sm\\:border-pink-400{\n    border-color: #f687b3;\n  }\n\n  .sm\\:border-pink-500{\n    border-color: #ed64a6;\n  }\n\n  .sm\\:border-pink-600{\n    border-color: #d53f8c;\n  }\n\n  .sm\\:border-pink-700{\n    border-color: #b83280;\n  }\n\n  .sm\\:border-pink-800{\n    border-color: #97266d;\n  }\n\n  .sm\\:border-pink-900{\n    border-color: #702459;\n  }\n\n  .sm\\:hover\\:border-transparent:hover{\n    border-color: transparent;\n  }\n\n  .sm\\:hover\\:border-black:hover{\n    border-color: #000;\n  }\n\n  .sm\\:hover\\:border-white:hover{\n    border-color: #fff;\n  }\n\n  .sm\\:hover\\:border-gray-100:hover{\n    border-color: hsl(216, 33%, 97%);\n  }\n\n  .sm\\:hover\\:border-gray-200:hover{\n    border-color: hsl(214, 15%, 91%);\n  }\n\n  .sm\\:hover\\:border-gray-300:hover{\n    border-color: hsl(210, 16%, 82%);\n  }\n\n  .sm\\:hover\\:border-gray-400:hover{\n    border-color: hsl(211, 13%, 65%);\n  }\n\n  .sm\\:hover\\:border-gray-500:hover{\n    border-color: hsl(211, 10%, 53%);\n  }\n\n  .sm\\:hover\\:border-gray-600:hover{\n    border-color: hsl(211, 12%, 43%);\n  }\n\n  .sm\\:hover\\:border-gray-700:hover{\n    border-color: hsl(209, 14%, 37%);\n  }\n\n  .sm\\:hover\\:border-gray-800:hover{\n    border-color: hsl(209, 18%, 30%);\n  }\n\n  .sm\\:hover\\:border-gray-900:hover{\n    border-color: hsl(209, 20%, 25%);\n  }\n\n  .sm\\:hover\\:border-gray-1000:hover{\n    border-color: hsl(210, 24%, 16%);\n  }\n\n  .sm\\:hover\\:border-red-100:hover{\n    border-color: hsl(360, 100%, 95%);\n  }\n\n  .sm\\:hover\\:border-red-200:hover{\n    border-color: hsl(360, 100%, 87%);\n  }\n\n  .sm\\:hover\\:border-red-300:hover{\n    border-color: hsl(360, 100%, 80%);\n  }\n\n  .sm\\:hover\\:border-red-400:hover{\n    border-color: hsl(360, 91%, 69%);\n  }\n\n  .sm\\:hover\\:border-red-500:hover{\n    border-color: hsl(360, 83%, 62%);\n  }\n\n  .sm\\:hover\\:border-red-600:hover{\n    border-color: hsl(356, 75%, 53%);\n  }\n\n  .sm\\:hover\\:border-red-700:hover{\n    border-color: hsl(354, 85%, 44%);\n  }\n\n  .sm\\:hover\\:border-red-800:hover{\n    border-color: hsl(352, 90%, 35%);\n  }\n\n  .sm\\:hover\\:border-red-900:hover{\n    border-color: hsl(350, 94%, 28%);\n  }\n\n  .sm\\:hover\\:border-red-1000:hover{\n    border-color: hsl(348, 94%, 20%);\n  }\n\n  .sm\\:hover\\:border-orange-100:hover{\n    border-color: #fffaf0;\n  }\n\n  .sm\\:hover\\:border-orange-200:hover{\n    border-color: #feebc8;\n  }\n\n  .sm\\:hover\\:border-orange-300:hover{\n    border-color: #fbd38d;\n  }\n\n  .sm\\:hover\\:border-orange-400:hover{\n    border-color: #f6ad55;\n  }\n\n  .sm\\:hover\\:border-orange-500:hover{\n    border-color: #ed8936;\n  }\n\n  .sm\\:hover\\:border-orange-600:hover{\n    border-color: #dd6b20;\n  }\n\n  .sm\\:hover\\:border-orange-700:hover{\n    border-color: #c05621;\n  }\n\n  .sm\\:hover\\:border-orange-800:hover{\n    border-color: #9c4221;\n  }\n\n  .sm\\:hover\\:border-orange-900:hover{\n    border-color: #7b341e;\n  }\n\n  .sm\\:hover\\:border-yellow-100:hover{\n    border-color: hsl(15, 86%, 30%);\n  }\n\n  .sm\\:hover\\:border-yellow-200:hover{\n    border-color: hsl(22, 82%, 39%);\n  }\n\n  .sm\\:hover\\:border-yellow-300:hover{\n    border-color: hsl(29, 80%, 44%);\n  }\n\n  .sm\\:hover\\:border-yellow-400:hover{\n    border-color: hsl(36, 77%, 49%);\n  }\n\n  .sm\\:hover\\:border-yellow-500:hover{\n    border-color: hsl(42, 87%, 55%);\n  }\n\n  .sm\\:hover\\:border-yellow-600:hover{\n    border-color: hsl(44, 92%, 63%);\n  }\n\n  .sm\\:hover\\:border-yellow-700:hover{\n    border-color: hsl(48, 94%, 68%);\n  }\n\n  .sm\\:hover\\:border-yellow-800:hover{\n    border-color: hsl(48, 95%, 76%);\n  }\n\n  .sm\\:hover\\:border-yellow-900:hover{\n    border-color: hsl(48, 100%, 88%);\n  }\n\n  .sm\\:hover\\:border-yellow-1000:hover{\n    border-color: hsl(49, 100%, 96%);\n  }\n\n  .sm\\:hover\\:border-green-100:hover{\n    border-color: #f0fff4;\n  }\n\n  .sm\\:hover\\:border-green-200:hover{\n    border-color: #c6f6d5;\n  }\n\n  .sm\\:hover\\:border-green-300:hover{\n    border-color: #9ae6b4;\n  }\n\n  .sm\\:hover\\:border-green-400:hover{\n    border-color: #68d391;\n  }\n\n  .sm\\:hover\\:border-green-500:hover{\n    border-color: #48bb78;\n  }\n\n  .sm\\:hover\\:border-green-600:hover{\n    border-color: #38a169;\n  }\n\n  .sm\\:hover\\:border-green-700:hover{\n    border-color: #2f855a;\n  }\n\n  .sm\\:hover\\:border-green-800:hover{\n    border-color: #276749;\n  }\n\n  .sm\\:hover\\:border-green-900:hover{\n    border-color: #22543d;\n  }\n\n  .sm\\:hover\\:border-teal-100:hover{\n    border-color: hsl(170, 97%, 15%);\n  }\n\n  .sm\\:hover\\:border-teal-200:hover{\n    border-color: hsl(168, 80%, 23%);\n  }\n\n  .sm\\:hover\\:border-teal-300:hover{\n    border-color: hsl(166, 72%, 28%);\n  }\n\n  .sm\\:hover\\:border-teal-400:hover{\n    border-color: hsl(164, 71%, 34%);\n  }\n\n  .sm\\:hover\\:border-teal-500:hover{\n    border-color: hsl(162, 63%, 41%);\n  }\n\n  .sm\\:hover\\:border-teal-600:hover{\n    border-color: hsl(160, 51%, 49%);\n  }\n\n  .sm\\:hover\\:border-teal-700:hover{\n    border-color: hsl(158, 58%, 62%);\n  }\n\n  .sm\\:hover\\:border-teal-800:hover{\n    border-color: hsl(156, 73%, 74%);\n  }\n\n  .sm\\:hover\\:border-teal-900:hover{\n    border-color: hsl(154, 75%, 87%);\n  }\n\n  .sm\\:hover\\:border-teal-1000:hover{\n    border-color: hsl(152, 68%, 96%);\n  }\n\n  .sm\\:hover\\:border-blue-100:hover{\n    border-color: hsl(195, 100%, 95%);\n  }\n\n  .sm\\:hover\\:border-blue-200:hover{\n    border-color: hsl(195, 100%, 85%);\n  }\n\n  .sm\\:hover\\:border-blue-300:hover{\n    border-color: hsl(195, 97%, 75%);\n  }\n\n  .sm\\:hover\\:border-blue-400:hover{\n    border-color: hsl(196, 94%, 67%);\n  }\n\n  .sm\\:hover\\:border-blue-500:hover{\n    border-color: hsl(197, 92%, 61%);\n  }\n\n  .sm\\:hover\\:border-blue-600:hover{\n    border-color: hsl(199, 84%, 55%);\n  }\n\n  .sm\\:hover\\:border-blue-700:hover{\n    border-color: hsl(201, 79%, 46%);\n  }\n\n  .sm\\:hover\\:border-blue-800:hover{\n    border-color: hsl(202, 83%, 41%);\n  }\n\n  .sm\\:hover\\:border-blue-900:hover{\n    border-color: hsl(203, 87%, 34%);\n  }\n\n  .sm\\:hover\\:border-blue-1000:hover{\n    border-color: hsl(204, 96%, 27%);\n  }\n\n  .sm\\:hover\\:border-indigo-100:hover{\n    border-color: hsl(221, 68%, 93%);\n  }\n\n  .sm\\:hover\\:border-indigo-200:hover{\n    border-color: hsl(221, 78%, 86%);\n  }\n\n  .sm\\:hover\\:border-indigo-300:hover{\n    border-color: hsl(224, 67%, 76%);\n  }\n\n  .sm\\:hover\\:border-indigo-400:hover{\n    border-color: hsl(225, 57%, 67%);\n  }\n\n  .sm\\:hover\\:border-indigo-500:hover{\n    border-color: hsl(227, 50%, 59%);\n  }\n\n  .sm\\:hover\\:border-indigo-600:hover{\n    border-color: hsl(227, 42%, 51%);\n  }\n\n  .sm\\:hover\\:border-indigo-700:hover{\n    border-color: hsl(228, 45%, 45%);\n  }\n\n  .sm\\:hover\\:border-indigo-800:hover{\n    border-color: hsl(230, 49%, 41%);\n  }\n\n  .sm\\:hover\\:border-indigo-900:hover{\n    border-color: hsl(232, 51%, 36%);\n  }\n\n  .sm\\:hover\\:border-indigo-1000:hover{\n    border-color: hsl(234, 62%, 26%);\n  }\n\n  .sm\\:hover\\:border-purple-100:hover{\n    border-color: #faf5ff;\n  }\n\n  .sm\\:hover\\:border-purple-200:hover{\n    border-color: #e9d8fd;\n  }\n\n  .sm\\:hover\\:border-purple-300:hover{\n    border-color: #d6bcfa;\n  }\n\n  .sm\\:hover\\:border-purple-400:hover{\n    border-color: #b794f4;\n  }\n\n  .sm\\:hover\\:border-purple-500:hover{\n    border-color: #9f7aea;\n  }\n\n  .sm\\:hover\\:border-purple-600:hover{\n    border-color: #805ad5;\n  }\n\n  .sm\\:hover\\:border-purple-700:hover{\n    border-color: #6b46c1;\n  }\n\n  .sm\\:hover\\:border-purple-800:hover{\n    border-color: #553c9a;\n  }\n\n  .sm\\:hover\\:border-purple-900:hover{\n    border-color: #44337a;\n  }\n\n  .sm\\:hover\\:border-pink-100:hover{\n    border-color: #fff5f7;\n  }\n\n  .sm\\:hover\\:border-pink-200:hover{\n    border-color: #fed7e2;\n  }\n\n  .sm\\:hover\\:border-pink-300:hover{\n    border-color: #fbb6ce;\n  }\n\n  .sm\\:hover\\:border-pink-400:hover{\n    border-color: #f687b3;\n  }\n\n  .sm\\:hover\\:border-pink-500:hover{\n    border-color: #ed64a6;\n  }\n\n  .sm\\:hover\\:border-pink-600:hover{\n    border-color: #d53f8c;\n  }\n\n  .sm\\:hover\\:border-pink-700:hover{\n    border-color: #b83280;\n  }\n\n  .sm\\:hover\\:border-pink-800:hover{\n    border-color: #97266d;\n  }\n\n  .sm\\:hover\\:border-pink-900:hover{\n    border-color: #702459;\n  }\n\n  .sm\\:focus\\:border-transparent:focus{\n    border-color: transparent;\n  }\n\n  .sm\\:focus\\:border-black:focus{\n    border-color: #000;\n  }\n\n  .sm\\:focus\\:border-white:focus{\n    border-color: #fff;\n  }\n\n  .sm\\:focus\\:border-gray-100:focus{\n    border-color: hsl(216, 33%, 97%);\n  }\n\n  .sm\\:focus\\:border-gray-200:focus{\n    border-color: hsl(214, 15%, 91%);\n  }\n\n  .sm\\:focus\\:border-gray-300:focus{\n    border-color: hsl(210, 16%, 82%);\n  }\n\n  .sm\\:focus\\:border-gray-400:focus{\n    border-color: hsl(211, 13%, 65%);\n  }\n\n  .sm\\:focus\\:border-gray-500:focus{\n    border-color: hsl(211, 10%, 53%);\n  }\n\n  .sm\\:focus\\:border-gray-600:focus{\n    border-color: hsl(211, 12%, 43%);\n  }\n\n  .sm\\:focus\\:border-gray-700:focus{\n    border-color: hsl(209, 14%, 37%);\n  }\n\n  .sm\\:focus\\:border-gray-800:focus{\n    border-color: hsl(209, 18%, 30%);\n  }\n\n  .sm\\:focus\\:border-gray-900:focus{\n    border-color: hsl(209, 20%, 25%);\n  }\n\n  .sm\\:focus\\:border-gray-1000:focus{\n    border-color: hsl(210, 24%, 16%);\n  }\n\n  .sm\\:focus\\:border-red-100:focus{\n    border-color: hsl(360, 100%, 95%);\n  }\n\n  .sm\\:focus\\:border-red-200:focus{\n    border-color: hsl(360, 100%, 87%);\n  }\n\n  .sm\\:focus\\:border-red-300:focus{\n    border-color: hsl(360, 100%, 80%);\n  }\n\n  .sm\\:focus\\:border-red-400:focus{\n    border-color: hsl(360, 91%, 69%);\n  }\n\n  .sm\\:focus\\:border-red-500:focus{\n    border-color: hsl(360, 83%, 62%);\n  }\n\n  .sm\\:focus\\:border-red-600:focus{\n    border-color: hsl(356, 75%, 53%);\n  }\n\n  .sm\\:focus\\:border-red-700:focus{\n    border-color: hsl(354, 85%, 44%);\n  }\n\n  .sm\\:focus\\:border-red-800:focus{\n    border-color: hsl(352, 90%, 35%);\n  }\n\n  .sm\\:focus\\:border-red-900:focus{\n    border-color: hsl(350, 94%, 28%);\n  }\n\n  .sm\\:focus\\:border-red-1000:focus{\n    border-color: hsl(348, 94%, 20%);\n  }\n\n  .sm\\:focus\\:border-orange-100:focus{\n    border-color: #fffaf0;\n  }\n\n  .sm\\:focus\\:border-orange-200:focus{\n    border-color: #feebc8;\n  }\n\n  .sm\\:focus\\:border-orange-300:focus{\n    border-color: #fbd38d;\n  }\n\n  .sm\\:focus\\:border-orange-400:focus{\n    border-color: #f6ad55;\n  }\n\n  .sm\\:focus\\:border-orange-500:focus{\n    border-color: #ed8936;\n  }\n\n  .sm\\:focus\\:border-orange-600:focus{\n    border-color: #dd6b20;\n  }\n\n  .sm\\:focus\\:border-orange-700:focus{\n    border-color: #c05621;\n  }\n\n  .sm\\:focus\\:border-orange-800:focus{\n    border-color: #9c4221;\n  }\n\n  .sm\\:focus\\:border-orange-900:focus{\n    border-color: #7b341e;\n  }\n\n  .sm\\:focus\\:border-yellow-100:focus{\n    border-color: hsl(15, 86%, 30%);\n  }\n\n  .sm\\:focus\\:border-yellow-200:focus{\n    border-color: hsl(22, 82%, 39%);\n  }\n\n  .sm\\:focus\\:border-yellow-300:focus{\n    border-color: hsl(29, 80%, 44%);\n  }\n\n  .sm\\:focus\\:border-yellow-400:focus{\n    border-color: hsl(36, 77%, 49%);\n  }\n\n  .sm\\:focus\\:border-yellow-500:focus{\n    border-color: hsl(42, 87%, 55%);\n  }\n\n  .sm\\:focus\\:border-yellow-600:focus{\n    border-color: hsl(44, 92%, 63%);\n  }\n\n  .sm\\:focus\\:border-yellow-700:focus{\n    border-color: hsl(48, 94%, 68%);\n  }\n\n  .sm\\:focus\\:border-yellow-800:focus{\n    border-color: hsl(48, 95%, 76%);\n  }\n\n  .sm\\:focus\\:border-yellow-900:focus{\n    border-color: hsl(48, 100%, 88%);\n  }\n\n  .sm\\:focus\\:border-yellow-1000:focus{\n    border-color: hsl(49, 100%, 96%);\n  }\n\n  .sm\\:focus\\:border-green-100:focus{\n    border-color: #f0fff4;\n  }\n\n  .sm\\:focus\\:border-green-200:focus{\n    border-color: #c6f6d5;\n  }\n\n  .sm\\:focus\\:border-green-300:focus{\n    border-color: #9ae6b4;\n  }\n\n  .sm\\:focus\\:border-green-400:focus{\n    border-color: #68d391;\n  }\n\n  .sm\\:focus\\:border-green-500:focus{\n    border-color: #48bb78;\n  }\n\n  .sm\\:focus\\:border-green-600:focus{\n    border-color: #38a169;\n  }\n\n  .sm\\:focus\\:border-green-700:focus{\n    border-color: #2f855a;\n  }\n\n  .sm\\:focus\\:border-green-800:focus{\n    border-color: #276749;\n  }\n\n  .sm\\:focus\\:border-green-900:focus{\n    border-color: #22543d;\n  }\n\n  .sm\\:focus\\:border-teal-100:focus{\n    border-color: hsl(170, 97%, 15%);\n  }\n\n  .sm\\:focus\\:border-teal-200:focus{\n    border-color: hsl(168, 80%, 23%);\n  }\n\n  .sm\\:focus\\:border-teal-300:focus{\n    border-color: hsl(166, 72%, 28%);\n  }\n\n  .sm\\:focus\\:border-teal-400:focus{\n    border-color: hsl(164, 71%, 34%);\n  }\n\n  .sm\\:focus\\:border-teal-500:focus{\n    border-color: hsl(162, 63%, 41%);\n  }\n\n  .sm\\:focus\\:border-teal-600:focus{\n    border-color: hsl(160, 51%, 49%);\n  }\n\n  .sm\\:focus\\:border-teal-700:focus{\n    border-color: hsl(158, 58%, 62%);\n  }\n\n  .sm\\:focus\\:border-teal-800:focus{\n    border-color: hsl(156, 73%, 74%);\n  }\n\n  .sm\\:focus\\:border-teal-900:focus{\n    border-color: hsl(154, 75%, 87%);\n  }\n\n  .sm\\:focus\\:border-teal-1000:focus{\n    border-color: hsl(152, 68%, 96%);\n  }\n\n  .sm\\:focus\\:border-blue-100:focus{\n    border-color: hsl(195, 100%, 95%);\n  }\n\n  .sm\\:focus\\:border-blue-200:focus{\n    border-color: hsl(195, 100%, 85%);\n  }\n\n  .sm\\:focus\\:border-blue-300:focus{\n    border-color: hsl(195, 97%, 75%);\n  }\n\n  .sm\\:focus\\:border-blue-400:focus{\n    border-color: hsl(196, 94%, 67%);\n  }\n\n  .sm\\:focus\\:border-blue-500:focus{\n    border-color: hsl(197, 92%, 61%);\n  }\n\n  .sm\\:focus\\:border-blue-600:focus{\n    border-color: hsl(199, 84%, 55%);\n  }\n\n  .sm\\:focus\\:border-blue-700:focus{\n    border-color: hsl(201, 79%, 46%);\n  }\n\n  .sm\\:focus\\:border-blue-800:focus{\n    border-color: hsl(202, 83%, 41%);\n  }\n\n  .sm\\:focus\\:border-blue-900:focus{\n    border-color: hsl(203, 87%, 34%);\n  }\n\n  .sm\\:focus\\:border-blue-1000:focus{\n    border-color: hsl(204, 96%, 27%);\n  }\n\n  .sm\\:focus\\:border-indigo-100:focus{\n    border-color: hsl(221, 68%, 93%);\n  }\n\n  .sm\\:focus\\:border-indigo-200:focus{\n    border-color: hsl(221, 78%, 86%);\n  }\n\n  .sm\\:focus\\:border-indigo-300:focus{\n    border-color: hsl(224, 67%, 76%);\n  }\n\n  .sm\\:focus\\:border-indigo-400:focus{\n    border-color: hsl(225, 57%, 67%);\n  }\n\n  .sm\\:focus\\:border-indigo-500:focus{\n    border-color: hsl(227, 50%, 59%);\n  }\n\n  .sm\\:focus\\:border-indigo-600:focus{\n    border-color: hsl(227, 42%, 51%);\n  }\n\n  .sm\\:focus\\:border-indigo-700:focus{\n    border-color: hsl(228, 45%, 45%);\n  }\n\n  .sm\\:focus\\:border-indigo-800:focus{\n    border-color: hsl(230, 49%, 41%);\n  }\n\n  .sm\\:focus\\:border-indigo-900:focus{\n    border-color: hsl(232, 51%, 36%);\n  }\n\n  .sm\\:focus\\:border-indigo-1000:focus{\n    border-color: hsl(234, 62%, 26%);\n  }\n\n  .sm\\:focus\\:border-purple-100:focus{\n    border-color: #faf5ff;\n  }\n\n  .sm\\:focus\\:border-purple-200:focus{\n    border-color: #e9d8fd;\n  }\n\n  .sm\\:focus\\:border-purple-300:focus{\n    border-color: #d6bcfa;\n  }\n\n  .sm\\:focus\\:border-purple-400:focus{\n    border-color: #b794f4;\n  }\n\n  .sm\\:focus\\:border-purple-500:focus{\n    border-color: #9f7aea;\n  }\n\n  .sm\\:focus\\:border-purple-600:focus{\n    border-color: #805ad5;\n  }\n\n  .sm\\:focus\\:border-purple-700:focus{\n    border-color: #6b46c1;\n  }\n\n  .sm\\:focus\\:border-purple-800:focus{\n    border-color: #553c9a;\n  }\n\n  .sm\\:focus\\:border-purple-900:focus{\n    border-color: #44337a;\n  }\n\n  .sm\\:focus\\:border-pink-100:focus{\n    border-color: #fff5f7;\n  }\n\n  .sm\\:focus\\:border-pink-200:focus{\n    border-color: #fed7e2;\n  }\n\n  .sm\\:focus\\:border-pink-300:focus{\n    border-color: #fbb6ce;\n  }\n\n  .sm\\:focus\\:border-pink-400:focus{\n    border-color: #f687b3;\n  }\n\n  .sm\\:focus\\:border-pink-500:focus{\n    border-color: #ed64a6;\n  }\n\n  .sm\\:focus\\:border-pink-600:focus{\n    border-color: #d53f8c;\n  }\n\n  .sm\\:focus\\:border-pink-700:focus{\n    border-color: #b83280;\n  }\n\n  .sm\\:focus\\:border-pink-800:focus{\n    border-color: #97266d;\n  }\n\n  .sm\\:focus\\:border-pink-900:focus{\n    border-color: #702459;\n  }\n\n  .sm\\:rounded-none{\n    border-radius: 0;\n  }\n\n  .sm\\:rounded-sm{\n    border-radius: 0.125rem;\n  }\n\n  .sm\\:rounded{\n    border-radius: 0.25rem;\n  }\n\n  .sm\\:rounded-lg{\n    border-radius: 0.5rem;\n  }\n\n  .sm\\:rounded-full{\n    border-radius: 9999px;\n  }\n\n  .sm\\:rounded-t-none{\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n\n  .sm\\:rounded-r-none{\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n\n  .sm\\:rounded-b-none{\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n\n  .sm\\:rounded-l-none{\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n\n  .sm\\:rounded-t-sm{\n    border-top-left-radius: 0.125rem;\n    border-top-right-radius: 0.125rem;\n  }\n\n  .sm\\:rounded-r-sm{\n    border-top-right-radius: 0.125rem;\n    border-bottom-right-radius: 0.125rem;\n  }\n\n  .sm\\:rounded-b-sm{\n    border-bottom-right-radius: 0.125rem;\n    border-bottom-left-radius: 0.125rem;\n  }\n\n  .sm\\:rounded-l-sm{\n    border-top-left-radius: 0.125rem;\n    border-bottom-left-radius: 0.125rem;\n  }\n\n  .sm\\:rounded-t{\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n  }\n\n  .sm\\:rounded-r{\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n  }\n\n  .sm\\:rounded-b{\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n\n  .sm\\:rounded-l{\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n\n  .sm\\:rounded-t-lg{\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n  }\n\n  .sm\\:rounded-r-lg{\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n  }\n\n  .sm\\:rounded-b-lg{\n    border-bottom-right-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n  }\n\n  .sm\\:rounded-l-lg{\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n  }\n\n  .sm\\:rounded-t-full{\n    border-top-left-radius: 9999px;\n    border-top-right-radius: 9999px;\n  }\n\n  .sm\\:rounded-r-full{\n    border-top-right-radius: 9999px;\n    border-bottom-right-radius: 9999px;\n  }\n\n  .sm\\:rounded-b-full{\n    border-bottom-right-radius: 9999px;\n    border-bottom-left-radius: 9999px;\n  }\n\n  .sm\\:rounded-l-full{\n    border-top-left-radius: 9999px;\n    border-bottom-left-radius: 9999px;\n  }\n\n  .sm\\:rounded-tl-none{\n    border-top-left-radius: 0;\n  }\n\n  .sm\\:rounded-tr-none{\n    border-top-right-radius: 0;\n  }\n\n  .sm\\:rounded-br-none{\n    border-bottom-right-radius: 0;\n  }\n\n  .sm\\:rounded-bl-none{\n    border-bottom-left-radius: 0;\n  }\n\n  .sm\\:rounded-tl-sm{\n    border-top-left-radius: 0.125rem;\n  }\n\n  .sm\\:rounded-tr-sm{\n    border-top-right-radius: 0.125rem;\n  }\n\n  .sm\\:rounded-br-sm{\n    border-bottom-right-radius: 0.125rem;\n  }\n\n  .sm\\:rounded-bl-sm{\n    border-bottom-left-radius: 0.125rem;\n  }\n\n  .sm\\:rounded-tl{\n    border-top-left-radius: 0.25rem;\n  }\n\n  .sm\\:rounded-tr{\n    border-top-right-radius: 0.25rem;\n  }\n\n  .sm\\:rounded-br{\n    border-bottom-right-radius: 0.25rem;\n  }\n\n  .sm\\:rounded-bl{\n    border-bottom-left-radius: 0.25rem;\n  }\n\n  .sm\\:rounded-tl-lg{\n    border-top-left-radius: 0.5rem;\n  }\n\n  .sm\\:rounded-tr-lg{\n    border-top-right-radius: 0.5rem;\n  }\n\n  .sm\\:rounded-br-lg{\n    border-bottom-right-radius: 0.5rem;\n  }\n\n  .sm\\:rounded-bl-lg{\n    border-bottom-left-radius: 0.5rem;\n  }\n\n  .sm\\:rounded-tl-full{\n    border-top-left-radius: 9999px;\n  }\n\n  .sm\\:rounded-tr-full{\n    border-top-right-radius: 9999px;\n  }\n\n  .sm\\:rounded-br-full{\n    border-bottom-right-radius: 9999px;\n  }\n\n  .sm\\:rounded-bl-full{\n    border-bottom-left-radius: 9999px;\n  }\n\n  .sm\\:border-solid{\n    border-style: solid;\n  }\n\n  .sm\\:border-dashed{\n    border-style: dashed;\n  }\n\n  .sm\\:border-dotted{\n    border-style: dotted;\n  }\n\n  .sm\\:border-none{\n    border-style: none;\n  }\n\n  .sm\\:border-0{\n    border-width: 0;\n  }\n\n  .sm\\:border-2{\n    border-width: 2px;\n  }\n\n  .sm\\:border-4{\n    border-width: 4px;\n  }\n\n  .sm\\:border-8{\n    border-width: 8px;\n  }\n\n  .sm\\:border{\n    border-width: 1px;\n  }\n\n  .sm\\:border-t-0{\n    border-top-width: 0;\n  }\n\n  .sm\\:border-r-0{\n    border-right-width: 0;\n  }\n\n  .sm\\:border-b-0{\n    border-bottom-width: 0;\n  }\n\n  .sm\\:border-l-0{\n    border-left-width: 0;\n  }\n\n  .sm\\:border-t-2{\n    border-top-width: 2px;\n  }\n\n  .sm\\:border-r-2{\n    border-right-width: 2px;\n  }\n\n  .sm\\:border-b-2{\n    border-bottom-width: 2px;\n  }\n\n  .sm\\:border-l-2{\n    border-left-width: 2px;\n  }\n\n  .sm\\:border-t-4{\n    border-top-width: 4px;\n  }\n\n  .sm\\:border-r-4{\n    border-right-width: 4px;\n  }\n\n  .sm\\:border-b-4{\n    border-bottom-width: 4px;\n  }\n\n  .sm\\:border-l-4{\n    border-left-width: 4px;\n  }\n\n  .sm\\:border-t-8{\n    border-top-width: 8px;\n  }\n\n  .sm\\:border-r-8{\n    border-right-width: 8px;\n  }\n\n  .sm\\:border-b-8{\n    border-bottom-width: 8px;\n  }\n\n  .sm\\:border-l-8{\n    border-left-width: 8px;\n  }\n\n  .sm\\:border-t{\n    border-top-width: 1px;\n  }\n\n  .sm\\:border-r{\n    border-right-width: 1px;\n  }\n\n  .sm\\:border-b{\n    border-bottom-width: 1px;\n  }\n\n  .sm\\:border-l{\n    border-left-width: 1px;\n  }\n\n  .sm\\:cursor-auto{\n    cursor: auto;\n  }\n\n  .sm\\:cursor-default{\n    cursor: default;\n  }\n\n  .sm\\:cursor-pointer{\n    cursor: pointer;\n  }\n\n  .sm\\:cursor-wait{\n    cursor: wait;\n  }\n\n  .sm\\:cursor-text{\n    cursor: text;\n  }\n\n  .sm\\:cursor-move{\n    cursor: move;\n  }\n\n  .sm\\:cursor-not-allowed{\n    cursor: not-allowed;\n  }\n\n  .sm\\:block{\n    display: block;\n  }\n\n  .sm\\:inline-block{\n    display: inline-block;\n  }\n\n  .sm\\:inline{\n    display: inline;\n  }\n\n  .sm\\:flex{\n    display: flex;\n  }\n\n  .sm\\:inline-flex{\n    display: inline-flex;\n  }\n\n  .sm\\:table{\n    display: table;\n  }\n\n  .sm\\:table-row{\n    display: table-row;\n  }\n\n  .sm\\:table-cell{\n    display: table-cell;\n  }\n\n  .sm\\:hidden{\n    display: none;\n  }\n\n  .sm\\:flex-row{\n    flex-direction: row;\n  }\n\n  .sm\\:flex-row-reverse{\n    flex-direction: row-reverse;\n  }\n\n  .sm\\:flex-col{\n    flex-direction: column;\n  }\n\n  .sm\\:flex-col-reverse{\n    flex-direction: column-reverse;\n  }\n\n  .sm\\:flex-wrap{\n    flex-wrap: wrap;\n  }\n\n  .sm\\:flex-wrap-reverse{\n    flex-wrap: wrap-reverse;\n  }\n\n  .sm\\:flex-no-wrap{\n    flex-wrap: nowrap;\n  }\n\n  .sm\\:items-start{\n    align-items: flex-start;\n  }\n\n  .sm\\:items-end{\n    align-items: flex-end;\n  }\n\n  .sm\\:items-center{\n    align-items: center;\n  }\n\n  .sm\\:items-baseline{\n    align-items: baseline;\n  }\n\n  .sm\\:items-stretch{\n    align-items: stretch;\n  }\n\n  .sm\\:self-auto{\n    align-self: auto;\n  }\n\n  .sm\\:self-start{\n    align-self: flex-start;\n  }\n\n  .sm\\:self-end{\n    align-self: flex-end;\n  }\n\n  .sm\\:self-center{\n    align-self: center;\n  }\n\n  .sm\\:self-stretch{\n    align-self: stretch;\n  }\n\n  .sm\\:justify-start{\n    justify-content: flex-start;\n  }\n\n  .sm\\:justify-end{\n    justify-content: flex-end;\n  }\n\n  .sm\\:justify-center{\n    justify-content: center;\n  }\n\n  .sm\\:justify-between{\n    justify-content: space-between;\n  }\n\n  .sm\\:justify-around{\n    justify-content: space-around;\n  }\n\n  .sm\\:content-center{\n    align-content: center;\n  }\n\n  .sm\\:content-start{\n    align-content: flex-start;\n  }\n\n  .sm\\:content-end{\n    align-content: flex-end;\n  }\n\n  .sm\\:content-between{\n    align-content: space-between;\n  }\n\n  .sm\\:content-around{\n    align-content: space-around;\n  }\n\n  .sm\\:flex-1{\n    flex: 1 1 0%;\n  }\n\n  .sm\\:flex-auto{\n    flex: 1 1 auto;\n  }\n\n  .sm\\:flex-initial{\n    flex: 0 1 auto;\n  }\n\n  .sm\\:flex-none{\n    flex: none;\n  }\n\n  .sm\\:flex-grow-0{\n    flex-grow: 0;\n  }\n\n  .sm\\:flex-grow{\n    flex-grow: 1;\n  }\n\n  .sm\\:flex-shrink-0{\n    flex-shrink: 0;\n  }\n\n  .sm\\:flex-shrink{\n    flex-shrink: 1;\n  }\n\n  .sm\\:order-1{\n    order: 1;\n  }\n\n  .sm\\:order-2{\n    order: 2;\n  }\n\n  .sm\\:order-3{\n    order: 3;\n  }\n\n  .sm\\:order-4{\n    order: 4;\n  }\n\n  .sm\\:order-5{\n    order: 5;\n  }\n\n  .sm\\:order-6{\n    order: 6;\n  }\n\n  .sm\\:order-7{\n    order: 7;\n  }\n\n  .sm\\:order-8{\n    order: 8;\n  }\n\n  .sm\\:order-9{\n    order: 9;\n  }\n\n  .sm\\:order-10{\n    order: 10;\n  }\n\n  .sm\\:order-11{\n    order: 11;\n  }\n\n  .sm\\:order-12{\n    order: 12;\n  }\n\n  .sm\\:order-first{\n    order: -9999;\n  }\n\n  .sm\\:order-last{\n    order: 9999;\n  }\n\n  .sm\\:order-none{\n    order: 0;\n  }\n\n  .sm\\:float-right{\n    float: right;\n  }\n\n  .sm\\:float-left{\n    float: left;\n  }\n\n  .sm\\:float-none{\n    float: none;\n  }\n\n  .sm\\:clearfix:after{\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n\n  .sm\\:font-sans{\n    font-family: Source Sans Pro, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  }\n\n  .sm\\:font-serif{\n    font-family: Georgia, Cambria, \"Times New Roman\", Times, serif;\n  }\n\n  .sm\\:font-mono{\n    font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  }\n\n  .sm\\:font-hairline{\n    font-weight: 100;\n  }\n\n  .sm\\:font-thin{\n    font-weight: 200;\n  }\n\n  .sm\\:font-light{\n    font-weight: 300;\n  }\n\n  .sm\\:font-normal{\n    font-weight: 400;\n  }\n\n  .sm\\:font-medium{\n    font-weight: 500;\n  }\n\n  .sm\\:font-semibold{\n    font-weight: 600;\n  }\n\n  .sm\\:font-bold{\n    font-weight: 700;\n  }\n\n  .sm\\:font-extrabold{\n    font-weight: 800;\n  }\n\n  .sm\\:font-black{\n    font-weight: 900;\n  }\n\n  .sm\\:hover\\:font-hairline:hover{\n    font-weight: 100;\n  }\n\n  .sm\\:hover\\:font-thin:hover{\n    font-weight: 200;\n  }\n\n  .sm\\:hover\\:font-light:hover{\n    font-weight: 300;\n  }\n\n  .sm\\:hover\\:font-normal:hover{\n    font-weight: 400;\n  }\n\n  .sm\\:hover\\:font-medium:hover{\n    font-weight: 500;\n  }\n\n  .sm\\:hover\\:font-semibold:hover{\n    font-weight: 600;\n  }\n\n  .sm\\:hover\\:font-bold:hover{\n    font-weight: 700;\n  }\n\n  .sm\\:hover\\:font-extrabold:hover{\n    font-weight: 800;\n  }\n\n  .sm\\:hover\\:font-black:hover{\n    font-weight: 900;\n  }\n\n  .sm\\:focus\\:font-hairline:focus{\n    font-weight: 100;\n  }\n\n  .sm\\:focus\\:font-thin:focus{\n    font-weight: 200;\n  }\n\n  .sm\\:focus\\:font-light:focus{\n    font-weight: 300;\n  }\n\n  .sm\\:focus\\:font-normal:focus{\n    font-weight: 400;\n  }\n\n  .sm\\:focus\\:font-medium:focus{\n    font-weight: 500;\n  }\n\n  .sm\\:focus\\:font-semibold:focus{\n    font-weight: 600;\n  }\n\n  .sm\\:focus\\:font-bold:focus{\n    font-weight: 700;\n  }\n\n  .sm\\:focus\\:font-extrabold:focus{\n    font-weight: 800;\n  }\n\n  .sm\\:focus\\:font-black:focus{\n    font-weight: 900;\n  }\n\n  .sm\\:h-0{\n    height: 0;\n  }\n\n  .sm\\:h-1{\n    height: 0.25rem;\n  }\n\n  .sm\\:h-2{\n    height: 0.5rem;\n  }\n\n  .sm\\:h-3{\n    height: 0.75rem;\n  }\n\n  .sm\\:h-4{\n    height: 1rem;\n  }\n\n  .sm\\:h-5{\n    height: 1.25rem;\n  }\n\n  .sm\\:h-6{\n    height: 1.5rem;\n  }\n\n  .sm\\:h-8{\n    height: 2rem;\n  }\n\n  .sm\\:h-10{\n    height: 2.5rem;\n  }\n\n  .sm\\:h-12{\n    height: 3rem;\n  }\n\n  .sm\\:h-16{\n    height: 4rem;\n  }\n\n  .sm\\:h-20{\n    height: 5rem;\n  }\n\n  .sm\\:h-24{\n    height: 6rem;\n  }\n\n  .sm\\:h-32{\n    height: 8rem;\n  }\n\n  .sm\\:h-40{\n    height: 10rem;\n  }\n\n  .sm\\:h-48{\n    height: 12rem;\n  }\n\n  .sm\\:h-56{\n    height: 14rem;\n  }\n\n  .sm\\:h-64{\n    height: 16rem;\n  }\n\n  .sm\\:h-auto{\n    height: auto;\n  }\n\n  .sm\\:h-px{\n    height: 1px;\n  }\n\n  .sm\\:h-full{\n    height: 100%;\n  }\n\n  .sm\\:h-screen{\n    height: 100vh;\n  }\n\n  .sm\\:leading-none{\n    line-height: 1;\n  }\n\n  .sm\\:leading-tight{\n    line-height: 1.25;\n  }\n\n  .sm\\:leading-snug{\n    line-height: 1.375;\n  }\n\n  .sm\\:leading-normal{\n    line-height: 1.5;\n  }\n\n  .sm\\:leading-relaxed{\n    line-height: 1.625;\n  }\n\n  .sm\\:leading-loose{\n    line-height: 2;\n  }\n\n  .sm\\:list-inside{\n    list-style-position: inside;\n  }\n\n  .sm\\:list-outside{\n    list-style-position: outside;\n  }\n\n  .sm\\:list-none{\n    list-style-type: none;\n  }\n\n  .sm\\:list-disc{\n    list-style-type: disc;\n  }\n\n  .sm\\:list-decimal{\n    list-style-type: decimal;\n  }\n\n  .sm\\:m-0{\n    margin: 0;\n  }\n\n  .sm\\:m-1{\n    margin: 0.25rem;\n  }\n\n  .sm\\:m-2{\n    margin: 0.5rem;\n  }\n\n  .sm\\:m-3{\n    margin: 0.75rem;\n  }\n\n  .sm\\:m-4{\n    margin: 1rem;\n  }\n\n  .sm\\:m-5{\n    margin: 1.25rem;\n  }\n\n  .sm\\:m-6{\n    margin: 1.5rem;\n  }\n\n  .sm\\:m-8{\n    margin: 2rem;\n  }\n\n  .sm\\:m-10{\n    margin: 2.5rem;\n  }\n\n  .sm\\:m-12{\n    margin: 3rem;\n  }\n\n  .sm\\:m-16{\n    margin: 4rem;\n  }\n\n  .sm\\:m-20{\n    margin: 5rem;\n  }\n\n  .sm\\:m-24{\n    margin: 6rem;\n  }\n\n  .sm\\:m-32{\n    margin: 8rem;\n  }\n\n  .sm\\:m-40{\n    margin: 10rem;\n  }\n\n  .sm\\:m-48{\n    margin: 12rem;\n  }\n\n  .sm\\:m-56{\n    margin: 14rem;\n  }\n\n  .sm\\:m-64{\n    margin: 16rem;\n  }\n\n  .sm\\:m-auto{\n    margin: auto;\n  }\n\n  .sm\\:m-px{\n    margin: 1px;\n  }\n\n  .sm\\:-m-1{\n    margin: -0.25rem;\n  }\n\n  .sm\\:-m-2{\n    margin: -0.5rem;\n  }\n\n  .sm\\:-m-3{\n    margin: -0.75rem;\n  }\n\n  .sm\\:-m-4{\n    margin: -1rem;\n  }\n\n  .sm\\:-m-5{\n    margin: -1.25rem;\n  }\n\n  .sm\\:-m-6{\n    margin: -1.5rem;\n  }\n\n  .sm\\:-m-8{\n    margin: -2rem;\n  }\n\n  .sm\\:-m-10{\n    margin: -2.5rem;\n  }\n\n  .sm\\:-m-12{\n    margin: -3rem;\n  }\n\n  .sm\\:-m-16{\n    margin: -4rem;\n  }\n\n  .sm\\:-m-20{\n    margin: -5rem;\n  }\n\n  .sm\\:-m-24{\n    margin: -6rem;\n  }\n\n  .sm\\:-m-32{\n    margin: -8rem;\n  }\n\n  .sm\\:-m-40{\n    margin: -10rem;\n  }\n\n  .sm\\:-m-48{\n    margin: -12rem;\n  }\n\n  .sm\\:-m-56{\n    margin: -14rem;\n  }\n\n  .sm\\:-m-64{\n    margin: -16rem;\n  }\n\n  .sm\\:-m-px{\n    margin: -1px;\n  }\n\n  .sm\\:my-0{\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .sm\\:mx-0{\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  .sm\\:my-1{\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem;\n  }\n\n  .sm\\:mx-1{\n    margin-left: 0.25rem;\n    margin-right: 0.25rem;\n  }\n\n  .sm\\:my-2{\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n  }\n\n  .sm\\:mx-2{\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n\n  .sm\\:my-3{\n    margin-top: 0.75rem;\n    margin-bottom: 0.75rem;\n  }\n\n  .sm\\:mx-3{\n    margin-left: 0.75rem;\n    margin-right: 0.75rem;\n  }\n\n  .sm\\:my-4{\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  .sm\\:mx-4{\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n\n  .sm\\:my-5{\n    margin-top: 1.25rem;\n    margin-bottom: 1.25rem;\n  }\n\n  .sm\\:mx-5{\n    margin-left: 1.25rem;\n    margin-right: 1.25rem;\n  }\n\n  .sm\\:my-6{\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem;\n  }\n\n  .sm\\:mx-6{\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n\n  .sm\\:my-8{\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n  }\n\n  .sm\\:mx-8{\n    margin-left: 2rem;\n    margin-right: 2rem;\n  }\n\n  .sm\\:my-10{\n    margin-top: 2.5rem;\n    margin-bottom: 2.5rem;\n  }\n\n  .sm\\:mx-10{\n    margin-left: 2.5rem;\n    margin-right: 2.5rem;\n  }\n\n  .sm\\:my-12{\n    margin-top: 3rem;\n    margin-bottom: 3rem;\n  }\n\n  .sm\\:mx-12{\n    margin-left: 3rem;\n    margin-right: 3rem;\n  }\n\n  .sm\\:my-16{\n    margin-top: 4rem;\n    margin-bottom: 4rem;\n  }\n\n  .sm\\:mx-16{\n    margin-left: 4rem;\n    margin-right: 4rem;\n  }\n\n  .sm\\:my-20{\n    margin-top: 5rem;\n    margin-bottom: 5rem;\n  }\n\n  .sm\\:mx-20{\n    margin-left: 5rem;\n    margin-right: 5rem;\n  }\n\n  .sm\\:my-24{\n    margin-top: 6rem;\n    margin-bottom: 6rem;\n  }\n\n  .sm\\:mx-24{\n    margin-left: 6rem;\n    margin-right: 6rem;\n  }\n\n  .sm\\:my-32{\n    margin-top: 8rem;\n    margin-bottom: 8rem;\n  }\n\n  .sm\\:mx-32{\n    margin-left: 8rem;\n    margin-right: 8rem;\n  }\n\n  .sm\\:my-40{\n    margin-top: 10rem;\n    margin-bottom: 10rem;\n  }\n\n  .sm\\:mx-40{\n    margin-left: 10rem;\n    margin-right: 10rem;\n  }\n\n  .sm\\:my-48{\n    margin-top: 12rem;\n    margin-bottom: 12rem;\n  }\n\n  .sm\\:mx-48{\n    margin-left: 12rem;\n    margin-right: 12rem;\n  }\n\n  .sm\\:my-56{\n    margin-top: 14rem;\n    margin-bottom: 14rem;\n  }\n\n  .sm\\:mx-56{\n    margin-left: 14rem;\n    margin-right: 14rem;\n  }\n\n  .sm\\:my-64{\n    margin-top: 16rem;\n    margin-bottom: 16rem;\n  }\n\n  .sm\\:mx-64{\n    margin-left: 16rem;\n    margin-right: 16rem;\n  }\n\n  .sm\\:my-auto{\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n\n  .sm\\:mx-auto{\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .sm\\:my-px{\n    margin-top: 1px;\n    margin-bottom: 1px;\n  }\n\n  .sm\\:mx-px{\n    margin-left: 1px;\n    margin-right: 1px;\n  }\n\n  .sm\\:-my-1{\n    margin-top: -0.25rem;\n    margin-bottom: -0.25rem;\n  }\n\n  .sm\\:-mx-1{\n    margin-left: -0.25rem;\n    margin-right: -0.25rem;\n  }\n\n  .sm\\:-my-2{\n    margin-top: -0.5rem;\n    margin-bottom: -0.5rem;\n  }\n\n  .sm\\:-mx-2{\n    margin-left: -0.5rem;\n    margin-right: -0.5rem;\n  }\n\n  .sm\\:-my-3{\n    margin-top: -0.75rem;\n    margin-bottom: -0.75rem;\n  }\n\n  .sm\\:-mx-3{\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n  }\n\n  .sm\\:-my-4{\n    margin-top: -1rem;\n    margin-bottom: -1rem;\n  }\n\n  .sm\\:-mx-4{\n    margin-left: -1rem;\n    margin-right: -1rem;\n  }\n\n  .sm\\:-my-5{\n    margin-top: -1.25rem;\n    margin-bottom: -1.25rem;\n  }\n\n  .sm\\:-mx-5{\n    margin-left: -1.25rem;\n    margin-right: -1.25rem;\n  }\n\n  .sm\\:-my-6{\n    margin-top: -1.5rem;\n    margin-bottom: -1.5rem;\n  }\n\n  .sm\\:-mx-6{\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n  }\n\n  .sm\\:-my-8{\n    margin-top: -2rem;\n    margin-bottom: -2rem;\n  }\n\n  .sm\\:-mx-8{\n    margin-left: -2rem;\n    margin-right: -2rem;\n  }\n\n  .sm\\:-my-10{\n    margin-top: -2.5rem;\n    margin-bottom: -2.5rem;\n  }\n\n  .sm\\:-mx-10{\n    margin-left: -2.5rem;\n    margin-right: -2.5rem;\n  }\n\n  .sm\\:-my-12{\n    margin-top: -3rem;\n    margin-bottom: -3rem;\n  }\n\n  .sm\\:-mx-12{\n    margin-left: -3rem;\n    margin-right: -3rem;\n  }\n\n  .sm\\:-my-16{\n    margin-top: -4rem;\n    margin-bottom: -4rem;\n  }\n\n  .sm\\:-mx-16{\n    margin-left: -4rem;\n    margin-right: -4rem;\n  }\n\n  .sm\\:-my-20{\n    margin-top: -5rem;\n    margin-bottom: -5rem;\n  }\n\n  .sm\\:-mx-20{\n    margin-left: -5rem;\n    margin-right: -5rem;\n  }\n\n  .sm\\:-my-24{\n    margin-top: -6rem;\n    margin-bottom: -6rem;\n  }\n\n  .sm\\:-mx-24{\n    margin-left: -6rem;\n    margin-right: -6rem;\n  }\n\n  .sm\\:-my-32{\n    margin-top: -8rem;\n    margin-bottom: -8rem;\n  }\n\n  .sm\\:-mx-32{\n    margin-left: -8rem;\n    margin-right: -8rem;\n  }\n\n  .sm\\:-my-40{\n    margin-top: -10rem;\n    margin-bottom: -10rem;\n  }\n\n  .sm\\:-mx-40{\n    margin-left: -10rem;\n    margin-right: -10rem;\n  }\n\n  .sm\\:-my-48{\n    margin-top: -12rem;\n    margin-bottom: -12rem;\n  }\n\n  .sm\\:-mx-48{\n    margin-left: -12rem;\n    margin-right: -12rem;\n  }\n\n  .sm\\:-my-56{\n    margin-top: -14rem;\n    margin-bottom: -14rem;\n  }\n\n  .sm\\:-mx-56{\n    margin-left: -14rem;\n    margin-right: -14rem;\n  }\n\n  .sm\\:-my-64{\n    margin-top: -16rem;\n    margin-bottom: -16rem;\n  }\n\n  .sm\\:-mx-64{\n    margin-left: -16rem;\n    margin-right: -16rem;\n  }\n\n  .sm\\:-my-px{\n    margin-top: -1px;\n    margin-bottom: -1px;\n  }\n\n  .sm\\:-mx-px{\n    margin-left: -1px;\n    margin-right: -1px;\n  }\n\n  .sm\\:mt-0{\n    margin-top: 0;\n  }\n\n  .sm\\:mr-0{\n    margin-right: 0;\n  }\n\n  .sm\\:mb-0{\n    margin-bottom: 0;\n  }\n\n  .sm\\:ml-0{\n    margin-left: 0;\n  }\n\n  .sm\\:mt-1{\n    margin-top: 0.25rem;\n  }\n\n  .sm\\:mr-1{\n    margin-right: 0.25rem;\n  }\n\n  .sm\\:mb-1{\n    margin-bottom: 0.25rem;\n  }\n\n  .sm\\:ml-1{\n    margin-left: 0.25rem;\n  }\n\n  .sm\\:mt-2{\n    margin-top: 0.5rem;\n  }\n\n  .sm\\:mr-2{\n    margin-right: 0.5rem;\n  }\n\n  .sm\\:mb-2{\n    margin-bottom: 0.5rem;\n  }\n\n  .sm\\:ml-2{\n    margin-left: 0.5rem;\n  }\n\n  .sm\\:mt-3{\n    margin-top: 0.75rem;\n  }\n\n  .sm\\:mr-3{\n    margin-right: 0.75rem;\n  }\n\n  .sm\\:mb-3{\n    margin-bottom: 0.75rem;\n  }\n\n  .sm\\:ml-3{\n    margin-left: 0.75rem;\n  }\n\n  .sm\\:mt-4{\n    margin-top: 1rem;\n  }\n\n  .sm\\:mr-4{\n    margin-right: 1rem;\n  }\n\n  .sm\\:mb-4{\n    margin-bottom: 1rem;\n  }\n\n  .sm\\:ml-4{\n    margin-left: 1rem;\n  }\n\n  .sm\\:mt-5{\n    margin-top: 1.25rem;\n  }\n\n  .sm\\:mr-5{\n    margin-right: 1.25rem;\n  }\n\n  .sm\\:mb-5{\n    margin-bottom: 1.25rem;\n  }\n\n  .sm\\:ml-5{\n    margin-left: 1.25rem;\n  }\n\n  .sm\\:mt-6{\n    margin-top: 1.5rem;\n  }\n\n  .sm\\:mr-6{\n    margin-right: 1.5rem;\n  }\n\n  .sm\\:mb-6{\n    margin-bottom: 1.5rem;\n  }\n\n  .sm\\:ml-6{\n    margin-left: 1.5rem;\n  }\n\n  .sm\\:mt-8{\n    margin-top: 2rem;\n  }\n\n  .sm\\:mr-8{\n    margin-right: 2rem;\n  }\n\n  .sm\\:mb-8{\n    margin-bottom: 2rem;\n  }\n\n  .sm\\:ml-8{\n    margin-left: 2rem;\n  }\n\n  .sm\\:mt-10{\n    margin-top: 2.5rem;\n  }\n\n  .sm\\:mr-10{\n    margin-right: 2.5rem;\n  }\n\n  .sm\\:mb-10{\n    margin-bottom: 2.5rem;\n  }\n\n  .sm\\:ml-10{\n    margin-left: 2.5rem;\n  }\n\n  .sm\\:mt-12{\n    margin-top: 3rem;\n  }\n\n  .sm\\:mr-12{\n    margin-right: 3rem;\n  }\n\n  .sm\\:mb-12{\n    margin-bottom: 3rem;\n  }\n\n  .sm\\:ml-12{\n    margin-left: 3rem;\n  }\n\n  .sm\\:mt-16{\n    margin-top: 4rem;\n  }\n\n  .sm\\:mr-16{\n    margin-right: 4rem;\n  }\n\n  .sm\\:mb-16{\n    margin-bottom: 4rem;\n  }\n\n  .sm\\:ml-16{\n    margin-left: 4rem;\n  }\n\n  .sm\\:mt-20{\n    margin-top: 5rem;\n  }\n\n  .sm\\:mr-20{\n    margin-right: 5rem;\n  }\n\n  .sm\\:mb-20{\n    margin-bottom: 5rem;\n  }\n\n  .sm\\:ml-20{\n    margin-left: 5rem;\n  }\n\n  .sm\\:mt-24{\n    margin-top: 6rem;\n  }\n\n  .sm\\:mr-24{\n    margin-right: 6rem;\n  }\n\n  .sm\\:mb-24{\n    margin-bottom: 6rem;\n  }\n\n  .sm\\:ml-24{\n    margin-left: 6rem;\n  }\n\n  .sm\\:mt-32{\n    margin-top: 8rem;\n  }\n\n  .sm\\:mr-32{\n    margin-right: 8rem;\n  }\n\n  .sm\\:mb-32{\n    margin-bottom: 8rem;\n  }\n\n  .sm\\:ml-32{\n    margin-left: 8rem;\n  }\n\n  .sm\\:mt-40{\n    margin-top: 10rem;\n  }\n\n  .sm\\:mr-40{\n    margin-right: 10rem;\n  }\n\n  .sm\\:mb-40{\n    margin-bottom: 10rem;\n  }\n\n  .sm\\:ml-40{\n    margin-left: 10rem;\n  }\n\n  .sm\\:mt-48{\n    margin-top: 12rem;\n  }\n\n  .sm\\:mr-48{\n    margin-right: 12rem;\n  }\n\n  .sm\\:mb-48{\n    margin-bottom: 12rem;\n  }\n\n  .sm\\:ml-48{\n    margin-left: 12rem;\n  }\n\n  .sm\\:mt-56{\n    margin-top: 14rem;\n  }\n\n  .sm\\:mr-56{\n    margin-right: 14rem;\n  }\n\n  .sm\\:mb-56{\n    margin-bottom: 14rem;\n  }\n\n  .sm\\:ml-56{\n    margin-left: 14rem;\n  }\n\n  .sm\\:mt-64{\n    margin-top: 16rem;\n  }\n\n  .sm\\:mr-64{\n    margin-right: 16rem;\n  }\n\n  .sm\\:mb-64{\n    margin-bottom: 16rem;\n  }\n\n  .sm\\:ml-64{\n    margin-left: 16rem;\n  }\n\n  .sm\\:mt-auto{\n    margin-top: auto;\n  }\n\n  .sm\\:mr-auto{\n    margin-right: auto;\n  }\n\n  .sm\\:mb-auto{\n    margin-bottom: auto;\n  }\n\n  .sm\\:ml-auto{\n    margin-left: auto;\n  }\n\n  .sm\\:mt-px{\n    margin-top: 1px;\n  }\n\n  .sm\\:mr-px{\n    margin-right: 1px;\n  }\n\n  .sm\\:mb-px{\n    margin-bottom: 1px;\n  }\n\n  .sm\\:ml-px{\n    margin-left: 1px;\n  }\n\n  .sm\\:-mt-1{\n    margin-top: -0.25rem;\n  }\n\n  .sm\\:-mr-1{\n    margin-right: -0.25rem;\n  }\n\n  .sm\\:-mb-1{\n    margin-bottom: -0.25rem;\n  }\n\n  .sm\\:-ml-1{\n    margin-left: -0.25rem;\n  }\n\n  .sm\\:-mt-2{\n    margin-top: -0.5rem;\n  }\n\n  .sm\\:-mr-2{\n    margin-right: -0.5rem;\n  }\n\n  .sm\\:-mb-2{\n    margin-bottom: -0.5rem;\n  }\n\n  .sm\\:-ml-2{\n    margin-left: -0.5rem;\n  }\n\n  .sm\\:-mt-3{\n    margin-top: -0.75rem;\n  }\n\n  .sm\\:-mr-3{\n    margin-right: -0.75rem;\n  }\n\n  .sm\\:-mb-3{\n    margin-bottom: -0.75rem;\n  }\n\n  .sm\\:-ml-3{\n    margin-left: -0.75rem;\n  }\n\n  .sm\\:-mt-4{\n    margin-top: -1rem;\n  }\n\n  .sm\\:-mr-4{\n    margin-right: -1rem;\n  }\n\n  .sm\\:-mb-4{\n    margin-bottom: -1rem;\n  }\n\n  .sm\\:-ml-4{\n    margin-left: -1rem;\n  }\n\n  .sm\\:-mt-5{\n    margin-top: -1.25rem;\n  }\n\n  .sm\\:-mr-5{\n    margin-right: -1.25rem;\n  }\n\n  .sm\\:-mb-5{\n    margin-bottom: -1.25rem;\n  }\n\n  .sm\\:-ml-5{\n    margin-left: -1.25rem;\n  }\n\n  .sm\\:-mt-6{\n    margin-top: -1.5rem;\n  }\n\n  .sm\\:-mr-6{\n    margin-right: -1.5rem;\n  }\n\n  .sm\\:-mb-6{\n    margin-bottom: -1.5rem;\n  }\n\n  .sm\\:-ml-6{\n    margin-left: -1.5rem;\n  }\n\n  .sm\\:-mt-8{\n    margin-top: -2rem;\n  }\n\n  .sm\\:-mr-8{\n    margin-right: -2rem;\n  }\n\n  .sm\\:-mb-8{\n    margin-bottom: -2rem;\n  }\n\n  .sm\\:-ml-8{\n    margin-left: -2rem;\n  }\n\n  .sm\\:-mt-10{\n    margin-top: -2.5rem;\n  }\n\n  .sm\\:-mr-10{\n    margin-right: -2.5rem;\n  }\n\n  .sm\\:-mb-10{\n    margin-bottom: -2.5rem;\n  }\n\n  .sm\\:-ml-10{\n    margin-left: -2.5rem;\n  }\n\n  .sm\\:-mt-12{\n    margin-top: -3rem;\n  }\n\n  .sm\\:-mr-12{\n    margin-right: -3rem;\n  }\n\n  .sm\\:-mb-12{\n    margin-bottom: -3rem;\n  }\n\n  .sm\\:-ml-12{\n    margin-left: -3rem;\n  }\n\n  .sm\\:-mt-16{\n    margin-top: -4rem;\n  }\n\n  .sm\\:-mr-16{\n    margin-right: -4rem;\n  }\n\n  .sm\\:-mb-16{\n    margin-bottom: -4rem;\n  }\n\n  .sm\\:-ml-16{\n    margin-left: -4rem;\n  }\n\n  .sm\\:-mt-20{\n    margin-top: -5rem;\n  }\n\n  .sm\\:-mr-20{\n    margin-right: -5rem;\n  }\n\n  .sm\\:-mb-20{\n    margin-bottom: -5rem;\n  }\n\n  .sm\\:-ml-20{\n    margin-left: -5rem;\n  }\n\n  .sm\\:-mt-24{\n    margin-top: -6rem;\n  }\n\n  .sm\\:-mr-24{\n    margin-right: -6rem;\n  }\n\n  .sm\\:-mb-24{\n    margin-bottom: -6rem;\n  }\n\n  .sm\\:-ml-24{\n    margin-left: -6rem;\n  }\n\n  .sm\\:-mt-32{\n    margin-top: -8rem;\n  }\n\n  .sm\\:-mr-32{\n    margin-right: -8rem;\n  }\n\n  .sm\\:-mb-32{\n    margin-bottom: -8rem;\n  }\n\n  .sm\\:-ml-32{\n    margin-left: -8rem;\n  }\n\n  .sm\\:-mt-40{\n    margin-top: -10rem;\n  }\n\n  .sm\\:-mr-40{\n    margin-right: -10rem;\n  }\n\n  .sm\\:-mb-40{\n    margin-bottom: -10rem;\n  }\n\n  .sm\\:-ml-40{\n    margin-left: -10rem;\n  }\n\n  .sm\\:-mt-48{\n    margin-top: -12rem;\n  }\n\n  .sm\\:-mr-48{\n    margin-right: -12rem;\n  }\n\n  .sm\\:-mb-48{\n    margin-bottom: -12rem;\n  }\n\n  .sm\\:-ml-48{\n    margin-left: -12rem;\n  }\n\n  .sm\\:-mt-56{\n    margin-top: -14rem;\n  }\n\n  .sm\\:-mr-56{\n    margin-right: -14rem;\n  }\n\n  .sm\\:-mb-56{\n    margin-bottom: -14rem;\n  }\n\n  .sm\\:-ml-56{\n    margin-left: -14rem;\n  }\n\n  .sm\\:-mt-64{\n    margin-top: -16rem;\n  }\n\n  .sm\\:-mr-64{\n    margin-right: -16rem;\n  }\n\n  .sm\\:-mb-64{\n    margin-bottom: -16rem;\n  }\n\n  .sm\\:-ml-64{\n    margin-left: -16rem;\n  }\n\n  .sm\\:-mt-px{\n    margin-top: -1px;\n  }\n\n  .sm\\:-mr-px{\n    margin-right: -1px;\n  }\n\n  .sm\\:-mb-px{\n    margin-bottom: -1px;\n  }\n\n  .sm\\:-ml-px{\n    margin-left: -1px;\n  }\n\n  .sm\\:max-h-full{\n    max-height: 100%;\n  }\n\n  .sm\\:max-h-screen{\n    max-height: 100vh;\n  }\n\n  .sm\\:max-w-xs{\n    max-width: 20rem;\n  }\n\n  .sm\\:max-w-sm{\n    max-width: 24rem;\n  }\n\n  .sm\\:max-w-md{\n    max-width: 28rem;\n  }\n\n  .sm\\:max-w-lg{\n    max-width: 32rem;\n  }\n\n  .sm\\:max-w-xl{\n    max-width: 36rem;\n  }\n\n  .sm\\:max-w-2xl{\n    max-width: 42rem;\n  }\n\n  .sm\\:max-w-3xl{\n    max-width: 48rem;\n  }\n\n  .sm\\:max-w-4xl{\n    max-width: 56rem;\n  }\n\n  .sm\\:max-w-5xl{\n    max-width: 64rem;\n  }\n\n  .sm\\:max-w-6xl{\n    max-width: 72rem;\n  }\n\n  .sm\\:max-w-full{\n    max-width: 100%;\n  }\n\n  .sm\\:min-h-0{\n    min-height: 0;\n  }\n\n  .sm\\:min-h-full{\n    min-height: 100%;\n  }\n\n  .sm\\:min-h-screen{\n    min-height: 100vh;\n  }\n\n  .sm\\:min-w-0{\n    min-width: 0;\n  }\n\n  .sm\\:min-w-full{\n    min-width: 100%;\n  }\n\n  .sm\\:object-contain{\n    -o-object-fit: contain;\n       object-fit: contain;\n  }\n\n  .sm\\:object-cover{\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n\n  .sm\\:object-fill{\n    -o-object-fit: fill;\n       object-fit: fill;\n  }\n\n  .sm\\:object-none{\n    -o-object-fit: none;\n       object-fit: none;\n  }\n\n  .sm\\:object-scale-down{\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n  }\n\n  .sm\\:object-bottom{\n    -o-object-position: bottom;\n       object-position: bottom;\n  }\n\n  .sm\\:object-center{\n    -o-object-position: center;\n       object-position: center;\n  }\n\n  .sm\\:object-left{\n    -o-object-position: left;\n       object-position: left;\n  }\n\n  .sm\\:object-left-bottom{\n    -o-object-position: left bottom;\n       object-position: left bottom;\n  }\n\n  .sm\\:object-left-top{\n    -o-object-position: left top;\n       object-position: left top;\n  }\n\n  .sm\\:object-right{\n    -o-object-position: right;\n       object-position: right;\n  }\n\n  .sm\\:object-right-bottom{\n    -o-object-position: right bottom;\n       object-position: right bottom;\n  }\n\n  .sm\\:object-right-top{\n    -o-object-position: right top;\n       object-position: right top;\n  }\n\n  .sm\\:object-top{\n    -o-object-position: top;\n       object-position: top;\n  }\n\n  .sm\\:opacity-0{\n    opacity: 0;\n  }\n\n  .sm\\:opacity-25{\n    opacity: 0.25;\n  }\n\n  .sm\\:opacity-50{\n    opacity: 0.5;\n  }\n\n  .sm\\:opacity-75{\n    opacity: 0.75;\n  }\n\n  .sm\\:opacity-100{\n    opacity: 1;\n  }\n\n  .sm\\:outline-none{\n    outline: 0;\n  }\n\n  .sm\\:focus\\:outline-none:focus{\n    outline: 0;\n  }\n\n  .sm\\:overflow-auto{\n    overflow: auto;\n  }\n\n  .sm\\:overflow-hidden{\n    overflow: hidden;\n  }\n\n  .sm\\:overflow-visible{\n    overflow: visible;\n  }\n\n  .sm\\:overflow-scroll{\n    overflow: scroll;\n  }\n\n  .sm\\:overflow-x-auto{\n    overflow-x: auto;\n  }\n\n  .sm\\:overflow-y-auto{\n    overflow-y: auto;\n  }\n\n  .sm\\:overflow-x-hidden{\n    overflow-x: hidden;\n  }\n\n  .sm\\:overflow-y-hidden{\n    overflow-y: hidden;\n  }\n\n  .sm\\:overflow-x-visible{\n    overflow-x: visible;\n  }\n\n  .sm\\:overflow-y-visible{\n    overflow-y: visible;\n  }\n\n  .sm\\:overflow-x-scroll{\n    overflow-x: scroll;\n  }\n\n  .sm\\:overflow-y-scroll{\n    overflow-y: scroll;\n  }\n\n  .sm\\:scrolling-touch{\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .sm\\:scrolling-auto{\n    -webkit-overflow-scrolling: auto;\n  }\n\n  .sm\\:p-0{\n    padding: 0;\n  }\n\n  .sm\\:p-1{\n    padding: 0.25rem;\n  }\n\n  .sm\\:p-2{\n    padding: 0.5rem;\n  }\n\n  .sm\\:p-3{\n    padding: 0.75rem;\n  }\n\n  .sm\\:p-4{\n    padding: 1rem;\n  }\n\n  .sm\\:p-5{\n    padding: 1.25rem;\n  }\n\n  .sm\\:p-6{\n    padding: 1.5rem;\n  }\n\n  .sm\\:p-8{\n    padding: 2rem;\n  }\n\n  .sm\\:p-10{\n    padding: 2.5rem;\n  }\n\n  .sm\\:p-12{\n    padding: 3rem;\n  }\n\n  .sm\\:p-16{\n    padding: 4rem;\n  }\n\n  .sm\\:p-20{\n    padding: 5rem;\n  }\n\n  .sm\\:p-24{\n    padding: 6rem;\n  }\n\n  .sm\\:p-32{\n    padding: 8rem;\n  }\n\n  .sm\\:p-40{\n    padding: 10rem;\n  }\n\n  .sm\\:p-48{\n    padding: 12rem;\n  }\n\n  .sm\\:p-56{\n    padding: 14rem;\n  }\n\n  .sm\\:p-64{\n    padding: 16rem;\n  }\n\n  .sm\\:p-px{\n    padding: 1px;\n  }\n\n  .sm\\:py-0{\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  .sm\\:px-0{\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .sm\\:py-1{\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n  }\n\n  .sm\\:px-1{\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n  }\n\n  .sm\\:py-2{\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n  }\n\n  .sm\\:px-2{\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n\n  .sm\\:py-3{\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n  }\n\n  .sm\\:px-3{\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  }\n\n  .sm\\:py-4{\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .sm\\:px-4{\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  .sm\\:py-5{\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem;\n  }\n\n  .sm\\:px-5{\n    padding-left: 1.25rem;\n    padding-right: 1.25rem;\n  }\n\n  .sm\\:py-6{\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n\n  .sm\\:px-6{\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .sm\\:py-8{\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n  }\n\n  .sm\\:px-8{\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .sm\\:py-10{\n    padding-top: 2.5rem;\n    padding-bottom: 2.5rem;\n  }\n\n  .sm\\:px-10{\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n  }\n\n  .sm\\:py-12{\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n  }\n\n  .sm\\:px-12{\n    padding-left: 3rem;\n    padding-right: 3rem;\n  }\n\n  .sm\\:py-16{\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n  }\n\n  .sm\\:px-16{\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n\n  .sm\\:py-20{\n    padding-top: 5rem;\n    padding-bottom: 5rem;\n  }\n\n  .sm\\:px-20{\n    padding-left: 5rem;\n    padding-right: 5rem;\n  }\n\n  .sm\\:py-24{\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n\n  .sm\\:px-24{\n    padding-left: 6rem;\n    padding-right: 6rem;\n  }\n\n  .sm\\:py-32{\n    padding-top: 8rem;\n    padding-bottom: 8rem;\n  }\n\n  .sm\\:px-32{\n    padding-left: 8rem;\n    padding-right: 8rem;\n  }\n\n  .sm\\:py-40{\n    padding-top: 10rem;\n    padding-bottom: 10rem;\n  }\n\n  .sm\\:px-40{\n    padding-left: 10rem;\n    padding-right: 10rem;\n  }\n\n  .sm\\:py-48{\n    padding-top: 12rem;\n    padding-bottom: 12rem;\n  }\n\n  .sm\\:px-48{\n    padding-left: 12rem;\n    padding-right: 12rem;\n  }\n\n  .sm\\:py-56{\n    padding-top: 14rem;\n    padding-bottom: 14rem;\n  }\n\n  .sm\\:px-56{\n    padding-left: 14rem;\n    padding-right: 14rem;\n  }\n\n  .sm\\:py-64{\n    padding-top: 16rem;\n    padding-bottom: 16rem;\n  }\n\n  .sm\\:px-64{\n    padding-left: 16rem;\n    padding-right: 16rem;\n  }\n\n  .sm\\:py-px{\n    padding-top: 1px;\n    padding-bottom: 1px;\n  }\n\n  .sm\\:px-px{\n    padding-left: 1px;\n    padding-right: 1px;\n  }\n\n  .sm\\:pt-0{\n    padding-top: 0;\n  }\n\n  .sm\\:pr-0{\n    padding-right: 0;\n  }\n\n  .sm\\:pb-0{\n    padding-bottom: 0;\n  }\n\n  .sm\\:pl-0{\n    padding-left: 0;\n  }\n\n  .sm\\:pt-1{\n    padding-top: 0.25rem;\n  }\n\n  .sm\\:pr-1{\n    padding-right: 0.25rem;\n  }\n\n  .sm\\:pb-1{\n    padding-bottom: 0.25rem;\n  }\n\n  .sm\\:pl-1{\n    padding-left: 0.25rem;\n  }\n\n  .sm\\:pt-2{\n    padding-top: 0.5rem;\n  }\n\n  .sm\\:pr-2{\n    padding-right: 0.5rem;\n  }\n\n  .sm\\:pb-2{\n    padding-bottom: 0.5rem;\n  }\n\n  .sm\\:pl-2{\n    padding-left: 0.5rem;\n  }\n\n  .sm\\:pt-3{\n    padding-top: 0.75rem;\n  }\n\n  .sm\\:pr-3{\n    padding-right: 0.75rem;\n  }\n\n  .sm\\:pb-3{\n    padding-bottom: 0.75rem;\n  }\n\n  .sm\\:pl-3{\n    padding-left: 0.75rem;\n  }\n\n  .sm\\:pt-4{\n    padding-top: 1rem;\n  }\n\n  .sm\\:pr-4{\n    padding-right: 1rem;\n  }\n\n  .sm\\:pb-4{\n    padding-bottom: 1rem;\n  }\n\n  .sm\\:pl-4{\n    padding-left: 1rem;\n  }\n\n  .sm\\:pt-5{\n    padding-top: 1.25rem;\n  }\n\n  .sm\\:pr-5{\n    padding-right: 1.25rem;\n  }\n\n  .sm\\:pb-5{\n    padding-bottom: 1.25rem;\n  }\n\n  .sm\\:pl-5{\n    padding-left: 1.25rem;\n  }\n\n  .sm\\:pt-6{\n    padding-top: 1.5rem;\n  }\n\n  .sm\\:pr-6{\n    padding-right: 1.5rem;\n  }\n\n  .sm\\:pb-6{\n    padding-bottom: 1.5rem;\n  }\n\n  .sm\\:pl-6{\n    padding-left: 1.5rem;\n  }\n\n  .sm\\:pt-8{\n    padding-top: 2rem;\n  }\n\n  .sm\\:pr-8{\n    padding-right: 2rem;\n  }\n\n  .sm\\:pb-8{\n    padding-bottom: 2rem;\n  }\n\n  .sm\\:pl-8{\n    padding-left: 2rem;\n  }\n\n  .sm\\:pt-10{\n    padding-top: 2.5rem;\n  }\n\n  .sm\\:pr-10{\n    padding-right: 2.5rem;\n  }\n\n  .sm\\:pb-10{\n    padding-bottom: 2.5rem;\n  }\n\n  .sm\\:pl-10{\n    padding-left: 2.5rem;\n  }\n\n  .sm\\:pt-12{\n    padding-top: 3rem;\n  }\n\n  .sm\\:pr-12{\n    padding-right: 3rem;\n  }\n\n  .sm\\:pb-12{\n    padding-bottom: 3rem;\n  }\n\n  .sm\\:pl-12{\n    padding-left: 3rem;\n  }\n\n  .sm\\:pt-16{\n    padding-top: 4rem;\n  }\n\n  .sm\\:pr-16{\n    padding-right: 4rem;\n  }\n\n  .sm\\:pb-16{\n    padding-bottom: 4rem;\n  }\n\n  .sm\\:pl-16{\n    padding-left: 4rem;\n  }\n\n  .sm\\:pt-20{\n    padding-top: 5rem;\n  }\n\n  .sm\\:pr-20{\n    padding-right: 5rem;\n  }\n\n  .sm\\:pb-20{\n    padding-bottom: 5rem;\n  }\n\n  .sm\\:pl-20{\n    padding-left: 5rem;\n  }\n\n  .sm\\:pt-24{\n    padding-top: 6rem;\n  }\n\n  .sm\\:pr-24{\n    padding-right: 6rem;\n  }\n\n  .sm\\:pb-24{\n    padding-bottom: 6rem;\n  }\n\n  .sm\\:pl-24{\n    padding-left: 6rem;\n  }\n\n  .sm\\:pt-32{\n    padding-top: 8rem;\n  }\n\n  .sm\\:pr-32{\n    padding-right: 8rem;\n  }\n\n  .sm\\:pb-32{\n    padding-bottom: 8rem;\n  }\n\n  .sm\\:pl-32{\n    padding-left: 8rem;\n  }\n\n  .sm\\:pt-40{\n    padding-top: 10rem;\n  }\n\n  .sm\\:pr-40{\n    padding-right: 10rem;\n  }\n\n  .sm\\:pb-40{\n    padding-bottom: 10rem;\n  }\n\n  .sm\\:pl-40{\n    padding-left: 10rem;\n  }\n\n  .sm\\:pt-48{\n    padding-top: 12rem;\n  }\n\n  .sm\\:pr-48{\n    padding-right: 12rem;\n  }\n\n  .sm\\:pb-48{\n    padding-bottom: 12rem;\n  }\n\n  .sm\\:pl-48{\n    padding-left: 12rem;\n  }\n\n  .sm\\:pt-56{\n    padding-top: 14rem;\n  }\n\n  .sm\\:pr-56{\n    padding-right: 14rem;\n  }\n\n  .sm\\:pb-56{\n    padding-bottom: 14rem;\n  }\n\n  .sm\\:pl-56{\n    padding-left: 14rem;\n  }\n\n  .sm\\:pt-64{\n    padding-top: 16rem;\n  }\n\n  .sm\\:pr-64{\n    padding-right: 16rem;\n  }\n\n  .sm\\:pb-64{\n    padding-bottom: 16rem;\n  }\n\n  .sm\\:pl-64{\n    padding-left: 16rem;\n  }\n\n  .sm\\:pt-px{\n    padding-top: 1px;\n  }\n\n  .sm\\:pr-px{\n    padding-right: 1px;\n  }\n\n  .sm\\:pb-px{\n    padding-bottom: 1px;\n  }\n\n  .sm\\:pl-px{\n    padding-left: 1px;\n  }\n\n  .sm\\:pointer-events-none{\n    pointer-events: none;\n  }\n\n  .sm\\:pointer-events-auto{\n    pointer-events: auto;\n  }\n\n  .sm\\:static{\n    position: static;\n  }\n\n  .sm\\:fixed{\n    position: fixed;\n  }\n\n  .sm\\:absolute{\n    position: absolute;\n  }\n\n  .sm\\:relative{\n    position: relative;\n  }\n\n  .sm\\:sticky{\n    position: -webkit-sticky;\n    position: sticky;\n  }\n\n  .sm\\:inset-0{\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n\n  .sm\\:inset-auto{\n    top: auto;\n    right: auto;\n    bottom: auto;\n    left: auto;\n  }\n\n  .sm\\:inset-y-0{\n    top: 0;\n    bottom: 0;\n  }\n\n  .sm\\:inset-x-0{\n    right: 0;\n    left: 0;\n  }\n\n  .sm\\:inset-y-auto{\n    top: auto;\n    bottom: auto;\n  }\n\n  .sm\\:inset-x-auto{\n    right: auto;\n    left: auto;\n  }\n\n  .sm\\:top-0{\n    top: 0;\n  }\n\n  .sm\\:right-0{\n    right: 0;\n  }\n\n  .sm\\:bottom-0{\n    bottom: 0;\n  }\n\n  .sm\\:left-0{\n    left: 0;\n  }\n\n  .sm\\:top-auto{\n    top: auto;\n  }\n\n  .sm\\:right-auto{\n    right: auto;\n  }\n\n  .sm\\:bottom-auto{\n    bottom: auto;\n  }\n\n  .sm\\:left-auto{\n    left: auto;\n  }\n\n  .sm\\:resize-none{\n    resize: none;\n  }\n\n  .sm\\:resize-y{\n    resize: vertical;\n  }\n\n  .sm\\:resize-x{\n    resize: horizontal;\n  }\n\n  .sm\\:resize{\n    resize: both;\n  }\n\n  .sm\\:shadow{\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .sm\\:shadow-md{\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  }\n\n  .sm\\:shadow-lg{\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  }\n\n  .sm\\:shadow-xl{\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  }\n\n  .sm\\:shadow-2xl{\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  }\n\n  .sm\\:shadow-inner{\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .sm\\:shadow-outline{\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  }\n\n  .sm\\:shadow-none{\n    box-shadow: none;\n  }\n\n  .sm\\:hover\\:shadow:hover{\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .sm\\:hover\\:shadow-md:hover{\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  }\n\n  .sm\\:hover\\:shadow-lg:hover{\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  }\n\n  .sm\\:hover\\:shadow-xl:hover{\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  }\n\n  .sm\\:hover\\:shadow-2xl:hover{\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  }\n\n  .sm\\:hover\\:shadow-inner:hover{\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .sm\\:hover\\:shadow-outline:hover{\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  }\n\n  .sm\\:hover\\:shadow-none:hover{\n    box-shadow: none;\n  }\n\n  .sm\\:focus\\:shadow:focus{\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .sm\\:focus\\:shadow-md:focus{\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  }\n\n  .sm\\:focus\\:shadow-lg:focus{\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  }\n\n  .sm\\:focus\\:shadow-xl:focus{\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  }\n\n  .sm\\:focus\\:shadow-2xl:focus{\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  }\n\n  .sm\\:focus\\:shadow-inner:focus{\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .sm\\:focus\\:shadow-outline:focus{\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  }\n\n  .sm\\:focus\\:shadow-none:focus{\n    box-shadow: none;\n  }\n\n  .sm\\:fill-current{\n    fill: currentColor;\n  }\n\n  .sm\\:stroke-current{\n    stroke: currentColor;\n  }\n\n  .sm\\:table-auto{\n    table-layout: auto;\n  }\n\n  .sm\\:table-fixed{\n    table-layout: fixed;\n  }\n\n  .sm\\:text-left{\n    text-align: left;\n  }\n\n  .sm\\:text-center{\n    text-align: center;\n  }\n\n  .sm\\:text-right{\n    text-align: right;\n  }\n\n  .sm\\:text-justify{\n    text-align: justify;\n  }\n\n  .sm\\:text-transparent{\n    color: transparent;\n  }\n\n  .sm\\:text-black{\n    color: #000;\n  }\n\n  .sm\\:text-white{\n    color: #fff;\n  }\n\n  .sm\\:text-gray-100{\n    color: hsl(216, 33%, 97%);\n  }\n\n  .sm\\:text-gray-200{\n    color: hsl(214, 15%, 91%);\n  }\n\n  .sm\\:text-gray-300{\n    color: hsl(210, 16%, 82%);\n  }\n\n  .sm\\:text-gray-400{\n    color: hsl(211, 13%, 65%);\n  }\n\n  .sm\\:text-gray-500{\n    color: hsl(211, 10%, 53%);\n  }\n\n  .sm\\:text-gray-600{\n    color: hsl(211, 12%, 43%);\n  }\n\n  .sm\\:text-gray-700{\n    color: hsl(209, 14%, 37%);\n  }\n\n  .sm\\:text-gray-800{\n    color: hsl(209, 18%, 30%);\n  }\n\n  .sm\\:text-gray-900{\n    color: hsl(209, 20%, 25%);\n  }\n\n  .sm\\:text-gray-1000{\n    color: hsl(210, 24%, 16%);\n  }\n\n  .sm\\:text-red-100{\n    color: hsl(360, 100%, 95%);\n  }\n\n  .sm\\:text-red-200{\n    color: hsl(360, 100%, 87%);\n  }\n\n  .sm\\:text-red-300{\n    color: hsl(360, 100%, 80%);\n  }\n\n  .sm\\:text-red-400{\n    color: hsl(360, 91%, 69%);\n  }\n\n  .sm\\:text-red-500{\n    color: hsl(360, 83%, 62%);\n  }\n\n  .sm\\:text-red-600{\n    color: hsl(356, 75%, 53%);\n  }\n\n  .sm\\:text-red-700{\n    color: hsl(354, 85%, 44%);\n  }\n\n  .sm\\:text-red-800{\n    color: hsl(352, 90%, 35%);\n  }\n\n  .sm\\:text-red-900{\n    color: hsl(350, 94%, 28%);\n  }\n\n  .sm\\:text-red-1000{\n    color: hsl(348, 94%, 20%);\n  }\n\n  .sm\\:text-orange-100{\n    color: #fffaf0;\n  }\n\n  .sm\\:text-orange-200{\n    color: #feebc8;\n  }\n\n  .sm\\:text-orange-300{\n    color: #fbd38d;\n  }\n\n  .sm\\:text-orange-400{\n    color: #f6ad55;\n  }\n\n  .sm\\:text-orange-500{\n    color: #ed8936;\n  }\n\n  .sm\\:text-orange-600{\n    color: #dd6b20;\n  }\n\n  .sm\\:text-orange-700{\n    color: #c05621;\n  }\n\n  .sm\\:text-orange-800{\n    color: #9c4221;\n  }\n\n  .sm\\:text-orange-900{\n    color: #7b341e;\n  }\n\n  .sm\\:text-yellow-100{\n    color: hsl(15, 86%, 30%);\n  }\n\n  .sm\\:text-yellow-200{\n    color: hsl(22, 82%, 39%);\n  }\n\n  .sm\\:text-yellow-300{\n    color: hsl(29, 80%, 44%);\n  }\n\n  .sm\\:text-yellow-400{\n    color: hsl(36, 77%, 49%);\n  }\n\n  .sm\\:text-yellow-500{\n    color: hsl(42, 87%, 55%);\n  }\n\n  .sm\\:text-yellow-600{\n    color: hsl(44, 92%, 63%);\n  }\n\n  .sm\\:text-yellow-700{\n    color: hsl(48, 94%, 68%);\n  }\n\n  .sm\\:text-yellow-800{\n    color: hsl(48, 95%, 76%);\n  }\n\n  .sm\\:text-yellow-900{\n    color: hsl(48, 100%, 88%);\n  }\n\n  .sm\\:text-yellow-1000{\n    color: hsl(49, 100%, 96%);\n  }\n\n  .sm\\:text-green-100{\n    color: #f0fff4;\n  }\n\n  .sm\\:text-green-200{\n    color: #c6f6d5;\n  }\n\n  .sm\\:text-green-300{\n    color: #9ae6b4;\n  }\n\n  .sm\\:text-green-400{\n    color: #68d391;\n  }\n\n  .sm\\:text-green-500{\n    color: #48bb78;\n  }\n\n  .sm\\:text-green-600{\n    color: #38a169;\n  }\n\n  .sm\\:text-green-700{\n    color: #2f855a;\n  }\n\n  .sm\\:text-green-800{\n    color: #276749;\n  }\n\n  .sm\\:text-green-900{\n    color: #22543d;\n  }\n\n  .sm\\:text-teal-100{\n    color: hsl(170, 97%, 15%);\n  }\n\n  .sm\\:text-teal-200{\n    color: hsl(168, 80%, 23%);\n  }\n\n  .sm\\:text-teal-300{\n    color: hsl(166, 72%, 28%);\n  }\n\n  .sm\\:text-teal-400{\n    color: hsl(164, 71%, 34%);\n  }\n\n  .sm\\:text-teal-500{\n    color: hsl(162, 63%, 41%);\n  }\n\n  .sm\\:text-teal-600{\n    color: hsl(160, 51%, 49%);\n  }\n\n  .sm\\:text-teal-700{\n    color: hsl(158, 58%, 62%);\n  }\n\n  .sm\\:text-teal-800{\n    color: hsl(156, 73%, 74%);\n  }\n\n  .sm\\:text-teal-900{\n    color: hsl(154, 75%, 87%);\n  }\n\n  .sm\\:text-teal-1000{\n    color: hsl(152, 68%, 96%);\n  }\n\n  .sm\\:text-blue-100{\n    color: hsl(195, 100%, 95%);\n  }\n\n  .sm\\:text-blue-200{\n    color: hsl(195, 100%, 85%);\n  }\n\n  .sm\\:text-blue-300{\n    color: hsl(195, 97%, 75%);\n  }\n\n  .sm\\:text-blue-400{\n    color: hsl(196, 94%, 67%);\n  }\n\n  .sm\\:text-blue-500{\n    color: hsl(197, 92%, 61%);\n  }\n\n  .sm\\:text-blue-600{\n    color: hsl(199, 84%, 55%);\n  }\n\n  .sm\\:text-blue-700{\n    color: hsl(201, 79%, 46%);\n  }\n\n  .sm\\:text-blue-800{\n    color: hsl(202, 83%, 41%);\n  }\n\n  .sm\\:text-blue-900{\n    color: hsl(203, 87%, 34%);\n  }\n\n  .sm\\:text-blue-1000{\n    color: hsl(204, 96%, 27%);\n  }\n\n  .sm\\:text-indigo-100{\n    color: hsl(221, 68%, 93%);\n  }\n\n  .sm\\:text-indigo-200{\n    color: hsl(221, 78%, 86%);\n  }\n\n  .sm\\:text-indigo-300{\n    color: hsl(224, 67%, 76%);\n  }\n\n  .sm\\:text-indigo-400{\n    color: hsl(225, 57%, 67%);\n  }\n\n  .sm\\:text-indigo-500{\n    color: hsl(227, 50%, 59%);\n  }\n\n  .sm\\:text-indigo-600{\n    color: hsl(227, 42%, 51%);\n  }\n\n  .sm\\:text-indigo-700{\n    color: hsl(228, 45%, 45%);\n  }\n\n  .sm\\:text-indigo-800{\n    color: hsl(230, 49%, 41%);\n  }\n\n  .sm\\:text-indigo-900{\n    color: hsl(232, 51%, 36%);\n  }\n\n  .sm\\:text-indigo-1000{\n    color: hsl(234, 62%, 26%);\n  }\n\n  .sm\\:text-purple-100{\n    color: #faf5ff;\n  }\n\n  .sm\\:text-purple-200{\n    color: #e9d8fd;\n  }\n\n  .sm\\:text-purple-300{\n    color: #d6bcfa;\n  }\n\n  .sm\\:text-purple-400{\n    color: #b794f4;\n  }\n\n  .sm\\:text-purple-500{\n    color: #9f7aea;\n  }\n\n  .sm\\:text-purple-600{\n    color: #805ad5;\n  }\n\n  .sm\\:text-purple-700{\n    color: #6b46c1;\n  }\n\n  .sm\\:text-purple-800{\n    color: #553c9a;\n  }\n\n  .sm\\:text-purple-900{\n    color: #44337a;\n  }\n\n  .sm\\:text-pink-100{\n    color: #fff5f7;\n  }\n\n  .sm\\:text-pink-200{\n    color: #fed7e2;\n  }\n\n  .sm\\:text-pink-300{\n    color: #fbb6ce;\n  }\n\n  .sm\\:text-pink-400{\n    color: #f687b3;\n  }\n\n  .sm\\:text-pink-500{\n    color: #ed64a6;\n  }\n\n  .sm\\:text-pink-600{\n    color: #d53f8c;\n  }\n\n  .sm\\:text-pink-700{\n    color: #b83280;\n  }\n\n  .sm\\:text-pink-800{\n    color: #97266d;\n  }\n\n  .sm\\:text-pink-900{\n    color: #702459;\n  }\n\n  .sm\\:hover\\:text-transparent:hover{\n    color: transparent;\n  }\n\n  .sm\\:hover\\:text-black:hover{\n    color: #000;\n  }\n\n  .sm\\:hover\\:text-white:hover{\n    color: #fff;\n  }\n\n  .sm\\:hover\\:text-gray-100:hover{\n    color: hsl(216, 33%, 97%);\n  }\n\n  .sm\\:hover\\:text-gray-200:hover{\n    color: hsl(214, 15%, 91%);\n  }\n\n  .sm\\:hover\\:text-gray-300:hover{\n    color: hsl(210, 16%, 82%);\n  }\n\n  .sm\\:hover\\:text-gray-400:hover{\n    color: hsl(211, 13%, 65%);\n  }\n\n  .sm\\:hover\\:text-gray-500:hover{\n    color: hsl(211, 10%, 53%);\n  }\n\n  .sm\\:hover\\:text-gray-600:hover{\n    color: hsl(211, 12%, 43%);\n  }\n\n  .sm\\:hover\\:text-gray-700:hover{\n    color: hsl(209, 14%, 37%);\n  }\n\n  .sm\\:hover\\:text-gray-800:hover{\n    color: hsl(209, 18%, 30%);\n  }\n\n  .sm\\:hover\\:text-gray-900:hover{\n    color: hsl(209, 20%, 25%);\n  }\n\n  .sm\\:hover\\:text-gray-1000:hover{\n    color: hsl(210, 24%, 16%);\n  }\n\n  .sm\\:hover\\:text-red-100:hover{\n    color: hsl(360, 100%, 95%);\n  }\n\n  .sm\\:hover\\:text-red-200:hover{\n    color: hsl(360, 100%, 87%);\n  }\n\n  .sm\\:hover\\:text-red-300:hover{\n    color: hsl(360, 100%, 80%);\n  }\n\n  .sm\\:hover\\:text-red-400:hover{\n    color: hsl(360, 91%, 69%);\n  }\n\n  .sm\\:hover\\:text-red-500:hover{\n    color: hsl(360, 83%, 62%);\n  }\n\n  .sm\\:hover\\:text-red-600:hover{\n    color: hsl(356, 75%, 53%);\n  }\n\n  .sm\\:hover\\:text-red-700:hover{\n    color: hsl(354, 85%, 44%);\n  }\n\n  .sm\\:hover\\:text-red-800:hover{\n    color: hsl(352, 90%, 35%);\n  }\n\n  .sm\\:hover\\:text-red-900:hover{\n    color: hsl(350, 94%, 28%);\n  }\n\n  .sm\\:hover\\:text-red-1000:hover{\n    color: hsl(348, 94%, 20%);\n  }\n\n  .sm\\:hover\\:text-orange-100:hover{\n    color: #fffaf0;\n  }\n\n  .sm\\:hover\\:text-orange-200:hover{\n    color: #feebc8;\n  }\n\n  .sm\\:hover\\:text-orange-300:hover{\n    color: #fbd38d;\n  }\n\n  .sm\\:hover\\:text-orange-400:hover{\n    color: #f6ad55;\n  }\n\n  .sm\\:hover\\:text-orange-500:hover{\n    color: #ed8936;\n  }\n\n  .sm\\:hover\\:text-orange-600:hover{\n    color: #dd6b20;\n  }\n\n  .sm\\:hover\\:text-orange-700:hover{\n    color: #c05621;\n  }\n\n  .sm\\:hover\\:text-orange-800:hover{\n    color: #9c4221;\n  }\n\n  .sm\\:hover\\:text-orange-900:hover{\n    color: #7b341e;\n  }\n\n  .sm\\:hover\\:text-yellow-100:hover{\n    color: hsl(15, 86%, 30%);\n  }\n\n  .sm\\:hover\\:text-yellow-200:hover{\n    color: hsl(22, 82%, 39%);\n  }\n\n  .sm\\:hover\\:text-yellow-300:hover{\n    color: hsl(29, 80%, 44%);\n  }\n\n  .sm\\:hover\\:text-yellow-400:hover{\n    color: hsl(36, 77%, 49%);\n  }\n\n  .sm\\:hover\\:text-yellow-500:hover{\n    color: hsl(42, 87%, 55%);\n  }\n\n  .sm\\:hover\\:text-yellow-600:hover{\n    color: hsl(44, 92%, 63%);\n  }\n\n  .sm\\:hover\\:text-yellow-700:hover{\n    color: hsl(48, 94%, 68%);\n  }\n\n  .sm\\:hover\\:text-yellow-800:hover{\n    color: hsl(48, 95%, 76%);\n  }\n\n  .sm\\:hover\\:text-yellow-900:hover{\n    color: hsl(48, 100%, 88%);\n  }\n\n  .sm\\:hover\\:text-yellow-1000:hover{\n    color: hsl(49, 100%, 96%);\n  }\n\n  .sm\\:hover\\:text-green-100:hover{\n    color: #f0fff4;\n  }\n\n  .sm\\:hover\\:text-green-200:hover{\n    color: #c6f6d5;\n  }\n\n  .sm\\:hover\\:text-green-300:hover{\n    color: #9ae6b4;\n  }\n\n  .sm\\:hover\\:text-green-400:hover{\n    color: #68d391;\n  }\n\n  .sm\\:hover\\:text-green-500:hover{\n    color: #48bb78;\n  }\n\n  .sm\\:hover\\:text-green-600:hover{\n    color: #38a169;\n  }\n\n  .sm\\:hover\\:text-green-700:hover{\n    color: #2f855a;\n  }\n\n  .sm\\:hover\\:text-green-800:hover{\n    color: #276749;\n  }\n\n  .sm\\:hover\\:text-green-900:hover{\n    color: #22543d;\n  }\n\n  .sm\\:hover\\:text-teal-100:hover{\n    color: hsl(170, 97%, 15%);\n  }\n\n  .sm\\:hover\\:text-teal-200:hover{\n    color: hsl(168, 80%, 23%);\n  }\n\n  .sm\\:hover\\:text-teal-300:hover{\n    color: hsl(166, 72%, 28%);\n  }\n\n  .sm\\:hover\\:text-teal-400:hover{\n    color: hsl(164, 71%, 34%);\n  }\n\n  .sm\\:hover\\:text-teal-500:hover{\n    color: hsl(162, 63%, 41%);\n  }\n\n  .sm\\:hover\\:text-teal-600:hover{\n    color: hsl(160, 51%, 49%);\n  }\n\n  .sm\\:hover\\:text-teal-700:hover{\n    color: hsl(158, 58%, 62%);\n  }\n\n  .sm\\:hover\\:text-teal-800:hover{\n    color: hsl(156, 73%, 74%);\n  }\n\n  .sm\\:hover\\:text-teal-900:hover{\n    color: hsl(154, 75%, 87%);\n  }\n\n  .sm\\:hover\\:text-teal-1000:hover{\n    color: hsl(152, 68%, 96%);\n  }\n\n  .sm\\:hover\\:text-blue-100:hover{\n    color: hsl(195, 100%, 95%);\n  }\n\n  .sm\\:hover\\:text-blue-200:hover{\n    color: hsl(195, 100%, 85%);\n  }\n\n  .sm\\:hover\\:text-blue-300:hover{\n    color: hsl(195, 97%, 75%);\n  }\n\n  .sm\\:hover\\:text-blue-400:hover{\n    color: hsl(196, 94%, 67%);\n  }\n\n  .sm\\:hover\\:text-blue-500:hover{\n    color: hsl(197, 92%, 61%);\n  }\n\n  .sm\\:hover\\:text-blue-600:hover{\n    color: hsl(199, 84%, 55%);\n  }\n\n  .sm\\:hover\\:text-blue-700:hover{\n    color: hsl(201, 79%, 46%);\n  }\n\n  .sm\\:hover\\:text-blue-800:hover{\n    color: hsl(202, 83%, 41%);\n  }\n\n  .sm\\:hover\\:text-blue-900:hover{\n    color: hsl(203, 87%, 34%);\n  }\n\n  .sm\\:hover\\:text-blue-1000:hover{\n    color: hsl(204, 96%, 27%);\n  }\n\n  .sm\\:hover\\:text-indigo-100:hover{\n    color: hsl(221, 68%, 93%);\n  }\n\n  .sm\\:hover\\:text-indigo-200:hover{\n    color: hsl(221, 78%, 86%);\n  }\n\n  .sm\\:hover\\:text-indigo-300:hover{\n    color: hsl(224, 67%, 76%);\n  }\n\n  .sm\\:hover\\:text-indigo-400:hover{\n    color: hsl(225, 57%, 67%);\n  }\n\n  .sm\\:hover\\:text-indigo-500:hover{\n    color: hsl(227, 50%, 59%);\n  }\n\n  .sm\\:hover\\:text-indigo-600:hover{\n    color: hsl(227, 42%, 51%);\n  }\n\n  .sm\\:hover\\:text-indigo-700:hover{\n    color: hsl(228, 45%, 45%);\n  }\n\n  .sm\\:hover\\:text-indigo-800:hover{\n    color: hsl(230, 49%, 41%);\n  }\n\n  .sm\\:hover\\:text-indigo-900:hover{\n    color: hsl(232, 51%, 36%);\n  }\n\n  .sm\\:hover\\:text-indigo-1000:hover{\n    color: hsl(234, 62%, 26%);\n  }\n\n  .sm\\:hover\\:text-purple-100:hover{\n    color: #faf5ff;\n  }\n\n  .sm\\:hover\\:text-purple-200:hover{\n    color: #e9d8fd;\n  }\n\n  .sm\\:hover\\:text-purple-300:hover{\n    color: #d6bcfa;\n  }\n\n  .sm\\:hover\\:text-purple-400:hover{\n    color: #b794f4;\n  }\n\n  .sm\\:hover\\:text-purple-500:hover{\n    color: #9f7aea;\n  }\n\n  .sm\\:hover\\:text-purple-600:hover{\n    color: #805ad5;\n  }\n\n  .sm\\:hover\\:text-purple-700:hover{\n    color: #6b46c1;\n  }\n\n  .sm\\:hover\\:text-purple-800:hover{\n    color: #553c9a;\n  }\n\n  .sm\\:hover\\:text-purple-900:hover{\n    color: #44337a;\n  }\n\n  .sm\\:hover\\:text-pink-100:hover{\n    color: #fff5f7;\n  }\n\n  .sm\\:hover\\:text-pink-200:hover{\n    color: #fed7e2;\n  }\n\n  .sm\\:hover\\:text-pink-300:hover{\n    color: #fbb6ce;\n  }\n\n  .sm\\:hover\\:text-pink-400:hover{\n    color: #f687b3;\n  }\n\n  .sm\\:hover\\:text-pink-500:hover{\n    color: #ed64a6;\n  }\n\n  .sm\\:hover\\:text-pink-600:hover{\n    color: #d53f8c;\n  }\n\n  .sm\\:hover\\:text-pink-700:hover{\n    color: #b83280;\n  }\n\n  .sm\\:hover\\:text-pink-800:hover{\n    color: #97266d;\n  }\n\n  .sm\\:hover\\:text-pink-900:hover{\n    color: #702459;\n  }\n\n  .sm\\:focus\\:text-transparent:focus{\n    color: transparent;\n  }\n\n  .sm\\:focus\\:text-black:focus{\n    color: #000;\n  }\n\n  .sm\\:focus\\:text-white:focus{\n    color: #fff;\n  }\n\n  .sm\\:focus\\:text-gray-100:focus{\n    color: hsl(216, 33%, 97%);\n  }\n\n  .sm\\:focus\\:text-gray-200:focus{\n    color: hsl(214, 15%, 91%);\n  }\n\n  .sm\\:focus\\:text-gray-300:focus{\n    color: hsl(210, 16%, 82%);\n  }\n\n  .sm\\:focus\\:text-gray-400:focus{\n    color: hsl(211, 13%, 65%);\n  }\n\n  .sm\\:focus\\:text-gray-500:focus{\n    color: hsl(211, 10%, 53%);\n  }\n\n  .sm\\:focus\\:text-gray-600:focus{\n    color: hsl(211, 12%, 43%);\n  }\n\n  .sm\\:focus\\:text-gray-700:focus{\n    color: hsl(209, 14%, 37%);\n  }\n\n  .sm\\:focus\\:text-gray-800:focus{\n    color: hsl(209, 18%, 30%);\n  }\n\n  .sm\\:focus\\:text-gray-900:focus{\n    color: hsl(209, 20%, 25%);\n  }\n\n  .sm\\:focus\\:text-gray-1000:focus{\n    color: hsl(210, 24%, 16%);\n  }\n\n  .sm\\:focus\\:text-red-100:focus{\n    color: hsl(360, 100%, 95%);\n  }\n\n  .sm\\:focus\\:text-red-200:focus{\n    color: hsl(360, 100%, 87%);\n  }\n\n  .sm\\:focus\\:text-red-300:focus{\n    color: hsl(360, 100%, 80%);\n  }\n\n  .sm\\:focus\\:text-red-400:focus{\n    color: hsl(360, 91%, 69%);\n  }\n\n  .sm\\:focus\\:text-red-500:focus{\n    color: hsl(360, 83%, 62%);\n  }\n\n  .sm\\:focus\\:text-red-600:focus{\n    color: hsl(356, 75%, 53%);\n  }\n\n  .sm\\:focus\\:text-red-700:focus{\n    color: hsl(354, 85%, 44%);\n  }\n\n  .sm\\:focus\\:text-red-800:focus{\n    color: hsl(352, 90%, 35%);\n  }\n\n  .sm\\:focus\\:text-red-900:focus{\n    color: hsl(350, 94%, 28%);\n  }\n\n  .sm\\:focus\\:text-red-1000:focus{\n    color: hsl(348, 94%, 20%);\n  }\n\n  .sm\\:focus\\:text-orange-100:focus{\n    color: #fffaf0;\n  }\n\n  .sm\\:focus\\:text-orange-200:focus{\n    color: #feebc8;\n  }\n\n  .sm\\:focus\\:text-orange-300:focus{\n    color: #fbd38d;\n  }\n\n  .sm\\:focus\\:text-orange-400:focus{\n    color: #f6ad55;\n  }\n\n  .sm\\:focus\\:text-orange-500:focus{\n    color: #ed8936;\n  }\n\n  .sm\\:focus\\:text-orange-600:focus{\n    color: #dd6b20;\n  }\n\n  .sm\\:focus\\:text-orange-700:focus{\n    color: #c05621;\n  }\n\n  .sm\\:focus\\:text-orange-800:focus{\n    color: #9c4221;\n  }\n\n  .sm\\:focus\\:text-orange-900:focus{\n    color: #7b341e;\n  }\n\n  .sm\\:focus\\:text-yellow-100:focus{\n    color: hsl(15, 86%, 30%);\n  }\n\n  .sm\\:focus\\:text-yellow-200:focus{\n    color: hsl(22, 82%, 39%);\n  }\n\n  .sm\\:focus\\:text-yellow-300:focus{\n    color: hsl(29, 80%, 44%);\n  }\n\n  .sm\\:focus\\:text-yellow-400:focus{\n    color: hsl(36, 77%, 49%);\n  }\n\n  .sm\\:focus\\:text-yellow-500:focus{\n    color: hsl(42, 87%, 55%);\n  }\n\n  .sm\\:focus\\:text-yellow-600:focus{\n    color: hsl(44, 92%, 63%);\n  }\n\n  .sm\\:focus\\:text-yellow-700:focus{\n    color: hsl(48, 94%, 68%);\n  }\n\n  .sm\\:focus\\:text-yellow-800:focus{\n    color: hsl(48, 95%, 76%);\n  }\n\n  .sm\\:focus\\:text-yellow-900:focus{\n    color: hsl(48, 100%, 88%);\n  }\n\n  .sm\\:focus\\:text-yellow-1000:focus{\n    color: hsl(49, 100%, 96%);\n  }\n\n  .sm\\:focus\\:text-green-100:focus{\n    color: #f0fff4;\n  }\n\n  .sm\\:focus\\:text-green-200:focus{\n    color: #c6f6d5;\n  }\n\n  .sm\\:focus\\:text-green-300:focus{\n    color: #9ae6b4;\n  }\n\n  .sm\\:focus\\:text-green-400:focus{\n    color: #68d391;\n  }\n\n  .sm\\:focus\\:text-green-500:focus{\n    color: #48bb78;\n  }\n\n  .sm\\:focus\\:text-green-600:focus{\n    color: #38a169;\n  }\n\n  .sm\\:focus\\:text-green-700:focus{\n    color: #2f855a;\n  }\n\n  .sm\\:focus\\:text-green-800:focus{\n    color: #276749;\n  }\n\n  .sm\\:focus\\:text-green-900:focus{\n    color: #22543d;\n  }\n\n  .sm\\:focus\\:text-teal-100:focus{\n    color: hsl(170, 97%, 15%);\n  }\n\n  .sm\\:focus\\:text-teal-200:focus{\n    color: hsl(168, 80%, 23%);\n  }\n\n  .sm\\:focus\\:text-teal-300:focus{\n    color: hsl(166, 72%, 28%);\n  }\n\n  .sm\\:focus\\:text-teal-400:focus{\n    color: hsl(164, 71%, 34%);\n  }\n\n  .sm\\:focus\\:text-teal-500:focus{\n    color: hsl(162, 63%, 41%);\n  }\n\n  .sm\\:focus\\:text-teal-600:focus{\n    color: hsl(160, 51%, 49%);\n  }\n\n  .sm\\:focus\\:text-teal-700:focus{\n    color: hsl(158, 58%, 62%);\n  }\n\n  .sm\\:focus\\:text-teal-800:focus{\n    color: hsl(156, 73%, 74%);\n  }\n\n  .sm\\:focus\\:text-teal-900:focus{\n    color: hsl(154, 75%, 87%);\n  }\n\n  .sm\\:focus\\:text-teal-1000:focus{\n    color: hsl(152, 68%, 96%);\n  }\n\n  .sm\\:focus\\:text-blue-100:focus{\n    color: hsl(195, 100%, 95%);\n  }\n\n  .sm\\:focus\\:text-blue-200:focus{\n    color: hsl(195, 100%, 85%);\n  }\n\n  .sm\\:focus\\:text-blue-300:focus{\n    color: hsl(195, 97%, 75%);\n  }\n\n  .sm\\:focus\\:text-blue-400:focus{\n    color: hsl(196, 94%, 67%);\n  }\n\n  .sm\\:focus\\:text-blue-500:focus{\n    color: hsl(197, 92%, 61%);\n  }\n\n  .sm\\:focus\\:text-blue-600:focus{\n    color: hsl(199, 84%, 55%);\n  }\n\n  .sm\\:focus\\:text-blue-700:focus{\n    color: hsl(201, 79%, 46%);\n  }\n\n  .sm\\:focus\\:text-blue-800:focus{\n    color: hsl(202, 83%, 41%);\n  }\n\n  .sm\\:focus\\:text-blue-900:focus{\n    color: hsl(203, 87%, 34%);\n  }\n\n  .sm\\:focus\\:text-blue-1000:focus{\n    color: hsl(204, 96%, 27%);\n  }\n\n  .sm\\:focus\\:text-indigo-100:focus{\n    color: hsl(221, 68%, 93%);\n  }\n\n  .sm\\:focus\\:text-indigo-200:focus{\n    color: hsl(221, 78%, 86%);\n  }\n\n  .sm\\:focus\\:text-indigo-300:focus{\n    color: hsl(224, 67%, 76%);\n  }\n\n  .sm\\:focus\\:text-indigo-400:focus{\n    color: hsl(225, 57%, 67%);\n  }\n\n  .sm\\:focus\\:text-indigo-500:focus{\n    color: hsl(227, 50%, 59%);\n  }\n\n  .sm\\:focus\\:text-indigo-600:focus{\n    color: hsl(227, 42%, 51%);\n  }\n\n  .sm\\:focus\\:text-indigo-700:focus{\n    color: hsl(228, 45%, 45%);\n  }\n\n  .sm\\:focus\\:text-indigo-800:focus{\n    color: hsl(230, 49%, 41%);\n  }\n\n  .sm\\:focus\\:text-indigo-900:focus{\n    color: hsl(232, 51%, 36%);\n  }\n\n  .sm\\:focus\\:text-indigo-1000:focus{\n    color: hsl(234, 62%, 26%);\n  }\n\n  .sm\\:focus\\:text-purple-100:focus{\n    color: #faf5ff;\n  }\n\n  .sm\\:focus\\:text-purple-200:focus{\n    color: #e9d8fd;\n  }\n\n  .sm\\:focus\\:text-purple-300:focus{\n    color: #d6bcfa;\n  }\n\n  .sm\\:focus\\:text-purple-400:focus{\n    color: #b794f4;\n  }\n\n  .sm\\:focus\\:text-purple-500:focus{\n    color: #9f7aea;\n  }\n\n  .sm\\:focus\\:text-purple-600:focus{\n    color: #805ad5;\n  }\n\n  .sm\\:focus\\:text-purple-700:focus{\n    color: #6b46c1;\n  }\n\n  .sm\\:focus\\:text-purple-800:focus{\n    color: #553c9a;\n  }\n\n  .sm\\:focus\\:text-purple-900:focus{\n    color: #44337a;\n  }\n\n  .sm\\:focus\\:text-pink-100:focus{\n    color: #fff5f7;\n  }\n\n  .sm\\:focus\\:text-pink-200:focus{\n    color: #fed7e2;\n  }\n\n  .sm\\:focus\\:text-pink-300:focus{\n    color: #fbb6ce;\n  }\n\n  .sm\\:focus\\:text-pink-400:focus{\n    color: #f687b3;\n  }\n\n  .sm\\:focus\\:text-pink-500:focus{\n    color: #ed64a6;\n  }\n\n  .sm\\:focus\\:text-pink-600:focus{\n    color: #d53f8c;\n  }\n\n  .sm\\:focus\\:text-pink-700:focus{\n    color: #b83280;\n  }\n\n  .sm\\:focus\\:text-pink-800:focus{\n    color: #97266d;\n  }\n\n  .sm\\:focus\\:text-pink-900:focus{\n    color: #702459;\n  }\n\n  .sm\\:text-xs{\n    font-size: 0.75rem;\n  }\n\n  .sm\\:text-sm{\n    font-size: 0.875rem;\n  }\n\n  .sm\\:text-base{\n    font-size: 1rem;\n  }\n\n  .sm\\:text-lg{\n    font-size: 1.125rem;\n  }\n\n  .sm\\:text-xl{\n    font-size: 1.25rem;\n  }\n\n  .sm\\:text-2xl{\n    font-size: 1.5rem;\n  }\n\n  .sm\\:text-3xl{\n    font-size: 1.875rem;\n  }\n\n  .sm\\:text-4xl{\n    font-size: 2.25rem;\n  }\n\n  .sm\\:text-5xl{\n    font-size: 3rem;\n  }\n\n  .sm\\:text-6xl{\n    font-size: 4rem;\n  }\n\n  .sm\\:italic{\n    font-style: italic;\n  }\n\n  .sm\\:not-italic{\n    font-style: normal;\n  }\n\n  .sm\\:uppercase{\n    text-transform: uppercase;\n  }\n\n  .sm\\:lowercase{\n    text-transform: lowercase;\n  }\n\n  .sm\\:capitalize{\n    text-transform: capitalize;\n  }\n\n  .sm\\:normal-case{\n    text-transform: none;\n  }\n\n  .sm\\:underline{\n    text-decoration: underline;\n  }\n\n  .sm\\:line-through{\n    text-decoration: line-through;\n  }\n\n  .sm\\:no-underline{\n    text-decoration: none;\n  }\n\n  .sm\\:hover\\:underline:hover{\n    text-decoration: underline;\n  }\n\n  .sm\\:hover\\:line-through:hover{\n    text-decoration: line-through;\n  }\n\n  .sm\\:hover\\:no-underline:hover{\n    text-decoration: none;\n  }\n\n  .sm\\:focus\\:underline:focus{\n    text-decoration: underline;\n  }\n\n  .sm\\:focus\\:line-through:focus{\n    text-decoration: line-through;\n  }\n\n  .sm\\:focus\\:no-underline:focus{\n    text-decoration: none;\n  }\n\n  .sm\\:antialiased{\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .sm\\:subpixel-antialiased{\n    -webkit-font-smoothing: auto;\n    -moz-osx-font-smoothing: auto;\n  }\n\n  .sm\\:tracking-tighter{\n    letter-spacing: -0.05em;\n  }\n\n  .sm\\:tracking-tight{\n    letter-spacing: -0.025em;\n  }\n\n  .sm\\:tracking-normal{\n    letter-spacing: 0;\n  }\n\n  .sm\\:tracking-wide{\n    letter-spacing: 0.025em;\n  }\n\n  .sm\\:tracking-wider{\n    letter-spacing: 0.05em;\n  }\n\n  .sm\\:tracking-widest{\n    letter-spacing: 0.1em;\n  }\n\n  .sm\\:select-none{\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n\n  .sm\\:select-text{\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text;\n  }\n\n  .sm\\:select-all{\n    -webkit-user-select: all;\n       -moz-user-select: all;\n        -ms-user-select: all;\n            user-select: all;\n  }\n\n  .sm\\:select-auto{\n    -webkit-user-select: auto;\n       -moz-user-select: auto;\n        -ms-user-select: auto;\n            user-select: auto;\n  }\n\n  .sm\\:align-baseline{\n    vertical-align: baseline;\n  }\n\n  .sm\\:align-top{\n    vertical-align: top;\n  }\n\n  .sm\\:align-middle{\n    vertical-align: middle;\n  }\n\n  .sm\\:align-bottom{\n    vertical-align: bottom;\n  }\n\n  .sm\\:align-text-top{\n    vertical-align: text-top;\n  }\n\n  .sm\\:align-text-bottom{\n    vertical-align: text-bottom;\n  }\n\n  .sm\\:visible{\n    visibility: visible;\n  }\n\n  .sm\\:invisible{\n    visibility: hidden;\n  }\n\n  .sm\\:whitespace-normal{\n    white-space: normal;\n  }\n\n  .sm\\:whitespace-no-wrap{\n    white-space: nowrap;\n  }\n\n  .sm\\:whitespace-pre{\n    white-space: pre;\n  }\n\n  .sm\\:whitespace-pre-line{\n    white-space: pre-line;\n  }\n\n  .sm\\:whitespace-pre-wrap{\n    white-space: pre-wrap;\n  }\n\n  .sm\\:break-normal{\n    overflow-wrap: normal;\n    word-break: normal;\n  }\n\n  .sm\\:break-words{\n    overflow-wrap: break-word;\n  }\n\n  .sm\\:break-all{\n    word-break: break-all;\n  }\n\n  .sm\\:truncate{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .sm\\:w-0{\n    width: 0;\n  }\n\n  .sm\\:w-1{\n    width: 0.25rem;\n  }\n\n  .sm\\:w-2{\n    width: 0.5rem;\n  }\n\n  .sm\\:w-3{\n    width: 0.75rem;\n  }\n\n  .sm\\:w-4{\n    width: 1rem;\n  }\n\n  .sm\\:w-5{\n    width: 1.25rem;\n  }\n\n  .sm\\:w-6{\n    width: 1.5rem;\n  }\n\n  .sm\\:w-8{\n    width: 2rem;\n  }\n\n  .sm\\:w-10{\n    width: 2.5rem;\n  }\n\n  .sm\\:w-12{\n    width: 3rem;\n  }\n\n  .sm\\:w-16{\n    width: 4rem;\n  }\n\n  .sm\\:w-20{\n    width: 5rem;\n  }\n\n  .sm\\:w-24{\n    width: 6rem;\n  }\n\n  .sm\\:w-32{\n    width: 8rem;\n  }\n\n  .sm\\:w-40{\n    width: 10rem;\n  }\n\n  .sm\\:w-48{\n    width: 12rem;\n  }\n\n  .sm\\:w-56{\n    width: 14rem;\n  }\n\n  .sm\\:w-64{\n    width: 16rem;\n  }\n\n  .sm\\:w-auto{\n    width: auto;\n  }\n\n  .sm\\:w-px{\n    width: 1px;\n  }\n\n  .sm\\:w-1\\/2{\n    width: 50%;\n  }\n\n  .sm\\:w-1\\/3{\n    width: 33.333333%;\n  }\n\n  .sm\\:w-2\\/3{\n    width: 66.666667%;\n  }\n\n  .sm\\:w-1\\/4{\n    width: 25%;\n  }\n\n  .sm\\:w-2\\/4{\n    width: 50%;\n  }\n\n  .sm\\:w-3\\/4{\n    width: 75%;\n  }\n\n  .sm\\:w-1\\/5{\n    width: 20%;\n  }\n\n  .sm\\:w-2\\/5{\n    width: 40%;\n  }\n\n  .sm\\:w-3\\/5{\n    width: 60%;\n  }\n\n  .sm\\:w-4\\/5{\n    width: 80%;\n  }\n\n  .sm\\:w-1\\/6{\n    width: 16.666667%;\n  }\n\n  .sm\\:w-2\\/6{\n    width: 33.333333%;\n  }\n\n  .sm\\:w-3\\/6{\n    width: 50%;\n  }\n\n  .sm\\:w-4\\/6{\n    width: 66.666667%;\n  }\n\n  .sm\\:w-5\\/6{\n    width: 83.333333%;\n  }\n\n  .sm\\:w-1\\/12{\n    width: 8.333333%;\n  }\n\n  .sm\\:w-2\\/12{\n    width: 16.666667%;\n  }\n\n  .sm\\:w-3\\/12{\n    width: 25%;\n  }\n\n  .sm\\:w-4\\/12{\n    width: 33.333333%;\n  }\n\n  .sm\\:w-5\\/12{\n    width: 41.666667%;\n  }\n\n  .sm\\:w-6\\/12{\n    width: 50%;\n  }\n\n  .sm\\:w-7\\/12{\n    width: 58.333333%;\n  }\n\n  .sm\\:w-8\\/12{\n    width: 66.666667%;\n  }\n\n  .sm\\:w-9\\/12{\n    width: 75%;\n  }\n\n  .sm\\:w-10\\/12{\n    width: 83.333333%;\n  }\n\n  .sm\\:w-11\\/12{\n    width: 91.666667%;\n  }\n\n  .sm\\:w-full{\n    width: 100%;\n  }\n\n  .sm\\:w-screen{\n    width: 100vw;\n  }\n\n  .sm\\:z-0{\n    z-index: 0;\n  }\n\n  .sm\\:z-10{\n    z-index: 10;\n  }\n\n  .sm\\:z-20{\n    z-index: 20;\n  }\n\n  .sm\\:z-30{\n    z-index: 30;\n  }\n\n  .sm\\:z-40{\n    z-index: 40;\n  }\n\n  .sm\\:z-50{\n    z-index: 50;\n  }\n\n  .sm\\:z-auto{\n    z-index: auto;\n  }\n}\n\n@media (min-width: 768px){\n  .md\\:appearance-none{\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n  }\n\n  .md\\:bg-fixed{\n    background-attachment: fixed;\n  }\n\n  .md\\:bg-local{\n    background-attachment: local;\n  }\n\n  .md\\:bg-scroll{\n    background-attachment: scroll;\n  }\n\n  .md\\:bg-transparent{\n    background-color: transparent;\n  }\n\n  .md\\:bg-black{\n    background-color: #000;\n  }\n\n  .md\\:bg-white{\n    background-color: #fff;\n  }\n\n  .md\\:bg-gray-100{\n    background-color: hsl(216, 33%, 97%);\n  }\n\n  .md\\:bg-gray-200{\n    background-color: hsl(214, 15%, 91%);\n  }\n\n  .md\\:bg-gray-300{\n    background-color: hsl(210, 16%, 82%);\n  }\n\n  .md\\:bg-gray-400{\n    background-color: hsl(211, 13%, 65%);\n  }\n\n  .md\\:bg-gray-500{\n    background-color: hsl(211, 10%, 53%);\n  }\n\n  .md\\:bg-gray-600{\n    background-color: hsl(211, 12%, 43%);\n  }\n\n  .md\\:bg-gray-700{\n    background-color: hsl(209, 14%, 37%);\n  }\n\n  .md\\:bg-gray-800{\n    background-color: hsl(209, 18%, 30%);\n  }\n\n  .md\\:bg-gray-900{\n    background-color: hsl(209, 20%, 25%);\n  }\n\n  .md\\:bg-gray-1000{\n    background-color: hsl(210, 24%, 16%);\n  }\n\n  .md\\:bg-red-100{\n    background-color: hsl(360, 100%, 95%);\n  }\n\n  .md\\:bg-red-200{\n    background-color: hsl(360, 100%, 87%);\n  }\n\n  .md\\:bg-red-300{\n    background-color: hsl(360, 100%, 80%);\n  }\n\n  .md\\:bg-red-400{\n    background-color: hsl(360, 91%, 69%);\n  }\n\n  .md\\:bg-red-500{\n    background-color: hsl(360, 83%, 62%);\n  }\n\n  .md\\:bg-red-600{\n    background-color: hsl(356, 75%, 53%);\n  }\n\n  .md\\:bg-red-700{\n    background-color: hsl(354, 85%, 44%);\n  }\n\n  .md\\:bg-red-800{\n    background-color: hsl(352, 90%, 35%);\n  }\n\n  .md\\:bg-red-900{\n    background-color: hsl(350, 94%, 28%);\n  }\n\n  .md\\:bg-red-1000{\n    background-color: hsl(348, 94%, 20%);\n  }\n\n  .md\\:bg-orange-100{\n    background-color: #fffaf0;\n  }\n\n  .md\\:bg-orange-200{\n    background-color: #feebc8;\n  }\n\n  .md\\:bg-orange-300{\n    background-color: #fbd38d;\n  }\n\n  .md\\:bg-orange-400{\n    background-color: #f6ad55;\n  }\n\n  .md\\:bg-orange-500{\n    background-color: #ed8936;\n  }\n\n  .md\\:bg-orange-600{\n    background-color: #dd6b20;\n  }\n\n  .md\\:bg-orange-700{\n    background-color: #c05621;\n  }\n\n  .md\\:bg-orange-800{\n    background-color: #9c4221;\n  }\n\n  .md\\:bg-orange-900{\n    background-color: #7b341e;\n  }\n\n  .md\\:bg-yellow-100{\n    background-color: hsl(15, 86%, 30%);\n  }\n\n  .md\\:bg-yellow-200{\n    background-color: hsl(22, 82%, 39%);\n  }\n\n  .md\\:bg-yellow-300{\n    background-color: hsl(29, 80%, 44%);\n  }\n\n  .md\\:bg-yellow-400{\n    background-color: hsl(36, 77%, 49%);\n  }\n\n  .md\\:bg-yellow-500{\n    background-color: hsl(42, 87%, 55%);\n  }\n\n  .md\\:bg-yellow-600{\n    background-color: hsl(44, 92%, 63%);\n  }\n\n  .md\\:bg-yellow-700{\n    background-color: hsl(48, 94%, 68%);\n  }\n\n  .md\\:bg-yellow-800{\n    background-color: hsl(48, 95%, 76%);\n  }\n\n  .md\\:bg-yellow-900{\n    background-color: hsl(48, 100%, 88%);\n  }\n\n  .md\\:bg-yellow-1000{\n    background-color: hsl(49, 100%, 96%);\n  }\n\n  .md\\:bg-green-100{\n    background-color: #f0fff4;\n  }\n\n  .md\\:bg-green-200{\n    background-color: #c6f6d5;\n  }\n\n  .md\\:bg-green-300{\n    background-color: #9ae6b4;\n  }\n\n  .md\\:bg-green-400{\n    background-color: #68d391;\n  }\n\n  .md\\:bg-green-500{\n    background-color: #48bb78;\n  }\n\n  .md\\:bg-green-600{\n    background-color: #38a169;\n  }\n\n  .md\\:bg-green-700{\n    background-color: #2f855a;\n  }\n\n  .md\\:bg-green-800{\n    background-color: #276749;\n  }\n\n  .md\\:bg-green-900{\n    background-color: #22543d;\n  }\n\n  .md\\:bg-teal-100{\n    background-color: hsl(170, 97%, 15%);\n  }\n\n  .md\\:bg-teal-200{\n    background-color: hsl(168, 80%, 23%);\n  }\n\n  .md\\:bg-teal-300{\n    background-color: hsl(166, 72%, 28%);\n  }\n\n  .md\\:bg-teal-400{\n    background-color: hsl(164, 71%, 34%);\n  }\n\n  .md\\:bg-teal-500{\n    background-color: hsl(162, 63%, 41%);\n  }\n\n  .md\\:bg-teal-600{\n    background-color: hsl(160, 51%, 49%);\n  }\n\n  .md\\:bg-teal-700{\n    background-color: hsl(158, 58%, 62%);\n  }\n\n  .md\\:bg-teal-800{\n    background-color: hsl(156, 73%, 74%);\n  }\n\n  .md\\:bg-teal-900{\n    background-color: hsl(154, 75%, 87%);\n  }\n\n  .md\\:bg-teal-1000{\n    background-color: hsl(152, 68%, 96%);\n  }\n\n  .md\\:bg-blue-100{\n    background-color: hsl(195, 100%, 95%);\n  }\n\n  .md\\:bg-blue-200{\n    background-color: hsl(195, 100%, 85%);\n  }\n\n  .md\\:bg-blue-300{\n    background-color: hsl(195, 97%, 75%);\n  }\n\n  .md\\:bg-blue-400{\n    background-color: hsl(196, 94%, 67%);\n  }\n\n  .md\\:bg-blue-500{\n    background-color: hsl(197, 92%, 61%);\n  }\n\n  .md\\:bg-blue-600{\n    background-color: hsl(199, 84%, 55%);\n  }\n\n  .md\\:bg-blue-700{\n    background-color: hsl(201, 79%, 46%);\n  }\n\n  .md\\:bg-blue-800{\n    background-color: hsl(202, 83%, 41%);\n  }\n\n  .md\\:bg-blue-900{\n    background-color: hsl(203, 87%, 34%);\n  }\n\n  .md\\:bg-blue-1000{\n    background-color: hsl(204, 96%, 27%);\n  }\n\n  .md\\:bg-indigo-100{\n    background-color: hsl(221, 68%, 93%);\n  }\n\n  .md\\:bg-indigo-200{\n    background-color: hsl(221, 78%, 86%);\n  }\n\n  .md\\:bg-indigo-300{\n    background-color: hsl(224, 67%, 76%);\n  }\n\n  .md\\:bg-indigo-400{\n    background-color: hsl(225, 57%, 67%);\n  }\n\n  .md\\:bg-indigo-500{\n    background-color: hsl(227, 50%, 59%);\n  }\n\n  .md\\:bg-indigo-600{\n    background-color: hsl(227, 42%, 51%);\n  }\n\n  .md\\:bg-indigo-700{\n    background-color: hsl(228, 45%, 45%);\n  }\n\n  .md\\:bg-indigo-800{\n    background-color: hsl(230, 49%, 41%);\n  }\n\n  .md\\:bg-indigo-900{\n    background-color: hsl(232, 51%, 36%);\n  }\n\n  .md\\:bg-indigo-1000{\n    background-color: hsl(234, 62%, 26%);\n  }\n\n  .md\\:bg-purple-100{\n    background-color: #faf5ff;\n  }\n\n  .md\\:bg-purple-200{\n    background-color: #e9d8fd;\n  }\n\n  .md\\:bg-purple-300{\n    background-color: #d6bcfa;\n  }\n\n  .md\\:bg-purple-400{\n    background-color: #b794f4;\n  }\n\n  .md\\:bg-purple-500{\n    background-color: #9f7aea;\n  }\n\n  .md\\:bg-purple-600{\n    background-color: #805ad5;\n  }\n\n  .md\\:bg-purple-700{\n    background-color: #6b46c1;\n  }\n\n  .md\\:bg-purple-800{\n    background-color: #553c9a;\n  }\n\n  .md\\:bg-purple-900{\n    background-color: #44337a;\n  }\n\n  .md\\:bg-pink-100{\n    background-color: #fff5f7;\n  }\n\n  .md\\:bg-pink-200{\n    background-color: #fed7e2;\n  }\n\n  .md\\:bg-pink-300{\n    background-color: #fbb6ce;\n  }\n\n  .md\\:bg-pink-400{\n    background-color: #f687b3;\n  }\n\n  .md\\:bg-pink-500{\n    background-color: #ed64a6;\n  }\n\n  .md\\:bg-pink-600{\n    background-color: #d53f8c;\n  }\n\n  .md\\:bg-pink-700{\n    background-color: #b83280;\n  }\n\n  .md\\:bg-pink-800{\n    background-color: #97266d;\n  }\n\n  .md\\:bg-pink-900{\n    background-color: #702459;\n  }\n\n  .md\\:hover\\:bg-transparent:hover{\n    background-color: transparent;\n  }\n\n  .md\\:hover\\:bg-black:hover{\n    background-color: #000;\n  }\n\n  .md\\:hover\\:bg-white:hover{\n    background-color: #fff;\n  }\n\n  .md\\:hover\\:bg-gray-100:hover{\n    background-color: hsl(216, 33%, 97%);\n  }\n\n  .md\\:hover\\:bg-gray-200:hover{\n    background-color: hsl(214, 15%, 91%);\n  }\n\n  .md\\:hover\\:bg-gray-300:hover{\n    background-color: hsl(210, 16%, 82%);\n  }\n\n  .md\\:hover\\:bg-gray-400:hover{\n    background-color: hsl(211, 13%, 65%);\n  }\n\n  .md\\:hover\\:bg-gray-500:hover{\n    background-color: hsl(211, 10%, 53%);\n  }\n\n  .md\\:hover\\:bg-gray-600:hover{\n    background-color: hsl(211, 12%, 43%);\n  }\n\n  .md\\:hover\\:bg-gray-700:hover{\n    background-color: hsl(209, 14%, 37%);\n  }\n\n  .md\\:hover\\:bg-gray-800:hover{\n    background-color: hsl(209, 18%, 30%);\n  }\n\n  .md\\:hover\\:bg-gray-900:hover{\n    background-color: hsl(209, 20%, 25%);\n  }\n\n  .md\\:hover\\:bg-gray-1000:hover{\n    background-color: hsl(210, 24%, 16%);\n  }\n\n  .md\\:hover\\:bg-red-100:hover{\n    background-color: hsl(360, 100%, 95%);\n  }\n\n  .md\\:hover\\:bg-red-200:hover{\n    background-color: hsl(360, 100%, 87%);\n  }\n\n  .md\\:hover\\:bg-red-300:hover{\n    background-color: hsl(360, 100%, 80%);\n  }\n\n  .md\\:hover\\:bg-red-400:hover{\n    background-color: hsl(360, 91%, 69%);\n  }\n\n  .md\\:hover\\:bg-red-500:hover{\n    background-color: hsl(360, 83%, 62%);\n  }\n\n  .md\\:hover\\:bg-red-600:hover{\n    background-color: hsl(356, 75%, 53%);\n  }\n\n  .md\\:hover\\:bg-red-700:hover{\n    background-color: hsl(354, 85%, 44%);\n  }\n\n  .md\\:hover\\:bg-red-800:hover{\n    background-color: hsl(352, 90%, 35%);\n  }\n\n  .md\\:hover\\:bg-red-900:hover{\n    background-color: hsl(350, 94%, 28%);\n  }\n\n  .md\\:hover\\:bg-red-1000:hover{\n    background-color: hsl(348, 94%, 20%);\n  }\n\n  .md\\:hover\\:bg-orange-100:hover{\n    background-color: #fffaf0;\n  }\n\n  .md\\:hover\\:bg-orange-200:hover{\n    background-color: #feebc8;\n  }\n\n  .md\\:hover\\:bg-orange-300:hover{\n    background-color: #fbd38d;\n  }\n\n  .md\\:hover\\:bg-orange-400:hover{\n    background-color: #f6ad55;\n  }\n\n  .md\\:hover\\:bg-orange-500:hover{\n    background-color: #ed8936;\n  }\n\n  .md\\:hover\\:bg-orange-600:hover{\n    background-color: #dd6b20;\n  }\n\n  .md\\:hover\\:bg-orange-700:hover{\n    background-color: #c05621;\n  }\n\n  .md\\:hover\\:bg-orange-800:hover{\n    background-color: #9c4221;\n  }\n\n  .md\\:hover\\:bg-orange-900:hover{\n    background-color: #7b341e;\n  }\n\n  .md\\:hover\\:bg-yellow-100:hover{\n    background-color: hsl(15, 86%, 30%);\n  }\n\n  .md\\:hover\\:bg-yellow-200:hover{\n    background-color: hsl(22, 82%, 39%);\n  }\n\n  .md\\:hover\\:bg-yellow-300:hover{\n    background-color: hsl(29, 80%, 44%);\n  }\n\n  .md\\:hover\\:bg-yellow-400:hover{\n    background-color: hsl(36, 77%, 49%);\n  }\n\n  .md\\:hover\\:bg-yellow-500:hover{\n    background-color: hsl(42, 87%, 55%);\n  }\n\n  .md\\:hover\\:bg-yellow-600:hover{\n    background-color: hsl(44, 92%, 63%);\n  }\n\n  .md\\:hover\\:bg-yellow-700:hover{\n    background-color: hsl(48, 94%, 68%);\n  }\n\n  .md\\:hover\\:bg-yellow-800:hover{\n    background-color: hsl(48, 95%, 76%);\n  }\n\n  .md\\:hover\\:bg-yellow-900:hover{\n    background-color: hsl(48, 100%, 88%);\n  }\n\n  .md\\:hover\\:bg-yellow-1000:hover{\n    background-color: hsl(49, 100%, 96%);\n  }\n\n  .md\\:hover\\:bg-green-100:hover{\n    background-color: #f0fff4;\n  }\n\n  .md\\:hover\\:bg-green-200:hover{\n    background-color: #c6f6d5;\n  }\n\n  .md\\:hover\\:bg-green-300:hover{\n    background-color: #9ae6b4;\n  }\n\n  .md\\:hover\\:bg-green-400:hover{\n    background-color: #68d391;\n  }\n\n  .md\\:hover\\:bg-green-500:hover{\n    background-color: #48bb78;\n  }\n\n  .md\\:hover\\:bg-green-600:hover{\n    background-color: #38a169;\n  }\n\n  .md\\:hover\\:bg-green-700:hover{\n    background-color: #2f855a;\n  }\n\n  .md\\:hover\\:bg-green-800:hover{\n    background-color: #276749;\n  }\n\n  .md\\:hover\\:bg-green-900:hover{\n    background-color: #22543d;\n  }\n\n  .md\\:hover\\:bg-teal-100:hover{\n    background-color: hsl(170, 97%, 15%);\n  }\n\n  .md\\:hover\\:bg-teal-200:hover{\n    background-color: hsl(168, 80%, 23%);\n  }\n\n  .md\\:hover\\:bg-teal-300:hover{\n    background-color: hsl(166, 72%, 28%);\n  }\n\n  .md\\:hover\\:bg-teal-400:hover{\n    background-color: hsl(164, 71%, 34%);\n  }\n\n  .md\\:hover\\:bg-teal-500:hover{\n    background-color: hsl(162, 63%, 41%);\n  }\n\n  .md\\:hover\\:bg-teal-600:hover{\n    background-color: hsl(160, 51%, 49%);\n  }\n\n  .md\\:hover\\:bg-teal-700:hover{\n    background-color: hsl(158, 58%, 62%);\n  }\n\n  .md\\:hover\\:bg-teal-800:hover{\n    background-color: hsl(156, 73%, 74%);\n  }\n\n  .md\\:hover\\:bg-teal-900:hover{\n    background-color: hsl(154, 75%, 87%);\n  }\n\n  .md\\:hover\\:bg-teal-1000:hover{\n    background-color: hsl(152, 68%, 96%);\n  }\n\n  .md\\:hover\\:bg-blue-100:hover{\n    background-color: hsl(195, 100%, 95%);\n  }\n\n  .md\\:hover\\:bg-blue-200:hover{\n    background-color: hsl(195, 100%, 85%);\n  }\n\n  .md\\:hover\\:bg-blue-300:hover{\n    background-color: hsl(195, 97%, 75%);\n  }\n\n  .md\\:hover\\:bg-blue-400:hover{\n    background-color: hsl(196, 94%, 67%);\n  }\n\n  .md\\:hover\\:bg-blue-500:hover{\n    background-color: hsl(197, 92%, 61%);\n  }\n\n  .md\\:hover\\:bg-blue-600:hover{\n    background-color: hsl(199, 84%, 55%);\n  }\n\n  .md\\:hover\\:bg-blue-700:hover{\n    background-color: hsl(201, 79%, 46%);\n  }\n\n  .md\\:hover\\:bg-blue-800:hover{\n    background-color: hsl(202, 83%, 41%);\n  }\n\n  .md\\:hover\\:bg-blue-900:hover{\n    background-color: hsl(203, 87%, 34%);\n  }\n\n  .md\\:hover\\:bg-blue-1000:hover{\n    background-color: hsl(204, 96%, 27%);\n  }\n\n  .md\\:hover\\:bg-indigo-100:hover{\n    background-color: hsl(221, 68%, 93%);\n  }\n\n  .md\\:hover\\:bg-indigo-200:hover{\n    background-color: hsl(221, 78%, 86%);\n  }\n\n  .md\\:hover\\:bg-indigo-300:hover{\n    background-color: hsl(224, 67%, 76%);\n  }\n\n  .md\\:hover\\:bg-indigo-400:hover{\n    background-color: hsl(225, 57%, 67%);\n  }\n\n  .md\\:hover\\:bg-indigo-500:hover{\n    background-color: hsl(227, 50%, 59%);\n  }\n\n  .md\\:hover\\:bg-indigo-600:hover{\n    background-color: hsl(227, 42%, 51%);\n  }\n\n  .md\\:hover\\:bg-indigo-700:hover{\n    background-color: hsl(228, 45%, 45%);\n  }\n\n  .md\\:hover\\:bg-indigo-800:hover{\n    background-color: hsl(230, 49%, 41%);\n  }\n\n  .md\\:hover\\:bg-indigo-900:hover{\n    background-color: hsl(232, 51%, 36%);\n  }\n\n  .md\\:hover\\:bg-indigo-1000:hover{\n    background-color: hsl(234, 62%, 26%);\n  }\n\n  .md\\:hover\\:bg-purple-100:hover{\n    background-color: #faf5ff;\n  }\n\n  .md\\:hover\\:bg-purple-200:hover{\n    background-color: #e9d8fd;\n  }\n\n  .md\\:hover\\:bg-purple-300:hover{\n    background-color: #d6bcfa;\n  }\n\n  .md\\:hover\\:bg-purple-400:hover{\n    background-color: #b794f4;\n  }\n\n  .md\\:hover\\:bg-purple-500:hover{\n    background-color: #9f7aea;\n  }\n\n  .md\\:hover\\:bg-purple-600:hover{\n    background-color: #805ad5;\n  }\n\n  .md\\:hover\\:bg-purple-700:hover{\n    background-color: #6b46c1;\n  }\n\n  .md\\:hover\\:bg-purple-800:hover{\n    background-color: #553c9a;\n  }\n\n  .md\\:hover\\:bg-purple-900:hover{\n    background-color: #44337a;\n  }\n\n  .md\\:hover\\:bg-pink-100:hover{\n    background-color: #fff5f7;\n  }\n\n  .md\\:hover\\:bg-pink-200:hover{\n    background-color: #fed7e2;\n  }\n\n  .md\\:hover\\:bg-pink-300:hover{\n    background-color: #fbb6ce;\n  }\n\n  .md\\:hover\\:bg-pink-400:hover{\n    background-color: #f687b3;\n  }\n\n  .md\\:hover\\:bg-pink-500:hover{\n    background-color: #ed64a6;\n  }\n\n  .md\\:hover\\:bg-pink-600:hover{\n    background-color: #d53f8c;\n  }\n\n  .md\\:hover\\:bg-pink-700:hover{\n    background-color: #b83280;\n  }\n\n  .md\\:hover\\:bg-pink-800:hover{\n    background-color: #97266d;\n  }\n\n  .md\\:hover\\:bg-pink-900:hover{\n    background-color: #702459;\n  }\n\n  .md\\:focus\\:bg-transparent:focus{\n    background-color: transparent;\n  }\n\n  .md\\:focus\\:bg-black:focus{\n    background-color: #000;\n  }\n\n  .md\\:focus\\:bg-white:focus{\n    background-color: #fff;\n  }\n\n  .md\\:focus\\:bg-gray-100:focus{\n    background-color: hsl(216, 33%, 97%);\n  }\n\n  .md\\:focus\\:bg-gray-200:focus{\n    background-color: hsl(214, 15%, 91%);\n  }\n\n  .md\\:focus\\:bg-gray-300:focus{\n    background-color: hsl(210, 16%, 82%);\n  }\n\n  .md\\:focus\\:bg-gray-400:focus{\n    background-color: hsl(211, 13%, 65%);\n  }\n\n  .md\\:focus\\:bg-gray-500:focus{\n    background-color: hsl(211, 10%, 53%);\n  }\n\n  .md\\:focus\\:bg-gray-600:focus{\n    background-color: hsl(211, 12%, 43%);\n  }\n\n  .md\\:focus\\:bg-gray-700:focus{\n    background-color: hsl(209, 14%, 37%);\n  }\n\n  .md\\:focus\\:bg-gray-800:focus{\n    background-color: hsl(209, 18%, 30%);\n  }\n\n  .md\\:focus\\:bg-gray-900:focus{\n    background-color: hsl(209, 20%, 25%);\n  }\n\n  .md\\:focus\\:bg-gray-1000:focus{\n    background-color: hsl(210, 24%, 16%);\n  }\n\n  .md\\:focus\\:bg-red-100:focus{\n    background-color: hsl(360, 100%, 95%);\n  }\n\n  .md\\:focus\\:bg-red-200:focus{\n    background-color: hsl(360, 100%, 87%);\n  }\n\n  .md\\:focus\\:bg-red-300:focus{\n    background-color: hsl(360, 100%, 80%);\n  }\n\n  .md\\:focus\\:bg-red-400:focus{\n    background-color: hsl(360, 91%, 69%);\n  }\n\n  .md\\:focus\\:bg-red-500:focus{\n    background-color: hsl(360, 83%, 62%);\n  }\n\n  .md\\:focus\\:bg-red-600:focus{\n    background-color: hsl(356, 75%, 53%);\n  }\n\n  .md\\:focus\\:bg-red-700:focus{\n    background-color: hsl(354, 85%, 44%);\n  }\n\n  .md\\:focus\\:bg-red-800:focus{\n    background-color: hsl(352, 90%, 35%);\n  }\n\n  .md\\:focus\\:bg-red-900:focus{\n    background-color: hsl(350, 94%, 28%);\n  }\n\n  .md\\:focus\\:bg-red-1000:focus{\n    background-color: hsl(348, 94%, 20%);\n  }\n\n  .md\\:focus\\:bg-orange-100:focus{\n    background-color: #fffaf0;\n  }\n\n  .md\\:focus\\:bg-orange-200:focus{\n    background-color: #feebc8;\n  }\n\n  .md\\:focus\\:bg-orange-300:focus{\n    background-color: #fbd38d;\n  }\n\n  .md\\:focus\\:bg-orange-400:focus{\n    background-color: #f6ad55;\n  }\n\n  .md\\:focus\\:bg-orange-500:focus{\n    background-color: #ed8936;\n  }\n\n  .md\\:focus\\:bg-orange-600:focus{\n    background-color: #dd6b20;\n  }\n\n  .md\\:focus\\:bg-orange-700:focus{\n    background-color: #c05621;\n  }\n\n  .md\\:focus\\:bg-orange-800:focus{\n    background-color: #9c4221;\n  }\n\n  .md\\:focus\\:bg-orange-900:focus{\n    background-color: #7b341e;\n  }\n\n  .md\\:focus\\:bg-yellow-100:focus{\n    background-color: hsl(15, 86%, 30%);\n  }\n\n  .md\\:focus\\:bg-yellow-200:focus{\n    background-color: hsl(22, 82%, 39%);\n  }\n\n  .md\\:focus\\:bg-yellow-300:focus{\n    background-color: hsl(29, 80%, 44%);\n  }\n\n  .md\\:focus\\:bg-yellow-400:focus{\n    background-color: hsl(36, 77%, 49%);\n  }\n\n  .md\\:focus\\:bg-yellow-500:focus{\n    background-color: hsl(42, 87%, 55%);\n  }\n\n  .md\\:focus\\:bg-yellow-600:focus{\n    background-color: hsl(44, 92%, 63%);\n  }\n\n  .md\\:focus\\:bg-yellow-700:focus{\n    background-color: hsl(48, 94%, 68%);\n  }\n\n  .md\\:focus\\:bg-yellow-800:focus{\n    background-color: hsl(48, 95%, 76%);\n  }\n\n  .md\\:focus\\:bg-yellow-900:focus{\n    background-color: hsl(48, 100%, 88%);\n  }\n\n  .md\\:focus\\:bg-yellow-1000:focus{\n    background-color: hsl(49, 100%, 96%);\n  }\n\n  .md\\:focus\\:bg-green-100:focus{\n    background-color: #f0fff4;\n  }\n\n  .md\\:focus\\:bg-green-200:focus{\n    background-color: #c6f6d5;\n  }\n\n  .md\\:focus\\:bg-green-300:focus{\n    background-color: #9ae6b4;\n  }\n\n  .md\\:focus\\:bg-green-400:focus{\n    background-color: #68d391;\n  }\n\n  .md\\:focus\\:bg-green-500:focus{\n    background-color: #48bb78;\n  }\n\n  .md\\:focus\\:bg-green-600:focus{\n    background-color: #38a169;\n  }\n\n  .md\\:focus\\:bg-green-700:focus{\n    background-color: #2f855a;\n  }\n\n  .md\\:focus\\:bg-green-800:focus{\n    background-color: #276749;\n  }\n\n  .md\\:focus\\:bg-green-900:focus{\n    background-color: #22543d;\n  }\n\n  .md\\:focus\\:bg-teal-100:focus{\n    background-color: hsl(170, 97%, 15%);\n  }\n\n  .md\\:focus\\:bg-teal-200:focus{\n    background-color: hsl(168, 80%, 23%);\n  }\n\n  .md\\:focus\\:bg-teal-300:focus{\n    background-color: hsl(166, 72%, 28%);\n  }\n\n  .md\\:focus\\:bg-teal-400:focus{\n    background-color: hsl(164, 71%, 34%);\n  }\n\n  .md\\:focus\\:bg-teal-500:focus{\n    background-color: hsl(162, 63%, 41%);\n  }\n\n  .md\\:focus\\:bg-teal-600:focus{\n    background-color: hsl(160, 51%, 49%);\n  }\n\n  .md\\:focus\\:bg-teal-700:focus{\n    background-color: hsl(158, 58%, 62%);\n  }\n\n  .md\\:focus\\:bg-teal-800:focus{\n    background-color: hsl(156, 73%, 74%);\n  }\n\n  .md\\:focus\\:bg-teal-900:focus{\n    background-color: hsl(154, 75%, 87%);\n  }\n\n  .md\\:focus\\:bg-teal-1000:focus{\n    background-color: hsl(152, 68%, 96%);\n  }\n\n  .md\\:focus\\:bg-blue-100:focus{\n    background-color: hsl(195, 100%, 95%);\n  }\n\n  .md\\:focus\\:bg-blue-200:focus{\n    background-color: hsl(195, 100%, 85%);\n  }\n\n  .md\\:focus\\:bg-blue-300:focus{\n    background-color: hsl(195, 97%, 75%);\n  }\n\n  .md\\:focus\\:bg-blue-400:focus{\n    background-color: hsl(196, 94%, 67%);\n  }\n\n  .md\\:focus\\:bg-blue-500:focus{\n    background-color: hsl(197, 92%, 61%);\n  }\n\n  .md\\:focus\\:bg-blue-600:focus{\n    background-color: hsl(199, 84%, 55%);\n  }\n\n  .md\\:focus\\:bg-blue-700:focus{\n    background-color: hsl(201, 79%, 46%);\n  }\n\n  .md\\:focus\\:bg-blue-800:focus{\n    background-color: hsl(202, 83%, 41%);\n  }\n\n  .md\\:focus\\:bg-blue-900:focus{\n    background-color: hsl(203, 87%, 34%);\n  }\n\n  .md\\:focus\\:bg-blue-1000:focus{\n    background-color: hsl(204, 96%, 27%);\n  }\n\n  .md\\:focus\\:bg-indigo-100:focus{\n    background-color: hsl(221, 68%, 93%);\n  }\n\n  .md\\:focus\\:bg-indigo-200:focus{\n    background-color: hsl(221, 78%, 86%);\n  }\n\n  .md\\:focus\\:bg-indigo-300:focus{\n    background-color: hsl(224, 67%, 76%);\n  }\n\n  .md\\:focus\\:bg-indigo-400:focus{\n    background-color: hsl(225, 57%, 67%);\n  }\n\n  .md\\:focus\\:bg-indigo-500:focus{\n    background-color: hsl(227, 50%, 59%);\n  }\n\n  .md\\:focus\\:bg-indigo-600:focus{\n    background-color: hsl(227, 42%, 51%);\n  }\n\n  .md\\:focus\\:bg-indigo-700:focus{\n    background-color: hsl(228, 45%, 45%);\n  }\n\n  .md\\:focus\\:bg-indigo-800:focus{\n    background-color: hsl(230, 49%, 41%);\n  }\n\n  .md\\:focus\\:bg-indigo-900:focus{\n    background-color: hsl(232, 51%, 36%);\n  }\n\n  .md\\:focus\\:bg-indigo-1000:focus{\n    background-color: hsl(234, 62%, 26%);\n  }\n\n  .md\\:focus\\:bg-purple-100:focus{\n    background-color: #faf5ff;\n  }\n\n  .md\\:focus\\:bg-purple-200:focus{\n    background-color: #e9d8fd;\n  }\n\n  .md\\:focus\\:bg-purple-300:focus{\n    background-color: #d6bcfa;\n  }\n\n  .md\\:focus\\:bg-purple-400:focus{\n    background-color: #b794f4;\n  }\n\n  .md\\:focus\\:bg-purple-500:focus{\n    background-color: #9f7aea;\n  }\n\n  .md\\:focus\\:bg-purple-600:focus{\n    background-color: #805ad5;\n  }\n\n  .md\\:focus\\:bg-purple-700:focus{\n    background-color: #6b46c1;\n  }\n\n  .md\\:focus\\:bg-purple-800:focus{\n    background-color: #553c9a;\n  }\n\n  .md\\:focus\\:bg-purple-900:focus{\n    background-color: #44337a;\n  }\n\n  .md\\:focus\\:bg-pink-100:focus{\n    background-color: #fff5f7;\n  }\n\n  .md\\:focus\\:bg-pink-200:focus{\n    background-color: #fed7e2;\n  }\n\n  .md\\:focus\\:bg-pink-300:focus{\n    background-color: #fbb6ce;\n  }\n\n  .md\\:focus\\:bg-pink-400:focus{\n    background-color: #f687b3;\n  }\n\n  .md\\:focus\\:bg-pink-500:focus{\n    background-color: #ed64a6;\n  }\n\n  .md\\:focus\\:bg-pink-600:focus{\n    background-color: #d53f8c;\n  }\n\n  .md\\:focus\\:bg-pink-700:focus{\n    background-color: #b83280;\n  }\n\n  .md\\:focus\\:bg-pink-800:focus{\n    background-color: #97266d;\n  }\n\n  .md\\:focus\\:bg-pink-900:focus{\n    background-color: #702459;\n  }\n\n  .md\\:bg-bottom{\n    background-position: bottom;\n  }\n\n  .md\\:bg-center{\n    background-position: center;\n  }\n\n  .md\\:bg-left{\n    background-position: left;\n  }\n\n  .md\\:bg-left-bottom{\n    background-position: left bottom;\n  }\n\n  .md\\:bg-left-top{\n    background-position: left top;\n  }\n\n  .md\\:bg-right{\n    background-position: right;\n  }\n\n  .md\\:bg-right-bottom{\n    background-position: right bottom;\n  }\n\n  .md\\:bg-right-top{\n    background-position: right top;\n  }\n\n  .md\\:bg-top{\n    background-position: top;\n  }\n\n  .md\\:bg-repeat{\n    background-repeat: repeat;\n  }\n\n  .md\\:bg-no-repeat{\n    background-repeat: no-repeat;\n  }\n\n  .md\\:bg-repeat-x{\n    background-repeat: repeat-x;\n  }\n\n  .md\\:bg-repeat-y{\n    background-repeat: repeat-y;\n  }\n\n  .md\\:bg-repeat-round{\n    background-repeat: round;\n  }\n\n  .md\\:bg-repeat-space{\n    background-repeat: space;\n  }\n\n  .md\\:bg-auto{\n    background-size: auto;\n  }\n\n  .md\\:bg-cover{\n    background-size: cover;\n  }\n\n  .md\\:bg-contain{\n    background-size: contain;\n  }\n\n  .md\\:border-collapse{\n    border-collapse: collapse;\n  }\n\n  .md\\:border-separate{\n    border-collapse: separate;\n  }\n\n  .md\\:border-transparent{\n    border-color: transparent;\n  }\n\n  .md\\:border-black{\n    border-color: #000;\n  }\n\n  .md\\:border-white{\n    border-color: #fff;\n  }\n\n  .md\\:border-gray-100{\n    border-color: hsl(216, 33%, 97%);\n  }\n\n  .md\\:border-gray-200{\n    border-color: hsl(214, 15%, 91%);\n  }\n\n  .md\\:border-gray-300{\n    border-color: hsl(210, 16%, 82%);\n  }\n\n  .md\\:border-gray-400{\n    border-color: hsl(211, 13%, 65%);\n  }\n\n  .md\\:border-gray-500{\n    border-color: hsl(211, 10%, 53%);\n  }\n\n  .md\\:border-gray-600{\n    border-color: hsl(211, 12%, 43%);\n  }\n\n  .md\\:border-gray-700{\n    border-color: hsl(209, 14%, 37%);\n  }\n\n  .md\\:border-gray-800{\n    border-color: hsl(209, 18%, 30%);\n  }\n\n  .md\\:border-gray-900{\n    border-color: hsl(209, 20%, 25%);\n  }\n\n  .md\\:border-gray-1000{\n    border-color: hsl(210, 24%, 16%);\n  }\n\n  .md\\:border-red-100{\n    border-color: hsl(360, 100%, 95%);\n  }\n\n  .md\\:border-red-200{\n    border-color: hsl(360, 100%, 87%);\n  }\n\n  .md\\:border-red-300{\n    border-color: hsl(360, 100%, 80%);\n  }\n\n  .md\\:border-red-400{\n    border-color: hsl(360, 91%, 69%);\n  }\n\n  .md\\:border-red-500{\n    border-color: hsl(360, 83%, 62%);\n  }\n\n  .md\\:border-red-600{\n    border-color: hsl(356, 75%, 53%);\n  }\n\n  .md\\:border-red-700{\n    border-color: hsl(354, 85%, 44%);\n  }\n\n  .md\\:border-red-800{\n    border-color: hsl(352, 90%, 35%);\n  }\n\n  .md\\:border-red-900{\n    border-color: hsl(350, 94%, 28%);\n  }\n\n  .md\\:border-red-1000{\n    border-color: hsl(348, 94%, 20%);\n  }\n\n  .md\\:border-orange-100{\n    border-color: #fffaf0;\n  }\n\n  .md\\:border-orange-200{\n    border-color: #feebc8;\n  }\n\n  .md\\:border-orange-300{\n    border-color: #fbd38d;\n  }\n\n  .md\\:border-orange-400{\n    border-color: #f6ad55;\n  }\n\n  .md\\:border-orange-500{\n    border-color: #ed8936;\n  }\n\n  .md\\:border-orange-600{\n    border-color: #dd6b20;\n  }\n\n  .md\\:border-orange-700{\n    border-color: #c05621;\n  }\n\n  .md\\:border-orange-800{\n    border-color: #9c4221;\n  }\n\n  .md\\:border-orange-900{\n    border-color: #7b341e;\n  }\n\n  .md\\:border-yellow-100{\n    border-color: hsl(15, 86%, 30%);\n  }\n\n  .md\\:border-yellow-200{\n    border-color: hsl(22, 82%, 39%);\n  }\n\n  .md\\:border-yellow-300{\n    border-color: hsl(29, 80%, 44%);\n  }\n\n  .md\\:border-yellow-400{\n    border-color: hsl(36, 77%, 49%);\n  }\n\n  .md\\:border-yellow-500{\n    border-color: hsl(42, 87%, 55%);\n  }\n\n  .md\\:border-yellow-600{\n    border-color: hsl(44, 92%, 63%);\n  }\n\n  .md\\:border-yellow-700{\n    border-color: hsl(48, 94%, 68%);\n  }\n\n  .md\\:border-yellow-800{\n    border-color: hsl(48, 95%, 76%);\n  }\n\n  .md\\:border-yellow-900{\n    border-color: hsl(48, 100%, 88%);\n  }\n\n  .md\\:border-yellow-1000{\n    border-color: hsl(49, 100%, 96%);\n  }\n\n  .md\\:border-green-100{\n    border-color: #f0fff4;\n  }\n\n  .md\\:border-green-200{\n    border-color: #c6f6d5;\n  }\n\n  .md\\:border-green-300{\n    border-color: #9ae6b4;\n  }\n\n  .md\\:border-green-400{\n    border-color: #68d391;\n  }\n\n  .md\\:border-green-500{\n    border-color: #48bb78;\n  }\n\n  .md\\:border-green-600{\n    border-color: #38a169;\n  }\n\n  .md\\:border-green-700{\n    border-color: #2f855a;\n  }\n\n  .md\\:border-green-800{\n    border-color: #276749;\n  }\n\n  .md\\:border-green-900{\n    border-color: #22543d;\n  }\n\n  .md\\:border-teal-100{\n    border-color: hsl(170, 97%, 15%);\n  }\n\n  .md\\:border-teal-200{\n    border-color: hsl(168, 80%, 23%);\n  }\n\n  .md\\:border-teal-300{\n    border-color: hsl(166, 72%, 28%);\n  }\n\n  .md\\:border-teal-400{\n    border-color: hsl(164, 71%, 34%);\n  }\n\n  .md\\:border-teal-500{\n    border-color: hsl(162, 63%, 41%);\n  }\n\n  .md\\:border-teal-600{\n    border-color: hsl(160, 51%, 49%);\n  }\n\n  .md\\:border-teal-700{\n    border-color: hsl(158, 58%, 62%);\n  }\n\n  .md\\:border-teal-800{\n    border-color: hsl(156, 73%, 74%);\n  }\n\n  .md\\:border-teal-900{\n    border-color: hsl(154, 75%, 87%);\n  }\n\n  .md\\:border-teal-1000{\n    border-color: hsl(152, 68%, 96%);\n  }\n\n  .md\\:border-blue-100{\n    border-color: hsl(195, 100%, 95%);\n  }\n\n  .md\\:border-blue-200{\n    border-color: hsl(195, 100%, 85%);\n  }\n\n  .md\\:border-blue-300{\n    border-color: hsl(195, 97%, 75%);\n  }\n\n  .md\\:border-blue-400{\n    border-color: hsl(196, 94%, 67%);\n  }\n\n  .md\\:border-blue-500{\n    border-color: hsl(197, 92%, 61%);\n  }\n\n  .md\\:border-blue-600{\n    border-color: hsl(199, 84%, 55%);\n  }\n\n  .md\\:border-blue-700{\n    border-color: hsl(201, 79%, 46%);\n  }\n\n  .md\\:border-blue-800{\n    border-color: hsl(202, 83%, 41%);\n  }\n\n  .md\\:border-blue-900{\n    border-color: hsl(203, 87%, 34%);\n  }\n\n  .md\\:border-blue-1000{\n    border-color: hsl(204, 96%, 27%);\n  }\n\n  .md\\:border-indigo-100{\n    border-color: hsl(221, 68%, 93%);\n  }\n\n  .md\\:border-indigo-200{\n    border-color: hsl(221, 78%, 86%);\n  }\n\n  .md\\:border-indigo-300{\n    border-color: hsl(224, 67%, 76%);\n  }\n\n  .md\\:border-indigo-400{\n    border-color: hsl(225, 57%, 67%);\n  }\n\n  .md\\:border-indigo-500{\n    border-color: hsl(227, 50%, 59%);\n  }\n\n  .md\\:border-indigo-600{\n    border-color: hsl(227, 42%, 51%);\n  }\n\n  .md\\:border-indigo-700{\n    border-color: hsl(228, 45%, 45%);\n  }\n\n  .md\\:border-indigo-800{\n    border-color: hsl(230, 49%, 41%);\n  }\n\n  .md\\:border-indigo-900{\n    border-color: hsl(232, 51%, 36%);\n  }\n\n  .md\\:border-indigo-1000{\n    border-color: hsl(234, 62%, 26%);\n  }\n\n  .md\\:border-purple-100{\n    border-color: #faf5ff;\n  }\n\n  .md\\:border-purple-200{\n    border-color: #e9d8fd;\n  }\n\n  .md\\:border-purple-300{\n    border-color: #d6bcfa;\n  }\n\n  .md\\:border-purple-400{\n    border-color: #b794f4;\n  }\n\n  .md\\:border-purple-500{\n    border-color: #9f7aea;\n  }\n\n  .md\\:border-purple-600{\n    border-color: #805ad5;\n  }\n\n  .md\\:border-purple-700{\n    border-color: #6b46c1;\n  }\n\n  .md\\:border-purple-800{\n    border-color: #553c9a;\n  }\n\n  .md\\:border-purple-900{\n    border-color: #44337a;\n  }\n\n  .md\\:border-pink-100{\n    border-color: #fff5f7;\n  }\n\n  .md\\:border-pink-200{\n    border-color: #fed7e2;\n  }\n\n  .md\\:border-pink-300{\n    border-color: #fbb6ce;\n  }\n\n  .md\\:border-pink-400{\n    border-color: #f687b3;\n  }\n\n  .md\\:border-pink-500{\n    border-color: #ed64a6;\n  }\n\n  .md\\:border-pink-600{\n    border-color: #d53f8c;\n  }\n\n  .md\\:border-pink-700{\n    border-color: #b83280;\n  }\n\n  .md\\:border-pink-800{\n    border-color: #97266d;\n  }\n\n  .md\\:border-pink-900{\n    border-color: #702459;\n  }\n\n  .md\\:hover\\:border-transparent:hover{\n    border-color: transparent;\n  }\n\n  .md\\:hover\\:border-black:hover{\n    border-color: #000;\n  }\n\n  .md\\:hover\\:border-white:hover{\n    border-color: #fff;\n  }\n\n  .md\\:hover\\:border-gray-100:hover{\n    border-color: hsl(216, 33%, 97%);\n  }\n\n  .md\\:hover\\:border-gray-200:hover{\n    border-color: hsl(214, 15%, 91%);\n  }\n\n  .md\\:hover\\:border-gray-300:hover{\n    border-color: hsl(210, 16%, 82%);\n  }\n\n  .md\\:hover\\:border-gray-400:hover{\n    border-color: hsl(211, 13%, 65%);\n  }\n\n  .md\\:hover\\:border-gray-500:hover{\n    border-color: hsl(211, 10%, 53%);\n  }\n\n  .md\\:hover\\:border-gray-600:hover{\n    border-color: hsl(211, 12%, 43%);\n  }\n\n  .md\\:hover\\:border-gray-700:hover{\n    border-color: hsl(209, 14%, 37%);\n  }\n\n  .md\\:hover\\:border-gray-800:hover{\n    border-color: hsl(209, 18%, 30%);\n  }\n\n  .md\\:hover\\:border-gray-900:hover{\n    border-color: hsl(209, 20%, 25%);\n  }\n\n  .md\\:hover\\:border-gray-1000:hover{\n    border-color: hsl(210, 24%, 16%);\n  }\n\n  .md\\:hover\\:border-red-100:hover{\n    border-color: hsl(360, 100%, 95%);\n  }\n\n  .md\\:hover\\:border-red-200:hover{\n    border-color: hsl(360, 100%, 87%);\n  }\n\n  .md\\:hover\\:border-red-300:hover{\n    border-color: hsl(360, 100%, 80%);\n  }\n\n  .md\\:hover\\:border-red-400:hover{\n    border-color: hsl(360, 91%, 69%);\n  }\n\n  .md\\:hover\\:border-red-500:hover{\n    border-color: hsl(360, 83%, 62%);\n  }\n\n  .md\\:hover\\:border-red-600:hover{\n    border-color: hsl(356, 75%, 53%);\n  }\n\n  .md\\:hover\\:border-red-700:hover{\n    border-color: hsl(354, 85%, 44%);\n  }\n\n  .md\\:hover\\:border-red-800:hover{\n    border-color: hsl(352, 90%, 35%);\n  }\n\n  .md\\:hover\\:border-red-900:hover{\n    border-color: hsl(350, 94%, 28%);\n  }\n\n  .md\\:hover\\:border-red-1000:hover{\n    border-color: hsl(348, 94%, 20%);\n  }\n\n  .md\\:hover\\:border-orange-100:hover{\n    border-color: #fffaf0;\n  }\n\n  .md\\:hover\\:border-orange-200:hover{\n    border-color: #feebc8;\n  }\n\n  .md\\:hover\\:border-orange-300:hover{\n    border-color: #fbd38d;\n  }\n\n  .md\\:hover\\:border-orange-400:hover{\n    border-color: #f6ad55;\n  }\n\n  .md\\:hover\\:border-orange-500:hover{\n    border-color: #ed8936;\n  }\n\n  .md\\:hover\\:border-orange-600:hover{\n    border-color: #dd6b20;\n  }\n\n  .md\\:hover\\:border-orange-700:hover{\n    border-color: #c05621;\n  }\n\n  .md\\:hover\\:border-orange-800:hover{\n    border-color: #9c4221;\n  }\n\n  .md\\:hover\\:border-orange-900:hover{\n    border-color: #7b341e;\n  }\n\n  .md\\:hover\\:border-yellow-100:hover{\n    border-color: hsl(15, 86%, 30%);\n  }\n\n  .md\\:hover\\:border-yellow-200:hover{\n    border-color: hsl(22, 82%, 39%);\n  }\n\n  .md\\:hover\\:border-yellow-300:hover{\n    border-color: hsl(29, 80%, 44%);\n  }\n\n  .md\\:hover\\:border-yellow-400:hover{\n    border-color: hsl(36, 77%, 49%);\n  }\n\n  .md\\:hover\\:border-yellow-500:hover{\n    border-color: hsl(42, 87%, 55%);\n  }\n\n  .md\\:hover\\:border-yellow-600:hover{\n    border-color: hsl(44, 92%, 63%);\n  }\n\n  .md\\:hover\\:border-yellow-700:hover{\n    border-color: hsl(48, 94%, 68%);\n  }\n\n  .md\\:hover\\:border-yellow-800:hover{\n    border-color: hsl(48, 95%, 76%);\n  }\n\n  .md\\:hover\\:border-yellow-900:hover{\n    border-color: hsl(48, 100%, 88%);\n  }\n\n  .md\\:hover\\:border-yellow-1000:hover{\n    border-color: hsl(49, 100%, 96%);\n  }\n\n  .md\\:hover\\:border-green-100:hover{\n    border-color: #f0fff4;\n  }\n\n  .md\\:hover\\:border-green-200:hover{\n    border-color: #c6f6d5;\n  }\n\n  .md\\:hover\\:border-green-300:hover{\n    border-color: #9ae6b4;\n  }\n\n  .md\\:hover\\:border-green-400:hover{\n    border-color: #68d391;\n  }\n\n  .md\\:hover\\:border-green-500:hover{\n    border-color: #48bb78;\n  }\n\n  .md\\:hover\\:border-green-600:hover{\n    border-color: #38a169;\n  }\n\n  .md\\:hover\\:border-green-700:hover{\n    border-color: #2f855a;\n  }\n\n  .md\\:hover\\:border-green-800:hover{\n    border-color: #276749;\n  }\n\n  .md\\:hover\\:border-green-900:hover{\n    border-color: #22543d;\n  }\n\n  .md\\:hover\\:border-teal-100:hover{\n    border-color: hsl(170, 97%, 15%);\n  }\n\n  .md\\:hover\\:border-teal-200:hover{\n    border-color: hsl(168, 80%, 23%);\n  }\n\n  .md\\:hover\\:border-teal-300:hover{\n    border-color: hsl(166, 72%, 28%);\n  }\n\n  .md\\:hover\\:border-teal-400:hover{\n    border-color: hsl(164, 71%, 34%);\n  }\n\n  .md\\:hover\\:border-teal-500:hover{\n    border-color: hsl(162, 63%, 41%);\n  }\n\n  .md\\:hover\\:border-teal-600:hover{\n    border-color: hsl(160, 51%, 49%);\n  }\n\n  .md\\:hover\\:border-teal-700:hover{\n    border-color: hsl(158, 58%, 62%);\n  }\n\n  .md\\:hover\\:border-teal-800:hover{\n    border-color: hsl(156, 73%, 74%);\n  }\n\n  .md\\:hover\\:border-teal-900:hover{\n    border-color: hsl(154, 75%, 87%);\n  }\n\n  .md\\:hover\\:border-teal-1000:hover{\n    border-color: hsl(152, 68%, 96%);\n  }\n\n  .md\\:hover\\:border-blue-100:hover{\n    border-color: hsl(195, 100%, 95%);\n  }\n\n  .md\\:hover\\:border-blue-200:hover{\n    border-color: hsl(195, 100%, 85%);\n  }\n\n  .md\\:hover\\:border-blue-300:hover{\n    border-color: hsl(195, 97%, 75%);\n  }\n\n  .md\\:hover\\:border-blue-400:hover{\n    border-color: hsl(196, 94%, 67%);\n  }\n\n  .md\\:hover\\:border-blue-500:hover{\n    border-color: hsl(197, 92%, 61%);\n  }\n\n  .md\\:hover\\:border-blue-600:hover{\n    border-color: hsl(199, 84%, 55%);\n  }\n\n  .md\\:hover\\:border-blue-700:hover{\n    border-color: hsl(201, 79%, 46%);\n  }\n\n  .md\\:hover\\:border-blue-800:hover{\n    border-color: hsl(202, 83%, 41%);\n  }\n\n  .md\\:hover\\:border-blue-900:hover{\n    border-color: hsl(203, 87%, 34%);\n  }\n\n  .md\\:hover\\:border-blue-1000:hover{\n    border-color: hsl(204, 96%, 27%);\n  }\n\n  .md\\:hover\\:border-indigo-100:hover{\n    border-color: hsl(221, 68%, 93%);\n  }\n\n  .md\\:hover\\:border-indigo-200:hover{\n    border-color: hsl(221, 78%, 86%);\n  }\n\n  .md\\:hover\\:border-indigo-300:hover{\n    border-color: hsl(224, 67%, 76%);\n  }\n\n  .md\\:hover\\:border-indigo-400:hover{\n    border-color: hsl(225, 57%, 67%);\n  }\n\n  .md\\:hover\\:border-indigo-500:hover{\n    border-color: hsl(227, 50%, 59%);\n  }\n\n  .md\\:hover\\:border-indigo-600:hover{\n    border-color: hsl(227, 42%, 51%);\n  }\n\n  .md\\:hover\\:border-indigo-700:hover{\n    border-color: hsl(228, 45%, 45%);\n  }\n\n  .md\\:hover\\:border-indigo-800:hover{\n    border-color: hsl(230, 49%, 41%);\n  }\n\n  .md\\:hover\\:border-indigo-900:hover{\n    border-color: hsl(232, 51%, 36%);\n  }\n\n  .md\\:hover\\:border-indigo-1000:hover{\n    border-color: hsl(234, 62%, 26%);\n  }\n\n  .md\\:hover\\:border-purple-100:hover{\n    border-color: #faf5ff;\n  }\n\n  .md\\:hover\\:border-purple-200:hover{\n    border-color: #e9d8fd;\n  }\n\n  .md\\:hover\\:border-purple-300:hover{\n    border-color: #d6bcfa;\n  }\n\n  .md\\:hover\\:border-purple-400:hover{\n    border-color: #b794f4;\n  }\n\n  .md\\:hover\\:border-purple-500:hover{\n    border-color: #9f7aea;\n  }\n\n  .md\\:hover\\:border-purple-600:hover{\n    border-color: #805ad5;\n  }\n\n  .md\\:hover\\:border-purple-700:hover{\n    border-color: #6b46c1;\n  }\n\n  .md\\:hover\\:border-purple-800:hover{\n    border-color: #553c9a;\n  }\n\n  .md\\:hover\\:border-purple-900:hover{\n    border-color: #44337a;\n  }\n\n  .md\\:hover\\:border-pink-100:hover{\n    border-color: #fff5f7;\n  }\n\n  .md\\:hover\\:border-pink-200:hover{\n    border-color: #fed7e2;\n  }\n\n  .md\\:hover\\:border-pink-300:hover{\n    border-color: #fbb6ce;\n  }\n\n  .md\\:hover\\:border-pink-400:hover{\n    border-color: #f687b3;\n  }\n\n  .md\\:hover\\:border-pink-500:hover{\n    border-color: #ed64a6;\n  }\n\n  .md\\:hover\\:border-pink-600:hover{\n    border-color: #d53f8c;\n  }\n\n  .md\\:hover\\:border-pink-700:hover{\n    border-color: #b83280;\n  }\n\n  .md\\:hover\\:border-pink-800:hover{\n    border-color: #97266d;\n  }\n\n  .md\\:hover\\:border-pink-900:hover{\n    border-color: #702459;\n  }\n\n  .md\\:focus\\:border-transparent:focus{\n    border-color: transparent;\n  }\n\n  .md\\:focus\\:border-black:focus{\n    border-color: #000;\n  }\n\n  .md\\:focus\\:border-white:focus{\n    border-color: #fff;\n  }\n\n  .md\\:focus\\:border-gray-100:focus{\n    border-color: hsl(216, 33%, 97%);\n  }\n\n  .md\\:focus\\:border-gray-200:focus{\n    border-color: hsl(214, 15%, 91%);\n  }\n\n  .md\\:focus\\:border-gray-300:focus{\n    border-color: hsl(210, 16%, 82%);\n  }\n\n  .md\\:focus\\:border-gray-400:focus{\n    border-color: hsl(211, 13%, 65%);\n  }\n\n  .md\\:focus\\:border-gray-500:focus{\n    border-color: hsl(211, 10%, 53%);\n  }\n\n  .md\\:focus\\:border-gray-600:focus{\n    border-color: hsl(211, 12%, 43%);\n  }\n\n  .md\\:focus\\:border-gray-700:focus{\n    border-color: hsl(209, 14%, 37%);\n  }\n\n  .md\\:focus\\:border-gray-800:focus{\n    border-color: hsl(209, 18%, 30%);\n  }\n\n  .md\\:focus\\:border-gray-900:focus{\n    border-color: hsl(209, 20%, 25%);\n  }\n\n  .md\\:focus\\:border-gray-1000:focus{\n    border-color: hsl(210, 24%, 16%);\n  }\n\n  .md\\:focus\\:border-red-100:focus{\n    border-color: hsl(360, 100%, 95%);\n  }\n\n  .md\\:focus\\:border-red-200:focus{\n    border-color: hsl(360, 100%, 87%);\n  }\n\n  .md\\:focus\\:border-red-300:focus{\n    border-color: hsl(360, 100%, 80%);\n  }\n\n  .md\\:focus\\:border-red-400:focus{\n    border-color: hsl(360, 91%, 69%);\n  }\n\n  .md\\:focus\\:border-red-500:focus{\n    border-color: hsl(360, 83%, 62%);\n  }\n\n  .md\\:focus\\:border-red-600:focus{\n    border-color: hsl(356, 75%, 53%);\n  }\n\n  .md\\:focus\\:border-red-700:focus{\n    border-color: hsl(354, 85%, 44%);\n  }\n\n  .md\\:focus\\:border-red-800:focus{\n    border-color: hsl(352, 90%, 35%);\n  }\n\n  .md\\:focus\\:border-red-900:focus{\n    border-color: hsl(350, 94%, 28%);\n  }\n\n  .md\\:focus\\:border-red-1000:focus{\n    border-color: hsl(348, 94%, 20%);\n  }\n\n  .md\\:focus\\:border-orange-100:focus{\n    border-color: #fffaf0;\n  }\n\n  .md\\:focus\\:border-orange-200:focus{\n    border-color: #feebc8;\n  }\n\n  .md\\:focus\\:border-orange-300:focus{\n    border-color: #fbd38d;\n  }\n\n  .md\\:focus\\:border-orange-400:focus{\n    border-color: #f6ad55;\n  }\n\n  .md\\:focus\\:border-orange-500:focus{\n    border-color: #ed8936;\n  }\n\n  .md\\:focus\\:border-orange-600:focus{\n    border-color: #dd6b20;\n  }\n\n  .md\\:focus\\:border-orange-700:focus{\n    border-color: #c05621;\n  }\n\n  .md\\:focus\\:border-orange-800:focus{\n    border-color: #9c4221;\n  }\n\n  .md\\:focus\\:border-orange-900:focus{\n    border-color: #7b341e;\n  }\n\n  .md\\:focus\\:border-yellow-100:focus{\n    border-color: hsl(15, 86%, 30%);\n  }\n\n  .md\\:focus\\:border-yellow-200:focus{\n    border-color: hsl(22, 82%, 39%);\n  }\n\n  .md\\:focus\\:border-yellow-300:focus{\n    border-color: hsl(29, 80%, 44%);\n  }\n\n  .md\\:focus\\:border-yellow-400:focus{\n    border-color: hsl(36, 77%, 49%);\n  }\n\n  .md\\:focus\\:border-yellow-500:focus{\n    border-color: hsl(42, 87%, 55%);\n  }\n\n  .md\\:focus\\:border-yellow-600:focus{\n    border-color: hsl(44, 92%, 63%);\n  }\n\n  .md\\:focus\\:border-yellow-700:focus{\n    border-color: hsl(48, 94%, 68%);\n  }\n\n  .md\\:focus\\:border-yellow-800:focus{\n    border-color: hsl(48, 95%, 76%);\n  }\n\n  .md\\:focus\\:border-yellow-900:focus{\n    border-color: hsl(48, 100%, 88%);\n  }\n\n  .md\\:focus\\:border-yellow-1000:focus{\n    border-color: hsl(49, 100%, 96%);\n  }\n\n  .md\\:focus\\:border-green-100:focus{\n    border-color: #f0fff4;\n  }\n\n  .md\\:focus\\:border-green-200:focus{\n    border-color: #c6f6d5;\n  }\n\n  .md\\:focus\\:border-green-300:focus{\n    border-color: #9ae6b4;\n  }\n\n  .md\\:focus\\:border-green-400:focus{\n    border-color: #68d391;\n  }\n\n  .md\\:focus\\:border-green-500:focus{\n    border-color: #48bb78;\n  }\n\n  .md\\:focus\\:border-green-600:focus{\n    border-color: #38a169;\n  }\n\n  .md\\:focus\\:border-green-700:focus{\n    border-color: #2f855a;\n  }\n\n  .md\\:focus\\:border-green-800:focus{\n    border-color: #276749;\n  }\n\n  .md\\:focus\\:border-green-900:focus{\n    border-color: #22543d;\n  }\n\n  .md\\:focus\\:border-teal-100:focus{\n    border-color: hsl(170, 97%, 15%);\n  }\n\n  .md\\:focus\\:border-teal-200:focus{\n    border-color: hsl(168, 80%, 23%);\n  }\n\n  .md\\:focus\\:border-teal-300:focus{\n    border-color: hsl(166, 72%, 28%);\n  }\n\n  .md\\:focus\\:border-teal-400:focus{\n    border-color: hsl(164, 71%, 34%);\n  }\n\n  .md\\:focus\\:border-teal-500:focus{\n    border-color: hsl(162, 63%, 41%);\n  }\n\n  .md\\:focus\\:border-teal-600:focus{\n    border-color: hsl(160, 51%, 49%);\n  }\n\n  .md\\:focus\\:border-teal-700:focus{\n    border-color: hsl(158, 58%, 62%);\n  }\n\n  .md\\:focus\\:border-teal-800:focus{\n    border-color: hsl(156, 73%, 74%);\n  }\n\n  .md\\:focus\\:border-teal-900:focus{\n    border-color: hsl(154, 75%, 87%);\n  }\n\n  .md\\:focus\\:border-teal-1000:focus{\n    border-color: hsl(152, 68%, 96%);\n  }\n\n  .md\\:focus\\:border-blue-100:focus{\n    border-color: hsl(195, 100%, 95%);\n  }\n\n  .md\\:focus\\:border-blue-200:focus{\n    border-color: hsl(195, 100%, 85%);\n  }\n\n  .md\\:focus\\:border-blue-300:focus{\n    border-color: hsl(195, 97%, 75%);\n  }\n\n  .md\\:focus\\:border-blue-400:focus{\n    border-color: hsl(196, 94%, 67%);\n  }\n\n  .md\\:focus\\:border-blue-500:focus{\n    border-color: hsl(197, 92%, 61%);\n  }\n\n  .md\\:focus\\:border-blue-600:focus{\n    border-color: hsl(199, 84%, 55%);\n  }\n\n  .md\\:focus\\:border-blue-700:focus{\n    border-color: hsl(201, 79%, 46%);\n  }\n\n  .md\\:focus\\:border-blue-800:focus{\n    border-color: hsl(202, 83%, 41%);\n  }\n\n  .md\\:focus\\:border-blue-900:focus{\n    border-color: hsl(203, 87%, 34%);\n  }\n\n  .md\\:focus\\:border-blue-1000:focus{\n    border-color: hsl(204, 96%, 27%);\n  }\n\n  .md\\:focus\\:border-indigo-100:focus{\n    border-color: hsl(221, 68%, 93%);\n  }\n\n  .md\\:focus\\:border-indigo-200:focus{\n    border-color: hsl(221, 78%, 86%);\n  }\n\n  .md\\:focus\\:border-indigo-300:focus{\n    border-color: hsl(224, 67%, 76%);\n  }\n\n  .md\\:focus\\:border-indigo-400:focus{\n    border-color: hsl(225, 57%, 67%);\n  }\n\n  .md\\:focus\\:border-indigo-500:focus{\n    border-color: hsl(227, 50%, 59%);\n  }\n\n  .md\\:focus\\:border-indigo-600:focus{\n    border-color: hsl(227, 42%, 51%);\n  }\n\n  .md\\:focus\\:border-indigo-700:focus{\n    border-color: hsl(228, 45%, 45%);\n  }\n\n  .md\\:focus\\:border-indigo-800:focus{\n    border-color: hsl(230, 49%, 41%);\n  }\n\n  .md\\:focus\\:border-indigo-900:focus{\n    border-color: hsl(232, 51%, 36%);\n  }\n\n  .md\\:focus\\:border-indigo-1000:focus{\n    border-color: hsl(234, 62%, 26%);\n  }\n\n  .md\\:focus\\:border-purple-100:focus{\n    border-color: #faf5ff;\n  }\n\n  .md\\:focus\\:border-purple-200:focus{\n    border-color: #e9d8fd;\n  }\n\n  .md\\:focus\\:border-purple-300:focus{\n    border-color: #d6bcfa;\n  }\n\n  .md\\:focus\\:border-purple-400:focus{\n    border-color: #b794f4;\n  }\n\n  .md\\:focus\\:border-purple-500:focus{\n    border-color: #9f7aea;\n  }\n\n  .md\\:focus\\:border-purple-600:focus{\n    border-color: #805ad5;\n  }\n\n  .md\\:focus\\:border-purple-700:focus{\n    border-color: #6b46c1;\n  }\n\n  .md\\:focus\\:border-purple-800:focus{\n    border-color: #553c9a;\n  }\n\n  .md\\:focus\\:border-purple-900:focus{\n    border-color: #44337a;\n  }\n\n  .md\\:focus\\:border-pink-100:focus{\n    border-color: #fff5f7;\n  }\n\n  .md\\:focus\\:border-pink-200:focus{\n    border-color: #fed7e2;\n  }\n\n  .md\\:focus\\:border-pink-300:focus{\n    border-color: #fbb6ce;\n  }\n\n  .md\\:focus\\:border-pink-400:focus{\n    border-color: #f687b3;\n  }\n\n  .md\\:focus\\:border-pink-500:focus{\n    border-color: #ed64a6;\n  }\n\n  .md\\:focus\\:border-pink-600:focus{\n    border-color: #d53f8c;\n  }\n\n  .md\\:focus\\:border-pink-700:focus{\n    border-color: #b83280;\n  }\n\n  .md\\:focus\\:border-pink-800:focus{\n    border-color: #97266d;\n  }\n\n  .md\\:focus\\:border-pink-900:focus{\n    border-color: #702459;\n  }\n\n  .md\\:rounded-none{\n    border-radius: 0;\n  }\n\n  .md\\:rounded-sm{\n    border-radius: 0.125rem;\n  }\n\n  .md\\:rounded{\n    border-radius: 0.25rem;\n  }\n\n  .md\\:rounded-lg{\n    border-radius: 0.5rem;\n  }\n\n  .md\\:rounded-full{\n    border-radius: 9999px;\n  }\n\n  .md\\:rounded-t-none{\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n\n  .md\\:rounded-r-none{\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n\n  .md\\:rounded-b-none{\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n\n  .md\\:rounded-l-none{\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n\n  .md\\:rounded-t-sm{\n    border-top-left-radius: 0.125rem;\n    border-top-right-radius: 0.125rem;\n  }\n\n  .md\\:rounded-r-sm{\n    border-top-right-radius: 0.125rem;\n    border-bottom-right-radius: 0.125rem;\n  }\n\n  .md\\:rounded-b-sm{\n    border-bottom-right-radius: 0.125rem;\n    border-bottom-left-radius: 0.125rem;\n  }\n\n  .md\\:rounded-l-sm{\n    border-top-left-radius: 0.125rem;\n    border-bottom-left-radius: 0.125rem;\n  }\n\n  .md\\:rounded-t{\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n  }\n\n  .md\\:rounded-r{\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n  }\n\n  .md\\:rounded-b{\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n\n  .md\\:rounded-l{\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n\n  .md\\:rounded-t-lg{\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n  }\n\n  .md\\:rounded-r-lg{\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n  }\n\n  .md\\:rounded-b-lg{\n    border-bottom-right-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n  }\n\n  .md\\:rounded-l-lg{\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n  }\n\n  .md\\:rounded-t-full{\n    border-top-left-radius: 9999px;\n    border-top-right-radius: 9999px;\n  }\n\n  .md\\:rounded-r-full{\n    border-top-right-radius: 9999px;\n    border-bottom-right-radius: 9999px;\n  }\n\n  .md\\:rounded-b-full{\n    border-bottom-right-radius: 9999px;\n    border-bottom-left-radius: 9999px;\n  }\n\n  .md\\:rounded-l-full{\n    border-top-left-radius: 9999px;\n    border-bottom-left-radius: 9999px;\n  }\n\n  .md\\:rounded-tl-none{\n    border-top-left-radius: 0;\n  }\n\n  .md\\:rounded-tr-none{\n    border-top-right-radius: 0;\n  }\n\n  .md\\:rounded-br-none{\n    border-bottom-right-radius: 0;\n  }\n\n  .md\\:rounded-bl-none{\n    border-bottom-left-radius: 0;\n  }\n\n  .md\\:rounded-tl-sm{\n    border-top-left-radius: 0.125rem;\n  }\n\n  .md\\:rounded-tr-sm{\n    border-top-right-radius: 0.125rem;\n  }\n\n  .md\\:rounded-br-sm{\n    border-bottom-right-radius: 0.125rem;\n  }\n\n  .md\\:rounded-bl-sm{\n    border-bottom-left-radius: 0.125rem;\n  }\n\n  .md\\:rounded-tl{\n    border-top-left-radius: 0.25rem;\n  }\n\n  .md\\:rounded-tr{\n    border-top-right-radius: 0.25rem;\n  }\n\n  .md\\:rounded-br{\n    border-bottom-right-radius: 0.25rem;\n  }\n\n  .md\\:rounded-bl{\n    border-bottom-left-radius: 0.25rem;\n  }\n\n  .md\\:rounded-tl-lg{\n    border-top-left-radius: 0.5rem;\n  }\n\n  .md\\:rounded-tr-lg{\n    border-top-right-radius: 0.5rem;\n  }\n\n  .md\\:rounded-br-lg{\n    border-bottom-right-radius: 0.5rem;\n  }\n\n  .md\\:rounded-bl-lg{\n    border-bottom-left-radius: 0.5rem;\n  }\n\n  .md\\:rounded-tl-full{\n    border-top-left-radius: 9999px;\n  }\n\n  .md\\:rounded-tr-full{\n    border-top-right-radius: 9999px;\n  }\n\n  .md\\:rounded-br-full{\n    border-bottom-right-radius: 9999px;\n  }\n\n  .md\\:rounded-bl-full{\n    border-bottom-left-radius: 9999px;\n  }\n\n  .md\\:border-solid{\n    border-style: solid;\n  }\n\n  .md\\:border-dashed{\n    border-style: dashed;\n  }\n\n  .md\\:border-dotted{\n    border-style: dotted;\n  }\n\n  .md\\:border-none{\n    border-style: none;\n  }\n\n  .md\\:border-0{\n    border-width: 0;\n  }\n\n  .md\\:border-2{\n    border-width: 2px;\n  }\n\n  .md\\:border-4{\n    border-width: 4px;\n  }\n\n  .md\\:border-8{\n    border-width: 8px;\n  }\n\n  .md\\:border{\n    border-width: 1px;\n  }\n\n  .md\\:border-t-0{\n    border-top-width: 0;\n  }\n\n  .md\\:border-r-0{\n    border-right-width: 0;\n  }\n\n  .md\\:border-b-0{\n    border-bottom-width: 0;\n  }\n\n  .md\\:border-l-0{\n    border-left-width: 0;\n  }\n\n  .md\\:border-t-2{\n    border-top-width: 2px;\n  }\n\n  .md\\:border-r-2{\n    border-right-width: 2px;\n  }\n\n  .md\\:border-b-2{\n    border-bottom-width: 2px;\n  }\n\n  .md\\:border-l-2{\n    border-left-width: 2px;\n  }\n\n  .md\\:border-t-4{\n    border-top-width: 4px;\n  }\n\n  .md\\:border-r-4{\n    border-right-width: 4px;\n  }\n\n  .md\\:border-b-4{\n    border-bottom-width: 4px;\n  }\n\n  .md\\:border-l-4{\n    border-left-width: 4px;\n  }\n\n  .md\\:border-t-8{\n    border-top-width: 8px;\n  }\n\n  .md\\:border-r-8{\n    border-right-width: 8px;\n  }\n\n  .md\\:border-b-8{\n    border-bottom-width: 8px;\n  }\n\n  .md\\:border-l-8{\n    border-left-width: 8px;\n  }\n\n  .md\\:border-t{\n    border-top-width: 1px;\n  }\n\n  .md\\:border-r{\n    border-right-width: 1px;\n  }\n\n  .md\\:border-b{\n    border-bottom-width: 1px;\n  }\n\n  .md\\:border-l{\n    border-left-width: 1px;\n  }\n\n  .md\\:cursor-auto{\n    cursor: auto;\n  }\n\n  .md\\:cursor-default{\n    cursor: default;\n  }\n\n  .md\\:cursor-pointer{\n    cursor: pointer;\n  }\n\n  .md\\:cursor-wait{\n    cursor: wait;\n  }\n\n  .md\\:cursor-text{\n    cursor: text;\n  }\n\n  .md\\:cursor-move{\n    cursor: move;\n  }\n\n  .md\\:cursor-not-allowed{\n    cursor: not-allowed;\n  }\n\n  .md\\:block{\n    display: block;\n  }\n\n  .md\\:inline-block{\n    display: inline-block;\n  }\n\n  .md\\:inline{\n    display: inline;\n  }\n\n  .md\\:flex{\n    display: flex;\n  }\n\n  .md\\:inline-flex{\n    display: inline-flex;\n  }\n\n  .md\\:table{\n    display: table;\n  }\n\n  .md\\:table-row{\n    display: table-row;\n  }\n\n  .md\\:table-cell{\n    display: table-cell;\n  }\n\n  .md\\:hidden{\n    display: none;\n  }\n\n  .md\\:flex-row{\n    flex-direction: row;\n  }\n\n  .md\\:flex-row-reverse{\n    flex-direction: row-reverse;\n  }\n\n  .md\\:flex-col{\n    flex-direction: column;\n  }\n\n  .md\\:flex-col-reverse{\n    flex-direction: column-reverse;\n  }\n\n  .md\\:flex-wrap{\n    flex-wrap: wrap;\n  }\n\n  .md\\:flex-wrap-reverse{\n    flex-wrap: wrap-reverse;\n  }\n\n  .md\\:flex-no-wrap{\n    flex-wrap: nowrap;\n  }\n\n  .md\\:items-start{\n    align-items: flex-start;\n  }\n\n  .md\\:items-end{\n    align-items: flex-end;\n  }\n\n  .md\\:items-center{\n    align-items: center;\n  }\n\n  .md\\:items-baseline{\n    align-items: baseline;\n  }\n\n  .md\\:items-stretch{\n    align-items: stretch;\n  }\n\n  .md\\:self-auto{\n    align-self: auto;\n  }\n\n  .md\\:self-start{\n    align-self: flex-start;\n  }\n\n  .md\\:self-end{\n    align-self: flex-end;\n  }\n\n  .md\\:self-center{\n    align-self: center;\n  }\n\n  .md\\:self-stretch{\n    align-self: stretch;\n  }\n\n  .md\\:justify-start{\n    justify-content: flex-start;\n  }\n\n  .md\\:justify-end{\n    justify-content: flex-end;\n  }\n\n  .md\\:justify-center{\n    justify-content: center;\n  }\n\n  .md\\:justify-between{\n    justify-content: space-between;\n  }\n\n  .md\\:justify-around{\n    justify-content: space-around;\n  }\n\n  .md\\:content-center{\n    align-content: center;\n  }\n\n  .md\\:content-start{\n    align-content: flex-start;\n  }\n\n  .md\\:content-end{\n    align-content: flex-end;\n  }\n\n  .md\\:content-between{\n    align-content: space-between;\n  }\n\n  .md\\:content-around{\n    align-content: space-around;\n  }\n\n  .md\\:flex-1{\n    flex: 1 1 0%;\n  }\n\n  .md\\:flex-auto{\n    flex: 1 1 auto;\n  }\n\n  .md\\:flex-initial{\n    flex: 0 1 auto;\n  }\n\n  .md\\:flex-none{\n    flex: none;\n  }\n\n  .md\\:flex-grow-0{\n    flex-grow: 0;\n  }\n\n  .md\\:flex-grow{\n    flex-grow: 1;\n  }\n\n  .md\\:flex-shrink-0{\n    flex-shrink: 0;\n  }\n\n  .md\\:flex-shrink{\n    flex-shrink: 1;\n  }\n\n  .md\\:order-1{\n    order: 1;\n  }\n\n  .md\\:order-2{\n    order: 2;\n  }\n\n  .md\\:order-3{\n    order: 3;\n  }\n\n  .md\\:order-4{\n    order: 4;\n  }\n\n  .md\\:order-5{\n    order: 5;\n  }\n\n  .md\\:order-6{\n    order: 6;\n  }\n\n  .md\\:order-7{\n    order: 7;\n  }\n\n  .md\\:order-8{\n    order: 8;\n  }\n\n  .md\\:order-9{\n    order: 9;\n  }\n\n  .md\\:order-10{\n    order: 10;\n  }\n\n  .md\\:order-11{\n    order: 11;\n  }\n\n  .md\\:order-12{\n    order: 12;\n  }\n\n  .md\\:order-first{\n    order: -9999;\n  }\n\n  .md\\:order-last{\n    order: 9999;\n  }\n\n  .md\\:order-none{\n    order: 0;\n  }\n\n  .md\\:float-right{\n    float: right;\n  }\n\n  .md\\:float-left{\n    float: left;\n  }\n\n  .md\\:float-none{\n    float: none;\n  }\n\n  .md\\:clearfix:after{\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n\n  .md\\:font-sans{\n    font-family: Source Sans Pro, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  }\n\n  .md\\:font-serif{\n    font-family: Georgia, Cambria, \"Times New Roman\", Times, serif;\n  }\n\n  .md\\:font-mono{\n    font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  }\n\n  .md\\:font-hairline{\n    font-weight: 100;\n  }\n\n  .md\\:font-thin{\n    font-weight: 200;\n  }\n\n  .md\\:font-light{\n    font-weight: 300;\n  }\n\n  .md\\:font-normal{\n    font-weight: 400;\n  }\n\n  .md\\:font-medium{\n    font-weight: 500;\n  }\n\n  .md\\:font-semibold{\n    font-weight: 600;\n  }\n\n  .md\\:font-bold{\n    font-weight: 700;\n  }\n\n  .md\\:font-extrabold{\n    font-weight: 800;\n  }\n\n  .md\\:font-black{\n    font-weight: 900;\n  }\n\n  .md\\:hover\\:font-hairline:hover{\n    font-weight: 100;\n  }\n\n  .md\\:hover\\:font-thin:hover{\n    font-weight: 200;\n  }\n\n  .md\\:hover\\:font-light:hover{\n    font-weight: 300;\n  }\n\n  .md\\:hover\\:font-normal:hover{\n    font-weight: 400;\n  }\n\n  .md\\:hover\\:font-medium:hover{\n    font-weight: 500;\n  }\n\n  .md\\:hover\\:font-semibold:hover{\n    font-weight: 600;\n  }\n\n  .md\\:hover\\:font-bold:hover{\n    font-weight: 700;\n  }\n\n  .md\\:hover\\:font-extrabold:hover{\n    font-weight: 800;\n  }\n\n  .md\\:hover\\:font-black:hover{\n    font-weight: 900;\n  }\n\n  .md\\:focus\\:font-hairline:focus{\n    font-weight: 100;\n  }\n\n  .md\\:focus\\:font-thin:focus{\n    font-weight: 200;\n  }\n\n  .md\\:focus\\:font-light:focus{\n    font-weight: 300;\n  }\n\n  .md\\:focus\\:font-normal:focus{\n    font-weight: 400;\n  }\n\n  .md\\:focus\\:font-medium:focus{\n    font-weight: 500;\n  }\n\n  .md\\:focus\\:font-semibold:focus{\n    font-weight: 600;\n  }\n\n  .md\\:focus\\:font-bold:focus{\n    font-weight: 700;\n  }\n\n  .md\\:focus\\:font-extrabold:focus{\n    font-weight: 800;\n  }\n\n  .md\\:focus\\:font-black:focus{\n    font-weight: 900;\n  }\n\n  .md\\:h-0{\n    height: 0;\n  }\n\n  .md\\:h-1{\n    height: 0.25rem;\n  }\n\n  .md\\:h-2{\n    height: 0.5rem;\n  }\n\n  .md\\:h-3{\n    height: 0.75rem;\n  }\n\n  .md\\:h-4{\n    height: 1rem;\n  }\n\n  .md\\:h-5{\n    height: 1.25rem;\n  }\n\n  .md\\:h-6{\n    height: 1.5rem;\n  }\n\n  .md\\:h-8{\n    height: 2rem;\n  }\n\n  .md\\:h-10{\n    height: 2.5rem;\n  }\n\n  .md\\:h-12{\n    height: 3rem;\n  }\n\n  .md\\:h-16{\n    height: 4rem;\n  }\n\n  .md\\:h-20{\n    height: 5rem;\n  }\n\n  .md\\:h-24{\n    height: 6rem;\n  }\n\n  .md\\:h-32{\n    height: 8rem;\n  }\n\n  .md\\:h-40{\n    height: 10rem;\n  }\n\n  .md\\:h-48{\n    height: 12rem;\n  }\n\n  .md\\:h-56{\n    height: 14rem;\n  }\n\n  .md\\:h-64{\n    height: 16rem;\n  }\n\n  .md\\:h-auto{\n    height: auto;\n  }\n\n  .md\\:h-px{\n    height: 1px;\n  }\n\n  .md\\:h-full{\n    height: 100%;\n  }\n\n  .md\\:h-screen{\n    height: 100vh;\n  }\n\n  .md\\:leading-none{\n    line-height: 1;\n  }\n\n  .md\\:leading-tight{\n    line-height: 1.25;\n  }\n\n  .md\\:leading-snug{\n    line-height: 1.375;\n  }\n\n  .md\\:leading-normal{\n    line-height: 1.5;\n  }\n\n  .md\\:leading-relaxed{\n    line-height: 1.625;\n  }\n\n  .md\\:leading-loose{\n    line-height: 2;\n  }\n\n  .md\\:list-inside{\n    list-style-position: inside;\n  }\n\n  .md\\:list-outside{\n    list-style-position: outside;\n  }\n\n  .md\\:list-none{\n    list-style-type: none;\n  }\n\n  .md\\:list-disc{\n    list-style-type: disc;\n  }\n\n  .md\\:list-decimal{\n    list-style-type: decimal;\n  }\n\n  .md\\:m-0{\n    margin: 0;\n  }\n\n  .md\\:m-1{\n    margin: 0.25rem;\n  }\n\n  .md\\:m-2{\n    margin: 0.5rem;\n  }\n\n  .md\\:m-3{\n    margin: 0.75rem;\n  }\n\n  .md\\:m-4{\n    margin: 1rem;\n  }\n\n  .md\\:m-5{\n    margin: 1.25rem;\n  }\n\n  .md\\:m-6{\n    margin: 1.5rem;\n  }\n\n  .md\\:m-8{\n    margin: 2rem;\n  }\n\n  .md\\:m-10{\n    margin: 2.5rem;\n  }\n\n  .md\\:m-12{\n    margin: 3rem;\n  }\n\n  .md\\:m-16{\n    margin: 4rem;\n  }\n\n  .md\\:m-20{\n    margin: 5rem;\n  }\n\n  .md\\:m-24{\n    margin: 6rem;\n  }\n\n  .md\\:m-32{\n    margin: 8rem;\n  }\n\n  .md\\:m-40{\n    margin: 10rem;\n  }\n\n  .md\\:m-48{\n    margin: 12rem;\n  }\n\n  .md\\:m-56{\n    margin: 14rem;\n  }\n\n  .md\\:m-64{\n    margin: 16rem;\n  }\n\n  .md\\:m-auto{\n    margin: auto;\n  }\n\n  .md\\:m-px{\n    margin: 1px;\n  }\n\n  .md\\:-m-1{\n    margin: -0.25rem;\n  }\n\n  .md\\:-m-2{\n    margin: -0.5rem;\n  }\n\n  .md\\:-m-3{\n    margin: -0.75rem;\n  }\n\n  .md\\:-m-4{\n    margin: -1rem;\n  }\n\n  .md\\:-m-5{\n    margin: -1.25rem;\n  }\n\n  .md\\:-m-6{\n    margin: -1.5rem;\n  }\n\n  .md\\:-m-8{\n    margin: -2rem;\n  }\n\n  .md\\:-m-10{\n    margin: -2.5rem;\n  }\n\n  .md\\:-m-12{\n    margin: -3rem;\n  }\n\n  .md\\:-m-16{\n    margin: -4rem;\n  }\n\n  .md\\:-m-20{\n    margin: -5rem;\n  }\n\n  .md\\:-m-24{\n    margin: -6rem;\n  }\n\n  .md\\:-m-32{\n    margin: -8rem;\n  }\n\n  .md\\:-m-40{\n    margin: -10rem;\n  }\n\n  .md\\:-m-48{\n    margin: -12rem;\n  }\n\n  .md\\:-m-56{\n    margin: -14rem;\n  }\n\n  .md\\:-m-64{\n    margin: -16rem;\n  }\n\n  .md\\:-m-px{\n    margin: -1px;\n  }\n\n  .md\\:my-0{\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .md\\:mx-0{\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  .md\\:my-1{\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem;\n  }\n\n  .md\\:mx-1{\n    margin-left: 0.25rem;\n    margin-right: 0.25rem;\n  }\n\n  .md\\:my-2{\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n  }\n\n  .md\\:mx-2{\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n\n  .md\\:my-3{\n    margin-top: 0.75rem;\n    margin-bottom: 0.75rem;\n  }\n\n  .md\\:mx-3{\n    margin-left: 0.75rem;\n    margin-right: 0.75rem;\n  }\n\n  .md\\:my-4{\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  .md\\:mx-4{\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n\n  .md\\:my-5{\n    margin-top: 1.25rem;\n    margin-bottom: 1.25rem;\n  }\n\n  .md\\:mx-5{\n    margin-left: 1.25rem;\n    margin-right: 1.25rem;\n  }\n\n  .md\\:my-6{\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem;\n  }\n\n  .md\\:mx-6{\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n\n  .md\\:my-8{\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n  }\n\n  .md\\:mx-8{\n    margin-left: 2rem;\n    margin-right: 2rem;\n  }\n\n  .md\\:my-10{\n    margin-top: 2.5rem;\n    margin-bottom: 2.5rem;\n  }\n\n  .md\\:mx-10{\n    margin-left: 2.5rem;\n    margin-right: 2.5rem;\n  }\n\n  .md\\:my-12{\n    margin-top: 3rem;\n    margin-bottom: 3rem;\n  }\n\n  .md\\:mx-12{\n    margin-left: 3rem;\n    margin-right: 3rem;\n  }\n\n  .md\\:my-16{\n    margin-top: 4rem;\n    margin-bottom: 4rem;\n  }\n\n  .md\\:mx-16{\n    margin-left: 4rem;\n    margin-right: 4rem;\n  }\n\n  .md\\:my-20{\n    margin-top: 5rem;\n    margin-bottom: 5rem;\n  }\n\n  .md\\:mx-20{\n    margin-left: 5rem;\n    margin-right: 5rem;\n  }\n\n  .md\\:my-24{\n    margin-top: 6rem;\n    margin-bottom: 6rem;\n  }\n\n  .md\\:mx-24{\n    margin-left: 6rem;\n    margin-right: 6rem;\n  }\n\n  .md\\:my-32{\n    margin-top: 8rem;\n    margin-bottom: 8rem;\n  }\n\n  .md\\:mx-32{\n    margin-left: 8rem;\n    margin-right: 8rem;\n  }\n\n  .md\\:my-40{\n    margin-top: 10rem;\n    margin-bottom: 10rem;\n  }\n\n  .md\\:mx-40{\n    margin-left: 10rem;\n    margin-right: 10rem;\n  }\n\n  .md\\:my-48{\n    margin-top: 12rem;\n    margin-bottom: 12rem;\n  }\n\n  .md\\:mx-48{\n    margin-left: 12rem;\n    margin-right: 12rem;\n  }\n\n  .md\\:my-56{\n    margin-top: 14rem;\n    margin-bottom: 14rem;\n  }\n\n  .md\\:mx-56{\n    margin-left: 14rem;\n    margin-right: 14rem;\n  }\n\n  .md\\:my-64{\n    margin-top: 16rem;\n    margin-bottom: 16rem;\n  }\n\n  .md\\:mx-64{\n    margin-left: 16rem;\n    margin-right: 16rem;\n  }\n\n  .md\\:my-auto{\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n\n  .md\\:mx-auto{\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .md\\:my-px{\n    margin-top: 1px;\n    margin-bottom: 1px;\n  }\n\n  .md\\:mx-px{\n    margin-left: 1px;\n    margin-right: 1px;\n  }\n\n  .md\\:-my-1{\n    margin-top: -0.25rem;\n    margin-bottom: -0.25rem;\n  }\n\n  .md\\:-mx-1{\n    margin-left: -0.25rem;\n    margin-right: -0.25rem;\n  }\n\n  .md\\:-my-2{\n    margin-top: -0.5rem;\n    margin-bottom: -0.5rem;\n  }\n\n  .md\\:-mx-2{\n    margin-left: -0.5rem;\n    margin-right: -0.5rem;\n  }\n\n  .md\\:-my-3{\n    margin-top: -0.75rem;\n    margin-bottom: -0.75rem;\n  }\n\n  .md\\:-mx-3{\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n  }\n\n  .md\\:-my-4{\n    margin-top: -1rem;\n    margin-bottom: -1rem;\n  }\n\n  .md\\:-mx-4{\n    margin-left: -1rem;\n    margin-right: -1rem;\n  }\n\n  .md\\:-my-5{\n    margin-top: -1.25rem;\n    margin-bottom: -1.25rem;\n  }\n\n  .md\\:-mx-5{\n    margin-left: -1.25rem;\n    margin-right: -1.25rem;\n  }\n\n  .md\\:-my-6{\n    margin-top: -1.5rem;\n    margin-bottom: -1.5rem;\n  }\n\n  .md\\:-mx-6{\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n  }\n\n  .md\\:-my-8{\n    margin-top: -2rem;\n    margin-bottom: -2rem;\n  }\n\n  .md\\:-mx-8{\n    margin-left: -2rem;\n    margin-right: -2rem;\n  }\n\n  .md\\:-my-10{\n    margin-top: -2.5rem;\n    margin-bottom: -2.5rem;\n  }\n\n  .md\\:-mx-10{\n    margin-left: -2.5rem;\n    margin-right: -2.5rem;\n  }\n\n  .md\\:-my-12{\n    margin-top: -3rem;\n    margin-bottom: -3rem;\n  }\n\n  .md\\:-mx-12{\n    margin-left: -3rem;\n    margin-right: -3rem;\n  }\n\n  .md\\:-my-16{\n    margin-top: -4rem;\n    margin-bottom: -4rem;\n  }\n\n  .md\\:-mx-16{\n    margin-left: -4rem;\n    margin-right: -4rem;\n  }\n\n  .md\\:-my-20{\n    margin-top: -5rem;\n    margin-bottom: -5rem;\n  }\n\n  .md\\:-mx-20{\n    margin-left: -5rem;\n    margin-right: -5rem;\n  }\n\n  .md\\:-my-24{\n    margin-top: -6rem;\n    margin-bottom: -6rem;\n  }\n\n  .md\\:-mx-24{\n    margin-left: -6rem;\n    margin-right: -6rem;\n  }\n\n  .md\\:-my-32{\n    margin-top: -8rem;\n    margin-bottom: -8rem;\n  }\n\n  .md\\:-mx-32{\n    margin-left: -8rem;\n    margin-right: -8rem;\n  }\n\n  .md\\:-my-40{\n    margin-top: -10rem;\n    margin-bottom: -10rem;\n  }\n\n  .md\\:-mx-40{\n    margin-left: -10rem;\n    margin-right: -10rem;\n  }\n\n  .md\\:-my-48{\n    margin-top: -12rem;\n    margin-bottom: -12rem;\n  }\n\n  .md\\:-mx-48{\n    margin-left: -12rem;\n    margin-right: -12rem;\n  }\n\n  .md\\:-my-56{\n    margin-top: -14rem;\n    margin-bottom: -14rem;\n  }\n\n  .md\\:-mx-56{\n    margin-left: -14rem;\n    margin-right: -14rem;\n  }\n\n  .md\\:-my-64{\n    margin-top: -16rem;\n    margin-bottom: -16rem;\n  }\n\n  .md\\:-mx-64{\n    margin-left: -16rem;\n    margin-right: -16rem;\n  }\n\n  .md\\:-my-px{\n    margin-top: -1px;\n    margin-bottom: -1px;\n  }\n\n  .md\\:-mx-px{\n    margin-left: -1px;\n    margin-right: -1px;\n  }\n\n  .md\\:mt-0{\n    margin-top: 0;\n  }\n\n  .md\\:mr-0{\n    margin-right: 0;\n  }\n\n  .md\\:mb-0{\n    margin-bottom: 0;\n  }\n\n  .md\\:ml-0{\n    margin-left: 0;\n  }\n\n  .md\\:mt-1{\n    margin-top: 0.25rem;\n  }\n\n  .md\\:mr-1{\n    margin-right: 0.25rem;\n  }\n\n  .md\\:mb-1{\n    margin-bottom: 0.25rem;\n  }\n\n  .md\\:ml-1{\n    margin-left: 0.25rem;\n  }\n\n  .md\\:mt-2{\n    margin-top: 0.5rem;\n  }\n\n  .md\\:mr-2{\n    margin-right: 0.5rem;\n  }\n\n  .md\\:mb-2{\n    margin-bottom: 0.5rem;\n  }\n\n  .md\\:ml-2{\n    margin-left: 0.5rem;\n  }\n\n  .md\\:mt-3{\n    margin-top: 0.75rem;\n  }\n\n  .md\\:mr-3{\n    margin-right: 0.75rem;\n  }\n\n  .md\\:mb-3{\n    margin-bottom: 0.75rem;\n  }\n\n  .md\\:ml-3{\n    margin-left: 0.75rem;\n  }\n\n  .md\\:mt-4{\n    margin-top: 1rem;\n  }\n\n  .md\\:mr-4{\n    margin-right: 1rem;\n  }\n\n  .md\\:mb-4{\n    margin-bottom: 1rem;\n  }\n\n  .md\\:ml-4{\n    margin-left: 1rem;\n  }\n\n  .md\\:mt-5{\n    margin-top: 1.25rem;\n  }\n\n  .md\\:mr-5{\n    margin-right: 1.25rem;\n  }\n\n  .md\\:mb-5{\n    margin-bottom: 1.25rem;\n  }\n\n  .md\\:ml-5{\n    margin-left: 1.25rem;\n  }\n\n  .md\\:mt-6{\n    margin-top: 1.5rem;\n  }\n\n  .md\\:mr-6{\n    margin-right: 1.5rem;\n  }\n\n  .md\\:mb-6{\n    margin-bottom: 1.5rem;\n  }\n\n  .md\\:ml-6{\n    margin-left: 1.5rem;\n  }\n\n  .md\\:mt-8{\n    margin-top: 2rem;\n  }\n\n  .md\\:mr-8{\n    margin-right: 2rem;\n  }\n\n  .md\\:mb-8{\n    margin-bottom: 2rem;\n  }\n\n  .md\\:ml-8{\n    margin-left: 2rem;\n  }\n\n  .md\\:mt-10{\n    margin-top: 2.5rem;\n  }\n\n  .md\\:mr-10{\n    margin-right: 2.5rem;\n  }\n\n  .md\\:mb-10{\n    margin-bottom: 2.5rem;\n  }\n\n  .md\\:ml-10{\n    margin-left: 2.5rem;\n  }\n\n  .md\\:mt-12{\n    margin-top: 3rem;\n  }\n\n  .md\\:mr-12{\n    margin-right: 3rem;\n  }\n\n  .md\\:mb-12{\n    margin-bottom: 3rem;\n  }\n\n  .md\\:ml-12{\n    margin-left: 3rem;\n  }\n\n  .md\\:mt-16{\n    margin-top: 4rem;\n  }\n\n  .md\\:mr-16{\n    margin-right: 4rem;\n  }\n\n  .md\\:mb-16{\n    margin-bottom: 4rem;\n  }\n\n  .md\\:ml-16{\n    margin-left: 4rem;\n  }\n\n  .md\\:mt-20{\n    margin-top: 5rem;\n  }\n\n  .md\\:mr-20{\n    margin-right: 5rem;\n  }\n\n  .md\\:mb-20{\n    margin-bottom: 5rem;\n  }\n\n  .md\\:ml-20{\n    margin-left: 5rem;\n  }\n\n  .md\\:mt-24{\n    margin-top: 6rem;\n  }\n\n  .md\\:mr-24{\n    margin-right: 6rem;\n  }\n\n  .md\\:mb-24{\n    margin-bottom: 6rem;\n  }\n\n  .md\\:ml-24{\n    margin-left: 6rem;\n  }\n\n  .md\\:mt-32{\n    margin-top: 8rem;\n  }\n\n  .md\\:mr-32{\n    margin-right: 8rem;\n  }\n\n  .md\\:mb-32{\n    margin-bottom: 8rem;\n  }\n\n  .md\\:ml-32{\n    margin-left: 8rem;\n  }\n\n  .md\\:mt-40{\n    margin-top: 10rem;\n  }\n\n  .md\\:mr-40{\n    margin-right: 10rem;\n  }\n\n  .md\\:mb-40{\n    margin-bottom: 10rem;\n  }\n\n  .md\\:ml-40{\n    margin-left: 10rem;\n  }\n\n  .md\\:mt-48{\n    margin-top: 12rem;\n  }\n\n  .md\\:mr-48{\n    margin-right: 12rem;\n  }\n\n  .md\\:mb-48{\n    margin-bottom: 12rem;\n  }\n\n  .md\\:ml-48{\n    margin-left: 12rem;\n  }\n\n  .md\\:mt-56{\n    margin-top: 14rem;\n  }\n\n  .md\\:mr-56{\n    margin-right: 14rem;\n  }\n\n  .md\\:mb-56{\n    margin-bottom: 14rem;\n  }\n\n  .md\\:ml-56{\n    margin-left: 14rem;\n  }\n\n  .md\\:mt-64{\n    margin-top: 16rem;\n  }\n\n  .md\\:mr-64{\n    margin-right: 16rem;\n  }\n\n  .md\\:mb-64{\n    margin-bottom: 16rem;\n  }\n\n  .md\\:ml-64{\n    margin-left: 16rem;\n  }\n\n  .md\\:mt-auto{\n    margin-top: auto;\n  }\n\n  .md\\:mr-auto{\n    margin-right: auto;\n  }\n\n  .md\\:mb-auto{\n    margin-bottom: auto;\n  }\n\n  .md\\:ml-auto{\n    margin-left: auto;\n  }\n\n  .md\\:mt-px{\n    margin-top: 1px;\n  }\n\n  .md\\:mr-px{\n    margin-right: 1px;\n  }\n\n  .md\\:mb-px{\n    margin-bottom: 1px;\n  }\n\n  .md\\:ml-px{\n    margin-left: 1px;\n  }\n\n  .md\\:-mt-1{\n    margin-top: -0.25rem;\n  }\n\n  .md\\:-mr-1{\n    margin-right: -0.25rem;\n  }\n\n  .md\\:-mb-1{\n    margin-bottom: -0.25rem;\n  }\n\n  .md\\:-ml-1{\n    margin-left: -0.25rem;\n  }\n\n  .md\\:-mt-2{\n    margin-top: -0.5rem;\n  }\n\n  .md\\:-mr-2{\n    margin-right: -0.5rem;\n  }\n\n  .md\\:-mb-2{\n    margin-bottom: -0.5rem;\n  }\n\n  .md\\:-ml-2{\n    margin-left: -0.5rem;\n  }\n\n  .md\\:-mt-3{\n    margin-top: -0.75rem;\n  }\n\n  .md\\:-mr-3{\n    margin-right: -0.75rem;\n  }\n\n  .md\\:-mb-3{\n    margin-bottom: -0.75rem;\n  }\n\n  .md\\:-ml-3{\n    margin-left: -0.75rem;\n  }\n\n  .md\\:-mt-4{\n    margin-top: -1rem;\n  }\n\n  .md\\:-mr-4{\n    margin-right: -1rem;\n  }\n\n  .md\\:-mb-4{\n    margin-bottom: -1rem;\n  }\n\n  .md\\:-ml-4{\n    margin-left: -1rem;\n  }\n\n  .md\\:-mt-5{\n    margin-top: -1.25rem;\n  }\n\n  .md\\:-mr-5{\n    margin-right: -1.25rem;\n  }\n\n  .md\\:-mb-5{\n    margin-bottom: -1.25rem;\n  }\n\n  .md\\:-ml-5{\n    margin-left: -1.25rem;\n  }\n\n  .md\\:-mt-6{\n    margin-top: -1.5rem;\n  }\n\n  .md\\:-mr-6{\n    margin-right: -1.5rem;\n  }\n\n  .md\\:-mb-6{\n    margin-bottom: -1.5rem;\n  }\n\n  .md\\:-ml-6{\n    margin-left: -1.5rem;\n  }\n\n  .md\\:-mt-8{\n    margin-top: -2rem;\n  }\n\n  .md\\:-mr-8{\n    margin-right: -2rem;\n  }\n\n  .md\\:-mb-8{\n    margin-bottom: -2rem;\n  }\n\n  .md\\:-ml-8{\n    margin-left: -2rem;\n  }\n\n  .md\\:-mt-10{\n    margin-top: -2.5rem;\n  }\n\n  .md\\:-mr-10{\n    margin-right: -2.5rem;\n  }\n\n  .md\\:-mb-10{\n    margin-bottom: -2.5rem;\n  }\n\n  .md\\:-ml-10{\n    margin-left: -2.5rem;\n  }\n\n  .md\\:-mt-12{\n    margin-top: -3rem;\n  }\n\n  .md\\:-mr-12{\n    margin-right: -3rem;\n  }\n\n  .md\\:-mb-12{\n    margin-bottom: -3rem;\n  }\n\n  .md\\:-ml-12{\n    margin-left: -3rem;\n  }\n\n  .md\\:-mt-16{\n    margin-top: -4rem;\n  }\n\n  .md\\:-mr-16{\n    margin-right: -4rem;\n  }\n\n  .md\\:-mb-16{\n    margin-bottom: -4rem;\n  }\n\n  .md\\:-ml-16{\n    margin-left: -4rem;\n  }\n\n  .md\\:-mt-20{\n    margin-top: -5rem;\n  }\n\n  .md\\:-mr-20{\n    margin-right: -5rem;\n  }\n\n  .md\\:-mb-20{\n    margin-bottom: -5rem;\n  }\n\n  .md\\:-ml-20{\n    margin-left: -5rem;\n  }\n\n  .md\\:-mt-24{\n    margin-top: -6rem;\n  }\n\n  .md\\:-mr-24{\n    margin-right: -6rem;\n  }\n\n  .md\\:-mb-24{\n    margin-bottom: -6rem;\n  }\n\n  .md\\:-ml-24{\n    margin-left: -6rem;\n  }\n\n  .md\\:-mt-32{\n    margin-top: -8rem;\n  }\n\n  .md\\:-mr-32{\n    margin-right: -8rem;\n  }\n\n  .md\\:-mb-32{\n    margin-bottom: -8rem;\n  }\n\n  .md\\:-ml-32{\n    margin-left: -8rem;\n  }\n\n  .md\\:-mt-40{\n    margin-top: -10rem;\n  }\n\n  .md\\:-mr-40{\n    margin-right: -10rem;\n  }\n\n  .md\\:-mb-40{\n    margin-bottom: -10rem;\n  }\n\n  .md\\:-ml-40{\n    margin-left: -10rem;\n  }\n\n  .md\\:-mt-48{\n    margin-top: -12rem;\n  }\n\n  .md\\:-mr-48{\n    margin-right: -12rem;\n  }\n\n  .md\\:-mb-48{\n    margin-bottom: -12rem;\n  }\n\n  .md\\:-ml-48{\n    margin-left: -12rem;\n  }\n\n  .md\\:-mt-56{\n    margin-top: -14rem;\n  }\n\n  .md\\:-mr-56{\n    margin-right: -14rem;\n  }\n\n  .md\\:-mb-56{\n    margin-bottom: -14rem;\n  }\n\n  .md\\:-ml-56{\n    margin-left: -14rem;\n  }\n\n  .md\\:-mt-64{\n    margin-top: -16rem;\n  }\n\n  .md\\:-mr-64{\n    margin-right: -16rem;\n  }\n\n  .md\\:-mb-64{\n    margin-bottom: -16rem;\n  }\n\n  .md\\:-ml-64{\n    margin-left: -16rem;\n  }\n\n  .md\\:-mt-px{\n    margin-top: -1px;\n  }\n\n  .md\\:-mr-px{\n    margin-right: -1px;\n  }\n\n  .md\\:-mb-px{\n    margin-bottom: -1px;\n  }\n\n  .md\\:-ml-px{\n    margin-left: -1px;\n  }\n\n  .md\\:max-h-full{\n    max-height: 100%;\n  }\n\n  .md\\:max-h-screen{\n    max-height: 100vh;\n  }\n\n  .md\\:max-w-xs{\n    max-width: 20rem;\n  }\n\n  .md\\:max-w-sm{\n    max-width: 24rem;\n  }\n\n  .md\\:max-w-md{\n    max-width: 28rem;\n  }\n\n  .md\\:max-w-lg{\n    max-width: 32rem;\n  }\n\n  .md\\:max-w-xl{\n    max-width: 36rem;\n  }\n\n  .md\\:max-w-2xl{\n    max-width: 42rem;\n  }\n\n  .md\\:max-w-3xl{\n    max-width: 48rem;\n  }\n\n  .md\\:max-w-4xl{\n    max-width: 56rem;\n  }\n\n  .md\\:max-w-5xl{\n    max-width: 64rem;\n  }\n\n  .md\\:max-w-6xl{\n    max-width: 72rem;\n  }\n\n  .md\\:max-w-full{\n    max-width: 100%;\n  }\n\n  .md\\:min-h-0{\n    min-height: 0;\n  }\n\n  .md\\:min-h-full{\n    min-height: 100%;\n  }\n\n  .md\\:min-h-screen{\n    min-height: 100vh;\n  }\n\n  .md\\:min-w-0{\n    min-width: 0;\n  }\n\n  .md\\:min-w-full{\n    min-width: 100%;\n  }\n\n  .md\\:object-contain{\n    -o-object-fit: contain;\n       object-fit: contain;\n  }\n\n  .md\\:object-cover{\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n\n  .md\\:object-fill{\n    -o-object-fit: fill;\n       object-fit: fill;\n  }\n\n  .md\\:object-none{\n    -o-object-fit: none;\n       object-fit: none;\n  }\n\n  .md\\:object-scale-down{\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n  }\n\n  .md\\:object-bottom{\n    -o-object-position: bottom;\n       object-position: bottom;\n  }\n\n  .md\\:object-center{\n    -o-object-position: center;\n       object-position: center;\n  }\n\n  .md\\:object-left{\n    -o-object-position: left;\n       object-position: left;\n  }\n\n  .md\\:object-left-bottom{\n    -o-object-position: left bottom;\n       object-position: left bottom;\n  }\n\n  .md\\:object-left-top{\n    -o-object-position: left top;\n       object-position: left top;\n  }\n\n  .md\\:object-right{\n    -o-object-position: right;\n       object-position: right;\n  }\n\n  .md\\:object-right-bottom{\n    -o-object-position: right bottom;\n       object-position: right bottom;\n  }\n\n  .md\\:object-right-top{\n    -o-object-position: right top;\n       object-position: right top;\n  }\n\n  .md\\:object-top{\n    -o-object-position: top;\n       object-position: top;\n  }\n\n  .md\\:opacity-0{\n    opacity: 0;\n  }\n\n  .md\\:opacity-25{\n    opacity: 0.25;\n  }\n\n  .md\\:opacity-50{\n    opacity: 0.5;\n  }\n\n  .md\\:opacity-75{\n    opacity: 0.75;\n  }\n\n  .md\\:opacity-100{\n    opacity: 1;\n  }\n\n  .md\\:outline-none{\n    outline: 0;\n  }\n\n  .md\\:focus\\:outline-none:focus{\n    outline: 0;\n  }\n\n  .md\\:overflow-auto{\n    overflow: auto;\n  }\n\n  .md\\:overflow-hidden{\n    overflow: hidden;\n  }\n\n  .md\\:overflow-visible{\n    overflow: visible;\n  }\n\n  .md\\:overflow-scroll{\n    overflow: scroll;\n  }\n\n  .md\\:overflow-x-auto{\n    overflow-x: auto;\n  }\n\n  .md\\:overflow-y-auto{\n    overflow-y: auto;\n  }\n\n  .md\\:overflow-x-hidden{\n    overflow-x: hidden;\n  }\n\n  .md\\:overflow-y-hidden{\n    overflow-y: hidden;\n  }\n\n  .md\\:overflow-x-visible{\n    overflow-x: visible;\n  }\n\n  .md\\:overflow-y-visible{\n    overflow-y: visible;\n  }\n\n  .md\\:overflow-x-scroll{\n    overflow-x: scroll;\n  }\n\n  .md\\:overflow-y-scroll{\n    overflow-y: scroll;\n  }\n\n  .md\\:scrolling-touch{\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .md\\:scrolling-auto{\n    -webkit-overflow-scrolling: auto;\n  }\n\n  .md\\:p-0{\n    padding: 0;\n  }\n\n  .md\\:p-1{\n    padding: 0.25rem;\n  }\n\n  .md\\:p-2{\n    padding: 0.5rem;\n  }\n\n  .md\\:p-3{\n    padding: 0.75rem;\n  }\n\n  .md\\:p-4{\n    padding: 1rem;\n  }\n\n  .md\\:p-5{\n    padding: 1.25rem;\n  }\n\n  .md\\:p-6{\n    padding: 1.5rem;\n  }\n\n  .md\\:p-8{\n    padding: 2rem;\n  }\n\n  .md\\:p-10{\n    padding: 2.5rem;\n  }\n\n  .md\\:p-12{\n    padding: 3rem;\n  }\n\n  .md\\:p-16{\n    padding: 4rem;\n  }\n\n  .md\\:p-20{\n    padding: 5rem;\n  }\n\n  .md\\:p-24{\n    padding: 6rem;\n  }\n\n  .md\\:p-32{\n    padding: 8rem;\n  }\n\n  .md\\:p-40{\n    padding: 10rem;\n  }\n\n  .md\\:p-48{\n    padding: 12rem;\n  }\n\n  .md\\:p-56{\n    padding: 14rem;\n  }\n\n  .md\\:p-64{\n    padding: 16rem;\n  }\n\n  .md\\:p-px{\n    padding: 1px;\n  }\n\n  .md\\:py-0{\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  .md\\:px-0{\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .md\\:py-1{\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n  }\n\n  .md\\:px-1{\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n  }\n\n  .md\\:py-2{\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n  }\n\n  .md\\:px-2{\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n\n  .md\\:py-3{\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n  }\n\n  .md\\:px-3{\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  }\n\n  .md\\:py-4{\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .md\\:px-4{\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  .md\\:py-5{\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem;\n  }\n\n  .md\\:px-5{\n    padding-left: 1.25rem;\n    padding-right: 1.25rem;\n  }\n\n  .md\\:py-6{\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n\n  .md\\:px-6{\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .md\\:py-8{\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n  }\n\n  .md\\:px-8{\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .md\\:py-10{\n    padding-top: 2.5rem;\n    padding-bottom: 2.5rem;\n  }\n\n  .md\\:px-10{\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n  }\n\n  .md\\:py-12{\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n  }\n\n  .md\\:px-12{\n    padding-left: 3rem;\n    padding-right: 3rem;\n  }\n\n  .md\\:py-16{\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n  }\n\n  .md\\:px-16{\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n\n  .md\\:py-20{\n    padding-top: 5rem;\n    padding-bottom: 5rem;\n  }\n\n  .md\\:px-20{\n    padding-left: 5rem;\n    padding-right: 5rem;\n  }\n\n  .md\\:py-24{\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n\n  .md\\:px-24{\n    padding-left: 6rem;\n    padding-right: 6rem;\n  }\n\n  .md\\:py-32{\n    padding-top: 8rem;\n    padding-bottom: 8rem;\n  }\n\n  .md\\:px-32{\n    padding-left: 8rem;\n    padding-right: 8rem;\n  }\n\n  .md\\:py-40{\n    padding-top: 10rem;\n    padding-bottom: 10rem;\n  }\n\n  .md\\:px-40{\n    padding-left: 10rem;\n    padding-right: 10rem;\n  }\n\n  .md\\:py-48{\n    padding-top: 12rem;\n    padding-bottom: 12rem;\n  }\n\n  .md\\:px-48{\n    padding-left: 12rem;\n    padding-right: 12rem;\n  }\n\n  .md\\:py-56{\n    padding-top: 14rem;\n    padding-bottom: 14rem;\n  }\n\n  .md\\:px-56{\n    padding-left: 14rem;\n    padding-right: 14rem;\n  }\n\n  .md\\:py-64{\n    padding-top: 16rem;\n    padding-bottom: 16rem;\n  }\n\n  .md\\:px-64{\n    padding-left: 16rem;\n    padding-right: 16rem;\n  }\n\n  .md\\:py-px{\n    padding-top: 1px;\n    padding-bottom: 1px;\n  }\n\n  .md\\:px-px{\n    padding-left: 1px;\n    padding-right: 1px;\n  }\n\n  .md\\:pt-0{\n    padding-top: 0;\n  }\n\n  .md\\:pr-0{\n    padding-right: 0;\n  }\n\n  .md\\:pb-0{\n    padding-bottom: 0;\n  }\n\n  .md\\:pl-0{\n    padding-left: 0;\n  }\n\n  .md\\:pt-1{\n    padding-top: 0.25rem;\n  }\n\n  .md\\:pr-1{\n    padding-right: 0.25rem;\n  }\n\n  .md\\:pb-1{\n    padding-bottom: 0.25rem;\n  }\n\n  .md\\:pl-1{\n    padding-left: 0.25rem;\n  }\n\n  .md\\:pt-2{\n    padding-top: 0.5rem;\n  }\n\n  .md\\:pr-2{\n    padding-right: 0.5rem;\n  }\n\n  .md\\:pb-2{\n    padding-bottom: 0.5rem;\n  }\n\n  .md\\:pl-2{\n    padding-left: 0.5rem;\n  }\n\n  .md\\:pt-3{\n    padding-top: 0.75rem;\n  }\n\n  .md\\:pr-3{\n    padding-right: 0.75rem;\n  }\n\n  .md\\:pb-3{\n    padding-bottom: 0.75rem;\n  }\n\n  .md\\:pl-3{\n    padding-left: 0.75rem;\n  }\n\n  .md\\:pt-4{\n    padding-top: 1rem;\n  }\n\n  .md\\:pr-4{\n    padding-right: 1rem;\n  }\n\n  .md\\:pb-4{\n    padding-bottom: 1rem;\n  }\n\n  .md\\:pl-4{\n    padding-left: 1rem;\n  }\n\n  .md\\:pt-5{\n    padding-top: 1.25rem;\n  }\n\n  .md\\:pr-5{\n    padding-right: 1.25rem;\n  }\n\n  .md\\:pb-5{\n    padding-bottom: 1.25rem;\n  }\n\n  .md\\:pl-5{\n    padding-left: 1.25rem;\n  }\n\n  .md\\:pt-6{\n    padding-top: 1.5rem;\n  }\n\n  .md\\:pr-6{\n    padding-right: 1.5rem;\n  }\n\n  .md\\:pb-6{\n    padding-bottom: 1.5rem;\n  }\n\n  .md\\:pl-6{\n    padding-left: 1.5rem;\n  }\n\n  .md\\:pt-8{\n    padding-top: 2rem;\n  }\n\n  .md\\:pr-8{\n    padding-right: 2rem;\n  }\n\n  .md\\:pb-8{\n    padding-bottom: 2rem;\n  }\n\n  .md\\:pl-8{\n    padding-left: 2rem;\n  }\n\n  .md\\:pt-10{\n    padding-top: 2.5rem;\n  }\n\n  .md\\:pr-10{\n    padding-right: 2.5rem;\n  }\n\n  .md\\:pb-10{\n    padding-bottom: 2.5rem;\n  }\n\n  .md\\:pl-10{\n    padding-left: 2.5rem;\n  }\n\n  .md\\:pt-12{\n    padding-top: 3rem;\n  }\n\n  .md\\:pr-12{\n    padding-right: 3rem;\n  }\n\n  .md\\:pb-12{\n    padding-bottom: 3rem;\n  }\n\n  .md\\:pl-12{\n    padding-left: 3rem;\n  }\n\n  .md\\:pt-16{\n    padding-top: 4rem;\n  }\n\n  .md\\:pr-16{\n    padding-right: 4rem;\n  }\n\n  .md\\:pb-16{\n    padding-bottom: 4rem;\n  }\n\n  .md\\:pl-16{\n    padding-left: 4rem;\n  }\n\n  .md\\:pt-20{\n    padding-top: 5rem;\n  }\n\n  .md\\:pr-20{\n    padding-right: 5rem;\n  }\n\n  .md\\:pb-20{\n    padding-bottom: 5rem;\n  }\n\n  .md\\:pl-20{\n    padding-left: 5rem;\n  }\n\n  .md\\:pt-24{\n    padding-top: 6rem;\n  }\n\n  .md\\:pr-24{\n    padding-right: 6rem;\n  }\n\n  .md\\:pb-24{\n    padding-bottom: 6rem;\n  }\n\n  .md\\:pl-24{\n    padding-left: 6rem;\n  }\n\n  .md\\:pt-32{\n    padding-top: 8rem;\n  }\n\n  .md\\:pr-32{\n    padding-right: 8rem;\n  }\n\n  .md\\:pb-32{\n    padding-bottom: 8rem;\n  }\n\n  .md\\:pl-32{\n    padding-left: 8rem;\n  }\n\n  .md\\:pt-40{\n    padding-top: 10rem;\n  }\n\n  .md\\:pr-40{\n    padding-right: 10rem;\n  }\n\n  .md\\:pb-40{\n    padding-bottom: 10rem;\n  }\n\n  .md\\:pl-40{\n    padding-left: 10rem;\n  }\n\n  .md\\:pt-48{\n    padding-top: 12rem;\n  }\n\n  .md\\:pr-48{\n    padding-right: 12rem;\n  }\n\n  .md\\:pb-48{\n    padding-bottom: 12rem;\n  }\n\n  .md\\:pl-48{\n    padding-left: 12rem;\n  }\n\n  .md\\:pt-56{\n    padding-top: 14rem;\n  }\n\n  .md\\:pr-56{\n    padding-right: 14rem;\n  }\n\n  .md\\:pb-56{\n    padding-bottom: 14rem;\n  }\n\n  .md\\:pl-56{\n    padding-left: 14rem;\n  }\n\n  .md\\:pt-64{\n    padding-top: 16rem;\n  }\n\n  .md\\:pr-64{\n    padding-right: 16rem;\n  }\n\n  .md\\:pb-64{\n    padding-bottom: 16rem;\n  }\n\n  .md\\:pl-64{\n    padding-left: 16rem;\n  }\n\n  .md\\:pt-px{\n    padding-top: 1px;\n  }\n\n  .md\\:pr-px{\n    padding-right: 1px;\n  }\n\n  .md\\:pb-px{\n    padding-bottom: 1px;\n  }\n\n  .md\\:pl-px{\n    padding-left: 1px;\n  }\n\n  .md\\:pointer-events-none{\n    pointer-events: none;\n  }\n\n  .md\\:pointer-events-auto{\n    pointer-events: auto;\n  }\n\n  .md\\:static{\n    position: static;\n  }\n\n  .md\\:fixed{\n    position: fixed;\n  }\n\n  .md\\:absolute{\n    position: absolute;\n  }\n\n  .md\\:relative{\n    position: relative;\n  }\n\n  .md\\:sticky{\n    position: -webkit-sticky;\n    position: sticky;\n  }\n\n  .md\\:inset-0{\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n\n  .md\\:inset-auto{\n    top: auto;\n    right: auto;\n    bottom: auto;\n    left: auto;\n  }\n\n  .md\\:inset-y-0{\n    top: 0;\n    bottom: 0;\n  }\n\n  .md\\:inset-x-0{\n    right: 0;\n    left: 0;\n  }\n\n  .md\\:inset-y-auto{\n    top: auto;\n    bottom: auto;\n  }\n\n  .md\\:inset-x-auto{\n    right: auto;\n    left: auto;\n  }\n\n  .md\\:top-0{\n    top: 0;\n  }\n\n  .md\\:right-0{\n    right: 0;\n  }\n\n  .md\\:bottom-0{\n    bottom: 0;\n  }\n\n  .md\\:left-0{\n    left: 0;\n  }\n\n  .md\\:top-auto{\n    top: auto;\n  }\n\n  .md\\:right-auto{\n    right: auto;\n  }\n\n  .md\\:bottom-auto{\n    bottom: auto;\n  }\n\n  .md\\:left-auto{\n    left: auto;\n  }\n\n  .md\\:resize-none{\n    resize: none;\n  }\n\n  .md\\:resize-y{\n    resize: vertical;\n  }\n\n  .md\\:resize-x{\n    resize: horizontal;\n  }\n\n  .md\\:resize{\n    resize: both;\n  }\n\n  .md\\:shadow{\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .md\\:shadow-md{\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  }\n\n  .md\\:shadow-lg{\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  }\n\n  .md\\:shadow-xl{\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  }\n\n  .md\\:shadow-2xl{\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  }\n\n  .md\\:shadow-inner{\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .md\\:shadow-outline{\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  }\n\n  .md\\:shadow-none{\n    box-shadow: none;\n  }\n\n  .md\\:hover\\:shadow:hover{\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .md\\:hover\\:shadow-md:hover{\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  }\n\n  .md\\:hover\\:shadow-lg:hover{\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  }\n\n  .md\\:hover\\:shadow-xl:hover{\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  }\n\n  .md\\:hover\\:shadow-2xl:hover{\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  }\n\n  .md\\:hover\\:shadow-inner:hover{\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .md\\:hover\\:shadow-outline:hover{\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  }\n\n  .md\\:hover\\:shadow-none:hover{\n    box-shadow: none;\n  }\n\n  .md\\:focus\\:shadow:focus{\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .md\\:focus\\:shadow-md:focus{\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  }\n\n  .md\\:focus\\:shadow-lg:focus{\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  }\n\n  .md\\:focus\\:shadow-xl:focus{\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  }\n\n  .md\\:focus\\:shadow-2xl:focus{\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  }\n\n  .md\\:focus\\:shadow-inner:focus{\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .md\\:focus\\:shadow-outline:focus{\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  }\n\n  .md\\:focus\\:shadow-none:focus{\n    box-shadow: none;\n  }\n\n  .md\\:fill-current{\n    fill: currentColor;\n  }\n\n  .md\\:stroke-current{\n    stroke: currentColor;\n  }\n\n  .md\\:table-auto{\n    table-layout: auto;\n  }\n\n  .md\\:table-fixed{\n    table-layout: fixed;\n  }\n\n  .md\\:text-left{\n    text-align: left;\n  }\n\n  .md\\:text-center{\n    text-align: center;\n  }\n\n  .md\\:text-right{\n    text-align: right;\n  }\n\n  .md\\:text-justify{\n    text-align: justify;\n  }\n\n  .md\\:text-transparent{\n    color: transparent;\n  }\n\n  .md\\:text-black{\n    color: #000;\n  }\n\n  .md\\:text-white{\n    color: #fff;\n  }\n\n  .md\\:text-gray-100{\n    color: hsl(216, 33%, 97%);\n  }\n\n  .md\\:text-gray-200{\n    color: hsl(214, 15%, 91%);\n  }\n\n  .md\\:text-gray-300{\n    color: hsl(210, 16%, 82%);\n  }\n\n  .md\\:text-gray-400{\n    color: hsl(211, 13%, 65%);\n  }\n\n  .md\\:text-gray-500{\n    color: hsl(211, 10%, 53%);\n  }\n\n  .md\\:text-gray-600{\n    color: hsl(211, 12%, 43%);\n  }\n\n  .md\\:text-gray-700{\n    color: hsl(209, 14%, 37%);\n  }\n\n  .md\\:text-gray-800{\n    color: hsl(209, 18%, 30%);\n  }\n\n  .md\\:text-gray-900{\n    color: hsl(209, 20%, 25%);\n  }\n\n  .md\\:text-gray-1000{\n    color: hsl(210, 24%, 16%);\n  }\n\n  .md\\:text-red-100{\n    color: hsl(360, 100%, 95%);\n  }\n\n  .md\\:text-red-200{\n    color: hsl(360, 100%, 87%);\n  }\n\n  .md\\:text-red-300{\n    color: hsl(360, 100%, 80%);\n  }\n\n  .md\\:text-red-400{\n    color: hsl(360, 91%, 69%);\n  }\n\n  .md\\:text-red-500{\n    color: hsl(360, 83%, 62%);\n  }\n\n  .md\\:text-red-600{\n    color: hsl(356, 75%, 53%);\n  }\n\n  .md\\:text-red-700{\n    color: hsl(354, 85%, 44%);\n  }\n\n  .md\\:text-red-800{\n    color: hsl(352, 90%, 35%);\n  }\n\n  .md\\:text-red-900{\n    color: hsl(350, 94%, 28%);\n  }\n\n  .md\\:text-red-1000{\n    color: hsl(348, 94%, 20%);\n  }\n\n  .md\\:text-orange-100{\n    color: #fffaf0;\n  }\n\n  .md\\:text-orange-200{\n    color: #feebc8;\n  }\n\n  .md\\:text-orange-300{\n    color: #fbd38d;\n  }\n\n  .md\\:text-orange-400{\n    color: #f6ad55;\n  }\n\n  .md\\:text-orange-500{\n    color: #ed8936;\n  }\n\n  .md\\:text-orange-600{\n    color: #dd6b20;\n  }\n\n  .md\\:text-orange-700{\n    color: #c05621;\n  }\n\n  .md\\:text-orange-800{\n    color: #9c4221;\n  }\n\n  .md\\:text-orange-900{\n    color: #7b341e;\n  }\n\n  .md\\:text-yellow-100{\n    color: hsl(15, 86%, 30%);\n  }\n\n  .md\\:text-yellow-200{\n    color: hsl(22, 82%, 39%);\n  }\n\n  .md\\:text-yellow-300{\n    color: hsl(29, 80%, 44%);\n  }\n\n  .md\\:text-yellow-400{\n    color: hsl(36, 77%, 49%);\n  }\n\n  .md\\:text-yellow-500{\n    color: hsl(42, 87%, 55%);\n  }\n\n  .md\\:text-yellow-600{\n    color: hsl(44, 92%, 63%);\n  }\n\n  .md\\:text-yellow-700{\n    color: hsl(48, 94%, 68%);\n  }\n\n  .md\\:text-yellow-800{\n    color: hsl(48, 95%, 76%);\n  }\n\n  .md\\:text-yellow-900{\n    color: hsl(48, 100%, 88%);\n  }\n\n  .md\\:text-yellow-1000{\n    color: hsl(49, 100%, 96%);\n  }\n\n  .md\\:text-green-100{\n    color: #f0fff4;\n  }\n\n  .md\\:text-green-200{\n    color: #c6f6d5;\n  }\n\n  .md\\:text-green-300{\n    color: #9ae6b4;\n  }\n\n  .md\\:text-green-400{\n    color: #68d391;\n  }\n\n  .md\\:text-green-500{\n    color: #48bb78;\n  }\n\n  .md\\:text-green-600{\n    color: #38a169;\n  }\n\n  .md\\:text-green-700{\n    color: #2f855a;\n  }\n\n  .md\\:text-green-800{\n    color: #276749;\n  }\n\n  .md\\:text-green-900{\n    color: #22543d;\n  }\n\n  .md\\:text-teal-100{\n    color: hsl(170, 97%, 15%);\n  }\n\n  .md\\:text-teal-200{\n    color: hsl(168, 80%, 23%);\n  }\n\n  .md\\:text-teal-300{\n    color: hsl(166, 72%, 28%);\n  }\n\n  .md\\:text-teal-400{\n    color: hsl(164, 71%, 34%);\n  }\n\n  .md\\:text-teal-500{\n    color: hsl(162, 63%, 41%);\n  }\n\n  .md\\:text-teal-600{\n    color: hsl(160, 51%, 49%);\n  }\n\n  .md\\:text-teal-700{\n    color: hsl(158, 58%, 62%);\n  }\n\n  .md\\:text-teal-800{\n    color: hsl(156, 73%, 74%);\n  }\n\n  .md\\:text-teal-900{\n    color: hsl(154, 75%, 87%);\n  }\n\n  .md\\:text-teal-1000{\n    color: hsl(152, 68%, 96%);\n  }\n\n  .md\\:text-blue-100{\n    color: hsl(195, 100%, 95%);\n  }\n\n  .md\\:text-blue-200{\n    color: hsl(195, 100%, 85%);\n  }\n\n  .md\\:text-blue-300{\n    color: hsl(195, 97%, 75%);\n  }\n\n  .md\\:text-blue-400{\n    color: hsl(196, 94%, 67%);\n  }\n\n  .md\\:text-blue-500{\n    color: hsl(197, 92%, 61%);\n  }\n\n  .md\\:text-blue-600{\n    color: hsl(199, 84%, 55%);\n  }\n\n  .md\\:text-blue-700{\n    color: hsl(201, 79%, 46%);\n  }\n\n  .md\\:text-blue-800{\n    color: hsl(202, 83%, 41%);\n  }\n\n  .md\\:text-blue-900{\n    color: hsl(203, 87%, 34%);\n  }\n\n  .md\\:text-blue-1000{\n    color: hsl(204, 96%, 27%);\n  }\n\n  .md\\:text-indigo-100{\n    color: hsl(221, 68%, 93%);\n  }\n\n  .md\\:text-indigo-200{\n    color: hsl(221, 78%, 86%);\n  }\n\n  .md\\:text-indigo-300{\n    color: hsl(224, 67%, 76%);\n  }\n\n  .md\\:text-indigo-400{\n    color: hsl(225, 57%, 67%);\n  }\n\n  .md\\:text-indigo-500{\n    color: hsl(227, 50%, 59%);\n  }\n\n  .md\\:text-indigo-600{\n    color: hsl(227, 42%, 51%);\n  }\n\n  .md\\:text-indigo-700{\n    color: hsl(228, 45%, 45%);\n  }\n\n  .md\\:text-indigo-800{\n    color: hsl(230, 49%, 41%);\n  }\n\n  .md\\:text-indigo-900{\n    color: hsl(232, 51%, 36%);\n  }\n\n  .md\\:text-indigo-1000{\n    color: hsl(234, 62%, 26%);\n  }\n\n  .md\\:text-purple-100{\n    color: #faf5ff;\n  }\n\n  .md\\:text-purple-200{\n    color: #e9d8fd;\n  }\n\n  .md\\:text-purple-300{\n    color: #d6bcfa;\n  }\n\n  .md\\:text-purple-400{\n    color: #b794f4;\n  }\n\n  .md\\:text-purple-500{\n    color: #9f7aea;\n  }\n\n  .md\\:text-purple-600{\n    color: #805ad5;\n  }\n\n  .md\\:text-purple-700{\n    color: #6b46c1;\n  }\n\n  .md\\:text-purple-800{\n    color: #553c9a;\n  }\n\n  .md\\:text-purple-900{\n    color: #44337a;\n  }\n\n  .md\\:text-pink-100{\n    color: #fff5f7;\n  }\n\n  .md\\:text-pink-200{\n    color: #fed7e2;\n  }\n\n  .md\\:text-pink-300{\n    color: #fbb6ce;\n  }\n\n  .md\\:text-pink-400{\n    color: #f687b3;\n  }\n\n  .md\\:text-pink-500{\n    color: #ed64a6;\n  }\n\n  .md\\:text-pink-600{\n    color: #d53f8c;\n  }\n\n  .md\\:text-pink-700{\n    color: #b83280;\n  }\n\n  .md\\:text-pink-800{\n    color: #97266d;\n  }\n\n  .md\\:text-pink-900{\n    color: #702459;\n  }\n\n  .md\\:hover\\:text-transparent:hover{\n    color: transparent;\n  }\n\n  .md\\:hover\\:text-black:hover{\n    color: #000;\n  }\n\n  .md\\:hover\\:text-white:hover{\n    color: #fff;\n  }\n\n  .md\\:hover\\:text-gray-100:hover{\n    color: hsl(216, 33%, 97%);\n  }\n\n  .md\\:hover\\:text-gray-200:hover{\n    color: hsl(214, 15%, 91%);\n  }\n\n  .md\\:hover\\:text-gray-300:hover{\n    color: hsl(210, 16%, 82%);\n  }\n\n  .md\\:hover\\:text-gray-400:hover{\n    color: hsl(211, 13%, 65%);\n  }\n\n  .md\\:hover\\:text-gray-500:hover{\n    color: hsl(211, 10%, 53%);\n  }\n\n  .md\\:hover\\:text-gray-600:hover{\n    color: hsl(211, 12%, 43%);\n  }\n\n  .md\\:hover\\:text-gray-700:hover{\n    color: hsl(209, 14%, 37%);\n  }\n\n  .md\\:hover\\:text-gray-800:hover{\n    color: hsl(209, 18%, 30%);\n  }\n\n  .md\\:hover\\:text-gray-900:hover{\n    color: hsl(209, 20%, 25%);\n  }\n\n  .md\\:hover\\:text-gray-1000:hover{\n    color: hsl(210, 24%, 16%);\n  }\n\n  .md\\:hover\\:text-red-100:hover{\n    color: hsl(360, 100%, 95%);\n  }\n\n  .md\\:hover\\:text-red-200:hover{\n    color: hsl(360, 100%, 87%);\n  }\n\n  .md\\:hover\\:text-red-300:hover{\n    color: hsl(360, 100%, 80%);\n  }\n\n  .md\\:hover\\:text-red-400:hover{\n    color: hsl(360, 91%, 69%);\n  }\n\n  .md\\:hover\\:text-red-500:hover{\n    color: hsl(360, 83%, 62%);\n  }\n\n  .md\\:hover\\:text-red-600:hover{\n    color: hsl(356, 75%, 53%);\n  }\n\n  .md\\:hover\\:text-red-700:hover{\n    color: hsl(354, 85%, 44%);\n  }\n\n  .md\\:hover\\:text-red-800:hover{\n    color: hsl(352, 90%, 35%);\n  }\n\n  .md\\:hover\\:text-red-900:hover{\n    color: hsl(350, 94%, 28%);\n  }\n\n  .md\\:hover\\:text-red-1000:hover{\n    color: hsl(348, 94%, 20%);\n  }\n\n  .md\\:hover\\:text-orange-100:hover{\n    color: #fffaf0;\n  }\n\n  .md\\:hover\\:text-orange-200:hover{\n    color: #feebc8;\n  }\n\n  .md\\:hover\\:text-orange-300:hover{\n    color: #fbd38d;\n  }\n\n  .md\\:hover\\:text-orange-400:hover{\n    color: #f6ad55;\n  }\n\n  .md\\:hover\\:text-orange-500:hover{\n    color: #ed8936;\n  }\n\n  .md\\:hover\\:text-orange-600:hover{\n    color: #dd6b20;\n  }\n\n  .md\\:hover\\:text-orange-700:hover{\n    color: #c05621;\n  }\n\n  .md\\:hover\\:text-orange-800:hover{\n    color: #9c4221;\n  }\n\n  .md\\:hover\\:text-orange-900:hover{\n    color: #7b341e;\n  }\n\n  .md\\:hover\\:text-yellow-100:hover{\n    color: hsl(15, 86%, 30%);\n  }\n\n  .md\\:hover\\:text-yellow-200:hover{\n    color: hsl(22, 82%, 39%);\n  }\n\n  .md\\:hover\\:text-yellow-300:hover{\n    color: hsl(29, 80%, 44%);\n  }\n\n  .md\\:hover\\:text-yellow-400:hover{\n    color: hsl(36, 77%, 49%);\n  }\n\n  .md\\:hover\\:text-yellow-500:hover{\n    color: hsl(42, 87%, 55%);\n  }\n\n  .md\\:hover\\:text-yellow-600:hover{\n    color: hsl(44, 92%, 63%);\n  }\n\n  .md\\:hover\\:text-yellow-700:hover{\n    color: hsl(48, 94%, 68%);\n  }\n\n  .md\\:hover\\:text-yellow-800:hover{\n    color: hsl(48, 95%, 76%);\n  }\n\n  .md\\:hover\\:text-yellow-900:hover{\n    color: hsl(48, 100%, 88%);\n  }\n\n  .md\\:hover\\:text-yellow-1000:hover{\n    color: hsl(49, 100%, 96%);\n  }\n\n  .md\\:hover\\:text-green-100:hover{\n    color: #f0fff4;\n  }\n\n  .md\\:hover\\:text-green-200:hover{\n    color: #c6f6d5;\n  }\n\n  .md\\:hover\\:text-green-300:hover{\n    color: #9ae6b4;\n  }\n\n  .md\\:hover\\:text-green-400:hover{\n    color: #68d391;\n  }\n\n  .md\\:hover\\:text-green-500:hover{\n    color: #48bb78;\n  }\n\n  .md\\:hover\\:text-green-600:hover{\n    color: #38a169;\n  }\n\n  .md\\:hover\\:text-green-700:hover{\n    color: #2f855a;\n  }\n\n  .md\\:hover\\:text-green-800:hover{\n    color: #276749;\n  }\n\n  .md\\:hover\\:text-green-900:hover{\n    color: #22543d;\n  }\n\n  .md\\:hover\\:text-teal-100:hover{\n    color: hsl(170, 97%, 15%);\n  }\n\n  .md\\:hover\\:text-teal-200:hover{\n    color: hsl(168, 80%, 23%);\n  }\n\n  .md\\:hover\\:text-teal-300:hover{\n    color: hsl(166, 72%, 28%);\n  }\n\n  .md\\:hover\\:text-teal-400:hover{\n    color: hsl(164, 71%, 34%);\n  }\n\n  .md\\:hover\\:text-teal-500:hover{\n    color: hsl(162, 63%, 41%);\n  }\n\n  .md\\:hover\\:text-teal-600:hover{\n    color: hsl(160, 51%, 49%);\n  }\n\n  .md\\:hover\\:text-teal-700:hover{\n    color: hsl(158, 58%, 62%);\n  }\n\n  .md\\:hover\\:text-teal-800:hover{\n    color: hsl(156, 73%, 74%);\n  }\n\n  .md\\:hover\\:text-teal-900:hover{\n    color: hsl(154, 75%, 87%);\n  }\n\n  .md\\:hover\\:text-teal-1000:hover{\n    color: hsl(152, 68%, 96%);\n  }\n\n  .md\\:hover\\:text-blue-100:hover{\n    color: hsl(195, 100%, 95%);\n  }\n\n  .md\\:hover\\:text-blue-200:hover{\n    color: hsl(195, 100%, 85%);\n  }\n\n  .md\\:hover\\:text-blue-300:hover{\n    color: hsl(195, 97%, 75%);\n  }\n\n  .md\\:hover\\:text-blue-400:hover{\n    color: hsl(196, 94%, 67%);\n  }\n\n  .md\\:hover\\:text-blue-500:hover{\n    color: hsl(197, 92%, 61%);\n  }\n\n  .md\\:hover\\:text-blue-600:hover{\n    color: hsl(199, 84%, 55%);\n  }\n\n  .md\\:hover\\:text-blue-700:hover{\n    color: hsl(201, 79%, 46%);\n  }\n\n  .md\\:hover\\:text-blue-800:hover{\n    color: hsl(202, 83%, 41%);\n  }\n\n  .md\\:hover\\:text-blue-900:hover{\n    color: hsl(203, 87%, 34%);\n  }\n\n  .md\\:hover\\:text-blue-1000:hover{\n    color: hsl(204, 96%, 27%);\n  }\n\n  .md\\:hover\\:text-indigo-100:hover{\n    color: hsl(221, 68%, 93%);\n  }\n\n  .md\\:hover\\:text-indigo-200:hover{\n    color: hsl(221, 78%, 86%);\n  }\n\n  .md\\:hover\\:text-indigo-300:hover{\n    color: hsl(224, 67%, 76%);\n  }\n\n  .md\\:hover\\:text-indigo-400:hover{\n    color: hsl(225, 57%, 67%);\n  }\n\n  .md\\:hover\\:text-indigo-500:hover{\n    color: hsl(227, 50%, 59%);\n  }\n\n  .md\\:hover\\:text-indigo-600:hover{\n    color: hsl(227, 42%, 51%);\n  }\n\n  .md\\:hover\\:text-indigo-700:hover{\n    color: hsl(228, 45%, 45%);\n  }\n\n  .md\\:hover\\:text-indigo-800:hover{\n    color: hsl(230, 49%, 41%);\n  }\n\n  .md\\:hover\\:text-indigo-900:hover{\n    color: hsl(232, 51%, 36%);\n  }\n\n  .md\\:hover\\:text-indigo-1000:hover{\n    color: hsl(234, 62%, 26%);\n  }\n\n  .md\\:hover\\:text-purple-100:hover{\n    color: #faf5ff;\n  }\n\n  .md\\:hover\\:text-purple-200:hover{\n    color: #e9d8fd;\n  }\n\n  .md\\:hover\\:text-purple-300:hover{\n    color: #d6bcfa;\n  }\n\n  .md\\:hover\\:text-purple-400:hover{\n    color: #b794f4;\n  }\n\n  .md\\:hover\\:text-purple-500:hover{\n    color: #9f7aea;\n  }\n\n  .md\\:hover\\:text-purple-600:hover{\n    color: #805ad5;\n  }\n\n  .md\\:hover\\:text-purple-700:hover{\n    color: #6b46c1;\n  }\n\n  .md\\:hover\\:text-purple-800:hover{\n    color: #553c9a;\n  }\n\n  .md\\:hover\\:text-purple-900:hover{\n    color: #44337a;\n  }\n\n  .md\\:hover\\:text-pink-100:hover{\n    color: #fff5f7;\n  }\n\n  .md\\:hover\\:text-pink-200:hover{\n    color: #fed7e2;\n  }\n\n  .md\\:hover\\:text-pink-300:hover{\n    color: #fbb6ce;\n  }\n\n  .md\\:hover\\:text-pink-400:hover{\n    color: #f687b3;\n  }\n\n  .md\\:hover\\:text-pink-500:hover{\n    color: #ed64a6;\n  }\n\n  .md\\:hover\\:text-pink-600:hover{\n    color: #d53f8c;\n  }\n\n  .md\\:hover\\:text-pink-700:hover{\n    color: #b83280;\n  }\n\n  .md\\:hover\\:text-pink-800:hover{\n    color: #97266d;\n  }\n\n  .md\\:hover\\:text-pink-900:hover{\n    color: #702459;\n  }\n\n  .md\\:focus\\:text-transparent:focus{\n    color: transparent;\n  }\n\n  .md\\:focus\\:text-black:focus{\n    color: #000;\n  }\n\n  .md\\:focus\\:text-white:focus{\n    color: #fff;\n  }\n\n  .md\\:focus\\:text-gray-100:focus{\n    color: hsl(216, 33%, 97%);\n  }\n\n  .md\\:focus\\:text-gray-200:focus{\n    color: hsl(214, 15%, 91%);\n  }\n\n  .md\\:focus\\:text-gray-300:focus{\n    color: hsl(210, 16%, 82%);\n  }\n\n  .md\\:focus\\:text-gray-400:focus{\n    color: hsl(211, 13%, 65%);\n  }\n\n  .md\\:focus\\:text-gray-500:focus{\n    color: hsl(211, 10%, 53%);\n  }\n\n  .md\\:focus\\:text-gray-600:focus{\n    color: hsl(211, 12%, 43%);\n  }\n\n  .md\\:focus\\:text-gray-700:focus{\n    color: hsl(209, 14%, 37%);\n  }\n\n  .md\\:focus\\:text-gray-800:focus{\n    color: hsl(209, 18%, 30%);\n  }\n\n  .md\\:focus\\:text-gray-900:focus{\n    color: hsl(209, 20%, 25%);\n  }\n\n  .md\\:focus\\:text-gray-1000:focus{\n    color: hsl(210, 24%, 16%);\n  }\n\n  .md\\:focus\\:text-red-100:focus{\n    color: hsl(360, 100%, 95%);\n  }\n\n  .md\\:focus\\:text-red-200:focus{\n    color: hsl(360, 100%, 87%);\n  }\n\n  .md\\:focus\\:text-red-300:focus{\n    color: hsl(360, 100%, 80%);\n  }\n\n  .md\\:focus\\:text-red-400:focus{\n    color: hsl(360, 91%, 69%);\n  }\n\n  .md\\:focus\\:text-red-500:focus{\n    color: hsl(360, 83%, 62%);\n  }\n\n  .md\\:focus\\:text-red-600:focus{\n    color: hsl(356, 75%, 53%);\n  }\n\n  .md\\:focus\\:text-red-700:focus{\n    color: hsl(354, 85%, 44%);\n  }\n\n  .md\\:focus\\:text-red-800:focus{\n    color: hsl(352, 90%, 35%);\n  }\n\n  .md\\:focus\\:text-red-900:focus{\n    color: hsl(350, 94%, 28%);\n  }\n\n  .md\\:focus\\:text-red-1000:focus{\n    color: hsl(348, 94%, 20%);\n  }\n\n  .md\\:focus\\:text-orange-100:focus{\n    color: #fffaf0;\n  }\n\n  .md\\:focus\\:text-orange-200:focus{\n    color: #feebc8;\n  }\n\n  .md\\:focus\\:text-orange-300:focus{\n    color: #fbd38d;\n  }\n\n  .md\\:focus\\:text-orange-400:focus{\n    color: #f6ad55;\n  }\n\n  .md\\:focus\\:text-orange-500:focus{\n    color: #ed8936;\n  }\n\n  .md\\:focus\\:text-orange-600:focus{\n    color: #dd6b20;\n  }\n\n  .md\\:focus\\:text-orange-700:focus{\n    color: #c05621;\n  }\n\n  .md\\:focus\\:text-orange-800:focus{\n    color: #9c4221;\n  }\n\n  .md\\:focus\\:text-orange-900:focus{\n    color: #7b341e;\n  }\n\n  .md\\:focus\\:text-yellow-100:focus{\n    color: hsl(15, 86%, 30%);\n  }\n\n  .md\\:focus\\:text-yellow-200:focus{\n    color: hsl(22, 82%, 39%);\n  }\n\n  .md\\:focus\\:text-yellow-300:focus{\n    color: hsl(29, 80%, 44%);\n  }\n\n  .md\\:focus\\:text-yellow-400:focus{\n    color: hsl(36, 77%, 49%);\n  }\n\n  .md\\:focus\\:text-yellow-500:focus{\n    color: hsl(42, 87%, 55%);\n  }\n\n  .md\\:focus\\:text-yellow-600:focus{\n    color: hsl(44, 92%, 63%);\n  }\n\n  .md\\:focus\\:text-yellow-700:focus{\n    color: hsl(48, 94%, 68%);\n  }\n\n  .md\\:focus\\:text-yellow-800:focus{\n    color: hsl(48, 95%, 76%);\n  }\n\n  .md\\:focus\\:text-yellow-900:focus{\n    color: hsl(48, 100%, 88%);\n  }\n\n  .md\\:focus\\:text-yellow-1000:focus{\n    color: hsl(49, 100%, 96%);\n  }\n\n  .md\\:focus\\:text-green-100:focus{\n    color: #f0fff4;\n  }\n\n  .md\\:focus\\:text-green-200:focus{\n    color: #c6f6d5;\n  }\n\n  .md\\:focus\\:text-green-300:focus{\n    color: #9ae6b4;\n  }\n\n  .md\\:focus\\:text-green-400:focus{\n    color: #68d391;\n  }\n\n  .md\\:focus\\:text-green-500:focus{\n    color: #48bb78;\n  }\n\n  .md\\:focus\\:text-green-600:focus{\n    color: #38a169;\n  }\n\n  .md\\:focus\\:text-green-700:focus{\n    color: #2f855a;\n  }\n\n  .md\\:focus\\:text-green-800:focus{\n    color: #276749;\n  }\n\n  .md\\:focus\\:text-green-900:focus{\n    color: #22543d;\n  }\n\n  .md\\:focus\\:text-teal-100:focus{\n    color: hsl(170, 97%, 15%);\n  }\n\n  .md\\:focus\\:text-teal-200:focus{\n    color: hsl(168, 80%, 23%);\n  }\n\n  .md\\:focus\\:text-teal-300:focus{\n    color: hsl(166, 72%, 28%);\n  }\n\n  .md\\:focus\\:text-teal-400:focus{\n    color: hsl(164, 71%, 34%);\n  }\n\n  .md\\:focus\\:text-teal-500:focus{\n    color: hsl(162, 63%, 41%);\n  }\n\n  .md\\:focus\\:text-teal-600:focus{\n    color: hsl(160, 51%, 49%);\n  }\n\n  .md\\:focus\\:text-teal-700:focus{\n    color: hsl(158, 58%, 62%);\n  }\n\n  .md\\:focus\\:text-teal-800:focus{\n    color: hsl(156, 73%, 74%);\n  }\n\n  .md\\:focus\\:text-teal-900:focus{\n    color: hsl(154, 75%, 87%);\n  }\n\n  .md\\:focus\\:text-teal-1000:focus{\n    color: hsl(152, 68%, 96%);\n  }\n\n  .md\\:focus\\:text-blue-100:focus{\n    color: hsl(195, 100%, 95%);\n  }\n\n  .md\\:focus\\:text-blue-200:focus{\n    color: hsl(195, 100%, 85%);\n  }\n\n  .md\\:focus\\:text-blue-300:focus{\n    color: hsl(195, 97%, 75%);\n  }\n\n  .md\\:focus\\:text-blue-400:focus{\n    color: hsl(196, 94%, 67%);\n  }\n\n  .md\\:focus\\:text-blue-500:focus{\n    color: hsl(197, 92%, 61%);\n  }\n\n  .md\\:focus\\:text-blue-600:focus{\n    color: hsl(199, 84%, 55%);\n  }\n\n  .md\\:focus\\:text-blue-700:focus{\n    color: hsl(201, 79%, 46%);\n  }\n\n  .md\\:focus\\:text-blue-800:focus{\n    color: hsl(202, 83%, 41%);\n  }\n\n  .md\\:focus\\:text-blue-900:focus{\n    color: hsl(203, 87%, 34%);\n  }\n\n  .md\\:focus\\:text-blue-1000:focus{\n    color: hsl(204, 96%, 27%);\n  }\n\n  .md\\:focus\\:text-indigo-100:focus{\n    color: hsl(221, 68%, 93%);\n  }\n\n  .md\\:focus\\:text-indigo-200:focus{\n    color: hsl(221, 78%, 86%);\n  }\n\n  .md\\:focus\\:text-indigo-300:focus{\n    color: hsl(224, 67%, 76%);\n  }\n\n  .md\\:focus\\:text-indigo-400:focus{\n    color: hsl(225, 57%, 67%);\n  }\n\n  .md\\:focus\\:text-indigo-500:focus{\n    color: hsl(227, 50%, 59%);\n  }\n\n  .md\\:focus\\:text-indigo-600:focus{\n    color: hsl(227, 42%, 51%);\n  }\n\n  .md\\:focus\\:text-indigo-700:focus{\n    color: hsl(228, 45%, 45%);\n  }\n\n  .md\\:focus\\:text-indigo-800:focus{\n    color: hsl(230, 49%, 41%);\n  }\n\n  .md\\:focus\\:text-indigo-900:focus{\n    color: hsl(232, 51%, 36%);\n  }\n\n  .md\\:focus\\:text-indigo-1000:focus{\n    color: hsl(234, 62%, 26%);\n  }\n\n  .md\\:focus\\:text-purple-100:focus{\n    color: #faf5ff;\n  }\n\n  .md\\:focus\\:text-purple-200:focus{\n    color: #e9d8fd;\n  }\n\n  .md\\:focus\\:text-purple-300:focus{\n    color: #d6bcfa;\n  }\n\n  .md\\:focus\\:text-purple-400:focus{\n    color: #b794f4;\n  }\n\n  .md\\:focus\\:text-purple-500:focus{\n    color: #9f7aea;\n  }\n\n  .md\\:focus\\:text-purple-600:focus{\n    color: #805ad5;\n  }\n\n  .md\\:focus\\:text-purple-700:focus{\n    color: #6b46c1;\n  }\n\n  .md\\:focus\\:text-purple-800:focus{\n    color: #553c9a;\n  }\n\n  .md\\:focus\\:text-purple-900:focus{\n    color: #44337a;\n  }\n\n  .md\\:focus\\:text-pink-100:focus{\n    color: #fff5f7;\n  }\n\n  .md\\:focus\\:text-pink-200:focus{\n    color: #fed7e2;\n  }\n\n  .md\\:focus\\:text-pink-300:focus{\n    color: #fbb6ce;\n  }\n\n  .md\\:focus\\:text-pink-400:focus{\n    color: #f687b3;\n  }\n\n  .md\\:focus\\:text-pink-500:focus{\n    color: #ed64a6;\n  }\n\n  .md\\:focus\\:text-pink-600:focus{\n    color: #d53f8c;\n  }\n\n  .md\\:focus\\:text-pink-700:focus{\n    color: #b83280;\n  }\n\n  .md\\:focus\\:text-pink-800:focus{\n    color: #97266d;\n  }\n\n  .md\\:focus\\:text-pink-900:focus{\n    color: #702459;\n  }\n\n  .md\\:text-xs{\n    font-size: 0.75rem;\n  }\n\n  .md\\:text-sm{\n    font-size: 0.875rem;\n  }\n\n  .md\\:text-base{\n    font-size: 1rem;\n  }\n\n  .md\\:text-lg{\n    font-size: 1.125rem;\n  }\n\n  .md\\:text-xl{\n    font-size: 1.25rem;\n  }\n\n  .md\\:text-2xl{\n    font-size: 1.5rem;\n  }\n\n  .md\\:text-3xl{\n    font-size: 1.875rem;\n  }\n\n  .md\\:text-4xl{\n    font-size: 2.25rem;\n  }\n\n  .md\\:text-5xl{\n    font-size: 3rem;\n  }\n\n  .md\\:text-6xl{\n    font-size: 4rem;\n  }\n\n  .md\\:italic{\n    font-style: italic;\n  }\n\n  .md\\:not-italic{\n    font-style: normal;\n  }\n\n  .md\\:uppercase{\n    text-transform: uppercase;\n  }\n\n  .md\\:lowercase{\n    text-transform: lowercase;\n  }\n\n  .md\\:capitalize{\n    text-transform: capitalize;\n  }\n\n  .md\\:normal-case{\n    text-transform: none;\n  }\n\n  .md\\:underline{\n    text-decoration: underline;\n  }\n\n  .md\\:line-through{\n    text-decoration: line-through;\n  }\n\n  .md\\:no-underline{\n    text-decoration: none;\n  }\n\n  .md\\:hover\\:underline:hover{\n    text-decoration: underline;\n  }\n\n  .md\\:hover\\:line-through:hover{\n    text-decoration: line-through;\n  }\n\n  .md\\:hover\\:no-underline:hover{\n    text-decoration: none;\n  }\n\n  .md\\:focus\\:underline:focus{\n    text-decoration: underline;\n  }\n\n  .md\\:focus\\:line-through:focus{\n    text-decoration: line-through;\n  }\n\n  .md\\:focus\\:no-underline:focus{\n    text-decoration: none;\n  }\n\n  .md\\:antialiased{\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .md\\:subpixel-antialiased{\n    -webkit-font-smoothing: auto;\n    -moz-osx-font-smoothing: auto;\n  }\n\n  .md\\:tracking-tighter{\n    letter-spacing: -0.05em;\n  }\n\n  .md\\:tracking-tight{\n    letter-spacing: -0.025em;\n  }\n\n  .md\\:tracking-normal{\n    letter-spacing: 0;\n  }\n\n  .md\\:tracking-wide{\n    letter-spacing: 0.025em;\n  }\n\n  .md\\:tracking-wider{\n    letter-spacing: 0.05em;\n  }\n\n  .md\\:tracking-widest{\n    letter-spacing: 0.1em;\n  }\n\n  .md\\:select-none{\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n\n  .md\\:select-text{\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text;\n  }\n\n  .md\\:select-all{\n    -webkit-user-select: all;\n       -moz-user-select: all;\n        -ms-user-select: all;\n            user-select: all;\n  }\n\n  .md\\:select-auto{\n    -webkit-user-select: auto;\n       -moz-user-select: auto;\n        -ms-user-select: auto;\n            user-select: auto;\n  }\n\n  .md\\:align-baseline{\n    vertical-align: baseline;\n  }\n\n  .md\\:align-top{\n    vertical-align: top;\n  }\n\n  .md\\:align-middle{\n    vertical-align: middle;\n  }\n\n  .md\\:align-bottom{\n    vertical-align: bottom;\n  }\n\n  .md\\:align-text-top{\n    vertical-align: text-top;\n  }\n\n  .md\\:align-text-bottom{\n    vertical-align: text-bottom;\n  }\n\n  .md\\:visible{\n    visibility: visible;\n  }\n\n  .md\\:invisible{\n    visibility: hidden;\n  }\n\n  .md\\:whitespace-normal{\n    white-space: normal;\n  }\n\n  .md\\:whitespace-no-wrap{\n    white-space: nowrap;\n  }\n\n  .md\\:whitespace-pre{\n    white-space: pre;\n  }\n\n  .md\\:whitespace-pre-line{\n    white-space: pre-line;\n  }\n\n  .md\\:whitespace-pre-wrap{\n    white-space: pre-wrap;\n  }\n\n  .md\\:break-normal{\n    overflow-wrap: normal;\n    word-break: normal;\n  }\n\n  .md\\:break-words{\n    overflow-wrap: break-word;\n  }\n\n  .md\\:break-all{\n    word-break: break-all;\n  }\n\n  .md\\:truncate{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .md\\:w-0{\n    width: 0;\n  }\n\n  .md\\:w-1{\n    width: 0.25rem;\n  }\n\n  .md\\:w-2{\n    width: 0.5rem;\n  }\n\n  .md\\:w-3{\n    width: 0.75rem;\n  }\n\n  .md\\:w-4{\n    width: 1rem;\n  }\n\n  .md\\:w-5{\n    width: 1.25rem;\n  }\n\n  .md\\:w-6{\n    width: 1.5rem;\n  }\n\n  .md\\:w-8{\n    width: 2rem;\n  }\n\n  .md\\:w-10{\n    width: 2.5rem;\n  }\n\n  .md\\:w-12{\n    width: 3rem;\n  }\n\n  .md\\:w-16{\n    width: 4rem;\n  }\n\n  .md\\:w-20{\n    width: 5rem;\n  }\n\n  .md\\:w-24{\n    width: 6rem;\n  }\n\n  .md\\:w-32{\n    width: 8rem;\n  }\n\n  .md\\:w-40{\n    width: 10rem;\n  }\n\n  .md\\:w-48{\n    width: 12rem;\n  }\n\n  .md\\:w-56{\n    width: 14rem;\n  }\n\n  .md\\:w-64{\n    width: 16rem;\n  }\n\n  .md\\:w-auto{\n    width: auto;\n  }\n\n  .md\\:w-px{\n    width: 1px;\n  }\n\n  .md\\:w-1\\/2{\n    width: 50%;\n  }\n\n  .md\\:w-1\\/3{\n    width: 33.333333%;\n  }\n\n  .md\\:w-2\\/3{\n    width: 66.666667%;\n  }\n\n  .md\\:w-1\\/4{\n    width: 25%;\n  }\n\n  .md\\:w-2\\/4{\n    width: 50%;\n  }\n\n  .md\\:w-3\\/4{\n    width: 75%;\n  }\n\n  .md\\:w-1\\/5{\n    width: 20%;\n  }\n\n  .md\\:w-2\\/5{\n    width: 40%;\n  }\n\n  .md\\:w-3\\/5{\n    width: 60%;\n  }\n\n  .md\\:w-4\\/5{\n    width: 80%;\n  }\n\n  .md\\:w-1\\/6{\n    width: 16.666667%;\n  }\n\n  .md\\:w-2\\/6{\n    width: 33.333333%;\n  }\n\n  .md\\:w-3\\/6{\n    width: 50%;\n  }\n\n  .md\\:w-4\\/6{\n    width: 66.666667%;\n  }\n\n  .md\\:w-5\\/6{\n    width: 83.333333%;\n  }\n\n  .md\\:w-1\\/12{\n    width: 8.333333%;\n  }\n\n  .md\\:w-2\\/12{\n    width: 16.666667%;\n  }\n\n  .md\\:w-3\\/12{\n    width: 25%;\n  }\n\n  .md\\:w-4\\/12{\n    width: 33.333333%;\n  }\n\n  .md\\:w-5\\/12{\n    width: 41.666667%;\n  }\n\n  .md\\:w-6\\/12{\n    width: 50%;\n  }\n\n  .md\\:w-7\\/12{\n    width: 58.333333%;\n  }\n\n  .md\\:w-8\\/12{\n    width: 66.666667%;\n  }\n\n  .md\\:w-9\\/12{\n    width: 75%;\n  }\n\n  .md\\:w-10\\/12{\n    width: 83.333333%;\n  }\n\n  .md\\:w-11\\/12{\n    width: 91.666667%;\n  }\n\n  .md\\:w-full{\n    width: 100%;\n  }\n\n  .md\\:w-screen{\n    width: 100vw;\n  }\n\n  .md\\:z-0{\n    z-index: 0;\n  }\n\n  .md\\:z-10{\n    z-index: 10;\n  }\n\n  .md\\:z-20{\n    z-index: 20;\n  }\n\n  .md\\:z-30{\n    z-index: 30;\n  }\n\n  .md\\:z-40{\n    z-index: 40;\n  }\n\n  .md\\:z-50{\n    z-index: 50;\n  }\n\n  .md\\:z-auto{\n    z-index: auto;\n  }\n}\n\n@media (min-width: 1024px){\n  .lg\\:appearance-none{\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n  }\n\n  .lg\\:bg-fixed{\n    background-attachment: fixed;\n  }\n\n  .lg\\:bg-local{\n    background-attachment: local;\n  }\n\n  .lg\\:bg-scroll{\n    background-attachment: scroll;\n  }\n\n  .lg\\:bg-transparent{\n    background-color: transparent;\n  }\n\n  .lg\\:bg-black{\n    background-color: #000;\n  }\n\n  .lg\\:bg-white{\n    background-color: #fff;\n  }\n\n  .lg\\:bg-gray-100{\n    background-color: hsl(216, 33%, 97%);\n  }\n\n  .lg\\:bg-gray-200{\n    background-color: hsl(214, 15%, 91%);\n  }\n\n  .lg\\:bg-gray-300{\n    background-color: hsl(210, 16%, 82%);\n  }\n\n  .lg\\:bg-gray-400{\n    background-color: hsl(211, 13%, 65%);\n  }\n\n  .lg\\:bg-gray-500{\n    background-color: hsl(211, 10%, 53%);\n  }\n\n  .lg\\:bg-gray-600{\n    background-color: hsl(211, 12%, 43%);\n  }\n\n  .lg\\:bg-gray-700{\n    background-color: hsl(209, 14%, 37%);\n  }\n\n  .lg\\:bg-gray-800{\n    background-color: hsl(209, 18%, 30%);\n  }\n\n  .lg\\:bg-gray-900{\n    background-color: hsl(209, 20%, 25%);\n  }\n\n  .lg\\:bg-gray-1000{\n    background-color: hsl(210, 24%, 16%);\n  }\n\n  .lg\\:bg-red-100{\n    background-color: hsl(360, 100%, 95%);\n  }\n\n  .lg\\:bg-red-200{\n    background-color: hsl(360, 100%, 87%);\n  }\n\n  .lg\\:bg-red-300{\n    background-color: hsl(360, 100%, 80%);\n  }\n\n  .lg\\:bg-red-400{\n    background-color: hsl(360, 91%, 69%);\n  }\n\n  .lg\\:bg-red-500{\n    background-color: hsl(360, 83%, 62%);\n  }\n\n  .lg\\:bg-red-600{\n    background-color: hsl(356, 75%, 53%);\n  }\n\n  .lg\\:bg-red-700{\n    background-color: hsl(354, 85%, 44%);\n  }\n\n  .lg\\:bg-red-800{\n    background-color: hsl(352, 90%, 35%);\n  }\n\n  .lg\\:bg-red-900{\n    background-color: hsl(350, 94%, 28%);\n  }\n\n  .lg\\:bg-red-1000{\n    background-color: hsl(348, 94%, 20%);\n  }\n\n  .lg\\:bg-orange-100{\n    background-color: #fffaf0;\n  }\n\n  .lg\\:bg-orange-200{\n    background-color: #feebc8;\n  }\n\n  .lg\\:bg-orange-300{\n    background-color: #fbd38d;\n  }\n\n  .lg\\:bg-orange-400{\n    background-color: #f6ad55;\n  }\n\n  .lg\\:bg-orange-500{\n    background-color: #ed8936;\n  }\n\n  .lg\\:bg-orange-600{\n    background-color: #dd6b20;\n  }\n\n  .lg\\:bg-orange-700{\n    background-color: #c05621;\n  }\n\n  .lg\\:bg-orange-800{\n    background-color: #9c4221;\n  }\n\n  .lg\\:bg-orange-900{\n    background-color: #7b341e;\n  }\n\n  .lg\\:bg-yellow-100{\n    background-color: hsl(15, 86%, 30%);\n  }\n\n  .lg\\:bg-yellow-200{\n    background-color: hsl(22, 82%, 39%);\n  }\n\n  .lg\\:bg-yellow-300{\n    background-color: hsl(29, 80%, 44%);\n  }\n\n  .lg\\:bg-yellow-400{\n    background-color: hsl(36, 77%, 49%);\n  }\n\n  .lg\\:bg-yellow-500{\n    background-color: hsl(42, 87%, 55%);\n  }\n\n  .lg\\:bg-yellow-600{\n    background-color: hsl(44, 92%, 63%);\n  }\n\n  .lg\\:bg-yellow-700{\n    background-color: hsl(48, 94%, 68%);\n  }\n\n  .lg\\:bg-yellow-800{\n    background-color: hsl(48, 95%, 76%);\n  }\n\n  .lg\\:bg-yellow-900{\n    background-color: hsl(48, 100%, 88%);\n  }\n\n  .lg\\:bg-yellow-1000{\n    background-color: hsl(49, 100%, 96%);\n  }\n\n  .lg\\:bg-green-100{\n    background-color: #f0fff4;\n  }\n\n  .lg\\:bg-green-200{\n    background-color: #c6f6d5;\n  }\n\n  .lg\\:bg-green-300{\n    background-color: #9ae6b4;\n  }\n\n  .lg\\:bg-green-400{\n    background-color: #68d391;\n  }\n\n  .lg\\:bg-green-500{\n    background-color: #48bb78;\n  }\n\n  .lg\\:bg-green-600{\n    background-color: #38a169;\n  }\n\n  .lg\\:bg-green-700{\n    background-color: #2f855a;\n  }\n\n  .lg\\:bg-green-800{\n    background-color: #276749;\n  }\n\n  .lg\\:bg-green-900{\n    background-color: #22543d;\n  }\n\n  .lg\\:bg-teal-100{\n    background-color: hsl(170, 97%, 15%);\n  }\n\n  .lg\\:bg-teal-200{\n    background-color: hsl(168, 80%, 23%);\n  }\n\n  .lg\\:bg-teal-300{\n    background-color: hsl(166, 72%, 28%);\n  }\n\n  .lg\\:bg-teal-400{\n    background-color: hsl(164, 71%, 34%);\n  }\n\n  .lg\\:bg-teal-500{\n    background-color: hsl(162, 63%, 41%);\n  }\n\n  .lg\\:bg-teal-600{\n    background-color: hsl(160, 51%, 49%);\n  }\n\n  .lg\\:bg-teal-700{\n    background-color: hsl(158, 58%, 62%);\n  }\n\n  .lg\\:bg-teal-800{\n    background-color: hsl(156, 73%, 74%);\n  }\n\n  .lg\\:bg-teal-900{\n    background-color: hsl(154, 75%, 87%);\n  }\n\n  .lg\\:bg-teal-1000{\n    background-color: hsl(152, 68%, 96%);\n  }\n\n  .lg\\:bg-blue-100{\n    background-color: hsl(195, 100%, 95%);\n  }\n\n  .lg\\:bg-blue-200{\n    background-color: hsl(195, 100%, 85%);\n  }\n\n  .lg\\:bg-blue-300{\n    background-color: hsl(195, 97%, 75%);\n  }\n\n  .lg\\:bg-blue-400{\n    background-color: hsl(196, 94%, 67%);\n  }\n\n  .lg\\:bg-blue-500{\n    background-color: hsl(197, 92%, 61%);\n  }\n\n  .lg\\:bg-blue-600{\n    background-color: hsl(199, 84%, 55%);\n  }\n\n  .lg\\:bg-blue-700{\n    background-color: hsl(201, 79%, 46%);\n  }\n\n  .lg\\:bg-blue-800{\n    background-color: hsl(202, 83%, 41%);\n  }\n\n  .lg\\:bg-blue-900{\n    background-color: hsl(203, 87%, 34%);\n  }\n\n  .lg\\:bg-blue-1000{\n    background-color: hsl(204, 96%, 27%);\n  }\n\n  .lg\\:bg-indigo-100{\n    background-color: hsl(221, 68%, 93%);\n  }\n\n  .lg\\:bg-indigo-200{\n    background-color: hsl(221, 78%, 86%);\n  }\n\n  .lg\\:bg-indigo-300{\n    background-color: hsl(224, 67%, 76%);\n  }\n\n  .lg\\:bg-indigo-400{\n    background-color: hsl(225, 57%, 67%);\n  }\n\n  .lg\\:bg-indigo-500{\n    background-color: hsl(227, 50%, 59%);\n  }\n\n  .lg\\:bg-indigo-600{\n    background-color: hsl(227, 42%, 51%);\n  }\n\n  .lg\\:bg-indigo-700{\n    background-color: hsl(228, 45%, 45%);\n  }\n\n  .lg\\:bg-indigo-800{\n    background-color: hsl(230, 49%, 41%);\n  }\n\n  .lg\\:bg-indigo-900{\n    background-color: hsl(232, 51%, 36%);\n  }\n\n  .lg\\:bg-indigo-1000{\n    background-color: hsl(234, 62%, 26%);\n  }\n\n  .lg\\:bg-purple-100{\n    background-color: #faf5ff;\n  }\n\n  .lg\\:bg-purple-200{\n    background-color: #e9d8fd;\n  }\n\n  .lg\\:bg-purple-300{\n    background-color: #d6bcfa;\n  }\n\n  .lg\\:bg-purple-400{\n    background-color: #b794f4;\n  }\n\n  .lg\\:bg-purple-500{\n    background-color: #9f7aea;\n  }\n\n  .lg\\:bg-purple-600{\n    background-color: #805ad5;\n  }\n\n  .lg\\:bg-purple-700{\n    background-color: #6b46c1;\n  }\n\n  .lg\\:bg-purple-800{\n    background-color: #553c9a;\n  }\n\n  .lg\\:bg-purple-900{\n    background-color: #44337a;\n  }\n\n  .lg\\:bg-pink-100{\n    background-color: #fff5f7;\n  }\n\n  .lg\\:bg-pink-200{\n    background-color: #fed7e2;\n  }\n\n  .lg\\:bg-pink-300{\n    background-color: #fbb6ce;\n  }\n\n  .lg\\:bg-pink-400{\n    background-color: #f687b3;\n  }\n\n  .lg\\:bg-pink-500{\n    background-color: #ed64a6;\n  }\n\n  .lg\\:bg-pink-600{\n    background-color: #d53f8c;\n  }\n\n  .lg\\:bg-pink-700{\n    background-color: #b83280;\n  }\n\n  .lg\\:bg-pink-800{\n    background-color: #97266d;\n  }\n\n  .lg\\:bg-pink-900{\n    background-color: #702459;\n  }\n\n  .lg\\:hover\\:bg-transparent:hover{\n    background-color: transparent;\n  }\n\n  .lg\\:hover\\:bg-black:hover{\n    background-color: #000;\n  }\n\n  .lg\\:hover\\:bg-white:hover{\n    background-color: #fff;\n  }\n\n  .lg\\:hover\\:bg-gray-100:hover{\n    background-color: hsl(216, 33%, 97%);\n  }\n\n  .lg\\:hover\\:bg-gray-200:hover{\n    background-color: hsl(214, 15%, 91%);\n  }\n\n  .lg\\:hover\\:bg-gray-300:hover{\n    background-color: hsl(210, 16%, 82%);\n  }\n\n  .lg\\:hover\\:bg-gray-400:hover{\n    background-color: hsl(211, 13%, 65%);\n  }\n\n  .lg\\:hover\\:bg-gray-500:hover{\n    background-color: hsl(211, 10%, 53%);\n  }\n\n  .lg\\:hover\\:bg-gray-600:hover{\n    background-color: hsl(211, 12%, 43%);\n  }\n\n  .lg\\:hover\\:bg-gray-700:hover{\n    background-color: hsl(209, 14%, 37%);\n  }\n\n  .lg\\:hover\\:bg-gray-800:hover{\n    background-color: hsl(209, 18%, 30%);\n  }\n\n  .lg\\:hover\\:bg-gray-900:hover{\n    background-color: hsl(209, 20%, 25%);\n  }\n\n  .lg\\:hover\\:bg-gray-1000:hover{\n    background-color: hsl(210, 24%, 16%);\n  }\n\n  .lg\\:hover\\:bg-red-100:hover{\n    background-color: hsl(360, 100%, 95%);\n  }\n\n  .lg\\:hover\\:bg-red-200:hover{\n    background-color: hsl(360, 100%, 87%);\n  }\n\n  .lg\\:hover\\:bg-red-300:hover{\n    background-color: hsl(360, 100%, 80%);\n  }\n\n  .lg\\:hover\\:bg-red-400:hover{\n    background-color: hsl(360, 91%, 69%);\n  }\n\n  .lg\\:hover\\:bg-red-500:hover{\n    background-color: hsl(360, 83%, 62%);\n  }\n\n  .lg\\:hover\\:bg-red-600:hover{\n    background-color: hsl(356, 75%, 53%);\n  }\n\n  .lg\\:hover\\:bg-red-700:hover{\n    background-color: hsl(354, 85%, 44%);\n  }\n\n  .lg\\:hover\\:bg-red-800:hover{\n    background-color: hsl(352, 90%, 35%);\n  }\n\n  .lg\\:hover\\:bg-red-900:hover{\n    background-color: hsl(350, 94%, 28%);\n  }\n\n  .lg\\:hover\\:bg-red-1000:hover{\n    background-color: hsl(348, 94%, 20%);\n  }\n\n  .lg\\:hover\\:bg-orange-100:hover{\n    background-color: #fffaf0;\n  }\n\n  .lg\\:hover\\:bg-orange-200:hover{\n    background-color: #feebc8;\n  }\n\n  .lg\\:hover\\:bg-orange-300:hover{\n    background-color: #fbd38d;\n  }\n\n  .lg\\:hover\\:bg-orange-400:hover{\n    background-color: #f6ad55;\n  }\n\n  .lg\\:hover\\:bg-orange-500:hover{\n    background-color: #ed8936;\n  }\n\n  .lg\\:hover\\:bg-orange-600:hover{\n    background-color: #dd6b20;\n  }\n\n  .lg\\:hover\\:bg-orange-700:hover{\n    background-color: #c05621;\n  }\n\n  .lg\\:hover\\:bg-orange-800:hover{\n    background-color: #9c4221;\n  }\n\n  .lg\\:hover\\:bg-orange-900:hover{\n    background-color: #7b341e;\n  }\n\n  .lg\\:hover\\:bg-yellow-100:hover{\n    background-color: hsl(15, 86%, 30%);\n  }\n\n  .lg\\:hover\\:bg-yellow-200:hover{\n    background-color: hsl(22, 82%, 39%);\n  }\n\n  .lg\\:hover\\:bg-yellow-300:hover{\n    background-color: hsl(29, 80%, 44%);\n  }\n\n  .lg\\:hover\\:bg-yellow-400:hover{\n    background-color: hsl(36, 77%, 49%);\n  }\n\n  .lg\\:hover\\:bg-yellow-500:hover{\n    background-color: hsl(42, 87%, 55%);\n  }\n\n  .lg\\:hover\\:bg-yellow-600:hover{\n    background-color: hsl(44, 92%, 63%);\n  }\n\n  .lg\\:hover\\:bg-yellow-700:hover{\n    background-color: hsl(48, 94%, 68%);\n  }\n\n  .lg\\:hover\\:bg-yellow-800:hover{\n    background-color: hsl(48, 95%, 76%);\n  }\n\n  .lg\\:hover\\:bg-yellow-900:hover{\n    background-color: hsl(48, 100%, 88%);\n  }\n\n  .lg\\:hover\\:bg-yellow-1000:hover{\n    background-color: hsl(49, 100%, 96%);\n  }\n\n  .lg\\:hover\\:bg-green-100:hover{\n    background-color: #f0fff4;\n  }\n\n  .lg\\:hover\\:bg-green-200:hover{\n    background-color: #c6f6d5;\n  }\n\n  .lg\\:hover\\:bg-green-300:hover{\n    background-color: #9ae6b4;\n  }\n\n  .lg\\:hover\\:bg-green-400:hover{\n    background-color: #68d391;\n  }\n\n  .lg\\:hover\\:bg-green-500:hover{\n    background-color: #48bb78;\n  }\n\n  .lg\\:hover\\:bg-green-600:hover{\n    background-color: #38a169;\n  }\n\n  .lg\\:hover\\:bg-green-700:hover{\n    background-color: #2f855a;\n  }\n\n  .lg\\:hover\\:bg-green-800:hover{\n    background-color: #276749;\n  }\n\n  .lg\\:hover\\:bg-green-900:hover{\n    background-color: #22543d;\n  }\n\n  .lg\\:hover\\:bg-teal-100:hover{\n    background-color: hsl(170, 97%, 15%);\n  }\n\n  .lg\\:hover\\:bg-teal-200:hover{\n    background-color: hsl(168, 80%, 23%);\n  }\n\n  .lg\\:hover\\:bg-teal-300:hover{\n    background-color: hsl(166, 72%, 28%);\n  }\n\n  .lg\\:hover\\:bg-teal-400:hover{\n    background-color: hsl(164, 71%, 34%);\n  }\n\n  .lg\\:hover\\:bg-teal-500:hover{\n    background-color: hsl(162, 63%, 41%);\n  }\n\n  .lg\\:hover\\:bg-teal-600:hover{\n    background-color: hsl(160, 51%, 49%);\n  }\n\n  .lg\\:hover\\:bg-teal-700:hover{\n    background-color: hsl(158, 58%, 62%);\n  }\n\n  .lg\\:hover\\:bg-teal-800:hover{\n    background-color: hsl(156, 73%, 74%);\n  }\n\n  .lg\\:hover\\:bg-teal-900:hover{\n    background-color: hsl(154, 75%, 87%);\n  }\n\n  .lg\\:hover\\:bg-teal-1000:hover{\n    background-color: hsl(152, 68%, 96%);\n  }\n\n  .lg\\:hover\\:bg-blue-100:hover{\n    background-color: hsl(195, 100%, 95%);\n  }\n\n  .lg\\:hover\\:bg-blue-200:hover{\n    background-color: hsl(195, 100%, 85%);\n  }\n\n  .lg\\:hover\\:bg-blue-300:hover{\n    background-color: hsl(195, 97%, 75%);\n  }\n\n  .lg\\:hover\\:bg-blue-400:hover{\n    background-color: hsl(196, 94%, 67%);\n  }\n\n  .lg\\:hover\\:bg-blue-500:hover{\n    background-color: hsl(197, 92%, 61%);\n  }\n\n  .lg\\:hover\\:bg-blue-600:hover{\n    background-color: hsl(199, 84%, 55%);\n  }\n\n  .lg\\:hover\\:bg-blue-700:hover{\n    background-color: hsl(201, 79%, 46%);\n  }\n\n  .lg\\:hover\\:bg-blue-800:hover{\n    background-color: hsl(202, 83%, 41%);\n  }\n\n  .lg\\:hover\\:bg-blue-900:hover{\n    background-color: hsl(203, 87%, 34%);\n  }\n\n  .lg\\:hover\\:bg-blue-1000:hover{\n    background-color: hsl(204, 96%, 27%);\n  }\n\n  .lg\\:hover\\:bg-indigo-100:hover{\n    background-color: hsl(221, 68%, 93%);\n  }\n\n  .lg\\:hover\\:bg-indigo-200:hover{\n    background-color: hsl(221, 78%, 86%);\n  }\n\n  .lg\\:hover\\:bg-indigo-300:hover{\n    background-color: hsl(224, 67%, 76%);\n  }\n\n  .lg\\:hover\\:bg-indigo-400:hover{\n    background-color: hsl(225, 57%, 67%);\n  }\n\n  .lg\\:hover\\:bg-indigo-500:hover{\n    background-color: hsl(227, 50%, 59%);\n  }\n\n  .lg\\:hover\\:bg-indigo-600:hover{\n    background-color: hsl(227, 42%, 51%);\n  }\n\n  .lg\\:hover\\:bg-indigo-700:hover{\n    background-color: hsl(228, 45%, 45%);\n  }\n\n  .lg\\:hover\\:bg-indigo-800:hover{\n    background-color: hsl(230, 49%, 41%);\n  }\n\n  .lg\\:hover\\:bg-indigo-900:hover{\n    background-color: hsl(232, 51%, 36%);\n  }\n\n  .lg\\:hover\\:bg-indigo-1000:hover{\n    background-color: hsl(234, 62%, 26%);\n  }\n\n  .lg\\:hover\\:bg-purple-100:hover{\n    background-color: #faf5ff;\n  }\n\n  .lg\\:hover\\:bg-purple-200:hover{\n    background-color: #e9d8fd;\n  }\n\n  .lg\\:hover\\:bg-purple-300:hover{\n    background-color: #d6bcfa;\n  }\n\n  .lg\\:hover\\:bg-purple-400:hover{\n    background-color: #b794f4;\n  }\n\n  .lg\\:hover\\:bg-purple-500:hover{\n    background-color: #9f7aea;\n  }\n\n  .lg\\:hover\\:bg-purple-600:hover{\n    background-color: #805ad5;\n  }\n\n  .lg\\:hover\\:bg-purple-700:hover{\n    background-color: #6b46c1;\n  }\n\n  .lg\\:hover\\:bg-purple-800:hover{\n    background-color: #553c9a;\n  }\n\n  .lg\\:hover\\:bg-purple-900:hover{\n    background-color: #44337a;\n  }\n\n  .lg\\:hover\\:bg-pink-100:hover{\n    background-color: #fff5f7;\n  }\n\n  .lg\\:hover\\:bg-pink-200:hover{\n    background-color: #fed7e2;\n  }\n\n  .lg\\:hover\\:bg-pink-300:hover{\n    background-color: #fbb6ce;\n  }\n\n  .lg\\:hover\\:bg-pink-400:hover{\n    background-color: #f687b3;\n  }\n\n  .lg\\:hover\\:bg-pink-500:hover{\n    background-color: #ed64a6;\n  }\n\n  .lg\\:hover\\:bg-pink-600:hover{\n    background-color: #d53f8c;\n  }\n\n  .lg\\:hover\\:bg-pink-700:hover{\n    background-color: #b83280;\n  }\n\n  .lg\\:hover\\:bg-pink-800:hover{\n    background-color: #97266d;\n  }\n\n  .lg\\:hover\\:bg-pink-900:hover{\n    background-color: #702459;\n  }\n\n  .lg\\:focus\\:bg-transparent:focus{\n    background-color: transparent;\n  }\n\n  .lg\\:focus\\:bg-black:focus{\n    background-color: #000;\n  }\n\n  .lg\\:focus\\:bg-white:focus{\n    background-color: #fff;\n  }\n\n  .lg\\:focus\\:bg-gray-100:focus{\n    background-color: hsl(216, 33%, 97%);\n  }\n\n  .lg\\:focus\\:bg-gray-200:focus{\n    background-color: hsl(214, 15%, 91%);\n  }\n\n  .lg\\:focus\\:bg-gray-300:focus{\n    background-color: hsl(210, 16%, 82%);\n  }\n\n  .lg\\:focus\\:bg-gray-400:focus{\n    background-color: hsl(211, 13%, 65%);\n  }\n\n  .lg\\:focus\\:bg-gray-500:focus{\n    background-color: hsl(211, 10%, 53%);\n  }\n\n  .lg\\:focus\\:bg-gray-600:focus{\n    background-color: hsl(211, 12%, 43%);\n  }\n\n  .lg\\:focus\\:bg-gray-700:focus{\n    background-color: hsl(209, 14%, 37%);\n  }\n\n  .lg\\:focus\\:bg-gray-800:focus{\n    background-color: hsl(209, 18%, 30%);\n  }\n\n  .lg\\:focus\\:bg-gray-900:focus{\n    background-color: hsl(209, 20%, 25%);\n  }\n\n  .lg\\:focus\\:bg-gray-1000:focus{\n    background-color: hsl(210, 24%, 16%);\n  }\n\n  .lg\\:focus\\:bg-red-100:focus{\n    background-color: hsl(360, 100%, 95%);\n  }\n\n  .lg\\:focus\\:bg-red-200:focus{\n    background-color: hsl(360, 100%, 87%);\n  }\n\n  .lg\\:focus\\:bg-red-300:focus{\n    background-color: hsl(360, 100%, 80%);\n  }\n\n  .lg\\:focus\\:bg-red-400:focus{\n    background-color: hsl(360, 91%, 69%);\n  }\n\n  .lg\\:focus\\:bg-red-500:focus{\n    background-color: hsl(360, 83%, 62%);\n  }\n\n  .lg\\:focus\\:bg-red-600:focus{\n    background-color: hsl(356, 75%, 53%);\n  }\n\n  .lg\\:focus\\:bg-red-700:focus{\n    background-color: hsl(354, 85%, 44%);\n  }\n\n  .lg\\:focus\\:bg-red-800:focus{\n    background-color: hsl(352, 90%, 35%);\n  }\n\n  .lg\\:focus\\:bg-red-900:focus{\n    background-color: hsl(350, 94%, 28%);\n  }\n\n  .lg\\:focus\\:bg-red-1000:focus{\n    background-color: hsl(348, 94%, 20%);\n  }\n\n  .lg\\:focus\\:bg-orange-100:focus{\n    background-color: #fffaf0;\n  }\n\n  .lg\\:focus\\:bg-orange-200:focus{\n    background-color: #feebc8;\n  }\n\n  .lg\\:focus\\:bg-orange-300:focus{\n    background-color: #fbd38d;\n  }\n\n  .lg\\:focus\\:bg-orange-400:focus{\n    background-color: #f6ad55;\n  }\n\n  .lg\\:focus\\:bg-orange-500:focus{\n    background-color: #ed8936;\n  }\n\n  .lg\\:focus\\:bg-orange-600:focus{\n    background-color: #dd6b20;\n  }\n\n  .lg\\:focus\\:bg-orange-700:focus{\n    background-color: #c05621;\n  }\n\n  .lg\\:focus\\:bg-orange-800:focus{\n    background-color: #9c4221;\n  }\n\n  .lg\\:focus\\:bg-orange-900:focus{\n    background-color: #7b341e;\n  }\n\n  .lg\\:focus\\:bg-yellow-100:focus{\n    background-color: hsl(15, 86%, 30%);\n  }\n\n  .lg\\:focus\\:bg-yellow-200:focus{\n    background-color: hsl(22, 82%, 39%);\n  }\n\n  .lg\\:focus\\:bg-yellow-300:focus{\n    background-color: hsl(29, 80%, 44%);\n  }\n\n  .lg\\:focus\\:bg-yellow-400:focus{\n    background-color: hsl(36, 77%, 49%);\n  }\n\n  .lg\\:focus\\:bg-yellow-500:focus{\n    background-color: hsl(42, 87%, 55%);\n  }\n\n  .lg\\:focus\\:bg-yellow-600:focus{\n    background-color: hsl(44, 92%, 63%);\n  }\n\n  .lg\\:focus\\:bg-yellow-700:focus{\n    background-color: hsl(48, 94%, 68%);\n  }\n\n  .lg\\:focus\\:bg-yellow-800:focus{\n    background-color: hsl(48, 95%, 76%);\n  }\n\n  .lg\\:focus\\:bg-yellow-900:focus{\n    background-color: hsl(48, 100%, 88%);\n  }\n\n  .lg\\:focus\\:bg-yellow-1000:focus{\n    background-color: hsl(49, 100%, 96%);\n  }\n\n  .lg\\:focus\\:bg-green-100:focus{\n    background-color: #f0fff4;\n  }\n\n  .lg\\:focus\\:bg-green-200:focus{\n    background-color: #c6f6d5;\n  }\n\n  .lg\\:focus\\:bg-green-300:focus{\n    background-color: #9ae6b4;\n  }\n\n  .lg\\:focus\\:bg-green-400:focus{\n    background-color: #68d391;\n  }\n\n  .lg\\:focus\\:bg-green-500:focus{\n    background-color: #48bb78;\n  }\n\n  .lg\\:focus\\:bg-green-600:focus{\n    background-color: #38a169;\n  }\n\n  .lg\\:focus\\:bg-green-700:focus{\n    background-color: #2f855a;\n  }\n\n  .lg\\:focus\\:bg-green-800:focus{\n    background-color: #276749;\n  }\n\n  .lg\\:focus\\:bg-green-900:focus{\n    background-color: #22543d;\n  }\n\n  .lg\\:focus\\:bg-teal-100:focus{\n    background-color: hsl(170, 97%, 15%);\n  }\n\n  .lg\\:focus\\:bg-teal-200:focus{\n    background-color: hsl(168, 80%, 23%);\n  }\n\n  .lg\\:focus\\:bg-teal-300:focus{\n    background-color: hsl(166, 72%, 28%);\n  }\n\n  .lg\\:focus\\:bg-teal-400:focus{\n    background-color: hsl(164, 71%, 34%);\n  }\n\n  .lg\\:focus\\:bg-teal-500:focus{\n    background-color: hsl(162, 63%, 41%);\n  }\n\n  .lg\\:focus\\:bg-teal-600:focus{\n    background-color: hsl(160, 51%, 49%);\n  }\n\n  .lg\\:focus\\:bg-teal-700:focus{\n    background-color: hsl(158, 58%, 62%);\n  }\n\n  .lg\\:focus\\:bg-teal-800:focus{\n    background-color: hsl(156, 73%, 74%);\n  }\n\n  .lg\\:focus\\:bg-teal-900:focus{\n    background-color: hsl(154, 75%, 87%);\n  }\n\n  .lg\\:focus\\:bg-teal-1000:focus{\n    background-color: hsl(152, 68%, 96%);\n  }\n\n  .lg\\:focus\\:bg-blue-100:focus{\n    background-color: hsl(195, 100%, 95%);\n  }\n\n  .lg\\:focus\\:bg-blue-200:focus{\n    background-color: hsl(195, 100%, 85%);\n  }\n\n  .lg\\:focus\\:bg-blue-300:focus{\n    background-color: hsl(195, 97%, 75%);\n  }\n\n  .lg\\:focus\\:bg-blue-400:focus{\n    background-color: hsl(196, 94%, 67%);\n  }\n\n  .lg\\:focus\\:bg-blue-500:focus{\n    background-color: hsl(197, 92%, 61%);\n  }\n\n  .lg\\:focus\\:bg-blue-600:focus{\n    background-color: hsl(199, 84%, 55%);\n  }\n\n  .lg\\:focus\\:bg-blue-700:focus{\n    background-color: hsl(201, 79%, 46%);\n  }\n\n  .lg\\:focus\\:bg-blue-800:focus{\n    background-color: hsl(202, 83%, 41%);\n  }\n\n  .lg\\:focus\\:bg-blue-900:focus{\n    background-color: hsl(203, 87%, 34%);\n  }\n\n  .lg\\:focus\\:bg-blue-1000:focus{\n    background-color: hsl(204, 96%, 27%);\n  }\n\n  .lg\\:focus\\:bg-indigo-100:focus{\n    background-color: hsl(221, 68%, 93%);\n  }\n\n  .lg\\:focus\\:bg-indigo-200:focus{\n    background-color: hsl(221, 78%, 86%);\n  }\n\n  .lg\\:focus\\:bg-indigo-300:focus{\n    background-color: hsl(224, 67%, 76%);\n  }\n\n  .lg\\:focus\\:bg-indigo-400:focus{\n    background-color: hsl(225, 57%, 67%);\n  }\n\n  .lg\\:focus\\:bg-indigo-500:focus{\n    background-color: hsl(227, 50%, 59%);\n  }\n\n  .lg\\:focus\\:bg-indigo-600:focus{\n    background-color: hsl(227, 42%, 51%);\n  }\n\n  .lg\\:focus\\:bg-indigo-700:focus{\n    background-color: hsl(228, 45%, 45%);\n  }\n\n  .lg\\:focus\\:bg-indigo-800:focus{\n    background-color: hsl(230, 49%, 41%);\n  }\n\n  .lg\\:focus\\:bg-indigo-900:focus{\n    background-color: hsl(232, 51%, 36%);\n  }\n\n  .lg\\:focus\\:bg-indigo-1000:focus{\n    background-color: hsl(234, 62%, 26%);\n  }\n\n  .lg\\:focus\\:bg-purple-100:focus{\n    background-color: #faf5ff;\n  }\n\n  .lg\\:focus\\:bg-purple-200:focus{\n    background-color: #e9d8fd;\n  }\n\n  .lg\\:focus\\:bg-purple-300:focus{\n    background-color: #d6bcfa;\n  }\n\n  .lg\\:focus\\:bg-purple-400:focus{\n    background-color: #b794f4;\n  }\n\n  .lg\\:focus\\:bg-purple-500:focus{\n    background-color: #9f7aea;\n  }\n\n  .lg\\:focus\\:bg-purple-600:focus{\n    background-color: #805ad5;\n  }\n\n  .lg\\:focus\\:bg-purple-700:focus{\n    background-color: #6b46c1;\n  }\n\n  .lg\\:focus\\:bg-purple-800:focus{\n    background-color: #553c9a;\n  }\n\n  .lg\\:focus\\:bg-purple-900:focus{\n    background-color: #44337a;\n  }\n\n  .lg\\:focus\\:bg-pink-100:focus{\n    background-color: #fff5f7;\n  }\n\n  .lg\\:focus\\:bg-pink-200:focus{\n    background-color: #fed7e2;\n  }\n\n  .lg\\:focus\\:bg-pink-300:focus{\n    background-color: #fbb6ce;\n  }\n\n  .lg\\:focus\\:bg-pink-400:focus{\n    background-color: #f687b3;\n  }\n\n  .lg\\:focus\\:bg-pink-500:focus{\n    background-color: #ed64a6;\n  }\n\n  .lg\\:focus\\:bg-pink-600:focus{\n    background-color: #d53f8c;\n  }\n\n  .lg\\:focus\\:bg-pink-700:focus{\n    background-color: #b83280;\n  }\n\n  .lg\\:focus\\:bg-pink-800:focus{\n    background-color: #97266d;\n  }\n\n  .lg\\:focus\\:bg-pink-900:focus{\n    background-color: #702459;\n  }\n\n  .lg\\:bg-bottom{\n    background-position: bottom;\n  }\n\n  .lg\\:bg-center{\n    background-position: center;\n  }\n\n  .lg\\:bg-left{\n    background-position: left;\n  }\n\n  .lg\\:bg-left-bottom{\n    background-position: left bottom;\n  }\n\n  .lg\\:bg-left-top{\n    background-position: left top;\n  }\n\n  .lg\\:bg-right{\n    background-position: right;\n  }\n\n  .lg\\:bg-right-bottom{\n    background-position: right bottom;\n  }\n\n  .lg\\:bg-right-top{\n    background-position: right top;\n  }\n\n  .lg\\:bg-top{\n    background-position: top;\n  }\n\n  .lg\\:bg-repeat{\n    background-repeat: repeat;\n  }\n\n  .lg\\:bg-no-repeat{\n    background-repeat: no-repeat;\n  }\n\n  .lg\\:bg-repeat-x{\n    background-repeat: repeat-x;\n  }\n\n  .lg\\:bg-repeat-y{\n    background-repeat: repeat-y;\n  }\n\n  .lg\\:bg-repeat-round{\n    background-repeat: round;\n  }\n\n  .lg\\:bg-repeat-space{\n    background-repeat: space;\n  }\n\n  .lg\\:bg-auto{\n    background-size: auto;\n  }\n\n  .lg\\:bg-cover{\n    background-size: cover;\n  }\n\n  .lg\\:bg-contain{\n    background-size: contain;\n  }\n\n  .lg\\:border-collapse{\n    border-collapse: collapse;\n  }\n\n  .lg\\:border-separate{\n    border-collapse: separate;\n  }\n\n  .lg\\:border-transparent{\n    border-color: transparent;\n  }\n\n  .lg\\:border-black{\n    border-color: #000;\n  }\n\n  .lg\\:border-white{\n    border-color: #fff;\n  }\n\n  .lg\\:border-gray-100{\n    border-color: hsl(216, 33%, 97%);\n  }\n\n  .lg\\:border-gray-200{\n    border-color: hsl(214, 15%, 91%);\n  }\n\n  .lg\\:border-gray-300{\n    border-color: hsl(210, 16%, 82%);\n  }\n\n  .lg\\:border-gray-400{\n    border-color: hsl(211, 13%, 65%);\n  }\n\n  .lg\\:border-gray-500{\n    border-color: hsl(211, 10%, 53%);\n  }\n\n  .lg\\:border-gray-600{\n    border-color: hsl(211, 12%, 43%);\n  }\n\n  .lg\\:border-gray-700{\n    border-color: hsl(209, 14%, 37%);\n  }\n\n  .lg\\:border-gray-800{\n    border-color: hsl(209, 18%, 30%);\n  }\n\n  .lg\\:border-gray-900{\n    border-color: hsl(209, 20%, 25%);\n  }\n\n  .lg\\:border-gray-1000{\n    border-color: hsl(210, 24%, 16%);\n  }\n\n  .lg\\:border-red-100{\n    border-color: hsl(360, 100%, 95%);\n  }\n\n  .lg\\:border-red-200{\n    border-color: hsl(360, 100%, 87%);\n  }\n\n  .lg\\:border-red-300{\n    border-color: hsl(360, 100%, 80%);\n  }\n\n  .lg\\:border-red-400{\n    border-color: hsl(360, 91%, 69%);\n  }\n\n  .lg\\:border-red-500{\n    border-color: hsl(360, 83%, 62%);\n  }\n\n  .lg\\:border-red-600{\n    border-color: hsl(356, 75%, 53%);\n  }\n\n  .lg\\:border-red-700{\n    border-color: hsl(354, 85%, 44%);\n  }\n\n  .lg\\:border-red-800{\n    border-color: hsl(352, 90%, 35%);\n  }\n\n  .lg\\:border-red-900{\n    border-color: hsl(350, 94%, 28%);\n  }\n\n  .lg\\:border-red-1000{\n    border-color: hsl(348, 94%, 20%);\n  }\n\n  .lg\\:border-orange-100{\n    border-color: #fffaf0;\n  }\n\n  .lg\\:border-orange-200{\n    border-color: #feebc8;\n  }\n\n  .lg\\:border-orange-300{\n    border-color: #fbd38d;\n  }\n\n  .lg\\:border-orange-400{\n    border-color: #f6ad55;\n  }\n\n  .lg\\:border-orange-500{\n    border-color: #ed8936;\n  }\n\n  .lg\\:border-orange-600{\n    border-color: #dd6b20;\n  }\n\n  .lg\\:border-orange-700{\n    border-color: #c05621;\n  }\n\n  .lg\\:border-orange-800{\n    border-color: #9c4221;\n  }\n\n  .lg\\:border-orange-900{\n    border-color: #7b341e;\n  }\n\n  .lg\\:border-yellow-100{\n    border-color: hsl(15, 86%, 30%);\n  }\n\n  .lg\\:border-yellow-200{\n    border-color: hsl(22, 82%, 39%);\n  }\n\n  .lg\\:border-yellow-300{\n    border-color: hsl(29, 80%, 44%);\n  }\n\n  .lg\\:border-yellow-400{\n    border-color: hsl(36, 77%, 49%);\n  }\n\n  .lg\\:border-yellow-500{\n    border-color: hsl(42, 87%, 55%);\n  }\n\n  .lg\\:border-yellow-600{\n    border-color: hsl(44, 92%, 63%);\n  }\n\n  .lg\\:border-yellow-700{\n    border-color: hsl(48, 94%, 68%);\n  }\n\n  .lg\\:border-yellow-800{\n    border-color: hsl(48, 95%, 76%);\n  }\n\n  .lg\\:border-yellow-900{\n    border-color: hsl(48, 100%, 88%);\n  }\n\n  .lg\\:border-yellow-1000{\n    border-color: hsl(49, 100%, 96%);\n  }\n\n  .lg\\:border-green-100{\n    border-color: #f0fff4;\n  }\n\n  .lg\\:border-green-200{\n    border-color: #c6f6d5;\n  }\n\n  .lg\\:border-green-300{\n    border-color: #9ae6b4;\n  }\n\n  .lg\\:border-green-400{\n    border-color: #68d391;\n  }\n\n  .lg\\:border-green-500{\n    border-color: #48bb78;\n  }\n\n  .lg\\:border-green-600{\n    border-color: #38a169;\n  }\n\n  .lg\\:border-green-700{\n    border-color: #2f855a;\n  }\n\n  .lg\\:border-green-800{\n    border-color: #276749;\n  }\n\n  .lg\\:border-green-900{\n    border-color: #22543d;\n  }\n\n  .lg\\:border-teal-100{\n    border-color: hsl(170, 97%, 15%);\n  }\n\n  .lg\\:border-teal-200{\n    border-color: hsl(168, 80%, 23%);\n  }\n\n  .lg\\:border-teal-300{\n    border-color: hsl(166, 72%, 28%);\n  }\n\n  .lg\\:border-teal-400{\n    border-color: hsl(164, 71%, 34%);\n  }\n\n  .lg\\:border-teal-500{\n    border-color: hsl(162, 63%, 41%);\n  }\n\n  .lg\\:border-teal-600{\n    border-color: hsl(160, 51%, 49%);\n  }\n\n  .lg\\:border-teal-700{\n    border-color: hsl(158, 58%, 62%);\n  }\n\n  .lg\\:border-teal-800{\n    border-color: hsl(156, 73%, 74%);\n  }\n\n  .lg\\:border-teal-900{\n    border-color: hsl(154, 75%, 87%);\n  }\n\n  .lg\\:border-teal-1000{\n    border-color: hsl(152, 68%, 96%);\n  }\n\n  .lg\\:border-blue-100{\n    border-color: hsl(195, 100%, 95%);\n  }\n\n  .lg\\:border-blue-200{\n    border-color: hsl(195, 100%, 85%);\n  }\n\n  .lg\\:border-blue-300{\n    border-color: hsl(195, 97%, 75%);\n  }\n\n  .lg\\:border-blue-400{\n    border-color: hsl(196, 94%, 67%);\n  }\n\n  .lg\\:border-blue-500{\n    border-color: hsl(197, 92%, 61%);\n  }\n\n  .lg\\:border-blue-600{\n    border-color: hsl(199, 84%, 55%);\n  }\n\n  .lg\\:border-blue-700{\n    border-color: hsl(201, 79%, 46%);\n  }\n\n  .lg\\:border-blue-800{\n    border-color: hsl(202, 83%, 41%);\n  }\n\n  .lg\\:border-blue-900{\n    border-color: hsl(203, 87%, 34%);\n  }\n\n  .lg\\:border-blue-1000{\n    border-color: hsl(204, 96%, 27%);\n  }\n\n  .lg\\:border-indigo-100{\n    border-color: hsl(221, 68%, 93%);\n  }\n\n  .lg\\:border-indigo-200{\n    border-color: hsl(221, 78%, 86%);\n  }\n\n  .lg\\:border-indigo-300{\n    border-color: hsl(224, 67%, 76%);\n  }\n\n  .lg\\:border-indigo-400{\n    border-color: hsl(225, 57%, 67%);\n  }\n\n  .lg\\:border-indigo-500{\n    border-color: hsl(227, 50%, 59%);\n  }\n\n  .lg\\:border-indigo-600{\n    border-color: hsl(227, 42%, 51%);\n  }\n\n  .lg\\:border-indigo-700{\n    border-color: hsl(228, 45%, 45%);\n  }\n\n  .lg\\:border-indigo-800{\n    border-color: hsl(230, 49%, 41%);\n  }\n\n  .lg\\:border-indigo-900{\n    border-color: hsl(232, 51%, 36%);\n  }\n\n  .lg\\:border-indigo-1000{\n    border-color: hsl(234, 62%, 26%);\n  }\n\n  .lg\\:border-purple-100{\n    border-color: #faf5ff;\n  }\n\n  .lg\\:border-purple-200{\n    border-color: #e9d8fd;\n  }\n\n  .lg\\:border-purple-300{\n    border-color: #d6bcfa;\n  }\n\n  .lg\\:border-purple-400{\n    border-color: #b794f4;\n  }\n\n  .lg\\:border-purple-500{\n    border-color: #9f7aea;\n  }\n\n  .lg\\:border-purple-600{\n    border-color: #805ad5;\n  }\n\n  .lg\\:border-purple-700{\n    border-color: #6b46c1;\n  }\n\n  .lg\\:border-purple-800{\n    border-color: #553c9a;\n  }\n\n  .lg\\:border-purple-900{\n    border-color: #44337a;\n  }\n\n  .lg\\:border-pink-100{\n    border-color: #fff5f7;\n  }\n\n  .lg\\:border-pink-200{\n    border-color: #fed7e2;\n  }\n\n  .lg\\:border-pink-300{\n    border-color: #fbb6ce;\n  }\n\n  .lg\\:border-pink-400{\n    border-color: #f687b3;\n  }\n\n  .lg\\:border-pink-500{\n    border-color: #ed64a6;\n  }\n\n  .lg\\:border-pink-600{\n    border-color: #d53f8c;\n  }\n\n  .lg\\:border-pink-700{\n    border-color: #b83280;\n  }\n\n  .lg\\:border-pink-800{\n    border-color: #97266d;\n  }\n\n  .lg\\:border-pink-900{\n    border-color: #702459;\n  }\n\n  .lg\\:hover\\:border-transparent:hover{\n    border-color: transparent;\n  }\n\n  .lg\\:hover\\:border-black:hover{\n    border-color: #000;\n  }\n\n  .lg\\:hover\\:border-white:hover{\n    border-color: #fff;\n  }\n\n  .lg\\:hover\\:border-gray-100:hover{\n    border-color: hsl(216, 33%, 97%);\n  }\n\n  .lg\\:hover\\:border-gray-200:hover{\n    border-color: hsl(214, 15%, 91%);\n  }\n\n  .lg\\:hover\\:border-gray-300:hover{\n    border-color: hsl(210, 16%, 82%);\n  }\n\n  .lg\\:hover\\:border-gray-400:hover{\n    border-color: hsl(211, 13%, 65%);\n  }\n\n  .lg\\:hover\\:border-gray-500:hover{\n    border-color: hsl(211, 10%, 53%);\n  }\n\n  .lg\\:hover\\:border-gray-600:hover{\n    border-color: hsl(211, 12%, 43%);\n  }\n\n  .lg\\:hover\\:border-gray-700:hover{\n    border-color: hsl(209, 14%, 37%);\n  }\n\n  .lg\\:hover\\:border-gray-800:hover{\n    border-color: hsl(209, 18%, 30%);\n  }\n\n  .lg\\:hover\\:border-gray-900:hover{\n    border-color: hsl(209, 20%, 25%);\n  }\n\n  .lg\\:hover\\:border-gray-1000:hover{\n    border-color: hsl(210, 24%, 16%);\n  }\n\n  .lg\\:hover\\:border-red-100:hover{\n    border-color: hsl(360, 100%, 95%);\n  }\n\n  .lg\\:hover\\:border-red-200:hover{\n    border-color: hsl(360, 100%, 87%);\n  }\n\n  .lg\\:hover\\:border-red-300:hover{\n    border-color: hsl(360, 100%, 80%);\n  }\n\n  .lg\\:hover\\:border-red-400:hover{\n    border-color: hsl(360, 91%, 69%);\n  }\n\n  .lg\\:hover\\:border-red-500:hover{\n    border-color: hsl(360, 83%, 62%);\n  }\n\n  .lg\\:hover\\:border-red-600:hover{\n    border-color: hsl(356, 75%, 53%);\n  }\n\n  .lg\\:hover\\:border-red-700:hover{\n    border-color: hsl(354, 85%, 44%);\n  }\n\n  .lg\\:hover\\:border-red-800:hover{\n    border-color: hsl(352, 90%, 35%);\n  }\n\n  .lg\\:hover\\:border-red-900:hover{\n    border-color: hsl(350, 94%, 28%);\n  }\n\n  .lg\\:hover\\:border-red-1000:hover{\n    border-color: hsl(348, 94%, 20%);\n  }\n\n  .lg\\:hover\\:border-orange-100:hover{\n    border-color: #fffaf0;\n  }\n\n  .lg\\:hover\\:border-orange-200:hover{\n    border-color: #feebc8;\n  }\n\n  .lg\\:hover\\:border-orange-300:hover{\n    border-color: #fbd38d;\n  }\n\n  .lg\\:hover\\:border-orange-400:hover{\n    border-color: #f6ad55;\n  }\n\n  .lg\\:hover\\:border-orange-500:hover{\n    border-color: #ed8936;\n  }\n\n  .lg\\:hover\\:border-orange-600:hover{\n    border-color: #dd6b20;\n  }\n\n  .lg\\:hover\\:border-orange-700:hover{\n    border-color: #c05621;\n  }\n\n  .lg\\:hover\\:border-orange-800:hover{\n    border-color: #9c4221;\n  }\n\n  .lg\\:hover\\:border-orange-900:hover{\n    border-color: #7b341e;\n  }\n\n  .lg\\:hover\\:border-yellow-100:hover{\n    border-color: hsl(15, 86%, 30%);\n  }\n\n  .lg\\:hover\\:border-yellow-200:hover{\n    border-color: hsl(22, 82%, 39%);\n  }\n\n  .lg\\:hover\\:border-yellow-300:hover{\n    border-color: hsl(29, 80%, 44%);\n  }\n\n  .lg\\:hover\\:border-yellow-400:hover{\n    border-color: hsl(36, 77%, 49%);\n  }\n\n  .lg\\:hover\\:border-yellow-500:hover{\n    border-color: hsl(42, 87%, 55%);\n  }\n\n  .lg\\:hover\\:border-yellow-600:hover{\n    border-color: hsl(44, 92%, 63%);\n  }\n\n  .lg\\:hover\\:border-yellow-700:hover{\n    border-color: hsl(48, 94%, 68%);\n  }\n\n  .lg\\:hover\\:border-yellow-800:hover{\n    border-color: hsl(48, 95%, 76%);\n  }\n\n  .lg\\:hover\\:border-yellow-900:hover{\n    border-color: hsl(48, 100%, 88%);\n  }\n\n  .lg\\:hover\\:border-yellow-1000:hover{\n    border-color: hsl(49, 100%, 96%);\n  }\n\n  .lg\\:hover\\:border-green-100:hover{\n    border-color: #f0fff4;\n  }\n\n  .lg\\:hover\\:border-green-200:hover{\n    border-color: #c6f6d5;\n  }\n\n  .lg\\:hover\\:border-green-300:hover{\n    border-color: #9ae6b4;\n  }\n\n  .lg\\:hover\\:border-green-400:hover{\n    border-color: #68d391;\n  }\n\n  .lg\\:hover\\:border-green-500:hover{\n    border-color: #48bb78;\n  }\n\n  .lg\\:hover\\:border-green-600:hover{\n    border-color: #38a169;\n  }\n\n  .lg\\:hover\\:border-green-700:hover{\n    border-color: #2f855a;\n  }\n\n  .lg\\:hover\\:border-green-800:hover{\n    border-color: #276749;\n  }\n\n  .lg\\:hover\\:border-green-900:hover{\n    border-color: #22543d;\n  }\n\n  .lg\\:hover\\:border-teal-100:hover{\n    border-color: hsl(170, 97%, 15%);\n  }\n\n  .lg\\:hover\\:border-teal-200:hover{\n    border-color: hsl(168, 80%, 23%);\n  }\n\n  .lg\\:hover\\:border-teal-300:hover{\n    border-color: hsl(166, 72%, 28%);\n  }\n\n  .lg\\:hover\\:border-teal-400:hover{\n    border-color: hsl(164, 71%, 34%);\n  }\n\n  .lg\\:hover\\:border-teal-500:hover{\n    border-color: hsl(162, 63%, 41%);\n  }\n\n  .lg\\:hover\\:border-teal-600:hover{\n    border-color: hsl(160, 51%, 49%);\n  }\n\n  .lg\\:hover\\:border-teal-700:hover{\n    border-color: hsl(158, 58%, 62%);\n  }\n\n  .lg\\:hover\\:border-teal-800:hover{\n    border-color: hsl(156, 73%, 74%);\n  }\n\n  .lg\\:hover\\:border-teal-900:hover{\n    border-color: hsl(154, 75%, 87%);\n  }\n\n  .lg\\:hover\\:border-teal-1000:hover{\n    border-color: hsl(152, 68%, 96%);\n  }\n\n  .lg\\:hover\\:border-blue-100:hover{\n    border-color: hsl(195, 100%, 95%);\n  }\n\n  .lg\\:hover\\:border-blue-200:hover{\n    border-color: hsl(195, 100%, 85%);\n  }\n\n  .lg\\:hover\\:border-blue-300:hover{\n    border-color: hsl(195, 97%, 75%);\n  }\n\n  .lg\\:hover\\:border-blue-400:hover{\n    border-color: hsl(196, 94%, 67%);\n  }\n\n  .lg\\:hover\\:border-blue-500:hover{\n    border-color: hsl(197, 92%, 61%);\n  }\n\n  .lg\\:hover\\:border-blue-600:hover{\n    border-color: hsl(199, 84%, 55%);\n  }\n\n  .lg\\:hover\\:border-blue-700:hover{\n    border-color: hsl(201, 79%, 46%);\n  }\n\n  .lg\\:hover\\:border-blue-800:hover{\n    border-color: hsl(202, 83%, 41%);\n  }\n\n  .lg\\:hover\\:border-blue-900:hover{\n    border-color: hsl(203, 87%, 34%);\n  }\n\n  .lg\\:hover\\:border-blue-1000:hover{\n    border-color: hsl(204, 96%, 27%);\n  }\n\n  .lg\\:hover\\:border-indigo-100:hover{\n    border-color: hsl(221, 68%, 93%);\n  }\n\n  .lg\\:hover\\:border-indigo-200:hover{\n    border-color: hsl(221, 78%, 86%);\n  }\n\n  .lg\\:hover\\:border-indigo-300:hover{\n    border-color: hsl(224, 67%, 76%);\n  }\n\n  .lg\\:hover\\:border-indigo-400:hover{\n    border-color: hsl(225, 57%, 67%);\n  }\n\n  .lg\\:hover\\:border-indigo-500:hover{\n    border-color: hsl(227, 50%, 59%);\n  }\n\n  .lg\\:hover\\:border-indigo-600:hover{\n    border-color: hsl(227, 42%, 51%);\n  }\n\n  .lg\\:hover\\:border-indigo-700:hover{\n    border-color: hsl(228, 45%, 45%);\n  }\n\n  .lg\\:hover\\:border-indigo-800:hover{\n    border-color: hsl(230, 49%, 41%);\n  }\n\n  .lg\\:hover\\:border-indigo-900:hover{\n    border-color: hsl(232, 51%, 36%);\n  }\n\n  .lg\\:hover\\:border-indigo-1000:hover{\n    border-color: hsl(234, 62%, 26%);\n  }\n\n  .lg\\:hover\\:border-purple-100:hover{\n    border-color: #faf5ff;\n  }\n\n  .lg\\:hover\\:border-purple-200:hover{\n    border-color: #e9d8fd;\n  }\n\n  .lg\\:hover\\:border-purple-300:hover{\n    border-color: #d6bcfa;\n  }\n\n  .lg\\:hover\\:border-purple-400:hover{\n    border-color: #b794f4;\n  }\n\n  .lg\\:hover\\:border-purple-500:hover{\n    border-color: #9f7aea;\n  }\n\n  .lg\\:hover\\:border-purple-600:hover{\n    border-color: #805ad5;\n  }\n\n  .lg\\:hover\\:border-purple-700:hover{\n    border-color: #6b46c1;\n  }\n\n  .lg\\:hover\\:border-purple-800:hover{\n    border-color: #553c9a;\n  }\n\n  .lg\\:hover\\:border-purple-900:hover{\n    border-color: #44337a;\n  }\n\n  .lg\\:hover\\:border-pink-100:hover{\n    border-color: #fff5f7;\n  }\n\n  .lg\\:hover\\:border-pink-200:hover{\n    border-color: #fed7e2;\n  }\n\n  .lg\\:hover\\:border-pink-300:hover{\n    border-color: #fbb6ce;\n  }\n\n  .lg\\:hover\\:border-pink-400:hover{\n    border-color: #f687b3;\n  }\n\n  .lg\\:hover\\:border-pink-500:hover{\n    border-color: #ed64a6;\n  }\n\n  .lg\\:hover\\:border-pink-600:hover{\n    border-color: #d53f8c;\n  }\n\n  .lg\\:hover\\:border-pink-700:hover{\n    border-color: #b83280;\n  }\n\n  .lg\\:hover\\:border-pink-800:hover{\n    border-color: #97266d;\n  }\n\n  .lg\\:hover\\:border-pink-900:hover{\n    border-color: #702459;\n  }\n\n  .lg\\:focus\\:border-transparent:focus{\n    border-color: transparent;\n  }\n\n  .lg\\:focus\\:border-black:focus{\n    border-color: #000;\n  }\n\n  .lg\\:focus\\:border-white:focus{\n    border-color: #fff;\n  }\n\n  .lg\\:focus\\:border-gray-100:focus{\n    border-color: hsl(216, 33%, 97%);\n  }\n\n  .lg\\:focus\\:border-gray-200:focus{\n    border-color: hsl(214, 15%, 91%);\n  }\n\n  .lg\\:focus\\:border-gray-300:focus{\n    border-color: hsl(210, 16%, 82%);\n  }\n\n  .lg\\:focus\\:border-gray-400:focus{\n    border-color: hsl(211, 13%, 65%);\n  }\n\n  .lg\\:focus\\:border-gray-500:focus{\n    border-color: hsl(211, 10%, 53%);\n  }\n\n  .lg\\:focus\\:border-gray-600:focus{\n    border-color: hsl(211, 12%, 43%);\n  }\n\n  .lg\\:focus\\:border-gray-700:focus{\n    border-color: hsl(209, 14%, 37%);\n  }\n\n  .lg\\:focus\\:border-gray-800:focus{\n    border-color: hsl(209, 18%, 30%);\n  }\n\n  .lg\\:focus\\:border-gray-900:focus{\n    border-color: hsl(209, 20%, 25%);\n  }\n\n  .lg\\:focus\\:border-gray-1000:focus{\n    border-color: hsl(210, 24%, 16%);\n  }\n\n  .lg\\:focus\\:border-red-100:focus{\n    border-color: hsl(360, 100%, 95%);\n  }\n\n  .lg\\:focus\\:border-red-200:focus{\n    border-color: hsl(360, 100%, 87%);\n  }\n\n  .lg\\:focus\\:border-red-300:focus{\n    border-color: hsl(360, 100%, 80%);\n  }\n\n  .lg\\:focus\\:border-red-400:focus{\n    border-color: hsl(360, 91%, 69%);\n  }\n\n  .lg\\:focus\\:border-red-500:focus{\n    border-color: hsl(360, 83%, 62%);\n  }\n\n  .lg\\:focus\\:border-red-600:focus{\n    border-color: hsl(356, 75%, 53%);\n  }\n\n  .lg\\:focus\\:border-red-700:focus{\n    border-color: hsl(354, 85%, 44%);\n  }\n\n  .lg\\:focus\\:border-red-800:focus{\n    border-color: hsl(352, 90%, 35%);\n  }\n\n  .lg\\:focus\\:border-red-900:focus{\n    border-color: hsl(350, 94%, 28%);\n  }\n\n  .lg\\:focus\\:border-red-1000:focus{\n    border-color: hsl(348, 94%, 20%);\n  }\n\n  .lg\\:focus\\:border-orange-100:focus{\n    border-color: #fffaf0;\n  }\n\n  .lg\\:focus\\:border-orange-200:focus{\n    border-color: #feebc8;\n  }\n\n  .lg\\:focus\\:border-orange-300:focus{\n    border-color: #fbd38d;\n  }\n\n  .lg\\:focus\\:border-orange-400:focus{\n    border-color: #f6ad55;\n  }\n\n  .lg\\:focus\\:border-orange-500:focus{\n    border-color: #ed8936;\n  }\n\n  .lg\\:focus\\:border-orange-600:focus{\n    border-color: #dd6b20;\n  }\n\n  .lg\\:focus\\:border-orange-700:focus{\n    border-color: #c05621;\n  }\n\n  .lg\\:focus\\:border-orange-800:focus{\n    border-color: #9c4221;\n  }\n\n  .lg\\:focus\\:border-orange-900:focus{\n    border-color: #7b341e;\n  }\n\n  .lg\\:focus\\:border-yellow-100:focus{\n    border-color: hsl(15, 86%, 30%);\n  }\n\n  .lg\\:focus\\:border-yellow-200:focus{\n    border-color: hsl(22, 82%, 39%);\n  }\n\n  .lg\\:focus\\:border-yellow-300:focus{\n    border-color: hsl(29, 80%, 44%);\n  }\n\n  .lg\\:focus\\:border-yellow-400:focus{\n    border-color: hsl(36, 77%, 49%);\n  }\n\n  .lg\\:focus\\:border-yellow-500:focus{\n    border-color: hsl(42, 87%, 55%);\n  }\n\n  .lg\\:focus\\:border-yellow-600:focus{\n    border-color: hsl(44, 92%, 63%);\n  }\n\n  .lg\\:focus\\:border-yellow-700:focus{\n    border-color: hsl(48, 94%, 68%);\n  }\n\n  .lg\\:focus\\:border-yellow-800:focus{\n    border-color: hsl(48, 95%, 76%);\n  }\n\n  .lg\\:focus\\:border-yellow-900:focus{\n    border-color: hsl(48, 100%, 88%);\n  }\n\n  .lg\\:focus\\:border-yellow-1000:focus{\n    border-color: hsl(49, 100%, 96%);\n  }\n\n  .lg\\:focus\\:border-green-100:focus{\n    border-color: #f0fff4;\n  }\n\n  .lg\\:focus\\:border-green-200:focus{\n    border-color: #c6f6d5;\n  }\n\n  .lg\\:focus\\:border-green-300:focus{\n    border-color: #9ae6b4;\n  }\n\n  .lg\\:focus\\:border-green-400:focus{\n    border-color: #68d391;\n  }\n\n  .lg\\:focus\\:border-green-500:focus{\n    border-color: #48bb78;\n  }\n\n  .lg\\:focus\\:border-green-600:focus{\n    border-color: #38a169;\n  }\n\n  .lg\\:focus\\:border-green-700:focus{\n    border-color: #2f855a;\n  }\n\n  .lg\\:focus\\:border-green-800:focus{\n    border-color: #276749;\n  }\n\n  .lg\\:focus\\:border-green-900:focus{\n    border-color: #22543d;\n  }\n\n  .lg\\:focus\\:border-teal-100:focus{\n    border-color: hsl(170, 97%, 15%);\n  }\n\n  .lg\\:focus\\:border-teal-200:focus{\n    border-color: hsl(168, 80%, 23%);\n  }\n\n  .lg\\:focus\\:border-teal-300:focus{\n    border-color: hsl(166, 72%, 28%);\n  }\n\n  .lg\\:focus\\:border-teal-400:focus{\n    border-color: hsl(164, 71%, 34%);\n  }\n\n  .lg\\:focus\\:border-teal-500:focus{\n    border-color: hsl(162, 63%, 41%);\n  }\n\n  .lg\\:focus\\:border-teal-600:focus{\n    border-color: hsl(160, 51%, 49%);\n  }\n\n  .lg\\:focus\\:border-teal-700:focus{\n    border-color: hsl(158, 58%, 62%);\n  }\n\n  .lg\\:focus\\:border-teal-800:focus{\n    border-color: hsl(156, 73%, 74%);\n  }\n\n  .lg\\:focus\\:border-teal-900:focus{\n    border-color: hsl(154, 75%, 87%);\n  }\n\n  .lg\\:focus\\:border-teal-1000:focus{\n    border-color: hsl(152, 68%, 96%);\n  }\n\n  .lg\\:focus\\:border-blue-100:focus{\n    border-color: hsl(195, 100%, 95%);\n  }\n\n  .lg\\:focus\\:border-blue-200:focus{\n    border-color: hsl(195, 100%, 85%);\n  }\n\n  .lg\\:focus\\:border-blue-300:focus{\n    border-color: hsl(195, 97%, 75%);\n  }\n\n  .lg\\:focus\\:border-blue-400:focus{\n    border-color: hsl(196, 94%, 67%);\n  }\n\n  .lg\\:focus\\:border-blue-500:focus{\n    border-color: hsl(197, 92%, 61%);\n  }\n\n  .lg\\:focus\\:border-blue-600:focus{\n    border-color: hsl(199, 84%, 55%);\n  }\n\n  .lg\\:focus\\:border-blue-700:focus{\n    border-color: hsl(201, 79%, 46%);\n  }\n\n  .lg\\:focus\\:border-blue-800:focus{\n    border-color: hsl(202, 83%, 41%);\n  }\n\n  .lg\\:focus\\:border-blue-900:focus{\n    border-color: hsl(203, 87%, 34%);\n  }\n\n  .lg\\:focus\\:border-blue-1000:focus{\n    border-color: hsl(204, 96%, 27%);\n  }\n\n  .lg\\:focus\\:border-indigo-100:focus{\n    border-color: hsl(221, 68%, 93%);\n  }\n\n  .lg\\:focus\\:border-indigo-200:focus{\n    border-color: hsl(221, 78%, 86%);\n  }\n\n  .lg\\:focus\\:border-indigo-300:focus{\n    border-color: hsl(224, 67%, 76%);\n  }\n\n  .lg\\:focus\\:border-indigo-400:focus{\n    border-color: hsl(225, 57%, 67%);\n  }\n\n  .lg\\:focus\\:border-indigo-500:focus{\n    border-color: hsl(227, 50%, 59%);\n  }\n\n  .lg\\:focus\\:border-indigo-600:focus{\n    border-color: hsl(227, 42%, 51%);\n  }\n\n  .lg\\:focus\\:border-indigo-700:focus{\n    border-color: hsl(228, 45%, 45%);\n  }\n\n  .lg\\:focus\\:border-indigo-800:focus{\n    border-color: hsl(230, 49%, 41%);\n  }\n\n  .lg\\:focus\\:border-indigo-900:focus{\n    border-color: hsl(232, 51%, 36%);\n  }\n\n  .lg\\:focus\\:border-indigo-1000:focus{\n    border-color: hsl(234, 62%, 26%);\n  }\n\n  .lg\\:focus\\:border-purple-100:focus{\n    border-color: #faf5ff;\n  }\n\n  .lg\\:focus\\:border-purple-200:focus{\n    border-color: #e9d8fd;\n  }\n\n  .lg\\:focus\\:border-purple-300:focus{\n    border-color: #d6bcfa;\n  }\n\n  .lg\\:focus\\:border-purple-400:focus{\n    border-color: #b794f4;\n  }\n\n  .lg\\:focus\\:border-purple-500:focus{\n    border-color: #9f7aea;\n  }\n\n  .lg\\:focus\\:border-purple-600:focus{\n    border-color: #805ad5;\n  }\n\n  .lg\\:focus\\:border-purple-700:focus{\n    border-color: #6b46c1;\n  }\n\n  .lg\\:focus\\:border-purple-800:focus{\n    border-color: #553c9a;\n  }\n\n  .lg\\:focus\\:border-purple-900:focus{\n    border-color: #44337a;\n  }\n\n  .lg\\:focus\\:border-pink-100:focus{\n    border-color: #fff5f7;\n  }\n\n  .lg\\:focus\\:border-pink-200:focus{\n    border-color: #fed7e2;\n  }\n\n  .lg\\:focus\\:border-pink-300:focus{\n    border-color: #fbb6ce;\n  }\n\n  .lg\\:focus\\:border-pink-400:focus{\n    border-color: #f687b3;\n  }\n\n  .lg\\:focus\\:border-pink-500:focus{\n    border-color: #ed64a6;\n  }\n\n  .lg\\:focus\\:border-pink-600:focus{\n    border-color: #d53f8c;\n  }\n\n  .lg\\:focus\\:border-pink-700:focus{\n    border-color: #b83280;\n  }\n\n  .lg\\:focus\\:border-pink-800:focus{\n    border-color: #97266d;\n  }\n\n  .lg\\:focus\\:border-pink-900:focus{\n    border-color: #702459;\n  }\n\n  .lg\\:rounded-none{\n    border-radius: 0;\n  }\n\n  .lg\\:rounded-sm{\n    border-radius: 0.125rem;\n  }\n\n  .lg\\:rounded{\n    border-radius: 0.25rem;\n  }\n\n  .lg\\:rounded-lg{\n    border-radius: 0.5rem;\n  }\n\n  .lg\\:rounded-full{\n    border-radius: 9999px;\n  }\n\n  .lg\\:rounded-t-none{\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n\n  .lg\\:rounded-r-none{\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n\n  .lg\\:rounded-b-none{\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n\n  .lg\\:rounded-l-none{\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n\n  .lg\\:rounded-t-sm{\n    border-top-left-radius: 0.125rem;\n    border-top-right-radius: 0.125rem;\n  }\n\n  .lg\\:rounded-r-sm{\n    border-top-right-radius: 0.125rem;\n    border-bottom-right-radius: 0.125rem;\n  }\n\n  .lg\\:rounded-b-sm{\n    border-bottom-right-radius: 0.125rem;\n    border-bottom-left-radius: 0.125rem;\n  }\n\n  .lg\\:rounded-l-sm{\n    border-top-left-radius: 0.125rem;\n    border-bottom-left-radius: 0.125rem;\n  }\n\n  .lg\\:rounded-t{\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n  }\n\n  .lg\\:rounded-r{\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n  }\n\n  .lg\\:rounded-b{\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n\n  .lg\\:rounded-l{\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n\n  .lg\\:rounded-t-lg{\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n  }\n\n  .lg\\:rounded-r-lg{\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n  }\n\n  .lg\\:rounded-b-lg{\n    border-bottom-right-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n  }\n\n  .lg\\:rounded-l-lg{\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n  }\n\n  .lg\\:rounded-t-full{\n    border-top-left-radius: 9999px;\n    border-top-right-radius: 9999px;\n  }\n\n  .lg\\:rounded-r-full{\n    border-top-right-radius: 9999px;\n    border-bottom-right-radius: 9999px;\n  }\n\n  .lg\\:rounded-b-full{\n    border-bottom-right-radius: 9999px;\n    border-bottom-left-radius: 9999px;\n  }\n\n  .lg\\:rounded-l-full{\n    border-top-left-radius: 9999px;\n    border-bottom-left-radius: 9999px;\n  }\n\n  .lg\\:rounded-tl-none{\n    border-top-left-radius: 0;\n  }\n\n  .lg\\:rounded-tr-none{\n    border-top-right-radius: 0;\n  }\n\n  .lg\\:rounded-br-none{\n    border-bottom-right-radius: 0;\n  }\n\n  .lg\\:rounded-bl-none{\n    border-bottom-left-radius: 0;\n  }\n\n  .lg\\:rounded-tl-sm{\n    border-top-left-radius: 0.125rem;\n  }\n\n  .lg\\:rounded-tr-sm{\n    border-top-right-radius: 0.125rem;\n  }\n\n  .lg\\:rounded-br-sm{\n    border-bottom-right-radius: 0.125rem;\n  }\n\n  .lg\\:rounded-bl-sm{\n    border-bottom-left-radius: 0.125rem;\n  }\n\n  .lg\\:rounded-tl{\n    border-top-left-radius: 0.25rem;\n  }\n\n  .lg\\:rounded-tr{\n    border-top-right-radius: 0.25rem;\n  }\n\n  .lg\\:rounded-br{\n    border-bottom-right-radius: 0.25rem;\n  }\n\n  .lg\\:rounded-bl{\n    border-bottom-left-radius: 0.25rem;\n  }\n\n  .lg\\:rounded-tl-lg{\n    border-top-left-radius: 0.5rem;\n  }\n\n  .lg\\:rounded-tr-lg{\n    border-top-right-radius: 0.5rem;\n  }\n\n  .lg\\:rounded-br-lg{\n    border-bottom-right-radius: 0.5rem;\n  }\n\n  .lg\\:rounded-bl-lg{\n    border-bottom-left-radius: 0.5rem;\n  }\n\n  .lg\\:rounded-tl-full{\n    border-top-left-radius: 9999px;\n  }\n\n  .lg\\:rounded-tr-full{\n    border-top-right-radius: 9999px;\n  }\n\n  .lg\\:rounded-br-full{\n    border-bottom-right-radius: 9999px;\n  }\n\n  .lg\\:rounded-bl-full{\n    border-bottom-left-radius: 9999px;\n  }\n\n  .lg\\:border-solid{\n    border-style: solid;\n  }\n\n  .lg\\:border-dashed{\n    border-style: dashed;\n  }\n\n  .lg\\:border-dotted{\n    border-style: dotted;\n  }\n\n  .lg\\:border-none{\n    border-style: none;\n  }\n\n  .lg\\:border-0{\n    border-width: 0;\n  }\n\n  .lg\\:border-2{\n    border-width: 2px;\n  }\n\n  .lg\\:border-4{\n    border-width: 4px;\n  }\n\n  .lg\\:border-8{\n    border-width: 8px;\n  }\n\n  .lg\\:border{\n    border-width: 1px;\n  }\n\n  .lg\\:border-t-0{\n    border-top-width: 0;\n  }\n\n  .lg\\:border-r-0{\n    border-right-width: 0;\n  }\n\n  .lg\\:border-b-0{\n    border-bottom-width: 0;\n  }\n\n  .lg\\:border-l-0{\n    border-left-width: 0;\n  }\n\n  .lg\\:border-t-2{\n    border-top-width: 2px;\n  }\n\n  .lg\\:border-r-2{\n    border-right-width: 2px;\n  }\n\n  .lg\\:border-b-2{\n    border-bottom-width: 2px;\n  }\n\n  .lg\\:border-l-2{\n    border-left-width: 2px;\n  }\n\n  .lg\\:border-t-4{\n    border-top-width: 4px;\n  }\n\n  .lg\\:border-r-4{\n    border-right-width: 4px;\n  }\n\n  .lg\\:border-b-4{\n    border-bottom-width: 4px;\n  }\n\n  .lg\\:border-l-4{\n    border-left-width: 4px;\n  }\n\n  .lg\\:border-t-8{\n    border-top-width: 8px;\n  }\n\n  .lg\\:border-r-8{\n    border-right-width: 8px;\n  }\n\n  .lg\\:border-b-8{\n    border-bottom-width: 8px;\n  }\n\n  .lg\\:border-l-8{\n    border-left-width: 8px;\n  }\n\n  .lg\\:border-t{\n    border-top-width: 1px;\n  }\n\n  .lg\\:border-r{\n    border-right-width: 1px;\n  }\n\n  .lg\\:border-b{\n    border-bottom-width: 1px;\n  }\n\n  .lg\\:border-l{\n    border-left-width: 1px;\n  }\n\n  .lg\\:cursor-auto{\n    cursor: auto;\n  }\n\n  .lg\\:cursor-default{\n    cursor: default;\n  }\n\n  .lg\\:cursor-pointer{\n    cursor: pointer;\n  }\n\n  .lg\\:cursor-wait{\n    cursor: wait;\n  }\n\n  .lg\\:cursor-text{\n    cursor: text;\n  }\n\n  .lg\\:cursor-move{\n    cursor: move;\n  }\n\n  .lg\\:cursor-not-allowed{\n    cursor: not-allowed;\n  }\n\n  .lg\\:block{\n    display: block;\n  }\n\n  .lg\\:inline-block{\n    display: inline-block;\n  }\n\n  .lg\\:inline{\n    display: inline;\n  }\n\n  .lg\\:flex{\n    display: flex;\n  }\n\n  .lg\\:inline-flex{\n    display: inline-flex;\n  }\n\n  .lg\\:table{\n    display: table;\n  }\n\n  .lg\\:table-row{\n    display: table-row;\n  }\n\n  .lg\\:table-cell{\n    display: table-cell;\n  }\n\n  .lg\\:hidden{\n    display: none;\n  }\n\n  .lg\\:flex-row{\n    flex-direction: row;\n  }\n\n  .lg\\:flex-row-reverse{\n    flex-direction: row-reverse;\n  }\n\n  .lg\\:flex-col{\n    flex-direction: column;\n  }\n\n  .lg\\:flex-col-reverse{\n    flex-direction: column-reverse;\n  }\n\n  .lg\\:flex-wrap{\n    flex-wrap: wrap;\n  }\n\n  .lg\\:flex-wrap-reverse{\n    flex-wrap: wrap-reverse;\n  }\n\n  .lg\\:flex-no-wrap{\n    flex-wrap: nowrap;\n  }\n\n  .lg\\:items-start{\n    align-items: flex-start;\n  }\n\n  .lg\\:items-end{\n    align-items: flex-end;\n  }\n\n  .lg\\:items-center{\n    align-items: center;\n  }\n\n  .lg\\:items-baseline{\n    align-items: baseline;\n  }\n\n  .lg\\:items-stretch{\n    align-items: stretch;\n  }\n\n  .lg\\:self-auto{\n    align-self: auto;\n  }\n\n  .lg\\:self-start{\n    align-self: flex-start;\n  }\n\n  .lg\\:self-end{\n    align-self: flex-end;\n  }\n\n  .lg\\:self-center{\n    align-self: center;\n  }\n\n  .lg\\:self-stretch{\n    align-self: stretch;\n  }\n\n  .lg\\:justify-start{\n    justify-content: flex-start;\n  }\n\n  .lg\\:justify-end{\n    justify-content: flex-end;\n  }\n\n  .lg\\:justify-center{\n    justify-content: center;\n  }\n\n  .lg\\:justify-between{\n    justify-content: space-between;\n  }\n\n  .lg\\:justify-around{\n    justify-content: space-around;\n  }\n\n  .lg\\:content-center{\n    align-content: center;\n  }\n\n  .lg\\:content-start{\n    align-content: flex-start;\n  }\n\n  .lg\\:content-end{\n    align-content: flex-end;\n  }\n\n  .lg\\:content-between{\n    align-content: space-between;\n  }\n\n  .lg\\:content-around{\n    align-content: space-around;\n  }\n\n  .lg\\:flex-1{\n    flex: 1 1 0%;\n  }\n\n  .lg\\:flex-auto{\n    flex: 1 1 auto;\n  }\n\n  .lg\\:flex-initial{\n    flex: 0 1 auto;\n  }\n\n  .lg\\:flex-none{\n    flex: none;\n  }\n\n  .lg\\:flex-grow-0{\n    flex-grow: 0;\n  }\n\n  .lg\\:flex-grow{\n    flex-grow: 1;\n  }\n\n  .lg\\:flex-shrink-0{\n    flex-shrink: 0;\n  }\n\n  .lg\\:flex-shrink{\n    flex-shrink: 1;\n  }\n\n  .lg\\:order-1{\n    order: 1;\n  }\n\n  .lg\\:order-2{\n    order: 2;\n  }\n\n  .lg\\:order-3{\n    order: 3;\n  }\n\n  .lg\\:order-4{\n    order: 4;\n  }\n\n  .lg\\:order-5{\n    order: 5;\n  }\n\n  .lg\\:order-6{\n    order: 6;\n  }\n\n  .lg\\:order-7{\n    order: 7;\n  }\n\n  .lg\\:order-8{\n    order: 8;\n  }\n\n  .lg\\:order-9{\n    order: 9;\n  }\n\n  .lg\\:order-10{\n    order: 10;\n  }\n\n  .lg\\:order-11{\n    order: 11;\n  }\n\n  .lg\\:order-12{\n    order: 12;\n  }\n\n  .lg\\:order-first{\n    order: -9999;\n  }\n\n  .lg\\:order-last{\n    order: 9999;\n  }\n\n  .lg\\:order-none{\n    order: 0;\n  }\n\n  .lg\\:float-right{\n    float: right;\n  }\n\n  .lg\\:float-left{\n    float: left;\n  }\n\n  .lg\\:float-none{\n    float: none;\n  }\n\n  .lg\\:clearfix:after{\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n\n  .lg\\:font-sans{\n    font-family: Source Sans Pro, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  }\n\n  .lg\\:font-serif{\n    font-family: Georgia, Cambria, \"Times New Roman\", Times, serif;\n  }\n\n  .lg\\:font-mono{\n    font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  }\n\n  .lg\\:font-hairline{\n    font-weight: 100;\n  }\n\n  .lg\\:font-thin{\n    font-weight: 200;\n  }\n\n  .lg\\:font-light{\n    font-weight: 300;\n  }\n\n  .lg\\:font-normal{\n    font-weight: 400;\n  }\n\n  .lg\\:font-medium{\n    font-weight: 500;\n  }\n\n  .lg\\:font-semibold{\n    font-weight: 600;\n  }\n\n  .lg\\:font-bold{\n    font-weight: 700;\n  }\n\n  .lg\\:font-extrabold{\n    font-weight: 800;\n  }\n\n  .lg\\:font-black{\n    font-weight: 900;\n  }\n\n  .lg\\:hover\\:font-hairline:hover{\n    font-weight: 100;\n  }\n\n  .lg\\:hover\\:font-thin:hover{\n    font-weight: 200;\n  }\n\n  .lg\\:hover\\:font-light:hover{\n    font-weight: 300;\n  }\n\n  .lg\\:hover\\:font-normal:hover{\n    font-weight: 400;\n  }\n\n  .lg\\:hover\\:font-medium:hover{\n    font-weight: 500;\n  }\n\n  .lg\\:hover\\:font-semibold:hover{\n    font-weight: 600;\n  }\n\n  .lg\\:hover\\:font-bold:hover{\n    font-weight: 700;\n  }\n\n  .lg\\:hover\\:font-extrabold:hover{\n    font-weight: 800;\n  }\n\n  .lg\\:hover\\:font-black:hover{\n    font-weight: 900;\n  }\n\n  .lg\\:focus\\:font-hairline:focus{\n    font-weight: 100;\n  }\n\n  .lg\\:focus\\:font-thin:focus{\n    font-weight: 200;\n  }\n\n  .lg\\:focus\\:font-light:focus{\n    font-weight: 300;\n  }\n\n  .lg\\:focus\\:font-normal:focus{\n    font-weight: 400;\n  }\n\n  .lg\\:focus\\:font-medium:focus{\n    font-weight: 500;\n  }\n\n  .lg\\:focus\\:font-semibold:focus{\n    font-weight: 600;\n  }\n\n  .lg\\:focus\\:font-bold:focus{\n    font-weight: 700;\n  }\n\n  .lg\\:focus\\:font-extrabold:focus{\n    font-weight: 800;\n  }\n\n  .lg\\:focus\\:font-black:focus{\n    font-weight: 900;\n  }\n\n  .lg\\:h-0{\n    height: 0;\n  }\n\n  .lg\\:h-1{\n    height: 0.25rem;\n  }\n\n  .lg\\:h-2{\n    height: 0.5rem;\n  }\n\n  .lg\\:h-3{\n    height: 0.75rem;\n  }\n\n  .lg\\:h-4{\n    height: 1rem;\n  }\n\n  .lg\\:h-5{\n    height: 1.25rem;\n  }\n\n  .lg\\:h-6{\n    height: 1.5rem;\n  }\n\n  .lg\\:h-8{\n    height: 2rem;\n  }\n\n  .lg\\:h-10{\n    height: 2.5rem;\n  }\n\n  .lg\\:h-12{\n    height: 3rem;\n  }\n\n  .lg\\:h-16{\n    height: 4rem;\n  }\n\n  .lg\\:h-20{\n    height: 5rem;\n  }\n\n  .lg\\:h-24{\n    height: 6rem;\n  }\n\n  .lg\\:h-32{\n    height: 8rem;\n  }\n\n  .lg\\:h-40{\n    height: 10rem;\n  }\n\n  .lg\\:h-48{\n    height: 12rem;\n  }\n\n  .lg\\:h-56{\n    height: 14rem;\n  }\n\n  .lg\\:h-64{\n    height: 16rem;\n  }\n\n  .lg\\:h-auto{\n    height: auto;\n  }\n\n  .lg\\:h-px{\n    height: 1px;\n  }\n\n  .lg\\:h-full{\n    height: 100%;\n  }\n\n  .lg\\:h-screen{\n    height: 100vh;\n  }\n\n  .lg\\:leading-none{\n    line-height: 1;\n  }\n\n  .lg\\:leading-tight{\n    line-height: 1.25;\n  }\n\n  .lg\\:leading-snug{\n    line-height: 1.375;\n  }\n\n  .lg\\:leading-normal{\n    line-height: 1.5;\n  }\n\n  .lg\\:leading-relaxed{\n    line-height: 1.625;\n  }\n\n  .lg\\:leading-loose{\n    line-height: 2;\n  }\n\n  .lg\\:list-inside{\n    list-style-position: inside;\n  }\n\n  .lg\\:list-outside{\n    list-style-position: outside;\n  }\n\n  .lg\\:list-none{\n    list-style-type: none;\n  }\n\n  .lg\\:list-disc{\n    list-style-type: disc;\n  }\n\n  .lg\\:list-decimal{\n    list-style-type: decimal;\n  }\n\n  .lg\\:m-0{\n    margin: 0;\n  }\n\n  .lg\\:m-1{\n    margin: 0.25rem;\n  }\n\n  .lg\\:m-2{\n    margin: 0.5rem;\n  }\n\n  .lg\\:m-3{\n    margin: 0.75rem;\n  }\n\n  .lg\\:m-4{\n    margin: 1rem;\n  }\n\n  .lg\\:m-5{\n    margin: 1.25rem;\n  }\n\n  .lg\\:m-6{\n    margin: 1.5rem;\n  }\n\n  .lg\\:m-8{\n    margin: 2rem;\n  }\n\n  .lg\\:m-10{\n    margin: 2.5rem;\n  }\n\n  .lg\\:m-12{\n    margin: 3rem;\n  }\n\n  .lg\\:m-16{\n    margin: 4rem;\n  }\n\n  .lg\\:m-20{\n    margin: 5rem;\n  }\n\n  .lg\\:m-24{\n    margin: 6rem;\n  }\n\n  .lg\\:m-32{\n    margin: 8rem;\n  }\n\n  .lg\\:m-40{\n    margin: 10rem;\n  }\n\n  .lg\\:m-48{\n    margin: 12rem;\n  }\n\n  .lg\\:m-56{\n    margin: 14rem;\n  }\n\n  .lg\\:m-64{\n    margin: 16rem;\n  }\n\n  .lg\\:m-auto{\n    margin: auto;\n  }\n\n  .lg\\:m-px{\n    margin: 1px;\n  }\n\n  .lg\\:-m-1{\n    margin: -0.25rem;\n  }\n\n  .lg\\:-m-2{\n    margin: -0.5rem;\n  }\n\n  .lg\\:-m-3{\n    margin: -0.75rem;\n  }\n\n  .lg\\:-m-4{\n    margin: -1rem;\n  }\n\n  .lg\\:-m-5{\n    margin: -1.25rem;\n  }\n\n  .lg\\:-m-6{\n    margin: -1.5rem;\n  }\n\n  .lg\\:-m-8{\n    margin: -2rem;\n  }\n\n  .lg\\:-m-10{\n    margin: -2.5rem;\n  }\n\n  .lg\\:-m-12{\n    margin: -3rem;\n  }\n\n  .lg\\:-m-16{\n    margin: -4rem;\n  }\n\n  .lg\\:-m-20{\n    margin: -5rem;\n  }\n\n  .lg\\:-m-24{\n    margin: -6rem;\n  }\n\n  .lg\\:-m-32{\n    margin: -8rem;\n  }\n\n  .lg\\:-m-40{\n    margin: -10rem;\n  }\n\n  .lg\\:-m-48{\n    margin: -12rem;\n  }\n\n  .lg\\:-m-56{\n    margin: -14rem;\n  }\n\n  .lg\\:-m-64{\n    margin: -16rem;\n  }\n\n  .lg\\:-m-px{\n    margin: -1px;\n  }\n\n  .lg\\:my-0{\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .lg\\:mx-0{\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  .lg\\:my-1{\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem;\n  }\n\n  .lg\\:mx-1{\n    margin-left: 0.25rem;\n    margin-right: 0.25rem;\n  }\n\n  .lg\\:my-2{\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n  }\n\n  .lg\\:mx-2{\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n\n  .lg\\:my-3{\n    margin-top: 0.75rem;\n    margin-bottom: 0.75rem;\n  }\n\n  .lg\\:mx-3{\n    margin-left: 0.75rem;\n    margin-right: 0.75rem;\n  }\n\n  .lg\\:my-4{\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  .lg\\:mx-4{\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n\n  .lg\\:my-5{\n    margin-top: 1.25rem;\n    margin-bottom: 1.25rem;\n  }\n\n  .lg\\:mx-5{\n    margin-left: 1.25rem;\n    margin-right: 1.25rem;\n  }\n\n  .lg\\:my-6{\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem;\n  }\n\n  .lg\\:mx-6{\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n\n  .lg\\:my-8{\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n  }\n\n  .lg\\:mx-8{\n    margin-left: 2rem;\n    margin-right: 2rem;\n  }\n\n  .lg\\:my-10{\n    margin-top: 2.5rem;\n    margin-bottom: 2.5rem;\n  }\n\n  .lg\\:mx-10{\n    margin-left: 2.5rem;\n    margin-right: 2.5rem;\n  }\n\n  .lg\\:my-12{\n    margin-top: 3rem;\n    margin-bottom: 3rem;\n  }\n\n  .lg\\:mx-12{\n    margin-left: 3rem;\n    margin-right: 3rem;\n  }\n\n  .lg\\:my-16{\n    margin-top: 4rem;\n    margin-bottom: 4rem;\n  }\n\n  .lg\\:mx-16{\n    margin-left: 4rem;\n    margin-right: 4rem;\n  }\n\n  .lg\\:my-20{\n    margin-top: 5rem;\n    margin-bottom: 5rem;\n  }\n\n  .lg\\:mx-20{\n    margin-left: 5rem;\n    margin-right: 5rem;\n  }\n\n  .lg\\:my-24{\n    margin-top: 6rem;\n    margin-bottom: 6rem;\n  }\n\n  .lg\\:mx-24{\n    margin-left: 6rem;\n    margin-right: 6rem;\n  }\n\n  .lg\\:my-32{\n    margin-top: 8rem;\n    margin-bottom: 8rem;\n  }\n\n  .lg\\:mx-32{\n    margin-left: 8rem;\n    margin-right: 8rem;\n  }\n\n  .lg\\:my-40{\n    margin-top: 10rem;\n    margin-bottom: 10rem;\n  }\n\n  .lg\\:mx-40{\n    margin-left: 10rem;\n    margin-right: 10rem;\n  }\n\n  .lg\\:my-48{\n    margin-top: 12rem;\n    margin-bottom: 12rem;\n  }\n\n  .lg\\:mx-48{\n    margin-left: 12rem;\n    margin-right: 12rem;\n  }\n\n  .lg\\:my-56{\n    margin-top: 14rem;\n    margin-bottom: 14rem;\n  }\n\n  .lg\\:mx-56{\n    margin-left: 14rem;\n    margin-right: 14rem;\n  }\n\n  .lg\\:my-64{\n    margin-top: 16rem;\n    margin-bottom: 16rem;\n  }\n\n  .lg\\:mx-64{\n    margin-left: 16rem;\n    margin-right: 16rem;\n  }\n\n  .lg\\:my-auto{\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n\n  .lg\\:mx-auto{\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .lg\\:my-px{\n    margin-top: 1px;\n    margin-bottom: 1px;\n  }\n\n  .lg\\:mx-px{\n    margin-left: 1px;\n    margin-right: 1px;\n  }\n\n  .lg\\:-my-1{\n    margin-top: -0.25rem;\n    margin-bottom: -0.25rem;\n  }\n\n  .lg\\:-mx-1{\n    margin-left: -0.25rem;\n    margin-right: -0.25rem;\n  }\n\n  .lg\\:-my-2{\n    margin-top: -0.5rem;\n    margin-bottom: -0.5rem;\n  }\n\n  .lg\\:-mx-2{\n    margin-left: -0.5rem;\n    margin-right: -0.5rem;\n  }\n\n  .lg\\:-my-3{\n    margin-top: -0.75rem;\n    margin-bottom: -0.75rem;\n  }\n\n  .lg\\:-mx-3{\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n  }\n\n  .lg\\:-my-4{\n    margin-top: -1rem;\n    margin-bottom: -1rem;\n  }\n\n  .lg\\:-mx-4{\n    margin-left: -1rem;\n    margin-right: -1rem;\n  }\n\n  .lg\\:-my-5{\n    margin-top: -1.25rem;\n    margin-bottom: -1.25rem;\n  }\n\n  .lg\\:-mx-5{\n    margin-left: -1.25rem;\n    margin-right: -1.25rem;\n  }\n\n  .lg\\:-my-6{\n    margin-top: -1.5rem;\n    margin-bottom: -1.5rem;\n  }\n\n  .lg\\:-mx-6{\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n  }\n\n  .lg\\:-my-8{\n    margin-top: -2rem;\n    margin-bottom: -2rem;\n  }\n\n  .lg\\:-mx-8{\n    margin-left: -2rem;\n    margin-right: -2rem;\n  }\n\n  .lg\\:-my-10{\n    margin-top: -2.5rem;\n    margin-bottom: -2.5rem;\n  }\n\n  .lg\\:-mx-10{\n    margin-left: -2.5rem;\n    margin-right: -2.5rem;\n  }\n\n  .lg\\:-my-12{\n    margin-top: -3rem;\n    margin-bottom: -3rem;\n  }\n\n  .lg\\:-mx-12{\n    margin-left: -3rem;\n    margin-right: -3rem;\n  }\n\n  .lg\\:-my-16{\n    margin-top: -4rem;\n    margin-bottom: -4rem;\n  }\n\n  .lg\\:-mx-16{\n    margin-left: -4rem;\n    margin-right: -4rem;\n  }\n\n  .lg\\:-my-20{\n    margin-top: -5rem;\n    margin-bottom: -5rem;\n  }\n\n  .lg\\:-mx-20{\n    margin-left: -5rem;\n    margin-right: -5rem;\n  }\n\n  .lg\\:-my-24{\n    margin-top: -6rem;\n    margin-bottom: -6rem;\n  }\n\n  .lg\\:-mx-24{\n    margin-left: -6rem;\n    margin-right: -6rem;\n  }\n\n  .lg\\:-my-32{\n    margin-top: -8rem;\n    margin-bottom: -8rem;\n  }\n\n  .lg\\:-mx-32{\n    margin-left: -8rem;\n    margin-right: -8rem;\n  }\n\n  .lg\\:-my-40{\n    margin-top: -10rem;\n    margin-bottom: -10rem;\n  }\n\n  .lg\\:-mx-40{\n    margin-left: -10rem;\n    margin-right: -10rem;\n  }\n\n  .lg\\:-my-48{\n    margin-top: -12rem;\n    margin-bottom: -12rem;\n  }\n\n  .lg\\:-mx-48{\n    margin-left: -12rem;\n    margin-right: -12rem;\n  }\n\n  .lg\\:-my-56{\n    margin-top: -14rem;\n    margin-bottom: -14rem;\n  }\n\n  .lg\\:-mx-56{\n    margin-left: -14rem;\n    margin-right: -14rem;\n  }\n\n  .lg\\:-my-64{\n    margin-top: -16rem;\n    margin-bottom: -16rem;\n  }\n\n  .lg\\:-mx-64{\n    margin-left: -16rem;\n    margin-right: -16rem;\n  }\n\n  .lg\\:-my-px{\n    margin-top: -1px;\n    margin-bottom: -1px;\n  }\n\n  .lg\\:-mx-px{\n    margin-left: -1px;\n    margin-right: -1px;\n  }\n\n  .lg\\:mt-0{\n    margin-top: 0;\n  }\n\n  .lg\\:mr-0{\n    margin-right: 0;\n  }\n\n  .lg\\:mb-0{\n    margin-bottom: 0;\n  }\n\n  .lg\\:ml-0{\n    margin-left: 0;\n  }\n\n  .lg\\:mt-1{\n    margin-top: 0.25rem;\n  }\n\n  .lg\\:mr-1{\n    margin-right: 0.25rem;\n  }\n\n  .lg\\:mb-1{\n    margin-bottom: 0.25rem;\n  }\n\n  .lg\\:ml-1{\n    margin-left: 0.25rem;\n  }\n\n  .lg\\:mt-2{\n    margin-top: 0.5rem;\n  }\n\n  .lg\\:mr-2{\n    margin-right: 0.5rem;\n  }\n\n  .lg\\:mb-2{\n    margin-bottom: 0.5rem;\n  }\n\n  .lg\\:ml-2{\n    margin-left: 0.5rem;\n  }\n\n  .lg\\:mt-3{\n    margin-top: 0.75rem;\n  }\n\n  .lg\\:mr-3{\n    margin-right: 0.75rem;\n  }\n\n  .lg\\:mb-3{\n    margin-bottom: 0.75rem;\n  }\n\n  .lg\\:ml-3{\n    margin-left: 0.75rem;\n  }\n\n  .lg\\:mt-4{\n    margin-top: 1rem;\n  }\n\n  .lg\\:mr-4{\n    margin-right: 1rem;\n  }\n\n  .lg\\:mb-4{\n    margin-bottom: 1rem;\n  }\n\n  .lg\\:ml-4{\n    margin-left: 1rem;\n  }\n\n  .lg\\:mt-5{\n    margin-top: 1.25rem;\n  }\n\n  .lg\\:mr-5{\n    margin-right: 1.25rem;\n  }\n\n  .lg\\:mb-5{\n    margin-bottom: 1.25rem;\n  }\n\n  .lg\\:ml-5{\n    margin-left: 1.25rem;\n  }\n\n  .lg\\:mt-6{\n    margin-top: 1.5rem;\n  }\n\n  .lg\\:mr-6{\n    margin-right: 1.5rem;\n  }\n\n  .lg\\:mb-6{\n    margin-bottom: 1.5rem;\n  }\n\n  .lg\\:ml-6{\n    margin-left: 1.5rem;\n  }\n\n  .lg\\:mt-8{\n    margin-top: 2rem;\n  }\n\n  .lg\\:mr-8{\n    margin-right: 2rem;\n  }\n\n  .lg\\:mb-8{\n    margin-bottom: 2rem;\n  }\n\n  .lg\\:ml-8{\n    margin-left: 2rem;\n  }\n\n  .lg\\:mt-10{\n    margin-top: 2.5rem;\n  }\n\n  .lg\\:mr-10{\n    margin-right: 2.5rem;\n  }\n\n  .lg\\:mb-10{\n    margin-bottom: 2.5rem;\n  }\n\n  .lg\\:ml-10{\n    margin-left: 2.5rem;\n  }\n\n  .lg\\:mt-12{\n    margin-top: 3rem;\n  }\n\n  .lg\\:mr-12{\n    margin-right: 3rem;\n  }\n\n  .lg\\:mb-12{\n    margin-bottom: 3rem;\n  }\n\n  .lg\\:ml-12{\n    margin-left: 3rem;\n  }\n\n  .lg\\:mt-16{\n    margin-top: 4rem;\n  }\n\n  .lg\\:mr-16{\n    margin-right: 4rem;\n  }\n\n  .lg\\:mb-16{\n    margin-bottom: 4rem;\n  }\n\n  .lg\\:ml-16{\n    margin-left: 4rem;\n  }\n\n  .lg\\:mt-20{\n    margin-top: 5rem;\n  }\n\n  .lg\\:mr-20{\n    margin-right: 5rem;\n  }\n\n  .lg\\:mb-20{\n    margin-bottom: 5rem;\n  }\n\n  .lg\\:ml-20{\n    margin-left: 5rem;\n  }\n\n  .lg\\:mt-24{\n    margin-top: 6rem;\n  }\n\n  .lg\\:mr-24{\n    margin-right: 6rem;\n  }\n\n  .lg\\:mb-24{\n    margin-bottom: 6rem;\n  }\n\n  .lg\\:ml-24{\n    margin-left: 6rem;\n  }\n\n  .lg\\:mt-32{\n    margin-top: 8rem;\n  }\n\n  .lg\\:mr-32{\n    margin-right: 8rem;\n  }\n\n  .lg\\:mb-32{\n    margin-bottom: 8rem;\n  }\n\n  .lg\\:ml-32{\n    margin-left: 8rem;\n  }\n\n  .lg\\:mt-40{\n    margin-top: 10rem;\n  }\n\n  .lg\\:mr-40{\n    margin-right: 10rem;\n  }\n\n  .lg\\:mb-40{\n    margin-bottom: 10rem;\n  }\n\n  .lg\\:ml-40{\n    margin-left: 10rem;\n  }\n\n  .lg\\:mt-48{\n    margin-top: 12rem;\n  }\n\n  .lg\\:mr-48{\n    margin-right: 12rem;\n  }\n\n  .lg\\:mb-48{\n    margin-bottom: 12rem;\n  }\n\n  .lg\\:ml-48{\n    margin-left: 12rem;\n  }\n\n  .lg\\:mt-56{\n    margin-top: 14rem;\n  }\n\n  .lg\\:mr-56{\n    margin-right: 14rem;\n  }\n\n  .lg\\:mb-56{\n    margin-bottom: 14rem;\n  }\n\n  .lg\\:ml-56{\n    margin-left: 14rem;\n  }\n\n  .lg\\:mt-64{\n    margin-top: 16rem;\n  }\n\n  .lg\\:mr-64{\n    margin-right: 16rem;\n  }\n\n  .lg\\:mb-64{\n    margin-bottom: 16rem;\n  }\n\n  .lg\\:ml-64{\n    margin-left: 16rem;\n  }\n\n  .lg\\:mt-auto{\n    margin-top: auto;\n  }\n\n  .lg\\:mr-auto{\n    margin-right: auto;\n  }\n\n  .lg\\:mb-auto{\n    margin-bottom: auto;\n  }\n\n  .lg\\:ml-auto{\n    margin-left: auto;\n  }\n\n  .lg\\:mt-px{\n    margin-top: 1px;\n  }\n\n  .lg\\:mr-px{\n    margin-right: 1px;\n  }\n\n  .lg\\:mb-px{\n    margin-bottom: 1px;\n  }\n\n  .lg\\:ml-px{\n    margin-left: 1px;\n  }\n\n  .lg\\:-mt-1{\n    margin-top: -0.25rem;\n  }\n\n  .lg\\:-mr-1{\n    margin-right: -0.25rem;\n  }\n\n  .lg\\:-mb-1{\n    margin-bottom: -0.25rem;\n  }\n\n  .lg\\:-ml-1{\n    margin-left: -0.25rem;\n  }\n\n  .lg\\:-mt-2{\n    margin-top: -0.5rem;\n  }\n\n  .lg\\:-mr-2{\n    margin-right: -0.5rem;\n  }\n\n  .lg\\:-mb-2{\n    margin-bottom: -0.5rem;\n  }\n\n  .lg\\:-ml-2{\n    margin-left: -0.5rem;\n  }\n\n  .lg\\:-mt-3{\n    margin-top: -0.75rem;\n  }\n\n  .lg\\:-mr-3{\n    margin-right: -0.75rem;\n  }\n\n  .lg\\:-mb-3{\n    margin-bottom: -0.75rem;\n  }\n\n  .lg\\:-ml-3{\n    margin-left: -0.75rem;\n  }\n\n  .lg\\:-mt-4{\n    margin-top: -1rem;\n  }\n\n  .lg\\:-mr-4{\n    margin-right: -1rem;\n  }\n\n  .lg\\:-mb-4{\n    margin-bottom: -1rem;\n  }\n\n  .lg\\:-ml-4{\n    margin-left: -1rem;\n  }\n\n  .lg\\:-mt-5{\n    margin-top: -1.25rem;\n  }\n\n  .lg\\:-mr-5{\n    margin-right: -1.25rem;\n  }\n\n  .lg\\:-mb-5{\n    margin-bottom: -1.25rem;\n  }\n\n  .lg\\:-ml-5{\n    margin-left: -1.25rem;\n  }\n\n  .lg\\:-mt-6{\n    margin-top: -1.5rem;\n  }\n\n  .lg\\:-mr-6{\n    margin-right: -1.5rem;\n  }\n\n  .lg\\:-mb-6{\n    margin-bottom: -1.5rem;\n  }\n\n  .lg\\:-ml-6{\n    margin-left: -1.5rem;\n  }\n\n  .lg\\:-mt-8{\n    margin-top: -2rem;\n  }\n\n  .lg\\:-mr-8{\n    margin-right: -2rem;\n  }\n\n  .lg\\:-mb-8{\n    margin-bottom: -2rem;\n  }\n\n  .lg\\:-ml-8{\n    margin-left: -2rem;\n  }\n\n  .lg\\:-mt-10{\n    margin-top: -2.5rem;\n  }\n\n  .lg\\:-mr-10{\n    margin-right: -2.5rem;\n  }\n\n  .lg\\:-mb-10{\n    margin-bottom: -2.5rem;\n  }\n\n  .lg\\:-ml-10{\n    margin-left: -2.5rem;\n  }\n\n  .lg\\:-mt-12{\n    margin-top: -3rem;\n  }\n\n  .lg\\:-mr-12{\n    margin-right: -3rem;\n  }\n\n  .lg\\:-mb-12{\n    margin-bottom: -3rem;\n  }\n\n  .lg\\:-ml-12{\n    margin-left: -3rem;\n  }\n\n  .lg\\:-mt-16{\n    margin-top: -4rem;\n  }\n\n  .lg\\:-mr-16{\n    margin-right: -4rem;\n  }\n\n  .lg\\:-mb-16{\n    margin-bottom: -4rem;\n  }\n\n  .lg\\:-ml-16{\n    margin-left: -4rem;\n  }\n\n  .lg\\:-mt-20{\n    margin-top: -5rem;\n  }\n\n  .lg\\:-mr-20{\n    margin-right: -5rem;\n  }\n\n  .lg\\:-mb-20{\n    margin-bottom: -5rem;\n  }\n\n  .lg\\:-ml-20{\n    margin-left: -5rem;\n  }\n\n  .lg\\:-mt-24{\n    margin-top: -6rem;\n  }\n\n  .lg\\:-mr-24{\n    margin-right: -6rem;\n  }\n\n  .lg\\:-mb-24{\n    margin-bottom: -6rem;\n  }\n\n  .lg\\:-ml-24{\n    margin-left: -6rem;\n  }\n\n  .lg\\:-mt-32{\n    margin-top: -8rem;\n  }\n\n  .lg\\:-mr-32{\n    margin-right: -8rem;\n  }\n\n  .lg\\:-mb-32{\n    margin-bottom: -8rem;\n  }\n\n  .lg\\:-ml-32{\n    margin-left: -8rem;\n  }\n\n  .lg\\:-mt-40{\n    margin-top: -10rem;\n  }\n\n  .lg\\:-mr-40{\n    margin-right: -10rem;\n  }\n\n  .lg\\:-mb-40{\n    margin-bottom: -10rem;\n  }\n\n  .lg\\:-ml-40{\n    margin-left: -10rem;\n  }\n\n  .lg\\:-mt-48{\n    margin-top: -12rem;\n  }\n\n  .lg\\:-mr-48{\n    margin-right: -12rem;\n  }\n\n  .lg\\:-mb-48{\n    margin-bottom: -12rem;\n  }\n\n  .lg\\:-ml-48{\n    margin-left: -12rem;\n  }\n\n  .lg\\:-mt-56{\n    margin-top: -14rem;\n  }\n\n  .lg\\:-mr-56{\n    margin-right: -14rem;\n  }\n\n  .lg\\:-mb-56{\n    margin-bottom: -14rem;\n  }\n\n  .lg\\:-ml-56{\n    margin-left: -14rem;\n  }\n\n  .lg\\:-mt-64{\n    margin-top: -16rem;\n  }\n\n  .lg\\:-mr-64{\n    margin-right: -16rem;\n  }\n\n  .lg\\:-mb-64{\n    margin-bottom: -16rem;\n  }\n\n  .lg\\:-ml-64{\n    margin-left: -16rem;\n  }\n\n  .lg\\:-mt-px{\n    margin-top: -1px;\n  }\n\n  .lg\\:-mr-px{\n    margin-right: -1px;\n  }\n\n  .lg\\:-mb-px{\n    margin-bottom: -1px;\n  }\n\n  .lg\\:-ml-px{\n    margin-left: -1px;\n  }\n\n  .lg\\:max-h-full{\n    max-height: 100%;\n  }\n\n  .lg\\:max-h-screen{\n    max-height: 100vh;\n  }\n\n  .lg\\:max-w-xs{\n    max-width: 20rem;\n  }\n\n  .lg\\:max-w-sm{\n    max-width: 24rem;\n  }\n\n  .lg\\:max-w-md{\n    max-width: 28rem;\n  }\n\n  .lg\\:max-w-lg{\n    max-width: 32rem;\n  }\n\n  .lg\\:max-w-xl{\n    max-width: 36rem;\n  }\n\n  .lg\\:max-w-2xl{\n    max-width: 42rem;\n  }\n\n  .lg\\:max-w-3xl{\n    max-width: 48rem;\n  }\n\n  .lg\\:max-w-4xl{\n    max-width: 56rem;\n  }\n\n  .lg\\:max-w-5xl{\n    max-width: 64rem;\n  }\n\n  .lg\\:max-w-6xl{\n    max-width: 72rem;\n  }\n\n  .lg\\:max-w-full{\n    max-width: 100%;\n  }\n\n  .lg\\:min-h-0{\n    min-height: 0;\n  }\n\n  .lg\\:min-h-full{\n    min-height: 100%;\n  }\n\n  .lg\\:min-h-screen{\n    min-height: 100vh;\n  }\n\n  .lg\\:min-w-0{\n    min-width: 0;\n  }\n\n  .lg\\:min-w-full{\n    min-width: 100%;\n  }\n\n  .lg\\:object-contain{\n    -o-object-fit: contain;\n       object-fit: contain;\n  }\n\n  .lg\\:object-cover{\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n\n  .lg\\:object-fill{\n    -o-object-fit: fill;\n       object-fit: fill;\n  }\n\n  .lg\\:object-none{\n    -o-object-fit: none;\n       object-fit: none;\n  }\n\n  .lg\\:object-scale-down{\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n  }\n\n  .lg\\:object-bottom{\n    -o-object-position: bottom;\n       object-position: bottom;\n  }\n\n  .lg\\:object-center{\n    -o-object-position: center;\n       object-position: center;\n  }\n\n  .lg\\:object-left{\n    -o-object-position: left;\n       object-position: left;\n  }\n\n  .lg\\:object-left-bottom{\n    -o-object-position: left bottom;\n       object-position: left bottom;\n  }\n\n  .lg\\:object-left-top{\n    -o-object-position: left top;\n       object-position: left top;\n  }\n\n  .lg\\:object-right{\n    -o-object-position: right;\n       object-position: right;\n  }\n\n  .lg\\:object-right-bottom{\n    -o-object-position: right bottom;\n       object-position: right bottom;\n  }\n\n  .lg\\:object-right-top{\n    -o-object-position: right top;\n       object-position: right top;\n  }\n\n  .lg\\:object-top{\n    -o-object-position: top;\n       object-position: top;\n  }\n\n  .lg\\:opacity-0{\n    opacity: 0;\n  }\n\n  .lg\\:opacity-25{\n    opacity: 0.25;\n  }\n\n  .lg\\:opacity-50{\n    opacity: 0.5;\n  }\n\n  .lg\\:opacity-75{\n    opacity: 0.75;\n  }\n\n  .lg\\:opacity-100{\n    opacity: 1;\n  }\n\n  .lg\\:outline-none{\n    outline: 0;\n  }\n\n  .lg\\:focus\\:outline-none:focus{\n    outline: 0;\n  }\n\n  .lg\\:overflow-auto{\n    overflow: auto;\n  }\n\n  .lg\\:overflow-hidden{\n    overflow: hidden;\n  }\n\n  .lg\\:overflow-visible{\n    overflow: visible;\n  }\n\n  .lg\\:overflow-scroll{\n    overflow: scroll;\n  }\n\n  .lg\\:overflow-x-auto{\n    overflow-x: auto;\n  }\n\n  .lg\\:overflow-y-auto{\n    overflow-y: auto;\n  }\n\n  .lg\\:overflow-x-hidden{\n    overflow-x: hidden;\n  }\n\n  .lg\\:overflow-y-hidden{\n    overflow-y: hidden;\n  }\n\n  .lg\\:overflow-x-visible{\n    overflow-x: visible;\n  }\n\n  .lg\\:overflow-y-visible{\n    overflow-y: visible;\n  }\n\n  .lg\\:overflow-x-scroll{\n    overflow-x: scroll;\n  }\n\n  .lg\\:overflow-y-scroll{\n    overflow-y: scroll;\n  }\n\n  .lg\\:scrolling-touch{\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .lg\\:scrolling-auto{\n    -webkit-overflow-scrolling: auto;\n  }\n\n  .lg\\:p-0{\n    padding: 0;\n  }\n\n  .lg\\:p-1{\n    padding: 0.25rem;\n  }\n\n  .lg\\:p-2{\n    padding: 0.5rem;\n  }\n\n  .lg\\:p-3{\n    padding: 0.75rem;\n  }\n\n  .lg\\:p-4{\n    padding: 1rem;\n  }\n\n  .lg\\:p-5{\n    padding: 1.25rem;\n  }\n\n  .lg\\:p-6{\n    padding: 1.5rem;\n  }\n\n  .lg\\:p-8{\n    padding: 2rem;\n  }\n\n  .lg\\:p-10{\n    padding: 2.5rem;\n  }\n\n  .lg\\:p-12{\n    padding: 3rem;\n  }\n\n  .lg\\:p-16{\n    padding: 4rem;\n  }\n\n  .lg\\:p-20{\n    padding: 5rem;\n  }\n\n  .lg\\:p-24{\n    padding: 6rem;\n  }\n\n  .lg\\:p-32{\n    padding: 8rem;\n  }\n\n  .lg\\:p-40{\n    padding: 10rem;\n  }\n\n  .lg\\:p-48{\n    padding: 12rem;\n  }\n\n  .lg\\:p-56{\n    padding: 14rem;\n  }\n\n  .lg\\:p-64{\n    padding: 16rem;\n  }\n\n  .lg\\:p-px{\n    padding: 1px;\n  }\n\n  .lg\\:py-0{\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  .lg\\:px-0{\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .lg\\:py-1{\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n  }\n\n  .lg\\:px-1{\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n  }\n\n  .lg\\:py-2{\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n  }\n\n  .lg\\:px-2{\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n\n  .lg\\:py-3{\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n  }\n\n  .lg\\:px-3{\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  }\n\n  .lg\\:py-4{\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .lg\\:px-4{\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  .lg\\:py-5{\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem;\n  }\n\n  .lg\\:px-5{\n    padding-left: 1.25rem;\n    padding-right: 1.25rem;\n  }\n\n  .lg\\:py-6{\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n\n  .lg\\:px-6{\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .lg\\:py-8{\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n  }\n\n  .lg\\:px-8{\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .lg\\:py-10{\n    padding-top: 2.5rem;\n    padding-bottom: 2.5rem;\n  }\n\n  .lg\\:px-10{\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n  }\n\n  .lg\\:py-12{\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n  }\n\n  .lg\\:px-12{\n    padding-left: 3rem;\n    padding-right: 3rem;\n  }\n\n  .lg\\:py-16{\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n  }\n\n  .lg\\:px-16{\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n\n  .lg\\:py-20{\n    padding-top: 5rem;\n    padding-bottom: 5rem;\n  }\n\n  .lg\\:px-20{\n    padding-left: 5rem;\n    padding-right: 5rem;\n  }\n\n  .lg\\:py-24{\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n\n  .lg\\:px-24{\n    padding-left: 6rem;\n    padding-right: 6rem;\n  }\n\n  .lg\\:py-32{\n    padding-top: 8rem;\n    padding-bottom: 8rem;\n  }\n\n  .lg\\:px-32{\n    padding-left: 8rem;\n    padding-right: 8rem;\n  }\n\n  .lg\\:py-40{\n    padding-top: 10rem;\n    padding-bottom: 10rem;\n  }\n\n  .lg\\:px-40{\n    padding-left: 10rem;\n    padding-right: 10rem;\n  }\n\n  .lg\\:py-48{\n    padding-top: 12rem;\n    padding-bottom: 12rem;\n  }\n\n  .lg\\:px-48{\n    padding-left: 12rem;\n    padding-right: 12rem;\n  }\n\n  .lg\\:py-56{\n    padding-top: 14rem;\n    padding-bottom: 14rem;\n  }\n\n  .lg\\:px-56{\n    padding-left: 14rem;\n    padding-right: 14rem;\n  }\n\n  .lg\\:py-64{\n    padding-top: 16rem;\n    padding-bottom: 16rem;\n  }\n\n  .lg\\:px-64{\n    padding-left: 16rem;\n    padding-right: 16rem;\n  }\n\n  .lg\\:py-px{\n    padding-top: 1px;\n    padding-bottom: 1px;\n  }\n\n  .lg\\:px-px{\n    padding-left: 1px;\n    padding-right: 1px;\n  }\n\n  .lg\\:pt-0{\n    padding-top: 0;\n  }\n\n  .lg\\:pr-0{\n    padding-right: 0;\n  }\n\n  .lg\\:pb-0{\n    padding-bottom: 0;\n  }\n\n  .lg\\:pl-0{\n    padding-left: 0;\n  }\n\n  .lg\\:pt-1{\n    padding-top: 0.25rem;\n  }\n\n  .lg\\:pr-1{\n    padding-right: 0.25rem;\n  }\n\n  .lg\\:pb-1{\n    padding-bottom: 0.25rem;\n  }\n\n  .lg\\:pl-1{\n    padding-left: 0.25rem;\n  }\n\n  .lg\\:pt-2{\n    padding-top: 0.5rem;\n  }\n\n  .lg\\:pr-2{\n    padding-right: 0.5rem;\n  }\n\n  .lg\\:pb-2{\n    padding-bottom: 0.5rem;\n  }\n\n  .lg\\:pl-2{\n    padding-left: 0.5rem;\n  }\n\n  .lg\\:pt-3{\n    padding-top: 0.75rem;\n  }\n\n  .lg\\:pr-3{\n    padding-right: 0.75rem;\n  }\n\n  .lg\\:pb-3{\n    padding-bottom: 0.75rem;\n  }\n\n  .lg\\:pl-3{\n    padding-left: 0.75rem;\n  }\n\n  .lg\\:pt-4{\n    padding-top: 1rem;\n  }\n\n  .lg\\:pr-4{\n    padding-right: 1rem;\n  }\n\n  .lg\\:pb-4{\n    padding-bottom: 1rem;\n  }\n\n  .lg\\:pl-4{\n    padding-left: 1rem;\n  }\n\n  .lg\\:pt-5{\n    padding-top: 1.25rem;\n  }\n\n  .lg\\:pr-5{\n    padding-right: 1.25rem;\n  }\n\n  .lg\\:pb-5{\n    padding-bottom: 1.25rem;\n  }\n\n  .lg\\:pl-5{\n    padding-left: 1.25rem;\n  }\n\n  .lg\\:pt-6{\n    padding-top: 1.5rem;\n  }\n\n  .lg\\:pr-6{\n    padding-right: 1.5rem;\n  }\n\n  .lg\\:pb-6{\n    padding-bottom: 1.5rem;\n  }\n\n  .lg\\:pl-6{\n    padding-left: 1.5rem;\n  }\n\n  .lg\\:pt-8{\n    padding-top: 2rem;\n  }\n\n  .lg\\:pr-8{\n    padding-right: 2rem;\n  }\n\n  .lg\\:pb-8{\n    padding-bottom: 2rem;\n  }\n\n  .lg\\:pl-8{\n    padding-left: 2rem;\n  }\n\n  .lg\\:pt-10{\n    padding-top: 2.5rem;\n  }\n\n  .lg\\:pr-10{\n    padding-right: 2.5rem;\n  }\n\n  .lg\\:pb-10{\n    padding-bottom: 2.5rem;\n  }\n\n  .lg\\:pl-10{\n    padding-left: 2.5rem;\n  }\n\n  .lg\\:pt-12{\n    padding-top: 3rem;\n  }\n\n  .lg\\:pr-12{\n    padding-right: 3rem;\n  }\n\n  .lg\\:pb-12{\n    padding-bottom: 3rem;\n  }\n\n  .lg\\:pl-12{\n    padding-left: 3rem;\n  }\n\n  .lg\\:pt-16{\n    padding-top: 4rem;\n  }\n\n  .lg\\:pr-16{\n    padding-right: 4rem;\n  }\n\n  .lg\\:pb-16{\n    padding-bottom: 4rem;\n  }\n\n  .lg\\:pl-16{\n    padding-left: 4rem;\n  }\n\n  .lg\\:pt-20{\n    padding-top: 5rem;\n  }\n\n  .lg\\:pr-20{\n    padding-right: 5rem;\n  }\n\n  .lg\\:pb-20{\n    padding-bottom: 5rem;\n  }\n\n  .lg\\:pl-20{\n    padding-left: 5rem;\n  }\n\n  .lg\\:pt-24{\n    padding-top: 6rem;\n  }\n\n  .lg\\:pr-24{\n    padding-right: 6rem;\n  }\n\n  .lg\\:pb-24{\n    padding-bottom: 6rem;\n  }\n\n  .lg\\:pl-24{\n    padding-left: 6rem;\n  }\n\n  .lg\\:pt-32{\n    padding-top: 8rem;\n  }\n\n  .lg\\:pr-32{\n    padding-right: 8rem;\n  }\n\n  .lg\\:pb-32{\n    padding-bottom: 8rem;\n  }\n\n  .lg\\:pl-32{\n    padding-left: 8rem;\n  }\n\n  .lg\\:pt-40{\n    padding-top: 10rem;\n  }\n\n  .lg\\:pr-40{\n    padding-right: 10rem;\n  }\n\n  .lg\\:pb-40{\n    padding-bottom: 10rem;\n  }\n\n  .lg\\:pl-40{\n    padding-left: 10rem;\n  }\n\n  .lg\\:pt-48{\n    padding-top: 12rem;\n  }\n\n  .lg\\:pr-48{\n    padding-right: 12rem;\n  }\n\n  .lg\\:pb-48{\n    padding-bottom: 12rem;\n  }\n\n  .lg\\:pl-48{\n    padding-left: 12rem;\n  }\n\n  .lg\\:pt-56{\n    padding-top: 14rem;\n  }\n\n  .lg\\:pr-56{\n    padding-right: 14rem;\n  }\n\n  .lg\\:pb-56{\n    padding-bottom: 14rem;\n  }\n\n  .lg\\:pl-56{\n    padding-left: 14rem;\n  }\n\n  .lg\\:pt-64{\n    padding-top: 16rem;\n  }\n\n  .lg\\:pr-64{\n    padding-right: 16rem;\n  }\n\n  .lg\\:pb-64{\n    padding-bottom: 16rem;\n  }\n\n  .lg\\:pl-64{\n    padding-left: 16rem;\n  }\n\n  .lg\\:pt-px{\n    padding-top: 1px;\n  }\n\n  .lg\\:pr-px{\n    padding-right: 1px;\n  }\n\n  .lg\\:pb-px{\n    padding-bottom: 1px;\n  }\n\n  .lg\\:pl-px{\n    padding-left: 1px;\n  }\n\n  .lg\\:pointer-events-none{\n    pointer-events: none;\n  }\n\n  .lg\\:pointer-events-auto{\n    pointer-events: auto;\n  }\n\n  .lg\\:static{\n    position: static;\n  }\n\n  .lg\\:fixed{\n    position: fixed;\n  }\n\n  .lg\\:absolute{\n    position: absolute;\n  }\n\n  .lg\\:relative{\n    position: relative;\n  }\n\n  .lg\\:sticky{\n    position: -webkit-sticky;\n    position: sticky;\n  }\n\n  .lg\\:inset-0{\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n\n  .lg\\:inset-auto{\n    top: auto;\n    right: auto;\n    bottom: auto;\n    left: auto;\n  }\n\n  .lg\\:inset-y-0{\n    top: 0;\n    bottom: 0;\n  }\n\n  .lg\\:inset-x-0{\n    right: 0;\n    left: 0;\n  }\n\n  .lg\\:inset-y-auto{\n    top: auto;\n    bottom: auto;\n  }\n\n  .lg\\:inset-x-auto{\n    right: auto;\n    left: auto;\n  }\n\n  .lg\\:top-0{\n    top: 0;\n  }\n\n  .lg\\:right-0{\n    right: 0;\n  }\n\n  .lg\\:bottom-0{\n    bottom: 0;\n  }\n\n  .lg\\:left-0{\n    left: 0;\n  }\n\n  .lg\\:top-auto{\n    top: auto;\n  }\n\n  .lg\\:right-auto{\n    right: auto;\n  }\n\n  .lg\\:bottom-auto{\n    bottom: auto;\n  }\n\n  .lg\\:left-auto{\n    left: auto;\n  }\n\n  .lg\\:resize-none{\n    resize: none;\n  }\n\n  .lg\\:resize-y{\n    resize: vertical;\n  }\n\n  .lg\\:resize-x{\n    resize: horizontal;\n  }\n\n  .lg\\:resize{\n    resize: both;\n  }\n\n  .lg\\:shadow{\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .lg\\:shadow-md{\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  }\n\n  .lg\\:shadow-lg{\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  }\n\n  .lg\\:shadow-xl{\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  }\n\n  .lg\\:shadow-2xl{\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  }\n\n  .lg\\:shadow-inner{\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .lg\\:shadow-outline{\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  }\n\n  .lg\\:shadow-none{\n    box-shadow: none;\n  }\n\n  .lg\\:hover\\:shadow:hover{\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .lg\\:hover\\:shadow-md:hover{\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  }\n\n  .lg\\:hover\\:shadow-lg:hover{\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  }\n\n  .lg\\:hover\\:shadow-xl:hover{\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  }\n\n  .lg\\:hover\\:shadow-2xl:hover{\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  }\n\n  .lg\\:hover\\:shadow-inner:hover{\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .lg\\:hover\\:shadow-outline:hover{\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  }\n\n  .lg\\:hover\\:shadow-none:hover{\n    box-shadow: none;\n  }\n\n  .lg\\:focus\\:shadow:focus{\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .lg\\:focus\\:shadow-md:focus{\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  }\n\n  .lg\\:focus\\:shadow-lg:focus{\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  }\n\n  .lg\\:focus\\:shadow-xl:focus{\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  }\n\n  .lg\\:focus\\:shadow-2xl:focus{\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  }\n\n  .lg\\:focus\\:shadow-inner:focus{\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .lg\\:focus\\:shadow-outline:focus{\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  }\n\n  .lg\\:focus\\:shadow-none:focus{\n    box-shadow: none;\n  }\n\n  .lg\\:fill-current{\n    fill: currentColor;\n  }\n\n  .lg\\:stroke-current{\n    stroke: currentColor;\n  }\n\n  .lg\\:table-auto{\n    table-layout: auto;\n  }\n\n  .lg\\:table-fixed{\n    table-layout: fixed;\n  }\n\n  .lg\\:text-left{\n    text-align: left;\n  }\n\n  .lg\\:text-center{\n    text-align: center;\n  }\n\n  .lg\\:text-right{\n    text-align: right;\n  }\n\n  .lg\\:text-justify{\n    text-align: justify;\n  }\n\n  .lg\\:text-transparent{\n    color: transparent;\n  }\n\n  .lg\\:text-black{\n    color: #000;\n  }\n\n  .lg\\:text-white{\n    color: #fff;\n  }\n\n  .lg\\:text-gray-100{\n    color: hsl(216, 33%, 97%);\n  }\n\n  .lg\\:text-gray-200{\n    color: hsl(214, 15%, 91%);\n  }\n\n  .lg\\:text-gray-300{\n    color: hsl(210, 16%, 82%);\n  }\n\n  .lg\\:text-gray-400{\n    color: hsl(211, 13%, 65%);\n  }\n\n  .lg\\:text-gray-500{\n    color: hsl(211, 10%, 53%);\n  }\n\n  .lg\\:text-gray-600{\n    color: hsl(211, 12%, 43%);\n  }\n\n  .lg\\:text-gray-700{\n    color: hsl(209, 14%, 37%);\n  }\n\n  .lg\\:text-gray-800{\n    color: hsl(209, 18%, 30%);\n  }\n\n  .lg\\:text-gray-900{\n    color: hsl(209, 20%, 25%);\n  }\n\n  .lg\\:text-gray-1000{\n    color: hsl(210, 24%, 16%);\n  }\n\n  .lg\\:text-red-100{\n    color: hsl(360, 100%, 95%);\n  }\n\n  .lg\\:text-red-200{\n    color: hsl(360, 100%, 87%);\n  }\n\n  .lg\\:text-red-300{\n    color: hsl(360, 100%, 80%);\n  }\n\n  .lg\\:text-red-400{\n    color: hsl(360, 91%, 69%);\n  }\n\n  .lg\\:text-red-500{\n    color: hsl(360, 83%, 62%);\n  }\n\n  .lg\\:text-red-600{\n    color: hsl(356, 75%, 53%);\n  }\n\n  .lg\\:text-red-700{\n    color: hsl(354, 85%, 44%);\n  }\n\n  .lg\\:text-red-800{\n    color: hsl(352, 90%, 35%);\n  }\n\n  .lg\\:text-red-900{\n    color: hsl(350, 94%, 28%);\n  }\n\n  .lg\\:text-red-1000{\n    color: hsl(348, 94%, 20%);\n  }\n\n  .lg\\:text-orange-100{\n    color: #fffaf0;\n  }\n\n  .lg\\:text-orange-200{\n    color: #feebc8;\n  }\n\n  .lg\\:text-orange-300{\n    color: #fbd38d;\n  }\n\n  .lg\\:text-orange-400{\n    color: #f6ad55;\n  }\n\n  .lg\\:text-orange-500{\n    color: #ed8936;\n  }\n\n  .lg\\:text-orange-600{\n    color: #dd6b20;\n  }\n\n  .lg\\:text-orange-700{\n    color: #c05621;\n  }\n\n  .lg\\:text-orange-800{\n    color: #9c4221;\n  }\n\n  .lg\\:text-orange-900{\n    color: #7b341e;\n  }\n\n  .lg\\:text-yellow-100{\n    color: hsl(15, 86%, 30%);\n  }\n\n  .lg\\:text-yellow-200{\n    color: hsl(22, 82%, 39%);\n  }\n\n  .lg\\:text-yellow-300{\n    color: hsl(29, 80%, 44%);\n  }\n\n  .lg\\:text-yellow-400{\n    color: hsl(36, 77%, 49%);\n  }\n\n  .lg\\:text-yellow-500{\n    color: hsl(42, 87%, 55%);\n  }\n\n  .lg\\:text-yellow-600{\n    color: hsl(44, 92%, 63%);\n  }\n\n  .lg\\:text-yellow-700{\n    color: hsl(48, 94%, 68%);\n  }\n\n  .lg\\:text-yellow-800{\n    color: hsl(48, 95%, 76%);\n  }\n\n  .lg\\:text-yellow-900{\n    color: hsl(48, 100%, 88%);\n  }\n\n  .lg\\:text-yellow-1000{\n    color: hsl(49, 100%, 96%);\n  }\n\n  .lg\\:text-green-100{\n    color: #f0fff4;\n  }\n\n  .lg\\:text-green-200{\n    color: #c6f6d5;\n  }\n\n  .lg\\:text-green-300{\n    color: #9ae6b4;\n  }\n\n  .lg\\:text-green-400{\n    color: #68d391;\n  }\n\n  .lg\\:text-green-500{\n    color: #48bb78;\n  }\n\n  .lg\\:text-green-600{\n    color: #38a169;\n  }\n\n  .lg\\:text-green-700{\n    color: #2f855a;\n  }\n\n  .lg\\:text-green-800{\n    color: #276749;\n  }\n\n  .lg\\:text-green-900{\n    color: #22543d;\n  }\n\n  .lg\\:text-teal-100{\n    color: hsl(170, 97%, 15%);\n  }\n\n  .lg\\:text-teal-200{\n    color: hsl(168, 80%, 23%);\n  }\n\n  .lg\\:text-teal-300{\n    color: hsl(166, 72%, 28%);\n  }\n\n  .lg\\:text-teal-400{\n    color: hsl(164, 71%, 34%);\n  }\n\n  .lg\\:text-teal-500{\n    color: hsl(162, 63%, 41%);\n  }\n\n  .lg\\:text-teal-600{\n    color: hsl(160, 51%, 49%);\n  }\n\n  .lg\\:text-teal-700{\n    color: hsl(158, 58%, 62%);\n  }\n\n  .lg\\:text-teal-800{\n    color: hsl(156, 73%, 74%);\n  }\n\n  .lg\\:text-teal-900{\n    color: hsl(154, 75%, 87%);\n  }\n\n  .lg\\:text-teal-1000{\n    color: hsl(152, 68%, 96%);\n  }\n\n  .lg\\:text-blue-100{\n    color: hsl(195, 100%, 95%);\n  }\n\n  .lg\\:text-blue-200{\n    color: hsl(195, 100%, 85%);\n  }\n\n  .lg\\:text-blue-300{\n    color: hsl(195, 97%, 75%);\n  }\n\n  .lg\\:text-blue-400{\n    color: hsl(196, 94%, 67%);\n  }\n\n  .lg\\:text-blue-500{\n    color: hsl(197, 92%, 61%);\n  }\n\n  .lg\\:text-blue-600{\n    color: hsl(199, 84%, 55%);\n  }\n\n  .lg\\:text-blue-700{\n    color: hsl(201, 79%, 46%);\n  }\n\n  .lg\\:text-blue-800{\n    color: hsl(202, 83%, 41%);\n  }\n\n  .lg\\:text-blue-900{\n    color: hsl(203, 87%, 34%);\n  }\n\n  .lg\\:text-blue-1000{\n    color: hsl(204, 96%, 27%);\n  }\n\n  .lg\\:text-indigo-100{\n    color: hsl(221, 68%, 93%);\n  }\n\n  .lg\\:text-indigo-200{\n    color: hsl(221, 78%, 86%);\n  }\n\n  .lg\\:text-indigo-300{\n    color: hsl(224, 67%, 76%);\n  }\n\n  .lg\\:text-indigo-400{\n    color: hsl(225, 57%, 67%);\n  }\n\n  .lg\\:text-indigo-500{\n    color: hsl(227, 50%, 59%);\n  }\n\n  .lg\\:text-indigo-600{\n    color: hsl(227, 42%, 51%);\n  }\n\n  .lg\\:text-indigo-700{\n    color: hsl(228, 45%, 45%);\n  }\n\n  .lg\\:text-indigo-800{\n    color: hsl(230, 49%, 41%);\n  }\n\n  .lg\\:text-indigo-900{\n    color: hsl(232, 51%, 36%);\n  }\n\n  .lg\\:text-indigo-1000{\n    color: hsl(234, 62%, 26%);\n  }\n\n  .lg\\:text-purple-100{\n    color: #faf5ff;\n  }\n\n  .lg\\:text-purple-200{\n    color: #e9d8fd;\n  }\n\n  .lg\\:text-purple-300{\n    color: #d6bcfa;\n  }\n\n  .lg\\:text-purple-400{\n    color: #b794f4;\n  }\n\n  .lg\\:text-purple-500{\n    color: #9f7aea;\n  }\n\n  .lg\\:text-purple-600{\n    color: #805ad5;\n  }\n\n  .lg\\:text-purple-700{\n    color: #6b46c1;\n  }\n\n  .lg\\:text-purple-800{\n    color: #553c9a;\n  }\n\n  .lg\\:text-purple-900{\n    color: #44337a;\n  }\n\n  .lg\\:text-pink-100{\n    color: #fff5f7;\n  }\n\n  .lg\\:text-pink-200{\n    color: #fed7e2;\n  }\n\n  .lg\\:text-pink-300{\n    color: #fbb6ce;\n  }\n\n  .lg\\:text-pink-400{\n    color: #f687b3;\n  }\n\n  .lg\\:text-pink-500{\n    color: #ed64a6;\n  }\n\n  .lg\\:text-pink-600{\n    color: #d53f8c;\n  }\n\n  .lg\\:text-pink-700{\n    color: #b83280;\n  }\n\n  .lg\\:text-pink-800{\n    color: #97266d;\n  }\n\n  .lg\\:text-pink-900{\n    color: #702459;\n  }\n\n  .lg\\:hover\\:text-transparent:hover{\n    color: transparent;\n  }\n\n  .lg\\:hover\\:text-black:hover{\n    color: #000;\n  }\n\n  .lg\\:hover\\:text-white:hover{\n    color: #fff;\n  }\n\n  .lg\\:hover\\:text-gray-100:hover{\n    color: hsl(216, 33%, 97%);\n  }\n\n  .lg\\:hover\\:text-gray-200:hover{\n    color: hsl(214, 15%, 91%);\n  }\n\n  .lg\\:hover\\:text-gray-300:hover{\n    color: hsl(210, 16%, 82%);\n  }\n\n  .lg\\:hover\\:text-gray-400:hover{\n    color: hsl(211, 13%, 65%);\n  }\n\n  .lg\\:hover\\:text-gray-500:hover{\n    color: hsl(211, 10%, 53%);\n  }\n\n  .lg\\:hover\\:text-gray-600:hover{\n    color: hsl(211, 12%, 43%);\n  }\n\n  .lg\\:hover\\:text-gray-700:hover{\n    color: hsl(209, 14%, 37%);\n  }\n\n  .lg\\:hover\\:text-gray-800:hover{\n    color: hsl(209, 18%, 30%);\n  }\n\n  .lg\\:hover\\:text-gray-900:hover{\n    color: hsl(209, 20%, 25%);\n  }\n\n  .lg\\:hover\\:text-gray-1000:hover{\n    color: hsl(210, 24%, 16%);\n  }\n\n  .lg\\:hover\\:text-red-100:hover{\n    color: hsl(360, 100%, 95%);\n  }\n\n  .lg\\:hover\\:text-red-200:hover{\n    color: hsl(360, 100%, 87%);\n  }\n\n  .lg\\:hover\\:text-red-300:hover{\n    color: hsl(360, 100%, 80%);\n  }\n\n  .lg\\:hover\\:text-red-400:hover{\n    color: hsl(360, 91%, 69%);\n  }\n\n  .lg\\:hover\\:text-red-500:hover{\n    color: hsl(360, 83%, 62%);\n  }\n\n  .lg\\:hover\\:text-red-600:hover{\n    color: hsl(356, 75%, 53%);\n  }\n\n  .lg\\:hover\\:text-red-700:hover{\n    color: hsl(354, 85%, 44%);\n  }\n\n  .lg\\:hover\\:text-red-800:hover{\n    color: hsl(352, 90%, 35%);\n  }\n\n  .lg\\:hover\\:text-red-900:hover{\n    color: hsl(350, 94%, 28%);\n  }\n\n  .lg\\:hover\\:text-red-1000:hover{\n    color: hsl(348, 94%, 20%);\n  }\n\n  .lg\\:hover\\:text-orange-100:hover{\n    color: #fffaf0;\n  }\n\n  .lg\\:hover\\:text-orange-200:hover{\n    color: #feebc8;\n  }\n\n  .lg\\:hover\\:text-orange-300:hover{\n    color: #fbd38d;\n  }\n\n  .lg\\:hover\\:text-orange-400:hover{\n    color: #f6ad55;\n  }\n\n  .lg\\:hover\\:text-orange-500:hover{\n    color: #ed8936;\n  }\n\n  .lg\\:hover\\:text-orange-600:hover{\n    color: #dd6b20;\n  }\n\n  .lg\\:hover\\:text-orange-700:hover{\n    color: #c05621;\n  }\n\n  .lg\\:hover\\:text-orange-800:hover{\n    color: #9c4221;\n  }\n\n  .lg\\:hover\\:text-orange-900:hover{\n    color: #7b341e;\n  }\n\n  .lg\\:hover\\:text-yellow-100:hover{\n    color: hsl(15, 86%, 30%);\n  }\n\n  .lg\\:hover\\:text-yellow-200:hover{\n    color: hsl(22, 82%, 39%);\n  }\n\n  .lg\\:hover\\:text-yellow-300:hover{\n    color: hsl(29, 80%, 44%);\n  }\n\n  .lg\\:hover\\:text-yellow-400:hover{\n    color: hsl(36, 77%, 49%);\n  }\n\n  .lg\\:hover\\:text-yellow-500:hover{\n    color: hsl(42, 87%, 55%);\n  }\n\n  .lg\\:hover\\:text-yellow-600:hover{\n    color: hsl(44, 92%, 63%);\n  }\n\n  .lg\\:hover\\:text-yellow-700:hover{\n    color: hsl(48, 94%, 68%);\n  }\n\n  .lg\\:hover\\:text-yellow-800:hover{\n    color: hsl(48, 95%, 76%);\n  }\n\n  .lg\\:hover\\:text-yellow-900:hover{\n    color: hsl(48, 100%, 88%);\n  }\n\n  .lg\\:hover\\:text-yellow-1000:hover{\n    color: hsl(49, 100%, 96%);\n  }\n\n  .lg\\:hover\\:text-green-100:hover{\n    color: #f0fff4;\n  }\n\n  .lg\\:hover\\:text-green-200:hover{\n    color: #c6f6d5;\n  }\n\n  .lg\\:hover\\:text-green-300:hover{\n    color: #9ae6b4;\n  }\n\n  .lg\\:hover\\:text-green-400:hover{\n    color: #68d391;\n  }\n\n  .lg\\:hover\\:text-green-500:hover{\n    color: #48bb78;\n  }\n\n  .lg\\:hover\\:text-green-600:hover{\n    color: #38a169;\n  }\n\n  .lg\\:hover\\:text-green-700:hover{\n    color: #2f855a;\n  }\n\n  .lg\\:hover\\:text-green-800:hover{\n    color: #276749;\n  }\n\n  .lg\\:hover\\:text-green-900:hover{\n    color: #22543d;\n  }\n\n  .lg\\:hover\\:text-teal-100:hover{\n    color: hsl(170, 97%, 15%);\n  }\n\n  .lg\\:hover\\:text-teal-200:hover{\n    color: hsl(168, 80%, 23%);\n  }\n\n  .lg\\:hover\\:text-teal-300:hover{\n    color: hsl(166, 72%, 28%);\n  }\n\n  .lg\\:hover\\:text-teal-400:hover{\n    color: hsl(164, 71%, 34%);\n  }\n\n  .lg\\:hover\\:text-teal-500:hover{\n    color: hsl(162, 63%, 41%);\n  }\n\n  .lg\\:hover\\:text-teal-600:hover{\n    color: hsl(160, 51%, 49%);\n  }\n\n  .lg\\:hover\\:text-teal-700:hover{\n    color: hsl(158, 58%, 62%);\n  }\n\n  .lg\\:hover\\:text-teal-800:hover{\n    color: hsl(156, 73%, 74%);\n  }\n\n  .lg\\:hover\\:text-teal-900:hover{\n    color: hsl(154, 75%, 87%);\n  }\n\n  .lg\\:hover\\:text-teal-1000:hover{\n    color: hsl(152, 68%, 96%);\n  }\n\n  .lg\\:hover\\:text-blue-100:hover{\n    color: hsl(195, 100%, 95%);\n  }\n\n  .lg\\:hover\\:text-blue-200:hover{\n    color: hsl(195, 100%, 85%);\n  }\n\n  .lg\\:hover\\:text-blue-300:hover{\n    color: hsl(195, 97%, 75%);\n  }\n\n  .lg\\:hover\\:text-blue-400:hover{\n    color: hsl(196, 94%, 67%);\n  }\n\n  .lg\\:hover\\:text-blue-500:hover{\n    color: hsl(197, 92%, 61%);\n  }\n\n  .lg\\:hover\\:text-blue-600:hover{\n    color: hsl(199, 84%, 55%);\n  }\n\n  .lg\\:hover\\:text-blue-700:hover{\n    color: hsl(201, 79%, 46%);\n  }\n\n  .lg\\:hover\\:text-blue-800:hover{\n    color: hsl(202, 83%, 41%);\n  }\n\n  .lg\\:hover\\:text-blue-900:hover{\n    color: hsl(203, 87%, 34%);\n  }\n\n  .lg\\:hover\\:text-blue-1000:hover{\n    color: hsl(204, 96%, 27%);\n  }\n\n  .lg\\:hover\\:text-indigo-100:hover{\n    color: hsl(221, 68%, 93%);\n  }\n\n  .lg\\:hover\\:text-indigo-200:hover{\n    color: hsl(221, 78%, 86%);\n  }\n\n  .lg\\:hover\\:text-indigo-300:hover{\n    color: hsl(224, 67%, 76%);\n  }\n\n  .lg\\:hover\\:text-indigo-400:hover{\n    color: hsl(225, 57%, 67%);\n  }\n\n  .lg\\:hover\\:text-indigo-500:hover{\n    color: hsl(227, 50%, 59%);\n  }\n\n  .lg\\:hover\\:text-indigo-600:hover{\n    color: hsl(227, 42%, 51%);\n  }\n\n  .lg\\:hover\\:text-indigo-700:hover{\n    color: hsl(228, 45%, 45%);\n  }\n\n  .lg\\:hover\\:text-indigo-800:hover{\n    color: hsl(230, 49%, 41%);\n  }\n\n  .lg\\:hover\\:text-indigo-900:hover{\n    color: hsl(232, 51%, 36%);\n  }\n\n  .lg\\:hover\\:text-indigo-1000:hover{\n    color: hsl(234, 62%, 26%);\n  }\n\n  .lg\\:hover\\:text-purple-100:hover{\n    color: #faf5ff;\n  }\n\n  .lg\\:hover\\:text-purple-200:hover{\n    color: #e9d8fd;\n  }\n\n  .lg\\:hover\\:text-purple-300:hover{\n    color: #d6bcfa;\n  }\n\n  .lg\\:hover\\:text-purple-400:hover{\n    color: #b794f4;\n  }\n\n  .lg\\:hover\\:text-purple-500:hover{\n    color: #9f7aea;\n  }\n\n  .lg\\:hover\\:text-purple-600:hover{\n    color: #805ad5;\n  }\n\n  .lg\\:hover\\:text-purple-700:hover{\n    color: #6b46c1;\n  }\n\n  .lg\\:hover\\:text-purple-800:hover{\n    color: #553c9a;\n  }\n\n  .lg\\:hover\\:text-purple-900:hover{\n    color: #44337a;\n  }\n\n  .lg\\:hover\\:text-pink-100:hover{\n    color: #fff5f7;\n  }\n\n  .lg\\:hover\\:text-pink-200:hover{\n    color: #fed7e2;\n  }\n\n  .lg\\:hover\\:text-pink-300:hover{\n    color: #fbb6ce;\n  }\n\n  .lg\\:hover\\:text-pink-400:hover{\n    color: #f687b3;\n  }\n\n  .lg\\:hover\\:text-pink-500:hover{\n    color: #ed64a6;\n  }\n\n  .lg\\:hover\\:text-pink-600:hover{\n    color: #d53f8c;\n  }\n\n  .lg\\:hover\\:text-pink-700:hover{\n    color: #b83280;\n  }\n\n  .lg\\:hover\\:text-pink-800:hover{\n    color: #97266d;\n  }\n\n  .lg\\:hover\\:text-pink-900:hover{\n    color: #702459;\n  }\n\n  .lg\\:focus\\:text-transparent:focus{\n    color: transparent;\n  }\n\n  .lg\\:focus\\:text-black:focus{\n    color: #000;\n  }\n\n  .lg\\:focus\\:text-white:focus{\n    color: #fff;\n  }\n\n  .lg\\:focus\\:text-gray-100:focus{\n    color: hsl(216, 33%, 97%);\n  }\n\n  .lg\\:focus\\:text-gray-200:focus{\n    color: hsl(214, 15%, 91%);\n  }\n\n  .lg\\:focus\\:text-gray-300:focus{\n    color: hsl(210, 16%, 82%);\n  }\n\n  .lg\\:focus\\:text-gray-400:focus{\n    color: hsl(211, 13%, 65%);\n  }\n\n  .lg\\:focus\\:text-gray-500:focus{\n    color: hsl(211, 10%, 53%);\n  }\n\n  .lg\\:focus\\:text-gray-600:focus{\n    color: hsl(211, 12%, 43%);\n  }\n\n  .lg\\:focus\\:text-gray-700:focus{\n    color: hsl(209, 14%, 37%);\n  }\n\n  .lg\\:focus\\:text-gray-800:focus{\n    color: hsl(209, 18%, 30%);\n  }\n\n  .lg\\:focus\\:text-gray-900:focus{\n    color: hsl(209, 20%, 25%);\n  }\n\n  .lg\\:focus\\:text-gray-1000:focus{\n    color: hsl(210, 24%, 16%);\n  }\n\n  .lg\\:focus\\:text-red-100:focus{\n    color: hsl(360, 100%, 95%);\n  }\n\n  .lg\\:focus\\:text-red-200:focus{\n    color: hsl(360, 100%, 87%);\n  }\n\n  .lg\\:focus\\:text-red-300:focus{\n    color: hsl(360, 100%, 80%);\n  }\n\n  .lg\\:focus\\:text-red-400:focus{\n    color: hsl(360, 91%, 69%);\n  }\n\n  .lg\\:focus\\:text-red-500:focus{\n    color: hsl(360, 83%, 62%);\n  }\n\n  .lg\\:focus\\:text-red-600:focus{\n    color: hsl(356, 75%, 53%);\n  }\n\n  .lg\\:focus\\:text-red-700:focus{\n    color: hsl(354, 85%, 44%);\n  }\n\n  .lg\\:focus\\:text-red-800:focus{\n    color: hsl(352, 90%, 35%);\n  }\n\n  .lg\\:focus\\:text-red-900:focus{\n    color: hsl(350, 94%, 28%);\n  }\n\n  .lg\\:focus\\:text-red-1000:focus{\n    color: hsl(348, 94%, 20%);\n  }\n\n  .lg\\:focus\\:text-orange-100:focus{\n    color: #fffaf0;\n  }\n\n  .lg\\:focus\\:text-orange-200:focus{\n    color: #feebc8;\n  }\n\n  .lg\\:focus\\:text-orange-300:focus{\n    color: #fbd38d;\n  }\n\n  .lg\\:focus\\:text-orange-400:focus{\n    color: #f6ad55;\n  }\n\n  .lg\\:focus\\:text-orange-500:focus{\n    color: #ed8936;\n  }\n\n  .lg\\:focus\\:text-orange-600:focus{\n    color: #dd6b20;\n  }\n\n  .lg\\:focus\\:text-orange-700:focus{\n    color: #c05621;\n  }\n\n  .lg\\:focus\\:text-orange-800:focus{\n    color: #9c4221;\n  }\n\n  .lg\\:focus\\:text-orange-900:focus{\n    color: #7b341e;\n  }\n\n  .lg\\:focus\\:text-yellow-100:focus{\n    color: hsl(15, 86%, 30%);\n  }\n\n  .lg\\:focus\\:text-yellow-200:focus{\n    color: hsl(22, 82%, 39%);\n  }\n\n  .lg\\:focus\\:text-yellow-300:focus{\n    color: hsl(29, 80%, 44%);\n  }\n\n  .lg\\:focus\\:text-yellow-400:focus{\n    color: hsl(36, 77%, 49%);\n  }\n\n  .lg\\:focus\\:text-yellow-500:focus{\n    color: hsl(42, 87%, 55%);\n  }\n\n  .lg\\:focus\\:text-yellow-600:focus{\n    color: hsl(44, 92%, 63%);\n  }\n\n  .lg\\:focus\\:text-yellow-700:focus{\n    color: hsl(48, 94%, 68%);\n  }\n\n  .lg\\:focus\\:text-yellow-800:focus{\n    color: hsl(48, 95%, 76%);\n  }\n\n  .lg\\:focus\\:text-yellow-900:focus{\n    color: hsl(48, 100%, 88%);\n  }\n\n  .lg\\:focus\\:text-yellow-1000:focus{\n    color: hsl(49, 100%, 96%);\n  }\n\n  .lg\\:focus\\:text-green-100:focus{\n    color: #f0fff4;\n  }\n\n  .lg\\:focus\\:text-green-200:focus{\n    color: #c6f6d5;\n  }\n\n  .lg\\:focus\\:text-green-300:focus{\n    color: #9ae6b4;\n  }\n\n  .lg\\:focus\\:text-green-400:focus{\n    color: #68d391;\n  }\n\n  .lg\\:focus\\:text-green-500:focus{\n    color: #48bb78;\n  }\n\n  .lg\\:focus\\:text-green-600:focus{\n    color: #38a169;\n  }\n\n  .lg\\:focus\\:text-green-700:focus{\n    color: #2f855a;\n  }\n\n  .lg\\:focus\\:text-green-800:focus{\n    color: #276749;\n  }\n\n  .lg\\:focus\\:text-green-900:focus{\n    color: #22543d;\n  }\n\n  .lg\\:focus\\:text-teal-100:focus{\n    color: hsl(170, 97%, 15%);\n  }\n\n  .lg\\:focus\\:text-teal-200:focus{\n    color: hsl(168, 80%, 23%);\n  }\n\n  .lg\\:focus\\:text-teal-300:focus{\n    color: hsl(166, 72%, 28%);\n  }\n\n  .lg\\:focus\\:text-teal-400:focus{\n    color: hsl(164, 71%, 34%);\n  }\n\n  .lg\\:focus\\:text-teal-500:focus{\n    color: hsl(162, 63%, 41%);\n  }\n\n  .lg\\:focus\\:text-teal-600:focus{\n    color: hsl(160, 51%, 49%);\n  }\n\n  .lg\\:focus\\:text-teal-700:focus{\n    color: hsl(158, 58%, 62%);\n  }\n\n  .lg\\:focus\\:text-teal-800:focus{\n    color: hsl(156, 73%, 74%);\n  }\n\n  .lg\\:focus\\:text-teal-900:focus{\n    color: hsl(154, 75%, 87%);\n  }\n\n  .lg\\:focus\\:text-teal-1000:focus{\n    color: hsl(152, 68%, 96%);\n  }\n\n  .lg\\:focus\\:text-blue-100:focus{\n    color: hsl(195, 100%, 95%);\n  }\n\n  .lg\\:focus\\:text-blue-200:focus{\n    color: hsl(195, 100%, 85%);\n  }\n\n  .lg\\:focus\\:text-blue-300:focus{\n    color: hsl(195, 97%, 75%);\n  }\n\n  .lg\\:focus\\:text-blue-400:focus{\n    color: hsl(196, 94%, 67%);\n  }\n\n  .lg\\:focus\\:text-blue-500:focus{\n    color: hsl(197, 92%, 61%);\n  }\n\n  .lg\\:focus\\:text-blue-600:focus{\n    color: hsl(199, 84%, 55%);\n  }\n\n  .lg\\:focus\\:text-blue-700:focus{\n    color: hsl(201, 79%, 46%);\n  }\n\n  .lg\\:focus\\:text-blue-800:focus{\n    color: hsl(202, 83%, 41%);\n  }\n\n  .lg\\:focus\\:text-blue-900:focus{\n    color: hsl(203, 87%, 34%);\n  }\n\n  .lg\\:focus\\:text-blue-1000:focus{\n    color: hsl(204, 96%, 27%);\n  }\n\n  .lg\\:focus\\:text-indigo-100:focus{\n    color: hsl(221, 68%, 93%);\n  }\n\n  .lg\\:focus\\:text-indigo-200:focus{\n    color: hsl(221, 78%, 86%);\n  }\n\n  .lg\\:focus\\:text-indigo-300:focus{\n    color: hsl(224, 67%, 76%);\n  }\n\n  .lg\\:focus\\:text-indigo-400:focus{\n    color: hsl(225, 57%, 67%);\n  }\n\n  .lg\\:focus\\:text-indigo-500:focus{\n    color: hsl(227, 50%, 59%);\n  }\n\n  .lg\\:focus\\:text-indigo-600:focus{\n    color: hsl(227, 42%, 51%);\n  }\n\n  .lg\\:focus\\:text-indigo-700:focus{\n    color: hsl(228, 45%, 45%);\n  }\n\n  .lg\\:focus\\:text-indigo-800:focus{\n    color: hsl(230, 49%, 41%);\n  }\n\n  .lg\\:focus\\:text-indigo-900:focus{\n    color: hsl(232, 51%, 36%);\n  }\n\n  .lg\\:focus\\:text-indigo-1000:focus{\n    color: hsl(234, 62%, 26%);\n  }\n\n  .lg\\:focus\\:text-purple-100:focus{\n    color: #faf5ff;\n  }\n\n  .lg\\:focus\\:text-purple-200:focus{\n    color: #e9d8fd;\n  }\n\n  .lg\\:focus\\:text-purple-300:focus{\n    color: #d6bcfa;\n  }\n\n  .lg\\:focus\\:text-purple-400:focus{\n    color: #b794f4;\n  }\n\n  .lg\\:focus\\:text-purple-500:focus{\n    color: #9f7aea;\n  }\n\n  .lg\\:focus\\:text-purple-600:focus{\n    color: #805ad5;\n  }\n\n  .lg\\:focus\\:text-purple-700:focus{\n    color: #6b46c1;\n  }\n\n  .lg\\:focus\\:text-purple-800:focus{\n    color: #553c9a;\n  }\n\n  .lg\\:focus\\:text-purple-900:focus{\n    color: #44337a;\n  }\n\n  .lg\\:focus\\:text-pink-100:focus{\n    color: #fff5f7;\n  }\n\n  .lg\\:focus\\:text-pink-200:focus{\n    color: #fed7e2;\n  }\n\n  .lg\\:focus\\:text-pink-300:focus{\n    color: #fbb6ce;\n  }\n\n  .lg\\:focus\\:text-pink-400:focus{\n    color: #f687b3;\n  }\n\n  .lg\\:focus\\:text-pink-500:focus{\n    color: #ed64a6;\n  }\n\n  .lg\\:focus\\:text-pink-600:focus{\n    color: #d53f8c;\n  }\n\n  .lg\\:focus\\:text-pink-700:focus{\n    color: #b83280;\n  }\n\n  .lg\\:focus\\:text-pink-800:focus{\n    color: #97266d;\n  }\n\n  .lg\\:focus\\:text-pink-900:focus{\n    color: #702459;\n  }\n\n  .lg\\:text-xs{\n    font-size: 0.75rem;\n  }\n\n  .lg\\:text-sm{\n    font-size: 0.875rem;\n  }\n\n  .lg\\:text-base{\n    font-size: 1rem;\n  }\n\n  .lg\\:text-lg{\n    font-size: 1.125rem;\n  }\n\n  .lg\\:text-xl{\n    font-size: 1.25rem;\n  }\n\n  .lg\\:text-2xl{\n    font-size: 1.5rem;\n  }\n\n  .lg\\:text-3xl{\n    font-size: 1.875rem;\n  }\n\n  .lg\\:text-4xl{\n    font-size: 2.25rem;\n  }\n\n  .lg\\:text-5xl{\n    font-size: 3rem;\n  }\n\n  .lg\\:text-6xl{\n    font-size: 4rem;\n  }\n\n  .lg\\:italic{\n    font-style: italic;\n  }\n\n  .lg\\:not-italic{\n    font-style: normal;\n  }\n\n  .lg\\:uppercase{\n    text-transform: uppercase;\n  }\n\n  .lg\\:lowercase{\n    text-transform: lowercase;\n  }\n\n  .lg\\:capitalize{\n    text-transform: capitalize;\n  }\n\n  .lg\\:normal-case{\n    text-transform: none;\n  }\n\n  .lg\\:underline{\n    text-decoration: underline;\n  }\n\n  .lg\\:line-through{\n    text-decoration: line-through;\n  }\n\n  .lg\\:no-underline{\n    text-decoration: none;\n  }\n\n  .lg\\:hover\\:underline:hover{\n    text-decoration: underline;\n  }\n\n  .lg\\:hover\\:line-through:hover{\n    text-decoration: line-through;\n  }\n\n  .lg\\:hover\\:no-underline:hover{\n    text-decoration: none;\n  }\n\n  .lg\\:focus\\:underline:focus{\n    text-decoration: underline;\n  }\n\n  .lg\\:focus\\:line-through:focus{\n    text-decoration: line-through;\n  }\n\n  .lg\\:focus\\:no-underline:focus{\n    text-decoration: none;\n  }\n\n  .lg\\:antialiased{\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .lg\\:subpixel-antialiased{\n    -webkit-font-smoothing: auto;\n    -moz-osx-font-smoothing: auto;\n  }\n\n  .lg\\:tracking-tighter{\n    letter-spacing: -0.05em;\n  }\n\n  .lg\\:tracking-tight{\n    letter-spacing: -0.025em;\n  }\n\n  .lg\\:tracking-normal{\n    letter-spacing: 0;\n  }\n\n  .lg\\:tracking-wide{\n    letter-spacing: 0.025em;\n  }\n\n  .lg\\:tracking-wider{\n    letter-spacing: 0.05em;\n  }\n\n  .lg\\:tracking-widest{\n    letter-spacing: 0.1em;\n  }\n\n  .lg\\:select-none{\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n\n  .lg\\:select-text{\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text;\n  }\n\n  .lg\\:select-all{\n    -webkit-user-select: all;\n       -moz-user-select: all;\n        -ms-user-select: all;\n            user-select: all;\n  }\n\n  .lg\\:select-auto{\n    -webkit-user-select: auto;\n       -moz-user-select: auto;\n        -ms-user-select: auto;\n            user-select: auto;\n  }\n\n  .lg\\:align-baseline{\n    vertical-align: baseline;\n  }\n\n  .lg\\:align-top{\n    vertical-align: top;\n  }\n\n  .lg\\:align-middle{\n    vertical-align: middle;\n  }\n\n  .lg\\:align-bottom{\n    vertical-align: bottom;\n  }\n\n  .lg\\:align-text-top{\n    vertical-align: text-top;\n  }\n\n  .lg\\:align-text-bottom{\n    vertical-align: text-bottom;\n  }\n\n  .lg\\:visible{\n    visibility: visible;\n  }\n\n  .lg\\:invisible{\n    visibility: hidden;\n  }\n\n  .lg\\:whitespace-normal{\n    white-space: normal;\n  }\n\n  .lg\\:whitespace-no-wrap{\n    white-space: nowrap;\n  }\n\n  .lg\\:whitespace-pre{\n    white-space: pre;\n  }\n\n  .lg\\:whitespace-pre-line{\n    white-space: pre-line;\n  }\n\n  .lg\\:whitespace-pre-wrap{\n    white-space: pre-wrap;\n  }\n\n  .lg\\:break-normal{\n    overflow-wrap: normal;\n    word-break: normal;\n  }\n\n  .lg\\:break-words{\n    overflow-wrap: break-word;\n  }\n\n  .lg\\:break-all{\n    word-break: break-all;\n  }\n\n  .lg\\:truncate{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .lg\\:w-0{\n    width: 0;\n  }\n\n  .lg\\:w-1{\n    width: 0.25rem;\n  }\n\n  .lg\\:w-2{\n    width: 0.5rem;\n  }\n\n  .lg\\:w-3{\n    width: 0.75rem;\n  }\n\n  .lg\\:w-4{\n    width: 1rem;\n  }\n\n  .lg\\:w-5{\n    width: 1.25rem;\n  }\n\n  .lg\\:w-6{\n    width: 1.5rem;\n  }\n\n  .lg\\:w-8{\n    width: 2rem;\n  }\n\n  .lg\\:w-10{\n    width: 2.5rem;\n  }\n\n  .lg\\:w-12{\n    width: 3rem;\n  }\n\n  .lg\\:w-16{\n    width: 4rem;\n  }\n\n  .lg\\:w-20{\n    width: 5rem;\n  }\n\n  .lg\\:w-24{\n    width: 6rem;\n  }\n\n  .lg\\:w-32{\n    width: 8rem;\n  }\n\n  .lg\\:w-40{\n    width: 10rem;\n  }\n\n  .lg\\:w-48{\n    width: 12rem;\n  }\n\n  .lg\\:w-56{\n    width: 14rem;\n  }\n\n  .lg\\:w-64{\n    width: 16rem;\n  }\n\n  .lg\\:w-auto{\n    width: auto;\n  }\n\n  .lg\\:w-px{\n    width: 1px;\n  }\n\n  .lg\\:w-1\\/2{\n    width: 50%;\n  }\n\n  .lg\\:w-1\\/3{\n    width: 33.333333%;\n  }\n\n  .lg\\:w-2\\/3{\n    width: 66.666667%;\n  }\n\n  .lg\\:w-1\\/4{\n    width: 25%;\n  }\n\n  .lg\\:w-2\\/4{\n    width: 50%;\n  }\n\n  .lg\\:w-3\\/4{\n    width: 75%;\n  }\n\n  .lg\\:w-1\\/5{\n    width: 20%;\n  }\n\n  .lg\\:w-2\\/5{\n    width: 40%;\n  }\n\n  .lg\\:w-3\\/5{\n    width: 60%;\n  }\n\n  .lg\\:w-4\\/5{\n    width: 80%;\n  }\n\n  .lg\\:w-1\\/6{\n    width: 16.666667%;\n  }\n\n  .lg\\:w-2\\/6{\n    width: 33.333333%;\n  }\n\n  .lg\\:w-3\\/6{\n    width: 50%;\n  }\n\n  .lg\\:w-4\\/6{\n    width: 66.666667%;\n  }\n\n  .lg\\:w-5\\/6{\n    width: 83.333333%;\n  }\n\n  .lg\\:w-1\\/12{\n    width: 8.333333%;\n  }\n\n  .lg\\:w-2\\/12{\n    width: 16.666667%;\n  }\n\n  .lg\\:w-3\\/12{\n    width: 25%;\n  }\n\n  .lg\\:w-4\\/12{\n    width: 33.333333%;\n  }\n\n  .lg\\:w-5\\/12{\n    width: 41.666667%;\n  }\n\n  .lg\\:w-6\\/12{\n    width: 50%;\n  }\n\n  .lg\\:w-7\\/12{\n    width: 58.333333%;\n  }\n\n  .lg\\:w-8\\/12{\n    width: 66.666667%;\n  }\n\n  .lg\\:w-9\\/12{\n    width: 75%;\n  }\n\n  .lg\\:w-10\\/12{\n    width: 83.333333%;\n  }\n\n  .lg\\:w-11\\/12{\n    width: 91.666667%;\n  }\n\n  .lg\\:w-full{\n    width: 100%;\n  }\n\n  .lg\\:w-screen{\n    width: 100vw;\n  }\n\n  .lg\\:z-0{\n    z-index: 0;\n  }\n\n  .lg\\:z-10{\n    z-index: 10;\n  }\n\n  .lg\\:z-20{\n    z-index: 20;\n  }\n\n  .lg\\:z-30{\n    z-index: 30;\n  }\n\n  .lg\\:z-40{\n    z-index: 40;\n  }\n\n  .lg\\:z-50{\n    z-index: 50;\n  }\n\n  .lg\\:z-auto{\n    z-index: auto;\n  }\n}\n\n@media (min-width: 1280px){\n  .xl\\:appearance-none{\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n  }\n\n  .xl\\:bg-fixed{\n    background-attachment: fixed;\n  }\n\n  .xl\\:bg-local{\n    background-attachment: local;\n  }\n\n  .xl\\:bg-scroll{\n    background-attachment: scroll;\n  }\n\n  .xl\\:bg-transparent{\n    background-color: transparent;\n  }\n\n  .xl\\:bg-black{\n    background-color: #000;\n  }\n\n  .xl\\:bg-white{\n    background-color: #fff;\n  }\n\n  .xl\\:bg-gray-100{\n    background-color: hsl(216, 33%, 97%);\n  }\n\n  .xl\\:bg-gray-200{\n    background-color: hsl(214, 15%, 91%);\n  }\n\n  .xl\\:bg-gray-300{\n    background-color: hsl(210, 16%, 82%);\n  }\n\n  .xl\\:bg-gray-400{\n    background-color: hsl(211, 13%, 65%);\n  }\n\n  .xl\\:bg-gray-500{\n    background-color: hsl(211, 10%, 53%);\n  }\n\n  .xl\\:bg-gray-600{\n    background-color: hsl(211, 12%, 43%);\n  }\n\n  .xl\\:bg-gray-700{\n    background-color: hsl(209, 14%, 37%);\n  }\n\n  .xl\\:bg-gray-800{\n    background-color: hsl(209, 18%, 30%);\n  }\n\n  .xl\\:bg-gray-900{\n    background-color: hsl(209, 20%, 25%);\n  }\n\n  .xl\\:bg-gray-1000{\n    background-color: hsl(210, 24%, 16%);\n  }\n\n  .xl\\:bg-red-100{\n    background-color: hsl(360, 100%, 95%);\n  }\n\n  .xl\\:bg-red-200{\n    background-color: hsl(360, 100%, 87%);\n  }\n\n  .xl\\:bg-red-300{\n    background-color: hsl(360, 100%, 80%);\n  }\n\n  .xl\\:bg-red-400{\n    background-color: hsl(360, 91%, 69%);\n  }\n\n  .xl\\:bg-red-500{\n    background-color: hsl(360, 83%, 62%);\n  }\n\n  .xl\\:bg-red-600{\n    background-color: hsl(356, 75%, 53%);\n  }\n\n  .xl\\:bg-red-700{\n    background-color: hsl(354, 85%, 44%);\n  }\n\n  .xl\\:bg-red-800{\n    background-color: hsl(352, 90%, 35%);\n  }\n\n  .xl\\:bg-red-900{\n    background-color: hsl(350, 94%, 28%);\n  }\n\n  .xl\\:bg-red-1000{\n    background-color: hsl(348, 94%, 20%);\n  }\n\n  .xl\\:bg-orange-100{\n    background-color: #fffaf0;\n  }\n\n  .xl\\:bg-orange-200{\n    background-color: #feebc8;\n  }\n\n  .xl\\:bg-orange-300{\n    background-color: #fbd38d;\n  }\n\n  .xl\\:bg-orange-400{\n    background-color: #f6ad55;\n  }\n\n  .xl\\:bg-orange-500{\n    background-color: #ed8936;\n  }\n\n  .xl\\:bg-orange-600{\n    background-color: #dd6b20;\n  }\n\n  .xl\\:bg-orange-700{\n    background-color: #c05621;\n  }\n\n  .xl\\:bg-orange-800{\n    background-color: #9c4221;\n  }\n\n  .xl\\:bg-orange-900{\n    background-color: #7b341e;\n  }\n\n  .xl\\:bg-yellow-100{\n    background-color: hsl(15, 86%, 30%);\n  }\n\n  .xl\\:bg-yellow-200{\n    background-color: hsl(22, 82%, 39%);\n  }\n\n  .xl\\:bg-yellow-300{\n    background-color: hsl(29, 80%, 44%);\n  }\n\n  .xl\\:bg-yellow-400{\n    background-color: hsl(36, 77%, 49%);\n  }\n\n  .xl\\:bg-yellow-500{\n    background-color: hsl(42, 87%, 55%);\n  }\n\n  .xl\\:bg-yellow-600{\n    background-color: hsl(44, 92%, 63%);\n  }\n\n  .xl\\:bg-yellow-700{\n    background-color: hsl(48, 94%, 68%);\n  }\n\n  .xl\\:bg-yellow-800{\n    background-color: hsl(48, 95%, 76%);\n  }\n\n  .xl\\:bg-yellow-900{\n    background-color: hsl(48, 100%, 88%);\n  }\n\n  .xl\\:bg-yellow-1000{\n    background-color: hsl(49, 100%, 96%);\n  }\n\n  .xl\\:bg-green-100{\n    background-color: #f0fff4;\n  }\n\n  .xl\\:bg-green-200{\n    background-color: #c6f6d5;\n  }\n\n  .xl\\:bg-green-300{\n    background-color: #9ae6b4;\n  }\n\n  .xl\\:bg-green-400{\n    background-color: #68d391;\n  }\n\n  .xl\\:bg-green-500{\n    background-color: #48bb78;\n  }\n\n  .xl\\:bg-green-600{\n    background-color: #38a169;\n  }\n\n  .xl\\:bg-green-700{\n    background-color: #2f855a;\n  }\n\n  .xl\\:bg-green-800{\n    background-color: #276749;\n  }\n\n  .xl\\:bg-green-900{\n    background-color: #22543d;\n  }\n\n  .xl\\:bg-teal-100{\n    background-color: hsl(170, 97%, 15%);\n  }\n\n  .xl\\:bg-teal-200{\n    background-color: hsl(168, 80%, 23%);\n  }\n\n  .xl\\:bg-teal-300{\n    background-color: hsl(166, 72%, 28%);\n  }\n\n  .xl\\:bg-teal-400{\n    background-color: hsl(164, 71%, 34%);\n  }\n\n  .xl\\:bg-teal-500{\n    background-color: hsl(162, 63%, 41%);\n  }\n\n  .xl\\:bg-teal-600{\n    background-color: hsl(160, 51%, 49%);\n  }\n\n  .xl\\:bg-teal-700{\n    background-color: hsl(158, 58%, 62%);\n  }\n\n  .xl\\:bg-teal-800{\n    background-color: hsl(156, 73%, 74%);\n  }\n\n  .xl\\:bg-teal-900{\n    background-color: hsl(154, 75%, 87%);\n  }\n\n  .xl\\:bg-teal-1000{\n    background-color: hsl(152, 68%, 96%);\n  }\n\n  .xl\\:bg-blue-100{\n    background-color: hsl(195, 100%, 95%);\n  }\n\n  .xl\\:bg-blue-200{\n    background-color: hsl(195, 100%, 85%);\n  }\n\n  .xl\\:bg-blue-300{\n    background-color: hsl(195, 97%, 75%);\n  }\n\n  .xl\\:bg-blue-400{\n    background-color: hsl(196, 94%, 67%);\n  }\n\n  .xl\\:bg-blue-500{\n    background-color: hsl(197, 92%, 61%);\n  }\n\n  .xl\\:bg-blue-600{\n    background-color: hsl(199, 84%, 55%);\n  }\n\n  .xl\\:bg-blue-700{\n    background-color: hsl(201, 79%, 46%);\n  }\n\n  .xl\\:bg-blue-800{\n    background-color: hsl(202, 83%, 41%);\n  }\n\n  .xl\\:bg-blue-900{\n    background-color: hsl(203, 87%, 34%);\n  }\n\n  .xl\\:bg-blue-1000{\n    background-color: hsl(204, 96%, 27%);\n  }\n\n  .xl\\:bg-indigo-100{\n    background-color: hsl(221, 68%, 93%);\n  }\n\n  .xl\\:bg-indigo-200{\n    background-color: hsl(221, 78%, 86%);\n  }\n\n  .xl\\:bg-indigo-300{\n    background-color: hsl(224, 67%, 76%);\n  }\n\n  .xl\\:bg-indigo-400{\n    background-color: hsl(225, 57%, 67%);\n  }\n\n  .xl\\:bg-indigo-500{\n    background-color: hsl(227, 50%, 59%);\n  }\n\n  .xl\\:bg-indigo-600{\n    background-color: hsl(227, 42%, 51%);\n  }\n\n  .xl\\:bg-indigo-700{\n    background-color: hsl(228, 45%, 45%);\n  }\n\n  .xl\\:bg-indigo-800{\n    background-color: hsl(230, 49%, 41%);\n  }\n\n  .xl\\:bg-indigo-900{\n    background-color: hsl(232, 51%, 36%);\n  }\n\n  .xl\\:bg-indigo-1000{\n    background-color: hsl(234, 62%, 26%);\n  }\n\n  .xl\\:bg-purple-100{\n    background-color: #faf5ff;\n  }\n\n  .xl\\:bg-purple-200{\n    background-color: #e9d8fd;\n  }\n\n  .xl\\:bg-purple-300{\n    background-color: #d6bcfa;\n  }\n\n  .xl\\:bg-purple-400{\n    background-color: #b794f4;\n  }\n\n  .xl\\:bg-purple-500{\n    background-color: #9f7aea;\n  }\n\n  .xl\\:bg-purple-600{\n    background-color: #805ad5;\n  }\n\n  .xl\\:bg-purple-700{\n    background-color: #6b46c1;\n  }\n\n  .xl\\:bg-purple-800{\n    background-color: #553c9a;\n  }\n\n  .xl\\:bg-purple-900{\n    background-color: #44337a;\n  }\n\n  .xl\\:bg-pink-100{\n    background-color: #fff5f7;\n  }\n\n  .xl\\:bg-pink-200{\n    background-color: #fed7e2;\n  }\n\n  .xl\\:bg-pink-300{\n    background-color: #fbb6ce;\n  }\n\n  .xl\\:bg-pink-400{\n    background-color: #f687b3;\n  }\n\n  .xl\\:bg-pink-500{\n    background-color: #ed64a6;\n  }\n\n  .xl\\:bg-pink-600{\n    background-color: #d53f8c;\n  }\n\n  .xl\\:bg-pink-700{\n    background-color: #b83280;\n  }\n\n  .xl\\:bg-pink-800{\n    background-color: #97266d;\n  }\n\n  .xl\\:bg-pink-900{\n    background-color: #702459;\n  }\n\n  .xl\\:hover\\:bg-transparent:hover{\n    background-color: transparent;\n  }\n\n  .xl\\:hover\\:bg-black:hover{\n    background-color: #000;\n  }\n\n  .xl\\:hover\\:bg-white:hover{\n    background-color: #fff;\n  }\n\n  .xl\\:hover\\:bg-gray-100:hover{\n    background-color: hsl(216, 33%, 97%);\n  }\n\n  .xl\\:hover\\:bg-gray-200:hover{\n    background-color: hsl(214, 15%, 91%);\n  }\n\n  .xl\\:hover\\:bg-gray-300:hover{\n    background-color: hsl(210, 16%, 82%);\n  }\n\n  .xl\\:hover\\:bg-gray-400:hover{\n    background-color: hsl(211, 13%, 65%);\n  }\n\n  .xl\\:hover\\:bg-gray-500:hover{\n    background-color: hsl(211, 10%, 53%);\n  }\n\n  .xl\\:hover\\:bg-gray-600:hover{\n    background-color: hsl(211, 12%, 43%);\n  }\n\n  .xl\\:hover\\:bg-gray-700:hover{\n    background-color: hsl(209, 14%, 37%);\n  }\n\n  .xl\\:hover\\:bg-gray-800:hover{\n    background-color: hsl(209, 18%, 30%);\n  }\n\n  .xl\\:hover\\:bg-gray-900:hover{\n    background-color: hsl(209, 20%, 25%);\n  }\n\n  .xl\\:hover\\:bg-gray-1000:hover{\n    background-color: hsl(210, 24%, 16%);\n  }\n\n  .xl\\:hover\\:bg-red-100:hover{\n    background-color: hsl(360, 100%, 95%);\n  }\n\n  .xl\\:hover\\:bg-red-200:hover{\n    background-color: hsl(360, 100%, 87%);\n  }\n\n  .xl\\:hover\\:bg-red-300:hover{\n    background-color: hsl(360, 100%, 80%);\n  }\n\n  .xl\\:hover\\:bg-red-400:hover{\n    background-color: hsl(360, 91%, 69%);\n  }\n\n  .xl\\:hover\\:bg-red-500:hover{\n    background-color: hsl(360, 83%, 62%);\n  }\n\n  .xl\\:hover\\:bg-red-600:hover{\n    background-color: hsl(356, 75%, 53%);\n  }\n\n  .xl\\:hover\\:bg-red-700:hover{\n    background-color: hsl(354, 85%, 44%);\n  }\n\n  .xl\\:hover\\:bg-red-800:hover{\n    background-color: hsl(352, 90%, 35%);\n  }\n\n  .xl\\:hover\\:bg-red-900:hover{\n    background-color: hsl(350, 94%, 28%);\n  }\n\n  .xl\\:hover\\:bg-red-1000:hover{\n    background-color: hsl(348, 94%, 20%);\n  }\n\n  .xl\\:hover\\:bg-orange-100:hover{\n    background-color: #fffaf0;\n  }\n\n  .xl\\:hover\\:bg-orange-200:hover{\n    background-color: #feebc8;\n  }\n\n  .xl\\:hover\\:bg-orange-300:hover{\n    background-color: #fbd38d;\n  }\n\n  .xl\\:hover\\:bg-orange-400:hover{\n    background-color: #f6ad55;\n  }\n\n  .xl\\:hover\\:bg-orange-500:hover{\n    background-color: #ed8936;\n  }\n\n  .xl\\:hover\\:bg-orange-600:hover{\n    background-color: #dd6b20;\n  }\n\n  .xl\\:hover\\:bg-orange-700:hover{\n    background-color: #c05621;\n  }\n\n  .xl\\:hover\\:bg-orange-800:hover{\n    background-color: #9c4221;\n  }\n\n  .xl\\:hover\\:bg-orange-900:hover{\n    background-color: #7b341e;\n  }\n\n  .xl\\:hover\\:bg-yellow-100:hover{\n    background-color: hsl(15, 86%, 30%);\n  }\n\n  .xl\\:hover\\:bg-yellow-200:hover{\n    background-color: hsl(22, 82%, 39%);\n  }\n\n  .xl\\:hover\\:bg-yellow-300:hover{\n    background-color: hsl(29, 80%, 44%);\n  }\n\n  .xl\\:hover\\:bg-yellow-400:hover{\n    background-color: hsl(36, 77%, 49%);\n  }\n\n  .xl\\:hover\\:bg-yellow-500:hover{\n    background-color: hsl(42, 87%, 55%);\n  }\n\n  .xl\\:hover\\:bg-yellow-600:hover{\n    background-color: hsl(44, 92%, 63%);\n  }\n\n  .xl\\:hover\\:bg-yellow-700:hover{\n    background-color: hsl(48, 94%, 68%);\n  }\n\n  .xl\\:hover\\:bg-yellow-800:hover{\n    background-color: hsl(48, 95%, 76%);\n  }\n\n  .xl\\:hover\\:bg-yellow-900:hover{\n    background-color: hsl(48, 100%, 88%);\n  }\n\n  .xl\\:hover\\:bg-yellow-1000:hover{\n    background-color: hsl(49, 100%, 96%);\n  }\n\n  .xl\\:hover\\:bg-green-100:hover{\n    background-color: #f0fff4;\n  }\n\n  .xl\\:hover\\:bg-green-200:hover{\n    background-color: #c6f6d5;\n  }\n\n  .xl\\:hover\\:bg-green-300:hover{\n    background-color: #9ae6b4;\n  }\n\n  .xl\\:hover\\:bg-green-400:hover{\n    background-color: #68d391;\n  }\n\n  .xl\\:hover\\:bg-green-500:hover{\n    background-color: #48bb78;\n  }\n\n  .xl\\:hover\\:bg-green-600:hover{\n    background-color: #38a169;\n  }\n\n  .xl\\:hover\\:bg-green-700:hover{\n    background-color: #2f855a;\n  }\n\n  .xl\\:hover\\:bg-green-800:hover{\n    background-color: #276749;\n  }\n\n  .xl\\:hover\\:bg-green-900:hover{\n    background-color: #22543d;\n  }\n\n  .xl\\:hover\\:bg-teal-100:hover{\n    background-color: hsl(170, 97%, 15%);\n  }\n\n  .xl\\:hover\\:bg-teal-200:hover{\n    background-color: hsl(168, 80%, 23%);\n  }\n\n  .xl\\:hover\\:bg-teal-300:hover{\n    background-color: hsl(166, 72%, 28%);\n  }\n\n  .xl\\:hover\\:bg-teal-400:hover{\n    background-color: hsl(164, 71%, 34%);\n  }\n\n  .xl\\:hover\\:bg-teal-500:hover{\n    background-color: hsl(162, 63%, 41%);\n  }\n\n  .xl\\:hover\\:bg-teal-600:hover{\n    background-color: hsl(160, 51%, 49%);\n  }\n\n  .xl\\:hover\\:bg-teal-700:hover{\n    background-color: hsl(158, 58%, 62%);\n  }\n\n  .xl\\:hover\\:bg-teal-800:hover{\n    background-color: hsl(156, 73%, 74%);\n  }\n\n  .xl\\:hover\\:bg-teal-900:hover{\n    background-color: hsl(154, 75%, 87%);\n  }\n\n  .xl\\:hover\\:bg-teal-1000:hover{\n    background-color: hsl(152, 68%, 96%);\n  }\n\n  .xl\\:hover\\:bg-blue-100:hover{\n    background-color: hsl(195, 100%, 95%);\n  }\n\n  .xl\\:hover\\:bg-blue-200:hover{\n    background-color: hsl(195, 100%, 85%);\n  }\n\n  .xl\\:hover\\:bg-blue-300:hover{\n    background-color: hsl(195, 97%, 75%);\n  }\n\n  .xl\\:hover\\:bg-blue-400:hover{\n    background-color: hsl(196, 94%, 67%);\n  }\n\n  .xl\\:hover\\:bg-blue-500:hover{\n    background-color: hsl(197, 92%, 61%);\n  }\n\n  .xl\\:hover\\:bg-blue-600:hover{\n    background-color: hsl(199, 84%, 55%);\n  }\n\n  .xl\\:hover\\:bg-blue-700:hover{\n    background-color: hsl(201, 79%, 46%);\n  }\n\n  .xl\\:hover\\:bg-blue-800:hover{\n    background-color: hsl(202, 83%, 41%);\n  }\n\n  .xl\\:hover\\:bg-blue-900:hover{\n    background-color: hsl(203, 87%, 34%);\n  }\n\n  .xl\\:hover\\:bg-blue-1000:hover{\n    background-color: hsl(204, 96%, 27%);\n  }\n\n  .xl\\:hover\\:bg-indigo-100:hover{\n    background-color: hsl(221, 68%, 93%);\n  }\n\n  .xl\\:hover\\:bg-indigo-200:hover{\n    background-color: hsl(221, 78%, 86%);\n  }\n\n  .xl\\:hover\\:bg-indigo-300:hover{\n    background-color: hsl(224, 67%, 76%);\n  }\n\n  .xl\\:hover\\:bg-indigo-400:hover{\n    background-color: hsl(225, 57%, 67%);\n  }\n\n  .xl\\:hover\\:bg-indigo-500:hover{\n    background-color: hsl(227, 50%, 59%);\n  }\n\n  .xl\\:hover\\:bg-indigo-600:hover{\n    background-color: hsl(227, 42%, 51%);\n  }\n\n  .xl\\:hover\\:bg-indigo-700:hover{\n    background-color: hsl(228, 45%, 45%);\n  }\n\n  .xl\\:hover\\:bg-indigo-800:hover{\n    background-color: hsl(230, 49%, 41%);\n  }\n\n  .xl\\:hover\\:bg-indigo-900:hover{\n    background-color: hsl(232, 51%, 36%);\n  }\n\n  .xl\\:hover\\:bg-indigo-1000:hover{\n    background-color: hsl(234, 62%, 26%);\n  }\n\n  .xl\\:hover\\:bg-purple-100:hover{\n    background-color: #faf5ff;\n  }\n\n  .xl\\:hover\\:bg-purple-200:hover{\n    background-color: #e9d8fd;\n  }\n\n  .xl\\:hover\\:bg-purple-300:hover{\n    background-color: #d6bcfa;\n  }\n\n  .xl\\:hover\\:bg-purple-400:hover{\n    background-color: #b794f4;\n  }\n\n  .xl\\:hover\\:bg-purple-500:hover{\n    background-color: #9f7aea;\n  }\n\n  .xl\\:hover\\:bg-purple-600:hover{\n    background-color: #805ad5;\n  }\n\n  .xl\\:hover\\:bg-purple-700:hover{\n    background-color: #6b46c1;\n  }\n\n  .xl\\:hover\\:bg-purple-800:hover{\n    background-color: #553c9a;\n  }\n\n  .xl\\:hover\\:bg-purple-900:hover{\n    background-color: #44337a;\n  }\n\n  .xl\\:hover\\:bg-pink-100:hover{\n    background-color: #fff5f7;\n  }\n\n  .xl\\:hover\\:bg-pink-200:hover{\n    background-color: #fed7e2;\n  }\n\n  .xl\\:hover\\:bg-pink-300:hover{\n    background-color: #fbb6ce;\n  }\n\n  .xl\\:hover\\:bg-pink-400:hover{\n    background-color: #f687b3;\n  }\n\n  .xl\\:hover\\:bg-pink-500:hover{\n    background-color: #ed64a6;\n  }\n\n  .xl\\:hover\\:bg-pink-600:hover{\n    background-color: #d53f8c;\n  }\n\n  .xl\\:hover\\:bg-pink-700:hover{\n    background-color: #b83280;\n  }\n\n  .xl\\:hover\\:bg-pink-800:hover{\n    background-color: #97266d;\n  }\n\n  .xl\\:hover\\:bg-pink-900:hover{\n    background-color: #702459;\n  }\n\n  .xl\\:focus\\:bg-transparent:focus{\n    background-color: transparent;\n  }\n\n  .xl\\:focus\\:bg-black:focus{\n    background-color: #000;\n  }\n\n  .xl\\:focus\\:bg-white:focus{\n    background-color: #fff;\n  }\n\n  .xl\\:focus\\:bg-gray-100:focus{\n    background-color: hsl(216, 33%, 97%);\n  }\n\n  .xl\\:focus\\:bg-gray-200:focus{\n    background-color: hsl(214, 15%, 91%);\n  }\n\n  .xl\\:focus\\:bg-gray-300:focus{\n    background-color: hsl(210, 16%, 82%);\n  }\n\n  .xl\\:focus\\:bg-gray-400:focus{\n    background-color: hsl(211, 13%, 65%);\n  }\n\n  .xl\\:focus\\:bg-gray-500:focus{\n    background-color: hsl(211, 10%, 53%);\n  }\n\n  .xl\\:focus\\:bg-gray-600:focus{\n    background-color: hsl(211, 12%, 43%);\n  }\n\n  .xl\\:focus\\:bg-gray-700:focus{\n    background-color: hsl(209, 14%, 37%);\n  }\n\n  .xl\\:focus\\:bg-gray-800:focus{\n    background-color: hsl(209, 18%, 30%);\n  }\n\n  .xl\\:focus\\:bg-gray-900:focus{\n    background-color: hsl(209, 20%, 25%);\n  }\n\n  .xl\\:focus\\:bg-gray-1000:focus{\n    background-color: hsl(210, 24%, 16%);\n  }\n\n  .xl\\:focus\\:bg-red-100:focus{\n    background-color: hsl(360, 100%, 95%);\n  }\n\n  .xl\\:focus\\:bg-red-200:focus{\n    background-color: hsl(360, 100%, 87%);\n  }\n\n  .xl\\:focus\\:bg-red-300:focus{\n    background-color: hsl(360, 100%, 80%);\n  }\n\n  .xl\\:focus\\:bg-red-400:focus{\n    background-color: hsl(360, 91%, 69%);\n  }\n\n  .xl\\:focus\\:bg-red-500:focus{\n    background-color: hsl(360, 83%, 62%);\n  }\n\n  .xl\\:focus\\:bg-red-600:focus{\n    background-color: hsl(356, 75%, 53%);\n  }\n\n  .xl\\:focus\\:bg-red-700:focus{\n    background-color: hsl(354, 85%, 44%);\n  }\n\n  .xl\\:focus\\:bg-red-800:focus{\n    background-color: hsl(352, 90%, 35%);\n  }\n\n  .xl\\:focus\\:bg-red-900:focus{\n    background-color: hsl(350, 94%, 28%);\n  }\n\n  .xl\\:focus\\:bg-red-1000:focus{\n    background-color: hsl(348, 94%, 20%);\n  }\n\n  .xl\\:focus\\:bg-orange-100:focus{\n    background-color: #fffaf0;\n  }\n\n  .xl\\:focus\\:bg-orange-200:focus{\n    background-color: #feebc8;\n  }\n\n  .xl\\:focus\\:bg-orange-300:focus{\n    background-color: #fbd38d;\n  }\n\n  .xl\\:focus\\:bg-orange-400:focus{\n    background-color: #f6ad55;\n  }\n\n  .xl\\:focus\\:bg-orange-500:focus{\n    background-color: #ed8936;\n  }\n\n  .xl\\:focus\\:bg-orange-600:focus{\n    background-color: #dd6b20;\n  }\n\n  .xl\\:focus\\:bg-orange-700:focus{\n    background-color: #c05621;\n  }\n\n  .xl\\:focus\\:bg-orange-800:focus{\n    background-color: #9c4221;\n  }\n\n  .xl\\:focus\\:bg-orange-900:focus{\n    background-color: #7b341e;\n  }\n\n  .xl\\:focus\\:bg-yellow-100:focus{\n    background-color: hsl(15, 86%, 30%);\n  }\n\n  .xl\\:focus\\:bg-yellow-200:focus{\n    background-color: hsl(22, 82%, 39%);\n  }\n\n  .xl\\:focus\\:bg-yellow-300:focus{\n    background-color: hsl(29, 80%, 44%);\n  }\n\n  .xl\\:focus\\:bg-yellow-400:focus{\n    background-color: hsl(36, 77%, 49%);\n  }\n\n  .xl\\:focus\\:bg-yellow-500:focus{\n    background-color: hsl(42, 87%, 55%);\n  }\n\n  .xl\\:focus\\:bg-yellow-600:focus{\n    background-color: hsl(44, 92%, 63%);\n  }\n\n  .xl\\:focus\\:bg-yellow-700:focus{\n    background-color: hsl(48, 94%, 68%);\n  }\n\n  .xl\\:focus\\:bg-yellow-800:focus{\n    background-color: hsl(48, 95%, 76%);\n  }\n\n  .xl\\:focus\\:bg-yellow-900:focus{\n    background-color: hsl(48, 100%, 88%);\n  }\n\n  .xl\\:focus\\:bg-yellow-1000:focus{\n    background-color: hsl(49, 100%, 96%);\n  }\n\n  .xl\\:focus\\:bg-green-100:focus{\n    background-color: #f0fff4;\n  }\n\n  .xl\\:focus\\:bg-green-200:focus{\n    background-color: #c6f6d5;\n  }\n\n  .xl\\:focus\\:bg-green-300:focus{\n    background-color: #9ae6b4;\n  }\n\n  .xl\\:focus\\:bg-green-400:focus{\n    background-color: #68d391;\n  }\n\n  .xl\\:focus\\:bg-green-500:focus{\n    background-color: #48bb78;\n  }\n\n  .xl\\:focus\\:bg-green-600:focus{\n    background-color: #38a169;\n  }\n\n  .xl\\:focus\\:bg-green-700:focus{\n    background-color: #2f855a;\n  }\n\n  .xl\\:focus\\:bg-green-800:focus{\n    background-color: #276749;\n  }\n\n  .xl\\:focus\\:bg-green-900:focus{\n    background-color: #22543d;\n  }\n\n  .xl\\:focus\\:bg-teal-100:focus{\n    background-color: hsl(170, 97%, 15%);\n  }\n\n  .xl\\:focus\\:bg-teal-200:focus{\n    background-color: hsl(168, 80%, 23%);\n  }\n\n  .xl\\:focus\\:bg-teal-300:focus{\n    background-color: hsl(166, 72%, 28%);\n  }\n\n  .xl\\:focus\\:bg-teal-400:focus{\n    background-color: hsl(164, 71%, 34%);\n  }\n\n  .xl\\:focus\\:bg-teal-500:focus{\n    background-color: hsl(162, 63%, 41%);\n  }\n\n  .xl\\:focus\\:bg-teal-600:focus{\n    background-color: hsl(160, 51%, 49%);\n  }\n\n  .xl\\:focus\\:bg-teal-700:focus{\n    background-color: hsl(158, 58%, 62%);\n  }\n\n  .xl\\:focus\\:bg-teal-800:focus{\n    background-color: hsl(156, 73%, 74%);\n  }\n\n  .xl\\:focus\\:bg-teal-900:focus{\n    background-color: hsl(154, 75%, 87%);\n  }\n\n  .xl\\:focus\\:bg-teal-1000:focus{\n    background-color: hsl(152, 68%, 96%);\n  }\n\n  .xl\\:focus\\:bg-blue-100:focus{\n    background-color: hsl(195, 100%, 95%);\n  }\n\n  .xl\\:focus\\:bg-blue-200:focus{\n    background-color: hsl(195, 100%, 85%);\n  }\n\n  .xl\\:focus\\:bg-blue-300:focus{\n    background-color: hsl(195, 97%, 75%);\n  }\n\n  .xl\\:focus\\:bg-blue-400:focus{\n    background-color: hsl(196, 94%, 67%);\n  }\n\n  .xl\\:focus\\:bg-blue-500:focus{\n    background-color: hsl(197, 92%, 61%);\n  }\n\n  .xl\\:focus\\:bg-blue-600:focus{\n    background-color: hsl(199, 84%, 55%);\n  }\n\n  .xl\\:focus\\:bg-blue-700:focus{\n    background-color: hsl(201, 79%, 46%);\n  }\n\n  .xl\\:focus\\:bg-blue-800:focus{\n    background-color: hsl(202, 83%, 41%);\n  }\n\n  .xl\\:focus\\:bg-blue-900:focus{\n    background-color: hsl(203, 87%, 34%);\n  }\n\n  .xl\\:focus\\:bg-blue-1000:focus{\n    background-color: hsl(204, 96%, 27%);\n  }\n\n  .xl\\:focus\\:bg-indigo-100:focus{\n    background-color: hsl(221, 68%, 93%);\n  }\n\n  .xl\\:focus\\:bg-indigo-200:focus{\n    background-color: hsl(221, 78%, 86%);\n  }\n\n  .xl\\:focus\\:bg-indigo-300:focus{\n    background-color: hsl(224, 67%, 76%);\n  }\n\n  .xl\\:focus\\:bg-indigo-400:focus{\n    background-color: hsl(225, 57%, 67%);\n  }\n\n  .xl\\:focus\\:bg-indigo-500:focus{\n    background-color: hsl(227, 50%, 59%);\n  }\n\n  .xl\\:focus\\:bg-indigo-600:focus{\n    background-color: hsl(227, 42%, 51%);\n  }\n\n  .xl\\:focus\\:bg-indigo-700:focus{\n    background-color: hsl(228, 45%, 45%);\n  }\n\n  .xl\\:focus\\:bg-indigo-800:focus{\n    background-color: hsl(230, 49%, 41%);\n  }\n\n  .xl\\:focus\\:bg-indigo-900:focus{\n    background-color: hsl(232, 51%, 36%);\n  }\n\n  .xl\\:focus\\:bg-indigo-1000:focus{\n    background-color: hsl(234, 62%, 26%);\n  }\n\n  .xl\\:focus\\:bg-purple-100:focus{\n    background-color: #faf5ff;\n  }\n\n  .xl\\:focus\\:bg-purple-200:focus{\n    background-color: #e9d8fd;\n  }\n\n  .xl\\:focus\\:bg-purple-300:focus{\n    background-color: #d6bcfa;\n  }\n\n  .xl\\:focus\\:bg-purple-400:focus{\n    background-color: #b794f4;\n  }\n\n  .xl\\:focus\\:bg-purple-500:focus{\n    background-color: #9f7aea;\n  }\n\n  .xl\\:focus\\:bg-purple-600:focus{\n    background-color: #805ad5;\n  }\n\n  .xl\\:focus\\:bg-purple-700:focus{\n    background-color: #6b46c1;\n  }\n\n  .xl\\:focus\\:bg-purple-800:focus{\n    background-color: #553c9a;\n  }\n\n  .xl\\:focus\\:bg-purple-900:focus{\n    background-color: #44337a;\n  }\n\n  .xl\\:focus\\:bg-pink-100:focus{\n    background-color: #fff5f7;\n  }\n\n  .xl\\:focus\\:bg-pink-200:focus{\n    background-color: #fed7e2;\n  }\n\n  .xl\\:focus\\:bg-pink-300:focus{\n    background-color: #fbb6ce;\n  }\n\n  .xl\\:focus\\:bg-pink-400:focus{\n    background-color: #f687b3;\n  }\n\n  .xl\\:focus\\:bg-pink-500:focus{\n    background-color: #ed64a6;\n  }\n\n  .xl\\:focus\\:bg-pink-600:focus{\n    background-color: #d53f8c;\n  }\n\n  .xl\\:focus\\:bg-pink-700:focus{\n    background-color: #b83280;\n  }\n\n  .xl\\:focus\\:bg-pink-800:focus{\n    background-color: #97266d;\n  }\n\n  .xl\\:focus\\:bg-pink-900:focus{\n    background-color: #702459;\n  }\n\n  .xl\\:bg-bottom{\n    background-position: bottom;\n  }\n\n  .xl\\:bg-center{\n    background-position: center;\n  }\n\n  .xl\\:bg-left{\n    background-position: left;\n  }\n\n  .xl\\:bg-left-bottom{\n    background-position: left bottom;\n  }\n\n  .xl\\:bg-left-top{\n    background-position: left top;\n  }\n\n  .xl\\:bg-right{\n    background-position: right;\n  }\n\n  .xl\\:bg-right-bottom{\n    background-position: right bottom;\n  }\n\n  .xl\\:bg-right-top{\n    background-position: right top;\n  }\n\n  .xl\\:bg-top{\n    background-position: top;\n  }\n\n  .xl\\:bg-repeat{\n    background-repeat: repeat;\n  }\n\n  .xl\\:bg-no-repeat{\n    background-repeat: no-repeat;\n  }\n\n  .xl\\:bg-repeat-x{\n    background-repeat: repeat-x;\n  }\n\n  .xl\\:bg-repeat-y{\n    background-repeat: repeat-y;\n  }\n\n  .xl\\:bg-repeat-round{\n    background-repeat: round;\n  }\n\n  .xl\\:bg-repeat-space{\n    background-repeat: space;\n  }\n\n  .xl\\:bg-auto{\n    background-size: auto;\n  }\n\n  .xl\\:bg-cover{\n    background-size: cover;\n  }\n\n  .xl\\:bg-contain{\n    background-size: contain;\n  }\n\n  .xl\\:border-collapse{\n    border-collapse: collapse;\n  }\n\n  .xl\\:border-separate{\n    border-collapse: separate;\n  }\n\n  .xl\\:border-transparent{\n    border-color: transparent;\n  }\n\n  .xl\\:border-black{\n    border-color: #000;\n  }\n\n  .xl\\:border-white{\n    border-color: #fff;\n  }\n\n  .xl\\:border-gray-100{\n    border-color: hsl(216, 33%, 97%);\n  }\n\n  .xl\\:border-gray-200{\n    border-color: hsl(214, 15%, 91%);\n  }\n\n  .xl\\:border-gray-300{\n    border-color: hsl(210, 16%, 82%);\n  }\n\n  .xl\\:border-gray-400{\n    border-color: hsl(211, 13%, 65%);\n  }\n\n  .xl\\:border-gray-500{\n    border-color: hsl(211, 10%, 53%);\n  }\n\n  .xl\\:border-gray-600{\n    border-color: hsl(211, 12%, 43%);\n  }\n\n  .xl\\:border-gray-700{\n    border-color: hsl(209, 14%, 37%);\n  }\n\n  .xl\\:border-gray-800{\n    border-color: hsl(209, 18%, 30%);\n  }\n\n  .xl\\:border-gray-900{\n    border-color: hsl(209, 20%, 25%);\n  }\n\n  .xl\\:border-gray-1000{\n    border-color: hsl(210, 24%, 16%);\n  }\n\n  .xl\\:border-red-100{\n    border-color: hsl(360, 100%, 95%);\n  }\n\n  .xl\\:border-red-200{\n    border-color: hsl(360, 100%, 87%);\n  }\n\n  .xl\\:border-red-300{\n    border-color: hsl(360, 100%, 80%);\n  }\n\n  .xl\\:border-red-400{\n    border-color: hsl(360, 91%, 69%);\n  }\n\n  .xl\\:border-red-500{\n    border-color: hsl(360, 83%, 62%);\n  }\n\n  .xl\\:border-red-600{\n    border-color: hsl(356, 75%, 53%);\n  }\n\n  .xl\\:border-red-700{\n    border-color: hsl(354, 85%, 44%);\n  }\n\n  .xl\\:border-red-800{\n    border-color: hsl(352, 90%, 35%);\n  }\n\n  .xl\\:border-red-900{\n    border-color: hsl(350, 94%, 28%);\n  }\n\n  .xl\\:border-red-1000{\n    border-color: hsl(348, 94%, 20%);\n  }\n\n  .xl\\:border-orange-100{\n    border-color: #fffaf0;\n  }\n\n  .xl\\:border-orange-200{\n    border-color: #feebc8;\n  }\n\n  .xl\\:border-orange-300{\n    border-color: #fbd38d;\n  }\n\n  .xl\\:border-orange-400{\n    border-color: #f6ad55;\n  }\n\n  .xl\\:border-orange-500{\n    border-color: #ed8936;\n  }\n\n  .xl\\:border-orange-600{\n    border-color: #dd6b20;\n  }\n\n  .xl\\:border-orange-700{\n    border-color: #c05621;\n  }\n\n  .xl\\:border-orange-800{\n    border-color: #9c4221;\n  }\n\n  .xl\\:border-orange-900{\n    border-color: #7b341e;\n  }\n\n  .xl\\:border-yellow-100{\n    border-color: hsl(15, 86%, 30%);\n  }\n\n  .xl\\:border-yellow-200{\n    border-color: hsl(22, 82%, 39%);\n  }\n\n  .xl\\:border-yellow-300{\n    border-color: hsl(29, 80%, 44%);\n  }\n\n  .xl\\:border-yellow-400{\n    border-color: hsl(36, 77%, 49%);\n  }\n\n  .xl\\:border-yellow-500{\n    border-color: hsl(42, 87%, 55%);\n  }\n\n  .xl\\:border-yellow-600{\n    border-color: hsl(44, 92%, 63%);\n  }\n\n  .xl\\:border-yellow-700{\n    border-color: hsl(48, 94%, 68%);\n  }\n\n  .xl\\:border-yellow-800{\n    border-color: hsl(48, 95%, 76%);\n  }\n\n  .xl\\:border-yellow-900{\n    border-color: hsl(48, 100%, 88%);\n  }\n\n  .xl\\:border-yellow-1000{\n    border-color: hsl(49, 100%, 96%);\n  }\n\n  .xl\\:border-green-100{\n    border-color: #f0fff4;\n  }\n\n  .xl\\:border-green-200{\n    border-color: #c6f6d5;\n  }\n\n  .xl\\:border-green-300{\n    border-color: #9ae6b4;\n  }\n\n  .xl\\:border-green-400{\n    border-color: #68d391;\n  }\n\n  .xl\\:border-green-500{\n    border-color: #48bb78;\n  }\n\n  .xl\\:border-green-600{\n    border-color: #38a169;\n  }\n\n  .xl\\:border-green-700{\n    border-color: #2f855a;\n  }\n\n  .xl\\:border-green-800{\n    border-color: #276749;\n  }\n\n  .xl\\:border-green-900{\n    border-color: #22543d;\n  }\n\n  .xl\\:border-teal-100{\n    border-color: hsl(170, 97%, 15%);\n  }\n\n  .xl\\:border-teal-200{\n    border-color: hsl(168, 80%, 23%);\n  }\n\n  .xl\\:border-teal-300{\n    border-color: hsl(166, 72%, 28%);\n  }\n\n  .xl\\:border-teal-400{\n    border-color: hsl(164, 71%, 34%);\n  }\n\n  .xl\\:border-teal-500{\n    border-color: hsl(162, 63%, 41%);\n  }\n\n  .xl\\:border-teal-600{\n    border-color: hsl(160, 51%, 49%);\n  }\n\n  .xl\\:border-teal-700{\n    border-color: hsl(158, 58%, 62%);\n  }\n\n  .xl\\:border-teal-800{\n    border-color: hsl(156, 73%, 74%);\n  }\n\n  .xl\\:border-teal-900{\n    border-color: hsl(154, 75%, 87%);\n  }\n\n  .xl\\:border-teal-1000{\n    border-color: hsl(152, 68%, 96%);\n  }\n\n  .xl\\:border-blue-100{\n    border-color: hsl(195, 100%, 95%);\n  }\n\n  .xl\\:border-blue-200{\n    border-color: hsl(195, 100%, 85%);\n  }\n\n  .xl\\:border-blue-300{\n    border-color: hsl(195, 97%, 75%);\n  }\n\n  .xl\\:border-blue-400{\n    border-color: hsl(196, 94%, 67%);\n  }\n\n  .xl\\:border-blue-500{\n    border-color: hsl(197, 92%, 61%);\n  }\n\n  .xl\\:border-blue-600{\n    border-color: hsl(199, 84%, 55%);\n  }\n\n  .xl\\:border-blue-700{\n    border-color: hsl(201, 79%, 46%);\n  }\n\n  .xl\\:border-blue-800{\n    border-color: hsl(202, 83%, 41%);\n  }\n\n  .xl\\:border-blue-900{\n    border-color: hsl(203, 87%, 34%);\n  }\n\n  .xl\\:border-blue-1000{\n    border-color: hsl(204, 96%, 27%);\n  }\n\n  .xl\\:border-indigo-100{\n    border-color: hsl(221, 68%, 93%);\n  }\n\n  .xl\\:border-indigo-200{\n    border-color: hsl(221, 78%, 86%);\n  }\n\n  .xl\\:border-indigo-300{\n    border-color: hsl(224, 67%, 76%);\n  }\n\n  .xl\\:border-indigo-400{\n    border-color: hsl(225, 57%, 67%);\n  }\n\n  .xl\\:border-indigo-500{\n    border-color: hsl(227, 50%, 59%);\n  }\n\n  .xl\\:border-indigo-600{\n    border-color: hsl(227, 42%, 51%);\n  }\n\n  .xl\\:border-indigo-700{\n    border-color: hsl(228, 45%, 45%);\n  }\n\n  .xl\\:border-indigo-800{\n    border-color: hsl(230, 49%, 41%);\n  }\n\n  .xl\\:border-indigo-900{\n    border-color: hsl(232, 51%, 36%);\n  }\n\n  .xl\\:border-indigo-1000{\n    border-color: hsl(234, 62%, 26%);\n  }\n\n  .xl\\:border-purple-100{\n    border-color: #faf5ff;\n  }\n\n  .xl\\:border-purple-200{\n    border-color: #e9d8fd;\n  }\n\n  .xl\\:border-purple-300{\n    border-color: #d6bcfa;\n  }\n\n  .xl\\:border-purple-400{\n    border-color: #b794f4;\n  }\n\n  .xl\\:border-purple-500{\n    border-color: #9f7aea;\n  }\n\n  .xl\\:border-purple-600{\n    border-color: #805ad5;\n  }\n\n  .xl\\:border-purple-700{\n    border-color: #6b46c1;\n  }\n\n  .xl\\:border-purple-800{\n    border-color: #553c9a;\n  }\n\n  .xl\\:border-purple-900{\n    border-color: #44337a;\n  }\n\n  .xl\\:border-pink-100{\n    border-color: #fff5f7;\n  }\n\n  .xl\\:border-pink-200{\n    border-color: #fed7e2;\n  }\n\n  .xl\\:border-pink-300{\n    border-color: #fbb6ce;\n  }\n\n  .xl\\:border-pink-400{\n    border-color: #f687b3;\n  }\n\n  .xl\\:border-pink-500{\n    border-color: #ed64a6;\n  }\n\n  .xl\\:border-pink-600{\n    border-color: #d53f8c;\n  }\n\n  .xl\\:border-pink-700{\n    border-color: #b83280;\n  }\n\n  .xl\\:border-pink-800{\n    border-color: #97266d;\n  }\n\n  .xl\\:border-pink-900{\n    border-color: #702459;\n  }\n\n  .xl\\:hover\\:border-transparent:hover{\n    border-color: transparent;\n  }\n\n  .xl\\:hover\\:border-black:hover{\n    border-color: #000;\n  }\n\n  .xl\\:hover\\:border-white:hover{\n    border-color: #fff;\n  }\n\n  .xl\\:hover\\:border-gray-100:hover{\n    border-color: hsl(216, 33%, 97%);\n  }\n\n  .xl\\:hover\\:border-gray-200:hover{\n    border-color: hsl(214, 15%, 91%);\n  }\n\n  .xl\\:hover\\:border-gray-300:hover{\n    border-color: hsl(210, 16%, 82%);\n  }\n\n  .xl\\:hover\\:border-gray-400:hover{\n    border-color: hsl(211, 13%, 65%);\n  }\n\n  .xl\\:hover\\:border-gray-500:hover{\n    border-color: hsl(211, 10%, 53%);\n  }\n\n  .xl\\:hover\\:border-gray-600:hover{\n    border-color: hsl(211, 12%, 43%);\n  }\n\n  .xl\\:hover\\:border-gray-700:hover{\n    border-color: hsl(209, 14%, 37%);\n  }\n\n  .xl\\:hover\\:border-gray-800:hover{\n    border-color: hsl(209, 18%, 30%);\n  }\n\n  .xl\\:hover\\:border-gray-900:hover{\n    border-color: hsl(209, 20%, 25%);\n  }\n\n  .xl\\:hover\\:border-gray-1000:hover{\n    border-color: hsl(210, 24%, 16%);\n  }\n\n  .xl\\:hover\\:border-red-100:hover{\n    border-color: hsl(360, 100%, 95%);\n  }\n\n  .xl\\:hover\\:border-red-200:hover{\n    border-color: hsl(360, 100%, 87%);\n  }\n\n  .xl\\:hover\\:border-red-300:hover{\n    border-color: hsl(360, 100%, 80%);\n  }\n\n  .xl\\:hover\\:border-red-400:hover{\n    border-color: hsl(360, 91%, 69%);\n  }\n\n  .xl\\:hover\\:border-red-500:hover{\n    border-color: hsl(360, 83%, 62%);\n  }\n\n  .xl\\:hover\\:border-red-600:hover{\n    border-color: hsl(356, 75%, 53%);\n  }\n\n  .xl\\:hover\\:border-red-700:hover{\n    border-color: hsl(354, 85%, 44%);\n  }\n\n  .xl\\:hover\\:border-red-800:hover{\n    border-color: hsl(352, 90%, 35%);\n  }\n\n  .xl\\:hover\\:border-red-900:hover{\n    border-color: hsl(350, 94%, 28%);\n  }\n\n  .xl\\:hover\\:border-red-1000:hover{\n    border-color: hsl(348, 94%, 20%);\n  }\n\n  .xl\\:hover\\:border-orange-100:hover{\n    border-color: #fffaf0;\n  }\n\n  .xl\\:hover\\:border-orange-200:hover{\n    border-color: #feebc8;\n  }\n\n  .xl\\:hover\\:border-orange-300:hover{\n    border-color: #fbd38d;\n  }\n\n  .xl\\:hover\\:border-orange-400:hover{\n    border-color: #f6ad55;\n  }\n\n  .xl\\:hover\\:border-orange-500:hover{\n    border-color: #ed8936;\n  }\n\n  .xl\\:hover\\:border-orange-600:hover{\n    border-color: #dd6b20;\n  }\n\n  .xl\\:hover\\:border-orange-700:hover{\n    border-color: #c05621;\n  }\n\n  .xl\\:hover\\:border-orange-800:hover{\n    border-color: #9c4221;\n  }\n\n  .xl\\:hover\\:border-orange-900:hover{\n    border-color: #7b341e;\n  }\n\n  .xl\\:hover\\:border-yellow-100:hover{\n    border-color: hsl(15, 86%, 30%);\n  }\n\n  .xl\\:hover\\:border-yellow-200:hover{\n    border-color: hsl(22, 82%, 39%);\n  }\n\n  .xl\\:hover\\:border-yellow-300:hover{\n    border-color: hsl(29, 80%, 44%);\n  }\n\n  .xl\\:hover\\:border-yellow-400:hover{\n    border-color: hsl(36, 77%, 49%);\n  }\n\n  .xl\\:hover\\:border-yellow-500:hover{\n    border-color: hsl(42, 87%, 55%);\n  }\n\n  .xl\\:hover\\:border-yellow-600:hover{\n    border-color: hsl(44, 92%, 63%);\n  }\n\n  .xl\\:hover\\:border-yellow-700:hover{\n    border-color: hsl(48, 94%, 68%);\n  }\n\n  .xl\\:hover\\:border-yellow-800:hover{\n    border-color: hsl(48, 95%, 76%);\n  }\n\n  .xl\\:hover\\:border-yellow-900:hover{\n    border-color: hsl(48, 100%, 88%);\n  }\n\n  .xl\\:hover\\:border-yellow-1000:hover{\n    border-color: hsl(49, 100%, 96%);\n  }\n\n  .xl\\:hover\\:border-green-100:hover{\n    border-color: #f0fff4;\n  }\n\n  .xl\\:hover\\:border-green-200:hover{\n    border-color: #c6f6d5;\n  }\n\n  .xl\\:hover\\:border-green-300:hover{\n    border-color: #9ae6b4;\n  }\n\n  .xl\\:hover\\:border-green-400:hover{\n    border-color: #68d391;\n  }\n\n  .xl\\:hover\\:border-green-500:hover{\n    border-color: #48bb78;\n  }\n\n  .xl\\:hover\\:border-green-600:hover{\n    border-color: #38a169;\n  }\n\n  .xl\\:hover\\:border-green-700:hover{\n    border-color: #2f855a;\n  }\n\n  .xl\\:hover\\:border-green-800:hover{\n    border-color: #276749;\n  }\n\n  .xl\\:hover\\:border-green-900:hover{\n    border-color: #22543d;\n  }\n\n  .xl\\:hover\\:border-teal-100:hover{\n    border-color: hsl(170, 97%, 15%);\n  }\n\n  .xl\\:hover\\:border-teal-200:hover{\n    border-color: hsl(168, 80%, 23%);\n  }\n\n  .xl\\:hover\\:border-teal-300:hover{\n    border-color: hsl(166, 72%, 28%);\n  }\n\n  .xl\\:hover\\:border-teal-400:hover{\n    border-color: hsl(164, 71%, 34%);\n  }\n\n  .xl\\:hover\\:border-teal-500:hover{\n    border-color: hsl(162, 63%, 41%);\n  }\n\n  .xl\\:hover\\:border-teal-600:hover{\n    border-color: hsl(160, 51%, 49%);\n  }\n\n  .xl\\:hover\\:border-teal-700:hover{\n    border-color: hsl(158, 58%, 62%);\n  }\n\n  .xl\\:hover\\:border-teal-800:hover{\n    border-color: hsl(156, 73%, 74%);\n  }\n\n  .xl\\:hover\\:border-teal-900:hover{\n    border-color: hsl(154, 75%, 87%);\n  }\n\n  .xl\\:hover\\:border-teal-1000:hover{\n    border-color: hsl(152, 68%, 96%);\n  }\n\n  .xl\\:hover\\:border-blue-100:hover{\n    border-color: hsl(195, 100%, 95%);\n  }\n\n  .xl\\:hover\\:border-blue-200:hover{\n    border-color: hsl(195, 100%, 85%);\n  }\n\n  .xl\\:hover\\:border-blue-300:hover{\n    border-color: hsl(195, 97%, 75%);\n  }\n\n  .xl\\:hover\\:border-blue-400:hover{\n    border-color: hsl(196, 94%, 67%);\n  }\n\n  .xl\\:hover\\:border-blue-500:hover{\n    border-color: hsl(197, 92%, 61%);\n  }\n\n  .xl\\:hover\\:border-blue-600:hover{\n    border-color: hsl(199, 84%, 55%);\n  }\n\n  .xl\\:hover\\:border-blue-700:hover{\n    border-color: hsl(201, 79%, 46%);\n  }\n\n  .xl\\:hover\\:border-blue-800:hover{\n    border-color: hsl(202, 83%, 41%);\n  }\n\n  .xl\\:hover\\:border-blue-900:hover{\n    border-color: hsl(203, 87%, 34%);\n  }\n\n  .xl\\:hover\\:border-blue-1000:hover{\n    border-color: hsl(204, 96%, 27%);\n  }\n\n  .xl\\:hover\\:border-indigo-100:hover{\n    border-color: hsl(221, 68%, 93%);\n  }\n\n  .xl\\:hover\\:border-indigo-200:hover{\n    border-color: hsl(221, 78%, 86%);\n  }\n\n  .xl\\:hover\\:border-indigo-300:hover{\n    border-color: hsl(224, 67%, 76%);\n  }\n\n  .xl\\:hover\\:border-indigo-400:hover{\n    border-color: hsl(225, 57%, 67%);\n  }\n\n  .xl\\:hover\\:border-indigo-500:hover{\n    border-color: hsl(227, 50%, 59%);\n  }\n\n  .xl\\:hover\\:border-indigo-600:hover{\n    border-color: hsl(227, 42%, 51%);\n  }\n\n  .xl\\:hover\\:border-indigo-700:hover{\n    border-color: hsl(228, 45%, 45%);\n  }\n\n  .xl\\:hover\\:border-indigo-800:hover{\n    border-color: hsl(230, 49%, 41%);\n  }\n\n  .xl\\:hover\\:border-indigo-900:hover{\n    border-color: hsl(232, 51%, 36%);\n  }\n\n  .xl\\:hover\\:border-indigo-1000:hover{\n    border-color: hsl(234, 62%, 26%);\n  }\n\n  .xl\\:hover\\:border-purple-100:hover{\n    border-color: #faf5ff;\n  }\n\n  .xl\\:hover\\:border-purple-200:hover{\n    border-color: #e9d8fd;\n  }\n\n  .xl\\:hover\\:border-purple-300:hover{\n    border-color: #d6bcfa;\n  }\n\n  .xl\\:hover\\:border-purple-400:hover{\n    border-color: #b794f4;\n  }\n\n  .xl\\:hover\\:border-purple-500:hover{\n    border-color: #9f7aea;\n  }\n\n  .xl\\:hover\\:border-purple-600:hover{\n    border-color: #805ad5;\n  }\n\n  .xl\\:hover\\:border-purple-700:hover{\n    border-color: #6b46c1;\n  }\n\n  .xl\\:hover\\:border-purple-800:hover{\n    border-color: #553c9a;\n  }\n\n  .xl\\:hover\\:border-purple-900:hover{\n    border-color: #44337a;\n  }\n\n  .xl\\:hover\\:border-pink-100:hover{\n    border-color: #fff5f7;\n  }\n\n  .xl\\:hover\\:border-pink-200:hover{\n    border-color: #fed7e2;\n  }\n\n  .xl\\:hover\\:border-pink-300:hover{\n    border-color: #fbb6ce;\n  }\n\n  .xl\\:hover\\:border-pink-400:hover{\n    border-color: #f687b3;\n  }\n\n  .xl\\:hover\\:border-pink-500:hover{\n    border-color: #ed64a6;\n  }\n\n  .xl\\:hover\\:border-pink-600:hover{\n    border-color: #d53f8c;\n  }\n\n  .xl\\:hover\\:border-pink-700:hover{\n    border-color: #b83280;\n  }\n\n  .xl\\:hover\\:border-pink-800:hover{\n    border-color: #97266d;\n  }\n\n  .xl\\:hover\\:border-pink-900:hover{\n    border-color: #702459;\n  }\n\n  .xl\\:focus\\:border-transparent:focus{\n    border-color: transparent;\n  }\n\n  .xl\\:focus\\:border-black:focus{\n    border-color: #000;\n  }\n\n  .xl\\:focus\\:border-white:focus{\n    border-color: #fff;\n  }\n\n  .xl\\:focus\\:border-gray-100:focus{\n    border-color: hsl(216, 33%, 97%);\n  }\n\n  .xl\\:focus\\:border-gray-200:focus{\n    border-color: hsl(214, 15%, 91%);\n  }\n\n  .xl\\:focus\\:border-gray-300:focus{\n    border-color: hsl(210, 16%, 82%);\n  }\n\n  .xl\\:focus\\:border-gray-400:focus{\n    border-color: hsl(211, 13%, 65%);\n  }\n\n  .xl\\:focus\\:border-gray-500:focus{\n    border-color: hsl(211, 10%, 53%);\n  }\n\n  .xl\\:focus\\:border-gray-600:focus{\n    border-color: hsl(211, 12%, 43%);\n  }\n\n  .xl\\:focus\\:border-gray-700:focus{\n    border-color: hsl(209, 14%, 37%);\n  }\n\n  .xl\\:focus\\:border-gray-800:focus{\n    border-color: hsl(209, 18%, 30%);\n  }\n\n  .xl\\:focus\\:border-gray-900:focus{\n    border-color: hsl(209, 20%, 25%);\n  }\n\n  .xl\\:focus\\:border-gray-1000:focus{\n    border-color: hsl(210, 24%, 16%);\n  }\n\n  .xl\\:focus\\:border-red-100:focus{\n    border-color: hsl(360, 100%, 95%);\n  }\n\n  .xl\\:focus\\:border-red-200:focus{\n    border-color: hsl(360, 100%, 87%);\n  }\n\n  .xl\\:focus\\:border-red-300:focus{\n    border-color: hsl(360, 100%, 80%);\n  }\n\n  .xl\\:focus\\:border-red-400:focus{\n    border-color: hsl(360, 91%, 69%);\n  }\n\n  .xl\\:focus\\:border-red-500:focus{\n    border-color: hsl(360, 83%, 62%);\n  }\n\n  .xl\\:focus\\:border-red-600:focus{\n    border-color: hsl(356, 75%, 53%);\n  }\n\n  .xl\\:focus\\:border-red-700:focus{\n    border-color: hsl(354, 85%, 44%);\n  }\n\n  .xl\\:focus\\:border-red-800:focus{\n    border-color: hsl(352, 90%, 35%);\n  }\n\n  .xl\\:focus\\:border-red-900:focus{\n    border-color: hsl(350, 94%, 28%);\n  }\n\n  .xl\\:focus\\:border-red-1000:focus{\n    border-color: hsl(348, 94%, 20%);\n  }\n\n  .xl\\:focus\\:border-orange-100:focus{\n    border-color: #fffaf0;\n  }\n\n  .xl\\:focus\\:border-orange-200:focus{\n    border-color: #feebc8;\n  }\n\n  .xl\\:focus\\:border-orange-300:focus{\n    border-color: #fbd38d;\n  }\n\n  .xl\\:focus\\:border-orange-400:focus{\n    border-color: #f6ad55;\n  }\n\n  .xl\\:focus\\:border-orange-500:focus{\n    border-color: #ed8936;\n  }\n\n  .xl\\:focus\\:border-orange-600:focus{\n    border-color: #dd6b20;\n  }\n\n  .xl\\:focus\\:border-orange-700:focus{\n    border-color: #c05621;\n  }\n\n  .xl\\:focus\\:border-orange-800:focus{\n    border-color: #9c4221;\n  }\n\n  .xl\\:focus\\:border-orange-900:focus{\n    border-color: #7b341e;\n  }\n\n  .xl\\:focus\\:border-yellow-100:focus{\n    border-color: hsl(15, 86%, 30%);\n  }\n\n  .xl\\:focus\\:border-yellow-200:focus{\n    border-color: hsl(22, 82%, 39%);\n  }\n\n  .xl\\:focus\\:border-yellow-300:focus{\n    border-color: hsl(29, 80%, 44%);\n  }\n\n  .xl\\:focus\\:border-yellow-400:focus{\n    border-color: hsl(36, 77%, 49%);\n  }\n\n  .xl\\:focus\\:border-yellow-500:focus{\n    border-color: hsl(42, 87%, 55%);\n  }\n\n  .xl\\:focus\\:border-yellow-600:focus{\n    border-color: hsl(44, 92%, 63%);\n  }\n\n  .xl\\:focus\\:border-yellow-700:focus{\n    border-color: hsl(48, 94%, 68%);\n  }\n\n  .xl\\:focus\\:border-yellow-800:focus{\n    border-color: hsl(48, 95%, 76%);\n  }\n\n  .xl\\:focus\\:border-yellow-900:focus{\n    border-color: hsl(48, 100%, 88%);\n  }\n\n  .xl\\:focus\\:border-yellow-1000:focus{\n    border-color: hsl(49, 100%, 96%);\n  }\n\n  .xl\\:focus\\:border-green-100:focus{\n    border-color: #f0fff4;\n  }\n\n  .xl\\:focus\\:border-green-200:focus{\n    border-color: #c6f6d5;\n  }\n\n  .xl\\:focus\\:border-green-300:focus{\n    border-color: #9ae6b4;\n  }\n\n  .xl\\:focus\\:border-green-400:focus{\n    border-color: #68d391;\n  }\n\n  .xl\\:focus\\:border-green-500:focus{\n    border-color: #48bb78;\n  }\n\n  .xl\\:focus\\:border-green-600:focus{\n    border-color: #38a169;\n  }\n\n  .xl\\:focus\\:border-green-700:focus{\n    border-color: #2f855a;\n  }\n\n  .xl\\:focus\\:border-green-800:focus{\n    border-color: #276749;\n  }\n\n  .xl\\:focus\\:border-green-900:focus{\n    border-color: #22543d;\n  }\n\n  .xl\\:focus\\:border-teal-100:focus{\n    border-color: hsl(170, 97%, 15%);\n  }\n\n  .xl\\:focus\\:border-teal-200:focus{\n    border-color: hsl(168, 80%, 23%);\n  }\n\n  .xl\\:focus\\:border-teal-300:focus{\n    border-color: hsl(166, 72%, 28%);\n  }\n\n  .xl\\:focus\\:border-teal-400:focus{\n    border-color: hsl(164, 71%, 34%);\n  }\n\n  .xl\\:focus\\:border-teal-500:focus{\n    border-color: hsl(162, 63%, 41%);\n  }\n\n  .xl\\:focus\\:border-teal-600:focus{\n    border-color: hsl(160, 51%, 49%);\n  }\n\n  .xl\\:focus\\:border-teal-700:focus{\n    border-color: hsl(158, 58%, 62%);\n  }\n\n  .xl\\:focus\\:border-teal-800:focus{\n    border-color: hsl(156, 73%, 74%);\n  }\n\n  .xl\\:focus\\:border-teal-900:focus{\n    border-color: hsl(154, 75%, 87%);\n  }\n\n  .xl\\:focus\\:border-teal-1000:focus{\n    border-color: hsl(152, 68%, 96%);\n  }\n\n  .xl\\:focus\\:border-blue-100:focus{\n    border-color: hsl(195, 100%, 95%);\n  }\n\n  .xl\\:focus\\:border-blue-200:focus{\n    border-color: hsl(195, 100%, 85%);\n  }\n\n  .xl\\:focus\\:border-blue-300:focus{\n    border-color: hsl(195, 97%, 75%);\n  }\n\n  .xl\\:focus\\:border-blue-400:focus{\n    border-color: hsl(196, 94%, 67%);\n  }\n\n  .xl\\:focus\\:border-blue-500:focus{\n    border-color: hsl(197, 92%, 61%);\n  }\n\n  .xl\\:focus\\:border-blue-600:focus{\n    border-color: hsl(199, 84%, 55%);\n  }\n\n  .xl\\:focus\\:border-blue-700:focus{\n    border-color: hsl(201, 79%, 46%);\n  }\n\n  .xl\\:focus\\:border-blue-800:focus{\n    border-color: hsl(202, 83%, 41%);\n  }\n\n  .xl\\:focus\\:border-blue-900:focus{\n    border-color: hsl(203, 87%, 34%);\n  }\n\n  .xl\\:focus\\:border-blue-1000:focus{\n    border-color: hsl(204, 96%, 27%);\n  }\n\n  .xl\\:focus\\:border-indigo-100:focus{\n    border-color: hsl(221, 68%, 93%);\n  }\n\n  .xl\\:focus\\:border-indigo-200:focus{\n    border-color: hsl(221, 78%, 86%);\n  }\n\n  .xl\\:focus\\:border-indigo-300:focus{\n    border-color: hsl(224, 67%, 76%);\n  }\n\n  .xl\\:focus\\:border-indigo-400:focus{\n    border-color: hsl(225, 57%, 67%);\n  }\n\n  .xl\\:focus\\:border-indigo-500:focus{\n    border-color: hsl(227, 50%, 59%);\n  }\n\n  .xl\\:focus\\:border-indigo-600:focus{\n    border-color: hsl(227, 42%, 51%);\n  }\n\n  .xl\\:focus\\:border-indigo-700:focus{\n    border-color: hsl(228, 45%, 45%);\n  }\n\n  .xl\\:focus\\:border-indigo-800:focus{\n    border-color: hsl(230, 49%, 41%);\n  }\n\n  .xl\\:focus\\:border-indigo-900:focus{\n    border-color: hsl(232, 51%, 36%);\n  }\n\n  .xl\\:focus\\:border-indigo-1000:focus{\n    border-color: hsl(234, 62%, 26%);\n  }\n\n  .xl\\:focus\\:border-purple-100:focus{\n    border-color: #faf5ff;\n  }\n\n  .xl\\:focus\\:border-purple-200:focus{\n    border-color: #e9d8fd;\n  }\n\n  .xl\\:focus\\:border-purple-300:focus{\n    border-color: #d6bcfa;\n  }\n\n  .xl\\:focus\\:border-purple-400:focus{\n    border-color: #b794f4;\n  }\n\n  .xl\\:focus\\:border-purple-500:focus{\n    border-color: #9f7aea;\n  }\n\n  .xl\\:focus\\:border-purple-600:focus{\n    border-color: #805ad5;\n  }\n\n  .xl\\:focus\\:border-purple-700:focus{\n    border-color: #6b46c1;\n  }\n\n  .xl\\:focus\\:border-purple-800:focus{\n    border-color: #553c9a;\n  }\n\n  .xl\\:focus\\:border-purple-900:focus{\n    border-color: #44337a;\n  }\n\n  .xl\\:focus\\:border-pink-100:focus{\n    border-color: #fff5f7;\n  }\n\n  .xl\\:focus\\:border-pink-200:focus{\n    border-color: #fed7e2;\n  }\n\n  .xl\\:focus\\:border-pink-300:focus{\n    border-color: #fbb6ce;\n  }\n\n  .xl\\:focus\\:border-pink-400:focus{\n    border-color: #f687b3;\n  }\n\n  .xl\\:focus\\:border-pink-500:focus{\n    border-color: #ed64a6;\n  }\n\n  .xl\\:focus\\:border-pink-600:focus{\n    border-color: #d53f8c;\n  }\n\n  .xl\\:focus\\:border-pink-700:focus{\n    border-color: #b83280;\n  }\n\n  .xl\\:focus\\:border-pink-800:focus{\n    border-color: #97266d;\n  }\n\n  .xl\\:focus\\:border-pink-900:focus{\n    border-color: #702459;\n  }\n\n  .xl\\:rounded-none{\n    border-radius: 0;\n  }\n\n  .xl\\:rounded-sm{\n    border-radius: 0.125rem;\n  }\n\n  .xl\\:rounded{\n    border-radius: 0.25rem;\n  }\n\n  .xl\\:rounded-lg{\n    border-radius: 0.5rem;\n  }\n\n  .xl\\:rounded-full{\n    border-radius: 9999px;\n  }\n\n  .xl\\:rounded-t-none{\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n\n  .xl\\:rounded-r-none{\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n\n  .xl\\:rounded-b-none{\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n\n  .xl\\:rounded-l-none{\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n\n  .xl\\:rounded-t-sm{\n    border-top-left-radius: 0.125rem;\n    border-top-right-radius: 0.125rem;\n  }\n\n  .xl\\:rounded-r-sm{\n    border-top-right-radius: 0.125rem;\n    border-bottom-right-radius: 0.125rem;\n  }\n\n  .xl\\:rounded-b-sm{\n    border-bottom-right-radius: 0.125rem;\n    border-bottom-left-radius: 0.125rem;\n  }\n\n  .xl\\:rounded-l-sm{\n    border-top-left-radius: 0.125rem;\n    border-bottom-left-radius: 0.125rem;\n  }\n\n  .xl\\:rounded-t{\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n  }\n\n  .xl\\:rounded-r{\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n  }\n\n  .xl\\:rounded-b{\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n\n  .xl\\:rounded-l{\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n\n  .xl\\:rounded-t-lg{\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n  }\n\n  .xl\\:rounded-r-lg{\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n  }\n\n  .xl\\:rounded-b-lg{\n    border-bottom-right-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n  }\n\n  .xl\\:rounded-l-lg{\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n  }\n\n  .xl\\:rounded-t-full{\n    border-top-left-radius: 9999px;\n    border-top-right-radius: 9999px;\n  }\n\n  .xl\\:rounded-r-full{\n    border-top-right-radius: 9999px;\n    border-bottom-right-radius: 9999px;\n  }\n\n  .xl\\:rounded-b-full{\n    border-bottom-right-radius: 9999px;\n    border-bottom-left-radius: 9999px;\n  }\n\n  .xl\\:rounded-l-full{\n    border-top-left-radius: 9999px;\n    border-bottom-left-radius: 9999px;\n  }\n\n  .xl\\:rounded-tl-none{\n    border-top-left-radius: 0;\n  }\n\n  .xl\\:rounded-tr-none{\n    border-top-right-radius: 0;\n  }\n\n  .xl\\:rounded-br-none{\n    border-bottom-right-radius: 0;\n  }\n\n  .xl\\:rounded-bl-none{\n    border-bottom-left-radius: 0;\n  }\n\n  .xl\\:rounded-tl-sm{\n    border-top-left-radius: 0.125rem;\n  }\n\n  .xl\\:rounded-tr-sm{\n    border-top-right-radius: 0.125rem;\n  }\n\n  .xl\\:rounded-br-sm{\n    border-bottom-right-radius: 0.125rem;\n  }\n\n  .xl\\:rounded-bl-sm{\n    border-bottom-left-radius: 0.125rem;\n  }\n\n  .xl\\:rounded-tl{\n    border-top-left-radius: 0.25rem;\n  }\n\n  .xl\\:rounded-tr{\n    border-top-right-radius: 0.25rem;\n  }\n\n  .xl\\:rounded-br{\n    border-bottom-right-radius: 0.25rem;\n  }\n\n  .xl\\:rounded-bl{\n    border-bottom-left-radius: 0.25rem;\n  }\n\n  .xl\\:rounded-tl-lg{\n    border-top-left-radius: 0.5rem;\n  }\n\n  .xl\\:rounded-tr-lg{\n    border-top-right-radius: 0.5rem;\n  }\n\n  .xl\\:rounded-br-lg{\n    border-bottom-right-radius: 0.5rem;\n  }\n\n  .xl\\:rounded-bl-lg{\n    border-bottom-left-radius: 0.5rem;\n  }\n\n  .xl\\:rounded-tl-full{\n    border-top-left-radius: 9999px;\n  }\n\n  .xl\\:rounded-tr-full{\n    border-top-right-radius: 9999px;\n  }\n\n  .xl\\:rounded-br-full{\n    border-bottom-right-radius: 9999px;\n  }\n\n  .xl\\:rounded-bl-full{\n    border-bottom-left-radius: 9999px;\n  }\n\n  .xl\\:border-solid{\n    border-style: solid;\n  }\n\n  .xl\\:border-dashed{\n    border-style: dashed;\n  }\n\n  .xl\\:border-dotted{\n    border-style: dotted;\n  }\n\n  .xl\\:border-none{\n    border-style: none;\n  }\n\n  .xl\\:border-0{\n    border-width: 0;\n  }\n\n  .xl\\:border-2{\n    border-width: 2px;\n  }\n\n  .xl\\:border-4{\n    border-width: 4px;\n  }\n\n  .xl\\:border-8{\n    border-width: 8px;\n  }\n\n  .xl\\:border{\n    border-width: 1px;\n  }\n\n  .xl\\:border-t-0{\n    border-top-width: 0;\n  }\n\n  .xl\\:border-r-0{\n    border-right-width: 0;\n  }\n\n  .xl\\:border-b-0{\n    border-bottom-width: 0;\n  }\n\n  .xl\\:border-l-0{\n    border-left-width: 0;\n  }\n\n  .xl\\:border-t-2{\n    border-top-width: 2px;\n  }\n\n  .xl\\:border-r-2{\n    border-right-width: 2px;\n  }\n\n  .xl\\:border-b-2{\n    border-bottom-width: 2px;\n  }\n\n  .xl\\:border-l-2{\n    border-left-width: 2px;\n  }\n\n  .xl\\:border-t-4{\n    border-top-width: 4px;\n  }\n\n  .xl\\:border-r-4{\n    border-right-width: 4px;\n  }\n\n  .xl\\:border-b-4{\n    border-bottom-width: 4px;\n  }\n\n  .xl\\:border-l-4{\n    border-left-width: 4px;\n  }\n\n  .xl\\:border-t-8{\n    border-top-width: 8px;\n  }\n\n  .xl\\:border-r-8{\n    border-right-width: 8px;\n  }\n\n  .xl\\:border-b-8{\n    border-bottom-width: 8px;\n  }\n\n  .xl\\:border-l-8{\n    border-left-width: 8px;\n  }\n\n  .xl\\:border-t{\n    border-top-width: 1px;\n  }\n\n  .xl\\:border-r{\n    border-right-width: 1px;\n  }\n\n  .xl\\:border-b{\n    border-bottom-width: 1px;\n  }\n\n  .xl\\:border-l{\n    border-left-width: 1px;\n  }\n\n  .xl\\:cursor-auto{\n    cursor: auto;\n  }\n\n  .xl\\:cursor-default{\n    cursor: default;\n  }\n\n  .xl\\:cursor-pointer{\n    cursor: pointer;\n  }\n\n  .xl\\:cursor-wait{\n    cursor: wait;\n  }\n\n  .xl\\:cursor-text{\n    cursor: text;\n  }\n\n  .xl\\:cursor-move{\n    cursor: move;\n  }\n\n  .xl\\:cursor-not-allowed{\n    cursor: not-allowed;\n  }\n\n  .xl\\:block{\n    display: block;\n  }\n\n  .xl\\:inline-block{\n    display: inline-block;\n  }\n\n  .xl\\:inline{\n    display: inline;\n  }\n\n  .xl\\:flex{\n    display: flex;\n  }\n\n  .xl\\:inline-flex{\n    display: inline-flex;\n  }\n\n  .xl\\:table{\n    display: table;\n  }\n\n  .xl\\:table-row{\n    display: table-row;\n  }\n\n  .xl\\:table-cell{\n    display: table-cell;\n  }\n\n  .xl\\:hidden{\n    display: none;\n  }\n\n  .xl\\:flex-row{\n    flex-direction: row;\n  }\n\n  .xl\\:flex-row-reverse{\n    flex-direction: row-reverse;\n  }\n\n  .xl\\:flex-col{\n    flex-direction: column;\n  }\n\n  .xl\\:flex-col-reverse{\n    flex-direction: column-reverse;\n  }\n\n  .xl\\:flex-wrap{\n    flex-wrap: wrap;\n  }\n\n  .xl\\:flex-wrap-reverse{\n    flex-wrap: wrap-reverse;\n  }\n\n  .xl\\:flex-no-wrap{\n    flex-wrap: nowrap;\n  }\n\n  .xl\\:items-start{\n    align-items: flex-start;\n  }\n\n  .xl\\:items-end{\n    align-items: flex-end;\n  }\n\n  .xl\\:items-center{\n    align-items: center;\n  }\n\n  .xl\\:items-baseline{\n    align-items: baseline;\n  }\n\n  .xl\\:items-stretch{\n    align-items: stretch;\n  }\n\n  .xl\\:self-auto{\n    align-self: auto;\n  }\n\n  .xl\\:self-start{\n    align-self: flex-start;\n  }\n\n  .xl\\:self-end{\n    align-self: flex-end;\n  }\n\n  .xl\\:self-center{\n    align-self: center;\n  }\n\n  .xl\\:self-stretch{\n    align-self: stretch;\n  }\n\n  .xl\\:justify-start{\n    justify-content: flex-start;\n  }\n\n  .xl\\:justify-end{\n    justify-content: flex-end;\n  }\n\n  .xl\\:justify-center{\n    justify-content: center;\n  }\n\n  .xl\\:justify-between{\n    justify-content: space-between;\n  }\n\n  .xl\\:justify-around{\n    justify-content: space-around;\n  }\n\n  .xl\\:content-center{\n    align-content: center;\n  }\n\n  .xl\\:content-start{\n    align-content: flex-start;\n  }\n\n  .xl\\:content-end{\n    align-content: flex-end;\n  }\n\n  .xl\\:content-between{\n    align-content: space-between;\n  }\n\n  .xl\\:content-around{\n    align-content: space-around;\n  }\n\n  .xl\\:flex-1{\n    flex: 1 1 0%;\n  }\n\n  .xl\\:flex-auto{\n    flex: 1 1 auto;\n  }\n\n  .xl\\:flex-initial{\n    flex: 0 1 auto;\n  }\n\n  .xl\\:flex-none{\n    flex: none;\n  }\n\n  .xl\\:flex-grow-0{\n    flex-grow: 0;\n  }\n\n  .xl\\:flex-grow{\n    flex-grow: 1;\n  }\n\n  .xl\\:flex-shrink-0{\n    flex-shrink: 0;\n  }\n\n  .xl\\:flex-shrink{\n    flex-shrink: 1;\n  }\n\n  .xl\\:order-1{\n    order: 1;\n  }\n\n  .xl\\:order-2{\n    order: 2;\n  }\n\n  .xl\\:order-3{\n    order: 3;\n  }\n\n  .xl\\:order-4{\n    order: 4;\n  }\n\n  .xl\\:order-5{\n    order: 5;\n  }\n\n  .xl\\:order-6{\n    order: 6;\n  }\n\n  .xl\\:order-7{\n    order: 7;\n  }\n\n  .xl\\:order-8{\n    order: 8;\n  }\n\n  .xl\\:order-9{\n    order: 9;\n  }\n\n  .xl\\:order-10{\n    order: 10;\n  }\n\n  .xl\\:order-11{\n    order: 11;\n  }\n\n  .xl\\:order-12{\n    order: 12;\n  }\n\n  .xl\\:order-first{\n    order: -9999;\n  }\n\n  .xl\\:order-last{\n    order: 9999;\n  }\n\n  .xl\\:order-none{\n    order: 0;\n  }\n\n  .xl\\:float-right{\n    float: right;\n  }\n\n  .xl\\:float-left{\n    float: left;\n  }\n\n  .xl\\:float-none{\n    float: none;\n  }\n\n  .xl\\:clearfix:after{\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n\n  .xl\\:font-sans{\n    font-family: Source Sans Pro, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  }\n\n  .xl\\:font-serif{\n    font-family: Georgia, Cambria, \"Times New Roman\", Times, serif;\n  }\n\n  .xl\\:font-mono{\n    font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  }\n\n  .xl\\:font-hairline{\n    font-weight: 100;\n  }\n\n  .xl\\:font-thin{\n    font-weight: 200;\n  }\n\n  .xl\\:font-light{\n    font-weight: 300;\n  }\n\n  .xl\\:font-normal{\n    font-weight: 400;\n  }\n\n  .xl\\:font-medium{\n    font-weight: 500;\n  }\n\n  .xl\\:font-semibold{\n    font-weight: 600;\n  }\n\n  .xl\\:font-bold{\n    font-weight: 700;\n  }\n\n  .xl\\:font-extrabold{\n    font-weight: 800;\n  }\n\n  .xl\\:font-black{\n    font-weight: 900;\n  }\n\n  .xl\\:hover\\:font-hairline:hover{\n    font-weight: 100;\n  }\n\n  .xl\\:hover\\:font-thin:hover{\n    font-weight: 200;\n  }\n\n  .xl\\:hover\\:font-light:hover{\n    font-weight: 300;\n  }\n\n  .xl\\:hover\\:font-normal:hover{\n    font-weight: 400;\n  }\n\n  .xl\\:hover\\:font-medium:hover{\n    font-weight: 500;\n  }\n\n  .xl\\:hover\\:font-semibold:hover{\n    font-weight: 600;\n  }\n\n  .xl\\:hover\\:font-bold:hover{\n    font-weight: 700;\n  }\n\n  .xl\\:hover\\:font-extrabold:hover{\n    font-weight: 800;\n  }\n\n  .xl\\:hover\\:font-black:hover{\n    font-weight: 900;\n  }\n\n  .xl\\:focus\\:font-hairline:focus{\n    font-weight: 100;\n  }\n\n  .xl\\:focus\\:font-thin:focus{\n    font-weight: 200;\n  }\n\n  .xl\\:focus\\:font-light:focus{\n    font-weight: 300;\n  }\n\n  .xl\\:focus\\:font-normal:focus{\n    font-weight: 400;\n  }\n\n  .xl\\:focus\\:font-medium:focus{\n    font-weight: 500;\n  }\n\n  .xl\\:focus\\:font-semibold:focus{\n    font-weight: 600;\n  }\n\n  .xl\\:focus\\:font-bold:focus{\n    font-weight: 700;\n  }\n\n  .xl\\:focus\\:font-extrabold:focus{\n    font-weight: 800;\n  }\n\n  .xl\\:focus\\:font-black:focus{\n    font-weight: 900;\n  }\n\n  .xl\\:h-0{\n    height: 0;\n  }\n\n  .xl\\:h-1{\n    height: 0.25rem;\n  }\n\n  .xl\\:h-2{\n    height: 0.5rem;\n  }\n\n  .xl\\:h-3{\n    height: 0.75rem;\n  }\n\n  .xl\\:h-4{\n    height: 1rem;\n  }\n\n  .xl\\:h-5{\n    height: 1.25rem;\n  }\n\n  .xl\\:h-6{\n    height: 1.5rem;\n  }\n\n  .xl\\:h-8{\n    height: 2rem;\n  }\n\n  .xl\\:h-10{\n    height: 2.5rem;\n  }\n\n  .xl\\:h-12{\n    height: 3rem;\n  }\n\n  .xl\\:h-16{\n    height: 4rem;\n  }\n\n  .xl\\:h-20{\n    height: 5rem;\n  }\n\n  .xl\\:h-24{\n    height: 6rem;\n  }\n\n  .xl\\:h-32{\n    height: 8rem;\n  }\n\n  .xl\\:h-40{\n    height: 10rem;\n  }\n\n  .xl\\:h-48{\n    height: 12rem;\n  }\n\n  .xl\\:h-56{\n    height: 14rem;\n  }\n\n  .xl\\:h-64{\n    height: 16rem;\n  }\n\n  .xl\\:h-auto{\n    height: auto;\n  }\n\n  .xl\\:h-px{\n    height: 1px;\n  }\n\n  .xl\\:h-full{\n    height: 100%;\n  }\n\n  .xl\\:h-screen{\n    height: 100vh;\n  }\n\n  .xl\\:leading-none{\n    line-height: 1;\n  }\n\n  .xl\\:leading-tight{\n    line-height: 1.25;\n  }\n\n  .xl\\:leading-snug{\n    line-height: 1.375;\n  }\n\n  .xl\\:leading-normal{\n    line-height: 1.5;\n  }\n\n  .xl\\:leading-relaxed{\n    line-height: 1.625;\n  }\n\n  .xl\\:leading-loose{\n    line-height: 2;\n  }\n\n  .xl\\:list-inside{\n    list-style-position: inside;\n  }\n\n  .xl\\:list-outside{\n    list-style-position: outside;\n  }\n\n  .xl\\:list-none{\n    list-style-type: none;\n  }\n\n  .xl\\:list-disc{\n    list-style-type: disc;\n  }\n\n  .xl\\:list-decimal{\n    list-style-type: decimal;\n  }\n\n  .xl\\:m-0{\n    margin: 0;\n  }\n\n  .xl\\:m-1{\n    margin: 0.25rem;\n  }\n\n  .xl\\:m-2{\n    margin: 0.5rem;\n  }\n\n  .xl\\:m-3{\n    margin: 0.75rem;\n  }\n\n  .xl\\:m-4{\n    margin: 1rem;\n  }\n\n  .xl\\:m-5{\n    margin: 1.25rem;\n  }\n\n  .xl\\:m-6{\n    margin: 1.5rem;\n  }\n\n  .xl\\:m-8{\n    margin: 2rem;\n  }\n\n  .xl\\:m-10{\n    margin: 2.5rem;\n  }\n\n  .xl\\:m-12{\n    margin: 3rem;\n  }\n\n  .xl\\:m-16{\n    margin: 4rem;\n  }\n\n  .xl\\:m-20{\n    margin: 5rem;\n  }\n\n  .xl\\:m-24{\n    margin: 6rem;\n  }\n\n  .xl\\:m-32{\n    margin: 8rem;\n  }\n\n  .xl\\:m-40{\n    margin: 10rem;\n  }\n\n  .xl\\:m-48{\n    margin: 12rem;\n  }\n\n  .xl\\:m-56{\n    margin: 14rem;\n  }\n\n  .xl\\:m-64{\n    margin: 16rem;\n  }\n\n  .xl\\:m-auto{\n    margin: auto;\n  }\n\n  .xl\\:m-px{\n    margin: 1px;\n  }\n\n  .xl\\:-m-1{\n    margin: -0.25rem;\n  }\n\n  .xl\\:-m-2{\n    margin: -0.5rem;\n  }\n\n  .xl\\:-m-3{\n    margin: -0.75rem;\n  }\n\n  .xl\\:-m-4{\n    margin: -1rem;\n  }\n\n  .xl\\:-m-5{\n    margin: -1.25rem;\n  }\n\n  .xl\\:-m-6{\n    margin: -1.5rem;\n  }\n\n  .xl\\:-m-8{\n    margin: -2rem;\n  }\n\n  .xl\\:-m-10{\n    margin: -2.5rem;\n  }\n\n  .xl\\:-m-12{\n    margin: -3rem;\n  }\n\n  .xl\\:-m-16{\n    margin: -4rem;\n  }\n\n  .xl\\:-m-20{\n    margin: -5rem;\n  }\n\n  .xl\\:-m-24{\n    margin: -6rem;\n  }\n\n  .xl\\:-m-32{\n    margin: -8rem;\n  }\n\n  .xl\\:-m-40{\n    margin: -10rem;\n  }\n\n  .xl\\:-m-48{\n    margin: -12rem;\n  }\n\n  .xl\\:-m-56{\n    margin: -14rem;\n  }\n\n  .xl\\:-m-64{\n    margin: -16rem;\n  }\n\n  .xl\\:-m-px{\n    margin: -1px;\n  }\n\n  .xl\\:my-0{\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .xl\\:mx-0{\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  .xl\\:my-1{\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem;\n  }\n\n  .xl\\:mx-1{\n    margin-left: 0.25rem;\n    margin-right: 0.25rem;\n  }\n\n  .xl\\:my-2{\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n  }\n\n  .xl\\:mx-2{\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n\n  .xl\\:my-3{\n    margin-top: 0.75rem;\n    margin-bottom: 0.75rem;\n  }\n\n  .xl\\:mx-3{\n    margin-left: 0.75rem;\n    margin-right: 0.75rem;\n  }\n\n  .xl\\:my-4{\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  .xl\\:mx-4{\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n\n  .xl\\:my-5{\n    margin-top: 1.25rem;\n    margin-bottom: 1.25rem;\n  }\n\n  .xl\\:mx-5{\n    margin-left: 1.25rem;\n    margin-right: 1.25rem;\n  }\n\n  .xl\\:my-6{\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem;\n  }\n\n  .xl\\:mx-6{\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n\n  .xl\\:my-8{\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n  }\n\n  .xl\\:mx-8{\n    margin-left: 2rem;\n    margin-right: 2rem;\n  }\n\n  .xl\\:my-10{\n    margin-top: 2.5rem;\n    margin-bottom: 2.5rem;\n  }\n\n  .xl\\:mx-10{\n    margin-left: 2.5rem;\n    margin-right: 2.5rem;\n  }\n\n  .xl\\:my-12{\n    margin-top: 3rem;\n    margin-bottom: 3rem;\n  }\n\n  .xl\\:mx-12{\n    margin-left: 3rem;\n    margin-right: 3rem;\n  }\n\n  .xl\\:my-16{\n    margin-top: 4rem;\n    margin-bottom: 4rem;\n  }\n\n  .xl\\:mx-16{\n    margin-left: 4rem;\n    margin-right: 4rem;\n  }\n\n  .xl\\:my-20{\n    margin-top: 5rem;\n    margin-bottom: 5rem;\n  }\n\n  .xl\\:mx-20{\n    margin-left: 5rem;\n    margin-right: 5rem;\n  }\n\n  .xl\\:my-24{\n    margin-top: 6rem;\n    margin-bottom: 6rem;\n  }\n\n  .xl\\:mx-24{\n    margin-left: 6rem;\n    margin-right: 6rem;\n  }\n\n  .xl\\:my-32{\n    margin-top: 8rem;\n    margin-bottom: 8rem;\n  }\n\n  .xl\\:mx-32{\n    margin-left: 8rem;\n    margin-right: 8rem;\n  }\n\n  .xl\\:my-40{\n    margin-top: 10rem;\n    margin-bottom: 10rem;\n  }\n\n  .xl\\:mx-40{\n    margin-left: 10rem;\n    margin-right: 10rem;\n  }\n\n  .xl\\:my-48{\n    margin-top: 12rem;\n    margin-bottom: 12rem;\n  }\n\n  .xl\\:mx-48{\n    margin-left: 12rem;\n    margin-right: 12rem;\n  }\n\n  .xl\\:my-56{\n    margin-top: 14rem;\n    margin-bottom: 14rem;\n  }\n\n  .xl\\:mx-56{\n    margin-left: 14rem;\n    margin-right: 14rem;\n  }\n\n  .xl\\:my-64{\n    margin-top: 16rem;\n    margin-bottom: 16rem;\n  }\n\n  .xl\\:mx-64{\n    margin-left: 16rem;\n    margin-right: 16rem;\n  }\n\n  .xl\\:my-auto{\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n\n  .xl\\:mx-auto{\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .xl\\:my-px{\n    margin-top: 1px;\n    margin-bottom: 1px;\n  }\n\n  .xl\\:mx-px{\n    margin-left: 1px;\n    margin-right: 1px;\n  }\n\n  .xl\\:-my-1{\n    margin-top: -0.25rem;\n    margin-bottom: -0.25rem;\n  }\n\n  .xl\\:-mx-1{\n    margin-left: -0.25rem;\n    margin-right: -0.25rem;\n  }\n\n  .xl\\:-my-2{\n    margin-top: -0.5rem;\n    margin-bottom: -0.5rem;\n  }\n\n  .xl\\:-mx-2{\n    margin-left: -0.5rem;\n    margin-right: -0.5rem;\n  }\n\n  .xl\\:-my-3{\n    margin-top: -0.75rem;\n    margin-bottom: -0.75rem;\n  }\n\n  .xl\\:-mx-3{\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n  }\n\n  .xl\\:-my-4{\n    margin-top: -1rem;\n    margin-bottom: -1rem;\n  }\n\n  .xl\\:-mx-4{\n    margin-left: -1rem;\n    margin-right: -1rem;\n  }\n\n  .xl\\:-my-5{\n    margin-top: -1.25rem;\n    margin-bottom: -1.25rem;\n  }\n\n  .xl\\:-mx-5{\n    margin-left: -1.25rem;\n    margin-right: -1.25rem;\n  }\n\n  .xl\\:-my-6{\n    margin-top: -1.5rem;\n    margin-bottom: -1.5rem;\n  }\n\n  .xl\\:-mx-6{\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n  }\n\n  .xl\\:-my-8{\n    margin-top: -2rem;\n    margin-bottom: -2rem;\n  }\n\n  .xl\\:-mx-8{\n    margin-left: -2rem;\n    margin-right: -2rem;\n  }\n\n  .xl\\:-my-10{\n    margin-top: -2.5rem;\n    margin-bottom: -2.5rem;\n  }\n\n  .xl\\:-mx-10{\n    margin-left: -2.5rem;\n    margin-right: -2.5rem;\n  }\n\n  .xl\\:-my-12{\n    margin-top: -3rem;\n    margin-bottom: -3rem;\n  }\n\n  .xl\\:-mx-12{\n    margin-left: -3rem;\n    margin-right: -3rem;\n  }\n\n  .xl\\:-my-16{\n    margin-top: -4rem;\n    margin-bottom: -4rem;\n  }\n\n  .xl\\:-mx-16{\n    margin-left: -4rem;\n    margin-right: -4rem;\n  }\n\n  .xl\\:-my-20{\n    margin-top: -5rem;\n    margin-bottom: -5rem;\n  }\n\n  .xl\\:-mx-20{\n    margin-left: -5rem;\n    margin-right: -5rem;\n  }\n\n  .xl\\:-my-24{\n    margin-top: -6rem;\n    margin-bottom: -6rem;\n  }\n\n  .xl\\:-mx-24{\n    margin-left: -6rem;\n    margin-right: -6rem;\n  }\n\n  .xl\\:-my-32{\n    margin-top: -8rem;\n    margin-bottom: -8rem;\n  }\n\n  .xl\\:-mx-32{\n    margin-left: -8rem;\n    margin-right: -8rem;\n  }\n\n  .xl\\:-my-40{\n    margin-top: -10rem;\n    margin-bottom: -10rem;\n  }\n\n  .xl\\:-mx-40{\n    margin-left: -10rem;\n    margin-right: -10rem;\n  }\n\n  .xl\\:-my-48{\n    margin-top: -12rem;\n    margin-bottom: -12rem;\n  }\n\n  .xl\\:-mx-48{\n    margin-left: -12rem;\n    margin-right: -12rem;\n  }\n\n  .xl\\:-my-56{\n    margin-top: -14rem;\n    margin-bottom: -14rem;\n  }\n\n  .xl\\:-mx-56{\n    margin-left: -14rem;\n    margin-right: -14rem;\n  }\n\n  .xl\\:-my-64{\n    margin-top: -16rem;\n    margin-bottom: -16rem;\n  }\n\n  .xl\\:-mx-64{\n    margin-left: -16rem;\n    margin-right: -16rem;\n  }\n\n  .xl\\:-my-px{\n    margin-top: -1px;\n    margin-bottom: -1px;\n  }\n\n  .xl\\:-mx-px{\n    margin-left: -1px;\n    margin-right: -1px;\n  }\n\n  .xl\\:mt-0{\n    margin-top: 0;\n  }\n\n  .xl\\:mr-0{\n    margin-right: 0;\n  }\n\n  .xl\\:mb-0{\n    margin-bottom: 0;\n  }\n\n  .xl\\:ml-0{\n    margin-left: 0;\n  }\n\n  .xl\\:mt-1{\n    margin-top: 0.25rem;\n  }\n\n  .xl\\:mr-1{\n    margin-right: 0.25rem;\n  }\n\n  .xl\\:mb-1{\n    margin-bottom: 0.25rem;\n  }\n\n  .xl\\:ml-1{\n    margin-left: 0.25rem;\n  }\n\n  .xl\\:mt-2{\n    margin-top: 0.5rem;\n  }\n\n  .xl\\:mr-2{\n    margin-right: 0.5rem;\n  }\n\n  .xl\\:mb-2{\n    margin-bottom: 0.5rem;\n  }\n\n  .xl\\:ml-2{\n    margin-left: 0.5rem;\n  }\n\n  .xl\\:mt-3{\n    margin-top: 0.75rem;\n  }\n\n  .xl\\:mr-3{\n    margin-right: 0.75rem;\n  }\n\n  .xl\\:mb-3{\n    margin-bottom: 0.75rem;\n  }\n\n  .xl\\:ml-3{\n    margin-left: 0.75rem;\n  }\n\n  .xl\\:mt-4{\n    margin-top: 1rem;\n  }\n\n  .xl\\:mr-4{\n    margin-right: 1rem;\n  }\n\n  .xl\\:mb-4{\n    margin-bottom: 1rem;\n  }\n\n  .xl\\:ml-4{\n    margin-left: 1rem;\n  }\n\n  .xl\\:mt-5{\n    margin-top: 1.25rem;\n  }\n\n  .xl\\:mr-5{\n    margin-right: 1.25rem;\n  }\n\n  .xl\\:mb-5{\n    margin-bottom: 1.25rem;\n  }\n\n  .xl\\:ml-5{\n    margin-left: 1.25rem;\n  }\n\n  .xl\\:mt-6{\n    margin-top: 1.5rem;\n  }\n\n  .xl\\:mr-6{\n    margin-right: 1.5rem;\n  }\n\n  .xl\\:mb-6{\n    margin-bottom: 1.5rem;\n  }\n\n  .xl\\:ml-6{\n    margin-left: 1.5rem;\n  }\n\n  .xl\\:mt-8{\n    margin-top: 2rem;\n  }\n\n  .xl\\:mr-8{\n    margin-right: 2rem;\n  }\n\n  .xl\\:mb-8{\n    margin-bottom: 2rem;\n  }\n\n  .xl\\:ml-8{\n    margin-left: 2rem;\n  }\n\n  .xl\\:mt-10{\n    margin-top: 2.5rem;\n  }\n\n  .xl\\:mr-10{\n    margin-right: 2.5rem;\n  }\n\n  .xl\\:mb-10{\n    margin-bottom: 2.5rem;\n  }\n\n  .xl\\:ml-10{\n    margin-left: 2.5rem;\n  }\n\n  .xl\\:mt-12{\n    margin-top: 3rem;\n  }\n\n  .xl\\:mr-12{\n    margin-right: 3rem;\n  }\n\n  .xl\\:mb-12{\n    margin-bottom: 3rem;\n  }\n\n  .xl\\:ml-12{\n    margin-left: 3rem;\n  }\n\n  .xl\\:mt-16{\n    margin-top: 4rem;\n  }\n\n  .xl\\:mr-16{\n    margin-right: 4rem;\n  }\n\n  .xl\\:mb-16{\n    margin-bottom: 4rem;\n  }\n\n  .xl\\:ml-16{\n    margin-left: 4rem;\n  }\n\n  .xl\\:mt-20{\n    margin-top: 5rem;\n  }\n\n  .xl\\:mr-20{\n    margin-right: 5rem;\n  }\n\n  .xl\\:mb-20{\n    margin-bottom: 5rem;\n  }\n\n  .xl\\:ml-20{\n    margin-left: 5rem;\n  }\n\n  .xl\\:mt-24{\n    margin-top: 6rem;\n  }\n\n  .xl\\:mr-24{\n    margin-right: 6rem;\n  }\n\n  .xl\\:mb-24{\n    margin-bottom: 6rem;\n  }\n\n  .xl\\:ml-24{\n    margin-left: 6rem;\n  }\n\n  .xl\\:mt-32{\n    margin-top: 8rem;\n  }\n\n  .xl\\:mr-32{\n    margin-right: 8rem;\n  }\n\n  .xl\\:mb-32{\n    margin-bottom: 8rem;\n  }\n\n  .xl\\:ml-32{\n    margin-left: 8rem;\n  }\n\n  .xl\\:mt-40{\n    margin-top: 10rem;\n  }\n\n  .xl\\:mr-40{\n    margin-right: 10rem;\n  }\n\n  .xl\\:mb-40{\n    margin-bottom: 10rem;\n  }\n\n  .xl\\:ml-40{\n    margin-left: 10rem;\n  }\n\n  .xl\\:mt-48{\n    margin-top: 12rem;\n  }\n\n  .xl\\:mr-48{\n    margin-right: 12rem;\n  }\n\n  .xl\\:mb-48{\n    margin-bottom: 12rem;\n  }\n\n  .xl\\:ml-48{\n    margin-left: 12rem;\n  }\n\n  .xl\\:mt-56{\n    margin-top: 14rem;\n  }\n\n  .xl\\:mr-56{\n    margin-right: 14rem;\n  }\n\n  .xl\\:mb-56{\n    margin-bottom: 14rem;\n  }\n\n  .xl\\:ml-56{\n    margin-left: 14rem;\n  }\n\n  .xl\\:mt-64{\n    margin-top: 16rem;\n  }\n\n  .xl\\:mr-64{\n    margin-right: 16rem;\n  }\n\n  .xl\\:mb-64{\n    margin-bottom: 16rem;\n  }\n\n  .xl\\:ml-64{\n    margin-left: 16rem;\n  }\n\n  .xl\\:mt-auto{\n    margin-top: auto;\n  }\n\n  .xl\\:mr-auto{\n    margin-right: auto;\n  }\n\n  .xl\\:mb-auto{\n    margin-bottom: auto;\n  }\n\n  .xl\\:ml-auto{\n    margin-left: auto;\n  }\n\n  .xl\\:mt-px{\n    margin-top: 1px;\n  }\n\n  .xl\\:mr-px{\n    margin-right: 1px;\n  }\n\n  .xl\\:mb-px{\n    margin-bottom: 1px;\n  }\n\n  .xl\\:ml-px{\n    margin-left: 1px;\n  }\n\n  .xl\\:-mt-1{\n    margin-top: -0.25rem;\n  }\n\n  .xl\\:-mr-1{\n    margin-right: -0.25rem;\n  }\n\n  .xl\\:-mb-1{\n    margin-bottom: -0.25rem;\n  }\n\n  .xl\\:-ml-1{\n    margin-left: -0.25rem;\n  }\n\n  .xl\\:-mt-2{\n    margin-top: -0.5rem;\n  }\n\n  .xl\\:-mr-2{\n    margin-right: -0.5rem;\n  }\n\n  .xl\\:-mb-2{\n    margin-bottom: -0.5rem;\n  }\n\n  .xl\\:-ml-2{\n    margin-left: -0.5rem;\n  }\n\n  .xl\\:-mt-3{\n    margin-top: -0.75rem;\n  }\n\n  .xl\\:-mr-3{\n    margin-right: -0.75rem;\n  }\n\n  .xl\\:-mb-3{\n    margin-bottom: -0.75rem;\n  }\n\n  .xl\\:-ml-3{\n    margin-left: -0.75rem;\n  }\n\n  .xl\\:-mt-4{\n    margin-top: -1rem;\n  }\n\n  .xl\\:-mr-4{\n    margin-right: -1rem;\n  }\n\n  .xl\\:-mb-4{\n    margin-bottom: -1rem;\n  }\n\n  .xl\\:-ml-4{\n    margin-left: -1rem;\n  }\n\n  .xl\\:-mt-5{\n    margin-top: -1.25rem;\n  }\n\n  .xl\\:-mr-5{\n    margin-right: -1.25rem;\n  }\n\n  .xl\\:-mb-5{\n    margin-bottom: -1.25rem;\n  }\n\n  .xl\\:-ml-5{\n    margin-left: -1.25rem;\n  }\n\n  .xl\\:-mt-6{\n    margin-top: -1.5rem;\n  }\n\n  .xl\\:-mr-6{\n    margin-right: -1.5rem;\n  }\n\n  .xl\\:-mb-6{\n    margin-bottom: -1.5rem;\n  }\n\n  .xl\\:-ml-6{\n    margin-left: -1.5rem;\n  }\n\n  .xl\\:-mt-8{\n    margin-top: -2rem;\n  }\n\n  .xl\\:-mr-8{\n    margin-right: -2rem;\n  }\n\n  .xl\\:-mb-8{\n    margin-bottom: -2rem;\n  }\n\n  .xl\\:-ml-8{\n    margin-left: -2rem;\n  }\n\n  .xl\\:-mt-10{\n    margin-top: -2.5rem;\n  }\n\n  .xl\\:-mr-10{\n    margin-right: -2.5rem;\n  }\n\n  .xl\\:-mb-10{\n    margin-bottom: -2.5rem;\n  }\n\n  .xl\\:-ml-10{\n    margin-left: -2.5rem;\n  }\n\n  .xl\\:-mt-12{\n    margin-top: -3rem;\n  }\n\n  .xl\\:-mr-12{\n    margin-right: -3rem;\n  }\n\n  .xl\\:-mb-12{\n    margin-bottom: -3rem;\n  }\n\n  .xl\\:-ml-12{\n    margin-left: -3rem;\n  }\n\n  .xl\\:-mt-16{\n    margin-top: -4rem;\n  }\n\n  .xl\\:-mr-16{\n    margin-right: -4rem;\n  }\n\n  .xl\\:-mb-16{\n    margin-bottom: -4rem;\n  }\n\n  .xl\\:-ml-16{\n    margin-left: -4rem;\n  }\n\n  .xl\\:-mt-20{\n    margin-top: -5rem;\n  }\n\n  .xl\\:-mr-20{\n    margin-right: -5rem;\n  }\n\n  .xl\\:-mb-20{\n    margin-bottom: -5rem;\n  }\n\n  .xl\\:-ml-20{\n    margin-left: -5rem;\n  }\n\n  .xl\\:-mt-24{\n    margin-top: -6rem;\n  }\n\n  .xl\\:-mr-24{\n    margin-right: -6rem;\n  }\n\n  .xl\\:-mb-24{\n    margin-bottom: -6rem;\n  }\n\n  .xl\\:-ml-24{\n    margin-left: -6rem;\n  }\n\n  .xl\\:-mt-32{\n    margin-top: -8rem;\n  }\n\n  .xl\\:-mr-32{\n    margin-right: -8rem;\n  }\n\n  .xl\\:-mb-32{\n    margin-bottom: -8rem;\n  }\n\n  .xl\\:-ml-32{\n    margin-left: -8rem;\n  }\n\n  .xl\\:-mt-40{\n    margin-top: -10rem;\n  }\n\n  .xl\\:-mr-40{\n    margin-right: -10rem;\n  }\n\n  .xl\\:-mb-40{\n    margin-bottom: -10rem;\n  }\n\n  .xl\\:-ml-40{\n    margin-left: -10rem;\n  }\n\n  .xl\\:-mt-48{\n    margin-top: -12rem;\n  }\n\n  .xl\\:-mr-48{\n    margin-right: -12rem;\n  }\n\n  .xl\\:-mb-48{\n    margin-bottom: -12rem;\n  }\n\n  .xl\\:-ml-48{\n    margin-left: -12rem;\n  }\n\n  .xl\\:-mt-56{\n    margin-top: -14rem;\n  }\n\n  .xl\\:-mr-56{\n    margin-right: -14rem;\n  }\n\n  .xl\\:-mb-56{\n    margin-bottom: -14rem;\n  }\n\n  .xl\\:-ml-56{\n    margin-left: -14rem;\n  }\n\n  .xl\\:-mt-64{\n    margin-top: -16rem;\n  }\n\n  .xl\\:-mr-64{\n    margin-right: -16rem;\n  }\n\n  .xl\\:-mb-64{\n    margin-bottom: -16rem;\n  }\n\n  .xl\\:-ml-64{\n    margin-left: -16rem;\n  }\n\n  .xl\\:-mt-px{\n    margin-top: -1px;\n  }\n\n  .xl\\:-mr-px{\n    margin-right: -1px;\n  }\n\n  .xl\\:-mb-px{\n    margin-bottom: -1px;\n  }\n\n  .xl\\:-ml-px{\n    margin-left: -1px;\n  }\n\n  .xl\\:max-h-full{\n    max-height: 100%;\n  }\n\n  .xl\\:max-h-screen{\n    max-height: 100vh;\n  }\n\n  .xl\\:max-w-xs{\n    max-width: 20rem;\n  }\n\n  .xl\\:max-w-sm{\n    max-width: 24rem;\n  }\n\n  .xl\\:max-w-md{\n    max-width: 28rem;\n  }\n\n  .xl\\:max-w-lg{\n    max-width: 32rem;\n  }\n\n  .xl\\:max-w-xl{\n    max-width: 36rem;\n  }\n\n  .xl\\:max-w-2xl{\n    max-width: 42rem;\n  }\n\n  .xl\\:max-w-3xl{\n    max-width: 48rem;\n  }\n\n  .xl\\:max-w-4xl{\n    max-width: 56rem;\n  }\n\n  .xl\\:max-w-5xl{\n    max-width: 64rem;\n  }\n\n  .xl\\:max-w-6xl{\n    max-width: 72rem;\n  }\n\n  .xl\\:max-w-full{\n    max-width: 100%;\n  }\n\n  .xl\\:min-h-0{\n    min-height: 0;\n  }\n\n  .xl\\:min-h-full{\n    min-height: 100%;\n  }\n\n  .xl\\:min-h-screen{\n    min-height: 100vh;\n  }\n\n  .xl\\:min-w-0{\n    min-width: 0;\n  }\n\n  .xl\\:min-w-full{\n    min-width: 100%;\n  }\n\n  .xl\\:object-contain{\n    -o-object-fit: contain;\n       object-fit: contain;\n  }\n\n  .xl\\:object-cover{\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n\n  .xl\\:object-fill{\n    -o-object-fit: fill;\n       object-fit: fill;\n  }\n\n  .xl\\:object-none{\n    -o-object-fit: none;\n       object-fit: none;\n  }\n\n  .xl\\:object-scale-down{\n    -o-object-fit: scale-down;\n       object-fit: scale-down;\n  }\n\n  .xl\\:object-bottom{\n    -o-object-position: bottom;\n       object-position: bottom;\n  }\n\n  .xl\\:object-center{\n    -o-object-position: center;\n       object-position: center;\n  }\n\n  .xl\\:object-left{\n    -o-object-position: left;\n       object-position: left;\n  }\n\n  .xl\\:object-left-bottom{\n    -o-object-position: left bottom;\n       object-position: left bottom;\n  }\n\n  .xl\\:object-left-top{\n    -o-object-position: left top;\n       object-position: left top;\n  }\n\n  .xl\\:object-right{\n    -o-object-position: right;\n       object-position: right;\n  }\n\n  .xl\\:object-right-bottom{\n    -o-object-position: right bottom;\n       object-position: right bottom;\n  }\n\n  .xl\\:object-right-top{\n    -o-object-position: right top;\n       object-position: right top;\n  }\n\n  .xl\\:object-top{\n    -o-object-position: top;\n       object-position: top;\n  }\n\n  .xl\\:opacity-0{\n    opacity: 0;\n  }\n\n  .xl\\:opacity-25{\n    opacity: 0.25;\n  }\n\n  .xl\\:opacity-50{\n    opacity: 0.5;\n  }\n\n  .xl\\:opacity-75{\n    opacity: 0.75;\n  }\n\n  .xl\\:opacity-100{\n    opacity: 1;\n  }\n\n  .xl\\:outline-none{\n    outline: 0;\n  }\n\n  .xl\\:focus\\:outline-none:focus{\n    outline: 0;\n  }\n\n  .xl\\:overflow-auto{\n    overflow: auto;\n  }\n\n  .xl\\:overflow-hidden{\n    overflow: hidden;\n  }\n\n  .xl\\:overflow-visible{\n    overflow: visible;\n  }\n\n  .xl\\:overflow-scroll{\n    overflow: scroll;\n  }\n\n  .xl\\:overflow-x-auto{\n    overflow-x: auto;\n  }\n\n  .xl\\:overflow-y-auto{\n    overflow-y: auto;\n  }\n\n  .xl\\:overflow-x-hidden{\n    overflow-x: hidden;\n  }\n\n  .xl\\:overflow-y-hidden{\n    overflow-y: hidden;\n  }\n\n  .xl\\:overflow-x-visible{\n    overflow-x: visible;\n  }\n\n  .xl\\:overflow-y-visible{\n    overflow-y: visible;\n  }\n\n  .xl\\:overflow-x-scroll{\n    overflow-x: scroll;\n  }\n\n  .xl\\:overflow-y-scroll{\n    overflow-y: scroll;\n  }\n\n  .xl\\:scrolling-touch{\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .xl\\:scrolling-auto{\n    -webkit-overflow-scrolling: auto;\n  }\n\n  .xl\\:p-0{\n    padding: 0;\n  }\n\n  .xl\\:p-1{\n    padding: 0.25rem;\n  }\n\n  .xl\\:p-2{\n    padding: 0.5rem;\n  }\n\n  .xl\\:p-3{\n    padding: 0.75rem;\n  }\n\n  .xl\\:p-4{\n    padding: 1rem;\n  }\n\n  .xl\\:p-5{\n    padding: 1.25rem;\n  }\n\n  .xl\\:p-6{\n    padding: 1.5rem;\n  }\n\n  .xl\\:p-8{\n    padding: 2rem;\n  }\n\n  .xl\\:p-10{\n    padding: 2.5rem;\n  }\n\n  .xl\\:p-12{\n    padding: 3rem;\n  }\n\n  .xl\\:p-16{\n    padding: 4rem;\n  }\n\n  .xl\\:p-20{\n    padding: 5rem;\n  }\n\n  .xl\\:p-24{\n    padding: 6rem;\n  }\n\n  .xl\\:p-32{\n    padding: 8rem;\n  }\n\n  .xl\\:p-40{\n    padding: 10rem;\n  }\n\n  .xl\\:p-48{\n    padding: 12rem;\n  }\n\n  .xl\\:p-56{\n    padding: 14rem;\n  }\n\n  .xl\\:p-64{\n    padding: 16rem;\n  }\n\n  .xl\\:p-px{\n    padding: 1px;\n  }\n\n  .xl\\:py-0{\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  .xl\\:px-0{\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .xl\\:py-1{\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n  }\n\n  .xl\\:px-1{\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n  }\n\n  .xl\\:py-2{\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n  }\n\n  .xl\\:px-2{\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n\n  .xl\\:py-3{\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n  }\n\n  .xl\\:px-3{\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  }\n\n  .xl\\:py-4{\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .xl\\:px-4{\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  .xl\\:py-5{\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem;\n  }\n\n  .xl\\:px-5{\n    padding-left: 1.25rem;\n    padding-right: 1.25rem;\n  }\n\n  .xl\\:py-6{\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n\n  .xl\\:px-6{\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .xl\\:py-8{\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n  }\n\n  .xl\\:px-8{\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .xl\\:py-10{\n    padding-top: 2.5rem;\n    padding-bottom: 2.5rem;\n  }\n\n  .xl\\:px-10{\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n  }\n\n  .xl\\:py-12{\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n  }\n\n  .xl\\:px-12{\n    padding-left: 3rem;\n    padding-right: 3rem;\n  }\n\n  .xl\\:py-16{\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n  }\n\n  .xl\\:px-16{\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n\n  .xl\\:py-20{\n    padding-top: 5rem;\n    padding-bottom: 5rem;\n  }\n\n  .xl\\:px-20{\n    padding-left: 5rem;\n    padding-right: 5rem;\n  }\n\n  .xl\\:py-24{\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n\n  .xl\\:px-24{\n    padding-left: 6rem;\n    padding-right: 6rem;\n  }\n\n  .xl\\:py-32{\n    padding-top: 8rem;\n    padding-bottom: 8rem;\n  }\n\n  .xl\\:px-32{\n    padding-left: 8rem;\n    padding-right: 8rem;\n  }\n\n  .xl\\:py-40{\n    padding-top: 10rem;\n    padding-bottom: 10rem;\n  }\n\n  .xl\\:px-40{\n    padding-left: 10rem;\n    padding-right: 10rem;\n  }\n\n  .xl\\:py-48{\n    padding-top: 12rem;\n    padding-bottom: 12rem;\n  }\n\n  .xl\\:px-48{\n    padding-left: 12rem;\n    padding-right: 12rem;\n  }\n\n  .xl\\:py-56{\n    padding-top: 14rem;\n    padding-bottom: 14rem;\n  }\n\n  .xl\\:px-56{\n    padding-left: 14rem;\n    padding-right: 14rem;\n  }\n\n  .xl\\:py-64{\n    padding-top: 16rem;\n    padding-bottom: 16rem;\n  }\n\n  .xl\\:px-64{\n    padding-left: 16rem;\n    padding-right: 16rem;\n  }\n\n  .xl\\:py-px{\n    padding-top: 1px;\n    padding-bottom: 1px;\n  }\n\n  .xl\\:px-px{\n    padding-left: 1px;\n    padding-right: 1px;\n  }\n\n  .xl\\:pt-0{\n    padding-top: 0;\n  }\n\n  .xl\\:pr-0{\n    padding-right: 0;\n  }\n\n  .xl\\:pb-0{\n    padding-bottom: 0;\n  }\n\n  .xl\\:pl-0{\n    padding-left: 0;\n  }\n\n  .xl\\:pt-1{\n    padding-top: 0.25rem;\n  }\n\n  .xl\\:pr-1{\n    padding-right: 0.25rem;\n  }\n\n  .xl\\:pb-1{\n    padding-bottom: 0.25rem;\n  }\n\n  .xl\\:pl-1{\n    padding-left: 0.25rem;\n  }\n\n  .xl\\:pt-2{\n    padding-top: 0.5rem;\n  }\n\n  .xl\\:pr-2{\n    padding-right: 0.5rem;\n  }\n\n  .xl\\:pb-2{\n    padding-bottom: 0.5rem;\n  }\n\n  .xl\\:pl-2{\n    padding-left: 0.5rem;\n  }\n\n  .xl\\:pt-3{\n    padding-top: 0.75rem;\n  }\n\n  .xl\\:pr-3{\n    padding-right: 0.75rem;\n  }\n\n  .xl\\:pb-3{\n    padding-bottom: 0.75rem;\n  }\n\n  .xl\\:pl-3{\n    padding-left: 0.75rem;\n  }\n\n  .xl\\:pt-4{\n    padding-top: 1rem;\n  }\n\n  .xl\\:pr-4{\n    padding-right: 1rem;\n  }\n\n  .xl\\:pb-4{\n    padding-bottom: 1rem;\n  }\n\n  .xl\\:pl-4{\n    padding-left: 1rem;\n  }\n\n  .xl\\:pt-5{\n    padding-top: 1.25rem;\n  }\n\n  .xl\\:pr-5{\n    padding-right: 1.25rem;\n  }\n\n  .xl\\:pb-5{\n    padding-bottom: 1.25rem;\n  }\n\n  .xl\\:pl-5{\n    padding-left: 1.25rem;\n  }\n\n  .xl\\:pt-6{\n    padding-top: 1.5rem;\n  }\n\n  .xl\\:pr-6{\n    padding-right: 1.5rem;\n  }\n\n  .xl\\:pb-6{\n    padding-bottom: 1.5rem;\n  }\n\n  .xl\\:pl-6{\n    padding-left: 1.5rem;\n  }\n\n  .xl\\:pt-8{\n    padding-top: 2rem;\n  }\n\n  .xl\\:pr-8{\n    padding-right: 2rem;\n  }\n\n  .xl\\:pb-8{\n    padding-bottom: 2rem;\n  }\n\n  .xl\\:pl-8{\n    padding-left: 2rem;\n  }\n\n  .xl\\:pt-10{\n    padding-top: 2.5rem;\n  }\n\n  .xl\\:pr-10{\n    padding-right: 2.5rem;\n  }\n\n  .xl\\:pb-10{\n    padding-bottom: 2.5rem;\n  }\n\n  .xl\\:pl-10{\n    padding-left: 2.5rem;\n  }\n\n  .xl\\:pt-12{\n    padding-top: 3rem;\n  }\n\n  .xl\\:pr-12{\n    padding-right: 3rem;\n  }\n\n  .xl\\:pb-12{\n    padding-bottom: 3rem;\n  }\n\n  .xl\\:pl-12{\n    padding-left: 3rem;\n  }\n\n  .xl\\:pt-16{\n    padding-top: 4rem;\n  }\n\n  .xl\\:pr-16{\n    padding-right: 4rem;\n  }\n\n  .xl\\:pb-16{\n    padding-bottom: 4rem;\n  }\n\n  .xl\\:pl-16{\n    padding-left: 4rem;\n  }\n\n  .xl\\:pt-20{\n    padding-top: 5rem;\n  }\n\n  .xl\\:pr-20{\n    padding-right: 5rem;\n  }\n\n  .xl\\:pb-20{\n    padding-bottom: 5rem;\n  }\n\n  .xl\\:pl-20{\n    padding-left: 5rem;\n  }\n\n  .xl\\:pt-24{\n    padding-top: 6rem;\n  }\n\n  .xl\\:pr-24{\n    padding-right: 6rem;\n  }\n\n  .xl\\:pb-24{\n    padding-bottom: 6rem;\n  }\n\n  .xl\\:pl-24{\n    padding-left: 6rem;\n  }\n\n  .xl\\:pt-32{\n    padding-top: 8rem;\n  }\n\n  .xl\\:pr-32{\n    padding-right: 8rem;\n  }\n\n  .xl\\:pb-32{\n    padding-bottom: 8rem;\n  }\n\n  .xl\\:pl-32{\n    padding-left: 8rem;\n  }\n\n  .xl\\:pt-40{\n    padding-top: 10rem;\n  }\n\n  .xl\\:pr-40{\n    padding-right: 10rem;\n  }\n\n  .xl\\:pb-40{\n    padding-bottom: 10rem;\n  }\n\n  .xl\\:pl-40{\n    padding-left: 10rem;\n  }\n\n  .xl\\:pt-48{\n    padding-top: 12rem;\n  }\n\n  .xl\\:pr-48{\n    padding-right: 12rem;\n  }\n\n  .xl\\:pb-48{\n    padding-bottom: 12rem;\n  }\n\n  .xl\\:pl-48{\n    padding-left: 12rem;\n  }\n\n  .xl\\:pt-56{\n    padding-top: 14rem;\n  }\n\n  .xl\\:pr-56{\n    padding-right: 14rem;\n  }\n\n  .xl\\:pb-56{\n    padding-bottom: 14rem;\n  }\n\n  .xl\\:pl-56{\n    padding-left: 14rem;\n  }\n\n  .xl\\:pt-64{\n    padding-top: 16rem;\n  }\n\n  .xl\\:pr-64{\n    padding-right: 16rem;\n  }\n\n  .xl\\:pb-64{\n    padding-bottom: 16rem;\n  }\n\n  .xl\\:pl-64{\n    padding-left: 16rem;\n  }\n\n  .xl\\:pt-px{\n    padding-top: 1px;\n  }\n\n  .xl\\:pr-px{\n    padding-right: 1px;\n  }\n\n  .xl\\:pb-px{\n    padding-bottom: 1px;\n  }\n\n  .xl\\:pl-px{\n    padding-left: 1px;\n  }\n\n  .xl\\:pointer-events-none{\n    pointer-events: none;\n  }\n\n  .xl\\:pointer-events-auto{\n    pointer-events: auto;\n  }\n\n  .xl\\:static{\n    position: static;\n  }\n\n  .xl\\:fixed{\n    position: fixed;\n  }\n\n  .xl\\:absolute{\n    position: absolute;\n  }\n\n  .xl\\:relative{\n    position: relative;\n  }\n\n  .xl\\:sticky{\n    position: -webkit-sticky;\n    position: sticky;\n  }\n\n  .xl\\:inset-0{\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n\n  .xl\\:inset-auto{\n    top: auto;\n    right: auto;\n    bottom: auto;\n    left: auto;\n  }\n\n  .xl\\:inset-y-0{\n    top: 0;\n    bottom: 0;\n  }\n\n  .xl\\:inset-x-0{\n    right: 0;\n    left: 0;\n  }\n\n  .xl\\:inset-y-auto{\n    top: auto;\n    bottom: auto;\n  }\n\n  .xl\\:inset-x-auto{\n    right: auto;\n    left: auto;\n  }\n\n  .xl\\:top-0{\n    top: 0;\n  }\n\n  .xl\\:right-0{\n    right: 0;\n  }\n\n  .xl\\:bottom-0{\n    bottom: 0;\n  }\n\n  .xl\\:left-0{\n    left: 0;\n  }\n\n  .xl\\:top-auto{\n    top: auto;\n  }\n\n  .xl\\:right-auto{\n    right: auto;\n  }\n\n  .xl\\:bottom-auto{\n    bottom: auto;\n  }\n\n  .xl\\:left-auto{\n    left: auto;\n  }\n\n  .xl\\:resize-none{\n    resize: none;\n  }\n\n  .xl\\:resize-y{\n    resize: vertical;\n  }\n\n  .xl\\:resize-x{\n    resize: horizontal;\n  }\n\n  .xl\\:resize{\n    resize: both;\n  }\n\n  .xl\\:shadow{\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .xl\\:shadow-md{\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  }\n\n  .xl\\:shadow-lg{\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  }\n\n  .xl\\:shadow-xl{\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  }\n\n  .xl\\:shadow-2xl{\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  }\n\n  .xl\\:shadow-inner{\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .xl\\:shadow-outline{\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  }\n\n  .xl\\:shadow-none{\n    box-shadow: none;\n  }\n\n  .xl\\:hover\\:shadow:hover{\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .xl\\:hover\\:shadow-md:hover{\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  }\n\n  .xl\\:hover\\:shadow-lg:hover{\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  }\n\n  .xl\\:hover\\:shadow-xl:hover{\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  }\n\n  .xl\\:hover\\:shadow-2xl:hover{\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  }\n\n  .xl\\:hover\\:shadow-inner:hover{\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .xl\\:hover\\:shadow-outline:hover{\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  }\n\n  .xl\\:hover\\:shadow-none:hover{\n    box-shadow: none;\n  }\n\n  .xl\\:focus\\:shadow:focus{\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .xl\\:focus\\:shadow-md:focus{\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  }\n\n  .xl\\:focus\\:shadow-lg:focus{\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  }\n\n  .xl\\:focus\\:shadow-xl:focus{\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  }\n\n  .xl\\:focus\\:shadow-2xl:focus{\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  }\n\n  .xl\\:focus\\:shadow-inner:focus{\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  }\n\n  .xl\\:focus\\:shadow-outline:focus{\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  }\n\n  .xl\\:focus\\:shadow-none:focus{\n    box-shadow: none;\n  }\n\n  .xl\\:fill-current{\n    fill: currentColor;\n  }\n\n  .xl\\:stroke-current{\n    stroke: currentColor;\n  }\n\n  .xl\\:table-auto{\n    table-layout: auto;\n  }\n\n  .xl\\:table-fixed{\n    table-layout: fixed;\n  }\n\n  .xl\\:text-left{\n    text-align: left;\n  }\n\n  .xl\\:text-center{\n    text-align: center;\n  }\n\n  .xl\\:text-right{\n    text-align: right;\n  }\n\n  .xl\\:text-justify{\n    text-align: justify;\n  }\n\n  .xl\\:text-transparent{\n    color: transparent;\n  }\n\n  .xl\\:text-black{\n    color: #000;\n  }\n\n  .xl\\:text-white{\n    color: #fff;\n  }\n\n  .xl\\:text-gray-100{\n    color: hsl(216, 33%, 97%);\n  }\n\n  .xl\\:text-gray-200{\n    color: hsl(214, 15%, 91%);\n  }\n\n  .xl\\:text-gray-300{\n    color: hsl(210, 16%, 82%);\n  }\n\n  .xl\\:text-gray-400{\n    color: hsl(211, 13%, 65%);\n  }\n\n  .xl\\:text-gray-500{\n    color: hsl(211, 10%, 53%);\n  }\n\n  .xl\\:text-gray-600{\n    color: hsl(211, 12%, 43%);\n  }\n\n  .xl\\:text-gray-700{\n    color: hsl(209, 14%, 37%);\n  }\n\n  .xl\\:text-gray-800{\n    color: hsl(209, 18%, 30%);\n  }\n\n  .xl\\:text-gray-900{\n    color: hsl(209, 20%, 25%);\n  }\n\n  .xl\\:text-gray-1000{\n    color: hsl(210, 24%, 16%);\n  }\n\n  .xl\\:text-red-100{\n    color: hsl(360, 100%, 95%);\n  }\n\n  .xl\\:text-red-200{\n    color: hsl(360, 100%, 87%);\n  }\n\n  .xl\\:text-red-300{\n    color: hsl(360, 100%, 80%);\n  }\n\n  .xl\\:text-red-400{\n    color: hsl(360, 91%, 69%);\n  }\n\n  .xl\\:text-red-500{\n    color: hsl(360, 83%, 62%);\n  }\n\n  .xl\\:text-red-600{\n    color: hsl(356, 75%, 53%);\n  }\n\n  .xl\\:text-red-700{\n    color: hsl(354, 85%, 44%);\n  }\n\n  .xl\\:text-red-800{\n    color: hsl(352, 90%, 35%);\n  }\n\n  .xl\\:text-red-900{\n    color: hsl(350, 94%, 28%);\n  }\n\n  .xl\\:text-red-1000{\n    color: hsl(348, 94%, 20%);\n  }\n\n  .xl\\:text-orange-100{\n    color: #fffaf0;\n  }\n\n  .xl\\:text-orange-200{\n    color: #feebc8;\n  }\n\n  .xl\\:text-orange-300{\n    color: #fbd38d;\n  }\n\n  .xl\\:text-orange-400{\n    color: #f6ad55;\n  }\n\n  .xl\\:text-orange-500{\n    color: #ed8936;\n  }\n\n  .xl\\:text-orange-600{\n    color: #dd6b20;\n  }\n\n  .xl\\:text-orange-700{\n    color: #c05621;\n  }\n\n  .xl\\:text-orange-800{\n    color: #9c4221;\n  }\n\n  .xl\\:text-orange-900{\n    color: #7b341e;\n  }\n\n  .xl\\:text-yellow-100{\n    color: hsl(15, 86%, 30%);\n  }\n\n  .xl\\:text-yellow-200{\n    color: hsl(22, 82%, 39%);\n  }\n\n  .xl\\:text-yellow-300{\n    color: hsl(29, 80%, 44%);\n  }\n\n  .xl\\:text-yellow-400{\n    color: hsl(36, 77%, 49%);\n  }\n\n  .xl\\:text-yellow-500{\n    color: hsl(42, 87%, 55%);\n  }\n\n  .xl\\:text-yellow-600{\n    color: hsl(44, 92%, 63%);\n  }\n\n  .xl\\:text-yellow-700{\n    color: hsl(48, 94%, 68%);\n  }\n\n  .xl\\:text-yellow-800{\n    color: hsl(48, 95%, 76%);\n  }\n\n  .xl\\:text-yellow-900{\n    color: hsl(48, 100%, 88%);\n  }\n\n  .xl\\:text-yellow-1000{\n    color: hsl(49, 100%, 96%);\n  }\n\n  .xl\\:text-green-100{\n    color: #f0fff4;\n  }\n\n  .xl\\:text-green-200{\n    color: #c6f6d5;\n  }\n\n  .xl\\:text-green-300{\n    color: #9ae6b4;\n  }\n\n  .xl\\:text-green-400{\n    color: #68d391;\n  }\n\n  .xl\\:text-green-500{\n    color: #48bb78;\n  }\n\n  .xl\\:text-green-600{\n    color: #38a169;\n  }\n\n  .xl\\:text-green-700{\n    color: #2f855a;\n  }\n\n  .xl\\:text-green-800{\n    color: #276749;\n  }\n\n  .xl\\:text-green-900{\n    color: #22543d;\n  }\n\n  .xl\\:text-teal-100{\n    color: hsl(170, 97%, 15%);\n  }\n\n  .xl\\:text-teal-200{\n    color: hsl(168, 80%, 23%);\n  }\n\n  .xl\\:text-teal-300{\n    color: hsl(166, 72%, 28%);\n  }\n\n  .xl\\:text-teal-400{\n    color: hsl(164, 71%, 34%);\n  }\n\n  .xl\\:text-teal-500{\n    color: hsl(162, 63%, 41%);\n  }\n\n  .xl\\:text-teal-600{\n    color: hsl(160, 51%, 49%);\n  }\n\n  .xl\\:text-teal-700{\n    color: hsl(158, 58%, 62%);\n  }\n\n  .xl\\:text-teal-800{\n    color: hsl(156, 73%, 74%);\n  }\n\n  .xl\\:text-teal-900{\n    color: hsl(154, 75%, 87%);\n  }\n\n  .xl\\:text-teal-1000{\n    color: hsl(152, 68%, 96%);\n  }\n\n  .xl\\:text-blue-100{\n    color: hsl(195, 100%, 95%);\n  }\n\n  .xl\\:text-blue-200{\n    color: hsl(195, 100%, 85%);\n  }\n\n  .xl\\:text-blue-300{\n    color: hsl(195, 97%, 75%);\n  }\n\n  .xl\\:text-blue-400{\n    color: hsl(196, 94%, 67%);\n  }\n\n  .xl\\:text-blue-500{\n    color: hsl(197, 92%, 61%);\n  }\n\n  .xl\\:text-blue-600{\n    color: hsl(199, 84%, 55%);\n  }\n\n  .xl\\:text-blue-700{\n    color: hsl(201, 79%, 46%);\n  }\n\n  .xl\\:text-blue-800{\n    color: hsl(202, 83%, 41%);\n  }\n\n  .xl\\:text-blue-900{\n    color: hsl(203, 87%, 34%);\n  }\n\n  .xl\\:text-blue-1000{\n    color: hsl(204, 96%, 27%);\n  }\n\n  .xl\\:text-indigo-100{\n    color: hsl(221, 68%, 93%);\n  }\n\n  .xl\\:text-indigo-200{\n    color: hsl(221, 78%, 86%);\n  }\n\n  .xl\\:text-indigo-300{\n    color: hsl(224, 67%, 76%);\n  }\n\n  .xl\\:text-indigo-400{\n    color: hsl(225, 57%, 67%);\n  }\n\n  .xl\\:text-indigo-500{\n    color: hsl(227, 50%, 59%);\n  }\n\n  .xl\\:text-indigo-600{\n    color: hsl(227, 42%, 51%);\n  }\n\n  .xl\\:text-indigo-700{\n    color: hsl(228, 45%, 45%);\n  }\n\n  .xl\\:text-indigo-800{\n    color: hsl(230, 49%, 41%);\n  }\n\n  .xl\\:text-indigo-900{\n    color: hsl(232, 51%, 36%);\n  }\n\n  .xl\\:text-indigo-1000{\n    color: hsl(234, 62%, 26%);\n  }\n\n  .xl\\:text-purple-100{\n    color: #faf5ff;\n  }\n\n  .xl\\:text-purple-200{\n    color: #e9d8fd;\n  }\n\n  .xl\\:text-purple-300{\n    color: #d6bcfa;\n  }\n\n  .xl\\:text-purple-400{\n    color: #b794f4;\n  }\n\n  .xl\\:text-purple-500{\n    color: #9f7aea;\n  }\n\n  .xl\\:text-purple-600{\n    color: #805ad5;\n  }\n\n  .xl\\:text-purple-700{\n    color: #6b46c1;\n  }\n\n  .xl\\:text-purple-800{\n    color: #553c9a;\n  }\n\n  .xl\\:text-purple-900{\n    color: #44337a;\n  }\n\n  .xl\\:text-pink-100{\n    color: #fff5f7;\n  }\n\n  .xl\\:text-pink-200{\n    color: #fed7e2;\n  }\n\n  .xl\\:text-pink-300{\n    color: #fbb6ce;\n  }\n\n  .xl\\:text-pink-400{\n    color: #f687b3;\n  }\n\n  .xl\\:text-pink-500{\n    color: #ed64a6;\n  }\n\n  .xl\\:text-pink-600{\n    color: #d53f8c;\n  }\n\n  .xl\\:text-pink-700{\n    color: #b83280;\n  }\n\n  .xl\\:text-pink-800{\n    color: #97266d;\n  }\n\n  .xl\\:text-pink-900{\n    color: #702459;\n  }\n\n  .xl\\:hover\\:text-transparent:hover{\n    color: transparent;\n  }\n\n  .xl\\:hover\\:text-black:hover{\n    color: #000;\n  }\n\n  .xl\\:hover\\:text-white:hover{\n    color: #fff;\n  }\n\n  .xl\\:hover\\:text-gray-100:hover{\n    color: hsl(216, 33%, 97%);\n  }\n\n  .xl\\:hover\\:text-gray-200:hover{\n    color: hsl(214, 15%, 91%);\n  }\n\n  .xl\\:hover\\:text-gray-300:hover{\n    color: hsl(210, 16%, 82%);\n  }\n\n  .xl\\:hover\\:text-gray-400:hover{\n    color: hsl(211, 13%, 65%);\n  }\n\n  .xl\\:hover\\:text-gray-500:hover{\n    color: hsl(211, 10%, 53%);\n  }\n\n  .xl\\:hover\\:text-gray-600:hover{\n    color: hsl(211, 12%, 43%);\n  }\n\n  .xl\\:hover\\:text-gray-700:hover{\n    color: hsl(209, 14%, 37%);\n  }\n\n  .xl\\:hover\\:text-gray-800:hover{\n    color: hsl(209, 18%, 30%);\n  }\n\n  .xl\\:hover\\:text-gray-900:hover{\n    color: hsl(209, 20%, 25%);\n  }\n\n  .xl\\:hover\\:text-gray-1000:hover{\n    color: hsl(210, 24%, 16%);\n  }\n\n  .xl\\:hover\\:text-red-100:hover{\n    color: hsl(360, 100%, 95%);\n  }\n\n  .xl\\:hover\\:text-red-200:hover{\n    color: hsl(360, 100%, 87%);\n  }\n\n  .xl\\:hover\\:text-red-300:hover{\n    color: hsl(360, 100%, 80%);\n  }\n\n  .xl\\:hover\\:text-red-400:hover{\n    color: hsl(360, 91%, 69%);\n  }\n\n  .xl\\:hover\\:text-red-500:hover{\n    color: hsl(360, 83%, 62%);\n  }\n\n  .xl\\:hover\\:text-red-600:hover{\n    color: hsl(356, 75%, 53%);\n  }\n\n  .xl\\:hover\\:text-red-700:hover{\n    color: hsl(354, 85%, 44%);\n  }\n\n  .xl\\:hover\\:text-red-800:hover{\n    color: hsl(352, 90%, 35%);\n  }\n\n  .xl\\:hover\\:text-red-900:hover{\n    color: hsl(350, 94%, 28%);\n  }\n\n  .xl\\:hover\\:text-red-1000:hover{\n    color: hsl(348, 94%, 20%);\n  }\n\n  .xl\\:hover\\:text-orange-100:hover{\n    color: #fffaf0;\n  }\n\n  .xl\\:hover\\:text-orange-200:hover{\n    color: #feebc8;\n  }\n\n  .xl\\:hover\\:text-orange-300:hover{\n    color: #fbd38d;\n  }\n\n  .xl\\:hover\\:text-orange-400:hover{\n    color: #f6ad55;\n  }\n\n  .xl\\:hover\\:text-orange-500:hover{\n    color: #ed8936;\n  }\n\n  .xl\\:hover\\:text-orange-600:hover{\n    color: #dd6b20;\n  }\n\n  .xl\\:hover\\:text-orange-700:hover{\n    color: #c05621;\n  }\n\n  .xl\\:hover\\:text-orange-800:hover{\n    color: #9c4221;\n  }\n\n  .xl\\:hover\\:text-orange-900:hover{\n    color: #7b341e;\n  }\n\n  .xl\\:hover\\:text-yellow-100:hover{\n    color: hsl(15, 86%, 30%);\n  }\n\n  .xl\\:hover\\:text-yellow-200:hover{\n    color: hsl(22, 82%, 39%);\n  }\n\n  .xl\\:hover\\:text-yellow-300:hover{\n    color: hsl(29, 80%, 44%);\n  }\n\n  .xl\\:hover\\:text-yellow-400:hover{\n    color: hsl(36, 77%, 49%);\n  }\n\n  .xl\\:hover\\:text-yellow-500:hover{\n    color: hsl(42, 87%, 55%);\n  }\n\n  .xl\\:hover\\:text-yellow-600:hover{\n    color: hsl(44, 92%, 63%);\n  }\n\n  .xl\\:hover\\:text-yellow-700:hover{\n    color: hsl(48, 94%, 68%);\n  }\n\n  .xl\\:hover\\:text-yellow-800:hover{\n    color: hsl(48, 95%, 76%);\n  }\n\n  .xl\\:hover\\:text-yellow-900:hover{\n    color: hsl(48, 100%, 88%);\n  }\n\n  .xl\\:hover\\:text-yellow-1000:hover{\n    color: hsl(49, 100%, 96%);\n  }\n\n  .xl\\:hover\\:text-green-100:hover{\n    color: #f0fff4;\n  }\n\n  .xl\\:hover\\:text-green-200:hover{\n    color: #c6f6d5;\n  }\n\n  .xl\\:hover\\:text-green-300:hover{\n    color: #9ae6b4;\n  }\n\n  .xl\\:hover\\:text-green-400:hover{\n    color: #68d391;\n  }\n\n  .xl\\:hover\\:text-green-500:hover{\n    color: #48bb78;\n  }\n\n  .xl\\:hover\\:text-green-600:hover{\n    color: #38a169;\n  }\n\n  .xl\\:hover\\:text-green-700:hover{\n    color: #2f855a;\n  }\n\n  .xl\\:hover\\:text-green-800:hover{\n    color: #276749;\n  }\n\n  .xl\\:hover\\:text-green-900:hover{\n    color: #22543d;\n  }\n\n  .xl\\:hover\\:text-teal-100:hover{\n    color: hsl(170, 97%, 15%);\n  }\n\n  .xl\\:hover\\:text-teal-200:hover{\n    color: hsl(168, 80%, 23%);\n  }\n\n  .xl\\:hover\\:text-teal-300:hover{\n    color: hsl(166, 72%, 28%);\n  }\n\n  .xl\\:hover\\:text-teal-400:hover{\n    color: hsl(164, 71%, 34%);\n  }\n\n  .xl\\:hover\\:text-teal-500:hover{\n    color: hsl(162, 63%, 41%);\n  }\n\n  .xl\\:hover\\:text-teal-600:hover{\n    color: hsl(160, 51%, 49%);\n  }\n\n  .xl\\:hover\\:text-teal-700:hover{\n    color: hsl(158, 58%, 62%);\n  }\n\n  .xl\\:hover\\:text-teal-800:hover{\n    color: hsl(156, 73%, 74%);\n  }\n\n  .xl\\:hover\\:text-teal-900:hover{\n    color: hsl(154, 75%, 87%);\n  }\n\n  .xl\\:hover\\:text-teal-1000:hover{\n    color: hsl(152, 68%, 96%);\n  }\n\n  .xl\\:hover\\:text-blue-100:hover{\n    color: hsl(195, 100%, 95%);\n  }\n\n  .xl\\:hover\\:text-blue-200:hover{\n    color: hsl(195, 100%, 85%);\n  }\n\n  .xl\\:hover\\:text-blue-300:hover{\n    color: hsl(195, 97%, 75%);\n  }\n\n  .xl\\:hover\\:text-blue-400:hover{\n    color: hsl(196, 94%, 67%);\n  }\n\n  .xl\\:hover\\:text-blue-500:hover{\n    color: hsl(197, 92%, 61%);\n  }\n\n  .xl\\:hover\\:text-blue-600:hover{\n    color: hsl(199, 84%, 55%);\n  }\n\n  .xl\\:hover\\:text-blue-700:hover{\n    color: hsl(201, 79%, 46%);\n  }\n\n  .xl\\:hover\\:text-blue-800:hover{\n    color: hsl(202, 83%, 41%);\n  }\n\n  .xl\\:hover\\:text-blue-900:hover{\n    color: hsl(203, 87%, 34%);\n  }\n\n  .xl\\:hover\\:text-blue-1000:hover{\n    color: hsl(204, 96%, 27%);\n  }\n\n  .xl\\:hover\\:text-indigo-100:hover{\n    color: hsl(221, 68%, 93%);\n  }\n\n  .xl\\:hover\\:text-indigo-200:hover{\n    color: hsl(221, 78%, 86%);\n  }\n\n  .xl\\:hover\\:text-indigo-300:hover{\n    color: hsl(224, 67%, 76%);\n  }\n\n  .xl\\:hover\\:text-indigo-400:hover{\n    color: hsl(225, 57%, 67%);\n  }\n\n  .xl\\:hover\\:text-indigo-500:hover{\n    color: hsl(227, 50%, 59%);\n  }\n\n  .xl\\:hover\\:text-indigo-600:hover{\n    color: hsl(227, 42%, 51%);\n  }\n\n  .xl\\:hover\\:text-indigo-700:hover{\n    color: hsl(228, 45%, 45%);\n  }\n\n  .xl\\:hover\\:text-indigo-800:hover{\n    color: hsl(230, 49%, 41%);\n  }\n\n  .xl\\:hover\\:text-indigo-900:hover{\n    color: hsl(232, 51%, 36%);\n  }\n\n  .xl\\:hover\\:text-indigo-1000:hover{\n    color: hsl(234, 62%, 26%);\n  }\n\n  .xl\\:hover\\:text-purple-100:hover{\n    color: #faf5ff;\n  }\n\n  .xl\\:hover\\:text-purple-200:hover{\n    color: #e9d8fd;\n  }\n\n  .xl\\:hover\\:text-purple-300:hover{\n    color: #d6bcfa;\n  }\n\n  .xl\\:hover\\:text-purple-400:hover{\n    color: #b794f4;\n  }\n\n  .xl\\:hover\\:text-purple-500:hover{\n    color: #9f7aea;\n  }\n\n  .xl\\:hover\\:text-purple-600:hover{\n    color: #805ad5;\n  }\n\n  .xl\\:hover\\:text-purple-700:hover{\n    color: #6b46c1;\n  }\n\n  .xl\\:hover\\:text-purple-800:hover{\n    color: #553c9a;\n  }\n\n  .xl\\:hover\\:text-purple-900:hover{\n    color: #44337a;\n  }\n\n  .xl\\:hover\\:text-pink-100:hover{\n    color: #fff5f7;\n  }\n\n  .xl\\:hover\\:text-pink-200:hover{\n    color: #fed7e2;\n  }\n\n  .xl\\:hover\\:text-pink-300:hover{\n    color: #fbb6ce;\n  }\n\n  .xl\\:hover\\:text-pink-400:hover{\n    color: #f687b3;\n  }\n\n  .xl\\:hover\\:text-pink-500:hover{\n    color: #ed64a6;\n  }\n\n  .xl\\:hover\\:text-pink-600:hover{\n    color: #d53f8c;\n  }\n\n  .xl\\:hover\\:text-pink-700:hover{\n    color: #b83280;\n  }\n\n  .xl\\:hover\\:text-pink-800:hover{\n    color: #97266d;\n  }\n\n  .xl\\:hover\\:text-pink-900:hover{\n    color: #702459;\n  }\n\n  .xl\\:focus\\:text-transparent:focus{\n    color: transparent;\n  }\n\n  .xl\\:focus\\:text-black:focus{\n    color: #000;\n  }\n\n  .xl\\:focus\\:text-white:focus{\n    color: #fff;\n  }\n\n  .xl\\:focus\\:text-gray-100:focus{\n    color: hsl(216, 33%, 97%);\n  }\n\n  .xl\\:focus\\:text-gray-200:focus{\n    color: hsl(214, 15%, 91%);\n  }\n\n  .xl\\:focus\\:text-gray-300:focus{\n    color: hsl(210, 16%, 82%);\n  }\n\n  .xl\\:focus\\:text-gray-400:focus{\n    color: hsl(211, 13%, 65%);\n  }\n\n  .xl\\:focus\\:text-gray-500:focus{\n    color: hsl(211, 10%, 53%);\n  }\n\n  .xl\\:focus\\:text-gray-600:focus{\n    color: hsl(211, 12%, 43%);\n  }\n\n  .xl\\:focus\\:text-gray-700:focus{\n    color: hsl(209, 14%, 37%);\n  }\n\n  .xl\\:focus\\:text-gray-800:focus{\n    color: hsl(209, 18%, 30%);\n  }\n\n  .xl\\:focus\\:text-gray-900:focus{\n    color: hsl(209, 20%, 25%);\n  }\n\n  .xl\\:focus\\:text-gray-1000:focus{\n    color: hsl(210, 24%, 16%);\n  }\n\n  .xl\\:focus\\:text-red-100:focus{\n    color: hsl(360, 100%, 95%);\n  }\n\n  .xl\\:focus\\:text-red-200:focus{\n    color: hsl(360, 100%, 87%);\n  }\n\n  .xl\\:focus\\:text-red-300:focus{\n    color: hsl(360, 100%, 80%);\n  }\n\n  .xl\\:focus\\:text-red-400:focus{\n    color: hsl(360, 91%, 69%);\n  }\n\n  .xl\\:focus\\:text-red-500:focus{\n    color: hsl(360, 83%, 62%);\n  }\n\n  .xl\\:focus\\:text-red-600:focus{\n    color: hsl(356, 75%, 53%);\n  }\n\n  .xl\\:focus\\:text-red-700:focus{\n    color: hsl(354, 85%, 44%);\n  }\n\n  .xl\\:focus\\:text-red-800:focus{\n    color: hsl(352, 90%, 35%);\n  }\n\n  .xl\\:focus\\:text-red-900:focus{\n    color: hsl(350, 94%, 28%);\n  }\n\n  .xl\\:focus\\:text-red-1000:focus{\n    color: hsl(348, 94%, 20%);\n  }\n\n  .xl\\:focus\\:text-orange-100:focus{\n    color: #fffaf0;\n  }\n\n  .xl\\:focus\\:text-orange-200:focus{\n    color: #feebc8;\n  }\n\n  .xl\\:focus\\:text-orange-300:focus{\n    color: #fbd38d;\n  }\n\n  .xl\\:focus\\:text-orange-400:focus{\n    color: #f6ad55;\n  }\n\n  .xl\\:focus\\:text-orange-500:focus{\n    color: #ed8936;\n  }\n\n  .xl\\:focus\\:text-orange-600:focus{\n    color: #dd6b20;\n  }\n\n  .xl\\:focus\\:text-orange-700:focus{\n    color: #c05621;\n  }\n\n  .xl\\:focus\\:text-orange-800:focus{\n    color: #9c4221;\n  }\n\n  .xl\\:focus\\:text-orange-900:focus{\n    color: #7b341e;\n  }\n\n  .xl\\:focus\\:text-yellow-100:focus{\n    color: hsl(15, 86%, 30%);\n  }\n\n  .xl\\:focus\\:text-yellow-200:focus{\n    color: hsl(22, 82%, 39%);\n  }\n\n  .xl\\:focus\\:text-yellow-300:focus{\n    color: hsl(29, 80%, 44%);\n  }\n\n  .xl\\:focus\\:text-yellow-400:focus{\n    color: hsl(36, 77%, 49%);\n  }\n\n  .xl\\:focus\\:text-yellow-500:focus{\n    color: hsl(42, 87%, 55%);\n  }\n\n  .xl\\:focus\\:text-yellow-600:focus{\n    color: hsl(44, 92%, 63%);\n  }\n\n  .xl\\:focus\\:text-yellow-700:focus{\n    color: hsl(48, 94%, 68%);\n  }\n\n  .xl\\:focus\\:text-yellow-800:focus{\n    color: hsl(48, 95%, 76%);\n  }\n\n  .xl\\:focus\\:text-yellow-900:focus{\n    color: hsl(48, 100%, 88%);\n  }\n\n  .xl\\:focus\\:text-yellow-1000:focus{\n    color: hsl(49, 100%, 96%);\n  }\n\n  .xl\\:focus\\:text-green-100:focus{\n    color: #f0fff4;\n  }\n\n  .xl\\:focus\\:text-green-200:focus{\n    color: #c6f6d5;\n  }\n\n  .xl\\:focus\\:text-green-300:focus{\n    color: #9ae6b4;\n  }\n\n  .xl\\:focus\\:text-green-400:focus{\n    color: #68d391;\n  }\n\n  .xl\\:focus\\:text-green-500:focus{\n    color: #48bb78;\n  }\n\n  .xl\\:focus\\:text-green-600:focus{\n    color: #38a169;\n  }\n\n  .xl\\:focus\\:text-green-700:focus{\n    color: #2f855a;\n  }\n\n  .xl\\:focus\\:text-green-800:focus{\n    color: #276749;\n  }\n\n  .xl\\:focus\\:text-green-900:focus{\n    color: #22543d;\n  }\n\n  .xl\\:focus\\:text-teal-100:focus{\n    color: hsl(170, 97%, 15%);\n  }\n\n  .xl\\:focus\\:text-teal-200:focus{\n    color: hsl(168, 80%, 23%);\n  }\n\n  .xl\\:focus\\:text-teal-300:focus{\n    color: hsl(166, 72%, 28%);\n  }\n\n  .xl\\:focus\\:text-teal-400:focus{\n    color: hsl(164, 71%, 34%);\n  }\n\n  .xl\\:focus\\:text-teal-500:focus{\n    color: hsl(162, 63%, 41%);\n  }\n\n  .xl\\:focus\\:text-teal-600:focus{\n    color: hsl(160, 51%, 49%);\n  }\n\n  .xl\\:focus\\:text-teal-700:focus{\n    color: hsl(158, 58%, 62%);\n  }\n\n  .xl\\:focus\\:text-teal-800:focus{\n    color: hsl(156, 73%, 74%);\n  }\n\n  .xl\\:focus\\:text-teal-900:focus{\n    color: hsl(154, 75%, 87%);\n  }\n\n  .xl\\:focus\\:text-teal-1000:focus{\n    color: hsl(152, 68%, 96%);\n  }\n\n  .xl\\:focus\\:text-blue-100:focus{\n    color: hsl(195, 100%, 95%);\n  }\n\n  .xl\\:focus\\:text-blue-200:focus{\n    color: hsl(195, 100%, 85%);\n  }\n\n  .xl\\:focus\\:text-blue-300:focus{\n    color: hsl(195, 97%, 75%);\n  }\n\n  .xl\\:focus\\:text-blue-400:focus{\n    color: hsl(196, 94%, 67%);\n  }\n\n  .xl\\:focus\\:text-blue-500:focus{\n    color: hsl(197, 92%, 61%);\n  }\n\n  .xl\\:focus\\:text-blue-600:focus{\n    color: hsl(199, 84%, 55%);\n  }\n\n  .xl\\:focus\\:text-blue-700:focus{\n    color: hsl(201, 79%, 46%);\n  }\n\n  .xl\\:focus\\:text-blue-800:focus{\n    color: hsl(202, 83%, 41%);\n  }\n\n  .xl\\:focus\\:text-blue-900:focus{\n    color: hsl(203, 87%, 34%);\n  }\n\n  .xl\\:focus\\:text-blue-1000:focus{\n    color: hsl(204, 96%, 27%);\n  }\n\n  .xl\\:focus\\:text-indigo-100:focus{\n    color: hsl(221, 68%, 93%);\n  }\n\n  .xl\\:focus\\:text-indigo-200:focus{\n    color: hsl(221, 78%, 86%);\n  }\n\n  .xl\\:focus\\:text-indigo-300:focus{\n    color: hsl(224, 67%, 76%);\n  }\n\n  .xl\\:focus\\:text-indigo-400:focus{\n    color: hsl(225, 57%, 67%);\n  }\n\n  .xl\\:focus\\:text-indigo-500:focus{\n    color: hsl(227, 50%, 59%);\n  }\n\n  .xl\\:focus\\:text-indigo-600:focus{\n    color: hsl(227, 42%, 51%);\n  }\n\n  .xl\\:focus\\:text-indigo-700:focus{\n    color: hsl(228, 45%, 45%);\n  }\n\n  .xl\\:focus\\:text-indigo-800:focus{\n    color: hsl(230, 49%, 41%);\n  }\n\n  .xl\\:focus\\:text-indigo-900:focus{\n    color: hsl(232, 51%, 36%);\n  }\n\n  .xl\\:focus\\:text-indigo-1000:focus{\n    color: hsl(234, 62%, 26%);\n  }\n\n  .xl\\:focus\\:text-purple-100:focus{\n    color: #faf5ff;\n  }\n\n  .xl\\:focus\\:text-purple-200:focus{\n    color: #e9d8fd;\n  }\n\n  .xl\\:focus\\:text-purple-300:focus{\n    color: #d6bcfa;\n  }\n\n  .xl\\:focus\\:text-purple-400:focus{\n    color: #b794f4;\n  }\n\n  .xl\\:focus\\:text-purple-500:focus{\n    color: #9f7aea;\n  }\n\n  .xl\\:focus\\:text-purple-600:focus{\n    color: #805ad5;\n  }\n\n  .xl\\:focus\\:text-purple-700:focus{\n    color: #6b46c1;\n  }\n\n  .xl\\:focus\\:text-purple-800:focus{\n    color: #553c9a;\n  }\n\n  .xl\\:focus\\:text-purple-900:focus{\n    color: #44337a;\n  }\n\n  .xl\\:focus\\:text-pink-100:focus{\n    color: #fff5f7;\n  }\n\n  .xl\\:focus\\:text-pink-200:focus{\n    color: #fed7e2;\n  }\n\n  .xl\\:focus\\:text-pink-300:focus{\n    color: #fbb6ce;\n  }\n\n  .xl\\:focus\\:text-pink-400:focus{\n    color: #f687b3;\n  }\n\n  .xl\\:focus\\:text-pink-500:focus{\n    color: #ed64a6;\n  }\n\n  .xl\\:focus\\:text-pink-600:focus{\n    color: #d53f8c;\n  }\n\n  .xl\\:focus\\:text-pink-700:focus{\n    color: #b83280;\n  }\n\n  .xl\\:focus\\:text-pink-800:focus{\n    color: #97266d;\n  }\n\n  .xl\\:focus\\:text-pink-900:focus{\n    color: #702459;\n  }\n\n  .xl\\:text-xs{\n    font-size: 0.75rem;\n  }\n\n  .xl\\:text-sm{\n    font-size: 0.875rem;\n  }\n\n  .xl\\:text-base{\n    font-size: 1rem;\n  }\n\n  .xl\\:text-lg{\n    font-size: 1.125rem;\n  }\n\n  .xl\\:text-xl{\n    font-size: 1.25rem;\n  }\n\n  .xl\\:text-2xl{\n    font-size: 1.5rem;\n  }\n\n  .xl\\:text-3xl{\n    font-size: 1.875rem;\n  }\n\n  .xl\\:text-4xl{\n    font-size: 2.25rem;\n  }\n\n  .xl\\:text-5xl{\n    font-size: 3rem;\n  }\n\n  .xl\\:text-6xl{\n    font-size: 4rem;\n  }\n\n  .xl\\:italic{\n    font-style: italic;\n  }\n\n  .xl\\:not-italic{\n    font-style: normal;\n  }\n\n  .xl\\:uppercase{\n    text-transform: uppercase;\n  }\n\n  .xl\\:lowercase{\n    text-transform: lowercase;\n  }\n\n  .xl\\:capitalize{\n    text-transform: capitalize;\n  }\n\n  .xl\\:normal-case{\n    text-transform: none;\n  }\n\n  .xl\\:underline{\n    text-decoration: underline;\n  }\n\n  .xl\\:line-through{\n    text-decoration: line-through;\n  }\n\n  .xl\\:no-underline{\n    text-decoration: none;\n  }\n\n  .xl\\:hover\\:underline:hover{\n    text-decoration: underline;\n  }\n\n  .xl\\:hover\\:line-through:hover{\n    text-decoration: line-through;\n  }\n\n  .xl\\:hover\\:no-underline:hover{\n    text-decoration: none;\n  }\n\n  .xl\\:focus\\:underline:focus{\n    text-decoration: underline;\n  }\n\n  .xl\\:focus\\:line-through:focus{\n    text-decoration: line-through;\n  }\n\n  .xl\\:focus\\:no-underline:focus{\n    text-decoration: none;\n  }\n\n  .xl\\:antialiased{\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .xl\\:subpixel-antialiased{\n    -webkit-font-smoothing: auto;\n    -moz-osx-font-smoothing: auto;\n  }\n\n  .xl\\:tracking-tighter{\n    letter-spacing: -0.05em;\n  }\n\n  .xl\\:tracking-tight{\n    letter-spacing: -0.025em;\n  }\n\n  .xl\\:tracking-normal{\n    letter-spacing: 0;\n  }\n\n  .xl\\:tracking-wide{\n    letter-spacing: 0.025em;\n  }\n\n  .xl\\:tracking-wider{\n    letter-spacing: 0.05em;\n  }\n\n  .xl\\:tracking-widest{\n    letter-spacing: 0.1em;\n  }\n\n  .xl\\:select-none{\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n\n  .xl\\:select-text{\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text;\n  }\n\n  .xl\\:select-all{\n    -webkit-user-select: all;\n       -moz-user-select: all;\n        -ms-user-select: all;\n            user-select: all;\n  }\n\n  .xl\\:select-auto{\n    -webkit-user-select: auto;\n       -moz-user-select: auto;\n        -ms-user-select: auto;\n            user-select: auto;\n  }\n\n  .xl\\:align-baseline{\n    vertical-align: baseline;\n  }\n\n  .xl\\:align-top{\n    vertical-align: top;\n  }\n\n  .xl\\:align-middle{\n    vertical-align: middle;\n  }\n\n  .xl\\:align-bottom{\n    vertical-align: bottom;\n  }\n\n  .xl\\:align-text-top{\n    vertical-align: text-top;\n  }\n\n  .xl\\:align-text-bottom{\n    vertical-align: text-bottom;\n  }\n\n  .xl\\:visible{\n    visibility: visible;\n  }\n\n  .xl\\:invisible{\n    visibility: hidden;\n  }\n\n  .xl\\:whitespace-normal{\n    white-space: normal;\n  }\n\n  .xl\\:whitespace-no-wrap{\n    white-space: nowrap;\n  }\n\n  .xl\\:whitespace-pre{\n    white-space: pre;\n  }\n\n  .xl\\:whitespace-pre-line{\n    white-space: pre-line;\n  }\n\n  .xl\\:whitespace-pre-wrap{\n    white-space: pre-wrap;\n  }\n\n  .xl\\:break-normal{\n    overflow-wrap: normal;\n    word-break: normal;\n  }\n\n  .xl\\:break-words{\n    overflow-wrap: break-word;\n  }\n\n  .xl\\:break-all{\n    word-break: break-all;\n  }\n\n  .xl\\:truncate{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .xl\\:w-0{\n    width: 0;\n  }\n\n  .xl\\:w-1{\n    width: 0.25rem;\n  }\n\n  .xl\\:w-2{\n    width: 0.5rem;\n  }\n\n  .xl\\:w-3{\n    width: 0.75rem;\n  }\n\n  .xl\\:w-4{\n    width: 1rem;\n  }\n\n  .xl\\:w-5{\n    width: 1.25rem;\n  }\n\n  .xl\\:w-6{\n    width: 1.5rem;\n  }\n\n  .xl\\:w-8{\n    width: 2rem;\n  }\n\n  .xl\\:w-10{\n    width: 2.5rem;\n  }\n\n  .xl\\:w-12{\n    width: 3rem;\n  }\n\n  .xl\\:w-16{\n    width: 4rem;\n  }\n\n  .xl\\:w-20{\n    width: 5rem;\n  }\n\n  .xl\\:w-24{\n    width: 6rem;\n  }\n\n  .xl\\:w-32{\n    width: 8rem;\n  }\n\n  .xl\\:w-40{\n    width: 10rem;\n  }\n\n  .xl\\:w-48{\n    width: 12rem;\n  }\n\n  .xl\\:w-56{\n    width: 14rem;\n  }\n\n  .xl\\:w-64{\n    width: 16rem;\n  }\n\n  .xl\\:w-auto{\n    width: auto;\n  }\n\n  .xl\\:w-px{\n    width: 1px;\n  }\n\n  .xl\\:w-1\\/2{\n    width: 50%;\n  }\n\n  .xl\\:w-1\\/3{\n    width: 33.333333%;\n  }\n\n  .xl\\:w-2\\/3{\n    width: 66.666667%;\n  }\n\n  .xl\\:w-1\\/4{\n    width: 25%;\n  }\n\n  .xl\\:w-2\\/4{\n    width: 50%;\n  }\n\n  .xl\\:w-3\\/4{\n    width: 75%;\n  }\n\n  .xl\\:w-1\\/5{\n    width: 20%;\n  }\n\n  .xl\\:w-2\\/5{\n    width: 40%;\n  }\n\n  .xl\\:w-3\\/5{\n    width: 60%;\n  }\n\n  .xl\\:w-4\\/5{\n    width: 80%;\n  }\n\n  .xl\\:w-1\\/6{\n    width: 16.666667%;\n  }\n\n  .xl\\:w-2\\/6{\n    width: 33.333333%;\n  }\n\n  .xl\\:w-3\\/6{\n    width: 50%;\n  }\n\n  .xl\\:w-4\\/6{\n    width: 66.666667%;\n  }\n\n  .xl\\:w-5\\/6{\n    width: 83.333333%;\n  }\n\n  .xl\\:w-1\\/12{\n    width: 8.333333%;\n  }\n\n  .xl\\:w-2\\/12{\n    width: 16.666667%;\n  }\n\n  .xl\\:w-3\\/12{\n    width: 25%;\n  }\n\n  .xl\\:w-4\\/12{\n    width: 33.333333%;\n  }\n\n  .xl\\:w-5\\/12{\n    width: 41.666667%;\n  }\n\n  .xl\\:w-6\\/12{\n    width: 50%;\n  }\n\n  .xl\\:w-7\\/12{\n    width: 58.333333%;\n  }\n\n  .xl\\:w-8\\/12{\n    width: 66.666667%;\n  }\n\n  .xl\\:w-9\\/12{\n    width: 75%;\n  }\n\n  .xl\\:w-10\\/12{\n    width: 83.333333%;\n  }\n\n  .xl\\:w-11\\/12{\n    width: 91.666667%;\n  }\n\n  .xl\\:w-full{\n    width: 100%;\n  }\n\n  .xl\\:w-screen{\n    width: 100vw;\n  }\n\n  .xl\\:z-0{\n    z-index: 0;\n  }\n\n  .xl\\:z-10{\n    z-index: 10;\n  }\n\n  .xl\\:z-20{\n    z-index: 20;\n  }\n\n  .xl\\:z-30{\n    z-index: 30;\n  }\n\n  .xl\\:z-40{\n    z-index: 40;\n  }\n\n  .xl\\:z-50{\n    z-index: 50;\n  }\n\n  .xl\\:z-auto{\n    z-index: auto;\n  }\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./resources/js/components/App.svelte.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./resources/js/components/App.svelte.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".tab-control.svelte-34onxr{\n  transition:background-color 250ms ease\n}\n\n.tab-control.svelte-34onxr:last-child{\n  margin-right:0\n}\n\n.tab-control.active.svelte-34onxr{\n  border-bottom-width:1px;\n  border-color:white\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Modal.svelte.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./resources/js/components/Modal.svelte.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".modal.svelte-1g2yio4{\n  left:50%;\n  top:50%;\n  width:calc(100vw - 4rem);\n  max-width:32rem;\n  max-height:calc(100vh - 4rem);\n  transform:translate(-50%,-50%)\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/svelte/easing/index.mjs":
/*!**********************************************!*\
  !*** ./node_modules/svelte/easing/index.mjs ***!
  \**********************************************/
/*! exports provided: linear, backIn, backInOut, backOut, bounceIn, bounceInOut, bounceOut, circIn, circInOut, circOut, cubicIn, cubicInOut, cubicOut, elasticIn, elasticInOut, elasticOut, expoIn, expoInOut, expoOut, quadIn, quadInOut, quadOut, quartIn, quartInOut, quartOut, quintIn, quintInOut, quintOut, sineIn, sineInOut, sineOut */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return circIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return circInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return circOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicIn", function() { return cubicIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicInOut", function() { return cubicInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicOut", function() { return cubicOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticIn", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticInOut", function() { return elasticInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticOut", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expoIn", function() { return expoIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expoInOut", function() { return expoInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expoOut", function() { return expoOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadIn", function() { return quadIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadInOut", function() { return quadInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadOut", function() { return quadOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quartIn", function() { return quartIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quartInOut", function() { return quartInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quartOut", function() { return quartOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quintIn", function() { return quintIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quintInOut", function() { return quintInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quintOut", function() { return quintOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sineIn", function() { return sineIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sineInOut", function() { return sineInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sineOut", function() { return sineOut; });
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["identity"]; });



/*
Adapted from https://github.com/mattdesl
Distributed under MIT License https://github.com/mattdesl/eases/blob/master/LICENSE.md
*/
function backInOut(t) {
    const s = 1.70158 * 1.525;
    if ((t *= 2) < 1)
        return 0.5 * (t * t * ((s + 1) * t - s));
    return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
}
function backIn(t) {
    const s = 1.70158;
    return t * t * ((s + 1) * t - s);
}
function backOut(t) {
    const s = 1.70158;
    return --t * t * ((s + 1) * t + s) + 1;
}
function bounceOut(t) {
    const a = 4.0 / 11.0;
    const b = 8.0 / 11.0;
    const c = 9.0 / 10.0;
    const ca = 4356.0 / 361.0;
    const cb = 35442.0 / 1805.0;
    const cc = 16061.0 / 1805.0;
    const t2 = t * t;
    return t < a
        ? 7.5625 * t2
        : t < b
            ? 9.075 * t2 - 9.9 * t + 3.4
            : t < c
                ? ca * t2 - cb * t + cc
                : 10.8 * t * t - 20.52 * t + 10.72;
}
function bounceInOut(t) {
    return t < 0.5
        ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))
        : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5;
}
function bounceIn(t) {
    return 1.0 - bounceOut(1.0 - t);
}
function circInOut(t) {
    if ((t *= 2) < 1)
        return -0.5 * (Math.sqrt(1 - t * t) - 1);
    return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}
function circIn(t) {
    return 1.0 - Math.sqrt(1.0 - t * t);
}
function circOut(t) {
    return Math.sqrt(1 - --t * t);
}
function cubicInOut(t) {
    return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
}
function cubicIn(t) {
    return t * t * t;
}
function cubicOut(t) {
    const f = t - 1.0;
    return f * f * f + 1.0;
}
function elasticInOut(t) {
    return t < 0.5
        ? 0.5 *
            Math.sin(((+13.0 * Math.PI) / 2) * 2.0 * t) *
            Math.pow(2.0, 10.0 * (2.0 * t - 1.0))
        : 0.5 *
            Math.sin(((-13.0 * Math.PI) / 2) * (2.0 * t - 1.0 + 1.0)) *
            Math.pow(2.0, -10.0 * (2.0 * t - 1.0)) +
            1.0;
}
function elasticIn(t) {
    return Math.sin((13.0 * t * Math.PI) / 2) * Math.pow(2.0, 10.0 * (t - 1.0));
}
function elasticOut(t) {
    return (Math.sin((-13.0 * (t + 1.0) * Math.PI) / 2) * Math.pow(2.0, -10.0 * t) + 1.0);
}
function expoInOut(t) {
    return t === 0.0 || t === 1.0
        ? t
        : t < 0.5
            ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0)
            : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
}
function expoIn(t) {
    return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
}
function expoOut(t) {
    return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
}
function quadInOut(t) {
    t /= 0.5;
    if (t < 1)
        return 0.5 * t * t;
    t--;
    return -0.5 * (t * (t - 2) - 1);
}
function quadIn(t) {
    return t * t;
}
function quadOut(t) {
    return -t * (t - 2.0);
}
function quartInOut(t) {
    return t < 0.5
        ? +8.0 * Math.pow(t, 4.0)
        : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0;
}
function quartIn(t) {
    return Math.pow(t, 4.0);
}
function quartOut(t) {
    return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
}
function quintInOut(t) {
    if ((t *= 2) < 1)
        return 0.5 * t * t * t * t * t;
    return 0.5 * ((t -= 2) * t * t * t * t + 2);
}
function quintIn(t) {
    return t * t * t * t * t;
}
function quintOut(t) {
    return --t * t * t * t * t + 1;
}
function sineInOut(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
}
function sineIn(t) {
    const v = Math.cos(t * Math.PI * 0.5);
    if (Math.abs(v) < 1e-14)
        return 1;
    else
        return 1 - v;
}
function sineOut(t) {
    return Math.sin((t * Math.PI) / 2);
}




/***/ }),

/***/ "./node_modules/svelte/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/svelte/index.mjs ***!
  \***************************************/
/*! exports provided: afterUpdate, beforeUpdate, createEventDispatcher, getContext, onDestroy, onMount, setContext, tick */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["afterUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["beforeUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["createEventDispatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["getContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["onDestroy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["onMount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["tick"]; });




/***/ }),

/***/ "./node_modules/svelte/internal/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/svelte/internal/index.mjs ***!
  \************************************************/
/*! exports provided: SvelteComponent, SvelteComponentDev, SvelteElement, add_attribute, add_classes, add_flush_callback, add_location, add_render_callback, add_resize_listener, add_transform, afterUpdate, append, assign, attr, beforeUpdate, bind, binding_callbacks, blank_object, bubble, check_outros, children, claim_element, claim_text, clear_loops, createEventDispatcher, create_animation, create_bidirectional_transition, create_in_transition, create_out_transition, create_slot, create_ssr_component, current_component, custom_event, debug, destroy_block, destroy_component, destroy_each, detach, detach_after, detach_before, detach_between, dirty_components, each, element, empty, escape, escaped, exclude_internal_props, fix_and_destroy_block, fix_and_outro_and_destroy_block, fix_position, flush, getContext, get_binding_group_value, get_slot_changes, get_slot_context, get_spread_update, get_store_value, globals, group_outros, handle_promise, identity, init, insert, intros, invalid_attribute_name_character, is_client, is_function, is_promise, listen, loop, measure, missing_component, mount_component, noop, not_equal, now, object_without_properties, onDestroy, onMount, once, outro_and_destroy_block, prevent_default, raf, run, run_all, safe_not_equal, schedule_update, select_multiple_value, select_option, select_options, select_value, setContext, set_attributes, set_current_component, set_custom_element_data, set_data, set_input_type, set_now, set_raf, set_style, space, spread, stop_propagation, subscribe, svg_element, text, tick, time_ranges_to_array, to_number, toggle_class, transition_in, transition_out, update_keyed_each, validate_component, validate_store, xlink_attr */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponent", function() { return SvelteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteComponentDev", function() { return SvelteComponentDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvelteElement", function() { return SvelteElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_attribute", function() { return add_attribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_classes", function() { return add_classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_flush_callback", function() { return add_flush_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_location", function() { return add_location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_render_callback", function() { return add_render_callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_resize_listener", function() { return add_resize_listener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add_transform", function() { return add_transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterUpdate", function() { return afterUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeUpdate", function() { return beforeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binding_callbacks", function() { return binding_callbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blank_object", function() { return blank_object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check_outros", function() { return check_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_element", function() { return claim_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claim_text", function() { return claim_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear_loops", function() { return clear_loops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventDispatcher", function() { return createEventDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_animation", function() { return create_animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_bidirectional_transition", function() { return create_bidirectional_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_in_transition", function() { return create_in_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_out_transition", function() { return create_out_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_slot", function() { return create_slot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_ssr_component", function() { return create_ssr_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current_component", function() { return current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custom_event", function() { return custom_event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_block", function() { return destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_component", function() { return destroy_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy_each", function() { return destroy_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_after", function() { return detach_after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_before", function() { return detach_before; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach_between", function() { return detach_between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirty_components", function() { return dirty_components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element", function() { return element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escaped", function() { return escaped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exclude_internal_props", function() { return exclude_internal_props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_destroy_block", function() { return fix_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_and_outro_and_destroy_block", function() { return fix_and_outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fix_position", function() { return fix_position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_binding_group_value", function() { return get_binding_group_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_slot_changes", function() { return get_slot_changes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_slot_context", function() { return get_slot_context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_spread_update", function() { return get_spread_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_store_value", function() { return get_store_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group_outros", function() { return group_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle_promise", function() { return handle_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intros", function() { return intros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalid_attribute_name_character", function() { return invalid_attribute_name_character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_client", function() { return is_client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_function", function() { return is_function; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_promise", function() { return is_promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loop", function() { return loop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measure", function() { return measure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missing_component", function() { return missing_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount_component", function() { return mount_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not_equal", function() { return not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object_without_properties", function() { return object_without_properties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDestroy", function() { return onDestroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMount", function() { return onMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outro_and_destroy_block", function() { return outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevent_default", function() { return prevent_default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run_all", function() { return run_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safe_not_equal", function() { return safe_not_equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule_update", function() { return schedule_update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_multiple_value", function() { return select_multiple_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_option", function() { return select_option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_options", function() { return select_options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select_value", function() { return select_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_attributes", function() { return set_attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_current_component", function() { return set_current_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_custom_element_data", function() { return set_custom_element_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_data", function() { return set_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_input_type", function() { return set_input_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_now", function() { return set_now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_raf", function() { return set_raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set_style", function() { return set_style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop_propagation", function() { return stop_propagation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg_element", function() { return svg_element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return tick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time_ranges_to_array", function() { return time_ranges_to_array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to_number", function() { return to_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle_class", function() { return toggle_class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_in", function() { return transition_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition_out", function() { return transition_out; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_keyed_each", function() { return update_keyed_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_component", function() { return validate_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate_store", function() { return validate_store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xlink_attr", function() { return xlink_attr; });
function noop() { }
const identity = x => x;
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function is_promise(value) {
    return value && typeof value === 'object' && typeof value.then === 'function';
}
function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
        loc: { file, line, column, char }
    };
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function not_equal(a, b) {
    return a != a ? b == b : a !== b;
}
function validate_store(store, name) {
    if (!store || typeof store.subscribe !== 'function') {
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
}
function subscribe(component, store, callback) {
    const unsub = store.subscribe(callback);
    component.$$.on_destroy.push(unsub.unsubscribe
        ? () => unsub.unsubscribe()
        : unsub);
}
function create_slot(definition, ctx, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, fn) {
    return definition[1]
        ? assign({}, assign(ctx.$$scope.ctx, definition[1](fn ? fn(ctx) : {})))
        : ctx.$$scope.ctx;
}
function get_slot_changes(definition, ctx, changed, fn) {
    return definition[1]
        ? assign({}, assign(ctx.$$scope.changed || {}, definition[1](fn ? fn(changed) : {})))
        : ctx.$$scope.changed || {};
}
function exclude_internal_props(props) {
    const result = {};
    for (const k in props)
        if (k[0] !== '$')
            result[k] = props[k];
    return result;
}
function once(fn) {
    let ran = false;
    return function (...args) {
        if (ran)
            return;
        ran = true;
        fn.call(this, ...args);
    };
}

const is_client = typeof window !== 'undefined';
let now = is_client
    ? () => window.performance.now()
    : () => Date.now();
let raf = cb => requestAnimationFrame(cb);
// used internally for testing
function set_now(fn) {
    now = fn;
}
function set_raf(fn) {
    raf = fn;
}

const tasks = new Set();
let running = false;
function run_tasks() {
    tasks.forEach(task => {
        if (!task[0](now())) {
            tasks.delete(task);
            task[1]();
        }
    });
    running = tasks.size > 0;
    if (running)
        raf(run_tasks);
}
function clear_loops() {
    // for testing...
    tasks.forEach(task => tasks.delete(task));
    running = false;
}
function loop(fn) {
    let task;
    if (!running) {
        running = true;
        raf(run_tasks);
    }
    return {
        promise: new Promise(fulfil => {
            tasks.add(task = [fn, fulfil]);
        }),
        abort() {
            tasks.delete(task);
        }
    };
}

function append(target, node) {
    target.appendChild(node);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function detach_between(before, after) {
    while (before.nextSibling && before.nextSibling !== after) {
        before.parentNode.removeChild(before.nextSibling);
    }
}
function detach_before(after) {
    while (after.previousSibling) {
        after.parentNode.removeChild(after.previousSibling);
    }
}
function detach_after(before) {
    while (before.nextSibling) {
        before.parentNode.removeChild(before.nextSibling);
    }
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function object_without_properties(obj, exclude) {
    // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
    const target = {};
    for (const k in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, k)
            // @ts-ignore
            && exclude.indexOf(k) === -1) {
            // @ts-ignore
            target[k] = obj[k];
        }
    }
    return target;
}
function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
    return function (event) {
        event.preventDefault();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function stop_propagation(fn) {
    return function (event) {
        event.stopPropagation();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else
        node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
    for (const key in attributes) {
        if (key === 'style') {
            node.style.cssText = attributes[key];
        }
        else if (key in node) {
            node[key] = attributes[key];
        }
        else {
            attr(node, key, attributes[key]);
        }
    }
}
function set_custom_element_data(node, prop, value) {
    if (prop in node) {
        node[prop] = value;
    }
    else {
        attr(node, prop, value);
    }
}
function xlink_attr(node, attribute, value) {
    node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}
function get_binding_group_value(group) {
    const value = [];
    for (let i = 0; i < group.length; i += 1) {
        if (group[i].checked)
            value.push(group[i].__value);
    }
    return value;
}
function to_number(value) {
    return value === '' ? undefined : +value;
}
function time_ranges_to_array(ranges) {
    const array = [];
    for (let i = 0; i < ranges.length; i += 1) {
        array.push({ start: ranges.start(i), end: ranges.end(i) });
    }
    return array;
}
function children(element) {
    return Array.from(element.childNodes);
}
function claim_element(nodes, name, attributes, svg) {
    for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeName === name) {
            for (let j = 0; j < node.attributes.length; j += 1) {
                const attribute = node.attributes[j];
                if (!attributes[attribute.name])
                    node.removeAttribute(attribute.name);
            }
            return nodes.splice(i, 1)[0]; // TODO strip unwanted attributes
        }
    }
    return svg ? svg_element(name) : element(name);
}
function claim_text(nodes, data) {
    for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeType === 3) {
            node.data = data;
            return nodes.splice(i, 1)[0];
        }
    }
    return text(data);
}
function set_data(text, data) {
    data = '' + data;
    if (text.data !== data)
        text.data = data;
}
function set_input_type(input, type) {
    try {
        input.type = type;
    }
    catch (e) {
        // do nothing
    }
}
function set_style(node, key, value) {
    node.style.setProperty(key, value);
}
function select_option(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        if (option.__value === value) {
            option.selected = true;
            return;
        }
    }
}
function select_options(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        option.selected = ~value.indexOf(option.__value);
    }
}
function select_value(select) {
    const selected_option = select.querySelector(':checked') || select.options[0];
    return selected_option && selected_option.__value;
}
function select_multiple_value(select) {
    return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}
function add_resize_listener(element, fn) {
    if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative';
    }
    const object = document.createElement('object');
    object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
    object.type = 'text/html';
    object.tabIndex = -1;
    let win;
    object.onload = () => {
        win = object.contentDocument.defaultView;
        win.addEventListener('resize', fn);
    };
    if (/Trident/.test(navigator.userAgent)) {
        element.appendChild(object);
        object.data = 'about:blank';
    }
    else {
        object.data = 'about:blank';
        element.appendChild(object);
    }
    return {
        cancel: () => {
            win && win.removeEventListener && win.removeEventListener('resize', fn);
            element.removeChild(object);
        }
    };
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
}

let stylesheet;
let active = 0;
let current_rules = {};
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return hash >>> 0;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = '{\n';
    for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    if (!current_rules[name]) {
        if (!stylesheet) {
            const style = element('style');
            document.head.appendChild(style);
            stylesheet = style.sheet;
        }
        current_rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || '';
    node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
}
function delete_rule(node, name) {
    node.style.animation = (node.style.animation || '')
        .split(', ')
        .filter(name
        ? anim => anim.indexOf(name) < 0 // remove specific animation
        : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
    )
        .join(', ');
    if (name && !--active)
        clear_rules();
}
function clear_rules() {
    raf(() => {
        if (active)
            return;
        let i = stylesheet.cssRules.length;
        while (i--)
            stylesheet.deleteRule(i);
        current_rules = {};
    });
}

function create_animation(node, from, fn, params) {
    if (!from)
        return noop;
    const to = node.getBoundingClientRect();
    if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom)
        return noop;
    const { delay = 0, duration = 300, easing = identity, 
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay, 
    // @ts-ignore todo:
    end = start_time + duration, tick = noop, css } = fn(node, { from, to }, params);
    let running = true;
    let started = false;
    let name;
    function start() {
        if (css) {
            name = create_rule(node, 0, 1, duration, delay, easing, css);
        }
        if (!delay) {
            started = true;
        }
    }
    function stop() {
        if (css)
            delete_rule(node, name);
        running = false;
    }
    loop(now => {
        if (!started && now >= start_time) {
            started = true;
        }
        if (started && now >= end) {
            tick(1, 0);
            stop();
        }
        if (!running) {
            return false;
        }
        if (started) {
            const p = now - start_time;
            const t = 0 + 1 * easing(p / duration);
            tick(t, 1 - t);
        }
        return true;
    });
    start();
    tick(0, 1);
    return stop;
}
function fix_position(node) {
    const style = getComputedStyle(node);
    if (style.position !== 'absolute' && style.position !== 'fixed') {
        const { width, height } = style;
        const a = node.getBoundingClientRect();
        node.style.position = 'absolute';
        node.style.width = width;
        node.style.height = height;
        add_transform(node, a);
    }
}
function add_transform(node, a) {
    const b = node.getBoundingClientRect();
    if (a.left !== b.left || a.top !== b.top) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
    }
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function beforeUpdate(fn) {
    get_current_component().$$.before_update.push(fn);
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
    const component = current_component;
    return (type, detail) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail);
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
        }
    };
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
function getContext(key) {
    return get_current_component().$$.context.get(key);
}
// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) {
        callbacks.slice().forEach(fn => fn(event));
    }
}

const dirty_components = [];
const intros = { enabled: false };
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function tick() {
    schedule_update();
    return resolved_promise;
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
function add_flush_callback(fn) {
    flush_callbacks.push(fn);
}
function flush() {
    const seen_callbacks = new Set();
    do {
        // first, call beforeUpdate functions
        // and update components
        while (dirty_components.length) {
            const component = dirty_components.shift();
            set_current_component(component);
            update(component.$$);
        }
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                callback();
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
}
function update($$) {
    if ($$.fragment) {
        $$.update($$.dirty);
        run_all($$.before_update);
        $$.fragment.p($$.dirty, $$.ctx);
        $$.dirty = null;
        $$.after_update.forEach(add_render_callback);
    }
}

let promise;
function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then(() => {
            promise = null;
        });
    }
    return promise;
}
function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}
function create_in_transition(node, fn, params) {
    let config = fn(node, params);
    let running = false;
    let animation_name;
    let task;
    let uid = 0;
    function cleanup() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config;
        if (css)
            animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
        tick(0, 1);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        if (task)
            task.abort();
        running = true;
        add_render_callback(() => dispatch(node, true, 'start'));
        task = loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(1, 0);
                    dispatch(node, true, 'end');
                    cleanup();
                    return running = false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(t, 1 - t);
                }
            }
            return running;
        });
    }
    let started = false;
    return {
        start() {
            if (started)
                return;
            delete_rule(node);
            if (is_function(config)) {
                config = config();
                wait().then(go);
            }
            else {
                go();
            }
        },
        invalidate() {
            started = false;
        },
        end() {
            if (running) {
                cleanup();
                running = false;
            }
        }
    };
}
function create_out_transition(node, fn, params) {
    let config = fn(node, params);
    let running = true;
    let animation_name;
    const group = outros;
    group.r += 1;
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config;
        if (css)
            animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        add_render_callback(() => dispatch(node, false, 'start'));
        loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(0, 1);
                    dispatch(node, false, 'end');
                    if (!--group.r) {
                        // this will result in `end()` being called,
                        // so we don't need to clean up here
                        run_all(group.c);
                    }
                    return false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(1 - t, t);
                }
            }
            return running;
        });
    }
    if (is_function(config)) {
        wait().then(() => {
            // @ts-ignore
            config = config();
            go();
        });
    }
    else {
        go();
    }
    return {
        end(reset) {
            if (reset && config.tick) {
                config.tick(1, 0);
            }
            if (running) {
                if (animation_name)
                    delete_rule(node, animation_name);
                running = false;
            }
        }
    };
}
function create_bidirectional_transition(node, fn, params, intro) {
    let config = fn(node, params);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    function clear_animation() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function init(program, duration) {
        const d = program.b - t;
        duration *= Math.abs(d);
        return {
            a: t,
            b: program.b,
            d,
            duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
        };
    }
    function go(b) {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config;
        const program = {
            start: now() + delay,
            b
        };
        if (!b) {
            // @ts-ignore todo: improve typings
            program.group = outros;
            outros.r += 1;
        }
        if (running_program) {
            pending_program = program;
        }
        else {
            // if this is an intro, and there's a delay, we need to do
            // an initial tick and/or apply CSS animation immediately
            if (css) {
                clear_animation();
                animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b)
                tick(0, 1);
            running_program = init(program, duration);
            add_render_callback(() => dispatch(node, b, 'start'));
            loop(now => {
                if (pending_program && now > pending_program.start) {
                    running_program = init(pending_program, duration);
                    pending_program = null;
                    dispatch(node, running_program.b, 'start');
                    if (css) {
                        clear_animation();
                        animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                    }
                }
                if (running_program) {
                    if (now >= running_program.end) {
                        tick(t = running_program.b, 1 - t);
                        dispatch(node, running_program.b, 'end');
                        if (!pending_program) {
                            // we're done
                            if (running_program.b) {
                                // intro — we can tidy up immediately
                                clear_animation();
                            }
                            else {
                                // outro — needs to be coordinated
                                if (!--running_program.group.r)
                                    run_all(running_program.group.c);
                            }
                        }
                        running_program = null;
                    }
                    else if (now >= running_program.start) {
                        const p = now - running_program.start;
                        t = running_program.a + running_program.d * easing(p / running_program.duration);
                        tick(t, 1 - t);
                    }
                }
                return !!(running_program || pending_program);
            });
        }
    }
    return {
        run(b) {
            if (is_function(config)) {
                wait().then(() => {
                    // @ts-ignore
                    config = config();
                    go(b);
                });
            }
            else {
                go(b);
            }
        },
        end() {
            clear_animation();
            running_program = pending_program = null;
        }
    };
}

function handle_promise(promise, info) {
    const token = info.token = {};
    function update(type, index, key, value) {
        if (info.token !== token)
            return;
        info.resolved = key && { [key]: value };
        const child_ctx = assign(assign({}, info.ctx), info.resolved);
        const block = type && (info.current = type)(child_ctx);
        if (info.block) {
            if (info.blocks) {
                info.blocks.forEach((block, i) => {
                    if (i !== index && block) {
                        group_outros();
                        transition_out(block, 1, 1, () => {
                            info.blocks[i] = null;
                        });
                        check_outros();
                    }
                });
            }
            else {
                info.block.d(1);
            }
            block.c();
            transition_in(block, 1);
            block.m(info.mount(), info.anchor);
            flush();
        }
        info.block = block;
        if (info.blocks)
            info.blocks[index] = block;
    }
    if (is_promise(promise)) {
        promise.then(value => {
            update(info.then, 1, info.value, value);
        }, error => {
            update(info.catch, 2, info.error, error);
        });
        // if we previously had a then/catch block, destroy it
        if (info.current !== info.pending) {
            update(info.pending, 0);
            return true;
        }
    }
    else {
        if (info.current !== info.then) {
            update(info.then, 1, info.value, promise);
            return true;
        }
        info.resolved = { [info.value]: promise };
    }
}

const globals = (typeof window !== 'undefined' ? window : global);

function destroy_block(block, lookup) {
    block.d(1);
    lookup.delete(block.key);
}
function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
        lookup.delete(block.key);
    });
}
function fix_and_destroy_block(block, lookup) {
    block.f();
    destroy_block(block, lookup);
}
function fix_and_outro_and_destroy_block(block, lookup) {
    block.f();
    outro_and_destroy_block(block, lookup);
}
function update_keyed_each(old_blocks, changed, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
        old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map();
    const deltas = new Map();
    i = n;
    while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
            block = create_each_block(key, child_ctx);
            block.c();
        }
        else if (dynamic) {
            block.p(changed, child_ctx);
        }
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes)
            deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set();
    const did_move = new Set();
    function insert(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
    }
    while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
            // do nothing
            next = new_block.first;
            o--;
            n--;
        }
        else if (!new_lookup.has(old_key)) {
            // remove old block
            destroy(old_block, lookup);
            o--;
        }
        else if (!lookup.has(new_key) || will_move.has(new_key)) {
            insert(new_block);
        }
        else if (did_move.has(old_key)) {
            o--;
        }
        else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert(new_block);
        }
        else {
            will_move.add(old_key);
            o--;
        }
    }
    while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key))
            destroy(old_block, lookup);
    }
    while (n)
        insert(new_blocks[n - 1]);
    return new_blocks;
}
function measure(blocks) {
    const rects = {};
    let i = blocks.length;
    while (i--)
        rects[blocks[i].key] = blocks[i].node.getBoundingClientRect();
    return rects;
}

function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for (const key in o) {
                if (!(key in n))
                    to_null_out[key] = 1;
            }
            for (const key in n) {
                if (!accounted_for[key]) {
                    update[key] = n[key];
                    accounted_for[key] = 1;
                }
            }
            levels[i] = n;
        }
        else {
            for (const key in o) {
                accounted_for[key] = 1;
            }
        }
    }
    for (const key in to_null_out) {
        if (!(key in update))
            update[key] = undefined;
    }
    return update;
}

const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter
function spread(args) {
    const attributes = Object.assign({}, ...args);
    let str = '';
    Object.keys(attributes).forEach(name => {
        if (invalid_attribute_name_character.test(name))
            return;
        const value = attributes[name];
        if (value === undefined)
            return;
        if (value === true)
            str += " " + name;
        const escaped = String(value)
            .replace(/"/g, '&#34;')
            .replace(/'/g, '&#39;');
        str += " " + name + "=" + JSON.stringify(escaped);
    });
    return str;
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
function debug(file, line, column, values) {
    console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console
    console.log(values); // eslint-disable-line no-console
    return '';
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.head
            };
        },
        $$render
    };
}
/**
 * Get the current value from a store by subscribing and immediately unsubscribing.
 * @param store readable
 */
function get_store_value(store) {
    let value;
    const unsubscribe = store.subscribe(_ => value = _);
    if (unsubscribe.unsubscribe)
        unsubscribe.unsubscribe();
    else
        unsubscribe();
    return value;
}
function add_attribute(name, value) {
    if (!value)
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(value) : `"${value}"`}`}`;
}
function add_classes(classes) {
    return classes ? ` class="${classes}"` : ``;
}

function bind(component, name, callback) {
    if (component.$$.props.indexOf(name) === -1)
        return;
    component.$$.bound[name] = callback;
    callback(component.$$.ctx[name]);
}
function mount_component(component, target, anchor) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment.m(target, anchor);
    // onMount happens before the initial afterUpdate
    add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
            on_destroy.push(...new_on_destroy);
        }
        else {
            // Edge case - component was destroyed immediately,
            // most likely as a result of a binding initialising
            run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    if (component.$$.fragment) {
        run_all(component.$$.on_destroy);
        component.$$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        component.$$.on_destroy = component.$$.fragment = null;
        component.$$.ctx = {};
    }
}
function make_dirty(component, key) {
    if (!component.$$.dirty) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty = blank_object();
    }
    component.$$.dirty[key] = true;
}
function init(component, options, instance, create_fragment, not_equal, prop_names) {
    const parent_component = current_component;
    set_current_component(component);
    const props = options.props || {};
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props: prop_names,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(parent_component ? parent_component.$$.context : []),
        // everything else
        callbacks: blank_object(),
        dirty: null
    };
    let ready = false;
    $$.ctx = instance
        ? instance(component, props, (key, value) => {
            if ($$.ctx && not_equal($$.ctx[key], $$.ctx[key] = value)) {
                if ($$.bound[key])
                    $$.bound[key](value);
                if (ready)
                    make_dirty(component, key);
            }
        })
        : props;
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment($$.ctx);
    if (options.target) {
        if (options.hydrate) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment.l(children(options.target));
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor);
        flush();
    }
    set_current_component(parent_component);
}
let SvelteElement;
if (typeof HTMLElement !== 'undefined') {
    SvelteElement = class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }
        connectedCallback() {
            // @ts-ignore todo: improve typings
            for (const key in this.$$.slotted) {
                // @ts-ignore todo: improve typings
                this.appendChild(this.$$.slotted[key]);
            }
        }
        attributeChangedCallback(attr, _oldValue, newValue) {
            this[attr] = newValue;
        }
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            // TODO should this delegate to addEventListener?
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    };
}
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set() {
        // overridden by instance, if it has props
    }
}
class SvelteComponentDev extends SvelteComponent {
    constructor(options) {
        if (!options || (!options.target && !options.$$inline)) {
            throw new Error(`'target' is a required option`);
        }
        super();
    }
    $destroy() {
        super.$destroy();
        this.$destroy = () => {
            console.warn(`Component was already destroyed`); // eslint-disable-line no-console
        };
    }
}




/***/ }),

/***/ "./node_modules/svelte/store/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/svelte/store/index.mjs ***!
  \*********************************************/
/*! exports provided: get, derived, readable, writable */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "derived", function() { return derived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readable", function() { return readable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writable", function() { return writable; });
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _internal__WEBPACK_IMPORTED_MODULE_0__["get_store_value"]; });




/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */
function readable(value, start) {
    return {
        subscribe: writable(value, start).subscribe,
    };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = _internal__WEBPACK_IMPORTED_MODULE_0__["noop"]) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (Object(_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"])(value, new_value)) {
            value = new_value;
            if (!stop) {
                return; // not ready
            }
            subscribers.forEach((s) => s[1]());
            subscribers.forEach((s) => s[0](value));
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = _internal__WEBPACK_IMPORTED_MODULE_0__["noop"]) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || _internal__WEBPACK_IMPORTED_MODULE_0__["noop"];
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}
/**
 * Derived value store by synchronizing one or more readable stores and
 * applying an aggregation function over its input values.
 * @param {Stores} stores input stores
 * @param {function(Stores=, function(*)=):*}fn function callback that aggregates the values
 * @param {*=}initial_value when used asynchronously
 */
function derived(stores, fn, initial_value) {
    const single = !Array.isArray(stores);
    const stores_array = single
        ? [stores]
        : stores;
    const auto = fn.length < 2;
    const invalidators = [];
    const store = readable(initial_value, (set) => {
        let inited = false;
        const values = [];
        let pending = 0;
        let cleanup = _internal__WEBPACK_IMPORTED_MODULE_0__["noop"];
        const sync = () => {
            if (pending) {
                return;
            }
            cleanup();
            const result = fn(single ? values[0] : values, set);
            if (auto) {
                set(result);
            }
            else {
                cleanup = Object(_internal__WEBPACK_IMPORTED_MODULE_0__["is_function"])(result) ? result : _internal__WEBPACK_IMPORTED_MODULE_0__["noop"];
            }
        };
        const unsubscribers = stores_array.map((store, i) => store.subscribe((value) => {
            values[i] = value;
            pending &= ~(1 << i);
            if (inited) {
                sync();
            }
        }, () => {
            Object(_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(invalidators);
            pending |= (1 << i);
        }));
        inited = true;
        sync();
        return function stop() {
            Object(_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(unsubscribers);
            cleanup();
        };
    });
    return {
        subscribe(run, invalidate = _internal__WEBPACK_IMPORTED_MODULE_0__["noop"]) {
            invalidators.push(invalidate);
            const unsubscribe = store.subscribe(run, invalidate);
            return () => {
                const index = invalidators.indexOf(invalidate);
                if (index !== -1) {
                    invalidators.splice(index, 1);
                }
                unsubscribe();
            };
        }
    };
}




/***/ }),

/***/ "./node_modules/svelte/transition/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/svelte/transition/index.mjs ***!
  \**************************************************/
/*! exports provided: crossfade, draw, fade, fly, scale, slide */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossfade", function() { return crossfade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fly", function() { return fly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slide", function() { return slide; });
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../easing */ "./node_modules/svelte/easing/index.mjs");
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal */ "./node_modules/svelte/internal/index.mjs");



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function fade(node, { delay = 0, duration = 400 }) {
    const o = +getComputedStyle(node).opacity;
    return {
        delay,
        duration,
        css: t => `opacity: ${t * o}`
    };
}
function fly(node, { delay = 0, duration = 400, easing = _easing__WEBPACK_IMPORTED_MODULE_0__["cubicOut"], x = 0, y = 0, opacity = 0 }) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === 'none' ? '' : style.transform;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - (od * u)}`
    };
}
function slide(node, { delay = 0, duration = 400, easing = _easing__WEBPACK_IMPORTED_MODULE_0__["cubicOut"] }) {
    const style = getComputedStyle(node);
    const opacity = +style.opacity;
    const height = parseFloat(style.height);
    const padding_top = parseFloat(style.paddingTop);
    const padding_bottom = parseFloat(style.paddingBottom);
    const margin_top = parseFloat(style.marginTop);
    const margin_bottom = parseFloat(style.marginBottom);
    const border_top_width = parseFloat(style.borderTopWidth);
    const border_bottom_width = parseFloat(style.borderBottomWidth);
    return {
        delay,
        duration,
        easing,
        css: t => `overflow: hidden;` +
            `opacity: ${Math.min(t * 20, 1) * opacity};` +
            `height: ${t * height}px;` +
            `padding-top: ${t * padding_top}px;` +
            `padding-bottom: ${t * padding_bottom}px;` +
            `margin-top: ${t * margin_top}px;` +
            `margin-bottom: ${t * margin_bottom}px;` +
            `border-top-width: ${t * border_top_width}px;` +
            `border-bottom-width: ${t * border_bottom_width}px;`
    };
}
function scale(node, { delay = 0, duration = 400, easing = _easing__WEBPACK_IMPORTED_MODULE_0__["cubicOut"], start = 0, opacity = 0 }) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === 'none' ? '' : style.transform;
    const sd = 1 - start;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (_t, u) => `
			transform: ${transform} scale(${1 - (sd * u)});
			opacity: ${target_opacity - (od * u)}
		`
    };
}
function draw(node, { delay = 0, speed, duration, easing = _easing__WEBPACK_IMPORTED_MODULE_0__["cubicInOut"] }) {
    const len = node.getTotalLength();
    if (duration === undefined) {
        if (speed === undefined) {
            duration = 800;
        }
        else {
            duration = len / speed;
        }
    }
    else if (typeof duration === 'function') {
        duration = duration(len);
    }
    return {
        delay,
        duration,
        easing,
        css: (t, u) => `stroke-dasharray: ${t * len} ${u * len}`
    };
}
function crossfade(_a) {
    var { fallback } = _a, defaults = __rest(_a, ["fallback"]);
    const to_receive = new Map();
    const to_send = new Map();
    function crossfade(from, node, params) {
        const { delay = 0, duration = d => Math.sqrt(d) * 30, easing = _easing__WEBPACK_IMPORTED_MODULE_0__["cubicOut"] } = Object(_internal__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_internal__WEBPACK_IMPORTED_MODULE_1__["assign"])({}, defaults), params);
        const to = node.getBoundingClientRect();
        const dx = from.left - to.left;
        const dy = from.top - to.top;
        const dw = from.width / to.width;
        const dh = from.height / to.height;
        const d = Math.sqrt(dx * dx + dy * dy);
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        const opacity = +style.opacity;
        return {
            delay,
            duration: Object(_internal__WEBPACK_IMPORTED_MODULE_1__["is_function"])(duration) ? duration(d) : duration,
            easing,
            css: (t, u) => `
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
        };
    }
    function transition(items, counterparts, intro) {
        return (node, params) => {
            items.set(params.key, {
                rect: node.getBoundingClientRect()
            });
            return () => {
                if (counterparts.has(params.key)) {
                    const { rect } = counterparts.get(params.key);
                    counterparts.delete(params.key);
                    return crossfade(rect, node, params);
                }
                // if the node is disappearing altogether
                // (i.e. wasn't claimed by the other list)
                // then we need to supply an outro
                items.delete(params.key);
                return fallback && fallback(node, params, intro);
            };
        };
    }
    return [
        transition(to_send, to_receive, false),
        transition(to_receive, to_send, true)
    ];
}




/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src??postcss!./app.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./resources/css/app.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App.svelte */ "./resources/js/components/App.svelte");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/app.css */ "./resources/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_2__);




/* harmony default export */ __webpack_exports__["default"] = (new _components_App_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
  target: document.body
}));


/***/ }),

/***/ "./resources/js/components/App.svelte":
/*!********************************************!*\
  !*** ./resources/js/components/App.svelte ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _TvWatchlist_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TvWatchlist.svelte */ "./resources/js/components/TvWatchlist.svelte");
/* harmony import */ var _Notifications_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notifications.svelte */ "./resources/js/components/Notifications.svelte");
/* harmony import */ var _adonisjs_websocket_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @adonisjs/websocket-client */ "./node_modules/@adonisjs/websocket-client/dist/Ws.browser.js");
/* harmony import */ var _adonisjs_websocket_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_adonisjs_websocket_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");
/* harmony import */ var _Users_grant_www_pete_live_resources_js_components_App_svelte_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/js/components/App.svelte.css */ "./resources/js/components/App.svelte.css");
/* harmony import */ var _Users_grant_www_pete_live_resources_js_components_App_svelte_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_grant_www_pete_live_resources_js_components_App_svelte_css__WEBPACK_IMPORTED_MODULE_5__);
/* resources/js/components/App.svelte generated by Svelte v3.6.7 */






const file = "resources/js/components/App.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.tab = list[i];
	return child_ctx;
}

// (47:2) {#each tabs as tab}
function create_each_block(ctx) {
	var button, t0_value = ctx.tab, t0, t1, dispose;

	function click_handler() {
		return ctx.click_handler(ctx);
	}

	return {
		c: function create() {
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, "class", "tab-control uppercase focus:outline-none py-1 px-2 mx-2 svelte-34onxr");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(button, "active", ctx.currentTab === ctx.tab);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 47, 4, 933);
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button, "click", click_handler);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, button, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(button, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(button, t1);
		},

		p: function update(changed, new_ctx) {
			ctx = new_ctx;
			if ((changed.currentTab || changed.tabs)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["toggle_class"])(button, "active", ctx.currentTab === ctx.tab);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(button);
			}

			dispose();
		}
	};
}

// (63:36) 
function create_if_block_1(ctx) {
	var p;

	return {
		c: function create() {
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			p.textContent = "movies";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 63, 2, 1263);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p, anchor);
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(p);
			}
		}
	};
}

// (61:0) {#if currentTab === 'tv'}
function create_if_block(ctx) {
	var current;

	var tvwatchlist = new _TvWatchlist_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({ $$inline: true });

	return {
		c: function create() {
			tvwatchlist.$$.fragment.c();
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(tvwatchlist, target, anchor);
			current = true;
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(tvwatchlist.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(tvwatchlist.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(tvwatchlist, detaching);
		}
	};
}

function create_fragment(ctx) {
	var t0, header, h1, t2, nav, t3, div, current_block_type_index, if_block, current;

	var notifications_1 = new _Notifications_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({ $$inline: true });

	var each_value = ctx.tabs;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	var if_block_creators = [
		create_if_block,
		create_if_block_1
	];

	var if_blocks = [];

	function select_block_type(ctx) {
		if (ctx.currentTab === 'tv') return 0;
		if ((ctx.currentTab === 'movies')) return 1;
		return -1;
	}

	if (~(current_block_type_index = select_block_type(ctx))) {
		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	}

	return {
		c: function create() {
			notifications_1.$$.fragment.c();
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			header = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("header");
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			h1.textContent = "Pete";
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			nav = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("nav");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			if (if_block) if_block.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(h1, "class", "leading-none");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 44, 2, 864);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(nav, file, 45, 2, 901);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(header, "class", "flex justify-between w-full p-5 bg-indigo-500 shadow-md");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(header, file, 43, 0, 789);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "py-12");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 59, 0, 1160);
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(notifications_1, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, header, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(header, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(header, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(header, nav);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(nav, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			if (~current_block_type_index) if_blocks[current_block_type_index].m(div, null);
			current = true;
		},

		p: function update(changed, ctx) {
			if (changed.currentTab || changed.tabs) {
				each_value = ctx.tabs;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(nav, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}

			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);
			if (current_block_type_index !== previous_block_index) {
				if (if_block) {
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
				}

				if (~current_block_type_index) {
					if_block = if_blocks[current_block_type_index];
					if (!if_block) {
						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block.c();
					}
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
					if_block.m(div, null);
				} else {
					if_block = null;
				}
			}
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(notifications_1.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(notifications_1.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},

		d: function destroy(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(notifications_1, detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(header);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t3);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			if (~current_block_type_index) if_blocks[current_block_type_index].d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $notifications;

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_store"])(_store__WEBPACK_IMPORTED_MODULE_4__["notifications"], 'notifications');
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["subscribe"])($$self, _store__WEBPACK_IMPORTED_MODULE_4__["notifications"], $$value => { $notifications = $$value; $$invalidate('$notifications', $notifications); });

	

const ws = _adonisjs_websocket_client__WEBPACK_IMPORTED_MODULE_3___default()()
ws.connect()

ws.on('open', () => {
  const notes = ws.subscribe('notifications')

  notes.on('message', data => {
    _store__WEBPACK_IMPORTED_MODULE_4__["notifications"].set([
      ...$notifications,
      data
    ])

    setTimeout(() => {
      const index = $notifications.findIndex(n => n.id === data.id)

      _store__WEBPACK_IMPORTED_MODULE_4__["notifications"].set([
        ...$notifications.slice(0, index),
        ...$notifications.slice(index + 1)
      ])
    }, 4000)
  })
})

let currentTab
const tabs = [
  'tv',
  'movies',
  'settings'
]

_store__WEBPACK_IMPORTED_MODULE_4__["activeTab"].subscribe(value => {
  $$invalidate('currentTab', currentTab = value)
})

	function click_handler({ tab }) {
		return _store__WEBPACK_IMPORTED_MODULE_4__["activeTab"].set(tab);
	}

	return { currentTab, tabs, click_handler };
}

class App extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (App);



/***/ }),

/***/ "./resources/js/components/App.svelte.css":
/*!************************************************!*\
  !*** ./resources/js/components/App.svelte.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??postcss!./App.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./resources/js/components/App.svelte.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/Loading.svelte":
/*!************************************************!*\
  !*** ./resources/js/components/Loading.svelte ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* resources/js/components/Loading.svelte generated by Svelte v3.6.7 */


const file = "resources/js/components/Loading.svelte";

function create_fragment(ctx) {
	var div, svg, g, circle0, animate0, animate1, animate2, circle1, animate3, animate4, animate5, circle2, animate6;

	return {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			svg = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("svg");
			g = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("g");
			circle0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("circle");
			animate0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("animate");
			animate1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("animate");
			animate2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("animate");
			circle1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("circle");
			animate3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("animate");
			animate4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("animate");
			animate5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("animate");
			circle2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("circle");
			animate6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("animate");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate0, "attributeName", "r");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate0, "begin", "1.5s");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate0, "dur", "3s");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate0, "values", "6;22");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate0, "calcMode", "linear");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate0, "repeatCount", "indefinite");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(animate0, file, 8, 8, 350);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate1, "attributeName", "stroke-opacity");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate1, "begin", "1.5s");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate1, "dur", "3s");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate1, "values", "1;0");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate1, "calcMode", "linear");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate1, "repeatCount", "indefinite");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(animate1, file, 14, 8, 517);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate2, "attributeName", "stroke-width");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate2, "begin", "1.5s");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate2, "dur", "3s");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate2, "values", "2;0");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate2, "calcMode", "linear");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate2, "repeatCount", "indefinite");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(animate2, file, 19, 8, 686);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle0, "cx", "22");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle0, "cy", "22");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle0, "r", "6");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle0, "stroke-opacity", "0");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(circle0, file, 7, 6, 292);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate3, "attributeName", "r");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate3, "begin", "3s");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate3, "dur", "3s");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate3, "values", "6;22");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate3, "calcMode", "linear");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate3, "repeatCount", "indefinite");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(animate3, file, 26, 8, 925);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate4, "attributeName", "stroke-opacity");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate4, "begin", "3s");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate4, "dur", "3s");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate4, "values", "1;0");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate4, "calcMode", "linear");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate4, "repeatCount", "indefinite");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(animate4, file, 32, 8, 1090);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate5, "attributeName", "stroke-width");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate5, "begin", "3s");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate5, "dur", "3s");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate5, "values", "2;0");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate5, "calcMode", "linear");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate5, "repeatCount", "indefinite");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(animate5, file, 37, 8, 1257);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle1, "cx", "22");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle1, "cy", "22");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle1, "r", "6");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle1, "stroke-opacity", "0");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(circle1, file, 25, 6, 867);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate6, "attributeName", "r");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate6, "begin", "0s");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate6, "dur", "1.5s");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate6, "values", "6;1;2;3;4;5;6");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate6, "calcMode", "linear");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(animate6, "repeatCount", "indefinite");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(animate6, file, 44, 8, 1475);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle2, "cx", "22");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle2, "cy", "22");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(circle2, "r", "8");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(circle2, file, 43, 6, 1436);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(g, "fill", "none");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(g, "fill-rule", "evenodd");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(g, "transform", "translate(1 1)");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(g, "stroke-width", "2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(g, file, 6, 4, 206);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "width", "90");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "height", "90");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "viewBox", "0 0 45 45");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "xmlns", "http://www.w3.org/2000/svg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "stroke", ctx.color);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(svg, file, 5, 2, 101);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "flex items-center justify-center py-12");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 4, 0, 46);
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, svg);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(svg, g);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(g, circle0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(circle0, animate0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(circle0, animate1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(circle0, animate2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(g, circle1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(circle1, animate3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(circle1, animate4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(circle1, animate5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(g, circle2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(circle2, animate6);
		},

		p: function update(changed, ctx) {
			if (changed.color) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(svg, "stroke", ctx.color);
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { color = '#fff' } = $$props;

	const writable_props = ['color'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Loading> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('color' in $$props) $$invalidate('color', color = $$props.color);
	};

	return { color };
}

class Loading extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], ["color"]);
	}

	get color() {
		throw new Error("<Loading>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set color(value) {
		throw new Error("<Loading>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./resources/js/components/Modal.svelte":
/*!**********************************************!*\
  !*** ./resources/js/components/Modal.svelte ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var svelte_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte/transition */ "./node_modules/svelte/transition/index.mjs");
/* harmony import */ var _Users_grant_www_pete_live_resources_js_components_Modal_svelte_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/js/components/Modal.svelte.css */ "./resources/js/components/Modal.svelte.css");
/* harmony import */ var _Users_grant_www_pete_live_resources_js_components_Modal_svelte_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_grant_www_pete_live_resources_js_components_Modal_svelte_css__WEBPACK_IMPORTED_MODULE_3__);
/* resources/js/components/Modal.svelte generated by Svelte v3.6.7 */




const file = "resources/js/components/Modal.svelte";

const get_action_slot_changes = () => ({});
const get_action_slot_context = () => ({});

const get_header_slot_changes = () => ({});
const get_header_slot_context = () => ({});

function create_fragment(ctx) {
	var div0, div0_transition, t0, div2, t1, t2, div1, button, t4, div2_transition, current, dispose;

	const header_slot_1 = ctx.$$slots.header;
	const header_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(header_slot_1, ctx, get_header_slot_context);

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(default_slot_1, ctx, null);

	const action_slot_1 = ctx.$$slots.action;
	const action_slot = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_slot"])(action_slot_1, ctx, get_action_slot_context);

	return {
		c: function create() {
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");

			if (header_slot) header_slot.c();
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();

			if (default_slot) default_slot.c();
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			button.textContent = "Close";
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();

			if (action_slot) action_slot.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "bg-black opacity-50 fixed inset-0 w-full h-full");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 18, 0, 351);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, "class", "btn");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 33, 4, 714);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "text-right");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 32, 2, 685);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "modal fixed bg-white rounded-lg shadow-lg p-6 overflow-auto text-gray-1000 svelte-1g2yio4");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 24, 0, 502);

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div0, "click", ctx.click_handler),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button, "click", ctx.click_handler_1)
			];
		},

		l: function claim(nodes) {
			if (header_slot) header_slot.l(div2_nodes);

			if (default_slot) default_slot.l(div2_nodes);

			if (action_slot) action_slot.l(div1_nodes);
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div2, anchor);

			if (header_slot) {
				header_slot.m(div2, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, t1);

			if (default_slot) {
				default_slot.m(div2, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, button);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t4);

			if (action_slot) {
				action_slot.m(div1, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			if (header_slot && header_slot.p && changed.$$scope) {
				header_slot.p(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(header_slot_1, ctx, changed, get_header_slot_changes), Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_context"])(header_slot_1, ctx, get_header_slot_context));
			}

			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(default_slot_1, ctx, changed, null), Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_context"])(default_slot_1, ctx, null));
			}

			if (action_slot && action_slot.p && changed.$$scope) {
				action_slot.p(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_changes"])(action_slot_1, ctx, changed, get_action_slot_changes), Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["get_slot_context"])(action_slot_1, ctx, get_action_slot_context));
			}
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => {
				if (!div0_transition) div0_transition = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_bidirectional_transition"])(div0, svelte_transition__WEBPACK_IMPORTED_MODULE_2__["fade"], { duration: 250 }, true);
				div0_transition.run(1);
			});

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(header_slot, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(default_slot, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(action_slot, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => {
				if (!div2_transition) div2_transition = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_bidirectional_transition"])(div2, svelte_transition__WEBPACK_IMPORTED_MODULE_2__["scale"], { duration: 250 }, true);
				div2_transition.run(1);
			});

			current = true;
		},

		o: function outro(local) {
			if (!div0_transition) div0_transition = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_bidirectional_transition"])(div0, svelte_transition__WEBPACK_IMPORTED_MODULE_2__["fade"], { duration: 250 }, false);
			div0_transition.run(0);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(header_slot, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(default_slot, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(action_slot, local);

			if (!div2_transition) div2_transition = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_bidirectional_transition"])(div2, svelte_transition__WEBPACK_IMPORTED_MODULE_2__["scale"], { duration: 250 }, false);
			div2_transition.run(0);

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div0);
				if (div0_transition) div0_transition.end();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div2);
			}

			if (header_slot) header_slot.d(detaching);

			if (default_slot) default_slot.d(detaching);

			if (action_slot) action_slot.d(detaching);

			if (detaching) {
				if (div2_transition) div2_transition.end();
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

  const dispatch = Object(svelte__WEBPACK_IMPORTED_MODULE_1__["createEventDispatcher"])()

	let { $$slots = {}, $$scope } = $$props;

	function click_handler() {
		return dispatch('close');
	}

	function click_handler_1() {
		return dispatch('close');
	}

	$$self.$set = $$props => {
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	return {
		dispatch,
		click_handler,
		click_handler_1,
		$$slots,
		$$scope
	};
}

class Modal extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Modal);



/***/ }),

/***/ "./resources/js/components/Modal.svelte.css":
/*!**************************************************!*\
  !*** ./resources/js/components/Modal.svelte.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??postcss!./Modal.svelte.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Modal.svelte.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/Notifications.svelte":
/*!******************************************************!*\
  !*** ./resources/js/components/Notifications.svelte ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/transition */ "./node_modules/svelte/transition/index.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");
/* resources/js/components/Notifications.svelte generated by Svelte v3.6.7 */




const file = "resources/js/components/Notifications.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.notification = list[i];
	return child_ctx;
}

// (16:0) {#each $notifications as notification (notification.id)}
function create_each_block(key_1, ctx) {
	var div, t0_value = ctx.notification.message, t0, t1, div_class_value, div_transition, current, dispose;

	function click_handler() {
		return ctx.click_handler(ctx);
	}

	return {
		key: key_1,

		first: null,

		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", div_class_value = "notification " + ctx.notification.type);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 16, 2, 427);
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(div, "click", click_handler);
			this.first = div;
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t1);
			current = true;
		},

		p: function update(changed, new_ctx) {
			ctx = new_ctx;
			if ((!current || changed.$notifications) && t0_value !== (t0_value = ctx.notification.message)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t0, t0_value);
			}

			if ((!current || changed.$notifications) && div_class_value !== (div_class_value = "notification " + ctx.notification.type)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", div_class_value);
			}
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => {
				if (!div_transition) div_transition = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_bidirectional_transition"])(div, svelte_transition__WEBPACK_IMPORTED_MODULE_1__["fade"], { duration: 250 }, true);
				div_transition.run(1);
			});

			current = true;
		},

		o: function outro(local) {
			if (!div_transition) div_transition = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_bidirectional_transition"])(div, svelte_transition__WEBPACK_IMPORTED_MODULE_1__["fade"], { duration: 250 }, false);
			div_transition.run(0);

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
				if (div_transition) div_transition.end();
			}

			dispose();
		}
	};
}

function create_fragment(ctx) {
	var aside, each_blocks = [], each_1_lookup = new Map(), current;

	var each_value = ctx.$notifications;

	const get_key = ctx => ctx.notification.id;

	for (var i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c: function create() {
			aside = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("aside");

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(aside, "class", "fixed top-0 right-0 overflow-y-scroll w-full max-w-sm px-4");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(aside, file, 14, 0, 293);
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, aside, anchor);

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].m(aside, null);

			current = true;
		},

		p: function update(changed, ctx) {
			const each_value = ctx.$notifications;

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
			each_blocks = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["update_keyed_each"])(each_blocks, changed, get_key, 1, ctx, each_value, each_1_lookup, aside, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["outro_and_destroy_block"], create_each_block, null, get_each_context);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
		},

		i: function intro(local) {
			if (current) return;
			for (var i = 0; i < each_value.length; i += 1) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i]);

			current = true;
		},

		o: function outro(local) {
			for (i = 0; i < each_blocks.length; i += 1) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(each_blocks[i]);

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(aside);
			}

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $notifications;

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_store"])(_store__WEBPACK_IMPORTED_MODULE_2__["notifications"], 'notifications');
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["subscribe"])($$self, _store__WEBPACK_IMPORTED_MODULE_2__["notifications"], $$value => { $notifications = $$value; $$invalidate('$notifications', $notifications); });

	

const remove = id => {
  const index = $notifications.findIndex(n => n.id === id)

  _store__WEBPACK_IMPORTED_MODULE_2__["notifications"].set([
    ...$notifications.slice(0, index),
    ...$notifications.slice(index + 1)
  ])
}

	function click_handler({ notification }) {
		return remove(notification.id);
	}

	return { remove, $notifications, click_handler };
}

class Notifications extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Notifications);

/***/ }),

/***/ "./resources/js/components/TvWatchlist.svelte":
/*!****************************************************!*\
  !*** ./resources/js/components/TvWatchlist.svelte ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Loading_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading.svelte */ "./resources/js/components/Loading.svelte");
/* harmony import */ var _Modal_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.svelte */ "./resources/js/components/Modal.svelte");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* resources/js/components/TvWatchlist.svelte generated by Svelte v3.6.7 */






const file = "resources/js/components/TvWatchlist.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.episode = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.season = list[i];
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.episode = list[i];
	return child_ctx;
}

function get_each_context_3(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.season = list[i];
	return child_ctx;
}

function get_each_context_4(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.show = list[i];
	child_ctx.index = i;
	return child_ctx;
}

// (110:2) {:else}
function create_else_block_2(ctx) {
	var div, each_blocks = [], each_1_lookup = new Map();

	var each_value_4 = ctx.shows;

	const get_key = ctx => ctx.show.id;

	for (var i = 0; i < each_value_4.length; i += 1) {
		let child_ctx = get_each_context_4(ctx, each_value_4, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block_4(key, child_ctx));
	}

	return {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "flex flex-wrap -mx-4");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 110, 4, 2504);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].m(div, null);
		},

		p: function update(changed, ctx) {
			const each_value_4 = ctx.shows;
			each_blocks = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["update_keyed_each"])(each_blocks, changed, get_key, 1, ctx, each_value_4, each_1_lookup, div, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_block"], create_each_block_4, null, get_each_context_4);
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].d();
		}
	};
}

// (108:2) {#if (loading)}
function create_if_block_4(ctx) {
	var current;

	var loading_1 = new _Loading_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({ $$inline: true });

	return {
		c: function create() {
			loading_1.$$.fragment.c();
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(loading_1, target, anchor);
			current = true;
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(loading_1.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(loading_1.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(loading_1, detaching);
		}
	};
}

// (112:6) {#each shows as show, index (show.id)}
function create_each_block_4(key_1, ctx) {
	var div1, div0, img, img_src_value, img_alt_value, t0, button0, t1, button0_disabled_value, t2, button1, t3, button1_disabled_value, t4, button2, t5, button2_class_value, button2_disabled_value, t6, dispose;

	function click_handler() {
		return ctx.click_handler(ctx);
	}

	function click_handler_1() {
		return ctx.click_handler_1(ctx);
	}

	function click_handler_2() {
		return ctx.click_handler_2(ctx);
	}

	return {
		key: key_1,

		first: null,

		c: function create() {
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			img = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Fetch season");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Configure");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Remove");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "class", "block w-full");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "src", img_src_value = "//image.tmdb.org/t/p/w342" + ctx.show.poster_path);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "alt", img_alt_value = ctx.show.name);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img, file, 114, 12, 2716);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button0, "class", "block py-1 text-sm md:text-base md:py-2 w-full text-gray-1000");
			button0.disabled = button0_disabled_value = ctx.show.fetching;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button0, file, 116, 12, 2824);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button1, "class", "block border-t border-gray-400 py-1 text-sm md:text-base md:py-2 w-full text-gray-1000");
			button1.disabled = button1_disabled_value = ctx.show.removing;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button1, file, 124, 12, 3101);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button2, "class", button2_class_value = "block border-t border-gray-400 py-1 text-sm md:text-base md:py-2 w-full text-red-" + (ctx.show.removing ? '200' : '800'));
			button2.disabled = button2_disabled_value = ctx.show.removing;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button2, file, 132, 12, 3404);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "bg-white rounded shadow overflow-hidden");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 113, 10, 2650);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "w-1/2 sm:w-1/3 lg:w-1/4 px-4 mb-8");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 112, 8, 2592);

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button0, "click", click_handler),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button1, "click", click_handler_1),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button2, "click", click_handler_2)
			];

			this.first = div1;
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, img);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, button0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(button0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, button1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(button1, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, button2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(button2, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t6);
		},

		p: function update(changed, new_ctx) {
			ctx = new_ctx;
			if ((changed.shows) && img_src_value !== (img_src_value = "//image.tmdb.org/t/p/w342" + ctx.show.poster_path)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "src", img_src_value);
			}

			if ((changed.shows) && img_alt_value !== (img_alt_value = ctx.show.name)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img, "alt", img_alt_value);
			}

			if ((changed.shows) && button0_disabled_value !== (button0_disabled_value = ctx.show.fetching)) {
				button0.disabled = button0_disabled_value;
			}

			if ((changed.shows) && button1_disabled_value !== (button1_disabled_value = ctx.show.removing)) {
				button1.disabled = button1_disabled_value;
			}

			if ((changed.shows) && button2_class_value !== (button2_class_value = "block border-t border-gray-400 py-1 text-sm md:text-base md:py-2 w-full text-red-" + (ctx.show.removing ? '200' : '800'))) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button2, "class", button2_class_value);
			}

			if ((changed.shows) && button2_disabled_value !== (button2_disabled_value = ctx.show.removing)) {
				button2.disabled = button2_disabled_value;
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div1);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

// (147:0) {#if modals.showConfigureModal}
function create_if_block_2(ctx) {
	var current;

	var modal = new _Modal_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
		props: {
		$$slots: {
		default: [create_default_slot_1],
		action: [create_action_slot_1],
		header: [create_header_slot_1]
	},
		$$scope: { ctx }
	},
		$$inline: true
	});
	modal.$on("close", ctx.close_handler);

	return {
		c: function create() {
			modal.$$.fragment.c();
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(modal, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var modal_changes = {};
			if (changed.$$scope || changed.modalLoading || changed.showData || changed.availableSeasons || changed.selectedShow) modal_changes.$$scope = { changed, ctx };
			modal.$set(modal_changes);
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(modal.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(modal.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(modal, detaching);
		}
	};
}

// (149:2) <h3 slot="header">
function create_header_slot_1(ctx) {
	var h3, t_value = ctx.selectedShow.name, t;

	return {
		c: function create() {
			h3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h3");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(h3, "slot", "header");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h3, file, 148, 2, 3870);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h3, t);
		},

		p: function update(changed, ctx) {
			if ((changed.selectedShow) && t_value !== (t_value = ctx.selectedShow.name)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h3);
			}
		}
	};
}

// (153:2) {:else}
function create_else_block_1(ctx) {
	var form, label0, span0, t1, select0, t2, label1, span1, t4, select1, t5, label2, span2, t7, select2, option0, option1, option2, t11, div, label3, input, t12, span3, dispose;

	var each_value_3 = Object.keys(ctx.availableSeasons);

	var each_blocks_1 = [];

	for (var i = 0; i < each_value_3.length; i += 1) {
		each_blocks_1[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
	}

	var each_value_2 = ctx.availableSeasons[ctx.showData.start_season];

	var each_blocks = [];

	for (var i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	return {
		c: function create() {
			form = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("form");
			label0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span0.textContent = "Start season";
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			select0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("select");

			for (var i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			label1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span1.textContent = "Start episode";
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			select1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("select");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			label2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			span2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span2.textContent = "Quality";
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			select2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("select");
			option0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("option");
			option0.textContent = "HDTV";
			option1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("option");
			option1.textContent = "720p";
			option2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("option");
			option2.textContent = "1080p";
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			label3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			input = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("input");
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			span3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span3.textContent = "Use alternate quality when desired quality isn't found";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span0, "class", "text-gray-700");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span0, file, 155, 8, 4095);
			if (ctx.showData.start_season === void 0) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => ctx.select0_change_handler.call(select0));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(select0, "class", "form-select mt-1 block w-full");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(select0, file, 156, 8, 4151);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label0, "class", "block");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(label0, file, 154, 6, 4065);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "class", "text-gray-700");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span1, file, 164, 8, 4449);
			if (ctx.showData.start_episode === void 0) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => ctx.select1_change_handler.call(select1));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(select1, "class", "form-select mt-1 block w-full");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(select1, file, 165, 8, 4506);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label1, "class", "block mt-4");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(label1, file, 163, 6, 4414);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span2, "class", "text-gray-700");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span2, file, 173, 8, 4810);
			option0.__value = "HDTV";
			option0.value = option0.__value;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(option0, file, 175, 10, 4950);
			option1.__value = "720p";
			option1.value = option1.__value;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(option1, file, 176, 10, 4995);
			option2.__value = "1080p";
			option2.value = option2.__value;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(option2, file, 177, 10, 5040);
			if (ctx.showData.quality === void 0) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => ctx.select2_change_handler.call(select2));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(select2, "class", "form-select mt-1 block w-full");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(select2, file, 174, 8, 4861);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label2, "class", "block mt-4");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(label2, file, 172, 6, 4775);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "type", "checkbox");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(input, "class", "form-checkbox");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(input, file, 183, 10, 5198);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span3, "class", "ml-2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span3, file, 184, 10, 5296);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label3, "class", "flex items-center");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(label3, file, 182, 8, 5154);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "flex mt-4 mb-4");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 181, 6, 5117);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(form, "class", "py-4");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(form, file, 153, 4, 3992);

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(select0, "change", ctx.select0_change_handler),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(select1, "change", ctx.select1_change_handler),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(select2, "change", ctx.select2_change_handler),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(input, "change", ctx.input_change_handler),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(form, "submit", Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["prevent_default"])(ctx.saveConfiguration))
			];
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, form, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(form, label0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label0, span0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label0, select0);

			for (var i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(select0, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_option"])(select0, ctx.showData.start_season)

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(form, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(form, label1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label1, span1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label1, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label1, select1);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select1, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_option"])(select1, ctx.showData.start_episode)

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(form, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(form, label2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label2, span2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label2, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label2, select2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(select2, option0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(select2, option1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(select2, option2);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_option"])(select2, ctx.showData.quality)

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(form, t11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(form, div);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, label3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label3, input);

			input.checked = ctx.showData.use_alt_quality;

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label3, t12);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label3, span3);
		},

		p: function update(changed, ctx) {
			if (changed.availableSeasons) {
				each_value_3 = Object.keys(ctx.availableSeasons);

				for (var i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3(ctx, each_value_3, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(changed, child_ctx);
					} else {
						each_blocks_1[i] = create_each_block_3(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(select0, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}
				each_blocks_1.length = each_value_3.length;
			}

			if (changed.showData) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_option"])(select0, ctx.showData.start_season)

			if (changed.availableSeasons || changed.showData) {
				each_value_2 = ctx.availableSeasons[ctx.showData.start_season];

				for (var i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block_2(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value_2.length;
			}

			if (changed.showData) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_option"])(select1, ctx.showData.start_episode)
			if (changed.showData) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_option"])(select2, ctx.showData.quality)
			if (changed.showData) input.checked = ctx.showData.use_alt_quality;
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(form);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks_1, detaching);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

// (151:2) {#if modalLoading}
function create_if_block_3(ctx) {
	var current;

	var loading_1 = new _Loading_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
		props: { color: "hsl(210, 24%, 16%)" },
		$$inline: true
	});

	return {
		c: function create() {
			loading_1.$$.fragment.c();
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(loading_1, target, anchor);
			current = true;
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(loading_1.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(loading_1.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(loading_1, detaching);
		}
	};
}

// (158:10) {#each Object.keys(availableSeasons) as season}
function create_each_block_3(ctx) {
	var option, t_value = ctx.season, t, option_value_value;

	return {
		c: function create() {
			option = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("option");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			option.__value = option_value_value = Number(ctx.season);
			option.value = option.__value;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(option, file, 158, 12, 4305);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, option, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(option, t);
		},

		p: function update(changed, ctx) {
			if ((changed.availableSeasons) && t_value !== (t_value = ctx.season)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
			}

			if ((changed.availableSeasons) && option_value_value !== (option_value_value = Number(ctx.season))) {
				option.__value = option_value_value;
			}

			option.value = option.__value;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(option);
			}
		}
	};
}

// (167:10) {#each availableSeasons[showData.start_season] as episode}
function create_each_block_2(ctx) {
	var option, t_value = ctx.episode, t, option_value_value;

	return {
		c: function create() {
			option = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("option");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			option.__value = option_value_value = ctx.episode;
			option.value = option.__value;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(option, file, 167, 12, 4672);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, option, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(option, t);
		},

		p: function update(changed, ctx) {
			if ((changed.availableSeasons || changed.showData) && t_value !== (t_value = ctx.episode)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
			}

			if ((changed.availableSeasons || changed.showData) && option_value_value !== (option_value_value = ctx.episode)) {
				option.__value = option_value_value;
			}

			option.value = option.__value;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(option);
			}
		}
	};
}

// (191:2) <button     slot="action"     class="btn btn-primary ml-2"     on:click="{saveConfiguration}"     disabled="{modalLoading}"     type="button"   >
function create_action_slot_1(ctx) {
	var button, t, dispose;

	return {
		c: function create() {
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Save");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, "slot", "action");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, "class", "btn btn-primary ml-2");
			button.disabled = ctx.modalLoading;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, "type", "button");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 190, 2, 5430);
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button, "click", ctx.saveConfiguration);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, button, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(button, t);
		},

		p: function update(changed, ctx) {
			if (changed.modalLoading) {
				button.disabled = ctx.modalLoading;
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(button);
			}

			dispose();
		}
	};
}

// (148:0) <Modal on:close="{() => modals.showConfigureModal = false}">
function create_default_slot_1(ctx) {
	var t0, current_block_type_index, if_block, t1, current;

	var if_block_creators = [
		create_if_block_3,
		create_else_block_1
	];

	var if_blocks = [];

	function select_block_type_1(ctx) {
		if (ctx.modalLoading) return 0;
		return 1;
	}

	current_block_type_index = select_block_type_1(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if_block.c();
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			if_blocks[current_block_type_index].m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_1(ctx);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, ctx);
			} else {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();

				if_block = if_blocks[current_block_type_index];
				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
				if_block.m(t1.parentNode, t1);
			}
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
			}

			if_blocks[current_block_type_index].d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			}
		}
	};
}

// (203:0) {#if modals.showFetchModal}
function create_if_block(ctx) {
	var current;

	var modal = new _Modal_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
		props: {
		$$slots: {
		default: [create_default_slot],
		action: [create_action_slot],
		header: [create_header_slot]
	},
		$$scope: { ctx }
	},
		$$inline: true
	});
	modal.$on("close", ctx.close_handler_1);

	return {
		c: function create() {
			modal.$$.fragment.c();
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(modal, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var modal_changes = {};
			if (changed.$$scope || changed.modalLoading || changed.showData || changed.availableSeasons || changed.selectedShow) modal_changes.$$scope = { changed, ctx };
			modal.$set(modal_changes);
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(modal.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(modal.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(modal, detaching);
		}
	};
}

// (205:2) <h3 slot="header">
function create_header_slot(ctx) {
	var h3, t_value = ctx.selectedShow.name, t;

	return {
		c: function create() {
			h3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h3");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(h3, "slot", "header");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h3, file, 204, 2, 5700);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h3, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(h3, t);
		},

		p: function update(changed, ctx) {
			if ((changed.selectedShow) && t_value !== (t_value = ctx.selectedShow.name)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(h3);
			}
		}
	};
}

// (209:2) {:else}
function create_else_block(ctx) {
	var form, label0, span0, t1, select0, t2, label1, span1, t4, select1, dispose;

	var each_value_1 = Object.keys(ctx.availableSeasons);

	var each_blocks_1 = [];

	for (var i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	var each_value = ctx.availableSeasons[ctx.showData.start_season];

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c: function create() {
			form = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("form");
			label0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span0.textContent = "Start season";
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			select0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("select");

			for (var i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			label1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("label");
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			span1.textContent = "Start episode";
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			select1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("select");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span0, "class", "text-gray-700");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span0, file, 211, 8, 5919);
			if (ctx.showData.start_season === void 0) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => ctx.select0_change_handler_1.call(select0));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(select0, "class", "form-select mt-1 block w-full");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(select0, file, 212, 8, 5975);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label0, "class", "block");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(label0, file, 210, 6, 5889);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(span1, "class", "text-gray-700");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span1, file, 220, 8, 6273);
			if (ctx.showData.start_episode === void 0) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => ctx.select1_change_handler_1.call(select1));
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(select1, "class", "form-select mt-1 block w-full");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(select1, file, 221, 8, 6330);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label1, "class", "block mt-4");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(label1, file, 219, 6, 6238);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(form, "class", "py-4");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(form, file, 209, 4, 5822);

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(select0, "change", ctx.select0_change_handler_1),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(select1, "change", ctx.select1_change_handler_1),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(form, "submit", Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["prevent_default"])(ctx.fetchSeason))
			];
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, form, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(form, label0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label0, span0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label0, select0);

			for (var i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(select0, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_option"])(select0, ctx.showData.start_season)

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(form, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(form, label1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label1, span1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label1, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(label1, select1);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select1, null);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_option"])(select1, ctx.showData.start_episode)
		},

		p: function update(changed, ctx) {
			if (changed.availableSeasons) {
				each_value_1 = Object.keys(ctx.availableSeasons);

				for (var i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(changed, child_ctx);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(select0, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}
				each_blocks_1.length = each_value_1.length;
			}

			if (changed.showData) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_option"])(select0, ctx.showData.start_season)

			if (changed.availableSeasons || changed.showData) {
				each_value = ctx.availableSeasons[ctx.showData.start_season];

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}

			if (changed.showData) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_option"])(select1, ctx.showData.start_episode)
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(form);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks_1, detaching);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

// (207:2) {#if modalLoading}
function create_if_block_1(ctx) {
	var current;

	var loading_1 = new _Loading_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
		props: { color: "hsl(210, 24%, 16%)" },
		$$inline: true
	});

	return {
		c: function create() {
			loading_1.$$.fragment.c();
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(loading_1, target, anchor);
			current = true;
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(loading_1.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(loading_1.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(loading_1, detaching);
		}
	};
}

// (214:10) {#each Object.keys(availableSeasons) as season}
function create_each_block_1(ctx) {
	var option, t_value = ctx.season, t, option_value_value;

	return {
		c: function create() {
			option = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("option");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			option.__value = option_value_value = Number(ctx.season);
			option.value = option.__value;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(option, file, 214, 12, 6129);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, option, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(option, t);
		},

		p: function update(changed, ctx) {
			if ((changed.availableSeasons) && t_value !== (t_value = ctx.season)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
			}

			if ((changed.availableSeasons) && option_value_value !== (option_value_value = Number(ctx.season))) {
				option.__value = option_value_value;
			}

			option.value = option.__value;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(option);
			}
		}
	};
}

// (223:10) {#each availableSeasons[showData.start_season] as episode}
function create_each_block(ctx) {
	var option, t_value = ctx.episode, t, option_value_value;

	return {
		c: function create() {
			option = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("option");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t_value);
			option.__value = option_value_value = ctx.episode;
			option.value = option.__value;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(option, file, 223, 12, 6496);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, option, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(option, t);
		},

		p: function update(changed, ctx) {
			if ((changed.availableSeasons || changed.showData) && t_value !== (t_value = ctx.episode)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data"])(t, t_value);
			}

			if ((changed.availableSeasons || changed.showData) && option_value_value !== (option_value_value = ctx.episode)) {
				option.__value = option_value_value;
			}

			option.value = option.__value;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(option);
			}
		}
	};
}

// (231:2) <button     slot="action"     class="btn btn-primary ml-2"     on:click="{fetchSeason}"     disabled="{modalLoading}"     type="button"   >
function create_action_slot(ctx) {
	var button, t, dispose;

	return {
		c: function create() {
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Fetch");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, "slot", "action");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, "class", "btn btn-primary ml-2");
			button.disabled = ctx.modalLoading;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button, "type", "button");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 230, 2, 6615);
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button, "click", ctx.fetchSeason);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, button, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(button, t);
		},

		p: function update(changed, ctx) {
			if (changed.modalLoading) {
				button.disabled = ctx.modalLoading;
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(button);
			}

			dispose();
		}
	};
}

// (204:0) <Modal on:close="{() => modals.showFetchModal = false}">
function create_default_slot(ctx) {
	var t0, current_block_type_index, if_block, t1, current;

	var if_block_creators = [
		create_if_block_1,
		create_else_block
	];

	var if_blocks = [];

	function select_block_type_2(ctx) {
		if (ctx.modalLoading) return 0;
		return 1;
	}

	current_block_type_index = select_block_type_2(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if_block.c();
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			if_blocks[current_block_type_index].m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t1, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_2(ctx);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, ctx);
			} else {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();

				if_block = if_blocks[current_block_type_index];
				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
				if_block.m(t1.parentNode, t1);
			}
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
			}

			if_blocks[current_block_type_index].d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t1);
			}
		}
	};
}

function create_fragment(ctx) {
	var div, h2, t1, current_block_type_index, if_block0, t2, t3, if_block2_anchor, current;

	var if_block_creators = [
		create_if_block_4,
		create_else_block_2
	];

	var if_blocks = [];

	function select_block_type(ctx) {
		if ((ctx.loading)) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	var if_block1 = (ctx.modals.showConfigureModal) && create_if_block_2(ctx);

	var if_block2 = (ctx.modals.showFetchModal) && create_if_block(ctx);

	return {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h2");
			h2.textContent = "TV Watchlist";
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if_block0.c();
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block1) if_block1.c();
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block2) if_block2.c();
			if_block2_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h2, file, 105, 2, 2433);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div, "class", "container");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 104, 0, 2407);
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, h2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div, t1);
			if_blocks[current_block_type_index].m(div, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t2, anchor);
			if (if_block1) if_block1.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t3, anchor);
			if (if_block2) if_block2.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, if_block2_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, ctx);
			} else {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();

				if_block0 = if_blocks[current_block_type_index];
				if (!if_block0) {
					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block0.c();
				}
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block0, 1);
				if_block0.m(div, null);
			}

			if (ctx.modals.showConfigureModal) {
				if (if_block1) {
					if_block1.p(changed, ctx);
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block1, 1);
				} else {
					if_block1 = create_if_block_2(ctx);
					if_block1.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block1, 1);
					if_block1.m(t3.parentNode, t3);
				}
			} else if (if_block1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block1, 1, 1, () => {
					if_block1 = null;
				});
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			if (ctx.modals.showFetchModal) {
				if (if_block2) {
					if_block2.p(changed, ctx);
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block2, 1);
				} else {
					if_block2 = create_if_block(ctx);
					if_block2.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block2, 1);
					if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
				}
			} else if (if_block2) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block2, 1, 1, () => {
					if_block2 = null;
				});
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}
		},

		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block2);
			current = true;
		},

		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block2);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div);
			}

			if_blocks[current_block_type_index].d();

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t2);
			}

			if (if_block1) if_block1.d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t3);
			}

			if (if_block2) if_block2.d(detaching);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(if_block2_anchor);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

  let loading = true
  let shows = []
  let selectedShow = {}
  const modals = {
    showConfigureModal: false,
    showFetchModal: false
  }
  let modalLoading = false
  let showData = {}
  let availableSeasons = {}

  const getList = async () => {
    $$invalidate('loading', loading = true)

    const { data } = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/v1/tv')
    $$invalidate('shows', shows = data.map(show => {
      show.removing = false
      show.fetching = false

      return show
    }))

    $$invalidate('loading', loading = false)
  }

  const removeShow = async (show, index) => {
    shows[index].removing = true; $$invalidate('shows', shows);

    try {
      await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/api/v1/watchlist/update`, {
        media_type: 'tv',
        media_id: show.id,
        watchlist: false
      })

      shows.splice(index, 1)
      $$invalidate('shows', shows)
    } catch (err) {
      alert(err.message)
      shows[index].removing = false; $$invalidate('shows', shows);
    }
  }

  const configure = async (index, modal) => {
    $$invalidate('modalLoading', modalLoading = true)
    $$invalidate('selectedShow', selectedShow = shows[index])
    modals[modal] = true; $$invalidate('modals', modals);

    // Fetch the show configuration
    try {
      const { data } = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/api/v1/tv/${selectedShow.id}`)
      $$invalidate('showData', showData = data)
    } catch (err) {
      if (err.message.includes('404')) {
        // If the movie wasn't found, create it on the fly
        const { data } = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/api/v1/tv/${selectedShow.id}/tmdb`)
        $$invalidate('showData', showData = data)
      }
    }

    await setAvailableSeasons(selectedShow)
    $$invalidate('modalLoading', modalLoading = false)
  }

  const setAvailableSeasons = async show => {
    const { data } = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/api/v1/tv/${show.id}/tmdb`)
    $$invalidate('availableSeasons', availableSeasons = data.seasons.reduce((seasons, season) => {
      // Ignore season zero
      if (season.season_number !== 0) {
        seasons[season.season_number] = []
        let i = 1

        while (i <= season.episode_count) {
          seasons[season.season_number].push(i++)
        }
      }

      return seasons
    }, {}))
  }

  const saveConfiguration = async e => {
    await axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(`/api/v1/tv/${showData.tmdb_id}`, showData)
    modals.showConfigureModal = false; $$invalidate('modals', modals);
  }

  const fetchSeason = e => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/api/v1/tv/${showData.tmdb_id}/fetch`, {
      season: showData.start_season,
      start: showData.start_episode
    })

    modals.showFetchModal = false; $$invalidate('modals', modals);
  }

  Object(svelte__WEBPACK_IMPORTED_MODULE_4__["onMount"])(getList)

	function click_handler({ index }) {
		return configure(index, 'showFetchModal');
	}

	function click_handler_1({ index }) {
		return configure(index, 'showConfigureModal');
	}

	function click_handler_2({ show, index }) {
		return removeShow(show, index);
	}

	function select0_change_handler() {
		showData.start_season = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_value"])(this);
		$$invalidate('showData', showData);
		$$invalidate('availableSeasons', availableSeasons);
	}

	function select1_change_handler() {
		showData.start_episode = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_value"])(this);
		$$invalidate('showData', showData);
		$$invalidate('availableSeasons', availableSeasons);
	}

	function select2_change_handler() {
		showData.quality = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_value"])(this);
		$$invalidate('showData', showData);
		$$invalidate('availableSeasons', availableSeasons);
	}

	function input_change_handler() {
		showData.use_alt_quality = this.checked;
		$$invalidate('showData', showData);
		$$invalidate('availableSeasons', availableSeasons);
	}

	function close_handler() {
		const $$result = modals.showConfigureModal = false;
		$$invalidate('modals', modals);
		return $$result;
	}

	function select0_change_handler_1() {
		showData.start_season = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_value"])(this);
		$$invalidate('showData', showData);
		$$invalidate('availableSeasons', availableSeasons);
	}

	function select1_change_handler_1() {
		showData.start_episode = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["select_value"])(this);
		$$invalidate('showData', showData);
		$$invalidate('availableSeasons', availableSeasons);
	}

	function close_handler_1() {
		const $$result = modals.showFetchModal = false;
		$$invalidate('modals', modals);
		return $$result;
	}

	return {
		loading,
		shows,
		selectedShow,
		modals,
		modalLoading,
		showData,
		availableSeasons,
		removeShow,
		configure,
		saveConfiguration,
		fetchSeason,
		click_handler,
		click_handler_1,
		click_handler_2,
		select0_change_handler,
		select1_change_handler,
		select2_change_handler,
		input_change_handler,
		close_handler,
		select0_change_handler_1,
		select1_change_handler_1,
		close_handler_1
	};
}

class TvWatchlist extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (TvWatchlist);

/***/ }),

/***/ "./resources/js/store.js":
/*!*******************************!*\
  !*** ./resources/js/store.js ***!
  \*******************************/
/*! exports provided: activeTab, notifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeTab", function() { return activeTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifications", function() { return notifications; });
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/store/index.mjs");


let activeTab = Object(svelte_store__WEBPACK_IMPORTED_MODULE_0__["writable"])('tv')

let notifications = Object(svelte_store__WEBPACK_IMPORTED_MODULE_0__["writable"])([])


/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./resources/js/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./resources/js/app.js */"./resources/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map