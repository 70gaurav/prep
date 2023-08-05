import { Schema , model } from "mongoose";

const userSchema = new Schema({
    name : {
        type : "string",
        required : true
    },
    mail : {
        type : "string",
        required : true
    },
    number : {
        type : "string",
        required : true
    },
})

const Post  = model("post" , userSchema)

export default Post