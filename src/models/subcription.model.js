import mongoose from "mongoose";


const subcriptionSchema = new mongoose.Schema({
    subscriber :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    channel:{
        type:mongoose.Schema.Types.ObjectId,//one to whom subscriber is subscribing

        ref:"User"
    }
},{timestamps:true})



export const Subcription = mongoose.model("Subcription",subcriptionSchema)