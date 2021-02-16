import Project from '../models/project';
import { saveData } from '../db/storage';
// eslint-disable-next-line import/no-cycle
import projectView from '../views/project';

const projectController = (projects) => {
  const createProject = (title, description) => {
    const project = new Project(title, description);
    projects.push(project);
    saveData(projects);
    document.querySelector('.main__right').innerHTML = '';
    document.querySelector('.project-tabs').innerHTML = '';
    projectView().generateProject(project);
    return project;
  };

  const removeProject = (id) => {
    const index = projects.findIndex(project => project.id === id);
    projects.splice(index, 1);
    saveData(projects);
    projectView().generateProject(projects[0]);
  };

  return { createProject, projects, removeProject };
};

export { projectController as default };
