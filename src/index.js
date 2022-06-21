import { format } from 'date-fns';
import { Todo } from './todo';
import { header, main, footer, TodoCard, TodoPage, AddTodoPage, addTodoCard } from './domElements';
import './styles/reset.css';
import './styles/style.css';
import './assets/css/all.css';

let todos = [];

document.body.append(header, main, footer);

function showTodoPage(todo = Todo(), parentTodos) {

    TodoPage.setOnclickDone((e) => {
        getTodoFrom(TodoPage, todo);
        showTodos(parentTodos);
    });

    TodoPage.setOnclickCancel((e) => {
        showTodos(parentTodos);
    });

    TodoPage.setOnclickAddSubTodo((e) => {
        AddTodoPage.setOnclickAddTodo((e) => {
            let subTodo = getTodoFrom(AddTodoPage);
            todo.addSubTodo(subTodo);
            showTodoPage(todo, parentTodos);
        });
        AddTodoPage.setOnclickCancel((e) => {
            showTodoPage(todo, parentTodos);
        });
        showAddTodoPage();
    });

    TodoPage.setOnclickSubTodoCard((e) => {
        const id = e.composedPath().find(e => e.id != '').id;
        showTodoPage(todo.subTodos[id], parentTodos);
    });

    TodoPage.setOnclickSubTodoRemove((e) => {
        const id = e.composedPath().find(e => e.id != '').id;
        delete todo.subTodos[id];
        showTodoPage(todo, parentTodos);
    });

    TodoPage.setOnclickSubTodoCheckbox((e) => {
        const id = e.composedPath().find(e => e.id != '').id;
        todo.subTodos[id].isDone = !todo.subTodos[id].isDone;
        showTodoPage(todo, parentTodos);
    });

    clear();
    main.append(TodoPage.getTodoPage(todo));
} 

function showTodos(todos) {

    TodoCard.setOnclickCard((e) => {
        const id = e.composedPath().find(e => e.id != '').id;
        showTodoPage(todos[id], todos);
    });

    TodoCard.setOnclickRemove((e) => {
        const id = e.composedPath().find(e => e.id != '').id;
        delete todos[id];
        showTodos(todos);
    });

    TodoCard.setOnclickCheckbox((e) => {
        const id = e.composedPath().find(e => e.id != '').id;
        todos[id].isDone = !todos[id].isDone;
        showTodos(todos);
    });

    clear();
    for (let i in todos) {
        main.append(TodoCard.getTodoCard(todos[i], i));
    }
    main.append(addTodoCard(addTodoHandler));
}

const clear = () => {
    main.innerHTML = '';
};

const addTodoHandler = () => {
    AddTodoPage.setOnclickAddTodo((e) => {
        const todo = getTodoFrom(AddTodoPage);
        todos.push(todo);
        showTodoPage(todo, todos);
    });
    AddTodoPage.setOnclickCancel((e) => {
        showTodos(todos);
    });
    showAddTodoPage();
};

function getTodoFrom(page, todo = Todo()) {
    todo.title = page.formValues.title;
    todo.description = page.formValues.description;
    todo.dueDate = new Date(page.formValues.dueDate);
    return todo;
}

function showAddTodoPage() {
    clear();
    main.append(AddTodoPage.getAddTodoPage());
}

showTodos(todos);