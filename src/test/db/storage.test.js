import storage from '../../scripts/modules/db/storage';
import Project from '../../scripts/modules/models/project';

describe('project View', () => {

  it('loads empty array the first time', () => {
    storage.load();
    expect(storage.projects.length).toBe(0);
  });

  it('saves one project', () => {
    const project = new Project('My Project', 'My description');
    storage.projects.push(project);
    storage.save();
    storage.load();
    expect(storage.projects.length).toBe(1);
  });

  it('removes one project', () => {
    storage.projects.pop();
    storage.save();
    storage.load();
    expect(storage.projects.length).toBe(0);
  });
});
