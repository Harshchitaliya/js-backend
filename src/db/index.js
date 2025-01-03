import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB =async ()=>{
    try {
       const connection =  await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       console.log(`\n mongoDB connect DB Host :${
        connection.connection.host}`)

    } catch (error) {
        console.log("Error:",error)
        process.exit(1)
    }
}

export default connectDB