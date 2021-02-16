import Project from '../models/project';
import { saveData } from '../db/storage';
// eslint-disable-next-line import/no-cycle
import renderProjects from '../views/renderProjects';

const projectController = (projects) => {
  const createProject = (title, description) => {
    const project = new Project(title, description);
    projects.push(project);
    saveData(projects);
    renderProjects(projects);
    return project;
  };

  const removeProject = (id) => {
    const index = projects.findIndex(project => project.id === id);
    projects.splice(index, 1);
    saveData(projects);
    renderProjects(projects);
  };

  return { createProject, removeProject };
};

export { projectController as default };
