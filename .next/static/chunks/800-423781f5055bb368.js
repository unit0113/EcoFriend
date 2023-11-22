"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{8800:function(e,t,s){s.r(t),s.d(t,{default:function(){return SignUp}});var i=s(2987),a=s(1361),l=s.n(a),r=s(1481),n=s(5049),d=s.n(n),o=s(7317),c=s(6396),m=s(2331);function SignUp(){let e=(0,c.useRouter)(),{data:t}=(0,m.useSession)();(0,o.useEffect)(()=>{t&&e.replace("/game")});let[s,a]=(0,o.useState)(""),[n,g]=(0,o.useState)(""),[u,x]=(0,o.useState)(""),[h,f]=(0,o.useState)(!1),[p,b]=(0,o.useState)(!1),[y,j]=(0,o.useState)(!1),[w,v]=(0,o.useState)(!1),HandleRegister=async t=>{if(t.preventDefault(),n!=u){j(!0);return}try{let t=await fetch("/api/userExists",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s})}),{user:i}=await t.json();if(i){v(!0);return}let a=await fetch("/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,pw1:n})});if(a.ok){let t=await (0,m.signIn)("credentials",{email:s,password:n,redirect:!1});t&&t.ok&&e.replace("/game")}else console.log("User registration failed")}catch(e){console.log("Error during registration: ",e)}};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"mt-12 flex min-h-full flex-1",children:[(0,i.jsx)("div",{className:"flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24",children:(0,i.jsxs)("div",{className:"mx-auto w-full max-w-sm lg:w-96",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{className:"mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900",children:"Create your account"}),(0,i.jsxs)("p",{className:"mt-2 text-sm leading-6 text-gray-500",children:["Already have an account?"," ",(0,i.jsx)(d(),{className:"hover:text-grey-900 font-bold text-black",href:"/login",children:"Log in"})]})]}),(0,i.jsxs)("div",{className:"mt-10",children:[(0,i.jsx)("div",{children:(0,i.jsxs)("form",{onSubmit:HandleRegister,action:"#",method:"POST",className:"space-y-6",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("input",{onChange:e=>{a(e.target.value),v(!1)},id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),h&&(0,i.jsx)("div",{className:"mt-2 text-sm leading-6 text-red-500",children:"Invalid Email"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 text-gray-900",children:"Password"}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("input",{onChange:e=>g(e.target.value),id:"password1",name:"password1",type:"password",required:!0,className:"block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),p&&(0,i.jsx)("div",{className:"mt-2 text-sm leading-6 text-red-500",children:"Password must suck less"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 text-gray-900",children:"Re-Enter Password"}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("input",{onChange:e=>{x(e.target.value),j(!1)},id:"password2",name:"password2",type:"password",required:!0,className:"block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),y&&(0,i.jsx)("div",{className:"mt-2 text-sm leading-6 text-red-500",children:"Passwords must match"})]}),(0,i.jsx)("div",{children:(0,i.jsx)("button",{type:"submit",className:"focus-visible:outline-grey-600 flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",children:"Create Account"})}),w&&(0,i.jsx)("div",{className:"mt-2 text-sm leading-6 text-red-500",children:"An account with these credentials already exists"})]})}),(0,i.jsxs)("div",{className:"mt-10",children:[(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{className:"absolute inset-0 flex items-center","aria-hidden":"true",children:(0,i.jsx)("div",{className:"w-full border-t border-gray-200"})}),(0,i.jsx)("div",{className:"relative flex justify-center text-sm font-medium leading-6",children:(0,i.jsx)("span",{className:"bg-white px-6 text-gray-900",children:"Or create account with"})})]}),(0,i.jsxs)("div",{className:"mt-6 grid grid-cols-2 gap-4",children:[(0,i.jsxs)("button",{onClick:()=>(0,m.signIn)("google",{callbackUrl:"http://localhost:3000/game"}),type:"button",className:"flex w-full items-center justify-center rounded-lg  bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2  focus:ring-offset-gray-200 ",children:[(0,i.jsx)("svg",{width:"20",height:"20",fill:"currentColor",className:"mr-2",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"})}),"Google"]}),(0,i.jsxs)("button",{onClick:()=>(0,m.signIn)("github",{callbackUrl:"http://localhost:3000/game"}),type:"button",className:"flex w-full items-center justify-center rounded-lg  bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2  focus:ring-offset-gray-200 ",children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"mr-2",viewBox:"0 0 1792 1792",children:(0,i.jsx)("path",{d:"M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"})}),"GitHub"]})]})]})]})]})}),(0,i.jsx)("div",{className:"relative hidden w-0 flex-1 lg:block",children:(0,i.jsx)(l(),{className:"absolute inset-0 h-full w-full object-cover",src:r.default,alt:""})})]})})}},1481:function(e,t,s){s.r(t),t.default={src:"/_next/static/media/muffin.3b856d2a.png",height:768,width:768,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAUlEQVR42jXMvUsCYQDA4Z8mdZi+pVEkdEhkuEkEEU0JEbW2NLYHzU4NLUJDQ2N/QmPRHGij9EEfXIHSHRTh3XkndlZenr61ODzrE9rdXpZ7hQIPtxUc30FGfxlW8oTD4xSP9ok8v5qUKiXsNxcxmWQqqaLrOkEgMG40IvXGN081A6NqsraaoeOPUb6+QK/dk83NEVZiAq36TjY1Qy6ZIeG2Ef0o6mye+ESMECCVxRSHm1sIv0ndMjF6I5x/vPDpdghdnp1KNZ3m56vNzsY6yvwCJ8dFPNeiVL5iKL+ydOC1WriOjdft0rSt/6WBadncPWoAyAE1EZfTYlQCfSBAEb0/EW1sYSB9hgQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}}}]);