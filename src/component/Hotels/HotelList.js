import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import Pagination from '../ShareComponents/Pagination';
import HotelItem from '../ShareComponents/HotelItem';
import request from "../../api";
import Skeleton from "../Skeleton/HotelSkeleton";

function HotelList () {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentpage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const page = searchParams.get('page');
  let range = searchParams.get('range');
  let filter =  searchParams.get('filter');

  useEffect(() => {
    if (range) range = range.split("-");
    if (filter) filter = filter.split("-");
    setLoading(false);

    request.get(
      '/hotel',
      {
        params: { 
          ...(
            range && range[1] &&range[2]
              ? 
                {range:JSON.stringify(["evaluate",range[1],range[2]])} 
              : 
                {}
          ),
          ...(
            filter && filter[1] !== ''
              ? 
                {filter:JSON.stringify({"city":filter[1].replace("+"," ")})} 
              : 
                {}
          ),
          limit: 9,
          page: page ? page : 1
        }
      }
    )
    .then((res) => {
      if (res.status === 200) {
        setLoading(true);
        if (res.data !== data) {
          setData(res.data);
        }
        setPageCount(res.headers['x-total-page']);
      } else {
          
      }
    })
    .catch(() => {
        console.log("request failed");
    })
  }, [page,range]);

  // useEffect(() => {
  //   setCurrentpage(page ? page : 1);
  // }, [page]);

  return (
    <div>
      <div id="listData" className="row row-cols-1 row-cols-lg-3">
        {
          !loading
            ?
              <Skeleton number={6}/>
            :
              data?.length > 0
                &&
                data.map((item, index) => {
                  return <HotelItem key={index} data={item}/>
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

export default HotelList;