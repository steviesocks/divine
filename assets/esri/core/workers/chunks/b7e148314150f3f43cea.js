(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8972],{52636:(e,t,r)=>{"use strict";function n(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}r.d(t,{m:()=>n}),Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<a;++e)n[u]=o[c],u+=s,c+=i},makeDense:n})},51955:(e,t,r)=>{"use strict";r.d(t,{f:()=>i,n:()=>o});var n=r(53285);function s(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<a;++e)n[u]=o[c],n[u+1]=o[c+1],u+=s,c+=i}function o(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,u=t.typedBufferStride,c=r?r.count:t.count;let f=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*u;if((0,n.U)(t.elementType)){const e=(0,n.Op)(t.elementType);if((0,n.B3)(t.elementType))for(let t=0;t<c;++t)o[f]=Math.max(a[l]/e,-1),o[f+1]=Math.max(a[l+1]/e,-1),f+=i,l+=u;else for(let t=0;t<c;++t)o[f]=a[l]/e,o[f+1]=a[l+1]/e,f+=i,l+=u}else s(e,t,r);return e}function i(e,t,r,n){var s,o;const i=e.typedBuffer,a=e.typedBufferStride,u=null!=(s=null==n?void 0:n.count)?s:e.count;let c=(null!=(o=null==n?void 0:n.dstIndex)?o:0)*a;for(let e=0;e<u;++e)i[c]=t,i[c+1]=r,c+=a}Object.freeze({__proto__:null,copy:s,normalizeIntegerBuffer:o,fill:i})},30543:(e,t,r)=>{"use strict";function n(e,t){return[e,t]}function s(e,t){return new Float64Array(e,t,2)}function o(){return n(1,1)}function i(){return n(1,0)}function a(){return n(0,1)}r.d(t,{c:()=>s});const u=o(),c=i(),f=a();Object.freeze({__proto__:null,create:function(){return[0,0]},clone:function(e){return[e[0],e[1]]},fromValues:n,fromArray:function(e){const t=[0,0],r=Math.min(2,e.length);for(let n=0;n<r;++n)t[n]=e[n];return t},createView:s,zeros:function(){return[0,0]},ones:o,unitX:i,unitY:a,ZEROS:[0,0],ONES:u,UNIT_X:c,UNIT_Y:f})},87357:(e,t,r)=>{"use strict";r.d(t,{a:()=>i,s:()=>o,t:()=>s});var n=r(45677);function s(e,t,r){if(e.count!==t.count)return void n.k.error("source and destination buffers need to have the same number of elements");const s=e.count,o=r[0],i=r[1],a=r[2],u=r[3],c=r[4],f=r[5],l=r[6],d=r[7],p=r[8],h=e.typedBuffer,m=e.typedBufferStride,y=t.typedBuffer,x=t.typedBufferStride;for(let e=0;e<s;e++){const t=e*m,r=e*x,n=y[r],s=y[r+1],w=y[r+2],b=y[r+3];h[t]=o*n+u*s+l*w,h[t+1]=i*n+c*s+d*w,h[t+2]=a*n+f*s+p*w,h[t+3]=b}}function o(e,t,r){const n=Math.min(e.count,t.count),s=e.typedBuffer,o=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*o,n=e*a;s[t]=r*i[n],s[t+1]=r*i[n+1],s[t+2]=r*i[n+2],s[t+3]=r*i[n+3]}}function i(e,t,r){const n=Math.min(e.count,t.count),s=e.typedBuffer,o=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;for(let e=0;e<n;e++){const t=e*o,n=e*a;s[t]=i[n]>>r,s[t+1]=i[n+1]>>r,s[t+2]=i[n+2]>>r,s[t+3]=i[n+3]>>r}}Object.freeze({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void n.k.error("source and destination buffers need to have the same number of elements");const s=e.count,o=r[0],i=r[1],a=r[2],u=r[3],c=r[4],f=r[5],l=r[6],d=r[7],p=r[8],h=r[9],m=r[10],y=r[11],x=r[12],w=r[13],b=r[14],g=r[15],T=e.typedBuffer,O=e.typedBufferStride,S=t.typedBuffer,C=t.typedBufferStride;for(let e=0;e<s;e++){const t=e*O,r=e*C,n=S[r],s=S[r+1],v=S[r+2],I=S[r+3];T[t]=o*n+c*s+p*v+x*I,T[t+1]=i*n+f*s+h*v+w*I,T[t+2]=a*n+l*s+m*v+b*I,T[t+3]=u*n+d*s+y*v+g*I}},transformMat3:s,scale:o,shiftRight:i})},7279:(e,t,r)=>{"use strict";function n(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<a;++e)n[u]=o[c],n[u+1]=o[c+1],n[u+2]=o[c+2],n[u+3]=o[c+3],u+=s,c+=i}function s(e,t,r,n,s,o){var i,a;const u=e.typedBuffer,c=e.typedBufferStride,f=null!=(i=null==o?void 0:o.count)?i:e.count;let l=(null!=(a=null==o?void 0:o.dstIndex)?a:0)*c;for(let e=0;e<f;++e)u[l]=t,u[l+1]=r,u[l+2]=n,u[l+3]=s,l+=c}r.d(t,{c:()=>n,f:()=>s}),Object.freeze({__proto__:null,copy:n,fill:s})},29666:(e,t,r)=>{"use strict";function n(){return[0,0,0,0]}function s(e,t,r,n){return[e,t,r,n]}function o(e,t){return new Float64Array(e,t,4)}function i(){return s(1,1,1,1)}function a(){return s(1,0,0,0)}function u(){return s(0,1,0,0)}function c(){return s(0,0,1,0)}function f(){return s(0,0,0,1)}r.d(t,{a:()=>o,c:()=>n,f:()=>s});const l=i(),d=a(),p=u(),h=c(),m=f();Object.freeze({__proto__:null,create:n,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:s,fromArray:function(e){const t=[0,0,0,0],r=Math.min(4,e.length);for(let n=0;n<r;++n)t[n]=e[n];return t},createView:o,zeros:function(){return[0,0,0,0]},ones:i,unitX:a,unitY:u,unitZ:c,unitW:f,ZEROS:[0,0,0,0],ONES:l,UNIT_X:d,UNIT_Y:p,UNIT_Z:h,UNIT_W:m})},46924:(e,t,r)=>{"use strict";r.d(t,{x:()=>o});var n=r(67380),s=r(16658);class o{constructor(e){this.allocator=e,this.items=[],this.itemsPtr=0,this.tickHandle=s.Z.before((()=>this.reset())),this.grow()}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=(0,n.Bd)(this.tickHandle)),this.items=(0,n.Bd)(this.items)}get(){return 0===this.itemsPtr&&(0,s.Z)((()=>{})),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]}reset(){const e=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*i);this.items.length=Math.min(e,this.items.length),this.itemsPtr=0}grow(){for(let e=0;e<Math.max(8,Math.min(this.items.length,i));e++)this.items.push(this.allocator())}}const i=1024},12810:(e,t,r)=>{"use strict";r.d(t,{G:()=>s});var n=r(8811);class s{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new n.Z(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new s(this.major,this.minor,this._context)}static parse(e,t=""){const[r,o]=e.split("."),i=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(i))throw new n.Z((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!o||!o.match||!o.match(i))throw new n.Z((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const a=parseInt(r,10),u=parseInt(o,10);return new s(a,u,t)}}},53285:(e,t,r)=>{"use strict";function n(e){switch(e){case"u8":return 1;case"u16":return 2;case"u32":return 4;case"i8":return 1;case"i16":return 2;case"i32":case"f32":return 4;case"f64":return 8;default:return}}function s(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function o(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function i(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}r.d(t,{n1:()=>n,U:()=>o,B3:()=>s,Op:()=>i}),r(77645)},58511:(e,t,r)=>{"use strict";r.d(t,{gS:()=>s});var n=r(53285);function s(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,n.n1)(e.ElementType)))}Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<a;++e){for(let e=0;e<9;++e)n[u+e]=o[c+e];u+=s,c+=i}}}),Object.freeze({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,s=e.typedBufferStride,o=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*s,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let e=0;e<a;++e){for(let e=0;e<16;++e)n[u+e]=o[c+e];u+=s,c+=i}}}),r(52636),r(51955),r(23493),r(7279)},36151:(e,t,r)=>{"use strict";r.d(t,{MP:()=>h,WM:()=>p});var n=r(67380),s=r(16658),o=r(26633),i=r(22276),a=r(66311),u=r(30543),c=r(88230),f=r(29666);class l{constructor(e,t,r){this.itemByteSize=e,this.itemCreate=t,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(r/this.itemByteSize),this.tickHandle=s.Z.before((()=>this.reset()))}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=(0,n.Bd)(this.tickHandle)),this.itemsPtr=0,this.items=(0,n.Bd)(this.items),this.buffers=(0,n.Bd)(this.buffers)}get(){0===this.itemsPtr&&(0,s.Z)((()=>{}));const e=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=e;){const e=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let t=0;t<this.itemsPerBuffer;++t)this.items.push(this.itemCreate(e,t*this.itemByteSize));this.buffers.push(e)}return this.items[this.itemsPtr++]}reset(){const e=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>e;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0}static createVec2f64(e=d){return new l(16,u.c,e)}static createVec3f64(e=d){return new l(24,c.b,e)}static createVec4f64(e=d){return new l(32,f.a,e)}static createMat3f64(e=d){return new l(72,o.a,e)}static createMat4f64(e=d){return new l(128,i.a,e)}static createQuatf64(e=d){return new l(32,a.c,e)}get test(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const d=4096,p=(l.createVec2f64(),l.createVec3f64()),h=(l.createVec4f64(),l.createMat3f64(),l.createMat4f64());l.createQuatf64()},42764:(e,t,r)=>{"use strict";r.d(t,{C:()=>c});var n=r(93100),s=r(38986),o=r(8811),i=r(67380),a=r(8764),u=r(99204);class c{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return(0,u.HK)(e)?((0,a.k_)(t),(0,u.AH)(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if((0,i.Wi)(this.streamDataRequester))return(await(0,n.default)(t,{responseType:f[e]})).data;const u=await(0,s.q6)(this.streamDataRequester.request(t,e,r));if(!0===u.ok)return u.value;throw(0,a.r9)(u.error),new o.Z("",`Request for resource failed: ${u.error}`)}}const f={image:"image",binary:"array-buffer",json:"json"}},54028:(e,t,r)=>{"use strict";r.d(t,{jX:()=>a,DA:()=>i,nh:()=>o});var n=r(33246),s=r(19851);function o(e,t=s.p){return"number"==typeof e?t(e):(0,n.Uc)(e)||(0,n.lq)(e)?new Uint32Array(e):e}function i(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let s=0;s<r;s+=1)if(s%2==0){const r=e[s],o=e[s+1],i=e[s+2];n[t++]=r,n[t++]=o,n[t++]=i}else{const r=e[s+1],o=e[s],i=e[s+2];n[t++]=r,n[t++]=o,n[t++]=i}}return n}function a(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}{const t=e[0];let s=e[1],o=0;for(let i=0;i<r;++i){const r=e[i+2];n[o++]=t,n[o++]=s,n[o++]=r,s=r}return n}}},5312:(e,t,r)=>{"use strict";r.d(t,{z:()=>M});var n=r(67380),s=r(22276),o=r(8811);const i=r(45851).Z.getLogger("esri.views.3d.glTF");var a=r(17253),u=r(99204),c=r(12810),f=r(50312),l=r(6798),d=r(66311),p=r(50799),h=r(52636);class m{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const y={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},x={pbrMetallicRoughness:y,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},w={ESRI_externalColorMixMode:"tint"},b=(e={})=>{const t={...y,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,a.Bg)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...w,...e.extras});return{...x,...e,pbrMetallicRoughness:t,extras:r}},g={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497},T=1179937895;class O{constructor(e,t,r,n,s){this.context=e,this.errorContext=t,this.uri=r,this.json=n,this.glbBuffer=s,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,n,s)=>(t=n||"",r=s||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,n){if((0,u.HK)(r)){const n=(0,u.sJ)(r);if("model/gltf-binary"!==n.mediaType)try{const s=JSON.parse(n.isBase64?atob(n.data):n.data);return new O(e,t,r,s)}catch{}const s=(0,u.AH)(r);if(O.isGLBData(s))return this.fromGLBData(e,t,r,s)}if(r.endsWith(".gltf")){const s=await e.loadJSON(r,n);return new O(e,t,r,s)}const s=await e.loadBinary(r,n);if(O.isGLBData(s))return this.fromGLBData(e,t,r,s);const o=await e.loadJSON(r,n);return new O(e,t,r,o)}static isGLBData(e){const t=new m(e);return t.remainingBytes()>=4&&t.readUint32()===T}static async fromGLBData(e,t,r,n){const s=await O.parseGLBData(t,n);return new O(e,t,r,s.json,s.binaryData)}static async parseGLBData(e,t){const r=new m(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=r.readUint32(),s=r.readUint32(),o=r.readUint32();e.assert(n===T,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=o,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==s,"An unsupported GLB container version was detected. Only version 2 is supported.");let i,a,u=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),n=r.readUint32();0===u?(e.assert(1313821514===n,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),i=await U(r.readUint8Array(t))):1===u?(e.errorUnsupportedIf(5130562!==n,"Second GLB chunk expected to be BIN."),a=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1}return i||e.error("No GLB JSON chunk detected."),{json:i,binaryData:a}}async getBuffer(e,t){const r=this.json.buffers[e],n=this.errorContext;if(null==r.uri)return n.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let s=this.bufferCache.get(e);if(!s){const o=await this.context.loadBinary(this.resolveUri(r.uri),t);s=new Uint8Array(o),this.bufferCache.set(e,s),n.assert(s.byteLength===r.byteLength,"Buffer byte lengths should match.")}return s}async getAccessor(e,t){const r=this.json.accessors[e],n=this.errorContext;n.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),n.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const s=this.json.bufferViews[r.bufferView],o=await this.getBuffer(s.buffer,t),i=I[r.type],a=B[r.componentType],u=i*a,c=s.byteStride||u;return{raw:o.buffer,byteStride:c,byteOffset:o.byteOffset+(s.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:c===u,componentCount:i,componentByteSize:a,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return(0,h.m)(this.wrapAccessor(p.D_,r));case 5123:return(0,h.m)(this.wrapAccessor(p.av,r));case 5125:return(0,h.m)(this.wrapAccessor(p.Nu,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const n=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+A[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"POSITION vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(p.ct,n)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const n=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+A[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"NORMAL vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(p.ct,n)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const n=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+A[n.componentType]),r.errorUnsupportedIf(4!==n.componentCount,"TANGENT vertex attribute must have 4 components, but found "+n.componentCount.toFixed()),new p.ek(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const n=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==n.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+n.componentCount.toFixed()),5126===n.componentType?this.wrapAccessor(p.Eu,n):(r.errorUnsupportedIf(!n.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new p.Vs(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new p.xA(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new p.or(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new p.TS(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new p.qt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new p.Eu(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void(0,a.Bg)(e.componentType)}}(n))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const n=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==n.componentCount&&3!==n.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+n.componentCount.toFixed()),4===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(p.ek,n);if(5121===n.componentType)return this.wrapAccessor(p.mc,n);if(5123===n.componentType)return this.wrapAccessor(p.v6,n)}else if(3===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(p.ct,n);if(5121===n.componentType)return this.wrapAccessor(p.ne,n);if(5123===n.componentType)return this.wrapAccessor(p.mw,n)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+A[n.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){const n=this.errorContext;let s=this.materialCache.get(e.material);if(!s){const o=null!=e.material?b(this.json.materials[e.material]):b(),i=o.pbrMetallicRoughness,a=this.hasVertexColors(e);let u,c,f,l,d;i.baseColorTexture&&(n.errorUnsupportedIf(0!==(i.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),u=await this.getTexture(i.baseColorTexture.index,t)),o.normalTexture&&(0!==(o.normalTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):c=await this.getTexture(o.normalTexture.index,t)),o.occlusionTexture&&r&&(0!==(o.occlusionTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):f=await this.getTexture(o.occlusionTexture.index,t)),o.emissiveTexture&&r&&(0!==(o.emissiveTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):l=await this.getTexture(o.emissiveTexture.index,t)),i.metallicRoughnessTexture&&r&&(0!==(i.metallicRoughnessTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):d=await this.getTexture(i.metallicRoughnessTexture.index,t));const p=null!=e.material?e.material:-1;s={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:i.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:u,normalTexture:c,name:o.name,id:p,occlusionTexture:f,emissiveTexture:l,emissiveFactor:o.emissiveFactor,metallicFactor:i.metallicFactor,roughnessFactor:i.roughnessFactor,metallicRoughnessTexture:d,vertexColors:a,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode}}return s}async getTexture(e,t){const r=this.errorContext,n=this.json.textures[e],s=(e=>({...g,...e}))(null!=n.sampler?this.json.samplers[n.sampler]:{});r.errorUnsupportedIf(null==n.source,"Source is expected to be defined for a texture.");const o=this.json.images[n.source];let i=this.textureCache.get(e);if(!i){let n;if(o.uri)n=await this.context.loadImage(this.resolveUri(o.uri),t);else{r.errorUnsupportedIf(null==o.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==o.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[o.bufferView],s=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),n=await async function(e,t){return new Promise(((r,n)=>{const s=new Blob([e],{type:t}),o=URL.createObjectURL(s),i=new Image;i.addEventListener("load",(()=>{URL.revokeObjectURL(o),"decode"in i?i.decode().then((()=>r(i)),(()=>r(i))):r(i)})),i.addEventListener("error",(e=>{URL.revokeObjectURL(o),n(e)})),i.src=o}))}(new Uint8Array(s.buffer,s.byteOffset+(e.byteOffset||0),e.byteLength),o.mimeType)}const a=e=>33071===e||33648===e||10497===e,u=e=>(r.error(`Unexpected TextureSampler WrapMode: ${e}. Using default REPEAT(10497).`),10497);i={data:n,wrapS:a(s.wrapS)?s.wrapS:u(s.wrapS),wrapT:a(s.wrapT)?s.wrapT:u(s.wrapT),minFilter:s.minFilter,name:o.name,id:e},this.textureCache.set(e,i)}return i}getNodeTransform(e){if(void 0===e)return C;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=(0,f.m)((0,s.c)(),r,n.matrix):n.translation||n.rotation||n.scale?(t=(0,s.b)(r),n.translation&&(0,f.t)(t,t,n.translation),n.rotation&&(v[3]=(0,l.g)(v,n.rotation),(0,f.c)(t,t,v[3],v)),n.scale&&(0,f.s)(t,t,n.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return(0,u.hF)(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=c.G.parse(this.json.asset.version,"glTF");S.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}}const S=new c.G(2,0,"glTF"),C=(0,f.n)((0,s.c)(),Math.PI/2),v=(0,d.a)(),I={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},B={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function U(e){return new Promise(((t,r)=>{const n=new Blob([e]),s=new FileReader;s.onload=()=>{const e=s.result;t(JSON.parse(e))},s.onerror=e=>{r(e)},s.readAsText(n)}))}const A={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let _=0;async function M(e,t,r={},o=!0){const i=await O.load(e,L,t,r),a="gltf_"+_++,u={lods:[],materials:new Map,textures:new Map,meta:R(i)},c=!(!i.json.asset.extras||"symbolResource"!==i.json.asset.extras.ESRI_type);return await N(i,(async(e,t,c,f)=>{const l=void 0!==e.mode?e.mode:4,d=4===l||5===l||6===l?l:null;if((0,n.Wi)(d))return void L.warnUnsupported("Unsupported primitive mode ("+j[l]+"). Skipping primitive.");if(!i.hasPositions(e))return void L.warn("Skipping primitive without POSITION vertex attribute.");const p=await i.getMaterial(e,r,o),h={transform:(0,s.b)(t),attributes:{position:await i.getPositionData(e,r),normal:null,texCoord0:null,color:null,tangent:null},indices:await i.getIndexData(e,r),primitiveType:d,material:P(u,p,a)};i.hasNormals(e)&&(h.attributes.normal=await i.getNormalData(e,r)),i.hasTangents(e)&&(h.attributes.tangent=await i.getTangentData(e,r)),i.hasTextureCoordinates(e)&&(h.attributes.texCoord0=await i.getTextureCoordinates(e,r)),i.hasVertexColors(e)&&(h.attributes.color=await i.getVertexColors(e,r));let m=null;(0,n.pC)(u.meta)&&(0,n.pC)(u.meta.ESRI_lod)&&"screenSpaceRadius"===u.meta.ESRI_lod.metric&&(m=u.meta.ESRI_lod.thresholds[c]),u.lods[c]=u.lods[c]||{parts:[],name:f,lodThreshold:m},u.lods[c].parts.push(h)})),{model:u,meta:{isEsriSymbolResource:c,uri:i.uri},customMeta:{}}}function R(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;(0,n.pC)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}async function N(e,t){const r=e.json,n=r.scenes[r.scene||0].nodes,s=n.length>1;for(const e of n){const t=r.nodes[e],n=[o(e,0)];if(E(t)&&!s){const e=t.extensions.MSFT_lod.ids;n.push(...e.map(((e,t)=>o(e,t+1))))}await Promise.all(n)}async function o(n,s){const i=r.nodes[n],a=e.getNodeTransform(n);if(L.warnUnsupportedIf(null!=i.weights,"Morph targets are not supported."),null!=i.mesh){const e=r.meshes[i.mesh];for(const r of e.primitives)await t(r,a,s,e.name)}for(const e of i.children||[])await o(e,s)}}function E(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function P(e,t,r){const n=t=>{const n=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(n)){const r=function(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:F.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(n,r)}return n},s=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(s)){const r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?n(t.colorTexture):void 0,textureNormal:t.normalTexture?n(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?n(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?n(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?n(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(s,r)}return s}const L=new class{error(e){throw new o.Z("gltf-loader-error",e)}errorUnsupported(e){throw new o.Z("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){i.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},F=[9987,9985],j=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"]},19851:(e,t,r)=>{"use strict";r.d(t,{NO:()=>h,cM:()=>p,p:()=>l,DX:()=>d});var n=r(10188),s=r(88230),o=r(46924);r(29079),r(68589),r(36151),(0,s.c)(),(0,s.c)(),new o.x((()=>({origin:null,vector:null}))),new o.x((function(e){return e?{origin:(0,s.a)(e.origin),vector:(0,s.a)(e.vector)}:{origin:(0,s.c)(),vector:(0,s.c)()}})),new o.x((()=>({p0:null,p1:null,p2:null})));const i=(0,s.c)(),a=(0,s.c)();let u=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const c=new Uint16Array([0]),f=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function l(e){if(1===e)return c;if(e<f.length)return new Uint16Array(f.buffer,0,e);if(e>u.length){const t=Math.max(2*u.length,e);u=new Uint32Array(t);for(let e=0;e<u.length;e++)u[e]=e}return new Uint32Array(u.buffer,0,e)}function d(e){if(1===e)return new Uint16Array(c);if(e<f.length)return new Uint16Array(f.slice(0,e));if(e>u.length){const t=new Uint32Array(e);for(let e=0;e<t.length;e++)t[e]=e;return t}return new Uint32Array(u.slice(0,e))}function p(e,t,r){if(!e)return!1;const{size:s,data:o}=e;(0,n.s)(r,0,0,0),(0,n.s)(w,0,0,0);let u=0,c=0;for(let e=0;e<t.length-2;e+=3){const p=t[e+0]*s,h=t[e+1]*s,b=t[e+2]*s;(0,n.s)(m,o[p+0],o[p+1],o[p+2]),(0,n.s)(y,o[h+0],o[h+1],o[h+2]),(0,n.s)(x,o[b+0],o[b+1],o[b+2]);const g=(f=m,l=y,d=x,(0,n.f)(i,l,f),(0,n.f)(a,d,f),(0,n.l)((0,n.c)(i,i,a))/2);g?((0,n.b)(m,m,y),(0,n.b)(m,m,x),(0,n.a)(m,m,1/3*g),(0,n.b)(r,r,m),u+=g):((0,n.b)(w,w,m),(0,n.b)(w,w,y),(0,n.b)(w,w,x),c+=3)}var f,l,d;return!(0===c&&0===u||(0!==u?((0,n.a)(r,r,1/u),0):0===c||((0,n.a)(r,w,1/c),0)))}function h(e,t,r){if(!e||!t)return!1;const{size:s,data:o}=e;(0,n.s)(r,0,0,0);let i=-1,a=0;for(let e=0;e<t.length;e++){const n=t[e]*s;i!==n&&(r[0]+=o[n+0],r[1]+=o[n+1],r[2]+=o[n+2],a++),i=n}return a>1&&(0,n.a)(r,r,1/a),a>0}const m=(0,s.c)(),y=(0,s.c)(),x=(0,s.c)(),w=(0,s.c)()},87090:(e,t,r)=>{"use strict";r.d(t,{K:()=>n});const n=2.1}}]);