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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicio_service__ = __webpack_require__("../../../../../src/app/servicio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(union) {
        this.union = union;
        this.title = 'app';
        this.message = 'hola';
    }
    AppComponent.prototype.sendMessage = function () {
        this.union.sendMessage(this.message);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicio_service__["a" /* ServicioService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routing */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicio_service__ = __webpack_require__("../../../../../src/app/servicio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__partida_partida_component__ = __webpack_require__("../../../../../src/app/partida/partida.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chatpartida_chatpartida_component__ = __webpack_require__("../../../../../src/app/chatpartida/chatpartida.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__game_game_component__ = __webpack_require__("../../../../../src/app/game/game.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_7__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'partida', component: __WEBPACK_IMPORTED_MODULE_10__partida_partida_component__["a" /* PartidaComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_9__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_10__partida_partida_component__["a" /* PartidaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__chatpartida_chatpartida_component__["a" /* ChatpartidaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__game_game_component__["a" /* GameComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                routing
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__servicio_service__["a" /* ServicioService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat {\r\n  height: 300px;\r\n  overflow-y: scroll;\r\n  text-align: left;\r\n}\r\n\r\ninput {\r\n  width: 70%;\r\n  padding: 6px 15px 6px 15px;\r\n}\r\n\r\nbutton {\r\n  width: 20%;\r\n  background-color: rgba(6, 6, 6, 0.87);\r\n  color: white;\r\n}\r\n\r\n.chateo {\r\n  margin-top: 32px;\r\n  padding-left: 35px;\r\n}\r\n\r\np {\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\nspan {\r\n  color: red;\r\n  font-weight: bold;\r\n  font-size: 25px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chateo\">\n  <div class=\"chat\">\n    <p *ngFor=\"let elemento of arrayMensajes\"><span>{{elemento.nombre}}: </span>{{elemento.mensaje}}</p>\n  </div>\n  <div class=\"row\">\n    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Escribe aquí tu mensaje\"\n           aria-label=\"Search\" [(ngModel)]=\"message\">\n    <button type=\"button\" name=\"button\" (click)=\"sendMessage()\">Enviar</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicio_service__ = __webpack_require__("../../../../../src/app/servicio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = /** @class */ (function () {
    function ChatComponent(union) {
        this.union = union;
        this.arrayMensajes = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name = this.union.usuario;
        this.union.getMessage().subscribe(function (data) {
            console.log(data);
            _this.arrayMensajes.push(data);
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        this.union.sendMessage({ "nombre": this.name, "mensaje": this.message });
        this.message = '';
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicio_service__["a" /* ServicioService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chatpartida/chatpartida.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat {\r\n  height: 450px;\r\n  overflow-y: scroll;\r\n  text-align: left;\r\n}\r\n\r\ninput {\r\n  width: 70%;\r\n  padding: 6px 15px 6px 15px;\r\n}\r\n\r\nbutton {\r\n  width: 20%;\r\n  background-color: rgba(6, 6, 6, 0.87);\r\n  color: white;\r\n}\r\n\r\n.chateo {\r\n  margin-top: 32px;\r\n  padding-left: 35px;\r\n}\r\n\r\n.listado {\r\n  margin-right: 20px;\r\n}\r\n\r\np {\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n\r\nspan {\r\n  color: red;\r\n  font-weight: bold;\r\n  font-size: 25px;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chatpartida/chatpartida.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row chateo\">\n  <div class=\"col-2 listado\">\n    <h4>Jugadores</h4>\n    <p *ngFor=\"let elemento of listaUsers\">{{elemento}}</p>\n  </div>\n\n  <div class=\"col-9\">\n    <h1>Chat de partida</h1>\n    <div class=\"chat\">\n      <p *ngFor=\"let elemento of arrayMensajes\"><span>{{elemento.usuario}}: </span>{{elemento.mensaje}}</p>\n    </div>\n    <div class=\"row\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Escribe aquí tu mensaje\"\n             aria-label=\"Search\" [(ngModel)]=\"message\">\n      <button type=\"button\" name=\"button\" (click)=\"sendMessage()\">Enviar</button>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/chatpartida/chatpartida.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatpartidaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicio_service__ = __webpack_require__("../../../../../src/app/servicio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatpartidaComponent = /** @class */ (function () {
    function ChatpartidaComponent(union) {
        this.union = union;
        this.listaUsers = [];
        this.arrayMensajes = [];
    }
    ChatpartidaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.union.getSala().subscribe(function (data) {
            _this.listaUsers = data.usuario;
        });
        this.union.getMensajeSala().subscribe(function (data) {
            _this.arrayMensajes.push(data);
        });
    };
    ChatpartidaComponent.prototype.sendMessage = function () {
        console.log(this.arrayMensajes);
        this.union.sendMensajeSala(this.message);
        this.message = '';
    };
    ChatpartidaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chatpartida',
            template: __webpack_require__("../../../../../src/app/chatpartida/chatpartida.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chatpartida/chatpartida.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicio_service__["a" /* ServicioService */]])
    ], ChatpartidaComponent);
    return ChatpartidaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".juego {\r\n  margin-top: 32px;\r\n}\r\n\r\nbutton {\r\n  font-size: 20px;\r\n  background: none;\r\n  background-color: inherit;\r\n}\r\n\r\n.dados {\r\n  height: 200px;\r\n  background-color: rgba(175, 169, 174, 0.58);\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\noption {\r\n  text-align: center;\r\n  font-size: 30px;\r\n}\r\n\r\nselect {\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  text-align-last: center;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.dados h1 {\r\n  font-size: 80px;\r\n}\r\n\r\n.mostrar {\r\n  display: none;\r\n}\r\n\r\n.espera {\r\n  display: none;\r\n}\r\n\r\n.activo, .continuar {\r\n  display: block;\r\n}\r\n\r\n.inactivo, .esperar {\r\n  display: none;\r\n}\r\n\r\n.fin {\r\n  display: none;\r\n}\r\n\r\n.resultados {\r\n  display: none;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  height: 300px;\r\n  overflow: scroll;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"juego\">\n  <h1>{{titulo}}</h1>\n  <div class=\"row\">\n    <div class=\"col-12 final\" [ngClass]=\"{activo: comienzo == 'activar',inactivo: comienzo == 'desactivar'}\">\n      <button (click)=\"lanzar()\" type=\"button\" class=\"btn btn-light empezar\">Lanzar dados\n      </button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 dados\">\n      <div class=\"mostrar\">\n        <h2>Tras lanzar los dados debes esperar al resto de jugadores</h2>\n        <h1>{{dadouno}} + {{dadodos}} = {{total}}</h1>\n      </div>\n      <div class=\"fin\">\n        <h2 style=\"color: green; font-weight: bold\">¡La partida ha terminado! El ganador es <h1>{{ganador}}</h1></h2>\n        <button id=\"cambiar\" (click)=\"verresultados()\" style=\"font-weight: bold\">Ver resultados</button>\n        <button routerLinkActive=\"active\"\n                [routerLink]=\"['/menu']\" style=\"font-weight: bold\">Volver al menú\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 dados\" [ngClass]=\"{continuar: menuadivina == 'on', esperar: menuadivina == 'off'}\">\n      <h4>Debes intentar adivinar la suma de tus dados con las de los otros jugadores</h4>\n      <div class=\"jugando\">\n        <select class=\"form-control\" id=\"exampleFormControlSelect2\">\n          <option *ngFor=\"let elemento of posibles\">{{elemento}}</option>\n        </select>\n        <button type=\"button\" name=\"button\" (click)=\"sendResultado()\">Enviar</button>\n      </div>\n      <div class=\"espera\">\n        <h2 style=\"color: red\">Esperando a los otros jugadores</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"row resultados\">\n    <div class=\"col-12\">\n      <h2>Aquí tienes los resultados de la partida</h2>\n      <p *ngFor=\"let elemento of resultados\" style=\"font-size: 26px; color: green; font-weight: bold\">\n        {{elemento.user}} ha ganado una ronda con una diferencia de {{elemento.valor}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicio_service__ = __webpack_require__("../../../../../src/app/servicio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameComponent = /** @class */ (function () {
    function GameComponent(union) {
        this.union = union;
        this.posibles = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        this.menuadivina = 'off';
        this.reset = 'resetearOff';
        this.resultados = [];
        this.titulo = 'Debes esperar al resto de jugadores para jugar';
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nombre = this.union.usuario;
        this.union.getAviso().subscribe(function (data) {
            _this.comienzo = data;
            if (_this.comienzo == 'activar') {
                _this.titulo = '¡Jugadores listos, ya puedes jugar!';
            }
        });
        this.union.getAdivinanza().subscribe(function (data) {
            _this.totalgame = data.value;
            _this.menuadivina = data.estado;
        });
        this.union.getGanadorRonda().subscribe(function (data) {
            console.log(data);
            if (data[0].user == _this.nombre) {
                _this.union.sendSumaScore();
            }
            _this.resultados.push(data[0]);
        });
        this.union.getReset().subscribe(function (data) {
            _this.reset = data;
            if (_this.reset == 'resetearOn') {
                $('.mostrar').hide();
                $('.empezar').attr("disabled", false);
                _this.menuadivina = 'off';
                $('.jugando').css("display", 'block');
                $('.espera').css("display", 'none');
            }
        });
        this.union.getFinal().subscribe(function (data) {
            _this.ganador = data.ganador;
            $('.mostrar').hide();
            $('.fin').show();
            $('.final').hide();
        });
        this.union.getPartidaCancelada().subscribe(function (data) {
            _this.cancelar = data;
            if (_this.cancelar == 'cancelada') {
                $('.mostrar').hide();
                $('.fin').show();
                $('.final').hide();
                $('.fin h2').text('Un usuario ha abandonado la partida, vuelve al menú');
            }
        });
    };
    GameComponent.prototype.lanzar = function () {
        this.dadouno = Math.floor((Math.random() * 6) + 1);
        this.dadodos = Math.floor((Math.random() * 6) + 1);
        this.total = this.dadouno + this.dadodos;
        $('.mostrar').show();
        $('.empezar').attr("disabled", true);
        this.union.sendLanzamiento(this.total);
    };
    GameComponent.prototype.mostrar = function () {
        console.log(this.totalgame);
    };
    GameComponent.prototype.sendResultado = function () {
        var resultado = Math.abs(this.totalgame - $('select').val());
        console.log(resultado);
        $('.jugando').css("display", 'none');
        $('.espera').css("display", 'block');
        this.union.sendRespuesta(resultado);
    };
    GameComponent.prototype.verresultados = function () {
        console.log(this.resultados);
        $('.resultados').fadeIn();
    };
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("../../../../../src/app/game/game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicio_service__["a" /* ServicioService */]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  font-family: 'Amatic SC';\r\n}\r\n\r\n.registro {\r\n  margin-top: 200px;\r\n}\r\n\r\n.registro div {\r\n  margin-bottom: 25px;\r\n}\r\n\r\nh1 {\r\n  font-size: 60px;\r\n  font-weight: bold;\r\n}\r\n\r\nbutton, input {\r\n  font-size: 40px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row registro\">\n    <div class=\"col-12\">\n      <h1>Introduce tu nombre de usuario</h1>\n    </div>\n    <div class=\"col-12\">\n      <input [(ngModel)]=\"nickname\" type=\"text\">\n    </div>\n    <div class=\"col-12\">\n      <button (click)=\"acceder()\" type=\"button\" class=\"btn btn-light\" routerLinkActive=\"active\"\n              [routerLink]=\"['/menu']\">Log-in\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicio_service__ = __webpack_require__("../../../../../src/app/servicio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(union) {
        this.union = union;
        this.nickname = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.acceder = function () {
        if (this.nickname == "") {
            this.nickname = 'Anónimo';
        }
        this.union.usuario = this.nickname;
        this.nickname = '';
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicio_service__["a" /* ServicioService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n  font-family: \"Amatic SC\";\r\n}\r\n\r\np {\r\n  font-size: 20px;\r\n}\r\n\r\nh4 {\r\n  font-weight: bold;\r\n}\r\n\r\n.row {\r\n  margin-top: 30px;\r\n}\r\n\r\n.card {\r\n  border: 4px solid white;\r\n}\r\n\r\nbutton {\r\n  font-size: 40px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1>Bienvenido {{nombre}}</h1>\n    </div>\n  </div>\n  <div class=\"row ajustar\">\n    <div class=\"col-7\">\n      <div class=\"row\">\n        <div class=\"card text-white bg-dark col-3\">\n          <div class=\"card-header\">Regla 1</div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Funcionamiento</h4>\n            <p class=\"card-text\">Cada jugador tirará 2 dados, y sabrá el resultado de los mismos</p>\n          </div>\n        </div>\n        <div class=\"card text-white bg-dark col-3\">\n          <div class=\"card-header\">Regla 2</div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Como ganar</h4>\n            <p class=\"card-text\">Ganará el jugador que más se acerque a la suma total de los dados de todos los\n              jugadores</p>\n          </div>\n        </div>\n        <div class=\"card text-white bg-dark col-3\">\n          <div class=\"card-header\">Regla 3</div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">En caso de empate</h4>\n            <p class=\"card-text\">En caso de empate ambos jugadores sumarán puntos</p>\n          </div>\n        </div>\n        <div class=\"card text-white bg-dark col-3\">\n          <div class=\"card-header\">Regla 4</div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Final de juego</h4>\n            <p class=\"card-text\">El ganador será el mejor de 5 rondas</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <app-chat></app-chat>\n    </div>\n    <div class=\"col-1\">\n      <app-users></app-users>\n    </div>\n\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <button (click)=\"iniciar()\" type=\"button\" class=\"btn btn-light\" routerLinkActive=\"active\"\n              [routerLink]=\"['/partida']\">Dale para jugar\n      </button>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicio_service__ = __webpack_require__("../../../../../src/app/servicio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(union) {
        this.union = union;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.nombre = this.union.usuario;
        this.union.sendUsuario(this.nombre);
    };
    MenuComponent.prototype.iniciar = function () {
        this.union.sendUsuarioGame();
        this.union.sendPartida();
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicio_service__["a" /* ServicioService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/partida/partida.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n* {\r\n  font-family: \"Amatic SC\";\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partida/partida.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1>Bienvenido a la partida {{name}} Sala nº: {{sala}}</h1>\n\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <app-chatpartida></app-chatpartida>\n    </div>\n    <div class=\"col-8\">\n      <app-game></app-game>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/partida/partida.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartidaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicio_service__ = __webpack_require__("../../../../../src/app/servicio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PartidaComponent = /** @class */ (function () {
    function PartidaComponent(union) {
        this.union = union;
    }
    PartidaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.union.getSala().subscribe(function (data) {
            _this.sala = data.sala;
        });
        this.name = this.union.usuario;
    };
    PartidaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-partida',
            template: __webpack_require__("../../../../../src/app/partida/partida.component.html"),
            styles: [__webpack_require__("../../../../../src/app/partida/partida.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicio_service__["a" /* ServicioService */]])
    ], PartidaComponent);
    return PartidaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/servicio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicioService = /** @class */ (function () {
    function ServicioService() {
        //private url = 'http://localhost:3000';
        this.url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverSocket;
        this.conectado = false;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.url);
    }
    ServicioService.prototype.sendMessage = function (message) {
        this.socket.emit('new-message', message);
    };
    ServicioService.prototype.sendMensajeSala = function (message) {
        this.socket.emit('mensaje-sala', message);
    };
    ServicioService.prototype.getSala = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.socket.on('conectarSala', function (data) {
                observer.next(data);
            });
        });
    };
    ServicioService.prototype.getPartidaCancelada = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.socket.on('partida-cancelada', function (data) {
                observer.next(data);
            });
        });
    };
    ServicioService.prototype.sendPartida = function () {
        this.socket.emit('nuevapartida');
    };
    ServicioService.prototype.sendUsuarioGame = function () {
        this.socket.emit('usuarioInGame');
    };
    ServicioService.prototype.sendUsuario = function (user) {
        if (!this.conectado) {
            this.socket.emit('nuevousuario', user);
            this.conectado = true;
        }
        else {
            this.socket.emit('recargar-lista-usuarios', user);
            this.socket.emit('salir-sala');
        }
    };
    ServicioService.prototype.sendLanzamiento = function (valor) {
        this.socket.emit('lanzardados', valor);
    };
    ServicioService.prototype.sendRespuesta = function (valor) {
        this.socket.emit('respuesta', valor);
    };
    ServicioService.prototype.sendSumaScore = function () {
        this.socket.emit('sumarScore');
    };
    ServicioService.prototype.getMessage = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.socket.on('mensajechat', function (message) {
                observer.next(message);
                console.log(message);
            });
        });
    };
    ServicioService.prototype.getReset = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.socket.on('resetear-ronda', function (activador) {
                observer.next(activador);
            });
        });
    };
    ServicioService.prototype.getFinal = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.socket.on('partida-terminada', function (activador) {
                observer.next(activador);
            });
        });
    };
    ServicioService.prototype.getGanadorRonda = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.socket.on('ganador-ronda', function (objeto) {
                observer.next(objeto);
            });
        });
    };
    ServicioService.prototype.getAdivinanza = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.socket.on('valor-adivinar', function (valor) {
                observer.next(valor);
            });
        });
    };
    ServicioService.prototype.getMensajeSala = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.socket.on('mensaje-chat', function (message) {
                observer.next(message);
                console.log(message);
            });
        });
    };
    ServicioService.prototype.getAviso = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.socket.on('comienza', function (dato) {
                observer.next(dato);
                console.log(dato);
            });
        });
    };
    ServicioService.prototype.getUsuarios = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.socket.on('usuarios', function (users) {
                observer.next(users);
                console.log(users);
            });
        });
    };
    ServicioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ServicioService);
    return ServicioService;
}());



/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4 {\r\n  font-weight: bold;\r\n  color: #62b800;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Usuarios conectados</h1>\n  <div *ngFor=\"let elemento of arrayUsers\">\n    <h4>{{elemento}}</h4>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicio_service__ = __webpack_require__("../../../../../src/app/servicio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent(union) {
        this.union = union;
        this.arrayUsers = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.union.getUsuarios().subscribe(function (data) {
            _this.arrayUsers = (data);
        });
    };
    UsersComponent.prototype.prueba = function () {
        console.log(this.arrayUsers);
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicio_service__["a" /* ServicioService */]])
    ], UsersComponent);
    return UsersComponent;
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
    production: false,
    serverSocket: "http://localhost:3000"
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map