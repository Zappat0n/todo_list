import '../scss/styles.scss';
import projectView from './modules/views/project';
import storage from './modules/db/storage';
import defaultData from './modules/db/defaultData';

if (storage.projects.length === 0) {
  localStorage.setItem('projects', JSON.stringify(defaultData));
  storage.load();
}

projectView().getUserInput();
projectView().renderProjects();

if (storage.projects.length > 0) {
  const tabs = document.querySelectorAll('.project-tabs__item');
  tabs[0].classList.add('active');
  const container = document.querySelectorAll('.project-container');
  container[0].classList.add('active');
}

const addPrBtn = document.querySelector('.add-project-btn');
addPrBtn.addEventListener('click', () => {
  addPrBtn.textContent = addPrBtn.textContent === 'Add Project' ? 'Close' : 'Add Project';
  addPrBtn.nextElementSibling.classList.toggle('open');
});
