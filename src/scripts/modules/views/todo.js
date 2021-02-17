import {
  myCreateElement, generateBtn, generateFormField, openCurrentTabAndContainer,
} from './helpers';
import todoController from '../controller/todo';

const todoView = () => {
  const clearTodoField = (el) => {
    el.todoTitle.value = '';
    el.todoDesc.value = '';
    el.todoDue.value = '';
    el.todoPriority.value = '';
  };

  const generateForm = (todo, formClass) => {
    const form = document.createElement('form');
    form.classList.add('form', formClass);

    const [title, titleInput] = generateFormField('Title', 'text', 'todoTitle');
    const [description, descInput] = generateFormField('Description', 'text', 'todoDesc');
    const [dueDate, dueInput] = generateFormField('Due date', 'date', 'todoDue');
    const prFieldForPriority = document.createElement('div');
    prFieldForPriority.classList.add('project__field');
    prFieldForPriority.innerHTML = `
    <span>Priority:</span>
    <select name="todoPriority" class="todo__select__priority">
      <option value="high">High</option>
      <option value="middle">Middle</option>
      <option value="low">Low</option>
    </select>
    `;
    if (formClass === 'edit-todo-form') {
      titleInput.value = todo.title;
      descInput.value = todo.description;
      dueInput.value = todo.dueDate;
      prFieldForPriority.querySelector('.todo__select__priority').value = todo.priority;
    }
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(prFieldForPriority);
    form.appendChild(generateBtn('Save Todo'));

    return form;
  };

  const generateTodo = (todo, project, callback) => {
    const todoItem = myCreateElement('div', 'todo');

    const todoRmBtn = document.createElement('button');
    todoRmBtn.classList.add('todo__rmbtn', 'rmbtn');
    todoRmBtn.textContent = 'x';

    const todoAtt = myCreateElement('div', 'todo__att');
    const todoPriority = document.createElement('div');
    todoPriority.classList.add('todo__priority', todo.priority);
    todoPriority.textContent = todo.priority;
    const todoLimit = myCreateElement('div', 'todo__limit');
    const icon = myCreateElement('span', 'iconify');
    icon.setAttribute('data-icon', 'ant-design:clock-circle-filled');
    icon.setAttribute('data-inline', 'false');
    const date = document.createElement('span');
    date.textContent = todo.dueDate;
    todoLimit.appendChild(icon);
    todoLimit.appendChild(date);
    todoAtt.appendChild(todoPriority);
    todoAtt.appendChild(todoLimit);

    const todoTitle = myCreateElement('h3', 'todo__title');
    todoTitle.textContent = todo.title;

    const todoMoreBtn = document.createElement('button');
    todoMoreBtn.classList.add('todo__more', 'btn');
    todoMoreBtn.textContent = 'More';

    const todoDetail = myCreateElement('div', 'todo__detail');

    const todoDesc = myCreateElement('p', 'todo__desc');
    todoDesc.textContent = todo.description;
    todoDetail.appendChild(todoDesc);
    const editTodoForm = generateForm(todo, 'edit-todo-form');
    todoDetail.appendChild(editTodoForm);
    todoItem.appendChild(todoRmBtn);
    todoItem.appendChild(todoAtt);
    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoMoreBtn);
    todoItem.appendChild(todoDetail);

    todoRmBtn.addEventListener('click', () => {
      todoController(project).removeTodo(todo.id);
      callback();
      openCurrentTabAndContainer(project);
    });

    todoMoreBtn.addEventListener('click', () => {
      todoMoreBtn.textContent = todoMoreBtn.textContent === 'More' ? 'Close' : 'More';
      todoMoreBtn.nextElementSibling.classList.toggle('open');
    });

    editTodoForm.addEventListener('submit', e => {
      e.preventDefault();
      todoController(project).overwriteTodo(todo, e.target.elements);
      callback();
      clearTodoField(e.target.elements);
      openCurrentTabAndContainer(project);
    });

    return todoItem;
  };

  return { generateTodo, generateForm, clearTodoField };
};

export default todoView;
