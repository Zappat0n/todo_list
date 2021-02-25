import storage from '../../scripts/modules/db/storage';
import todoView from '../../scripts/modules/views/todo';
import Todo from '../../scripts/modules/models/todo';

describe('project View', () => {
  const project = {};
  const todo = new Todo('My Todo', 'My description', 20201231, 'medium');
  const formClass = 'edit-todo-form';

  beforeAll(() => {
    storage.load();
    project.id = 1;
    project.title = 'House';
    project.description = '';
    project.todos = [todo];
  });

  it('generate form for todo', () => {
    const form = todoView().generateForm(todo, formClass);
    expect(form.nodeName).toBe('FORM');
    expect(form.classList.contains(formClass)).toBe(true);
    expect(form.children.length).toBe(5);
  });

  it('generate Todo', () => {
    const todoItem = todoView().generateTodo(todo, project, null);
    expect(todoItem.nodeName).toBe('DIV');
    expect(todoItem.children.length).toBe(5);
    expect(todoItem.children[1].children[0].textContent).toBe('medium');
    expect(todoItem.children[2].textContent).toBe(todo.title);
  });
});
