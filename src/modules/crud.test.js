/**
* @jest-environment jsdom
*/

import List from './crud';
const todoList = new List();
const newLS = require('./mockStorage');
global.localStorage = newLS;

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

  it('remove task', () => {
    //act
    todoList.remove(todo.index);
    //assert
    expect(todoList.todos.length).toBe(0);
  });
});

describe('check edit, update, and clear functions', () => {
  const todo = {
    description: 'go to the gym',
    completed: false,
    index: 1,
  };

  test('edit task', () => {
    todoList.addTodo(todo);
    todoList.editTodo(1, 'Water plants');
    expect(todoList.todos[0].description).toBe('Water plants');
  });
});