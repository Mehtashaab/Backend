import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content:{
        type:String,
        rqeuired:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
},
{
    timestamps:true
})