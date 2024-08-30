import mongoose from "mongoose"
import mongooseAggregatePaginatenpm from "mongoose-aggregate-paginate-v2"

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required :true
    },
    vedio:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"vedio"
    },
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})


export const Comment = mongoose.model("Commment",commentSchema)