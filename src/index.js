// require('dotenv').config({path:'./env'})

// import mongoose from "mongoose"
// import { DB_NAME } from "./constants"

import dotenv from 'dotenv'
import connectDB from "./db/index.js"
import express from "express"
dotenv.config({ path: './env' })
import { app } from './app.js'



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.error("Server failed to start")
    // process.exit(1)
})














//      ------ IST APPRROACH TO CONNECT DATABASE-------
// (async()=>{
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`)
//         } catch (error) {
//             console.error("Error: ",error)
//         }
// })()


// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.error("Error connecting to MongoDB: ", error)
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Error: ",error)
//     }
// })()