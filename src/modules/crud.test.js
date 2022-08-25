/**
* @jest-environment jsdom
*/

import List from './crud';
const todoList = new List();

describe('check add and remove functions', () => {
  const todo = {
    description: 'feed cat',
    completed: false,
    index: 1,
  };

  test('add task', () => {
    todoList.addTodo(todo);
    expect(todoList.todos.length).toBe(1);
  });
});