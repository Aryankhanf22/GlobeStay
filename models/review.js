const mongoose= require("mongoose");
const schema= mongoose.Schema;
const reviewschema= new schema({
comment:{
    type: String,
    required: true
},
rating:{
    type: Number,
    min:0,
    max:5
},
createdate:{
    type: Date,
    default: Date.now()
},
    author:{ 
     type: schema.Types.ObjectId,
    ref: "User"
}
})
module.exports= mongoose.model("Review",reviewschema)