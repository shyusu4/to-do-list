class List {
  constructor() {
    this.todos = [];
  }
 
  getLS() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }
 
  saveLS() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
 
  addTodo(value) {
    let length = this.todos.length + 1;
    const todo = {
      description: value,
      completed: false,
      index: length,
    };
    this.todos.push(todo);
    this.saveLS();
  }
 
  updateIndex() {
    let num = 1;
    this.todos.forEach((task) => {
      task.index = num;
      num += 1;
    });
  }
 
  remove(id) {
    this.updateIndex();
    this.todos.forEach((task) => {
      if (task.index === Number(id)) {
        this.todos.splice(task.index - 1, 1);
        this.updateIndex();
      }
    });
  }
 
  loadTasks() {
    const todoList = document.querySelector('.todo-list');
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
   
    this.getLS();
    todoList.innerHTML = '';
    this.todos.forEach((task) => todoList.insertAdjacentHTML('beforeend', createItem(task)));
    const check = document.querySelectorAll('.checkbox');
    const task = todoList.querySelectorAll('.task');
   
    check.forEach((checkbox, id) => {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          task[id]?.classList.add('checked');
          this.saveLS();
        } else {
          task[id]?.classList.remove('checked');
          this.saveLS();
        }
      });
    });
   
    const removeBtn = document.querySelectorAll('.remove-button');
    removeBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const{id} = e.currentTarget;
        this.remove(id);
        this.saveLS();
        todoList.innerHTML = '';
        this.loadTasks(this.todos);
      });
    });
   
    task.forEach((textarea) => {
      textarea.addEventListener('change', () => {
        this.todos[textarea.id - 1].description = textarea.value;
        this.saveLS();
      });
    });
  }
}
 
export default List;