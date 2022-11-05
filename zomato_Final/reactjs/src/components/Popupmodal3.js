import Modal from "react-modal"
import Button from "./Button"
import { useState } from "react"
import Popupmodal4 from "./Popupmodal4"

const Popupmodal3 = ({ popupData, closePopupData }) => {
    const [popupPay, setPopupPay] = useState(false)
    const openPopupPay = () => {
        setPopupPay(true)
    }
    const closePopupPay = () => {
        setPopupPay(false)
    }
    return (
        <>
            <Modal
                isOpen={popupData}
                className="datapopup">
                <div style={{ opacity: "1", backgroundColor: "white", height: "707px", borderRadius: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h3 className="xcross col-10">Mumbai</h3>
                        <i className="fa-solid fa-xmark xcross col-2" onClick={closePopupData}></i>
                    </div>
                    <div className="container" style={{ margin: "10px" }}>
                        <h6>Name</h6>
                        <div ><input type="text" name="" id="" placeholder="Enter your name" className="inputBox" /></div>
                        <h6>Mobile</h6>
                        <div><input type="text" name="" id="" placeholder="Enter mobile number" className="inputBox" /></div>
                        <h6>Address</h6>
                        <div><input type="text" name="" id="" placeholder="Enter your address" className="inputBox" style={{ height: "172px" }} /></div>
                    </div>
                    <Button css={"batn-red batn-md"} text={"PROCEED"} openPopup={openPopupPay} />
                </div>
            </Modal>
            <Popupmodal4 popupPay={popupPay} closePopupPay={closePopupPay} />
        </>
    )
}
export default Popupmodal3