import mongoose from "mongoose"
import mongooseAggregatePaginatenpm from "mongoose-aggregate-paginate-v2"

const vedioSchema = new mongoose.Schema({
    vediofile:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})

vedioSchema.plugin(mongooseAggregatePaginatenpm)


export const Vedio = mongoose.model("Vedio",vedioSchema)