import { useState } from "react";
import dayjs from "dayjs";
import { MobileDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { InputLabel, MenuItem, FormControl, Select, TextField, Button, Checkbox } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';

function Filter () {
  const [value, setValue] = useState(dayjs('2022-09-20T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [age, setAge] = useState('');

  const handleChangeSelect = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="border p-3 bg-light">
        <h5>FIND CITY</h5>
        <FormControl fullWidth className="mt-4">
          <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Age"
            onChange={handleChangeSelect}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            label="Date from"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            className="mt-4 w-100"
            renderInput={(params) => <TextField {...params} />}
          />
          <MobileDatePicker
            label="Date to"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            className="mt-4 w-100" 
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <div>
          <Button variant="contained" fontSize="large" className="w-100 text-white mt-4 py-2" sx={{backgroundColor:'#f85a59'}}>Search</Button>
        </div>
      </div>
      <div className="border p-3 bg-light mt-5">
        <h5>STAR RATING</h5>
        <div className="d-flex g-2 align-items-center">
          <Checkbox/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
        </div>
        <div className="d-flex g-2 align-items-center">
          <Checkbox/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
        </div>
        <div className="d-flex g-2 align-items-center">
          <Checkbox/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
        </div>
        <div className="d-flex g-2 align-items-center">
          <Checkbox/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
        </div>
        <div className="d-flex g-2 align-items-center">
          <Checkbox/>
          <Star className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
          <StarBorder className="color-f85a59" sx={{fontSize:15}}/>
        </div>
      </div>
    </>
    
  )
}

export default Filter;