import { tag } from '../lib/tag.js';

suite('tag', function () {
  var container = document.createElement('div');

  function clear() {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    return container;
  }

  setup(() => clear());

  test('should be error if first argument is not String', () => {
    assert.throw(tag, 'first argument must be String and can not be empty');
  });

  suite('#tag("tag name")', () => {
    test('should be created new div', () => {
      container.appendChild(tag('div'));

      assert.strictEqual(container.innerHTML, '<div></div>');
    });

    test('should be created new div with content "test"', () => {
      container.appendChild(tag('div', 'test'));

      assert.strictEqual(container.innerHTML, '<div>test</div>');
    });

    test('should be created new div with content "test" and child tag span which has content "child"', () => {
      container.appendChild(tag('div', ['test', tag('span', 'child')]));

      assert.strictEqual(container.innerHTML, '<div>test<span>child</span></div>');
    });

    test('should be created div with id="test" and class="test"', () => {
      var el = tag('div', {'id': 'test', 'class': 'test'}, 'test');

      assert.strictEqual(el.className, 'test');
      assert.strictEqual(el.getAttribute('id'), 'test');
    });

    test('should be created new void element', () => {
      container.appendChild(tag('input', 'text'));

      assert.strictEqual(container.innerHTML, '<input>');
    });

    test('should be added text and an element as children together', () => {
      container.appendChild(
        tag('label', [ tag('input'), 'text' ])
      );

      assert.strictEqual(container.innerHTML, '<label><input>text</label>');
    });
  });
});