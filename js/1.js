webpackJsonp([1],{

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(65);

var _vue2 = _interopRequireDefault(_vue);

var _data = __webpack_require__(377);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tpl = __webpack_require__(378);

__webpack_require__(379);
var VideoGuide = _vue2.default.component('VideoGuide', {
    template: tpl,
    components: {},
    data: function data() {
        return {
            split3: 0.5,
            split4: 0.5,
            lineList: _data.dataList,
            address: ""

        };
    },
    created: function created() {},

    computed: {},
    methods: {
        openLine: function openLine(item) {
            this.address = item.address;
            window.open(this.address);
        }
    }
});

exports.default = VideoGuide;

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(94)(false);
// imports


// module
exports.push([module.i, ".video-guide .g-box {\n  padding: 15px;\n}\n.video-guide .l-item {\n  background: #fff;\n  padding: 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var dataList = [{
    id: 1,
    title: "4K屋",
    info: "4K屋提供最全的最新电视剧,2018最新电影,韩国电视剧、香港TVB电视剧、日本动漫、日剧、美剧、综艺的在线观看...",
    address: "http://www.kkkkmao.com/"
}];

exports.dataList = dataList;

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-box video-guide\">\r\n    <div class=\"g-box\">\r\n        <Row :gutter=\"22\">\r\n            <Col span=\"12\">\r\n                <div class=\"l-item\" v-for=\"(item,index) in lineList\" :key=\"index\" @click=\"openLine(item)\">\r\n                    <Divider>{{item.title}}</Divider>\r\n                    <p><span style=\"font-size: 16px;font-weight: 600\">简介:</span>{{item.info}}</p>\r\n                    <p><span style=\"font-size: 16px;font-weight: 600\">地址:</span>{{item.address}}</p>\r\n                </div>\r\n            </Col>\r\n            <Col span=\"12\">\r\n                <Card :bordered=\"false\">\r\n                    <p slot=\"title\">如何免费看最新的大片</p>\r\n                    <div class=\"\">\r\n                        <Divider>方法一:</Divider>\r\n                        <p><span style=\"font-size: 16px;font-weight: 600\">第一步:</span>\r\n                            打开浏览器搜素磁力搜素,搜素你要观看的电影\r\n                        </p>\r\n                        <p><span style=\"font-size: 16px;font-weight: 600\">第二步:</span>\r\n                            打开下载即可\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"\">\r\n                        <Divider>方法二:</Divider>\r\n                        <p><span style=\"font-size: 16px;font-weight: 600\"></span>\r\n                            打开浏览器搜电影名+迅雷下载,搜素你要观看的电影,找到后,打开下载\r\n                        </p>\r\n\r\n                    </div>\r\n                    <div class=\"\">\r\n                        <Divider>方法三:</Divider>\r\n                        <p><span style=\"font-size: 16px;font-weight: 600\"></span>\r\n                            打开浏览器搜电影名+百度云,搜素你要观看的电影,找到后,打开下载\r\n                        </p>\r\n\r\n                    </div>\r\n                </Card>\r\n            </Col>\r\n        </Row>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(360);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(95)(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(360, function() {
		var newContent = __webpack_require__(360);

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