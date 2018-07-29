webpackJsonp([3],{

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(65);

var _vue2 = _interopRequireDefault(_vue);

var _data = __webpack_require__(373);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tpl = __webpack_require__(374);

__webpack_require__(375);
var lookVideo = _vue2.default.component('lookVideo', {
    template: tpl,
    components: {},
    data: function data() {
        return {
            lookList: _data.dataList

        };
    },
    created: function created() {},

    computed: {},
    methods: {}
});

exports.default = lookVideo;

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(94)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var dataList = [{
    id: 1,
    title: "我不是药神",
    address: "1",
    password: "1"
}, {
    id: 2,
    title: "侏罗纪世界2",
    address: "https://pan.baidu.com/s/1HUmcme3uFf1gk5xDjpsYlg",
    password: "4avq"
}, {
    id: 3,
    title: "邪不压正",
    address: "https://pan.baidu.com/s/1IPPbmXY1bVruHFppG9Y7tA",
    password: "si4p"
}];

exports.dataList = dataList;

/***/ }),

/***/ 374:
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-box video\">\r\n    <Card :bordered=\"false\">\r\n        <p slot=\"title\" style=\"font-size: 16px;\">免费看电影</p>\r\n        <div class=\"l-box\">\r\n            <p>注意：因为净网的原因，可能无法提取文件，如有需要，请联系我</p>\r\n            <div class=\"l-item\" v-for=\"(item,index) in lookList\" :key=\"index\" >\r\n                <Divider>{{item.title}}</Divider>\r\n                <p><span style=\"font-size: 16px;font-weight: 600\">地址:</span><a :href=\"item.address\" target=\"_blank\">{{item.address}}</a></p>\r\n                <p><span style=\"font-size: 16px;font-weight: 600\">提取码:</span>{{item.password}}</p>\r\n            </div>\r\n        </div>\r\n    </Card>\r\n</div>"

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(358);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(95)(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(358, function() {
		var newContent = __webpack_require__(358);

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