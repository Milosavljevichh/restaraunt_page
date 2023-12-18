/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/empty-page.js":
/*!***************************!*\
  !*** ./src/empty-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteContent)
/* harmony export */ });
function deleteContent() {
    let main = document.getElementById('hero'); 
    let foot = document.getElementById('footer');
    main.remove();
    foot.remove();
}

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeLoad)
/* harmony export */ });
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition */ "./src/transition.js");



function homeLoad() {
    let container = document.getElementById('content');

    let homeSec = document.createElement('section');
    let title = document.createElement('div');
    homeSec.setAttribute('id','hero');
    homeSec.setAttribute('class','hero-home');
    let h1 = document.createElement('h1');
    let hr = document.createElement('hr');
    let p = document.createElement('p');
    let btn = document.createElement('a');
    btn.class = 'CTA';
    btn.addEventListener('click',() => {
        let menu = 'Load menu';
        (0,_transition__WEBPACK_IMPORTED_MODULE_0__["default"])(menu);
    });

    btn.innerHTML = 'menu';
    h1.innerHTML = `It's a pizza,IzaPizza`;
    p.innerHTML = `You're taking your time to read this? Then
    take your time to order our pizza!`;

    title.append(h1,hr,p,btn);
    homeSec.appendChild(title);
    container.appendChild(homeSec);


};

/***/ }),

/***/ "./src/load-footer.js":
/*!****************************!*\
  !*** ./src/load-footer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadFooter)
/* harmony export */ });
function loadFooter() {
    let container = document.getElementById('content');
    //generating footer
    let footer = document.createElement('footer');
    footer.id = 'footer';
    let copyright = document.createElement('p');
    copyright.innerHTML = 'copyright &copy; Milosavljevich';
    //appending footer
    footer.appendChild(copyright);
    container.appendChild(footer);
};

/***/ }),

/***/ "./src/load-header.js":
/*!****************************!*\
  !*** ./src/load-header.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHeader)
/* harmony export */ });
/* harmony import */ var _empty_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty-page */ "./src/empty-page.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page */ "./src/home-page.js");
/* harmony import */ var _load_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-footer */ "./src/load-footer.js");
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transition */ "./src/transition.js");







function loadHeader() {
    let container = document.getElementById('content');
    // generating header
    //generating elements
   let header = document.createElement('header');
   let left = document.createElement('div');
   let right = document.createElement('div');
   let logo = document.createElement('a');
   let menu = document.createElement('nav');
   let tabs = document.createElement('ul');
       //adding attributes 
   left.setAttribute('id', 'left');
   right.setAttribute('id','right');
   logo.setAttribute('id', 'logo');
   logo.addEventListener('click', () => {
        let load = 'Load home';
        (0,_transition__WEBPACK_IMPORTED_MODULE_4__["default"])(load);
   })
   logo.innerHTML = 'IzaPizza';
   // menu.innerHTML('menu');
        //adding children
        for (let i=0; i<=2; i++ ) {
            let li = document.createElement('li');
                let a = document.createElement('a');
            if (i===0) {
                a.innerHTML = 'home';
                a.addEventListener('click', ()=>{
                    let load = 'Load home';
                    (0,_transition__WEBPACK_IMPORTED_MODULE_4__["default"])(load);
                })
            } else if (i===1) {
                a.innerHTML = 'prices';
                a.addEventListener('click', ()=>{
                    let load = 'Load menu';
                    (0,_transition__WEBPACK_IMPORTED_MODULE_4__["default"])(load);
                })
            } else {
                a.innerHTML = 'about';
            };
            li.appendChild(a);
            tabs.appendChild(li);
        };
        menu.appendChild(tabs);
        left.appendChild(logo);
        right.appendChild(menu);
        header.append(left, right);
        container.appendChild(header);
};

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateMenu)
/* harmony export */ });
/* harmony import */ var _load_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-footer */ "./src/load-footer.js");
/* harmony import */ var _load_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-header */ "./src/load-header.js");




function generateMenu () {
    let container = document.getElementById('content');
    //generating main content
        //hero section
        //creating tags
    let main = document.createElement('main');
    let heroSec = document.createElement('section');
    let heroLeft = document.createElement('div');
    let heroRight = document.createElement('div');
    function createArticle(i, side) {
        let heroArticle = document.createElement('article');
        let img = document.createElement('img');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let a = document.createElement('a');
        if (i === 0) {
            if (side === 'left') {
                img.src = "img/box-pizza.jpg";
                h2.innerHTML = 'Pizza box';
                p.innerHTML = `It's a box. No pizza. Yes,you're ordering
                an empty box. A cardboard one, not a pizza one. Does a 
                box made out of pizza even exist? We don't know because
                we aren't making them. Find someone who does.`
                heroArticle.id = 'box';
            } else {
                img.src = "img/eggs-pizza.jpg";
                h2.innerHTML = 'Eggs Pizza';
                p.innerHTML = `Basic pizza + eggs. Mmmm tasty,right?
                We know it is. It really is. Trust us. Order it. Order
                it now... NOWWW!!!!`
                heroArticle.id = 'egg';
            }
        } else if (i===1) {
            if (side === 'right') {
                img.src = "img/basic-pizza.jpg";
                h2.innerHTML = 'Basic Pizza';
                p.innerHTML = `It's OUR pizza. Which means that
                it is the best, but to us it's basic. You have
                a lot more options. This one is tasty, but you
                can order something better from us *wink wink* ;)`
                heroArticle.id = 'basic';
            } else {
                img.src = "img/slice-pizza.jpg";
                h2.innerHTML = 'Pizza Slice';
                p.innerHTML = `Are you hungry but not hungry hungry?
                Well what a coincidence, we have a solution for you! Order
                a pizza slice for the price of a whole pizza!`
                heroArticle.id = 'slice';
            }
        } 
        heroArticle.append(img, h2, p, a);
        return heroArticle;
    }; 
    //adding attributes
    heroSec.setAttribute('id', 'hero');
    heroSec.setAttribute('class', 'hero');
    heroLeft.setAttribute('id', 'leftHero');
    heroRight.setAttribute('id', 'rightHero');
    //appending elements
    for (let i=0; i <= 1; i++) {
        let heroArticle = createArticle(i, 'left');
        
        heroLeft.append(heroArticle);
        heroArticle = createArticle(i, 'right');
        heroRight.append(heroArticle);
    };
    heroSec.appendChild(heroLeft);
    heroSec.appendChild(heroRight);
    main.appendChild(heroSec);
    container.appendChild(heroSec);
    
    
};


/***/ }),

/***/ "./src/transition.js":
/*!***************************!*\
  !*** ./src/transition.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fadeInOut)
/* harmony export */ });
/* harmony import */ var _empty_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty-page */ "./src/empty-page.js");
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _load_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-footer */ "./src/load-footer.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page */ "./src/home-page.js");





function fadeInOut(page) {
    let container = document.getElementById('content');
    container.classList.add('molimte');
    container.addEventListener('animationend', ()=>{
        (0,_empty_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
        if (page==='Load menu') {
            (0,_page_load__WEBPACK_IMPORTED_MODULE_1__["default"])();
        } else if (page==='Load home') {
            (0,_home_page__WEBPACK_IMPORTED_MODULE_3__["default"])();
        }
        (0,_load_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();
        container.classList.add('jebise');
        container.classList.remove('molimte');
    }, {once: true})
    container.addEventListener('animationend', ()=> {
        // container.classList.remove('jebise');
    }, {once: true})
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
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page */ "./src/home-page.js");
/* harmony import */ var _load_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-header */ "./src/load-header.js");
/* harmony import */ var _load_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-footer */ "./src/load-footer.js");





(0,_load_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_home_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_load_footer__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDcUM7QUFDckM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBUztBQUNqQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWeUM7QUFDekM7QUFDbUM7QUFDSTtBQUNBO0FBQ0Y7QUFDckM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQVM7QUFDakIsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1REFBUztBQUM3QixpQkFBaUI7QUFDakIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1REFBUztBQUM3QixpQkFBaUI7QUFDakIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDdUM7QUFDQTtBQUN2QztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUV5QztBQUNGO0FBQ0E7QUFDSjtBQUNuQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBYTtBQUNyQjtBQUNBLFlBQVksc0RBQVk7QUFDeEIsVUFBVTtBQUNWLFlBQVksc0RBQVE7QUFDcEI7QUFDQSxRQUFRLHdEQUFVO0FBQ2xCO0FBQ0E7QUFDQSxLQUFLLEdBQUcsV0FBVztBQUNuQjtBQUNBO0FBQ0EsS0FBSyxHQUFHLFdBQVc7QUFDbkI7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDSTtBQUNBO0FBQ3ZDO0FBQ0E7QUFDQSx3REFBVTtBQUNWLHNEQUFRO0FBQ1Isd0RBQVUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhcmF1bnRfcGFnZS8uL3NyYy9lbXB0eS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnRfcGFnZS8uL3NyYy9ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudF9wYWdlLy4vc3JjL2xvYWQtZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnRfcGFnZS8uL3NyYy9sb2FkLWhlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50X3BhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnRfcGFnZS8uL3NyYy90cmFuc2l0aW9uLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXJhdW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhcmF1bnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhcmF1bnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhcmF1bnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVDb250ZW50KCkge1xyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVybycpOyBcclxuICAgIGxldCBmb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xyXG4gICAgbWFpbi5yZW1vdmUoKTtcclxuICAgIGZvb3QucmVtb3ZlKCk7XHJcbn0iLCJcclxuaW1wb3J0IGZhZGVJbk91dCBmcm9tIFwiLi90cmFuc2l0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lTG9hZCgpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuICAgIGxldCBob21lU2VjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob21lU2VjLnNldEF0dHJpYnV0ZSgnaWQnLCdoZXJvJyk7XHJcbiAgICBob21lU2VjLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdoZXJvLWhvbWUnKTtcclxuICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBsZXQgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYnRuLmNsYXNzID0gJ0NUQSc7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcclxuICAgICAgICBsZXQgbWVudSA9ICdMb2FkIG1lbnUnO1xyXG4gICAgICAgIGZhZGVJbk91dChtZW51KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJ0bi5pbm5lckhUTUwgPSAnbWVudSc7XHJcbiAgICBoMS5pbm5lckhUTUwgPSBgSXQncyBhIHBpenphLEl6YVBpenphYDtcclxuICAgIHAuaW5uZXJIVE1MID0gYFlvdSdyZSB0YWtpbmcgeW91ciB0aW1lIHRvIHJlYWQgdGhpcz8gVGhlblxyXG4gICAgdGFrZSB5b3VyIHRpbWUgdG8gb3JkZXIgb3VyIHBpenphIWA7XHJcblxyXG4gICAgdGl0bGUuYXBwZW5kKGgxLGhyLHAsYnRuKTtcclxuICAgIGhvbWVTZWMuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVTZWMpO1xyXG5cclxuXHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEZvb3RlcigpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgLy9nZW5lcmF0aW5nIGZvb3RlclxyXG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgZm9vdGVyLmlkID0gJ2Zvb3Rlcic7XHJcbiAgICBsZXQgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29weXJpZ2h0LmlubmVySFRNTCA9ICdjb3B5cmlnaHQgJmNvcHk7IE1pbG9zYXZsamV2aWNoJztcclxuICAgIC8vYXBwZW5kaW5nIGZvb3RlclxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufTsiLCJpbXBvcnQgZGVsZXRlQ29udGVudCBmcm9tIFwiLi9lbXB0eS1wYWdlXCI7XHJcblxyXG5pbXBvcnQgaG9tZUxvYWQgZnJvbSBcIi4vaG9tZS1wYWdlXCI7XHJcbmltcG9ydCBsb2FkRm9vdGVyIGZyb20gXCIuL2xvYWQtZm9vdGVyXCI7XHJcbmltcG9ydCBnZW5lcmF0ZU1lbnUgZnJvbSBcIi4vcGFnZS1sb2FkXCI7XHJcbmltcG9ydCBmYWRlSW5PdXQgZnJvbSBcIi4vdHJhbnNpdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhlYWRlcigpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgLy8gZ2VuZXJhdGluZyBoZWFkZXJcclxuICAgIC8vZ2VuZXJhdGluZyBlbGVtZW50c1xyXG4gICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgIGxldCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGxldCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgbGV0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgLy9hZGRpbmcgYXR0cmlidXRlcyBcclxuICAgbGVmdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xlZnQnKTtcclxuICAgcmlnaHQuc2V0QXR0cmlidXRlKCdpZCcsJ3JpZ2h0Jyk7XHJcbiAgIGxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XHJcbiAgIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGxvYWQgPSAnTG9hZCBob21lJztcclxuICAgICAgICBmYWRlSW5PdXQobG9hZCk7XHJcbiAgIH0pXHJcbiAgIGxvZ28uaW5uZXJIVE1MID0gJ0l6YVBpenphJztcclxuICAgLy8gbWVudS5pbm5lckhUTUwoJ21lbnUnKTtcclxuICAgICAgICAvL2FkZGluZyBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTw9MjsgaSsrICkge1xyXG4gICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIGlmIChpPT09MCkge1xyXG4gICAgICAgICAgICAgICAgYS5pbm5lckhUTUwgPSAnaG9tZSc7XHJcbiAgICAgICAgICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbG9hZCA9ICdMb2FkIGhvbWUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZhZGVJbk91dChsb2FkKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaT09PTEpIHtcclxuICAgICAgICAgICAgICAgIGEuaW5uZXJIVE1MID0gJ3ByaWNlcyc7XHJcbiAgICAgICAgICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbG9hZCA9ICdMb2FkIG1lbnUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZhZGVJbk91dChsb2FkKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhLmlubmVySFRNTCA9ICdhYm91dCc7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xyXG4gICAgICAgICAgICB0YWJzLmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQodGFicyk7XHJcbiAgICAgICAgbGVmdC5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgICAgICByaWdodC5hcHBlbmRDaGlsZChtZW51KTtcclxuICAgICAgICBoZWFkZXIuYXBwZW5kKGxlZnQsIHJpZ2h0KTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxufTsiLCJcclxuaW1wb3J0IGxvYWRGb290ZXIgZnJvbSBcIi4vbG9hZC1mb290ZXJcIjtcclxuaW1wb3J0IGxvYWRIZWFkZXIgZnJvbSBcIi4vbG9hZC1oZWFkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlTWVudSAoKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIC8vZ2VuZXJhdGluZyBtYWluIGNvbnRlbnRcclxuICAgICAgICAvL2hlcm8gc2VjdGlvblxyXG4gICAgICAgIC8vY3JlYXRpbmcgdGFnc1xyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBsZXQgaGVyb1NlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIGxldCBoZXJvTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGhlcm9SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlQXJ0aWNsZShpLCBzaWRlKSB7XHJcbiAgICAgICAgbGV0IGhlcm9BcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChzaWRlID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBcImltZy9ib3gtcGl6emEuanBnXCI7XHJcbiAgICAgICAgICAgICAgICBoMi5pbm5lckhUTUwgPSAnUGl6emEgYm94JztcclxuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gYEl0J3MgYSBib3guIE5vIHBpenphLiBZZXMseW91J3JlIG9yZGVyaW5nXHJcbiAgICAgICAgICAgICAgICBhbiBlbXB0eSBib3guIEEgY2FyZGJvYXJkIG9uZSwgbm90IGEgcGl6emEgb25lLiBEb2VzIGEgXHJcbiAgICAgICAgICAgICAgICBib3ggbWFkZSBvdXQgb2YgcGl6emEgZXZlbiBleGlzdD8gV2UgZG9uJ3Qga25vdyBiZWNhdXNlXHJcbiAgICAgICAgICAgICAgICB3ZSBhcmVuJ3QgbWFraW5nIHRoZW0uIEZpbmQgc29tZW9uZSB3aG8gZG9lcy5gXHJcbiAgICAgICAgICAgICAgICBoZXJvQXJ0aWNsZS5pZCA9ICdib3gnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IFwiaW1nL2VnZ3MtcGl6emEuanBnXCI7XHJcbiAgICAgICAgICAgICAgICBoMi5pbm5lckhUTUwgPSAnRWdncyBQaXp6YSc7XHJcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGBCYXNpYyBwaXp6YSArIGVnZ3MuIE1tbW0gdGFzdHkscmlnaHQ/XHJcbiAgICAgICAgICAgICAgICBXZSBrbm93IGl0IGlzLiBJdCByZWFsbHkgaXMuIFRydXN0IHVzLiBPcmRlciBpdC4gT3JkZXJcclxuICAgICAgICAgICAgICAgIGl0IG5vdy4uLiBOT1dXVyEhISFgXHJcbiAgICAgICAgICAgICAgICBoZXJvQXJ0aWNsZS5pZCA9ICdlZ2cnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChpPT09MSkge1xyXG4gICAgICAgICAgICBpZiAoc2lkZSA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IFwiaW1nL2Jhc2ljLXBpenphLmpwZ1wiO1xyXG4gICAgICAgICAgICAgICAgaDIuaW5uZXJIVE1MID0gJ0Jhc2ljIFBpenphJztcclxuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gYEl0J3MgT1VSIHBpenphLiBXaGljaCBtZWFucyB0aGF0XHJcbiAgICAgICAgICAgICAgICBpdCBpcyB0aGUgYmVzdCwgYnV0IHRvIHVzIGl0J3MgYmFzaWMuIFlvdSBoYXZlXHJcbiAgICAgICAgICAgICAgICBhIGxvdCBtb3JlIG9wdGlvbnMuIFRoaXMgb25lIGlzIHRhc3R5LCBidXQgeW91XHJcbiAgICAgICAgICAgICAgICBjYW4gb3JkZXIgc29tZXRoaW5nIGJldHRlciBmcm9tIHVzICp3aW5rIHdpbmsqIDspYFxyXG4gICAgICAgICAgICAgICAgaGVyb0FydGljbGUuaWQgPSAnYmFzaWMnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IFwiaW1nL3NsaWNlLXBpenphLmpwZ1wiO1xyXG4gICAgICAgICAgICAgICAgaDIuaW5uZXJIVE1MID0gJ1BpenphIFNsaWNlJztcclxuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gYEFyZSB5b3UgaHVuZ3J5IGJ1dCBub3QgaHVuZ3J5IGh1bmdyeT9cclxuICAgICAgICAgICAgICAgIFdlbGwgd2hhdCBhIGNvaW5jaWRlbmNlLCB3ZSBoYXZlIGEgc29sdXRpb24gZm9yIHlvdSEgT3JkZXJcclxuICAgICAgICAgICAgICAgIGEgcGl6emEgc2xpY2UgZm9yIHRoZSBwcmljZSBvZiBhIHdob2xlIHBpenphIWBcclxuICAgICAgICAgICAgICAgIGhlcm9BcnRpY2xlLmlkID0gJ3NsaWNlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgaGVyb0FydGljbGUuYXBwZW5kKGltZywgaDIsIHAsIGEpO1xyXG4gICAgICAgIHJldHVybiBoZXJvQXJ0aWNsZTtcclxuICAgIH07IFxyXG4gICAgLy9hZGRpbmcgYXR0cmlidXRlc1xyXG4gICAgaGVyb1NlYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlcm8nKTtcclxuICAgIGhlcm9TZWMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZXJvJyk7XHJcbiAgICBoZXJvTGVmdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xlZnRIZXJvJyk7XHJcbiAgICBoZXJvUmlnaHQuc2V0QXR0cmlidXRlKCdpZCcsICdyaWdodEhlcm8nKTtcclxuICAgIC8vYXBwZW5kaW5nIGVsZW1lbnRzXHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPD0gMTsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGhlcm9BcnRpY2xlID0gY3JlYXRlQXJ0aWNsZShpLCAnbGVmdCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGhlcm9MZWZ0LmFwcGVuZChoZXJvQXJ0aWNsZSk7XHJcbiAgICAgICAgaGVyb0FydGljbGUgPSBjcmVhdGVBcnRpY2xlKGksICdyaWdodCcpO1xyXG4gICAgICAgIGhlcm9SaWdodC5hcHBlbmQoaGVyb0FydGljbGUpO1xyXG4gICAgfTtcclxuICAgIGhlcm9TZWMuYXBwZW5kQ2hpbGQoaGVyb0xlZnQpO1xyXG4gICAgaGVyb1NlYy5hcHBlbmRDaGlsZChoZXJvUmlnaHQpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZXJvU2VjKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvU2VjKTtcclxuICAgIFxyXG4gICAgXHJcbn07XHJcbiIsImltcG9ydCBkZWxldGVDb250ZW50IGZyb20gXCIuL2VtcHR5LXBhZ2VcIjtcclxuaW1wb3J0IGdlbmVyYXRlTWVudSBmcm9tIFwiLi9wYWdlLWxvYWRcIjtcclxuaW1wb3J0IGxvYWRGb290ZXIgZnJvbSBcIi4vbG9hZC1mb290ZXJcIjtcclxuaW1wb3J0IGhvbWVMb2FkIGZyb20gXCIuL2hvbWUtcGFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmFkZUluT3V0KHBhZ2UpIHtcclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vbGltdGUnKTtcclxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKT0+e1xyXG4gICAgICAgIGRlbGV0ZUNvbnRlbnQoKTtcclxuICAgICAgICBpZiAocGFnZT09PSdMb2FkIG1lbnUnKSB7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlTWVudSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFnZT09PSdMb2FkIGhvbWUnKSB7XHJcbiAgICAgICAgICAgIGhvbWVMb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvYWRGb290ZXIoKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnamViaXNlJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21vbGltdGUnKTtcclxuICAgIH0sIHtvbmNlOiB0cnVlfSlcclxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKT0+IHtcclxuICAgICAgICAvLyBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnamViaXNlJyk7XHJcbiAgICB9LCB7b25jZTogdHJ1ZX0pXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBob21lTG9hZCBmcm9tIFwiLi9ob21lLXBhZ2VcIjtcclxuaW1wb3J0IGxvYWRIZWFkZXIgZnJvbSBcIi4vbG9hZC1oZWFkZXJcIjtcclxuaW1wb3J0IGxvYWRGb290ZXIgZnJvbSBcIi4vbG9hZC1mb290ZXJcIjtcclxuXHJcblxyXG5sb2FkSGVhZGVyKCk7XHJcbmhvbWVMb2FkKCk7XHJcbmxvYWRGb290ZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=