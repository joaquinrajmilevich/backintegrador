(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1438:function(e,s,n){Promise.resolve().then(n.t.bind(n,2853,23)),Promise.resolve().then(n.bind(n,8103)),Promise.resolve().then(n.bind(n,8610)),Promise.resolve().then(n.t.bind(n,5067,23))},8103:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return components_Layout}});var a=n(7437),l=n(4033),t=n(6691),i=n.n(t),r={src:"/_next/static/media/logoGC_slogan.8bb984a7.webp",height:45,width:159,blurDataURL:"data:image/webp;base64,UklGRnwAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAAwIBAQECAgIcIBsXIC8sHwBWUDggRAAAALABAJ0BKggAAgACQDglqAJ0AN0DoIAA/v5vVUzbjYuz9uUqEgiEdN/4nfub/91n03/id+5v5f/nbEF/5ddvh9LkMAAA",blurWidth:8,blurHeight:2};function Footer(){return(0,a.jsx)("footer",{className:"bg-neutral",children:(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center text-white py-10 gap-7 mx-16",children:[(0,a.jsxs)("div",{className:"flex flex-col sm:w-[50vw]",children:[(0,a.jsx)("h4",{className:"text-2xl mx-auto font-semibold py-2 bg-green-secondary rounded-xl w-full ps-3 mb-3",children:"Escribinos"}),(0,a.jsxs)("ul",{className:"sm:ps-10",children:[(0,a.jsx)("li",{children:"Manzoni 1360,"}),(0,a.jsx)("li",{children:"Gonzalez Cat\xe1n"}),(0,a.jsx)("li",{children:"Provincia de Buenos Aires"}),(0,a.jsx)("li",{children:"Tel. (54)5277 0815"}),(0,a.jsx)("li",{children:"info@proyectogc.org"}),(0,a.jsx)(i(),{src:r,className:"bg-white rounded-2xl",alt:"Trabajamos por una gran causa"})]})]}),(0,a.jsx)("div",{className:"flex flex-col sm:w-[50vw]",children:(0,a.jsxs)("form",{className:"flex flex-col gap-1",children:[(0,a.jsxs)("div",{className:"mb-3 flex flex-col gap-2",children:[(0,a.jsx)("label",{htmlFor:"name",children:"Nombre"}),(0,a.jsx)("input",{type:"text",placeholder:"Nombre",id:"name",name:"name",className:"rounded-md py-2 ps-4 basic-input"})]}),(0,a.jsxs)("div",{className:"mb-3 flex flex-col gap-2",children:[(0,a.jsx)("label",{htmlFor:"email",children:"Email"}),(0,a.jsx)("input",{type:"email",placeholder:"miemail@mail.com",id:"email",name:"email",className:"rounded-md py-2 ps-4 basic-input"})]}),(0,a.jsxs)("div",{className:"mb-3 flex flex-col gap-2",children:[(0,a.jsx)("label",{htmlFor:"message",children:"Mensaje"}),(0,a.jsx)("textarea",{id:"message",name:"message",className:"rounded-md py-2 ps-4 basic-input"}),(0,a.jsx)("span",{id:"messageHelp",className:"text-sm text-slate-300 ",children:"Contanos en que podemos ayudarte. 200 caracteres"})]}),(0,a.jsx)("button",{type:"submit",className:"bg-green-secondary px-4 py-2 rounded-md hover:bg-green-accent w-20",children:"Enviar"})]})})]})})}var components_Layout=()=>{let e=(0,l.usePathname)(),s=!e.includes("inscripciones");return(0,a.jsx)(a.Fragment,{children:s?(0,a.jsx)(Footer,{}):(0,a.jsx)(a.Fragment,{})})}},8610:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return Navbar}});var a=n(7437),l=n(2265),t=n(1396),i=n.n(t),r=n(6691),c=n.n(r),o=n(4033);function NavLinks(e){let{onClick:s}=e,n=(0,o.usePathname)();return(0,a.jsx)(a.Fragment,{children:[{name:"QUIENES SOMOS",href:"/somos"},{name:"PROYECTO",href:"/proyecto"},{name:"ACTIVIDADES",href:"/actividades"},{name:"COLABORA",href:"/colabora"},{name:"INSCRIPCIONES",href:"/inscripciones"}].map(e=>{let l=n.includes(e.href);return(0,a.jsx)(i(),{href:e.href,onClick:s,children:(0,a.jsx)("div",{className:"w-fit x-3 py-1 px-2 text-md rounded-md font-semibold ".concat(l?"bg-neutral text-white":"hover:bg-base-200"),children:e.name})},e.name)})})}var d=n(4842);function Navbar(){let[e,s]=(0,l.useState)(!1),closeMenu=()=>{s(e=!1)};return(0,a.jsxs)("nav",{className:"bg-base-100  shadow-md sticky top-0 z-50 ",children:[(0,a.jsx)("div",{className:"w-full mx-auto px-6",children:(0,a.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)(i(),{href:"/home","aria-label":"home",onClick:closeMenu,children:(0,a.jsx)(c(),{src:d.default,height:54,alt:"logo"})})}),(0,a.jsx)("div",{className:"hidden min-[848px]:block",children:(0,a.jsxs)("div",{className:"ml-10 md:ml-6 flex items-baseline space-x-1",children:[(0,a.jsx)(NavLinks,{}),(0,a.jsx)(i(),{target:"_blank",className:"flex self-center",href:"https://www.instagram.com/","aria-label":"Instagram",children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 448 512",children:[(0,a.jsx)("defs",{children:(0,a.jsxs)("linearGradient",{id:"MyGradient",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:"#70bf44"}),(0,a.jsx)("stop",{offset:"10%",stopColor:"#70bf44"}),(0,a.jsx)("stop",{offset:"100%",stopColor:"#3093fc"})]})}),(0,a.jsx)("path",{fill:"url(#MyGradient)",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})]})})]})})]}),(0,a.jsx)("div",{className:"flex min-[848px]:hidden",children:(0,a.jsx)("button",{onClick:()=>{s(!e)},type:"button",className:"inline-flex items-center justify-center p-2 rounded-md text-green-600  hover:bg-blue-200",children:e?(0,a.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):(0,a.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})})]})}),(0,a.jsx)("div",{className:"".concat(e?"max-h-52":"max-h-0 invisible"," min-[848px]:hidden transition-all duration-500 ease-in-out overflow-hidden"),children:(0,a.jsx)("div",{className:"pt-2 pb-3 space-y-1 px-3",children:(0,a.jsx)(NavLinks,{onClick:closeMenu})})})]})}},2853:function(){},4842:function(e,s,n){"use strict";n.r(s),s.default={src:"/_next/static/media/logoGC175x178.0c3a03be.png",height:178,width:175,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBElEQVR42mOAgdt371rfuXOv9c7duxW379yzhkv8fPqf9/H9Z52379x9c+vO7RQgvefWnbv/nz150PH//xt+hslHGlZsOLXy6Zenv00f3nvaf//BvX2f3z0NXLDh5IPS6YcPMmTtM1kWtZvhbcfhghcnrh8+fvzsrTXJfQffMvht3cGgsNGAIXY3w5JdF7Z83XRu9dGYgwyNDAl7NrcvOvHm5bMHO65cu6HPkLfPdkXrweynfYfqbUuPsiQxFOzf4da0N6hyxqH7oW37DzKU7w/iT9+r3ZK3z+l/ySHjswz5B3azl+z+z5C6s4OBYSM/AwwU7vM2LT5oVsFStLdKtHQP3JsAP7WKGqePi74AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},5067:function(e){e.exports={style:{fontFamily:"'__Montserrat_cce811', '__Montserrat_Fallback_cce811'",fontStyle:"normal"},className:"__className_cce811"}},4033:function(e,s,n){e.exports=n(94)}},function(e){e.O(0,[868,360,673,971,472,744],function(){return e(e.s=1438)}),_N_E=e.O()}]);