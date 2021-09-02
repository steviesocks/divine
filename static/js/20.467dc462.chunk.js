(this.webpackJsonpdivine=this.webpackJsonpdivine||[]).push([[20],{692:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i}));var a=r(15);function i(e,t,r){return t.flatten((function(e){return e.sublayers})).length!==e.length||(!!e.some((function(e){return e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r}))||!l(e,t))}function n(e,t,r){return!!e.some((function(e){var t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(!t.gdbVersion||t.gdbVersion===r.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2}))||!l(e,t)}function l(e,t){if(!e||!e.length)return!0;var r=t.slice().reverse().flatten((function(e){var t=e.sublayers;return t&&t.toArray().reverse()})).map((function(e){return e.id})).toArray();if(e.length>r.length)return!1;var i,n=0,l=r.length,o=Object(a.a)(e);try{for(o.s();!(i=o.n()).done;){for(var s=i.value.id;n<l&&r[n]!==s;)n++;if(n>=l)return!1}}catch(u){o.e(u)}finally{o.f()}return!0}function o(e){return!!e&&e.some((function(e){return null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale}))}},785:function(e,t,r){"use strict";var a,i=r(26),n=r(15),l=r(6),o=r.n(l),s=r(11),u=r(14),c=r(2),y=r(3),p=r(4),b=r(5),d=r(0),f=(r(72),r(188)),h=(r(282),r(338),r(339),r(340),r(111),r(257),r(256),r(285),r(260)),v=r(59),O=r(55),j=r(33),g=r(20),m=r(123),S=r(228),w=r(18),I=r(89),x=r(9),k=r(172),L=r(27),D=r(1),P=r(63),E=r(45),_=(r(10),r(28)),F=r(7),T=r(25),M=r(13),N=r(92),V=r(344),A=r(229),C=r(366),J=r(235),q=r(179),B=r(409),U=r(87),Q=r(379),G=r(51);function R(e){return e&&"esriSMS"===e.type}function K(e,t,r){var a,i=this.originIdOf(t)>=Object(N.d)(r.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!r&&"map-image"===(null==(a=r.layer)?void 0:a.type)&&(r.writeSublayerStructure||i)}}function W(e,t,r){var a;return{enabled:!!r&&"tile"===(null==(a=r.layer)?void 0:a.type)&&this._isOverridden(t)}}function X(e,t,r){return{ignoreOrigin:!0,enabled:r&&r.writeSublayerStructure||!1}}function z(e,t,r){return{ignoreOrigin:!0,enabled:!!r&&(r.writeSublayerStructure||this.originIdOf(t)>=Object(N.d)(r.origin))}}var H=x.a.getLogger("esri.layers.support.Sublayer"),Y=0,Z=new Set;Z.add("layer"),Z.add("parent"),Z.add("loaded"),Z.add("loadStatus"),Z.add("loadError"),Z.add("loadWarnings");var $=a=function(e){Object(p.a)(l,e);var t=Object(b.a)(l);function l(e){var r;return Object(c.a)(this,l),(r=t.call(this,e)).capabilities=void 0,r.fields=null,r.fullExtent=null,r.globalIdField=null,r.legendEnabled=!0,r.objectIdField=null,r.popupEnabled=!0,r.popupTemplate=null,r.sourceJSON=null,r.title=null,r.typeIdField=null,r.types=null,r}return Object(y.a)(l,[{key:"load",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var r=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(this.addResolvingPromise(Object(u.a)(o.a.mark((function e(){var a,i,n,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.layer||r.url){e.next=2;break}throw new g.a("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:r});case 2:if(i=null,r.layer&&!(r.originIdOf("url")>2)&&"data-layer"!==(null==(a=r.source)?void 0:a.type)){e.next=9;break}return e.next=6,Object(v.default)(r.url,Object(s.a)({responseType:"json",query:{f:"json"}},t));case 6:i=e.sent.data,e.next=14;break;case 9:return l=r.id,"map-layer"===(null==(n=r.source)?void 0:n.type)&&(l=r.source.mapLayerId),e.next=13,r.layer.fetchSublayerInfo(l,t);case 13:i=e.sent;case 14:i&&(r.sourceJSON=i,r.read({layerDefinition:i},{origin:"service"}));case 15:case"end":return e.stop()}}),e)})))()),this));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"readCapabilities",value:function(e,t){var r=(e=(t=t.layerDefinition||t).capabilities||e)?e.toLowerCase().split(",").map((function(e){return e.trim()})):[];return{exportMap:{supportsModification:!!t.canModifyLayer},operations:{supportsQuery:-1!==r.indexOf("query")}}}},{key:"definitionExpression",set:function(e){this._setAndNotifyLayer("definitionExpression",e)}},{key:"fieldsIndex",get:function(){return new C.a(this.fields||[])}},{key:"readGlobalIdFieldFromService",value:function(e,t){if((t=t.layerDefinition||t).globalIdField)return t.globalIdField;if(t.fields){var r,a=Object(n.a)(t.fields);try{for(a.s();!(r=a.n()).done;){var i=r.value;if("esriFieldTypeGlobalID"===i.type)return i.name}}catch(l){a.e(l)}finally{a.f()}}}},{key:"id",get:function(){var e=this._get("id");return null==e?Y++:e},set:function(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}},{key:"labelingInfo",set:function(e){this._setAndNotifyLayer("labelingInfo",e)}},{key:"writeLabelingInfo",value:function(e,t,r,a){e&&e.length&&(t.layerDefinition={drawingInfo:{labelingInfo:e.map((function(e){return e.write({},a)}))}})}},{key:"labelsVisible",set:function(e){this._setAndNotifyLayer("labelsVisible",e)}},{key:"layer",set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(t){return t.layer=e}))}},{key:"listMode",set:function(e){this._set("listMode",e)}},{key:"minScale",set:function(e){this._setAndNotifyLayer("minScale",e)}},{key:"readMinScale",value:function(e,t){return t.minScale||t.layerDefinition&&t.layerDefinition.minScale||0}},{key:"maxScale",set:function(e){this._setAndNotifyLayer("maxScale",e)}},{key:"readMaxScale",value:function(e,t){return t.maxScale||t.layerDefinition&&t.layerDefinition.maxScale||0}},{key:"readObjectIdFieldFromService",value:function(e,t){if((t=t.layerDefinition||t).objectIdField)return t.objectIdField;if(t.fields){var r,a=Object(n.a)(t.fields);try{for(a.s();!(r=a.n()).done;){var i=r.value;if("esriFieldTypeOID"===i.type)return i.name}}catch(l){a.e(l)}finally{a.f()}}}},{key:"opacity",set:function(e){this._setAndNotifyLayer("opacity",e)}},{key:"readOpacity",value:function(e,t){var r=t.layerDefinition;return 1-.01*(null!=r.transparency?r.transparency:r.drawingInfo.transparency)}},{key:"writeOpacity",value:function(e,t,r,a){t.layerDefinition={drawingInfo:{transparency:100-100*e}}}},{key:"writeParent",value:function(e,t){this.parent&&this.parent!==this.layer?t.parentLayerId=Object(M.e)(this.parent.id):t.parentLayerId=-1}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"renderer",set:function(e){if(e){var t,r=Object(n.a)(e.getSymbols());try{for(r.s();!(t=r.n()).done;){var a=t.value;if(Object(O.c)(a)){H.warn("Sublayer renderer should use 2D symbols");break}}}catch(i){r.e(i)}finally{r.f()}}this._setAndNotifyLayer("renderer",e)}},{key:"source",get:function(){return this._get("source")||new B.a({mapLayerId:this.id})},set:function(e){this._setAndNotifyLayer("source",e)}},{key:"sublayers",set:function(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}},{key:"castSublayers",value:function(e){return Object(M.m)(j.a.ofType(a),e)}},{key:"writeSublayers",value:function(e,t,r){this.get("sublayers.length")&&(t[r]=this.sublayers.map((function(e){return e.id})).toArray().reverse())}},{key:"readTypeIdField",value:function(e,t){var r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();var a=t.fields.find((function(e){return e.name.toLowerCase()===r}));a&&(r=a.name)}return null}},{key:"url",get:function(){var e,t,r=null!=(e=null==(t=this.layer)?void 0:t.parsedUrl)?e:this._lastParsedUrl,a=this.source;if(!r)return null;if(this._lastParsedUrl=r,"map-layer"===(null==a?void 0:a.type))return"".concat(r.path,"/").concat(a.mapLayerId);var i={layer:JSON.stringify({source:this.source})};return"".concat(r.path,"/dynamicLayer?").concat(Object(L.E)(i))},set:function(e){e?this._override("url",e):this._clearOverride("url")}},{key:"visible",set:function(e){this._setAndNotifyLayer("visible",e)}},{key:"writeVisible",value:function(e,t,r,a){t[r]=this.getAtOrigin("defaultVisibility","service")||e}},{key:"clone",value:function(){var e=Object(P.a)(this).store,t=new a;return Object(P.a)(t).store=e.clone(Z),this.commitProperty("url"),t._lastParsedUrl=this._lastParsedUrl,t}},{key:"createPopupTemplate",value:function(e){return Object(Q.a)(this,e)}},{key:"createQuery",value:function(){return new U.a({returnGeometry:!0,where:this.definitionExpression||"1=1"})}},{key:"createFeatureLayer",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,i,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.hasOwnProperty("sublayers")){e.next=2;break}return e.abrupt("return",null);case 2:return i=null==(t=this.layer)?void 0:t.parsedUrl,e.next=6,Promise.resolve().then(r.bind(null,286));case 6:return e.t0=e.sent.default,e.t1={url:i.path},n=new e.t0(e.t1),e.abrupt("return",(i&&this.source&&("map-layer"===this.source.type?n.layerId=this.source.mapLayerId:n.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(n.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(n.definitionExpression=this.definitionExpression),this.originIdOf("labelingInfo")>2&&(n.labelingInfo=Object(w.a)(this.labelingInfo)),this.originIdOf("labelsVisible")>0&&(n.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>0&&(n.legendEnabled=this.legendEnabled),this.originIdOf("visible")>0&&(n.visible=this.visible),this.originIdOf("minScale")>0&&(n.minScale=this.minScale),this.originIdOf("maxScale")>0&&(n.maxScale=this.maxScale),this.originIdOf("opacity")>0&&(n.opacity=this.opacity),this.originIdOf("popupTemplate")>0&&(n.popupTemplate=Object(w.a)(this.popupTemplate)),this.originIdOf("renderer")>2&&(n.renderer=Object(w.a)(this.renderer)),"data-layer"===(null==(a=this.source)?void 0:a.type)&&(n.dynamicDataSource=this.source.clone()),this.originIdOf("title")>0&&(n.title=this.title),"map-image"===this.layer.type&&this.layer.originIdOf("customParameters")>0&&(n.customParameters=this.layer.customParameters),"tile"===this.layer.type&&this.layer.originIdOf("customParameters")>0&&(n.customParameters=this.layer.customParameters),n));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatureType",value:function(e){var t=this.typeIdField,r=this.types;if(!t||!e)return null;var a=e.attributes?e.attributes[t]:void 0;if(null==a)return null;var i=null;return r.some((function(e){var t=e.id;return null!=t&&(t.toString()===a.toString()&&(i=e),!!i)})),i}},{key:"getFieldDomain",value:function(e,t){var r=t&&t.feature,a=this.getFeatureType(r);if(a){var i=a.domains&&a.domains[e];if(i&&"inherited"!==i.type)return i}return this._getLayerDomain(e)}},{key:"queryFeatures",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,l,u,c,y,p,b,d,f,h,v,O,j,m=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.length>0&&void 0!==m[0]?m[0]:this.createQuery(),a=m.length>1?m[1]:void 0,e.next=4,this.load();case 4:if(this.get("capabilities.operations.supportsQuery")){e.next=6;break}throw new g.a("Sublayer.queryFeatures","this layer doesn't support queries.");case 6:return e.next=8,Promise.all([Promise.resolve().then(r.bind(null,155)),Promise.resolve().then(r.bind(null,124))]);case 8:return p=e.sent,b=Object(i.a)(p,2),d=b[0].executeQuery,f=b[1].default,e.next=14,d(this.url,U.a.from(t),null!=(l=null==(u=this.layer)?void 0:u.spatialReference)?l:null,Object(s.a)(Object(s.a)({},a),{},{query:Object(s.a)(Object(s.a)({},null==(c=this.layer)?void 0:c.customParameters),{},{token:null==(y=this.layer)?void 0:y.apiKey})}));case 14:if(h=e.sent,null!=(v=f.fromJSON(h.data))&&v.features){O=Object(n.a)(v.features);try{for(O.s();!(j=O.n()).done;)j.value.sourceLayer=this}catch(o){O.e(o)}finally{O.f()}}return e.abrupt("return",v);case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"toExportImageJSON",value:function(){var e,t=this,r={id:this.id,source:(null==(e=this.source)?void 0:e.toJSON())||{mapLayerId:this.id,type:"mapLayer"}};this.definitionExpression&&(r.definitionExpression=this.definitionExpression);var a=["renderer","labelingInfo","opacity","labelsVisible"].reduce((function(e,r){return e[r]=t.originIdOf(r),e}),{});if(Object.keys(a).some((function(e){return a[e]>2}))){var i=r.drawingInfo={};a.renderer>2&&(i.renderer=this.renderer?this.renderer.toJSON():null),a.labelsVisible>2&&(i.showLabels=this.labelsVisible),this.labelsVisible&&a.labelingInfo>2&&(i.labelingInfo=this.labelingInfo?this.labelingInfo.map((function(e){return e.write({},{origin:"service",layer:t.layer})})):null,i.showLabels=!0),a.opacity>2&&(i.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(i.renderer)}return r}},{key:"_assignDefaultSymbolColors",value:function(e){this._forEachSimpleMarkerSymbols(e,(function(e){e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}},{key:"_forEachSimpleMarkerSymbols",value:function(e,t){if(e){var r,a="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[],i=Object(n.a)(a);try{for(i.s();!(r=i.n()).done;){var l=r.value;R(l.symbol)&&t(l.symbol)}}catch(o){i.e(o)}finally{i.f()}"symbol"in e&&R(e.symbol)&&t(e.symbol),"defaultSymbol"in e&&R(e.defaultSymbol)&&t(e.defaultSymbol)}}},{key:"_setAndNotifyLayer",value:function(e,t){var r,a,i=this.layer,n=this._get(e);switch(e){case"definitionExpression":r="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":r="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":r="supportsDynamicLayers",a="supportsModification"}var l=Object(P.a)(this).getDefaultOrigin();if("service"!==l){if(r&&!1===this.get("layer.capabilities.exportMap.".concat(r)))return void this._logLockedError(e,"capability not available 'layer.capabilities.exportMap.".concat(r,"'"));if(a&&!1===this.get("capabilities.exportMap.".concat(a)))return void this._logLockedError(e,"capability not available 'capabilities.exportMap.".concat(a,"'"))}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,t),"service"!==l&&n!==t&&i&&i.emit&&i.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}},{key:"_handleSublayersChange",value:function(e,t){var r=this;t&&(t.forEach((function(e){e.parent=null,e.layer=null})),this.handles.removeAll()),e&&(e.forEach((function(e){e.parent=r,e.layer=r.layer})),this.handles.add([e.on("after-add",(function(e){var t=e.item;t.parent=r,t.layer=r.layer})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null})),e.on("before-changes",(function(e){var t=r.get("layer.capabilities.exportMap.supportsSublayersChanges");null==t||t||(H.error(new g.a("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:r,layer:r.layer})),e.preventDefault())}))]))}},{key:"_logLockedError",value:function(e,t){H.error(new g.a("sublayer:locked","Property '".concat(e,"' can't be changed on Sublayer from the layer '").concat(this.layer.id,"'"),{reason:t,sublayer:this,layer:this.layer}))}},{key:"_getLayerDomain",value:function(e){var t=this.fieldsIndex.get(e);return t?t.domain:null}}]),l}(Object(m.b)(Object(k.a)(Object(S.a)(I.a))));$.test={isMapImageLayerOverridePolicy:function(e){return e===X||e===K},isTileImageLayerOverridePolicy:function(e){return e===W}},Object(d.a)([Object(D.b)({readOnly:!0})],$.prototype,"capabilities",void 0),Object(d.a)([Object(_.a)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],$.prototype,"readCapabilities",null),Object(d.a)([Object(D.b)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{overridePolicy:K}}})],$.prototype,"definitionExpression",null),Object(d.a)([Object(D.b)({type:[A.a],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],$.prototype,"fields",void 0),Object(d.a)([Object(D.b)({readOnly:!0})],$.prototype,"fieldsIndex",null),Object(d.a)([Object(D.b)({type:G.a,json:{read:{source:"layerDefinition.extent"}}})],$.prototype,"fullExtent",void 0),Object(d.a)([Object(D.b)({type:String})],$.prototype,"globalIdField",void 0),Object(d.a)([Object(_.a)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],$.prototype,"readGlobalIdFieldFromService",null),Object(d.a)([Object(D.b)({type:M.a,json:{write:{ignoreOrigin:!0}}})],$.prototype,"id",null),Object(d.a)([Object(D.b)({value:null,type:[J.a],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:X}}})],$.prototype,"labelingInfo",null),Object(d.a)([Object(T.a)("labelingInfo")],$.prototype,"writeLabelingInfo",null),Object(d.a)([Object(D.b)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:X}}})],$.prototype,"labelsVisible",null),Object(d.a)([Object(D.b)({value:null})],$.prototype,"layer",null),Object(d.a)([Object(D.b)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:z}}})],$.prototype,"legendEnabled",void 0),Object(d.a)([Object(D.b)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],$.prototype,"listMode",null),Object(d.a)([Object(D.b)({type:Number,value:0,json:{write:{overridePolicy:X}}})],$.prototype,"minScale",null),Object(d.a)([Object(_.a)("minScale",["minScale","layerDefinition.minScale"])],$.prototype,"readMinScale",null),Object(d.a)([Object(D.b)({type:Number,value:0,json:{write:{overridePolicy:X}}})],$.prototype,"maxScale",null),Object(d.a)([Object(_.a)("maxScale",["maxScale","layerDefinition.maxScale"])],$.prototype,"readMaxScale",null),Object(d.a)([Object(D.b)({type:String})],$.prototype,"objectIdField",void 0),Object(d.a)([Object(_.a)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],$.prototype,"readObjectIdFieldFromService",null),Object(d.a)([Object(D.b)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:X}}})],$.prototype,"opacity",null),Object(d.a)([Object(_.a)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],$.prototype,"readOpacity",null),Object(d.a)([Object(T.a)("opacity")],$.prototype,"writeOpacity",null),Object(d.a)([Object(D.b)({json:{type:M.a,write:{target:"parentLayerId",allowNull:!0,overridePolicy:X}}})],$.prototype,"parent",void 0),Object(d.a)([Object(T.a)("parent")],$.prototype,"writeParent",null),Object(d.a)([Object(D.b)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(e,t){return!t.disablePopup}},write:{target:"disablePopup",overridePolicy:z,writer:function(e,t,r){t[r]=!e}}}})],$.prototype,"popupEnabled",void 0),Object(d.a)([Object(D.b)({type:f.a,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:z}}})],$.prototype,"popupTemplate",void 0),Object(d.a)([Object(D.b)({readOnly:!0})],$.prototype,"defaultPopupTemplate",null),Object(d.a)([Object(D.b)({types:h.a,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:X},origins:{"web-scene":{types:h.b,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:X}}}}})],$.prototype,"renderer",null),Object(d.a)([Object(D.b)({types:{key:"type",base:null,typeMap:{"data-layer":q.a,"map-layer":B.a}},cast:function(e){if(e){if("mapLayerId"in e)return Object(M.d)(B.a,e);if("dataSource"in e)return Object(M.d)(q.a,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:X}}})],$.prototype,"source",null),Object(d.a)([Object(D.b)()],$.prototype,"sourceJSON",void 0),Object(d.a)([Object(D.b)({value:null,json:{type:[M.a],write:{target:"subLayerIds",allowNull:!0,overridePolicy:X}}})],$.prototype,"sublayers",null),Object(d.a)([Object(E.a)("sublayers")],$.prototype,"castSublayers",null),Object(d.a)([Object(T.a)("sublayers")],$.prototype,"writeSublayers",null),Object(d.a)([Object(D.b)({type:String,json:{read:{source:"name"},write:{target:"name",allowNull:!0,overridePolicy:z}}})],$.prototype,"title",void 0),Object(d.a)([Object(D.b)({type:String})],$.prototype,"typeIdField",void 0),Object(d.a)([Object(_.a)("typeIdField",["layerDefinition.typeIdField"])],$.prototype,"readTypeIdField",null),Object(d.a)([Object(D.b)({type:[V.a],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],$.prototype,"types",void 0),Object(d.a)([Object(D.b)({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:W}}})],$.prototype,"url",null),Object(d.a)([Object(D.b)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:X}}})],$.prototype,"visible",null),Object(d.a)([Object(T.a)("visible")],$.prototype,"writeVisible",null);var ee=$=a=Object(d.a)([Object(F.a)("esri.layers.support.Sublayer")],$);t.a=ee},831:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var a=r(15),i=r(11),n=r(6),l=r.n(n),o=r(14),s=r(2),u=r(3),c=r(4),y=r(5),p=r(0),b=r(59),d=r(24),f=r(27),h=r(389),v=r(1),O=(r(10),r(13),r(9),r(28)),j=r(7),g=r(51),m=r(37),S=r(110),w=function(e){var t=function(e){Object(c.a)(r,e);var t=Object(y.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.apply(this,arguments)).capabilities=void 0,e.copyright=null,e.fullExtent=null,e.legendEnabled=!0,e.spatialReference=null,e.version=null,e}return Object(u.a)(r,[{key:"readCapabilities",value:function(e,t){var r=t.capabilities&&t.capabilities.split(",").map((function(e){return e.toLowerCase().trim()}));if(!r)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};var a=this.type,i=-1!==r.indexOf("query"),n=-1!==r.indexOf("map"),l=!!t.exportTilesAllowed,o=-1!==r.indexOf("tilemap"),s="tile"!==a&&!!t.supportsDynamicLayers,u="tile"!==a&&(!t.tileInfo||s),c="tile"!==a&&(!t.tileInfo||s),y="tile"!==a,p=!!t.cimVersion&&h.a.parse(t.cimVersion).since(1,4);return{operations:{supportsQuery:i,supportsExportMap:n,supportsExportTiles:l,supportsTileMap:o},exportMap:n?{supportsArcadeExpressionForLabeling:p,supportsSublayersChanges:y,supportsDynamicLayers:s,supportsSublayerVisibility:u,supportsSublayerDefinitionExpression:c}:null,exportTiles:l?{maxExportTilesCount:+t.maxExportTilesCount}:null}}},{key:"readVersion",value:function(e,t){var r=t.currentVersion;return r||(r=t.hasOwnProperty("capabilities")||t.hasOwnProperty("tables")?10:t.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),r}},{key:"fetchSublayerInfo",value:function(){var e=Object(o.a)(l.a.mark((function e(t,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchAllLayersAndTables(r);case 2:return e.abrupt("return",this._allLayersAndTablesMap.get(t));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"fetchAllLayersAndTables",value:function(){var e=Object(o.a)(l.a.mark((function e(t){var r,n=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load(t);case 2:return this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=Object(b.default)(Object(f.K)(this.url).path+"/layers",{responseType:"json",query:Object(i.a)(Object(i.a)({f:"json"},this.customParameters),{},{token:this.apiKey})}).then((function(e){n._allLayersAndTablesMap=new Map;var t,r=Object(a.a)(e.data.layers);try{for(r.s();!(t=r.n()).done;){var i=t.value;n._allLayersAndTablesMap.set(i.id,i)}}catch(l){r.e(l)}finally{r.f()}return{result:e.data}}),(function(e){return{error:e}}))),e.next=5,this._allLayersAndTablesPromise;case 5:if(r=e.sent,Object(d.v)(t),!("result"in r)){e.next=8;break}return e.abrupt("return",r.result);case 8:throw r.error;case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(e);return Object(p.a)([Object(v.b)({readOnly:!0})],t.prototype,"capabilities",void 0),Object(p.a)([Object(O.a)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],t.prototype,"readCapabilities",null),Object(p.a)([Object(v.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(p.a)([Object(v.b)({type:g.a})],t.prototype,"fullExtent",void 0),Object(p.a)([Object(v.b)(S.c)],t.prototype,"id",void 0),Object(p.a)([Object(v.b)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),Object(p.a)([Object(v.b)(S.j)],t.prototype,"popupEnabled",void 0),Object(p.a)([Object(v.b)({type:m.a})],t.prototype,"spatialReference",void 0),Object(p.a)([Object(v.b)()],t.prototype,"version",void 0),Object(p.a)([Object(O.a)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],t.prototype,"readVersion",null),t=Object(p.a)([Object(j.a)("esri.layers.mixins.ArcGISMapService")],t)}},832:function(e,t,r){"use strict";r.d(t,"a",(function(){return I}));var a=r(15),i=r(2),n=r(3),l=r(41),o=r(36),s=r(4),u=r(5),c=r(0),y=r(33),p=r(157),b=r(20),d=r(9),f=r(1),h=(r(10),r(63)),v=(r(13),r(7)),O=r(92),j=r(785),g=r(692),m=d.a.getLogger("esri.layers.TileLayer");var S=y.a.ofType(j.a);function w(e,t){e&&e.forEach((function(e){t(e),e.sublayers&&e.sublayers.length&&w(e.sublayers,t)}))}var I=function(e){var t=function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).allSublayers=new p.a({getCollections:function(){return[e.sublayers]},getChildrenFunction:function(e){return e.sublayers}}),e.sublayersSourceJSON={2:{},3:{},4:{},5:{}},e.handles.add(e.watch("sublayers",(function(t,r){return e._handleSublayersChange(t,r)}),!0)),e}return Object(n.a)(r,[{key:"readSublayers",value:function(e,t){if(t&&e){var r=this.sublayersSourceJSON,a=Object(O.d)(t.origin);if(!(a<2)&&(r[a]={context:t,visibleLayers:e.visibleLayers||r[a].visibleLayers,layers:e.layers||r[a].layers},!(a>2))){this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);var i=this.createSublayersForOrigin("web-document"),n=i.sublayers,l=i.origin,o=Object(h.a)(this);o.setDefaultOrigin(l),this._set("sublayers",new S(n)),o.setDefaultOrigin("user")}}}},{key:"findSublayerById",value:function(e){return this.allSublayers.find((function(t){return t.id===e}))}},{key:"createServiceSublayers",value:function(){return this.createSublayersForOrigin("service").sublayers}},{key:"createSublayersForOrigin",value:function(e){var t,r=Object(O.d)("web-document"===e?"web-map":e),i=2,n=this.sublayersSourceJSON[2].layers,l=this.sublayersSourceJSON[2].context,o=null,s=[3,4,5].filter((function(e){return e<=r})),u=Object(a.a)(s);try{for(u.s();!(t=u.n()).done;){var c=t.value,y=this.sublayersSourceJSON[c];Object(g.b)(y.layers)&&(i=c,n=y.layers,l=y.context,y.visibleLayers&&(o={visibleLayers:y.visibleLayers,context:y.context}))}}catch(N){u.e(N)}finally{u.f()}var p,b=[3,4,5].filter((function(e){return e>i&&e<=r})),d=null,f=Object(a.a)(b);try{for(f.s();!(p=f.n()).done;){var h=p.value,v=this.sublayersSourceJSON[h],m=v.layers,I=v.visibleLayers,x=v.context;m&&(d={layers:m,context:x}),I&&(o={visibleLayers:I,context:x})}}catch(N){f.e(N)}finally{f.f()}var k=function(e,t){var r=[],a={};return e?(e.forEach((function(e){var i=new j.a;if(i.read(e,t),a[i.id]=i,null!=e.parentLayerId&&-1!==e.parentLayerId){var n=a[e.parentLayerId];n.sublayers||(n.sublayers=[]),n.sublayers.unshift(i)}else r.unshift(i)})),r):r}(n,l),L=new Map,D=new Set;if(d){var P,E=Object(a.a)(d.layers);try{for(E.s();!(P=E.n()).done;){var _=P.value;L.set(_.id,_)}}catch(N){E.e(N)}finally{E.f()}}if(o){var F,T=Object(a.a)(o.visibleLayers);try{for(T.s();!(F=T.n()).done;){var M=F.value;D.add(M)}}catch(N){T.e(N)}finally{T.f()}}return w(k,(function(e){d&&e.read(L.get(e.id),d.context),o&&e.read({defaultVisibility:D.has(e.id)},o.context)})),{origin:Object(O.b)(i),sublayers:new S({items:k})}}},{key:"read",value:function(e,t){Object(l.a)(Object(o.a)(r.prototype),"read",this).call(this,e,t),this.readSublayers(e,t)}},{key:"_handleSublayersChange",value:function(e,t){var r=this;t&&(t.forEach((function(e){e.parent=null,e.layer=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((function(e){e.parent=r,e.layer=r})),this.handles.add([e.on("after-add",(function(e){var t=e.item;t.parent=r,t.layer=r})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(function(e){m.error(new b.a("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:r})),e.preventDefault()})),"sublayers-owner"))}}]),r}(e);return Object(c.a)([Object(f.b)({readOnly:!0})],t.prototype,"allSublayers",void 0),Object(c.a)([Object(f.b)({readOnly:!0,type:y.a.ofType(j.a)})],t.prototype,"serviceSublayers",void 0),Object(c.a)([Object(f.b)({value:null,type:S,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),Object(c.a)([Object(f.b)({readOnly:!0})],t.prototype,"sublayersSourceJSON",void 0),t=Object(c.a)([Object(v.a)("esri.layers.mixins.SublayersOwner")],t),t}}}]);
//# sourceMappingURL=20.467dc462.chunk.js.map