import Skeleton from "../Skeleton/SideBarSkeleton";

function SideBar () {
    return (
        <div className="col-12 col-md-3">
            <div className="mb-4">
                <div className="ps-2" style={{borderLeft:'5px solid #f85a59'}}>
                    <h4>Bài viết nổi bật</h4>
                </div>
            </div>
            <Skeleton />
        </div>
    )
}

export default SideBar;