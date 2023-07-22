import{r as E,a as qe,_ as Ee,s as nt,b as rt,c as ot,d as st,P as it,L as ct,e as at,f as lt,g as ut,h as me,i as he,j as d,m as B,B as R,R as dt}from"./index-8eb29c82.js";import{a as de,M as ft}from"./animation-986fa355.js";import{C as pt,F as mt}from"./CallToAction-d04e27be.js";import{B as ie}from"./Button-dc920315.js";function We(){var e=E.useRef(!1);return qe(function(){return e.current=!0,function(){e.current=!1}},[]),e}function ht(){var e=We(),t=Ee(E.useState(0),2),n=t[0],o=t[1],i=E.useCallback(function(){e.current&&o(n+1)},[n]),r=E.useCallback(function(){return nt.postRender(i)},[i]);return[r,n]}var Ce=function(e){var t=e.children,n=e.initial,o=e.isPresent,i=e.onExitComplete,r=e.custom,c=e.presenceAffectsLayout,s=rt(gt),a=ot(),u=E.useMemo(function(){return{id:a,initial:n,isPresent:o,custom:r,onExitComplete:function(f){var l,p;s.set(f,!0);try{for(var x=st(s.values()),h=x.next();!h.done;h=x.next()){var b=h.value;if(!b)return}}catch(S){l={error:S}}finally{try{h&&!h.done&&(p=x.return)&&p.call(x)}finally{if(l)throw l.error}}i==null||i()},register:function(f){return s.set(f,!1),function(){return s.delete(f)}}}},c?void 0:[o]);return E.useMemo(function(){s.forEach(function(f,l){return s.set(l,!1)})},[o]),E.useEffect(function(){!o&&!s.size&&(i==null||i())},[o]),E.createElement(it.Provider,{value:u},t)};function gt(){return new Map}var ce=function(e){return e.key||""};function xt(e,t){e.forEach(function(n){var o=ce(n);t.set(o,n)})}function vt(e){var t=[];return E.Children.forEach(e,function(n){E.isValidElement(n)&&t.push(n)}),t}var bt=function(e){var t=e.children,n=e.custom,o=e.initial,i=o===void 0?!0:o,r=e.onExitComplete,c=e.exitBeforeEnter,s=e.presenceAffectsLayout,a=s===void 0?!0:s,u=Ee(ht(),1),f=u[0],l=E.useContext(ct).forceRender;l&&(f=l);var p=We(),x=vt(t),h=x,b=new Set,S=E.useRef(h),y=E.useRef(new Map).current,v=E.useRef(!0);if(qe(function(){v.current=!1,xt(x,y),S.current=h}),at(function(){v.current=!0,y.clear(),b.clear()}),v.current)return E.createElement(E.Fragment,null,h.map(function(w){return E.createElement(Ce,{key:ce(w),isPresent:!0,initial:i?void 0:!1,presenceAffectsLayout:a},w)}));h=lt([],Ee(h),!1);for(var m=S.current.map(ce),I=x.map(ce),g=m.length,C=0;C<g;C++){var k=m[C];I.indexOf(k)===-1&&b.add(k)}return c&&b.size&&(h=[]),b.forEach(function(w){if(I.indexOf(w)===-1){var M=y.get(w);if(M){var F=m.indexOf(w),H=function(){y.delete(w),b.delete(w);var z=S.current.findIndex(function($){return $.key===w});if(S.current.splice(z,1),!b.size){if(S.current=x,p.current===!1)return;f(),r&&r()}};h.splice(F,0,E.createElement(Ce,{key:ce(M),isPresent:!1,onExitComplete:H,custom:n,presenceAffectsLayout:a},M))}}}),h=h.map(function(w){var M=w.key;return b.has(M)?w:E.createElement(Ce,{key:ce(w),isPresent:!0,presenceAffectsLayout:a},w)}),ut!=="production"&&c&&h.length>1&&console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."),E.createElement(E.Fragment,null,b.size?h:h.map(function(w){return E.cloneElement(w)}))},Te={},yt=he;Object.defineProperty(Te,"__esModule",{value:!0});var ve=Te.default=void 0,jt=yt(me()),St=d,wt=(0,jt.default)((0,St.jsx)("path",{d:"M9.68 13.69 12 11.93l2.31 1.76-.88-2.85L15.75 9h-2.84L12 6.19 11.09 9H8.25l2.31 1.84-.88 2.85zM20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.03.76 3.87 2 5.28V23l6-2 6 2v-7.72c1.24-1.41 2-3.25 2-5.28zm-8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"}),"WorkspacePremium");ve=Te.default=wt;var Ae={},Ct=he;Object.defineProperty(Ae,"__esModule",{value:!0});var Ye=Ae.default=void 0,Et=Ct(me()),It=d,kt=(0,Et.default)((0,It.jsx)("path",{d:"M9 4v1.38c-.83-.33-1.72-.5-2.61-.5-1.79 0-3.58.68-4.95 2.05l3.33 3.33h1.11v1.11c.86.86 1.98 1.31 3.11 1.36V15H6v3c0 1.1.9 2 2 2h10c1.66 0 3-1.34 3-3V4H9zm-1.11 6.41V8.26H5.61L4.57 7.22a5.07 5.07 0 0 1 1.82-.34c1.34 0 2.59.52 3.54 1.46l1.41 1.41-.2.2c-.51.51-1.19.8-1.92.8-.47 0-.93-.12-1.33-.34zM19 17c0 .55-.45 1-1 1s-1-.45-1-1v-2h-6v-2.59c.57-.23 1.1-.57 1.56-1.03l.2-.2L15.59 14H17v-1.41l-6-5.97V6h8v11z"}),"HistoryEdu");Ye=Ae.default=kt;var Le={},Tt=he;Object.defineProperty(Le,"__esModule",{value:!0});var Ie=Le.default=void 0,At=Tt(me()),ze=d,Lt=(0,At.default)([(0,ze.jsx)("circle",{cx:"12",cy:"12",r:"3.2"},"0"),(0,ze.jsx)("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"},"1")],"PhotoCamera");Ie=Le.default=Lt;function Mt(e){return Object.prototype.toString.call(e)==="[object Object]"}function $e(e){return Mt(e)||Array.isArray(e)}function Dt(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Me(e,t){const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;const i=JSON.stringify(Object.keys(e.breakpoints||{})),r=JSON.stringify(Object.keys(t.breakpoints||{}));return i!==r?!1:n.every(c=>{const s=e[c],a=t[c];return typeof s=="function"?`${s}`==`${a}`:!$e(s)||!$e(a)?s===a:Me(s,a)})}function Ve(e){return e.concat().sort((t,n)=>t.name>n.name?1:-1).map(t=>t.options)}function Pt(e,t){if(e.length!==t.length)return!1;const n=Ve(e),o=Ve(t);return n.every((i,r)=>{const c=o[r];return Me(i,c)})}function De(e){return typeof e=="number"}function Ge(e){return typeof e=="string"}function Pe(e){return typeof e=="boolean"}function Ue(e){return Object.prototype.toString.call(e)==="[object Object]"}function D(e){return Math.abs(e)}function _e(e){return Math.sign(e)}function be(e,t){return D(e-t)}function _t(e,t){if(e===0||t===0||D(e)<=D(t))return 0;const n=be(D(e),D(t));return D(n/e)}function fe(e){return ye(e).map(Number)}function J(e){return e[je(e)]}function je(e){return Math.max(0,e.length-1)}function ye(e){return Object.keys(e)}function Ke(e,t){return[e,t].reduce((n,o)=>(ye(o).forEach(i=>{const r=n[i],c=o[i],s=Ue(r)&&Ue(c);n[i]=s?Ke(r,c):c}),n),{})}function Xe(e,t){return typeof t.MouseEvent<"u"&&e instanceof t.MouseEvent}function Ot(e,t){const n={start:o,center:i,end:r};function o(){return 0}function i(u){return r(u)/2}function r(u){return t-u}function c(){return t*Number(e)}function s(u){return De(e)?c():n[e](u)}return{measure:s}}function Ft(e,t){const n=e==="y"?"y":"x",o=e==="y"?"x":"y",i=s(),r=a();function c(f){const{width:l,height:p}=f;return n==="x"?l:p}function s(){return n==="y"?"top":t==="rtl"?"right":"left"}function a(){return n==="y"?"bottom":t==="rtl"?"left":"right"}return{scroll:n,cross:o,startEdge:i,endEdge:r,measureSize:c}}function ee(e,t){const n=D(e-t);function o(u){return u<e}function i(u){return u>t}function r(u){return o(u)||i(u)}function c(u){return r(u)?o(u)?e:t:u}function s(u){return n?u-n*Math.ceil((u-t)/n):u}return{length:n,max:t,min:e,constrain:c,reachedAny:r,reachedMax:i,reachedMin:o,removeOffset:s}}function Qe(e,t,n){const{constrain:o}=ee(0,e),i=e+1;let r=c(t);function c(p){return n?D((i+p)%i):o(p)}function s(){return r}function a(p){return r=c(p),l}function u(p){return f().set(s()+p)}function f(){return Qe(e,s(),n)}const l={get:s,set:a,add:u,clone:f};return l}function Bt(e){const t=e==="rtl"?-1:1;function n(i){return i*t}return{apply:n}}function pe(){let e=[];function t(i,r,c,s={passive:!0}){return i.addEventListener(r,c,s),e.push(()=>i.removeEventListener(r,c,s)),o}function n(){e=e.filter(i=>i())}const o={add:t,clear:n};return o}function Rt(e,t,n,o,i,r,c,s,a,u,f,l,p,x,h,b,S,y,v){const{cross:m}=e,I=["INPUT","SELECT","TEXTAREA"],g={passive:!1},C=pe(),k=pe(),w=ee(50,225).constrain(h.measure(20)),M={mouse:300,touch:400},F={mouse:500,touch:600},H=b?43:25;let z=!1,$=0,V=0,G=!1,U=!1,q=!1,_=!1;function le(j,T){if(!T)return;function L(P){(Pe(T)||T(j,P))&&ue(P)}const A=n;C.add(A,"dragstart",P=>P.preventDefault(),g).add(A,"touchmove",()=>{},g).add(A,"touchend",()=>{}).add(A,"touchstart",L).add(A,"mousedown",L).add(A,"touchcancel",N).add(A,"contextmenu",N).add(A,"click",re,!0)}function W(){C.clear(),k.clear()}function Y(){const j=_?o:n;k.add(j,"touchmove",ne,g).add(j,"touchend",N).add(j,"mousemove",ne,g).add(j,"mouseup",N)}function X(j){const T=j.nodeName||"";return I.includes(T)}function te(){return(b?F:M)[_?"mouse":"touch"]}function Z(j,T){const L=p.add(_e(j)*-1),A=l.byDistance(j,!b).distance;return b||D(j)<w?A:y&&T?A*.5:l.byIndex(L.get(),0).distance}function ue(j){const T=Xe(j,i);_=T,!(T&&j.button!==0)&&(X(j.target)||(q=b&&T&&!j.buttons&&z,z=be(r.get(),s.get())>=2,G=!0,c.pointerDown(j),f.useFriction(0).useDuration(0),r.set(s),Y(),$=c.readPoint(j),V=c.readPoint(j,m),x.emit("pointerDown")))}function ne(j){const T=c.readPoint(j),L=c.readPoint(j,m),A=be(T,$),P=be(L,V);if(!U&&!_&&(!j.cancelable||(U=A>P,!U)))return N(j);const O=c.pointerMove(j);A>S&&(q=!0),f.useFriction(.3).useDuration(1),a.start(),r.add(t.apply(O)),j.preventDefault()}function N(j){const L=l.byDistance(0,!1).index!==p.get(),A=c.pointerUp(j)*te(),P=Z(t.apply(A),L),O=_t(A,P),Q=H-10*O,se=v+O/50;U=!1,G=!1,k.clear(),f.useDuration(Q).useFriction(se),u.distance(P,!b),_=!1,x.emit("pointerUp")}function re(j){q&&(j.stopPropagation(),j.preventDefault())}function oe(){return G}return{init:le,pointerDown:oe,destroy:W}}function Ht(e,t){let o,i;function r(l){return l.timeStamp}function c(l,p){const h=`client${(p||e.scroll)==="x"?"X":"Y"}`;return(Xe(l,t)?l:l.touches[0])[h]}function s(l){return o=l,i=l,c(l)}function a(l){const p=c(l)-c(i),x=r(l)-r(o)>170;return i=l,x&&(o=l),p}function u(l){if(!o||!i)return 0;const p=c(i)-c(o),x=r(l)-r(o),h=r(l)-r(i)>170,b=p/x;return x&&!h&&D(b)>.1?b:0}return{pointerDown:s,pointerMove:a,pointerUp:u,readPoint:c}}function Nt(e){function t(o){return e*(o/100)}return{measure:t}}function zt(e,t,n,o,i){let r,c,s=[],a=!1;function u(x){return i.measureSize(x.getBoundingClientRect())}function f(x,h){if(!h)return;c=u(e),s=o.map(u);function b(y){for(const v of y){const m=v.target===e,I=o.indexOf(v.target),g=m?c:s[I],C=u(m?e:o[I]);if(g!==C){n.requestAnimationFrame(()=>{x.reInit(),t.emit("resize")});break}}}r=new ResizeObserver(y=>{a||(Pe(h)||h(x,y))&&b(y)}),[e].concat(o).forEach(y=>r.observe(y))}function l(){r&&r.disconnect(),a=!0}return{init:f,destroy:l}}function $t(e,t,n,o){let i=!0,r=0,c=0,s=n,a=o;function u(){const v=t.get()-e.get();return!a||!s?(r=0,e.set(t)):(r+=v/s,r*=a,e.add(r)),c=_e(r||v),i=D(v)<.001,y}function f(){return i&&e.set(t),i}function l(){return r}function p(){return c}function x(){return b(n)}function h(){return S(o)}function b(v){return s=v,y}function S(v){return a=v,y}const y={direction:p,seek:u,settled:f,useBaseFriction:h,useBaseDuration:x,useFriction:S,useDuration:b,velocity:l};return y}function Vt(e,t,n,o,i){const r=i.measure(10),c=i.measure(50),s=ee(.1,.99);let a=!1;function u(){return!(a||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function f(x){if(!u())return;const h=e.reachedMin(t.get())?"min":"max",b=D(e[h]-t.get()),S=n.get()-t.get(),y=s.constrain(b/c);n.subtract(S*y),!x&&D(S)<r&&(n.set(e.constrain(n.get())),o.useDuration(25).useBaseFriction())}function l(x){a=!x}return{constrain:f,toggleActive:l}}function Gt(e,t,n,o){const i=ee(-t+e,n[0]),r=a(),c=u();function s(){const l=r[0],p=J(r),x=r.lastIndexOf(l),h=r.indexOf(p)+1;return ee(x,h)}function a(){return n.map(i.constrain).map(l=>parseFloat(l.toFixed(3)))}function u(){if(t<=e)return[i.max];if(o==="keepSnaps")return r;const{min:l,max:p}=s();return r.slice(l,p)}return{snapsContained:c}}function Ut(e,t,n){const o=t[0],i=n?o-e:J(t);return{limit:ee(i,o)}}function qt(e,t,n,o){const r=t.min+.1,c=t.max+.1,{reachedMin:s,reachedMax:a}=ee(r,c);function u(p){return p===1?a(n.get()):p===-1?s(n.get()):!1}function f(p){if(!u(p))return;const x=e*(p*-1);o.forEach(h=>h.add(x))}return{loop:f}}function Wt(e){const{max:t,length:n}=e;function o(r){return(r-t)/-n}return{get:o}}function Yt(e,t,n,o,i,r,c){const{startEdge:s,endEdge:a}=e,{groupSlides:u}=r,f=x().map(t.measure),l=h(),p=b();function x(){return u(o).map(y=>J(y)[a]-y[0][s]).map(D)}function h(){return o.map(y=>n[s]-y[s]).map(y=>-D(y))}function b(){const v=J(l)-J(i);return u(l).map(m=>m[0]).map((m,I,g)=>{const C=!I,k=I===je(g);return c&&C?0:c&&k?v:m+f[I]})}return{snaps:l,snapsAligned:p}}function Kt(e,t,n,o,i){const{reachedAny:r,removeOffset:c,constrain:s}=o;function a(h){return h.concat().sort((b,S)=>D(b)-D(S))[0]}function u(h){const b=e?c(h):s(h),S=t.map(v=>v-b).map(v=>f(v,0)).map((v,m)=>({diff:v,index:m})).sort((v,m)=>D(v.diff)-D(m.diff)),{index:y}=S[0];return{index:y,distance:b}}function f(h,b){const S=[h,h+n,h-n];if(!e)return S[0];if(!b)return a(S);const y=S.filter(v=>_e(v)===b);return a(y)}function l(h,b){const S=t[h]-i.get(),y=f(S,b);return{index:h,distance:y}}function p(h,b){const S=i.get()+h,{index:y,distance:v}=u(S),m=!e&&r(S);if(!b||m)return{index:y,distance:h};const I=t[y]-v,g=h+f(I,0);return{index:y,distance:g}}return{byDistance:p,byIndex:l,shortcut:f}}function Xt(e,t,n,o,i,r){function c(f){const l=f.distance,p=f.index!==t.get();l&&(e.start(),i.add(l)),p&&(n.set(t.get()),t.set(f.index),r.emit("select"))}function s(f,l){const p=o.byDistance(f,l);c(p)}function a(f,l){const p=t.clone().set(f),x=o.byIndex(p.get(),l);c(x)}return{distance:s,index:a}}function ke(e){let t=e;function n(){return t}function o(a){t=c(a)}function i(a){t+=c(a)}function r(a){t-=c(a)}function c(a){return De(a)?a:a.get()}return{get:n,set:o,add:i,subtract:r}}function Je(e,t,n){const o=e.scroll==="x"?c:s,i=n.style;let r=!1;function c(p){return`translate3d(${p}px,0px,0px)`}function s(p){return`translate3d(0px,${p}px,0px)`}function a(p){r||(i.transform=o(t.apply(p)))}function u(p){r=!p}function f(){r||(i.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:f,to:a,toggleActive:u}}function Qt(e,t,n,o,i,r,c,s,a){const u=fe(i),f=fe(i).reverse(),l=b().concat(S());function p(g,C){return g.reduce((k,w)=>k-i[w],C)}function x(g,C){return g.reduce((k,w)=>p(k,C)>0?k.concat([w]):k,[])}function h(g,C){const k=C==="start",w=k?-o:o,M=c.findSlideBounds([w]);return g.map(F=>{const H=k?0:-o,z=k?o:0,V=M.filter(_=>_.index===F)[0][k?"end":"start"],G=ke(-1),U=Je(e,t,a[F]);return{index:F,location:G,translate:U,target:()=>s.get()>V?H:z}})}function b(){const g=r[0]-1,C=x(f,g);return h(C,"end")}function S(){const g=n-r[0]-1,C=x(u,g);return h(C,"start")}function y(){return l.every(({index:g})=>{const C=u.filter(k=>k!==g);return p(C,n)<=.1})}function v(){l.forEach(g=>{const{target:C,translate:k,location:w}=g,M=C();M!==w.get()&&(k.to(M),w.set(M))})}function m(){l.forEach(g=>g.translate.clear())}return{canLoop:y,clear:m,loop:v,loopPoints:l}}function Jt(e,t){let n,o=!1;function i(s,a){if(!a)return;function u(f){for(const l of f)if(l.type==="childList"){s.reInit(),t.emit("slidesChanged");break}}n=new MutationObserver(f=>{o||(Pe(a)||a(s,f))&&u(f)}),n.observe(e,{childList:!0})}function r(){n&&n.disconnect(),o=!0}return{init:i,destroy:r}}function Zt(e,t,n,o,i,r,c){const{removeOffset:s,constrain:a}=i,u=.5,f=r?[0,t,-t]:[0],l=x(f,c);function p(S){const y=S||0;return n.map(v=>ee(u,v-u).constrain(v*y))}function x(S,y){const v=S||f,m=p(y);return v.reduce((I,g)=>{const C=o.map((k,w)=>({start:k-n[w]+m[w]+g,end:k+e-m[w]+g,index:w}));return I.concat(C)},[])}function h(S,y){const v=r?s(S):a(S);return(y||l).reduce((I,g)=>{const{index:C,start:k,end:w}=g,M=I.includes(C),F=k<v&&w>v;return!M&&F?I.concat([C]):I},[])}return{check:h,findSlideBounds:x}}function en(e,t,n,o,i,r){const{measureSize:c,startEdge:s,endEdge:a}=e,u=n[0]&&i,f=h(),l=b(),p=n.map(c),x=S();function h(){if(!u)return 0;const v=n[0];return D(t[s]-v[s])}function b(){if(!u)return 0;const v=r.getComputedStyle(J(o));return parseFloat(v.getPropertyValue(`margin-${a}`))}function S(){return n.map((v,m,I)=>{const g=!m,C=m===je(I);return g?p[m]+f:C?p[m]+l:I[m+1][s]-v[s]}).map(D)}return{slideSizes:p,slideSizesWithGaps:x}}function tn(e,t,n){const o=De(n);function i(a,u){return fe(a).filter(f=>f%u===0).map(f=>a.slice(f,f+u))}function r(a){return fe(a).reduce((u,f)=>{const p=t.slice(J(u),f+1).reduce((x,h)=>x+h,0);return!f||p>e?u.concat(f):u},[]).map((u,f,l)=>a.slice(u,l[f+1]))}function c(a){return o?i(a,n):r(a)}return{groupSlides:c}}function nn(e,t,n,o,i,r,c,s){const{align:a,axis:u,direction:f,startIndex:l,inViewThreshold:p,loop:x,duration:h,dragFree:b,dragThreshold:S,slidesToScroll:y,skipSnaps:v,containScroll:m}=r,I=t.getBoundingClientRect(),g=n.map(Q=>Q.getBoundingClientRect()),C=Bt(f),k=Ft(u,f),w=k.measureSize(I),M=Nt(w),F=Ot(a,w),H=!x&&!!m,z=x||!!m,{slideSizes:$,slideSizesWithGaps:V}=en(k,I,g,n,z,i),G=tn(w,V,y),{snaps:U,snapsAligned:q}=Yt(k,F,I,g,V,G,H),_=-J(U)+J(V),{snapsContained:le}=Gt(w,_,q,m),W=H?le:q,{limit:Y}=Ut(_,W,x),X=Qe(je(W),l,x),te=X.clone(),Z=fe(n),ue=({dragHandler:Q,scrollBody:se,scrollBounds:Se,scrollLooper:we,slideLooper:ge,eventHandler:xe,animation:tt,options:{loop:Re}})=>{const He=Q.pointerDown();Re||Se.constrain(He);const Ne=se.seek().settled();Ne&&!He&&(tt.stop(),xe.emit("settle")),Ne||xe.emit("scroll"),Re&&(we.loop(se.direction()),ge.loop())},ne=({scrollBody:Q,translate:se,location:Se},we)=>{const ge=Q.velocity(),xe=Se.get()-ge+ge*we;se.to(xe)},N={update:()=>ue(O),render:Q=>ne(O,Q),start:()=>s.start(O),stop:()=>s.stop(O)},re=.68,oe=W[X.get()],K=ke(oe),j=ke(oe),T=$t(K,j,h,re),L=Kt(x,W,_,Y,j),A=Xt(N,X,te,L,j,c),P=Zt(w,_,$,U,Y,x,p),O={ownerDocument:o,ownerWindow:i,eventHandler:c,containerRect:I,slideRects:g,animation:N,axis:k,direction:C,dragHandler:Rt(k,C,e,o,i,j,Ht(k,i),K,N,A,T,L,X,c,M,b,S,v,re),eventStore:pe(),percentOfView:M,index:X,indexPrevious:te,limit:Y,location:K,options:r,resizeHandler:zt(t,c,i,n,k),scrollBody:T,scrollBounds:Vt(Y,K,j,T,M),scrollLooper:qt(_,Y,K,[K,j]),scrollProgress:Wt(Y),scrollSnaps:W,scrollTarget:L,scrollTo:A,slideLooper:Qt(k,C,w,_,V,W,P,K,n),slidesHandler:Jt(t,c),slidesInView:P,slideIndexes:Z,slidesToScroll:G,target:j,translate:Je(k,C,t)};return O}function rn(e){const t=16.666666666666668;let n=[],o=null,i=0,r=0;function c(l){o||(o=l);const p=l-o;for(o=l,i+=p;i>=t;)n.forEach(({animation:h})=>h.update()),i-=t;const x=D(i/t);n.forEach(({animation:h})=>h.render(x)),r&&e.requestAnimationFrame(c)}function s(l){n.includes(l)||n.push(l),!r&&(r=e.requestAnimationFrame(c))}function a(l){n=n.filter(p=>p!==l),!n.length&&(e.cancelAnimationFrame(r),o=null,i=0,r=0)}function u(){o=null,i=0}return{start:s,stop:a,reset:u,window:e}}function on(){const e={};let t;function n(a){t=a}function o(a){return e[a]||[]}function i(a){return o(a).forEach(u=>u(t,a)),s}function r(a,u){return e[a]=o(a).concat([u]),s}function c(a,u){return e[a]=o(a).filter(f=>f!==u),s}const s={init:n,emit:i,off:c,on:r};return s}const sn={align:"center",axis:"x",container:null,slides:null,containScroll:null,direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,dragThreshold:10,inViewThreshold:0,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function cn(e){function t(r,c){return Ke(r,c||{})}function n(r){const c=r.breakpoints||{},s=ye(c).filter(a=>e.matchMedia(a).matches).map(a=>c[a]).reduce((a,u)=>t(a,u),{});return t(r,s)}function o(r){return r.map(c=>ye(c.breakpoints||{})).reduce((c,s)=>c.concat(s),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:o}}function an(e){let t=[];function n(r,c){return t=r.filter(({options:s})=>e.optionsAtMedia(s).active!==!1),t.forEach(s=>s.init(c,e)),r.reduce((s,a)=>Object.assign(s,{[a.name]:a}),{})}function o(){t=t.filter(r=>r.destroy())}return{init:n,destroy:o}}function ae(e,t,n){const o=e.ownerDocument,i=o.defaultView,r=cn(i),c=an(r),s=pe(),a=pe(),u=on(),{animationRealms:f}=ae,{mergeOptions:l,optionsAtMedia:p,optionsMediaQueries:x}=r,{on:h,off:b,emit:S}=u,y=z;let v=!1,m,I=l(sn,ae.globalOptions),g=l(I),C=[],k,w,M;function F(){const{container:T,slides:L}=g;w=(Ge(T)?e.querySelector(T):T)||e.children[0];const P=Ge(L)?w.querySelectorAll(L):L;M=[].slice.call(P||w.children)}function H(T,L){if(v)return;const A=f.find(O=>O.window===i),P=A||rn(i);if(A||f.push(P),I=l(I,T),g=p(I),C=L||C,F(),m=nn(e,w,M,o,i,g,u,P),x([I,...C.map(({options:O})=>O)]).forEach(O=>s.add(O,"change",z)),!!g.active){if(m.translate.to(m.location.get()),m.eventHandler.init(j),m.resizeHandler.init(j,g.watchResize),m.slidesHandler.init(j,g.watchSlides),a.add(o,"visibilitychange",()=>{o.hidden&&P.reset()}),g.loop){if(!m.slideLooper.canLoop()){$(),H({loop:!1},L),I=l(I,{loop:!0});return}m.slideLooper.loop()}w.offsetParent&&M.length&&m.dragHandler.init(j,g.watchDrag),k=c.init(C,j)}}function z(T,L){const A=Z();$(),H(l({startIndex:A},T),L),u.emit("reInit")}function $(){m.dragHandler.destroy(),m.animation.stop(),m.eventStore.clear(),m.translate.clear(),m.slideLooper.clear(),m.resizeHandler.destroy(),m.slidesHandler.destroy(),c.destroy(),s.clear(),a.clear()}function V(){v||(v=!0,s.clear(),$(),u.emit("destroy"))}function G(T){const L=m[T?"target":"location"].get(),A=g.loop?"removeOffset":"constrain";return m.slidesInView.check(m.limit[A](L))}function U(T){const L=G(T);return m.slideIndexes.filter(A=>!L.includes(A))}function q(T,L,A){!g.active||v||(m.scrollBody.useBaseFriction().useDuration(L?0:g.duration),m.scrollTo.index(T,A||0))}function _(T){const L=m.index.add(1).get();q(L,T===!0,-1)}function le(T){const L=m.index.add(-1).get();q(L,T===!0,1)}function W(){return m.index.add(1).get()!==Z()}function Y(){return m.index.add(-1).get()!==Z()}function X(){return m.scrollSnaps.map(m.scrollProgress.get)}function te(){return m.scrollProgress.get(m.location.get())}function Z(){return m.index.get()}function ue(){return m.indexPrevious.get()}function ne(){return k}function N(){return m}function re(){return e}function oe(){return w}function K(){return M}const j={canScrollNext:W,canScrollPrev:Y,containerNode:oe,internalEngine:N,destroy:V,off:b,on:h,emit:S,plugins:ne,previousScrollSnap:ue,reInit:y,rootNode:re,scrollNext:_,scrollPrev:le,scrollProgress:te,scrollSnapList:X,scrollTo:q,selectedScrollSnap:Z,slideNodes:K,slidesInView:G,slidesNotInView:U};return H(t,n),setTimeout(()=>u.emit("init"),0),j}ae.animationRealms=[];ae.globalOptions=void 0;function Oe(e={},t=[]){const n=E.useRef(e),o=E.useRef(t),[i,r]=E.useState(),[c,s]=E.useState(),a=E.useCallback(()=>{i&&i.reInit(n.current,o.current)},[i]);return E.useEffect(()=>{if(Dt()&&c){ae.globalOptions=Oe.globalOptions;const u=ae(c,n.current,o.current);return r(u),()=>u.destroy()}else r(void 0)},[c,r]),E.useEffect(()=>{Me(n.current,e)||(n.current=e,a())},[e,a]),E.useEffect(()=>{Pt(o.current,t)||(o.current=t,a())},[t,a]),[s,i]}Oe.globalOptions=void 0;const ln=e=>{const{selected:t,onClick:n}=e;return d.jsx("button",{className:"embla__dot".concat(t?" embla__dot--selected":""),type:"button",onClick:n})};var Fe={},un=he;Object.defineProperty(Fe,"__esModule",{value:!0});var Ze=Fe.default=void 0,dn=un(me()),fn=d,pn=(0,dn.default)((0,fn.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");Ze=Fe.default=pn;var Be={},mn=he;Object.defineProperty(Be,"__esModule",{value:!0});var et=Be.default=void 0,hn=mn(me()),gn=d,xn=(0,hn.default)((0,gn.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");et=Be.default=xn;const vn={initial:e=>({translateY:e>0?"40%":"-120%",translateX:"-50%",opacity:0,transition:{translateY:{duration:.15},opacity:{duration:.15}}}),animate:{translateY:"-50%",translateX:"-50%",opacity:1,transition:{translateY:{duration:.15},opacity:{duration:.15}}},exit:e=>({translateY:e>0?"-120%":"40%",translateX:"-50%",opacity:0,transition:{translateY:{duration:.15},opacity:{duration:.15}}})},bn=({count:e,direction:t})=>d.jsx(bt,{initial:!1,custom:t,children:d.jsx(B.span,{style:{position:"absolute",transform:"translate(-50%, -50%)",zIndex:1,bottom:"-.75rem",right:"7.8rem"},variants:vn,animate:"animate",initial:"initial",exit:"exit",custom:t,children:e},e)}),yn=({index:e,imgArr:t,setModalImgSrc:n,handleOpenModal:o})=>{const[i,r]=E.useState(!1);return d.jsxs(R,{className:"embla__slide",children:[d.jsx("img",{className:"embla__slide__img",src:t[e].src,alt:"Your alt text",style:{cursor:"pointer"},onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{r(!1)},onClick:()=>{n(t[e].src),o()}}),d.jsx("div",{style:{width:0,position:"absolute",bottom:"1rem",left:"6vw",textShadow:"1px 1px black",color:"white"},children:d.jsx(B.div,{animate:i?{y:"-3px",opacity:"1"}:{y:"0",opacity:"0.8"},children:d.jsx(R,{component:"strong",className:"hover-underline-animation",onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{r(!1)},sx:{marginTop:"0.3rem",display:"inline-block",fontSize:"1.3rem",whiteSpace:"nowrap",textTransform:"uppercase",borderBottom:"3px solid",boxShadow:"0 2px 2px -2px gray",cursor:"pointer",transition:"color 0.3s ease"},onClick:()=>{n(t[e].src),o()},children:t[e].title})})})]},e)},jn=e=>{const{slides:t,options:n,imgArr:o,handleOpenModal:i,setModalImgSrc:r}=e,[c,s]=Oe(n),[,a]=E.useState(!1),[,u]=E.useState(!1),[f,l]=E.useState(0),[p,x]=E.useState([]),[h,b]=E.useState(0),S=E.useCallback(()=>s&&s.scrollPrev(),[s]),y=E.useCallback(()=>s&&s.scrollNext(),[s]),v=E.useCallback(g=>s&&s.scrollTo(g),[s]),m=E.useCallback(g=>{x(g.scrollSnapList())},[]),I=E.useCallback(g=>{l(g.selectedScrollSnap()),a(g.canScrollPrev()),u(g.canScrollNext())},[]);return E.useEffect(()=>{s&&(m(s),I(s),s.on("reInit",m),s.on("reInit",I),s.on("select",I))},[s,m,I]),d.jsxs("section",{className:"container__carousel embla-theme-light",children:[d.jsxs("div",{className:"embla",children:[d.jsx("div",{className:"embla__viewport",ref:c,children:d.jsx("div",{className:"embla__container",children:t.map(g=>d.jsx(yn,{index:g,imgArr:o,setModalImgSrc:r,handleOpenModal:i}))})}),d.jsxs(R,{sx:{display:"flex",gap:"2rem",justifyContent:"flex-end",marginTop:"0.5rem","@media (max-width: 500px)":{display:"none"}},children:[d.jsxs("h2",{style:{fontSize:"1.3rem",whiteSpace:"nowrap",textTransform:"uppercase",fontFamily:'"Clarkson",Helvetica,sans-serif'},children:[d.jsx(bn,{count:`0${f+1}`,direction:h}),d.jsx("span",{style:{color:"grey"},children:"/ 05"})]}),d.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[d.jsx(Ze,{onClick:()=>{S(),b(-1)},sx:{cursor:"pointer",stroke:"black",strokeWidth:".5"}}),d.jsx(et,{onClick:()=>{y(),b(1)},sx:{cursor:"pointer",stroke:"black",strokeWidth:".5"}})]})]})]}),d.jsx("div",{className:"embla__dots",children:p.map((g,C)=>d.jsx(ln,{selected:C===f,onClick:()=>v(C)},C))})]})},Sn=["html.webp","css.webp","javascript.webp","typescript.webp","react1.webp","nextjs.png","nodejs1.png","expressjs3.webp","Firebase1.webp","mongodb1.webp","postgreSQL.webp","materialui2.webp","jest.png","redux.webp","redux-saga.webp","sass.webp","tailwindcss.jpg","python.png","django-rest.png","electron.png"],wn=["docker.png","vite.jpg","jira.jpg","figma.png","slack.png","git1.png","AWS_S3.jpg","AWS_SES.jpg"],Cn=[{src:"/images/about-page/education/graduation1-arrow.webp",title:"Graduation"},{src:"/images/about-page/education/graduation2-arrow.webp",title:"Batch 2019"},{src:"/images/about-page/education/golden1.webp",title:"Golden Thesis"},{src:"/images/about-page/education/golden2.webp",title:"DLSU"},{src:"/images/about-page/education/golden3.webp",title:"Geomate Award"}],En={loop:!0},In=5,kn=Array.from(Array(In).keys()),Dn=()=>{const[e,t]=dt.useState(!1),n=()=>t(!0),o=()=>t(!1),[i,r]=E.useState("");return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"page-container padding-for-nav about-me-page",style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[d.jsxs(R,{sx:{maxWidth:"1500px",paddingTop:"8rem",display:"flex",flexDirection:"column",gap:"10rem","@media (max-width: 900px)":{paddingTop:"4rem",gap:"6rem"},"@media (max-width: 600px)":{paddingTop:"2rem",gap:"2rem"}},children:[d.jsxs("div",{className:"hero-section",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2rem"},children:[d.jsx(B.h5,{...de(!0,.3),children:"About Me"}),d.jsx(B.h1,{...de(!0,.4),children:d.jsx("b",{children:"My name is Ken Yokohama. I specialize in creating fast, user-friendly & secure websites following best practices."})}),d.jsx(B.h6,{...de(!0,.5),style:{fontWeight:"100",maxWidth:"800px"},children:"I make sure that systems and databases are secure as well as put a strong emphasis on UI/UX of the website"})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[d.jsx(B.h5,{...de(!0,.6),children:"Tech Stack"}),d.jsx(B.h2,{...de(!0,.7),style:{textAlign:"center",marginBottom:"3rem",marginTop:"1rem"},children:"Exploring My Technology Toolkit"}),d.jsx(R,{sx:{display:"grid",width:"100%",gridTemplateColumns:"1fr 1fr 1fr 1fr","@media (max-width: 900px)":{gridTemplateColumns:"1fr 1fr 1fr"},"@media (max-width: 550px)":{gridTemplateColumns:"1fr 1fr "}},children:Sn.map((c,s)=>d.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",aspectRatio:"2/1"},children:d.jsx("img",{style:{maxWidth:"80%",maxHeight:"80%"},src:"/images/about-page/technologies/"+c,alt:c})},s))})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[d.jsx("h5",{children:"Development"}),d.jsx(R,{component:"h2",sx:{textAlign:"center",marginBottom:"3rem",marginTop:"1rem"},children:"More Developer Tools I've Used"}),d.jsx(R,{sx:{display:"grid",width:"100%",gridTemplateColumns:"1fr 1fr 1fr 1fr","@media (max-width: 900px)":{gridTemplateColumns:"1fr 1fr 1fr"},"@media (max-width: 550px)":{gridTemplateColumns:"1fr 1fr "}},children:wn.map((c,s)=>d.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",aspectRatio:"2/1"},children:d.jsx("img",{style:{objectFit:"cover",width:"100%",maxWidth:"80%",maxHeight:"80%"},src:"/images/about-page/developer-tools/"+c,alt:c})},s))})]}),d.jsxs("div",{children:[d.jsx("h1",{children:d.jsx("b",{children:"Education"})}),d.jsxs("h2",{style:{color:"#6E6E73"},children:["Graduated from"," ",d.jsx("strong",{style:{color:"black"},children:"De La Salle University"})," ","batch 2014-2019"]}),d.jsx(R,{component:"h5",sx:{paddingLeft:"2.5px",paddingTop:"1rem","@media (min-width: 700px)":{}},children:"Bachelor of Science in Civil Engineering"}),d.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:d.jsx(jn,{slides:kn,options:En,imgArr:Cn,setModalImgSrc:r,handleOpenModal:n})})]}),d.jsxs("div",{children:[d.jsx("h1",{children:d.jsx("b",{children:"Awards & Certifications"})}),d.jsxs(R,{sx:{display:"flex",flexDirection:"column",gap:"1rem",paddingTop:"1rem"},children:[d.jsxs("div",{children:[d.jsx("h2",{style:{fontWeight:"100"},children:"The Complete 2021 Web Development Bootcamp"}),d.jsxs(R,{sx:{display:"flex",alignItems:"center",gap:"1rem",paddingTop:"0.5rem"},children:[d.jsx(B.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:d.jsx(ie,{sx:{backgroundColor:"#FFA500",":hover":{backgroundColor:"#e39505"},width:"120px"},fullWidth:!0,variant:"contained",startIcon:d.jsx(Ye,{}),onClick:()=>{window.open("https://www.udemy.com/course/the-complete-web-development-bootcamp/","_blank")},children:"Course"})})," ",d.jsx(B.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:d.jsx(ie,{sx:{color:"#FFA500",borderColor:"#FFA500",":hover":{borderColor:"#e39505",color:"#e39505"}},variant:"outlined",endIcon:d.jsx(ve,{}),onClick:()=>{r("/images/about-page/education/bootcamp-cert.webp"),n()},children:"Certification"})})]})]}),d.jsxs("div",{children:[d.jsx("h2",{style:{fontWeight:"100"},children:"Golden Thesis Awardee"}),d.jsxs(R,{sx:{display:"flex",alignItems:"center",gap:"1rem",paddingTop:"0.5rem"},children:[d.jsx(B.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:d.jsx(ie,{sx:{backgroundColor:"#FFA500",":hover":{backgroundColor:"#e39505"},width:"120px"},fullWidth:!0,variant:"contained",startIcon:d.jsx(Ie,{}),onClick:()=>{r("/images/about-page/education/golden1.webp"),n()},children:"Photo"})})," ",d.jsx(B.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:d.jsx(ie,{sx:{color:"#FFA500",borderColor:"#FFA500",":hover":{borderColor:"#e39505",color:"#e39505"}},variant:"outlined",endIcon:d.jsx(ve,{}),onClick:()=>{r("/images/about-page/education/golden4.webp"),n()},children:"Certification"})})]})]}),d.jsxs("div",{children:[d.jsx("h2",{style:{fontWeight:"100"},children:"Geomate Tokyo Best Paper Award"}),d.jsxs(R,{sx:{display:"flex",alignItems:"center",gap:"1rem",paddingTop:"0.5rem"},children:[d.jsx(B.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:d.jsx(ie,{sx:{backgroundColor:"#FFA500",":hover":{backgroundColor:"#e39505"},width:"120px"},fullWidth:!0,variant:"contained",startIcon:d.jsx(Ie,{}),onClick:()=>{r("/images/about-page/education/geomate-group.webp"),n()},children:"Photo"})})," ",d.jsx(B.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:d.jsx(ie,{sx:{color:"#FFA500",borderColor:"#FFA500",":hover":{borderColor:"#e39505",color:"#e39505"}},variant:"outlined",endIcon:d.jsx(ve,{}),onClick:()=>{r("/images/about-page/education/golden3.webp"),n()},children:"Certification"})})]})]})]})]})]}),d.jsx(ft,{open:e,onClose:o,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:d.jsx(R,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:.5,width:"70vw",maxWidth:"800px"},children:d.jsx("img",{style:{width:"100%",maxHeight:"90vh",objectFit:"cover"},src:i,alt:"modal-image"})})}),d.jsx(pt,{})]}),d.jsx(mt,{})]})};export{Dn as default};
