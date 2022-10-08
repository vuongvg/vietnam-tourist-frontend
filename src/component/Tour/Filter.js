import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, Box, Slider } from '@mui/material';
import { displayPrice } from "../../utils";
import Select from "react-select";
import { citiesList, compareTwoValues } from "../../utils";

function Filter () {

  const [valueSlider, setValueSlider] = useState([0, 1000000]);
  const [city, setCity] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeSlider = (event, newValue) => {
    setValueSlider(newValue);
  };

  const handleSelectChange = (selectedOption) => {
    setCity(selectedOption.value);
  }

  const handleSearch = () => {
    let priceRange = compareTwoValues(valueSlider[0], valueSlider[1]);

    setSearchParams({ 
      ...(priceRange ? {range:`price-${priceRange[0]}-${priceRange[1]}`} : {}),
      ...(city ? {filter:`city-${city}`} : {}),
    });
  }

  return (
    <>
      <div className="border p-3 bg-light">
        <div className="fw-bold mb-3">Find City</div>
        <Select
          options={citiesList}
          onChange={handleSelectChange}
        />
        <div className="mt-4 mb-3 fw-bold">Price Range</div>
        <div className="px-2">
          <Box sx={{ width:'100%' }}>
            <Slider
              getAriaLabel={() => 'Price range'}
              value={valueSlider}
              onChange={handleChangeSlider}
              valueLabelDisplay="auto"
              valueLabelFormat={val => displayPrice(val)}
              // getAriaValueText={valuetext}
              min={0}
              max={5000000}
            />
          </Box>
        </div>
        <div className="d-flex justify-content-between fs-0d8">
          <div>0 VNĐ</div>
          <div>5.000.000 VNĐ</div>
        </div>
        <div>
          <Button variant="contained" fontSize="large" className="w-100 text-white mt-4 py-2" sx={{backgroundColor:'#f85a59'}} onClick={handleSearch}>Search</Button>
        </div>
      </div>
    </>
  )
}

export default Filter;