"use strict";exports.id=6072,exports.ids=[6072,8561],exports.modules={48561:(e,t,a)=>{function getDefaultUsername(e){return e.split("@")[0]}a.r(t),a.d(t,{default:()=>getDefaultUsername})},56072:(e,t,a)=>{a.r(t),a.d(t,{POST:()=>POST});var r=a(99413),s=a(73502),n=a(75727),o=a(68460),u=a.n(o),l=a(48561);async function POST(e){try{let{email:t,pw1:a}=await e.json(),o=(0,l.default)(t),i=await u().hash(a,10);return await (0,s.q)(),await n.Z.create({email:t,username:o,password:i}),r.Z.json({message:"New user registered"},{status:201})}catch(e){return r.Z.json({message:"An error occured while registering a new user."},{status:500})}}},73502:(e,t,a)=>{a.d(t,{q:()=>connectMongoDB});var r=a(11185),s=a.n(r);let connectMongoDB=async()=>{try{await s().connect(process.env.MONGODB_URI),console.log("Database connection established")}catch(e){console.log("Unable to connect to database: ",e)}}},75727:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(11185),s=a.n(r);let n=new r.Schema({email:{type:String,required:!0,unique:!0},username:{type:String,required:!0},password:{type:String,default:null},level:{type:Number,default:1},awards:{type:Array,default:["OG User: first 100 users"]},team_id:{type:Number,default:null}},{timestamps:!0}),o=r.models.User||s().model("User",n),u=o}};