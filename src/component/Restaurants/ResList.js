import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import ResItem from '../ShareComponents/ResItem';
import Pagination from '../ShareComponents/Pagination';
import request from "../../api";
import Skeleton from "../Skeleton/HotelSkeleton";

function TourList () {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentpage] = useState(1);
  const page = searchParams.get('page');

  useEffect(() => {
    request.get(
      '/restaurant',
      {
        params: { 
          limit: 9,
          page: currentPage
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
  }, []);

  useEffect(() => {
    setCurrentpage(page ? page : 1);
  }, [page]);

  return (
    <div>
      <div className="row row-cols-1 row-cols-lg-3">
        {
          !loading
            ?
              <Skeleton number={6}/>
            :
              data?.length > 0
                &&
                data.map((item, index) => {
                  return <ResItem key={index} data={item}/>
                })
        }
      </div>
      <div className="text-center col-12 mt-4">
        {
          data.length > 0
            &&
              <Pagination pageCount={pageCount} page={currentPage ? (currentPage*1-1) : 1} itemsPerPage={9}/>
        }
        
      </div>
    </div>
  )
}

export default TourList;