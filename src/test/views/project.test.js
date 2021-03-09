import projectController from '../../scripts/modules/controller/project';
import storage from '../../scripts/modules/db/storage';
import projectView from '../../scripts/modules/views/project';
import Todo from '../../scripts/modules/models/todo';

describe('project View', () => {
  const project = {};
  const controller = projectController();

  beforeAll(() => {
    storage.load();
    const todo = new Todo('My Todo', 'My description', 20201231, 'medium');

    project.id = 1;
    project.title = 'House';
    project.description = '';
    project.todos = [todo, todo];
  });

  it('generate container for projects', () => {
    const container = projectView(controller).generatePrContainer(project);
    expect(container.nodeName).toBe('DIV');
    expect(container.getAttribute('id')).toBe('1');
    expect(container.children[0].children[0].children[2].children.length).toBe(
      project.todos.length + 1,
    );
  });

  it('generateProjectFooter', () => {
    const footer = projectView(project).generateProjectFooter(project);
    expect(footer.nodeName).toBe('DIV');
    expect(footer.children.length).toBe(3);
  });
});
