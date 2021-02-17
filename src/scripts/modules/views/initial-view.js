// eslint-disable-next-line import/no-cycle
import projectView from './project';
// eslint-disable-next-line import/no-cycle
import renderProjects from './renderProjects';
// eslint-disable-next-line import/no-cycle
import projectController from '../controller/project';
import { loadData } from '../db/storage';
import defaultData from '../db/defaultData';

const initialView = (projects) => {
  if (projects.length === 0) {
    localStorage.setItem('projects', JSON.stringify(defaultData));
    projects = loadData();
  }
  projectView().getUserInput(projectController(projects));
  renderProjects(projects);

  if (projects.length > 0) {
    const tabs = document.querySelectorAll('.project-tabs__item');
    tabs[0].classList.add('active');
    const container = document.querySelectorAll('.project-container');
    container[0].classList.add('active');
  }

  const addPrBtns = document.querySelectorAll('.add-project-btn');
  addPrBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = btn.textContent === 'Add Project' ? 'Close' : 'Add Project';
      btn.nextElementSibling.classList.toggle('open');
    });
  });
};

export default initialView;
