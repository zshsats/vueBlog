webpackJsonp([2],{

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(65);

var _vue2 = _interopRequireDefault(_vue);

var _data = __webpack_require__(370);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tpl = __webpack_require__(371);
__webpack_require__(372);

var resource = _vue2.default.component('resource', {
    template: tpl,
    components: {},
    data: function data() {
        return {
            classList: [{
                id: 0,
                icon: "ios-folder-open",
                name: "PPT模板资源"
            }, {
                id: 1,
                icon: "ios-folder-open",
                name: "综合资源站"
            }, {
                id: 2,
                icon: "ios-folder-open",
                name: "图标素材"
            }],
            contentList: _data.dataList,
            classConten: [],
            selectedTitle: "PPT模板资源"

        };
    },
    created: function created() {
        this.classConten = this.contentList[0];
    },

    computed: {},
    methods: {
        getMenu: function getMenu(val) {
            var that = this;
            that.selectedTitle = that.classList[val].name;
            that.classConten = that.contentList[val];
        }
    }
});

exports.default = resource;

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(94)(false);
// imports


// module
exports.push([module.i, ".book .menu-box {\n  width: 240px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.book .menu-box .ivu-menu {\n  height: 100%;\n}\n.book .conten-box {\n  width: auto;\n  height: 100%;\n  margin-left: 240px;\n  background: #fff;\n}\n.book .ivu-divider-inner-text {\n  font-size: 16px;\n  font-weight: 600;\n}\n", ""]);

// exports


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var dataList = [[{
    id: 10,
    title: "第一PPT",
    info: "第一PPT模板网提供各类PPT模板免费下载,PPT背景图片,PPT素材,PPT模板下载,PPT下载,幻灯片背景图片大全,幻灯片模板下载,幻灯片下载,幻灯片素材,PowerPoint模版免费下载...",
    webAdress: "http://www.1ppt.com/"
}, {
    id: 11,
    title: "51ppt模板网",
    info: "51ppt模板网提供部分原创ppt模板及PPTer分享的优质ppt模板下载,动态ppt模板,宽屏ppt模板,PowerPoint模版背景,ppt模板素材、图表、特效等幻灯片模板设计教程下载",
    webAdress: "http://www.51pptmoban.com/"
}, {
    id: 12,
    title: "优品PPT",
    info: "优品PPT模板网是一家专注于分享高质量的免费PPT模板下载网站,包括图表、背景图片、素材、教程等各类PPT资源",
    webAdress: "http://www.ypppt.com/"
}, {
    id: 13,
    title: "管理资源吧",
    info: "PPT模板栏目为大家提供免费PPT模板下载,其中包括了多种类型的ppt背景图片素材,能够满足大家的日常工作需求,赶紧来下载吧",
    webAdress: "http://www.glzy8.com/list/1/"
}], [{
    id: 21,
    title: "站长素材",
    info: "站长素材是一家大型综合设计类素材网站,提供高清图片素材、PSD素材、PPT模板、网页模板、脚本素材、简历模板、QQ表情、矢量素材、3D素材、酷站欣赏、Flash动画等设计...",
    webAdress: "http://sc.chinaz.com/"
}], [{
    id: 31,
    title: "Easyicon图标",
    info: "提供★超过五十万个★SVG、PNG、ICO、ICNS格式图标搜索、图标下载服务",
    webAdress: "https://www.easyicon.net/"
}, {
    id: 32,
    title: "Iconfont-阿里巴巴矢量图标库",
    info: "Iconfont-国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能。阿里巴巴体验团队倾力打造,设计和前端开发的便捷工具",
    webAdress: "http://www.iconfont.cn/"
}, {
    id: 33,
    title: "IconPng.com 爱看图标网,免费中文图标搜索引擎",
    info: "收录了99837个免费的PPT图标ICON素材及网页设计图标资源,具有按分类、色系、标题、系列搜索图标的功能,帮助您以最快的速度找到喜欢的图标ICONS。",
    webAdress: "http://www.iconpng.com/"
}]];

exports.dataList = dataList;

/***/ }),

/***/ 371:
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-box book\">\r\n    <div class=\"menu-box\">\r\n        <Menu active-name=\"1\" @on-select=\"getMenu\">\r\n            <MenuItem :name=\"item.id\" v-for=\"(item,index) in classList\" :key=\"index\">\r\n                <Icon :type=\"item.icon\" />\r\n                {{item.name}}\r\n            </MenuItem>\r\n        </Menu>\r\n    </div>\r\n    <div class=\"conten-box\">\r\n        <Card :bordered=\"false\">\r\n            <p slot=\"title\">{{selectedTitle}}</p>\r\n            <div class=\"r-item\" v-for=\"(item,index) in classConten\" :key=\"index\">\r\n                <Divider orientation=\"left\">{{item.title}}</Divider>\r\n                <p><span style=\"font-size: 16px;font-weight: 600\">简介:</span>{{item.info}}</p>\r\n                <p><span style=\"font-size: 16px;font-weight: 600\">站点:</span><a :href=\"item.webAdress\" target=\"_blank\">{{item.webAdress}}</a></p>\r\n            </div>\r\n        </Card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 372:
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