"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: "setSubscribeKey",
    value: function setSubscribeKey(subscribeKey) {
      this._subscribeKey = subscribeKey;
      return this;
    }
  }, {
    key: "setPublishKey",
    value: function setPublishKey(publishkey) {
      this._publishKey = publishkey;
      return this;
    }
  }, {
    key: "setAuthKey",
    value: function setAuthKey(authKey) {
      this._authKey = authKey;
      return this;
    }
  }, {
    key: "getSubscribeKey",
    value: function getSubscribeKey() {
      return this._subscribeKey;
    }
  }, {
    key: "getPublishKey",
    value: function getPublishKey() {
      return this._publishKey;
    }
  }, {
    key: "getAuthKey",
    value: function getAuthKey() {
      return this._authKey;
    }
  }]);

  return _class;
}();

exports.default = _class;
//# sourceMappingURL=keychain.js.map
