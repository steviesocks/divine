(this.webpackJsonpdivine=this.webpackJsonpdivine||[]).push([[69],{518:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return S})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return D})),r.d(t,"e",(function(){return L})),r.d(t,"f",(function(){return l})),r.d(t,"g",(function(){return k})),r.d(t,"h",(function(){return x})),r.d(t,"i",(function(){return w})),r.d(t,"j",(function(){return T})),r.d(t,"k",(function(){return o})),r.d(t,"l",(function(){return A})),r.d(t,"m",(function(){return E})),r.d(t,"n",(function(){return i})),r.d(t,"o",(function(){return C})),r.d(t,"p",(function(){return a})),r.d(t,"q",(function(){return R})),r.d(t,"r",(function(){return f})),r.d(t,"s",(function(){return y})),r.d(t,"t",(function(){return v})),r.d(t,"u",(function(){return d})),r.d(t,"v",(function(){return h})),r.d(t,"w",(function(){return p})),r.d(t,"x",(function(){return b})),r.d(t,"y",(function(){return m})),r.d(t,"z",(function(){return O})),r.d(t,"A",(function(){return j})),r.d(t,"B",(function(){return u})),r.d(t,"C",(function(){return s})),r.d(t,"D",(function(){return _})),r.d(t,"E",(function(){return n})),r.d(t,"F",(function(){return P})),r.d(t,"G",(function(){return I})),r.d(t,"H",(function(){return U}));var i=1e-30,a=4294967295,n=512,l=8,o=29,s=8,c={metrics:{width:15,height:17,left:0,top:-7,advance:14}},u=0,p=0,h=0,f=1,y=2,v=3,d=4,b=5,m=6,O=5,j=6,g=1,S=2,A=2,w=1,x=2,k=4,_=1.05,T=6,U=5,I=6,P=1.15,R=2,L=7,C=500,D=128,E=10},625:function(e,t,r){"use strict";r.d(t,"a",(function(){return R}));var i=r(6),a=r.n(i),n=r(14),l=r(11),o=r(2),s=r(3),c=r(4),u=r(5),p=r(0),h=r(59),f=r(30),y=r(20),v=r(64),d=r(9),b=r(370),m=r(231),O=r(24),j=r(85),g=r(27),S=r(29),A=r(1),w=(r(10),r(45)),x=r(7),k=r(105),_=r(18),T=function(){function e(){Object(o.a)(this,e),this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}return Object(s.a)(e,[{key:"getAvailability",value:function(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;var r=(e-this.location.top)*this.location.width+(t-this.location.left),i=r%8,a=r>>3,n=this._tileAvailabilityBitSet;return a<0||a>n.length?"unknown":n[a]&1<<i?"available":"unavailable"}},{key:"_updateFromData",value:function(e){for(var t=this.location.width,r=this.location.height,i=!0,a=!0,n=Math.ceil(t*r/8),l=new Uint8Array(n),o=0,s=0;s<e.length;s++){var c=s%8;e[s]?(a=!1,l[o]|=1<<c):i=!1,7===c&&++o}a?this._allAvailability="unavailable":i?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=l,this.byteSize+=l.length)}}],[{key:"fromDefinition",value:function(t,r){var i=t.service.request||h.default,a=t.row,n=t.col,o=t.width,s=t.height,c={query:{f:"json"}};return r=r?Object(l.a)(Object(l.a)({},c),r):c,i(function(e){var t;if("vector-tile"===e.service.type)t="".concat(e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height);else{var r=e.service.tileServers;t="".concat(r&&r.length?r[e.row%r.length]:e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}var i=e.service.query;return i&&(t="".concat(t,"?").concat(i)),t}(t),r).then((function(e){return e.data})).catch((function(e){if(e&&e.details&&422===e.details.httpStatus)return{location:{top:a,left:n,width:o,height:s},valid:!0,data:Object(k.b)(o*s,0)};throw e})).then((function(t){if(t.location&&(t.location.top!==a||t.location.left!==n||t.location.width!==o||t.location.height!==s))throw new y.a("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:a,left:n,width:o,height:s}});return e.fromJSON(t)}))}},{key:"fromJSON",value:function(t){e.validateJSON(t);var r=new e;return r.location=Object.freeze(Object(_.a)(t.location)),r._updateFromData(t.data),Object.freeze(r)}},{key:"validateJSON",value:function(e){if(!e||!e.location)throw new y.a("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new y.a("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new y.a("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new y.a("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new y.a("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}]),e}();function U(e){return"".concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}var I,P=d.a.getLogger("esri.layers.support.TilemapCache"),R=I=function(e){Object(c.a)(r,e);var t=Object(u.a)(r);function r(e){var i;return Object(o.a)(this,r),(i=t.call(this,e))._handles=new v.a,i._pendingTilemapRequests={},i._availableLevels={},i.levels=5,i.cacheByteSize=2097152,i.request=h.default,i._prefetchingEnabled=!0,i}return Object(s.a)(r,[{key:"initialize",value:function(){var e=this;this._tilemapCache=new b.a(this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],(function(){return e._initializeTilemapDefinition()})),Object(S.a)(this,"layer.tileInfo.lods",(function(t){return e._initializeAvailableLevels(t)}),!0)]),this._initializeTilemapDefinition()}},{key:"destroy",value:function(){this._handles&&(this._handles.destroy(),this._handles=null)}},{key:"castLevels",value:function(e){return e<=2?(P.error("Minimum levels for Tilemap is 3, but got ",e),3):e}},{key:"size",get:function(){return 1<<this.levels}},{key:"fetchTilemap",value:function(e,t,r,i){var a=this;if(!this._availableLevels[e])return Promise.reject(new y.a("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")));var n=this._tmpTilemapDefinition,o=this._tilemapFromCache(e,t,r,n);if(o)return Promise.resolve(o);var s=i&&i.signal;return i=Object(l.a)(Object(l.a)({},i),{},{signal:null}),new Promise((function(e,t){Object(O.q)(s,(function(){return t(Object(O.e)())}));var r=U(n),l=a._pendingTilemapRequests[r];if(!l){l=T.fromDefinition(n,i).then((function(e){return a._tilemapCache.put(r,e,e.byteSize),e}));var o=function(){return delete a._pendingTilemapRequests[r]};a._pendingTilemapRequests[r]=l,l.then(o,o)}l.then(e,t)}))}},{key:"getAvailability",value:function(e,t,r){if(!this._availableLevels[e])return"unavailable";var i=this._tilemapFromCache(e,t,r,this._tmpTilemapDefinition);return i?i.getAvailability(t,r):"unknown"}},{key:"getAvailabilityUpsample",value:function(e,t,r,i){i.level=e,i.row=t,i.col=r;var a=this.layer.tileInfo;for(a.updateTileInfo(i);;){var n=this.getAvailability(i.level,i.row,i.col);if("unavailable"!==n)return n;if(!a.upsampleTile(i))return"unavailable"}}},{key:"fetchAvailability",value:function(e,t,r,i){return this._availableLevels[e]?this.fetchTilemap(e,t,r,i).catch((function(e){return e})).then((function(i){if(i instanceof T){var a=i.getAvailability(t,r);return"unavailable"===a?Promise.reject(new y.a("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:r})):a}if(Object(O.m)(i))throw i;return"unknown"})):Promise.reject(new y.a("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")))}},{key:"fetchAvailabilityUpsample",value:function(e,t,r,i,a){var n=this;i.level=e,i.row=t,i.col=r;var l=this.layer.tileInfo;l.updateTileInfo(i);var o=this.fetchAvailability(e,t,r,a).catch((function(e){if(Object(O.m)(e))throw e;if(l.upsampleTile(i))return n.fetchAvailabilityUpsample(i.level,i.row,i.col,i);throw e}));return this._fetchAvailabilityUpsamplePrefetch(i.id,e,t,r,a,o),o}},{key:"_fetchAvailabilityUpsamplePrefetch",value:function(){var e=Object(n.a)(a.a.mark((function e(t,r,i,n,o,s){var c,u,p,h,f,y,v,d,b,m=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._prefetchingEnabled){e.next=2;break}return e.abrupt("return");case 2:if(c="prefetch-".concat(t),!this._handles.has(c)){e.next=5;break}return e.abrupt("return");case 5:return u=Object(O.d)(),s.then((function(){return u.abort()}),(function(){return u.abort()})),p=!1,h={remove:function(){p||(p=!0,u.abort())}},this._handles.add(h,c),e.next=12,Object(j.c)(10,u.signal).catch((function(){}));case 12:if(p||(p=!0,this._handles.remove(c)),!Object(O.n)(u)){e.next=15;break}return e.abrupt("return");case 15:for(f={id:t,level:r,row:i,col:n},y=Object(l.a)(Object(l.a)({},o),{},{signal:u.signal}),v=this.layer.tileInfo,d=function(e){var t=m.fetchAvailability(f.level,f.row,f.col,y);I._prefetches.push(t);var r=function(){I._prefetches.removeUnordered(t)};t.then(r,r)},b=0;I._prefetches.length<I._maxPrefetch&&v.upsampleTile(f);++b)d();case 18:case"end":return e.stop()}}),e,this)})));return function(t,r,i,a,n,l){return e.apply(this,arguments)}}()},{key:"_initializeTilemapDefinition",value:function(){if(this.layer.parsedUrl){var e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?Object(g.E)(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}}},{key:"_tilemapFromCache",value:function(e,t,r,i){i.level=e,i.row=t-t%this.size,i.col=r-r%this.size;var a=U(i);return this._tilemapCache.get(a)}},{key:"_initializeAvailableLevels",value:function(e){var t=this;this._availableLevels={},e&&e.forEach((function(e){return t._availableLevels[e.level]=!0}))}},{key:"test",get:function(){var e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:function(t,r,i){return!!e._tilemapFromCache(t,r,i,e._tmpTilemapDefinition)}}}}]),r}(f.a);R._maxPrefetch=4,R._prefetches=new m.a({initialSize:I._maxPrefetch}),Object(p.a)([Object(A.b)({constructOnly:!0,type:Number})],R.prototype,"levels",void 0),Object(p.a)([Object(w.a)("levels")],R.prototype,"castLevels",null),Object(p.a)([Object(A.b)({readOnly:!0,type:Number})],R.prototype,"size",null),Object(p.a)([Object(A.b)({constructOnly:!0,type:Number})],R.prototype,"cacheByteSize",void 0),Object(p.a)([Object(A.b)({constructOnly:!0})],R.prototype,"layer",void 0),Object(p.a)([Object(A.b)({constructOnly:!0})],R.prototype,"request",void 0),R=I=Object(p.a)([Object(x.a)("esri.layers.support.TilemapCache")],R)},645:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return n}));var i=r(11),a=r(363),n={type:a.a,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:l}}}}};function l(e,t,r,n){if(!e)return null;var l=t.minScale,o=t.maxScale,s=t.minLOD,c=t.maxLOD;if(null!=s&&null!=c)return n&&n.ignoreMinMaxLOD?a.a.fromJSON(e):a.a.fromJSON(Object(i.a)(Object(i.a)({},e),{},{lods:e.lods.filter((function(e){var t=e.level;return null!=t&&t>=s&&t<=c}))}));if(0!==l&&0!==o){var u=function(e){return Math.round(1e4*e)/1e4},p=l?u(l):1/0,h=o?u(o):-1/0;return a.a.fromJSON(Object(i.a)(Object(i.a)({},e),{},{lods:e.lods.filter((function(e){var t=u(e.scale);return t<=p&&t>=h}))}))}return a.a.fromJSON(e)}},680:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var i=r(2),a=r(3),n=r(4),l=r(5),o=r(0),s=(r(72),r(1)),c=(r(10),r(13),r(9),r(28)),u=r(7),p=r(645),h=r(625),f=r(37),y=function(e){var t=function(e){Object(n.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(i.a)(this,r),(e=t.apply(this,arguments)).copyright=null,e.minScale=0,e.maxScale=0,e.spatialReference=null,e.tileInfo=null,e.tilemapCache=null,e}return Object(a.a)(r,[{key:"readMinScale",value:function(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}},{key:"readMaxScale",value:function(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}},{key:"supportsBlankTile",get:function(){return this.version>=10.2}},{key:"readTilemapCache",value:function(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new h.a({layer:this}):null}}]),r}(e);return Object(o.a)([Object(s.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(o.a)([Object(s.b)()],t.prototype,"minScale",void 0),Object(o.a)([Object(c.a)("service","minScale")],t.prototype,"readMinScale",null),Object(o.a)([Object(s.b)()],t.prototype,"maxScale",void 0),Object(o.a)([Object(c.a)("service","maxScale")],t.prototype,"readMaxScale",null),Object(o.a)([Object(s.b)({type:f.a})],t.prototype,"spatialReference",void 0),Object(o.a)([Object(s.b)({readOnly:!0})],t.prototype,"supportsBlankTile",null),Object(o.a)([Object(s.b)(p.b)],t.prototype,"tileInfo",void 0),Object(o.a)([Object(s.b)()],t.prototype,"tilemapCache",void 0),Object(o.a)([Object(c.a)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),Object(o.a)([Object(s.b)()],t.prototype,"version",void 0),t=Object(o.a)([Object(u.a)("esri.layers.mixins.ArcGISCachedService")],t)}},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(27),a=r(73);function n(e){return{origin:"portal-item",url:Object(i.K)(e.itemUrl),portal:e.portal||a.a.getDefault(),portalItem:e,readResourcePaths:[]}}},777:function(e,t,r){"use strict";var i=r(2),a=r(3),n=r(24),l=r(625),o=r(207),s=function(){function e(t){if(Object(i.a)(this,e),t instanceof l.a)this._tilemapCache=t;else{if(!t||!("index"in t))throw new Error("Invalid tilemap!");this._tilemap=t.index}}return Object(a.a)(e,[{key:"dataKey",value:function(e,t){if(this._tilemapCache){var r=e.level,i=e.row,a=e.col,l=new o.a(e);return this._tilemapCache.fetchAvailabilityUpsample(r,i,a,l,t).then((function(){return l.world=e.world,l})).catch((function(e){if(Object(n.m)(e))throw e;return null}))}return this._getIndexedDataKey(e)}},{key:"forEach",value:function(e,t,r,i,a){this._callback=a,this._maxLevel=t+e,this._forEach(this._tilemap,t,r,i)}},{key:"_forEach",value:function(e,t,r,i){0!==e&&(this._callback(t,r,i),t!==this._maxLevel&&"object"==typeof e&&(this._forEach(e[0],t+1,2*r,2*i),this._forEach(e[1],t+1,2*r,2*i+1),this._forEach(e[2],t+1,2*r+1,2*i),this._forEach(e[3],t+1,2*r+1,2*i+1)))}},{key:"_getIndexedDataKey",value:function(e){var t=[e];if(e.level<0||e.row<0||e.col<0||e.row>>e.level>0||e.col>>e.level>0)return Promise.resolve(null);for(var r=e;0!==r.level;)r=new o.a(r.level-1,r.row>>1,r.col>>1,r.world),t.push(r);var i,a,n=this._tilemap,l=t.pop();if(1===n)return Promise.resolve(l);for(;t.length;)if(a=(1&(i=t.pop()).col)+((1&i.row)<<1),n){if(0===n[a]){l=null;break}if(1===n[a]){l=i;break}l=i,n=n[a]}return Promise.resolve(l)}}]),e}();t.a=s},859:function(e,t,r){"use strict";r.r(t);var i=r(6),a=r.n(i),n=r(14),l=r(11),o=r(2),s=r(3),c=r(41),u=r(36),p=r(4),h=r(5),f=r(0),y=r(59),v=r(20),d=r(42),b=r(18),m=r(172),O=r(24),j=r(27),g=r(1),S=(r(13),r(10),r(9)),A=r(28),w=r(7),x=r(25),k=r(51),_=r(37),T=r(187),U=r(680),I=r(373),P=r(284),R=r(365),L=r(364),C=r(280);function D(e){var t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return new Promise((function(r){var i=new Image;i.onload=function(){i.onload=i.onerror=null,r(i.width>0&&i.height>0)},i.onerror=function(){i.onload=i.onerror=null,r(!1)},i.src="data:image/webp;base64,"+t[e]}))}var E=r(26),z=S.a.getLogger("esri.layers.support.SpriteSource"),N=function(){function e(t,r,i,a){Object(o.a)(this,e),this.baseURL=t,this.devicePixelRatio=r,this.maxTextureSize=i,this._spriteImageFormat=a,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}return Object(s.a)(e,[{key:"spriteNames",get:function(){var e=[];for(var t in this._spritesData)e.push(t);return e.sort(),e}},{key:"getSpriteInfo",value:function(e){return this._spritesData[e]}},{key:"load",value:function(){var e=Object(n.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.baseURL){e.next=13;break}return this.loadStatus="loading",e.prev=2,e.next=5,this._loadSprites(t);case 5:this.loadStatus="loaded",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),this.loadStatus="failed";case 11:e.next=14;break;case 13:this.loadStatus="failed";case 14:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_loadSprites",value:function(e){var t=this;this._isRetina=this.devicePixelRatio>1.15;var r=Object(j.K)(this.baseURL),i=r.query?"?"+Object(j.E)(r.query):"",a=this._isRetina?"@2x":"",n="".concat(r.path).concat(a,".").concat(this._spriteImageFormat).concat(i),o="".concat(r.path).concat(a,".json").concat(i);return Promise.all([Object(y.default)(o,e),Object(y.default)(n,Object(l.a)({responseType:"image"},e))]).then((function(e){var i=Object(E.a)(e,2),a=i[0],n=i[1],l=Object.keys(a.data);if(!l||0===l.length||1===l.length&&"_ssl"===l[0]||!n||!n.data)return t._spritesData=t.image=null,t.width=t.height=0,Promise.resolve(null);t._spritesData=a.data;var o=n.data,s=Math.max(t.maxTextureSize,4096);if(o.width>s||o.height>s){var c="Sprite resource for style ".concat(r.path," is bigger than the maximum allowed of ").concat(s," pixels}");throw z.error(c),new v.a("SpriteSource",c)}t.width=o.width,t.height=o.height;var u=document.createElement("canvas"),p=u.getContext("2d");u.width=o.width,u.height=o.height,p.drawImage(o,0,0,o.width,o.height);for(var h,f=p.getImageData(0,0,o.width,o.height),y=new Uint8Array(f.data),d=0;d<y.length;d+=4)h=y[d+3]/255,y[d]=y[d]*h,y[d+1]=y[d+1]*h,y[d+2]=y[d+2]*h;t.image=y}))}}]),e}(),M=r(363),B=r(625),q=r(15),Q=r(67),F=r(645),J=r(777),G=function(){function e(t,r,i){Object(o.a)(this,e),this.tileMapURL="",this.tilemapCache=null,this.parsedUrl=null,this.tileInfo=null,this.capabilities=null,this.tileIndex=null,this.fullExtent=null,this.name=t,this.sourceUrl=r,r&&(this.parsedUrl=Object(j.K)(this.sourceUrl));var a=this.parsedUrl.path,n=this.parsedUrl.query?"?"+Object(j.E)(this.parsedUrl.query):"",l=Object(b.a)(i),s=l.tiles;r&&s.forEach((function(e,t){Object(j.s)(e)||(s[t]=Object(j.z)(a,e)+n)})),this.tileServers=s,i.tileMap&&(this.tileMapURL=Object(j.z)(r,i.tileMap));var c=i.capabilities&&i.capabilities.split(",").map((function(e){return e.toLowerCase().trim()})),u=!!i.exportTilesAllowed,p=!!c&&-1!==c.indexOf("tilemap"),h=u&&i.hasOwnProperty("maxExportTilesCount")?i.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:u,supportsTileMap:p},exportTiles:u?{maxExportTilesCount:+h}:null},this.tileInfo=Object(F.a)(l.tileInfo,l,null,{ignoreMinMaxLOD:!0}),p&&(this.type="vector-tile",this.tilemapCache=new B.a({layer:this}),this.tilemapCache&&(this.tileIndex=new J.a(this.tilemapCache))),this.fullExtent=k.a.fromJSON(i.fullExtent)}return Object(s.a)(e,[{key:"getRefKey",value:function(e,t){return this.tileIndex?this.tileIndex.dataKey(e,t):Promise.resolve(e)}},{key:"getSourceTileUrl",value:function(e,t,r){var i=this.tileServers[t%this.tileServers.length];return i=i.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,r.toString())}},{key:"isCompatibleWith",value:function(e){var t=this.tileInfo,r=e.tileInfo;if(!t.spatialReference.equals(r.spatialReference))return!1;if(!t.origin.equals(r.origin))return!1;if(Math.round(t.dpi)!==Math.round(r.dpi))return!1;for(var i=t.lods,a=r.lods,n=Math.min(i.length,a.length),l=0;l<n;l++){var o=i[l],s=a[l];if(o.level!==s.level||Math.round(o.scale)!==Math.round(s.scale))return!1}return!0}}]),e}(),V=Q.a.defaults&&Q.a.defaults.io.corsEnabledServers;function K(e,t){return W.apply(this,arguments)}function W(){return(W=Object(n.a)(a.a.mark((function e(t,r){var i,n,l,o,s,c,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},n="string"==typeof t?[t,null]:[null,t.jsonUrl],l=Object(E.a)(n,2),o=l[0],s=l[1],c=o?Object(j.K)(o):null,e.next=3,H(i,"esri",t,s,r);case 3:return u={layerDefinition:i.validatedSource,url:o,parsedUrl:c,serviceUrl:i.sourceUrl,style:i.style,styleUrl:i.styleUrl,spriteUrl:i.style.sprite&&Y(i.styleBase,i.style.sprite),spriteFormat:i.spriteFormat,glyphsUrl:i.style.glyphs&&Y(i.styleBase,i.style.glyphs),sourceNameToSource:i.sourceNameToSource,primarySourceName:i.primarySourceName},e.abrupt("return",(X(u.spriteUrl),X(u.glyphsUrl),u));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e){if(e){var t=Object(j.m)(e);V&&-1===V.indexOf(t)&&V.push(t)}}function Y(){for(var e,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];for(var a=0;a<r.length;++a)if(Object(j.w)(r[a])){if(e){var n=e.split("://")[0];e=n+":"+r[a].trim()}}else e=Object(j.s)(r[a])?r[a]:Object(j.z)(e,r[a]);return Object(j.I)(e)}function H(e,t,r,i,a){return Z.apply(this,arguments)}function Z(){return(Z=Object(n.a)(a.a.mark((function e(t,r,i,n,o){var s,c,u,p,h,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(O.v)(o),"string"!=typeof i){e.next=11;break}return X(p=Object(j.D)(i)),h=Object(j.K)(p),e.next=6,Object(y.default)(h.path,Object(l.a)({query:{f:"json"},responseType:"json"},o));case 6:u=e.sent,s=p,c=p,e.next=12;break;case 11:u={data:i},s=i.jsonUrl||null,c=n;case 12:return f=u.data,e.abrupt("return",(u.ssl&&(s&&(s=s.replace(/^http:/i,"https:")),c&&(c=c.replace(/^http:/i,"https:"))),$(f)?(t.styleUrl=s||null,te(t,f,c,o)):ee(f)?t.sourceUrl?ie(t,f,c,!1,r,o):(t.sourceUrl=s||null,ie(t,f,c,!0,r,o)):Promise.reject("You must specify the URL or the JSON for a service or for a style.")));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e){return!!e.sources}function ee(e){return!$(e)}function te(e,t,r,i){return re.apply(this,arguments)}function re(){return(re=Object(n.a)(a.a.mark((function e(t,r,i,n){var l,o,s,c,u,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=i?Object(j.G)(i):j.f,t.styleBase=l,t.style=r,t.styleUrl&&X(t.styleUrl),r["sprite-format"]&&"webp"===r["sprite-format"].toLowerCase()&&(t.spriteFormat="webp"),o=[],!r.sources||!r.sources.esri){e.next=11;break}if(!(s=r.sources.esri).url){e.next=10;break}return e.next=8,H(t,"esri",Y(l,s.url),void 0,n);case 8:e.next=11;break;case 10:o.push(H(t,"esri",s,l,n));case 11:for(c=0,u=Object.keys(r.sources);c<u.length;c++)"esri"!==(p=u[c])&&"vector"===r.sources[p].type&&(r.sources[p].url?o.push(H(t,p,Y(l,r.sources[p].url),void 0,n)):r.sources[p].tiles&&o.push(H(t,p,r.sources[p],l,n)));return e.next=14,Promise.all(o);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e,t,r,i,a,n){return ae.apply(this,arguments)}function ae(){return(ae=Object(n.a)(a.a.mark((function e(t,r,i,n,l,o){var s,c,u,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=i?Object(j.I)(i)+"/":j.f,c=ne(r,s),u=new G(l,s,c),n||!(t.primarySourceName in t.sourceNameToSource)){e.next=6;break}if((p=t.sourceNameToSource[t.primarySourceName]).isCompatibleWith(u)){e.next=5;break}return e.abrupt("return",Promise.resolve());case 5:null!=u.fullExtent&&(null!=p.fullExtent?p.fullExtent.union(u.fullExtent):p.fullExtent=u.fullExtent.clone()),p.tileInfo.lods.length<u.tileInfo.lods.length&&(p.tileInfo=u.tileInfo);case 6:if(n?(t.sourceBase=s,t.source=r,t.validatedSource=c,t.primarySourceName=l,t.sourceUrl&&X(t.sourceUrl)):X(s),t.sourceNameToSource[l]=u,t.style){e.next=8;break}return e.abrupt("return",null==r.defaultStyles?Promise.reject():"string"==typeof r.defaultStyles?H(t,"",Y(s,r.defaultStyles,"root.json"),void 0,o):H(t,"",r.defaultStyles,Y(s,"root.json"),o));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e,t){if(e.hasOwnProperty("tileInfo"))return e;for(var r={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},i=78271.51696400007,a=295828763.7957775,n=[],l=e.hasOwnProperty("minzoom")?parseFloat(e.minzoom):0,o=e.hasOwnProperty("maxzoom")?parseFloat(e.maxzoom):22,s=0;s<=o;s++)s>=l&&n.push({level:s,scale:a,resolution:i}),i/=2,a/=2;var c,u=Object(q.a)(e.tiles);try{for(u.s();!(c=u.n()).done;){X(Y(t,c.value))}}catch(p){u.e(p)}finally{u.f()}return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:n,spatialReference:{wkid:102100}}}}var le=r(749),oe=r(238),se=function(){function e(t,r){Object(o.a)(this,e),this.lockedSchemaPixelSize=t,this.isGCS=r}return Object(s.a)(e,[{key:"getLevelRowColumn",value:function(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}},{key:"adjustLevel",value:function(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e}},{key:"getShift",value:function(e,t){var r=0,i=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(r=t),e[1]%2&&(i=t)),[r,i]}},{key:"getScale",value:function(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2}}],[{key:"create256x256CompatibleTileInfo",value:function(e){if(!e)return null;if(256===e.size[0]&&256===e.size[1])return e;for(var t=e.spatialReference.isGeographic,r=[],i=e.lods.length,a=0;a<i;a++){var n=e.lods[a],l=t?n.resolution:2*n.resolution;r.push(new oe.a({level:n.level,scale:n.scale,resolution:l}))}return new M.a({size:[256,256],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:r})}},{key:"create512x512CompatibleTileInfo",value:function(e){if(!e)return null;if(256===e.size[0]||256===e.size[1])return null;for(var t=[],r=e.lods.length,i=0;i<r;i++){var a=e.lods[i],n=.5*a.resolution;t.push(new oe.a({level:a.level,scale:a.scale,resolution:n}))}return new M.a({size:[512,512],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:t})}}]),e}(),ce=1e-6;function ue(e,t){if(e===t)return!0;if(!e&&null!=t)return!1;if(null!=e&&!t)return!1;if(!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;var r,i,a=e.origin,n=t.origin;if(Math.abs(a.x-n.x)>=ce||Math.abs(a.y-n.y)>=ce)return!1;e.lods[0].scale>t.lods[0].scale?(r=e,i=t):(i=e,r=t);for(var l=r.lods[0].scale;l>=i.lods[i.lods.length-1].scale-ce;l/=2)if(Math.abs(l-i.lods[0].scale)<ce)return!0;return!1}function pe(e,t){if(e===t)return e;if(!e&&null!=t)return t;if(null!=e&&!t)return e;for(var r=e.size[0],i=e.format,a=e.dpi,n={x:e.origin.x,y:e.origin.y},l=e.spatialReference.toJSON(),o=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],s=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],c=o.scale,u=o.resolution,p=s.scale,h=[],f=c,y=u,v=0;f>p;)h.push({level:v,resolution:y,scale:f}),v++,f/=2,y/=2;return new M.a({size:[r,r],dpi:a,format:i||"pbf",origin:n,lods:h,spatialReference:l})}var he=r(721),fe=r(367),ye=function(e){Object(p.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(o.a)(this,r);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a)))._spriteSourceMap=new Map,e.currentStyleInfo=null,e.style=null,e.isReference=null,e.operationalLayerType="VectorTileLayer",e.type="vector-tile",e.url=null,e}return Object(s.a)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(l.a)({url:e},t):e}},{key:"destroy",value:function(){this._spriteSourceMap.clear()}},{key:"prefetchResources",value:function(){var e=Object(n.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadSpriteSource(d.a.devicePixelRatio||1,t);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"load",value:function(e){var t=this,r=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(O.u).then(Object(n.a)(a.a.mark((function r(){var i;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.portalItem&&t.portalItem.id){r.next=2;break}return r.abrupt("return");case 2:return i="".concat(t.portalItem.itemUrl,"/resources/styles/root.json"),r.next=5,Object(y.default)(i,Object(l.a)(Object(l.a)({},e),{},{query:{f:"json"}}));case 5:if(r.t0=r.sent.data,!r.t0){r.next=8;break}t.read({url:i},Object(le.a)(t.portalItem));case 8:case"end":return r.stop()}}),r)})))).catch(O.u).then((function(){return t._loadStyle(e)}));return this.addResolvingPromise(r),Promise.resolve(this)}},{key:"attributionDataUrl",get:function(){var e=this.currentStyleInfo,t=e&&e.serviceUrl&&Object(j.K)(e.serviceUrl);return t?this._getDefaultAttribution(t.path):null}},{key:"capabilities",get:function(){var e=this._getPrimarySource();return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}},{key:"fullExtent",get:function(){var e=this._getPrimarySource();return e?e.fullExtent:null}},{key:"parsedUrl",get:function(){return this.serviceUrl?Object(j.K)(this.serviceUrl):null}},{key:"serviceUrl",get:function(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}},{key:"spatialReference",get:function(){return this.tileInfo&&this.tileInfo.spatialReference||null}},{key:"styleUrl",get:function(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}},{key:"writeStyleUrl",value:function(e,t){e&&Object(j.w)(e)&&(e="https:".concat(e)),t.styleUrl=e}},{key:"tileIndexType",get:function(){var e=this._getPrimarySource();return e?e.type:""}},{key:"tileIndexUrl",get:function(){var e=this._getPrimarySource();return e?e.tileMapURL:""}},{key:"tileInfo",get:function(){var e,t=[];for(var r in this.sourceNameToSource)t.push(this.sourceNameToSource[r]);var i=(null==(e=this._getPrimarySource())?void 0:e.tileInfo)||new M.a;if(t.length>1)for(var a=0;a<t.length;a++)ue(i,t[a].tileInfo)&&(i=pe(i,t[a].tileInfo));return i}},{key:"tilemapCache",get:function(){var e=this._getPrimarySource();return e&&e.capabilities.operations.supportsTileMap?e.tilemapCache:null}},{key:"tileServers",get:function(){var e=this._getPrimarySource();return e?e.tileServers:[]}},{key:"readVersion",value:function(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}},{key:"compatibleTileInfo256",get:function(){return se.create256x256CompatibleTileInfo(this.tileInfo)}},{key:"compatibleTileInfo512",get:function(){return se.create512x512CompatibleTileInfo(this.tileInfo)}},{key:"loadSpriteSource",value:function(){var e=Object(n.a)(a.a.mark((function e(){var t,r,i,n,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=l.length>0&&void 0!==l[0]?l[0]:1,r=l.length>1?l[1]:void 0,this._spriteSourceMap.has(t)){e.next=7;break}return i=Object(fe.a)(),n=new N(this.styleRepository.sprite,t,i.maxTextureSize,this.currentStyleInfo.spriteFormat),e.next=6,n.load(r);case 6:this._spriteSourceMap.set(t,n);case 7:return e.abrupt("return",Promise.resolve(this._spriteSourceMap.get(t)));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadStyle",value:function(){var e=Object(n.a)(a.a.mark((function e(t,r){var i,n,l,o=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t||this.style||this.url,!this._loadingPromise||"string"!=typeof i||this.url!==i||Object(O.n)(this._abortController)){e.next=3;break}return e.abrupt("return",this._loadingPromise);case 3:return(n=this._abortController)&&n.abort(),l=Object(O.d)(),e.abrupt("return",(this._loadingPromise=new Promise((function(e,t){var a={signal:l.signal};o._spriteSourceMap.clear(),o._getSourceAndStyle(i,a).then(e,t),Object(O.q)(r,(function(){l.abort()}))})),this._abortController=l,this._loadingPromise));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getStyleLayerId",value:function(e){return this.styleRepository.getStyleLayerId(e)}},{key:"getStyleLayerIndex",value:function(e){return this.styleRepository.getStyleLayerIndex(e)}},{key:"getPaintProperties",value:function(e){return Object(b.a)(this.styleRepository.getPaintProperties(e))}},{key:"setPaintProperties",value:function(e,t){var r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);var i=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||i})}},{key:"getStyleLayer",value:function(e){return Object(b.a)(this.styleRepository.getStyleLayer(e))}},{key:"setStyleLayer",value:function(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}},{key:"deleteStyleLayer",value:function(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}},{key:"getLayoutProperties",value:function(e){return Object(b.a)(this.styleRepository.getLayoutProperties(e))}},{key:"setLayoutProperties",value:function(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}},{key:"setStyleLayerVisibility",value:function(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}},{key:"getStyleLayerVisibility",value:function(e){return this.styleRepository.getStyleLayerVisibility(e)}},{key:"getTileUrl",value:function(e,t,r){var i=this.tileServers[t%this.tileServers.length];return i=i.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,r.toString())}},{key:"write",value:function(e,t){return t&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new v.a("vectortilelayer:unsupported","VectorTileLayer (".concat(this.title,", ").concat(this.id,") with style defined by JSON only are not supported"),{layer:this})),null):Object(c.a)(Object(u.a)(r.prototype),"write",this).call(this,e,t)}},{key:"_getSourceAndStyle",value:function(){var e=Object(n.a)(a.a.mark((function e(t,r){var i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("invalid style!");case 2:return e.next=4,K(t,r);case 4:if("webp"!==(i=e.sent).spriteFormat){e.next=11;break}return e.next=8,D("lossy");case 8:if(e.t0=e.sent,e.t0){e.next=11;break}i.spriteFormat="png";case 11:this._set("currentStyleInfo",Object(l.a)({},i)),"string"==typeof t?(this.url=t,this.style=null):(this.url=null,this.style=t),this._set("sourceNameToSource",i.sourceNameToSource),this._set("primarySourceName",i.primarySourceName),this._set("styleRepository",new he.a(i.style,i)),this.read(i.layerDefinition,{origin:"service"}),this.emit("load-style",{});case 12:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_getDefaultAttribution",value:function(e){var t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i);if(t){var r=t[2]&&t[2].toLowerCase();if(r)for(var i=t[1]||"",a=0,n=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];a<n.length;a++){var l=n[a];if(l.toLowerCase().indexOf(r)>-1)return Object(j.D)("//static.arcgis.com/attribution/Vector".concat(i,"/").concat(l))}}}},{key:"_getPrimarySource",value:function(){return this.sourceNameToSource&&this.primarySourceName in this.sourceNameToSource?this.sourceNameToSource[this.primarySourceName]:null}},{key:"_loadStyle",value:function(){var e=Object(n.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._loadingPromise?this._loadingPromise:this.loadStyle(null,t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(Object(P.a)(Object(C.a)(Object(U.a)(Object(I.a)(Object(R.a)(Object(L.a)(Object(m.a)(T.a))))))));Object(f.a)([Object(g.b)({readOnly:!0})],ye.prototype,"attributionDataUrl",null),Object(f.a)([Object(g.b)({type:["show","hide"]})],ye.prototype,"listMode",void 0),Object(f.a)([Object(g.b)({readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"],json:{read:!1}})],ye.prototype,"capabilities",null),Object(f.a)([Object(g.b)({readOnly:!0})],ye.prototype,"currentStyleInfo",void 0),Object(f.a)([Object(g.b)({json:{read:!1},readOnly:!0,type:k.a})],ye.prototype,"fullExtent",null),Object(f.a)([Object(g.b)()],ye.prototype,"style",void 0),Object(f.a)([Object(g.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],ye.prototype,"isReference",void 0),Object(f.a)([Object(g.b)({type:["VectorTileLayer"]})],ye.prototype,"operationalLayerType",void 0),Object(f.a)([Object(g.b)({readOnly:!0})],ye.prototype,"parsedUrl",null),Object(f.a)([Object(g.b)({readOnly:!0})],ye.prototype,"serviceUrl",null),Object(f.a)([Object(g.b)({type:_.a,readOnly:!0})],ye.prototype,"spatialReference",null),Object(f.a)([Object(g.b)({readOnly:!0})],ye.prototype,"styleRepository",void 0),Object(f.a)([Object(g.b)({readOnly:!0})],ye.prototype,"sourceNameToSource",void 0),Object(f.a)([Object(g.b)({readOnly:!0})],ye.prototype,"primarySourceName",void 0),Object(f.a)([Object(g.b)({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],ye.prototype,"styleUrl",null),Object(f.a)([Object(x.a)(["portal-item","web-document"],"styleUrl")],ye.prototype,"writeStyleUrl",null),Object(f.a)([Object(g.b)({json:{read:!1},readOnly:!0})],ye.prototype,"tileIndexType",null),Object(f.a)([Object(g.b)({json:{read:!1},readOnly:!0})],ye.prototype,"tileIndexUrl",null),Object(f.a)([Object(g.b)({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:M.a})],ye.prototype,"tileInfo",null),Object(f.a)([Object(g.b)({json:{read:!1},readOnly:!0,type:B.a})],ye.prototype,"tilemapCache",null),Object(f.a)([Object(g.b)({json:{read:!1},readOnly:!0})],ye.prototype,"tileServers",null),Object(f.a)([Object(g.b)({json:{read:!1},readOnly:!0,value:"vector-tile"})],ye.prototype,"type",void 0),Object(f.a)([Object(g.b)({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],ye.prototype,"url",void 0),Object(f.a)([Object(g.b)({readOnly:!0})],ye.prototype,"version",void 0),Object(f.a)([Object(A.a)("version",["version","currentVersion"])],ye.prototype,"readVersion",null),Object(f.a)([Object(g.b)({readOnly:!0})],ye.prototype,"compatibleTileInfo256",null),Object(f.a)([Object(g.b)({readOnly:!0})],ye.prototype,"compatibleTileInfo512",null);var ve=ye=Object(f.a)([Object(w.a)("esri.layers.VectorTileLayer")],ye);t.default=ve}}]);
//# sourceMappingURL=69.a6cb0554.chunk.js.map