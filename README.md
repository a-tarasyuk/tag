# tag

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/a-tarasyuk/tag/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/tag.svg?style=flat-square)](https://www.npmjs.com/package/tag) [![npm downloads](https://img.shields.io/npm/dm/tag.svg?style=flat-square)](https://www.npmjs.com/package/tag) [![Build Status](https://img.shields.io/travis/a-tarasyuk/tag/master.svg?style=flat-square)](https://travis-ci.org/a-tarasyuk/tag) [![David](https://img.shields.io/david/a-tarasyuk/tag.svg?style=flat-square)](https://github.com/a-tarasyuk/tag) [![David](https://img.shields.io/david/dev/a-tarasyuk/tag.svg?style=flat-square)](https://github.com/a-tarasyuk/tag)

> Library for creating DOM elements


## Installation

```shell
npm install tag --save
```

```html
<script src="tag.umd.js"></script>
```
## `tag(name, *attributes, children)`
* **Parameters**
    - **name**: String
    - **attributes**: Object (optional)
    - **children**: Array | String
*  **Returns** - HTMLElement

## Example

```javascript
import tag from 'tag';

tag('div', { id: 'content' }, 'content')

tag('div', { id: 'content' }, [
  tag('span', 'content')
])

tag('div', [
  tag('span', '<strong>content</strong>')
])

tag('hr')

tag('label', [
  tag('input', { type: 'text' }),
  'Label text'
])
```
