"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _enviroments = _interopRequireDefault(require("./config/enviroments"));
var _users = _interopRequireDefault(require("./routes/users.routes"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var app = (0, _express["default"])();

//SETTINGS //MIDDLEWARES (FUNCIONES QUE SE REQUIEREN PARA QUE SE PUEDA USAR LA APP)
app.set("PORT", process.env.PORT || 1000);

//middlewares
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _morgan["default"])('dev'));
app.use((0, _cookieParser["default"])());

//ROUTES // PONER ./ SIGNIFICA DESDE LA RAIZ, O SEA TODA LA RUTA ACTUAL DE ESTE ARCHIVO
app.get('/', function (req, res) {
  res.send({
    message: 'Bienvenido a mi aplicacion'
  });
});
app.use('/api', _users["default"]);
var _default = app;
exports["default"] = _default;