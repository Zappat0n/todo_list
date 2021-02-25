import projectController from './project';
import todoController from './todo';
import storage from '../db/storage';

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
});
