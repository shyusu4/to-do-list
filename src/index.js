import './style.css';
import toDoTasks from '../modules/list.js';

const todoListElement = document.querySelector('.list');
 
const loadTasks = () => {
  for (let i = 0; i < toDoTasks.length; i += 1) {
    const toDo = toDoTasks[i];
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
    <div class="todo-task">
        <input type="checkbox" id="todo">
        <label for="todo-task">${toDo.description}</label>
    </div>
  `;
    todoListElement.appendChild(todoItem);
  }
};

const onLoad = () => {
  loadTasks();
};
 
window.onload = onLoad();