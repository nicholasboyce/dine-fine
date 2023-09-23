/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   home: () => (/* binding */ home)
/* harmony export */ });

function home(element, state) {
    document.getElementsByClassName('main-nav-container')[0].style.display = 'none';
    if (element.firstElementChild) {element.firstElementChild.remove();}

    const options = ['Menu', 'Hours', 'Reservations'];

    const container = document.createElement('nav');
    container.classList.add('nav-container');

    element.appendChild(container);

    options.map(button);

    function button(name) {
        const button = document.createElement('button');
        button.textContent = name;

        button.addEventListener("click", (e) => {
            console.log(`${e.currentTarget.textContent}`);
            state(`${e.currentTarget.textContent}`);
        });

        container.appendChild(button);
    }
}



/***/ }),

/***/ "./src/hours.js":
/*!**********************!*\
  !*** ./src/hours.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hours: () => (/* binding */ hours)
/* harmony export */ });

function hours(element) {
    document.getElementsByClassName('main-nav-container')[0].style.display = 'block';
    if (element.firstElementChild) {element.firstElementChild.remove();}

    const hours = document.createElement('section');
    hours.classList.add('hours');

    element.appendChild(hours);

    //Heading
    const heading = document.createElement('h2');
    heading.textContent = 'Hours';
    hours.appendChild(heading);

    //Hours of Operation
    const operating =  [
        {
            day: "Sunday",
            time: "8AM - 7PM"
        },
        {
            day: "Monday",
            time: "10AM - 9PM"
        },
        {
            day: "Tuesday",
            time: "10AM - 9PM"
        },
        {
            day: "Wednesday",
            time: "10AM - 9PM"
        },
        {
            day: "Thursday",
            time: "8AM - 10PM"
        },
        {
            day: "Friday",
            time: "12PM - 11PM"
        },
        {
            day: "Saturday",
            time: "8AM - 11PM"
        }
    ];

    operating.map((option) => {
        const line = `${option.day}: ${option.time}`;
        const para = document.createElement('p');
        para.textContent = line;
        hours.appendChild(para);
    });


    //Location
    const location = document.createElement('h2');
    location.textContent = 'Location'
    hours.appendChild(location);

    const address = document.createElement('address');
    address.textContent = '777 Cherrytree Lane, Mintwood, Vermont'
    hours.appendChild(address);
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* binding */ menu)
/* harmony export */ });

function menu(element) {
    document.getElementsByClassName('main-nav-container')[0].style.display = 'block';
    if (element.firstElementChild) {element.firstElementChild.remove();}

    const menu = document.createElement('ul');
    menu.classList.add('menu');

    element.appendChild(menu);

    const menuItems = [
        {
            name: "Burger",
            price: "$5.00",
            desc: "A tasty well-done well-done beef burger."
        }, {
            name: "Fries",
            price: "$1.00",
            desc: "Perfectly crunchy, savory, salty fries."
        }, {
            name: "Pad Kra Pao",
            price: "$7.00",
            desc: "A Brooklyn take on a Thai classic."
        }, {
            name: "Water",
            price: "$0.00",
            desc: "The finest dihydrogen monoxide around."
        }
    ]


    menuItems.map((item) => {
        const food = document.createElement('li');
        const name = document.createElement('h2');
        const price =  document.createElement('h3');
        const detail = document.createElement('p');

        name.textContent = item.name;
        price.textContent = item.price;
        detail.textContent = item.desc;

        food.append(name, price, detail);

        menu.append(food);
    });
}



/***/ }),

/***/ "./src/reservations.js":
/*!*****************************!*\
  !*** ./src/reservations.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reservations: () => (/* binding */ reservations)
/* harmony export */ });

function reservations(element) {
    document.getElementsByClassName('main-nav-container')[0].style.display = 'block';
    if (element.firstElementChild) {element.firstElementChild.remove();}

    const rsvp = document.createElement('section');
    rsvp.classList.add('rsvp');

    element.appendChild(rsvp);

    const formWrap = document.createElement('div');
    formWrap.classList.add('form-container');
    rsvp.appendChild(formWrap);

    const heading = document.createElement('h2');
    heading.textContent = 'Make Your Reservation Below';
    formWrap.appendChild(heading);

    const form = document.createElement('form');
    //Name, Number, Email, Submit

    const sections = [
        {
            id: "name",
            type: "text", 
            name: "name",
        },
        {
            id: "number",
            type: "tel", 
            name: "number",
        },
        {
            id: "email",
            type: "email", 
            name: "email",
        }
    ];

    sections.map((section) => {
        const para = document.createElement('p');
        const label = document.createElement('label');
        const input = document.createElement('input');

        label.setAttribute("for", `${section.id}`);
        input.setAttribute("id", `${section.id}`);
        input.setAttribute("type", `${section.type}`);
        input.setAttribute("name", `${section.name}`);

        label.textContent = `${section.name.charAt(0).toUpperCase()}${section.name.slice(1)}: `;
        para.append(label, input);
        form.appendChild(para);
    });

    const button = document.createElement('button');
    button.setAttribute("type", "submit");
    button.textContent = 'Submit';

    form.appendChild(button);
    formWrap.appendChild(form);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _reservations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservations */ "./src/reservations.js");
/* harmony import */ var _hours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hours */ "./src/hours.js");
// import Background from './foodbackground.jpg';






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
            (0,_home__WEBPACK_IMPORTED_MODULE_1__.home)(content, setPage);
            break;
        case 'Menu':
            (0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu)(content);
            break;
        case 'Hours':
            (0,_hours__WEBPACK_IMPORTED_MODULE_4__.hours)(content);
            break;
        case 'Reservations':
            (0,_reservations__WEBPACK_IMPORTED_MODULE_3__.reservations)(content);
            break;
        default:
            (0,_home__WEBPACK_IMPORTED_MODULE_1__.home)(content);
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RCx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGluZS1maW5lLy4vc3JjL3N0eWxlLmNzcz84ZTBlIiwid2VicGFjazovL2RpbmUtZmluZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2RpbmUtZmluZS8uL3NyYy9ob3Vycy5qcyIsIndlYnBhY2s6Ly9kaW5lLWZpbmUvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9kaW5lLWZpbmUvLi9zcmMvcmVzZXJ2YXRpb25zLmpzIiwid2VicGFjazovL2RpbmUtZmluZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kaW5lLWZpbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RpbmUtZmluZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RpbmUtZmluZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RpbmUtZmluZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcbmZ1bmN0aW9uIGhvbWUoZWxlbWVudCwgc3RhdGUpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluLW5hdi1jb250YWluZXInKVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGlmIChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKSB7ZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTt9XG5cbiAgICBjb25zdCBvcHRpb25zID0gWydNZW51JywgJ0hvdXJzJywgJ1Jlc2VydmF0aW9ucyddO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdi1jb250YWluZXInKTtcblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIG9wdGlvbnMubWFwKGJ1dHRvbik7XG5cbiAgICBmdW5jdGlvbiBidXR0b24obmFtZSkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnR9YCk7XG4gICAgICAgICAgICBzdGF0ZShgJHtlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnR9YCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgaG9tZSB9OyIsIlxuZnVuY3Rpb24gaG91cnMoZWxlbWVudCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW4tbmF2LWNvbnRhaW5lcicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGlmIChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKSB7ZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTt9XG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgICAvL0hlYWRpbmdcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0hvdXJzJztcbiAgICBob3Vycy5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIC8vSG91cnMgb2YgT3BlcmF0aW9uXG4gICAgY29uc3Qgb3BlcmF0aW5nID0gIFtcbiAgICAgICAge1xuICAgICAgICAgICAgZGF5OiBcIlN1bmRheVwiLFxuICAgICAgICAgICAgdGltZTogXCI4QU0gLSA3UE1cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkYXk6IFwiTW9uZGF5XCIsXG4gICAgICAgICAgICB0aW1lOiBcIjEwQU0gLSA5UE1cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkYXk6IFwiVHVlc2RheVwiLFxuICAgICAgICAgICAgdGltZTogXCIxMEFNIC0gOVBNXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGF5OiBcIldlZG5lc2RheVwiLFxuICAgICAgICAgICAgdGltZTogXCIxMEFNIC0gOVBNXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGF5OiBcIlRodXJzZGF5XCIsXG4gICAgICAgICAgICB0aW1lOiBcIjhBTSAtIDEwUE1cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkYXk6IFwiRnJpZGF5XCIsXG4gICAgICAgICAgICB0aW1lOiBcIjEyUE0gLSAxMVBNXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGF5OiBcIlNhdHVyZGF5XCIsXG4gICAgICAgICAgICB0aW1lOiBcIjhBTSAtIDExUE1cIlxuICAgICAgICB9XG4gICAgXTtcblxuICAgIG9wZXJhdGluZy5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBsaW5lID0gYCR7b3B0aW9uLmRheX06ICR7b3B0aW9uLnRpbWV9YDtcbiAgICAgICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IGxpbmU7XG4gICAgICAgIGhvdXJzLmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIH0pO1xuXG5cbiAgICAvL0xvY2F0aW9uXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJ1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhZGRyZXNzJyk7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICc3NzcgQ2hlcnJ5dHJlZSBMYW5lLCBNaW50d29vZCwgVmVybW9udCdcbiAgICBob3Vycy5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbn1cblxuZXhwb3J0IHsgaG91cnMgfTsiLCJcbmZ1bmN0aW9uIG1lbnUoZWxlbWVudCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW4tbmF2LWNvbnRhaW5lcicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGlmIChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKSB7ZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTt9XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQnVyZ2VyXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkNS4wMFwiLFxuICAgICAgICAgICAgZGVzYzogXCJBIHRhc3R5IHdlbGwtZG9uZSB3ZWxsLWRvbmUgYmVlZiBidXJnZXIuXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogXCJGcmllc1wiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDEuMDBcIixcbiAgICAgICAgICAgIGRlc2M6IFwiUGVyZmVjdGx5IGNydW5jaHksIHNhdm9yeSwgc2FsdHkgZnJpZXMuXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogXCJQYWQgS3JhIFBhb1wiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDcuMDBcIixcbiAgICAgICAgICAgIGRlc2M6IFwiQSBCcm9va2x5biB0YWtlIG9uIGEgVGhhaSBjbGFzc2ljLlwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6IFwiV2F0ZXJcIixcbiAgICAgICAgICAgIHByaWNlOiBcIiQwLjAwXCIsXG4gICAgICAgICAgICBkZXNjOiBcIlRoZSBmaW5lc3QgZGloeWRyb2dlbiBtb25veGlkZSBhcm91bmQuXCJcbiAgICAgICAgfVxuICAgIF1cblxuXG4gICAgbWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBmb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNvbnN0IHByaWNlID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG4gICAgICAgIGRldGFpbC50ZXh0Q29udGVudCA9IGl0ZW0uZGVzYztcblxuICAgICAgICBmb29kLmFwcGVuZChuYW1lLCBwcmljZSwgZGV0YWlsKTtcblxuICAgICAgICBtZW51LmFwcGVuZChmb29kKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgbWVudSB9OyIsIlxuZnVuY3Rpb24gcmVzZXJ2YXRpb25zKGVsZW1lbnQpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluLW5hdi1jb250YWluZXInKVswXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBpZiAoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkge2VsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7fVxuXG4gICAgY29uc3QgcnN2cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICByc3ZwLmNsYXNzTGlzdC5hZGQoJ3JzdnAnKTtcblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocnN2cCk7XG5cbiAgICBjb25zdCBmb3JtV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1XcmFwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG4gICAgcnN2cC5hcHBlbmRDaGlsZChmb3JtV3JhcCk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ01ha2UgWW91ciBSZXNlcnZhdGlvbiBCZWxvdyc7XG4gICAgZm9ybVdyYXAuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIC8vTmFtZSwgTnVtYmVyLCBFbWFpbCwgU3VibWl0XG5cbiAgICBjb25zdCBzZWN0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwibmFtZVwiLFxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsIFxuICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgdHlwZTogXCJ0ZWxcIiwgXG4gICAgICAgICAgICBuYW1lOiBcIm51bWJlclwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCJlbWFpbFwiLFxuICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLCBcbiAgICAgICAgICAgIG5hbWU6IFwiZW1haWxcIixcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBzZWN0aW9ucy5tYXAoKHNlY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGAke3NlY3Rpb24uaWR9YCk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3NlY3Rpb24uaWR9YCk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgYCR7c2VjdGlvbi50eXBlfWApO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGAke3NlY3Rpb24ubmFtZX1gKTtcblxuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke3NlY3Rpb24ubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke3NlY3Rpb24ubmFtZS5zbGljZSgxKX06IGA7XG4gICAgICAgIHBhcmEuYXBwZW5kKGxhYmVsLCBpbnB1dCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBmb3JtV3JhcC5hcHBlbmRDaGlsZChmb3JtKTtcbn1cblxuZXhwb3J0IHsgcmVzZXJ2YXRpb25zIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL2Zvb2RiYWNrZ3JvdW5kLmpwZyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGhvbWUgfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgbWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyByZXNlcnZhdGlvbnMgfSBmcm9tICcuL3Jlc2VydmF0aW9ucyc7XG5pbXBvcnQgeyBob3VycyB9IGZyb20gJy4vaG91cnMnO1xuXG5jb25zb2xlLmxvZyhcIkp1bXAhXCIpO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuY29uc3QgcGFnZXMgPSBbJ0hvbWUnLCAnTWVudScsICdIb3VycycsICdSZXNlcnZhdGlvbnMnXTtcblxubGV0IGN1cnJQYWdlID0gcGFnZXNbMF07XG5sZXQgbGFzdFBhZ2U7XG5cbi8vIGNvbnN0IG15QmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuLy8gbXlCYWNrZ3JvdW5kLnNyYyA9IEJhY2tncm91bmQ7XG5cbi8vIGJvZHkuYXBwZW5kQ2hpbGQobXlCYWNrZ3JvdW5kKTtcblxuY29uc3QgaG9tZUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuaG9tZUxvZ28uY2xhc3NMaXN0LmFkZCgnaG9tZS1sb2dvJyk7XG5ob21lTG9nby50ZXh0Q29udGVudCA9ICdEaW5lIEZpbmUnO1xuYm9keS5hcHBlbmRDaGlsZChob21lTG9nbyk7XG5uYXZCYXIoKTtcblxuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbnNldFBhZ2UoY3VyclBhZ2UpO1xuXG5cbmZ1bmN0aW9uIHNldFBhZ2UocGFnZSkge1xuICAgIGxhc3RQYWdlID0gY3VyclBhZ2U7XG4gICAgY3VyclBhZ2UgPSBwYWdlO1xuXG4gICAgc3dpdGNoIChjdXJyUGFnZSkge1xuICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgIGhvbWUoY29udGVudCwgc2V0UGFnZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTWVudSc6XG4gICAgICAgICAgICBtZW51KGNvbnRlbnQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0hvdXJzJzpcbiAgICAgICAgICAgIGhvdXJzKGNvbnRlbnQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1Jlc2VydmF0aW9ucyc6XG4gICAgICAgICAgICByZXNlcnZhdGlvbnMoY29udGVudCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGhvbWUoY29udGVudCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBuYXZCYXIoKSB7XG4gICAgY29uc3QgbWFpbk5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG1haW5OYXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1uYXYtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBtYWluTmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBtYWluTmF2QmFyLmNsYXNzTGlzdC5hZGQoJ21haW4tbmF2Jyk7XG5cbiAgICBwYWdlcy5tYXAoKHBhZ2UpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBwYWdlO1xuXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnR9YCk7XG4gICAgICAgICAgICBzZXRQYWdlKGAke2UuY3VycmVudFRhcmdldC50ZXh0Q29udGVudH1gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJQYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFpbk5hdkJhci5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9KTtcblxuICAgIG1haW5OYXYuYXBwZW5kKG1haW5OYXZCYXIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbk5hdik7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==