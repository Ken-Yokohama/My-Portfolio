import{r as m,j as e,m as x,B as l,u as L}from"./index-6ca4a81d.js";import{f as I,a as b,p as O,b as p}from"./animation-8b20fc82.js";import{C as M,F as N}from"./CallToAction-d1d65fd8.js";import{f as A,p as T}from"./project-data-9880ab3d.js";var w=new Map,j=new WeakMap,R=0,B=void 0;function D(r){return r?(j.has(r)||(R+=1,j.set(r,R.toString())),j.get(r)):"0"}function H(r){return Object.keys(r).sort().filter(function(n){return r[n]!==void 0}).map(function(n){return n+"_"+(n==="root"?D(r.root):r[n])}).toString()}function W(r){var n=H(r),i=w.get(n);if(!i){var t=new Map,o,a=new IntersectionObserver(function(h){h.forEach(function(s){var c,d=s.isIntersecting&&o.some(function(f){return s.intersectionRatio>=f});r.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=d),(c=t.get(s.target))==null||c.forEach(function(f){f(d,s)})})},r);o=a.thresholds||(Array.isArray(r.threshold)?r.threshold:[r.threshold||0]),i={id:n,observer:a,elements:t},w.set(n,i)}return i}function F(r,n,i,t){if(i===void 0&&(i={}),t===void 0&&(t=B),typeof window.IntersectionObserver>"u"&&t!==void 0){var o=r.getBoundingClientRect();return n(t,{isIntersecting:t,target:r,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),function(){}}var a=W(i),h=a.id,s=a.observer,c=a.elements,d=c.get(r)||[];return c.has(r)||c.set(r,d),d.push(n),s.observe(r),function(){d.splice(d.indexOf(n),1),d.length===0&&(c.delete(r),s.unobserve(r)),c.size===0&&(s.disconnect(),w.delete(h))}}function V(r){var n=r===void 0?{}:r,i=n.threshold,t=n.delay,o=n.trackVisibility,a=n.rootMargin,h=n.root,s=n.triggerOnce,c=n.skip,d=n.initialInView,f=n.fallbackInView,u=m.useRef(),y=m.useState({inView:!!d}),v=y[0],k=y[1],S=m.useCallback(function(P){u.current!==void 0&&(u.current(),u.current=void 0),!c&&P&&(u.current=F(P,function(E,C){k({inView:E,entry:C}),C.isIntersecting&&s&&u.current&&(u.current(),u.current=void 0)},{root:h,rootMargin:a,threshold:i,trackVisibility:o,delay:t},f))},[Array.isArray(i)?i.toString():i,h,a,s,c,o,f,t]);m.useEffect(function(){!u.current&&v.entry&&!s&&!c&&k({inView:!!d})});var g=[S,v.inView,v.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}const _=({year:r,month:n,title:i,description:t,technologies:o})=>{const[a,h]=m.useState(!1),[,s]=m.useState(!1),[c,d]=V({triggerOnce:!0});return m.useEffect(()=>{d&&s(!0)},[d]),e.jsx(x.div,{...I(d),ref:c,onMouseEnter:()=>{h(!0),s(!1)},onMouseLeave:()=>{h(!1)},style:{backgroundSize:"cover",backgroundPosition:"center"},children:e.jsxs(l,{className:"project-cards",sx:{backgroundColor:a?"rgba(35,44,48,0.95)":"rgba(35,44,48,0)",transition:"background 0.3s",aspectRatio:"1/1.25",padding:"2rem",color:"white",display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs(x.h5,{...b(a,0),children:[r," - ",n]}),e.jsxs(x.div,{...b(a,.1),children:[e.jsx("h1",{children:e.jsx("b",{children:i})}),e.jsx("p",{children:t})]}),e.jsxs(x.div,{...b(a,.2),children:[e.jsx("h2",{children:"Technologies Used"}),e.jsx("div",{style:{fontWeight:"100",display:"grid",gridTemplateColumns:"1fr 1fr"},children:o.map((f,u)=>e.jsxs("div",{className:"project-tech-stack",style:{display:"flex"},children:[e.jsx("h5",{children:"-"}),e.jsxs("h5",{children:[" ",f]})]},u))})]})]})})},U=({title:r,technologies:n,description:i,liveSiteLink:t,githubRepoLink:o})=>{const{ref:a,inView:h}=V({rootMargin:"-120px",triggerOnce:!0});return e.jsxs(x.div,{ref:a,...O(h),style:{border:"2px solid"},children:[e.jsxs(l,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"2px solid",padding:"0.5rem","@media (max-width: 900px)":{flexDirection:"column",textAlign:"center"}},children:[e.jsx(l,{children:e.jsx("h2",{children:r})}),e.jsx(l,{sx:{display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center"},children:n.map((s,c)=>e.jsx("h5",{children:s},c))})]}),e.jsxs(l,{sx:{padding:"0.5rem",display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("h3",{children:"Description"}),e.jsx("p",{children:i}),e.jsxs(l,{sx:{display:"flex",flexDireciton:"row",gap:"1rem"},children:[e.jsx("a",{href:t,target:"_blank",children:e.jsx("i",{children:"Link to Live Website"})}),e.jsx("a",{href:o,target:"_blank",children:e.jsx("i",{children:"Link to Github Repository"})})]})]})]})},J=()=>{const r=L(),n=()=>{var o;const i=window.innerWidth>700?100:60,t=(o=document.getElementById("featured-proj"))==null?void 0:o.offsetTop;t&&window.scrollTo({top:t-i,behavior:"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"page-container home-page",children:[e.jsxs(l,{className:"hero-section",children:[e.jsxs(l,{className:"hero-txt-container",children:[e.jsx(x.h5,{...p(!0,.3),children:"KEN YOKOHAMA"}),e.jsx(x.h1,{...p(!0,.4),children:e.jsx("b",{children:"FULL STACK DEVELOPER"})}),e.jsxs(x.h3,{...p(!0,.5),style:{maxWidth:"600px"},children:["Hello! I'm a ",e.jsx("strong",{children:"Web Developer"})," and licensed Civil Engineer with a passion for solving problems, learning new things and turning ideas into reality with the use of code."]}),e.jsx(x.div,{...p(!0,.6),children:e.jsxs(l,{component:"h4",className:"actions",children:[e.jsx(l,{component:"strong",onClick:n,children:"View Projects"})," ","or"," ",e.jsx(l,{component:"strong",onClick:()=>{r("/about"),window.scrollTo(0,0)},children:"About Me"})]})})]}),e.jsx("div",{className:"hero-img-container",children:e.jsx("img",{src:"/images/home-page/profile-img2.webp",alt:"profile-image"})})]}),e.jsxs("div",{className:"projects-section",children:[e.jsxs("div",{id:"featured-proj",children:[e.jsx("h5",{children:"PROJECTS AND SHOWCASE"}),e.jsx(l,{component:"h1",sx:{paddingBottom:"2rem"},children:e.jsx("b",{children:"Featured Projects"})}),e.jsx(l,{className:"featured-proj-container",children:A.map((i,t)=>e.jsx(_,{year:i.year,month:i.month,name:i.name,title:i.title,description:i.description,technologies:i.technologies,liveSiteLink:i.liveSiteLink,githubRepoLink:i.githubRepoLink,hasProjectPage:i.hasProjectPage,backgroundImg:i.backgroundImgUrl},t))})]}),e.jsxs("div",{id:"projects-list",children:[e.jsx("h5",{children:"Expanded Collection"}),e.jsx(l,{component:"h1",sx:{paddingBottom:"2rem"},children:e.jsx("b",{children:"Projects List"})}),e.jsx(l,{className:"projects-list-container",children:T.map((i,t)=>e.jsx(U,{title:i.title,technologies:i.technologies,description:i.description,liveSiteLink:i.liveSiteLink,githubRepoLink:i.githubRepoLink},t))})]})]}),e.jsx(M,{})]}),e.jsx(N,{})]})};export{J as default};
