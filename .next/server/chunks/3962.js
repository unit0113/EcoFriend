"use strict";exports.id=3962,exports.ids=[3962],exports.modules={43962:(e,t,l)=>{l.r(t),l.d(t,{default:()=>ProfileSideBar});var s=l(30784),r=l(11440),i=l.n(r),a=l(57114),n=l(9885),c=l(74284);function ProfileSideBar(){let e=(0,a.useRouter)(),{data:t}=(0,c.useSession)();return(0,n.useEffect)(()=>{t||e.push("/")}),(0,s.jsxs)("div",{className:"flex min-h-screen flex-col",children:[s.jsx("header",{className:"sticky top-0 flex h-16 items-center justify-center text-2xl font-bold",children:"Profile"}),s.jsx("div",{className:"flex flex-1 flex-col md:flex-row",children:s.jsx("aside",{className:"w-full",children:s.jsx("nav",{children:s.jsx("ul",{children:[{href:"/",title:"Home"},{href:"/achievements",title:"Achievements"},{href:"/viewGameState",title:"Game Stats"},{href:"/profile/changeUsername",title:"Change Username"},{href:"/profile/changePassword",title:"Change Password"},{href:"/profile/deleteUser",title:"Delete Account"}].map(({href:e,title:t})=>s.jsx("li",{className:"h-10 px-8 text-xl font-bold tracking-tight hover:bg-neutral-200",children:s.jsx(i(),{href:e,children:t})},t))})})})})]})}}};