const createMenuPage = () => {

    let body = document.querySelector('#body');

    let menuSubGroups = document.createElement('div');
    menuSubGroups.setAttribute('id', 'menu-sub-groups');
    let appetizerTab = document.createElement('div');
    appetizerTab.textContent = 'Appetizers';
    appetizerTab.setAttribute('id', 'appetizer-tab');
    appetizerTab.classList.add('menu-tab');
    let entreeTab = document.createElement('div');
    entreeTab.textContent = 'Entrees';
    entreeTab.setAttribute('id', 'entrees-tab');
    entreeTab.classList.add('menu-tab');
    let ramenWineTab = document.createElement('div');
    ramenWineTab.textContent = 'Ramen & Wine';
    ramenWineTab.setAttribute('id', 'ramen-wine-tab');
    ramenWineTab.classList.add('menu-tab');
    menuSubGroups.appendChild(appetizerTab);
    menuSubGroups.appendChild(entreeTab);
    menuSubGroups.appendChild(ramenWineTab);
    let spaceDiv = document.createElement('div');
    menuSubGroups.appendChild(spaceDiv);

    body.appendChild(menuSubGroups);

    const createAppetizerTab = () => {
        let appetizerTab = document.createElement('div');
        appetizerTab.setAttribute('id', 'appetizer-menu');
        let leftHalf = document.createElement('div');
        leftHalf.setAttribute('id', 'appetizer-menu-left-half');
        let rightHalf = document.createElement('div');
        rightHalf.setAttribute('id', 'appetizer-menu-right-half');
        appetizerTab.appendChild(leftHalf);
        appetizerTab.appendChild(rightHalf);
        let leftHalfTitle = document.createElement('div');
        leftHalfTitle.classList.add('menu-section-title');
        leftHalfTitle.textContent = 'Appetizers';
        leftHalf.appendChild(leftHalfTitle);
        let leftHalfContent = document.createElement('div');
        leftHalfContent.setAttribute('id', 'appetizer-menu-left-half-content');
        leftHalf.appendChild(leftHalfContent);
        let leftHalfContentLeftHalf = document.createElement('div');
        leftHalfContentLeftHalf.classList.add('menu-cards-left-half');
        leftHalfContent.appendChild(leftHalfContentLeftHalf);
        let leftHalfContentRightHalf = document.createElement('div');
        leftHalfContentRightHalf.classList.add('menu-price');
        leftHalfContent.appendChild(leftHalfContentRightHalf);
        let edamame = document.createElement('div');
        edamame.textContent = 'Edamame';
        edamame.classList.add('menu-item-title');
        leftHalfContentLeftHalf.appendChild(edamame);
        let edamamePrice = document.createElement('div');
        edamamePrice.textContent = '6.00';
        leftHalfContentRightHalf.appendChild(edamamePrice);
        let springRoll = document.createElement('div');
        springRoll.classList.add('title-with-description');
        let springRollTitle = document.createElement('div');
        springRollTitle.textContent = 'Spring Roll';
        let springRollDescription = document.createElement('div');
        springRollDescription.classList.add('menu-item-description');
        springRollDescription.textContent = ' - vegetable';
        springRoll.appendChild(springRollTitle);
        springRoll.appendChild(springRollDescription);
        leftHalfContentLeftHalf.appendChild(springRoll);
        let springRollPrice = document.createElement('div');
        springRollPrice.textContent = '2.00';
        leftHalfContentRightHalf.appendChild(springRollPrice);
        let crabCheeseWonton = document.createElement('div');
        crabCheeseWonton.classList.add('title-with-description');
        let crabCheeseWontonTitle = document.createElement('div');
        crabCheeseWontonTitle.textContent = 'Crab Cheese Wonton (4)';
        let crabCheeseWontonDescription = document.createElement('div');
        crabCheeseWontonDescription.classList.add('menu-item-description');
        crabCheeseWontonDescription.textContent = 'Crabmeat and cheese';
        crabCheeseWonton.append(crabCheeseWontonTitle);
        crabCheeseWonton.append(crabCheeseWontonDescription);
        leftHalfContentLeftHalf.appendChild(crabCheeseWonton);
        let crabCheeseWontonPrice = document.createElement('div');
        crabCheeseWontonPrice.textContent = '5.25';
        leftHalfContentRightHalf.appendChild(crabCheeseWontonPrice);


        body.appendChild(appetizerTab);

    };

    createAppetizerTab();

};

export default createMenuPage;