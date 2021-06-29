import { taskComplete } from './updateTask.js';
import { createElem } from './createTask.js';

export const initTodoListHundlers = () => {
  const buttonElem = document.querySelector('.create-task-btn');
  buttonElem.addEventListener('click', createElem);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', taskComplete);
};

/*import { taskComplete } from './updateTask.js';
import { createElem } from './createTask.js';

export const initTodoListHundlers = () => {
  const buttonElem = document.querySelector('.create-task-btn');
  buttonElem.addEventListener('click', createElem);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', taskComplete);
};*/
