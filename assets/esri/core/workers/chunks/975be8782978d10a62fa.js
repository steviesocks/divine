(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6566],{4609:(t,e,i)=>{"use strict";i.d(e,{QB:()=>o});var s=i(69288),n=i(67380),r=i(37384),a=i(56647);class o{constructor(t=9,e){this.compareMinX=u,this.compareMinY=c,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this.toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),B.prune(),I.prune(),b.prune(),w.prune()}all(t){this._all(this.data,t)}search(t,e){let i=this.data;const s=this.toBBox;if(p(t,i))for(B.clear();i;){for(let n=0,r=i.children.length;n<r;n++){const r=i.children[n],a=i.leaf?s(r):r;p(t,a)&&(i.leaf?e(r):y(t,a)?this._all(r,e):B.push(r))}i=B.pop()}}collides(t){let e=this.data;const i=this.toBBox;if(!p(t,e))return!1;for(B.clear();e;){for(let s=0,n=e.children.length;s<n;s++){const n=e.children[s],r=e.leaf?i(n):n;if(p(t,r)){if(e.leaf||y(t,r))return!0;B.push(n)}}e=B.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,i=t.length;e<i;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){const t=this.data;this.data=e,e=t}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new v([]),this}remove(t){if(!t)return this;let e,i=this.data,r=null,a=0,o=!1;const h=this.toBBox(t);for(b.clear(),w.clear();i||b.length>0;){var d;if(i||(i=(0,n.j0)(b.pop()),r=b.data[b.length-1],a=null!=(d=w.pop())?d:0,o=!0),i.leaf&&(e=(0,s.cq)(i.children,t,i.children.length,i.indexHint),-1!==e))return i.children.splice(e,1),b.push(i),this._condense(b),this;o||i.leaf||!y(i,h)?r?(a++,i=r.children[a],o=!1):i=null:(b.push(i),w.push(a),a=0,r=i,i=i.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){let i=t;for(I.clear();i;){var s;if(!0===i.leaf)for(const t of i.children)e(t);else I.pushArray(i.children);i=null!=(s=I.pop())?s:null}}_build(t,e,i,s){const n=i-e+1;let r=this._maxEntries;if(n<=r){const s=new v(t.slice(e,i+1));return h(s,this.toBBox),s}s||(s=Math.ceil(Math.log(n)/Math.log(r)),r=Math.ceil(n/r**(s-1)));const a=new Y([]);a.height=s;const o=Math.ceil(n/r),d=o*Math.ceil(Math.sqrt(r));x(t,e,i,d,this.compareMinX);for(let n=e;n<=i;n+=d){const e=Math.min(n+d-1,i);x(t,n,e,o,this.compareMinY);for(let i=n;i<=e;i+=o){const n=Math.min(i+o-1,e);a.children.push(this._build(t,i,n,s-1))}}return h(a,this.toBBox),a}_chooseSubtree(t,e,i,s){for(;s.push(e),!0!==e.leaf&&s.length-1!==i;){let i,s=1/0,n=1/0;for(let r=0,a=e.children.length;r<a;r++){const a=e.children[r],o=m(a),h=f(t,a)-o;h<n?(n=h,s=o<s?o:s,i=a):h===n&&o<s&&(s=o,i=a)}e=i||e.children[0]}return e}_insert(t,e,i){const s=this.toBBox,n=i?t:s(t);b.clear();const r=this._chooseSubtree(n,this.data,e,b);for(r.children.push(t),l(r,n);e>=0&&b.data[e].children.length>this._maxEntries;)this._split(b,e),e--;this._adjustParentBBoxes(n,b,e)}_split(t,e){const i=t.data[e],s=i.children.length,n=this._minEntries;this._chooseSplitAxis(i,n,s);const r=this._chooseSplitIndex(i,n,s);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const a=i.children.splice(r,i.children.length-r),o=i.leaf?new v(a):new Y(a);o.height=i.height,h(i,this.toBBox),h(o,this.toBBox),e?t.data[e-1].children.push(o):this._splitRoot(i,o)}_splitRoot(t,e){this.data=new Y([t,e]),this.data.height=t.height+1,h(this.data,this.toBBox)}_chooseSplitIndex(t,e,i){let s,n,r;s=n=1/0;for(let a=e;a<=i-e;a++){const e=d(t,0,a,this.toBBox),o=d(t,a,i,this.toBBox),h=g(e,o),l=m(e)+m(o);h<s?(s=h,r=a,n=l<n?l:n):h===s&&l<n&&(n=l,r=a)}return r}_chooseSplitAxis(t,e,i){const s=t.leaf?this.compareMinX:u,n=t.leaf?this.compareMinY:c;this._allDistMargin(t,e,i,s)<this._allDistMargin(t,e,i,n)&&t.children.sort(s)}_allDistMargin(t,e,i,s){t.children.sort(s);const n=this.toBBox,r=d(t,0,e,n),a=d(t,i-e,i,n);let o=_(r)+_(a);for(let s=e;s<i-e;s++){const e=t.children[s];l(r,t.leaf?n(e):e),o+=_(r)}for(let s=i-e-1;s>=e;s--){const e=t.children[s];l(a,t.leaf?n(e):e),o+=_(a)}return o}_adjustParentBBoxes(t,e,i){for(let s=i;s>=0;s--)l(e.data[s],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const i=t.data[e];if(0===i.children.length)if(e>0){const n=t.data[e-1],r=n.children;r.splice((0,s.cq)(r,i,r.length,n.indexHint),1)}else this.clear();else h(i,this.toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function h(t,e){d(t,0,t.children.length,e,t)}function d(t,e,i,s,n){n||(n=new v([])),n.minX=1/0,n.minY=1/0,n.maxX=-1/0,n.maxY=-1/0;for(let r,a=e;a<i;a++)r=t.children[a],l(n,t.leaf?s(r):r);return n}function l(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function u(t,e){return t.minX-e.minX}function c(t,e){return t.minY-e.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function _(t){return t.maxX-t.minX+(t.maxY-t.minY)}function f(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function g(t,e){const i=Math.max(t.minX,e.minX),s=Math.max(t.minY,e.minY),n=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,n-i)*Math.max(0,r-s)}function y(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function p(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function x(t,e,i,s,r){const o=[e,i];for(;o.length;){const e=(0,n.j0)(o.pop()),i=(0,n.j0)(o.pop());if(e-i<=s)continue;const h=i+Math.ceil((e-i)/s/2)*s;(0,a.q)(t,h,i,e,r),o.push(i,h,h,e)}}const B=new r.Z,I=new r.Z,b=new r.Z,w=new r.Z({deallocator:void 0});class M extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new s.SO}}class v extends M{constructor(t){super(),this.children=t,this.leaf=!0}}class Y extends M{constructor(t){super(),this.children=t,this.leaf=!1}}},90790:(t,e,i)=>{"use strict";i.d(e,{H:()=>a});var s=i(77645),n=i(4609);const r={minX:0,minY:0,maxX:0,maxY:0};class a{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new n.QB(9,(0,s.Z)("csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let e=0;this._idByBounds.forEach(((i,s)=>{t[e++]=s})),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((t=>this._idByBounds.has(t)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(t){const e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))}forEachInBounds(t,e){this._loadIndex(),function(t,e,i){r.minX=e[0],r.minY=e[1],r.maxX=e[2],r.maxY=e[3],t.search(r,i)}(this._index,t,(t=>e(this._idByBounds.get(t))))}get(t){return this._boundsById.get(t)}has(t){return this._boundsById.has(t)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(t,e){if(!this._indexInvalid){const e=this._boundsById.get(t);e&&(this._index.remove(e),this._idByBounds.delete(e))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},2319:(t,e,i)=>{"use strict";i.d(e,{Z:()=>f});var s=i(8811),n=i(2772),r=i(45851),a=i(67380),o=i(20973),h=i(79326),d=i(54997),l=i(90790),u=i(53508),c=i(96535),m=i(47369);const _={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new c.Z(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(t.centroid||(t.centroid=(0,u.Y)(new m.Z,t.geometry,e.hasZ,e.hasM)),t.centroid)},f=class{constructor(t){this.geometryInfo=t,this._boundsStore=new l.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new n.Z,this.featureAdapter=_}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const t=(0,h.Ue)(h.Gv);return this._featuresById.forEach((e=>{const i=this._boundsStore.get(e.objectId);i&&(t[0]=Math.min(i[0],t[0]),t[1]=Math.min(i[1],t[1]),t[2]=Math.max(i[2],t[2]),t[3]=Math.max(i[3],t[3]))})),t}get storeStatistics(){let t=0;return this._featuresById.forEach((e=>{e.geometry&&e.geometry.coords&&(t+=e.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const e of t)this._add(e);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const e of t){const t=this._featuresById.get(e);t&&this._remove(t)}this._emitChanged()}forEachBounds(t,e,i){for(const s of t){const t=this._boundsStore.get(s.objectId);t&&e((0,o.JR)(i,t))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}forEach(t){this._featuresById.forEach((e=>t(e)))}forEachInBounds(t,e){this._boundsStore.forEachInBounds(t,(t=>{e(this._featuresById.get(t))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let t=!1;this._featuresById.forEach(((e,i)=>{this._markedIds.has(i)||(t=!0,this._remove(e))})),this._markedIds.clear(),t&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const e=t.objectId;if(null==e)return void r.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.Z("featurestore:invalid-feature","feature id is missing",{feature:t}));const i=this._featuresById.get(e);let n;if(this._markedIds.add(e),i?(t.displayId=i.displayId,n=this._boundsStore.get(e),this._boundsStore.delete(e)):(0,a.pC)(this.onFeatureAdd)&&this.onFeatureAdd(t),!t.geometry||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(e,null),void this._featuresById.set(e,t);n=(0,d.$)(n||(0,h.Ue)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(e,n),this._featuresById.set(e,t)}_remove(t){return(0,a.pC)(this.onFeatureRemove)&&this.onFeatureRemove(t),this._markedIds.delete(t.objectId),this._boundsStore.delete(t.objectId),this._featuresById.delete(t.objectId),t}}},86566:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>g});var s=i(8811),n=i(45851),r=i(67380),a=i(8764),o=i(31174),h=i(54997),d=i(2319),l=i(13151),u=i(60073),c=i(80361),m=i(64171),_=i(70292),f=i(45787);const g=class{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async t=>{const{objectIdField:e}=this._queryEngine,i=await(0,_.Bm)(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((t=>t.name)),signal:t});await(0,c.O3)(i),(0,a.k_)(t);const s=(0,c.lG)(i,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:e});if(!(0,o.fS)(this._queryEngine.spatialReference,o.Zn))for(const t of s)t.geometry&&(t.geometry=(0,h.GH)((0,l.iV)((0,h.di)(t.geometry,this._queryEngine.geometryType,!1,!1),o.Zn,this._queryEngine.spatialReference)));let n=1;for(const t of s){const i={};(0,m.O0)(this._fieldsIndex,i,t.attributes,null,!0),t.attributes=i,null==t.attributes[e]&&(t.objectId=t.attributes[e]=n++)}return s}}destroy(){var t;null==(t=this._queryEngine)||t.destroy(),this._queryEngine=null}async load(t,e){const{getFeatureUrl:i,getFeatureOutputFormat:s,spatialReference:n,fields:o,geometryType:h,featureType:l,objectIdField:c,customParameters:m}=t;this._featureType=l,this._customParameters=m,this._getFeatureUrl=i,this._getFeatureOutputFormat=s,this._fieldsIndex=new f.Z(o),await this._checkProjection(n),(0,a.k_)(e),this._queryEngine=new u.Z({fields:o,geometryType:h,hasM:!1,hasZ:!1,objectIdField:c,spatialReference:n,timeInfo:null,featureStore:new d.Z({geometryType:h,hasM:!1,hasZ:!1})});const _=await this._snapshotFeatures((0,r.Wg)(e.signal));return this._queryEngine.featureStore.addMany(_),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new s.Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}setCustomParameters(t){this._customParameters=t}async refresh(){var t;return null==(t=this._snapshotTask)||t.abort(),this._snapshotTask=(0,a.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((t=>{this._queryEngine.featureStore.clear(),t&&this._queryEngine.featureStore.addMany(t)}),(t=>{this._queryEngine.featureStore.clear(),(0,a.D_)(t)||n.Z.getLogger("esri.layers.WFSLayer").error(new s.Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:t}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await(0,l._W)(o.Zn,t)}catch{throw new s.Z("unsupported-projection","Projection not supported",{spatialReference:t})}}}},64171:(t,e,i)=>{"use strict";i.d(e,{av:()=>o,d1:()=>d,b:()=>f,O0:()=>u,og:()=>_});var s=i(31174),n=i(63454);class r{constructor(){this.code=null,this.description=null}}class a{constructor(t){this.error=new r,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function o(t){return new a(t)}class h{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function d(t){return new h(t)}const l=new Set;function u(t,e,i,s,r=!1,a){l.clear();for(const s in i){const h=t.get(s);if(!h)continue;const d=i[s],u=c(h,d);if(u!==d&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:h,originalValue:d,sanitizedValue:u}}),l.add(h.name),h&&(r||h.editable)){const t=(0,n.Qc)(h,u);if(t)return o((0,n.vP)(t,h,u));e[h.name]=u}}if(s)for(const t of s)if(!l.has(t.name))return o(`missing required field "${t.name}"`);return null}function c(t,e){let i=e;return"string"==typeof e&&(0,n.H7)(t)?i=parseFloat(e):null!=e&&(0,n.qN)(t)&&"string"!=typeof e&&(i=String(e)),(0,n.Pz)(i)}let m;function _(t,e){if(!t||!(0,s.JY)(e))return t;if("rings"in t||"paths"in t){if(!m)throw new TypeError("geometry engine not loaded");return m.simplify(e,t)}return t}async function f(t,e){!(0,s.JY)(t)||"esriGeometryPolygon"!==e&&"esriGeometryPolyline"!==e||await async function(){return m||(m=await Promise.all([i.e(4248),i.e(371)]).then(i.bind(i,50371)),m)}()}}}]);