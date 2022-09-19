import BannerImg from '../../images/banner.png';
import { useState } from 'react';
import { Button } from '@mui/material';
import { Restaurant, Apartment, Place, Search } from '@mui/icons-material';

const currencies = [
    {
      value: 'HN',
      label: 'Hà Nội',
    },
    {
      value: 'TPHCM',
      label: 'TP. HCM',
    }
];

function Banner () {
    const [currency, setCurrency] = useState('');

    const handleChange = () => {

    }

    return (
        <>
            <div className='d-md-block d-none bg-cover bg-center bg-norepeat ratio ratio-21x9' style={{backgroundImage:`url(${BannerImg})`}}>
                <div className='position-absolute top-50 start-50 translate-middle w-auto h-auto text-white'>
                    <h1 className=''>Explore Amazing Vietnam</h1>
                    <div className='my-3' style={{opacity:.6}}>
                        <h4>Find great places to stay, eat, or visit from local experts</h4>
                    </div>
                    <div className='d-flex'>
                        <input style={{height:'4rem', width:'18rem'}} className="px-4" placeholder='Ex:food, location, hotel'/>
                        <div className='bg-white pe-2 border-start'>
                            <select style={{height:'4rem', width:'18rem'}} className="px-4">
                                {
                                    currencies.map((item, index) => {
                                        return <option value={item.value}>{item.label}</option>
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
                    <div className='my-3' style={{opacity:.6}}>
                        <h4>Or browse the highlights </h4>
                    </div>
                    <div className='d-flex gap-3 categories-buttons'>
                        <Button 
                            variant="contained" 
                            startIcon={<Restaurant />}
                            size="large"
                            sx={{backgroundColor:'white', color:'#888', borderRadius:0}}
                        >
                            Restaurants
                        </Button>
                        <Button 
                            variant="contained" 
                            startIcon={<Apartment />}
                            size="large"
                            sx={{backgroundColor:'white', color:'#888', borderRadius:0}}
                        >
                            Hotels
                        </Button>
                        <Button 
                            variant="contained" 
                            startIcon={<Place />}
                            size="large"
                            sx={{backgroundColor:'white', color:'#888', borderRadius:0}}
                        >
                            Locations
                        </Button>
                    </div>
                </div>
            </div>
            <div className='col-12 d-md-none text-white px-4' style={{backgroundImage:`url(${BannerImg})`, padding:"5rem 0"}}>
                <h1>Explore Amazing Vietnam</h1>
                <div className='my-3' style={{opacity:.6}}>
                    <h4>Find great places to stay, eat, or visit from local experts</h4>
                </div>
                <div>
                    <input style={{height:'4rem', width:'18rem'}} className="px-4 mb-3" placeholder='Ex:food, location, hotel'/>
                    <select style={{height:'4rem', width:'18rem'}} className="px-4 mb-3">
                        {
                            currencies.map((item, index) => {
                                return <option value={item.value}>{item.label}</option>
                            })
                        }
                    </select>
                    <div>
                        <Button 
                            variant="contained" 
                            startIcon={<Search />}
                            className="px-4 search-box"
                            sx={{backgroundColor:'#f85a59', borderRadius:0, height:'4rem'}}
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
                        <Button 
                            variant="contained" 
                            startIcon={<Restaurant />}
                            size="large"
                            sx={{backgroundColor:'white', color:'#888', borderRadius:0}}
                        >
                            Restaurants
                        </Button>
                    </div>
                    <div className='mb-3'>
                        <Button 
                            variant="contained" 
                            startIcon={<Apartment />}
                            size="large"
                            sx={{backgroundColor:'white', color:'#888', borderRadius:0}}
                        >
                            Hotels
                        </Button>
                    </div>
                    <div className='mb-3'>
                        <Button 
                            variant="contained" 
                            startIcon={<Place />}
                            size="large"
                            sx={{backgroundColor:'white', color:'#888', borderRadius:0}}
                        >
                            Locations
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;