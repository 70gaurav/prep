import { Schema , model } from "mongoose";

const userSchema = new Schema({
    name : {
        type : "string" ,
        require : true
    },
    email : {
        type : "string" ,
        require : true
    },
    number : {
        type : "string" ,
        require : true
    },
})

const User = model("user" , userSchema)
export default User