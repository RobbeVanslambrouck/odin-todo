import { format } from 'date-fns';
import { Todo } from './todo';
import { header, main, footer, TodoCard, TodoPage, AddTodoPage, addTodoCard } from './domElements';
import './styles/reset.css';
import './styles/style.css';
import './assets/css/all.css';

// stopPropagation();
// preventDefault();

let todos = {};

const contentContainer = main;
document.body.append(header, contentContainer, footer);

for (let i = 0; i<50; i++) {
    const todo = Todo(`Todo ${i}`);
    todo.description = `description of todo ${i}.`;
    todos[i] = todo;
}

const showTodos = (todos) => {
    clear();
    for(const key in todos) {
        const todo = todos[key];
        const todoCard = TodoCard(todo.title , todo.description, (e) => {
            e.stopPropagation();
            const id = e.composedPath().find(e => {return e.id != ''}).id;
            delete todos[id];
            showTodos(todos);
        }, key);
        contentContainer.append(todoCard);
    }
    contentContainer.append(addTodoCard(addTodoHandler));
};

const clear = () => {
    contentContainer.innerHTML = '';
};

const addTodoHandler = () => {
    clear();
    contentContainer.append(AddTodoPage());
};

contentContainer.append(TodoPage);
showTodos(todos);