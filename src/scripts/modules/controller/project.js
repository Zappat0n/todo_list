import Project from '../models/project';
import { saveData } from '../db/storage';

const projectController = (projects) => {
  let currentProject = projects[0];

  const createProject = (title, description) => {
    const project = new Project(title, description);
    currentProject = project;
    projects.push(project);
    saveData(projects);
    return project;
  };

  const getProject = (id) => {
    const index = projects.findIndex(project => project.id === id);
    currentProject = projects[index];
    return currentProject;
  };

  const removeProject = (id) => {
    const index = projects.findIndex(project => project.id === id);
    currentProject = projects[0];
    projects.splice(index, 1);
    saveData(projects);
  };

  return { createProject, currentProject, getProject, removeProject };
};

export { projectController as default };
