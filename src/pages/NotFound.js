import { Link } from "react-router-dom";

function NotFound () {
    return (
        <div className="text-center" style={{padding: "7rem 0 5rem 0" }}>
            <div className="color-f85a59" style={{fontSize:'10rem'}}>404</div>
            <h3 className="mb-3">Page Not Found</h3>
            <h5>Back to<span> <Link to="/" className="color-f85a59 fw-bold">Home page</Link></span> to find more about</h5>
            <h5>Vietnamese famous places, hotels and restaurants...</h5>
        </div>
    )
}

export default NotFound;