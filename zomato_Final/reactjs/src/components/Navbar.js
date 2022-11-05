import Button from "./Button"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <div className="filterpgNav">
                <nav className="navbar navbar-danger " style={{ minWidth: "100%" }}>
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                        <div className="logooNav">
                            <h1>e!</h1>
                        </div>
                    </Link>
                    <div style={{ textAlign: "end", marginRight: "20px" }}>
                        <Button text="Login" css="batn batn-sm batn-borderless" />
                        <Button text="Create an account" css="batn batn-lg batn-border" />
                    </div>
                </nav>
            </div>
        </>
    )
}
Navbar()
export default Navbar
