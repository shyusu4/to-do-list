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
  document.body.innerHTML = `
  <ul class="todo-list"></ul>
  `;

  test('edit task', () => {
    const todo = {
      description: 'go to the gym',
      completed: false,
      index: 1,
    };
    todoList.addTodo(todo);
    todoList.editTodo(1, 'Water plants');
    expect(todoList.todos[0].description).toBe('Water plants');
  });

  test('complete task', () => {
    todoList.loadTasks();
    const checkbox = document.querySelector('.checkbox');
    checkbox.click();
    expect(todoList.todos[0].completed).toBe(true);
  });

  it('clear all completed task', ()=>{
    todoList.clearAll();
    expect(todoList.todos.length).toBe(0);
  });
});
