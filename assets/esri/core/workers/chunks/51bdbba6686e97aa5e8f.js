(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9192],{60359:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var s,i=r(14983),l=r(42963),n=r(67380),a=r(53342),o=r(84066),u=(r(77645),r(38215),r(45851),r(79159)),d=r(74184),p=r(87060);let m=s=class extends l.wq{constructor(e){super(e),this.end=null,this.start=null}static get allTime(){return c}static get empty(){return h}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(s.allTime)}get isEmpty(){return this.equals(s.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new s({end:this.end,start:this.start})}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone();const t=(0,n.Po)(this.start,(t=>(0,a.JE)(t,e))),r=(0,n.Po)(this.end,(t=>(0,a.Nm)((0,a.JE)(t,e),1,e)));return new s({start:t,end:r})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return s.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=(0,n.R2)(this.start,-1/0,(e=>e.getTime())),r=(0,n.R2)(this.end,1/0,(e=>e.getTime())),i=(0,n.R2)(e.start,-1/0,(e=>e.getTime())),l=(0,n.R2)(e.end,1/0,(e=>e.getTime()));let a,o;if(i>=t&&i<=r?a=i:t>=i&&t<=l&&(a=t),r>=i&&r<=l?o=r:l>=t&&l<=r&&(o=l),!isNaN(a)&&!isNaN(o)){const e=new s;return e.start=a===-1/0?null:new Date(a),e.end=o===1/0?null:new Date(o),e}return s.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone();const r=new s,{start:i,end:l}=this;return(0,n.pC)(i)&&(r.start=(0,a.Nm)(i,e,t)),(0,n.pC)(l)&&(r.end=(0,a.Nm)(l,e,t)),r}equals(e){if(!e)return!1;const t=(0,n.pC)(this.start)?this.start.getTime():this.start,r=(0,n.pC)(this.end)?this.end.getTime():this.end,s=(0,n.pC)(e.start)?e.start.getTime():e.start,i=(0,n.pC)(e.end)?e.end.getTime():e.end;return t===s&&r===i}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return c.clone();const t=(0,n.pC)(this.start)&&(0,n.pC)(e.start)?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=(0,n.pC)(this.end)&&(0,n.pC)(e.end)?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new s({start:t,end:r})}};(0,i._)([(0,o.Cb)({type:Date,json:{write:{allowNull:!0}}})],m.prototype,"end",void 0),(0,i._)([(0,u.r)("end")],m.prototype,"readEnd",null),(0,i._)([(0,p.c)("end")],m.prototype,"writeEnd",null),(0,i._)([(0,o.Cb)({readOnly:!0,json:{read:!1}})],m.prototype,"isAllTime",null),(0,i._)([(0,o.Cb)({readOnly:!0,json:{read:!1}})],m.prototype,"isEmpty",null),(0,i._)([(0,o.Cb)({type:Date,json:{write:{allowNull:!0}}})],m.prototype,"start",void 0),(0,i._)([(0,u.r)("start")],m.prototype,"readStart",null),(0,i._)([(0,p.c)("start")],m.prototype,"writeStart",null),m=s=(0,i._)([(0,d.j)("esri.TimeExtent")],m);const c=new m,h=new m({start:void 0,end:void 0}),y=m},53342:(e,t,r)=>{"use strict";r.d(t,{rJ:()=>a,Nm:()=>l,JE:()=>n}),r(77645);const s={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},i={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};function l(e,t,r){const s=new Date(e.getTime());if(t&&r){const e=i[r],{getter:l,setter:n,multiplier:a}=e;s[n](s[l]()+t*a)}return s}function n(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return new Date}}function a(e,t,r){return 0===e?0:e*s[t]/s[r]}},34892:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>R});var s=r(14983),i=r(13664),l=r(93100),n=(r(17098),r(67380)),a=r(38010),o=r(8764),u=r(99204),d=r(84066),p=(r(77645),r(38215),r(45851),r(79159)),m=r(74184),c=r(13878),h=r(46947),y=r(13917),g=r(12661),f=r(88465),w=r(3956),v=r(75565),C=r(96842),S=r(67475),b=r(76811),_=r(57631),E=r(66104);const D=["atom","xml"],T={base:C.Z,key:"type",typeMap:{"simple-line":S.Z},errorContext:"symbol"},I={base:C.Z,key:"type",typeMap:{"picture-marker":b.Z,"simple-marker":_.Z},errorContext:"symbol"},F={base:C.Z,key:"type",typeMap:{"simple-fill":E.Z},errorContext:"symbol"};let M=class extends((0,h.h)((0,f.Q)((0,y.q)((0,g.I)((0,w.M)((0,a.R)(c.Z))))))){constructor(...e){super(...e),this.description=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.outSpatialReference=null,this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,u.vt)(this.url,D)||"GeoRSS":e||""}set title(e){this._set("title",e)}readFeatureCollections(e,t){return t.featureCollection.layers.forEach((e=>{const t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline&&-1!==t.outline.style.indexOf("esriSFS")&&(t.outline.style="esriSLSSolid")})),t.featureCollection.layers}load(e){const t=(0,n.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(o.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}async _fetchService(e){const{data:t}=await(0,l.default)(i.Z.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e});this.read(t,{origin:"service"})}};(0,s._)([(0,d.Cb)()],M.prototype,"description",void 0),(0,s._)([(0,d.Cb)({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],M.prototype,"title",null),(0,s._)([(0,d.Cb)()],M.prototype,"featureCollections",void 0),(0,s._)([(0,p.r)("service","featureCollections",["featureCollection.layers"])],M.prototype,"readFeatureCollections",null),(0,s._)([(0,d.Cb)(v.id)],M.prototype,"id",void 0),(0,s._)([(0,d.Cb)(v.rn)],M.prototype,"legendEnabled",void 0),(0,s._)([(0,d.Cb)({types:T,json:{write:!0}})],M.prototype,"lineSymbol",void 0),(0,s._)([(0,d.Cb)({type:["show","hide"]})],M.prototype,"listMode",void 0),(0,s._)([(0,d.Cb)({types:I,json:{write:!0}})],M.prototype,"pointSymbol",void 0),(0,s._)([(0,d.Cb)({types:F,json:{write:!0}})],M.prototype,"polygonSymbol",void 0),(0,s._)([(0,d.Cb)({type:["GeoRSS"]})],M.prototype,"operationalLayerType",void 0),(0,s._)([(0,d.Cb)()],M.prototype,"outSpatialReference",void 0),(0,s._)([(0,d.Cb)(v.HQ)],M.prototype,"url",void 0),(0,s._)([(0,d.Cb)({readOnly:!0,json:{read:!1},value:"geo-rss"})],M.prototype,"type",void 0),M=(0,s._)([(0,m.j)("esri.layers.GeoRSSLayer")],M);const R=M},12661:(e,t,r)=>{"use strict";r.d(t,{I:()=>C});var s=r(14983),i=r(27512),l=r(93100),n=r(38986),a=r(8811),o=r(45851),u=r(67380),d=r(8764),p=r(99204),m=r(84066),c=(r(77645),r(38215),r(79159)),h=r(74184),y=r(87060),g=r(23090),f=r(30602),w=r(90113);const v=o.Z.getLogger("esri.layers.mixins.PortalLayer"),C=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){var e;null==(e=this.portalItem)||e.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new f.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const s=await r.e(3904).then(r.bind(r,33904));return(0,d.k_)(t),await s.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw(0,d.D_)(e)||v.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this.fetchUserHasEditingPrivileges(e).catch((e=>((0,d.r9)(e),!0))))}async fetchUserHasEditingPrivileges(e){const t=this.url?null==i.id?void 0:i.id.findCredential(this.url):null;if(!t)return!0;const r=S.credential===t?S.user:await this.fetchEditingUser(e);return S.credential=t,S.user=r,(0,u.Wi)(r)||null==r.privileges||r.privileges.includes("features:user:edit")}async fetchEditingUser(e){var t,r;const s=null==(t=this.portalItem)||null==(r=t.portal)?void 0:r.user;if(s)return s;const a=i.id.findServerInfo(this.url);if(null==a||!a.owningSystemUrl)return null;const o=`${a.owningSystemUrl}/sharing/rest`,d=g.Z.getDefault();if(d&&d.loaded&&(0,p.Fv)(d.restUrl)===(0,p.Fv)(o))return d.user;const m=`${o}/community/self`,c=(0,u.pC)(e)?e.signal:null,h=await(0,n.q6)((0,l.default)(m,{authMode:"no-prompt",query:{f:"json"},signal:c}));return h.ok?w.default.fromJSON(h.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,s=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||g.Z.getDefault());return r&&s&&!(0,p.tm)(s.restUrl,r.restUrl)?(t.messages&&t.messages.push(new a.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,s._)([(0,m.Cb)({type:f.default})],t.prototype,"portalItem",null),(0,s._)([(0,c.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,s._)([(0,y.c)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,s._)([(0,m.Cb)()],t.prototype,"resourceReferences",void 0),(0,s._)([(0,m.Cb)({readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),t=(0,s._)([(0,h.j)("esri.layers.mixins.PortalLayer")],t),t},S={credential:null,user:null}},13567:(e,t,r)=>{"use strict";r.d(t,{a:()=>l});var s=r(30817),i=r(13834);const l={inches:(0,s.En)(1,"meters","inches"),feet:(0,s.En)(1,"meters","feet"),"us-feet":(0,s.En)(1,"meters","us-feet"),yards:(0,s.En)(1,"meters","yards"),miles:(0,s.En)(1,"meters","miles"),"nautical-miles":(0,s.En)(1,"meters","nautical-miles"),millimeters:(0,s.En)(1,"meters","millimeters"),centimeters:(0,s.En)(1,"meters","centimeters"),decimeters:(0,s.En)(1,"meters","decimeters"),meters:(0,s.En)(1,"meters","meters"),kilometers:(0,s.En)(1,"meters","kilometers"),"decimal-degrees":1/(0,s.ty)(1,"meters",i.sv.radius)}}}]);