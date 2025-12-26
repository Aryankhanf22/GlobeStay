const mongoose= require("mongoose");
const Review = require("./review");
const User= require("./user")
const Schema=mongoose.Schema;
const listingschema= new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    image:{
        type:String,
        default:"https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v)=> v===""? "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v
    },
    price:{
        type:Number,
        default:1
    },
    location:{
        type:String,
    },
    country:{
        type:String,
        default:"pakistan"
    },
   reviews: [
  {
    type: Schema.Types.ObjectId,
    ref: "Review"
  }
],
owner:{
      type: Schema.Types.ObjectId,
    ref: "User"
}

})
listingschema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id : { $in : listing.reviews}});
    }})
const listing=mongoose.model("listing",listingschema);
module.exports=listing;