import Project from '../../src/scripts/modules/models/project';

test('should return project object with the given arguments including title and description', () => {
  const project = new Project('My Project', 'My description');
  expect(project.title).toBe('My Project');
});

test('should return empty object if it was not given any arguments', () => {
  const project = new Project();
  expect(project).toEqual({});
});
