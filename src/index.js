import { format } from 'date-fns';
import { Todo } from './todo';
import { header, main, footer, TodoElement } from './domElements';
import './styles/reset.css';
import './styles/style.css';
import './assets/css/all.css';

const contentContainer = main
document.body.append(header, contentContainer, footer);