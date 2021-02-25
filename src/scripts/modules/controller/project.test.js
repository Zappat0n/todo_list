import projectController from './project';
import storage from '../db/storage';

describe('project Controller', () => {
  const project = {};

  beforeAll(() => {
    storage.load();
    project.id = 1;
    project.title = 'House';
    project.description = '';
    project.todos = [];
  });

  it('project is created', () => {
    const controller = projectController();
    controller.addProject(project);
    expect(storage.projects.find((project) => project.id === 1)).toBeDefined();
  });
});
