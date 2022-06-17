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

export const TodoCard = (title = 'title', desc = 'description') => {
    const todo = document.createElement('div');
    todo.className = 'todo';

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
    deleteBtn.append(screenReaderOnlyText('remove'));

    todo.append(checkbox, titleElement, description, deleteBtn);

    return todo;
};

const screenReaderOnlyText = (text) => {
    const srOnly = document.createElement('p');
    srOnly.textContent = text;
    srOnly.className = 'sr-only';

    return srOnly;
}