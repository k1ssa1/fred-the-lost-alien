/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/alien.png":
/*!***************************!*\
  !*** ./src/img/alien.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e0cf08bc6a743f76446dbd8baf58beeb.png");

/***/ }),

/***/ "./src/img/bg.png":
/*!************************!*\
  !*** ./src/img/bg.png ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_bg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/bg.png */ "./src/img/bg.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_alien_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/alien.png */ "./src/img/alien.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






console.log(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var canvas = document.querySelector('canvas'); // creating the context

var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 570; // adding gravity

var gravity = 2; // creating the class Player

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.speed = 8;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.image = createImage(_img_alien_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
    this.width = 80;
    this.height = 90;
  } // method that defines the player


  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    } // method that updates the position of the player 

  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
    }
  }]);

  return Player;
}(); // creating a class Platform


var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformSmallTallImage = createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]); // creating an instance of the player

var player = new Player(); // creating mutiple platforms instances 

var platforms = [];
var genericObject = [];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}; // adding a variable for the win scenario win scenario

var scrollOffset = 0;

function init() {
  platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]); // creating an instance of the player

  player = new Player(); // creating mutiple platforms instances 

  platforms = [new Platform({
    x: platformImage.width * 4 + 300 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: -1,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 3,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 100,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 300,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 300 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 5 + 700 - 2,
    y: 470,
    image: platformImage
  })];
  genericObject = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_bg_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })]; // adding a variable for the win scenario win scenario

  scrollOffset = 0;
} // creating an animation


function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObject.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      }); // creating the parallax scroll

      genericObject.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * .66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      }); // creating the parallax scroll

      genericObject.forEach(function (genericObject) {
        genericObject.position.x += 3 * .66;
      });
    }
  }

  console.log(scrollOffset); // adding platform colision detection

  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); // adding the condition for the win scenario

  if (scrollOffset > platformImage.width * 5 + 700 - 2) {
    window.alert("You win");
    init();
  } // adding the lose condition


  if (player.position.y > canvas.height) {
    window.alert("Oh no you've lost, but try again");
    init();
  }
}

init();
animate(); // adding event listeners
// adding control with the keyboard

addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;
  console.log(keyCode);

  switch (keyCode) {
    case 38:
      console.log('up');
      player.velocity.y -= 25;
      break;

    case 37:
      console.log('left');
      keys.left.pressed = true;
      break;

    case 39:
      console.log('right');
      keys.right.pressed = true;
      break;

    case 40:
      console.log('down');
      break;
  } //  console.log(keys.right.pressed)
  //  console.log(keys.left.pressed)

});
addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;
  console.log(keyCode);

  switch (keyCode) {
    case 38:
      console.log('up');
      break;

    case 37:
      console.log('left');
      keys.left.pressed = false;
      break;

    case 39:
      console.log('right');
      keys.right.pressed = false;
      break;

    case 40:
      console.log('down');
      break;
  } //   console.log(keys.right.pressed)
  //    console.log(keys.left.pressed)

});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map