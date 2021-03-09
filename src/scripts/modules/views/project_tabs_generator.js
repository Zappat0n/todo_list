import { myCreateElement } from './helpers';
import storage from '../db/storage';

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

const generatePrTabs = (projectController, generateProject) => {
  const tabsContainer = document.querySelector('.project-tabs');
  generateProject(projectController.currentProject);

  if (storage.projects.length > 0) {
    storage.projects.forEach((pro) => {
      const tabItem = myCreateElement('div', 'project-tabs__item');
      tabItem.textContent = pro.title;
      tabItem.setAttribute('data-id', pro.id);
      tabsContainer.appendChild(tabItem);
      tabItem.addEventListener('click', (e) => {
        projectController.currentProject = projectController.getProject(e.target.getAttribute('data-id'));
        generateProject(projectController.currentProject);
        openTab(projectController.currentProject, e.target);
      });
    });
  }
};

export default generatePrTabs;
