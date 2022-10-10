import BannerImg from '../../images/banner.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Restaurant, Apartment, Place, Search } from '@mui/icons-material';
import { citiesList } from '../../utils';
import { Link } from 'react-router-dom';

function Banner () {
    const [inputValue, setInputValue] = useState('');
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    const handleSelectChange = (e) => {
        let inputValue = e.target.value;
        setCity(inputValue);
    }

    const handleInputChange = (e) => {
        let selectValue = e.target.value;
        setInputValue(selectValue);
    }

    const handleSearch = () => {
        let querryParam = {
            0: inputValue ? ("place="+inputValue) : '',
            1: city ? ("city="+city) : ''
        }

        if (querryParam[0] && !querryParam[1]) {
            navigate(`/search?${querryParam[0]}`);
        } else if (querryParam[1] && !querryParam[0]) {
            navigate(`/search?${querryParam[1]}`);
        } else if (querryParam[0] && querryParam[1]) {
            navigate(`/search?${querryParam[0]}&${querryParam[1]}`);
        }
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
                            style={{height:'4rem', width:'18rem'}} 
                            className="px-4" 
                            placeholder='Ex:location, hotel'
                            onChange={handleInputChange}
                        />
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
                        style={{height:'4rem', width:'18rem'}} 
                        className="px-4 mb-3" 
                        placeholder='Ex:food, location, hotel'
                        onChange={handleInputChange}
                    />
                    <select 
                        style={{height:'4rem', width:'18rem'}} 
                        className="px-4 mb-3"
                        onChange={handleSelectChange}
                    >
                        {
                            citiesList.map((item, index) => {
                                return <option key={index} value={item.value}>{item.label}</option>
                            })
                        }
                    </select>
                    <div>
                        <Button 
                            variant="contained" 
                            startIcon={<Search />}
                            className="px-4 search-box"
                            sx={{backgroundColor:'#f85a59', borderRadius:0, height:'4rem'}}
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