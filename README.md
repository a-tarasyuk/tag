# tag 

Small utility for creating DOM elements

### Installation
```shell
bower install tag --save
```

```shell
npm install d-tag --save
```

```html
<script src="tag.js"></script> 
```

### Usage

*Basic usage*

```js
tag('div', {id: 'content'}, 'content')
tag('div', {id: 'content'}, [tag('span', 'content')])
tag('div', {id: 'content'}, [tag('span', '<strong>content</strong>')])
```

```js
var tags = tag(['div', 'span'])
tags.div({id: 'content'}, 'content')
tags.div({id: 'content'}, [tags.span('content')])
```

*Also you can init all tags which you need and after use their as functions in global scope,*
```js
tag(['div', 'span'], true)

div({id: 'content'}, 'content')
div({id: 'content'}, [span('content')])
```

*and also you can set custom namespace*

```js
tag(['div', 'span'], true, 'tags')

tags.div({id: 'content'}, 'content')
tags.div({id: 'content'}, [tags.span('content')])
```

### Release History
- 0.1.0 Change npm package name
- 0.0.6 Publish package to https://www.npmjs.com/ (name **d-tag**) 
- 0.0.5 Add support CommonJS
- First Release