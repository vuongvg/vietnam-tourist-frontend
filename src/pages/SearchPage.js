import { useState, useEffect } from "react";
import { citiesList } from "../utils";
import { Button } from "@mui/material";
import { Search } from '@mui/icons-material';
import { useSearchParams } from "react-router-dom";
import request from "../api";
import Skeleton from "../component/Skeleton/HotelSkeleton";
import Pagination from '../component/ShareComponents/Pagination';
import NoDataMatchedImg from "../images/NoDataMatched.png";
import HotelItem from "../component/ShareComponents/HotelItem";
import SideBar from "../component/DetailBlog/SideBar";

function SearchPage () {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [pageCount, setPageCount] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    let keyword = searchParams.get('keyword');
    let page = searchParams.get('page');
    page = page ? page : 1;

    useEffect(() => {
        setLoading(false);

        if (keyword) {
            request.get(
                '/search',
                {
                    params: { 
                        ...(
                            keyword
                                ? 
                                    { keyword:keyword } 
                                : 
                                    {}
                        ),
                        limit: 12,
                        page: page
                    }
                })
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
        } else {
            setLoading(true);
        }
    }, [page,keyword]);

    const handleInputChange = (e) => {
        let iptValue = e.target.value;
        setInputValue(iptValue);
    };

    const handleSearch = () => {
        setSearchParams({ 
            ...(inputValue ? {keyword:inputValue} : {})
        });
    };

    return  (
        <div className="container mb-5 text-center" style={{paddingTop:'10rem'}}>
            <div className="row">
                <SideBar />
                <div className="col-12 col-md-9">
                    <div className='d-inline-flex shadow-lg'>
                        <input 
                            style={{height:'3rem', width:'25rem'}} 
                            className="px-4" 
                            placeholder='Ex: location, hotel, city,...'
                            onChange={handleInputChange}
                        />
                        <Button 
                            variant="contained" 
                            startIcon={<Search />}
                            className="px-4 search-box"
                            sx={{backgroundColor:'#f85a59', borderRadius:0, height:'3rem'}}
                            onClick={handleSearch}
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
                                                return <HotelItem key={index} data={item}/>
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
            </div>
        </div>
    )
}

export default SearchPage;