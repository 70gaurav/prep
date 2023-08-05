import mongoose from "mongoose";

const Connection = mongoose.connect("mongodb+srv://Gaurav:resume@cluster0.njuyjsw.mongodb.net/?retryWrites=true&w=majority" , {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

export default Connection