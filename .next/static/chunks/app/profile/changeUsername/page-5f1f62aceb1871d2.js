(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[713],{5596:function(e,t,s){Promise.resolve().then(s.t.bind(s,413,23)),Promise.resolve().then(s.bind(s,506)),Promise.resolve().then(s.bind(s,7899))},506:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return ChangeUsernameSidebar}});var a=s(7437),n=s(2265),i=s(4033),r=s(2749),l=s(1396),o=s.n(l);let getUserName=async(e,t)=>{let s=await fetch("/api/getUserData",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e}),cache:"no-store"}),a=await s.json();t(a.user.username)};function ChangeUsernameSidebar(){var e;let t=(0,i.useRouter)(),{data:s}=(0,r.useSession)();(0,n.useEffect)(()=>{s&&s.user&&s.user.email||t.push("/")},[]);let l=null==s?void 0:null===(e=s.user)||void 0===e?void 0:e.email,[u,c]=(0,n.useState)("");(0,n.useEffect)(()=>{let getName=async()=>{await getUserName(l,c)};getName()});let[d,m]=(0,n.useState)(""),[f,h]=(0,n.useState)(!1),[g,x]=(0,n.useState)(!0),handleSubmit=async e=>{if(e.preventDefault(),""===d){x(!1);return}try{let e=await fetch("/api/changeUsername",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,newUsername:d})});e&&t.push("/profile")}catch(e){console.log("Error during username update: ",e)}};return(0,a.jsxs)("div",{className:"flex min-h-screen flex-col",children:[(0,a.jsx)("header",{className:"sticky top-0 flex h-16 items-center justify-center text-2xl font-bold",children:"Change Username"}),(0,a.jsxs)("h2",{className:"mt-8 text-lg font-bold leading-9 tracking-tight text-gray-900",children:["Current Username: ",u]}),(0,a.jsx)("div",{className:"flex flex-1 flex-col md:flex-row",children:(0,a.jsx)("aside",{className:"w-full",children:(0,a.jsxs)("form",{onSubmit:handleSubmit,action:"#",method:"POST",className:"space-y-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"username",className:"block text-sm font-medium leading-6 text-gray-900",children:"New Username"}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)("input",{onChange:e=>{m(e.target.value),h(!1),x(!0)},id:"username",name:"username",type:"username",className:"block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),f&&(0,a.jsx)("div",{className:"mt-2 text-sm leading-6 text-red-500",children:"Username already taken"}),!g&&(0,a.jsx)("div",{className:"mt-2 text-sm leading-6 text-red-500",children:"Please provide a new username"})]}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{type:"submit",className:"focus-visible:outline-grey-600 flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",children:"Update Username"})}),(0,a.jsx)("button",{className:"focus-visible:outline-grey-600 flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",children:(0,a.jsx)(o(),{href:"/profile",children:"Cancel"})})]})})})]})}},7899:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/happy_groot.1fe7cf49.png",height:1024,width:1024,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAgVBMVEV4sFairYif5rpkcE1xgk5UilSGv1E6hVuin2yItZdnh2aL0YBTnnVSf1CJrFK4pGiIcVKqpn6UqWyCtmaep4N8iWeBl1yPp3Y/ZUltrVl9xomWymyHwJpuuH+cyaNCeViZwIU9dEub4pqdi1B3uYyZfWQacG8fmo+ovW19dFp5tmq8T596AAAACHRSTlP+/////////kgsYtwAAAAJcEhZcwAACxMAAAsTAQCanBgAAABISURBVHicBcEFAoAgAASwQ0JSxO7u/z/QDasTXSR4A5fOg2kZBZUmGjmr8MpjW6wuoYPaiSIFrFRpmOoM9/ecskeOK068TxD/kpkEOnSmjXkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[122,413,309,971,472,744],function(){return e(e.s=5596)}),_N_E=e.O()}]);