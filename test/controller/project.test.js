import projectController from '../../src/scripts/modules/controller/project';
import storage from '../../src/scripts/modules/db/storage';

describe('project Controller', () => {
  const project = {};
  const controller = projectController();

  beforeAll(() => {
    storage.load();
    project.id = 1;
    project.title = 'House';
    project.description = '';
    project.todos = [];
  });

  it('project is created', () => {
    controller.addProject(project);
    expect(storage.projects.find((project) => project.id === 1)).toBeDefined();
  });

  it('getProject is fine', () => {
    const pr = controller.getProject(1);
    expect(pr.id).toBe(1);
  });

  it('project is removed', () => {
    controller.removeProject(1);
    expect(storage.projects.find((project) => project.id === 1)).toBeUndefined();
  });
});
