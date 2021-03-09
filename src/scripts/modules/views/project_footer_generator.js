import todoController from '../controller/todo';
import todoView from './todo';
import { generateBtn, openCurrentTabAndContainer } from './helpers';

const generateProjectFooter = (project, projectController, renderProjects, generateProject) => {
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
    const { elements } = e.target;
    const title = elements.todoTitle.value;
    const description = elements.todoDesc.value;
    const dueDate = elements.todoDue.value;
    const priority = elements.todoPriority.value;
    todoController(project).createTodo(title, description, dueDate, priority);
    todoView(project).clearTodoField(elements);
    generateProject(project);
    renderProjects();
    openCurrentTabAndContainer(project);
  });
  prRmBtn.addEventListener('click', () => {
    const nextProject = projectController.removeProject(project.id);
    projectController.currentProject = nextProject;
    generateProject(nextProject);
    renderProjects();
    openCurrentTabAndContainer(nextProject);
  });

  prFooter.appendChild(addTodoBtn);
  prFooter.appendChild(addTodoForm);
  prFooter.appendChild(prRmBtn);
  return prFooter;
};

export default generateProjectFooter;
