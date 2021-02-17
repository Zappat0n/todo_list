import storage from '../db/storage';
import todoController from '../controller/todo';
import { myCreateElement, generateBtn, openCurrentTabAndContainer } from './helpers';
import projectController from '../controller/project';
import todoView from './todo';

const projectView = () => {
  const generateProjectFooter = (project) => {
    const prFooter = document.createElement('div');

    const addTodoBtn = generateBtn('Add Todo');
    addTodoBtn.classList.add('add-todo-btn');
    const addTodoForm = todoView(project).generateForm(null, 'add-todo-form');
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
      todoController(storage.projects, project).createTodo(title, description, dueDate, priority);
      //generateProject(projectController.currentProject, projects);

      renderProjects(storage.projects);
      todoView(project).clearTodoField(e.target.elements);
      openCurrentTabAndContainer(project);
    });
    prRmBtn.addEventListener('click', () => {
      projectController.removeProject(project.id);
      generateProject(projectController.currentProjec);
      renderProjects(storage.projects);
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

  const generatePrTabs = () => {
    const tabsContainer = document.querySelector('.project-tabs');
    generateProject(projectController.currentProject);

    if (storage.projects.length > 0) {
      storage.projects.forEach((pro) => {
        const tabItem = myCreateElement('div', 'project-tabs__item');
        tabItem.textContent = pro.title;
        tabItem.setAttribute('data-id', pro.id);
        tabsContainer.appendChild(tabItem);
        tabItem.addEventListener('click', (e) => {
          const pr = projectController.getProject(e.target.getAttribute('data-id'));
          generateProject(pr);
          openTab(pr, e.target);
        });
      });
    }
  };

  const renderProjects = () => {
    document.querySelector('.project-tabs').innerHTML = '';
    document.querySelector('.main__right').innerHTML = '';
    generatePrTabs();
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

    const prTodosItem = myCreateElement('div', 'project__todos');
    prContainer.appendChild(pr);
    pr.appendChild(prItem);
    prItem.appendChild(prTitle);
    prItem.appendChild(prDesc);
    prItem.appendChild(prTodosItem);

    if (project.todos.length > 0) {
      project.todos.forEach(todo => {
        prTodosItem.appendChild(todoView(project).generateTodo(todo, project, renderProjects));
      });
    }
    prTodosItem.appendChild(generateProjectFooter(project, projectController));

    return prContainer;
  };

  const generateProject = (project) => {
    const mainRight = document.querySelector('.main__right');
    if (project == null) { project = projectController.currentProject; }
    mainRight.appendChild(generatePrContainer(project));
  };

  const clearPrField = (el) => {
    el.prTitle.value = '';
    el.prDesc.value = '';
  };

  const getUserInput = () => {
    const formAddProject = document.querySelector('.add-project-form');

    formAddProject.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = e.target.elements.prTitle.value;
      const description = e.target.elements.prDesc.value;
      const project = projectController.createProject(title, description);
      renderProjects();
      //generateProject(project, projectController);
      clearPrField(e.target.elements);
      openCurrentTabAndContainer(project);
    });
  };

  return { getUserInput, generatePrTabs, generateProject, renderProjects };
};

export { projectView as default };
