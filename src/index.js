import './style.css';
import ginkgo from './ginkgo.jpeg';

import createHomePage from './createHomePage';
import createMenuPage from './createMenuPage';

let content = document.createElement('div');
content.setAttribute('id', 'content');

let header = document.createElement('div');
header.setAttribute('id', 'header');
    
const ginkgoLogo = new Image();
ginkgoLogo.setAttribute('id', 'header-image');
ginkgoLogo.src = ginkgo;

let titleText = document.createElement('div');
titleText.setAttribute('id', 'title-text');
titleText.textContent = 'Little Ginkgo Asian Restaurant';

let tagsDiv = document.createElement('div');
tagsDiv.setAttribute('id', 'tags-div');
let leftTag = document.createElement('div');
leftTag.textContent = 'We serve Wine & Beer';
leftTag.setAttribute('id', 'left-tag');
leftTag.classList.add('tag-divs');
let midTag = document.createElement('div');
midTag.classList.add('tag-divs');
let rightTag = document.createElement('div');
rightTag.textContent = 'Dine In & Take Out';
rightTag.setAttribute('id', 'right-tag');
rightTag.classList.add('tag-divs')
tagsDiv.appendChild(leftTag);
tagsDiv.appendChild(midTag);
tagsDiv.appendChild(rightTag);


let tabsDiv = document.createElement('div');
tabsDiv.setAttribute('id', 'tabs-div');
let homeTab = document.createElement('home-tab');
homeTab.textContent = 'Home';
homeTab.setAttribute('id', 'home-tab');
homeTab.classList.add('nav-tabs');
let menuTab = document.createElement('div');
menuTab.textContent = 'Menu';
menuTab.setAttribute('id', 'menu-tab');
menuTab.classList.add('nav-tabs');
let contactTab = document.createElement('div');
contactTab.textContent = 'Contact';
contactTab.setAttribute('id', 'contact-tab');
contactTab.classList.add('nav-tabs');
let couponsTab = document.createElement('div');
couponsTab.textContent = 'Coupons';
couponsTab.setAttribute('id', 'coupons-tab');
couponsTab.classList.add('nav-tabs');

let orderDiv = document.createElement('div');
orderDiv.setAttribute('id', 'order-div');
let orderDivButton = document.createElement('id', 'order-div-button');
orderDivButton.setAttribute('id', 'order-div-button');
orderDivButton.textContent = 'Order Online';
orderDiv.appendChild(orderDivButton);

tabsDiv.appendChild(homeTab);
tabsDiv.appendChild(menuTab);
tabsDiv.appendChild(contactTab);
tabsDiv.appendChild(couponsTab);
    
header.appendChild(ginkgoLogo);
header.appendChild(titleText);
header.appendChild(tagsDiv);
header.appendChild(tabsDiv);
header.appendChild(orderDiv);


let body = document.createElement('div');
body.setAttribute('id', 'body');

let footer = document.createElement('div');
footer.setAttribute('id', 'footer');

content.appendChild(header);
content.appendChild(body);
content.appendChild(footer);

document.body.appendChild(content);

createMenuPage();