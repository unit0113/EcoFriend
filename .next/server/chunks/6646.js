"use strict";exports.id=6646,exports.ids=[6646],exports.modules={56646:(e,t,s)=>{s.r(t),s.d(t,{POST:()=>POST});var a=s(99413),r=s(73502),i=s(92989),n=s(75727);async function POST(e){try{await (0,r.q)();let{userEmail:t}=await e.json(),s=await n.Z.findOne({email:t}),m=await i.Z.findOne({_id:s.team_id});if(!m)return a.Z.json({message:"User is not a member of a team"},{status:400});let o=[];return m.members.forEach(e=>{let t=n.Z.findOne({_id:e});o.push(t)}),a.Z.json({message:"Team members found",userData:o},{status:201})}catch(e){return a.Z.json({message:"An error occured while retrieving team member data"},{status:500})}}}};