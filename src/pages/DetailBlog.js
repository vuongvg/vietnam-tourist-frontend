import Skeleton from "../component/Skeleton/DetailBlogSkeleton";
import SideBar from "../component/DetailBlog/SideBar";

function DetailBlog () {
    return (
        <div className="container mb-5">
            <div className="row">
                <SideBar />
                <div className="col-9">
                    <Skeleton />
                </div>
            </div>
        </div>
    )
}

export default DetailBlog;