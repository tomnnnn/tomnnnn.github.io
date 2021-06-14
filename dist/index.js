/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Raleway:wght@400;500;700&family=Source+Sans+Pro:wght@400;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button {\n  padding: 0;\n  margin: 0;\n}\n\n.btn {\n  padding: 1em 2.5em;\n  border: 1px solid black;\n  border-radius: 0.8em;\n  font-weight: 500;\n  font-size: 0.9em;\n  font-family: \"Raleway\";\n  font-weight: bold;\n  background-color: white;\n  cursor: pointer;\n  transition: 0.2s ease;\n  white-space: nowrap;\n}\n.btn .arrow {\n  width: 0;\n  vertical-align: middle;\n  transition: 0.2s ease;\n}\n.btn .arrow path {\n  stroke: black;\n}\n.btn:hover .arrow {\n  width: 1.2em;\n}\n.btn:not(:last-child) {\n  margin-right: 1em;\n}\n.btn.primary {\n  color: white;\n  background-color: black;\n}\n.btn.primary .arrow > path {\n  stroke: white;\n}\n\n.arrow-link {\n  display: inline-block;\n  vertical-align: middle;\n}\n.arrow-link span {\n  font-weight: bold;\n  position: relative;\n}\n.arrow-link span::before {\n  content: \"\";\n  position: absolute;\n  bottom: -30%;\n  width: 80%;\n  border-bottom: 2px solid black;\n  transition: 0.2s ease;\n}\n.arrow-link .arrow {\n  transition: 0.2s ease;\n  margin-left: 0.4em;\n  width: 1.5em;\n  vertical-align: middle;\n}\n.arrow-link.right {\n  float: right;\n}\n.arrow-link:hover span::before {\n  width: 100%;\n}\n.arrow-link:hover .arrow {\n  transform: translateX(0.5em);\n}\n\n.input {\n  width: 25em;\n  margin-bottom: 1em;\n  padding: 1em 1.5em;\n}\n\n.showcase {\n  display: flex;\n  width: 100%;\n  height: 16em;\n}\n.showcase .spotlight {\n  flex: 2;\n  background-color: #4541F9;\n  position: relative;\n  display: flex;\n  align-items: center;\n  border-radius: 1em;\n  margin-right: 1.5em;\n  transition: 0.2s ease;\n}\n.showcase .spotlight:hover {\n  transform: scale(1.05);\n}\n.showcase .spotlight h3, .showcase .spotlight p, .showcase .spotlight span {\n  color: white;\n}\n.showcase .spotlight .thumbnail {\n  width: 16em;\n  position: relative;\n}\n.showcase .spotlight .thumbnail::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  padding-top: 100%;\n}\n.showcase .spotlight .thumbnail .container {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 1em;\n}\n.showcase .spotlight .thumbnail .container img {\n  border-radius: 1em;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.showcase .spotlight .desc {\n  flex: 1.5;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 1.5em;\n  padding-left: 0.5em;\n}\n.showcase .spotlight .desc h3 {\n  font-size: 1.2em;\n  margin-bottom: 0.7em;\n}\n.showcase .spotlight .desc p {\n  font-weight: 500;\n}\n.showcase .spotlight .desc .tag {\n  font-weight: bold;\n  font-size: 0.8em;\n  margin-bottom: 3em;\n}\n.showcase .showmore {\n  width: calc(16em - 4px);\n  position: relative;\n}\n.showcase .showmore:after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  padding-bottom: 100%;\n  border: 2px solid #2F3036;\n  border-radius: 1em;\n}\n.showcase .showmore a {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@media screen and (max-width: 648px) {\n  .showcase {\n    flex-direction: column;\n  }\n  .showcase .spotlight {\n    margin: 0;\n  }\n  .showcase .spotlight .desc {\n    padding-left: 1.5em;\n  }\n  .showcase .spotlight .desc h3 {\n    flex: 3;\n    display: flex;\n    align-items: center;\n  }\n  .showcase .spotlight .desc .tag {\n    margin: 0;\n    font-weight: 500;\n  }\n  .showcase .spotlight .desc .p {\n    margin-top: auto;\n  }\n  .showcase .spotlight .thumbnail {\n    width: 30%;\n    height: 100%;\n    border-radius: 0;\n  }\n  .showcase .spotlight .thumbnail .container {\n    padding: 0;\n  }\n  .showcase .spotlight .thumbnail::after {\n    display: none;\n  }\n  .showcase .showmore {\n    margin-top: 3em;\n    width: 100%;\n  }\n  .showcase .showmore a {\n    justify-content: flex-end;\n  }\n  .showcase .showmore:after {\n    display: none;\n  }\n}\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nh1, h2, h3, p, span, a {\n  font-family: \"Poppins\", sans-serif;\n  color: black;\n  font-size: 1em;\n  text-decoration: none;\n}\n\nfooter {\n  border-top: 2px solid black;\n  padding: 2em;\n  display: inline-block;\n  width: 100%;\n}\nfooter span, footer a, footer p {\n  font-size: 0.7rem;\n  font-weight: bold;\n}\nfooter .signature {\n  transition: 0.2s ease;\n  float: right;\n}\nfooter .signature:hover {\n  color: #cc537c;\n}\n\n.mobile {\n  display: none;\n}\n\nnav {\n  width: 100%;\n  position: fixed;\n  z-index: 10;\n  transition: 0.2s ease;\n  background: white;\n  border-bottom: 1.5px solid #00000000;\n}\nnav.scroll {\n  border-bottom: 1.5px solid #000000;\n}\nnav .logo svg {\n  width: 4em;\n}\nnav .navbar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5em 2em;\n  max-width: calc(1050px + 4em);\n  margin-left: auto;\n  margin-right: auto;\n}\nnav .navbar .nav-links {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  list-style: none;\n}\nnav .navbar .nav-links li {\n  font-weight: bold;\n  position: relative;\n}\nnav .navbar .nav-links li:not(:last-child) {\n  margin-right: 1.5em;\n}\nnav .navbar .nav-links li:not(:last-child):after {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  transition: 0.2s ease-out;\n  bottom: -5px;\n  left: 0;\n  border-bottom: 2px solid black;\n}\nnav .navbar .nav-links li:hover::after {\n  width: 100%;\n}\n\nmain {\n  max-width: 1050px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 2em 1.5em 0 1.5em;\n}\n\nsection {\n  padding-top: 8em;\n  width: 100%;\n}\n\nh1 {\n  text-align: center;\n  font-size: 4em;\n}\nh1 span {\n  font-size: 1.3rem;\n}\n\nh2 {\n  font-size: 1.3em;\n  margin-bottom: 1.2em;\n}\n\n.call-to-action {\n  margin: 3em 0 8em;\n  text-align: center;\n}\n\n.onas {\n  width: 100%;\n  background-color: black;\n  padding: 5em 3em;\n  border-radius: 0.8em;\n  position: relative;\n}\n.onas p {\n  font-weight: 500;\n  color: white;\n  width: 50%;\n  margin-left: auto;\n  font-size: 1.1em;\n}\n.onas img {\n  width: 20em;\n  position: absolute;\n  bottom: 0;\n}\n\n.projects-showcase {\n  width: 100%;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-row-gap: 2em;\n  grid-column-gap: 2em;\n  margin-bottom: 2.3em;\n}\n.projects-showcase li {\n  background: #FF5151;\n  font-weight: bold;\n  font-size: 1.5em;\n  border-radius: 0.8em;\n  padding: 1em;\n  height: 10em;\n  width: 100%;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease;\n}\n.projects-showcase li span {\n  color: white;\n}\n.projects-showcase li img {\n  position: absolute;\n  bottom: 1em;\n  right: 1em;\n  width: 5em;\n}\n.projects-showcase li:hover {\n  transform: scale(1.05);\n}\n.projects-showcase li:nth-child(1) {\n  grid-column: 1/3;\n}\n.projects-showcase li:nth-child(4) {\n  grid-column: 2/4;\n}\n\n.nost {\n  display: flex;\n}\n.nost .desc {\n  display: flex;\n  flex-direction: column;\n}\n.nost .desc h2 {\n  font-size: 3em;\n  margin-bottom: 0;\n}\n.nost .desc span {\n  font-weight: bold;\n}\n.nost .desc p {\n  margin: 3em 0;\n  max-width: 30em;\n  padding-right: 2em;\n}\n.nost img {\n  border-radius: 1em;\n  margin-left: auto;\n  width: 25em;\n}\n\n.pridejse {\n  padding: 10em 0;\n}\n.pridejse .flexbox {\n  display: flex;\n}\n.pridejse .flexbox .text-container {\n  flex: 2;\n  padding-right: 2em;\n}\n.pridejse .flexbox .text-container p {\n  max-width: 30em;\n  margin-bottom: 3em;\n}\n.pridejse .flexbox .form-container {\n  flex: 1.5;\n  display: flex;\n  justify-content: center;\n}\n.pridejse .flexbox .form-container form h3 {\n  margin-bottom: 1.5em;\n}\n.pridejse .flexbox .form-container form input, .pridejse .flexbox .form-container form textarea {\n  width: 100%;\n}\n.pridejse .flexbox .form-container form button {\n  padding: 0.55em 2em;\n}\n\n@media screen and (max-width: 850px) {\n  body {\n    font-size: 0.9em;\n  }\n}\n@media screen and (max-width: 750px) {\n  body {\n    font-size: 0.8em;\n  }\n}\n@media screen and (max-width: 680px) {\n  body {\n    font-size: 0.7em;\n  }\n}\n@media screen and (max-width: 648px) {\n  body {\n    font-size: 0.8em;\n  }\n\n  .mobile {\n    display: block;\n  }\n\n  .pc {\n    display: none;\n  }\n\n  .burger {\n    width: 2em;\n    height: auto;\n    margin-left: auto;\n    z-index: 11;\n  }\n\n  .nav-links {\n    position: fixed;\n    top: 0;\n    right: 0;\n    height: 100%;\n    width: 80%;\n    background: white;\n    z-index: 10;\n    transition: 0.2s ease;\n    transform: translateX(100%);\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 2em;\n    margin: 0;\n  }\n  .nav-links li a {\n    font-size: 2em;\n  }\n\n  body.menu-open {\n    position: relative;\n  }\n  body.menu-open::after {\n    position: absolute;\n    content: \"\";\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: #000000a3;\n  }\n  body.menu-open .nav-links {\n    transform: translateX(0);\n  }\n\n  h1 {\n    text-align: left;\n    font-size: 2.5em;\n  }\n  h1 span {\n    font-size: 0.5em;\n  }\n\n  .call-to-action {\n    text-align: left;\n  }\n\n  .onas {\n    background: none;\n    color: black;\n    font-family: \"Raleway\";\n    font-weight: bold;\n    font-size: 1.1em;\n    padding: 1em 5em 4em 0;\n  }\n\n  .call-to-action {\n    margin: 0;\n  }\n\n  .projects-showcase {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .project:nth-child(1) {\n    grid-column: 1;\n  }\n\n  .project:nth-child(4) {\n    grid-column: 1;\n  }\n\n  .nost .desc > p {\n    max-width: none;\n  }\n\n  .pridejse .flexbox {\n    flex-direction: column;\n  }\n  .pridejse .flexbox .text-container {\n    margin-bottom: 5em;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/components/essentials.scss","webpack://./src/styles/index.scss","webpack://./src/styles/components/showcase.scss"],"names":[],"mappings":"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","sourcesContent":["button {\n    padding: 0;\n    margin: 0;\n}\n\n.btn {\n    padding: 1em 2.5em;\n    border: 1px solid black;\n    border-radius: .8em;\n    font-weight: 500;\n    font-size: .9em;\n    font-family: 'Raleway';\n    font-weight: bold;\n    background-color: white;\n    cursor: pointer;\n    transition: .2s ease;\n    white-space: nowrap;\n\n    .arrow {\n        width: 0;\n        vertical-align: middle;\n        transition: .2s ease;\n\n        path {\n            stroke: black;\n        }\n    }\n\n    &:hover {\n        .arrow {\n            width: 1.2em;\n        }\n    }\n    \n    &:not(:last-child) {\n        margin-right: 1em;\n    }\n    &.primary {\n        color: white;\n        background-color: black;\n\n        .arrow > path {\n            stroke: white;\n        }\n    }\n}\n\n.arrow-link {\n    display: inline-block;\n    vertical-align: middle;\n\n    span {\n        font-weight: bold;\n        position: relative;\n    }\n\n    span::before {\n        content: \"\";\n        position: absolute;\n        bottom: -30%;\n        width: 80%;\n        border-bottom: 2px solid black;\n        transition: .2s ease;\n    }\n\n    .arrow {\n        transition: .2s ease;\n        margin-left: .4em;\n        width: 1.5em;\n        vertical-align: middle;\n    }\n\n    &.right {\n        float: right;\n    }\n\n    &:hover {\n        span::before {\n            width: 100%;\n        }\n\n        .arrow {\n            transform: translateX(.5em);\n        }\n    }\n}\n\n.input {\n    width: 25em;\n    margin-bottom: 1em;\n    padding: 1em 1.5em;\n}","@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Raleway:wght@400;500;700&family=Source+Sans+Pro:wght@400;600;700&display=swap');\n@import './components/essentials.scss';\n@import './components/showcase.scss';\n\n* {\n    box-sizing: border-box;\n    padding: 0; margin: 0;\n}\n\nhtml {\n    scroll-behavior: smooth;\n}\n\nh1, h2, h3, p, span, a {\n    font-family: \"Poppins\", sans-serif;\n    color: black;\n    font-size: 1em;\n    text-decoration: none;\n}\n\nfooter {\n    border-top: 2px solid black;\n    padding: 2em;\n    display: inline-block;\n    width: 100%;\n    \n    span,a,p {\n        font-size: .7rem;\n        font-weight: bold;\n    }\n    \n    .signature {\n        transition: .2s ease;\n\n        &:hover {\n                color: #cc537c;\n        }\n        float: right;\n    }\n}\n.mobile {\n    display: none;\n}\n\nnav {\n    width: 100%;\n    position: fixed;\n    z-index: 10;\n    transition: .2s ease;\n    background: white;\n    border-bottom: 1.5px solid #00000000;\n\n    &.scroll {\n        border-bottom: 1.5px solid #000000;\n    }\n\n    .logo {\n        svg {\n            width: 4em;\n        }\n    }\n\n    .navbar {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: .5em 2em;\n        max-width: calc(1050px + 4em);\n        margin-left: auto;\n        margin-right: auto;\n\n        .nav-links {\n            margin-left: auto;\n            display: flex;\n            align-items: center;\n            list-style: none;\n\n            li {\n                font-weight: bold;\n                position: relative;\n\n                &:not(:last-child) {\n                    margin-right: 1.5em;\n                }\n            }\n\n            li:not(:last-child):after {\n                position: absolute;\n                content: \"\";\n                width: 0; height: 0;\n                transition: .2s ease-out;\n                bottom: -5px;\n                left: 0;\n                border-bottom: 2px solid black;\n            }\n\n            li:hover::after {\n                width: 100%;  \n            }\n        }\n    }\n}\n\nmain {\n    max-width: 1050px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 2em 1.5em 0 1.5em;\n}\n\nsection {\n    padding-top: 8em;\n    width: 100%;\n}\n\nh1 {\n    text-align: center;\n    font-size: 4em;\n\n    span {\n        font-size: 1.3rem;\n    }\n}\n\nh2 {\n    font-size: 1.3em;\n    margin-bottom: 1.2em;\n}\n\n.call-to-action {\n    margin: 3em 0 8em;\n    text-align: center;\n}\n\n.onas {\n    width: 100%;\n    background-color: black;\n    padding: 5em 3em;\n    border-radius: .8em;\n    position: relative;\n\n    p {\n        font-weight: 500;\n        color: white;\n        width: 50%;\n        margin-left: auto;\n        font-size: 1.1em;\n    }\n\n    img {\n        width: 20em;\n        position: absolute;\n        bottom: 0;\n    }\n}\n\n.projects-showcase {\n    width: 100%;\n    list-style: none;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-row-gap: 2em;\n    grid-column-gap: 2em;\n    margin-bottom: 2.3em;\n\n    li {\n        background: #FF5151;\n        font-weight: bold;\n        font-size: 1.5em;\n        border-radius: .8em;\n        padding: 1em;\n        height: 10em;\n        width: 100%;\n        position: relative;\n        cursor: pointer;\n        transition: .2s ease;\n\n        span {\n            color: white;\n        }\n\n        img {\n            position: absolute;\n            bottom: 1em;\n            right: 1em;\n            width: 5em;\n        }\n\n        &:hover {\n            transform: scale(1.05);\n        }\n\n        &:nth-child(1) {\n            grid-column: 1/3;\n        }\n\n        &:nth-child(4) {\n            grid-column: 2/4;\n        }\n    }\n}\n\n.nost {\n    display: flex;\n\n    .desc {\n        display: flex;\n        flex-direction: column;\n    \n        h2 {\n            font-size: 3em;\n            margin-bottom: 0;\n        }\n\n        span {\n            font-weight: bold;\n        }\n\n        p {\n            margin: 3em 0;\n            max-width: 30em;\n            padding-right: 2em;\n        }\n    }\n\n    img {\n        border-radius: 1em;\n        margin-left: auto;\n        width: 25em;\n    }\n}\n\n.pridejse {\n    padding: 10em 0;\n\n    .flexbox {\n        display: flex;\n\n        .text-container {\n            flex: 2;\n            padding-right: 2em;\n\n            p {\n                max-width: 30em;\n                margin-bottom: 3em;\n            }\n        }\n\n        .form-container {\n            flex: 1.5;\n            display: flex;\n            justify-content: center;\n\n            form {\n                h3 {\n                    margin-bottom: 1.5em;\n                }\n\n                input,textarea {\n                    width: 100%;\n                }\n\n                button {\n                    padding: .55em 2em;\n                }\n            }\n        }\n    }\n}\n\n@media screen and (max-width: 850px) {\n    body {\n        font-size: .9em;\n    }\n}\n\n@media screen and (max-width: 750px) {\n    body {\n        font-size: .8em;\n    }\n}\n\n@media screen and (max-width: 680px) {\n    body {\n        font-size: .7em;\n    }\n}\n\n@media screen and (max-width: 648px) {\n    body {\n        font-size: .8em;\n    }\n\n    .mobile {\n        display: block;\n    }\n\n    .pc {\n        display: none;\n    }\n\n    .burger {\n        width: 2em;\n        height: auto;\n        margin-left: auto;\n        z-index: 11;\n    }\n\n    .nav-links {\n        position: fixed;\n        top: 0;\n        right: 0;\n        height: 100%;\n        width: 80%;\n        background: white;\n        z-index: 10;\n        transition: .2s ease;\n        transform: translateX(100%);\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n        align-items: flex-start;\n        padding: 2em;\n        margin: 0;\n\n        li {\n            a {\n                font-size: 2em;\n            }\n        }\n    }\n\n    body.menu-open {\n        position: relative;\n\n        &::after {\n            position: absolute;\n            content: \"\";\n            top: 0;\n            left: 0;\n            width: 100%; height: 100%;\n            background: #000000a3;\n        }\n\n        .nav-links {\n            transform: translateX(0);\n        }\n    }\n\n    h1 {\n        text-align: left;\n        font-size: 2.5em;\n\n        span {\n            font-size: .5em;\n        }\n    }\n\n    .call-to-action {\n        text-align: left;\n    }\n\n    .onas {\n        background: none;\n        color: black;\n        font-family: \"Raleway\";\n        font-weight: bold;\n        font-size: 1.1em;\n        padding: 1em 5em 4em 0;\n    }\n\n    .call-to-action {\n        margin: 0;\n    }\n\n    .projects-showcase {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .project:nth-child(1) {\n        grid-column: 1;\n    }\n    \n    .project:nth-child(4) {\n        grid-column: 1;\n    }\n\n    .nost {\n        .desc > p {\n            max-width: none;\n        }\n    }\n\n    .pridejse {\n        .flexbox {\n            flex-direction: column;\n\n            .text-container {\n                margin-bottom: 5em;\n            }\n        }\n    }\n}\n",".showcase {\n    display: flex;\n    width: 100%;\n    height: 16em;\n\n    .spotlight {\n        flex: 2;\n        background-color: #4541F9;\n        position: relative;\n        display: flex;\n        align-items: center;\n        border-radius: 1em;\n        margin-right: 1.5em;\n        transition: .2s ease;\n\n        &:hover {\n            transform: scale(1.05);\n        }\n\n        h3, p, span {\n            color: white;\n        }\n\n        .thumbnail {\n            width: 16em;\n            position: relative;\n            \n            &::after {\n                content: \"\";\n                display: block;\n                width: 100%;\n                padding-top: 100%;\n            }\n            \n            .container {\n                overflow: hidden;\n                position: absolute;\n                top: 0; left: 0;\n                width: 100%;\n                height: 100%;\n                padding: 1em;\n                \n                img {\n                    border-radius: 1em;\n                    width: 100%;\n                    height: 100%;\n                    object-fit: cover;\n                }\n            }\n        }\n\n        .desc {\n            flex: 1.5;\n            height: 100%;\n            display: flex;\n            flex-direction: column;\n            padding: 1.5em;\n            padding-left: .5em;\n\n            h3 {\n                font-size: 1.2em;\n                margin-bottom: .7em;\n            }\n\n            p {\n                font-weight: 500;\n            }\n\n            .tag {\n                font-weight: bold;\n                font-size: .8em;\n                margin-bottom: 3em;\n            }\n        }\n    }\n\n    .showmore {\n        width: calc(16em - 4px);\n        position: relative;\n\n        &:after {\n            content: \"\";\n            display: block;\n            width: 100%;\n            padding-bottom: 100%;\n            border: 2px solid #2F3036;\n            border-radius: 1em;\n        }\n\n        a {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n    }\n}\n\n@media screen and (max-width: 648px) {\n    .showcase {\n        flex-direction: column;\n\n        .spotlight {\n            margin: 0;\n\n            .desc {\n                padding-left: 1.5em;\n                h3 {\n                    flex: 3;\n                    display: flex;\n                    align-items: center;\n                }\n                \n                .tag {\n                    margin: 0;\n                    font-weight: 500;\n                }\n\n                .p {\n                    margin-top: auto;\n                }\n            }\n\n            .thumbnail {\n                width: 30%;\n                height: 100%;\n                border-radius: 0;\n\n                .container {\n                    padding: 0;\n                }\n\n                &::after {\n                    display: none;\n                }\n            }\n        }\n\n        .showmore {\n            margin-top: 3em;\n            width: 100%;\n            \n            a {\n                justify-content: flex-end;\n            }\n    \n            &:after {\n                display: none;\n            }\n        }\n    }\n\n    \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/media/arrow-right.svg":
/*!***********************************!*\
  !*** ./src/media/arrow-right.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "media/arrow-right.svg");

/***/ }),

/***/ "./src/media/doucko.svg":
/*!******************************!*\
  !*** ./src/media/doucko.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "media/doucko.svg");

/***/ }),

/***/ "./src/media/il-about.svg":
/*!********************************!*\
  !*** ./src/media/il-about.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "media/il-about.svg");

/***/ }),

/***/ "./src/media/nost.svg":
/*!****************************!*\
  !*** ./src/media/nost.svg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "media/nost.svg");

/***/ }),

/***/ "./src/media/studenti-studentum.svg":
/*!******************************************!*\
  !*** ./src/media/studenti-studentum.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "media/studenti-studentum.svg");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _media_il_about_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/il-about.svg */ "./src/media/il-about.svg");
/* harmony import */ var _media_nost_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media/nost.svg */ "./src/media/nost.svg");
/* harmony import */ var _media_doucko_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/doucko.svg */ "./src/media/doucko.svg");
/* harmony import */ var _media_studenti_studentum_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/studenti-studentum.svg */ "./src/media/studenti-studentum.svg");
/* harmony import */ var _media_arrow_right_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media/arrow-right.svg */ "./src/media/arrow-right.svg");






var nav = document.getElementsByTagName("nav")[0];
var join_btn = document.getElementById("join-btn");
var nav_logo = document.getElementsByClassName("logo")[0];
var section_1 = document.getElementsByClassName("uvod")[0];
var section_2 = document.getElementsByClassName("nastenka")[0];
var section_3 = document.getElementsByClassName("projekty")[0];
window.addEventListener("scroll", function () {
  if (window.scrollY < 35 && nav.classList.contains("scroll")) {
    nav.classList.remove("scroll");
  } else if (window.scrollY >= 35 && !nav.classList.contains("scroll")) {
    nav.classList.add("scroll");
  }

  if (window.scrollY < 35 && join_btn.classList.contains("scroll")) {
    join_btn.classList.remove("scroll");
  } else if (window.scrollY >= 35 && !join_btn.classList.contains("scroll")) {
    join_btn.classList.add("scroll");
  }

  if (window.scrollY <= section_1.offsetTop && !nav_logo.classList.contains("black")) {
    nav_logo.classList.remove("blue");
    nav_logo.classList.add("black");
  } else if (window.scrollY >= section_1.offsetTop && window.scrollY < section_2.offsetTop && !nav_logo.classList.contains("blue")) {
    nav_logo.classList.remove("black");
    nav_logo.classList.remove("red");
    nav_logo.classList.add("blue");
  } else if (window.scrollY >= section_2.offsetTop && nav_logo.classList.contains("blue")) {
    nav_logo.classList.remove("blue");
    nav_logo.classList.add("red");
  }
});
var body = document.body;
document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("burger") && !body.classList.contains("menu-open")) {
    body.classList.add("menu-open");
  } else if (e.target.classList.contains("burger") && body.classList.contains("menu-open")) {
    body.classList.remove("menu-open");
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfMi8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly93ZWJfMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2ViXzIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWJfMi8uL3NyYy9tZWRpYS9hcnJvdy1yaWdodC5zdmciLCJ3ZWJwYWNrOi8vd2ViXzIvLi9zcmMvbWVkaWEvZG91Y2tvLnN2ZyIsIndlYnBhY2s6Ly93ZWJfMi8uL3NyYy9tZWRpYS9pbC1hYm91dC5zdmciLCJ3ZWJwYWNrOi8vd2ViXzIvLi9zcmMvbWVkaWEvbm9zdC5zdmciLCJ3ZWJwYWNrOi8vd2ViXzIvLi9zcmMvbWVkaWEvc3R1ZGVudGktc3R1ZGVudHVtLnN2ZyIsIndlYnBhY2s6Ly93ZWJfMi8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz80YzM3Iiwid2VicGFjazovL3dlYl8yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYl8yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYl8yL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYl8yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJfMi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYl8yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViXzIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJfMi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJfMi8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJuYXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiam9pbl9idG4iLCJnZXRFbGVtZW50QnlJZCIsIm5hdl9sb2dvIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNlY3Rpb25fMSIsInNlY3Rpb25fMiIsInNlY3Rpb25fMyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxZIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJvZmZzZXRUb3AiLCJib2R5IiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRixnSEFBZ0gsSUFBSSw0QkFBNEIsSUFBSSxvQ0FBb0MsSUFBSSxrQkFBa0I7QUFDOU07QUFDQSxrREFBa0QsZUFBZSxjQUFjLEdBQUcsVUFBVSx1QkFBdUIsNEJBQTRCLHlCQUF5QixxQkFBcUIscUJBQXFCLDZCQUE2QixzQkFBc0IsNEJBQTRCLG9CQUFvQiwwQkFBMEIsd0JBQXdCLEdBQUcsZUFBZSxhQUFhLDJCQUEyQiwwQkFBMEIsR0FBRyxvQkFBb0Isa0JBQWtCLEdBQUcscUJBQXFCLGlCQUFpQixHQUFHLHlCQUF5QixzQkFBc0IsR0FBRyxnQkFBZ0IsaUJBQWlCLDRCQUE0QixHQUFHLDhCQUE4QixrQkFBa0IsR0FBRyxpQkFBaUIsMEJBQTBCLDJCQUEyQixHQUFHLG9CQUFvQixzQkFBc0IsdUJBQXVCLEdBQUcsNEJBQTRCLGtCQUFrQix1QkFBdUIsaUJBQWlCLGVBQWUsbUNBQW1DLDBCQUEwQixHQUFHLHNCQUFzQiwwQkFBMEIsdUJBQXVCLGlCQUFpQiwyQkFBMkIsR0FBRyxxQkFBcUIsaUJBQWlCLEdBQUcsa0NBQWtDLGdCQUFnQixHQUFHLDRCQUE0QixpQ0FBaUMsR0FBRyxZQUFZ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QVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFFBQVEsTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxRQUFRLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFFBQVEsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsUUFBUSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1B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U0FBTCxDQUFlRSxNQUFmLENBQXNCLFdBQXRCO0FBQ0g7QUFDSixDQVBELEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzcwMCZmYW1pbHk9UmFsZXdheTp3Z2h0QDQwMDs1MDA7NzAwJmZhbWlseT1Tb3VyY2UrU2FucytQcm86d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJidXR0b24ge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmJ0biB7XFxuICBwYWRkaW5nOiAxZW0gMi41ZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDAuOGVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5idG4gLmFycm93IHtcXG4gIHdpZHRoOiAwO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcXG59XFxuLmJ0biAuYXJyb3cgcGF0aCB7XFxuICBzdHJva2U6IGJsYWNrO1xcbn1cXG4uYnRuOmhvdmVyIC5hcnJvdyB7XFxuICB3aWR0aDogMS4yZW07XFxufVxcbi5idG46bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuLmJ0bi5wcmltYXJ5IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uYnRuLnByaW1hcnkgLmFycm93ID4gcGF0aCB7XFxuICBzdHJva2U6IHdoaXRlO1xcbn1cXG5cXG4uYXJyb3ctbGluayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uYXJyb3ctbGluayBzcGFuIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYXJyb3ctbGluayBzcGFuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0zMCU7XFxuICB3aWR0aDogODAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xcbn1cXG4uYXJyb3ctbGluayAuYXJyb3cge1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNGVtO1xcbiAgd2lkdGg6IDEuNWVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmFycm93LWxpbmsucmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uYXJyb3ctbGluazpob3ZlciBzcGFuOjpiZWZvcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5hcnJvdy1saW5rOmhvdmVyIC5hcnJvdyB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC41ZW0pO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgd2lkdGg6IDI1ZW07XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBwYWRkaW5nOiAxZW0gMS41ZW07XFxufVxcblxcbi5zaG93Y2FzZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE2ZW07XFxufVxcbi5zaG93Y2FzZSAuc3BvdGxpZ2h0IHtcXG4gIGZsZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0MUY5O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xcbn1cXG4uc2hvd2Nhc2UgLnNwb3RsaWdodDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG4uc2hvd2Nhc2UgLnNwb3RsaWdodCBoMywgLnNob3djYXNlIC5zcG90bGlnaHQgcCwgLnNob3djYXNlIC5zcG90bGlnaHQgc3BhbiB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5zaG93Y2FzZSAuc3BvdGxpZ2h0IC50aHVtYm5haWwge1xcbiAgd2lkdGg6IDE2ZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zaG93Y2FzZSAuc3BvdGxpZ2h0IC50aHVtYm5haWw6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAxMDAlO1xcbn1cXG4uc2hvd2Nhc2UgLnNwb3RsaWdodCAudGh1bWJuYWlsIC5jb250YWluZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuLnNob3djYXNlIC5zcG90bGlnaHQgLnRodW1ibmFpbCAuY29udGFpbmVyIGltZyB7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4uc2hvd2Nhc2UgLnNwb3RsaWdodCAuZGVzYyB7XFxuICBmbGV4OiAxLjU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEuNWVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcXG59XFxuLnNob3djYXNlIC5zcG90bGlnaHQgLmRlc2MgaDMge1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuN2VtO1xcbn1cXG4uc2hvd2Nhc2UgLnNwb3RsaWdodCAuZGVzYyBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5zaG93Y2FzZSAuc3BvdGxpZ2h0IC5kZXNjIC50YWcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xcbn1cXG4uc2hvd2Nhc2UgLnNob3dtb3JlIHtcXG4gIHdpZHRoOiBjYWxjKDE2ZW0gLSA0cHgpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc2hvd2Nhc2UgLnNob3dtb3JlOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzJGMzAzNjtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuLnNob3djYXNlIC5zaG93bW9yZSBhIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ4cHgpIHtcXG4gIC5zaG93Y2FzZSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuc2hvd2Nhc2UgLnNwb3RsaWdodCB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIC5zaG93Y2FzZSAuc3BvdGxpZ2h0IC5kZXNjIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcXG4gIH1cXG4gIC5zaG93Y2FzZSAuc3BvdGxpZ2h0IC5kZXNjIGgzIHtcXG4gICAgZmxleDogMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5zaG93Y2FzZSAuc3BvdGxpZ2h0IC5kZXNjIC50YWcge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB9XFxuICAuc2hvd2Nhc2UgLnNwb3RsaWdodCAuZGVzYyAucCB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICB9XFxuICAuc2hvd2Nhc2UgLnNwb3RsaWdodCAudGh1bWJuYWlsIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgfVxcbiAgLnNob3djYXNlIC5zcG90bGlnaHQgLnRodW1ibmFpbCAuY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gIC5zaG93Y2FzZSAuc3BvdGxpZ2h0IC50aHVtYm5haWw6OmFmdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5zaG93Y2FzZSAuc2hvd21vcmUge1xcbiAgICBtYXJnaW4tdG9wOiAzZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLnNob3djYXNlIC5zaG93bW9yZSBhIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIH1cXG4gIC5zaG93Y2FzZSAuc2hvd21vcmU6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5oMSwgaDIsIGgzLCBwLCBzcGFuLCBhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5mb290ZXIgc3BhbiwgZm9vdGVyIGEsIGZvb3RlciBwIHtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbmZvb3RlciAuc2lnbmF0dXJlIHtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuZm9vdGVyIC5zaWduYXR1cmU6aG92ZXIge1xcbiAgY29sb3I6ICNjYzUzN2M7XFxufVxcblxcbi5tb2JpbGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxubmF2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTA7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICMwMDAwMDAwMDtcXG59XFxubmF2LnNjcm9sbCB7XFxuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjMDAwMDAwO1xcbn1cXG5uYXYgLmxvZ28gc3ZnIHtcXG4gIHdpZHRoOiA0ZW07XFxufVxcbm5hdiAubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVlbSAyZW07XFxuICBtYXgtd2lkdGg6IGNhbGMoMTA1MHB4ICsgNGVtKTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5uYXYgLm5hdmJhciAubmF2LWxpbmtzIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5uYXYgLm5hdmJhciAubmF2LWxpbmtzIGxpIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5uYXYgLm5hdmJhciAubmF2LWxpbmtzIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcXG59XFxubmF2IC5uYXZiYXIgLm5hdi1saW5rcyBsaTpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xcbiAgYm90dG9tOiAtNXB4O1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxubmF2IC5uYXZiYXIgLm5hdi1saW5rcyBsaTpob3Zlcjo6YWZ0ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbm1haW4ge1xcbiAgbWF4LXdpZHRoOiAxMDUwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDJlbSAxLjVlbSAwIDEuNWVtO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIHBhZGRpbmctdG9wOiA4ZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA0ZW07XFxufVxcbmgxIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcXG59XFxuXFxuLmNhbGwtdG8tYWN0aW9uIHtcXG4gIG1hcmdpbjogM2VtIDAgOGVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ub25hcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogNWVtIDNlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuOGVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ub25hcyBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBmb250LXNpemU6IDEuMWVtO1xcbn1cXG4ub25hcyBpbWcge1xcbiAgd2lkdGg6IDIwZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxufVxcblxcbi5wcm9qZWN0cy1zaG93Y2FzZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdyaWQtcm93LWdhcDogMmVtO1xcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyLjNlbTtcXG59XFxuLnByb2plY3RzLXNob3djYXNlIGxpIHtcXG4gIGJhY2tncm91bmQ6ICNGRjUxNTE7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjhlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGhlaWdodDogMTBlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xcbn1cXG4ucHJvamVjdHMtc2hvd2Nhc2UgbGkgc3BhbiB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5wcm9qZWN0cy1zaG93Y2FzZSBsaSBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxZW07XFxuICByaWdodDogMWVtO1xcbiAgd2lkdGg6IDVlbTtcXG59XFxuLnByb2plY3RzLXNob3djYXNlIGxpOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcbi5wcm9qZWN0cy1zaG93Y2FzZSBsaTpudGgtY2hpbGQoMSkge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuLnByb2plY3RzLXNob3djYXNlIGxpOm50aC1jaGlsZCg0KSB7XFxuICBncmlkLWNvbHVtbjogMi80O1xcbn1cXG5cXG4ubm9zdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubm9zdCAuZGVzYyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm5vc3QgLmRlc2MgaDIge1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ubm9zdCAuZGVzYyBzcGFuIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ubm9zdCAuZGVzYyBwIHtcXG4gIG1hcmdpbjogM2VtIDA7XFxuICBtYXgtd2lkdGg6IDMwZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAyZW07XFxufVxcbi5ub3N0IGltZyB7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHdpZHRoOiAyNWVtO1xcbn1cXG5cXG4ucHJpZGVqc2Uge1xcbiAgcGFkZGluZzogMTBlbSAwO1xcbn1cXG4ucHJpZGVqc2UgLmZsZXhib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnByaWRlanNlIC5mbGV4Ym94IC50ZXh0LWNvbnRhaW5lciB7XFxuICBmbGV4OiAyO1xcbiAgcGFkZGluZy1yaWdodDogMmVtO1xcbn1cXG4ucHJpZGVqc2UgLmZsZXhib3ggLnRleHQtY29udGFpbmVyIHAge1xcbiAgbWF4LXdpZHRoOiAzMGVtO1xcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xcbn1cXG4ucHJpZGVqc2UgLmZsZXhib3ggLmZvcm0tY29udGFpbmVyIHtcXG4gIGZsZXg6IDEuNTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnByaWRlanNlIC5mbGV4Ym94IC5mb3JtLWNvbnRhaW5lciBmb3JtIGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xcbn1cXG4ucHJpZGVqc2UgLmZsZXhib3ggLmZvcm0tY29udGFpbmVyIGZvcm0gaW5wdXQsIC5wcmlkZWpzZSAuZmxleGJveCAuZm9ybS1jb250YWluZXIgZm9ybSB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnByaWRlanNlIC5mbGV4Ym94IC5mb3JtLWNvbnRhaW5lciBmb3JtIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjU1ZW0gMmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xcbiAgYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICBib2R5IHtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjgwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBmb250LXNpemU6IDAuN2VtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDhweCkge1xcbiAgYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICB9XFxuXFxuICAubW9iaWxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAucGMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmJ1cmdlciB7XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHotaW5kZXg6IDExO1xcbiAgfVxcblxcbiAgLm5hdi1saW5rcyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgLm5hdi1saW5rcyBsaSBhIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICB9XFxuXFxuICBib2R5Lm1lbnUtb3BlbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gIGJvZHkubWVudS1vcGVuOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMGEzO1xcbiAgfVxcbiAgYm9keS5tZW51LW9wZW4gLm5hdi1saW5rcyB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG5cXG4gIGgxIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXG4gIH1cXG4gIGgxIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDAuNWVtO1xcbiAgfVxcblxcbiAgLmNhbGwtdG8tYWN0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIH1cXG5cXG4gIC5vbmFzIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgcGFkZGluZzogMWVtIDVlbSA0ZW0gMDtcXG4gIH1cXG5cXG4gIC5jYWxsLXRvLWFjdGlvbiB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0cy1zaG93Y2FzZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucHJvamVjdDpudGgtY2hpbGQoMSkge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0Om50aC1jaGlsZCg0KSB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgfVxcblxcbiAgLm5vc3QgLmRlc2MgPiBwIHtcXG4gICAgbWF4LXdpZHRoOiBub25lO1xcbiAgfVxcblxcbiAgLnByaWRlanNlIC5mbGV4Ym94IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5wcmlkZWpzZSAuZmxleGJveCAudGV4dC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA1ZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9lc3NlbnRpYWxzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL3Nob3djYXNlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDRUo7QURBSTtFQUNJLFFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDRVI7QURBUTtFQUNJLGFBQUE7QUNFWjtBREdRO0VBQ0ksWUFBQTtBQ0RaO0FES0k7RUFDSSxpQkFBQTtBQ0hSO0FES0k7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUNIUjtBREtRO0VBQ0ksYUFBQTtBQ0haOztBRFFBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtBQ0xKO0FET0k7RUFDSSxpQkFBQTtFQUNBLGtC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QSwyQkFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtFQTJLTjtFQXhLVTtJQUNJLGNBQUE7RUEwS2Q7O0VBcktFO0lBQ0ksa0JBQUE7RUF3S047RUF0S007SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFdBQUE7SUFBYSxZQUFBO0lBQ2IscUJBQUE7RUF5S1Y7RUF0S007SUFDSSx3QkFBQTtFQXdLVjs7RUFwS0U7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0VBdUtOO0VBcktNO0lBQ0ksZ0JBQUE7RUF1S1Y7O0VBbktFO0lBQ0ksZ0JBQUE7RUFzS047O0VBbktFO0lBQ0ksZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7RUFzS047O0VBbktFO0lBQ0ksU0FBQTtFQXNLTjs7RUFuS0U7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7RUFzS047O0VBbktFO0lBQ0ksY0FBQTtFQXNLTjs7RUFuS0U7SUFDSSxjQUFBO0VBc0tOOztFQWxLTTtJQUNJLGVBQUE7RUFxS1Y7O0VBaEtNO0lBQ0ksc0JBQUE7RUFtS1Y7RUFqS1U7SUFDSSxrQkFBQTtFQW1LZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmJ0biB7XFxuICAgIHBhZGRpbmc6IDFlbSAyLjVlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IC44ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogLjllbTtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcbiAgICAuYXJyb3cge1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzIGVhc2U7XFxuXFxuICAgICAgICBwYXRoIHtcXG4gICAgICAgICAgICBzdHJva2U6IGJsYWNrO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgLmFycm93IHtcXG4gICAgICAgICAgICB3aWR0aDogMS4yZW07XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgXFxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gICAgfVxcbiAgICAmLnByaW1hcnkge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFxuICAgICAgICAuYXJyb3cgPiBwYXRoIHtcXG4gICAgICAgICAgICBzdHJva2U6IHdoaXRlO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5hcnJvdy1saW5rIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcblxcbiAgICBzcGFuIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIHNwYW46OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogLTMwJTtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZTtcXG4gICAgfVxcblxcbiAgICAuYXJyb3cge1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzIGVhc2U7XFxuICAgICAgICBtYXJnaW4tbGVmdDogLjRlbTtcXG4gICAgICAgIHdpZHRoOiAxLjVlbTtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIH1cXG5cXG4gICAgJi5yaWdodCB7XFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgIH1cXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBzcGFuOjpiZWZvcmUge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmFycm93IHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLjVlbSk7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmlucHV0IHtcXG4gICAgd2lkdGg6IDI1ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xcbn1cIixcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzcwMCZmYW1pbHk9UmFsZXdheTp3Z2h0QDQwMDs1MDA7NzAwJmZhbWlseT1Tb3VyY2UrU2FucytQcm86d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0ICcuL2NvbXBvbmVudHMvZXNzZW50aWFscy5zY3NzJztcXG5AaW1wb3J0ICcuL2NvbXBvbmVudHMvc2hvd2Nhc2Uuc2Nzcyc7XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7IG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5oMSwgaDIsIGgzLCBwLCBzcGFuLCBhIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDJlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICAgIHNwYW4sYSxwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnNpZ25hdHVyZSB7XFxuICAgICAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZTtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI2NjNTM3YztcXG4gICAgICAgIH1cXG4gICAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgfVxcbn1cXG4ubW9iaWxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxubmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgIzAwMDAwMDAwO1xcblxcbiAgICAmLnNjcm9sbCB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjMDAwMDAwO1xcbiAgICB9XFxuXFxuICAgIC5sb2dvIHtcXG4gICAgICAgIHN2ZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDRlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAubmF2YmFyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAuNWVtIDJlbTtcXG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDUwcHggKyA0ZW0pO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuXFxuICAgICAgICAubmF2LWxpbmtzIHtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gICAgICAgICAgICBsaSB7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGxpOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMDsgaGVpZ2h0OiAwO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1vdXQ7XFxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTVweDtcXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBsaTpob3Zlcjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgIFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5tYWluIHtcXG4gICAgbWF4LXdpZHRoOiAxMDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDJlbSAxLjVlbSAwIDEuNWVtO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gICAgcGFkZGluZy10b3A6IDhlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDRlbTtcXG5cXG4gICAgc3BhbiB7XFxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgfVxcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEuMmVtO1xcbn1cXG5cXG4uY2FsbC10by1hY3Rpb24ge1xcbiAgICBtYXJnaW46IDNlbSAwIDhlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ub25hcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogNWVtIDNlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjhlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBwIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICB9XFxuXFxuICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogMjBlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgfVxcbn1cXG5cXG4ucHJvamVjdHMtc2hvd2Nhc2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBncmlkLXJvdy1nYXA6IDJlbTtcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDIuM2VtO1xcblxcbiAgICBsaSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkY1MTUxO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjhlbTtcXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgICAgIGhlaWdodDogMTBlbTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzIGVhc2U7XFxuXFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBib3R0b206IDFlbTtcXG4gICAgICAgICAgICByaWdodDogMWVtO1xcbiAgICAgICAgICAgIHdpZHRoOiA1ZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpudGgtY2hpbGQoMSkge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOm50aC1jaGlsZCg0KSB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4ubm9zdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIC5kZXNjIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG4gICAgICAgIGgyIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBwIHtcXG4gICAgICAgICAgICBtYXJnaW46IDNlbSAwO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMzBlbTtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgaW1nIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgd2lkdGg6IDI1ZW07XFxuICAgIH1cXG59XFxuXFxuLnByaWRlanNlIHtcXG4gICAgcGFkZGluZzogMTBlbSAwO1xcblxcbiAgICAuZmxleGJveCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAgICAgLnRleHQtY29udGFpbmVyIHtcXG4gICAgICAgICAgICBmbGV4OiAyO1xcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJlbTtcXG5cXG4gICAgICAgICAgICBwIHtcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMGVtO1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmZvcm0tY29udGFpbmVyIHtcXG4gICAgICAgICAgICBmbGV4OiAxLjU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICBmb3JtIHtcXG4gICAgICAgICAgICAgICAgaDMge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgaW5wdXQsdGV4dGFyZWEge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41NWVtIDJlbTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjllbTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2ODBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDhweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcXG4gICAgfVxcblxcbiAgICAubW9iaWxlIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgIC5wYyB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5idXJnZXIge1xcbiAgICAgICAgd2lkdGg6IDJlbTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgei1pbmRleDogMTE7XFxuICAgIH1cXG5cXG4gICAgLm5hdi1saW5rcyB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgICAgIHotaW5kZXg6IDEwO1xcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzIGVhc2U7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBwYWRkaW5nOiAyZW07XFxuICAgICAgICBtYXJnaW46IDA7XFxuXFxuICAgICAgICBsaSB7XFxuICAgICAgICAgICAgYSB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBib2R5Lm1lbnUtb3BlbiB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMGEzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm5hdi1saW5rcyB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGgxIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xcblxcbiAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAuNWVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5jYWxsLXRvLWFjdGlvbiB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB9XFxuXFxuICAgIC5vbmFzIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBjb2xvcjogYmxhY2s7XFxuICAgICAgICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICAgICAgcGFkZGluZzogMWVtIDVlbSA0ZW0gMDtcXG4gICAgfVxcblxcbiAgICAuY2FsbC10by1hY3Rpb24ge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0cy1zaG93Y2FzZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdDpudGgtY2hpbGQoMSkge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIH1cXG4gICAgXFxuICAgIC5wcm9qZWN0Om50aC1jaGlsZCg0KSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgfVxcblxcbiAgICAubm9zdCB7XFxuICAgICAgICAuZGVzYyA+IHAge1xcbiAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAucHJpZGVqc2Uge1xcbiAgICAgICAgLmZsZXhib3gge1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgICAgICAgLnRleHQtY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNWVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIi5zaG93Y2FzZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE2ZW07XFxuXFxuICAgIC5zcG90bGlnaHQge1xcbiAgICAgICAgZmxleDogMjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTQxRjk7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41ZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZTtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBoMywgcCwgc3BhbiB7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRodW1ibmFpbCB7XFxuICAgICAgICAgICAgd2lkdGg6IDE2ZW07XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMCU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIC5jb250YWluZXIge1xcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIHRvcDogMDsgbGVmdDogMDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGVzYyB7XFxuICAgICAgICAgICAgZmxleDogMS41O1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgcGFkZGluZzogMS41ZW07XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAuNWVtO1xcblxcbiAgICAgICAgICAgIGgzIHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjdlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC50YWcge1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOGVtO1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5zaG93bW9yZSB7XFxuICAgICAgICB3aWR0aDogY2FsYygxNmVtIC0gNHB4KTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgICY6YWZ0ZXIge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyRjMwMzY7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYSB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ4cHgpIHtcXG4gICAgLnNob3djYXNlIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgICAuc3BvdGxpZ2h0IHtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuXFxuICAgICAgICAgICAgLmRlc2Mge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xcbiAgICAgICAgICAgICAgICBoMyB7XFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAzO1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIC50YWcge1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAucCB7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC50aHVtYm5haWwge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuXFxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNob3dtb3JlIHtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzZW07XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgYSB7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICAgICAgfVxcbiAgICBcXG4gICAgICAgICAgICAmOmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtZWRpYS9hcnJvdy1yaWdodC5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWVkaWEvZG91Y2tvLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtZWRpYS9pbC1hYm91dC5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWVkaWEvbm9zdC5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWVkaWEvc3R1ZGVudGktc3R1ZGVudHVtLnN2Z1wiOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJ1xuXG5pbXBvcnQgJy4vbWVkaWEvaWwtYWJvdXQuc3ZnJ1xuaW1wb3J0ICcuL21lZGlhL25vc3Quc3ZnJ1xuaW1wb3J0ICcuL21lZGlhL2RvdWNrby5zdmcnXG5pbXBvcnQgJy4vbWVkaWEvc3R1ZGVudGktc3R1ZGVudHVtLnN2ZydcbmltcG9ydCAnLi9tZWRpYS9hcnJvdy1yaWdodC5zdmcnXG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibmF2XCIpWzBdO1xuY29uc3Qgam9pbl9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpvaW4tYnRuXCIpXG5jb25zdCBuYXZfbG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsb2dvXCIpWzBdXG5jb25zdCBzZWN0aW9uXzEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidXZvZFwiKVswXVxuY29uc3Qgc2VjdGlvbl8yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hc3RlbmthXCIpWzBdXG5jb25zdCBzZWN0aW9uXzMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVrdHlcIilbMF1cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPCAzNSAmJiBuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2Nyb2xsXCIpKSB7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwic2Nyb2xsXCIpXG4gICAgfVxuICAgIGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZID49IDM1ICYmICFuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2Nyb2xsXCIpKSB7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsXCIpXG4gICAgfVxuICAgIFxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA8IDM1ICYmIGpvaW5fYnRuLmNsYXNzTGlzdC5jb250YWlucyhcInNjcm9sbFwiKSkge1xuICAgICAgICBqb2luX2J0bi5jbGFzc0xpc3QucmVtb3ZlKFwic2Nyb2xsXCIpXG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYod2luZG93LnNjcm9sbFkgPj0gMzUgJiYgIWpvaW5fYnRuLmNsYXNzTGlzdC5jb250YWlucyhcInNjcm9sbFwiKSkge1xuICAgICAgICBqb2luX2J0bi5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsXCIpXG4gICAgfVxuXG4gICAgaWYod2luZG93LnNjcm9sbFkgPD0gc2VjdGlvbl8xLm9mZnNldFRvcCAmJiAhbmF2X2xvZ28uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmxhY2tcIikpIHtcbiAgICAgICAgbmF2X2xvZ28uY2xhc3NMaXN0LnJlbW92ZShcImJsdWVcIilcbiAgICAgICAgbmF2X2xvZ28uY2xhc3NMaXN0LmFkZChcImJsYWNrXCIpXG4gICAgfVxuXG4gICAgZWxzZSBpZih3aW5kb3cuc2Nyb2xsWSA+PSBzZWN0aW9uXzEub2Zmc2V0VG9wICYmIHdpbmRvdy5zY3JvbGxZIDwgc2VjdGlvbl8yLm9mZnNldFRvcCAmJiAhbmF2X2xvZ28uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmx1ZVwiKSkge1xuICAgICAgICBuYXZfbG9nby5jbGFzc0xpc3QucmVtb3ZlKFwiYmxhY2tcIilcbiAgICAgICAgbmF2X2xvZ28uY2xhc3NMaXN0LnJlbW92ZShcInJlZFwiKVxuICAgICAgICBuYXZfbG9nby5jbGFzc0xpc3QuYWRkKFwiYmx1ZVwiKVxuICAgIH1cblxuICAgIGVsc2UgaWYod2luZG93LnNjcm9sbFkgPj0gc2VjdGlvbl8yLm9mZnNldFRvcCAmJiBuYXZfbG9nby5jbGFzc0xpc3QuY29udGFpbnMoXCJibHVlXCIpKSB7XG4gICAgICAgIG5hdl9sb2dvLmNsYXNzTGlzdC5yZW1vdmUoXCJibHVlXCIpXG4gICAgICAgIG5hdl9sb2dvLmNsYXNzTGlzdC5hZGQoXCJyZWRcIilcbiAgICB9XG59KVxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJ1cmdlclwiKSAmJiAhYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51LW9wZW5cIikpIHtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKFwibWVudS1vcGVuXCIpXG4gICAgfVxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJ1cmdlclwiKSAmJiBib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnUtb3BlblwiKSkge1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LW9wZW5cIilcbiAgICB9XG59KSJdLCJzb3VyY2VSb290IjoiIn0=