import './style.css';
import loadTasks from './modules/display';
import {
  addTodo
} from './modules/crud';

const todoForm = document.querySelector('.todo-form');
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');
const addBtn = document.querySelector('.add-button');

const load = () => {
  if (todoInput.value.trim()) {
    addTodo(todoInput.value);
    todoList.innerHTML = '';
    todoInput.value = '';
    loadTasks();
  }
};

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  load();
});

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  load();
});
  
loadTasks();