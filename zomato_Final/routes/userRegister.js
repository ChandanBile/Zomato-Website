// import bcrypt from "bcrypt"
import { Router } from "express"
import Users from "../modals/Users.js"

const router = Router()
router.post('/', async (req, res) => {
    try {
        const { Username, Email, Password } = req.body
        const User = await Users.findOne({ email: Email })
        if (User) {
            res.status(200).send({ Message: "User already exists" })
        }
        else {
            // var salt = bcrypt.genSaltSync(10);           
            // const encPass = bcrypt.hashSync(Password, salt);
            const newUserData = new Users({ username: Username, email: Email, password: Password })
            await newUserData.save()
            res.status(200).send({ Message: "New User created" })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send("database error")
    }
})
export default router
