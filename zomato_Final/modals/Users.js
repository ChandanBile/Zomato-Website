import mongoose from "mongoose";

const Users = new mongoose.Schema({
    username: String,
    password: String,
    email: {
        type: String,
        lowercase: true
    },
    registeredDate: {
        type: Date,
        default: Date.now
    }
})
export default mongoose.model("users", Users)