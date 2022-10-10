import { useState, useEffect } from "react";
import { citiesList } from "../utils";
import { Button } from "@mui/material";
import { Search } from '@mui/icons-material';
import { useSearchParams } from "react-router-dom";
import request from "../api";
import Skeleton from "../component/Skeleton/HotelSkeleton";
import Pagination from '../component/ShareComponents/Pagination';
import NoDataMatchedImg from "../images/NoDataMatched.png";

function SearchPage () {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentpage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    let place = searchParams.get('place');
    let city = searchParams.get('city');
    let page = searchParams.get('page');
    page = page ? page : 1;

    useEffect(() => {
        setLoading(false);

        request.get(
            '/hotel',
            {
              params: { 
                ...(
                    place
                        ? 
                            {search:JSON.stringify(["title",place])} 
                        : 
                            {}
                ),
                ...(
                    city
                        ? 
                            {filter:JSON.stringify({"city":city.replace("%20"," ")})} 
                        : 
                            {}
                ),
                limit: 12,
                page: page
              }
            })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data);
                    setLoading(true);
                    setData(res.data);
                    setPageCount(res.headers['x-total-page']);
                } else {
                    
                }
            })
            .catch(() => {
                console.log("request failed");
        })
    }, [page, place, city]);

    const handleSelectChange = () => {

    }

    return  (
        <div className="container mb-5 text-center" style={{paddingTop:'10rem'}}>
            <div className='d-inline-flex m-auto`'>
                <input style={{height:'4rem', width:'18rem'}} className="px-4" placeholder='Ex:location, hotel'/>
                <div className='bg-white pe-2 border-start'>
                    <select 
                        style={{height:'4rem', width:'18rem'}} 
                        className="px-4"
                        onChange={handleSelectChange}
                    >
                        {
                            citiesList.map((item, index) => {
                                return <option key={index} value={item.value}>{item.label}</option>
                            })
                        }
                    </select>
                </div>
                <Button 
                    variant="contained" 
                    startIcon={<Search />}
                    className="px-4 search-box"
                    sx={{backgroundColor:'#f85a59', borderRadius:0, height:'4rem'}}
                >
                    Search
                </Button>
            </div>
            <div id="listData" className="row row-cols-1 row-cols-lg-4 mt-5">
                {
                    !loading
                        ?
                            <Skeleton number={8}/>
                        :
                            data?.length > 0
                                ?
                                    data.map((item, index) => {
                                        // return <HotelItem key={index} data={item}/>
                                    })
                                :
                                    <div className='text-center w-100'>
                                        <img className='w-50 m-auto mb-4' src={NoDataMatchedImg} />
                                        <h3 className='color-6a'>Không tìm thấy kết quả phù hợp</h3>
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

export default SearchPage;