import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import TourItem from '../ShareComponents/TourItem';
import Pagination from '../ShareComponents/Pagination';
import request from "../../api";
import Skeleton from "../Skeleton/HotelSkeleton";
import NoDataMatchedImg from "../../images/NoDataMatched.png";

function TourList () {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageCount, setPageCount] = useState(0);
  let page = searchParams.get('page');
  let range = searchParams.get('range');
  let filter = searchParams.get('filter');
  page = page ? page : 1;

  useEffect(() => {
    if (range) range = range.split("-");
    if (filter) filter = filter.split("-");
    setLoading(false);

    request.get(
      '/tour',
      {
        params: { 
          ...(
            range && range[1] &&range[2]
              ?
                {range:JSON.stringify(["price",range[1],range[2]])}
              :
                {}
          ),
          // ...(
          //   filter && filter[1] !== ''
          //     ? 
          //       {filter:JSON.stringify({"city":filter[1].replace("+"," ")})} 
          //     : 
          //       {}
          // ),
          limit: 12,
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
  }, [page, filter, range]);

  return (
    <div>
      <div id="listData"  className="row row-cols-1 row-cols-lg-3">
        {
          !loading
            ?
              <Skeleton number={6}/>
            :
              data?.length > 0
                ?
                  data.map((item, index) => {
                    return <TourItem key={index} data={item}/>
                  })
                :
                  <div className='text-center w-100'>
                    <img className='w-50 m-auto mb-4' src={NoDataMatchedImg} />
                    <h3 className='color-6a'>No matching tour were found</h3>
                  </div>
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

export default TourList;