const ResContact = ({ mydata }) => {
    return (
        <>
            <div className="container">
                <p>Phone Number</p>
                <p>+91 114004566</p>
                <h6><b> {(mydata) ? mydata[1] : <><span>Click on overview to get details</span></>}</b></h6>
                <p> {(mydata) ? mydata[4] : <><span>Click on overview to get details</span></>}</p>
            </div>
        </>
    )
}
export default ResContact