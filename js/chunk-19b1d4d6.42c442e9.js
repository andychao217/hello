(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19b1d4d6"],{"260c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"font-size":"10px",padding:"20px 0px"}},[a("a",{staticStyle:{color:"gray"},attrs:{target:"_blank",href:"http://beian.miit.gov.cn/"}},[t._v(" 湘ICP备17005934号, 湘ICP备17005934号-1 ")]),a("br"),a("a",{staticStyle:{color:"gray"},attrs:{target:"_blank",href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43012102000324"}},[a("img",{staticStyle:{height:"12px"},attrs:{src:t.imgUrl}}),t._v(" 湘公网安备 43012102000324号 ")])])},i=[],o={name:"MainFooter",data:function(){return{imgUrl:"/images/beian.png"}}},r=o,l=a("2877"),c=Object(l["a"])(r,n,i,!1,null,null,null);e["a"]=c.exports},"44d2e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"scrollDiv",style:{overflowY:"auto",height:t.contentHeight+133+"px",padding:"0px"}},[a("van-sticky",[a("van-notice-bar",{attrs:{color:"#1989fa",background:"#ecf9ff","left-icon":"info-o"}},[t._v(" "+t._s(t.$t("helloWhoAmI"))+" ("+t._s(t.$t("dedaoPointTxt"))+": "+t._s(t.$t("dedaoPoint"))+" | "+t._s(t.$t("zhimaCreditTxt"))+": "+t._s(t.$t("zhimaCredit"))+") ")])],1),a("van-row",[a("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"white"}},[a("van-swipe-item",[a("div",{staticClass:"swipeDiv",style:{backgroundImage:t.bgUrl1}},[a("h3",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.$t("lifeMottoJobs1")))]),a("h1",[t._v("-"+t._s(t.$t("jobs")))])])]),a("van-swipe-item",[a("div",{staticClass:"swipeDiv",style:{backgroundImage:t.bgUrl2}},[a("h3",[t._v(t._s(t.$t("lifeMottoGump")))]),a("h1",[t._v("-"+t._s(t.$t("gump")))])])])],1)],1),a("van-row",[a("van-tabs",{nativeOn:{touchstart:function(e){return t.handleTouchStart(e)},touchend:function(e){return t.handleTouchEnd(e)}},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",{attrs:{title:t.$t("introTitle")}},[a("van-row",{staticStyle:{padding:"10px"}},t._l(t.introArray,(function(e){return a("van-cell",{key:e},[t._v(t._s(e))])})),1),a("van-row",{staticStyle:{padding:"10px 25px","text-align":"left"}},[a("strong",[t._v(t._s(t.$t("hobbyTitle"))+": ")]),t._l(t.hobbyArray,(function(e,n){return a("van-tag",{key:e,staticStyle:{"margin-right":"5px","font-size":"14px"},attrs:{plain:"",color:t.colorList[n]}},[t._v(t._s(e))])}))],2)],1),a("van-tab",{attrs:{title:t.$t("ability")}},[a("div",{staticStyle:{padding:"20px"}},[a("Charts")],1)]),a("van-tab",{attrs:{title:t.$t("personalInfo")}},[a("van-row",{staticStyle:{"margin-top":"20px"}},[a("van-cell-group",[a("van-field",{attrs:{readonly:"",clickable:"","left-icon":"contact","label-align":"left",label:t.$t("nameInput")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),a("van-field",{attrs:{type:"email","left-icon":"envelop-o",readonly:"",clickable:"","label-align":"left",label:t.$t("emailInput")},model:{value:t.form.mail,callback:function(e){t.$set(t.form,"mail",e)},expression:"form.mail"}}),a("van-field",{attrs:{readonly:"",clickable:"","left-icon":"phone-o","label-align":"left",label:t.$t("phoneInput")},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}}),a("van-field",{attrs:{readonly:"",clickable:"","left-icon":"wap-home-o","label-align":"left",label:t.$t("websiteInput")},model:{value:t.form.website,callback:function(e){t.$set(t.form,"website",e)},expression:"form.website"}})],1)],1),a("van-row",{staticStyle:{"margin-top":"10px",padding:"10px 16px"}},[a("a",{staticStyle:{color:"white","text-decoration":"none"},attrs:{href:t.resumeLink,target:"_blank"}},[a("van-button",{attrs:{icon:"down",type:"info",block:""}},[a("span",[t._v(" "+t._s(t.$t("resumeTxt")))])])],1)])],1)],1)],1),a("van-row",[a("MobileFooter")],1)],1)},i=[],o=(a("d3b7"),a("bc3a")),r=a.n(o),l=a("260c"),c=function(){return a.e("chunk-2d0cc032").then(a.bind(null,"4bb0"))},s={name:"aboutMobile",components:{Charts:c,MobileFooter:l["a"]},data:function(){return{contentHeight:690,active:0,bgUrl1:"url(/images/bg1.jpg)",bgUrl2:"url(/images/bg2.jpg)",form:{},publicPath:"/",colorList:[],touchStartX:0,touchEndX:0,touchStartY:0,touchEndY:0}},computed:{resumeLink:function(){var t=localStorage.lang;return"zh-CN"===t?this.publicPath+"pdf/赵庆简历.pdf":this.publicPath+"pdf/AndyChaoResume.pdf"},introArray:function(){return this.$t("introTxt")},hobbyArray:function(){return this.$t("hobbies")}},watch:{contentHeight:function(t){if(!this.timer){this.contentHeight=t,this.timer=!0;var e=this;setTimeout((function(){e.timer=!1}),400)}}},methods:{handleTouchStart:function(t){this.touchStartX=t.changedTouches[0].pageX,this.touchStartY=t.changedTouches[0].pageY},handleTouchEnd:function(t){var e=this.active;this.touchEndX=t.changedTouches[0].pageX,this.touchEndY=t.changedTouches[0].pageY;var a=this.touchEndX-this.touchStartX,n=this.touchEndY-this.touchStartY,i=Math.abs(a),o=Math.abs(n);i>o&&(a>50?e<2?e+=1:e=0:a<50&&(e>0?e-=1:e=2)),this.active=e}},created:function(){var t=this;r.a.get("data/colorList.json").then((function(e){t.colorList=e.data})),setTimeout((function(){r.a.get("data/contactInfo.json").then((function(e){t.form=e.data}))}),100)},mounted:function(){var t=this;this.contentHeight=this.$util.resizeTable(),window.onresize=function(){return function(){t.contentHeight=t.$util.resizeTable()}()}},beforeRouteLeave:function(t,e,a){this.$destroy(),a()}},u=s,h=(a("5fd7"),a("2877")),f=Object(h["a"])(u,n,i,!1,null,"d420fbe8",null);e["default"]=f.exports},"5fd7":function(t,e,a){"use strict";var n=a("83af"),i=a.n(n);i.a},"83af":function(t,e,a){}}]);