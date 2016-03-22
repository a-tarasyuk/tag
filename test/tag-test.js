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

  test('should be error if first argument is not String', function () {
    assert.throw(tag, 'first argument must be String and can not be empty');
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
});