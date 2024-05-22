/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var globalFunctionForReturn;
var originalContent = document.body.innerHTML;
chrome.runtime.onMessage.addListener( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request, sender, response) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(request.method == "sortByTestFirst")) {
            _context.next = 4;
            break;
          }
          console.log("Call the method for sorting by test first");
          _context.next = 4;
          return sortByTestFirst();
        case 4:
          if (request.method == "theBigNothing") {
            theBigNothing();
          }
          if (request.method == "alphabetically") {
            alphabetically();
          }
          if (request.method == "mostChangedFiles") {
            mostChangedFiles();
          }
          if (request.method == "FunctionHelper") {
            getTreeSitterReturn();
          }
          if (request.type === 'functionForReturn') {
            globalFunctionForReturn = request.content;

            // Now you can use the globalFunctionForReturn data in your content script
            console.log('Received functionForReturn in content script:', globalFunctionForReturn);
          }
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
function sortByTestFirst() {
  return _sortByTestFirst.apply(this, arguments);
}
function _sortByTestFirst() {
  _sortByTestFirst = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var mainTree, articlesArray;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          document.body.innerHTML = originalContent;
          console.log("ate aqui foi async, bom eu acho rsrs");
          mainTree = document.querySelectorAll("[role=tree]")[0];
          articlesArray = [];
          _context2.next = 6;
          return separateFilesFromFolders();
        case 6:
          _context2.next = 8;
          return sorteFilesByTestFirst(mainTree, articlesArray);
        case 8:
          _context2.next = 10;
          return sorteDivsByTestDivs();
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _sortByTestFirst.apply(this, arguments);
}
function theBigNothing() {
  document.body.innerHTML = originalContent;
}
function mostChangedFiles() {
  document.body.innerHTML = originalContent;
  var divContainer = document.querySelector(".js-diff-progressive-container");
  var divs = document.querySelectorAll(".file.js-file.js-details-container");
  var arrayBatatinhaLength = divs.length;
  var arrayBatatinhaSorted = [];
  var thatsTheBigestBatatinha;
  var divsArray = Array.from(divs);
  for (var i = 0; i < arrayBatatinhaLength; i++) {
    thatsTheBigestBatatinha = divsArray[0];
    divsArray.forEach(function (element) {
      var currentDiffstat = parseInt(element.querySelector(".file-info").querySelector(".diffstat").textContent, 10);
      var maxDiffstat = parseInt(thatsTheBigestBatatinha.querySelector(".file-info").querySelector(".diffstat").textContent, 10);
      if (currentDiffstat >= maxDiffstat) {
        thatsTheBigestBatatinha = element;
      }
    });
    arrayBatatinhaSorted.unshift(thatsTheBigestBatatinha);
    divsArray.splice(divsArray.indexOf(thatsTheBigestBatatinha), 1);
  }
  arrayBatatinhaSorted.map(function (div) {
    return divContainer.insertBefore(div, divContainer.firstElementChild);
  });
  var orderFilesAfterSorting = arrayBatatinhaSorted.map(function (element) {
    return element.querySelector(".code-review.blob-code button[data-path]").getAttribute("data-path");
  });
  var mainTree = document.querySelectorAll("[role=tree]")[0];
  separateFilesFromFolders();
  var mainTreeItems = document.querySelectorAll("[role=treeitem]");
  orderFilesAfterSorting.forEach(function (element) {
    var oBraboPrimeiro = element;
    mainTreeItems.forEach(function (div) {
      if (div.querySelector('.ActionList-item-label').innerText == oBraboPrimeiro) {
        mainTree.insertBefore(div, mainTree.firstElementChild);
      }
    });
  });
}
function alphabetically() {
  document.body.innerHTML = originalContent;
  separateFilesFromFolders();
}

// async function someHover(){

//     // const divs = document.querySelectorAll(".file.js-file.js-details-container");
//     // divs.forEach( div => {
//     //     const divWithTd = div.querySelector(".js-file-content")

//     //     console.log("divWithTd: ", divWithTd)
//     //     const bigPotato = divWithTd.querySelector(".blob-code-inner.blob-code-marker.js-code-nav-pass.js-skip-tagsearch")

//     //     console.log(bigPotato?.innerText)

//     //     divElement = document.createElement("div");
//     //     let p = document.createElement("p");
//     //     p.innerHTML = 
//     //     `
//     //     function generic(param1, param2) {
//     //         return param1.toString() + ' ' + param2.toString();
//     //     }
//     //     `
//     //     divElement.appendChild(p);  
//     //     divElement.style.position = "absolute";
//     //     divElement.style.zIndex = "1000";
//     //     divElement.style.willChange = "transform"; 

//     //     divElement.style.background = "white"
//     //     divElement.style.padding = "20px 30px 20px 30px"
//     //     divElement.style.borderRadius = "10px"
//     //     divElement.style.transition = "opacity 0.5s ease-in-out"; 
//     //     divElement.style.opacity = "0"; 
//     //     divElement.id = "extraContent"

//     //     if (bigPotato) {
//     //         bigPotato.addEventListener("mouseover", (event) => {
//     //             if(event.target.innerText == "let"){
//     //                 event.target.append(divElement);
//     //                 console.log("tem um let aqui rsrs")
//     //                 divElement.offsetHeight; 
//     //                 divElement.style.opacity = "1";
//     //             }

//     //         }); 

//     //         bigPotato.addEventListener("mouseout", (event) => {

//     //             const pElementToRemove = document.getElementById("extraContent");
//     //             if (pElementToRemove && pElementToRemove.parentElement === event.target) {
//     //                 pElementToRemove.style.opacity = "0"; 
//     //                 setTimeout(() => {
//     //                     pElementToRemove.remove();
//     //                 }, 500); 
//     //             }
//     //         });
//     //     }

//     // })

//     const tableWithContent = document.querySelectorAll(".diff-table.js-diff-table")

//     tableWithContent.forEach(element => {
//         const allSpanTags = element.querySelectorAll(".blob-code-inner.blob-code-marker")

//         allSpanTags.forEach(div => {
//             const spanTags = div.getElementsByTagName('span')

//             const divElement = document.createElement("div");
//             let p = document.createElement("p");
//             p.innerHTML = 
//             `
//             function generic(param1, param2) {
//                 return param1.toString() + ' ' + param2.toString();
//             }
//             `
//             divElement.appendChild(p);  
//             divElement.style.position = "absolute";
//             divElement.style.zIndex = "1000";
//             divElement.style.willChange = "transform"; 

//             divElement.style.background = "white"
//             divElement.style.padding = "20px 30px 20px 30px"
//             divElement.style.borderRadius = "10px"
//             // divElement.style.transition = "opacity 0.5s ease-in-out"; 
//             // divElement.style.opacity = "0"; 
//             divElement.id = "extraContent"

//             for(let i=0; i<spanTags.length; i++){

//                 console.log(spanTags[i].innerText)

//                 spanTags[i].addEventListener("mouseover", (event) => {

//                     console.log("dentro da tag tem isso: ")
//                     console.log(event.target.innerText)

//                     spanTags[i].style.color = "red"
//                     event.target.append(divElement);

//                 }) 

//                 spanTags[i].addEventListener("mouseout", (event) => {

//                     const pElementToRemove = document.getElementById("extraContent");
//                     if (pElementToRemove && pElementToRemove.parentElement === event.target) {
//                         pElementToRemove.style.opacity = "0"; 
//                         setTimeout(() => {
//                             pElementToRemove.remove();
//                         }, 500); 
//                     }
//                     });
//                 }
//         });
//     });
// }

// someHover()
callTreeSitter();
function getTreeSitterReturn() {
  console.log("caiu aqui");
  console.log('Using functionForReturn in getTreeSitterReturn:', globalFunctionForReturn);
}
function callTreeSitter() {
  var tableWithContent = document.querySelectorAll(".diff-table.js-diff-table");
  tableWithContent.forEach(function (element) {
    var allSpanTags = element.querySelectorAll(".blob-code-inner.blob-code-marker");
    var spanText = [];
    allSpanTags.forEach(function (div) {
      spanText.push(div.innerText);
    });
    var message = {
      type: 'spanText',
      content: spanText.join(' ')
    };
    chrome.runtime.sendMessage(message);
  });
  console.log("caiu aqui viu");
}
function sorteFilesByTestFirst(_x4, _x5) {
  return _sorteFilesByTestFirst.apply(this, arguments);
}
function _sorteFilesByTestFirst() {
  _sorteFilesByTestFirst = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(mainTree, articlesArray) {
    var mainTreeItems;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          mainTreeItems = document.querySelectorAll("[role=treeitem]");
          mainTreeItems.forEach(function (article) {
            var tagThatHasTheText = article.querySelector('.ActionList-item-label').innerText;
            if (tagThatHasTheText.includes("test_") || tagThatHasTheText.includes("teste_")) {
              articlesArray.unshift(article);
            }
          });
          articlesArray.map(function (element) {
            return mainTree.insertBefore(element, mainTree.firstElementChild);
          });
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _sorteFilesByTestFirst.apply(this, arguments);
}
function sorteDivsByTestDivs() {
  return _sorteDivsByTestDivs.apply(this, arguments);
}
function _sorteDivsByTestDivs() {
  _sorteDivsByTestDivs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var divsTestArray, divContainer, divs;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          divsTestArray = [];
          divContainer = document.querySelector(".js-diff-progressive-container");
          divs = document.querySelectorAll(".file.js-file.js-details-container");
          divs.forEach(function (div) {
            var divWithTd = div.querySelector(".js-file-content");
            var td = divWithTd.querySelector(".code-review button[data-path]");
            var tdPathTex = td.getAttribute("data-path");
            if (tdPathTex.includes("test_") || tdPathTex.includes("teste_")) {
              divsTestArray.unshift(div);
            }
          });
          divsTestArray.map(function (div) {
            return divContainer.insertBefore(div, divContainer.firstElementChild);
          });
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _sorteDivsByTestDivs.apply(this, arguments);
}
function separateFilesFromFolders() {
  return _separateFilesFromFolders.apply(this, arguments);
}
function _separateFilesFromFolders() {
  _separateFilesFromFolders = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var mainTree, mainTreeItems;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          mainTree = document.querySelectorAll("[role=tree]")[0];
          mainTreeItems = document.querySelectorAll("[role=treeitem]");
          mainTreeItems.forEach(function (article) {
            var itsAFolder = article.className.includes("ActionList-item--hasSubItem");
            if (!itsAFolder) {
              var fileNameWithFullPath = article.querySelector('span[data-filterable-item-text=""][hidden]').innerText;
              var tagThatHasTheText = article.querySelector('.ActionList-item-label');
              tagThatHasTheText.innerText = fileNameWithFullPath;
              mainTree.appendChild(article);
            } else {
              article.remove();
            }
          });
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _separateFilesFromFolders.apply(this, arguments);
}
/******/ })()
;
//# sourceMappingURL=content.js.map