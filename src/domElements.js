import { format } from 'date-fns';
import { Todo } from './todo';

function screenReaderOnlyText(text) {
  const srOnly = document.createElement('p');
  srOnly.textContent = text;
  srOnly.className = 'sr-only';

  return srOnly;
}

export const header = (() => {
  const headerElement = document.createElement('header');
  const logoLink = document.createElement('a');
  logoLink.href = '#';
  const h1 = document.createElement('h1');
  h1.textContent = 'my todo\'s';

  logoLink.append(h1);

  headerElement.append(logoLink);
  return headerElement;
})();

export const main = (() => document.createElement('main'))();

export const footer = (() => {
  const footerElement = document.createElement('footer');

  const footerText = document.createElement('p');
  footerText.textContent = 'made by: ';

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/RobbeVanslambrouck';
  githubLink.target = '_blank';
  githubLink.textContent = ' robbe vanslambrouck';

  const githubLogo = document.createElement('i');
  githubLogo.className = 'fa-brands fa-github';
  githubLink.prepend(githubLogo);

  footerText.append(githubLink);

  footerElement.append(footerText);
  return footerElement;
})();

export const TodoCard = (() => {
  let onclickCard = () => {};
  let onclickRemove = () => {};
  let onclickCheckbox = () => {};

  const setOnclickCard = (callback) => {
    onclickCard = callback;
  };

  const setOnclickRemove = (callback) => {
    onclickRemove = callback;
  };

  const setOnclickCheckbox = (callback) => {
    onclickCheckbox = callback;
  };

  const getTodoCard = (todo = Todo(), id = 0) => {
    const todoCard = document.createElement('div');
    todoCard.className = 'todo-card';
    todoCard.id = id;
    todoCard.onclick = (e) => {
      e.stopPropagation();
      onclickCard(e);
    };

    const checkbox = document.createElement('input');
    checkbox.className = 'checkbox';
    checkbox.type = 'checkbox';
    checkbox.checked = todo.isDone;
    checkbox.onclick = (e) => {
      e.stopPropagation();
      onclickCheckbox(e);
    };

    const titleElement = document.createElement('h2');
    titleElement.textContent = todo.title;
    titleElement.className = 'title';

    const description = document.createElement('p');
    description.textContent = todo.description;
    description.className = 'description';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete fa-solid fa-delete-left';
    deleteBtn.type = 'button';
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      onclickRemove(e);
    };
    deleteBtn.append(screenReaderOnlyText('remove'));

    todoCard.append(checkbox, titleElement, description, deleteBtn);

    return todoCard;
  };

  return {
    getTodoCard,
    setOnclickCard,
    setOnclickRemove,
    setOnclickCheckbox,
  };
})();

export const addTodoCard = (onclick) => {
  const divCard = document.createElement('div');
  divCard.className = 'add-todo-card';

  const addTodoBtn = document.createElement('button');
  addTodoBtn.className = 'add-todo-btn';
  addTodoBtn.type = 'button';
  addTodoBtn.textContent = 'add todo';
  addTodoBtn.onclick = onclick;
  divCard.append(addTodoBtn);

  return divCard;
};

export const TodoPage = (() => {
  let onclickDone = () => {};
  let onclickCancel = () => {};
  let onclickAddSubTodo = () => {};
  let onclickSubTodoCard = () => {};
  let onclickSubTodoRemove = () => {};
  let onclickSubTodoCheckbox = () => {};

  const setOnclickDone = (callback) => {
    onclickDone = callback;
  };

  const setOnclickCancel = (callback) => {
    onclickCancel = callback;
  };

  const setOnclickAddSubTodo = (callback) => {
    onclickAddSubTodo = callback;
  };

  const setOnclickSubTodoCard = (callback) => {
    onclickSubTodoCard = callback;
  };

  const setOnclickSubTodoRemove = (callback) => {
    onclickSubTodoRemove = callback;
  };

  const setOnclickSubTodoCheckbox = (callback) => {
    onclickSubTodoCheckbox = callback;
  };

  const formValues = {
    title: '',
    description: '',
    dueDate: new Date(),
  };

  const getTodoPage = (todo = Todo()) => {
    const todoPage = document.createElement('div');
    todoPage.className = 'todo-page';

    const inputTitle = document.createElement('input');
    inputTitle.className = 'title';
    inputTitle.value = todo.title;
    inputTitle.type = 'text';

    const inputDesc = document.createElement('textarea');
    inputDesc.value = todo.description;
    inputDesc.className = 'description';

    const inputDate = document.createElement('input');
    inputDate.className = 'datePicker';
    inputDate.value = format(todo.dueDate, 'yyyy-MM-dd');
    inputDate.type = 'date';

    const divSubTodos = document.createElement('div');
    divSubTodos.className = 'subTodos';

    TodoCard.setOnclickCard((e) => {
      onclickSubTodoCard(e);
    });

    TodoCard.setOnclickRemove((e) => {
      onclickSubTodoRemove(e);
    });

    TodoCard.setOnclickCheckbox((e) => {
      onclickSubTodoCheckbox(e);
    });

    for (let i = 0; i < todo.subTodos.length; i += 1) {
      divSubTodos.append(TodoCard.getTodoCard(todo.subTodos[i], i));
    }

    const btnAddSubTodo = document.createElement('button');
    btnAddSubTodo.className = 'addSubTodo';
    btnAddSubTodo.type = 'button';
    btnAddSubTodo.textContent = 'add sub todo';
    btnAddSubTodo.onclick = (e) => {
      formValues.title = inputTitle.value;
      formValues.description = inputDesc.value;
      formValues.dueDate = inputDate.value;
      onclickAddSubTodo(e);
    };

    const btnDone = document.createElement('button');
    btnDone.className = 'done';
    btnDone.type = 'button';
    btnDone.textContent = 'done';
    btnDone.onclick = (e) => {
      formValues.title = inputTitle.value;
      formValues.description = inputDesc.value;
      formValues.dueDate = inputDate.value;
      onclickDone(e);
    };

    const btnDelete = document.createElement('button');
    btnDelete.className = 'cancel';
    btnDelete.type = 'button';
    btnDelete.textContent = 'cancel';
    btnDelete.onclick = onclickCancel;

    todoPage.append(
      inputTitle,
      inputDesc,
      inputDate,
      divSubTodos,
      btnAddSubTodo,
      btnDone,
      btnDelete,
    );

    return todoPage;
  };

  return {
    getTodoPage,
    setOnclickDone,
    setOnclickCancel,
    setOnclickAddSubTodo,
    setOnclickSubTodoCard,
    setOnclickSubTodoRemove,
    setOnclickSubTodoCheckbox,
    formValues,
  };
})();

export const AddTodoPage = (() => {
  let onclickAdd = () => {};
  let onclickCancel = () => {};

  const setOnclickAddTodo = (callback) => {
    onclickAdd = callback;
  };

  const setOnclickCancel = (callback) => {
    onclickCancel = callback;
  };

  const formValues = {
    title: '',
    description: '',
    dueDate: new Date(),
  };

  const getAddTodoPage = () => {
    const todoPage = document.createElement('div');
    todoPage.className = 'add-todo-page';

    const titleInput = document.createElement('input');
    titleInput.required = true;
    titleInput.className = 'title';
    titleInput.type = 'text';

    const descInput = document.createElement('textarea');
    descInput.className = 'description';

    const dateInput = document.createElement('input');
    dateInput.required = true;
    dateInput.className = 'datePicker';
    dateInput.value = format(new Date(), 'yyyy-MM-dd');
    dateInput.type = 'date';

    const addTodoBtn = document.createElement('button');
    addTodoBtn.className = 'add';
    addTodoBtn.type = 'submit';
    addTodoBtn.textContent = 'add todo';
    addTodoBtn.onclick = (e) => {
      formValues.title = titleInput.value;
      formValues.description = descInput.value;
      formValues.dueDate = dateInput.value;
      onclickAdd(e);
    };

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancel';
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'cancel';
    cancelBtn.onclick = onclickCancel;

    const addTodoForm = document.createElement('form');
    addTodoForm.className = 'add-todo-form';
    addTodoForm.onsubmit = (e) => {
      e.preventDefault();
      formValues.title = titleInput.value;
      formValues.description = descInput.value;
      formValues.dueDate = dateInput.value;
    };

    addTodoForm.append(titleInput, descInput, dateInput, addTodoBtn, cancelBtn);
    todoPage.append(addTodoForm);

    return todoPage;
  };

  return {
    getAddTodoPage, setOnclickAddTodo, setOnclickCancel, formValues,
  };
})();
