import { myCreateElement } from '../../scripts/modules/views/helpers';

test('should return new element with the given arguments including tag and class name', () => {
  const element = myCreateElement('div', 'my-test-class');
  expect(element.classList.contains('my-test-class')).toBe(true);
});
test('should return element with the given tag without setting class if classname was not given', () => {
  const element = myCreateElement('div');
  expect(element.classList.contains('my-test-class')).toBe(false);
});
