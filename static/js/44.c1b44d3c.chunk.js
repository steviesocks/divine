(this.webpackJsonpdivine=this.webpackJsonpdivine||[]).push([[44],{1030:function(t,e,r){"use strict";r.r(e),r.d(e,"loadGLTFMesh",(function(){return k}));var n=r(15),a=r(6),c=r.n(a),o=r(14),i=r(38),u=r(59),s=r(8),l=r(208),b=r(582),f=r(86),p=r(671),O=r(772),j=r(774),d=r(773),m=r(722),v=r(619),x=r(635),h=r(845),g=r(867),w=r(663),y=r(846),C=r(860),A=r(847),B=r(804),T=r(848),M=r(648),F=r(732),I=r(731);function k(t,e,r){return E.apply(this,arguments)}function E(){return(E=Object(o.a)(c.a.mark((function t(e,r,a){var o,i,u,l,b,f,p,O,j,d,v,x,h,g,A,B,T;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=new y.a(S(a)),t.next=3,Object(C.a)(o,r,a,!0);case 3:i=t.sent.model,u=i.lods.shift(),l=new Map,b=new Map,i.textures.forEach((function(t,e){return l.set(e,R(t))})),i.materials.forEach((function(t,e){return b.set(e,N(t,l))})),f=J(u),p=Object(n.a)(u.parts);try{for(p.s();!(O=p.n()).done;)j=O.value,q(f,j,b)}catch(c){p.e(c)}finally{p.f()}return d=f.vertexAttributes,v=d.position,x=d.normal,h=d.tangent,g=d.color,A=d.texCoord0,B={position:v.typedBuffer,normal:Object(s.i)(x)?x.typedBuffer:null,tangent:Object(s.i)(h)?h.typedBuffer:null,uv:Object(s.i)(A)?A.typedBuffer:null,color:Object(s.i)(g)?g.typedBuffer:null},T=Object(w.c)(B,e,a),t.abrupt("return",{transform:T.transform,components:f.components,spatialReference:e.spatialReference,vertexAttributes:new m.c({position:T.vertexAttributes.position,normal:T.vertexAttributes.normal,tangent:T.vertexAttributes.tangent,color:B.color,uv:B.uv})});case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(t){return null!=t&&t.resolveFile?{busy:!1,request:function(){var e=Object(o.a)(c.a.mark((function e(r,n,a){var o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.resolveFile(r),i="image"===n?"image":"binary"===n?"array-buffer":"json",e.next=3,Object(u.default)(o,{responseType:i,signal:Object(s.i)(a)?a.signal:null});case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()}:null}function J(t){var e,r=0,a={color:!1,tangent:!1,normal:!1,texCoord0:!1},c=Object(n.a)(t.parts);try{for(c.s();!(e=c.n()).done;){var o=e.value.attributes,i=o.position,u=o.normal,s=o.color,l=o.tangent,b=o.texCoord0;r+=i.count,u&&(a.normal=!0),s&&(a.color=!0),l&&(a.tangent=!0),b&&(a.texCoord0=!0)}}catch(f){c.e(f)}finally{c.f()}return{writeIndex:0,vertexAttributes:{position:Object(g.a)(v.v,r),normal:a.normal?Object(g.a)(v.u,r):null,tangent:a.tangent?Object(g.a)(v.C,r):null,color:a.color?Object(g.a)(v.J,r):null,texCoord0:a.texCoord0?Object(g.a)(v.m,r):null},components:[]}}function R(t){return new d.a({data:t.data,wrap:L(t.parameters.wrap)})}function N(t,e){var r,n=new i.a(function(t,e){return Object(p.c)(G(t[0]),G(t[1]),G(t[2]),e)}(t.color,t.opacity)),a=t.emissiveFactor?new i.a((r=t.emissiveFactor,Object(f.g)(G(r[0]),G(r[1]),G(r[2])))):null;return new j.a({color:n,colorTexture:Object(s.p)(Object(s.b)(t.textureColor,(function(t){return e.get(t)}))),normalTexture:Object(s.p)(Object(s.b)(t.textureNormal,(function(t){return e.get(t)}))),emissiveColor:a,emissiveTexture:Object(s.p)(Object(s.b)(t.textureEmissive,(function(t){return e.get(t)}))),occlusionTexture:Object(s.p)(Object(s.b)(t.textureOcclusion,(function(t){return e.get(t)}))),alphaMode:z(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:Object(s.p)(Object(s.b)(t.textureMetallicRoughness,(function(t){return e.get(t)})))})}function q(t,e,r){var n=t.vertexAttributes,a=n.position,c=n.normal,o=n.tangent,i=n.color,u=n.texCoord0,f=t.writeIndex,p=e.attributes.position.count;if(Object(x.e)(a.slice(f,p),e.attributes.position,e.transform),Object(s.i)(e.attributes.normal)&&Object(s.i)(c)){var j=Object(l.a)(Object(b.b)(),e.transform);Object(x.a)(c.slice(f,p),e.attributes.normal,j)}else Object(s.i)(c)&&Object(M.b)(c,0,0,1,{dstIndex:f,count:p});if(Object(s.i)(e.attributes.tangent)&&Object(s.i)(o)){var d=Object(l.a)(Object(b.b)(),e.transform);Object(h.c)(o.slice(f,p),e.attributes.tangent,d)}else Object(s.i)(o)&&Object(F.b)(o,0,0,1,1,{dstIndex:f,count:p});if(Object(s.i)(e.attributes.texCoord0)&&Object(s.i)(u)?Object(I.b)(u.slice(f,p),e.attributes.texCoord0):Object(s.i)(u)&&Object(I.a)(u,0,0,{dstIndex:f,count:p}),Object(s.i)(e.attributes.color)&&Object(s.i)(i)){var m=e.attributes.color,g=i.slice(f,p);if(4===m.elementCount)m instanceof v.C?Object(h.b)(g,m,255):m instanceof v.J?Object(F.a)(g,m):m instanceof v.H&&Object(h.a)(g,m,8);else{Object(F.b)(g,255,255,255,255);var w=v.B.fromTypedArray(g.typedBuffer,g.typedBufferStride);m instanceof v.u?Object(x.d)(w,m,255):m instanceof v.B?Object(M.a)(w,m):m instanceof v.z&&Object(x.b)(w,m,8)}}else Object(s.i)(i)&&Object(F.b)(i.slice(f,p),255,255,255,255);var y=function(t,e){switch(e){case 4:return Object(A.c)(t,B.d);case 5:return Object(A.b)(t);case 6:return Object(A.a)(t)}}(e.indices||p,e.primitiveType);if(f)for(var C=0;C<y.length;C++)y[C]+=f;t.components.push(new O.a({faces:y,material:r.get(e.material).clone(),trustSourceNormals:!0})),t.writeIndex+=p}function z(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function L(t){return{horizontal:D(t.s),vertical:D(t.t)}}function D(t){switch(t){case 33071:return"clamp";case 33648:return"mirror";case 10497:return"repeat"}}function G(t){return 255*Math.pow(t,1/T.a)}}}]);
//# sourceMappingURL=44.c1b44d3c.chunk.js.map