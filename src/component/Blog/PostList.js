import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import BlogItem from "../ShareComponents/BlogItem";
import Pagination from "../ShareComponents/Pagination";
import request from "../../api";
import Skeleton from "../Skeleton/TipsAndArticlesSkeleton";

function PostList () {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentpage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    let page = searchParams.get('page');
    page = page ? page : 1;

    useEffect(() => {
        setLoading(false);

        request.get(
          '/blog',
          {
            params: { 
                limit: 12,
                page: page ? page : 1
            }
          }
        )
        .then((res) => {
            if (res.status === 200) {
              setLoading(true);
              setData(res.data);
              setPageCount(res.headers['x-total-page']);
            } else {
                
            }
        })
        .catch(() => {
            console.log("request failed");
        })
    }, [page]);

    return (
        <div className="my-5" >
            <div className="row row-cols-1 row-cols-lg-4">
            {
                !loading
                    ?
                        <Skeleton number={8}/>
                    :
                        data?.length > 0
                            &&
                            data.map((item, index) => {
                                return <BlogItem key={index} data={item}/>
                            })
                }
            </div>
            <div className="text-center col-12 mt-4">
                {
                    data?.length > 0
                        &&
                            <Pagination pageCount={pageCount} page={page ? (page*1-1) : 1} itemsPerPage={12}/>
                }
            </div>
        </div>
    )
}

export default PostList;