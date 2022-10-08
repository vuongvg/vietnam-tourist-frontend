import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import Pagination from '../ShareComponents/Pagination';
import HotelItem from '../ShareComponents/HotelItem';
import request from "../../api";
import Skeleton from "../Skeleton/HotelSkeleton";
import NoDataMatchedImg from "../../images/NoDataMatched.png";

function HotelList () {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentpage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  let page = searchParams.get('page');
  page = page ? page : 1;
  let range = searchParams.get('range');
  let filter = searchParams.get('filter');

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
          page: page
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
  }, [page,range,filter]);

  return (
    <div>
      <div id="listData" className="row row-cols-1 row-cols-lg-3">
        {
          !loading
            ?
              <Skeleton number={6}/>
            :
              data?.length > 0
                ?
                  data.map((item, index) => {
                    return <HotelItem key={index} data={item}/>
                  })
                :
                  <div className='text-center w-100'>
                    <img className='w-50 m-auto mb-4' src={NoDataMatchedImg} />
                    <h3 className='color-6a'>Không tìm thấy địa điểm</h3>
                    <h3 className='color-6a'>phù hợp với yêu cầu</h3>
                  </div>
        }
      </div>
      <div className="text-center col-12 mt-4">
        {
          data?.length > 0
            &&
              <Pagination pageCount={pageCount} page={page ? (page*1-1) : 1} itemsPerPage={9}/>
        }
      </div>
    </div>
  )
}

export default HotelList;