import { renderTasks } from './render.js';
import { createTask, getTasksList } from './storage.js';

export const createElem = () => {
  const input = document.querySelector('.task-input');
  const text = input.value;
  if (text === '') {
    return;
  }
  
  const newTasks = tasks.concat({
    text,
    done: false,
    id: Math.random(),
  });

  createTask(newTasks)
    .then(() => getTasksList())
    .then((newTasksList) => {
      renderTasks();
    });
};

/*import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;

  if (text === '') {
    return;
  }
  taskTitleInputElem.value = '';

  const newTasks = tasks.concat({
    text,
    done: false,
  });

  createTask(newTasks)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};*/
