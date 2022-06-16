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

    const gitHubLink = document.createElement('a');
    gitHubLink.href = 'https://github.com/RobbeVanslambrouck';
    gitHubLink.target = '_blank';
    gitHubLink.textContent = ' robbe vanslambrouck';
    
    const githubLogo = document.createElement('i');
    gitHubLink.className = 'fa-brands fa-github';
    gitHubLink.prepend(githubLogo);

    footer.append(gitHubLink);
    return footer;
})();