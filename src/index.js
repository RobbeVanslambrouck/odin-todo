import { format } from 'date-fns';
import { Todo } from './todo';
import { header, main, footer, TodoCard, TodoPage, AddTodoPage } from './domElements';
import './styles/reset.css';
import './styles/style.css';
import './assets/css/all.css';

const contentContainer = main;
document.body.append(header, contentContainer, footer);

// for (let i = 0; i<10; i++) {
//     const testTodo = TodoCard(`Todo ${i}` , `description of todo ${i}.`);
//     contentContainer.append(testTodo);
// }

contentContainer.append(AddTodoPage);