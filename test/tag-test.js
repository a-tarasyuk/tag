suite('tag', function () {
  var container = document.createElement('div');

  function clear() {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    return container;
  }

  setup(function () {
    clear();
  });

  test('should be error if first argument is not String or Array', function () {
    assert.throw(tag, 'first argument must be Array or String and can not be empty');
  });

  test('should be available in local scope all elements which were specified in elements array', function () {
    var t = tag(['div', 'span']);

    assert.isFunction(t.div);
    assert.isFunction(t.span);
  });

  test('should be available in global scope all elements which were specified in elements array', function () {
    tag(['div', 'span'], true);

    assert.isFunction(window.div);
    assert.isFunction(window.span);
  });

  test('should be available in namespace in global scope all elements which were specified in elements array', function () {
    tag(['div', 'span'], true, 'tags');

    assert.isFunction(window.tags.div);
    assert.isFunction(window.tags.span);
  });

  suite('#tag("tag name")', function () {
    test('should be created new div', function () {
      container.appendChild(tag('div'));
      assert.strictEqual(container.innerHTML, '<div></div>');
    });

    test('should be created new div with content "test"', function () {
      container.appendChild(tag('div', 'test'));
      assert.strictEqual(container.innerHTML, '<div>test</div>');
    });

    test('should be created new div with content "test" and child tag span which has content "child"', function () {
      container.appendChild(tag('div', ['test', tag('span', 'child')]));
      assert.strictEqual(container.innerHTML, '<div>test<span>child</span></div>');
    });

    test('should be created div with id="test" and class="test"', function () {
      var el = tag('div', {'id': 'test', 'class': 'test'}, 'test');

      assert.strictEqual(el.className, 'test');
      assert.strictEqual(el.getAttribute('id'), 'test');
    });
  });

  suite('#tag(["tags"])', function () {
    test('should be created new div', function () {
      var t = tag(['div', 'span']);

      container.appendChild(t.div());
      assert.strictEqual(container.innerHTML, '<div></div>');
    });

    test('should be created new div with content "test"', function () {
      var t = tag(['div', 'span']);

      container.appendChild(t.div('test'));
      assert.strictEqual(container.innerHTML, '<div>test</div>');
    });

    test('should be created new div with content "test" and child tag span which has content "child"', function () {
      var t = tag(['div', 'span']);

      container.appendChild(t.div(['test', t.span('child')]));
      assert.strictEqual(container.innerHTML, '<div>test<span>child</span></div>');
    });

    test('should be created div with id="test" and class="test"', function () {
      var t  = tag(['div', 'span']),
          el = t.div({'id': 'test', 'class': 'test'}, 'test');

      assert.strictEqual(el.className, 'test');
      assert.strictEqual(el.getAttribute('id'), 'test');
    });
  });

  suite('#tag(["tags"], true)', function () {
    setup(function () {
      tag(['div', 'span'], true);
    })

    test('should be created new div', function () {
      container.appendChild(div());
      assert.strictEqual(container.innerHTML, '<div></div>');
    });

    test('should be created new div with content "test"', function () {
      container.appendChild(div('test'));
      assert.strictEqual(container.innerHTML, '<div>test</div>');
    });

    test('should be created new div with content "test" and child tag span which has content "child"', function () {
      container.appendChild(div(['test', span('child')]));
      assert.strictEqual(container.innerHTML, '<div>test<span>child</span></div>');
    });

    test('should be created div with id="test" and class="test"', function () {
      var el = div({'id': 'test', 'class': 'test'}, 'test')

      assert.strictEqual(el.className, 'test');
      assert.strictEqual(el.getAttribute('id'), 'test');
    });
  });

  suite('#tag(["tags"], true, "tags")', function () {
    setup(function () {
      tag(['div', 'span'], true, 'tags');
    })

    test('should be created new div', function () {
      container.appendChild(tags.div());
      assert.strictEqual(container.innerHTML, '<div></div>');
    });

    test('should be created new div with content "test"', function () {
      container.appendChild(tags.div('test'));
      assert.strictEqual(container.innerHTML, '<div>test</div>');
    });

    test('should be created new div with content "test" and child tag span which has content "child"', function () {
      container.appendChild(tags.div(['test', tags.span('child')]));
      assert.strictEqual(container.innerHTML, '<div>test<span>child</span></div>');
    });

    test('should be created div with id="test" and class="test"', function () {
      var el = tags.div({'id': 'test', 'class': 'test'}, 'test');

      assert.strictEqual(el.className, 'test');
      assert.strictEqual(el.getAttribute('id'), 'test');
    });
  });
});