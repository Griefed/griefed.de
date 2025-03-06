(()=>{"use strict";var e={5209:(e,t,r)=>{r(5363),r(71);var o=r(8880),n=r(9592),a=r(3673);const i=(0,a._)("a",{hidden:"",rel:"me",href:"https://mastodon.griefed.de/@griefed"},"Mastodon",-1);function l(e,t,r,o,n,l){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a.Wm)(s)],64)}const s=(0,a.aZ)({name:"App"});var d=r(4260);const c=(0,d.Z)(s,[["render",l]]),u=c;var p=r(3340),f=r(9582);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(581)]).then(r.bind(r,8581)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(503)]).then(r.bind(r,2503))},{path:"/minecraft",component:()=>Promise.all([r.e(736),r.e(415)]).then(r.bind(r,5415))},{path:"/about",component:()=>Promise.all([r.e(736),r.e(359)]).then(r.bind(r,359))},{path:"/privacy",component:()=>Promise.all([r.e(736),r.e(65)]).then(r.bind(r,4065))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(581)]).then(r.bind(r,8581)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(859)]).then(r.bind(r,7859))}]}],m=h,v=(0,p.BC)((function(){const e=f.r5,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return t}));async function g(e,t){const r="function"===typeof v?await v({}):v,o=e(u);return o.use(n.Z,t),{app:o,router:r}}var b=r(5448),y=r(4434),w=r(8416);const P={config:{},iconSet:b.Z,plugins:{Notify:y.Z,AppFullscreen:w.Z}},O="";async function k({app:e,router:t},r){let o=!1;const n=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},a=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let s=0;!1===o&&s<r.length;s++)try{await r[s]({app:e,router:t,ssrContext:null,redirect:a,urlPath:i,publicPath:O})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(t),e.mount("#q-app"))}g(o.ri,P).then((e=>Promise.all([Promise.resolve().then(r.bind(r,5474)),Promise.resolve().then(r.bind(r,4883))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));k(e,r)}))))},5474:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i,api:()=>a});var o=r(3340),n=r(6622);const a=n.Z.create({baseURL:"https://fleet.griefed.de/api/v1/images"}),i=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=n.Z,e.config.globalProperties.$api=a}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,n,a]=e[c],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{65:"cdfeac81",359:"b88b4808",415:"a4046693",503:"a3880e5d",581:"f3d027f6",859:"ac2d5b40"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{65:"d23b8e66",143:"31d6cfe0",359:"7ae0c975",415:"a8d3aed4",503:"9645b513",581:"01f223cb",736:"7035e987",859:"971a8b44"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="griefed_de:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,s;if(void 0!==a)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+a){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[n];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,n.parentNode.removeChild(n),o(s)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),l=r.p+i;if(t(i,l))return n();e(o,l,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={65:1,359:1,415:1,503:1,581:1,859:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),l=new Error,s=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,l,s]=o,d=0;if(i.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(s)var c=s(r)}for(t&&t(o);d<i.length;d++)a=i[d],r.o(e,a)&&e[a]&&e[a][0](),e[i[d]]=0;return r.O(c)},o=globalThis["webpackChunkgriefed_de"]=globalThis["webpackChunkgriefed_de"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(5209)));o=r.O(o)})();