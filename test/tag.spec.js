import tag from '../src/tag.js';

describe('tag', function () {
  const container = document.createElement('div');

  const clear = () => {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    return container;
  }

  beforeEach(() => clear());

  it('checks if first argument is not String', () => {
    expect(() => tag()).toThrowError('[tag] First argument must be String and can not be empty');
  });

  it('creats new DOMElement', () => {
    container.appendChild(tag('div'));
    expect(container.innerHTML).toEqual('<div></div>');
  });

  it('creates new DOMElement with content "test"', () => {
    container.appendChild(tag('div', 'test'));
    expect(container.innerHTML).toEqual('<div>test</div>');
  });

  it('creates new DOMElement with content "test" and child DOMElement which has content "child"', () => {
    container.appendChild(tag('div', ['test', tag('span', 'child')]));
    expect(container.innerHTML).toEqual('<div>test<span>child</span></div>');
  });

  it('creates DOMElement with id="test" and class="test"', () => {
    const el = tag('div', { 'id': 'test', 'class': 'test' }, 'test');

    expect(el.className).toEqual('test');
    expect(el.getAttribute('id')).toEqual('test');
  });

  it('creates new void DOMElement', () => {
    container.appendChild(tag('input', 'text'));
    expect(container.innerHTML).toEqual('<input>');
  });

  it('adds text and DOMElement as children together', () => {
    container.appendChild(tag('label', [ tag('input'), 'text' ]));
    expect(container.innerHTML).toEqual('<label><input>text</label>');
  });

  it('creates DOMElement with string child', () => {
    container.appendChild(tag('div', '<span>text</span><span>text</span>'));
    expect(container.innerHTML).toEqual('<div><span>text</span><span>text</span></div>');
  });
});
