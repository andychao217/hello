(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-667d1aa4"],{"2da4":function(e,t,n){"use strict";const o={control:{unload:"removeControl"},layer:{unload:"removeTileLayer"},overlay:{unload:"removeOverlay"},contextMenu:{unload:"removeContextMenu"}},i=e=>e.abstract||e.$el===e.$children[0].$el?i(e.$parent):e;function s(){const{unload:e,renderByParent:t,$parent:n}=this;t&&n.reload(),e()}class r{constructor(e){this.methods={ready(){const e=i(this.$parent),t=this.BMap=e.BMap,n=this.map=e.map;this.load(),this.$emit("ready",{BMap:t,map:n})},transmitEvent(e){this.$emit(e.type.replace(/^on/,""),e)},reload(){this&&this.BMap&&this.$nextTick(()=>{this.unload(),this.$nextTick(this.load)})},unload(){const{map:t,originInstance:n}=this;try{switch(e.type){case"search":return n.clearResults();case"autoComplete":case"lushu":return n.dispose();case"markerClusterer":return n.clearMarkers();default:t[o[e.type].unload](n)}}catch(i){}}},this.computed={renderByParent(){return this.$parent.preventChildrenRender}},this.mounted=function(){const e=i(this.$parent),t=e.map,{ready:n}=this;t?n():e.$on("ready",n)},this.destroyed=s,this.beforeDestroy=s}}t["a"]=e=>new r({type:e})},"4fab":function(e,t,n){"use strict";var o={"bm-map":["click","dblclick","rightclick","rightdblclick","maptypechange","mousemove","mouseover","mouseout","movestart","moving","moveend","zoomstart","zoomend","addoverlay","addcontrol","removecontrol","removeoverlay","clearoverlays","dragstart","dragging","dragend","addtilelayer","removetilelayer","load","resize","hotspotclick","hotspotover","hotspotout","tilesloaded","touchstart","touchmove","touchend","longpress"],"bm-geolocation":["locationSuccess","locationError"],"bm-overview-map":["viewchanged","viewchanging"],"bm-marker":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","infowindowclose","infowindowopen","dragstart","dragging","dragend","rightclick"],"bm-polyline":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"],"bm-polygon":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"],"bm-circle":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"],"bm-label":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","rightclick"],"bm-info-window":["close","open","maximize","restore","clickclose"],"bm-ground":["click","dblclick"],"bm-autocomplete":["onconfirm","onhighlight"],"bm-point-collection":["click","mouseover","mouseout"]};t["a"]=function(e,t){const n=t||o[this.$options.name];n&&n.forEach(t=>{const n="on"===t.slice(0,2),o=n?t.slice(2):t,i=this.$listeners[o];i&&e.addEventListener(t,i.fns)})}},"76f3":function(e,t,n){"use strict";function o(e,t={}){const{lng:n,lat:o}=t;return new e.Point(n,o)}function i(e,t={}){const{width:n,height:o}=t;return new e.Size(n,o)}function s(e,t={}){const{url:n,size:o,opts:s={}}=t;return new e.Icon(n,i(e,o),{anchor:s.anchor&&i(e,s.anchor),imageSize:s.imageSize&&i(e,s.imageSize),imageOffset:s.imageOffset&&i(e,s.imageOffset),infoWindowAnchor:s.infoWindowAnchor&&i(e,s.infoWindowAnchor),printImageUrl:s.printImageUrl})}function r(e,t={}){const{content:n,opts:s}=t;return new e.Label(n,{offset:s.offset&&i(e,s.offset),position:s.position&&o(e,s.position),enableMassClear:s.enableMassClear})}n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r}))},ec0c:function(e,t,n){"use strict";n.r(t);n("d81d"),n("a9e3"),n("d3b7"),n("25f0");var o,i,s=n("2da4"),r=n("4fab"),a=n("76f3"),c={name:"bm-label",render:function(){},mixins:[Object(s["a"])("overlay")],props:{content:{type:String},title:{type:String},offset:{},position:{},labelStyle:{},zIndex:{type:Number,default:0},massClear:{type:Boolean,default:!0}},watch:{content:function(e){this.originInstance.setContent(e)},title:function(e){this.originInstance.setTitle(e)},"offset.width":function(e,t){var n=this.BMap;e.toString()!==t.toString()&&this.originInstance.setOffset(Object(a["d"])(n,{width:e,height:this.offset.height}))},"offset.height":function(e,t){var n=this.BMap;e.toString()!==t.toString()&&this.originInstance.setOffset(Object(a["d"])(n,{width:this.offset.width,height:e}))},"position.lng":function(e,t){var n=this.BMap,o=e;e.toString()!==t.toString()&&o>=-180&&o<=180&&this.originInstance.setCenter(Object(a["c"])(n,{lng:o,lat:this.center.lat}))},"position.lat":function(e,t){var n=this.BMap,o=e;e.toString()!==t.toString()&&o>=-74&&o<=74&&this.originInstance.setCenter(Object(a["c"])(n,{lng:this.center.lng,lat:o}))},labelStyle:{handler:function(e){this.originInstance.setStyle(e)},deep:!0},zIndex:function(e){this.originInstance.setZIndex(e)},massClear:function(e){e?this.originInstance.enableMassClear():this.originInstance.disableMassClear()}},methods:{load:function(){var e=this.BMap,t=this.map,n=this.content,o=this.title,i=this.offset,s=this.position,c=this.labelStyle,l=this.zIndex,u=this.massClear,d=this.$parent,h=new e.Label(n,{offset:Object(a["d"])(e,i),position:Object(a["c"])(e,s),enableMassClear:u});this.originInstance=h;try{d.originInstance.setLabel(h)}catch(m){t.addOverlay(h)}o&&h.setTitle(o),c&&h.setStyle(c),l&&h.setZIndex(l),r["a"].call(this,h)}}},l=c,u=n("2877"),d=Object(u["a"])(l,o,i,!1,null,null,null);t["default"]=d.exports}}]);