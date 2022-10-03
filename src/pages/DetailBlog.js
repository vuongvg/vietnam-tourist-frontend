import Skeleton from "../component/Skeleton/DetailBlogSkeleton";
import SideBar from "../component/DetailBlog/SideBar";
import DetailContent from "../component/DetailBlog/DetailContent";

function DetailBlog () {
    return (
        <div className="container mb-5" style={{paddingTop:'8rem'}}>
            <div className="row">
                <SideBar />
                <div className="col-9">
                    <DetailContent />
                </div>
            </div>
        </div>
    )
}

export default DetailBlog;