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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --bg-color: #3f3f46;\n  --font-clr: #f3f4f6;\n  --bg-hover: #18181b;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  height: 100vh;\n  width: 100vw;\n  font-family:\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    \"Segoe UI\",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    \"Open Sans\",\n    \"Helvetica Neue\",\n    sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100%;\n  background-color: var(--bg-color);\n  overflow-x: hidden;\n  color: var(--font-clr);\n}\n\n.header {\n  margin: 30px 25px;\n}\n\n.today-weather,\n.forecast {\n  margin: 60px 25px;\n}\n\n.forecast {\n  margin-top: 70px;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.search-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 2px solid var(--font-clr);\n  width: fit-content;\n}\n\n.search-box input {\n  border: none;\n  background-color: var(--bg-color);\n  outline: none;\n  color: var(--font-clr);\n}\n\n.search-box input::placeholder {\n  color: var(--font-clr);\n}\n\n.search {\n  cursor: pointer;\n}\n\nimg[alt=\"search\"] {\n  height: 25px;\n  width: 25px;\n  transition: 0.4s;\n}\n\nimg[alt=\"search\"]:hover {\n  height: 30px;\n  width: 30px;\n  transition: 0.4s;\n}\n\nimg[alt=\"icon\"] {\n  height: 80px;\n  width: 80px;\n}\n\n.icon {\n  height: 50px;\n  width: 50px;\n}\n\n.temp-changer {\n  background-color: var(--bg-color);\n  border: 2px solid black;\n  cursor: pointer;\n  color: var(--font-clr);\n  font-size: 1.2rem;\n  font-weight: 600;\n  padding: 10px;\n  border-radius: 20px;\n  transition: 0.4s;\n}\n\n.temp-changer:hover,\n.temp-changer.active {\n  background-color: var(--bg-hover);\n  padding: 12px;\n  transition: 0.4s;\n}\n\n.today-weather {\n  display: flex;\n  justify-content: space-between;\n}\n\n.sideinfo div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.sideinfo div p:nth-child(2n) {\n  font-weight: 600;\n  font-size: 1.15rem;\n}\n\n.sideinfo div p:nth-child(2n + 1) {\n  font-size: 0.7rem;\n}\n\n.sideinfo div p:nth-child(3),\n.sideinfo div p:nth-child(5) {\n  margin-top: 15px;\n}\n\n.sideinfo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: fit-content;\n  gap: 8px;\n}\n\n.info p:first-child {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n\n#location-name {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n\n.icon-and-temp {\n  display: flex;\n  align-items: center;\n}\n\n.icon-and-temp p {\n  font-size: 1.8rem;\n  font-weight: 900;\n}\n\n.forecast-chooser {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.forecast-paragraph {\n  font-size: 1.5rem;\n  transition: 0.4s;\n  visibility: hidden;\n  cursor: pointer;\n}\n\n.forecast-paragraph.active {\n  visibility: visible;\n}\n\n.forecast-paragraph.clicked {\n  font-size: 1.8rem;\n  font-weight: 800;\n  transition: 0.4s;\n}\n\n#day-forecast-paragraph.clicked:hover,\n#hour-forecast-paragraph.clicked:hover {\n  font-size: 1.8rem;\n  font-weight: 800;\n}\n\n#day-forecast-paragraph:hover,\n#hour-forecast-paragraph:hover {\n  font-size: 1.7rem;\n  font-weight: 500;\n  transition: 0.4s;\n}\n\n.forecast {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  height: fit-content;\n}\n\n.forecast div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.day-forecast-div:nth-child(1) {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n.day-forecast-div:nth-child(3) {\n  grid-column: 4/6;\n  grid-row: 1/2;\n}\n\n.day-forecast-div:nth-child(2) {\n  grid-row: 2/3;\n  grid-column: 3/4;\n  margin-top: -50px;\n}\n\n.day-forecast-div p:nth-child(1) {\n  font-size: 1.3rem;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n\n.day-forecast-div p:nth-child(2) {\n  font-size: 1.4rem;\n  font-weight: 800;\n}\n\n.day-forecast-div p:nth-child(3) {\n  font-size: 0.9rem;\n}\n\n.hour-forecast-div p:nth-child(2) {\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n\n.hour-forecast-div:nth-child(1),\n.hour-forecast-div:nth-child(2),\n.hour-forecast-div:nth-child(3),\n.hour-forecast-div:nth-child(4),\n.hour-forecast-div:nth-child(5) {\n  grid-row: 1/2;\n}\n\n.hour-forecast-div:nth-child(6),\n.hour-forecast-div:nth-child(7),\n.hour-forecast-div:nth-child(8),\n.hour-forecast-div:nth-child(9),\n.hour-forecast-div:nth-child(10) {\n  grid-row: 2/3;\n}\n\n.hour-forecast-div:nth-child(11),\n.hour-forecast-div:nth-child(12) {\n  grid-row: 3/4;\n}\n\n.hour-forecast-div:nth-child(11) {\n  grid-column: 2/4;\n}\n\n.hour-forecast-div:nth-child(12) {\n  grid-column: 3/5;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showForecastInfo: () => (/* binding */ showForecastInfo),\n/* harmony export */   showInfo: () => (/* binding */ showInfo)\n/* harmony export */ });\n/* harmony import */ var _getDayString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDayString */ \"./src/getDayString.js\");\n\n\nfunction showIcon(link, temp, tempSystem) {\n  const info = document.querySelector(\".info\");\n\n  const div = document.createElement(\"div\");\n  div.classList.add(\"icon-and-temp\");\n  const img = document.createElement(\"img\");\n  const icon = link.replace(\"//cdn.weatherapi.com\", \"../images\");\n  img.src = icon;\n  img.alt = \"icon\";\n\n  div.appendChild(img);\n  div.appendChild(\n    document.createElement(\"p\")\n  ).textContent = `${temp} ${tempSystem}`;\n\n  info.appendChild(div);\n}\n\nfunction showLocationAndTime(name, country, time, condition) {\n  const info = document.querySelector(\".info\");\n  const locName = document.createElement(\"p\");\n  locName.textContent = name;\n  locName.id = \"location-name\";\n\n  const day = (0,_getDayString__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(time.split(\" \")[0]);\n\n  info.appendChild(document.createElement(\"p\")).textContent = condition;\n  info.appendChild(locName);\n  info.appendChild(document.createElement(\"p\")).textContent = country;\n  info.appendChild(document.createElement(\"p\")).textContent = `${day} ${\n    time.split(\" \")[1]\n  }`;\n}\n\nfunction showOtherDetails(feelsLike, humidity, wind, tempSystem) {\n  const sideinfo = document.querySelector(\".sideinfo\");\n\n  const imagesDiv = document.createElement(\"div\");\n  const feelsLikeImg = document.createElement(\"img\");\n  feelsLikeImg.classList.add(\"icon\");\n  feelsLikeImg.src = \"../images/thermometer.svg\";\n  feelsLikeImg.alt = \"thermometer\";\n\n  const humidityImg = document.createElement(\"img\");\n  humidityImg.classList.add(\"icon\");\n  humidityImg.src = \"../images/water-outline.svg\";\n  humidityImg.alt = \"humidity-icon\";\n\n  const windImg = document.createElement(\"img\");\n  windImg.classList.add(\"icon\");\n  windImg.src = \"../images/weather-windy.svg\";\n  windImg.alt = \"windy\";\n\n  imagesDiv.appendChild(feelsLikeImg);\n  imagesDiv.appendChild(humidityImg);\n  imagesDiv.appendChild(windImg);\n\n  const textDiv = document.createElement(\"div\");\n  textDiv.appendChild(document.createElement(\"p\")).textContent = \"Feels like\";\n  textDiv.appendChild(\n    document.createElement(\"p\")\n  ).textContent = `${feelsLike} ${tempSystem}`;\n\n  textDiv.appendChild(document.createElement(\"p\")).textContent = \"Humidity\";\n  textDiv.appendChild(document.createElement(\"p\")).textContent = `${humidity}%`;\n\n  textDiv.appendChild(document.createElement(\"p\")).textContent = \"Wind speed\";\n  let speedSystem;\n  if (tempSystem === \"°C\") speedSystem = \" kph\";\n  else speedSystem = \" mph\";\n  textDiv.appendChild(document.createElement(\"p\")).textContent =\n    wind + speedSystem;\n\n  sideinfo.appendChild(imagesDiv);\n  sideinfo.appendChild(textDiv);\n}\n\nfunction cleanMainInterface() {\n  const info = document.querySelector(\".info\");\n  const sideinfo = document.querySelector(\".sideinfo\");\n\n  while (info.firstChild) info.removeChild(info.firstChild);\n  while (sideinfo.firstChild) sideinfo.removeChild(sideinfo.firstChild);\n}\n\nfunction cleanForecastInterface() {\n  const forecast = document.querySelector(\".forecast\");\n  while (forecast.firstChild) forecast.removeChild(forecast.firstChild);\n}\n\nfunction showForecast(icon, maxtemp, mintemp, date, tempSystem) {\n  const forecast = document.querySelector(\".forecast\");\n  const container = document.createElement(\"div\");\n  container.classList.add(\"day-forecast-div\");\n  const day = (0,_getDayString__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date);\n\n  container.appendChild(document.createElement(\"p\")).textContent = day;\n\n  container.appendChild(\n    document.createElement(\"p\")\n  ).textContent = `${maxtemp} ${tempSystem}`;\n  container.appendChild(\n    document.createElement(\"p\")\n  ).textContent = `${mintemp} ${tempSystem}`;\n\n  const img = document.createElement(\"img\");\n  img.src = icon.replace(\"//cdn.weatherapi.com\", \"../images\");\n  img.alt = \"icon\";\n  container.appendChild(img);\n\n  forecast.appendChild(container);\n}\n\nfunction calculateNext12Hours(\n  hour,\n  forecastToday,\n  forecastTomorrow,\n  tempSystem\n) {\n  const forecast = document.querySelector(\".forecast\");\n\n  let count = 0;\n  for (let i = Number(hour); i < 24 && count < 12; i += 1, count += 1) {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"hour-forecast-div\");\n\n    container.appendChild(document.createElement(\"p\")).textContent = `${i}:00`;\n\n    container.appendChild(document.createElement(\"p\")).textContent = `${\n      tempSystem === \"°C\" ? forecastToday[i].temp_c : forecastToday[i].temp_f\n    } ${tempSystem}`;\n\n    const img = document.createElement(\"img\");\n    img.src = forecastToday[i].condition.icon.replace(\n      \"//cdn.weatherapi.com\",\n      \"../images\"\n    );\n    img.alt = \"icon\";\n    container.appendChild(img);\n    forecast.appendChild(container);\n  }\n\n  if (count < 12) {\n    for (let i = 0; count < 12; i += 1, count += 1) {\n      const container = document.createElement(\"div\");\n      container.classList.add(\"hour-forecast-div\");\n\n      container.appendChild(\n        document.createElement(\"p\")\n      ).textContent = `${i}:00`;\n\n      container.appendChild(document.createElement(\"p\")).textContent = `${\n        tempSystem === \"°C\"\n          ? forecastTomorrow[i].temp_c\n          : forecastTomorrow[i].temp_f\n      } ${tempSystem}`;\n\n      const img = document.createElement(\"img\");\n      img.src = forecastTomorrow[i].condition.icon.replace(\n        \"//cdn.weatherapi.com\",\n        \"../images\"\n      );\n      img.alt = \"icon\";\n      container.appendChild(img);\n      forecast.appendChild(container);\n    }\n  }\n}\n\nfunction showForecastInfo(data, tempSystem, activeForecast) {\n  cleanForecastInterface();\n\n  if (activeForecast === \"day\") {\n    for (let i = 0; i < 3; i += 1) {\n      showForecast(\n        data.forecast.forecastday[i].day.condition.icon,\n        tempSystem === \"°C\"\n          ? data.forecast.forecastday[i].day.maxtemp_c\n          : data.forecast.forecastday[i].day.maxtemp_f,\n        tempSystem === \"°C\"\n          ? data.forecast.forecastday[i].day.mintemp_c\n          : data.forecast.forecastday[i].day.mintemp_f,\n        data.forecast.forecastday[i].date,\n        tempSystem\n      );\n    }\n  } else {\n    calculateNext12Hours(\n      data.location.localtime.split(\" \")[1].split(\":\")[0],\n      data.forecast.forecastday[0].hour,\n      data.forecast.forecastday[1].hour,\n      tempSystem\n    );\n  }\n\n  document\n    .querySelectorAll(\".forecast-paragraph\")\n    .forEach((p) => p.classList.add(\"active\"));\n}\n\nfunction showInfo(data, tempSystem, activeForecast) {\n  cleanMainInterface();\n\n  showLocationAndTime(\n    data.location.name,\n    data.location.country,\n    data.location.localtime,\n    data.current.condition.text\n  );\n  showIcon(\n    data.current.condition.icon,\n    tempSystem === \"°C\" ? data.current.temp_c : data.current.temp_f,\n    tempSystem\n  );\n  showOtherDetails(\n    tempSystem === \"°C\" ? data.current.feelslike_c : data.current.feelslike_f,\n    data.current.humidity,\n    tempSystem === \"°C\" ? data.current.wind_kph : data.current.wind_mph,\n    tempSystem\n  );\n  showForecastInfo(data, tempSystem, activeForecast);\n}\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/getDayString.js":
/*!*****************************!*\
  !*** ./src/getDayString.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getDayString)\n/* harmony export */ });\nfunction getDayString(date) {\n  const days = [\n    \"Sunday\",\n    \"Monday\",\n    \"Tuesday\",\n    \"Wednesday\",\n    \"Thursday\",\n    \"Friday\",\n    \"Saturday\",\n  ];\n  const today = new Date(date).getDay();\n  return days[today];\n}\n\n\n//# sourceURL=webpack://weather-app/./src/getDayString.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\nconst searchBox = document.getElementById(\"location\");\nconst search = document.getElementById(\"search-btn\");\nlet currentData;\nlet activeForecast = \"day\";\nlet tempSystem = \"°C\";\n\n// system for converting between celsius and fahrenheit\nconst celsius = document.getElementById(\"celsius\");\nconst fahrenheit = document.getElementById(\"fahrenheit\");\n\ncelsius.classList.add(\"active\");\n\ncelsius.addEventListener(\"click\", () => {\n  if (tempSystem === \"°F\") {\n    tempSystem = \"°C\";\n    celsius.classList.add(\"active\");\n    fahrenheit.classList.remove(\"active\");\n\n    if (currentData) {\n      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.showInfo)(currentData, tempSystem, activeForecast);\n    }\n  }\n});\n\nfahrenheit.addEventListener(\"click\", () => {\n  if (tempSystem === \"°C\") {\n    tempSystem = \"°F\";\n    fahrenheit.classList.add(\"active\");\n    celsius.classList.remove(\"active\");\n\n    if (currentData) {\n      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.showInfo)(currentData, tempSystem, activeForecast);\n    }\n  }\n});\n\n// system for switching between day and hour forecast\nconst dayForecast = document.getElementById(\"day-forecast-paragraph\");\nconst hourForecast = document.getElementById(\"hour-forecast-paragraph\");\n\ndayForecast.classList.add(\"clicked\");\n\ndayForecast.addEventListener(\"click\", () => {\n  dayForecast.classList.add(\"clicked\");\n  hourForecast.classList.remove(\"clicked\");\n  activeForecast = \"day\";\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.showForecastInfo)(currentData, tempSystem, activeForecast);\n});\n\nhourForecast.addEventListener(\"click\", () => {\n  hourForecast.classList.add(\"clicked\");\n  dayForecast.classList.remove(\"clicked\");\n  activeForecast = \"hour\";\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.showForecastInfo)(currentData, tempSystem, activeForecast);\n});\n\n// system for fetching API data\nasync function getWeatherInfo(location) {\n  const response = await fetch(\n    `https://api.weatherapi.com/v1/forecast.json?key=bc367a20a09f44d8a79125326232108&days=3&q=${location}`\n  );\n\n  const data = await response.json();\n\n  currentData = data;\n  console.log(data);\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.showInfo)(currentData, tempSystem, activeForecast);\n}\n\nsearch.addEventListener(\"click\", () => {\n  if (searchBox.value.trimStart() !== \"\") getWeatherInfo(searchBox.value);\n});\n\nsearchBox.addEventListener(\"keydown\", (e) => {\n  if (e.key === \"Enter\") getWeatherInfo(searchBox.value);\n});\n\n// TODO:\n// error handling\n// change background if it's day or night\n// design for bigger sizes\n// add footer\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;