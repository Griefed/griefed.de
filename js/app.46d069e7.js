(()=>{"use strict";var e={2318:(e,t,r)=>{r(5363),r(71);var o=r(8880),n=r(9592),a=r(3673);function i(e,t,r,o,n,i){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(l)}const l=(0,a.aZ)({name:"App"});var c=r(4260);const s=(0,c.Z)(l,[["render",i]]),d=s;var u=r(3340),p=r(9582);const f=[{path:"/",component:()=>Promise.all([r.e(736),r.e(718)]).then(r.bind(r,2718)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(318)]).then(r.bind(r,9318))},{path:"/minecraft",component:()=>Promise.all([r.e(736),r.e(415)]).then(r.bind(r,5415))},{path:"/about",component:()=>Promise.all([r.e(736),r.e(218)]).then(r.bind(r,2218))},{path:"/privacy",component:()=>Promise.all([r.e(736),r.e(65)]).then(r.bind(r,4065))},{path:"/serverpackcreator",component:()=>Promise.all([r.e(736),r.e(989)]).then(r.bind(r,7989))},{path:"/serverpackcreatornew",component:()=>Promise.all([r.e(736),r.e(333)]).then(r.bind(r,3333))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(718)]).then(r.bind(r,2718)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(859)]).then(r.bind(r,7859))}]}],h=f,v=(0,u.BC)((function(){const e=p.r5,t=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("")});return t}));async function b(e,t){const r="function"===typeof v?await v({}):v,o=e(d);return o.use(n.Z,t),{app:o,router:r}}var m=r(5448),g=r(4434),y=r(8416);const w={config:{},iconSet:m.Z,plugins:{Notify:g.Z,AppFullscreen:y.Z}},P="";async function O({app:e,router:t},r){let o=!1;const n=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},a=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let c=0;!1===o&&c<r.length;c++)try{await r[c]({app:e,router:t,ssrContext:null,redirect:a,urlPath:i,publicPath:P})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(t),e.mount("#q-app"))}b(o.ri,w).then((e=>Promise.all([Promise.resolve().then(r.bind(r,5474)),Promise.resolve().then(r.bind(r,3736))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));O(e,r)}))))},5474:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l,api:()=>i});var o=r(3340),n=r(52),a=r.n(n);const i=a().create({baseURL:"https://fleet.griefed.de/api/v1/images"}),l=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,n,a]=e[d],l=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[c])))?o.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"===typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"===typeof o.then)return o}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&n&&o;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>o[e]));return i["default"]=()=>o,r.d(a,i),a}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{65:"8b469049",218:"cc07377c",318:"d967615e",333:"b4dbb66e",415:"86b5fa14",718:"d6d2576f",859:"13dbfa82",989:"72c0f3a0"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{65:"d23b8e66",143:"31d6cfe0",218:"a2582caa",318:"9645b513",333:"434259c4",415:"a8d3aed4",718:"01f223cb",736:"faa08cb8",859:"971a8b44",989:"09f2d97a"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="griefed_de:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+a){l=u;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[n];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),c&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=l,n.parentNode.removeChild(n),o(c)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),l=r.p+i;if(t(i,l))return n();e(o,l,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={65:1,218:1,318:1,333:1,415:1,718:1,859:1,989:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),l=new Error,c=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};r.l(i,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,l,c]=o,s=0;if(i.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(c)var d=c(r)}for(t&&t(o);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[i[s]]=0;return r.O(d)},o=globalThis["webpackChunkgriefed_de"]=globalThis["webpackChunkgriefed_de"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(2318)));o=r.O(o)})();