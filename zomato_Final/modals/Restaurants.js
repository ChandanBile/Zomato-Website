import mongoose from "mongoose";

const Restaurant = new mongoose.Schema({
    id: String,
    name: String,
    address: String,
    city: String,
    image: String,
    cuisine: String,
    cost: String,
    email: {
        type: String,
        lowercase: true
    },
    registeredDate: {
        type: Date,
        default: Date.now
    }
})
export default mongoose.model("Restaurants", Restaurant)