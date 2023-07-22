import{r as x,j as e,m,B as d,_ as C,u as I}from"./index-ac5d4c94.js";import{p as S,a as p}from"./animation-f3b8fc49.js";import{C as E,F as L}from"./CallToAction-3ea324be.js";import{f as A,p as M}from"./project-data-9880ab3d.js";var b=new Map,j=new WeakMap,R=0,N=void 0;function T(i){return i?(j.has(i)||(R+=1,j.set(i,R.toString())),j.get(i)):"0"}function B(i){return Object.keys(i).sort().filter(function(t){return i[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?T(i.root):i[t])}).toString()}function D(i){var t=B(i),n=b.get(t);if(!n){var a=new Map,r,s=new IntersectionObserver(function(l){l.forEach(function(o){var c,u=o.isIntersecting&&r.some(function(f){return o.intersectionRatio>=f});i.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=u),(c=a.get(o.target))==null||c.forEach(function(f){f(u,o)})})},i);r=s.thresholds||(Array.isArray(i.threshold)?i.threshold:[i.threshold||0]),n={id:t,observer:s,elements:a},b.set(t,n)}return n}function W(i,t,n,a){if(n===void 0&&(n={}),a===void 0&&(a=N),typeof window.IntersectionObserver>"u"&&a!==void 0){var r=i.getBoundingClientRect();return t(a,{isIntersecting:a,target:i,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),function(){}}var s=D(n),l=s.id,o=s.observer,c=s.elements,u=c.get(i)||[];return c.has(i)||c.set(i,u),u.push(t),o.observe(i),function(){u.splice(u.indexOf(t),1),u.length===0&&(c.delete(i),o.unobserve(i)),c.size===0&&(o.disconnect(),b.delete(l))}}function V(i){var t=i===void 0?{}:i,n=t.threshold,a=t.delay,r=t.trackVisibility,s=t.rootMargin,l=t.root,o=t.triggerOnce,c=t.skip,u=t.initialInView,f=t.fallbackInView,h=x.useRef(),w=x.useState({inView:!!u}),v=w[0],y=w[1],O=x.useCallback(function(k){h.current!==void 0&&(h.current(),h.current=void 0),!c&&k&&(h.current=W(k,function(_,P){y({inView:_,entry:P}),P.isIntersecting&&o&&h.current&&(h.current(),h.current=void 0)},{root:l,rootMargin:s,threshold:n,trackVisibility:r,delay:a},f))},[Array.isArray(n)?n.toString():n,l,s,o,c,r,f,a]);x.useEffect(function(){!h.current&&v.entry&&!o&&!c&&y({inView:!!u})});var g=[O,v.inView,v.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}const F=({title:i,technologies:t,description:n,liveSiteLink:a,githubRepoLink:r})=>{const{ref:s,inView:l}=V({rootMargin:"-120px",triggerOnce:!0});return e.jsxs(m.div,{ref:s,...S(l),style:{border:"2px solid"},children:[e.jsxs(d,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"2px solid",padding:"0.5rem","@media (max-width: 900px)":{flexDirection:"column",textAlign:"center"}},children:[e.jsx(d,{children:e.jsx("h2",{children:i})}),e.jsx(d,{sx:{display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center"},children:t.map((o,c)=>e.jsx("h5",{children:o},c))})]}),e.jsxs(d,{sx:{padding:"0.5rem",display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("h3",{children:"Description"}),e.jsx("p",{children:n}),e.jsxs(d,{sx:{display:"flex",flexDireciton:"row",gap:"1rem"},children:[e.jsx("a",{href:a,target:"_blank",children:e.jsx("i",{children:"Link to Live Website"})}),e.jsx("a",{href:r,target:"_blank",children:e.jsx("i",{children:"Link to Github Repository"})})]})]})]})},H=x.lazy(()=>C(()=>import("./featured-project-e4ed663f.js"),["assets/featured-project-e4ed663f.js","assets/index-ac5d4c94.js","assets/index-191d949d.css","assets/GitHub-43e1081b.js","assets/animation-f3b8fc49.js","assets/Button-51bcc2f7.js","assets/TransitionGroupContext-46b38c49.js","assets/CallToAction-3ea324be.js","assets/project-data-9880ab3d.js","assets/featured-project-4e446635.css"])),z=()=>{const i=I(),[t,n]=V({triggerOnce:!0}),a=()=>{var l;const r=window.innerWidth>700?100:60,s=(l=document.getElementById("featured-proj"))==null?void 0:l.offsetTop;s&&window.scrollTo({top:s-r,behavior:"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"page-container home-page",children:[e.jsxs(d,{className:"hero-section",children:[e.jsxs(d,{className:"hero-txt-container",children:[e.jsx(m.h5,{...p(!0,.3),children:"KEN YOKOHAMA"}),e.jsx(m.h1,{...p(!0,.4),children:e.jsx("b",{children:"FULL STACK DEVELOPER"})}),e.jsxs(m.h3,{...p(!0,.5),style:{maxWidth:"600px"},children:["Hello! I'm a ",e.jsx("strong",{children:"Web Developer"})," and licensed Civil Engineer with a passion for solving problems, learning new things and turning ideas into reality with the use of code."]}),e.jsx(m.div,{...p(!0,.6),children:e.jsxs(d,{component:"h4",className:"actions",children:[e.jsx(d,{component:"strong",onClick:a,children:"View Projects"})," ","or"," ",e.jsx(d,{component:"strong",onClick:()=>{i("/about"),window.scrollTo(0,0)},children:"About Me"})]})})]}),e.jsx("div",{className:"hero-img-container",children:e.jsx("img",{src:"/images/home-page/profile-img2.webp",alt:"profile-image"})})]}),e.jsxs("div",{className:"projects-section",ref:t,children:[e.jsxs("div",{id:"featured-proj",children:[e.jsx("h5",{children:"PROJECTS AND SHOWCASE"}),e.jsx(d,{component:"h1",sx:{paddingBottom:"2rem"},children:e.jsx("b",{children:"Featured Projects"})}),e.jsx(d,{className:"featured-proj-container",children:e.jsx(x.Suspense,{children:n&&A.map((r,s)=>e.jsx(H,{year:r.year,month:r.month,name:r.name,title:r.title,description:r.description,technologies:r.technologies,liveSiteLink:r.liveSiteLink,githubRepoLink:r.githubRepoLink,hasProjectPage:r.hasProjectPage,backgroundImg:r.backgroundImgUrl},s))})})]}),e.jsxs("div",{id:"projects-list",children:[e.jsx("h5",{children:"Expanded Collection"}),e.jsx(d,{component:"h1",sx:{paddingBottom:"2rem"},children:e.jsx("b",{children:"Projects List"})}),e.jsx(d,{className:"projects-list-container",children:M.map((r,s)=>e.jsx(F,{title:r.title,technologies:r.technologies,description:r.description,liveSiteLink:r.liveSiteLink,githubRepoLink:r.githubRepoLink},s))})]})]}),e.jsx(E,{})]}),e.jsx(L,{})]})},J=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));export{J as H,V as u};
