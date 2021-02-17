import Todo from '../models/todo';
import { saveData } from '../db/storage';

const todoController = (projects, project) => {
  const createTodo = (title, description, dueDate, priority) => {
    const todo = new Todo(title, description, dueDate, priority);
    project.todos.push(todo);
    saveData(projects);
    return todo;
  };

  const removeTodo = (id) => {
    const index = project.todos.findIndex(todo => todo.id === id);
    project.todos.splice(index, 1);
    saveData(projects);
  };

  const overwriteTodo = (todo, el) => {
    todo.title = el.todoTitle.value;
    todo.description = el.todoDesc.value;
    todo.dueDate = el.todoDue.value;
    todo.priority = el.todoPriority.value;
    saveData(projects);
  };

  return { createTodo, removeTodo, overwriteTodo };
};

export { todoController as default };
