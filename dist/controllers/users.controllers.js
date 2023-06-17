"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchUser = exports.pingUser = exports.listuser = exports.isValidToken = exports.createUser = exports.UpdateUser = exports.DeleteUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _db = require("../config/database/db");
var _message = _interopRequireDefault(require("../config/message"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var createUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var name, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          name = req.body.name; // const result = await pool.query(`INSERT INTO users (name) VALUES ('${name}')`)
          _context.next = 4;
          return _db.pool.query("call spInsertarUser ('".concat(name, "')"));
        case 4:
          result = _context.sent;
          if (result[0].affectedRows = 1) {
            res.json(result);
          } else {
            res.json({
              "error": "registro no agregado"
            });
          }
          _context.next = 12;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          (0, _message["default"])(_context.t0.message, "danger");
          res.status(500);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createUser = createUser;
var listuser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _db.pool.query("call spListarUser ()");
        case 3:
          result = _context2.sent;
          res.json(result[0][0]);
          _context2.next = 11;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          (0, _message["default"])(_context2.t0.message, "danger");
          res.status(500);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function listuser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.listuser = listuser;
var searchUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return _db.pool.query("call spBuscarUsers (".concat(id, ")"));
        case 4:
          result = _context3.sent;
          res.json(result);
          _context3.next = 12;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          (0, _message["default"])(_context3.t0.message, "danger");
          res.status(500);
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function searchUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.searchUser = searchUser;
var pingUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _db.pool.query("SELECT 'HOLA USUARIO' AS result ");
        case 3:
          result = _context4.sent;
          res.send(result[0]);
          _context4.next = 11;
          break;
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          (0, _message["default"])(_context4.t0.message, "danger");
          res.status(500);
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function pingUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.pingUser = pingUser;
var UpdateUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, name, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.body.id;
          name = req.body.name;
          _context5.next = 5;
          return _db.pool.query("call spModificarUser (".concat(id, ",'").concat(name, "')"));
        case 5:
          result = _context5.sent;
          res.json(result);
          _context5.next = 13;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          (0, _message["default"])(_context5.t0.message, "danger");
          res.status(500);
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function UpdateUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.UpdateUser = UpdateUser;
var DeleteUser = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _context6.next = 4;
          return _db.pool.query("call spEliminarUser(".concat(id, ")"));
        case 4:
          result = _context6.sent;
          res.json(result);
          _context6.next = 12;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          (0, _message["default"])(_context6.t0.message, "danger");
          res.status(500);
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return function DeleteUser(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.DeleteUser = DeleteUser;
var isValidToken = function isValidToken(req, res, next) {
  // const tokenClient = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJMVUlTIEJFQ0VSUlJBIiwiaWQiOiIxMDQyMzc2MjAxNDg2MTQ0MTA0NDQiLCJlbWFpbCI6ImVsaW5nZW5pZXJvcHJvZmVzb3JAZ21haWwuY29tIiwiaWF0IjoxNjgwMDQzMTQ1LCJleHAiOjE2ODAwNDY3NDV9.CN8oJ3L2Gbc4-HYf9-T2-zTFEyeTMDLe0y4bLAPmGlM";
  var tokenClient = req.cookies.eib_per;
  console.log(tokenClient);
  try {
    _jsonwebtoken["default"].verify(tokenClient, process.env.SECRET_KEY, function (err, decoded) {
      if (!err) {
        // res.send("todo bien");
        next();
      } else {
        res.send({
          "error": "El token es errado o ha caducado "
        });
      }
      // console.log(err);
    });
  } catch (error) {
    res.send({
      "error": "El token es errado o ha caducado "
    });
  }
};
exports.isValidToken = isValidToken;