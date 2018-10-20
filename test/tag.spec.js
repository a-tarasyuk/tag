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

  it('should be error if first argument is not String', () => {
    expect(() => tag()).toThrowError('[tag] First argument must be String and can not be empty');
  });

  it('should be created new div', () => {
    container.appendChild(tag('div'));
    expect(container.innerHTML).toEqual('<div></div>');
  });

  it('should be created new div with content "test"', () => {
    container.appendChild(tag('div', 'test'));
    expect(container.innerHTML).toEqual('<div>test</div>');
  });

  it('should be created new div with content "test" and child tag span which has content "child"', () => {
    container.appendChild(tag('div', ['test', tag('span', 'child')]));
    expect(container.innerHTML).toEqual('<div>test<span>child</span></div>');
  });

  it('should be created div with id="test" and class="test"', () => {
    const el = tag('div', { 'id': 'test', 'class': 'test' }, 'test');

    expect(el.className).toEqual('test');
    expect(el.getAttribute('id')).toEqual('test');
  });

  it('should be created new void element', () => {
    container.appendChild(tag('input', 'text'));
    expect(container.innerHTML).toEqual('<input>');
  });

  it('should be added text and an element as children together', () => {
    container.appendChild(tag('label', [ tag('input'), 'text' ]));
    expect(container.innerHTML).toEqual('<label><input>text</label>');
  });
});
