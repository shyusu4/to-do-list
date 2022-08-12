/* eslint-disable no-unused-vars */
import './style.css';
const todoBox = document.querySelector('.todo-box');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

let todos = [];

todoBox.addEventListener('submit', function(event) {
  event.preventDefault();
  addTodo(todoInput.value);
});

const addTodo = (item) => {
  const length = todos.length + 1;
  if (item !== '') {
    const todo = {
      index: length,
      description: item,
      completed: false
    };
    todos.push(todo);
    addToLocalStorage(todos);
    todoInput.value = '';
  }
};

const displayTodo = (todos) => {
  todoList.innerHTML = '';

  todos.forEach(function(item) {
    const checked = item.completed ? 'checked': null;
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.setAttribute('class', 'item');
    todoItem.setAttribute('data-key', item.index);
    if (item.completed === true) {
      todoItem.classList.add('checked');
    }

    todoItem.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.description}
      <span class="ellipsis">&#8942;</span>
      <span class="delete-button">&#10005;</span>`;
    todoList.append(todoItem);
  });
};

const addToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
  displayTodo(todos);
};

const getFromLocalStorage = () => {
  const reference = localStorage.getItem('todos');
  if (reference) {
    todos = JSON.parse(reference);
    displayTodo(todos);
  }
};

const toggle = (index) => {
  const deleteButton = document.querySelector('.delete-button');
  todos.forEach(function(item) {
    if (item.index == index) {
      item.completed = !item.completed;
      deleteButton.classList.add('.show');
    }
  });
  addToLocalStorage(todos);
};

const deleteTodo = (index) => {
  todos = todos.filter(function(item) {
    return item.index != index;
  });
  for (let i = todos.length - 1; i >= 0; i -= 1) {
    todos[i].index = i;
  }
  addToLocalStorage(todos);
};

getFromLocalStorage();

todoList.addEventListener('click', function(event) {
  if (event.target.type === 'checkbox') {
    toggle(event.target.parentElement.getAttribute('data-key'));
  }
  if (event.target.classList.contains('delete-button')) {
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});