let todos = [];

const getTodos = () => todos;
const getLS = () => {
  JSON.parse(localStorage.getItem('todos')) || [];
};

const saveLS = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const addTodo = (value) => {
  let length = todos.length + 1;
  const todo = {
    description: value,
    completed: false,
    index: length,
  };
  todos.push(todo);
  saveLS();
  return todos;
};

const updateIndex = () => {
  let num = 1;
  todos.forEach((task) => {
    task.index = num;
    num += 1;
  });
};

const remove = (id) => {
  updateIndex();
  todos.forEach((task) => {
    if (task.index === Number(id)) {
      todos.splice(task.index - 1, 1);
      updateIndex();
    }
  });
};

export {
  getTodos, getLS, saveLS, addTodo, updateIndex, remove
};