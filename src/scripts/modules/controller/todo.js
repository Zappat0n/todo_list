import Todo from '../models/todo';
import storage from '../db/storage';

const todoController = (project) => {
  const addTodo = (todo) => {
    project.todos.push(todo);
    storage.save();
    return todo;
  };

  const createTodo = (title, description, dueDate, priority) => addTodo(
    new Todo(title, description, dueDate, priority),
  );

  const removeTodo = (id) => {
    const index = project.todos.findIndex(todo => todo.id === id);
    project.todos.splice(index, 1);
    storage.save();
  };

  const overwriteTodo = (todo, el) => {
    todo.title = el.todoTitle.value;
    todo.description = el.todoDesc.value;
    todo.dueDate = el.todoDue.value;
    todo.priority = el.todoPriority.value;
    storage.save();
  };

  return {
    addTodo, createTodo, removeTodo, overwriteTodo,
  };
};

export default todoController;
