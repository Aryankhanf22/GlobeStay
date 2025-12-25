const mongoose= require("mongoose");
const simplelisting= require("./data.js")
const listing=require("../models/listing.js")
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/GlobeStay")
}
main().then((res)=>{
    console.log("database connect sucessful")
})
.catch((err)=>{
    console.log(err);
})
const insert= async ()=>{
await listing.deleteMany({})
simplelisting.data=simplelisting.data.map((obj) =>({...obj , owner:"694aac04be7bc7f351beb83d"}))
await listing.insertMany(simplelisting.data)
console.log("data saved")
}
insert();
    
