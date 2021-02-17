// eslint-disable-next-line import/no-cycle
import projectView from './project';

const renderProjects = (projects) => {
  document.querySelector('.project-tabs').innerHTML = '';
  document.querySelector('.main__right').innerHTML = '';
  projectView().generatePrTabs(projects);
};

export default renderProjects;
