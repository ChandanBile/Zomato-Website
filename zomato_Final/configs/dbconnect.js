import mongoose from "mongoose";

const uri = "mongodb+srv://chandan100:VKBtULrK6SZkjoc6@clusternew1.wkoeoon.mongodb.net/test"
const Dbconnect = async () => {
    try {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("database connected successfully")
            }
        })
    } catch (error) {
        console.log(error)
    }
}
export default Dbconnect