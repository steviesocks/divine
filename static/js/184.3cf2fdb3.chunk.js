(this.webpackJsonpdivine=this.webpackJsonpdivine||[]).push([[184],{946:function(e,t,i){"use strict";i.r(t);var r=i(11),a=i(2),n=i(3),s=i(41),l=i(36),u=i(4),c=i(5),o=i(0),y=i(8),b=i(29),h=(i(1),i(10),i(13),i(9),i(7)),p=i(799),d=i(723);var f=function(e){Object(u.a)(i,e);var t=Object(c.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return Object(n.a)(i,[{key:"initialize",value:function(){var e=this;this.handles.add([Object(b.a)(this.view,"viewpoint",(function(){return e._update()}))])}},{key:"_injectOverrides",value:function(e){var t=Object(s.a)(Object(l.a)(i.prototype),"_injectOverrides",this).call(this,e),r=this.view.scale,a=this.layer.sublayers.filter((function(e){return function(e,t){return!e.visible||0!==e.minScale&&t>e.minScale||0!==e.maxScale&&t<e.maxScale}(e,r)})).map((function(e){return e.subtypeCode}));if(!a.length)return t;var n="NOT ".concat(this.layer.subtypeField," IN (").concat(a.join(","),")");if(Object(y.h)(t))return new d.a({where:n});var u=t.clone();return u.where+=" AND ".concat(n),u}},{key:"_setLayersForFeature",value:function(e){var t=this.layer.fieldsIndex.get(this.layer.subtypeField),i=e.attributes[t.name],r=this.layer.sublayers.find((function(e){return e.subtypeCode===i}));e.layer=r,e.sourceLayer=this.layer}},{key:"_createSchemaConfig",value:function(){var e=this,t={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((function(t){return{featureReduction:null,geometryType:e.layer.geometryType,labelingInfo:t.labelingInfo,labelsVisible:t.labelsVisible,renderer:t.renderer,subtypeCode:t.subtypeCode}}))},a=this.layer.sublayers.map((function(e){return e.subtypeCode})).join(","),n=this.layer.sublayers.length?"".concat(this.layer.subtypeField," IN (").concat(a,")"):"1=2",u=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return u+=n,Object(r.a)(Object(r.a)(Object(r.a)({},Object(s.a)(Object(l.a)(i.prototype),"_createSchemaConfig",this).call(this)),t),{},{definitionExpression:u})}}]),i}(p.default),v=f=Object(o.a)([Object(h.a)("esri.views.2d.layers.SubtypeGroupLayerView2D")],f);t.default=v}}]);
//# sourceMappingURL=184.3cf2fdb3.chunk.js.map