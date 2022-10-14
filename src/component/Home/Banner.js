import BannerImg from '../../images/banner.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Restaurant, Apartment, Place, Search } from '@mui/icons-material';
import { citiesList } from '../../utils';
import { Link } from 'react-router-dom';

function Banner () {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        let inputValue = e.target.value;
        setInputValue(inputValue);
    }

    const handleSearch = () => {
        let searchKeyword = inputValue ? ("keyword="+inputValue) : '';

        navigate(`/search?${searchKeyword}`);
    }

    return (
        <>
            <div className='d-md-block d-none bg-cover bg-center bg-norepeat ratio ratio-21x9' style={{backgroundImage:`url(${BannerImg})`}}>
                <div className='position-absolute top-50 start-50 translate-middle w-auto h-auto text-white'>
                    <h1 className=''>Explore Amazing Vietnam</h1>
                    <div className='my-3' style={{opacity:.6}}>
                        <h4>Find great places to stay, eat, or visit from local experts in vietnam</h4>
                    </div>
                    <div className='d-flex'>
                        <input 
                            style={{height:'3rem', width:'25rem'}} 
                            className="px-4" 
                            placeholder='Ex: location, hotel, city...'
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
                    <div className='my-3' style={{opacity:.6}}>
                        <h4>Or browse the highlights </h4>
                    </div>
                    <div className='d-flex gap-3 categories-buttons'>
                        <Link to="restaurant">
                            <Button 
                                variant="contained" 
                                startIcon={<Restaurant />}
                                size="large"
                                sx={{backgroundColor:'white', color:'#888', borderRadius:0}}
                                className="hover-color-ecb00a"
                            >
                                Restaurants
                            </Button>
                        </Link>
                        <Link to="hotel">
                            <Button 
                                variant="contained" 
                                startIcon={<Apartment />}
                                size="large"
                                sx={{backgroundColor:'white', color:'#888', borderRadius:0}}
                                className="hover-color-ecb00a"
                            >
                                Hotels
                            </Button>
                        </Link>
                        <Link to="tour">
                            <Button 
                                variant="contained" 
                                startIcon={<Place />}
                                size="large"
                                sx={{backgroundColor:'white', color:'#888', borderRadius:0}}
                                className="hover-color-ecb00a"
                            >
                                Locations
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='col-12 d-md-none text-white px-4' style={{backgroundImage:`url(${BannerImg})`, padding:"5rem 0"}}>
                <h1>Explore Amazing Vietnam</h1>
                <div className='my-3' style={{opacity:.6}}>
                    <h4>Find great places to stay, eat, or visit from local experts</h4>
                </div>
                <div>
                    <input 
                        style={{height:'3rem', width:'100%'}} 
                        className="px-4 mb-3" 
                        placeholder='Ex: location, hotel, city,...'
                        onChange={handleInputChange}
                    />
                    <div>
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
                    
                </div>
                <div className='my-3' style={{opacity:.6}}>
                    <h4>Or browse the highlights </h4>
                </div>
                <div className='categories-buttons'>
                    <div className='mb-3'>
                        <Link to="restaurant">
                            <Button 
                                variant="contained" 
                                startIcon={<Restaurant />}
                                size="large"
                                sx={{backgroundColor:'white', color:'#888', borderRadius:0}}
                                className="hover-color-ecb00a"
                            >
                                Restaurants
                            </Button>
                        </Link>
                    </div>
                    <div className='mb-3'>
                        <Link to="hotel">
                            <Button 
                                variant="contained" 
                                startIcon={<Apartment />}
                                size="large"
                                sx={{backgroundColor:'white', color:'#888', borderRadius:0}}
                                className="hover-color-ecb00a"
                            >
                                Hotels
                            </Button>
                        </Link>
                    </div>
                    <div className='mb-3'>
                        <Link to="tour">
                            <Button 
                                variant="contained" 
                                startIcon={<Place />}
                                size="large"
                                sx={{backgroundColor:'white', color:'#888', borderRadius:0}}
                                className="hover-color-ecb00a"
                            >
                                Locations
                            </Button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;