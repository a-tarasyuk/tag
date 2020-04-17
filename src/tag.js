/**
 * Tag - Library for creating DOM elements
 *
 * (c) Alexander Tarasyuk <alexander.tarasyuk@outlook.com>
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
  'wbr',
];

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
const isObject = (value) => value !== null && typeof (value) === 'object' && !Array.isArray(value);

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
  return function (...props) {
    const element  = document.createElement(tagName);
    const attrs    = isObject(props[0]) ? props[0] : {};
    const children = props.length === 2 ? props[1] : props[0];

    Object
      .keys(attrs)
      .forEach(name => element.setAttribute(name, attrs[name]));

    if (Array.isArray(children)) {
      children.forEach(node => append(element, node));
    }

    if (isString(children) && !isVoidElement(tagName.toLowerCase())) {
      append(element, children);
    }

    return element;
  };
}

export default (tagName, ...props) => {
  if (!isString(tagName)) {
    throw new Error('[tag] First argument must be String and can not be empty');
  }

  return createElement(tagName).apply(null, props);
}
