// eslint-disable-next-line import/no-cycle
import projects from '../../index';
// eslint-disable-next-line import/no-cycle
import todoController from '../controller/todo';
import { saveData } from '../db/storage';
// eslint-disable-next-line import/no-cycle
import renderProjects from './renderProjects';

const projectView = () => {
  const myCreateElement = (el, className) => {
    const element = document.createElement(el);
    element.classList.add(className);
    return element;
  };

  const openCurrentTabAndContainer = (project) => {
    document.querySelectorAll('.project-tabs__item').forEach(tab => {
      if (project.id === tab.getAttribute('data-id')) {
        tab.classList.add('active');
      }
    });
    document.querySelectorAll('.project-container').forEach(container => {
      if (project.id === container.getAttribute('id')) {
        container.classList.add('active');
      }
    });
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

  const clearTodoField = (el) => {
    el.todoTitle.value = '';
    el.todoDesc.value = '';
    el.todoDue.value = '';
    el.todoPriority.value = '';
  };

  const overwriteTodo = (todo, el, project) => {
    todo.title = el.todoTitle.value;
    todo.description = el.todoDesc.value;
    todo.dueDate = el.todoDue.value;
    todo.priority = el.todoPriority.value;
    saveData(projects);
    renderProjects(projects);
    clearTodoField(el);
    openCurrentTabAndContainer(project);
  };

  const generateTodo = (todo, project) => {
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
      todoController(projects, project).removeTodo(todo.id);
      openCurrentTabAndContainer(project);
    });

    todoMoreBtn.addEventListener('click', () => {
      todoMoreBtn.textContent = todoMoreBtn.textContent === 'More' ? 'Close' : 'More';
      todoMoreBtn.nextElementSibling.classList.toggle('open');
    });

    editTodoForm.addEventListener('submit', e => {
      e.preventDefault();
      overwriteTodo(todo, e.target.elements, project);
    });

    return todoItem;
  };

  const generateProjectFooter = (project, projectController) => {
    const prFooter = document.createElement('div');

    const addTodoBtn = generateBtn('Add Todo');
    addTodoBtn.classList.add('add-todo-btn');
    const addTodoForm = generateForm(null, 'add-todo-form');
    const prRmBtn = generateBtn('Remove Project');
    prRmBtn.classList.add('project__rmbtn');

    addTodoBtn.addEventListener('click', (e) => {
      e.target.textContent = e.target.textContent === 'Add Todo' ? 'Close' : 'Add Todo';
      e.target.nextElementSibling.classList.toggle('open');
    });
    addTodoForm.addEventListener('submit', e => {
      e.preventDefault();
      const title = e.target.elements.todoTitle.value;
      const description = e.target.elements.todoDesc.value;
      const dueDate = e.target.elements.todoDue.value;
      const priority = e.target.elements.todoPriority.value;
      todoController(projects, project).createTodo(title, description, dueDate, priority);
      clearTodoField(e.target.elements);
      openCurrentTabAndContainer(project);
    });
    prRmBtn.addEventListener('click', () => {
      projectController.removeProject(project.id);
    });

    prFooter.appendChild(addTodoBtn);
    prFooter.appendChild(addTodoForm);
    prFooter.appendChild(prRmBtn);
    return prFooter;
  };

  const openTab = (project, tabItem) => {
    document.querySelectorAll('.project-tabs__item').forEach(tab => {
      tab.classList.remove('active');
    });
    document.querySelectorAll('.project-container').forEach(item => {
      item.classList.remove('active');
    });

    document.getElementById(project.id).classList.add('active');
    tabItem.classList.add('active');
  };

  const generatePrTabs = (projects) => {
    const tabsContainer = document.querySelector('.project-tabs');

    if (projects.length > 0) {
      projects.forEach((project) => {
        const tabItem = myCreateElement('div', 'project-tabs__item');
        tabItem.textContent = project.title;
        tabItem.setAttribute('data-id', project.id);
        tabsContainer.appendChild(tabItem);
        tabItem.addEventListener('click', (e) => {
          openTab(project, e.target);
        });
      });
    }
  };

  const generatePrContainer = (project, projectController) => {
    const prContainer = myCreateElement('div', 'project-container');
    prContainer.setAttribute('id', project.id);

    const pr = myCreateElement('div', 'project');
    const prItem = myCreateElement('div', 'project__item');

    const prTitle = myCreateElement('h2', 'project__title');
    prTitle.textContent = project.title;

    const prDesc = myCreateElement('p', 'project__desc');
    prDesc.textContent = project.description;

    const prTodosItem = myCreateElement('div', 'project__todos');
    prContainer.appendChild(pr);
    pr.appendChild(prItem);
    prItem.appendChild(prTitle);
    prItem.appendChild(prDesc);
    prItem.appendChild(prTodosItem);

    if (project.todos.length > 0) {
      project.todos.forEach(todo => {
        prTodosItem.appendChild(generateTodo(todo, project));
      });
    }
    prTodosItem.appendChild(generateProjectFooter(project, projectController));

    return prContainer;
  };

  const generateProject = (project, projectController) => {
    const mainRight = document.querySelector('.main__right');
    mainRight.appendChild(generatePrContainer(project, projectController));
  };

  const clearPrField = (el) => {
    el.prTitle.value = '';
    el.prDesc.value = '';
  };

  const getUserInput = (projectController) => {
    const formAddProject = document.querySelector('.add-project-form');

    formAddProject.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = e.target.elements.prTitle.value;
      const description = e.target.elements.prDesc.value;
      const project = projectController.createProject(title, description);
      clearPrField(e.target.elements);
      openCurrentTabAndContainer(project);
    });
  };

  return { getUserInput, generatePrTabs, generateProject };
};

export { projectView as default };
