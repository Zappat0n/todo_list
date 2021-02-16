// eslint-disable-next-line import/no-cycle
import projectView from './project';

const renderProjects = (projects) => {
  document.querySelector('.project-tabs').innerHTML = '';
  document.querySelector('.main__right').innerHTML = '';
  projectView().generatePrTabs(projects);
  projects.forEach(project => {
    projectView().generateProject(project);
  });
  if (projects.length > 0) {
    document.querySelector('.default-open').click();
  }
};

export default renderProjects;
