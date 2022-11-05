import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "./Button"

const Herosection = ({ openPopup, setAddress, location, username }) => {
    const filteredRes = (location && location.map(restaurant => {
        return restaurant
    }))
    const [showlist, setShowList] = useState(true)
    let addressList = (null)
    let searchAddData = (id) => {
        if (id) {
            let clickedAdd = filteredRes.filter((list) => {
                if (list.id.toString() === id) {
                    return (list.address)
                }
                else {
                    return <></>
                }
            })
            document.getElementById("searchAdd").value = clickedAdd[0].address
            setShowList(false)
        }
        else {
            return null
        }
    }
    if (filteredRes) {
        addressList = (filteredRes.map(lists => (<li className="li" id={lists.id} key={lists.id} onClick={(e) => (e) ? searchAddData(e.target.id) : <></>}>
            {lists.address}</li>)))
    }
    
    return (
        <>
            <div className="Container">
                {(username) ?
                    <>
                        <div className="container" style={{ textAlign: "end" }}>
                            <h4 >Welcome to Zomator, {username}</h4>
                            <Link to={"/"} style={{ textDecoration: "none" }}>
                                <button type="submit" className="batn-sm batn-borderless" onClick="window.location.reload()">Logout</button>
                            </Link>

                        </div>
                    </>
                    :
                    <div className="container" style={{ textAlign: "end" }}>
                        <Button text="Login" css="batn batn-sm batn-borderless" openPopup={openPopup} />
                        <Button text="Create an account" css="batn batn-lg batn-border" openPopup={openPopup} />
                    </div>
                }
                <br />
                <div className="container" style={{ textAlign: "center" }}>
                    <div className="container logoo">
                        <h1><b>e!</b></h1>
                    </div>
                    <br />
                    <h1>Find the best restaurants, cafés, and bars</h1>
                    <div className="d-lg-flex d-md-flex d-sm-inline-block d-inline-block" style={{ justifyContent: "center", alignItems: "top" }}>

                        <div style={{ display: "inline-block", marginRight: "2px" }}>
                            <input className="textareas" style={{ borderRadius: "5px" }} id="searchAdd" type="text" placeholder="Please type a location" onChange={(event) => { if (event.target.value) { setAddress(event.target.value); setShowList(true) } }} />
                            {(addressList && showlist) ? <><div>{addressList}</div></> : <></>}</div>
                        <div className="newTextarea" style={{ borderRadius: "5px" }}>
                            <i className="fa-solid fa-magnifying-glass" ></i>
                            <input className="textareas" type="text" style={{ width: "167px", borderRadius: "5px" }} placeholder="Search for restaurants" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginLeft: "39px", color: "#192F60" }}>
                <h2>Quick Searches</h2>
                <p>Discover restaurants by type of meal</p>
            </div>
        </>
    )
}
export default Herosection