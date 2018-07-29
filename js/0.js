webpackJsonp([0],{

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(65);

var _vue2 = _interopRequireDefault(_vue);

var _data = __webpack_require__(364);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tpl = __webpack_require__(365);

__webpack_require__(366);
var VideoMain = _vue2.default.component('VideoMain', {
    template: tpl,
    components: {},
    data: function data() {
        return {
            addressList: _data.dataList,
            formVideo: {
                addressId: 0,
                vipAddress: 'http://www.iqiyi.com/v_19rr2ft74s.html'
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

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(94)(false);
// imports


// module
exports.push([module.i, ".video .ivu-divider-inner-text {\n  font-size: 16px;\n  font-weight: 600;\n}\n.video .v-frame {\n  margin-top: 30px;\n  width: 100%;\n  height: 600px;\n  border: 1px solid #eeeeee;\n}\n", ""]);

// exports


/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var dataList = [

// {
//     id: 17,
//     address: "http://api.pucms.com/?url="
// },
{
    id: 18,
    address: "http://api.xfsub.com/index.php?url="
}, {
    id: 19,
    address: "http://www.82190555.com/index/qqvod.php?url="
}, {
    id: 20,
    address: "http://vip.jlsprh.com/index.php?url="
}, {
    id: 21,
    address: "http://2gty.com/apiurl/yun.php?url="
}, {
    id: 24,
    address: "http://jx.618g.com/?url="
}, {
    id: 25,
    address: "http://api.visaok.net/?url="
}, {
    id: 26,
    address: "http://api.xyingyu.com/?url="
}, {
    id: 27,
    address: "http://api.greatchina56.com/?url="
}, {
    id: 29,
    address: "http://jx.618g.com/?url="
}, {
    id: 30,
    address: "http://api.baiyug.vip/index.php?url="
}, {
    id: 31,
    address: "http://jx.jfysz.cn/jx.php/?url="
}, {
    id: 32,
    address: "http://jx.reclose.cn/jx.php/?url="
}, {
    id: 33,
    address: "http://jx.eayn.org.cn/jx.php/?url="
}, {
    id: 34,
    address: "http://api.xyingyu.com/?url="
}, {
    id: 35,
    address: "http://jx.iaeec.cn/jx.php/?url="
}, {
    id: 36,
    address: "http://jx.83y4n7a.cn/jx.php/?url="
}, {
    id: 37,
    address: "http://jx.cmbzzs.cn/jx.php/?url="
}, {
    id: 38,
    address: "http://api.greatchina56.com/?url="
}, {
    id: 39,
    address: "http://jx.as19811.cn/jx.php/?url="
}, {
    id: 40,
    address: "http://jx.sdjnd09.cn/jx.php/?url="
}, {
    id: 41,
    address: "http://api.baiyug.vip/index.php?url="
}, {
    id: 42,
    address: "http://jx.09876as.cn/jx.php/?url="
}, {
    id: 43,
    address: "http://jx.17ktv.com.cn/jx.php/?url="
}, {
    id: 44,
    address: "http://jx.ab78a.cn/jx.php/?url="
}, {
    id: 45,
    address: "http://jx.09877as.cn/jx.php/?url="
}, {
    id: 46,
    address: "http://jx.yipolo111.cn/jx.php/?url="
}, {
    id: 47,
    address: "http://jx.908astbb.cn/jx.php/?url="
}, {
    id: 48,
    address: "http://jx.dlzyrk001.cn/jx.php/?url="
}, {
    id: 49,
    address: "http://jx.dccmy.org.cn/jx.php/?url="
}, {
    id: 50,
    address: "http://jx.boctx.cn/jx.php/?url="
}, {
    id: 51,
    address: "http://jx.hxbte.cn/jx.php/?url="
}, {
    id: 52,
    address: "http://api.visaok.net/?url="
}, {
    id: 53,
    address: "http://jx.618g.com/?url="
}, {
    id: 54,
    address: "http://api.visaok.net/?url="
}, {
    id: 55,
    address: "http://jqaaa.com/jx.php?url="
}, {
    id: 56,
    address: "http://api.xyingyu.com/?url="
}, {
    id: 57,
    address: "http://api.greatchina56.com/?url="
}, {
    id: 58,
    address: "http://m.liaocao.com/ckx/index.php?url="
}, {
    id: 59,
    address: "http://jx.618g.com/?url="
}, {
    id: 60,
    address: "http://api.baiyug.vip/index.php?url="
}, {
    id: 61,
    address: "http://jx.jfysz.cn/jx.php/?url="
}, {
    id: 62,
    address: "http://jx.ektao.cn/jx.php/?url="
}, {
    id: 63,
    address: "http://jx.reclose.cn/jx.php/?url="
}, {
    id: 64,
    address: "http://jx.eayn.org.cn/jx.php/?url="
}, {
    id: 65,
    address: "http://api.xyingyu.com/?url="
}, {
    id: 66,
    address: "http://jx.iaeec.cn/jx.php/?url="
}, {
    id: 67,
    address: "http://jx.83y4n7a.cn/jx.php/?url="
}, {
    id: 68,
    address: "http://jx.cmbzzs.cn/jx.php/?url="
}, {
    id: 69,
    address: "http://api.greatchina56.com/?url="
}, {
    id: 70,
    address: "http://jx.as19811.cn/jx.php/?url="
}, {
    id: 71,
    address: "http://jx.sdjnd09.cn/jx.php/?url="
}, {
    id: 72,
    address: "http://api.baiyug.vip/index.php?url="
}, {
    id: 73,
    address: "http://jx.09876as.cn/jx.php/?url="
}, {
    id: 74,
    address: "http://jx.xuanpianwang.com/parse?url="
}, {
    id: 75,
    address: "http://jxapi.nepian.com/ckparse/?url="
}, {
    id: 76,
    address: "http://jx.17ktv.com.cn/jx.php/?url="
}, {
    id: 77,
    address: "http://jx.ab78a.cn/jx.php/?url="
}, {
    id: 78,
    address: "http://jx.09877as.cn/jx.php/?url="
}, {
    id: 79,
    address: "http://jx.yipolo111.cn/jx.php/?url="
}, {
    id: 80,
    address: "http://jx.908astbb.cn/jx.php/?url="
}, {
    id: 81,
    address: "http://jx.dlzyrk001.cn/jx.php/?url="
}, {
    id: 82,
    address: "http://jx.dccmy.org.cn/jx.php/?url="
}, {
    id: 83,
    address: "http://jx.boctx.cn/jx.php/?url="
}, {
    id: 84,
    address: "http://jx.hxbte.cn/jx.php/?url="
}, {
    id: 85,
    address: "http://api.visaok.net/?url="
}, {
    id: 86,
    address: "http://jx.618g.com/?url="
}];

exports.dataList = dataList;

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-box video\">\r\n    <Card :bordered=\"false\">\r\n        <p slot=\"title\" style=\"font-size: 16px;\">视频资源</p>\r\n       <div class=\"v-box\">\r\n           <Form :model=\"formVideo\" :label-width=\"80\">\r\n               <FormItem label=\"vip视频地址\">\r\n                   <Input v-model=\"formVideo.vipAddress\" placeholder=\"拷贝你要观看的VIP视频地址\"></Input>\r\n               </FormItem>\r\n               <Row  :gutter=\"22\">\r\n                   <Col span=\"18\">\r\n                   <FormItem label=\"选择解析源\">\r\n                       <Select v-model=\"formVideo.addressId\" filterable :label-in-value=\"true\" @on-change=\"selectedAddress\">\r\n                           <Option v-for=\"(item,index) in addressList\" :value=\"item.id\" :key=\"index\">{{ item.address }}</Option>\r\n                       </Select>\r\n                   </FormItem>\r\n                   </Col>\r\n                   <Col span=\"6\" >\r\n                   <Button @click=\"playVideo\">播放</Button>\r\n                   </Col>\r\n               </Row>\r\n           </Form>\r\n\r\n           <div class=\"v-frame\">\r\n                <iframe ref=\"frames\" :src=\"address\"  allowfullscreen=\"ture\" frameborder=\"0\"  width=\"100%\" height=\"100%\"></iframe>\r\n           </div>\r\n       </div>\r\n    </Card>\r\n</div>"

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(355);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(95)(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(355, function() {
		var newContent = __webpack_require__(355);

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