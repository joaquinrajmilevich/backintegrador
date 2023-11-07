(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[962],{1466:function(e,n,t){Promise.resolve().then(t.bind(t,3950)),Promise.resolve().then(t.bind(t,5756)),Promise.resolve().then(t.bind(t,8040)),Promise.resolve().then(t.t.bind(t,413,23))},3950:function(e,n,t){"use strict";t.r(n);var l=t(7437),a=t(2265);n.default=e=>{let{className:n,children:t,nameV:r,valueV:s,handler:o}=e,[i,d]=(0,a.useState)();return(0,l.jsx)("select",{className:n,name:r,value:s,onChange:o,children:t})}},5756:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return FormEnroll}});var l=t(7437);t(3950);var a=t(2265),r=t(3216),s=t(401);function FormEnroll(){let e={parent:{firstName:"",lastName:"",email:"",phoneNumber:""},student:{studentFirstName:"",studentLastName:"",shift:"Noche"}},[n,t]=(0,a.useState)(e),resetForm=()=>{t(e)},openModal=e=>{document.getElementById(e).classList.remove("hidden")},hideModal=e=>{document.getElementById(e).classList.add("hidden")},handleErrors=e=>{for(let n of e)null!==document.getElementById("label_"+Object.keys(n)[0])&&(document.getElementById("label_"+Object.keys(n)[0]).textContent=n[Object.keys(n)[0]])},removeErrors=()=>{let e=document.getElementsByClassName("errorLabel");for(let n of(console.log(e),e))n.innerHTML="&nbsp;"};async function onSubmit(e){e.preventDefault();let t=await fetch("http://localhost:8080/api/v1/enrollment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),l=await t.json();"OK"==l.message?(console.log("registrado"),removeErrors(),resetForm(),hideModal("error"),openModal("success")):"Validation failed"==l.message?(console.log(l),hideModal("success"),hideModal("error"),handleErrors(l.errors),resetForm()):(hideModal("success"),openModal("error"))}let handleInputChange=e=>{let{name:n,value:l}=e.target,[a,r]=n.split(".");t(e=>({...e,[a]:{...e[a],[r]:l}}))};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{className:"flex flex-col gap-1",onSubmit:onSubmit,children:[(0,l.jsxs)("div",{className:"mb-1 flex flex-col",children:[(0,l.jsx)("label",{htmlFor:"nameTutor",className:"p-0 label font-bold",children:"Nombre Tutor"}),(0,l.jsxs)("div",{className:"mb-1 form-control flex flex-row gap-2",children:[(0,l.jsx)(s.Z,{type:"text",inputID:"parent.firstName",placeholder:"Nombre(padre/madre/tutor)",value:n.parent.firstName,onChange:handleInputChange}),(0,l.jsx)(s.Z,{type:"text",inputID:"parent.lastName",placeholder:"Apellido(padre/madre/tutor)",value:n.parent.lastName,onChange:handleInputChange})]})]}),(0,l.jsxs)("div",{className:"mb-1 flex flex-col",children:[(0,l.jsx)("label",{htmlFor:"nameTutor",className:"p-0 label font-bold",children:"Nombre Alumno"}),(0,l.jsxs)("div",{className:"mb-1 form-control flex flex-row gap-2",children:[(0,l.jsx)(s.Z,{type:"text",placeholder:"Nombre Alumno",inputID:"student.studentFirstName",onChange:handleInputChange,value:n.student.studentFirstName}),(0,l.jsx)(s.Z,{type:"text",placeholder:"Apellido Alumno",inputID:"student.studentLastName",onChange:handleInputChange,value:n.student.studentLastName})]})]}),(0,l.jsxs)("div",{className:"mb-1 flex flex-col ",children:[(0,l.jsx)("label",{htmlFor:"email",className:"font-bold label p-0",children:"Email"}),(0,l.jsx)("div",{className:"mb-1 form-control flex flex-row gap-2",children:(0,l.jsx)(s.Z,{type:"email",placeholder:"miemail@mail.com*",inputID:"parent.email",onChange:handleInputChange,value:n.parent.email})})]}),(0,l.jsxs)("div",{className:"mb-1 flex flex-col",children:[(0,l.jsx)("label",{htmlFor:"phoneNumber",className:"font-bold label p-0",children:"Numero de tel\xe9fono"}),(0,l.jsx)("div",{className:"mb-1 form-control flex flex-row gap-2",children:(0,l.jsx)(s.Z,{type:"number",placeholder:"numero de tel\xe9fono*",inputID:"parent.phoneNumber",onChange:handleInputChange,value:n.parent.phoneNumber})})]}),(0,l.jsxs)("div",{className:"mb-3 flex flex-col gap-2",children:[(0,l.jsx)("label",{htmlFor:"shift",className:"font-bold",children:"Turno"}),(0,l.jsxs)("select",{className:"rounded-md border-2 py-2 ps-2 basic-input",name:"student.shift",onChange:handleInputChange,value:n.student.shift,children:[(0,l.jsx)("option",{value:"Ma\xf1ana",children:"Ma\xf1ana"}),(0,l.jsx)("option",{value:"Tarde",children:"Tarde"}),(0,l.jsx)("option",{value:"Noche",children:"Noche"})]})]}),(0,l.jsx)("button",{type:"submit",className:"bg-green-secondary px-4 py-2 rounded-md text-white hover:bg-green-accent w-20",children:"Enviar"})]}),(0,l.jsx)(r.Z,{message:"Gracias por su donacion",errorMessage:"Hubo un error o el email ya existe"})]})}},401:function(e,n,t){"use strict";t.d(n,{Z:function(){return FormInput}});var l=t(7437);function FormInput(e){let{inputID:n,type:t,placeholder:a,value:r,onChange:s}=e,o=n.replace(/.*\./,"");return(0,l.jsxs)("div",{className:"form-control w-full",children:[(0,l.jsx)("label",{className:"label p-0",children:(0,l.jsx)("span",{id:"label_"+n,className:"p-0 m-0 text-xs text-accent errorLabel",children:"\xa0"})}),(0,l.jsx)("input",{type:t,placeholder:a,id:o,name:n,className:"rounded-md border-2 py-2 ps-4 basic-input",value:r,onChange:s})]})}},3216:function(e,n,t){"use strict";t.d(n,{Z:function(){return Modal}});var l=t(7437);function Modal(e){let{message:n,errorMessage:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"alert bg-primary hidden",id:"success",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{className:" stroke-white",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,l.jsx)("span",{className:"text-white",children:n})]}),(0,l.jsxs)("div",{className:"alert alert-error hidden",id:"error",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,l.jsx)("span",{children:t})]})]})}},8040:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return SecondaryAnimation}});var l=t(7437),a=t(9844);function SecondaryAnimation(e){let{children:n,x:t,y:r,time:s=.2}=e;return(0,l.jsx)(a.E.div,{initial:{opacity:.5,x:t,y:r},animate:{opacity:1,x:0,y:0},transition:{duration:s,ease:[0,.4,.85,1.01]},children:n})}}},function(e){e.O(0,[868,844,971,472,744],function(){return e(e.s=1466)}),_N_E=e.O()}]);