import { useState, useEffect } from "react";
import { citiesList } from "../utils";
import { Button } from "@mui/material";
import { Search } from '@mui/icons-material';

function SearchPage () {

    useEffect(() => {

    }, []);

    const handleSelectChange = () => {

    }

    return  (
        <div className="container mb-5" style={{paddingTop:'10rem'}}>
            <div className='d-flex'>
                <input style={{height:'4rem', width:'18rem'}} className="px-4" placeholder='Ex:food, location, hotel'/>
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
        </div>
    )
}

export default SearchPage;