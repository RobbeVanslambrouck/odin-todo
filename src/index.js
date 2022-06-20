import { format } from 'date-fns';
import { Todo } from './todo';
import { header, main, footer, TodoCard, TodoPage, AddTodoPage, addTodoCard } from './domElements';
import './styles/reset.css';
import './styles/style.css';
import './assets/css/all.css';

// stopPropagation();
// preventDefault();

let todos = [];

const contentContainer = main;
document.body.append(header, contentContainer, footer);

for (let i = 0; i<10; i++) {
    const todo = Todo(`Todo ${i}`);
    todo.description = `description of todo ${i}.`;
    todos[i] = todo;
}

const showTodoPage = (id) => {
    let todo = todos[id];
    clear();
    TodoPage.setOnclickDone((e) => {
        clear();
        todos[id].title = TodoPage.fromValues.title;
        todos[id].description = TodoPage.fromValues.description;
        todos[id].dueDate = new Date(TodoPage.fromValues.dueDate);
        showTodos(todos);
    });
    TodoPage.setOnclickDelete((e) => {
        clear();
        delete todos[id];
        showTodos(todos);
    });
    contentContainer.append(TodoPage.getTodoPage(todo.title, todo.description, new Date(todo.dueDate)));
} 

const showTodos = (todos) => {

    const onclickRemove = (e) => {
        const id = e.composedPath().find(e => e.id != '').id;
        delete todos[id];
        showTodos(todos);
    }

    const onclickCard = (e) => {
        const id = e.composedPath().find(e => e.id != '').id;
        showTodoPage(id);
    }

    clear();
    for(const key in todos) {
        const todo = todos[key];
        const todoCard = TodoCard(todo.title , todo.description, onclickRemove, key, onclickCard);
        contentContainer.append(todoCard);
    }
    contentContainer.append(addTodoCard(addTodoHandler));
};

const clear = () => {
    contentContainer.innerHTML = '';
};

const addTodoHandler = () => {
    clear();
    contentContainer.append(AddTodoPage.getAddTodoPage('', '', new Date(), addTodo, (e) => {
        clear();
        showTodos(todos);
    }));
};

const addTodo = () => {
    const todo = Todo(AddTodoPage.fromValues.title);
    todo.description = AddTodoPage.fromValues.description;
    todo.dueDate = new Date(AddTodoPage.fromValues.dueDate);
    todos.push(todo);
    clear();
    showTodos(todos);
}

showTodos(todos);