class Storage {
  constructor() {
    this.todos = {};
  }
  
  clear() {
    this.todos = {};
  }
  
  getLS(key) {
    return this.todos[key];
  }
  
  saveLS(key, value) {
    this.todos[key] = value;
  }
  
  remove(key) {
    delete this.todos[key];
  }
}

const newLS = new Storage();
module.exports = newLS;