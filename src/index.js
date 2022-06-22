/* eslint-disable no-use-before-define */
import { Todo, TodoFrom } from './todo';
import {
  header, main, footer, TodoCard, TodoPage, AddTodoPage, addTodoCard,
} from './domElements';
import './styles/reset.css';
import './styles/style.css';
import './assets/css/all.css';

let todos = [];

function saveLocaly() {
  if (todos.length === 0) {
    localStorage.removeItem('todos');
    return;
  }
  const s = JSON.stringify(todos);
  localStorage.setItem('todos', s);
}

function getLocalySaved() {
  const s = JSON.parse(localStorage.getItem('todos'));
  const t = [];
  if (s !== null) {
    Object.values(s).forEach((todo) => {
      t.push(TodoFrom(todo));
    });
  }
  return t;
}

const clear = () => {
  main.innerHTML = '';
};

function showAddTodoPage() {
  saveLocaly();
  clear();
  main.append(AddTodoPage.getAddTodoPage());
}

function getTodoFrom(page, todo = Todo()) {
  const t = todo;
  t.title = page.formValues.title;
  t.description = page.formValues.description;
  t.dueDate = new Date(page.formValues.dueDate);
  return t;
}

function showTodoPage(parentTodos, todo = Todo()) {
  TodoPage.setOnclickDone(() => {
    getTodoFrom(TodoPage, todo);
    showTodos(parentTodos);
  });

  TodoPage.setOnclickCancel(() => {
    showTodos(parentTodos);
  });

  TodoPage.setOnclickAddSubTodo(() => {
    getTodoFrom(TodoPage, todo);
    AddTodoPage.setOnclickAddTodo(() => {
      const subTodo = getTodoFrom(AddTodoPage);
      todo.addSubTodo(subTodo);
      showTodoPage(parentTodos, todo);
    });
    AddTodoPage.setOnclickCancel(() => {
      showTodoPage(parentTodos, todo);
    });
    showAddTodoPage();
  });

  TodoPage.setOnclickSubTodoCard((e) => {
    const subTodo = e.composedPath().find((el) => el.id !== '');
    showTodoPage(parentTodos, todo.subTodos[subTodo.id]);
  });

  TodoPage.setOnclickSubTodoRemove((e) => {
    const subTodo = e.composedPath().find((el) => el.id !== '');
    todo.subTodos.splice(subTodo.id, 1);
    showTodoPage(parentTodos, todo);
  });

  TodoPage.setOnclickSubTodoCheckbox((e) => {
    const subTodo = e.composedPath().find((el) => el.id !== '');
    // eslint-disable-next-line no-param-reassign
    todo.subTodos[subTodo.id].isDone = !todo.subTodos[subTodo.id].isDone;
    showTodoPage(parentTodos, todo);
  });
  saveLocaly();
  clear();
  main.append(TodoPage.getTodoPage(todo));
}

function showTodos(todoArray) {
  const addTodoHandler = () => {
    AddTodoPage.setOnclickAddTodo(() => {
      const todo = getTodoFrom(AddTodoPage);
      todos.push(todo);
      getLocalySaved();
      showTodoPage(todos, todo);
    });
    AddTodoPage.setOnclickCancel(() => {
      showTodos(todos);
    });
    showAddTodoPage();
  };

  TodoCard.setOnclickCard((e) => {
    const { id } = e.composedPath().find((el) => el.id !== '');
    showTodoPage(todoArray, todoArray[id]);
  });

  TodoCard.setOnclickRemove((e) => {
    const { id } = e.composedPath().find((el) => el.id !== '');
    todoArray.splice(id, 1);
    showTodos(todoArray);
  });

  TodoCard.setOnclickCheckbox((e) => {
    const { id } = e.composedPath().find((el) => el.id !== '');
    // eslint-disable-next-line no-param-reassign
    todoArray[id].isDone = !todoArray[id].isDone;
    showTodos(todoArray);
  });
  saveLocaly();
  clear();

  todoArray.forEach((todo, i) => {
    main.append(TodoCard.getTodoCard(todo, i));
  });
  main.append(addTodoCard(addTodoHandler));
}
todos = getLocalySaved();

document.body.append(header, main, footer);

showTodos(todos);
