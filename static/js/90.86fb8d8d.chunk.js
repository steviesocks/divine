(this.webpackJsonpdivine=this.webpackJsonpdivine||[]).push([[90],{618:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return o}));var a=r(17),n=r(11),s=r(10),u=r(18),i=r(621),c=r(190);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?c.a:"esriGeometryPolyline"===e?c.c:c.b}}}function l(e,t){if(Object(s.a)("csp-restrictions"))return function(){return Object(n.a)(Object(a.a)({},t,null),e)};try{var r="this.".concat(t," = null;");for(var u in e)r+="this".concat(u.indexOf(".")?'["'.concat(u,'"]'):".".concat(u)," = ").concat(JSON.stringify(e[u]),";");var i=new Function(r);return function(){return new i}}catch(c){return function(){return Object(n.a)(Object(a.a)({},t,null),e)}}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:Object(u.a)(e)}}]}function d(e,t){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:i.a,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},621:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},935:function(e,t,r){"use strict";r.r(t);var a=r(11),n=r(15),s=r(32),u=r(6),i=r.n(u),c=r(2),o=r(3),l=r(4),p=r(5),d=r(14),h=r(0),y=(r(72),r(80)),f=r(59),b=r(101),v=r(20),m=r(10),O=r(34),j=r(89),R=r(8),x=r(57),F=r(27),g=r(1),k=(r(13),r(9),r(7)),q=r(51),I=r(60),_=r(618),w=r(352),S=r(240),E=r(393),A=r(37),T=new O.a({originalAndCurrentFeatures:"original-and-current-features",none:"none"});function Q(e){return U.apply(this,arguments)}function U(){return(U=Object(d.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!=typeof t){e.next=3;break}return r=Object(F.i)(t),e.abrupt("return",r||{data:t});case 3:return e.abrupt("return",new Promise((function(e,r){var a=new FileReader;a.readAsDataURL(t),a.onload=function(){return e(Object(F.i)(a.result))},a.onerror=function(e){return r(e)}})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=new Set(["Feature Layer","Table"]),J=function(e){Object(l.a)(r,e);var t=Object(p.a)(r);function r(){var e;return Object(c.a)(this,r),(e=t.apply(this,arguments)).type="feature-layer",e}return Object(o.a)(r,[{key:"load",value:function(e){var t=Object(R.i)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}},{key:"queryTask",get:function(){var e=this.layer,t=e.capabilities.query.supportsFormatPBF,r=e.parsedUrl,a=e.dynamicDataSource,n=e.infoFor3D,s=e.gdbVersion,u=e.spatialReference,i=e.fieldsIndex,c=Object(m.a)("featurelayer-pbf")&&t&&Object(R.h)(n)?"pbf":"json";return new E.a({url:r.path,format:c,fieldsIndex:i,infoFor3D:n,dynamicDataSource:a,gdbVersion:s,sourceSpatialReference:u})}},{key:"addAttachment",value:function(){var e=Object(d.a)(i.a.mark((function e(t,r){var a,n,s,u,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return a=t.attributes[this.layer.objectIdField],n=this.layer.parsedUrl.path+"/"+a+"/addAttachment",s=this._getLayerRequestOptions(),u=this._getFormDataForAttachment(r,s.query),e.prev=3,e.next=6,Object(f.default)(n,{body:u});case 6:return c=e.sent,e.abrupt("return",this._createFeatureEditResult(c.data.addAttachmentResult));case 10:throw e.prev=10,e.t0=e.catch(3),this._createAttachmentErrorResult(a,e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"updateAttachment",value:function(){var e=Object(d.a)(i.a.mark((function e(t,r,a){var n,s,u,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return n=t.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+n+"/updateAttachment",u=this._getLayerRequestOptions({query:{attachmentId:r}}),c=this._getFormDataForAttachment(a,u.query),e.prev=3,e.next=6,Object(f.default)(s,{body:c});case 6:return o=e.sent,e.abrupt("return",this._createFeatureEditResult(o.data.updateAttachmentResult));case 10:throw e.prev=10,e.t0=e.catch(3),this._createAttachmentErrorResult(n,e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t,r,a){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=Object(d.a)(i.a.mark((function e(t,r){var a,u,c,o,l,p,d,h,y,b,v,m,O,j,R,x,F;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:a=t.addFeatures.map(this._serializeFeature,this),u=t.updateFeatures.map(this._serializeFeature,this),c=this._getFeatureIds(t.deleteFeatures,null==r?void 0:r.globalIdUsed),Object(S.b)(a,u,this.layer.spatialReference),o=[],l=[],p=Object(s.a)(t.deleteAttachments),d=Object(n.a)(t.addAttachments),e.prev=6,d.s();case 8:if((h=d.n()).done){e.next=17;break}return y=h.value,e.t0=o,e.next=13,this._serializeAttachment(y);case 13:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 15:e.next=8;break;case 17:e.next=22;break;case 19:e.prev=19,e.t2=e.catch(6),d.e(e.t2);case 22:return e.prev=22,d.f(),e.finish(22);case 25:b=Object(n.a)(t.updateAttachments),e.prev=26,b.s();case 28:if((v=b.n()).done){e.next=37;break}return m=v.value,e.t3=l,e.next=33,this._serializeAttachment(m);case 33:e.t4=e.sent,e.t3.push.call(e.t3,e.t4);case 35:e.next=28;break;case 37:e.next=42;break;case 39:e.prev=39,e.t5=e.catch(26),b.e(e.t5);case 42:return e.prev=42,b.f(),e.finish(42);case 45:return O=o.length||l.length||p.length?{adds:o,updates:l,deletes:p}:null,j={gdbVersion:(null==r?void 0:r.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==r?void 0:r.rollbackOnFailureEnabled,useGlobalIds:null==r?void 0:r.globalIdUsed,returnEditMoment:null==r?void 0:r.returnEditMoment,usePreviousEditMoment:null==r?void 0:r.usePreviousEditMoment,sessionId:null==r?void 0:r.sessionId},null!=r&&r.returnServiceEditsOption?(j.edits=JSON.stringify([{id:this.layer.layerId,adds:a,updates:u,deletes:c,attachments:O}]),j.returnServiceEditsOption=T.toJSON(null==r?void 0:r.returnServiceEditsOption),j.returnServiceEditsInSourceSR=null==r?void 0:r.returnServiceEditsInSourceSR):(j.adds=a.length?JSON.stringify(a):null,j.updates=u.length?JSON.stringify(u):null,j.deletes=c.length?null!=r&&r.globalIdUsed?JSON.stringify(c):c.join(","):null,j.attachments=O&&JSON.stringify(O)),R=this._getLayerRequestOptions({method:"post",query:j}),x=null!=r&&r.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,e.next=51,Object(f.default)(x+"/applyEdits",R);case 51:return F=e.sent,e.abrupt("return",this._createEditsResult(F));case 53:case"end":return e.stop()}}),e,this,[[6,19,22,25],[26,39,42,45]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"deleteAttachments",value:function(){var e=Object(d.a)(i.a.mark((function e(t,r){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return a=t.attributes[this.layer.objectIdField],n=this.layer.parsedUrl.path+"/"+a+"/deleteAttachments",e.prev=3,e.next=6,Object(f.default)(n,this._getLayerRequestOptions({query:{attachmentIds:r.join(",")},method:"post"}));case 6:return e.abrupt("return",e.sent.data.deleteAttachmentResults.map(this._createFeatureEditResult));case 9:throw e.prev=9,e.t0=e.catch(3),this._createAttachmentErrorResult(a,e.t0);case 12:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"fetchRecomputedExtents",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.signal;return this.load({signal:r}).then(Object(d.a)(i.a.mark((function r(){var n,s,u,c,o,l,p,d,h,y,v;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e._getLayerRequestOptions(Object(a.a)(Object(a.a)({},t),{},{query:{returnUpdates:!0}})),s=e.layer,u=s.layerId,c=s.url,r.next=6,Object(f.default)("".concat(c,"/").concat(u),n);case 6:return o=r.sent,l=o.data,p=l.id,d=l.extent,h=l.fullExtent,y=l.timeExtent,v=d||h,r.abrupt("return",{id:p,fullExtent:v&&q.a.fromJSON(v),timeExtent:y&&b.a.fromJSON({start:y[0],end:y[1]})});case 14:case"end":return r.stop()}}),r)}))))}},{key:"queryAttachments",value:function(){var e=Object(d.a)(i.a.mark((function e(t){var r,a,s,u,c,o,l,p,d,h,y=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=y.length>1&&void 0!==y[1]?y[1]:{},a=this.layer.parsedUrl,s=a.path,e.next=4,this.load();case 4:if(u=this._getLayerRequestOptions(r),this.layer.get("capabilities.operations.supportsQueryAttachments")){e.next=10;break}c=t.objectIds,o=[],l=Object(n.a)(c);try{for(l.s();!(p=l.n()).done;)d=p.value,h=s+"/"+d+"/attachments",o.push(Object(f.default)(h,u))}catch(i){l.e(i)}finally{l.f()}return e.abrupt("return",Promise.all(o).then((function(e){return c.map((function(t,r){return{parentObjectId:t,attachmentInfos:e[r].data.attachmentInfos}}))})).then((function(e){return Object(w.b)(e,s)})));case 10:return e.abrupt("return",this.queryTask.executeAttachmentQuery(t,u));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=Object(d.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.execute(t,Object(a.a)(Object(a.a)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryFeaturesJSON",value:function(){var e=Object(d.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeJSON(t,Object(a.a)(Object(a.a)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=Object(d.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForIds(t,Object(a.a)(Object(a.a)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=Object(d.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForCount(t,Object(a.a)(Object(a.a)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=Object(d.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForExtent(t,Object(a.a)(Object(a.a)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryRelatedFeatures",value:function(){var e=Object(d.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeRelationshipQuery(t,Object(a.a)(Object(a.a)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryRelatedFeaturesCount",value:function(){var e=Object(d.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeRelationshipQueryForCount(t,Object(a.a)(Object(a.a)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryTopFeatures",value:function(){var e=Object(d.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeTopFeaturesQuery(t,Object(a.a)(Object(a.a)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryTopObjectIds",value:function(){var e=Object(d.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForTopIds(t,Object(a.a)(Object(a.a)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryTopExtents",value:function(){var e=Object(d.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForTopExtents(t,Object(a.a)(Object(a.a)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"queryTopCount",value:function(){var e=Object(d.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForTopCount(t,Object(a.a)(Object(a.a)({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_createRequestQueryOptions",value:function(e){return Object(a.a)(Object(a.a)({},this.layer.customParameters),{},{token:this.layer.apiKey},null==e?void 0:e.query)}},{key:"_fetchService",value:function(){var e=Object(d.a)(i.a.mark((function e(t){var r,a,n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.layer.sourceJSON){e.next=7;break}return e.next=4,Object(f.default)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:Object(m.a)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:t}));case 4:a=e.sent,n=a.data,r=n;case 7:if(this.sourceJSON=this._patchServiceJSON(r),s=r.type,C.has(s)){e.next=11;break}throw new v.a("feature-layer-source:unsupported-type",'Source type "'.concat(s,'" is not supported'));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_patchServiceJSON",value:function(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){var r=Object(_.d)(e.geometryType).renderer;Object(x.c)("drawingInfo.renderer",r,e)}return"esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e}},{key:"_serializeFeature",value:function(e){var t=e.geometry,r=e.attributes;return Object(R.h)(t)?{attributes:r}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:r}}},{key:"_serializeAttachment",value:function(){var e=Object(d.a)(i.a.mark((function e(t){var r,a,n,s,u,c,o,l,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.feature,a=t.attachment,n=a.globalId,s=a.name,u=a.contentType,c=a.data,o=a.uploadId,l={globalId:n,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null},r&&(l.parentGlobalId="attributes"in r?r.attributes&&r.attributes[this.layer.globalIdField]:r.globalId),!o){e.next=5;break}l.uploadId=o,e.next=10;break;case 5:if(!c){e.next=10;break}return e.next=8,Q(c);case 8:p=e.sent,l.contentType=p.mediaType,l.data=p.data,c instanceof File&&(l.name=c.name);case 10:return e.abrupt("return",(s&&(l.name=s),u&&(l.contentType=u),l));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_getFeatureIds",value:function(e,t){var r=e[0];return r?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}},{key:"_getIdsFromFeatures",value:function(e){var t=this.layer.objectIdField;return e.map((function(e){return e.attributes&&e.attributes[t]}))}},{key:"_canUseGlobalIds",value:function(e,t){return e&&"globalId"in t[0]}},{key:"_getObjectIdsFromFeatureIdentifier",value:function(e){return e.map((function(e){return e.objectId}))}},{key:"_getGlobalIdsFromFeatureIdentifier",value:function(e){return e.map((function(e){return e.globalId}))}},{key:"_createEditsResult",value:function(e){var t,r=this,a=e.data,s=this.layer.layerId,u=[],i=null;if(Array.isArray(a)){var c,o=Object(n.a)(a);try{for(o.s();!(c=o.n()).done;){var l=c.value;u.push({id:l.id,editedFeatures:l.editedFeatures}),l.id===s&&(i={addResults:l.addResults,updateResults:l.updateResults,deleteResults:l.deleteResults,attachments:l.attachments,editMoment:l.editMoment})}}catch(b){o.e(b)}finally{o.f()}}else i=a;var p=null==(t=i)?void 0:t.attachments,d={addFeatureResults:i.addResults?i.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:i.updateResults?i.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:i.deleteResults?i.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:p&&p.addResults?p.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:p&&p.updateResults?p.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:p&&p.deleteResults?p.deleteResults.map(this._createFeatureEditResult,this):[]};if(i.editMoment&&(d.editMoment=i.editMoment),u.length>0){d.editedFeatureResults=[];var h,y=Object(n.a)(u);try{var f=function(){var e=h.value,t=e.editedFeatures,a=t.adds,n=t.updates,s=t.deletes,u=t.spatialReference,i=u?new A.a(u):null;d.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:(null==a?void 0:a.map((function(e){return r._createEditedFeature(e,i)})))||[],updates:(null==n?void 0:n.map((function(e){return{original:r._createEditedFeature(e[0],i),current:r._createEditedFeature(e[1],i)}})))||[],deletes:(null==s?void 0:s.map((function(e){return r._createEditedFeature(e,i)})))||[],spatialReference:i}})};for(y.s();!(h=y.n()).done;)f()}catch(b){y.e(b)}finally{y.f()}}return d}},{key:"_createEditedFeature",value:function(e,t){return new y.a({attributes:e.attributes,geometry:Object(I.a)(Object(a.a)(Object(a.a)({},e.geometry),{},{spatialReference:t}))})}},{key:"_createFeatureEditResult",value:function(e){var t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new v.a("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}},{key:"_createAttachmentErrorResult",value:function(e,t){var r=t.details.messages&&t.details.messages[0]||t.message,a=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new v.a("feature-layer-source:attachment-failure",r,{code:a})}}},{key:"_getFormDataForAttachment",value:function(e,t){var r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(var a in t){var n=t[a];null!=n&&(r.set?r.set(a,n):r.append(a,n))}return r}},{key:"_getLayerRequestOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.layer,r=t.parsedUrl,n=t.gdbVersion,s=t.dynamicDataSource;return Object(a.a)(Object(a.a)({},e),{},{query:Object(a.a)(Object(a.a)({gdbVersion:n,layer:s?JSON.stringify({source:s}):void 0},r.query),{},{f:"json"},this._createRequestQueryOptions(e)),responseType:"json"})}}]),r}(j.a);Object(h.a)([Object(g.b)()],J.prototype,"type",void 0),Object(h.a)([Object(g.b)({constructOnly:!0})],J.prototype,"layer",void 0),Object(h.a)([Object(g.b)({readOnly:!0})],J.prototype,"queryTask",null);var D=J=Object(h.a)([Object(k.a)("esri.layers.graphics.sources.FeatureLayerSource")],J);t.default=D}}]);
//# sourceMappingURL=90.86fb8d8d.chunk.js.map