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

    for (option of operating) {
        const line = `${option.day}: ${option.time}`;
        const para = document.createElement('p');
        para.textContent = line;
        heading.appendChild(para);
    }


    //Location
    const location = document.createElement('h2');
    location.textContent = 'Location'
    heading.appendChild(location);

    const address = document.createElement('address');
    address.textContent = '777 Cherrytree Lane, Mintwood, Vermont'
    heading.appendChild(address);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQiw0QkFBNEI7QUFDdkQscUJBQXFCLDRCQUE0QjtBQUNqRCxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixXQUFXLElBQUksWUFBWTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDOzs7Ozs7OztVQ0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDcUI7QUFDUztBQUNBO0FBQ2dCO0FBQ2Q7O0FBRWhDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksMkNBQUk7QUFDaEI7QUFDQTtBQUNBLFlBQVksMkNBQUk7QUFDaEI7QUFDQTtBQUNBLFlBQVksNkNBQUs7QUFDakI7QUFDQTtBQUNBLFlBQVksMkRBQVk7QUFDeEI7QUFDQTtBQUNBLFlBQVksMkNBQUk7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsNEJBQTRCO0FBQ3ZELHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaW5lLWZpbmUvLi9zcmMvc3R5bGUuY3NzPzhlMGUiLCJ3ZWJwYWNrOi8vZGluZS1maW5lLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vZGluZS1maW5lLy4vc3JjL2hvdXJzLmpzIiwid2VicGFjazovL2RpbmUtZmluZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL2RpbmUtZmluZS8uL3NyYy9yZXNlcnZhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZGluZS1maW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RpbmUtZmluZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGluZS1maW5lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGluZS1maW5lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGluZS1maW5lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlxuZnVuY3Rpb24gaG9tZShlbGVtZW50LCBzdGF0ZSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW4tbmF2LWNvbnRhaW5lcicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaWYgKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpIHtlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO31cblxuICAgIGNvbnN0IG9wdGlvbnMgPSBbJ01lbnUnLCAnSG91cnMnLCAnUmVzZXJ2YXRpb25zJ107XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2LWNvbnRhaW5lcicpO1xuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgb3B0aW9ucy5tYXAoYnV0dG9uKTtcblxuICAgIGZ1bmN0aW9uIGJ1dHRvbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2UuY3VycmVudFRhcmdldC50ZXh0Q29udGVudH1gKTtcbiAgICAgICAgICAgIHN0YXRlKGAke2UuY3VycmVudFRhcmdldC50ZXh0Q29udGVudH1gKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfVxufVxuXG5leHBvcnQgeyBob21lIH07IiwiXG5mdW5jdGlvbiBob3VycyhlbGVtZW50KSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbi1uYXYtY29udGFpbmVyJylbMF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgaWYgKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpIHtlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO31cblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XG5cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICAgIC8vSGVhZGluZ1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgLy9Ib3VycyBvZiBPcGVyYXRpb25cbiAgICBjb25zdCBvcGVyYXRpbmcgPSAgW1xuICAgICAgICB7XG4gICAgICAgICAgICBkYXk6IFwiU3VuZGF5XCIsXG4gICAgICAgICAgICB0aW1lOiBcIjhBTSAtIDdQTVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRheTogXCJNb25kYXlcIixcbiAgICAgICAgICAgIHRpbWU6IFwiMTBBTSAtIDlQTVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRheTogXCJUdWVzZGF5XCIsXG4gICAgICAgICAgICB0aW1lOiBcIjEwQU0gLSA5UE1cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkYXk6IFwiV2VkbmVzZGF5XCIsXG4gICAgICAgICAgICB0aW1lOiBcIjEwQU0gLSA5UE1cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkYXk6IFwiVGh1cnNkYXlcIixcbiAgICAgICAgICAgIHRpbWU6IFwiOEFNIC0gMTBQTVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRheTogXCJGcmlkYXlcIixcbiAgICAgICAgICAgIHRpbWU6IFwiMTJQTSAtIDExUE1cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkYXk6IFwiU2F0dXJkYXlcIixcbiAgICAgICAgICAgIHRpbWU6IFwiOEFNIC0gMTFQTVwiXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgZm9yIChvcHRpb24gb2Ygb3BlcmF0aW5nKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBgJHtvcHRpb24uZGF5fTogJHtvcHRpb24udGltZX1gO1xuICAgICAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gbGluZTtcbiAgICAgICAgaGVhZGluZy5hcHBlbmRDaGlsZChwYXJhKTtcbiAgICB9XG5cblxuICAgIC8vTG9jYXRpb25cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSAnTG9jYXRpb24nXG4gICAgaGVhZGluZy5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYWRkcmVzcycpO1xuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnNzc3IENoZXJyeXRyZWUgTGFuZSwgTWludHdvb2QsIFZlcm1vbnQnXG4gICAgaGVhZGluZy5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbn1cblxuZXhwb3J0IHsgaG91cnMgfTsiLCJcbmZ1bmN0aW9uIG1lbnUoZWxlbWVudCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21haW4tbmF2LWNvbnRhaW5lcicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGlmIChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKSB7ZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTt9XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQnVyZ2VyXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkNS4wMFwiLFxuICAgICAgICAgICAgZGVzYzogXCJBIHRhc3R5IHdlbGwtZG9uZSB3ZWxsLWRvbmUgYmVlZiBidXJnZXIuXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogXCJGcmllc1wiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDEuMDBcIixcbiAgICAgICAgICAgIGRlc2M6IFwiUGVyZmVjdGx5IGNydW5jaHksIHNhdm9yeSwgc2FsdHkgZnJpZXMuXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogXCJQYWQgS3JhIFBhb1wiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDcuMDBcIixcbiAgICAgICAgICAgIGRlc2M6IFwiQSBCcm9va2x5biB0YWtlIG9uIGEgVGhhaSBjbGFzc2ljLlwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6IFwiV2F0ZXJcIixcbiAgICAgICAgICAgIHByaWNlOiBcIiQwLjAwXCIsXG4gICAgICAgICAgICBkZXNjOiBcIlRoZSBmaW5lc3QgZGloeWRyb2dlbiBtb25veGlkZSBhcm91bmQuXCJcbiAgICAgICAgfVxuICAgIF1cblxuXG4gICAgbWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBmb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNvbnN0IHByaWNlID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG4gICAgICAgIGRldGFpbC50ZXh0Q29udGVudCA9IGl0ZW0uZGVzYztcblxuICAgICAgICBmb29kLmFwcGVuZChuYW1lLCBwcmljZSwgZGV0YWlsKTtcblxuICAgICAgICBtZW51LmFwcGVuZChmb29kKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgbWVudSB9OyIsIlxuZnVuY3Rpb24gcmVzZXJ2YXRpb25zKGVsZW1lbnQpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYWluLW5hdi1jb250YWluZXInKVswXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBpZiAoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkge2VsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7fVxufVxuXG5leHBvcnQgeyByZXNlcnZhdGlvbnMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vZm9vZGJhY2tncm91bmQuanBnJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IHJlc2VydmF0aW9ucyB9IGZyb20gJy4vcmVzZXJ2YXRpb25zJztcbmltcG9ydCB7IGhvdXJzIH0gZnJvbSAnLi9ob3Vycyc7XG5cbmNvbnNvbGUubG9nKFwiSnVtcCFcIik7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuXG5jb25zdCBwYWdlcyA9IFsnSG9tZScsICdNZW51JywgJ0hvdXJzJywgJ1Jlc2VydmF0aW9ucyddO1xuXG5sZXQgY3VyclBhZ2UgPSBwYWdlc1swXTtcbmxldCBsYXN0UGFnZTtcblxuLy8gY29uc3QgbXlCYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4vLyBteUJhY2tncm91bmQuc3JjID0gQmFja2dyb3VuZDtcblxuLy8gYm9keS5hcHBlbmRDaGlsZChteUJhY2tncm91bmQpO1xuXG5jb25zdCBob21lTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5ob21lTG9nby5jbGFzc0xpc3QuYWRkKCdob21lLWxvZ28nKTtcbmhvbWVMb2dvLnRleHRDb250ZW50ID0gJ0RpbmUgRmluZSc7XG5ib2R5LmFwcGVuZENoaWxkKGhvbWVMb2dvKTtcbm5hdkJhcigpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5cblxuZnVuY3Rpb24gc2V0UGFnZShwYWdlKSB7XG4gICAgbGFzdFBhZ2UgPSBjdXJyUGFnZTtcbiAgICBjdXJyUGFnZSA9IHBhZ2U7XG5cbiAgICBzd2l0Y2ggKGN1cnJQYWdlKSB7XG4gICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgICAgaG9tZShjb250ZW50LCBzZXRQYWdlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNZW51JzpcbiAgICAgICAgICAgIG1lbnUoY29udGVudCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSG91cnMnOlxuICAgICAgICAgICAgaG91cnMoY29udGVudCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUmVzZXJ2YXRpb25zJzpcbiAgICAgICAgICAgIHJlc2VydmF0aW9ucyhjb250ZW50KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaG9tZShjb250ZW50KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5hdkJhcigpIHtcbiAgICBjb25zdCBtYWluTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgbWFpbk5hdi5jbGFzc0xpc3QuYWRkKCdtYWluLW5hdi1jb250YWluZXInKTtcblxuICAgIGNvbnN0IG1haW5OYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG1haW5OYXZCYXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1uYXYnKTtcblxuICAgIHBhZ2VzLm1hcCgocGFnZSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IHBhZ2U7XG5cbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2UuY3VycmVudFRhcmdldC50ZXh0Q29udGVudH1gKTtcbiAgICAgICAgICAgIHNldFBhZ2UoYCR7ZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50fWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VyclBhZ2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtYWluTmF2QmFyLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgbWFpbk5hdi5hcHBlbmQobWFpbk5hdkJhcik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluTmF2KTtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9