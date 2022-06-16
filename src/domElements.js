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