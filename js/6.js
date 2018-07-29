webpackJsonp([6],{

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(65);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tpl = __webpack_require__(382);
__webpack_require__(383);
var startMain = _vue2.default.component('startMain', {
    template: tpl,
    data: function data() {
        return {
            menuList: [{
                id: 1,
                name: "首页",
                icon: "ios-navigate",
                path: "home"
            }, {
                id: 2,
                name: "资源分享",
                icon: "ios-navigate",
                path: "souse"
            }, {
                id: 3,
                name: "视频VIP",
                icon: "ios-navigate",
                path: "video"
            }, {
                id: 4,
                name: "个人中心",
                icon: "ios-navigate",
                path: "info"
            }]
        };
    },

    computed: {},
    methods: {}
});

exports.default = startMain;

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(94)(false);
// imports


// module
exports.push([module.i, ".appStart {\n  height: 100%;\n  width: 100%;\n  background: #eee;\n}\n.appStart .blog-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 60px;\n  background-color: #495060;\n}\n.appStart .blog-header .ivu-menu-horizontal {\n  width: 900px;\n  float: right;\n}\n.appStart .blog-content {\n  width: 100%;\n  height: 100%;\n  padding-top: 75px;\n  position: relative;\n}\n.appStart .blog-box {\n  width: 80%;\n  height: 100%;\n  margin: 0 auto;\n  overflow-y: auto;\n  position: relative;\n  overflow-x: hidden;\n}\n.appStart .ivu-select-dropdown {\n  z-index: 9999999;\n}\n", ""]);

// exports


/***/ }),

/***/ 382:
/***/ (function(module, exports) {

module.exports = "<section class=\"appStart\">\r\n   <div class=\"blog-header clearfix\">\r\n       <Menu mode=\"horizontal\" theme=\"dark\" active-name=\"1\">\r\n           <MenuItem name=\"1\">\r\n               <router-link to=\"/home\" style=\"color: rgba(255,255,255,.7);\">\r\n                   <Icon type=\"ios-navigate\"></Icon>\r\n                   技术博客\r\n               </router-link>\r\n           </MenuItem>\r\n           <MenuItem name=\"1\">\r\n               <router-link to=\"/resource\" style=\"color: rgba(255,255,255,.7);\">\r\n                   <Icon type=\"ios-navigate\"></Icon>\r\n                   免费资源\r\n               </router-link>\r\n           </MenuItem>\r\n           <Submenu name=\"2\">\r\n               <template slot=\"title\">\r\n                   <Icon type=\"ios-stats\" />\r\n                   免费VIP视频\r\n               </template>\r\n               <MenuItem name=\"21\">\r\n                   <router-link to=\"/video\">\r\n                       VIP视频解析\r\n                   </router-link>\r\n               </MenuItem>\r\n               <MenuItem name=\"22\">\r\n                   <router-link to=\"/lookVideo\">\r\n                       免费大片\r\n                   </router-link>\r\n               </MenuItem>\r\n\r\n           </Submenu>\r\n           <MenuItem name=\"3\">\r\n               <router-link to=\"/book\" style=\"color: rgba(255,255,255,.7);\">\r\n                   <Icon type=\"ios-navigate\"></Icon>\r\n                   电子书籍\r\n               </router-link>\r\n           </MenuItem>\r\n           <MenuItem name=\"4\">\r\n               <router-link to=\"/course\" style=\"color: rgba(255,255,255,.7);\">\r\n                   <Icon type=\"ios-navigate\"></Icon>\r\n                   学习教程\r\n               </router-link>\r\n           </MenuItem>\r\n           <MenuItem name=\"5\">\r\n               <router-link to=\"/tool\" style=\"color: rgba(255,255,255,.7);\">\r\n                   <Icon type=\"ios-navigate\"></Icon>\r\n                   高效工具\r\n               </router-link>\r\n           </MenuItem>\r\n           <MenuItem name=\"6\">\r\n               <router-link to=\"/book\" style=\"color: rgba(255,255,255,.7);\">\r\n                   <Icon type=\"ios-navigate\"></Icon>\r\n                   小技巧\r\n               </router-link>\r\n           </MenuItem>\r\n       </Menu>\r\n   </div>\r\n   <div class=\"blog-content\">\r\n       <router-view></router-view>\r\n   </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(361);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(95)(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(361, function() {
		var newContent = __webpack_require__(361);

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