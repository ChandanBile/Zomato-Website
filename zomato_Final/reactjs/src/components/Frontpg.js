import Herosection from './Herosection.js'
import Carddata from './Carddata'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Filters from './Filters.js'
import Overview from './Overview.js'

function Frontpg({ openPopup, setAddress, location, restaurantList, username }) {
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<>
                        <Herosection openPopup={openPopup} setAddress={setAddress} location={location} username={username} />
                        <Link to="/Filters">
                            <Carddata />
                        </Link>
                    </>} />
                    <Route path="/Filters" element={<Filters restaurantList={restaurantList} openPopup={openPopup}
                    />} />
                    <Route path='/Filters/Overview' element={<Overview />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Frontpg