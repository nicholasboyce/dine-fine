// import Background from './foodbackground.jpg';
import './style.css';
import { home } from './home';
import { menu } from './menu';
import { reservations } from './reservations';
import { hours } from './hours';

console.log("Jump!");

const body = document.querySelector('body');

const content = document.createElement('div');
content.classList.add('content');

const pages = ['Home', 'Menu', 'Hours', 'Reservations'];

let currPage = pages[0];
let lastPage;

// const myBackground = new Image();
// myBackground.src = Background;

// body.appendChild(myBackground);

const homeLogo = document.createElement('h1');
homeLogo.classList.add('home-logo');
homeLogo.textContent = 'Dine Fine';
body.appendChild(homeLogo);
navBar();

body.appendChild(content);
setPage(currPage);


function setPage(page) {
    lastPage = currPage;
    currPage = page;

    switch (currPage) {
        case 'Home':
            home(content, setPage);
            break;
        case 'Menu':
            menu(content);
            break;
        case 'Hours':
            hours(content);
            break;
        case 'Reservations':
            reservations(content);
            break;
        default:
            home(content);
    }
}

function navBar() {
    const mainNav = document.createElement('nav');
    mainNav.classList.add('main-nav-container');

    const mainNavBar = document.createElement('ul');
    mainNavBar.classList.add('main-nav');

    pages.map((page) => {
        const item = document.createElement('li');
        item.textContent = page;

        item.addEventListener("click", (e) => {
            console.log(`${e.currentTarget.textContent}`);
            setPage(`${e.currentTarget.textContent}`);
            console.log(currPage);
        });

        mainNavBar.appendChild(item);
    });

    mainNav.append(mainNavBar);
    body.appendChild(mainNav);
}

