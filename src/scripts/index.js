import { initTodoListHundlers } from './todoList.js';
import { renderTasks } from './render.js';
import { getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks()
    .then(tasksList => {
      setItem('tasksList', tasksList)
      renderTasks();
    });
    
  initTodoListHundlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
