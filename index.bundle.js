/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* TODO: ADD OVERFLOW ON PROJECT TASKS */
:root {
  font-size: 14px;
  font-family: "Inter", sans-serif;
  --base-color: #f8f9fa;
  --primary-color: #f5f5f5;
  --secondary-color: #e9ecef;
  --third-color: #dee2e6;
  --hover-color: #eeeff2;
}

ul,
body {
  padding: 0px;
  margin: 0px;
}

li {
  list-style-type: none;
}

#global-container {
  background-color: var(--base-color);
  height: 100vh;
  display: grid;
  grid-template-rows: 6rem 1fr;
  grid-template-columns: 1fr;
}

#header {
  grid-row: 1/2;
  grid-column: 1/3;

  display: grid;
  grid-template-columns: 20rem 1fr;
  gap: 1rem;
  align-items: center;

  background-color: var(--secondary-color);
}

.logo {
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 10rem;
  font-size: 2rem;
  font-weight: 600;
  padding: 0.8rem;
  border-radius: 1rem;
  justify-self: center;

  background-color: var(--base-color);
  transition: all 0.2s ease-in-out;
}
.logo:hover {
  transform: scale(1.02);
}

.logo > .material-symbols-outlined {
  font-size: 2.4rem;
  font-weight: 800;
}

.searchbar-content {
  display: flex;
  align-items: center;
  background-color: var(--base-color);

  border-radius: 1rem;
  border: 0.125rem solid var(--third-color);
  justify-content: space-around;

  height: 3rem;
  width: 90%;
  max-width: 24rem;
  transition: all 0.2s ease-in-out;
}

.searchbar-content > .material-symbols-outlined {
  font-size: 2rem;
}
#searchbar-input {
  width: 80%;
  height: 90%;
  border: 0px;
  background-color: var(--base-color);
  font-size: 1.2rem;
  outline: none;
}

#sidebar {
  grid-row: 1/2;
  grid-column: 1/2;
  display: flex;
  flex-flow: column;
  padding-top: 1rem;
  gap: 1rem;

  padding-inline: 1rem;
}

.sidebar-title {
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  background-color: var(--base-color);
  border-radius: 1rem;

  padding: 1rem;
}

.sidebar-basics {
  background-color: var(--base-color);
  border-radius: 1rem;

  padding: 1rem;
}


.options-list > li > .material-symbols-outlined {
  font-size: 2rem;
}
.options-list > li {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;

  padding: 0.6rem;
  border: 0.15rem solid #e0e0e0;
  background-color: var(--base-color);
  border-radius: 1rem;
  transition: all 0.2s ease-in-out;
}

.options-list > li:hover {
  transform: scale(1.01);

  cursor: pointer;
  background-color: var(--hover-color);
}

.sidebar-basics > ul {
  display: flex;
  flex-flow: column;
  gap: 1rem;
}
.sidebar-projects {
  background-color: var(--base-color);
  border-radius: 1rem;

  padding: 0.4rem;
}

.sidebar-projects > ul {
  display: flex;
  flex-flow: column;
  gap: 0.8rem;
  padding: 0.4rem;
  height: 20rem;
  overflow-y: auto;
  scrollbar-width: thin;
}

.content-elements {
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--base-color);
  border-radius: 3rem;
  padding: 2rem;
  margin: 1rem;
}

.project-create {
  display: flex;
  flex-flow: column;

  max-width: 40rem;
  width: 90%;
  padding: 1rem;
  gap: 2rem;

  border-radius: 1rem;
}

.project-content-elements {
  width: 94%;
  max-width: 40rem;
  flex-flow: column;
  padding: 1rem;
  gap: 1rem;
  background-color: var(--secondary-color);
  border-radius: 1rem;
}
.project-content {
  display: grid;
  grid-template-rows: 10rem 1fr;
  grid-template-columns: 40rem 1fr;

  gap: 2rem;
  height: 100%;
  border-radius: 1rem;
}

#content {
  grid-column: 1/2;
  background-color: var(--secondary-color);
  display: grid;
  grid-template-columns: 20rem 1fr;
}

.project-details {
  background-color: var(--secondary-color);
  padding: 1rem;
  border-radius: 1rem;
  padding: 1rem;
}

.project-title {
  font-size: 2rem;
  font-weight: 700;
}


#project-info {
  display: grid;
  grid-template-columns: 1fr 2rem;
  grid-template-rows: 1fr 1fr;
 
  flex-flow: row;
  grid-column: 1/2;
  grid-row: 1/2;
}

.project-details{
  grid-column: 1/2;
  
  display: flex;
  flex-flow: column;
}
.project-actions{
  grid-column: 2/3;
  grid-row: 2/3;
}
#project-tasks-form {
  grid-column: 1/2;
  grid-row: 2/3;

  max-width: 40rem;

  display: flex;
  flex-flow: column;
  padding: 1rem;
  gap: 1rem;
  background-color: var(--secondary-color);
  border-radius: 1rem;
}

#project-tasks-container{

  overflow: auto;

  max-height: 24rem;
  display: flex;
  flex-flow: column;
  padding: 1rem;
  gap: 0.6rem;
  background-color: var(--secondary-color);
  border-radius: 1rem;
}

.notes-form-container{

}

#project-notes-section{
 
  max-width: 80rem;
  grid-column: 2/3;
  grid-row: 1/3;
}



#project-notes-container{
 
 display: flex;
 flex-flow: column;
 gap: 1rem;
}


textarea#notes-textarea{
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
resize: vertical;
  width: 80%;
  height: 5rem;

}

#project-notes{
  display: flex;
  gap: 2rem;
 max-width: 100%;
 overflow: auto;
}

.project-notes{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--base-color);
  padding: 0.6rem;
  padding-inline: 1.2rem;
  border-radius: 1rem;
  height: 4rem;
}

.checkbox {
  width: 20px;
  height: 20px;
  background-color: #ddd;
  border: 1px solid #ccc;
  border-radius: 3px;
}
#create-project {
  align-self: center;
  width: 80%;
  height: 3rem;

  background-color: var(--base-color);
  border-radius: 0.6rem;
  border: 0.15rem solid var(--secondary-color);
  font-size: 1rem;
}

.creation-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.projects-form-elements {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.input {
  padding-left: 1rem;
  height: 3rem;
  font-size: 1.2rem;
  border-radius: 1rem;

  border: 0.15rem solid var(--secondary-color);
  outline: none;
  transition: all 0.4s ease-in;
}
.project-content-elements-title {
  margin-inline-start: 1rem;
  
  font-size: 2rem;
  font-weight: 700;
}

.project-description {
  margin-inline-start: 1rem;


}

.task-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--base-color);
  padding: 0.6rem;
  padding-inline: 1.2rem;
  border-radius: 1rem;
  height: 4rem;
}

.add-task {
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1rem;
  padding: 0.6rem;
  width: 2rem;

  background-color: var(--base-color);
  transition: all 0.4s ease-in;
}

.add-task > .material-symbols-outlined {
  font-size: 2rem;
}
.add-task {
  cursor: pointer;
}

.task-inputs {
  display: flex;
  flex-flow: column;
  width: 100%;
  gap: 0.4rem;
}

.newtask-input-container {
  display: flex;

  align-items: center;
  justify-content: center;
  justify-content: space-between;
  gap: 3rem;
}

#newtask-input-text {
  width: 100%;

  height: 3rem;
  font-size: 1.2rem;
  padding-left: 1rem;
  border-radius: 1rem;
  border: 0.15rem solid var(--secondary-color);
  outline: none;
  transition: all 0.4s ease-in;
}

#newtask-duedate {
  height: 3rem;
  font-size: 1.2rem;
  padding-inline: 1rem;
  border-radius: 1rem;
  border: 0.15rem solid var(--secondary-color);
  outline: none;
  transition: all 0.4s ease-in;
}

#newtask-priority {
  width: 14rem;
  height: 3rem;
  font-size: 1.2rem;
  padding-inline: 1rem;
  border-radius: 1rem;
  border: 0.15rem solid var(--secondary-color);
  outline: none;
  transition: all 0.4s ease-in;
}
.save-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;

  width: 6rem;
  border-radius: 1rem;

  background-color: var(--base-color);
  transition: all 0.4s ease-in;
}

.save-newtask > .material-symbols-outlined {
  font-size: 2rem;
}

.task-text {
}

.task-options {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  padding: 0.3rem;
  padding-inline: 0.6rem;
  background-color: var(--secondary-color);
  transition: all 0.4s ease-in;
}

.task-options > input {
}

.task-options > .material-symbols-outlined {
  font-size: 1.8rem;
  padding: 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.4s ease-in;
}

.task-options > .material-symbols-outlined:hover {
  transform: scale(1.02);
  border-radius: 1rem;
  background-color: #ffdfdf;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAGA,wCAAwC;AACxC;EACE,eAAe;EACf,gCAAgC;EAChC,qBAAqB;EACrB,wBAAwB;EACxB,0BAA0B;EAC1B,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;;EAEE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,mCAAmC;EACnC,aAAa;EACb,aAAa;EACb,4BAA4B;EAC5B,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,gBAAgB;;EAEhB,aAAa;EACb,gCAAgC;EAChC,SAAS;EACT,mBAAmB;;EAEnB,wCAAwC;AAC1C;;AAEA;EACE,aAAa;;EAEb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,oBAAoB;;EAEpB,mCAAmC;EACnC,gCAAgC;AAClC;AACA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mCAAmC;;EAEnC,mBAAmB;EACnB,yCAAyC;EACzC,6BAA6B;;EAE7B,YAAY;EACZ,UAAU;EACV,gBAAgB;EAChB,gCAAgC;AAClC;;AAEA;EACE,eAAe;AACjB;AACA;EACE,UAAU;EACV,WAAW;EACX,WAAW;EACX,mCAAmC;EACnC,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,iBAAiB;EACjB,SAAS;;EAET,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,mCAAmC;EACnC,mBAAmB;;EAEnB,aAAa;AACf;;AAEA;EACE,mCAAmC;EACnC,mBAAmB;;EAEnB,aAAa;AACf;;;AAGA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,eAAe;;EAEf,eAAe;EACf,6BAA6B;EAC7B,mCAAmC;EACnC,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;;EAEtB,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,SAAS;AACX;AACA;EACE,mCAAmC;EACnC,mBAAmB;;EAEnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,WAAW;EACX,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mCAAmC;EACnC,mBAAmB;EACnB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iBAAiB;;EAEjB,gBAAgB;EAChB,UAAU;EACV,aAAa;EACb,SAAS;;EAET,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,SAAS;EACT,wCAAwC;EACxC,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,6BAA6B;EAC7B,gCAAgC;;EAEhC,SAAS;EACT,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,wCAAwC;EACxC,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,wCAAwC;EACxC,aAAa;EACb,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;;AAGA;EACE,aAAa;EACb,+BAA+B;EAC/B,2BAA2B;;EAE3B,cAAc;EACd,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;;EAEhB,aAAa;EACb,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,aAAa;;EAEb,gBAAgB;;EAEhB,aAAa;EACb,iBAAiB;EACjB,aAAa;EACb,SAAS;EACT,wCAAwC;EACxC,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;;EAEd,iBAAiB;EACjB,aAAa;EACb,iBAAiB;EACjB,aAAa;EACb,WAAW;EACX,wCAAwC;EACxC,mBAAmB;AACrB;;AAEA;;AAEA;;AAEA;;EAEE,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;AACf;;;;AAIA;;CAEC,aAAa;CACb,iBAAiB;CACjB,SAAS;AACV;;;AAGA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;AACxB,gBAAgB;EACd,UAAU;EACV,YAAY;;AAEd;;AAEA;EACE,aAAa;EACb,SAAS;CACV,eAAe;CACf,cAAc;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mCAAmC;EACnC,eAAe;EACf,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;;EAEZ,mCAAmC;EACnC,qBAAqB;EACrB,4CAA4C;EAC5C,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;;EAEnB,4CAA4C;EAC5C,aAAa;EACb,4BAA4B;AAC9B;AACA;EACE,yBAAyB;;EAEzB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;;;AAG3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mCAAmC;EACnC,eAAe;EACf,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,mBAAmB;EACnB,eAAe;EACf,WAAW;;EAEX,mCAAmC;EACnC,4BAA4B;AAC9B;;AAEA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,aAAa;;EAEb,mBAAmB;EACnB,uBAAuB;EACvB,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,WAAW;;EAEX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,4CAA4C;EAC5C,aAAa;EACb,4BAA4B;AAC9B;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,4CAA4C;EAC5C,aAAa;EACb,4BAA4B;AAC9B;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,4CAA4C;EAC5C,aAAa;EACb,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;;EAEZ,WAAW;EACX,mBAAmB;;EAEnB,mCAAmC;EACnC,4BAA4B;AAC9B;;AAEA;EACE,eAAe;AACjB;;AAEA;AACA;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,mBAAmB;EACnB,eAAe;EACf,sBAAsB;EACtB,wCAAwC;EACxC,4BAA4B;AAC9B;;AAEA;AACA;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,4BAA4B;AAC9B;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,yBAAyB;AAC3B","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inter&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\");\r\n\r\n/* TODO: ADD OVERFLOW ON PROJECT TASKS */\r\n:root {\r\n  font-size: 14px;\r\n  font-family: \"Inter\", sans-serif;\r\n  --base-color: #f8f9fa;\r\n  --primary-color: #f5f5f5;\r\n  --secondary-color: #e9ecef;\r\n  --third-color: #dee2e6;\r\n  --hover-color: #eeeff2;\r\n}\r\n\r\nul,\r\nbody {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\n#global-container {\r\n  background-color: var(--base-color);\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-rows: 6rem 1fr;\r\n  grid-template-columns: 1fr;\r\n}\r\n\r\n#header {\r\n  grid-row: 1/2;\r\n  grid-column: 1/3;\r\n\r\n  display: grid;\r\n  grid-template-columns: 20rem 1fr;\r\n  gap: 1rem;\r\n  align-items: center;\r\n\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n  width: 10rem;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  padding: 0.8rem;\r\n  border-radius: 1rem;\r\n  justify-self: center;\r\n\r\n  background-color: var(--base-color);\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n.logo:hover {\r\n  transform: scale(1.02);\r\n}\r\n\r\n.logo > .material-symbols-outlined {\r\n  font-size: 2.4rem;\r\n  font-weight: 800;\r\n}\r\n\r\n.searchbar-content {\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: var(--base-color);\r\n\r\n  border-radius: 1rem;\r\n  border: 0.125rem solid var(--third-color);\r\n  justify-content: space-around;\r\n\r\n  height: 3rem;\r\n  width: 90%;\r\n  max-width: 24rem;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.searchbar-content > .material-symbols-outlined {\r\n  font-size: 2rem;\r\n}\r\n#searchbar-input {\r\n  width: 80%;\r\n  height: 90%;\r\n  border: 0px;\r\n  background-color: var(--base-color);\r\n  font-size: 1.2rem;\r\n  outline: none;\r\n}\r\n\r\n#sidebar {\r\n  grid-row: 1/2;\r\n  grid-column: 1/2;\r\n  display: flex;\r\n  flex-flow: column;\r\n  padding-top: 1rem;\r\n  gap: 1rem;\r\n\r\n  padding-inline: 1rem;\r\n}\r\n\r\n.sidebar-title {\r\n  text-align: center;\r\n  font-size: 1.4rem;\r\n  font-weight: 700;\r\n  background-color: var(--base-color);\r\n  border-radius: 1rem;\r\n\r\n  padding: 1rem;\r\n}\r\n\r\n.sidebar-basics {\r\n  background-color: var(--base-color);\r\n  border-radius: 1rem;\r\n\r\n  padding: 1rem;\r\n}\r\n\r\n\r\n.options-list > li > .material-symbols-outlined {\r\n  font-size: 2rem;\r\n}\r\n.options-list > li {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  font-size: 1rem;\r\n\r\n  padding: 0.6rem;\r\n  border: 0.15rem solid #e0e0e0;\r\n  background-color: var(--base-color);\r\n  border-radius: 1rem;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.options-list > li:hover {\r\n  transform: scale(1.01);\r\n\r\n  cursor: pointer;\r\n  background-color: var(--hover-color);\r\n}\r\n\r\n.sidebar-basics > ul {\r\n  display: flex;\r\n  flex-flow: column;\r\n  gap: 1rem;\r\n}\r\n.sidebar-projects {\r\n  background-color: var(--base-color);\r\n  border-radius: 1rem;\r\n\r\n  padding: 0.4rem;\r\n}\r\n\r\n.sidebar-projects > ul {\r\n  display: flex;\r\n  flex-flow: column;\r\n  gap: 0.8rem;\r\n  padding: 0.4rem;\r\n  height: 20rem;\r\n  overflow-y: auto;\r\n  scrollbar-width: thin;\r\n}\r\n\r\n.content-elements {\r\n  grid-row: 1/2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  background-color: var(--base-color);\r\n  border-radius: 3rem;\r\n  padding: 2rem;\r\n  margin: 1rem;\r\n}\r\n\r\n.project-create {\r\n  display: flex;\r\n  flex-flow: column;\r\n\r\n  max-width: 40rem;\r\n  width: 90%;\r\n  padding: 1rem;\r\n  gap: 2rem;\r\n\r\n  border-radius: 1rem;\r\n}\r\n\r\n.project-content-elements {\r\n  width: 94%;\r\n  max-width: 40rem;\r\n  flex-flow: column;\r\n  padding: 1rem;\r\n  gap: 1rem;\r\n  background-color: var(--secondary-color);\r\n  border-radius: 1rem;\r\n}\r\n.project-content {\r\n  display: grid;\r\n  grid-template-rows: 10rem 1fr;\r\n  grid-template-columns: 40rem 1fr;\r\n\r\n  gap: 2rem;\r\n  height: 100%;\r\n  border-radius: 1rem;\r\n}\r\n\r\n#content {\r\n  grid-column: 1/2;\r\n  background-color: var(--secondary-color);\r\n  display: grid;\r\n  grid-template-columns: 20rem 1fr;\r\n}\r\n\r\n.project-details {\r\n  background-color: var(--secondary-color);\r\n  padding: 1rem;\r\n  border-radius: 1rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.project-title {\r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n}\r\n\r\n\r\n#project-info {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2rem;\r\n  grid-template-rows: 1fr 1fr;\r\n \r\n  flex-flow: row;\r\n  grid-column: 1/2;\r\n  grid-row: 1/2;\r\n}\r\n\r\n.project-details{\r\n  grid-column: 1/2;\r\n  \r\n  display: flex;\r\n  flex-flow: column;\r\n}\r\n.project-actions{\r\n  grid-column: 2/3;\r\n  grid-row: 2/3;\r\n}\r\n#project-tasks-form {\r\n  grid-column: 1/2;\r\n  grid-row: 2/3;\r\n\r\n  max-width: 40rem;\r\n\r\n  display: flex;\r\n  flex-flow: column;\r\n  padding: 1rem;\r\n  gap: 1rem;\r\n  background-color: var(--secondary-color);\r\n  border-radius: 1rem;\r\n}\r\n\r\n#project-tasks-container{\r\n\r\n  overflow: auto;\r\n\r\n  max-height: 24rem;\r\n  display: flex;\r\n  flex-flow: column;\r\n  padding: 1rem;\r\n  gap: 0.6rem;\r\n  background-color: var(--secondary-color);\r\n  border-radius: 1rem;\r\n}\r\n\r\n.notes-form-container{\r\n\r\n}\r\n\r\n#project-notes-section{\r\n \r\n  max-width: 80rem;\r\n  grid-column: 2/3;\r\n  grid-row: 1/3;\r\n}\r\n\r\n\r\n\r\n#project-notes-container{\r\n \r\n display: flex;\r\n flex-flow: column;\r\n gap: 1rem;\r\n}\r\n\r\n\r\ntextarea#notes-textarea{\r\n  padding: 1rem;\r\n  border-radius: 1rem;\r\n  border: 1px solid #ccc;\r\nresize: vertical;\r\n  width: 80%;\r\n  height: 5rem;\r\n\r\n}\r\n\r\n#project-notes{\r\n  display: flex;\r\n  gap: 2rem;\r\n max-width: 100%;\r\n overflow: auto;\r\n}\r\n\r\n.project-notes{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: var(--base-color);\r\n  padding: 0.6rem;\r\n  padding-inline: 1.2rem;\r\n  border-radius: 1rem;\r\n  height: 4rem;\r\n}\r\n\r\n.checkbox {\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #ddd;\r\n  border: 1px solid #ccc;\r\n  border-radius: 3px;\r\n}\r\n#create-project {\r\n  align-self: center;\r\n  width: 80%;\r\n  height: 3rem;\r\n\r\n  background-color: var(--base-color);\r\n  border-radius: 0.6rem;\r\n  border: 0.15rem solid var(--secondary-color);\r\n  font-size: 1rem;\r\n}\r\n\r\n.creation-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.projects-form-elements {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.4rem;\r\n}\r\n.input {\r\n  padding-left: 1rem;\r\n  height: 3rem;\r\n  font-size: 1.2rem;\r\n  border-radius: 1rem;\r\n\r\n  border: 0.15rem solid var(--secondary-color);\r\n  outline: none;\r\n  transition: all 0.4s ease-in;\r\n}\r\n.project-content-elements-title {\r\n  margin-inline-start: 1rem;\r\n  \r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n}\r\n\r\n.project-description {\r\n  margin-inline-start: 1rem;\r\n\r\n\r\n}\r\n\r\n.task-content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: var(--base-color);\r\n  padding: 0.6rem;\r\n  padding-inline: 1.2rem;\r\n  border-radius: 1rem;\r\n  height: 4rem;\r\n}\r\n\r\n.add-task {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  border-radius: 1rem;\r\n  padding: 0.6rem;\r\n  width: 2rem;\r\n\r\n  background-color: var(--base-color);\r\n  transition: all 0.4s ease-in;\r\n}\r\n\r\n.add-task > .material-symbols-outlined {\r\n  font-size: 2rem;\r\n}\r\n.add-task {\r\n  cursor: pointer;\r\n}\r\n\r\n.task-inputs {\r\n  display: flex;\r\n  flex-flow: column;\r\n  width: 100%;\r\n  gap: 0.4rem;\r\n}\r\n\r\n.newtask-input-container {\r\n  display: flex;\r\n\r\n  align-items: center;\r\n  justify-content: center;\r\n  justify-content: space-between;\r\n  gap: 3rem;\r\n}\r\n\r\n#newtask-input-text {\r\n  width: 100%;\r\n\r\n  height: 3rem;\r\n  font-size: 1.2rem;\r\n  padding-left: 1rem;\r\n  border-radius: 1rem;\r\n  border: 0.15rem solid var(--secondary-color);\r\n  outline: none;\r\n  transition: all 0.4s ease-in;\r\n}\r\n\r\n#newtask-duedate {\r\n  height: 3rem;\r\n  font-size: 1.2rem;\r\n  padding-inline: 1rem;\r\n  border-radius: 1rem;\r\n  border: 0.15rem solid var(--secondary-color);\r\n  outline: none;\r\n  transition: all 0.4s ease-in;\r\n}\r\n\r\n#newtask-priority {\r\n  width: 14rem;\r\n  height: 3rem;\r\n  font-size: 1.2rem;\r\n  padding-inline: 1rem;\r\n  border-radius: 1rem;\r\n  border: 0.15rem solid var(--secondary-color);\r\n  outline: none;\r\n  transition: all 0.4s ease-in;\r\n}\r\n.save-button {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 4rem;\r\n\r\n  width: 6rem;\r\n  border-radius: 1rem;\r\n\r\n  background-color: var(--base-color);\r\n  transition: all 0.4s ease-in;\r\n}\r\n\r\n.save-newtask > .material-symbols-outlined {\r\n  font-size: 2rem;\r\n}\r\n\r\n.task-text {\r\n}\r\n\r\n.task-options {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  border-radius: 1rem;\r\n  padding: 0.3rem;\r\n  padding-inline: 0.6rem;\r\n  background-color: var(--secondary-color);\r\n  transition: all 0.4s ease-in;\r\n}\r\n\r\n.task-options > input {\r\n}\r\n\r\n.task-options > .material-symbols-outlined {\r\n  font-size: 1.8rem;\r\n  padding: 0.5rem;\r\n  border-radius: 1rem;\r\n  cursor: pointer;\r\n  transition: all 0.4s ease-in;\r\n}\r\n\r\n.task-options > .material-symbols-outlined:hover {\r\n  transform: scale(1.02);\r\n  border-radius: 1rem;\r\n  background-color: #ffdfdf;\r\n}\r\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   loadProjects: () => (/* binding */ loadProjects)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");


// PROJECT OBJECT DECLARED
class project {
  constructor(name, description, tasks) {
    this.name = name;
    this.description = description;
    this.tasks = tasks;
  }

  sayHello() {
    console.log("hello, my name is " + this.name);
  }
}

// TODO:   DELETE PROJECTS, CHANGE NAME,ETC. // FORMS VALIDATION, SEPARATE PROJECT TASKS AND NOTES

//MAIN DOCUMENT ELEMENTS
let homeMenu = document.querySelector(".home-menu");

let projectCreateSection = document.querySelector(".project-create");
let projectContentPage = document.querySelector(".project-content");

// DECLARES STORAGE VARIABLE
let projects = localStorage.getItem("projectsStorage")
  ? JSON.parse(localStorage.getItem("projectsStorage"))
  : [];

// UPDATE STORAGE FUNCTION
function updateStorage() {
  localStorage.setItem("projectsStorage", JSON.stringify(projects));
}

loadProjects();

// CREATE PROJECT FUNCTION
function createProject() {
  let projectInputName = document.getElementById("name");
  let projectInputDescription = document.getElementById("description");
  let projectForm = document.getElementById("projects-form");

  if (!projectInputName.value.trim()){
    alert("Set a name for your project")
    return
  }

  if (!projectInputDescription.value.trim()){
    alert("Set a description for your Project")
    return
  }



  let name = projectInputName.value;
  let description = projectInputDescription.value;
  let newProject = new project(name, description, []);
  projects.push(newProject);
  updateStorage();
  console.log(JSON.stringify(projects));

  projectForm.reset();

  loadProjects();
}

// PROJECTS LOADING
function loadProjects() {
  let projectsList = document.getElementById("projects-list");
  projectsList.innerHTML = "";

  for (let i = 0; i < projects.length; i++) {
    function loadSelectedProject() {
      // DECLARES PROJECT SECTION
      let projectContent = document.querySelector(".project-content");

      function cleanProjectInfo() {
        projectContent.innerHTML = "";
      }

      projectCreateSection.style.display = "none";
      cleanProjectInfo();

      projectContent.innerHTML = `  
  <div class="project-content-elements" id="project-info">
  <div class="project-details">
  <div class="project-content-elements-title"></div>
  <div class="project-description"></div>
  </div>
 
  <div class="project-actions">
  <span class="material-symbols-outlined delete-project">delete</span>
  </div>
  </div>
  <div class="project-content-elements" id="project-tasks">
  <div class="project-content-elements" id="project-tasks-form">

  </div> 
  
  </div>
  <div class="project-content-elements" id="project-tasks-container" >
  </div>




  <div class="project-content-elements" id="project-notes-section">
  <div class="project-content-elements-title">Notes</div>
  <div class="project-content-elements" id="project-notes">
  <div class="notes-form-container">
  <textarea name="notes-text" id="notes-textarea"></textarea>
  <input id="newnote-type"  value="note" required hidden>
  <div class="save-button" id="save-newnote">
    <span class="material-symbols-outlined">save</span>
  </div>
  
  </div>

  <div id="project-notes-container">
  
    </div>




</div>
</div>
 

 

  </div>
`;
      // HOME MENU FUNCTIONS

      homeMenu.onclick = () => {
        projectCreateSection.style.display = "flex";
        cleanProjectInfo();
      };

      let projectPageTitle = projectContent.querySelector(
        ".project-content-elements-title"
      );
      let projectPageDescription = projectContent.querySelector(
        ".project-description"
      );
      let projectPageTasks = projectContent.querySelector(
        "#project-tasks-form"
      );

      let projectTasksContainer = projectContent.querySelector(
        "#project-tasks-container"
      );

      let projectNotesContainer = projectContent.querySelector(
        "#project-notes-container"
      );

      projectPageTitle.innerHTML = projects[i].name;
      projectPageDescription.innerHTML = projects[i].description;
      projectPageTasks.innerHTML = "";

      console.log(li.innerHTML);

      // TASK INPUT SECTION
      let taskInputSection = document.createElement("div");
      taskInputSection.classList.add("newtask-input-container");
      taskInputSection.innerHTML = ` 
      <div class="task-inputs">  
     
       <input id="newtask-input-text" type="text" required>
       <input id="newtask-type"  value="task" required hidden>
       <div>

       <input id="newtask-duedate" type="date" required>
      

       <select class="priority-selector"name="priority" id="newtask-priority" required>
       <option value="" selected disabled> Select A Priority </option>
         <option value="critical">Critical Priority</option>
         <option value="high">High Priority</option>
         <option value="medium">Medium Priority</option>
         <option value="low">Low Priority</option>
         <option value="non-priority">Not A Priority</option>
       </select>

       </div>
     
      </div>
 
       <div class="save-button" id="save-newtask"> <div> <span class="material-symbols-outlined">
       save
       </span></div>  </div> 
    
       `;

    
      // TASKS
      let newTaskInput = taskInputSection.querySelector("#newtask-input-text");
      let newTaskType = taskInputSection.querySelector("#newtask-type");
      let newTaskDueDate = taskInputSection.querySelector("#newtask-duedate");
      let newTaskPriority = taskInputSection.querySelector("#newtask-priority");
      let saveNewTaskButton = taskInputSection.querySelector("#save-newtask");


      //NOTES
      let newNoteInput = projectContent.querySelector("#notes-textarea")
      let newNoteType = projectContent.querySelector("#newnote-type");
      let saveNewNoteButton = projectContent.querySelector("#save-newnote");
      


  


      projectPageTasks.appendChild(taskInputSection);
      projectPageTasks.appendChild(projectTasksContainer);



      // TASK ADDING TO PROJECT
      saveNewTaskButton.onclick = () => {
        // Validate form fields
        if (!newTaskInput.value.trim()) {
          alert("Please enter a task name.");
          return;
        }

        if (!newTaskDueDate.value) {
          alert("Please select a due date.");
          return;
        }

        if (!newTaskPriority.value) {
          alert("Please select a priority.");
          return;
        }

        // If all fields are valid, proceed with creating the task
        console.log(newTaskInput.value);
        console.log(newTaskDueDate.value);
        console.log(newTaskPriority.value);
        let newTaskObject = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.createTask)(
          newTaskInput.value,
          newTaskType.value,
          "incomplete",
          newTaskDueDate.value,
          newTaskPriority.value
        );
        projects[i].tasks.push(newTaskObject);

        updateStorage();
        loadSelectedProject();
        console.log(projects);
      };

        // NOTE ADDING TO PROJECT
        saveNewNoteButton.onclick = () => {
          // Validate form fields
          if (!newNoteInput.value.trim()) {
            alert("Please write a note.");
            return;
          }
  
         
  
          // If the note field is valid, proceed with creating the task
         
          console.log(newNoteInput.value);

          let newTaskObject = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.createTask)(
            newNoteInput.value,
            newNoteType.value,
            "",
            "",
            "",
          );
          projects[i].tasks.push(newTaskObject);
  
          updateStorage();
          loadSelectedProject();
          console.log(projects);
        };

      // TASKS STRUCTURE
      console.log(projects[i].tasks);
      // PROJECT TASK LOADING
      for (let j = 0; j < projects[i].tasks.length; j++) {

        if (projects[i].tasks[j].type == "task"){

          let div = document.createElement("div");
          div.innerHTML = `
      
          <div class="task-content">
          <div class="task-text">${projects[i].tasks[j].name}</div>
          <div class= " task-options">
          <input type="checkbox" class="checkbox" ${
            projects[i].tasks[j].status == "done" ? "checked" : ""
          }>
          <span class="material-symbols-outlined delete-task">delete</span>
          </div>
          </div>
        
         `;
  
          // DELETE TASK FROM PROJECT
  
          let deleteTaskButton = div.querySelector(".delete-task");
          deleteTaskButton.onclick = () => {
            projects[i].tasks.splice(j, 1);
            console.log(projects[i].tasks);
            updateStorage();
            loadSelectedProject();
          };
  
          let taskCheckbox = div.querySelector(".task-options>.checkbox");
          taskCheckbox.onclick = () => {
            if (projects[i].tasks[j].status == "incomplete") {
              projects[i].tasks[j].status = "done";
            } else if (projects[i].tasks[j].status == "done") {
              projects[i].tasks[j].status = "incomplete";
            }
            console.log(projects[i].tasks);
            updateStorage();
            console.log(`Status of task: ${projects[i].tasks[j].name} changed`);
          };
  
          projectTasksContainer.appendChild(div);


        } else if (projects[i].tasks[j].type == "note"){

          
          let div = document.createElement("div");
          div.innerHTML = `
      
          <div class="task-content">
          <div class="task-text">${projects[i].tasks[j].name}</div>
          <div class= " note-options">
         
          <span class="material-symbols-outlined delete-task">delete</span>
          </div>
          </div>
        
         `;
  
          // DELETE TASK FROM PROJECT
  
          let deleteTaskButton = div.querySelector(".delete-task");
          deleteTaskButton.onclick = () => {
            projects[i].tasks.splice(j, 1);
            console.log(projects[i].tasks);
            updateStorage();
            loadSelectedProject();
          };
  
       
  
          projectNotesContainer.appendChild(div);

        }

      }

      projectContentPage.style.display = "grid";

      let deleteProjectButton = projectContent.querySelector(".delete-project");
      deleteProjectButton.onclick = () => {
        projects.splice(i, 1);
        console.log(projects);
        updateStorage();
        
        homeMenu.click();
        loadProjects();
      };

    }

    let li = document.createElement("li");

    //clicking on project
    li.onclick = () => {
      loadSelectedProject();
    };

    li.innerHTML = projects[i].name;
    projectsList.appendChild(li);
    console.log(projects[i]);
  }

  for (let i = 0; i < projects.length; i++) {
    console.log(
      ` "the id of the project is " ${i} "and "  ${projects[i].name}`
    );
  }
}


/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask)
/* harmony export */ });
class task {
  constructor(name, type, status, dueDate, priority) {
    this.name = name;
    this.type= type;
    this.status = status;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  sayHello() {
    console.log("hello, my name is " + this.name);
  }
}

function createTask(name, type, status, dueDate, priority) {
  
  let newTaskObject = new task(name, type, status, dueDate, priority)
  
  return newTaskObject;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



//  import projects from './project.js'

let createProjectButton = document.getElementById("create-project");

createProjectButton.onclick = (e) => {
  e.preventDefault();
  

  (0,_project__WEBPACK_IMPORTED_MODULE_1__.createProject)();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsbUhBQW1IO0FBQ25ILDRLQUE0SztBQUM1SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxZQUFZLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsY0FBYyxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsTUFBTSxLQUFLLFlBQVksY0FBYyxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGNBQWMsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxXQUFXLFVBQVUsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFFBQVEsTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFL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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtEQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrREFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4QkFBOEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJCQUEyQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0Esc0NBQXNDLEdBQUcsVUFBVSxpQkFBaUI7QUFDcEU7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDcEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQWtDO0FBQ3NCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQWE7QUFDZiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlciZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXRlcmlhbCtTeW1ib2xzK091dGxpbmVkOm9wc3osd2dodCxGSUxMLEdSQURAMjAuLjQ4LDEwMC4uNzAwLDAuLjEsLTUwLi4yMDApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFRPRE86IEFERCBPVkVSRkxPVyBPTiBQUk9KRUNUIFRBU0tTICovXHJcbjpyb290IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcclxuICAtLWJhc2UtY29sb3I6ICNmOGY5ZmE7XHJcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZjVmNWY1O1xyXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZTllY2VmO1xyXG4gIC0tdGhpcmQtY29sb3I6ICNkZWUyZTY7XHJcbiAgLS1ob3Zlci1jb2xvcjogI2VlZWZmMjtcclxufVxyXG5cclxudWwsXHJcbmJvZHkge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxubGkge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuI2dsb2JhbC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDZyZW0gMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICBncmlkLXJvdzogMS8yO1xyXG4gIGdyaWQtY29sdW1uOiAxLzM7XHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHJlbSAxZnI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxuICB3aWR0aDogMTByZW07XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMC44cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5sb2dvOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG59XHJcblxyXG4ubG9nbyA+IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcclxuICBmb250LXNpemU6IDIuNHJlbTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uc2VhcmNoYmFyLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkIHZhcigtLXRoaXJkLWNvbG9yKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiAyNHJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNlYXJjaGJhci1jb250ZW50ID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG4jc2VhcmNoYmFyLWlucHV0IHtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHtcclxuICBncmlkLXJvdzogMS8yO1xyXG4gIGdyaWQtY29sdW1uOiAxLzI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBnYXA6IDFyZW07XHJcblxyXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xyXG59XHJcblxyXG4uc2lkZWJhci10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuXHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLnNpZGViYXItYmFzaWNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG5cclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG5cclxuLm9wdGlvbnMtbGlzdCA+IGxpID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG4ub3B0aW9ucy1saXN0ID4gbGkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG5cclxuICBwYWRkaW5nOiAwLjZyZW07XHJcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkICNlMGUwZTA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm9wdGlvbnMtbGlzdCA+IGxpOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xyXG59XHJcblxyXG4uc2lkZWJhci1iYXNpY3MgPiB1bCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuLnNpZGViYXItcHJvamVjdHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcblxyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxufVxyXG5cclxuLnNpZGViYXItcHJvamVjdHMgPiB1bCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBnYXA6IDAuOHJlbTtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgaGVpZ2h0OiAyMHJlbTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxufVxyXG5cclxuLmNvbnRlbnQtZWxlbWVudHMge1xyXG4gIGdyaWQtcm93OiAxLzI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAzcmVtO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1jcmVhdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gIG1heC13aWR0aDogNDByZW07XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGdhcDogMnJlbTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtY29udGVudC1lbGVtZW50cyB7XHJcbiAgd2lkdGg6IDk0JTtcclxuICBtYXgtd2lkdGg6IDQwcmVtO1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG4ucHJvamVjdC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTByZW0gMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDByZW0gMWZyO1xyXG5cclxuICBnYXA6IDJyZW07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICBncmlkLWNvbHVtbjogMS8yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcmVtIDFmcjtcclxufVxyXG5cclxuLnByb2plY3QtZGV0YWlscyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5cclxuI3Byb2plY3QtaW5mbyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAycmVtO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuIFxyXG4gIGZsZXgtZmxvdzogcm93O1xyXG4gIGdyaWQtY29sdW1uOiAxLzI7XHJcbiAgZ3JpZC1yb3c6IDEvMjtcclxufVxyXG5cclxuLnByb2plY3QtZGV0YWlsc3tcclxuICBncmlkLWNvbHVtbjogMS8yO1xyXG4gIFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuLnByb2plY3QtYWN0aW9uc3tcclxuICBncmlkLWNvbHVtbjogMi8zO1xyXG4gIGdyaWQtcm93OiAyLzM7XHJcbn1cclxuI3Byb2plY3QtdGFza3MtZm9ybSB7XHJcbiAgZ3JpZC1jb2x1bW46IDEvMjtcclxuICBncmlkLXJvdzogMi8zO1xyXG5cclxuICBtYXgtd2lkdGg6IDQwcmVtO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuI3Byb2plY3QtdGFza3MtY29udGFpbmVye1xyXG5cclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgbWF4LWhlaWdodDogMjRyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGdhcDogMC42cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuLm5vdGVzLWZvcm0tY29udGFpbmVye1xyXG5cclxufVxyXG5cclxuI3Byb2plY3Qtbm90ZXMtc2VjdGlvbntcclxuIFxyXG4gIG1heC13aWR0aDogODByZW07XHJcbiAgZ3JpZC1jb2x1bW46IDIvMztcclxuICBncmlkLXJvdzogMS8zO1xyXG59XHJcblxyXG5cclxuXHJcbiNwcm9qZWN0LW5vdGVzLWNvbnRhaW5lcntcclxuIFxyXG4gZGlzcGxheTogZmxleDtcclxuIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gZ2FwOiAxcmVtO1xyXG59XHJcblxyXG5cclxudGV4dGFyZWEjbm90ZXMtdGV4dGFyZWF7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbnJlc2l6ZTogdmVydGljYWw7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDVyZW07XHJcblxyXG59XHJcblxyXG4jcHJvamVjdC1ub3Rlc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMnJlbTtcclxuIG1heC13aWR0aDogMTAwJTtcclxuIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ucHJvamVjdC1ub3Rlc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xyXG4gIHBhZGRpbmc6IDAuNnJlbTtcclxuICBwYWRkaW5nLWlubGluZTogMS4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG59XHJcblxyXG4uY2hlY2tib3gge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbiNjcmVhdGUtcHJvamVjdCB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XHJcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uY3JlYXRpb24tZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnByb2plY3RzLWZvcm0tZWxlbWVudHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNHJlbTtcclxufVxyXG4uaW5wdXQge1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuXHJcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xyXG59XHJcbi5wcm9qZWN0LWNvbnRlbnQtZWxlbWVudHMtdGl0bGUge1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDFyZW07XHJcbiAgXHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxcmVtO1xyXG5cclxuXHJcbn1cclxuXHJcbi50YXNrLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XHJcbiAgcGFkZGluZzogMC42cmVtO1xyXG4gIHBhZGRpbmctaW5saW5lOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBoZWlnaHQ6IDRyZW07XHJcbn1cclxuXHJcbi5hZGQtdGFzayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDAuNnJlbTtcclxuICB3aWR0aDogMnJlbTtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcclxufVxyXG5cclxuLmFkZC10YXNrID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG4uYWRkLXRhc2sge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhc2staW5wdXRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGdhcDogMC40cmVtO1xyXG59XHJcblxyXG4ubmV3dGFzay1pbnB1dC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogM3JlbTtcclxufVxyXG5cclxuI25ld3Rhc2staW5wdXQtdGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGhlaWdodDogM3JlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XHJcbn1cclxuXHJcbiNuZXd0YXNrLWR1ZWRhdGUge1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcclxufVxyXG5cclxuI25ld3Rhc2stcHJpb3JpdHkge1xyXG4gIHdpZHRoOiAxNHJlbTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XHJcbn1cclxuLnNhdmUtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG5cclxuICB3aWR0aDogNnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xyXG59XHJcblxyXG4uc2F2ZS1uZXd0YXNrID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLnRhc2stdGV4dCB7XHJcbn1cclxuXHJcbi50YXNrLW9wdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBwYWRkaW5nOiAwLjNyZW07XHJcbiAgcGFkZGluZy1pbmxpbmU6IDAuNnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XHJcbn1cclxuXHJcbi50YXNrLW9wdGlvbnMgPiBpbnB1dCB7XHJcbn1cclxuXHJcbi50YXNrLW9wdGlvbnMgPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XHJcbn1cclxuXHJcbi50YXNrLW9wdGlvbnMgPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmRmZGY7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQSx3Q0FBd0M7QUFDeEM7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNa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QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTs7RUFFWixXQUFXO0VBQ1gsbUJBQW1COztFQUVuQixtQ0FBbUM7RUFDbkMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsd0NBQXdDO0VBQ3hDLDRCQUE0QjtBQUM5Qjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMFxcXCIpO1xcclxcblxcclxcbi8qIFRPRE86IEFERCBPVkVSRkxPVyBPTiBQUk9KRUNUIFRBU0tTICovXFxyXFxuOnJvb3Qge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAtLWJhc2UtY29sb3I6ICNmOGY5ZmE7XFxyXFxuICAtLXByaW1hcnktY29sb3I6ICNmNWY1ZjU7XFxyXFxuICAtLXNlY29uZGFyeS1jb2xvcjogI2U5ZWNlZjtcXHJcXG4gIC0tdGhpcmQtY29sb3I6ICNkZWUyZTY7XFxyXFxuICAtLWhvdmVyLWNvbG9yOiAjZWVlZmYyO1xcclxcbn1cXHJcXG5cXHJcXG51bCxcXHJcXG5ib2R5IHtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNnbG9iYWwtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDZyZW0gMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgZ3JpZC1yb3c6IDEvMjtcXHJcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHJlbSAxZnI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHdpZHRoOiAxMHJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBwYWRkaW5nOiAwLjhyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4ubG9nbzpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyA+IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaGJhci1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxyXFxuXFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCB2YXIoLS10aGlyZC1jb2xvcik7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG5cXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXgtd2lkdGg6IDI0cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hiYXItY29udGVudCA+IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuI3NlYXJjaGJhci1pbnB1dCB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBib3JkZXI6IDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB7XFxyXFxuICBncmlkLXJvdzogMS8yO1xcclxcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcblxcclxcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLXRpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWJhc2ljcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ub3B0aW9ucy1saXN0ID4gbGkgPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcbi5vcHRpb25zLWxpc3QgPiBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXHJcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCAjZTBlMGUwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zLWxpc3QgPiBsaTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcclxcblxcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci1iYXNpY3MgPiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcbi5zaWRlYmFyLXByb2plY3RzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItcHJvamVjdHMgPiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICBnYXA6IDAuOHJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gIGhlaWdodDogMjByZW07XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1lbGVtZW50cyB7XFxyXFxuICBncmlkLXJvdzogMS8yO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jcmVhdGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcblxcclxcbiAgbWF4LXdpZHRoOiA0MHJlbTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcblxcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGVudC1lbGVtZW50cyB7XFxyXFxuICB3aWR0aDogOTQlO1xcclxcbiAgbWF4LXdpZHRoOiA0MHJlbTtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG4ucHJvamVjdC1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwcmVtIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDByZW0gMWZyO1xcclxcblxcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHJlbSAxZnI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRldGFpbHMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3Byb2plY3QtaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMnJlbTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gXFxyXFxuICBmbGV4LWZsb3c6IHJvdztcXHJcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICBncmlkLXJvdzogMS8yO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1kZXRhaWxze1xcclxcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXHJcXG4gIFxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbn1cXHJcXG4ucHJvamVjdC1hY3Rpb25ze1xcclxcbiAgZ3JpZC1jb2x1bW46IDIvMztcXHJcXG4gIGdyaWQtcm93OiAyLzM7XFxyXFxufVxcclxcbiNwcm9qZWN0LXRhc2tzLWZvcm0ge1xcclxcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXHJcXG4gIGdyaWQtcm93OiAyLzM7XFxyXFxuXFxyXFxuICBtYXgtd2lkdGg6IDQwcmVtO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC10YXNrcy1jb250YWluZXJ7XFxyXFxuXFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG5cXHJcXG4gIG1heC1oZWlnaHQ6IDI0cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGdhcDogMC42cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5ub3Rlcy1mb3JtLWNvbnRhaW5lcntcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3Qtbm90ZXMtc2VjdGlvbntcXHJcXG4gXFxyXFxuICBtYXgtd2lkdGg6IDgwcmVtO1xcclxcbiAgZ3JpZC1jb2x1bW46IDIvMztcXHJcXG4gIGdyaWQtcm93OiAxLzM7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNwcm9qZWN0LW5vdGVzLWNvbnRhaW5lcntcXHJcXG4gXFxyXFxuIGRpc3BsYXk6IGZsZXg7XFxyXFxuIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbnRleHRhcmVhI25vdGVzLXRleHRhcmVhe1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbnJlc2l6ZTogdmVydGljYWw7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1ub3Rlc3tcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuIG1heC13aWR0aDogMTAwJTtcXHJcXG4gb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5vdGVze1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuI2NyZWF0ZS1wcm9qZWN0IHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcXHJcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRpb24tZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWZvcm0tZWxlbWVudHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDAuNHJlbTtcXHJcXG59XFxyXFxuLmlucHV0IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG5cXHJcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XFxyXFxufVxcclxcbi5wcm9qZWN0LWNvbnRlbnQtZWxlbWVudHMtdGl0bGUge1xcclxcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMXJlbTtcXHJcXG4gIFxcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xcclxcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMXJlbTtcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xcclxcbiAgcGFkZGluZzogMC42cmVtO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDEuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2sgPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcbi5hZGQtdGFzayB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWlucHV0cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogMC40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3dGFzay1pbnB1dC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25ld3Rhc2staW5wdXQtdGV4dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbiNuZXd0YXNrLWR1ZWRhdGUge1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3dGFzay1wcmlvcml0eSB7XFxyXFxuICB3aWR0aDogMTRyZW07XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XFxyXFxufVxcclxcbi5zYXZlLWJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcblxcclxcbiAgd2lkdGg6IDZyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uc2F2ZS1uZXd0YXNrID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay10ZXh0IHtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stb3B0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAwLjNyZW07XFxyXFxuICBwYWRkaW5nLWlubGluZTogMC42cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi50YXNrLW9wdGlvbnMgPiBpbnB1dCB7XFxyXFxufVxcclxcblxcclxcbi50YXNrLW9wdGlvbnMgPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1vcHRpb25zID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZmRmO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcclxuXHJcbi8vIFBST0pFQ1QgT0JKRUNUIERFQ0xBUkVEXHJcbmNsYXNzIHByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCB0YXNrcykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMudGFza3MgPSB0YXNrcztcclxuICB9XHJcblxyXG4gIHNheUhlbGxvKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJoZWxsbywgbXkgbmFtZSBpcyBcIiArIHRoaXMubmFtZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBUT0RPOiAgIERFTEVURSBQUk9KRUNUUywgQ0hBTkdFIE5BTUUsRVRDLiAvLyBGT1JNUyBWQUxJREFUSU9OLCBTRVBBUkFURSBQUk9KRUNUIFRBU0tTIEFORCBOT1RFU1xyXG5cclxuLy9NQUlOIERPQ1VNRU5UIEVMRU1FTlRTXHJcbmxldCBob21lTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1tZW51XCIpO1xyXG5cclxubGV0IHByb2plY3RDcmVhdGVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNyZWF0ZVwiKTtcclxubGV0IHByb2plY3RDb250ZW50UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250ZW50XCIpO1xyXG5cclxuLy8gREVDTEFSRVMgU1RPUkFHRSBWQVJJQUJMRVxyXG5sZXQgcHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzU3RvcmFnZVwiKVxyXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzU3RvcmFnZVwiKSlcclxuICA6IFtdO1xyXG5cclxuLy8gVVBEQVRFIFNUT1JBR0UgRlVOQ1RJT05cclxuZnVuY3Rpb24gdXBkYXRlU3RvcmFnZSgpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzU3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG59XHJcblxyXG5sb2FkUHJvamVjdHMoKTtcclxuXHJcbi8vIENSRUFURSBQUk9KRUNUIEZVTkNUSU9OXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xyXG4gIGxldCBwcm9qZWN0SW5wdXROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpO1xyXG4gIGxldCBwcm9qZWN0SW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XHJcbiAgbGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1mb3JtXCIpO1xyXG5cclxuICBpZiAoIXByb2plY3RJbnB1dE5hbWUudmFsdWUudHJpbSgpKXtcclxuICAgIGFsZXJ0KFwiU2V0IGEgbmFtZSBmb3IgeW91ciBwcm9qZWN0XCIpXHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGlmICghcHJvamVjdElucHV0RGVzY3JpcHRpb24udmFsdWUudHJpbSgpKXtcclxuICAgIGFsZXJ0KFwiU2V0IGEgZGVzY3JpcHRpb24gZm9yIHlvdXIgUHJvamVjdFwiKVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGxldCBuYW1lID0gcHJvamVjdElucHV0TmFtZS52YWx1ZTtcclxuICBsZXQgZGVzY3JpcHRpb24gPSBwcm9qZWN0SW5wdXREZXNjcmlwdGlvbi52YWx1ZTtcclxuICBsZXQgbmV3UHJvamVjdCA9IG5ldyBwcm9qZWN0KG5hbWUsIGRlc2NyaXB0aW9uLCBbXSk7XHJcbiAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICB1cGRhdGVTdG9yYWdlKCk7XHJcbiAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuXHJcbiAgcHJvamVjdEZvcm0ucmVzZXQoKTtcclxuXHJcbiAgbG9hZFByb2plY3RzKCk7XHJcbn1cclxuXHJcbi8vIFBST0pFQ1RTIExPQURJTkdcclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcclxuICBsZXQgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1saXN0XCIpO1xyXG4gIHByb2plY3RzTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBmdW5jdGlvbiBsb2FkU2VsZWN0ZWRQcm9qZWN0KCkge1xyXG4gICAgICAvLyBERUNMQVJFUyBQUk9KRUNUIFNFQ1RJT05cclxuICAgICAgbGV0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRlbnRcIik7XHJcblxyXG4gICAgICBmdW5jdGlvbiBjbGVhblByb2plY3RJbmZvKCkge1xyXG4gICAgICAgIHByb2plY3RDb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHByb2plY3RDcmVhdGVTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgY2xlYW5Qcm9qZWN0SW5mbygpO1xyXG5cclxuICAgICAgcHJvamVjdENvbnRlbnQuaW5uZXJIVE1MID0gYCAgXHJcbiAgPGRpdiBjbGFzcz1cInByb2plY3QtY29udGVudC1lbGVtZW50c1wiIGlkPVwicHJvamVjdC1pbmZvXCI+XHJcbiAgPGRpdiBjbGFzcz1cInByb2plY3QtZGV0YWlsc1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWNvbnRlbnQtZWxlbWVudHMtdGl0bGVcIj48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gXHJcbiAgPGRpdiBjbGFzcz1cInByb2plY3QtYWN0aW9uc1wiPlxyXG4gIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBkZWxldGUtcHJvamVjdFwiPmRlbGV0ZTwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1jb250ZW50LWVsZW1lbnRzXCIgaWQ9XCJwcm9qZWN0LXRhc2tzXCI+XHJcbiAgPGRpdiBjbGFzcz1cInByb2plY3QtY29udGVudC1lbGVtZW50c1wiIGlkPVwicHJvamVjdC10YXNrcy1mb3JtXCI+XHJcblxyXG4gIDwvZGl2PiBcclxuICBcclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1jb250ZW50LWVsZW1lbnRzXCIgaWQ9XCJwcm9qZWN0LXRhc2tzLWNvbnRhaW5lclwiID5cclxuICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInByb2plY3QtY29udGVudC1lbGVtZW50c1wiIGlkPVwicHJvamVjdC1ub3Rlcy1zZWN0aW9uXCI+XHJcbiAgPGRpdiBjbGFzcz1cInByb2plY3QtY29udGVudC1lbGVtZW50cy10aXRsZVwiPk5vdGVzPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInByb2plY3QtY29udGVudC1lbGVtZW50c1wiIGlkPVwicHJvamVjdC1ub3Rlc1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJub3Rlcy1mb3JtLWNvbnRhaW5lclwiPlxyXG4gIDx0ZXh0YXJlYSBuYW1lPVwibm90ZXMtdGV4dFwiIGlkPVwibm90ZXMtdGV4dGFyZWFcIj48L3RleHRhcmVhPlxyXG4gIDxpbnB1dCBpZD1cIm5ld25vdGUtdHlwZVwiICB2YWx1ZT1cIm5vdGVcIiByZXF1aXJlZCBoaWRkZW4+XHJcbiAgPGRpdiBjbGFzcz1cInNhdmUtYnV0dG9uXCIgaWQ9XCJzYXZlLW5ld25vdGVcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPnNhdmU8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbiAgXHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgaWQ9XCJwcm9qZWN0LW5vdGVzLWNvbnRhaW5lclwiPlxyXG4gIFxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG48L2Rpdj5cclxuPC9kaXY+XHJcbiBcclxuXHJcbiBcclxuXHJcbiAgPC9kaXY+XHJcbmA7XHJcbiAgICAgIC8vIEhPTUUgTUVOVSBGVU5DVElPTlNcclxuXHJcbiAgICAgIGhvbWVNZW51Lm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvamVjdENyZWF0ZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGNsZWFuUHJvamVjdEluZm8oKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCBwcm9qZWN0UGFnZVRpdGxlID0gcHJvamVjdENvbnRlbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5wcm9qZWN0LWNvbnRlbnQtZWxlbWVudHMtdGl0bGVcIlxyXG4gICAgICApO1xyXG4gICAgICBsZXQgcHJvamVjdFBhZ2VEZXNjcmlwdGlvbiA9IHByb2plY3RDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIucHJvamVjdC1kZXNjcmlwdGlvblwiXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBwcm9qZWN0UGFnZVRhc2tzID0gcHJvamVjdENvbnRlbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIiNwcm9qZWN0LXRhc2tzLWZvcm1cIlxyXG4gICAgICApO1xyXG5cclxuICAgICAgbGV0IHByb2plY3RUYXNrc0NvbnRhaW5lciA9IHByb2plY3RDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIjcHJvamVjdC10YXNrcy1jb250YWluZXJcIlxyXG4gICAgICApO1xyXG5cclxuICAgICAgbGV0IHByb2plY3ROb3Rlc0NvbnRhaW5lciA9IHByb2plY3RDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIjcHJvamVjdC1ub3Rlcy1jb250YWluZXJcIlxyXG4gICAgICApO1xyXG5cclxuICAgICAgcHJvamVjdFBhZ2VUaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0c1tpXS5uYW1lO1xyXG4gICAgICBwcm9qZWN0UGFnZURlc2NyaXB0aW9uLmlubmVySFRNTCA9IHByb2plY3RzW2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICBwcm9qZWN0UGFnZVRhc2tzLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhsaS5pbm5lckhUTUwpO1xyXG5cclxuICAgICAgLy8gVEFTSyBJTlBVVCBTRUNUSU9OXHJcbiAgICAgIGxldCB0YXNrSW5wdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgdGFza0lucHV0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibmV3dGFzay1pbnB1dC1jb250YWluZXJcIik7XHJcbiAgICAgIHRhc2tJbnB1dFNlY3Rpb24uaW5uZXJIVE1MID0gYCBcclxuICAgICAgPGRpdiBjbGFzcz1cInRhc2staW5wdXRzXCI+ICBcclxuICAgICBcclxuICAgICAgIDxpbnB1dCBpZD1cIm5ld3Rhc2staW5wdXQtdGV4dFwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ+XHJcbiAgICAgICA8aW5wdXQgaWQ9XCJuZXd0YXNrLXR5cGVcIiAgdmFsdWU9XCJ0YXNrXCIgcmVxdWlyZWQgaGlkZGVuPlxyXG4gICAgICAgPGRpdj5cclxuXHJcbiAgICAgICA8aW5wdXQgaWQ9XCJuZXd0YXNrLWR1ZWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHJlcXVpcmVkPlxyXG4gICAgICBcclxuXHJcbiAgICAgICA8c2VsZWN0IGNsYXNzPVwicHJpb3JpdHktc2VsZWN0b3JcIm5hbWU9XCJwcmlvcml0eVwiIGlkPVwibmV3dGFzay1wcmlvcml0eVwiIHJlcXVpcmVkPlxyXG4gICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkIGRpc2FibGVkPiBTZWxlY3QgQSBQcmlvcml0eSA8L29wdGlvbj5cclxuICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNyaXRpY2FsXCI+Q3JpdGljYWwgUHJpb3JpdHk8L29wdGlvbj5cclxuICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoIFByaW9yaXR5PC9vcHRpb24+XHJcbiAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW0gUHJpb3JpdHk8L29wdGlvbj5cclxuICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdyBQcmlvcml0eTwvb3B0aW9uPlxyXG4gICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9uLXByaW9yaXR5XCI+Tm90IEEgUHJpb3JpdHk8L29wdGlvbj5cclxuICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgIFxyXG4gICAgICA8L2Rpdj5cclxuIFxyXG4gICAgICAgPGRpdiBjbGFzcz1cInNhdmUtYnV0dG9uXCIgaWQ9XCJzYXZlLW5ld3Rhc2tcIj4gPGRpdj4gPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+XHJcbiAgICAgICBzYXZlXHJcbiAgICAgICA8L3NwYW4+PC9kaXY+ICA8L2Rpdj4gXHJcbiAgICBcclxuICAgICAgIGA7XHJcblxyXG4gICAgXHJcbiAgICAgIC8vIFRBU0tTXHJcbiAgICAgIGxldCBuZXdUYXNrSW5wdXQgPSB0YXNrSW5wdXRTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoXCIjbmV3dGFzay1pbnB1dC10ZXh0XCIpO1xyXG4gICAgICBsZXQgbmV3VGFza1R5cGUgPSB0YXNrSW5wdXRTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoXCIjbmV3dGFzay10eXBlXCIpO1xyXG4gICAgICBsZXQgbmV3VGFza0R1ZURhdGUgPSB0YXNrSW5wdXRTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoXCIjbmV3dGFzay1kdWVkYXRlXCIpO1xyXG4gICAgICBsZXQgbmV3VGFza1ByaW9yaXR5ID0gdGFza0lucHV0U2VjdGlvbi5xdWVyeVNlbGVjdG9yKFwiI25ld3Rhc2stcHJpb3JpdHlcIik7XHJcbiAgICAgIGxldCBzYXZlTmV3VGFza0J1dHRvbiA9IHRhc2tJbnB1dFNlY3Rpb24ucXVlcnlTZWxlY3RvcihcIiNzYXZlLW5ld3Rhc2tcIik7XHJcblxyXG5cclxuICAgICAgLy9OT1RFU1xyXG4gICAgICBsZXQgbmV3Tm90ZUlucHV0ID0gcHJvamVjdENvbnRlbnQucXVlcnlTZWxlY3RvcihcIiNub3Rlcy10ZXh0YXJlYVwiKVxyXG4gICAgICBsZXQgbmV3Tm90ZVR5cGUgPSBwcm9qZWN0Q29udGVudC5xdWVyeVNlbGVjdG9yKFwiI25ld25vdGUtdHlwZVwiKTtcclxuICAgICAgbGV0IHNhdmVOZXdOb3RlQnV0dG9uID0gcHJvamVjdENvbnRlbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlLW5ld25vdGVcIik7XHJcbiAgICAgIFxyXG5cclxuXHJcbiAgXHJcblxyXG5cclxuICAgICAgcHJvamVjdFBhZ2VUYXNrcy5hcHBlbmRDaGlsZCh0YXNrSW5wdXRTZWN0aW9uKTtcclxuICAgICAgcHJvamVjdFBhZ2VUYXNrcy5hcHBlbmRDaGlsZChwcm9qZWN0VGFza3NDb250YWluZXIpO1xyXG5cclxuXHJcblxyXG4gICAgICAvLyBUQVNLIEFERElORyBUTyBQUk9KRUNUXHJcbiAgICAgIHNhdmVOZXdUYXNrQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gVmFsaWRhdGUgZm9ybSBmaWVsZHNcclxuICAgICAgICBpZiAoIW5ld1Rhc2tJbnB1dC52YWx1ZS50cmltKCkpIHtcclxuICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgdGFzayBuYW1lLlwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbmV3VGFza0R1ZURhdGUudmFsdWUpIHtcclxuICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBhIGR1ZSBkYXRlLlwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbmV3VGFza1ByaW9yaXR5LnZhbHVlKSB7XHJcbiAgICAgICAgICBhbGVydChcIlBsZWFzZSBzZWxlY3QgYSBwcmlvcml0eS5cIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBhbGwgZmllbGRzIGFyZSB2YWxpZCwgcHJvY2VlZCB3aXRoIGNyZWF0aW5nIHRoZSB0YXNrXHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3VGFza0lucHV0LnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYXNrRHVlRGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3VGFza1ByaW9yaXR5LnZhbHVlKTtcclxuICAgICAgICBsZXQgbmV3VGFza09iamVjdCA9IGNyZWF0ZVRhc2soXHJcbiAgICAgICAgICBuZXdUYXNrSW5wdXQudmFsdWUsXHJcbiAgICAgICAgICBuZXdUYXNrVHlwZS52YWx1ZSxcclxuICAgICAgICAgIFwiaW5jb21wbGV0ZVwiLFxyXG4gICAgICAgICAgbmV3VGFza0R1ZURhdGUudmFsdWUsXHJcbiAgICAgICAgICBuZXdUYXNrUHJpb3JpdHkudmFsdWVcclxuICAgICAgICApO1xyXG4gICAgICAgIHByb2plY3RzW2ldLnRhc2tzLnB1c2gobmV3VGFza09iamVjdCk7XHJcblxyXG4gICAgICAgIHVwZGF0ZVN0b3JhZ2UoKTtcclxuICAgICAgICBsb2FkU2VsZWN0ZWRQcm9qZWN0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgICAvLyBOT1RFIEFERElORyBUTyBQUk9KRUNUXHJcbiAgICAgICAgc2F2ZU5ld05vdGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgIC8vIFZhbGlkYXRlIGZvcm0gZmllbGRzXHJcbiAgICAgICAgICBpZiAoIW5ld05vdGVJbnB1dC52YWx1ZS50cmltKCkpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2Ugd3JpdGUgYSBub3RlLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICBcclxuICBcclxuICAgICAgICAgIC8vIElmIHRoZSBub3RlIGZpZWxkIGlzIHZhbGlkLCBwcm9jZWVkIHdpdGggY3JlYXRpbmcgdGhlIHRhc2tcclxuICAgICAgICAgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhuZXdOb3RlSW5wdXQudmFsdWUpO1xyXG5cclxuICAgICAgICAgIGxldCBuZXdUYXNrT2JqZWN0ID0gY3JlYXRlVGFzayhcclxuICAgICAgICAgICAgbmV3Tm90ZUlucHV0LnZhbHVlLFxyXG4gICAgICAgICAgICBuZXdOb3RlVHlwZS52YWx1ZSxcclxuICAgICAgICAgICAgXCJcIixcclxuICAgICAgICAgICAgXCJcIixcclxuICAgICAgICAgICAgXCJcIixcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBwcm9qZWN0c1tpXS50YXNrcy5wdXNoKG5ld1Rhc2tPYmplY3QpO1xyXG4gIFxyXG4gICAgICAgICAgdXBkYXRlU3RvcmFnZSgpO1xyXG4gICAgICAgICAgbG9hZFNlbGVjdGVkUHJvamVjdCgpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAvLyBUQVNLUyBTVFJVQ1RVUkVcclxuICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbaV0udGFza3MpO1xyXG4gICAgICAvLyBQUk9KRUNUIFRBU0sgTE9BRElOR1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3RzW2ldLnRhc2tzLmxlbmd0aDsgaisrKSB7XHJcblxyXG4gICAgICAgIGlmIChwcm9qZWN0c1tpXS50YXNrc1tqXS50eXBlID09IFwidGFza1wiKXtcclxuXHJcbiAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBgXHJcbiAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stdGV4dFwiPiR7cHJvamVjdHNbaV0udGFza3Nbal0ubmFtZX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9IFwiIHRhc2stb3B0aW9uc1wiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiAke1xyXG4gICAgICAgICAgICBwcm9qZWN0c1tpXS50YXNrc1tqXS5zdGF0dXMgPT0gXCJkb25lXCIgPyBcImNoZWNrZWRcIiA6IFwiXCJcclxuICAgICAgICAgIH0+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgZGVsZXRlLXRhc2tcIj5kZWxldGU8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICBgO1xyXG4gIFxyXG4gICAgICAgICAgLy8gREVMRVRFIFRBU0sgRlJPTSBQUk9KRUNUXHJcbiAgXHJcbiAgICAgICAgICBsZXQgZGVsZXRlVGFza0J1dHRvbiA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS10YXNrXCIpO1xyXG4gICAgICAgICAgZGVsZXRlVGFza0J1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0c1tpXS50YXNrcy5zcGxpY2UoaiwgMSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2ldLnRhc2tzKTtcclxuICAgICAgICAgICAgdXBkYXRlU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICBsb2FkU2VsZWN0ZWRQcm9qZWN0KCk7XHJcbiAgICAgICAgICB9O1xyXG4gIFxyXG4gICAgICAgICAgbGV0IHRhc2tDaGVja2JveCA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiLnRhc2stb3B0aW9ucz4uY2hlY2tib3hcIik7XHJcbiAgICAgICAgICB0YXNrQ2hlY2tib3gub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb2plY3RzW2ldLnRhc2tzW2pdLnN0YXR1cyA9PSBcImluY29tcGxldGVcIikge1xyXG4gICAgICAgICAgICAgIHByb2plY3RzW2ldLnRhc2tzW2pdLnN0YXR1cyA9IFwiZG9uZVwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb2plY3RzW2ldLnRhc2tzW2pdLnN0YXR1cyA9PSBcImRvbmVcIikge1xyXG4gICAgICAgICAgICAgIHByb2plY3RzW2ldLnRhc2tzW2pdLnN0YXR1cyA9IFwiaW5jb21wbGV0ZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2ldLnRhc2tzKTtcclxuICAgICAgICAgICAgdXBkYXRlU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgU3RhdHVzIG9mIHRhc2s6ICR7cHJvamVjdHNbaV0udGFza3Nbal0ubmFtZX0gY2hhbmdlZGApO1xyXG4gICAgICAgICAgfTtcclxuICBcclxuICAgICAgICAgIHByb2plY3RUYXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0c1tpXS50YXNrc1tqXS50eXBlID09IFwibm90ZVwiKXtcclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay10ZXh0XCI+JHtwcm9qZWN0c1tpXS50YXNrc1tqXS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0gXCIgbm90ZS1vcHRpb25zXCI+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGRlbGV0ZS10YXNrXCI+ZGVsZXRlPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgYDtcclxuICBcclxuICAgICAgICAgIC8vIERFTEVURSBUQVNLIEZST00gUFJPSkVDVFxyXG4gIFxyXG4gICAgICAgICAgbGV0IGRlbGV0ZVRhc2tCdXR0b24gPSBkaXYucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtdGFza1wiKTtcclxuICAgICAgICAgIGRlbGV0ZVRhc2tCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdHNbaV0udGFza3Muc3BsaWNlKGosIDEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1tpXS50YXNrcyk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgbG9hZFNlbGVjdGVkUHJvamVjdCgpO1xyXG4gICAgICAgICAgfTtcclxuICBcclxuICAgICAgIFxyXG4gIFxyXG4gICAgICAgICAgcHJvamVjdE5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHByb2plY3RDb250ZW50UGFnZS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcblxyXG4gICAgICBsZXQgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IHByb2plY3RDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLXByb2plY3RcIik7XHJcbiAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gICAgICAgIHVwZGF0ZVN0b3JhZ2UoKTtcclxuICAgICAgICBcclxuICAgICAgICBob21lTWVudS5jbGljaygpO1xyXG4gICAgICAgIGxvYWRQcm9qZWN0cygpO1xyXG4gICAgICB9O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG4gICAgLy9jbGlja2luZyBvbiBwcm9qZWN0XHJcbiAgICBsaS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBsb2FkU2VsZWN0ZWRQcm9qZWN0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxpLmlubmVySFRNTCA9IHByb2plY3RzW2ldLm5hbWU7XHJcbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHNbaV0pO1xyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIGAgXCJ0aGUgaWQgb2YgdGhlIHByb2plY3QgaXMgXCIgJHtpfSBcImFuZCBcIiAgJHtwcm9qZWN0c1tpXS5uYW1lfWBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImNsYXNzIHRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUsIHN0YXR1cywgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnR5cGU9IHR5cGU7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBzYXlIZWxsbygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVsbG8sIG15IG5hbWUgaXMgXCIgKyB0aGlzLm5hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sobmFtZSwgdHlwZSwgc3RhdHVzLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gIFxyXG4gIGxldCBuZXdUYXNrT2JqZWN0ID0gbmV3IHRhc2sobmFtZSwgdHlwZSwgc3RhdHVzLCBkdWVEYXRlLCBwcmlvcml0eSlcclxuICBcclxuICByZXR1cm4gbmV3VGFza09iamVjdDtcclxufVxyXG4gXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBsb2FkUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcblxyXG4vLyAgaW1wb3J0IHByb2plY3RzIGZyb20gJy4vcHJvamVjdC5qcydcclxuXHJcbmxldCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtcHJvamVjdFwiKTtcclxuXHJcbmNyZWF0ZVByb2plY3RCdXR0b24ub25jbGljayA9IChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG5cclxuICBjcmVhdGVQcm9qZWN0KCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==