import { myCreateElement } from './helpers';

const generatePrContainer = (
  project, projectController, generateTodo, generateProjectFooter, renderProjects, generateProject,
) => {
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
      prTodosItem.appendChild(generateTodo(todo, project, renderProjects));
    });
  }
  prTodosItem.appendChild(
    generateProjectFooter(project, projectController, renderProjects, generateProject),
  );

  return prContainer;
};

export default generatePrContainer;
