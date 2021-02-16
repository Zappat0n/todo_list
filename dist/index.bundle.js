/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _modules_models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/models/project */ \"./src/scripts/modules/models/project.js\");\n/* harmony import */ var _modules_db_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/db/storage */ \"./src/scripts/modules/db/storage.js\");\n/* harmony import */ var _modules_controller_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/controller/project */ \"./src/scripts/modules/controller/project.js\");\n/* harmony import */ var _modules_views_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/views/project */ \"./src/scripts/modules/views/project.js\");\n\n\n\n\n\nvar controller = (0,_modules_controller_project__WEBPACK_IMPORTED_MODULE_3__.default)((0,_modules_db_storage__WEBPACK_IMPORTED_MODULE_2__.loadData)());\n(0,_modules_views_project__WEBPACK_IMPORTED_MODULE_4__.default)().getUserInput(controller); // More Btns\n\nvar moreBtns = document.querySelectorAll('.todo__more');\nmoreBtns.forEach(function (btn) {\n  btn.addEventListener('click', function () {\n    btn.textContent = btn.textContent === 'More' ? 'Close' : 'More';\n    btn.nextElementSibling.classList.toggle('open');\n  });\n}); // Add Todo Btns\n\nvar addTodoBtns = document.querySelectorAll('.add-todo-btn');\naddTodoBtns.forEach(function (btn) {\n  btn.addEventListener('click', function () {\n    btn.textContent = btn.textContent === 'Add Todo' ? 'Close' : 'Add Todo';\n    btn.nextElementSibling.classList.toggle('open');\n  });\n}); // Add Project Btns\n\nvar addPrBtns = document.querySelectorAll('.add-project-btn');\naddPrBtns.forEach(function (btn) {\n  btn.addEventListener('click', function () {\n    btn.textContent = btn.textContent === 'Add Project' ? 'Close' : 'Add Project';\n    btn.nextElementSibling.classList.toggle('open');\n  });\n});\n\nvar openTab = function openTab(id) {\n  document.querySelectorAll('.project-tabs__item').forEach(function (tab) {\n    tab.classList.remove('active');\n  });\n  document.querySelectorAll('.project-container').forEach(function (item) {\n    item.classList.remove('active');\n  });\n  document.getElementById(id).classList.add('active');\n  document.querySelector(\"div[data-project='\".concat(id, \"']\")).classList.add('active');\n};\n\ndocument.querySelectorAll('.project-tabs__item').forEach(function (tab) {\n  tab.addEventListener('click', function (e) {\n    openTab(e.target.getAttribute('data-project'));\n  });\n});\ndocument.querySelector('.default-open').classList.add('active');\n\n//# sourceURL=webpack://my_todo_list/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/modules/controller/project.js":
/*!***************************************************!*\
  !*** ./src/scripts/modules/controller/project.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectController)\n/* harmony export */ });\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ \"./src/scripts/modules/models/project.js\");\n/* harmony import */ var _db_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/storage */ \"./src/scripts/modules/db/storage.js\");\n\n\n\nvar projectController = function projectController(projects) {\n  var createProject = function createProject(title, description) {\n    var project = new _models_project__WEBPACK_IMPORTED_MODULE_0__.default(title, description);\n    projects.push(project);\n    (0,_db_storage__WEBPACK_IMPORTED_MODULE_1__.saveData)(projects);\n    return project;\n  };\n\n  return {\n    createProject: createProject\n  };\n};\n\n\n\n//# sourceURL=webpack://my_todo_list/./src/scripts/modules/controller/project.js?");

/***/ }),

/***/ "./src/scripts/modules/db/storage.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/db/storage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadData\": () => (/* binding */ loadData),\n/* harmony export */   \"saveData\": () => (/* binding */ saveData)\n/* harmony export */ });\nvar loadData = function loadData() {\n  var storage = localStorage.getItem('projects');\n\n  try {\n    return storage ? JSON.parse(storage) : [];\n  } catch (ex) {\n    return [];\n  }\n};\n\nvar saveData = function saveData(projects) {\n  localStorage.setItem('projects', JSON.stringify(projects));\n};\n\n\n\n//# sourceURL=webpack://my_todo_list/./src/scripts/modules/db/storage.js?");

/***/ }),

/***/ "./src/scripts/modules/models/project.js":
/*!***********************************************!*\
  !*** ./src/scripts/modules/models/project.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Project = function Project(title, description) {\n  var todos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n\n  _classCallCheck(this, Project);\n\n  // eslint-disable-next-line no-undef\n  this.id = uuidv4();\n  this.title = title;\n  this.description = description;\n  this.todos = todos;\n};\n\n\n\n//# sourceURL=webpack://my_todo_list/./src/scripts/modules/models/project.js?");

/***/ }),

/***/ "./src/scripts/modules/views/project.js":
/*!**********************************************!*\
  !*** ./src/scripts/modules/views/project.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectView)\n/* harmony export */ });\nvar projectView = function projectView() {\n  var myCreateElement = function myCreateElement(el, className) {\n    var element = document.createElement(el);\n    element.classList.add(className);\n    return element;\n  };\n\n  var generateFormField = function generateFormField(labelName, type, inputName) {\n    var field = myCreateElement('div', 'form__field');\n    var label = myCreateElement('label');\n    label.textContent = labelName;\n    var input = document.createElement('input');\n    input.setAttribute('type', type);\n    input.setAttribute('name', inputName);\n    field.appendChild(label);\n    field.appendChild(input);\n    return field;\n  };\n\n  var generateBtn = function generateBtn(text) {\n    var button = myCreateElement('button', 'btn');\n    button.textContent = text;\n    return button;\n  };\n\n  var generateForm = function generateForm(todo, formClass) {\n    var form = document.createElement('form');\n    form.classList.add('form', formClass);\n    var title = generateFormField('Title', 'text', 'todoTitle');\n    var description = generateFormField('Description', 'text', 'todoDesc');\n    var dueDate = generateFormField('Due date', 'date', 'todoDue');\n    form.appendChild(title);\n    form.appendChild(description);\n    form.appendChild(dueDate);\n    form.appendChild(generateBtn('Save Todo'));\n\n    if (formClass === 'edit-todo-form') {\n      title.value = todo.title;\n      description.value = todo.description;\n      dueDate.value = todo.dueDate;\n    }\n\n    return form;\n  };\n\n  var generateTodo = function generateTodo(todo) {\n    var todoItem = myCreateElement('div', 'todo');\n    var todoRmBtn = document.createElement('button');\n    todoRmBtn.classList.add('todo__rmbtn', 'rmbtn');\n    var todoAtt = myCreateElement('div', 'todo__att');\n    var todoPriority = document.createElement('div');\n    todoPriority.classList.add('todo__priority', todo.priority);\n    todoPriority.textContent = todo.priority;\n    var todoLimit = myCreateElement('div', 'todo__limit');\n    var icon = myCreateElement('span', 'iconify');\n    icon.setAttribute('data-icon', 'ant-design:clock-circle-filled');\n    icon.setAttribute('data-inline', 'false');\n    var date = document.createElement('span');\n    date.textContent = todo.dueDate;\n    todoLimit.appendChild(icon);\n    todoLimit.appendChild(date);\n    todoAtt.appendChild(todoPriority);\n    todoAtt.appendChild(todoLimit);\n    var todoTitle = myCreateElement('h3', 'todo__title');\n    todoTitle.textContent = todo.title;\n    var todoMoreBtn = document.createElement('button');\n    todoMoreBtn.classList.add('todo__more', 'btn');\n    todoMoreBtn.textContent = 'More';\n    var todoDetail = myCreateElement('div', 'todo__detail');\n    var todoDesc = 'todo__detail'('p', 'todo__desc');\n    todoDesc.textContent = todo.description;\n    todoDetail.appendChild(todoDesc);\n    todoDetail.appendChild(generateForm(todo, 'edit-todo-form'));\n    todoItem.appendChild(todoRmBtn);\n    todoItem.appendChild(todoAtt);\n    todoItem.appendChild(todoDetail);\n  };\n\n  var generateProjectFooter = function generateProjectFooter() {\n    var prFooter = document.createElement('div');\n    var addTodoBtn = generateBtn('Add Todo');\n    addTodoBtn.classList.add('add-todo-btn');\n    var addTodoForm = generateForm(null, 'add-todo-form');\n    var prRmBtn = generateBtn('Remove Project');\n    prRmBtn.classList.add('project__rmbtn');\n    prFooter.appendChild(addTodoBtn);\n    prFooter.appendChild(addTodoForm);\n    prFooter.appendChild(prRmBtn);\n    return prFooter;\n  };\n\n  var generateTodos = function generateTodos(project, prTodos) {\n    if (project.todos.length > 0) {\n      project.todos.forEach(function (todo) {\n        prTodos.appendChild(generateTodo(todo));\n      });\n    }\n\n    prTodos.appendChild(generateProjectFooter());\n  };\n\n  var openTab = function openTab(project, tabItem) {\n    document.querySelectorAll('.project-tabs__item').forEach(function (tab) {\n      tab.classList.remove('active');\n    });\n    document.querySelectorAll('.project-container').forEach(function (item) {\n      item.classList.remove('active');\n    });\n    document.getElementById(project.id).classList.add('active');\n    tabItem.classList.add('active');\n  };\n\n  var generatePrTabs = function generatePrTabs(project) {\n    var tabsContainer = document.querySelector('.project-tabs');\n    var tabItem = myCreateElement('div', 'project-tabs__item');\n    tabItem.textContent = project.title;\n    tabsContainer.appendChild(tabItem);\n    tabItem.addEventListener('click', function (e) {\n      openTab(project, e.target);\n    });\n  };\n\n  var generateProject = function generateProject(project) {\n    generatePrTabs(project);\n    var mainRight = document.querySelector('.main__right');\n    var prContainer = myCreateElement('div', 'project-container');\n    prContainer.setAttribute('id', project.id);\n    var pr = myCreateElement('div', 'project');\n    var prItem = myCreateElement('div', 'project__item');\n    var prTitle = myCreateElement('h2', 'project__title');\n    prTitle.textContent = project.title;\n    var prDesc = myCreateElement('p', 'project__desc');\n    prDesc.textContent = project.description;\n    var prTodos = myCreateElement('div', 'project__todos');\n    mainRight.appendChild(prContainer);\n    prContainer.appendChild(pr);\n    pr.appendChild(prItem);\n    prItem.appendChild(prTitle);\n    prItem.appendChild(prDesc);\n    prItem.appendChild(prTodos);\n    generateTodos(project, prTodos);\n  };\n\n  var clearPrField = function clearPrField(el) {\n    el.prTitle.value = '';\n    el.prDesc.value = '';\n  };\n\n  var getUserInput = function getUserInput(controller) {\n    var formAddProject = document.querySelector('.add-project-form');\n    formAddProject.addEventListener('submit', function (e) {\n      e.preventDefault();\n      var title = e.target.elements.prTitle.value;\n      var description = e.target.elements.prDesc.value;\n      var newProject = controller.createProject(title, description);\n      clearPrField(e.target.elements);\n      generateProject(newProject);\n    });\n  };\n\n  return {\n    getUserInput: getUserInput\n  };\n};\n\n\n\n//# sourceURL=webpack://my_todo_list/./src/scripts/modules/views/project.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n}\\n\\nhtml {\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  box-sizing: border-box;\\n}\\n\\nul {\\n  list-style-type: none;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: #202020;\\n  transition: all 0.4s;\\n}\\na:hover {\\n  opacity: 0.8;\\n}\\n\\nimg {\\n  max-width: 100%;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n@media only screen and (min-width: 768px) {\\n  html {\\n    font-size: 62.5%;\\n  }\\n}\\n\\nbody {\\n  font-family: \\\"Nunito\\\", sans-serif;\\n  line-height: 1.5;\\n  font-size: 1.5rem;\\n  letter-spacing: 0.2px;\\n  color: #202020;\\n}\\n\\np {\\n  font-size: 1.5rem;\\n}\\n\\n.btn {\\n  padding: 0.6rem 2.4rem;\\n  border: 1px solid #202020;\\n  cursor: pointer;\\n  background: #202020;\\n  color: #fff;\\n  text-transform: uppercase;\\n  font-family: inherit;\\n  font-weight: bold;\\n  letter-spacing: 1px;\\n  font-size: 90%;\\n  border-radius: 3px;\\n  margin: 1rem auto;\\n  transition: all 0.4s;\\n}\\n.btn:hover {\\n  background: #fff;\\n  color: #202020;\\n}\\n.btn.add-todo-btn {\\n  background: #f14667;\\n  border-color: #f14667;\\n}\\n.btn.add-todo-btn:hover {\\n  background: #fff;\\n  color: #f14667;\\n}\\n\\n.rmbtn {\\n  cursor: pointer;\\n  outline: none;\\n  border: none;\\n  background: none;\\n  font-weight: bold;\\n  font-family: inherit;\\n  font-size: 130%;\\n}\\n\\n.header {\\n  width: 100%;\\n  background: #01d1b2;\\n  text-align: center;\\n  color: #fff;\\n}\\n\\n.footer {\\n  width: 100%;\\n  background: #f6f6f6;\\n  text-align: center;\\n  font-size: 90%;\\n  padding: 1rem 0;\\n}\\n\\n.main {\\n  min-height: 90vh;\\n  width: 94%;\\n  max-width: 120rem;\\n  margin: 1rem auto;\\n  display: flex;\\n}\\n.main__left {\\n  flex: 0 0 24rem;\\n}\\n.main__right {\\n  flex: 1;\\n}\\n\\n.form {\\n  background: #ffe089;\\n  width: 100%;\\n  max-width: 40rem;\\n  margin: 2rem 0;\\n  padding: 1.6rem;\\n  border-radius: 3px;\\n}\\n.form__field {\\n  margin-bottom: 0.6rem;\\n}\\n.form label {\\n  display: block;\\n  width: 100%;\\n}\\n.form input,\\n.form select,\\n.form textarea {\\n  display: block;\\n  width: 100%;\\n  padding: 0.4rem;\\n  font-family: inherit;\\n  color: #202020;\\n}\\n.form.add-project-form {\\n  width: 90%;\\n  padding: 1rem;\\n  display: none;\\n}\\n.form.add-project-form.open {\\n  display: block;\\n}\\n.form.edit-todo-form {\\n  margin: 2rem 0 0;\\n}\\n.form.add-todo-form {\\n  display: none;\\n}\\n.form.add-todo-form.open {\\n  display: block;\\n}\\n\\n.project-container {\\n  display: none;\\n}\\n.project-container.active {\\n  display: block;\\n}\\n\\n.project {\\n  position: relative;\\n}\\n.project__item {\\n  margin-bottom: 2rem;\\n}\\n.project__title {\\n  font-size: 3.4rem;\\n  margin-bottom: 1rem;\\n  word-break: break-all;\\n  line-height: 1.3;\\n}\\n.project__desc {\\n  margin-bottom: 1.6rem;\\n}\\n.project__rmbtn {\\n  background: #777;\\n  border-color: #777;\\n}\\n.project__rmbtn:hover {\\n  color: #777;\\n}\\n\\n.project-tabs {\\n  width: 90%;\\n}\\n.project-tabs__item {\\n  background: #f6f6f6;\\n  margin-bottom: 0.4rem;\\n  padding: 1rem 2rem;\\n  position: relative;\\n  word-break: break-all;\\n  line-height: 1.3;\\n  border-top-left-radius: 10rem;\\n  border-bottom-left-radius: 10rem;\\n  cursor: pointer;\\n}\\n.project-tabs__item span {\\n  display: block;\\n  max-width: 86%;\\n}\\n.project-tabs__item.active {\\n  border-bottom: 3px solid #3f8dd0;\\n  background: rgba(63, 141, 208, 0.5);\\n  font-weight: bold;\\n}\\n\\n.todo {\\n  position: relative;\\n  background: #f6f6f6;\\n  padding: 1rem;\\n}\\n.todo__rmbtn {\\n  position: absolute;\\n  top: 2.4rem;\\n  right: 2rem;\\n}\\n.todo__att {\\n  display: flex;\\n  align-items: center;\\n  margin-bottom: 0.4rem;\\n}\\n.todo__priority {\\n  background: #ccc;\\n  font-size: 1.2rem;\\n  padding: 0.2rem 0.8rem;\\n  border-radius: 3px;\\n  font-weight: bold;\\n  color: #fff;\\n  margin-right: 1rem;\\n}\\n.todo__priority.high {\\n  background: #f14667;\\n}\\n.todo__priority.middle {\\n  background: #4ac68e;\\n}\\n.todo__priority.low {\\n  background: #485fc7;\\n}\\n.todo__limit {\\n  font-size: 1.4rem;\\n  font-weight: bold;\\n  display: flex;\\n  align-items: center;\\n}\\n.todo__limit .iconify {\\n  margin-right: 0.4rem;\\n}\\n.todo__title {\\n  font-size: 2rem;\\n  display: block;\\n  max-width: 40rem;\\n  word-break: break-all;\\n}\\n.todo__more {\\n  position: absolute;\\n  top: 2.4rem;\\n  right: 4.6rem;\\n  margin: 0;\\n}\\n.todo__detail {\\n  display: none;\\n}\\n.todo__detail.open {\\n  display: block;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my_todo_list/./src/scss/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my_todo_list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://my_todo_list/./src/scss/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my_todo_list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;