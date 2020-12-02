# tag

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/a-tarasyuk/tag/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/tag.svg?style=flat-square)](https://www.npmjs.com/package/tag) [![npm downloads](https://img.shields.io/npm/dm/tag.svg?style=flat-square)](https://www.npmjs.com/package/tag) [![Build Status](https://img.shields.io/travis/a-tarasyuk/tag/master.svg?style=flat-square)](https://travis-ci.org/a-tarasyuk/tag) ![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/tag.svg?style=flat-square) ![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/tag.svg?style=flat-square)

## Installation

```shell
npm install tag --save
```

or

```html
<script src="tag.iife.js"></script>
```

## `tag(name, *attributes, children)`

- **Parameters**
  - **name**: String
  - **attributes**: Object (optional)
  - **children**: Array | String
- **Returns** - HTMLElement

## Example

```javascript
import tag from 'tag';

tag('div', { id: 'content' }, 'content');

tag('div', { id: 'content' }, [tag('span', 'content')]);

tag('div', [tag('span', '<strong>content</strong>')]);

tag('hr');

tag('label', [tag('input', { type: 'text' }), 'Label text']);
```

## License and Copyright

This software is released under the terms of the [MIT license](https://github.com/a-tarasyuk/tag/blob/master/LICENSE).
