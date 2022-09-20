import { Link } from "react-router-dom";

function PageBanner (props) {
    return (
        <>
            <div className='d-none d-md-block bg-cover bg-center bg-norepeat ratio ratio-21x9' style={{backgroundImage:`url(${props.image})`}}>
                <div className='position-absolute top-50 start-50 translate-middle w-auto h-auto text-white'>
                    <div className='d-flex gap-3 justify-content-center mb-3'>
                        <Link to='/' className='text-white'>Home</Link>
                        <div>{props.page}</div>
                    </div>
                    <div>
                        <h1 className='text-center fw-bold'>{props.page}</h1>
                    </div>
                </div>
            </div>
            <div className="d-md-none d-block py-5" style={{backgroundImage:`url(${props.image})`}}>
                <div className='d-flex gap-3 justify-content-center mb-3'>
                    <Link to='/' className='text-white'>Home</Link>
                    <div>{props.page}</div>
                </div>
                <div>
                    <h1 className='text-center fw-bold'>{props.page}</h1>
                </div>
            </div>
        </>
    )
}

export default PageBanner;