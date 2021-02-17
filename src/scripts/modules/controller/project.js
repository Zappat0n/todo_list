import Project from '../models/project';
import storage from '../db/storage';

const controller = () => {
  let currentProject = storage.projects[0];

  const createProject = (title, description) => {
    const project = new Project(title, description);
    storage.projects.push(project);
    storage.save();
    currentProject = project;
    return project;
  };

  const getProject = (id) => {
    const index = storage.projects.findIndex(project => project.id === id);
    currentProject = storage.projects[index];
    return currentProject;
  };

  const removeProject = (id) => {
    const index = storage.projects.findIndex(project => project.id === id);
    storage.projects.splice(index, 1);
    currentProject = storage.projects[0];
    storage.save();
  };

  return {
    createProject, currentProject, getProject, removeProject,
  };
};

const projectController = controller();

export { projectController as default };
