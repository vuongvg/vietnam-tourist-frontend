import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { MobileDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { InputLabel, MenuItem, FormControl, Select, TextField, Button, Checkbox, Box, Slider } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';
import { displayPrice } from "../../utils";

function Filter () {

  const [starRating, setStarRating] = useState(5);

  const [checked, setChecked] = useState([true, false, false, false, false]);

  const [valueSlider, setValueSlider] = useState([350000, 1000000]);

  // const handleChangeSlider = (event, newValue) => {
  //   setValueSlider(newValue);
  // };

  const [city, setCity] = useState('');

  const handleChangeSelect = (event) => {
    setCity(event.target.value);
  };

  // const handleSearch = () => {

  // }

  const handleCheckBox = (value,position,e) => {
    const a = e.currentTarget.checked;
    console.log(a, position);
    const updateChecked = checked.map((item, index) => 
      index === position ? !item : false
    );
    setChecked(updateChecked);
    setStarRating(value);
  }

  return (
    <>
      <div className="border p-3 bg-light">
        <h5>FIND CITY</h5>
        <FormControl fullWidth className="mt-2">
          <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={city}
            label="City"
            onChange={handleChangeSelect}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'HN'}>Ha Noi</MenuItem>
            <MenuItem value={'HCM'}>TP.HCM</MenuItem>
            <MenuItem value={"NTR"}>Nha Trang</MenuItem>
          </Select>
        </FormControl>
        <h5 className="mt-4">STAR RATING</h5>
        <div className="d-flex g-2 align-items-center">
          <Checkbox checked={checked[0]} onChange={e => handleCheckBox(5,0,e)}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
        </div>
        <div className="d-flex g-2 align-items-center">
          <Checkbox checked={checked[1]} onChange={e => handleCheckBox(4,1,e)}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
        </div>
        <div className="d-flex g-2 align-items-center">
          <Checkbox checked={checked[2]} onChange={e => handleCheckBox(3,2,e)}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
        </div>
        <div className="d-flex g-2 align-items-center">
          <Checkbox checked={checked[3]} onChange={e => handleCheckBox(2,3,e)}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
        </div>
        <div className="d-flex g-2 align-items-center">
          <Checkbox checked={checked[4]} onChange={e => handleCheckBox(1,4,e)}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
        </div>
        {/* <h5 className="mt-4">COST/NIGHT</h5>
        <div className="px-2">
          <Box sx={{ width:'100%' }}>
            <Slider
              getAriaLabel={() => 'Price range'}
              value={valueSlider}
              onChange={handleChangeSlider}
              valueLabelDisplay="auto"
              valueLabelFormat={val => displayPrice(val)}
              // getAriaValueText={valuetext}
              min={350000}
              max={5000000}
            />
          </Box>
        </div> */}
        <div>
          <Button variant="contained" fontSize="large" className="w-100 text-white mt-4 py-2" sx={{backgroundColor:'#f85a59'}}>Search</Button>
        </div>
      </div>
    </>
    
  )
}

export default Filter;