(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-287d633a"],{"165e":function(t,e,n){"use strict";(function(t){n("d81d"),n("a9e3");var i=n("2da4"),o=n("4fab"),s=n("76f3");e["a"]={name:"bm-marker",mixins:[Object(i["a"])("overlay")],props:{position:{},offset:{},icon:{},massClear:{type:Boolean,default:!0},dragging:{type:Boolean,default:!1},clicking:{type:Boolean,default:!0},raiseOnDrag:{type:Boolean,default:!1},draggingCursor:{type:String},rotation:{type:Number},shadow:{type:Object},title:{type:String},label:{type:Object},animation:{type:String},top:{type:Boolean,default:!1},zIndex:{type:Number,default:0}},watch:{"position.lng":function(t,e){var n=this.BMap,i=this.originInstance,o=this.position,a=this.renderByParent,r=this.$parent;t!==e&&t>=-180&&t<=180&&i.setPosition(Object(s["c"])(n,{lng:t,lat:o.lat})),a&&r.reload()},"position.lat":function(t,e){var n=this.BMap,i=this.originInstance,o=this.position,a=this.renderByParent,r=this.$parent;t!==e&&t>=-74&&t<=74&&i.setPosition(Object(s["c"])(n,{lng:o.lng,lat:t})),a&&r.reload()},"offset.width":function(t,e){var n=this.BMap,i=this.originInstance;t!==e&&i.setOffset(new n.Size(t,this.offset.height))},"offset.height":function(t,e){var n=this.BMap,i=this.originInstance;t!==e&&i.setOffset(new n.Size(this.offset.width,t))},icon:{deep:!0,handler:function(t){var e=this.BMap,n=this.originInstance,i=this.rotation;n&&n.setIcon(Object(s["a"])(e,t)),i&&n&&n.setRotation(i)}},massClear:function(t){t?this.originInstance.enableMassClear():this.originInstance.disableMassClear()},dragging:function(t){t?this.originInstance.enableDragging():this.originInstance.disableDragging()},clicking:function(){this.reload()},raiseOnDrag:function(){this.reload()},draggingCursor:function(t){this.originInstance.setDraggingCursor(t)},rotation:function(t){this.originInstance.setRotation(t)},shadow:function(t){this.originInstance.setShadow(t)},title:function(t){this.originInstance.setTitle(t)},label:function(t){this.reload()},animation:function(e){this.originInstance.setAnimation(t[e])},top:function(t){this.originInstance.setTop(t)},zIndex:function(t){this.originInstance.setZIndex(t)}},methods:{load:function(){var e=this.BMap,n=this.map,i=this.position,a=this.offset,r=this.icon,c=this.massClear,l=this.dragging,u=this.clicking,d=this.raiseOnDrag,h=this.draggingCursor,g=this.rotation,m=this.shadow,p=this.title,f=this.label,b=this.animation,v=this.top,w=this.renderByParent,y=this.$parent,k=this.zIndex,I=new e.Marker(new e.Point(i.lng,i.lat),{offset:a,icon:r&&Object(s["a"])(e,r),enableMassClear:c,enableDragging:l,enableClicking:u,raiseOnDrag:d,draggingCursor:h,rotation:g,shadow:m,title:p});this.originInstance=I,f&&I&&I.setLabel(Object(s["b"])(e,f)),I.setTop(v),I.setZIndex(k),o["a"].call(this,I),w?y.reload():n.addOverlay(I),I.setAnimation(t[b])}}}}).call(this,n("c8ba"))},"2da4":function(t,e,n){"use strict";const i={control:{unload:"removeControl"},layer:{unload:"removeTileLayer"},overlay:{unload:"removeOverlay"},contextMenu:{unload:"removeContextMenu"}},o=t=>t.abstract||t.$el===t.$children[0].$el?o(t.$parent):t;function s(){const{unload:t,renderByParent:e,$parent:n}=this;e&&n.reload(),t()}class a{constructor(t){this.methods={ready(){const t=o(this.$parent),e=this.BMap=t.BMap,n=this.map=t.map;this.load(),this.$emit("ready",{BMap:e,map:n})},transmitEvent(t){this.$emit(t.type.replace(/^on/,""),t)},reload(){this&&this.BMap&&this.$nextTick(()=>{this.unload(),this.$nextTick(this.load)})},unload(){const{map:e,originInstance:n}=this;try{switch(t.type){case"search":return n.clearResults();case"autoComplete":case"lushu":return n.dispose();case"markerClusterer":return n.clearMarkers();default:e[i[t.type].unload](n)}}catch(o){}}},this.computed={renderByParent(){return this.$parent.preventChildrenRender}},this.mounted=function(){const t=o(this.$parent),e=t.map,{ready:n}=this;e?n():t.$on("ready",n)},this.destroyed=s,this.beforeDestroy=s}}e["a"]=t=>new a({type:t})},"4fab":function(t,e,n){"use strict";var i={"bm-map":["click","dblclick","rightclick","rightdblclick","maptypechange","mousemove","mouseover","mouseout","movestart","moving","moveend","zoomstart","zoomend","addoverlay","addcontrol","removecontrol","removeoverlay","clearoverlays","dragstart","dragging","dragend","addtilelayer","removetilelayer","load","resize","hotspotclick","hotspotover","hotspotout","tilesloaded","touchstart","touchmove","touchend","longpress"],"bm-geolocation":["locationSuccess","locationError"],"bm-overview-map":["viewchanged","viewchanging"],"bm-marker":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","infowindowclose","infowindowopen","dragstart","dragging","dragend","rightclick"],"bm-polyline":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"],"bm-polygon":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"],"bm-circle":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"],"bm-label":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","rightclick"],"bm-info-window":["close","open","maximize","restore","clickclose"],"bm-ground":["click","dblclick"],"bm-autocomplete":["onconfirm","onhighlight"],"bm-point-collection":["click","mouseover","mouseout"]};e["a"]=function(t,e){const n=e||i[this.$options.name];n&&n.forEach(e=>{const n="on"===e.slice(0,2),i=n?e.slice(2):e,o=this.$listeners[i];o&&t.addEventListener(e,o.fns)})}},"76f3":function(t,e,n){"use strict";function i(t,e={}){const{lng:n,lat:i}=e;return new t.Point(n,i)}function o(t,e={}){const{width:n,height:i}=e;return new t.Size(n,i)}function s(t,e={}){const{url:n,size:i,opts:s={}}=e;return new t.Icon(n,o(t,i),{anchor:s.anchor&&o(t,s.anchor),imageSize:s.imageSize&&o(t,s.imageSize),imageOffset:s.imageOffset&&o(t,s.imageOffset),infoWindowAnchor:s.infoWindowAnchor&&o(t,s.infoWindowAnchor),printImageUrl:s.printImageUrl})}function a(t,e={}){const{content:n,opts:s}=e;return new t.Label(n,{offset:s.offset&&o(t,s.offset),position:s.position&&i(t,s.position),enableMassClear:s.enableMassClear})}n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a}))},d9a9:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default")],2)},o=[],s=n("165e"),a=s["a"],r=n("2877"),c=Object(r["a"])(a,i,o,!1,null,null,null);e["default"]=c.exports}}]);