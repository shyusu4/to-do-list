import {
  getTodos, getLS, saveLS, remove
} from './crud';
const todoList = document.querySelector('.todo-list');

const loadTasks = () => {
  const todos = getTodos();
  const createItem = (task) =>
    `<div class="todo-item">
    <div id="${task.index}">
      <input type="checkbox" name="box" class="checkbox" ${task.completed ? 'checked' : ''} id=${task.index}>
      <input id="${task.index}" class=${task.completed ? 'checked task' : 'task'} value="${task.description}" type="text">
    </div>
    <button class="remove-button" id="${task.index}">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  </div>`;
  
  getLS();
  todoList.innerHTML = '';
  todos.forEach((task) => todoList.insertAdjacentHTML('beforeend', createItem(task)));
  const check = document.querySelectorAll('.checkbox');
  const task = todoList.querySelectorAll('.task');
  
  check.forEach((checkbox, id) => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        task[id]?.classList.add('checked');
        saveLS();
      } else {
        task[id]?.classList.remove('checked');
        saveLS();
      }
    });
  });
  
  const removeBtn = document.querySelectorAll('.remove-button');
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const{id} = e.currentTarget;
      remove(id);
      saveLS();
      todoList.innerHTML = '';
      loadTasks(todos);
    });
  });
  
  task.forEach((textarea) => {
    textarea.addEventListener('change', () => {
      const result = todos.filter((task) => task.index === Number(textarea.id));
      todos[result[0].index - 1].description = textarea.value;
      saveLS();
    });
  });
};

export default loadTasks;