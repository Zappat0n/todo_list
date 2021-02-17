import Todo from '../models/todo';
import { saveData } from '../db/storage';
// eslint-disable-next-line import/no-cycle
import renderProjects from '../views/renderProjects';

const todoController = (projects, project) => {
  const createTodo = (title, description, dueDate, priority) => {
    const todo = new Todo(title, description, dueDate, priority);
    project.todos.push(todo);
    saveData(projects);
    renderProjects(projects);
    return todo;
  };

  const removeTodo = (id) => {
    const index = project.todos.findIndex(todo => todo.id === id);
    project.todos.splice(index, 1);
    saveData(projects);
    renderProjects(projects);
  };

  return { createTodo, removeTodo };
};

export { todoController as default };
