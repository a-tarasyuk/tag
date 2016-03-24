/*global define, window*/

(function (root, factory) {
  'use strict';

  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    root.tag = factory();
  }
}(this, function () {
  'use strict';

  /**
   * forIn
   *
   * @param {Object}   object
   * @param {Function} next
   *
   * @return undefined
   */
  function forIn(object, next) {
    var key;

    for (key in object) {
      if (object.hasOwnProperty(key)) {
        next(object[key], key, object);
      }
    }
  }

  /**
   * isArray
   *
   * @param {*} value
   *
   * @return {Boolean}
   */
  function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  }

  /**
   * isElement
   *
   * @param {*} value
   *
   * @return {Boolean}
   */
  function isElement(value) {
    return !!(value && value.nodeType);
  }

  /**
   * isObject
   *
   * @param {*} value
   *
   * @return {Boolean}
   */
  function isObject(value) {
    return (value !== null) && (typeof (value) === 'object');
  }

  /**
   * isString
   *
   * @param {*} value
   *
   * @return {Boolean}
   */
  function isString(value) {
    return typeof (value) === 'string';
  }

  /**
   * append
   *
   * @param {Object} element
   * @param {*}      content
   *
   * @return {Object}
   */
  function append(element, content) {
    if(isElement(content)) {
      element.appendChild(content);
    } else {
      element.appendChild(document.createTextNode(content || ''));
    }
  }

  /**
   * createElement
   *
   * @param {String} tag
   *
   * @return {Function}
   */
  function createElement(tag) {
    return function (attrs, content) {
      var i,
          len,
          element  = document.createElement(tag),
          _content = content;
      
      if (arguments.length === 0) {
        return element;
      }
      
      if (!isString(attrs) && !isArray(attrs) && !isElement(attrs)) {
        forIn(attrs, function (value, name) {
          element.setAttribute(name, value);
        });
      } else {
        _content = attrs;
      }

      if (isArray(_content)) {
        for (i = 0, len = _content.length; i < len; i++) {
          append(element, _content[i]);
        }
      } else {
        append(element, _content);
      }

      return element;
    };
  }

  return function() {
    var args     = Array.prototype.slice.call(arguments, 0),
        root     = args[0],
        children = args.slice(1);

    if (!isString(root)) {
      throw new Error('first argument must be String and can not be empty');
    }

    return createElement(root).apply(null, children);
  };
}));
