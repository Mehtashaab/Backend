import { asynchandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/apiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse} from "../utils/apiResponse.js";



const registerUser = asynchandler(async(req,res)=>{
    // res.status(200).json({

    //     message:"ok"
    // })
    //get user details from frontend
    //validation
    //check if user already exits
    //check for images,check for avtar
    //upload them to cloudinary
    //create user in db
    //remove password and refreshtoken field from response
    //check for user creation
    //return response

    const {fullname,email,username,password} = req.body
    console.log("email: ",email);

    // if (fullName === ""){
    //     throw new ApiError(400,"fullname is required")
    // }
    
    if(
        [email,fullname,username,password].some((field)=>
            filed?.trim() === "")
    ){
        throw new ApiError(400,"All filed are required")
    }

    const existeduser = User.findOne({
        $or:[{email},{username}]
    })
    if (existeduser){
        throw new ApiError(409,"User already exists")
    }
    const avatarLocalPath = req.files?.avatar[0]?.path
    if (!avatarLocalPath){
        throw new ApiError (400,"Avatar file is Required")
    }
    const coverImageLocalPath = req.files?.coverImage[0]?.path
    
    const avatar= await uploadOnCloudinary(avatarLocalPath)
    
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar){
        throw new ApiError(400,"Avatar is required")
    }

    const user = await User.create(
        {
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        password,
        email,
        username:username.toLowerCase()
        }
    )
    const reatedUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createdUser){
        throw new ApiError(500,"Something went wrong ")
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser,"User registerd succesfully")
    )


})

export {registerUser}