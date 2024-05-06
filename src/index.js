import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()












/* 
! Database connection Code
import express from 'express'
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on('error', (error) => {
            console.log('Error: ', error)
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log('App is Listening')
        })
    } catch (error) {
        console.log("Error: ", error)
        throw error
    }
})()
*/