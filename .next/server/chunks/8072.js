"use strict";exports.id=8072,exports.ids=[8072],exports.modules={88072:(e,t,s)=>{s.r(t),s.d(t,{POST:()=>POST});var a=s(95798),r=s(24837),i=s(18517),n=s(87812);async function POST(e){try{await (0,r.q)();let{userEmail:t}=await e.json(),s=await n.Z.findOne({email:t}),m=await i.Z.findOne({_id:s.team_id});if(!m)return a.Z.json({message:"User is not a member of a team"},{status:400});let o=[];return m.members.forEach(e=>{let t=n.Z.findOne({_id:e});o.push(t)}),a.Z.json({message:"Team members found",userData:o},{status:201})}catch(e){return a.Z.json({message:"An error occured while retrieving team member data"},{status:500})}}}};