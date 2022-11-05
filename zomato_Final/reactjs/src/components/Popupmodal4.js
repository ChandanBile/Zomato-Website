import Modal from "react-modal"
import Button from "./Button"
import { Link } from "react-router-dom"
const Popupmodal4 = ({ popupPay, closePopupPay }) => {
    return (
        <Modal
            isOpen={popupPay}
            className="datapopup">
            <div style={{ height: "700px", borderRadius: "10px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <h3 className="xcross col-10">Choose Payment Method</h3>
                    <i className="fa-solid fa-xmark xcross col-1" onClick={closePopupPay}></i>
                </div>
                <div style={{ margin: "10px" }}>
                    <div className="PayBox container">
                        <div className="paymenttype">
                            Credit/debit Card
                        </div>
                        <div className="paymenttype">
                            Wallets
                        </div>
                        <div className="paymenttype">
                            UPI
                        </div>
                        <div className="paymenttype">
                            Credit
                        </div>
                        <div className="paymenttype">
                            Netbanking
                        </div>
                        <div className="paymenttype">
                            Food Cards
                        </div>
                    </div>
                    <div className="Paycard">
                        <div style={{ textAlign: "left", width: "auto" }}><b>Add new card</b></div>
                        <div><p>WE ACCEPT <img src="../assets/Payment_Options.jpg" alt="" srcset="" style={{ width: "50%", height: "auto" }} /></p>
                        </div>
                        <div className="container">
                            <div><input type="text" name="" id="" placeholder="Card Number" className="paymenttype" /></div>
                            <div style={{ display: "inline-block" }}><input type="text" name="" id="" placeholder="Valid through(MM/YY)" className="paymenttype" /></div>
                            <div style={{ display: "inline-block" }}><input type="text" name="" id="" placeholder="CVV" className="paymenttype" /></div>
                            <div><input type="text" name="" id="" placeholder="Name on Card" className="paymenttype" /></div>
                        </div>
                    </div>
                </div>
                <Link to={"/"}>
                    <Button css={"batn-red batn-md"} text={"PROCEED"} />
                </Link>
            </div>
        </Modal>
    )
}
export default Popupmodal4