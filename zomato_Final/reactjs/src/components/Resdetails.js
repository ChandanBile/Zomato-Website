const ResDetails = ({ mydata }) => {
    return (
        <>
            <div className="container">
                <h5><b>About this place</b></h5>
                <h6><b>Cuisine</b></h6>
                <p>
                    {(mydata) ? mydata[2] : <><span>Click on overview to get details</span></>}
                </p>
                <h6><b>Average Cost</b></h6>
                <p>{(mydata) ? ` Rs. ${mydata[3]} per person` : <><span>Click on overview to get details</span></>}</p>
            </div>
        </>
    )
}
export default ResDetails

