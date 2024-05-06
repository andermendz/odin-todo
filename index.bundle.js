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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inter&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\");\r\n\r\n/* TODO: ADD OVERFLOW ON PROJECT TASKS */\r\n:root {\r\n  font-size: 14px;\r\n  font-family: \"Inter\", sans-serif;\r\n  --base-color: #f8f9fa;\r\n  --primary-color: #f5f5f5;\r\n  --secondary-color: #e9ecef;\r\n  --third-color: #dee2e6;\r\n  --hover-color: #eeeff2;\r\n}\r\n\r\nul,\r\nbody {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\n#global-container {\r\n  background-color: var(--base-color);\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-rows: 6rem 1fr;\r\n  grid-template-columns: 1fr;\r\n}\r\n\r\n#header {\r\n  grid-row: 1/2;\r\n  grid-column: 1/3;\r\n\r\n  display: grid;\r\n  grid-template-columns: 20rem 1fr;\r\n  gap: 1rem;\r\n  align-items: center;\r\n\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n  width: 10rem;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  padding: 0.8rem;\r\n  border-radius: 1rem;\r\n  justify-self: center;\r\n\r\n  background-color: var(--base-color);\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n.logo:hover {\r\n  transform: scale(1.02);\r\n}\r\n\r\n.logo > .material-symbols-outlined {\r\n  font-size: 2.4rem;\r\n  font-weight: 800;\r\n}\r\n\r\n.searchbar-content {\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: var(--base-color);\r\n\r\n  border-radius: 1rem;\r\n  border: 0.125rem solid var(--third-color);\r\n  justify-content: space-around;\r\n\r\n  height: 3rem;\r\n  width: 90%;\r\n  max-width: 24rem;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.searchbar-content > .material-symbols-outlined {\r\n  font-size: 2rem;\r\n}\r\n#searchbar-input {\r\n  width: 80%;\r\n  height: 90%;\r\n  border: 0px;\r\n  background-color: var(--base-color);\r\n  font-size: 1.2rem;\r\n  outline: none;\r\n}\r\n\r\n#sidebar {\r\n  grid-row: 1/2;\r\n  grid-column: 1/2;\r\n  display: flex;\r\n  flex-flow: column;\r\n  padding-top: 1rem;\r\n  gap: 1rem;\r\n\r\n  padding-inline: 1rem;\r\n}\r\n\r\n.sidebar-title {\r\n  text-align: center;\r\n  font-size: 1.4rem;\r\n  font-weight: 700;\r\n  background-color: var(--base-color);\r\n  border-radius: 1rem;\r\n\r\n  padding: 1rem;\r\n}\r\n\r\n.sidebar-basics {\r\n  background-color: var(--base-color);\r\n  border-radius: 1rem;\r\n\r\n  padding: 1rem;\r\n}\r\n\r\n\r\n.options-list > li > .material-symbols-outlined {\r\n  font-size: 2rem;\r\n}\r\n.options-list > li {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  font-size: 1rem;\r\n\r\n  padding: 0.6rem;\r\n  border: 0.15rem solid #e0e0e0;\r\n  background-color: var(--base-color);\r\n  border-radius: 1rem;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.options-list > li:hover {\r\n  transform: scale(1.01);\r\n\r\n  cursor: pointer;\r\n  background-color: var(--hover-color);\r\n}\r\n\r\n.sidebar-basics > ul {\r\n  display: flex;\r\n  flex-flow: column;\r\n  gap: 1rem;\r\n}\r\n.sidebar-projects {\r\n  background-color: var(--base-color);\r\n  border-radius: 1rem;\r\n\r\n  padding: 0.4rem;\r\n}\r\n\r\n.sidebar-projects > ul {\r\n  display: flex;\r\n  flex-flow: column;\r\n  gap: 0.8rem;\r\n  padding: 0.4rem;\r\n  height: 20rem;\r\n  overflow-y: auto;\r\n  scrollbar-width: thin;\r\n}\r\n\r\n.content-elements {\r\n  grid-row: 1/2;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  background-color: var(--base-color);\r\n  border-radius: 3rem;\r\n  padding: 2rem;\r\n  margin: 1rem;\r\n}\r\n\r\n.project-create {\r\n  display: flex;\r\n  flex-flow: column;\r\n\r\n  max-width: 40rem;\r\n  width: 90%;\r\n  padding: 1rem;\r\n  gap: 2rem;\r\n\r\n  border-radius: 1rem;\r\n}\r\n\r\n.project-content-elements {\r\n  width: 94%;\r\n  max-width: 40rem;\r\n  flex-flow: column;\r\n  padding: 1rem;\r\n  gap: 1rem;\r\n  background-color: var(--secondary-color);\r\n  border-radius: 1rem;\r\n}\r\n.project-content {\r\n  display: grid;\r\n  grid-template-rows: 10rem 1fr;\r\n  grid-template-columns: 40rem 1fr;\r\n\r\n  gap: 2rem;\r\n  height: 100%;\r\n  border-radius: 1rem;\r\n}\r\n\r\n#content {\r\n  grid-column: 1/2;\r\n  background-color: var(--secondary-color);\r\n  display: grid;\r\n  grid-template-columns: 20rem 1fr;\r\n}\r\n\r\n.project-details {\r\n  background-color: var(--secondary-color);\r\n  padding: 1rem;\r\n  border-radius: 1rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.project-title {\r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n}\r\n\r\n\r\n#project-info {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2rem;\r\n  grid-template-rows: 1fr 1fr;\r\n \r\n  flex-flow: row;\r\n  grid-column: 1/2;\r\n  grid-row: 1/2;\r\n}\r\n\r\n.project-details{\r\n  grid-column: 1/2;\r\n  \r\n  display: flex;\r\n  flex-flow: column;\r\n}\r\n.project-actions{\r\n  grid-column: 2/3;\r\n  grid-row: 2/3;\r\n}\r\n#project-tasks-form {\r\n  grid-column: 1/2;\r\n  grid-row: 2/3;\r\n\r\n  max-width: 40rem;\r\n\r\n  display: flex;\r\n  flex-flow: column;\r\n  padding: 1rem;\r\n  gap: 1rem;\r\n  background-color: var(--secondary-color);\r\n  border-radius: 1rem;\r\n}\r\n\r\n#project-tasks-container{\r\n\r\n  overflow: auto;\r\n\r\n  max-height: 24rem;\r\n  display: flex;\r\n  flex-flow: column;\r\n  padding: 1rem;\r\n  gap: 0.6rem;\r\n  background-color: var(--secondary-color);\r\n  border-radius: 1rem;\r\n}\r\n\r\n.notes-form-container{\r\n\r\n}\r\n\r\n#project-notes-section{\r\n \r\n  max-width: 80rem;\r\n  grid-column: 2/3;\r\n  grid-row: 1/3;\r\n}\r\n\r\n\r\n\r\n#project-notes-container{\r\n \r\n display: flex;\r\n flex-flow: column;\r\n gap: 1rem;\r\n}\r\n\r\n\r\ntextarea#notes-textarea{\r\n  padding: 1rem;\r\n  border-radius: 1rem;\r\n  border: 1px solid #ccc;\r\nresize: vertical;\r\n  width: 80%;\r\n  height: 5rem;\r\n\r\n}\r\n\r\n#project-notes{\r\n  display: flex;\r\n  gap: 2rem;\r\n max-width: 100%;\r\n overflow: auto;\r\n}\r\n\r\n.project-notes{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: var(--base-color);\r\n  padding: 0.6rem;\r\n  padding-inline: 1.2rem;\r\n  border-radius: 1rem;\r\n  height: 4rem;\r\n}\r\n\r\n.checkbox {\r\n  width: 20px;\r\n  height: 20px;\r\n  background-color: #ddd;\r\n  border: 1px solid #ccc;\r\n  border-radius: 3px;\r\n}\r\n#create-project {\r\n  align-self: center;\r\n  width: 80%;\r\n  height: 3rem;\r\n\r\n  background-color: var(--base-color);\r\n  border-radius: 0.6rem;\r\n  border: 0.15rem solid var(--secondary-color);\r\n  font-size: 1rem;\r\n}\r\n\r\n.creation-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.projects-form-elements {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.4rem;\r\n}\r\n.input {\r\n  padding-left: 1rem;\r\n  height: 3rem;\r\n  font-size: 1.2rem;\r\n  border-radius: 1rem;\r\n\r\n  border: 0.15rem solid var(--secondary-color);\r\n  outline: none;\r\n  transition: all 0.4s ease-in;\r\n}\r\n.project-content-elements-title {\r\n  margin-inline-start: 1rem;\r\n  \r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n}\r\n\r\n.project-description {\r\n  margin-inline-start: 1rem;\r\n\r\n\r\n}\r\n\r\n.task-content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: var(--base-color);\r\n  padding: 0.6rem;\r\n  padding-inline: 1.2rem;\r\n  border-radius: 1rem;\r\n  height: 4rem;\r\n}\r\n\r\n.add-task {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  border-radius: 1rem;\r\n  padding: 0.6rem;\r\n  width: 2rem;\r\n\r\n  background-color: var(--base-color);\r\n  transition: all 0.4s ease-in;\r\n}\r\n\r\n.add-task > .material-symbols-outlined {\r\n  font-size: 2rem;\r\n}\r\n.add-task {\r\n  cursor: pointer;\r\n}\r\n\r\n.task-inputs {\r\n  display: flex;\r\n  flex-flow: column;\r\n  width: 100%;\r\n  gap: 0.4rem;\r\n}\r\n\r\n.newtask-input-container {\r\n  display: flex;\r\n\r\n  align-items: center;\r\n  justify-content: center;\r\n  justify-content: space-between;\r\n  gap: 3rem;\r\n}\r\n\r\n#newtask-input-text {\r\n  width: 100%;\r\n\r\n  height: 3rem;\r\n  font-size: 1.2rem;\r\n  padding-left: 1rem;\r\n  border-radius: 1rem;\r\n  border: 0.15rem solid var(--secondary-color);\r\n  outline: none;\r\n  transition: all 0.4s ease-in;\r\n}\r\n\r\n#newtask-duedate {\r\n  height: 3rem;\r\n  font-size: 1.2rem;\r\n  padding-inline: 1rem;\r\n  border-radius: 1rem;\r\n  border: 0.15rem solid var(--secondary-color);\r\n  outline: none;\r\n  transition: all 0.4s ease-in;\r\n}\r\n\r\n#newtask-priority {\r\n  width: 14rem;\r\n  height: 3rem;\r\n  font-size: 1.2rem;\r\n  padding-inline: 1rem;\r\n  border-radius: 1rem;\r\n  border: 0.15rem solid var(--secondary-color);\r\n  outline: none;\r\n  transition: all 0.4s ease-in;\r\n}\r\n.save-button {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 4rem;\r\n\r\n  width: 6rem;\r\n  border-radius: 1rem;\r\n\r\n  background-color: var(--base-color);\r\n  transition: all 0.4s ease-in;\r\n}\r\n\r\n.save-newtask > .material-symbols-outlined {\r\n  font-size: 2rem;\r\n}\r\n\r\n.task-text {\r\n}\r\n\r\n.task-options {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  border-radius: 1rem;\r\n  padding: 0.3rem;\r\n  padding-inline: 0.6rem;\r\n  background-color: var(--secondary-color);\r\n  transition: all 0.4s ease-in;\r\n}\r\n\r\n.task-options > input {\r\n}\r\n\r\n.task-options > .material-symbols-outlined {\r\n  font-size: 1.8rem;\r\n  padding: 0.5rem;\r\n  border-radius: 1rem;\r\n  cursor: pointer;\r\n  transition: all 0.4s ease-in;\r\n}\r\n\r\n.task-options > .material-symbols-outlined:hover {\r\n  transform: scale(1.02);\r\n  border-radius: 1rem;\r\n  background-color: #ffdfdf;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsbUhBQW1IO0FBQ25ILDRLQUE0SztBQUM1SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdGQUF3RixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxZQUFZLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsY0FBYyxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsTUFBTSxLQUFLLFlBQVksY0FBYyxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGNBQWMsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxXQUFXLFVBQVUsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFFBQVEsTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFL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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtEQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrREFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4QkFBOEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJCQUEyQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0Esc0NBQXNDLEdBQUcsVUFBVSxpQkFBaUI7QUFDcEU7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDcEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQWtDO0FBQ2xDO0FBQ0E7QUFDd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBYTtBQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogVE9ETzogQUREIE9WRVJGTE9XIE9OIFBST0pFQ1QgVEFTS1MgKi9cclxuOnJvb3Qge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xyXG4gIC0tYmFzZS1jb2xvcjogI2Y4ZjlmYTtcclxuICAtLXByaW1hcnktY29sb3I6ICNmNWY1ZjU7XHJcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNlOWVjZWY7XHJcbiAgLS10aGlyZC1jb2xvcjogI2RlZTJlNjtcclxuICAtLWhvdmVyLWNvbG9yOiAjZWVlZmYyO1xyXG59XHJcblxyXG51bCxcclxuYm9keSB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4jZ2xvYmFsLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNnJlbSAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gIGdyaWQtcm93OiAxLzI7XHJcbiAgZ3JpZC1jb2x1bW46IDEvMztcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcmVtIDFmcjtcclxuICBnYXA6IDFyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIHdpZHRoOiAxMHJlbTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiAwLjhyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmxvZ286aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbn1cclxuXHJcbi5sb2dvID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xyXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5zZWFyY2hiYXItY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJvcmRlcjogMC4xMjVyZW0gc29saWQgdmFyKC0tdGhpcmQtY29sb3IpO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICBoZWlnaHQ6IDNyZW07XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDI0cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc2VhcmNoYmFyLWNvbnRlbnQgPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbiNzZWFyY2hiYXItaW5wdXQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI3NpZGViYXIge1xyXG4gIGdyaWQtcm93OiAxLzI7XHJcbiAgZ3JpZC1jb2x1bW46IDEvMjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIGdhcDogMXJlbTtcclxuXHJcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XHJcbn1cclxuXHJcbi5zaWRlYmFyLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG5cclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uc2lkZWJhci1iYXNpY3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcblxyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcblxyXG4ub3B0aW9ucy1saXN0ID4gbGkgPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbi5vcHRpb25zLWxpc3QgPiBsaSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcblxyXG4gIHBhZGRpbmc6IDAuNnJlbTtcclxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgI2UwZTBlMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ub3B0aW9ucy1saXN0ID4gbGk6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWJhc2ljcyA+IHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG4uc2lkZWJhci1wcm9qZWN0cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuXHJcbiAgcGFkZGluZzogMC40cmVtO1xyXG59XHJcblxyXG4uc2lkZWJhci1wcm9qZWN0cyA+IHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGdhcDogMC44cmVtO1xyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxuICBoZWlnaHQ6IDIwcmVtO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG59XHJcblxyXG4uY29udGVudC1lbGVtZW50cyB7XHJcbiAgZ3JpZC1yb3c6IDEvMjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNyZWF0ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuXHJcbiAgbWF4LXdpZHRoOiA0MHJlbTtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZ2FwOiAycmVtO1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1jb250ZW50LWVsZW1lbnRzIHtcclxuICB3aWR0aDogOTQlO1xyXG4gIG1heC13aWR0aDogNDByZW07XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBnYXA6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcbi5wcm9qZWN0LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHJlbSAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHJlbSAxZnI7XHJcblxyXG4gIGdhcDogMnJlbTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gIGdyaWQtY29sdW1uOiAxLzI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjByZW0gMWZyO1xyXG59XHJcblxyXG4ucHJvamVjdC1kZXRhaWxzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcblxyXG4jcHJvamVjdC1pbmZvIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJyZW07XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gXHJcbiAgZmxleC1mbG93OiByb3c7XHJcbiAgZ3JpZC1jb2x1bW46IDEvMjtcclxuICBncmlkLXJvdzogMS8yO1xyXG59XHJcblxyXG4ucHJvamVjdC1kZXRhaWxze1xyXG4gIGdyaWQtY29sdW1uOiAxLzI7XHJcbiAgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxufVxyXG4ucHJvamVjdC1hY3Rpb25ze1xyXG4gIGdyaWQtY29sdW1uOiAyLzM7XHJcbiAgZ3JpZC1yb3c6IDIvMztcclxufVxyXG4jcHJvamVjdC10YXNrcy1mb3JtIHtcclxuICBncmlkLWNvbHVtbjogMS8yO1xyXG4gIGdyaWQtcm93OiAyLzM7XHJcblxyXG4gIG1heC13aWR0aDogNDByZW07XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBnYXA6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4jcHJvamVjdC10YXNrcy1jb250YWluZXJ7XHJcblxyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICBtYXgtaGVpZ2h0OiAyNHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZ2FwOiAwLjZyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4ubm90ZXMtZm9ybS1jb250YWluZXJ7XHJcblxyXG59XHJcblxyXG4jcHJvamVjdC1ub3Rlcy1zZWN0aW9ue1xyXG4gXHJcbiAgbWF4LXdpZHRoOiA4MHJlbTtcclxuICBncmlkLWNvbHVtbjogMi8zO1xyXG4gIGdyaWQtcm93OiAxLzM7XHJcbn1cclxuXHJcblxyXG5cclxuI3Byb2plY3Qtbm90ZXMtY29udGFpbmVye1xyXG4gXHJcbiBkaXNwbGF5OiBmbGV4O1xyXG4gZmxleC1mbG93OiBjb2x1bW47XHJcbiBnYXA6IDFyZW07XHJcbn1cclxuXHJcblxyXG50ZXh0YXJlYSNub3Rlcy10ZXh0YXJlYXtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxucmVzaXplOiB2ZXJ0aWNhbDtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogNXJlbTtcclxuXHJcbn1cclxuXHJcbiNwcm9qZWN0LW5vdGVze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAycmVtO1xyXG4gbWF4LXdpZHRoOiAxMDAlO1xyXG4gb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5wcm9qZWN0LW5vdGVze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XHJcbiAgcGFkZGluZzogMC42cmVtO1xyXG4gIHBhZGRpbmctaW5saW5lOiAxLjJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBoZWlnaHQ6IDRyZW07XHJcbn1cclxuXHJcbi5jaGVja2JveCB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuI2NyZWF0ZS1wcm9qZWN0IHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDNyZW07XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcclxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5jcmVhdGlvbi1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdHMtZm9ybS1lbGVtZW50cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC40cmVtO1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG5cclxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XHJcbn1cclxuLnByb2plY3QtY29udGVudC1lbGVtZW50cy10aXRsZSB7XHJcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMXJlbTtcclxuICBcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDFyZW07XHJcblxyXG5cclxufVxyXG5cclxuLnRhc2stY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcclxuICBwYWRkaW5nOiAwLjZyZW07XHJcbiAgcGFkZGluZy1pbmxpbmU6IDEuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxufVxyXG5cclxuLmFkZC10YXNrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgcGFkZGluZzogMC42cmVtO1xyXG4gIHdpZHRoOiAycmVtO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xyXG59XHJcblxyXG4uYWRkLXRhc2sgPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbi5hZGQtdGFzayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFzay1pbnB1dHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZ2FwOiAwLjRyZW07XHJcbn1cclxuXHJcbi5uZXd0YXNrLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAzcmVtO1xyXG59XHJcblxyXG4jbmV3dGFzay1pbnB1dC10ZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcclxufVxyXG5cclxuI25ld3Rhc2stZHVlZGF0ZSB7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluO1xyXG59XHJcblxyXG4jbmV3dGFzay1wcmlvcml0eSB7XHJcbiAgd2lkdGg6IDE0cmVtO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcclxufVxyXG4uc2F2ZS1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDRyZW07XHJcblxyXG4gIHdpZHRoOiA2cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5zYXZlLW5ld3Rhc2sgPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4udGFzay10ZXh0IHtcclxufVxyXG5cclxuLnRhc2stb3B0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDAuM3JlbTtcclxuICBwYWRkaW5nLWlubGluZTogMC42cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcclxufVxyXG5cclxuLnRhc2stb3B0aW9ucyA+IGlucHV0IHtcclxufVxyXG5cclxuLnRhc2stb3B0aW9ucyA+IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcclxufVxyXG5cclxuLnRhc2stb3B0aW9ucyA+IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGZkZjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBLHdDQUF3QztBQUN4QztFQUNFLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFF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NEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZOztFQUVaLFdBQVc7RUFDWCxtQkFBbUI7O0VBRW5CLG1DQUFtQztFQUNuQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qix3Q0FBd0M7RUFDeEMsNEJBQTRCO0FBQzlCOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXImZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwXFxcIik7XFxyXFxuXFxyXFxuLyogVE9ETzogQUREIE9WRVJGTE9XIE9OIFBST0pFQ1QgVEFTS1MgKi9cXHJcXG46cm9vdCB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIC0tYmFzZS1jb2xvcjogI2Y4ZjlmYTtcXHJcXG4gIC0tcHJpbWFyeS1jb2xvcjogI2Y1ZjVmNTtcXHJcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZTllY2VmO1xcclxcbiAgLS10aGlyZC1jb2xvcjogI2RlZTJlNjtcXHJcXG4gIC0taG92ZXItY29sb3I6ICNlZWVmZjI7XFxyXFxufVxcclxcblxcclxcbnVsLFxcclxcbmJvZHkge1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2dsb2JhbC1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNnJlbSAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICBncmlkLXJvdzogMS8yO1xcclxcbiAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcmVtIDFmcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgd2lkdGg6IDEwcmVtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5sb2dvOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxufVxcclxcblxcclxcbi5sb2dvID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcclxcbiAgZm9udC1zaXplOiAyLjRyZW07XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoYmFyLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcXHJcXG5cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkIHZhcigtLXRoaXJkLWNvbG9yKTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcblxcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1heC13aWR0aDogMjRyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaGJhci1jb250ZW50ID4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG4jc2VhcmNoYmFyLWlucHV0IHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIGJvcmRlcjogMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHtcXHJcXG4gIGdyaWQtcm93OiAxLzI7XFxyXFxuICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuXFxyXFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItdGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcblxcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItYmFzaWNzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5vcHRpb25zLWxpc3QgPiBsaSA+IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuLm9wdGlvbnMtbGlzdCA+IGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcblxcclxcbiAgcGFkZGluZzogMC42cmVtO1xcclxcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkICNlMGUwZTA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbnMtbGlzdCA+IGxpOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxyXFxuXFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyLWJhc2ljcyA+IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuLnNpZGViYXItcHJvamVjdHMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcblxcclxcbiAgcGFkZGluZzogMC40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci1wcm9qZWN0cyA+IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIGdhcDogMC44cmVtO1xcclxcbiAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgaGVpZ2h0OiAyMHJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWVsZW1lbnRzIHtcXHJcXG4gIGdyaWQtcm93OiAxLzI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNyZWF0ZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuXFxyXFxuICBtYXgtd2lkdGg6IDQwcmVtO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuXFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250ZW50LWVsZW1lbnRzIHtcXHJcXG4gIHdpZHRoOiA5NCU7XFxyXFxuICBtYXgtd2lkdGg6IDQwcmVtO1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcbi5wcm9qZWN0LWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTByZW0gMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHJlbSAxZnI7XFxyXFxuXFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcmVtIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGV0YWlscyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jcHJvamVjdC1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAycmVtO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiBcXHJcXG4gIGZsZXgtZmxvdzogcm93O1xcclxcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXHJcXG4gIGdyaWQtcm93OiAxLzI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRldGFpbHN7XFxyXFxuICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxufVxcclxcbi5wcm9qZWN0LWFjdGlvbnN7XFxyXFxuICBncmlkLWNvbHVtbjogMi8zO1xcclxcbiAgZ3JpZC1yb3c6IDIvMztcXHJcXG59XFxyXFxuI3Byb2plY3QtdGFza3MtZm9ybSB7XFxyXFxuICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgZ3JpZC1yb3c6IDIvMztcXHJcXG5cXHJcXG4gIG1heC13aWR0aDogNDByZW07XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXRhc2tzLWNvbnRhaW5lcntcXHJcXG5cXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcblxcclxcbiAgbWF4LWhlaWdodDogMjRyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZ2FwOiAwLjZyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGVzLWZvcm0tY29udGFpbmVye1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1ub3Rlcy1zZWN0aW9ue1xcclxcbiBcXHJcXG4gIG1heC13aWR0aDogODByZW07XFxyXFxuICBncmlkLWNvbHVtbjogMi8zO1xcclxcbiAgZ3JpZC1yb3c6IDEvMztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI3Byb2plY3Qtbm90ZXMtY29udGFpbmVye1xcclxcbiBcXHJcXG4gZGlzcGxheTogZmxleDtcXHJcXG4gZmxleC1mbG93OiBjb2x1bW47XFxyXFxuIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxudGV4dGFyZWEjbm90ZXMtdGV4dGFyZWF7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxucmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LW5vdGVze1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gbWF4LXdpZHRoOiAxMDAlO1xcclxcbiBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtbm90ZXN7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xcclxcbiAgcGFkZGluZzogMC42cmVtO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDEuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG4jY3JlYXRlLXByb2plY3Qge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xcclxcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGlvbi1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtZm9ybS1lbGVtZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC40cmVtO1xcclxcbn1cXHJcXG4uaW5wdXQge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcblxcclxcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcXHJcXG59XFxyXFxuLnByb2plY3QtY29udGVudC1lbGVtZW50cy10aXRsZSB7XFxyXFxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxcmVtO1xcclxcbiAgXFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxyXFxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxcmVtO1xcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAwLjZyZW07XFxyXFxuICBwYWRkaW5nLWlubGluZTogMS4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMC42cmVtO1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzayA+IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuLmFkZC10YXNrIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staW5wdXRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZ2FwOiAwLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXd0YXNrLWlucHV0LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3dGFzay1pbnB1dC10ZXh0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuI25ld3Rhc2stZHVlZGF0ZSB7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbiNuZXd0YXNrLXByaW9yaXR5IHtcXHJcXG4gIHdpZHRoOiAxNHJlbTtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcXHJcXG59XFxyXFxuLnNhdmUtYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDRyZW07XFxyXFxuXFxyXFxuICB3aWR0aDogNnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5zYXZlLW5ld3Rhc2sgPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRleHQge1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1vcHRpb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAwLjZyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stb3B0aW9ucyA+IGlucHV0IHtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stb3B0aW9ucyA+IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi50YXNrLW9wdGlvbnMgPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmRmZGY7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi90YXNrc1wiO1xyXG5cclxuLy8gUFJPSkVDVCBPQkpFQ1QgREVDTEFSRURcclxuY2xhc3MgcHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIHRhc2tzKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xyXG4gIH1cclxuXHJcbiAgc2F5SGVsbG8oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvLCBteSBuYW1lIGlzIFwiICsgdGhpcy5uYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFRPRE86ICAgREVMRVRFIFBST0pFQ1RTLCBDSEFOR0UgTkFNRSxFVEMuIC8vIEZPUk1TIFZBTElEQVRJT04sIFNFUEFSQVRFIFBST0pFQ1QgVEFTS1MgQU5EIE5PVEVTXHJcblxyXG4vL01BSU4gRE9DVU1FTlQgRUxFTUVOVFNcclxubGV0IGhvbWVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLW1lbnVcIik7XHJcblxyXG5sZXQgcHJvamVjdENyZWF0ZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY3JlYXRlXCIpO1xyXG5sZXQgcHJvamVjdENvbnRlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRlbnRcIik7XHJcblxyXG4vLyBERUNMQVJFUyBTVE9SQUdFIFZBUklBQkxFXHJcbmxldCBwcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNTdG9yYWdlXCIpXHJcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNTdG9yYWdlXCIpKVxyXG4gIDogW107XHJcblxyXG4vLyBVUERBVEUgU1RPUkFHRSBGVU5DVElPTlxyXG5mdW5jdGlvbiB1cGRhdGVTdG9yYWdlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbn1cclxuXHJcbmxvYWRQcm9qZWN0cygpO1xyXG5cclxuLy8gQ1JFQVRFIFBST0pFQ1QgRlVOQ1RJT05cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XHJcbiAgbGV0IHByb2plY3RJbnB1dE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XHJcbiAgbGV0IHByb2plY3RJbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcclxuICBsZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWZvcm1cIik7XHJcblxyXG4gIGlmICghcHJvamVjdElucHV0TmFtZS52YWx1ZS50cmltKCkpe1xyXG4gICAgYWxlcnQoXCJTZXQgYSBuYW1lIGZvciB5b3VyIHByb2plY3RcIilcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgaWYgKCFwcm9qZWN0SW5wdXREZXNjcmlwdGlvbi52YWx1ZS50cmltKCkpe1xyXG4gICAgYWxlcnQoXCJTZXQgYSBkZXNjcmlwdGlvbiBmb3IgeW91ciBQcm9qZWN0XCIpXHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgbGV0IG5hbWUgPSBwcm9qZWN0SW5wdXROYW1lLnZhbHVlO1xyXG4gIGxldCBkZXNjcmlwdGlvbiA9IHByb2plY3RJbnB1dERlc2NyaXB0aW9uLnZhbHVlO1xyXG4gIGxldCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QobmFtZSwgZGVzY3JpcHRpb24sIFtdKTtcclxuICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gIHVwZGF0ZVN0b3JhZ2UoKTtcclxuICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG5cclxuICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xyXG5cclxuICBsb2FkUHJvamVjdHMoKTtcclxufVxyXG5cclxuLy8gUFJPSkVDVFMgTE9BRElOR1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3RzKCkge1xyXG4gIGxldCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWxpc3RcIik7XHJcbiAgcHJvamVjdHNMaXN0LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGZ1bmN0aW9uIGxvYWRTZWxlY3RlZFByb2plY3QoKSB7XHJcbiAgICAgIC8vIERFQ0xBUkVTIFBST0pFQ1QgU0VDVElPTlxyXG4gICAgICBsZXQgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGVudFwiKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGNsZWFuUHJvamVjdEluZm8oKSB7XHJcbiAgICAgICAgcHJvamVjdENvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHJvamVjdENyZWF0ZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBjbGVhblByb2plY3RJbmZvKCk7XHJcblxyXG4gICAgICBwcm9qZWN0Q29udGVudC5pbm5lckhUTUwgPSBgICBcclxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1jb250ZW50LWVsZW1lbnRzXCIgaWQ9XCJwcm9qZWN0LWluZm9cIj5cclxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZXRhaWxzXCI+XHJcbiAgPGRpdiBjbGFzcz1cInByb2plY3QtY29udGVudC1lbGVtZW50cy10aXRsZVwiPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiBcclxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1hY3Rpb25zXCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGRlbGV0ZS1wcm9qZWN0XCI+ZGVsZXRlPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWNvbnRlbnQtZWxlbWVudHNcIiBpZD1cInByb2plY3QtdGFza3NcIj5cclxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1jb250ZW50LWVsZW1lbnRzXCIgaWQ9XCJwcm9qZWN0LXRhc2tzLWZvcm1cIj5cclxuXHJcbiAgPC9kaXY+IFxyXG4gIFxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWNvbnRlbnQtZWxlbWVudHNcIiBpZD1cInByb2plY3QtdGFza3MtY29udGFpbmVyXCIgPlxyXG4gIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1jb250ZW50LWVsZW1lbnRzXCIgaWQ9XCJwcm9qZWN0LW5vdGVzLXNlY3Rpb25cIj5cclxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1jb250ZW50LWVsZW1lbnRzLXRpdGxlXCI+Tm90ZXM8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1jb250ZW50LWVsZW1lbnRzXCIgaWQ9XCJwcm9qZWN0LW5vdGVzXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm5vdGVzLWZvcm0tY29udGFpbmVyXCI+XHJcbiAgPHRleHRhcmVhIG5hbWU9XCJub3Rlcy10ZXh0XCIgaWQ9XCJub3Rlcy10ZXh0YXJlYVwiPjwvdGV4dGFyZWE+XHJcbiAgPGlucHV0IGlkPVwibmV3bm90ZS10eXBlXCIgIHZhbHVlPVwibm90ZVwiIHJlcXVpcmVkIGhpZGRlbj5cclxuICA8ZGl2IGNsYXNzPVwic2F2ZS1idXR0b25cIiBpZD1cInNhdmUtbmV3bm90ZVwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+c2F2ZTwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICBcclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBpZD1cInByb2plY3Qtbm90ZXMtY29udGFpbmVyXCI+XHJcbiAgXHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuIFxyXG5cclxuIFxyXG5cclxuICA8L2Rpdj5cclxuYDtcclxuICAgICAgLy8gSE9NRSBNRU5VIEZVTkNUSU9OU1xyXG5cclxuICAgICAgaG9tZU1lbnUub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBwcm9qZWN0Q3JlYXRlU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgY2xlYW5Qcm9qZWN0SW5mbygpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGV0IHByb2plY3RQYWdlVGl0bGUgPSBwcm9qZWN0Q29udGVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLnByb2plY3QtY29udGVudC1lbGVtZW50cy10aXRsZVwiXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBwcm9qZWN0UGFnZURlc2NyaXB0aW9uID0gcHJvamVjdENvbnRlbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5wcm9qZWN0LWRlc2NyaXB0aW9uXCJcclxuICAgICAgKTtcclxuICAgICAgbGV0IHByb2plY3RQYWdlVGFza3MgPSBwcm9qZWN0Q29udGVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiI3Byb2plY3QtdGFza3MtZm9ybVwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBsZXQgcHJvamVjdFRhc2tzQ29udGFpbmVyID0gcHJvamVjdENvbnRlbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIiNwcm9qZWN0LXRhc2tzLWNvbnRhaW5lclwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBsZXQgcHJvamVjdE5vdGVzQ29udGFpbmVyID0gcHJvamVjdENvbnRlbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIiNwcm9qZWN0LW5vdGVzLWNvbnRhaW5lclwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBwcm9qZWN0UGFnZVRpdGxlLmlubmVySFRNTCA9IHByb2plY3RzW2ldLm5hbWU7XHJcbiAgICAgIHByb2plY3RQYWdlRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gcHJvamVjdHNbaV0uZGVzY3JpcHRpb247XHJcbiAgICAgIHByb2plY3RQYWdlVGFza3MuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGxpLmlubmVySFRNTCk7XHJcblxyXG4gICAgICAvLyBUQVNLIElOUFVUIFNFQ1RJT05cclxuICAgICAgbGV0IHRhc2tJbnB1dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICB0YXNrSW5wdXRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJuZXd0YXNrLWlucHV0LWNvbnRhaW5lclwiKTtcclxuICAgICAgdGFza0lucHV0U2VjdGlvbi5pbm5lckhUTUwgPSBgIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1pbnB1dHNcIj4gIFxyXG4gICAgIFxyXG4gICAgICAgPGlucHV0IGlkPVwibmV3dGFzay1pbnB1dC10ZXh0XCIgdHlwZT1cInRleHRcIiByZXF1aXJlZD5cclxuICAgICAgIDxpbnB1dCBpZD1cIm5ld3Rhc2stdHlwZVwiICB2YWx1ZT1cInRhc2tcIiByZXF1aXJlZCBoaWRkZW4+XHJcbiAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgIDxpbnB1dCBpZD1cIm5ld3Rhc2stZHVlZGF0ZVwiIHR5cGU9XCJkYXRlXCIgcmVxdWlyZWQ+XHJcbiAgICAgIFxyXG5cclxuICAgICAgIDxzZWxlY3QgY2xhc3M9XCJwcmlvcml0eS1zZWxlY3RvclwibmFtZT1cInByaW9yaXR5XCIgaWQ9XCJuZXd0YXNrLXByaW9yaXR5XCIgcmVxdWlyZWQ+XHJcbiAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQgZGlzYWJsZWQ+IFNlbGVjdCBBIFByaW9yaXR5IDwvb3B0aW9uPlxyXG4gICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3JpdGljYWxcIj5Dcml0aWNhbCBQcmlvcml0eTwvb3B0aW9uPlxyXG4gICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2ggUHJpb3JpdHk8L29wdGlvbj5cclxuICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bSBQcmlvcml0eTwvb3B0aW9uPlxyXG4gICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93IFByaW9yaXR5PC9vcHRpb24+XHJcbiAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub24tcHJpb3JpdHlcIj5Ob3QgQSBQcmlvcml0eTwvb3B0aW9uPlxyXG4gICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gXHJcbiAgICAgICA8ZGl2IGNsYXNzPVwic2F2ZS1idXR0b25cIiBpZD1cInNhdmUtbmV3dGFza1wiPiA8ZGl2PiA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cclxuICAgICAgIHNhdmVcclxuICAgICAgIDwvc3Bhbj48L2Rpdj4gIDwvZGl2PiBcclxuICAgIFxyXG4gICAgICAgYDtcclxuXHJcbiAgICBcclxuICAgICAgLy8gVEFTS1NcclxuICAgICAgbGV0IG5ld1Rhc2tJbnB1dCA9IHRhc2tJbnB1dFNlY3Rpb24ucXVlcnlTZWxlY3RvcihcIiNuZXd0YXNrLWlucHV0LXRleHRcIik7XHJcbiAgICAgIGxldCBuZXdUYXNrVHlwZSA9IHRhc2tJbnB1dFNlY3Rpb24ucXVlcnlTZWxlY3RvcihcIiNuZXd0YXNrLXR5cGVcIik7XHJcbiAgICAgIGxldCBuZXdUYXNrRHVlRGF0ZSA9IHRhc2tJbnB1dFNlY3Rpb24ucXVlcnlTZWxlY3RvcihcIiNuZXd0YXNrLWR1ZWRhdGVcIik7XHJcbiAgICAgIGxldCBuZXdUYXNrUHJpb3JpdHkgPSB0YXNrSW5wdXRTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoXCIjbmV3dGFzay1wcmlvcml0eVwiKTtcclxuICAgICAgbGV0IHNhdmVOZXdUYXNrQnV0dG9uID0gdGFza0lucHV0U2VjdGlvbi5xdWVyeVNlbGVjdG9yKFwiI3NhdmUtbmV3dGFza1wiKTtcclxuXHJcblxyXG4gICAgICAvL05PVEVTXHJcbiAgICAgIGxldCBuZXdOb3RlSW5wdXQgPSBwcm9qZWN0Q29udGVudC5xdWVyeVNlbGVjdG9yKFwiI25vdGVzLXRleHRhcmVhXCIpXHJcbiAgICAgIGxldCBuZXdOb3RlVHlwZSA9IHByb2plY3RDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3bm90ZS10eXBlXCIpO1xyXG4gICAgICBsZXQgc2F2ZU5ld05vdGVCdXR0b24gPSBwcm9qZWN0Q29udGVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmUtbmV3bm90ZVwiKTtcclxuICAgICAgXHJcblxyXG5cclxuICBcclxuXHJcblxyXG4gICAgICBwcm9qZWN0UGFnZVRhc2tzLmFwcGVuZENoaWxkKHRhc2tJbnB1dFNlY3Rpb24pO1xyXG4gICAgICBwcm9qZWN0UGFnZVRhc2tzLmFwcGVuZENoaWxkKHByb2plY3RUYXNrc0NvbnRhaW5lcik7XHJcblxyXG5cclxuXHJcbiAgICAgIC8vIFRBU0sgQURESU5HIFRPIFBST0pFQ1RcclxuICAgICAgc2F2ZU5ld1Rhc2tCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAvLyBWYWxpZGF0ZSBmb3JtIGZpZWxkc1xyXG4gICAgICAgIGlmICghbmV3VGFza0lucHV0LnZhbHVlLnRyaW0oKSkge1xyXG4gICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB0YXNrIG5hbWUuXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFuZXdUYXNrRHVlRGF0ZS52YWx1ZSkge1xyXG4gICAgICAgICAgYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgZHVlIGRhdGUuXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFuZXdUYXNrUHJpb3JpdHkudmFsdWUpIHtcclxuICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBhIHByaW9yaXR5LlwiKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGFsbCBmaWVsZHMgYXJlIHZhbGlkLCBwcm9jZWVkIHdpdGggY3JlYXRpbmcgdGhlIHRhc2tcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYXNrSW5wdXQudmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Rhc2tEdWVEYXRlLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYXNrUHJpb3JpdHkudmFsdWUpO1xyXG4gICAgICAgIGxldCBuZXdUYXNrT2JqZWN0ID0gY3JlYXRlVGFzayhcclxuICAgICAgICAgIG5ld1Rhc2tJbnB1dC52YWx1ZSxcclxuICAgICAgICAgIG5ld1Rhc2tUeXBlLnZhbHVlLFxyXG4gICAgICAgICAgXCJpbmNvbXBsZXRlXCIsXHJcbiAgICAgICAgICBuZXdUYXNrRHVlRGF0ZS52YWx1ZSxcclxuICAgICAgICAgIG5ld1Rhc2tQcmlvcml0eS52YWx1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcHJvamVjdHNbaV0udGFza3MucHVzaChuZXdUYXNrT2JqZWN0KTtcclxuXHJcbiAgICAgICAgdXBkYXRlU3RvcmFnZSgpO1xyXG4gICAgICAgIGxvYWRTZWxlY3RlZFByb2plY3QoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIE5PVEUgQURESU5HIFRPIFBST0pFQ1RcclxuICAgICAgICBzYXZlTmV3Tm90ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgLy8gVmFsaWRhdGUgZm9ybSBmaWVsZHNcclxuICAgICAgICAgIGlmICghbmV3Tm90ZUlucHV0LnZhbHVlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSB3cml0ZSBhIG5vdGUuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgICAgLy8gSWYgdGhlIG5vdGUgZmllbGQgaXMgdmFsaWQsIHByb2NlZWQgd2l0aCBjcmVhdGluZyB0aGUgdGFza1xyXG4gICAgICAgICBcclxuICAgICAgICAgIGNvbnNvbGUubG9nKG5ld05vdGVJbnB1dC52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgbGV0IG5ld1Rhc2tPYmplY3QgPSBjcmVhdGVUYXNrKFxyXG4gICAgICAgICAgICBuZXdOb3RlSW5wdXQudmFsdWUsXHJcbiAgICAgICAgICAgIG5ld05vdGVUeXBlLnZhbHVlLFxyXG4gICAgICAgICAgICBcIlwiLFxyXG4gICAgICAgICAgICBcIlwiLFxyXG4gICAgICAgICAgICBcIlwiLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHByb2plY3RzW2ldLnRhc2tzLnB1c2gobmV3VGFza09iamVjdCk7XHJcbiAgXHJcbiAgICAgICAgICB1cGRhdGVTdG9yYWdlKCk7XHJcbiAgICAgICAgICBsb2FkU2VsZWN0ZWRQcm9qZWN0KCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIC8vIFRBU0tTIFNUUlVDVFVSRVxyXG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1tpXS50YXNrcyk7XHJcbiAgICAgIC8vIFBST0pFQ1QgVEFTSyBMT0FESU5HXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdHNbaV0udGFza3MubGVuZ3RoOyBqKyspIHtcclxuXHJcbiAgICAgICAgaWYgKHByb2plY3RzW2ldLnRhc2tzW2pdLnR5cGUgPT0gXCJ0YXNrXCIpe1xyXG5cclxuICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgZGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay10ZXh0XCI+JHtwcm9qZWN0c1tpXS50YXNrc1tqXS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0gXCIgdGFzay1vcHRpb25zXCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2JveFwiICR7XHJcbiAgICAgICAgICAgIHByb2plY3RzW2ldLnRhc2tzW2pdLnN0YXR1cyA9PSBcImRvbmVcIiA/IFwiY2hlY2tlZFwiIDogXCJcIlxyXG4gICAgICAgICAgfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBkZWxldGUtdGFza1wiPmRlbGV0ZTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgIGA7XHJcbiAgXHJcbiAgICAgICAgICAvLyBERUxFVEUgVEFTSyBGUk9NIFBST0pFQ1RcclxuICBcclxuICAgICAgICAgIGxldCBkZWxldGVUYXNrQnV0dG9uID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLXRhc2tcIik7XHJcbiAgICAgICAgICBkZWxldGVUYXNrQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3RzW2ldLnRhc2tzLnNwbGljZShqLCAxKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbaV0udGFza3MpO1xyXG4gICAgICAgICAgICB1cGRhdGVTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgIGxvYWRTZWxlY3RlZFByb2plY3QoKTtcclxuICAgICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgICBsZXQgdGFza0NoZWNrYm94ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1vcHRpb25zPi5jaGVja2JveFwiKTtcclxuICAgICAgICAgIHRhc2tDaGVja2JveC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdHNbaV0udGFza3Nbal0uc3RhdHVzID09IFwiaW5jb21wbGV0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgcHJvamVjdHNbaV0udGFza3Nbal0uc3RhdHVzID0gXCJkb25lXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvamVjdHNbaV0udGFza3Nbal0uc3RhdHVzID09IFwiZG9uZVwiKSB7XHJcbiAgICAgICAgICAgICAgcHJvamVjdHNbaV0udGFza3Nbal0uc3RhdHVzID0gXCJpbmNvbXBsZXRlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbaV0udGFza3MpO1xyXG4gICAgICAgICAgICB1cGRhdGVTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTdGF0dXMgb2YgdGFzazogJHtwcm9qZWN0c1tpXS50YXNrc1tqXS5uYW1lfSBjaGFuZ2VkYCk7XHJcbiAgICAgICAgICB9O1xyXG4gIFxyXG4gICAgICAgICAgcHJvamVjdFRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHByb2plY3RzW2ldLnRhc2tzW2pdLnR5cGUgPT0gXCJub3RlXCIpe1xyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXRleHRcIj4ke3Byb2plY3RzW2ldLnRhc2tzW2pdLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSBcIiBub3RlLW9wdGlvbnNcIj5cclxuICAgICAgICAgXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgZGVsZXRlLXRhc2tcIj5kZWxldGU8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICBgO1xyXG4gIFxyXG4gICAgICAgICAgLy8gREVMRVRFIFRBU0sgRlJPTSBQUk9KRUNUXHJcbiAgXHJcbiAgICAgICAgICBsZXQgZGVsZXRlVGFza0J1dHRvbiA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS10YXNrXCIpO1xyXG4gICAgICAgICAgZGVsZXRlVGFza0J1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0c1tpXS50YXNrcy5zcGxpY2UoaiwgMSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2ldLnRhc2tzKTtcclxuICAgICAgICAgICAgdXBkYXRlU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICBsb2FkU2VsZWN0ZWRQcm9qZWN0KCk7XHJcbiAgICAgICAgICB9O1xyXG4gIFxyXG4gICAgICAgXHJcbiAgXHJcbiAgICAgICAgICBwcm9qZWN0Tm90ZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgcHJvamVjdENvbnRlbnRQYWdlLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcclxuXHJcbiAgICAgIGxldCBkZWxldGVQcm9qZWN0QnV0dG9uID0gcHJvamVjdENvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtcHJvamVjdFwiKTtcclxuICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgICAgICAgdXBkYXRlU3RvcmFnZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGhvbWVNZW51LmNsaWNrKCk7XHJcbiAgICAgICAgbG9hZFByb2plY3RzKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHJcbiAgICAvL2NsaWNraW5nIG9uIHByb2plY3RcclxuICAgIGxpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIGxvYWRTZWxlY3RlZFByb2plY3QoKTtcclxuICAgIH07XHJcblxyXG4gICAgbGkuaW5uZXJIVE1MID0gcHJvamVjdHNbaV0ubmFtZTtcclxuICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1tpXSk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgYCBcInRoZSBpZCBvZiB0aGUgcHJvamVjdCBpcyBcIiAke2l9IFwiYW5kIFwiICAke3Byb2plY3RzW2ldLm5hbWV9YFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiY2xhc3MgdGFzayB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgc3RhdHVzLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudHlwZT0gdHlwZTtcclxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcblxyXG4gIHNheUhlbGxvKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJoZWxsbywgbXkgbmFtZSBpcyBcIiArIHRoaXMubmFtZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhuYW1lLCB0eXBlLCBzdGF0dXMsIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgXHJcbiAgbGV0IG5ld1Rhc2tPYmplY3QgPSBuZXcgdGFzayhuYW1lLCB0eXBlLCBzdGF0dXMsIGR1ZURhdGUsIHByaW9yaXR5KVxyXG4gIFxyXG4gIHJldHVybiBuZXdUYXNrT2JqZWN0O1xyXG59XHJcbiBcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgbG9hZFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5cclxuLy8gIGltcG9ydCBwcm9qZWN0cyBmcm9tICcuL3Byb2plY3QuanMnXHJcblxyXG5sZXQgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLXByb2plY3RcIik7XHJcblxyXG5jcmVhdGVQcm9qZWN0QnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuXHJcbiAgY3JlYXRlUHJvamVjdCgpO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=