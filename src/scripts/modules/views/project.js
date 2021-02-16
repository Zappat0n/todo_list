// eslint-disable-next-line import/no-cycle
import controller from '../../index';

const projectView = () => {
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

    field.appendChild(label);
    field.appendChild(input);

    return field;
  };

  const generateBtn = (text) => {
    const button = myCreateElement('button', 'btn');
    button.textContent = text;
    return button;
  };

  const generateForm = (todo, formClass) => {
    const form = document.createElement('form');
    form.classList.add('form', formClass);

    const title = generateFormField('Title', 'text', 'todoTitle');
    const description = generateFormField('Description', 'text', 'todoDesc');
    const dueDate = generateFormField('Due date', 'date', 'todoDue');

    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(generateBtn('Save Todo'));

    if (formClass === 'edit-todo-form') {
      title.value = todo.title;
      description.value = todo.description;
      dueDate.value = todo.dueDate;
    }
    return form;
  };

  const generateTodo = (todo) => {
    const todoItem = myCreateElement('div', 'todo');

    const todoRmBtn = document.createElement('button');
    todoRmBtn.classList.add('todo__rmbtn', 'rmbtn');

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

    const todoDesc = 'todo__detail'('p', 'todo__desc');
    todoDesc.textContent = todo.description;
    todoDetail.appendChild(todoDesc);
    todoDetail.appendChild(generateForm(todo, 'edit-todo-form'));
    todoItem.appendChild(todoRmBtn);
    todoItem.appendChild(todoAtt);
    todoItem.appendChild(todoDetail);
  };

  const generateProjectFooter = (project) => {
    const prFooter = document.createElement('div');

    const addTodoBtn = generateBtn('Add Todo');
    addTodoBtn.classList.add('add-todo-btn');
    const addTodoForm = generateForm(null, 'add-todo-form');
    const prRmBtn = generateBtn('Remove Project');
    prRmBtn.classList.add('project__rmbtn');

    prRmBtn.addEventListener('click', () => {
      controller.removeProject(project.id);
    });

    prFooter.appendChild(addTodoBtn);
    prFooter.appendChild(addTodoForm);
    prFooter.appendChild(prRmBtn);
    return prFooter;
  };

  const generateTodos = (project, prTodos) => {
    if (project.todos.length > 0) {
      project.todos.forEach(todo => {
        prTodos.appendChild(generateTodo(todo));
      });
    }
    prTodos.appendChild(generateProjectFooter(project));
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
      projects.forEach((project, index) => {
        const tabItem = myCreateElement('div', 'project-tabs__item');
        if (index === 0) {
          tabItem.classList.add('default-open');
        }
        tabItem.textContent = project.title;
        tabsContainer.appendChild(tabItem);

        tabItem.addEventListener('click', (e) => {
          openTab(project, e.target);
        });
      });
    }
  };

  const generatePrContainer = (project) => {
    const prContainer = myCreateElement('div', 'project-container');
    prContainer.setAttribute('id', project.id);

    const pr = myCreateElement('div', 'project');
    const prItem = myCreateElement('div', 'project__item');

    const prTitle = myCreateElement('h2', 'project__title');
    prTitle.textContent = project.title;

    const prDesc = myCreateElement('p', 'project__desc');
    prDesc.textContent = project.description;

    const prTodos = myCreateElement('div', 'project__todos');
    prContainer.appendChild(pr);
    pr.appendChild(prItem);
    prItem.appendChild(prTitle);
    prItem.appendChild(prDesc);
    prItem.appendChild(prTodos);
    generateTodos(project, prTodos);

    return prContainer;
  };

  const generateProject = (project) => {
    const mainRight = document.querySelector('.main__right');
    mainRight.appendChild(generatePrContainer(project));
  };

  const clearPrField = (el) => {
    el.prTitle.value = '';
    el.prDesc.value = '';
  };

  const getUserInput = (controller) => {
    const formAddProject = document.querySelector('.add-project-form');

    formAddProject.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = e.target.elements.prTitle.value;
      const description = e.target.elements.prDesc.value;
      controller.createProject(title, description);
      clearPrField(e.target.elements);
    });
  };

  return { getUserInput, generatePrTabs, generateProject };
};

export { projectView as default };
