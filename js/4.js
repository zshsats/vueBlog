webpackJsonp([4],{

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(65);

var _vue2 = _interopRequireDefault(_vue);

var _data = __webpack_require__(376);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tpl = __webpack_require__(377);

__webpack_require__(378);
var Course = _vue2.default.component('Course', {
    template: tpl,
    data: function data() {
        return {
            classList: [{
                id: 0,
                icon: "ios-folder-open",
                name: "Js书籍"
            }, {
                id: 1,
                icon: "ios-folder-open",
                name: "CSS书籍"
            }, {
                id: 2,
                icon: "ios-folder-open",
                name: "HTML5书籍"
            }],
            contentList: _data.dataList,
            classConten: [],
            selectedTitle: "PPT模板资源"

        };
    },
    created: function created() {},

    computed: {},
    methods: {
        getMenu: function getMenu(val) {
            var that = this;
            that.selectedTitle = that.classList[val].name;
            that.classConten = that.contentList[val];
        }
    }
});

exports.default = Course;

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(94)(false);
// imports


// module
exports.push([module.i, ".course .menu-box {\n  width: 240px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.course .menu-box .ivu-menu {\n  height: 100%;\n}\n.course .conten-box {\n  width: auto;\n  height: 100%;\n  margin-left: 240px;\n  background: #fff;\n}\n.course .ivu-row {\n  margin-bottom: 15px;\n}\n.course .t-item {\n  height: 250px;\n  margin-bottom: 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var dataList = [[{
    id: 10,
    title: "JS征程",
    webAdress: "http://www.1ppt.com/"
}], [{
    id: 10,
    title: "JS征程",
    webAdress: "http://www.1ppt.com/"
}], [{
    id: 10,
    title: "JS征程",
    webAdress: "http://www.1ppt.com/"
}]];

exports.dataList = dataList;

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-box course\">\r\n    <div class=\"menu-box\">\r\n        <Menu active-name=\"1\" @on-select=\"getMenu\">\r\n            <MenuItem :name=\"item.id\" v-for=\"(item,index) in classList\" :key=\"index\">\r\n                <Icon :type=\"item.icon\" />\r\n                {{item.name}}\r\n            </MenuItem>\r\n        </Menu>\r\n    </div>\r\n    <div class=\"conten-box\">\r\n        <Card :bordered=\"false\">\r\n            <p slot=\"title\">{{selectedTitle}}</p>\r\n            <Row :gutter=\"20\">\r\n                <Col :xs=\"24\" :sm=\"12\" :md=\"8\" :lg=\"6\" v-for=\"(item,index) in classConten\" :key=\"index\" >\r\n                <Card class=\"t-item\">\r\n                    <div style=\"text-align:center\">\r\n                        <h3>{{item.title}}</h3>\r\n                        <p style=\"text-align: left\">{{item.info}}</p>\r\n                    </div>\r\n                </Card>\r\n                </Col>\r\n            </Row>\r\n\r\n        </Card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(359);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(95)(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(359, function() {
		var newContent = __webpack_require__(359);

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