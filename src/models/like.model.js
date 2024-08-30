import mongoose, { Mongoose } from "mongoose";

const likeSchema = new mongoose.Schema({
    vedio:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Vedio'
    },
    comment:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    },
    tweet:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Tweet'
    },
    likedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }

},{timestamps:true})


export const Like = mongoose.model("Like",likeSchema)