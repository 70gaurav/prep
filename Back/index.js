import express from "express"
import cors from "cors"
import User from "./models/userSchema.js"
import Connection from "./models/index.js"


const app = express()
app.use(cors())
app.use(express.json())

app.get("/" , async (req , res) => {
    const user = await User.find()
    res.send(user)
})

app.post("/post" ,async (req , res) => {
    try{
        const {name , mail , number} = req.body
        const user = new User({name , mail , number})
        await user.save()
        console.log("data saved " , user)

    }

    catch{
        console.log("server error")
    }

   
})

app.delete("/user:id" , async (req , res) => {
    try{
        const {id} = req.params
        const deleteUser = await User.findUserByIdAndDelete(id)
        console.log("userDeleted" , deleteUser)
        res.json(deleteUser)
    }
    catch (error) {
        console.log("user not found " , error)
    }
})

Connection.then(() => {
    app.listen(3000 , () => {
    
        console.log("server started at 3000")
    })
})