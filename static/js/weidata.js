'use strict';exports.__esModule = true;var _promise = require('babel-runtime/core-js/promise');var _promise2 = _interopRequireDefault(_promise);var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);
var _request = require('request');var _request2 = _interopRequireDefault(_request);
var _crypto = require('crypto');var _crypto2 = _interopRequireDefault(_crypto);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_think$service$base) {(0, _inherits3.default)(_class, _think$service$base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _think$service$base.apply(this, arguments));}_class.prototype.


  init = function init() {var _think$service$base$p;for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
    (_think$service$base$p = _think$service$base.prototype.init).call.apply(_think$service$base$p, [this].concat(args));};_class.prototype.

  getJsSdk = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(self) {var 
      URL, 
      DATA, 
      RES_INF;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:URL = 'http://hongyan.cqupt.edu.cn/MagicLoop/index.php?s=/addon/Api/Api/apiJsTicket';DATA = getData();RES_INF = void 0;_context.prev = 3;if (!(

              global.jsTicketCache && global.jsTicketCache.expire < +new Date())) {_context.next = 8;break;}
              RES_INF = global.jsTicketCache.data;_context.next = 12;break;case 8:_context.next = 10;return (

                requestPost(URL, DATA));case 10:RES_INF = _context.sent;
              global.jsTicketCache = { 
                data: RES_INF, 
                expire: parseInt(RES_INF['expire']) * 1000 + +new Date() };case 12:


              RES_INF.timeStamp = DATA.timestamp;
              RES_INF.str = DATA.string;
              RES_INF.appid = 'wx81a4a4b77ec98ff4';
              RES_INF.signature = hash('jsapi_ticket=' + RES_INF.data + '&noncestr=' + RES_INF.str + '&timestamp=' + RES_INF.timeStamp + '&url=' + ('http://' + 'hongyan.cqupt.edu.cn' + self.http.req.url), 'sha1');return _context.abrupt('return', 
              RES_INF);case 19:_context.prev = 19;_context.t0 = _context['catch'](3);return _context.abrupt('return', 

              false);case 22:case 'end':return _context.stop();}}}, _callee, this, [[3, 19]]);}));function getJsSdk(_x) {return ref.apply(this, arguments);}return getJsSdk;}();_class.prototype.


  getOpenid = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(self) {var 
      redirect_uri, 

      APPID, 
      URL, 
      LOCATION, 
      code, 

      DATA, 

      RES_INF;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:redirect_uri = 'http://hongyan.cqupt.edu.cn/' + self.http.req.url;redirect_uri = UrlEncode(redirect_uri);APPID = 'wx81a4a4b77ec98ff4';URL = 'http://hongyan.cqupt.edu.cn/MagicLoop/index.php?s=/addon/Api/Api/webOauth';LOCATION = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + APPID + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=snsapi_userinfo&state=sfasdfasdfefvee#wechat_redirect';code = self.get('code');if (!code) {_context2.next = 20;break;}DATA = getData(null, code);_context2.prev = 8;_context2.next = 11;return requestPost(URL, DATA);case 11:RES_INF = _context2.sent;return _context2.abrupt('return', 
              RES_INF);case 15:_context2.prev = 15;_context2.t0 = _context2['catch'](8);return _context2.abrupt('return', 

              false);case 18:_context2.next = 22;break;case 20:


              self.http.res.writeHead('307', { 'Location': LOCATION });
              self.http.res.end();case 22:case 'end':return _context2.stop();}}}, _callee2, this, [[8, 15]]);}));function getOpenid(_x2) {return ref.apply(this, arguments);}return getOpenid;}();


  /**
  * 该方法通过openid查询该人是否绑定了学号
  */_class.prototype.
  getBindVerify = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(openid) {var 
      URL, 
      DATA, 

      RES_INF;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:URL = 'http://hongyan.cqupt.edu.cn/MagicLoop/index.php?s=/addon/Api/Api/bindVerify';DATA = getData(openid);_context3.prev = 2;_context3.next = 5;return requestPost(URL, DATA);case 5:RES_INF = _context3.sent;return _context3.abrupt('return', 
              RES_INF);case 9:_context3.prev = 9;_context3.t0 = _context3['catch'](2);return _context3.abrupt('return', 

              false);case 12:case 'end':return _context3.stop();}}}, _callee3, this, [[2, 9]]);}));function getBindVerify(_x3) {return ref.apply(this, arguments);}return getBindVerify;}();


  /**
   * 该方法通过openid查询该人是否关注
   */_class.prototype.
  getOpenidVerify = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(openid) {var 
      URL, 
      DATA, 

      RES_INF;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:URL = 'http://hongyan.cqupt.edu.cn/MagicLoop/index.php?s=/addon/Api/Api/openidVerify';DATA = getData(openid);_context4.prev = 2;_context4.next = 5;return requestPost(URL, DATA);case 5:RES_INF = _context4.sent;return _context4.abrupt('return', 
              RES_INF);case 9:_context4.prev = 9;_context4.t0 = _context4['catch'](2);case 11:case 'end':return _context4.stop();}}}, _callee4, this, [[2, 9]]);}));function getOpenidVerify(_x4) {return ref.apply(this, arguments);}return getOpenidVerify;}();




  /**
  * 该方法通过openid查询该人信息
  */_class.prototype.
  getUserInf = function () {var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(openid) {var 
      URL, 
      DATA, 

      RES_INF;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:URL = 'http://hongyan.cqupt.edu.cn/MagicLoop/index.php?s=/addon/Api/Api/userinfo';DATA = getData(openid);_context5.prev = 2;_context5.next = 5;return requestPost(URL, DATA);case 5:RES_INF = _context5.sent;return _context5.abrupt('return', 
              RES_INF);case 9:_context5.prev = 9;_context5.t0 = _context5['catch'](2);return _context5.abrupt('return', 

              false);case 12:case 'end':return _context5.stop();}}}, _callee5, this, [[2, 9]]);}));function getUserInf(_x5) {return ref.apply(this, arguments);}return getUserInf;}();return _class;}(think.service.base);exports.default = _class;



function makeStr() {
  var sStr = 'abcdefghijklmnopqistuvwxyz0123456789ABCDEFGHIGKLMNOPQISTUVWXYZ';
  var rStr = '';
  for (var i = 0; i < 16; i++) {
    rStr += sStr[selectFrom(0, 61)];}

  return rStr;}

function selectFrom(lower, upper) {
  var choices = upper - lower + 1;
  return Math.floor(Math.random() * choices + lower);}

function hash(str, type) {
  var hashObj = _crypto2.default.createHash(type);
  hashObj.update(str);
  return hashObj.digest('hex');}

function requestPost(url, data) {
  return new _promise2.default(function (resolve, reject) {
    _request2.default.post(url, { form: data }, function (err, res, body) {
      if (err) {
        reject(err);} else 
      {
        try {
          resolve(JSON.parse(body));} 
        catch (e) {
          reject(e);}}});});}





function getData(openid, code) {
  var token = 'gh_68f0a1ffc303';
  var timeStamp = Math.floor(new Date().getTime()).toString();
  var str = makeStr();
  var secret = hash(hash(timeStamp, 'sha1') + hash(str, 'md5') + 'redrock', 'sha1');
  var data = { 
    "timestamp": timeStamp, 
    "string": str, 
    "secret": secret, 
    "token": token };

  if (code) {
    data.code = code;} else 
  if (openid) {
    data.openid = openid;}

  return data;}

function str2asc(str) {
  return str.charCodeAt(0).toString(16);}

function asc2str(str) {
  return String.fromCharCode(str);}

function UrlEncode(str) {
  var ret = "";
  var strSpecial = "!\"#$%&'()*+,/:;<=>?[]^`{|}~%";
  var tt = "";
  for (var i = 0, len = str.length; i < len; i++) {
    var chr = str.charAt(i);
    var c = str2asc(chr);
    tt += chr + ":" + c + "n";
    if (parseInt("0x" + c) > 0x7f) {
      ret += "%" + c.slice(0, 2) + "%" + c.slice(-2);} else 
    {
      if (chr == " ") 
      ret += "+";else 
      if (strSpecial.indexOf(chr) != -1) 
      ret += "%" + c.toString(16);else 

      ret += chr;}}


  return ret;}