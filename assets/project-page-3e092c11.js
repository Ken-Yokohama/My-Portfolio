import{X as c,j as e}from"./index-d02052a3.js";import{a as t}from"./project-data-dab2ebcf.js";import n from"./index-72864b6c.js";import"./LinkedIn-03b39981.js";import"./GitHub-407ec4a8.js";import"./Button-145c72a0.js";import"./TransitionGroupContext-99b46f82.js";const x=()=>{const{projectName:r}=c(),s=t.find(i=>i.name===r);return s?e.jsxs("div",{className:"page-container project-page",children:[e.jsxs("div",{className:"hero-section limit-width",children:[e.jsxs("div",{className:"project-details",children:[e.jsxs("div",{children:[e.jsx("h5",{children:"Project Name"}),e.jsx("h1",{children:s.title})]}),e.jsxs("div",{children:[e.jsx("h5",{children:"Role"}),e.jsx("h3",{children:"Front-End Development"}),e.jsx("h3",{children:"UX / UI Design"})]}),e.jsxs("div",{children:[e.jsx("h5",{children:"Technologies Used"}),e.jsx("div",{className:"technologies",children:s.technologies.map(i=>e.jsx("h3",{children:i}))})]}),e.jsxs("div",{children:[e.jsx("h5",{children:"Client"}),e.jsx("h3",{children:"Entrego"})]}),e.jsxs("div",{children:[e.jsx("h5",{children:"Year"}),e.jsx("h3",{children:s.year})]})]}),e.jsx("div",{className:"project-description",children:s.details.map(i=>e.jsx("h3",{children:i}))})]}),e.jsx("div",{className:"limit-width",style:{marginTop:"5rem"},children:e.jsx("img",{style:{width:"100%",marginBottom:"3rem"},src:s.backgroundImgUrl,alt:""})})]}):e.jsx(n,{})};export{x as default};