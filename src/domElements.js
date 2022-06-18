import { format } from 'date-fns';

export const header = (() => {
    const header = document.createElement('header');
    const logoLink = document.createElement('a');
    logoLink.href = '#';
    const h1 = document.createElement('h1');
    h1.textContent = 'my todo\'s';

    logoLink.append(h1);

    header.append(logoLink);
    return header;
})();

export const main = (() => {
    const main = document.createElement('main');

    return main;
})();

export const footer = (() => {
    const footer = document.createElement('footer');

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

    footer.append(footerText);
    return footer;
})();

export const TodoCard = (title = 'title', desc = 'description', removeCallBack = defaultOnClick, id = 0) => {
    const todo = document.createElement('div');
    todo.className = 'todo-card';
    todo.id = id;

    const checkbox = document.createElement('input');
    checkbox.className = 'checkbox';
    checkbox.type = 'checkbox';

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    titleElement.className = 'title';

    const description = document.createElement('p');
    description.textContent = desc;
    description.className = 'description';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete fa-solid fa-delete-left';
    deleteBtn.type = 'button';
    deleteBtn.onclick = removeCallBack;
    deleteBtn.append(screenReaderOnlyText('remove'));

    todo.append(checkbox, titleElement, description, deleteBtn);

    return todo;
};

export const TodoPage = ((title ='', desc = '', date = new Date()) => {
    const todoPage = document.createElement('div');
    todoPage.className = 'todo-page';

    const titleInput = document.createElement('input');
    titleInput.className = 'title';
    titleInput.value = title;
    titleInput.type = 'text';

    const descInput = document.createElement('textarea');
    descInput.value = desc;
    descInput.className = 'description';

    const dateInput = document.createElement('input');
    dateInput.className = 'datePicker';
    dateInput.value = format(date, 'yyyy-MM-dd');
    console.log(format(date, 'MM-dd-yyyy'));
    dateInput.type = 'date';

    const subTodosDiv = document.createElement('div');
    subTodosDiv.className = 'subTodos';

    const addSubTodoBtn = document.createElement('button');
    addSubTodoBtn.className = 'addSubTodo';
    addSubTodoBtn.type = 'button';
    addSubTodoBtn.textContent = 'add sub todo';

    const todoDoneBtn = document.createElement('button');
    todoDoneBtn.className = 'done';
    todoDoneBtn.type = 'button';
    todoDoneBtn.textContent = 'done';

    const todoDeleteBtn = document.createElement('button');
    todoDeleteBtn.className = 'delete';
    todoDeleteBtn.type = 'button';
    todoDeleteBtn.textContent = 'delete';

    todoPage.append(titleInput, descInput, dateInput, subTodosDiv, addSubTodoBtn, todoDoneBtn, todoDeleteBtn);
    return todoPage;

})();

export const AddTodoPage = (title ='', desc = '', date = new Date()) => {
    const todoPage = document.createElement('div');
    todoPage.className = 'todo-page';

    const titleInput = document.createElement('input');
    titleInput.className = 'title';
    titleInput.value = title;
    titleInput.type = 'text';

    const descInput = document.createElement('textarea');
    descInput.value = desc;
    descInput.className = 'description';

    const dateInput = document.createElement('input');
    dateInput.className = 'datePicker';
    dateInput.value = format(date, 'yyyy-MM-dd');
    console.log(format(date, 'MM-dd-yyyy'));
    dateInput.type = 'date';

    const todoDoneBtn = document.createElement('button');
    todoDoneBtn.className = 'add';
    todoDoneBtn.type = 'button';
    todoDoneBtn.textContent = 'add todo';

    todoPage.append(titleInput, descInput, dateInput, todoDoneBtn);
    return todoPage;

};

export const addTodoCard = (onclick) => {

    const addTodoCard = document.createElement('div');
    addTodoCard.className = 'add-todo-card';

    const addTodoBtn = document.createElement('button');
    addTodoBtn.className = 'add-todo-btn';
    addTodoBtn.type = 'button';
    addTodoBtn.textContent = 'add todo';
    addTodoBtn.onclick = onclick;
    addTodoCard.append(addTodoBtn);

    return addTodoCard;
};

const screenReaderOnlyText = (text) => {
    const srOnly = document.createElement('p');
    srOnly.textContent = text;
    srOnly.className = 'sr-only';

    return srOnly;
}

const defaultOnClick = () => {
    console.log('click');
}