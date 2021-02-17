const myCreateElement = (el, className) => {
  const element = document.createElement(el);
  element.classList.add(className);
  return element;
};

const generateFormField = (labelName, type, inputName) => {
  const field = myCreateElement('div', 'form__field');
  const label = myCreateElement('label');
  label.textContent = labelName;

  const input = document.createElement('input');
  input.setAttribute('type', type);
  input.setAttribute('name', inputName);
  input.required = true;

  field.appendChild(label);
  field.appendChild(input);

  return [field, input];
};

const generateBtn = (text) => {
  const button = myCreateElement('button', 'btn');
  button.textContent = text;
  return button;
};

export { myCreateElement, generateFormField, generateBtn };
