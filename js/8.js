webpackJsonp([8],{

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(65);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tpl = __webpack_require__(369);
__webpack_require__(370);
var book = _vue2.default.component('book', {
    template: tpl,
    components: {},
    data: function data() {
        return {};
    },
    created: function created() {},

    computed: {},
    methods: {}
});

exports.default = book;

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(94)(false);
// imports


// module
exports.push([module.i, ".book .menu-box {\n  width: 240px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.book .menu-box .ivu-menu {\n  height: 100%;\n}\n.book .conten-box {\n  width: auto;\n  height: 100%;\n  margin-left: 240px;\n  background: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 369:
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-box book\">\r\n    <div class=\"menu-box\">\r\n        <Menu active-name=\"1\">\r\n            <MenuItem name=\"1\">\r\n                <Icon type=\"document-text\"></Icon>\r\n                JS书籍\r\n            </MenuItem>\r\n            <MenuItem name=\"2\">\r\n                <Icon type=\"chatbubbles\"></Icon>\r\n                nodeS户籍\r\n            </MenuItem>\r\n        </Menu>\r\n    </div>\r\n    <div class=\"conten-box\">\r\n        <Card :bordered=\"false\">\r\n            <p slot=\"title\">No border title</p>\r\n            <Row :gutter=\"20\">\r\n                <Col :xs=\"24\" :sm=\"12\" :md=\"8\" :lg=\"6\">\r\n                    <Card>\r\n                        <div style=\"text-align:center\">\r\n                            <img src=\"../../images/logo.png\">\r\n                            <h3>A high quality UI Toolkit based on Vue.js</h3>\r\n                            <p>11111111111111</p>\r\n                        </div>\r\n                    </Card>\r\n                </Col>\r\n                <Col :xs=\"24\" :sm=\"12\" :md=\"8\" :lg=\"6\">\r\n                <Card >\r\n                    <div style=\"text-align:center\">\r\n                        <img src=\"../../images/logo.png\">\r\n                        <h3>A high quality UI Toolkit based on Vue.js</h3>\r\n                    </div>\r\n                </Card>\r\n                </Col>\r\n                <Col :xs=\"24\" :sm=\"12\" :md=\"8\" :lg=\"6\">\r\n                <Card >\r\n                    <div style=\"text-align:center\">\r\n                        <img src=\"../../images/logo.png\">\r\n                        <h3>A high quality UI Toolkit based on Vue.js</h3>\r\n                    </div>\r\n                </Card>\r\n                </Col>\r\n                <Col :xs=\"24\" :sm=\"12\" :md=\"8\" :lg=\"6\">\r\n                <Card >\r\n                    <div style=\"text-align:center\">\r\n                        <img src=\"../../images/logo.png\">\r\n                        <h3>A high quality UI Toolkit based on Vue.js</h3>\r\n                    </div>\r\n                </Card>\r\n                </Col>\r\n                <Col :xs=\"24\" :sm=\"12\" :md=\"8\" :lg=\"6\">\r\n                <Card >\r\n                    <div style=\"text-align:center\">\r\n                        <img src=\"../../images/logo.png\">\r\n                        <h3>A high quality UI Toolkit based on Vue.js</h3>\r\n                    </div>\r\n                </Card>\r\n                </Col>\r\n\r\n            </Row>\r\n\r\n        </Card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(357);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(95)(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(357, function() {
		var newContent = __webpack_require__(357);

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ })

});