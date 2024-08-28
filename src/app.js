import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"


const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials : true
}))

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"20kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes 
import userRouter from "./routes/user.routes.js"
// console.log('user router', userRouter);

//routes decleration

// app.use("/users",userRouter)

//Standard prectice

app.use("/api/v1/users",userRouter)



export {app}