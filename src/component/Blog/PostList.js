import PostItem from "./PostItem";
import Pagination from "../ShareComponents/Pagination";

function PostList () {
    return (
        <div className="my-5" >
            <div className="row">
                {
                    Array(8).fill(0).map((item,idex) => {
                        return <PostItem />
                    })
                }
            </div>
            <div className="text-center col-12">
                <Pagination itemsPerPage={5}/>
            </div>
        </div>
    )
}

export default PostList;