(this.webpackJsonpdivine=this.webpackJsonpdivine||[]).push([[10],{622:function(t,e,i){"use strict";var r,n=i(26),a=i(2),s=i(3),l=i(4),o=i(5),h=i(0),u=(i(10),i(20)),f=i(19),c=i(18),p=i(9),x=i(8),m=i(1),v=i(45),d=i(7),g=p.a.getLogger("esri.layers.support.PixelBlock"),y=r=function(t){Object(l.a)(i,t);var e=Object(o.a)(i);function i(t){var r;return Object(a.a)(this,i),(r=e.call(this,t)).width=null,r.height=null,r.pixelType="f32",r.validPixelCount=null,r.mask=null,r.maskIsAlpha=!1,r.pixels=null,r.statistics=null,r}return Object(s.a)(i,[{key:"castPixelType",value:function(t){if(!t)return"f32";var e=t.toLowerCase();return["u1","u2","u4"].indexOf(e)>-1?e="u8":-1===["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].indexOf(e)&&(e="f32"),e}},{key:"getPlaneCount",value:function(){return this.pixels&&this.pixels.length}},{key:"addData",value:function(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new u.a("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics||{minValue:null,maxValue:null})}},{key:"getAsRGBA",value:function(){var t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)}},{key:"getAsRGBAFloat",value:function(){var t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}},{key:"updateStatistics",value:function(){var t=this;this.statistics=this.pixels.map((function(e){return t._calculateBandStatistics(e,t.mask)}));var e=this.mask,i=0;if(e)for(var r=0;r<e.length;r++)e[r]&&i++;else i=this.width*this.height;this.validPixelCount=i}},{key:"clamp",value:function(t){if(t&&"f64"!==t&&"f32"!==t){var e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}for(var i,a,s,l=e,o=Object(n.a)(l,2),h=o[0],u=o[1],f=this.pixels,c=this.width*this.height,p=f.length,x=[],m=0;m<p;m++){s=r.createEmptyBand(t,c),i=f[m];for(var v=0;v<c;v++)a=i[v],s[v]=a>u?u:a<h?h:a;x.push(s)}this.pixels=x,this.pixelType=t}}},{key:"extractBands",value:function(t){var e=this;if(Object(x.h)(t)||0===t.length||null==this.pixels||0===this.pixels.length)return this;var i=this.pixels.length,n=t.some((function(t){return t>=e.pixels.length})),a=i===t.length&&!t.some((function(t,e){return t!==e}));return n||a?this:new r({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t.map((function(t){return e.pixels[t]})),statistics:this.statistics&&t.map((function(t){return e.statistics[t]}))})}},{key:"clone",value:function(){var t,e=new r({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});this.mask&&(this.mask instanceof Uint8Array?e.mask=new Uint8Array(this.mask):e.mask=this.mask.slice(0));var i=r.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){e.pixels=[];var n=this.pixels[0].slice;for(t=0;t<this.pixels.length;t++)e.pixels[t]=n?this.pixels[t].slice(0,this.pixels[t].length):new i(this.pixels[t])}if(this.statistics)for(e.statistics=[],t=0;t<this.statistics.length;t++)e.statistics[t]=Object(c.a)(this.statistics[t]);return e}},{key:"_fillFrom8Bit",value:function(t){var e=this.mask,i=this.maskIsAlpha,r=this.pixels;if(t&&r&&r.length){var n,a,s,l;n=a=s=r[0],r.length>=3?(a=r[1],s=r[2]):2===r.length&&(a=r[1]);var o=new Uint32Array(t),h=this.width*this.height;if(n.length===h)if(e&&e.length===h)if(i)for(l=0;l<h;l++)e[l]&&(o[l]=e[l]<<24|s[l]<<16|a[l]<<8|n[l]);else for(l=0;l<h;l++)e[l]&&(o[l]=255<<24|s[l]<<16|a[l]<<8|n[l]);else for(l=0;l<h;l++)o[l]=255<<24|s[l]<<16|a[l]<<8|n[l];else g.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}else g.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")}},{key:"_fillFromNon8Bit",value:function(t){var e=this.pixels,i=this.mask,r=this.statistics;if(t&&e&&e.length){var n=this.pixelType,a=1,s=0;if(r&&r.length>0)s=r.map((function(t){return t.minValue})).reduce((function(t,e){return Math.min(t,e)})),a=255/r.map((function(t){return t.maxValue-t.minValue})).reduce((function(t,e){return Math.max(t,e)}));else{var l=255;"s8"===n?(s=-128,l=127):"u16"===n?l=65535:"s16"===n?(s=-32768,l=32767):"u32"===n?l=4294967295:"s32"===n?(s=-2147483648,l=2147483647):"f32"===n?(s=-34e38,l=34e38):"f64"===n&&(s=-Number.MAX_VALUE,l=Number.MAX_VALUE),a=255/(l-s)}var o,h,u,f,c,p=new Uint32Array(t),x=this.width*this.height;if((o=h=u=e[0]).length!==x)return g.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(h=e[1],e.length>=3&&(u=e[2]),i&&i.length===x)for(f=0;f<x;f++)i[f]&&(p[f]=255<<24|(u[f]-s)*a<<16|(h[f]-s)*a<<8|(o[f]-s)*a);else for(f=0;f<x;f++)p[f]=255<<24|(u[f]-s)*a<<16|(h[f]-s)*a<<8|(o[f]-s)*a;else if(i&&i.length===x)for(f=0;f<x;f++)c=(o[f]-s)*a,i[f]&&(p[f]=255<<24|c<<16|c<<8|c);else for(f=0;f<x;f++)c=(o[f]-s)*a,p[f]=255<<24|c<<16|c<<8|c}else g.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")}},{key:"_fillFrom32Bit",value:function(t){var e,i,r,n,a=this.pixels,s=this.mask;if(!t||!a||!a.length)return g.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");e=i=r=a[0],a.length>=3?(i=a[1],r=a[2]):2===a.length&&(i=a[1]);var l=this.width*this.height;if(e.length!==l)return g.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");var o=0;if(s&&s.length===l)for(n=0;n<l;n++)t[o++]=e[n],t[o++]=i[n],t[o++]=r[n],t[o++]=1&s[n];else for(n=0;n<l;n++)t[o++]=e[n],t[o++]=i[n],t[o++]=r[n],t[o++]=1}},{key:"_calculateBandStatistics",value:function(t,e){var i,r=1/0,n=-1/0,a=t.length,s=0;if(e)for(i=0;i<a;i++)e[i]&&(r=(s=t[i])<r?s:r,n=s>n?s:n);else for(i=0;i<a;i++)r=(s=t[i])<r?s:r,n=s>n?s:n;return{minValue:r,maxValue:n}}}],[{key:"createEmptyBand",value:function(t,e){return new(r.getPixelArrayConstructor(t))(e)}},{key:"getPixelArrayConstructor",value:function(t){var e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"u32":e=Uint32Array;break;case"f32":e=Float32Array;break;case"f64":e=Float64Array;break;case"c64":case"c128":case"unknown":e=Float32Array}return e}}]),i}(f.a);Object(h.a)([Object(m.b)({json:{write:!0}})],y.prototype,"width",void 0),Object(h.a)([Object(m.b)({json:{write:!0}})],y.prototype,"height",void 0),Object(h.a)([Object(m.b)({json:{write:!0}})],y.prototype,"pixelType",void 0),Object(h.a)([Object(v.a)("pixelType")],y.prototype,"castPixelType",null),Object(h.a)([Object(m.b)({json:{write:!0}})],y.prototype,"validPixelCount",void 0),Object(h.a)([Object(m.b)({json:{write:!0}})],y.prototype,"mask",void 0),Object(h.a)([Object(m.b)({json:{write:!0}})],y.prototype,"maskIsAlpha",void 0),Object(h.a)([Object(m.b)({json:{write:!0}})],y.prototype,"pixels",void 0),Object(h.a)([Object(m.b)({json:{write:!0}})],y.prototype,"statistics",void 0);var w=y=r=Object(h.a)([Object(d.a)("esri.layers.support.PixelBlock")],y);e.a=w},623:function(t,e,i){"use strict";i.d(e,"a",(function(){return j})),i.d(e,"b",(function(){return l})),i.d(e,"c",(function(){return s})),i.d(e,"d",(function(){return f})),i.d(e,"e",(function(){return u})),i.d(e,"f",(function(){return h})),i.d(e,"g",(function(){return o})),i.d(e,"h",(function(){return a})),i.d(e,"i",(function(){return p})),i.d(e,"j",(function(){return d})),i.d(e,"k",(function(){return m})),i.d(e,"l",(function(){return x})),i.d(e,"m",(function(){return g})),i.d(e,"n",(function(){return U})),i.d(e,"o",(function(){return c}));var r=i(622),n=function(t){return t&&"esri.layers.support.PixelBlock"===t.declaredClass&&t.pixels&&t.pixels.length>0};function a(t,e){if(null==e||!e.length||!n(t))return t;var i=t.pixels.length;return e&&e.some((function(t){return t>=i}))||1===i&&1===e.length&&0===e[0]?t:i!==e.length||e.some((function(t,e){return t!==e}))?new r.a({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:e.map((function(e){return t.pixels[e]})),statistics:t.statistics&&e.map((function(e){return t.statistics[e]}))}):t}function s(t){if(t){var e=t.colormap;if(e&&0!==e.length){var i=e.sort((function(t,e){return t[0]-e[0]})),r=0;i[0][0]<0&&(r=i[0][0]);var n,a=Math.max(256,i[i.length-1][0]-r+1),s=new Uint8Array(4*a),l=[],o=0,h=0,u=5===i[0].length;if(a>65536)return i.forEach((function(t){l[t[0]-r]=u?t.slice(1):t.slice(1).concat([255])})),{indexed2DColormap:l,offset:r,alphaSpecified:u};if(t.fillUnspecified)for(o=(n=i[h])[0]-r;o<a;o++)s[4*o]=n[1],s[4*o+1]=n[2],s[4*o+2]=n[3],s[4*o+3]=u?n[4]:255,o===n[0]-r&&(n=h===i.length-1?n:i[++h]);else for(o=0;o<i.length;o++)s[h=4*((n=i[o])[0]-r)]=n[1],s[h+1]=n[2],s[h+2]=n[3],s[h+3]=u?n[4]:255;return{indexedColormap:s,offset:r,alphaSpecified:u}}}}function l(t,e){if(!n(t))return t;if(!e&&(e.indexedColormap||e.indexed2DColormap))return t;var i=t.clone(),r=i.pixels,a=i.mask,s=i.width*i.height;if(1!==r.length)return t;var l,o=e.indexedColormap,h=e.indexed2DColormap,u=e.offset,f=e.alphaSpecified,c=o.length-1,p=0,x=r[0],m=new Uint8Array(x.length),v=new Uint8Array(x.length),d=new Uint8Array(x.length),g=0;if(o)if(a)for(p=0;p<s;p++)a[p]&&((g=4*(x[p]-u))<u||g>c?a[p]=0:(m[p]=o[g],v[p]=o[g+1],d[p]=o[g+2],a[p]=o[g+3]));else{for(a=new Uint8Array(s),p=0;p<s;p++)(g=4*(x[p]-u))<u||g>c?a[p]=0:(m[p]=o[g],v[p]=o[g+1],d[p]=o[g+2],a[p]=o[g+3]);i.mask=a}else if(a)for(p=0;p<s;p++)a[p]&&(l=h[x[p]],m[p]=l[0],v[p]=l[1],d[p]=l[2],a[p]=l[3]);else{for(a=new Uint8Array(s),p=0;p<s;p++)l=h[x[p]],m[p]=l[0],v[p]=l[1],d[p]=l[2],a[p]=l[3];i.mask=a}return i.pixels=[m,v,d],i.statistics=null,i.pixelType="u8",i.maskIsAlpha=f,i}function o(t){if(!n(t))return null;t.statistics||t.updateStatistics();var e,i,r,a,s,l,o,h,u,f,c,p,x,m,v=t.pixels,d=t.mask,g=t.pixelType,y=t.statistics,w=t.width*t.height,k=v.length,A=[],b=[],M=256;for(a=0;a<k;a++){if(l=new Uint32Array(M),h=v[a],"u8"===g)if(e=-.5,i=255.5,d)for(s=0;s<w;s++)d[s]&&l[h[s]]++;else for(s=0;s<w;s++)l[h[s]]++;else{if(e=y[a].minValue,r=((i=y[a].maxValue)-e)/M,o=new Uint32Array(257),d)for(s=0;s<w;s++)d[s]&&o[Math.floor((h[s]-e)/r)]++;else for(s=0;s<w;s++)o[Math.floor((h[s]-e)/r)]++;for(s=0;s<255;s++)l[s]=o[s];l[255]=o[255]+o[256]}for(A.push({min:e,max:i,size:M,counts:l}),u=0,f=0,x=0,s=0;s<M;s++)u+=l[s],f+=s*l[s];for(m=f/u,s=0;s<M;s++)x+=l[s]*Math.pow(s-m,2);c=(m+.5)*(r=(i-e)/M)+e,p=Math.sqrt(x/(u-1))*r,b.push({min:e,max:i,avg:c,stddev:p})}return{statistics:b,histograms:A}}function h(t){for(var e=[],i=0;i<t.length;i++){for(var r=t[i],n=r.min,a=r.max,s=r.size,l=r.counts,o=0,h=0,u=0;u<s;u++)o+=l[u],h+=u*l[u];for(var f=h/o,c=0,p=0;p<s;p++)c+=l[p]*Math.pow(p-f,2);var x=(a-n)/s,m=(f+.5)*x+n,v=Math.sqrt(c/(o-1))*x;e.push({min:n,max:a,avg:m,stddev:v})}return e}function u(t){var e=t.minCutOff,i=t.maxCutOff,r=t.gamma,n=t.pixelType,a=t.outMin||0,s=t.outMax||255;if(-1===["u8","u16","s8","s16"].indexOf(n))return null;var l,o,h=e.length,u=0;"s8"===n?u=-127:"s16"===n&&(u=-32767);var f=256;["u16","s16"].indexOf(n)>-1&&(f=65536);var c=[],p=[],x=s-a;for(l=0;l<h;l++)p[l]=i[l]-e[l],c[l]=x/(i[l]-e[l]);var m,v=r&&r.length>=h,d=[];if(v)for(l=0;l<h;l++)r[l]>1?r[l]>2?d[l]=6.5+Math.pow(r[l]-2,2.5):d[l]=6.5+100*Math.pow(2-r[l],4):d[l]=1;var g,y,w,k=[];if(v)for(l=0;l<h;l++){for(w=[],o=0;o<f;o++)m=((g=o+u)-e[l])/p[l],y=1,r[l]>1&&(y-=Math.pow(1/x,m*d[l])),g<i[l]&&g>e[l]?w[o]=Math.floor(y*x*Math.pow(m,1/r[l]))+a:g>=i[l]?w[o]=s:w[o]=a;k[l]=w}else for(l=0;l<h;l++){for(w=[],o=0;o<f;o++)(g=o+u)<=e[l]?w[o]=a:g>=i[l]?w[o]=s:w[o]=Math.floor((g-e[l])/p[l]*x)+a;k[l]=w}if(null!=t.contrastOffset){var A=function(t,e){var i,r,n=Math.min(Math.max(t,-100),100),a=Math.min(Math.max(e,-100),100),s=255,l=128,o=new Uint8Array(256);for(i=0;i<256;i++)n>0&&n<100?r=(200*i-100*s+2*s*a)/(2*(100-n))+l:n<=0&&n>-100?r=(200*i-100*s+2*s*a)*(100+n)/2e4+l:100===n?r=(r=200*i-100*s+(s+1)*(100-n)+2*s*a)>0?s:0:-100===n&&(r=l),o[i]=r>s?s:r<0?0:r;return o}(t.contrastOffset,t.brightnessOffset);for(l=0;l<h;l++)for(w=k[l],o=0;o<f;o++)w[o]=A[w[o]]}return{lut:k,offset:u}}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256;e=Math.min(e,256);for(var i=t.size,r=t.counts,n=new Uint8Array(i),a=r.reduce((function(t,i){return t+i/e}),0),s=0,l=0,o=0,h=a,u=0;u<i;u++)if(o+=r[u],!(u<i-1&&o+r[u+1]<h)){for(;s<e-1&&h<o;)s++,h+=a;for(var f=l;f<=u;f++)n[f]=s;l=u+1}for(var c=l;c<i;c++)n[c]=e-1;return n}function c(t,e){if(!n(t))return null;var i,r,a,s,l,o=t.clone(),h=o.pixels,u=o.mask,f=e.minCutOff,c=e.maxCutOff,p=e.gamma,x=e.outMin||0,m=e.outMax||255,v=o.width*o.height,d=h.length,g=m-x,y=[],w=[];for(i=0;i<d;i++)w[i]=c[i]-f[i],y[i]=g/(c[i]-f[i]);var k=p&&p.length>=d,A=[];if(k)for(i=0;i<d;i++)p[i]>1?p[i]>2?A[i]=6.5+Math.pow(p[i]-2,2.5):A[i]=6.5+100*Math.pow(2-p[i],4):A[i]=1;if(k)if(null!=u){for(r=0;r<v;r++)if(u[r])for(i=0;i<d;i++)l=((a=h[i][r])-f[i])/w[i],s=1,p[i]>1&&(s-=Math.pow(1/g,l*A[i])),a<c[i]&&a>f[i]?h[i][r]=Math.floor(s*g*Math.pow(l,1/p[i]))+x:a>=c[i]?h[i][r]=m:h[i][r]=x}else for(r=0;r<v;r++)for(i=0;i<d;i++)l=((a=h[i][r])-f[i])/w[i],s=1,p[i]>1&&(s-=Math.pow(1/g,l*A[i])),a<c[i]&&a>f[i]?h[i][r]=Math.floor(s*g*Math.pow(l,1/p[i]))+x:a>=c[i]?h[i][r]=m:h[i][r]=x;else if(null!=u){for(r=0;r<v;r++)if(u[r])for(i=0;i<d;i++)(a=h[i][r])<c[i]&&a>f[i]?h[i][r]=Math.floor((a-f[i])/w[i]*g)+x:a>=c[i]?h[i][r]=m:h[i][r]=x}else for(r=0;r<v;r++)for(i=0;i<d;i++)(a=h[i][r])<c[i]&&a>f[i]?h[i][r]=Math.floor((a-f[i])/w[i]*g)+x:a>=c[i]?h[i][r]=m:h[i][r]=x;return o.pixelType="u8",o.updateStatistics(),o}function p(t,e){if(!n(t))return null;var i,a,s=t.pixels,l=t.mask,o=t.width*t.height,h=s.length,u=e.lut,f=e.offset;u&&1===u[0].length&&(u=s.map((function(){return u})));var c,p,x,m=[];if(f)if(null==l)for(i=0;i<h;i++){for(c=s[i],p=u[i],x=new Uint8Array(o),a=0;a<o;a++)x[a]=p[c[a]-f];m.push(x)}else for(i=0;i<h;i++){for(c=s[i],p=u[i],x=new Uint8Array(o),a=0;a<o;a++)l[a]&&(x[a]=p[c[a]-f]);m.push(x)}else if(null==l)for(i=0;i<h;i++){for(c=s[i],p=u[i],x=new Uint8Array(o),a=0;a<o;a++)x[a]=p[c[a]];m.push(x)}else for(i=0;i<h;i++){for(c=s[i],p=u[i],x=new Uint8Array(o),a=0;a<o;a++)l[a]&&(x[a]=p[c[a]]);m.push(x)}var v=new r.a({width:t.width,height:t.height,pixels:m,mask:l,pixelType:"u8"});return v.updateStatistics(),v}function x(t,e){if(!n(t))return null;var i,r,a,s,l,o,h=t.clone(),u=h.pixels,f=h.width*h.height,c=e.length,p=Math.floor(c/2),x=e[Math.floor(p)],m=u[0],v=!1,d=new Uint8Array(f),g=new Uint8Array(f),y=new Uint8Array(f),w=h.mask,k=4===e[0].mappedColor.length;for(w||((w=new Uint8Array(f)).fill(k?255:1),h.mask=w),l=0;l<f;l++)if(w[l]){for(i=m[l],v=!1,o=p,r=x,a=0,s=c-1;s-a>1;){if(i===r.value){v=!0;break}i>r.value?a=o:s=o,o=Math.floor((a+s)/2),r=e[Math.floor(o)]}v||(i===e[a].value?(r=e[a],v=!0):i===e[s].value?(r=e[s],v=!0):i<e[a].value?(v=!1,r=null):i>e[a].value&&(i<e[s].value?(r=e[a],v=!0):s===c-1?(v=!1,r=null):(r=e[s],v=!0))),v?(d[l]=r.mappedColor[0],g[l]=r.mappedColor[1],y[l]=r.mappedColor[2],w[l]=r.mappedColor[3]):d[l]=g[l]=y[l]=w[l]=0}return h.pixels=[d,g,y],h.mask=w,h.pixelType="u8",h.maskIsAlpha=k,h}function m(t,e){if(!t||0===t.length)return null;var i=t.filter((function(t){return t.pixelBlock}))[0];if(!i)return null;var r=(i.extent.xmax-i.extent.xmin)/i.pixelBlock.width,n=(i.extent.ymax-i.extent.ymin)/i.pixelBlock.height,a=.01*Math.min(r,n),s=t.sort((function(t,e){return Math.abs(t.extent.ymax-e.extent.ymax)>a?e.extent.ymax-t.extent.ymax:Math.abs(t.extent.xmin-e.extent.xmin)>a?t.extent.xmin-e.extent.xmin:0})),l=Math.min.apply(null,s.map((function(t){return t.extent.xmin}))),o=Math.min.apply(null,s.map((function(t){return t.extent.ymin}))),h=Math.max.apply(null,s.map((function(t){return t.extent.xmax}))),u=Math.max.apply(null,s.map((function(t){return t.extent.ymax}))),f={x:Math.round((e.xmin-l)/r),y:Math.round((u-e.ymax)/n)},c={width:Math.round((h-l)/r),height:Math.round((u-o)/n)},p={width:Math.round((e.xmax-e.xmin)/r),height:Math.round((e.ymax-e.ymin)/n)};return Math.round(c.width/i.pixelBlock.width)*Math.round(c.height/i.pixelBlock.height)!==s.length||f.x<0||f.y<0||c.width<p.width||c.height<p.height?null:{extent:e,pixelBlock:d(s.map((function(t){return t.pixelBlock})),c,f,p)}}function v(t,e,i,r,n,a){var s=i.block,l=s.width,o=s.height,h=i.offset,u=h.x,f=h.y,c=i.mosaic,p=c.width,x=function(t,e,i,r,n,a,s,l){return{xmin:n<=i*t?0:n<i*t+t?n-i*t:t,ymin:a<=r*e?0:a<r*e+e?a-r*e:e,xmax:n+s<=i*t?0:n+s<i*t+t?n+s-i*t:t,ymax:a+l<=r*e?0:a+l<r*e+e?a+l-r*e:e}}(l,o,r,n,u,f,p,c.height),m=0,v=0;if(a){var d=a.hasGCSSShiftTransform?360:a.halfWorldWidth,g=l*a.resolutionX,y=a.startX+r*g;y<d&&y+g>d?v=a.rightPadding:y>=d&&(m=a.leftMargin-a.rightPadding,v=0)}if(x.xmax-=v,"number"!=typeof e)for(var w=x.ymin;w<x.ymax;w++)for(var k=(n*o+w-f)*p+(r*l-u)+m,A=w*l,b=x.xmin;b<x.xmax;b++)t[k+b]=e[A+b];else for(var M=x.ymin;M<x.ymax;M++)for(var U=(n*o+M-f)*p+(r*l-u)+m,j=x.xmin;j<x.xmax;j++)t[U+j]=e}function d(t,e,i,a,s){var l=t.filter((function(t){return n(t)}))[0];if(null==l)return null;for(var o,h,u=a?a.width:e.width,f=a?a.height:e.height,c=l.width,p=l.height,x=e.width/c,m=e.height/p,d={offset:i||{x:0,y:0},mosaic:a||e,block:{width:c,height:p}},g=l.pixelType,y=r.a.getPixelArrayConstructor(g),w=l.pixels.length,k=[],A=0;A<w;A++){o=new y(u*f);for(var b=0;b<m;b++)for(var M=0;M<x;M++){var U=t[b*x+M];n(U)&&v(o,U.pixels[A],d,M,b,s)}k.push(o)}if(t.some((function(t){return null==t||t.mask&&t.mask.length>0}))){h=new Uint8Array(u*f);for(var j=0;j<m;j++)for(var B=0;B<x;B++){var O=t[j*x+B];v(h,(O?O.mask:null)||(O?1:0),d,B,j,s)}}var T=new r.a({width:u,height:f,pixels:k,pixelType:g,mask:h});return T.updateStatistics(),T}function g(t,e,i){if(!n(t))return null;var r=t.width,a=t.height,s=e.x,l=e.y,o=i.width+s,h=i.height+l;if(s<0||l<0||o>r||h>a)return t;if(0===s&&0===l&&o===r&&h===a)return t;t.mask||(t.mask=new Uint8Array(r*a));for(var u=t.mask,f=0;f<a;f++)for(var c=f*r,p=0;p<r;p++)u[c+p]=f<l||f>=h||p<s||p>=o?0:1;return t.updateStatistics(),t}function y(t){if(!n(t))return null;for(var e=t.clone(),i=t.width,r=t.height,a=t.pixels,s=t.mask,l=a[0],o=e.pixels[0],h=2;h<r-1;h++){for(var u=new Map,f=h-2;f<h+2;f++)for(var c=0;c<4;c++){var p=f*i+c;A(u,l[p],s?s[p]:1)}o[h*i]=w(u),o[h*i+1]=o[h*i+2]=o[h*i];for(var x=3;x<i-1;x++){var m=(h-2)*i+x+1;A(u,l[m],s?s[m]:1),A(u,l[m=(h-1)*i+x+1],s?s[m]:1),A(u,l[m=h*i+x+1],s?s[m]:1),A(u,l[m=(h+1)*i+x+1],s?s[m]:1),k(u,l[m=(h-2)*i+x-3],s?s[m]:1),k(u,l[m=(h-1)*i+x-3],s?s[m]:1),k(u,l[m=h*i+x-3],s?s[m]:1),k(u,l[m=(h+1)*i+x-3],s?s[m]:1),o[h*i+x]=w(u)}o[h*i+x+1]=o[h*i+x]}for(var v=0;v<i;v++)o[v]=o[i+v]=o[2*i+v],o[(r-1)*i+v]=o[(r-2)*i+v];return e.updateStatistics(),e}function w(t){if(0===t.size)return 0;for(var e=0,i=-1,r=0,n=t.keys(),a=n.next();!a.done;)(r=t.get(a.value))>e&&(i=a.value,e=r),a=n.next();return i}function k(t,e,i){if(0!==i){var r=t.get(e);1===r?t.delete(e):t.set(e,r-1)}}function A(t,e,i){0!==i&&t.set(e,t.has(e)?t.get(e)+1:1)}function b(t,e,i){var a=e.x,s=e.y,l=i.width,o=i.height;if(0===a&&0===s&&o===t.height&&l===t.width)return t;var h=t.width,u=t.height,f=Math.max(0,s),c=Math.max(0,a),p=Math.min(a+l,h),x=Math.min(s+o,u);if(p<0||x<0||!n(t))return null;a=Math.max(0,-a),s=Math.max(0,-s);for(var m=t.pixels,v=t.mask,d=l*o,g=m.length,y=[],w=0;w<g;w++){for(var k=m[w],A=r.a.createEmptyBand(t.pixelType,d),b=f;b<x;b++)for(var M=b*h,U=(b+s-f)*l+a,j=c;j<p;j++)A[U++]=k[M+j];y.push(A)}for(var B=new Uint8Array(d),O=f;O<x;O++)for(var T=O*h,C=(O+s-f)*l+a,P=c;P<p;P++)B[C++]=v?v[T+P]:1;var S=new r.a({width:i.width,height:i.height,pixelType:t.pixelType,pixels:y,mask:B});return S.updateStatistics(),S}function M(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!n(t))return null;for(var i=t.pixels,a=t.width,s=t.height,l=t.mask,o=t.pixelType,h=[],u=Math.round(a/2),f=Math.round(s/2),c=s-1,p=a-1,x=0;x<i.length;x++){for(var m=i[x],v=r.a.createEmptyBand(o,u*f),d=0,g=0;g<s;g+=2)for(var y=0;y<a;y+=2){var w=m[g*a+y];if(e){var k=y===p?w:m[g*a+y+1],A=g===c?w:m[g*a+y+a],b=y===p?A:g===c?k:m[g*a+y+a+1];v[d++]=(w+k+A+b)/4}else v[d++]=w}h.push(v)}var M=null;if(l){M=new Uint8Array(u*f);for(var U=0,j=0;j<s;j+=2)for(var B=0;B<a;B+=2){var O=l[j*a+B];if(e){var T=B===p?O:l[j*a+B+1],C=j===c?O:l[j*a+B+a],P=B===p?C:j===c?T:l[j*a+B+a+1];M[U++]=O*T*C*P?1:0}else M[U++]=O}}return new r.a({width:u,height:f,pixelType:o,pixels:h,mask:M})}function U(t,e,i){if(!n(t))return null;for(var r=e.width,a=e.height,s=t.width,l=t.height,o=new Map,h={x:0,y:0},u=null==i?1:1+i,f=t,c=0;c<u;c++){for(var p=Math.ceil(s/r),x=Math.ceil(l/a),m=0;m<x;m++){h.y=m*a;for(var v=0;v<p;v++){h.x=v*r;var d=b(f,h,e);o.set("".concat(c,"/").concat(m,"/").concat(v),d)}}c<u-1&&(f=M(f)),s=Math.round(s/2),l=Math.round(l/2)}return o}function j(t,e,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"nearest";if(!n(t))return null;"majority"===s&&(t=y(t));for(var l,o,h,u,f,c,p,x=t,m=x.pixels,v=x.mask,d=x.pixelType,g=t.width,w=t.height,k=r.a.getPixelArrayConstructor(d),A=m.length,b=e.width,M=e.height,U=a.cols,j=a.rows,B=Math.ceil(b/U),O=Math.ceil(M/j),T=!1,C=0;C<i.length;C+=3)-1===i[C]&&-1===i[C+1]&&-1===i[C+2]&&(T=!0);for(var P,S,F=new Float32Array(b*M),G=new Float32Array(b*M),I=0,R="majority"===s?0:.5,V=0;V<O;V++)for(var _=0;_<B;_++){o=i[l=12*(V*B+_)],h=i[l+1],u=i[l+2],f=i[l+3],c=i[l+4],p=i[l+5];for(var E=0;E<j;E++){I=(V*j+E)*b+_*U,S=(E+.5)/j;for(var z=0;z<E;z++)P=(z+.5)/U,F[I+z]=Math.round((o*P+h*S+u)*g-R),G[I+z]=Math.round((f*P+c*S+p)*w-R)}o=i[l+=6],h=i[l+1],u=i[l+2],f=i[l+3],c=i[l+4],p=i[l+5];for(var D=0;D<j;D++){I=(V*j+D)*b+_*U,S=(D+.5)/j;for(var L=D;L<U;L++)P=(L+.5)/U,F[I+L]=Math.round((o*P+h*S+u)*g-R),G[I+L]=Math.round((f*P+c*S+p)*w-R)}}for(var N,X=function(t,e){for(var i=0;i<M;i++){l=i*b;for(var r=0;r<b;r++)F[l]<0||G[l]<0?t[l]=0:t[l]=e[F[l]+G[l]*g],l++}},q=[],J=0;J<A;J++)X(N=new k(b*M),m[J]),q.push(N);var W=new r.a({width:b,height:M,pixelType:d,pixels:q});if(v)W.mask=new Uint8Array(b*M),X(W.mask,v);else if(T){W.mask=new Uint8Array(b*M);for(var H=0;H<b*M;H++)W.mask[H]=F[H]<0||G[H]<0?0:1}return W.updateStatistics(),W}}}]);
//# sourceMappingURL=10.91554166.chunk.js.map