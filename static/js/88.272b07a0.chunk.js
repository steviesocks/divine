(this.webpackJsonpdivine=this.webpackJsonpdivine||[]).push([[88],{618:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return c}));var n=r(17),a=r(11),i=r(10),o=r(18),s=r(621),u=r(190);function c(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?u.a:"esriGeometryPolyline"===e?u.c:u.b}}}function p(e,t){if(Object(i.a)("csp-restrictions"))return function(){return Object(a.a)(Object(n.a)({},t,null),e)};try{var r="this.".concat(t," = null;");for(var o in e)r+="this".concat(o.indexOf(".")?'["'.concat(o,'"]'):".".concat(o)," = ").concat(JSON.stringify(e[o]),";");var s=new Function(r);return function(){return new s}}catch(u){return function(){return Object(a.a)(Object(n.a)({},t,null),e)}}}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:Object(o.a)(e)}}]}function d(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:s.a,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},621:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},874:function(e,t,r){"use strict";r.r(t);var n=r(15),a=r(2),i=r(3),o=r(16),s=r(41),u=r(36),c=r(4),p=r(5),l=r(0),d=(r(72),r(188)),f=(r(282),r(338),r(339),r(340),r(111),r(257),r(256),r(285),r(260)),b=r(172),y=r(57),O=r(27),j=r(1),v=r(10),m=(r(13),r(9),r(28)),h=r(7),g=r(25),w=r(174),F=r(187),x=r(26),k=r(11),I=r(6),R=r.n(I),S=r(14),P=r(20),q=r(123),T=r(89),C=r(8),U=r(24),E=r(29),D=r(288),N=r(618),_=r(801),J=r(124),W=r(51),Q=function(e){Object(c.a)(r,e);var t=Object(p.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.apply(this,arguments)).capabilities=Object(N.a)(!1,!1),e.type="wfs",e._updateCustomParameters=Object(U.i)((function(){var t,r=e.layer.customParameters;return null==(t=e._connection)?void 0:t.invoke("setCustomParameters",r)})),e}return Object(i.a)(r,[{key:"load",value:function(e){var t,r=null!=(t=Object(C.i)(e)&&e.signal)?t:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}},{key:"destroy",value:function(){var e;null==(e=this._connection)||e.close(),this._connection=null}},{key:"openPorts",value:function(){var e=Object(S.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this._connection.openPorts());case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=Object(S.a)(R.a.mark((function e(t){var r,n,a=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},e.next=3,this.load(r);case 3:return e.next=5,this._connection.invoke("queryFeatures",t?t.toJSON():null,r);case 5:return n=e.sent,e.abrupt("return",J.default.fromJSON(n));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeaturesJSON",value:function(){var e=Object(S.a)(R.a.mark((function e(t){var r,n=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryFeatures",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=Object(S.a)(R.a.mark((function e(t){var r,n=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryFeatureCount",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=Object(S.a)(R.a.mark((function e(t){var r,n=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryObjectIds",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=Object(S.a)(R.a.mark((function e(t){var r,n,a=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},e.next=3,this.load(r);case 3:return e.next=5,this._connection.invoke("queryExtent",t?t.toJSON():null,r);case 5:return n=e.sent,e.abrupt("return",{count:n.count,extent:W.a.fromJSON(n.extent)});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=Object(S.a)(R.a.mark((function e(t){var r,n=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("querySnapping",t,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=Object(S.a)(R.a.mark((function e(){var t,r,n,a=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e.next=3,this.load(t);case 3:return e.next=5,this._connection.invoke("refresh",void 0,t);case 5:return r=e.sent,n=r.extent,e.abrupt("return",(this.sourceJSON.extent=n,{extent:n}));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_createLoadOptions",value:function(){var e=Object(S.a)(R.a.mark((function e(t){var r,n,a,i,o,s,u,c,p,l,d,f,b=this;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.layer,n=r.url,a=r.customParameters,i=r.name,o=r.namespaceUri,s=r.spatialReference,u=r.fields,c=r.geometryType,p=r.swapXY,n){e.next=3;break}throw new P.a("wfs-layer:missing-url","WFSLayer must be created with a url");case 3:if(e.t0=this.wfsCapabilities,e.t0){e.next=8;break}return e.next=7,Object(_.c)(n,Object(k.a)({customParameters:a},t));case 7:e.t0=e.sent;case 8:if(this.wfsCapabilities=e.t0,!["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((function(e){return null==b.layer[e]}))){e.next=15;break}return e.next=12,Object(_.e)(this.wfsCapabilities,i,o,{spatialReference:s,customParameters:a,signal:null==t?void 0:t.signal});case 12:e.t1=e.sent,e.next=16;break;case 15:e.t1=Object(k.a)(Object(k.a)({},Object(_.f)(u)),{},{geometryType:c,name:i,namespaceUri:o,spatialReference:s,swapXY:p});case 16:return l=e.t1,d=Object(C.p)(Object(_.b)(this.wfsCapabilities.readFeatureTypes(),l.name,l.namespaceUri)),f=w.a.toJSON(l.geometryType),e.abrupt("return",{customParameters:a,featureType:d,fields:l.fields.map((function(e){return e.toJSON()})),geometryField:l.geometryField,geometryType:f,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:l.objectIdField,spatialReference:l.spatialReference.toJSON(),swapXY:l.swapXY});case 20:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_startWorker",value:function(){var e=Object(S.a)(R.a.mark((function e(t){var r,n,a,i,o,s,u,c,p,l=this;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.j)([this._createLoadOptions(t),Object(D.b)("WFSSourceWorker",Object(k.a)(Object(k.a)({},t),{},{strategy:Object(v.a)("feature-layers-workers")?"dedicated":"local"}))]);case 2:if(r=e.sent,n=Object(x.a)(r,2),a=n[0],i=n[1],o=a.error||i.error||null,s=i.value||null,!o){e.next=10;break}throw s&&s.close(),o;case 10:return u=a.value,this._connection=i.value,e.next=14,this._connection.invoke("load",u,t);case 14:c=e.sent,p=c.extent,this.sourceJSON={extent:p,fields:u.fields,geometryType:u.geometryType,objectIdField:u.objectIdField,geometryField:u.geometryField,drawingInfo:Object(N.d)(u.geometryType),name:u.featureType.title,wfsInfo:{name:u.featureType.name,featureUrl:u.getFeatureUrl,maxFeatures:3e3,swapXY:u.swapXY,supportedSpatialReferences:u.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:u.featureType.namespaceUri}},this.handles.add(Object(E.a)(this.layer,"customParameters",(function(){return l._updateCustomParameters().catch((function(){}))})));case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(Object(q.b)(T.a));Object(l.a)([Object(j.b)()],Q.prototype,"capabilities",void 0),Object(l.a)([Object(j.b)({constructOnly:!0})],Q.prototype,"layer",void 0),Object(l.a)([Object(j.b)()],Q.prototype,"sourceJSON",void 0),Object(l.a)([Object(j.b)()],Q.prototype,"type",void 0),Object(l.a)([Object(j.b)()],Q.prototype,"wfsCapabilities",void 0);var X,Y=Q=Object(l.a)([Object(h.a)("esri.layers.graphics.sources.WFSSource")],Q),G=r(284),M=r(383),B=r(365),L=r(364),V=r(372),A=r(280),z=r(384),H=r(110),K=r(241),Z=r(295),$=r(261),ee=r(306),te=r(229),re=r(385),ne=r(58),ae=r(235),ie=r(341),oe=r(87),se=r(379),ue=r(291),ce=r(37),pe=Object(re.a)(),le=X=function(e){Object(c.a)(r,e);var t=Object(p.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).capabilities=null,n.copyright=null,n.customParameters=null,n.definitionExpression=null,n.displayField=null,n.elevationInfo=null,n.featureReduction=null,n.featureUrl=void 0,n.fields=null,n.fieldsIndex=null,n.fullExtent=null,n.geometryType=null,n.labelsVisible=!0,n.labelingInfo=null,n.legendEnabled=!0,n.objectIdField=null,n.operationalLayerType="WFS",n.maxFeatures=3e3,n.mode=0,n.name=null,n.namespaceUri=null,n.outFields=null,n.popupEnabled=!0,n.popupTemplate=null,n.screenSizePerspectiveEnabled=!0,n.source=new Y({layer:Object(o.a)(n)}),n.spatialReference=ce.a.WGS84,n.spatialReferences=[4326],n.swapXY=void 0,n.title="WFS",n.type="wfs",n.url=null,n.version=void 0,n}return Object(i.a)(r,[{key:"destroy",value:function(){var e;null==(e=this.source)||e.destroy()}},{key:"load",value:function(e){var t=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((function(){return t.source.load(e)})).then((function(){t.read(t.source.sourceJSON,{origin:"service",url:t.parsedUrl}),t.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),Object(ne.j)(t.renderer,t.fieldsIndex),Object(ne.k)(t.timeInfo,t.fieldsIndex)}))),Promise.resolve(this)}},{key:"createQueryVersion",get:function(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"readFeatureReduction",value:function(e,t){return Object(ee.a)(e,t)}},{key:"writeWebSceneFeatureReduction",value:function(e,t,r,n){Object(ee.c)(e,t,"layerDefinition.featureReduction",n)}},{key:"writeFields",value:function(e,t,r){var n=e.filter((function(e){return e.name!==_.a}));this.geometryField&&n.unshift(new te.a({name:this.geometryField,alias:this.geometryField,type:"geometry"})),Object(y.c)(r,n.map((function(e){return e.toJSON()})),t)}},{key:"parsedUrl",get:function(){return this.url?Object(O.K)(this.url):null}},{key:"renderer",set:function(e){Object(ne.j)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"createPopupTemplate",value:function(e){return Object(se.a)(this,e)}},{key:"createQuery",value:function(){var e=new oe.a;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";var t=this.timeOffset,r=this.timeExtent;return e.timeExtent=null!=t&&null!=r?r.offset(-t.value,t.unit):r||null,e}},{key:"getFieldDomain",value:function(e,t){var r;return null==(r=this.getField(e))?void 0:r.domain}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"queryFeatures",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatures(oe.a.from(e)||r.createQuery(),t)})).then((function(e){if(null!=e&&e.features){var t,a=Object(n.a)(e.features);try{for(a.s();!(t=a.n()).done;){var i=t.value;i.layer=i.sourceLayer=r}}catch(o){a.e(o)}finally{a.f()}}return e}))}},{key:"queryObjectIds",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryObjectIds(oe.a.from(e)||r.createQuery(),t)}))}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatureCount(oe.a.from(e)||r.createQuery(),t)}))}},{key:"queryExtent",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryExtent(oe.a.from(e)||r.createQuery(),t)}))}},{key:"refresh",value:function(){var e=this;this.source.refresh().then((function(t){e.read(t,{origin:"service"}),Object(s.a)(Object(u.a)(r.prototype),"refresh",e).call(e)}))}}],[{key:"fromWFSLayerInfo",value:function(e){var t=e.customParameters,r=e.fields,n=e.geometryField,a=e.geometryType,i=e.name,o=e.namespaceUri,s=e.objectIdField,u=e.spatialReference,c=e.swapXY,p=e.url,l=e.wfsCapabilities;return new X({customParameters:t,fields:r,geometryField:n,geometryType:a,name:i,namespaceUri:o,objectIdField:s,spatialReference:u,swapXY:c,url:p,wfsCapabilities:l})}}]),r}(Object(M.a)(Object(G.a)(Object(z.a)(Object(V.a)(Object(A.a)(Object(B.a)(Object(L.a)(Object(b.a)(F.a)))))))));Object(l.a)([Object(j.b)({readOnly:!0,aliasOf:"source.capabilities"})],le.prototype,"capabilities",void 0),Object(l.a)([Object(j.b)({type:String})],le.prototype,"copyright",void 0),Object(l.a)([Object(j.b)({readOnly:!0})],le.prototype,"createQueryVersion",null),Object(l.a)([Object(j.b)({json:{read:{source:"wfsInfo.customParameters"},write:{target:"wfsInfo.customParameters",ignoreOrigin:!0}}})],le.prototype,"customParameters",void 0),Object(l.a)([Object(j.b)({readOnly:!0})],le.prototype,"defaultPopupTemplate",null),Object(l.a)([Object(j.b)({type:String})],le.prototype,"definitionExpression",void 0),Object(l.a)([Object(j.b)({type:String})],le.prototype,"displayField",void 0),Object(l.a)([Object(j.b)({type:ue.a})],le.prototype,"elevationInfo",void 0),Object(l.a)([Object(j.b)({types:{key:"type",base:K.a,typeMap:{selection:$.a,cluster:Z.a}},json:{write:{target:"layerDefinition.featureReduction"}}})],le.prototype,"featureReduction",void 0),Object(l.a)([Object(m.a)("featureReduction",["layerDefinition.featureReduction"])],le.prototype,"readFeatureReduction",null),Object(l.a)([Object(g.a)("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:ee.b}})],le.prototype,"writeWebSceneFeatureReduction",null),Object(l.a)([Object(j.b)({readOnly:!0,json:{read:{source:"wfsInfo.featureUrl"},write:{target:"wfsInfo.featureUrl",ignoreOrigin:!0,isRequired:!0}}})],le.prototype,"featureUrl",void 0),Object(l.a)([Object(j.b)({type:[te.a],json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields",ignoreOrigin:!0,isRequired:!0},origins:{service:{read:{source:"fields"}}}}})],le.prototype,"fields",void 0),Object(l.a)([Object(g.a)("fields")],le.prototype,"writeFields",null),Object(l.a)([Object(j.b)(pe.fieldsIndex)],le.prototype,"fieldsIndex",void 0),Object(l.a)([Object(j.b)({type:W.a,json:{origins:{service:{read:{source:"extent"}}}}})],le.prototype,"fullExtent",void 0),Object(l.a)([Object(j.b)()],le.prototype,"geometryField",void 0),Object(l.a)([Object(j.b)({type:w.a.apiValues,json:{read:{source:"layerDefinition.geometryType",reader:w.a.read},write:{target:"layerDefinition.geometryType",writer:w.a.write,ignoreOrigin:!0},origins:{service:{read:w.a.read}}}})],le.prototype,"geometryType",void 0),Object(l.a)([Object(j.b)({type:String})],le.prototype,"id",void 0),Object(l.a)([Object(j.b)(H.d)],le.prototype,"labelsVisible",void 0),Object(l.a)([Object(j.b)({type:[ae.a],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:ie.a},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],le.prototype,"labelingInfo",void 0),Object(l.a)([Object(j.b)(H.e)],le.prototype,"legendEnabled",void 0),Object(l.a)([Object(j.b)({type:["show","hide"]})],le.prototype,"listMode",void 0),Object(l.a)([Object(j.b)({type:String})],le.prototype,"objectIdField",void 0),Object(l.a)([Object(j.b)({type:["WFS"]})],le.prototype,"operationalLayerType",void 0),Object(l.a)([Object(j.b)({json:{read:{source:"wfsInfo.maxFeatures"},write:{target:"wfsInfo.maxFeatures",ignoreOrigin:!0,isRequired:!0}}})],le.prototype,"maxFeatures",void 0),Object(l.a)([Object(j.b)({readOnly:!0,json:{read:{source:"mode"},write:{target:"mode",ignoreOrigin:!0,isRequired:!0}}})],le.prototype,"mode",void 0),Object(l.a)([Object(j.b)({json:{read:{source:"wfsInfo.name"},write:{target:"wfsInfo.name",ignoreOrigin:!0,isRequired:!0}}})],le.prototype,"name",void 0),Object(l.a)([Object(j.b)({json:{read:{source:"wfsInfo.wfsNamespace"},write:{target:"wfsInfo.wfsNamespace",ignoreOrigin:!0,isRequired:!0}}})],le.prototype,"namespaceUri",void 0),Object(l.a)([Object(j.b)(pe.outFields)],le.prototype,"outFields",void 0),Object(l.a)([Object(j.b)({readOnly:!0})],le.prototype,"parsedUrl",null),Object(l.a)([Object(j.b)(H.j)],le.prototype,"popupEnabled",void 0),Object(l.a)([Object(j.b)({type:d.a,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],le.prototype,"popupTemplate",void 0),Object(l.a)([Object(j.b)({types:f.a,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},read:{source:"layerDefinition.drawingInfo.renderer"},write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],le.prototype,"renderer",null),Object(l.a)([Object(j.b)({type:Boolean})],le.prototype,"screenSizePerspectiveEnabled",void 0),Object(l.a)([Object(j.b)({readOnly:!0})],le.prototype,"source",void 0),Object(l.a)([Object(j.b)({type:ce.a,json:{read:{source:"layerDefinition.spatialReference"},write:{target:"layerDefinition.spatialReference",ignoreOrigin:!0,isRequired:!0},origins:{service:{read:{source:"extent.spatialReference"}}}}})],le.prototype,"spatialReference",void 0),Object(l.a)([Object(j.b)({readOnly:!0,json:{read:{source:"wfsInfo.supportedSpatialReferences"},write:{target:"wfsInfo.supportedSpatialReferences",ignoreOrigin:!0,isRequired:!0}}})],le.prototype,"spatialReferences",void 0),Object(l.a)([Object(j.b)({json:{read:{source:"wfsInfo.swapXY"},write:{target:"wfsInfo.swapXY",ignoreOrigin:!0,isRequired:!0}}})],le.prototype,"swapXY",void 0),Object(l.a)([Object(j.b)({json:{read:{source:"title"},write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{read:{source:"name"}}}}})],le.prototype,"title",void 0),Object(l.a)([Object(j.b)({json:{read:!1},readOnly:!0})],le.prototype,"type",void 0),Object(l.a)([Object(j.b)({type:String,json:{write:!0}})],le.prototype,"url",void 0),Object(l.a)([Object(j.b)({readOnly:!0,json:{read:{source:"wfsInfo.version"},write:{target:"wfsInfo.version",ignoreOrigin:!0,isRequired:!0}}})],le.prototype,"version",void 0),Object(l.a)([Object(j.b)({aliasOf:"source.wfsCapabilities"})],le.prototype,"wfsCapabilities",void 0);var de=le=X=Object(l.a)([Object(h.a)("esri.layers.WFSLayer")],le);t.default=de}}]);
//# sourceMappingURL=88.272b07a0.chunk.js.map