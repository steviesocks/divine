(this.webpackJsonpdivine=this.webpackJsonpdivine||[]).push([[30],{558:function(e,t,i){"use strict";var n=i(2),r=i(3),a=i(4),s=i(5),c=i(0),o=i(30),u=i(98),l=i(123),h=i(228),d=i(9),b=i(136),p=i(1),y=(i(10),i(13),i(7)),f=function(e){Object(a.a)(i,e);var t=Object(s.a)(i);function i(e){var r;return Object(n.a)(this,i),(r=t.call(this,e)).layer=null,r.parent=null,r}return Object(r.a)(i,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",n=e.layer&&e.layer.title||"no title";throw d.a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(n,"', id: '").concat(i,"')"),t),t}}))}},{key:"fullOpacity",get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){return!this.suspended&&!0===this.layer.legendEnabled}},{key:"updating",get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),i}(Object(l.b)(Object(h.a)(Object(b.b)(u.a.EventedMixin(o.a)))));Object(c.a)([Object(p.b)()],f.prototype,"fullOpacity",null),Object(c.a)([Object(p.b)()],f.prototype,"layer",void 0),Object(c.a)([Object(p.b)()],f.prototype,"parent",void 0),Object(c.a)([Object(p.b)({readOnly:!0})],f.prototype,"suspended",null),Object(c.a)([Object(p.b)({readOnly:!0})],f.prototype,"suspendInfo",null),Object(c.a)([Object(p.b)({readOnly:!0})],f.prototype,"legendEnabled",null),Object(c.a)([Object(p.b)({type:Boolean,readOnly:!0})],f.prototype,"updating",null),Object(c.a)([Object(p.b)({readOnly:!0})],f.prototype,"updatingProgress",null),Object(c.a)([Object(p.b)()],f.prototype,"visible",null);var v=f=Object(c.a)([Object(y.a)("esri.views.layers.LayerView")],f);t.a=v},559:function(e,t,i){"use strict";i.d(t,"a",(function(){return q}));var n,r=i(2),a=i(3),s=i(41),c=i(36),o=i(4),u=i(5),l=i(0),h=i(33),d=i(117),b=i(29),p=i(1),y=(i(10),i(13),i(9),i(7)),f=i(599),v=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return i}(i(19).a),O=v=Object(l.a)([Object(y.a)("esri.views.layers.support.ClipArea")],v),j=n=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.apply(this,arguments)).type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}return Object(a.a)(i,[{key:"clone",value:function(){return new n({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}},{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(O);Object(l.a)([Object(p.b)({type:[Number,String],json:{write:!0}})],j.prototype,"left",void 0),Object(l.a)([Object(p.b)({type:[Number,String],json:{write:!0}})],j.prototype,"right",void 0),Object(l.a)([Object(p.b)({type:[Number,String],json:{write:!0}})],j.prototype,"top",void 0),Object(l.a)([Object(p.b)({type:[Number,String],json:{write:!0}})],j.prototype,"bottom",void 0),Object(l.a)([Object(p.b)({readOnly:!0})],j.prototype,"version",null);var g,k=j=n=Object(l.a)([Object(y.a)("esri.views.layers.support.ClipRect")],j),m=(i(72),i(93)),w=i(60),R=i(51),x=i(104),_={base:m.a,key:"type",typeMap:{extent:R.a,polygon:x.a}},I=g=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.apply(this,arguments)).type="geometry",e.geometry=null,e}return Object(a.a)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}},{key:"clone",value:function(){return new g({geometry:this.geometry.clone()})}}]),i}(O);Object(l.a)([Object(p.b)({types:_,json:{read:w.a,write:!0}})],I.prototype,"geometry",void 0),Object(l.a)([Object(p.b)({readOnly:!0})],I.prototype,"version",null);var P=I=g=Object(l.a)([Object(y.a)("esri.views.layers.support.Geometry")],I),T=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.apply(this,arguments)).type="path",e.path=[],e}return Object(a.a)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(O);Object(l.a)([Object(p.b)({type:[[[Number]]],json:{write:!0}})],T.prototype,"path",void 0),Object(l.a)([Object(p.b)({readOnly:!0})],T.prototype,"version",null);var B=T=Object(l.a)([Object(y.a)("esri.views.layers.support.Path")],T),S=h.a.ofType({key:"type",base:O,typeMap:{rect:k,path:B,geometry:P}}),q=function(e){var t=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.apply(this,arguments)).clips=new S,e.moving=!1,e.attached=!1,e.lastUpdateId=-1,e.updateRequested=!1,e}return Object(a.a)(i,[{key:"initialize",value:function(){var e,t=this;this.container||(this.container=new f.a),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(b.a)(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),Object(b.a)(this,["layer.opacity","container"],(function(){var e,i;t.container&&(t.container.opacity=null!=(e=null==(i=t.layer)?void 0:i.opacity)?e:1)}),!0),Object(b.a)(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),Object(b.a)(this,["layer.effect"],(function(e){t.container&&(t.container.effect=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))}},{key:"destroy",value:function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}},{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}},{key:"isVisibleAtScale",value:function(e){var t=!0,i=this.layer,n=i.minScale,r=i.maxScale;if(null!=n&&null!=r){var a=!n,s=!r;!a&&e<=n&&(a=!0),!s&&e>=r&&(s=!0),t=a&&s}return t}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"isUpdating",value:function(){return!1}},{key:"isRendering",value:function(){return!1}},{key:"canResume",value:function(){return!!Object(s.a)(Object(c.a)(i.prototype),"canResume",this).call(this)&&this.isVisibleAtScale(this.view.scale)}}]),i}(e);return Object(l.a)([Object(p.b)({type:S,set:function(e){var t=Object(d.b)(e,this._get("clips"),S);this._set("clips",t)}})],t.prototype,"clips",void 0),Object(l.a)([Object(p.b)()],t.prototype,"moving",void 0),Object(l.a)([Object(p.b)()],t.prototype,"attached",void 0),Object(l.a)([Object(p.b)()],t.prototype,"container",void 0),Object(l.a)([Object(p.b)()],t.prototype,"suspended",void 0),Object(l.a)([Object(p.b)({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(l.a)([Object(p.b)()],t.prototype,"updateRequested",void 0),Object(l.a)([Object(p.b)()],t.prototype,"updating",null),Object(l.a)([Object(p.b)()],t.prototype,"view",void 0),t=Object(l.a)([Object(y.a)("esri.views.2d.layers.LayerView2D")],t)}},562:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var n=i(26),r=i(2),a=i(3),s=i(4),c=i(5),o=(i(10),i(208)),u=i(281),l=i(575),h=i(207),d=function(e){Object(s.a)(i,e);var t=Object(c.a)(i);function i(e,n,a){var s,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a;return Object(r.a)(this,i),(s=t.call(this)).triangleCountReportedInDebug=0,s.transforms={dvs:Object(u.b)(),tileMat3:Object(u.b)()},s.triangleCount=0,s.key=new h.a(e),s.bounds=n,s.size=a,s.coordRange=c,s}return Object(a.a)(i,[{key:"destroy",value:function(){this.texture&&(this.texture.dispose(),this.texture=null)}},{key:"coords",get:function(){return this._coords}},{key:"bounds",get:function(){return this._bounds},set:function(e){this._coords=[e[0],e[3]],this._bounds=e}},{key:"setTransform",value:function(e,t){var i=t/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,a=e.toScreenNoRotation([0,0],this.coords),s=Object(n.a)(a,2),c=s[0],u=s[1],l=this.size[0]/this.coordRange[0]*i,h=this.size[1]/this.coordRange[1]*i;Object(o.k)(r,l,0,0,0,h,0,c,u,1),Object(o.h)(this.transforms.dvs,e.displayViewMat3,r)}}]),i}(l.a)},571:function(e,t,i){"use strict";var n=i(15),r=i(11),a=i(2),s=i(3),c=i(41),o=i(36),u=i(4),l=i(5),h=i(10),d=i(519),b=i(596),p=i(617),y=i(613),f=function(e,t){return e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col},v=function(e){Object(u.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(a.a)(this,i),(n=t.call(this))._tileInfoView=e,n}return Object(s.a)(i,[{key:"requiresDedicatedFBO",get:function(){return!1}},{key:"renderChildren",value:function(e){this.sortChildren(f),this.setStencilReference(),Object(c.a)(Object(o.a)(i.prototype),"renderChildren",this).call(this,e)}},{key:"createRenderParams",value:function(e){var t=e.state;return Object(r.a)(Object(r.a)({},Object(c.a)(Object(o.a)(i.prototype),"createRenderParams",this).call(this,e)),{},{requiredLevel:this._tileInfoView.getClosestInfoForScale(t.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(t.scale)})}},{key:"prepareRenderPasses",value:function(e){var t=this,n=Object(c.a)(Object(o.a)(i.prototype),"prepareRenderPasses",this).call(this,e);return n.push(e.registerRenderPass({name:"stencil",brushes:[y.a],drawPhase:d.c.DEBUG|d.c.MAP|d.c.HIGHLIGHT,target:function(){return t.getStencilTarget()}})),Object(h.a)("esri-tiles-debug")&&n.push(e.registerRenderPass({name:"tileInfo",brushes:[p.a],drawPhase:d.c.DEBUG,target:function(){return t.children}})),n}},{key:"getStencilTarget",value:function(){return this.children}},{key:"updateTransforms",value:function(e){var t,i=Object(n.a)(this.children);try{for(i.s();!(t=i.n()).done;){var r=t.value,a=this._tileInfoView.getTileResolution(r.key);r.setTransform(e,a)}}catch(s){i.e(s)}finally{i.f()}}},{key:"setStencilReference",value:function(){var e,t=1,i=Object(n.a)(this.children);try{for(i.s();!(e=i.n()).done;){e.value.stencilRef=t++}}catch(r){i.e(r)}finally{i.f()}}}]),i}(b.a);t.a=v},624:function(e,t,i){"use strict";var n=i(2),r=i(3),a=function(){function e(t,i,r){Object(n.a)(this,e),this.pixelBlock=t,this.extent=i,this.originalPixelBlock=r}return Object(r.a)(e,[{key:"width",get:function(){return this.pixelBlock?this.pixelBlock.width:0}},{key:"height",get:function(){return this.pixelBlock?this.pixelBlock.height:0}},{key:"render",value:function(e){var t=this.pixelBlock;if(t){var i=this.filter({pixelBlock:t}),n=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(n),e.putImageData(r,0,0)}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({pixelBlock:this.pixelBlock});return{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}]),e}();t.a=a},628:function(e,t,i){"use strict";i.d(t,"a",(function(){return O}));var n=i(26),r=i(2),a=i(3),s=i(16),c=i(41),o=i(36),u=i(4),l=i(5),h=i(208),d=i(281),b=i(336),p=(i(532),i(530),i(10),i(527),i(529),i(533),i(526)),y=(i(531),i(575)),f=i(624);function v(e,t,i){var n={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(n.width=t,n.height=i),new p.a(e,n)}var O=function(e){Object(u.a)(i,e);var t=Object(l.a)(i);function i(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0,c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(r.a)(this,i),(e=t.call(this)).requestRenderOnSourceChangedEnabled=c,e._textureInvalidated=!0,e.stencilRef=0,e.coordScale=[1,1],e._height=void 0,e.pixelRatio=1,e.resolution=0,e.rotation=0,e._source=null,e._width=void 0,e.x=0,e.y=0,e.transforms={dvs:Object(d.b)()},e.blendFunction=a,e.source=n,e.requestRender=e.requestRender.bind(Object(s.a)(e)),e}return Object(a.a)(i,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null)}},{key:"isSourceScaled",get:function(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){this._source=e,this.invalidateTexture()}},{key:"sourceHeight",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}},{key:"sourceWidth",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}},{key:"width",get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){Object(c.a)(Object(o.a)(i.prototype),"beforeRender",this).call(this,e),this.updateTexture(e.context)}},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"setTransform",value:function(e){var t=Object(h.b)(this.transforms.dvs),i=e.toScreenNoRotation([0,0],this.x,this.y),r=Object(n.a)(i,2),a=r[0],s=r[1],c=this.resolution/this.pixelRatio/e.resolution,o=c*this.width,u=c*this.height,l=Math.PI*this.rotation/180;Object(h.c)(t,t,Object(b.b)(a,s)),Object(h.c)(t,t,Object(b.b)(o/2,u/2)),Object(h.j)(t,t,-l),Object(h.c)(t,t,Object(b.b)(-o/2,-u/2)),Object(h.g)(t,t,Object(b.b)(o,u)),Object(h.h)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(this._textureInvalidated){this._textureInvalidated=!1,this._texture||(this.source?this._texture=v(e,this.sourceWidth,this.sourceHeight):this._texture=v(e));var i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function(e){return e&&"render"in e}(i))if(i instanceof f.a){var n=i.getRenderedRasterPixels();this._texture.setData(n.renderedRasterPixels)}else this._texture.setData(function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(i));else(function(e){return e&&!("render"in e)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}}},{key:"onAttach",value:function(){this.invalidateTexture()}},{key:"onDetach",value:function(){this.invalidateTexture()}}]),i}(y.a)},809:function(e,t,i){"use strict";i.d(t,"a",(function(){return y}));var n=i(32),r=i(2),a=i(3),s=i(41),c=i(36),o=i(4),u=i(5),l=i(255),h=i(628),d=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e,n,a){var s,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return Object(r.a)(this,i),(s=t.call(this,e,n,a,a)).bitmap=new h.a(c,"standard",!1),s.bitmap.coordScale=a,s.bitmap.once("isReady",(function(){return s.ready()})),s}return Object(a.a)(i,[{key:"destroy",value:function(){Object(s.a)(Object(c.a)(i.prototype),"destroy",this).call(this),this.bitmap.destroy()}},{key:"beforeRender",value:function(e){Object(s.a)(Object(c.a)(i.prototype),"beforeRender",this).call(this,e),this.bitmap.beforeRender(e)}},{key:"afterRender",value:function(e){Object(s.a)(Object(c.a)(i.prototype),"afterRender",this).call(this,e),this.bitmap.afterRender(e)}},{key:"stencilRef",get:function(){return this.bitmap.stencilRef},set:function(e){this.bitmap.stencilRef=e}},{key:"setTransform",value:function(e,t){Object(s.a)(Object(c.a)(i.prototype),"setTransform",this).call(this,e,t),this.bitmap.transforms.dvs=this.transforms.dvs}},{key:"onAttach",value:function(){this.bitmap.stage=this.stage}},{key:"onDetach",value:function(){this.bitmap&&(this.bitmap.stage=null)}}]),i}(i(562).a),b=i(637),p=i(519),y=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"requiresDedicatedFBO",get:function(){return this.children.some((function(e){return"additive"===e.bitmap.blendFunction}))}},{key:"createTile",value:function(e){var t=this._tileInfoView.getTileBounds(Object(l.f)(),e);return new d(e,t,this._tileInfoView.tileInfo.size)}},{key:"destroyTile",value:function(){}},{key:"prepareRenderPasses",value:function(e){var t=this,r=e.registerRenderPass({name:"bitmap (tile)",brushes:[b.a.bitmap],target:function(){return t.children.map((function(e){return e.bitmap}))},drawPhase:p.c.MAP});return[].concat(Object(n.a)(Object(s.a)(Object(c.a)(i.prototype),"prepareRenderPasses",this).call(this,e)),[r])}},{key:"doRender",value:function(e){this.visible&&e.drawPhase===p.c.MAP&&Object(s.a)(Object(c.a)(i.prototype),"doRender",this).call(this,e)}}]),i}(i(571).a)},824:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var n=i(2),r=i(3),a=i(4),s=i(5),c=i(0),o=(i(1),i(10),i(13),i(9),i(7)),u=i(809),l=function(e){var t=function(e){Object(a.a)(i,e);var t=Object(s.a)(i);function i(){return Object(n.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"attach",value:function(){this.view.timeline.record("".concat(this.layer.title," (BitmapTileLayer) Attach")),this._bitmapView=new u.a(this._tileInfoView),this.container.addChild(this._bitmapView)}},{key:"detach",value:function(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren()}}]),i}(e);return t=Object(c.a)([Object(o.a)("esri.views.2d.layers.BitmapTileLayerView2D")],t)}}}]);
//# sourceMappingURL=30.d787a3bb.chunk.js.map