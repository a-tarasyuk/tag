/**
 * Tag - Library for creating DOM elements
 *
 * (c) Alexander Tarasyuk <alexander.v.tarasyuk@gmail.com>
 */

const VOID_TAGS = [
  'area',
  'base',
  'br',
  'col',
  'command',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
];

/**
 * isArray
 *
 * @param {*} value
 *
 * @return {Boolean}
 */
const isArray = (value) => ({}).toString.call(value) === '[object Array]';

/**
 * isElement
 *
 * @param {*} value
 *
 * @return {Boolean}
 */
const isElement = (value) => !!(value && value.nodeType);

/**
 * isObject
 *
 * @param {*} value
 *
 * @return {Boolean}
 */
const isObject = (value) => value !== null && typeof (value) === 'object' && !isArray(value);

/**
 * isString
 *
 * @param {*} value
 *
 * @return {Boolean}
 */
const isString = (value) => typeof (value) === 'string';

/**
 * isVoidElement
 *
 * @param {String} tagName
 *
 * @return {Boolean}
 */
const isVoidElement = (tagName) => VOID_TAGS.indexOf(tagName) >= 0;

/**
 * append
 *
 * @param {Object} element
 * @param {*}      content
 *
 * @return undefined
 */
function append(element, content) {
  if (isElement(content)) {
    element.appendChild(content);
  } else {
    const div = document.createElement('div');
    div.innerHTML = content || '';

    while (div.firstChild) {
      element.appendChild(div.firstChild);
    }
  }
}

/**
 * createElement
 *
 * @param {String} tagName
 *
 * @return {Function}
 */
function createElement(tagName) {
  return function (...args) {
    const element = document.createElement(tagName);
    const attrs = isObject(args[0]) ? args[0] : {};
    const children = args.length === 2 ? args[1] : args[0];

    Object
      .keys(attrs)
      .forEach((name) => element.setAttribute(name, attrs[name]));

    if (isArray(children)) {
      children.forEach((node) => append(element, node));
    }

    if (isString(children) && !isVoidElement(tagName.toLowerCase())) {
      append(element, children);
    }

    return element;
  };
}

export function tag(...args) {
  const root = args[0];
  const children = args.slice(1);

  if (!isString(root)) {
    throw new Error('first argument must be String and can not be empty');
  }

  return createElement(root).apply(null, children);
}
