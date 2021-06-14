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
___CSS_LOADER_EXPORT___.push([module.id, ".btn {\n  padding: 1em 2.5em;\n  border: 1px solid black;\n  border-radius: 0.8em;\n  font-weight: 500;\n  font-size: 0.9em;\n  font-family: \"Raleway\";\n  font-weight: bold;\n  background-color: white;\n  cursor: pointer;\n  transition: 0.2s ease;\n}\n.btn .arrow {\n  width: 0;\n  vertical-align: middle;\n  transition: 0.2s ease;\n}\n.btn:hover .arrow {\n  width: 1.2em;\n}\n.btn:not(:last-child) {\n  margin-right: 1em;\n}\n.btn.primary {\n  color: white;\n  background-color: black;\n}\n\n.arrow-link {\n  display: inline-block;\n  vertical-align: middle;\n}\n.arrow-link span {\n  font-weight: bold;\n  position: relative;\n}\n.arrow-link span::before {\n  content: \"\";\n  position: absolute;\n  bottom: -30%;\n  width: 80%;\n  border-bottom: 2px solid black;\n  transition: 0.2s ease;\n}\n.arrow-link .arrow {\n  transition: 0.2s ease;\n  margin-left: 0.4em;\n  width: 1.5em;\n  vertical-align: middle;\n}\n.arrow-link.right {\n  float: right;\n}\n.arrow-link:hover span::before {\n  width: 100%;\n}\n.arrow-link:hover .arrow {\n  transform: translateX(0.5em);\n}\n\n.input {\n  width: 25em;\n  margin-bottom: 1em;\n  padding: 1em 1.5em;\n}\n\n.showcase {\n  display: flex;\n  width: 100%;\n  height: 16em;\n}\n.showcase .spotlight {\n  flex: 2;\n  background-color: #4541F9;\n  position: relative;\n  display: flex;\n  align-items: center;\n  border-radius: 1em;\n  margin-right: 1.5em;\n  transition: 0.2s ease;\n  overflow: hidden;\n}\n.showcase .spotlight:hover {\n  transform: scale(1.05);\n}\n.showcase .spotlight h3, .showcase .spotlight p, .showcase .spotlight span {\n  color: white;\n}\n.showcase .spotlight .thumbnail {\n  width: 16em;\n  padding: 1em;\n  position: relative;\n}\n.showcase .spotlight .thumbnail::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  padding-top: 100%;\n}\n.showcase .spotlight .thumbnail .container {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 1em;\n}\n.showcase .spotlight .thumbnail .container img {\n  border-radius: 1em;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.showcase .spotlight .desc {\n  flex: 1.5;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 1.5em;\n  padding-left: 0.5em;\n}\n.showcase .spotlight .desc h3 {\n  font-size: 1.2em;\n  margin-bottom: 0.7em;\n}\n.showcase .spotlight .desc p {\n  font-weight: 500;\n}\n.showcase .spotlight .desc .tag {\n  font-weight: bold;\n  font-size: 0.8em;\n  margin-bottom: 3em;\n}\n.showcase .showmore {\n  width: calc(16em - 4px);\n  position: relative;\n}\n.showcase .showmore:after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  padding-bottom: 100%;\n  border: 2px solid #2F3036;\n  border-radius: 1em;\n}\n.showcase .showmore a {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nh1, h2, h3, p, span, a {\n  font-family: \"Poppins\", sans-serif;\n  color: black;\n  font-size: 1em;\n  text-decoration: none;\n}\n\n.burger {\n  display: none;\n}\n\n.mobile {\n  display: none;\n}\n\nnav {\n  width: 100%;\n  position: fixed;\n  z-index: 10;\n  transition: 0.2s ease;\n  background: white;\n  border-bottom: 1.5px solid #00000000;\n}\nnav.scroll {\n  border-bottom: 1.5px solid #000000;\n}\nnav .navbar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5em 2em;\n  max-width: calc(1050px + 4em);\n  margin-left: auto;\n  margin-right: auto;\n}\nnav .navbar .nav-links {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  list-style: none;\n}\nnav .navbar .nav-links li {\n  font-weight: bold;\n  position: relative;\n}\nnav .navbar .nav-links li:not(:last-child) {\n  margin-right: 1.5em;\n}\nnav .navbar .nav-links li::after {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  transition: 0.2s ease-out;\n  bottom: -5px;\n  left: 0;\n  border-bottom: 2px solid black;\n}\nnav .navbar .nav-links li:hover::after {\n  width: 100%;\n}\n\nmain {\n  max-width: 1050px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 2em 1.5em 0 1.5em;\n}\n\nsection {\n  padding-top: 8em;\n  width: 100%;\n}\n\nh1 {\n  text-align: center;\n  font-size: 4em;\n}\nh1 span {\n  font-size: 1.3rem;\n}\n\nh2 {\n  font-size: 1.3em;\n  margin-bottom: 1.2em;\n}\n\n.call-to-action {\n  margin: 3em 0 8em;\n  text-align: center;\n}\n\n.onas {\n  width: 100%;\n  background-color: black;\n  padding: 5em 3em;\n  border-radius: 0.8em;\n  position: relative;\n}\n.onas p {\n  font-weight: 500;\n  color: white;\n  width: 50%;\n  margin-left: auto;\n  font-size: 1.1em;\n}\n.onas img {\n  width: 20em;\n  position: absolute;\n  bottom: 0;\n}\n\n.projects-showcase {\n  width: 100%;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-row-gap: 2em;\n  grid-column-gap: 2em;\n  margin-bottom: 2.3em;\n}\n.projects-showcase li {\n  background: #FF5151;\n  font-weight: bold;\n  font-size: 1.5em;\n  border-radius: 0.8em;\n  padding: 1em;\n  height: 10em;\n  width: 100%;\n  position: relative;\n  cursor: pointer;\n  transition: 0.2s ease;\n}\n.projects-showcase li span {\n  color: white;\n}\n.projects-showcase li img {\n  position: absolute;\n  bottom: 1em;\n  right: 1em;\n  width: 5em;\n}\n.projects-showcase li:hover {\n  transform: scale(1.05);\n}\n.projects-showcase li:nth-child(1) {\n  grid-column: 1/3;\n}\n.projects-showcase li:nth-child(4) {\n  grid-column: 2/4;\n}\n\n.nost {\n  display: flex;\n}\n.nost .desc {\n  display: flex;\n  flex-direction: column;\n}\n.nost .desc h2 {\n  font-size: 3em;\n  margin-bottom: 0;\n}\n.nost .desc span {\n  font-weight: bold;\n}\n.nost .desc p {\n  margin: 3em 0;\n  max-width: 30em;\n  padding-right: 2em;\n}\n.nost img {\n  border-radius: 1em;\n  margin-left: auto;\n  width: 25em;\n}\n\n@media screen and (max-width: 850px) {\n  body {\n    font-size: 0.9em;\n  }\n}\n@media screen and (max-width: 750px) {\n  body {\n    font-size: 0.8em;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/components/essentials.scss","webpack://./src/styles/index.scss","webpack://./src/styles/components/showcase.scss"],"names":[],"mappings":"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","sourcesContent":[".btn {\r\n    padding: 1em 2.5em;\r\n    border: 1px solid black;\r\n    border-radius: .8em;\r\n    font-weight: 500;\r\n    font-size: .9em;\r\n    font-family: 'Raleway';\r\n    font-weight: bold;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    transition: .2s ease;\r\n\r\n    .arrow {\r\n        width: 0;\r\n        vertical-align: middle;\r\n        transition: .2s ease;\r\n    }\r\n\r\n    &:hover {\r\n        .arrow {\r\n            width: 1.2em;\r\n        }\r\n    }\r\n    \r\n    &:not(:last-child) {\r\n        margin-right: 1em;\r\n    }\r\n    &.primary {\r\n        color: white;\r\n        background-color: black;\r\n    }\r\n}\r\n\r\n.arrow-link {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n\r\n    span {\r\n        font-weight: bold;\r\n        position: relative;\r\n    }\r\n\r\n    span::before {\r\n        content: \"\";\r\n        position: absolute;\r\n        bottom: -30%;\r\n        width: 80%;\r\n        border-bottom: 2px solid black;\r\n        transition: .2s ease;\r\n    }\r\n\r\n    .arrow {\r\n        transition: .2s ease;\r\n        margin-left: .4em;\r\n        width: 1.5em;\r\n        vertical-align: middle;\r\n    }\r\n\r\n    &.right {\r\n        float: right;\r\n    }\r\n\r\n    &:hover {\r\n        span::before {\r\n            width: 100%;\r\n        }\r\n\r\n        .arrow {\r\n            transform: translateX(.5em);\r\n        }\r\n    }\r\n}\r\n\r\n.input {\r\n    width: 25em;\r\n    margin-bottom: 1em;\r\n    padding: 1em 1.5em;\r\n}","@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Raleway:wght@400;500;700&family=Source+Sans+Pro:wght@400;600;700&display=swap');\r\n@import './components/essentials.scss';\r\n@import './components/showcase.scss';\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    padding: 0; margin: 0;\r\n}\r\n\r\nhtml {\r\n    scroll-behavior: smooth;\r\n}\r\n\r\nh1, h2, h3, p, span, a {\r\n    font-family: \"Poppins\", sans-serif;\r\n    color: black;\r\n    font-size: 1em;\r\n    text-decoration: none;\r\n}\r\n\r\n.burger {\r\n    display: none;\r\n}\r\n\r\n.mobile {\r\n    display: none;\r\n}\r\n\r\nnav {\r\n    width: 100%;\r\n    position: fixed;\r\n    z-index: 10;\r\n    transition: .2s ease;\r\n    background: white;\r\n    border-bottom: 1.5px solid #00000000;\r\n\r\n    &.scroll {\r\n        border-bottom: 1.5px solid #000000;\r\n    }\r\n\r\n    .navbar {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        padding: .5em 2em;\r\n        max-width: calc(1050px + 4em);\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n\r\n        .nav-links {\r\n            margin-left: auto;\r\n            display: flex;\r\n            align-items: center;\r\n            list-style: none;\r\n\r\n            li {\r\n                font-weight: bold;\r\n                position: relative;\r\n\r\n                &:not(:last-child) {\r\n                    margin-right: 1.5em;\r\n                }\r\n            }\r\n\r\n            li::after {\r\n                position: absolute;\r\n                content: \"\";\r\n                width: 0; height: 0;\r\n                transition: .2s ease-out;\r\n                bottom: -5px;\r\n                left: 0;\r\n                border-bottom: 2px solid black;\r\n            }\r\n\r\n            li:hover::after {\r\n                width: 100%;  \r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nmain {\r\n    max-width: 1050px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 2em 1.5em 0 1.5em;\r\n}\r\n\r\nsection {\r\n    padding-top: 8em;\r\n    width: 100%;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    font-size: 4em;\r\n\r\n    span {\r\n        font-size: 1.3rem;\r\n    }\r\n}\r\n\r\nh2 {\r\n    font-size: 1.3em;\r\n    margin-bottom: 1.2em;\r\n}\r\n\r\n.call-to-action {\r\n    margin: 3em 0 8em;\r\n    text-align: center;\r\n}\r\n\r\n.onas {\r\n    width: 100%;\r\n    background-color: black;\r\n    padding: 5em 3em;\r\n    border-radius: .8em;\r\n    position: relative;\r\n\r\n    p {\r\n        font-weight: 500;\r\n        color: white;\r\n        width: 50%;\r\n        margin-left: auto;\r\n        font-size: 1.1em;\r\n    }\r\n\r\n    img {\r\n        width: 20em;\r\n        position: absolute;\r\n        bottom: 0;\r\n    }\r\n}\r\n\r\n.projects-showcase {\r\n    width: 100%;\r\n    list-style: none;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-row-gap: 2em;\r\n    grid-column-gap: 2em;\r\n    margin-bottom: 2.3em;\r\n\r\n    li {\r\n        background: #FF5151;\r\n        font-weight: bold;\r\n        font-size: 1.5em;\r\n        border-radius: .8em;\r\n        padding: 1em;\r\n        height: 10em;\r\n        width: 100%;\r\n        position: relative;\r\n        cursor: pointer;\r\n        transition: .2s ease;\r\n\r\n        span {\r\n            color: white;\r\n        }\r\n\r\n        img {\r\n            position: absolute;\r\n            bottom: 1em;\r\n            right: 1em;\r\n            width: 5em;\r\n        }\r\n\r\n        &:hover {\r\n            transform: scale(1.05);\r\n        }\r\n\r\n        &:nth-child(1) {\r\n            grid-column: 1/3;\r\n        }\r\n\r\n        &:nth-child(4) {\r\n            grid-column: 2/4;\r\n        }\r\n    }\r\n}\r\n\r\n.nost {\r\n    display: flex;\r\n\r\n    .desc {\r\n        display: flex;\r\n        flex-direction: column;\r\n    \r\n        h2 {\r\n            font-size: 3em;\r\n            margin-bottom: 0;\r\n        }\r\n\r\n        span {\r\n            font-weight: bold;\r\n        }\r\n\r\n        p {\r\n            margin: 3em 0;\r\n            max-width: 30em;\r\n            padding-right: 2em;\r\n        }\r\n    }\r\n\r\n    img {\r\n        border-radius: 1em;\r\n        margin-left: auto;\r\n        width: 25em;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 850px) {\r\n    body {\r\n        font-size: .9em;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 750px) {\r\n    body {\r\n        font-size: .8em;\r\n    }\r\n}\r\n",".showcase {\r\n    display: flex;\r\n    width: 100%;\r\n    height: 16em;\r\n\r\n    .spotlight {\r\n        flex: 2;\r\n        background-color: #4541F9;\r\n        position: relative;\r\n        display: flex;\r\n        align-items: center;\r\n        border-radius: 1em;\r\n        margin-right: 1.5em;\r\n        transition: .2s ease;\r\n        overflow: hidden;\r\n\r\n        &:hover {\r\n            transform: scale(1.05);\r\n        }\r\n\r\n        h3, p, span {\r\n            color: white;\r\n        }\r\n\r\n        .thumbnail {\r\n            width: 16em;\r\n            padding: 1em;\r\n            position: relative;\r\n            \r\n            &::after {\r\n                content: \"\";\r\n                display: block;\r\n                width: 100%;\r\n                padding-top: 100%;\r\n            }\r\n            \r\n            .container {\r\n                overflow: hidden;\r\n                position: absolute;\r\n                top: 0; left: 0;\r\n                width: 100%;\r\n                height: 100%;\r\n                padding: 1em;\r\n                \r\n                img {\r\n                    border-radius: 1em;\r\n                    width: 100%;\r\n                    height: 100%;\r\n                    object-fit: cover;\r\n                }\r\n            }\r\n        }\r\n\r\n        .desc {\r\n            flex: 1.5;\r\n            height: 100%;\r\n            display: flex;\r\n            flex-direction: column;\r\n            padding: 1.5em;\r\n            padding-left: .5em;\r\n\r\n            h3 {\r\n                font-size: 1.2em;\r\n                margin-bottom: .7em;\r\n            }\r\n\r\n            p {\r\n                font-weight: 500;\r\n            }\r\n\r\n            .tag {\r\n                font-weight: bold;\r\n                font-size: .8em;\r\n                margin-bottom: 3em;\r\n            }\r\n        }\r\n    }\r\n\r\n    .showmore {\r\n        width: calc(16em - 4px);\r\n        position: relative;\r\n\r\n        &:after {\r\n            content: \"\";\r\n            display: block;\r\n            width: 100%;\r\n            padding-bottom: 100%;\r\n            border: 2px solid #2F3036;\r\n            border-radius: 1em;\r\n        }\r\n\r\n        a {\r\n            position: absolute;\r\n            width: 100%;\r\n            height: 100%;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfMi8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly93ZWJfMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2ViXzIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWJfMi8uL3NyYy9tZWRpYS9hcnJvdy1yaWdodC5zdmciLCJ3ZWJwYWNrOi8vd2ViXzIvLi9zcmMvbWVkaWEvZG91Y2tvLnN2ZyIsIndlYnBhY2s6Ly93ZWJfMi8uL3NyYy9tZWRpYS9pbC1hYm91dC5zdmciLCJ3ZWJwYWNrOi8vd2ViXzIvLi9zcmMvbWVkaWEvbm9zdC5zdmciLCJ3ZWJwYWNrOi8vd2ViXzIvLi9zcmMvbWVkaWEvc3R1ZGVudGktc3R1ZGVudHVtLnN2ZyIsIndlYnBhY2s6Ly93ZWJfMi8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz80YzM3Iiwid2VicGFjazovL3dlYl8yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYl8yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYl8yL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYl8yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJfMi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYl8yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViXzIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJfMi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJfMi8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJuYXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiam9pbl9idG4iLCJnZXRFbGVtZW50QnlJZCIsIm5hdl9sb2dvIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNlY3Rpb25fMSIsInNlY3Rpb25fMiIsInNlY3Rpb25fMyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxZIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJvZmZzZXRUb3AiLCJib2R5IiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRixnSEFBZ0gsSUFBSSw0QkFBNEIsSUFBSSxvQ0FBb0MsSUFBSSxrQkFBa0I7QUFDOU07QUFDQSxnREFBZ0QsdUJBQXVCLDRCQUE0Qix5QkFBeUIscUJBQXFCLHFCQUFxQiw2QkFBNkIsc0JBQXNCLDRCQUE0QixvQkFBb0IsMEJBQTBCLEdBQUcsZUFBZSxhQUFhLDJCQUEyQiwwQkFBMEIsR0FBRyxxQkFBcUIsaUJBQWlCLEdBQUcseUJBQXlCLHNCQUFzQixHQUFHLGdCQUFnQixpQkFBaUIsNEJBQTRCLEdBQUcsaUJBQWlCLDBCQUEwQiwyQkFBMkIsR0FBRyxvQkFBb0Isc0JBQXNCLHVCQUF1QixHQUFHLDRCQUE0QixrQkFBa0IsdUJBQXVCLGlCQUFpQixlQUFlLG1DQUFtQywwQkFBMEIsR0FBRyxzQkFBc0IsMEJBQTBCLHVCQUF1QixpQkFBaUIsMkJBQTJCLEdBQUcscUJBQXFCLGlCQUFpQixHQUFHLGtDQUFrQyxnQkFBZ0IsR0FBRyw0QkFBNEIsaUNBQWlDLEdBQUcsWUFBWSxnQkFBZ0IsdUJBQXVCLHVCQUF1QixHQUFHLGVBQWUsa0JBQWtCLGdCQUFnQixpQkFBaUIsR0FBRyx3QkFBd0Is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SyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsUUFBUSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FB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QyxDQUFDQyxNQUFGLENBQVNQLFNBQVQsQ0FBbUJDLFFBQW5CLENBQTRCLFFBQTVCLEtBQXlDSSxJQUFJLENBQUNMLFNBQUwsQ0FBZUMsUUFBZixDQUF3QixXQUF4QixDQUE3QyxFQUFtRjtBQUNwRkksUUFBSSxDQUFDTCxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsV0FBdEI7QUFDSDtBQUNKLENBUEQsRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NzAwJmZhbWlseT1SYWxld2F5OndnaHRANDAwOzUwMDs3MDAmZmFtaWx5PVNvdXJjZStTYW5zK1Bybzp3Z2h0QDQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5idG4ge1xcbiAgcGFkZGluZzogMWVtIDIuNWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAwLjhlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XFxufVxcbi5idG4gLmFycm93IHtcXG4gIHdpZHRoOiAwO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcXG59XFxuLmJ0bjpob3ZlciAuYXJyb3cge1xcbiAgd2lkdGg6IDEuMmVtO1xcbn1cXG4uYnRuOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcbi5idG4ucHJpbWFyeSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmFycm93LWxpbmsge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmFycm93LWxpbmsgc3BhbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFycm93LWxpbmsgc3Bhbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMzAlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcXG59XFxuLmFycm93LWxpbmsgLmFycm93IHtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjRlbTtcXG4gIHdpZHRoOiAxLjVlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5hcnJvdy1saW5rLnJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuLmFycm93LWxpbms6aG92ZXIgc3Bhbjo6YmVmb3JlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uYXJyb3ctbGluazpob3ZlciAuYXJyb3cge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuNWVtKTtcXG59XFxuXFxuLmlucHV0IHtcXG4gIHdpZHRoOiAyNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgcGFkZGluZzogMWVtIDEuNWVtO1xcbn1cXG5cXG4uc2hvd2Nhc2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNmVtO1xcbn1cXG4uc2hvd2Nhc2UgLnNwb3RsaWdodCB7XFxuICBmbGV4OiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NDFGOTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5zaG93Y2FzZSAuc3BvdGxpZ2h0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcbi5zaG93Y2FzZSAuc3BvdGxpZ2h0IGgzLCAuc2hvd2Nhc2UgLnNwb3RsaWdodCBwLCAuc2hvd2Nhc2UgLnNwb3RsaWdodCBzcGFuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnNob3djYXNlIC5zcG90bGlnaHQgLnRodW1ibmFpbCB7XFxuICB3aWR0aDogMTZlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnNob3djYXNlIC5zcG90bGlnaHQgLnRodW1ibmFpbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDEwMCU7XFxufVxcbi5zaG93Y2FzZSAuc3BvdGxpZ2h0IC50aHVtYm5haWwgLmNvbnRhaW5lciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG4uc2hvd2Nhc2UgLnNwb3RsaWdodCAudGh1bWJuYWlsIC5jb250YWluZXIgaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi5zaG93Y2FzZSAuc3BvdGxpZ2h0IC5kZXNjIHtcXG4gIGZsZXg6IDEuNTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMS41ZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcbn1cXG4uc2hvd2Nhc2UgLnNwb3RsaWdodCAuZGVzYyBoMyB7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC43ZW07XFxufVxcbi5zaG93Y2FzZSAuc3BvdGxpZ2h0IC5kZXNjIHAge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLnNob3djYXNlIC5zcG90bGlnaHQgLmRlc2MgLnRhZyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBtYXJnaW4tYm90dG9tOiAzZW07XFxufVxcbi5zaG93Y2FzZSAuc2hvd21vcmUge1xcbiAgd2lkdGg6IGNhbGMoMTZlbSAtIDRweCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zaG93Y2FzZSAuc2hvd21vcmU6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMkYzMDM2O1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG4uc2hvd2Nhc2UgLnNob3dtb3JlIGEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5oMSwgaDIsIGgzLCBwLCBzcGFuLCBhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmJ1cmdlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9iaWxlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbm5hdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjMDAwMDAwMDA7XFxufVxcbm5hdi5zY3JvbGwge1xcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgIzAwMDAwMDtcXG59XFxubmF2IC5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcXG4gIG1heC13aWR0aDogY2FsYygxMDUwcHggKyA0ZW0pO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbm5hdiAubmF2YmFyIC5uYXYtbGlua3Mge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbm5hdiAubmF2YmFyIC5uYXYtbGlua3MgbGkge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbm5hdiAubmF2YmFyIC5uYXYtbGlua3MgbGk6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xcbn1cXG5uYXYgLm5hdmJhciAubmF2LWxpbmtzIGxpOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcXG4gIGJvdHRvbTogLTVweDtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcbm5hdiAubmF2YmFyIC5uYXYtbGlua3MgbGk6aG92ZXI6OmFmdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1heC13aWR0aDogMTA1MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBwYWRkaW5nOiAyZW0gMS41ZW0gMCAxLjVlbTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBwYWRkaW5nLXRvcDogOGVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNGVtO1xcbn1cXG5oMSBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS4yZW07XFxufVxcblxcbi5jYWxsLXRvLWFjdGlvbiB7XFxuICBtYXJnaW46IDNlbSAwIDhlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm9uYXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDVlbSAzZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjhlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm9uYXMgcCB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuLm9uYXMgaW1nIHtcXG4gIHdpZHRoOiAyMGVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4ucHJvamVjdHMtc2hvd2Nhc2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBncmlkLXJvdy1nYXA6IDJlbTtcXG4gIGdyaWQtY29sdW1uLWdhcDogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMi4zZW07XFxufVxcbi5wcm9qZWN0cy1zaG93Y2FzZSBsaSB7XFxuICBiYWNrZ3JvdW5kOiAjRkY1MTUxO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC44ZW07XFxuICBwYWRkaW5nOiAxZW07XFxuICBoZWlnaHQ6IDEwZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcXG59XFxuLnByb2plY3RzLXNob3djYXNlIGxpIHNwYW4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ucHJvamVjdHMtc2hvd2Nhc2UgbGkgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMWVtO1xcbiAgcmlnaHQ6IDFlbTtcXG4gIHdpZHRoOiA1ZW07XFxufVxcbi5wcm9qZWN0cy1zaG93Y2FzZSBsaTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG4ucHJvamVjdHMtc2hvd2Nhc2UgbGk6bnRoLWNoaWxkKDEpIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcbi5wcm9qZWN0cy1zaG93Y2FzZSBsaTpudGgtY2hpbGQoNCkge1xcbiAgZ3JpZC1jb2x1bW46IDIvNDtcXG59XFxuXFxuLm5vc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm5vc3QgLmRlc2Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5ub3N0IC5kZXNjIGgyIHtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLm5vc3QgLmRlc2Mgc3BhbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLm5vc3QgLmRlc2MgcCB7XFxuICBtYXJnaW46IDNlbSAwO1xcbiAgbWF4LXdpZHRoOiAzMGVtO1xcbiAgcGFkZGluZy1yaWdodDogMmVtO1xcbn1cXG4ubm9zdCBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB3aWR0aDogMjVlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9lc3NlbnRpYWxzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL3Nob3djYXNlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDRUo7QURBSTtFQUNJLFFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDRVI7QURFUTtFQUNJLFlBQUE7QUNBWjtBRElJO0VBQ0ksaUJBQUE7QUNGUjtBRElJO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FDRlI7O0FETUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0FDSEo7QURLSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNIUjtBRE1JO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FDSlI7QURPSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNMUjtBRFFJO0VBQ0ksWUFBQTtBQ05SO0FEVVE7RUFDSSxXQUFBO0FDUlo7QURXUTtFQUNJLDRCQUFBO0FDVFo7O0FEY0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1hKOztBQ2pFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Es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QUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FBaUpKO0FBL0lJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQWlKUjtBQS9JUTtFQUNJLFlBQUE7QUFpSlo7QUE5SVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQWdKWjtBQTdJUTtFQUNJLHNCQUFBO0FBK0laO0FBNUlRO0VBQ0ksZ0JBQUE7QUE4SVo7QUEzSVE7RUFDSSxnQkFBQTtBQTZJWjs7QUF4SUE7RUFDSSxhQUFBO0FBMklKO0FBeklJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBMklSO0FBeklRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBMklaO0FBeElRO0VBQ0ksaUJBQUE7QUEwSVo7QUF2SVE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBeUlaO0FBcklJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUF1SVI7O0FBbklBO0VBQ0k7SUFDSSxnQkFBQTtFQXNJTjtBQUNGO0FBbklBO0VBQ0k7SUFDSSxnQkFBQTtFQXFJTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5idG4ge1xcclxcbiAgICBwYWRkaW5nOiAxZW0gMi41ZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuOGVtO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IC45ZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZTtcXHJcXG5cXHJcXG4gICAgLmFycm93IHtcXHJcXG4gICAgICAgIHdpZHRoOiAwO1xcclxcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IC4ycyBlYXNlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgLmFycm93IHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMS4yZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXHJcXG4gICAgfVxcclxcbiAgICAmLnByaW1hcnkge1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFycm93LWxpbmsge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuXFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgc3Bhbjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgYm90dG9tOiAtMzAlO1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IC4ycyBlYXNlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hcnJvdyB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAuNGVtO1xcclxcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xcclxcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLnJpZ2h0IHtcXHJcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIHNwYW46OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuYXJyb3cge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCguNWVtKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgICB3aWR0aDogMjVlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgICBwYWRkaW5nOiAxZW0gMS41ZW07XFxyXFxufVwiLFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NzAwJmZhbWlseT1SYWxld2F5OndnaHRANDAwOzUwMDs3MDAmZmFtaWx5PVNvdXJjZStTYW5zK1Bybzp3Z2h0QDQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgJy4vY29tcG9uZW50cy9lc3NlbnRpYWxzLnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vY29tcG9uZW50cy9zaG93Y2FzZS5zY3NzJztcXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcGFkZGluZzogMDsgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbmgxLCBoMiwgaDMsIHAsIHNwYW4sIGEge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5idXJnZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgIzAwMDAwMDAwO1xcclxcblxcclxcbiAgICAmLnNjcm9sbCB7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjMDAwMDAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZiYXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IC41ZW0gMmVtO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwNTBweCArIDRlbSk7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG5cXHJcXG4gICAgICAgIC5uYXYtbGlua3Mge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcblxcclxcbiAgICAgICAgICAgIGxpIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41ZW07XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgbGk6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7IGhlaWdodDogMDtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjJzIGVhc2Utb3V0O1xcclxcbiAgICAgICAgICAgICAgICBib3R0b206IC01cHg7XFxyXFxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgbGk6aG92ZXI6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7ICBcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIG1heC13aWR0aDogMTA1MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyZW0gMS41ZW0gMCAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA4ZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA0ZW07XFxyXFxuXFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBmb250LXNpemU6IDEuM2VtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGwtdG8tYWN0aW9uIHtcXHJcXG4gICAgbWFyZ2luOiAzZW0gMCA4ZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9uYXMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDVlbSAzZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC44ZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDIwZW07XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLXNob3djYXNlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC1yb3ctZ2FwOiAyZW07XFxyXFxuICAgIGdyaWQtY29sdW1uLWdhcDogMmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyLjNlbTtcXHJcXG5cXHJcXG4gICAgbGkge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGNTE1MTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC44ZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwZW07XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IC4ycyBlYXNlO1xcclxcblxcclxcbiAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgYm90dG9tOiAxZW07XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IDFlbTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNWVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjpudGgtY2hpbGQoNCkge1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm5vc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgICAuZGVzYyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgXFxyXFxuICAgICAgICBoMiB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgcCB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAzZW0gMDtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwZW07XFxyXFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMmVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICAgIHdpZHRoOiAyNWVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLFwiLnNob3djYXNlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTZlbTtcXHJcXG5cXHJcXG4gICAgLnNwb3RsaWdodCB7XFxyXFxuICAgICAgICBmbGV4OiAyO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NDFGOTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IC4ycyBlYXNlO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBoMywgcCwgc3BhbiB7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnRodW1ibmFpbCB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDE2ZW07XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMWVtO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDAlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgICB0b3A6IDA7IGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmRlc2Mge1xcclxcbiAgICAgICAgICAgIGZsZXg6IDEuNTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNWVtO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogLjVlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBoMyB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC43ZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIHAge1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAudGFnIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM2VtO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2hvd21vcmUge1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoMTZlbSAtIDRweCk7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICAmOmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMkYzMDM2O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtZWRpYS9hcnJvdy1yaWdodC5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWVkaWEvZG91Y2tvLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtZWRpYS9pbC1hYm91dC5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWVkaWEvbm9zdC5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWVkaWEvc3R1ZGVudGktc3R1ZGVudHVtLnN2Z1wiOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJ1xyXG5cclxuaW1wb3J0ICcuL21lZGlhL2lsLWFib3V0LnN2ZydcclxuaW1wb3J0ICcuL21lZGlhL25vc3Quc3ZnJ1xyXG5pbXBvcnQgJy4vbWVkaWEvZG91Y2tvLnN2ZydcclxuaW1wb3J0ICcuL21lZGlhL3N0dWRlbnRpLXN0dWRlbnR1bS5zdmcnXHJcbmltcG9ydCAnLi9tZWRpYS9hcnJvdy1yaWdodC5zdmcnXHJcblxyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm5hdlwiKVswXTtcclxuY29uc3Qgam9pbl9idG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpvaW4tYnRuXCIpXHJcbmNvbnN0IG5hdl9sb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxvZ29cIilbMF1cclxuY29uc3Qgc2VjdGlvbl8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInV2b2RcIilbMF1cclxuY29uc3Qgc2VjdGlvbl8yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hc3RlbmthXCIpWzBdXHJcbmNvbnN0IHNlY3Rpb25fMyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWt0eVwiKVswXVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPCAzNSAmJiBuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2Nyb2xsXCIpKSB7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzY3JvbGxcIilcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZID49IDM1ICYmICFuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2Nyb2xsXCIpKSB7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJzY3JvbGxcIilcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZIDwgMzUgJiYgam9pbl9idG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2Nyb2xsXCIpKSB7XHJcbiAgICAgICAgam9pbl9idG4uY2xhc3NMaXN0LnJlbW92ZShcInNjcm9sbFwiKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbHNlIGlmKHdpbmRvdy5zY3JvbGxZID49IDM1ICYmICFqb2luX2J0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJzY3JvbGxcIikpIHtcclxuICAgICAgICBqb2luX2J0bi5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsXCIpXHJcbiAgICB9XHJcblxyXG4gICAgaWYod2luZG93LnNjcm9sbFkgPD0gc2VjdGlvbl8xLm9mZnNldFRvcCAmJiAhbmF2X2xvZ28uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmxhY2tcIikpIHtcclxuICAgICAgICBuYXZfbG9nby5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ZVwiKVxyXG4gICAgICAgIG5hdl9sb2dvLmNsYXNzTGlzdC5hZGQoXCJibGFja1wiKVxyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYod2luZG93LnNjcm9sbFkgPj0gc2VjdGlvbl8xLm9mZnNldFRvcCAmJiB3aW5kb3cuc2Nyb2xsWSA8IHNlY3Rpb25fMi5vZmZzZXRUb3AgJiYgIW5hdl9sb2dvLmNsYXNzTGlzdC5jb250YWlucyhcImJsdWVcIikpIHtcclxuICAgICAgICBuYXZfbG9nby5jbGFzc0xpc3QucmVtb3ZlKFwiYmxhY2tcIilcclxuICAgICAgICBuYXZfbG9nby5jbGFzc0xpc3QucmVtb3ZlKFwicmVkXCIpXHJcbiAgICAgICAgbmF2X2xvZ28uY2xhc3NMaXN0LmFkZChcImJsdWVcIilcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmKHdpbmRvdy5zY3JvbGxZID49IHNlY3Rpb25fMi5vZmZzZXRUb3AgJiYgbmF2X2xvZ28uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmx1ZVwiKSkge1xyXG4gICAgICAgIG5hdl9sb2dvLmNsYXNzTGlzdC5yZW1vdmUoXCJibHVlXCIpXHJcbiAgICAgICAgbmF2X2xvZ28uY2xhc3NMaXN0LmFkZChcInJlZFwiKVxyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcclxuXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJnZXJcIikgJiYgIWJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudS1vcGVuXCIpKSB7XHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKFwibWVudS1vcGVuXCIpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJnZXJcIikgJiYgYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51LW9wZW5cIikpIHtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LW9wZW5cIilcclxuICAgIH1cclxufSkiXSwic291cmNlUm9vdCI6IiJ9