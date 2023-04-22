import ramen from './ramen.svg';

const createHomePage = () => {


    let body = document.querySelector('#body');

    let welcomeDiv = document.createElement('div');
    welcomeDiv.setAttribute('id', 'welcome-div');
    let welcomeDivTitle = document.createElement('div');
    welcomeDivTitle.setAttribute('id', 'welcome-div-title');
    welcomeDivTitle.textContent = 'Welcome';
    welcomeDiv.appendChild(welcomeDivTitle);
    let welcomeDivContent = document.createElement('div');
    welcomeDivContent.setAttribute('id', 'welcome-div-content');
    welcomeDivContent.textContent = 'Little Gingko serves authentic Chinese food and Japanese Ramen made with fresh local ingredients. We guarantee you’ll be delighted, from the first sip of wine to the last bite of our healthy food!';
    welcomeDiv.appendChild(welcomeDivContent);
    
    let welcomeDivRightImg = document.createElement('div');
    let ramenIcon = new Image();
    ramenIcon.src = ramen;
    welcomeDivRightImg.setAttribute('id', 'ramen-image');
    welcomeDivRightImg.appendChild(ramenIcon);

    let hoursDiv = document.createElement('div');
    hoursDiv.setAttribute('id', 'hours-div');
    let hoursDivTitle = document.createElement('div');
    hoursDivTitle.textContent = 'Open 6 Days a Week';
    hoursDivTitle.setAttribute('id', 'hours-div-title');
    let hoursDivContentOne = document.createElement('div');
    hoursDivContentOne.classList.add('hours-content');
    hoursDivContentOne.textContent = 'Monday: Closed';
    let hoursDivContentTwo = document.createElement('div');
    hoursDivContentTwo.classList.add('hours-content');
    hoursDivContentTwo.textContent = 'Tue-Fri: 11:30am - 9:00pm';
    let hoursDivContentThree = document.createElement('div');
    hoursDivContentThree.classList.add('hours-content');
    hoursDivContentThree.textContent = 'Sat-Sun: 12:00am - 9:00pm';
    hoursDiv.appendChild(hoursDivTitle);
    hoursDiv.appendChild(hoursDivContentOne);
    hoursDiv.appendChild(hoursDivContentTwo);
    hoursDiv.appendChild(hoursDivContentThree);

    body.appendChild(welcomeDiv);
    body.appendChild(welcomeDivRightImg);
    body.appendChild(hoursDiv);

};

export default createHomePage;

