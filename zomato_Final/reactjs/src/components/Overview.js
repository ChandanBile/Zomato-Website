import { useState } from "react";
import Navbar from "./Navbar";
import ResDetails from "./Resdetails";
import ResContact from "./Rescontact"
import Popupmodal2 from "./Popupmodal2";
import { useLocation } from "react-router-dom";
const Overview = () => {
    const data = useLocation()
    const mydata = data.state
    const [details, setDetails] = useState(<ResDetails />)
    const [popupOrders, setPopupOrders] = useState(false)
    const openPopup = () => {
        setPopupOrders(true)
    }
    const closePopup = () => {
        setPopupOrders(false)
    }
    return (
        <>
            <Navbar />
            <img src="../assets/overview1.png" alt="" srcSet="" className="overviewImg " />
            <div className="container">
                <h3><b>{mydata[1]}</b></h3>
                <div className="overview d-flow-root">
                    <div className="d-inline-block">
                        <h6 className="order" onClick={() => { setDetails(<ResDetails mydata={mydata} />) }}><b>Overview</b> </h6>
                        <h6 className="order" onClick={() => { setDetails(<ResContact mydata={mydata} />) }}><b>Contact</b> </h6>
                    </div>
                    <button className="batn-red batn-borderless batn-lg" onClick={openPopup}>Place Online Order</button>
                </div>
            </div>
            <div>
                {details}
            </div>
            <Popupmodal2 popupOrders={popupOrders} closePopup={closePopup} openPopup={openPopup} mydata={mydata} />
        </>
    )
}
export default Overview