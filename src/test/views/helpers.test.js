import { myCreateElement,generateFormField, generateBtn } from '../../scripts/modules/views/helpers';

test('should return new element with the given arguments including tag and class name', () => {
  const element = myCreateElement('div', 'my-test-class');
  expect(element.classList.contains('my-test-class')).toBe(true);
});
test('should return element with the given tag without setting class if classname was not given', () => {
  const element = myCreateElement('div');
  expect(element.classList.contains('my-test-class')).toBe(false);
});

test('should return a div and a input element with the right attributes', () => {
  const [field, input] = generateFormField('title', 'text', 'input_title');
  expect(field.nodeName).toBe('DIV');
  expect(field.classList.contains('form__field')).toBe(true);
  expect(input.nodeName).toBe('INPUT');
  expect(input.getAttribute('type')).toBe('text');
  expect(input.getAttribute('name')).toBe('input_title');
});

test('generate a Button with btn class', () => {
  const button = generateBtn('submit');
  expect(button.nodeName).toBe('BUTTON');
  expect(button.classList.contains('btn')).toBe(true);
});
