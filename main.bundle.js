webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<app-home></app-home>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"app.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = "Pedro's Portfolio";
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <footer class=\"footer\">\n  <div class=\"container\">\n    <span class=\"text-muted\">\n      Made with <i class=\"fa fa-heart\" aria-hidden=\"true\" style=\"color: red;\"></i>️ by Pedro Ramos\n    </span>\n  </div>\n</footer> -->"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".footer {\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  background-color: #f5f5f5;\n  text-align: center; }\n", "", {"version":3,"sources":["/home/pedro/projects/ramuspedro/website/src/app/footer/footer.component.scss"],"names":[],"mappings":"AAAA;EAEE,UAAS;EACT,YAAW;EACX,aAAY;EACZ,kBAAiB;EACjB,0BAAyB;EACzB,mBAAkB,EACnB","file":"footer.component.scss","sourcesContent":[".footer {\n  // position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  background-color: #f5f5f5;\n  text-align: center;\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section id=\"header\" class=\"header-background\"> -->\n<section id=\"header\" class=\"header-background align-self-center d-flex align-items-center\">\n  <!-- <div class=\"dark-background-overlay\"></div> -->\n  <div class=\"container media justify-content-center\">\n    <!-- <div class=\"container media justify-content-center\"> -->\n    <!-- <img src=\"./assets/images/william-bout-264826-min.jpg\" alt=\"\"> -->\n    <!-- <img class=\"logo-img mr-3\" src=\"./assets/images/logo2.svg\" alt=\"\"> -->\n    <object class=\"logo-img mr-3\" data=\"./assets/images/logo2.svg\" type=\"image/svg+xml\">\n      <img class=\"logo-img mr-3\" src=\"./assets/images/logo2.svg\" alt=\"\">\n    </object>\n    <div class=\"media-body align-self-center title\">\n      <p class=\"mt-0\">PEDRO RAMOS</p>\n      <!-- <h1 class=\"mb-0\">\n        UI/UX DEVELOPER\n      </h1> -->\n      <h2 class=\"mb-0\">\n        <span class=\"typewrite\" data-period=\"2000\" data-type='[\"UI/UX DESIGNER\", \"FRONT-END DEVELOPER\", \"BACK-END DEVELOPER\" ]'>\n          <span class=\"wrap\"></span>\n        </span>\n      </h2>\n\n      <div class=\"button-actions\">\n        <a class=\"btn btn-danger\" href=\"\" role=\"button\">Download CV</a>\n        <a class=\"btn btn-outline-danger\" href=\"https://github.com/ramuspedro\" target=\"_blank\" role=\"button\">GitHub</a>\n        <a class=\"btn btn-outline-danger\" href=\"\" role=\"button\">Projects</a>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- <section class=\"section\" id=\"projects\">\n  <div class=\"container\">\n    <div class=\"section-background\">\n      <h2 class=\"text-center\">Projects</h2>\n      <object class=\"img-section-bg\" data=\"./assets/images/logos/logo-blue.svg\" type=\"image/svg+xml\">\n        <img class=\"img-section-bg\" src=\"./assets/images/logos/logo-blue.svg\" alt=\"\">\n      </object>\n    </div>\n    <div class=\"media text-with-image justify-content-center\">\n      <div class=\"media-body align-self-center content-project\">\n        <h4 class=\"mt-0 mb-1\">Hermes app</h4>\n        <p class=\"\">\n          Hermes is a online platform to connect people with delivers in a fast, easy and security way.\n        </p>\n      </div>\n      <div class=\"ml-3 image-circle\">\n        <object data=\"./assets/images/hermes/logo2.svg\" type=\"image/svg+xml\">\n          <img src=\"./assets/images/hermes/logo2.svg\" alt=\"\">\n        </object>\n\n      </div>\n\n    </div>\n\n  </div>\n</section>\n\n<section class=\"section\" id=\"daily-ui\">\n  <div class=\"container\">\n    <div class=\"section-background\">\n      <h2 class=\"text-center\">Daily UI</h2>\n      <object class=\"img-section-bg\" data=\"./assets/images/logos/logo-purple.svg\" type=\"image/svg+xml\">\n        <img class=\"img-section-bg\" src=\"./assets/images/logos/logo-purple.svg\" alt=\"\">\n      </object>\n    </div>\n    <div>\n      <p class=\"main-text\">\n        I challenge myself to finish\n        <a href=\"\">Daily UI</a>. During 100 days I explore new designs and possibilities for web and mobile. It was fantastic to create\n        new solutions for different projects. Thank you to\n        <a href=\"\">Daily UI</a> for this great opportunity to improve my skills in design.</p>\n    </div>\n  </div>\n</section>\n\n<section class=\"section\" id=\"about-me\">\n  <div class=\"container\">\n    <div class=\"section-background\">\n      <h2 class=\"text-center\">Skills</h2>\n      <object class=\"img-section-bg\" data=\"./assets/images/logos/logo-red.svg\" type=\"image/svg+xml\">\n        <img class=\"img-section-bg\" src=\"./assets/images/logos/logo-red.svg\" alt=\"\">\n      </object>\n    </div>\n\n    <div>\n      <p class=\"main-text\">\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui velit exercitationem enim ipsa delectus, incidunt consequatur\n        iste ab iusto natus veritatis! Quos officia nesciunt suscipit pariatur sapiente dicta ut recusandae.\n      </p>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <h4 class=\"title-challenge\">Front-End</h4>\n        <p>\n          As a front-end developer I can develop apps and websites using the new technologies like javascript, html and css.\n        </p>\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-danger\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\"\n            aria-valuemax=\"100\" style=\"width: 85%\">85%</div>\n        </div>\n      </div>\n      <div class=\"col-sm\">\n        <h4 class=\"title-challenge\">Back-End</h4>\n        <p>\n          As a back-developer I can integrate the app with tools that can be processed and stored.\n        </p>\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-danger\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\"\n            aria-valuemax=\"100\" style=\"width: 75%\">75%</div>\n        </div>\n\n      </div>\n      <div class=\"col-sm\">\n        <h4 class=\"title-challenge\">Graphic Designer</h4>\n        <p>\n          As a graphic designer I can plan and represent new apps and website ideas using tools like illustrator, photoshop and affinity designer.\n        </p>\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-danger\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\"\n            aria-valuemax=\"100\" style=\"width: 45%\">45%</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section> -->\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/* GLOBAL */\n.header-background {\n  height: 100%; }\n\n.dark-background-overlay:before {\n  position: absolute;\n  content: \" \";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  z-index: 0; }\n\n.section {\n  padding-bottom: 6rem;\n  padding-top: 6rem; }\n  .section h2 {\n    text-transform: uppercase;\n    font-weight: 700;\n    margin-bottom: 0 !important; }\n  .section .header-separator {\n    height: 4px;\n    border-radius: 2px;\n    background: #242424;\n    width: 80px;\n    margin-bottom: 30px;\n    margin-top: 30px; }\n  .section .section-background {\n    position: relative; }\n    .section .section-background .img-section-bg {\n      height: 5em;\n      position: absolute;\n      left: 0;\n      right: 0;\n      margin: 0 auto;\n      top: -17px;\n      z-index: -1;\n      opacity: 0.8;\n      filter: alpha(opacity=80);\n      /* For IE8 and earlier */ }\n    .section .section-background h2 {\n      z-index: 2;\n      text-shadow: 1px 1px 1px #131313; }\n\n.light-background {\n  background: #f8f8f8; }\n  .light-background h2 {\n    background: -webkit-gradient(linear, left top, left bottom, from(#5e5e5e), to(#1b1a1a));\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent; }\n\n.text-center {\n  text-align: center; }\n\n/* HEADER */\n#header .logo-img {\n  position: relative;\n  z-index: 2;\n  width: 14em; }\n\n#header .title {\n  position: relative;\n  color: white;\n  max-width: 454px; }\n  #header .title p {\n    margin-bottom: 0px; }\n\n#header .button-actions a {\n  margin-top: 1rem; }\n  #header .button-actions a:not(:first-child) {\n    margin-left: 1rem; }\n\n/* PROJECTS */\n#projects .project-content {\n  margin-top: 4rem; }\n\n#projects .image-circle {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -webkit-flex;\n  height: 300px;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 300px;\n          flex: 0 0 300px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: hidden;\n  position: relative;\n  background-image: linear-gradient(-225deg, #7742B2 0%, #c411db 52%, #d628cd 100%);\n  border-radius: 100%; }\n  #projects .image-circle object {\n    width: 75%; }\n  #projects .image-circle img {\n    width: 75%; }\n\n#projects .text-with-image {\n  margin-top: 6rem; }\n  #projects .text-with-image h4 {\n    font-weight: 900;\n    margin-bottom: 1rem !important; }\n  #projects .text-with-image .content-project {\n    padding-right: 5rem; }\n\n.main-text {\n  position: relative;\n  margin-bottom: 4rem;\n  margin-top: 4rem; }\n  .main-text:before {\n    content: \"\\F10D\";\n    font-size: 1.5rem;\n    font-family: FontAwesome;\n    font-style: normal;\n    font-weight: normal;\n    text-decoration: inherit;\n    background: -webkit-gradient(linear, left top, left bottom, from(#F48169), to(#EF4723));\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent; }\n", "", {"version":3,"sources":["/home/pedro/projects/ramuspedro/website/src/app/home/home.component.scss"],"names":[],"mappings":"AACA,YAAY;AAEZ;EACE,aAAY,EACb;;AAED;EACE,mBAAkB;EAClB,aAAY;EACZ,OAAM;EACN,QAAO;EACP,YAAW;EACX,aAAY;EACZ,eAAc;EACd,WAAU,EACX;;AAED;EACE,qBAAoB;EACpB,kBAAiB,EAiClB;EAnCD;IAII,0BAAyB;IACzB,iBAAgB;IAChB,4BAA2B,EAC5B;EAPH;IASI,YAAW;IACX,mBAAkB;IAClB,oBAAmB;IACnB,YAAW;IACX,oBAAmB;IACnB,iBAAgB,EACjB;EAfH;IAiBI,mBAAkB,EAiBnB;IAlCH;MAmBM,YAAW;MACX,mBAAkB;MAClB,QAAO;MACP,SAAQ;MACR,eAAc;MACd,WAAU;MACV,YAAW;MACX,aAAY;MACZ,0BAAyB;MACzB,yBAAyB,EAC1B;IA7BL;MA+BM,WAAU;MACV,iCAAwC,EACzC;;AAIL;EACE,oBAA8B,EAM/B;EAPD;IAGI,wFAA+F;IAC/F,8BAA6B;IAC7B,qCAAoC,EACrC;;AAGH;EACE,mBAAkB,EACnB;;AAGD,YAAY;AAEZ;EAGI,mBAAkB;EAClB,WAAU;EACV,YAAW,EACZ;;AANH;EAQI,mBAAkB;EAClB,aAAY;EACZ,iBAAgB,EAIjB;EAdH;IAYM,mBAAkB,EACnB;;AAbL;EAkBM,iBAAgB,EAKjB;EAvBL;IAoBQ,kBAAiB,EAClB;;AAOP,cAAc;AAEd;EAEI,iBAAgB,EACjB;;AAHH;EAKI,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,sBAAqB;EACrB,cAAa;EACb,oBAAe;MAAf,oBAAe;UAAf,gBAAe;EACf,yBAAuB;MAAvB,sBAAuB;UAAvB,wBAAuB;EACvB,iBAAgB;EAChB,mBAAkB;EAClB,kFAAqG;EACrG,oBAAmB,EAOpB;EApBH;IAeM,WAAU,EACX;EAhBL;IAkBM,WAAU,EACX;;AAnBL;EAsBI,iBAAgB,EASjB;EA/BH;IAwBM,iBAAgB;IAChB,+BAA8B,EAC/B;EA1BL;IA6BM,oBAAmB,EACpB;;AAIL;EACE,mBAAkB;EAClB,oBAAmB;EACnB,iBAAgB,EAYjB;EAfD;IAKI,iBAAgB;IAChB,kBAAiB;IACjB,yBAAwB;IACxB,mBAAkB;IAClB,oBAAmB;IACnB,yBAAwB;IACxB,wFAAuF;IACvF,8BAA6B;IAC7B,qCAAoC,EACrC","file":"home.component.scss","sourcesContent":["\n/* GLOBAL */\n\n.header-background {\n  height: 100%;\n}\n\n.dark-background-overlay:before {\n  position: absolute;\n  content: \" \";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  z-index: 0;\n}\n\n.section {\n  padding-bottom: 6rem;\n  padding-top: 6rem;\n  h2 {\n    text-transform: uppercase;\n    font-weight: 700;\n    margin-bottom: 0 !important;\n  }\n  .header-separator {\n    height: 4px;\n    border-radius: 2px;\n    background: #242424;\n    width: 80px;\n    margin-bottom: 30px;\n    margin-top: 30px;\n  }\n  .section-background {\n    position: relative;\n    .img-section-bg {\n      height: 5em;\n      position: absolute;\n      left: 0;\n      right: 0;\n      margin: 0 auto;\n      top: -17px;\n      z-index: -1;\n      opacity: 0.8;\n      filter: alpha(opacity=80);\n      /* For IE8 and earlier */\n    }\n    h2 {\n      z-index: 2;\n      text-shadow: 1px 1px 1px rgb(19, 19, 19);\n    }\n  }\n}\n\n.light-background {\n  background: rgb(248, 248, 248);\n  h2 {\n    background: -webkit-gradient(linear, left top, left bottom, from(rgb(94, 94, 94)), to(#1b1a1a));\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n}\n\n.text-center {\n  text-align: center;\n}\n\n\n/* HEADER */\n\n#header {\n\n  .logo-img {\n    position: relative;\n    z-index: 2;\n    width: 14em;\n  }\n  .title {\n    position: relative;\n    color: white;\n    max-width: 454px;\n    p {\n      margin-bottom: 0px;\n    }\n  }\n\n  .button-actions {\n    a {\n      margin-top: 1rem;\n      &:not(:first-child) {\n        margin-left: 1rem;\n      }\n\n    }\n  }\n}\n\n\n/* PROJECTS */\n\n#projects {\n  .project-content {\n    margin-top: 4rem;\n  }\n  .image-circle {\n    display: flex;\n    display: -webkit-flex;\n    height: 300px;\n    flex: 0 0 300px;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    background-image: linear-gradient(-225deg, #7742B2 0%, rgb(196, 17, 219) 52%, rgb(214, 40, 205) 100%);\n    border-radius: 100%;\n    object {\n      width: 75%;\n    }\n    img {\n      width: 75%;\n    }\n  }\n  .text-with-image {\n    margin-top: 6rem;\n    h4 {\n      font-weight: 900;\n      margin-bottom: 1rem !important;\n    }\n    .content-project {\n      // max-width: 500px;\n      padding-right: 5rem;\n    }\n  }\n}\n\n.main-text {\n  position: relative;\n  margin-bottom: 4rem;\n  margin-top: 4rem;\n  &:before {\n    content: \"\\f10d\";\n    font-size: 1.5rem;\n    font-family: FontAwesome;\n    font-style: normal;\n    font-weight: normal;\n    text-decoration: inherit;\n    background: -webkit-gradient(linear, left top, left bottom, from(#F48169), to(#EF4723));\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n}\n\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(_elem) {
        this._elem = _elem;
        /* Count weeks to show projects */
        this.countWeek = 1;
        this.show = true;
        /* Variables typewrite */
        this.dataType = ["I'm UI/UX developer.", "I love design apps.", "I can develop web/mobile apps."];
        this.loopNum = 0;
        this.isDeleting = false;
        this.txt = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        // console.log("Jquery: ", document);
        /* Typewrite */
        var elements = __WEBPACK_IMPORTED_MODULE_1_jquery__('.typewrite');
        /* Get elements to type */
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            /* The elements */
            var toRotate = el.getAttribute('data-type');
            var period = el.getAttribute('data-period');
            if (toRotate) {
                // this.TxtType(el, JSON.parse(toRotate), period);
                this.el = el;
                this.toRotate = JSON.parse(toRotate);
                this.period = parseInt(period, 10) || 2000;
                this.TxtType();
            }
        }
        var css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    /* Function typewrite */
    HomeComponent.prototype.TxtType = function () {
        // console.log("my el:", this.toRotate);
        var _this = this;
        var i = this.loopNum % this.toRotate.length;
        // console.log("i", i);
        // console.log("rotate", this.toRotate[0]);
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }
        else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
        var that = this;
        var delta = 200 - Math.random() * 100;
        if (this.isDeleting) {
            delta /= 2;
        }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        }
        else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function () {
            //console.log("el: ", this.el);
            _this.TxtType();
        }, delta);
    };
    /* Function
    * add 1 to week
    */
    HomeComponent.prototype.sumWeek = function (event) {
        var _this = this;
        // console.log("ELEMT: ", this.renderer.setElementAttribute);
        /* avoid to refresh the page */
        event.preventDefault();
        // this.renderer.setElementClass('.deg1', '.deg1-back', true);
        if (this.show) {
            this.show = !this.show;
            setTimeout(function () {
                _this.countWeek++;
                _this.show = !_this.show;
                console.log("Message");
            }, 2000);
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav> -->"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"nav.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map