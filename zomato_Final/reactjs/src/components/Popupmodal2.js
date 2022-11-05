import Modal from "react-modal"
import Button from "./Button"
import Popupmodal3 from "./Popupmodal3"
import { useState } from "react"
import { useEffect } from "react"
const Popupmodal2 = ({ popupOrders, closePopup, openPopup, mydata }) => {
    const [popupData, setPopupData] = useState(false)
    const openPopupData = () => {
        setPopupData(true)
        closePopup()
    }
    const closePopupData = () => {
        setPopupData(false)
        openPopup()
    }
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const addNum1 = () => { setNum1(num1 + 1) }
    const subtractNum1 = () => {
        if (num1 === 0) { alert("minimum  quantity reched i.e. 0") }
        else { setNum1(num1 - 1) }
    }
    const addNum2 = () => { setNum2(num2 + 1) }
    const subtractNum2 = () => {
        if (num2 === 0) { alert("minimum  quantity reched i.e. 0") }
        else { setNum2(num2 - 1) }
    }
    const [money, setMoney] = useState(0)
    useEffect(() => {
        setMoney((num1 * 85) + (num2 * 100))
    }, [num1, num2])
    return (
        <>
            <Modal
                isOpen={popupOrders}
                className="orderpopup"
                ariaHideApp={false}>
                <div style={{ opacity: "1", backgroundColor: "white" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h3 className="xcross col-10">{mydata[1]}</h3>
                        <i className="fa-solid fa-xmark xcross col-2" onClick={closePopup}></i>
                    </div>
                    <div className="container d-flex flex-row" style={{ borderBottom: "2px solid #C7C7C7", margin: "5px" }}>
                        <div className="col-10">
                            <img src="../assets/Veg.png" alt="" srcSet="" width={"16px"} height={"16px"} />
                            <h5 style={{ maxWidth: "345px" }}>Gobi Manchurian</h5>
                            <h5 style={{ maxWidth: "345px" }}>Rs.85</h5>
                            <p style={{ maxWidth: "345px" }}>Deep-fried cauliflower florets tossed in pungent spices to form a flavorsome dry curry</p>
                        </div>
                        <div className="col-2" style={{ display: "inline-block", height: "92px", backgroundColor: "#192F60", float: "right" }}>
                            <div style={{ display: "block", margin: "auto", color: "#61B246", backgroundColor: "white", height: "29px", marginTop: "78px", textAlign: "center" }}>
                                <span style={{ margin: "5px", cursor: "pointer" }} onClick={() => subtractNum1()}>-</span>
                                <span>{num1}</span>
                                <span style={{ margin: "5px", cursor: "pointer" }} onClick={() => addNum1()}>+</span>
                            </div>
                        </div>
                    </div>
                    <div className="container d-flex flex-row" style={{ borderBottom: "2px solid #C7C7C7", margin: "5px" }}>
                        <div className="col-10">
                            <img src="../assets/Veg.png" alt="" srcSet="" width={"16px"} height={"16px"} />
                            <h5 style={{ maxWidth: "345px" }}>Misal Pav</h5>
                            <h5 style={{ maxWidth: "345px" }}>Rs.100</h5>
                            <p style={{ maxWidth: "345px" }}>spicy mixture of different veggies along with buttury toasted bun</p>
                        </div>
                        <div className="col-2" style={{ display: "inline-block", height: "92px", backgroundColor: "#192F60", float: "right" }}>
                            <div id="misal" className="orderMenu" >
                                <span style={{ margin: "5px", cursor: "pointer" }} onClick={() => subtractNum2()}>-</span>
                                <span>{num2}</span>
                                <span style={{ margin: "5px", cursor: "pointer" }} onClick={() => addNum2()}>+</span>
                            </div>
                        </div>
                    </div>
                    <div className="container" id="misalParent" style={{ marginBottom: "auto" }}>
                        <h4 style={{ display: "inline-block" }}><b>Subtotal</b> <b>{money}</b></h4>
                        <Button css={"batn-red batn-md"} text={"Pay Now"} style={{ display: "inline-block" }} openPopup={openPopupData} />
                    </div>
                </div>
            </Modal>
            <Popupmodal3 popupData={popupData} closePopupData={closePopupData} openPopupData={openPopupData} />
        </>
    )
}
export default Popupmodal2