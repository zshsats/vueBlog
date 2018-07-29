webpackJsonp([0],{

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(65);

var _vue2 = _interopRequireDefault(_vue);

var _data = __webpack_require__(366);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tpl = __webpack_require__(367);

__webpack_require__(368);
var VideoMain = _vue2.default.component('VideoMain', {
    template: tpl,
    components: {},
    data: function data() {
        return {
            addressList: _data.dataList,
            formVideo: {
                addressId: 0,
                vipAddress: ''
            },

            address: ""
        };
    },
    created: function created() {},

    computed: {},
    methods: {
        selectedAddress: function selectedAddress(val) {
            this.address = val.label + this.formVideo.vipAddress;
        },
        playVideo: function playVideo() {
            window.open(this.address);
        }
    }
});

exports.default = VideoMain;

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(94)(false);
// imports


// module
exports.push([module.i, ".video .ivu-divider-inner-text {\n  font-size: 16px;\n  font-weight: 600;\n}\n.video .v-frame {\n  margin-top: 30px;\n  width: 100%;\n  height: 650px;\n}\n", ""]);

// exports


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var dataList = [{
    id: 1,
    address: "http://jx.vipjiexi360.com/youku/apiget.php?url="
}, {
    id: 2,
    address: "http://jx.ejiafarm.com/dy.php?url="
}, {
    id: 3,
    address: "http://164dyw.duapp.com/youku/apiget.php?url="
}, {
    id: 4,
    address: "http://jx.ejiafarm.com/dy.php?url="
}, {
    id: 5,
    address: "http://mlxztz.com/player.php?url="
}, {
    id: 6,
    address: "http://jx.ejiafarm.com/yun/dy.php?url="
}, {
    id: 7,
    address: "http://jx.sooyyu.com/jiexi3/?url="
}, {
    id: 8,
    address: "http://img.yanjiaozhaopinwang.com/jx/?url="
}, {
    id: 9,
    address: "http://jiexi.bzd520.com/jx2/?url="
}, {
    id: 10,
    address: "http://xxx.sooyyu.com/vip2/?url="
}, {
    id: 11,
    address: "http://img.yanjiaozhaopinwang.com/jx/?url="
}, {
    id: 12,
    address: "  http://jx.sooyyu.com/jiexi2/?url="
}, {
    id: 13,
    address: "http://164dyw.duapp.com/jx1/?url="
}];

exports.dataList = dataList;

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-box video\">\r\n    <Card :bordered=\"false\">\r\n        <p slot=\"title\" style=\"font-size: 16px;\">视频资源</p>\r\n       <div class=\"v-box\">\r\n           <Form :model=\"formVideo\" :label-width=\"80\">\r\n               <FormItem label=\"vip视频地址\">\r\n                   <Input v-model=\"formVideo.vipAddress\" placeholder=\"拷贝你要观看的VIP视频地址\"></Input>\r\n               </FormItem>\r\n               <Row  :gutter=\"22\">\r\n                   <Col span=\"18\">\r\n                   <FormItem label=\"选择解析源\">\r\n                       <Select v-model=\"formVideo.addressId\" filterable :label-in-value=\"true\" @on-change=\"selectedAddress\">\r\n                           <Option v-for=\"(item,index) in addressList\" :value=\"item.id\" :key=\"index\">{{ item.address }}</Option>\r\n                       </Select>\r\n                   </FormItem>\r\n                   </Col>\r\n                   <Col span=\"6\" >\r\n                   <Button @click=\"playVideo\">播放</Button>\r\n                   </Col>\r\n               </Row>\r\n           </Form>\r\n\r\n           <div class=\"v-frame\">\r\n                <iframe :src=\"address\" frameborder=\"0\"  width=\"100%\" height=\"100%\"></iframe>\r\n           </div>\r\n       </div>\r\n    </Card>\r\n</div>"

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(356);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(95)(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(356, function() {
		var newContent = __webpack_require__(356);

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