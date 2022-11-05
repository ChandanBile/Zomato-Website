import RestaurantCard from "./RestaurantCard"
const RestaurantCardData = ({ ResCarddata, resOnClick }) => {
    return (
        ResCarddata && ResCarddata.map(data => {
            return (
                <RestaurantCard resOnClick={resOnClick} id={data.id} key={data.id} name={data.name} img={data.img} add={data.address} city={data.city} cuisine={data.cuisine} cost={data.cost} />
            )
        })
    )
}

export default RestaurantCardData
