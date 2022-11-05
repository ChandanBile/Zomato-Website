import Modal from "react-modal"
import Button from "./Button"
import { useState } from "react"
import axios from "axios"
const Popupmodal = ({ popup, closePopup, openLoginPopup, setUsername }) => {
    const [data, setData] = useState({
        Email: "",
        Password: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    const login = () => {
        axios.post("http://localhost:5000/login", data)
            .then(res => {
                if (res.data.message === "Login success") {
                    alert("Login Successful")
                    setUsername(res.data.user.username)
                    closePopup()
                } else if (res.data.message === "user not found") {
                    alert("user not found")
                    window.location.reload()
                } else {
                    alert("Invalid Password")
                }
            })
    }
    const myFunction = (id) => {
        var x = document.getElementById(id);
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    return (
        <><Modal
            isOpen={popup}
            className="loginPopup"
            ariaHideApp={false}
            style={{ maxWidth: "400px", height: "311px", margin: "5% auto" }}>
            <div className='' style={{ opacity: "1", backgroundColor: "white", height: "310px", borderRadius: "10px" }}>
                <div className="d-flex align-items-center">
                    <h3 className="xcross col-10">Login </h3>
                    <i className="fa-solid fa-xmark xcross col-2" onClick={closePopup}></i>
                </div>
                <div className='container' style={{ margin: "10px" }}>
                    <h6>Email</h6>
                    <div><input type="text" name="Email" id="" placeholder='Email-Id' onChange={(e) => e ? handleChange(e) : <></>} value={data.Email} /></div>
                    <h6>Password</h6>
                    <div><input type="password" name="Password" id="pass" placeholder='Password' onChange={(e) => e ? handleChange(e) : <></>} value={data.Password} />
                        <input className="m-1" type="checkbox" name="" id="" onClick={() => myFunction("pass")} /><span>Show</span>
                    </div>
                    <div className="d-flex flex-column ">
                        <Button css={"batn-red batn-md mt-1"} text={"Login"} openPopup={login} />
                        <h6 className="p-1">OR</h6>
                        <Button css={"batn-red batn-md "} text={"Sign-Up"} openPopup={openLoginPopup} />
                    </div>
                </div>
            </div>
        </Modal>
        </>
    )
}
export default Popupmodal