import './style.css';
import List from './modules/crud';
 
const todoForm = document.querySelector('.todo-form');
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');
const addBtn = document.querySelector('.add-button');
const list = new List();
list.loadTasks();
 
const load = () => {
  if (todoInput.value.trim()) {
    list.addTodo(todoInput.value);
    todoList.innerHTML = '';
    todoInput.value = '';
    list.loadTasks();
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
