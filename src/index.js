import dotenv from 'dotenv'

import connectDB from "./db/index.js";

dotenv.config({path: './.env'})


connectDB()




















// import express from "express"
// const app = express()

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI/{DB_NAME}}`)
//         app.listen((process.env.PORT),()=>{
//             console.log("app listen on a :",process.env.PORT)
//         })

//     } catch (error) {
//         console.log(error)
//         throw error
        
//     }
// })()