import { openCurrentTabAndContainer } from './helpers';
import todoView from './todo';
import generatePrContainer from './project_container_generator';
import generateProjectFooter from './project_footer_generator';
import generatePrTabs from './project_tabs_generator';

const projectView = (projectController) => {
  const renderProjects = () => {
    document.querySelector('.project-tabs').innerHTML = '';
    document.querySelector('.main__right').innerHTML = '';
    // eslint-disable-next-line no-use-before-define
    generatePrTabs(projectController, generateProject);
  };

  const generateProject = (project) => {
    const mainRight = document.querySelector('.main__right');
    if (project == null) { project = projectController.currentProject; }
    mainRight.appendChild(generatePrContainer(
      project, projectController, todoView(project).generateTodo,
      generateProjectFooter, renderProjects, generateProject,
    ));
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
      projectController.currentProject = project;
      renderProjects();
      clearPrField(e.target.elements);
      openCurrentTabAndContainer(project);
    });
  };

  return {
    getUserInput,
    generatePrContainer,
    generateProjectFooter,
    generatePrTabs,
    generateProject,
    renderProjects,
  };
};

export default projectView;
