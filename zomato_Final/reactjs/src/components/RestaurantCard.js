const RestaurantCard = ({ id, name, img, add, city, cuisine, cost, resOnClick }) => {
    return (
        <>
            <div className="container textColor filterData cardId" style={{ maxWidth: "500px" }} id={id} onClick={() => resOnClick(id, name, cuisine, cost, add)}>
                <div className="topCard d-flex" >
                    <img src={img} alt="" srcSet="" className="filterImg" />
                    <div className="resDetails">
                        <h4>
                            {name}
                        </h4>
                        <h1>{city}</h1>
                        <p>{add}</p>
                    </div>
                </div>
                <div style={{ padding: "10px" }}>
                    <p>CUISINES : {cuisine}</p>
                    <p>COST : {cost}</p>
                </div>
            </div>
        </>
    )
}
export default RestaurantCard