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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://googleapis.com);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* --- Theme Variables --- */\n:root {\n  --espresso: #2C1B14;\n  --pumpkin: #D96B27;\n  --pumpkin-glow: #F2913D;\n  --cinnamon: #8C4323;\n  --cream: #FAF5EF;\n  --latte-foam: #F2E3D5;\n  \n  --font-heading: 'Playfair Display', serif;\n  --font-body: 'Fredoka', sans-serif;\n}\n\n\nbody {\n    position: relative; /* Keeps the background relative to the screen */\n}\n\nbody::before {\n\n    content: \"\";        /* REQUIRED: Tells the browser to render the element */\n    position: fixed;    /* REQUIRED: Positions it relative to the screen */\n    top: 0;\n    left: 0;\n    width: 100vw;       /* REQUIRED: Forces it to fill the full width */\n    height: 100vh;      /* REQUIRED: Forces it to fill the full height */\n    z-index: -1;        /* REQUIRED: Pushes the image behind your text */\n\n\n\n\n    /* Centers the image horizontally and vertically */\n    background-position: center;\n\n    /* Stretches the image to completely cover the screen without distortion */\n    background-size: cover;\n\n    /* Keeps the background fixed in place so it doesn't scroll with the text */\n    background-attachment: fixed;\n    opacity: 0.6;\n}\n\n#pumpkin-image {\n    height: 10vh;\n    width: auto;\n}\n\n/* Reset the list styling while keeping the flexbox layout */\n.tab-container {\n  display: flex;\n  gap: 8px;\n  list-style: none; /* Removes standard bullet points */\n  margin: 0;\n  padding: 0;\n  border-bottom: 2px solid #e2e8f0;\n}\n\n/* Ensure the li container doesn't warp spacing */\n.tab-container li {\n  margin: 0;\n  padding: 0;\n}\n\n/* The tab-btn CSS rules from earlier stay exactly the same! */\n.tab-btn {\n  background: none;\n  border: none;\n  padding: 10px 20px;\n  font-size: 1rem;\n  font-weight: 500;\n  color: #64748b;\n  cursor: pointer;\n  border-radius: 6px 6px 0 0;\n  transition: all 0.2s ease-in-out;\n  position: relative;\n  bottom: -2px; /* Adjusted slightly to rest cleanly on the 2px border */\n}\n\n.tab-btn.active {\n  color: #2563eb;\n  font-weight: 600;\n}\n\n.tab-btn.active::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-color: #2563eb;\n  border-radius: 3px 3px 0 0;\n}\n\n/* --- Google Fonts Configuration --- */\n\n\n\n/* --- Base Layout --- */\nbody {\n  background-color: var(--cream);\n  color: var(--espresso);\n  font-family: var(--font-body);\n  margin: 0;\n  padding: 0;\n  line-height: 1.6;\n}\n\n/* --- Header / Hero Area --- */\n.item-header {\n  background: linear-gradient(135deg, var(--cinnamon), var(--espresso));\n  color: var(--cream);\n  text-align: center;\n  padding: 4rem 2rem;\n  border-bottom: 8px solid var(--pumpkin);\n  position: relative;\n  overflow: hidden;\n}\n\n/* Fallback subtle pattern using pure CSS */\n.item-header::before {\n  content: \"\";\n  position: absolute;\n  top: 0; left: 0; right: 0; bottom: 0;\n  opacity: 0.05;\n  background-image: radial-gradient(var(--pumpkin) 20%, transparent 20%),\n                    radial-gradient(var(--pumpkin) 20%, transparent 20%);\n  background-size: 40px 40px;\n  background-position: 0 0, 20px 20px;\n}\n\n.item-header h1 {\n  font-family: var(--font-heading);\n  font-size: 3.5rem;\n  margin: 0 0 0.5rem 0;\n  font-style: italic;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);\n}\n\n.item-header p {\n  font-size: 1.2rem;\n  color: var(--latte-foam);\n  margin: 0;\n  letter-spacing: 1px;\n}\n\n/* --- Main Layout Container --- */\n.container {\n  max-width: 1000px;\n  margin: 3rem auto;\n  padding: 0 1.5rem;\n}\n\n/* --- Section Styling --- */\n.menu-section {\n  background-color: #ffffff;\n  border-radius: 24px; /* Soft, organic rounding */\n  padding: 2.5rem;\n  margin-bottom: 3rem;\n  box-shadow: 0 8px 24px rgba(44, 27, 20, 0.06);\n  border: 1px solid var(--latte-foam);\n  position: relative;\n}\n\n.menu-section::after {\n  content: '🎃';\n  position: absolute;\n  top: -15px;\n  right: 30px;\n  font-size: 1.8rem;\n  background: var(--cream);\n  padding: 0 10px;\n}\n\n.section-title {\n  font-family: var(--font-heading);\n  font-size: 2.2rem;\n  color: var(--cinnamon);\n  margin-top: 0;\n  margin-bottom: 2rem;\n  border-bottom: 2px dashed var(--pumpkin);\n  padding-bottom: 0.5rem;\n}\n\n/* --- Grid Structure for Menu Items --- */\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n}\n\n/* --- Individual Menu Item Card --- */\n.menu-item {\n  border-left: 4px solid var(--pumpkin);\n  padding-left: 1rem;\n  transition: transform 0.2s ease;\n}\n\n.menu-item:hover {\n  transform: translateX(4px);\n}\n\n.item-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 0.25rem;\n}\n\n.item-title {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: var(--espresso);\n  margin: 0;\n}\n\n.item-price {\n  font-family: var(--font-heading);\n  font-weight: bold;\n  color: var(--pumpkin);\n  font-size: 1.2rem;\n}\n\n.item-description {\n  font-size: 0.95rem;\n  color: #615149;\n  margin: 0;\n}\n\n/* --- Call-to-Action / Interactive Buttons --- */\n.btn-pumpkin {\n  display: inline-block;\n  background-color: var(--pumpkin);\n  color: var(--cream);\n  font-family: var(--font-body);\n  font-weight: 600;\n  text-decoration: none;\n  padding: 0.8rem 2rem;\n  border-radius: 50px; /* Pumpkin-seed shaped ends */\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 12px rgba(217, 107, 39, 0.3);\n}\n\n.btn-pumpkin:hover {\n  background-color: var(--pumpkin-glow);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(217, 107, 39, 0.5);\n}\n\n/* --- Footer --- */\n.cafe-footer {\n  text-align: center;\n  padding: 3rem;\n  background-color: var(--espresso);\n  color: var(--latte-foam);\n  margin-top: 5rem;\n  font-size: 0.9rem;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./images/pumpkins.jpg"
/*!*****************************!*\
  !*** ./images/pumpkins.jpg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"images/pumpkins.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./images/pumpkins.jpg?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayAboutTab: () => (/* binding */ displayAboutTab)\n/* harmony export */ });\n\n\n\nfunction displayAboutTab(){\n\n    // Create a new <p> element\n    const newParagraph = document.createElement('p');\n    \n    // Add text to it\n    newParagraph.textContent = \"This isn't a real restaurant you know\";\n    const content = document.querySelector(\"#content\");\n    content.innerHTML = `\n      <div class=\"item-details\">\n        <div class=\"item-header\">\n          <h3 class=\"item-title\">This isn't a real restaurant you know</h3>\n          \n        </div>\n      </div>\n    `;\n    \n    \n    // Insert it right after the <h1>\n    content.appendChild(newParagraph);\n}\n\n//# sourceURL=webpack://restaurantpage/./src/about.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayHomeTab: () => (/* binding */ displayHomeTab)\n/* harmony export */ });\n/* harmony import */ var _images_pumpkins_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/pumpkins.jpg */ \"./images/pumpkins.jpg\");\n\n\n; \n\nfunction displayHomeTab(){\n\n\n    const content = document.querySelector(\"#content\");\n\n\n    const newImage = document.createElement(\"img\");\n\n    // 3. Set the source URL and alternate text for the image\n    newImage.src = _images_pumpkins_jpg__WEBPACK_IMPORTED_MODULE_0__; \n    newImage.alt = \"A descriptive placeholder image\";\n\n    // 4. Optionally, add a CSS class for styling\n    newImage.id = \"pumpkin-image\";\n\n    // 5. Insert the image inside the #container element\n    content.appendChild(newImage);\n\n    const mainHeader = document.createElement(\"h1\");\n    mainHeader.classList.add('item-header');\n\n    // 3. Add text inside the header\n    mainHeader.textContent = \"Welcome to Tim's Pumpkin Patch!\";\n\n    content.appendChild(mainHeader);\n\n    const newParagraph = document.createElement('p');\n    newParagraph.classList.add('item-description');\n    \n    // Add text to it\n    newParagraph.textContent = \"Tim's veggie restaurant\";\n    content.appendChild(newParagraph);\n   \n}\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ \"./src/page-load.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n // Webpack will now inject this automatically\n\n\n\n(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\n\n\nconst homeButton = document.getElementById('home-button');\nconst menuDrinksButton = document.getElementById('menu-drinks-button');\nconst menuCakesButton = document.getElementById('menu-cakes-button');\nconst aboutButton = document.getElementById('about-button');\n\nfunction clearContent() {\n    const content = document.querySelector(\"#content\");\n    content.replaceChildren(); \n\n}\n\nhomeButton.addEventListener('click', () => {\n    clearContent();\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.displayHomeTab)();  \n});\n\nmenuDrinksButton.addEventListener('click', () => {\n    clearContent();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.displayMenuTab)('drinks');\n});\n\nmenuCakesButton.addEventListener('click', () => {\n    clearContent();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.displayMenuTab)('bakery');\n});\n\naboutButton.addEventListener('click', () => {\n    clearContent();\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_2__.displayAboutTab)();  \n});\n\nconst tabs = document.querySelectorAll('.tab-btn');\n\ntabs.forEach(clickedTab => {\n  clickedTab.addEventListener('click', () => {\n    // 1. Remove active class from all tabs\n    tabs.forEach(tab => tab.classList.remove('active'));\n    \n    // 2. Add active class to the clicked tab\n    clickedTab.classList.add('active');\n    \n    // 3. Clear and update content based on which tab was clicked\n    // updateTabContent(clickedTab.textContent);\n  });\n});\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMenuTab: () => (/* binding */ displayMenuTab)\n/* harmony export */ });\n\n\n\nfunction displayMenuTab(category){\n\n    // Create a new <p> element\n    const newParagraph = document.createElement('p');\n    \n    // Add text to it\n    newParagraph.textContent = 'This paragraph was added because you clicked the menu button!';\n\n    const content = document.querySelector(\"#content\");\n    \n    // Insert it right after the <h1>\n    content.appendChild(newParagraph);\n\n    // 5. Initialize the view with the default active category on page load\n    renderMenu(category);\n}\n\n// 1. Data structure holding all the menu items\nconst menuData = [\n  {\n    id: 1,\n    title: 'Classic Pumpkin Spice Latte',\n    price: '£4.50',\n    description: 'Espresso blended with steamed milk, real pumpkin purée, and warm autumnal spices, topped with whipped cream.',\n    category: 'drinks'\n  },\n  {\n    id: 2,\n    title: 'Pumpkin Cream Cold Brew',\n    price: '£4.25',\n    description: 'Our signature cold brew sweetened with vanilla, topped with a velvety pumpkin-spiced cold foam cream layer.',\n    category: 'drinks'\n  },\n  {\n    id: 3,\n    title: 'Spiced Pumpkin Chai',\n    price: '£4.00',\n    description: 'Black tea infused with cardamom, cinnamon, cloves, ginger, and rich pumpkin, steamed smooth with oat milk.',\n    category: 'drinks'\n  },\n  {\n    id: 4,\n    title: 'Warm Pumpkin Scone',\n    price: '£3.50',\n    description: 'A tender, flaky spiced scone packed with real pumpkin, finished with a sweet vanilla icing and a spiced glaze drizzle.',\n    category: 'bakery'\n  },\n  {\n    id: 5,\n    title: 'Pumpkin Pecan Muffin',\n    price: '£3.25',\n    description: 'Moist pumpkin muffin with a spiced cream cheese filling, topped with a crunchy brown sugar and pecan streusel crumble.',\n    category: 'bakery'\n  },\n  {\n    id: 6,\n    title: 'Spiced Pumpkin Cheesecake',\n    price: '£5.00',\n    description: 'Rich, smooth New York-style pumpkin cheesecake resting on a buttery gingersnap crust, topped with house-made whipped cream.',\n    category: 'bakery'\n  }\n];\n\n// 2. Select key DOM elements\nconst content = document.getElementById('content');\nconst tabButtons = document.querySelectorAll('.tab-btn');\n\n// 3. Core function to map data arrays into safe HTML structures\nfunction renderMenu(categoryFilter) {\n  // Filter data based on selection\n  const filteredItems = menuData.filter(item => item.category === categoryFilter);\n\n  // Clear existing items safely using the optimized method\n  content.replaceChildren();\n\n  // Build and attach new element trees dynamically\n  filteredItems.forEach(item => {\n    const article = document.createElement('article');\n    article.classList.add('menu-item');\n\n    article.innerHTML = `\n      <div class=\"item-details\">\n        <div class=\"item-header\">\n          <h3 class=\"item-title\">${item.title}</h3>\n          <span class=\"item-price\">${item.price}</span>\n        </div>\n        <p class=\"item-description\">${item.description}</p>\n      </div>\n    `;\n    \n    content.appendChild(article);\n  });\n}\n\n// 4. Tab switcher control handling\ntabButtons.forEach(button => {\n  button.addEventListener('click', (event) => {\n    // Manage active visual state styling\n    tabButtons.forEach(btn => btn.classList.remove('active'));\n    event.currentTarget.classList.add('active');\n\n    // Fetch the target category from data attribute and render\n    const selectedCategory = event.currentTarget.dataset.category;\n    renderMenu(selectedCategory);\n  });\n});\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?\n}");

/***/ },

/***/ "./src/page-load.js"
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadPage: () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n;\n\nfunction loadPage() {\n\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.displayHomeTab)();\n\n    \n\n}\n\n//# sourceURL=webpack://restaurantpage/./src/page-load.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;