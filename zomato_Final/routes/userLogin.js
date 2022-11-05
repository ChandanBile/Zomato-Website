import { Router } from "express"
import Users from "../modals/Users.js"
// import bcrypt from "bcrypt"
const router = Router()

router.post("/", async (req, res) => {
    try {
        const { Email, Password } = req.body
        const User = await Users.findOne({ email: Email })
        if (User) {
            // const decryPass = bcrypt.compare(Password,User.password)       
            if (Password === User.password) {
                res.send({ message: "Login success", user: User })
            } else {
                res.send({ message: "Invalid Password" })
            }
        } else {
            res.send({ message: "user not found" })
        }
    } catch (error) {
        console.log(error)
    }
})
export default router
