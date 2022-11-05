import React, { useState } from 'react'
import Modal from "react-modal"
import Button from './Button'
import axios from "axios"
const SignUpModal = ({ popup, closeLoginPopup }) => {
    const [data, setData] = useState({
        Username: "",
        Email: "",
        Password: "",
        Repassword: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    const register = () => {
        const { Username, Password, Email, Repassword } = data
        if (Username && Email && Password && (Password === Repassword)) {
            axios.post("http://localhost:5000/register", data)
            alert("New User Registration Successful")
            window.location.reload()
        } else {
            alert("invalid Data filled")
        }
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
        <>
            <Modal
                isOpen={popup}
                className="loginPopup"
                ariaHideApp={false}>
                <div className='' style={{ opacity: "1", backgroundColor: "white", height: "380px", borderRadius: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h3 className="xcross col-10">User Registration</h3>
                        <i className="fa-solid fa-xmark xcross col-2" onClick={closeLoginPopup}></i>
                    </div>
                    <div className='container' style={{ margin: "10px" }}>
                        <h6>Username</h6>
                        <div><input type="text" name="Username" id="" placeholder='Username' onChange={(e) => e ? handleChange(e) : <></>} value={data.Username} /></div>
                        <h6>Email-id</h6>
                        <div><input type="text" name="Email" id="" placeholder='Email-id' onChange={(e) => e ? handleChange(e) : <></>} value={data.Email} /></div>
                        <h6>Password</h6>
                        <div><input type="password" name="Password" id="password" placeholder='Password' onChange={(e) => e ? handleChange(e) : <></>} value={data.Password} />
                            <input className="m-1" type="checkbox" name="" id="" onClick={() => myFunction("password")} /><span>Show</span>
                        </div>
                        <h6>Confirm Password</h6>
                        <div><input type="password" name="Repassword" id="repassword" placeholder='Confirm Password' onChange={(e) => e ? handleChange(e) : <></>} value={data.Repassword} />
                            <input className="m-1" type="checkbox" name="" id="" onClick={() => myFunction("repassword")} /><span>Show</span>
                        </div>
                        {(data.Repassword && (data.Password !== data.Repassword)) ? <><p>Password mismatch</p></> : (data.Repassword) ? <><p>Password matched</p></> : <></>}
                        <div className='d-flex mt-1'>
                            <Button css={"batn-red batn-md"} text={"Sign-Up"} openPopup={register} />
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default SignUpModal
