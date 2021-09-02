(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7964],{37964:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>N});var i=t(14983),s=t(84066),o=(t(77645),t(38215),t(45851),t(74184)),n=t(93100),a=t(26649),l=t(1688),u=t(38703),p=t(59467),c=(t(18507),t(42885)),y=t(42963),d=t(67380),f=t(79159),m=t(61948),B=t(78825),b=t(8669),h=t(84476),C=t(59499),g=t(70049),_=t(60716);function v(e){return b.default.fromJSON(e).features.map((e=>e.geometry))}let R=class extends y.wq{constructor(e){super(e),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(e){return v(e)}readIncidents(e){return v(e)}readPointBarriers(e,r){return v(r.barriers)}readPolylineBarriers(e){return v(e)}readPolygonBarriers(e){return v(e)}readRoutes(e){return function(e){return e.features.map((r=>{const t=m.Z.fromJSON(e.spatialReference),i=c.Z.fromJSON(r);return(0,d.pC)(i.geometry)&&(i.geometry.spatialReference=t),i}))}(e)}};(0,i._)([(0,s.Cb)({type:[B.Z]})],R.prototype,"directions",void 0),(0,i._)([(0,s.Cb)({type:[C.Z]})],R.prototype,"facilities",void 0),(0,i._)([(0,f.r)("facilities")],R.prototype,"readFacilities",null),(0,i._)([(0,s.Cb)({type:[C.Z]})],R.prototype,"incidents",void 0),(0,i._)([(0,f.r)("incidents")],R.prototype,"readIncidents",null),(0,i._)([(0,s.Cb)({type:[h.Z]})],R.prototype,"messages",void 0),(0,i._)([(0,s.Cb)({type:[C.Z]})],R.prototype,"pointBarriers",void 0),(0,i._)([(0,f.r)("pointBarriers",["barriers"])],R.prototype,"readPointBarriers",null),(0,i._)([(0,s.Cb)({type:[g.Z]})],R.prototype,"polylineBarriers",void 0),(0,i._)([(0,f.r)("polylineBarriers")],R.prototype,"readPolylineBarriers",null),(0,i._)([(0,s.Cb)({type:[_.Z]})],R.prototype,"polygonBarriers",void 0),(0,i._)([(0,f.r)("polygonBarriers")],R.prototype,"readPolygonBarriers",null),(0,i._)([(0,s.Cb)({type:[c.Z]})],R.prototype,"routes",void 0),(0,i._)([(0,f.r)("routes")],R.prototype,"readRoutes",null),R=(0,i._)([(0,o.j)("esri.rest.support.ClosestFacilitySolveResult")],R);const Z=R,k=(0,a.E)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});var P=t(62636);let A=class extends P.Z{constructor(e){super(e),this.url=null}solve(e,r){return async function(e,r,t){const i=[],s=[],o={},a={},c=(0,p.en)(e);return r.incidents&&r.incidents.features&&(0,u.et)(r.incidents.features,s,"incidents.features",o),r.facilities&&r.facilities.features&&(0,u.et)(r.facilities.features,s,"facilities.features",o),r.pointBarriers&&r.pointBarriers.features&&(0,u.et)(r.pointBarriers.features,s,"pointBarriers.features",o),r.polylineBarriers&&r.polylineBarriers.features&&(0,u.et)(r.polylineBarriers.features,s,"polylineBarriers.features",o),r.polygonBarriers&&r.polygonBarriers.features&&(0,u.et)(r.polygonBarriers.features,s,"polygonBarriers.features",o),(0,l.aX)(s).then((e=>{for(const r in o){const t=o[r];i.push(r),a[r]=e.slice(t[0],t[1])}return(0,u.Wf)(a,i)?(0,u.bI)(c.path):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||(0,u.ef)(a,i);for(const e in a)a[e].forEach(((t,i)=>{r.get(e)[i].geometry=t}));let s={query:{...c.query,f:"json",...k.toQueryParams(r)}};return t&&(s={...t,...s}),(0,n.default)(`${c.path}/solveClosestFacility`,s)})).then((e=>Z.fromJSON(e.data)))}(this.url,e,r)}};(0,i._)([(0,s.Cb)()],A.prototype,"url",void 0),A=(0,i._)([(0,o.j)("esri.tasks.ClosestFacilityTask")],A);const N=A}}]);