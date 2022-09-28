import BlogItem from "../ShareComponents/BlogItem";
import Pagination from "../ShareComponents/Pagination";
import request from "../../api";
import Skeleton from "../Skeleton/TipsAndArticlesSkeleton";

function PostList () {
    return (
        <div className="my-5" >
            <div className="row">
                {
                    Array(8).fill(0).map((item,index) => {
                        return <BlogItem key={index} data={item}/>
                    })
                }
            </div>
            {/* <div className="text-center col-12">
                <Pagination itemsPerPage={5}/>
            </div> */}
        </div>
    )
}

export default PostList;