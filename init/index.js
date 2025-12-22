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
await listing.insertMany(simplelisting.data)
console.log("data saved")
}
insert();
    
