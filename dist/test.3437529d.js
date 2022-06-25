// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "\n.skin* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n.skin*::before,\n.skin*::after {\n    box-sizing: border-box;\n}\n/*\u521D\u59CB\u5316*/\n\n.skin {\n    position: relative;\n    min-height: 60vh;\n    background: #ebd60b;\n}\n@keyframes wave {\n    0% {\n        transform: rotate(0deg);\n    }\n\n    33% {\n        transform: rotate(5deg)\n    }\n\n    66% {\n        transform: rotate(-5deg)\n    }\n\n    100% {\n        transform: rotate(0deg)\n    }\n}\n\n.nose:hover {\n    transform-origin: 50% 100%;\n    /*\u786E\u5B9A\u9F3B\u5B50\u6643\u52A8\u7684\u5706\u5FC3*/\n    animation: wave 300ms infinite linear;\n}\n\n.nose {\n    border: 10px solid black;\n    border-color: black transparent transparent transparent;\n    /*\u5236\u4F5C\u4E09\u89D2\u5F62*/\n    width: 0px;\n    height: 0px;\n    position: absolute;\n    left: 50%;\n    top: 145px;\n    margin-left: -10px;\n    z-index: 6;\n}\n\n.yuan {\n    border: 1px solid black;\n    width: 20px;\n    height: 6px;\n    position: absolute;\n    top: -16px;\n    left: -10px;\n    border-radius: 6px 6px 0 0;\n    background: black;\n}\n\n@keyframes eyemove {\n    0% {\n        transform: none;\n    }\n\n    20% {\n        transform: translateX(16px);\n    }\n\n    30% {\n        transform: translateX(8px);\n    }\n\n    40% {\n        transform: translateX(16px);\n    }\n\n    60% {\n        transform: none;\n    }\n\n    75% {\n        transform: translateX(16px);\n    }\n\n    90% {\n        transform: translateX(16px) translateY(30px);\n    }\n\n    100% {\n        transform: none;\n    }\n}\n\n.eye {\n    border: 2px solid #000;\n    height: 64px;\n    width: 64px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    background: #373737;\n    border-radius: 50%;\n}\n\n.eye::before {\n    display: block;\n    content: '';\n    border: 3px solid #000;\n    height: 24px;\n    width: 24px;\n    background: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 10px;\n    animation: eyemove 4000ms infinite ease-out;\n}\n\n.eye.left {\n    transform: translateX(-100px);\n}\n\n.eye.right {\n    transform: translateX(100px);\n}\n\n@keyframes mouthmove {\n    0% {\n        transform: scale(1.0);\n    }\n\n    100% {\n        transform: scale(0.7);\n    }\n}\n\n.mouth {\n    width: 200px;\n    height: 150px;\n    position: absolute;\n    top: 170px;\n    left: 50%;\n    margin-left: -100px;\n    animation: mouthmove 2s infinite alternate;\n}\n\n.mouth .up {\n    position: relative;\n    top: -10px;\n}\n\n.mouth .up .lip {\n    border: 4px solid black;\n    width: 100px;\n    height: 30px;\n\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    background: #ebd60b;\n    z-index: 1;\n}\n\n.mouth .up .lip::before {\n    content: '';\n    display: block;\n    width: 10px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    background: #ebd60b;\n}\n\n.mouth .up .lip.left {\n    border-radius: 0 0 0 25px;\n    transform: rotate(-15deg) translateX(-48px);\n    border-top-color: transparent;\n    border-right-color: transparent;\n}\n\n.mouth .up .lip.left::before {\n    right: -7px;\n}\n\n.mouth .up .lip.right {\n    border-radius: 0 0 25px 0;\n    transform: rotate(15deg) translateX(48px);\n    border-top-color: transparent;\n    border-left-color: transparent;\n}\n\n.mouth .up .lip.right::before {\n    left: -7px;\n}\n\n.mouth .down {\n    height: 170px;\n    position: absolute;\n    width: 100%;\n    top: 10px;\n    overflow: hidden;\n\n}\n\n.mouth .down .yuan2 {\n    border: 3px solid black;\n    height: 800px;\n    width: 150px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 75px/250px;\n    background: #980f18;\n    overflow: hidden;\n}\n\n.mouth .down .yuan2 .yuan3 {\n    height: 300px;\n    width: 200px;\n    position: absolute;\n    bottom: -160px;\n    left: 50%;\n    margin-left: -100px;\n    background: #ee4d61;\n    border-radius: 100px;\n}\n\n.face {\n    border: 3px solid black;\n    width: 80px;\n    height: 80px;\n    border-radius: 50%;\n    position: absolute;\n    top: 220px;\n    left: 50%;\n    margin-left: -25px;\n    background: #ea0102;\n}\n\n.face.left {\n    margin-left: -200px;\n}\n\n.face.right {\n    margin-left: 120px;\n}\n\n.face>img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n}\n\n.face.left>img {\n    transform: rotateY(180deg);\n    transform-origin: 0 0;\n    /*\u4EE5\u5DE6\u4E0A\u4E3A\u5706\u5FC3\u7FFB\u8F6C180\u5EA6*/\n}\n\n.lefthand {\n    position: absolute;\n    left: 50%;\n    top: 450px;\n    transform: translateX(-200px);\n}\n\n.righthand {\n    position: absolute;\n    left: 50%;\n    top: 450px;\n    transform: translateX(200px);\n}\n\n.righthand>img {\n    transform: rotateY(180deg);\n    transform-origin: 0 0;\n}\n";
exports.default = string;
},{}],"HdJB":[function(require,module,exports) {
'use strict';

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//模块化
var n = 1;
demo1.innerText = _css2.default.substr(0, n);
demo2.innerHTML = _css2.default.substr(0, n);
console.log(n);

var time = 100;

var run = function run() {
    n += 1;
    if (n > _css2.default.length) {
        window.clearInterval(id); //到最后一个字后停止。
        return;
    }
    console.log(n + ':' + _css2.default.substr(0, n));
    demo2.innerHTML = _css2.default.substr(0, n);
    demo1.innerText = _css2.default.substr(0, n);
    demo1.scrollTop = demo1.scrollHeight;
};
var id = setInterval(function () {
    run();
}, time);
btnPause.onclick = function () {
    window.clearInterval(id);
};
btnPlay.onclick = function () {
    id = setInterval(function () {
        run();
    }, time);
};

btnSlow.onclick = function () {
    window.clearInterval(id);
    time = 300;
    id = setInterval(function () {
        run();
    }, time);
};
btnMid.onclick = function () {
    window.clearInterval(id);
    time = 100;
    id = setInterval(function () {
        run();
    }, time);
};
btnFast.onclick = function () {
    window.clearInterval(id);
    time = 0;
    id = setInterval(function () {
        run();
    }, time);
};
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.3437529d.map