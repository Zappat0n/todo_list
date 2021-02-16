import Project from '../models/project';
import { saveData } from '../db/storage';

const projectController = (projects) => {
  const createProject = (title, description) => {
    const project = new Project(title, description);
    projects.push(project);
    saveData(projects);
  };

  return { createProject };
};

export { projectController as default };
