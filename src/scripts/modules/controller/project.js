import Project from '../models/project';
import storage from '../db/storage';

const projectController = () => {
  let currentProject = storage.projects[0];

  const addProject = (project) => {
    storage.projects.push(project);
    storage.save();
    currentProject = project;
    return project;
  };

  const createProject = (title, description) => {
    return addProject(new Project(title, description));
  };

  const getProject = (id) => {
    currentProject = storage.projects.find((project) => project.id === id);
    return currentProject;
  };

  const removeProject = (id) => {
    let index = storage.projects.findIndex(project => project.id === id);
    storage.projects.splice(index, 1);
    index = (index !== 0) ? index - 1 : 0;
    currentProject = storage.projects[index];
    storage.save();
    return currentProject;
  };

  return {
    addProject, createProject, currentProject, getProject, removeProject,
  };
};

export { projectController as default };
