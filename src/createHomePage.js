import fortuneCookie from './fortune-cookie.svg';

const createHomePage = () => {
    
    let content = document.createElement('div');
    content.setAttribute('id', 'content');

    let header = document.createElement('div');
    header.setAttribute('id', 'header');
    
    const fortuneCookieLogo = new Image();
    fortuneCookieLogo.src = fortuneCookie;
    
    header.appendChild(fortuneCookieLogo);


    let body = document.createElement('div');
    body.setAttribute('id', 'body');

    let footer = document.createElement('div');
    footer.setAttribute('id', 'footer');

    content.appendChild(header);
    content.appendChild(body);
    content.appendChild(footer);

    document.body.appendChild(content);


};

export default createHomePage;

