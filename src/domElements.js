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

export const TodoCard = (title = 'title', desc = 'description', removeCallBack = defaultOnClick, id = 0, onclickCard) => {
    const todo = document.createElement('div');
    todo.className = 'todo-card';
    todo.id = id;
    todo.onclick = (e) => {
        e.stopPropagation();
        onclickCard(e);
    }

    const checkbox = document.createElement('input');
    checkbox.className = 'checkbox';
    checkbox.type = 'checkbox';
    checkbox.onclick = (e) => {
        e.stopPropagation();
    }

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    titleElement.className = 'title';

    const description = document.createElement('p');
    description.textContent = desc;
    description.className = 'description';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete fa-solid fa-delete-left';
    deleteBtn.type = 'button';
    deleteBtn.onclick = (e) => {
        e.stopPropagation();
        removeCallBack(e);
    }
    deleteBtn.append(screenReaderOnlyText('remove'));

    todo.append(checkbox, titleElement, description, deleteBtn);

    return todo;
};

export const TodoPage = (() => {


    const setOnclickDone = (callback) => {
        onclickDone = callback
    }

    const setOnclickDelete = (callback) => {
        onclickDelete = callback;
    }

    let onclickDone = (e) => {};
    let onclickDelete = (e) => {};

    const fromValues = {
        'title': '',
        'description': '',
        'dueDate': new Date()
    };
    
    const getTodoPage = (title ='', desc = '', date = new Date()) => {

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
        todoDoneBtn.onclick = (e) => {
            fromValues.title = titleInput.value;
            fromValues.description = descInput.value;
            fromValues.dueDate = dateInput.value;
            onclickDone(e);
        }
        const todoDeleteBtn = document.createElement('button');
        todoDeleteBtn.className = 'delete';
        todoDeleteBtn.type = 'button';
        todoDeleteBtn.textContent = 'delete';
        todoDeleteBtn.onclick = onclickDelete;
        
        todoPage.append(titleInput, descInput, dateInput, subTodosDiv, addSubTodoBtn, todoDoneBtn, todoDeleteBtn);
        return todoPage;
    }

    return { getTodoPage, setOnclickDone, setOnclickDelete, fromValues }

})();

export const AddTodoPage = (() => {
    const fromValues = {
        'title': '',
        'description': '',
        'dueDate': new Date()
    };

    const getAddTodoPage = (title ='', desc = '', date = new Date(), onclickAdd, onclickDelete) => {
        
        const todoPage = document.createElement('div');
        todoPage.className = 'add-todo-page';
    
        const addTodoForm = document.createElement('form');
        addTodoForm.className = 'add-todo-form';
        addTodoForm.onsubmit = (e) => {
            e.preventDefault();
        }
    
        const titleInput = document.createElement('input');
        titleInput.required = true;
        titleInput.className = 'title';
        titleInput.value = title;
        titleInput.type = 'text';
    
        const descInput = document.createElement('textarea');
        descInput.value = desc;
        descInput.className = 'description';
    
        const dateInput = document.createElement('input');
        dateInput.required = true;
        dateInput.className = 'datePicker';
        dateInput.value = format(date, 'yyyy-MM-dd');
        console.log(format(date, 'MM-dd-yyyy'));
        dateInput.type = 'date';
    
        const addTodoBtn = document.createElement('button');
        addTodoBtn.className = 'add';
        addTodoBtn.type = 'submit';
        addTodoBtn.textContent = 'add todo';
        addTodoBtn.onclick = () => {
            fromValues.title = titleInput.value
            fromValues.description = descInput.value
            fromValues.dueDate = dateInput.value
            onclickAdd();
        };
    
        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'cancel';
        cancelBtn.type = 'button';
        cancelBtn.textContent = 'cancel';
        cancelBtn.onclick = onclickDelete;
    
        addTodoForm.append(titleInput, descInput, dateInput, addTodoBtn, cancelBtn)
        todoPage.append(addTodoForm);

        return todoPage
    }
    
    return {getAddTodoPage, fromValues};

})();

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