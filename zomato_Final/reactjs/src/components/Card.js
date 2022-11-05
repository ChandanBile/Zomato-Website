import Filters from "./Filters.js"

const Card = ({ title, img, description }) => {
    return (<>
        <div className="carding" onClick={Filters}>
            <img src={img} alt="" srcSet="" className="imgcard" />
            <div className="textcard">
                <h5 style={{ color: "#192F60" }}>{title}</h5>
                <p style={{ color: "#192F60" }}>{description}</p>
            </div>
        </div>
    </>)
}
export default Card