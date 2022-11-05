import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import RestaurantCardData from "./RestaurantCardData"

function Filters({ restaurantList, openPopup }) {

    const [filterbyLocationList, setlocationList] = useState(restaurantList)
    let list = []
    const filterbyLocation = (cityF) => {
        if (cityF) {
            list = restaurantList.filter(data => data.city === cityF)
            setlocationList(list)
        }
        else {
            setlocationList(restaurantList)
        }
    }
    let data = []
    const resOnClick = (id, name, cuisine, cost, add) => {
        (id) ? data.push(id, name, cuisine, cost, add) : <></>
    }

    return (
        <>
            <Navbar openPopup={openPopup} />
            <h1 className="container mt-3"><b style={{ color: "#192F60" }}>Breakfast Places</b></h1>
            <div className="container d-flex flex-lg-row flex-md-row flex-sm-column flex-column">
                <div className="" style={{ display: "inline-block" }}>
                    <div className="filterBox container textColor" style={{ margin: "0px 10px" }}>
                        <h5>Filters</h5>
                        <p>Select Location</p>

                        <select name="location" id="location" onChange={(e) => filterbyLocation(e.target.value)} defaultValue="default">
                            <option value="" >Select Location</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Jaipur">Jaipur</option>
                        </select>
                        <br />
                        <br />
                        <p>Cuisine</p>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Breakfast" id="bf" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Breakfast
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Lunch" id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Lunch
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Snacks" id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Snacks
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Dinner" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Dinner
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Drinks" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Drinks
                            </label>
                        </div>
                        <br />
                        <p>Cost For Two</p>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Less than ` 500
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                ` 500 to ` 1000
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                ` 1000 to ` 1500
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                ` 1500 to ` 2000
                            </label>
                        </div>
                        <div className="form-check textColor">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label " htmlFor="flexRadioDefault1">
                                ` 2000+
                            </label>
                        </div>
                        <br />
                        <p>Sort</p>
                        <div className="form-check textColor">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label " htmlFor="flexRadioDefault1">
                                Price low to high
                            </label>
                        </div>
                        <div className="form-check textColor">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label " htmlFor="flexRadioDefault1">
                                Price high to low
                            </label>
                        </div>
                    </div>
                </div>
                <Link to="/Filters/Overview" state={data}
                    className="col-lg-20 col-md-20 col-sm-10 col-10" style={{ display: "flex", flexDirection: "column" }}>
                    <RestaurantCardData ResCarddata={filterbyLocationList} resOnClick={resOnClick} />
                </Link>
            </div>
        </>
    )
}
export default Filters

