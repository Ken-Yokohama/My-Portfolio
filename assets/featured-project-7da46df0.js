import{w as H,x as P,j as e,m as s,u as z,r as c,B as v}from"./index-c697ee3e.js";import{d as _}from"./GitHub-0740476a.js";import{u as F}from"./Home-7c3808a4.js";import{a as y,f as D,c as o}from"./animation-f3b8fc49.js";import{B as l}from"./Button-93d20e36.js";import"./CallToAction-a37d1718.js";import"./project-data-49f59aba.js";import"./TransitionGroupContext-000b3141.js";var d={},I=P;Object.defineProperty(d,"__esModule",{value:!0});var n=d.default=void 0,S=I(H()),$=e,E=(0,S.default)((0,$.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}),"Language");n=d.default=E;const R=({isDark:a,isVisible:t})=>e.jsx("div",{style:{position:"relative"},children:e.jsxs(s.div,{...y(t,.8),className:"hover-prompt",children:[e.jsx("h5",{className:`text ${a&&"dark"}`,children:"Hover for Details"}),e.jsxs("svg",{className:`arrows ${a&&"dark"}`,children:[e.jsx("path",{className:"a1 lg",d:"M0 0 L20 22 L40 0"}),e.jsx("path",{className:"a2 lg",d:"M0 20 L20 42 L40 20"}),e.jsx("path",{className:"a3 lg",d:"M0 40 L20 62 L40 40"}),e.jsx("path",{className:"a1 md",d:"M0 0 L20 22 L40 0"}),e.jsx("path",{className:"a2 md",d:"M0 20 L20 42 L40 20"}),e.jsx("path",{className:"a1 sm",d:"M0 0 L10 12 L20 0"}),e.jsx("path",{className:"a2 sm",d:"M0 10 L10 22 L20 10"})]})]})}),G=({year:a,month:t,name:j,title:f,description:g,technologies:b,liveSiteLink:h,githubRepoLink:u,hasProjectPage:w,backgroundImg:m})=>{const N=z(),[r,x]=c.useState(!1),[C,p]=c.useState(!1),[M,i]=F({triggerOnce:!0});return c.useEffect(()=>{i&&p(!0)},[i]),e.jsx(s.div,{...D(i),ref:M,onMouseEnter:()=>{x(!0),p(!1)},onMouseLeave:()=>{x(!1)},style:{backgroundImage:`url(${m.replace(/\.(?=[^.]*$)/,"-small.")})`,backgroundSize:"cover",backgroundPosition:"center"},children:e.jsxs("div",{style:{backgroundImage:`url(${m})`,backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsxs(v,{className:"project-cards",sx:{backgroundColor:r?"rgba(35,44,48,0.95)":"rgba(35,44,48,0)",transition:"background 0.3s",aspectRatio:"1/1.25",padding:"2rem",color:"white",display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs(s.h5,{...o(r,0),children:[a," - ",t]}),e.jsxs(s.div,{...o(r,.1),children:[e.jsx("h1",{children:e.jsx("b",{children:f})}),e.jsx("p",{className:"description",children:g})]}),e.jsxs(s.div,{...o(r,.2),className:"technologies-used",children:[e.jsx("h2",{children:"Technologies Used"}),e.jsx("div",{className:"technologies-container",children:b.map((L,k)=>e.jsxs("div",{style:{display:"flex"},children:[e.jsx("h5",{children:"-"}),e.jsxs("h5",{children:[" ",L]})]},k))})]}),e.jsx(s.div,{...o(r,.3),children:e.jsxs(v,{className:"button-container",sx:{display:"flex",alignItems:"center",gap:"1rem","@media (max-width: 1000px)":{flexDirection:"column"},"@media (max-width: 650px)":{flexDirection:"row"},"@media (max-width: 500px)":{flexDirection:"column"}},children:[h&&e.jsx(s.div,{className:"button-div",whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(l,{sx:{color:"#2C3437",backgroundColor:"#FFA500",":hover":{backgroundColor:"#e39505"}},fullWidth:!0,variant:"contained",startIcon:e.jsx(n,{}),href:h,target:"_blank",children:"Live Site"})})," ",u&&e.jsx(s.div,{className:"button-div",whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(l,{sx:{color:"#FFA500",borderColor:"#FFA500",":hover":{borderColor:"#e39505",color:"#e39505"}},variant:"outlined",fullWidth:!0,endIcon:e.jsx(_,{}),href:u,target:"_blank",children:"Github Repo"})}),w&&e.jsx(s.div,{className:"button-div",whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(l,{sx:{color:"#2C3437",backgroundColor:"#FFA500",":hover":{backgroundColor:"#e39505"}},fullWidth:!0,variant:"contained",startIcon:e.jsx(n,{}),onClick:()=>{N(`/project/${j}`),window.scrollTo(0,0)},children:"View Details"})})]})})]}),e.jsx(R,{isDark:!0,isVisible:C})]})})};export{G as default};
