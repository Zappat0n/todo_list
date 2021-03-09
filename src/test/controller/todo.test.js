import projectController from '../../scripts/modules/controller/project';
import todoController from '../../scripts/modules/controller/todo';
import storage from '../../scripts/modules/db/storage';

describe('todo Controller', () => {
  const project = {};
  const todo = {};
  const controller = projectController();

  beforeAll(() => {
    storage.load();
    project.id = 1;
    project.title = 'House';
    project.description = '';
    project.todos = [];
    controller.addProject(project);
    todo.id = 1;
    todo.title = 'Dishes';
    todo.description = '';
    todo.dueDate = new Date();
    todo.priority = 'High';
  });

  it('create Todo', () => {
    todoController(project).addTodo(todo);
    expect(project.todos.length).toBe(1);
  });

  it('edit Todo', () => {
    const el = {
      todoTitle: {
        value: 'Bathroom',
      },
      todoDesc: {
        value: 'Clean',
      },
      todoDue: {
        value: new Date(),
      },
      todoPriority: {
        value: 'Medium',
      },
    };
    todoController(project).overwriteTodo(todo, el);
    const newTodo = project.todos.find((t) => t.id === 1);
    expect(newTodo.title).toBe('Bathroom');
    expect(newTodo.description).toBe('Clean');
    expect(newTodo.dueDate).toBe(el.todoDue.value);
    expect(newTodo.priority).toBe('Medium');
  });

  it('remove Todo', () => {
    todoController(project).removeTodo(1);
    const newTodo = project.todos.find((t) => t.id === 1);
    expect(newTodo).toBeUndefined();
  });
});
