import express from "express"
import bodyParser from "body-parser"
import Dbconnect from "./configs/dbconnect.js"
import cors from "cors"
import register from "./routes/userRegister.js  "
import login from "./routes/userLogin.js"
const exp = express()
const port = 5000

Dbconnect()
exp.use(cors())
exp.use(bodyParser.json())            //middleware
exp.use(bodyParser.urlencoded({ extended: true }))

exp.use("/login", login)
exp.use("/register", register)
exp.listen(port, (err) => {
    if (err) throw err
    console.log(`server is running at http://localhost:${port}`)
})