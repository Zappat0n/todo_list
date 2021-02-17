import '../scss/styles.scss';
import { loadData } from './modules/db/storage';
// eslint-disable-next-line import/no-cycle
import projectView from './modules/views/project';
// eslint-disable-next-line import/no-cycle
import renderProjects from './modules/views/renderProjects';
// eslint-disable-next-line import/no-cycle
import projectController from './modules/controller/project';

const projects = loadData();
projectView().getUserInput(projectController(projects));
renderProjects(projects);

// Add Project Btns
const addPrBtns = document.querySelectorAll('.add-project-btn');
addPrBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = btn.textContent === 'Add Project' ? 'Close' : 'Add Project';
    btn.nextElementSibling.classList.toggle('open');
  });
});

export default projects;
