import Todo from '../../src/scripts/modules/models/todo';

test('should return todo object with the given arguments including title, description, dueDate and priority', () => {
  const todo = new Todo('My Todo', 'My description', 20201231, 'medium');
  expect(todo.priority).toBe('medium');
});

test('should return empty object if it was not given any arguments', () => {
  const todo = new Todo();
  expect(todo).toEqual({});
});
