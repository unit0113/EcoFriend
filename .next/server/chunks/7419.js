"use strict";exports.id=7419,exports.ids=[7419],exports.modules={87419:(e,t,a)=>{a.r(t),a.d(t,{POST:()=>POST});var s=a(95798),n=a(24837),r=a(87812),o=a(62421),d=a.n(o);async function POST(e){try{await (0,n.q)();let{email:t,newPW1:a}=await e.json(),o=await r.Z.findOne({email:t}).select("_id"),i=await d().hash(a,10);return await o?.updateOne({password:i}),s.Z.json({message:"Password updated"},{status:201})}catch(e){return s.Z.json({message:"An error occured while updating user password."},{status:500})}}},24837:(e,t,a)=>{a.d(t,{q:()=>connectMongoDB});var s=a(11185),n=a.n(s);let connectMongoDB=async()=>{try{await n().connect(process.env.MONGODB_URI),console.log("Database connection established")}catch(e){console.log("Unable to connect to database: ",e)}}},87812:(e,t,a)=>{a.d(t,{Z:()=>d});var s=a(11185),n=a.n(s);let r=new s.Schema({email:{type:String,required:!0,unique:!0},username:{type:String,required:!0},password:{type:String,default:null},level:{type:Number,default:1},awards:{type:Array,default:["OG User: first 100 users"]},team_id:{type:Number,default:null}},{timestamps:!0}),o=s.models.User||n().model("User",r),d=o}};